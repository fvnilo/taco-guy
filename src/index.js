const Botkit = require('botkit');
const path = require('path');

const mongoUri = process.env.MONGO_URL;

const mongoProvider =
  require('botkit-storage-mongo')({ mongoUri });

const controller = Botkit.slackbot({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  studio_token: process.env.studio_token,
  storage: mongoProvider,
  scopes: ['bot']
});

controller.setupWebserver(process.env.PORT, (err, webserver) => {
  controller.createWebhookEndpoints(controller.webserver);
  controller.createOauthEndpoints(controller.webserver);
});

controller.hears('hello', 'direct_mention,direct_message', (bot, message) => {

  bot.reply(message, `Howdy hooooo <@${message.user}> !`);
});

controller.hears(':taco:', 'direct_mention,direct_message', (bot, message) => {

  // Slack user ID format: <MY_USER_ID>
  const possibleMentions = message.text.match(/\<{1}\@{1}[A-Z0-9]*\>{1}/g);

  if (possibleMentions) {

    bot.reply(message, `Taco for ${possibleMentions}!`);  
  } else {
    
    bot.reply(message, `Taco for nobody...? Please be more generous <@${message.user}>`);  
  }
});