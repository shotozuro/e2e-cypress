# End to End Testing - Cypress

Implementation of end to end (e2e) testing using Cypress.

`target: https://www.imdb.com`

## Getting started

1. Clone this repo

```bash
git clone https://github.com/shotozuro/e2e-cypress.git

cd e2e-cypress
```

2. Install the dependencies

```bash
npm install

#or

yarn install
```

## Run all the test files

```bash
1. Firefox (CLI)
npm run cy:firefox #or

yarn cy:firefox

2. Chrome (CLI)
npm run cy:chrome #or

yarn cy:chrome

3. Electron (CLI)
npm run cy:electron #or

yarn cy:electron

4. Open Cypress GUI
npm run cy:open #or

yarn cy:open
```

### Visual Regression

It used Cypress plugin `cypress-plugin-snapshots` to take and compare the snapshot.

#### Run visual regression test

```
1. Firefox
yarn test:visual:firefox

2. Chrome
yarn test:visual:chrome

3. Electron
yarn test:visual:electron
```

### Responsiveness Test

Test rendered elements on various screen size.

- Mobile : 320 x 568 px
- Tablet : 768 x 1024 px
- Desktop : 1440 x 900 px

#### Run responsiveness test

```
1. Firefox
yarn test:responsiveness:firefox

2. Chrome
yarn test:responsiveness:chrome

3. Electron
yarn test:responsiveness:electron
```

### Performance Test

Check whether the pages loaded in certain amount time.

#### Run performance test

```
1. Firefox
yarn test:performance:firefox

2. Chrome
yarn test:performance:chrome

3. Electron
yarn test:performance:electron
```
