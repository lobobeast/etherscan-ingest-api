# etherscan-ingest-api
Repo housing the API that ingests the etherscan eAPI

## ENV Configs
Create a '.env' file in your local repo with the following code structure or pass these values in at runtime:
```
API_KEY=<your_api_key>
NODE_ENV=<node_env>
LOCAL_PORT=<local_port>
TEST_PORT=<test_port>
TEST_URL=<test_url>
```

## Running
Run this service locally via the `npm start` command in your terminal.
Please note that this script runs the server with "nodemon", so any changes you make to your codebase will RESTART the server.

### Invoking the API
I recommend using Postman to call your API.

## Testing
1. To run tests locally you need to run `npm run start:test NODE_ENV=test` in one terminal OR Update your .env file to set your env as `NODE_ENV=test`.
   - Please note that this server will be running on "node", which does NOT restart when changes are made to your codebase.
2. Then you are able to invoke your tests by running `npm run test:functional` in a second terminal.
   - Please note that the test script will delete the cucumber.json file at the start of each invocation.