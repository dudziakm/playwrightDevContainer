# Switch environment within tests - Thought Process

## Requirements

1. we need to change the default confguration - extend it
1. we need to have a possibility to define at least 2 URLs (web + api) per each env
1. we need to be able to change it from the command line (without editing any files)
1. we need to have an option to set this env from the CI/CD
1. we need to have a possibility to choose a specific file for Locators/Test data/Error messages

## Solution

1. as an example, I used login data structure.
1. helpers -> loginData type is a structure to store the login data
1. I created separate folder in the main catalog (dev, stage, prod)
1. each of the above folder contains files specific to each environment
1. when we choose and environment, specific loginData will be loaded
1. after running tests, we will be able to console.log the data to confirm it is properly taken

## Possible Improvements

1. we can setup CI/CD tool to have a possibility to choose the environment from the dropdown in GitHub Actions to choose the env variable just before running all tests
1. we can add more sophisticated tests to verify the data we have in files for each environment
