# Serverless Github app starter

Starter/demo repo for setting up a github app with serverless approach. The code here is very simple it:
1. Receives a web hook from Github
2. Verifies the hook is from Github
3. Writes a comment to the pull request (if the web hook is a pull request event).

With an end to end demo like this you should be able to take it from there to implement your own bushiness logic. For information on how to setup a Github App through the Github web app to make this code run see the [full guide](https://kurthutten.com/blog/getting-start-with-a-serverless-github-app).

The start up run `yarn install` then `yarn rw dev` and the function will be run on `localhost:8911/githubhook`.

This repo uses redwood because of how easy it is to get setup with serverless functions. We've used redwood's generation tool so there are a lot of extra app files, but you can concentrate on `api/src/functions/githubhook.ts`. There's nothing about this function that's specific to redwood so it should be applicable to other serverless tools (netlify, serverless etc).
