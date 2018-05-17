const Botkit = require('botkit');
const path = require('path');

const mongoHost = process.env.DB_PORT_27017_TCP.replace('tcp', 'mongodb');
const mongoUri = `${mongoHost}/taco_guy`;

const mongoProvider = 
  require('botkit-storage-mongo')({ mongoUri });

const controller = Botkit.slackbot({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  studio_token: process.env.studio_token,
  storage: mongoProvider,
  scopes: ['bot'],
});

controller.setupWebserver(process.env.PORT, function(err,webserver) {
    controller.createWebhookEndpoints(controller.webserver);
    controller.createOauthEndpoints(controller.webserver);
});

controller.hears('hello','direct_mention,direct_message', function(bot, message) {

  bot.reply(message,'Howdy!');

});

controller.hears(':taco:','direct_mention,direct_message', function(bot, message) {
  console.log(message)
  bot.reply(message,'Howdy!');
});