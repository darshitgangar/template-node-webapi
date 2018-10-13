[![build](https://img.shields.io/badge/Build-passing-brightgreen.svg)]()
<!-- [![npm](https://img.shields.io/npm/v/npm.svg?label=npm%20package)](https://www.npmjs.com/) -->

# template-node-webapi
This is a template to setup node JS based web api.

In this template we are using [Express JS](https://www.npmjs.com/package/express) npm module to serve HTTP requests.

Additional npm modules:
1. [dotenv](https://www.npmjs.com/package/dotenv) - to setup environment variables when testing locally
2. [body-parser](https://www.npmjs.com/package/body-parser) - to parse the body of request
3. [multer](https://www.npmjs.com/package/multer) - to parse the form data body of request

Dev dependencies:
1. [eslint](https://www.npmjs.com/package/eslint) - for linting JS files based on ES6 rules
2. [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) - using the airbnb rulset for eslint
3. [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) - to import/export eslint ruleset

# Getting Started
## Prerequisutes
1. NodeJS v8+ - https://nodejs.org/

## Initial Setup
1. Clone the repo
2. Install npm packages `npm install`
3. Create and setup *.env* file refering to the *.env.example* file
4. Run web api locally with sample environment variables `npm run start-dev`
5. Run web api `npm start`

## Linting
Run the ESLint command on JS files in this project
```
> npm run lint
```

## Testing
Stay tuned!
