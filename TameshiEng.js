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
    else if (message.guild.id == auth.hostGuildID) {
        if (announcement.charAt(0) == auth.prefix) {
            const webhook0 = new Discord.WebhookClient(id.id0, token.token0);
            webhook0.send(announcement);

            const webhook1 = new Discord.WebhookClient(id.id1, token.token1);
            webhook1.send(announcement);

            const webhook2 = new Discord.WebhookClient(id.id2, token.token2);
            webhook2.send(announcement);
        }

    }
});


bot.login(auth.token);