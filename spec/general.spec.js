
const unitTestOnly = process.env.UNIT_ONLY;
if(unitTestOnly) return;

const assert = require('assert');
const purecloud = require("../dist/purecloud-api-node.js");

const clientId = process.env.PURECLOUD_CLIENT_ID;
const clientSecret = process.env.PURECLOUD_SECRET;
const environment = process.env.PURECLOUD_ENV;

describe('Environment variables', () => {
  it('should have PURECLOUD_CLIENT_ID and PURECLOUD_SECRET set', () => {
    assert(clientId);
    assert(clientSecret);
  });
});

function getSession() {
  let session = purecloud.PureCloudSession({
    strategy: 'client-credentials',
    clientId: clientId,
    clientSecret: clientSecret,
    environment: environment,
    proxy: process.env['http_proxy']
  });

  session.debugLog = function(message){
      try {
          var object = JSON.parse(message);
          if(object.error){
                console.log(object.error);
          }
      } catch (e) {

      }

  }

  return session;
}

describe('AuthorizationApi', () => {
  it('should return authorization roles', (done) => {
    let session = getSession();
    session.login().then(function(){
        const Auth = purecloud.AuthorizationApi(session);
        Auth.getRoles()
          .then((roles) => {
            assert(roles && roles.total > 0);
            done();
          })
          .catch(done.fail);
    });

  });
});

describe('OAuthApi', () => {
  it('should return oauth clients', (done) => {
    let session = getSession();
    session.login().then(function(){
        const Oauth = purecloud.OAuthApi(session);
        Oauth.getClients()
          .then((clients) => {
            assert(clients.total > 0);
            done();
          })
          .catch(done.fail);
    });
  });
});

describe('Use Case: Update user status', () => {
  it('should work', (done) => {

    const sharedSession = getSession();

    sharedSession.login().then(function(){

        const Users = purecloud.UsersApi(sharedSession);
        const Presence = purecloud.PresenceApi(sharedSession);

        const users = Users.getUsers();
        const presenceDefs = Presence.getPresencedefinitions(1, 100);
        const tag = 'purecloud'.toUpperCase();

        let i = 0;
        let userId;
        let defs;
        let nextPresence;
        Promise.all([users, presenceDefs])
          .then(([users, presenceDefs]) => {
            userId = users.entities[0].id;
            defs = presenceDefs.entities;
            return Presence.getUserIdPresencesSourceId(userId, tag);
          })
          .then(presence => {
            nextPresence = changePresence(presence);
            return Presence.patchUserIdPresencesSourceId(userId, tag, nextPresence);
          })
          .then(() => {
            return Presence.getUserIdPresencesSourceId(userId, tag);
          })
          .then(presence => {
            assert.deepEqual(
              presence.presenceDefinition.id,
              nextPresence.presenceDefinition.id);
            done();
          })
          .catch(done.fail);

        function changePresence(presence) {
          const oldStatus = defs
            .find(def => def.id === presence.presenceDefinition.id)
            .systemPresence;
          const newStatus = oldStatus === 'OFFLINE' || oldStatus === 'AVAILABLE'
            ? 'AWAY'
            : 'AVAILABLE';
          const id = defs
            .find(def => def.systemPresence.toUpperCase() === newStatus)
            .id;
          return {presenceDefinition: {id}};
        }
    });

  });
});

describe('Modules', () => {
  it('should throw if no session is passed to the constructor', () => {
    assert.throws(() => {
      const Auth = purecloud.AuthorizationApi();
    });
  });

  it('should reject if session client credentials are bad', (done) => {
    const badSession = purecloud.PureCloudSession({
      strategy: 'client-credentials',
      clientId: 'clientId',
      clientSecret: 'clientSecret'
    });
    const Auth = purecloud.AuthorizationApi(badSession);
    Auth.getRoles()
      .then(done.fail)
      .catch(done);
  });
});

describe('Login', () => {
  it('should handle when a request is made before the login completes', (done) => {
    let session = getSession();
    const Auth = purecloud.AuthorizationApi(session);

    session.login().then(function(){
        done();
    }).catch(()=>{
        done.fail;
    });;

    Auth.getRoles()
      .then((roles) => {
        done.fail;
    });
  });
});
