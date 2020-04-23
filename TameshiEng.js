const Discord = require("discord.js")
const bot = new Discord.Client();
const { token, prefix, webhook0, webhook1 } = require('./auth.json');

bot.once('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    console.log("Bot has started")
});



var webhookID = [webhook0.ID, webhook1.ID];
var webhookToken = [webhook0.token, webhook1.token];


bot.on("message", async message => {

    var announcement = message.content
    console.log(announcement);





    if (announcement.charAt(0)==prefix) {

        announcement = announcement.substring(prefix.length, (announcement.length)-1)

        for (i = 0; i < webhookID.length - 1; i++) {
            let webhook = new Discord.WebhookClient(webhookID[i], webhookToken[i])
            webhook.send(announcement);
        }
        console.log ("announcement has been sent")
    }
});


bot.login(token);






