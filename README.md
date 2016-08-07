# tappinator
Untapped Slack integration for Team Rubberduck.

## Get the local code up and running

Note: to be able to run the npm post install script you must run `npm install` in an elevated command prompt. Either start Powershell as administrator (Windows) or use sudo (Mac/Linux).

1. Clone the repo
2. `cd repo-folder`
3. `npm install`
4. start: `npm start`
5. run tests: `npm test`

### Configuration

The app relies on some key/value-pairs for configuration. This can either be provided using environment variables or via a json-file located at appconfig/config.json. We stronly recommend that you create this file and put your local config here.

## Pushing and publishing

While working locally, use a branch for your feature. When ready, rebase on master,
create a pull-request, and push.

After getting the PR approved and merged with master, you can publish to Azure.
To do this you must add the azure remote:
`git remote add azure https://tappinator1@tappinator.scm.azurewebsites.net:443/tappinator.git`
Then you can do `git push azure master`.
Provide the password (no, we will not write it here) and your code should be in the cloud soon.
