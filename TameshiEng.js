const Discord = require("discord.js")
const bot = new Discord.Client();

const {Token, WebhookID, WebhookToken} = require('./auth.json');

bot.once('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    console.log("Bot has started")
});

const webhook = new Discord.WebhookClient (WebhookID, WebhookToken);

bot.login (Token);

webhook.send ("Hello World!");

