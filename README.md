# GYMBELLS & GYMATS

E-commerce app for sports goods

### Live version of application is available [here](https://gg-shop.herokuapp.com)

# Description

React.js e-commerce application features various sports goods and allows to buy them.

Simple Node.js server is implemented for payment processing

**IMPORTANT**: All sproting items featured in application are used for demonstration purposes only. They are not real and not for selling!!! Please **do not provide real information about your credit card**, because you will be charged. Instead, use mock information provided at checkout page to test payement system.

This application tries to abstract from any brands and companies that produce sporting goods. If author fetures some images with real, existing brands it does NOT mean that author promotes them or has any relationships to them.

# Installation

```bash
    npm install

    npm run dev - Runs application

    npm run client - Runs only React.js
    npm run server - Runs only Node.js server

```

# Usage

- Fork and clone application or download ZIP
- Obtain Firebase configuration and replace it in `UI/src/firebase/firebase.helpers.js`
  ```javascript
  const firebaseConfig = {
    apiKey: `YOUR_FIREBASE_API_KEY`,
    authDomain: "YOUR_FIREBASE_DOMAIN",
    databaseURL: "YOUR_FIREBASE URL",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "XXXXXXXXXX",
    appId: `YOUR_APP_ID`,
    measurementId: "XXXXX"
  };
  ```
- Install dependencies
- Run application

# License:

Copyright © by Roman Pelikh. You are 100% allowed to use this application for both personal or commercial use, but NOT to claim it as your own project. A credit to the original author, Roman Pelikh, is of course highly appreciated!
