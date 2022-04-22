#Set-up for Host-a-House App

In order to run the application, you must first download the latest version of
Node from the official website at https://nodejs.org/en/

Once you have it installed, you can verify npm is working properly by running
the command, `npm --version`

After downloading both Node and NPM, all packages must be installed:
1. In the root directory of the project, in the command line, run `npm install`
2. CD into the frontend directory of the project and run `npm install`
2. CD back into the root directory of the project and Run `npm run dev`
  in order to start up both the backend and the frontend services

-`npm install` will take some time but you should get a success message with possible warnings
-`npm run dev` will take some time to load up the application as it must compile and setup both the frontend services and the backend services.

Once all steps have been accomplished, users can reach the application
by going to http://localhost:3000 in their browser.

-For issues with node installation visit https://nodejs.org/dist/latest-v16.x/docs/api/synopsis.html

-For issues with npm, visit https://docs.npmjs.com/about-npm
