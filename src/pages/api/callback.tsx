import type { NextApiRequest, NextApiResponse } from 'next'
import { AuthorizationCode } from 'simple-oauth2'
import { config, oauth2Config } from "../../config/oauth"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  let client = new AuthorizationCode(oauth2Config);

  let options = {
    code: req.query.code,
    redirect_uri: config.redirect_uri,
    scope: config.scope
  }

  try {
    const result = await client.getToken(options)

    return res.send(getScript('success', {
      token: result.token.access_token,
      provider: config.provider
    }))
  }
  catch (error) {
    console.error('Access Token Error', error.message)
    res.send(getScript('error', error))
  }
}


function getScript(mess, content) {
  return `<!doctype html><html><body><script>
  (function() {
    function receiveMessage(e) {
      console.log("receiveMessage %o", e)
      window.opener.postMessage(
        'authorization:github:${mess}:${JSON.stringify(content)}',
        e.origin
      )
      window.removeEventListener("message",receiveMessage,false);
    }
    window.addEventListener("message", receiveMessage, false)
    console.log("Sending message: %o", "github")
    window.opener.postMessage("authorizing:github", "*")
    })()
  </script></body></html>`
}