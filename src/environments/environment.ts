// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    clientID: 'lL92lnQl13BmOeme7STGG7xOOUxpv6fg',
    domain: 'my-wedding-test.eu.auth0.com',
    audience: 'http://localhost:3000',
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile email',
    responseType: 'token id_token'
  },
  agm_api: "AIzaSyC_YLBHJrEc36MdARSyS_qpqWHp8OBkyhA",
  // HOST: "http://my-wedding-backend.herokuapp.com",
  HOST: "http://localhost:3000"
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
