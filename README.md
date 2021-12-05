- Project system requirements and prerequisties (Android Specific)

  1. Node.js
  2. Command Line
  3. Android studio + gradle

- How to locally setup the application

  1. Clone the repo
  2. Move in to the cloned directory using command line
  3. run "npm install"
  4. Add .env file with all the required keys in the root directory
  5. run "npm run android:dev

- .env files keys to be added

  1. ROOT_URL=https://api.github.com
  2. REDIRECT_URL=com.yogizydelo.cashbookgithub://oauthredirect
  3. CLIENT_ID=<oauth_client_id>
  4. CLIENT_SECRET=<oauth_client_secret>
  5. AUTH_ENDPOINT=https://github.com/login/oauth/authorize
  6. TOKEN_ENDPOINT=https://github.com/login/oauth/access_token
  7. REVOCATION_ENDPOINT=https://github.com/settings/connections/applications/1a3beb81c84baad211ca

- Create your own oauth github app

  1. Add this homepage url on your oauth app "https://io.identityserver.demo"
  2. Add this redirect url on your oauth app "com.yogizydelo.cashbookgithub://oauthredirect"
  3. Get Client_id and Client_secret and configure it in .env file in the root directory

- Additional Information
  1. You can download and install cashbook.apk in the roort directory and run it on your android device directory
