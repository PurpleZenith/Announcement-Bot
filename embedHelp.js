const Discord = require("discord.js")
const auth = require('./res/auth/auth.json')
const colourList = require('./res/colour/colourList.json')
const colourCustom = require('./res/colour/colourCustom.json')

const embed = new Discord.MessageEmbed()
	.setColor(colourList.Lime.hexString)
	.setTitle('Welcome to Phoenix')
	.setDescription("This bot can send an embed to multiple servers using webhooks.")
	.addFields(
		{ name: 'Setup', value: 'If this is the first time using the bot, please have a look at the documentation.' },
		{ name: 'Preview', value: 'use **' + auth.prefix + 'view** to view current embed' },
		{ name: 'Send', value: 'use **' + auth.prefix + 'send** to send embed through webhook' },
	)
module.exports = { embed, embed };

