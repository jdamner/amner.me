import { config, oauth2Config } from "../../config/oauth"
import type { NextApiRequest, NextApiResponse } from 'next'
import { AuthorizationCode } from "simple-oauth2";


export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  const client = new AuthorizationCode(oauth2Config)
  const { redirect_uri, scope, state } = config;
  const authorizationUri = client.authorizeURL({ redirect_uri, scope, state })
  res.redirect(authorizationUri)
}