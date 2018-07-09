# Web Component - Accordion

This repository contains some base elements, foundations, and an accordion component.

## Component Overview

Accordions are a graphical control element comprised from a list of buttons that can be clicked to hide or reveal content. They can be used on text heavy pages to decrease page length and make finding information easier.

Button copy with plus/minus icon
*Usage — Long-form primary, secondary information*

## Getting started

When project collaborators first pull down the parent repository to their local systems:

`cd accordion-component`
`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.

`npm run build`

Builds the app for production to the `build` folder.

#### Update npm dependencies (package.json)

Run this whenever frontend npm dependencies are updated in the `package.json` file:
```
npm install
```

#### Scss installed with Webpack

You can find a reference for installation [here](https://medium.com/@Connorelsea/using-sass-with-create-react-app-7125d6913760).

## Folder Structure

```
accordion-component/
  config/
  node_modules/
  package-lock.json
  package.json
  public/
  README.md
  scripts/
  src/
    App.js
    App.test.js
    components/
      accordion/
    index.js
    registerServiceWorker.js
    scss/
      app.scss
      elements/
      foundations/
      global/
  yarn.lock
```
