const Discord = require("discord.js")
const auth = require('./res/auth/auth.json')
const id = require('./res/webhook/id.json')
const token = require('./res/webhook/token.json')
const embed = require('./embed.js')
const embedHelp = require('./embedHelp.js')

const bot = new Discord.Client()
const idArray = jsonToArray(id)
const tokenArray = jsonToArray(token)

const richEmbed = embed.embed

function jsonToArray(reqJSON) {
    const str = JSON.stringify(reqJSON)
    const obj = JSON.parse(str)
    var holder = new Array();
    holder = Object.values(obj)
    return holder
}

bot.once('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`)
    console.log("Embed:")
    bot.channels.cache.get(auth.hostChannelID).send(embedHelp)
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
                console.log(idArray[i])
                webhook.send("", { embeds: [richEmbed] })
            }
        }
    }
});
bot.login(auth.token);

