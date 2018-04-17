interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'nToaWFxoDi6IWokZjW1hlNyWxRqiZ189',
  domain: 'qrvey.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
