const Discord = require("discord.js")
const auth = require('./auth.json')
const id = require('./id.json')
const token = require('./token.json')

const bot = new Discord.Client()

const idArray = jsonToArray(id)
const tokenArray = jsonToArray(token)

function jsonToArray(reqJSON) {
    const str = JSON.stringify(reqJSON)
    const obj = JSON.parse(str)
    var holder = new Array();
    holder = Object.values(obj)
    return holder
}

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


            for (i = 0; i < idArray.length; i++) {
                var webhook = new Discord.WebhookClient(idArray[i], tokenArray[i])
                console.log (idArray[i])
                webhook.send(announcement)
            }

        }
    }
});
bot.login(auth.token);
