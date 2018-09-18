export const environment = {
  production: true,
  agm_api: "AIzaSyC_YLBHJrEc36MdARSyS_qpqWHp8OBkyhA",
  HOST: "http://my-wedding-backend.herokuapp.com",
  auth: {
    clientID: 'lL92lnQl13BmOeme7STGG7xOOUxpv6fg',
    domain: 'my-wedding-test.eu.auth0.com',
    audience: 'http://my-wedding-backend.herokuapp.com',
    redirect: 'http://wedding-unicorn.herokuapp.com/callback',
    scope: 'openid profile email',
    responseType: 'token id_token'
  },
};
