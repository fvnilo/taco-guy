# TacoGuy Slack Bot

## Dev: Getting Started

1. Install [Docker](https://www.docker.com/).

2. Install [ngrok](https://ngrok.com/).

3. Create a [Slack App](https://api.slack.com/apps/) in your Slack workspace to host the TacoGuy. Be sure to install it in your workspace.

4. Create a file named `.env` that will contain your **App Credentials** to run TacoGuy. You can find them in the **Basic Information** section of your Slack AppHere is how it should look like:

```
clientId=XXXXX
clientSecret=XXXXXXXXX
PORT=3000
```

5. Run: `docker-compose up --build`

6. Run ngrok to create a tunnel to your local app: `ngrok http 3000`. Note the **https** url.

7. Create a Bot User in your Slack App.

8. In the **OAuth & Permissions** section of your Slack App, add a redirect url that will be: `https://[your-ngrok-url]/oauth`.

9. In the **Events Subscriptions** section of your Slack App, set the request url as: `https://[your-ngrok-url]/slack/receive`

10. Still in the **Events Subscriptions** section, under *Subscribe to Bot Events* add, the events `message.channels` and `message.im`.

11. Visit `https://[your-ngrok-url]/login`. This will log your bot user in your Slack workspace.