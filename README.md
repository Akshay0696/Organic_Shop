# Oshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Heroku configuration

How to deploy Angular Application to Heroku [Heroku deployment]
(https://medium.com/@hellotunmbi/how-to-deploy-angular-application-to-heroku-1d56e09c5147)

# Setup your angular application
1. `ng new <project-name>` ==> Creating new project.
2. `cd <project-name>` ==> change directory to project folder.
3. `ng serve`  ==> To test the project locally.
4. `heroku login` ==> login to heroku account.
5. `heroku git:remote -a <project-name-in-heroku>` ==> connect heroku with git.
------------------Create it's GitHub repo and push------------------
6. `git add .` ==> Adds all the uncommited files ready to commit.
7. `git commit -m "message/description of the commit"` ==> Commit the untracked files to upload.
8. `git push heroku master` ==> Push committed filed to git.

------------------Configure Your Angular App to Deploy Properly on Heroku------------------

1. `npm install @angular/cli@latest @angular/compiler-cli --save-dev` ==> Ensure you have the latest version of angular cli and angular compiler cli.

In your package.json, copy

`"@angular/cli”: “1.4.9”,` 
`"@angular/compiler-cli": "^4.4.6",`

from devDependencies to dependencies

2. Create postinstall script in package.json
    Under “scripts”, add a heroku-postbuild command like so:
    `"heroku-postbuild": "ng build --prod"`

3. Add Node and NPM engines
    `"engines": {`
    `   "node": "6.11.0",`
    `   "npm": "3.10.10"`
    ` }`

4. Copy typescript to dependencies.
    Copy `"typescript": "~2.3.3"` from devDependencies to dependencies to also inform Heroku what typescript version to use.

5. Install Enhanced Resolve 3.3.0
    Run the command `npm install enhanced-resolve@3.3.0 --save-dev`

6. Install Server to run your app
    Locally we run ng serve from terminal to run our app on local browser. But we will need to setup an Express server that will run our production ready app (from dist folder created) only to ensure light-weight and fast loading.

    Install Express server by running:

    `npm install express path --save`

    Create a server.js file in the root of the application and paste the following code.
    `//Install express server`
    `const express = require('express');`
    `const path = require('path');`

    `const app = express();`

    // Serve only the static files form the dist directory`
    `app.use(express.static(__dirname + '/dist/<name-of-app>'));`

    `app.get('/*', function(req,res) {`
    
    `res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));`
    `});`

    `// Start the app by listening on the default Heroku port`
    `app.listen(process.env.PORT || 8080);`

7. Change start command in package.json
    In package.json, change the “start” command to node `server.js` so it becomes:

    `"start": "node server.js"`


# Here’s what the complete package.json looks like. Yours may contain more depending on your application-specific packages. 
    ![server.js](server.js)

8. push changes to GitHub:
     `git add .`
     `git commit -m "message/description of the commit"`
     `git push heroku master`
