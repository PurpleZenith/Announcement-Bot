const Discord = require("discord.js")
const bot = new Discord.Client();
const auth = require('./auth.json');
const id = require('./id.json');
const token = require('./token.json');

bot.once('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    console.log("Bot has started")
});

bot.on("message", async message => {
    var announcement = message.content
    if (message.author.bot) {
        return;
    }

    else if (announcement.charAt(0) == auth.prefix) {


        console.log(announcement);
        var lock = false;
        //Discord.Guild.name == "BotLand" &&

        const webhook0 = new Discord.WebhookClient(id.Tameshi, token.Tameshi);
        const webhook1 = new Discord.WebhookClient(id.Mgmt, token.Mgmt);
        webhook0.send(announcement);
        webhook1.send(announcement);

    }

});


bot.login(auth.token);