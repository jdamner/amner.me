export const config = {
	  provider: 'github',
	  client_id: 'a1b2c3d4e5f6g7h8i9j0',
	  client_secret: '',
	  token_path: '/api/access_token',
	  authorize_path: '/api/authorize',
	  scope: 'repo,user',
	  redirect_uri: 'https://amner.me/api/callback',
	  state: '1234567890',
}

export const oauth2Config = {
  client: {
    id: config.client_id,
    secret: config.client_secret
  },
  auth: {
    tokenHost: 'https://github.com',
    tokenPath: config.token_path || '/api/access_token',
    authorizePath: config.authorize_path || '/api/authorize',
  }
}