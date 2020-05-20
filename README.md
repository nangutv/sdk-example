# nangu.TV SDK demo application

## THIS APPLICATION IS NOT MAINTAINED ANYMORE
This application works with @nangu/sdk version 0.2.12 only. An up-to-date version of this application is included
inside [@nangu/sdk package](https://www.npmjs.com/package/@nangu/sdk) (starting from version 0.3.2).


## Configuration

To make this app working, you need to set up configuration inside `src/configuration.js` file. Please ask nangu.TV if
you are not sure which values to use.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project creation

This project was created with these steps:

1. `yarn create react-app sdk-example`
2. `cd sdk-example/`
4. `yarn add @nangu/sdk`
5. `yarn add --dev @babel/core @babel/cli @babel/preset-flow`
6. Create .babelrc file (see [https://flow.org/en/docs/install/](https://flow.org/en/docs/install/))
7. `yarn add --dev flow-bin`
8. `yarn run flow init`
