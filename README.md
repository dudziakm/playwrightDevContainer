# Smoke Tests for Login functionality

## Commands

- instal dependencies
  `npm i`
- instal playwright dependencies - Chromium only
  `npx playwright install chromium`
- run tests without browser GUI:  
  `npx playwright test`
- run test with browser GUI:  
  `npx playwright test --headed`
- viewing report  
  `npx playwright show-report`
- run tests without browser GUI on Stage:  
  `TEST_ENV=stage npx playwright test`

## Run tests on different environment

We need to set the variable TEST_ENV to one of the following:

- dev - for development env (default)
- stage - for development env
- prod - for development env

### bash

`TEST_ENV=dev npx playwright test`
`TEST_ENV=stage npx playwright test`
`TEST_ENV=prod npx playwright test`

### powershell

`$env:TEST_ENV=stage`
`npx playwright test`

### batch / cmd

`set TEST_ENV=stage`
`npx playwright test`

## GitHub

- project code: https://github.com/dudziakm/testPwSetupEnv/
- CI/CD (Actions): https://github.com/dudziakm/testPwSetupEnv/actions
