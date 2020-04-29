const Discord = require("discord.js")
const auth = require('./auth.json')
const id = require('./id.json')
const token = require('./token.json')

const bot = new Discord.Client()
const idArray = JSON.stringify (id)
const tokenArray = JSON.stringify (token)

bot.once('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`)
    console.log("Bot has started")
});

bot.on("message", async message => {    
    var announcement = message.content
    if (message.author.bot) {
        return
    }
    else if (message.guild.id == auth.hostGuildID) {
        if (announcement.charAt(0) == auth.prefix) {
            for (i = 0; i<idArray.length; i++)
            var webhook = new Discord.WebhookClient(idArray[i], tokenArray[i])
            webhook.send(announcement)
        }
    }
});
bot.login(auth.token);