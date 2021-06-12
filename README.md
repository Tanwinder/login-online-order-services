# mfes-login-services
config
two config files:-

for dev
for production in heroku
server setup
git clone "project"
npm install
npm run dev // for development in local http:localhost:5000
npm run start // for production
Google auth creation for prod
https://console.cloud.google.com
create new project
click on create button
make sure you are in right project check in top of the left panel
left panel select :- OAuth consent screen -> external -> create -> save and continue done
Credentials -> create credentials -> Oauth client ID -> web application
Add URI -> check your project url on heroku eg:- https://mern-services.herokuapp.com/
Authorized redirect URI's eg:- https://mern-services.herokuapp.com/auth/google/callback
click on create and copy client iD and your client secret
mongoDB poject creation
login first with google
new project
build cluster - steps
free
AWS
north virginia
Leave all of the Free Tier options selected and scroll down to the bottom. Click the "Create a Cluster" button // it will take few mins to
After the Cluster has been created, you will be taken back to the Clusters page of the database. Click the "Connect" button
Click the "Add a Different IP Address button:
Enter 0.0.0.0/0 into the IP Address field and click the "Add IP Address" button. This part is extremely important as our Heroku server will not be able to connect to our database unless we whitelist all IP addresses. In a real production app, you would typically have a static IP and a Fully Qualified Domain Name. In this case, we would whitelist only the static IP. You can read up on this more here: https://help.heroku.com/JS13Y78I/i-need-to-whitelist-heroku-dynos-what-are-ip-address-ranges-in-use-at-heroku
Next, enter a new username and then click the "Autogenerate Secure Password" button. Then click "Create MongoDB User"
google auth login with google in the code
const passport = require("passport"); const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

keys:- // google acount keys GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET

cookieKey // set cookie key any

// user is login wih google and then will store user info in mongoDB // paas cookie based on user login to browser and check login based on cookie // logout just need to detach login cookie in server side

mongoDB setup in the code
const mongoose = require("mongoose"); keys:- mongoURI // mongo url key routes models

Heroku deployment
download heroku cli
heroku logs --tail --app e.g heroku logs --tail --app mern-services
Rought work:-

divide into:- controllers models routes
