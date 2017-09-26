##Getting started with webpack, webpack dever server + babel

Clone the repo, within the folder run `npm install` to install the required packages (listed under `devDependencies` and `dependencies` of `package.json`)

Run `npm start` to:
* run your local server available at `http://localhost:9000/`
* do the initial build (`bundle.js`)
* continue to build/refresh the page as and when you make/save changes

Please note that `webpack-dev-server` runs in memory by design. If you want a real bundle (to be seen in the file tree), build through webpack (`npm run build`).
