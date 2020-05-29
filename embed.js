const Discord = require("discord.js")
const auth = require('./res/auth/auth.json')
const colourList = require('./res/colour/colourList.json')
const colourCustom = require('./res/colour/colourCustom.json')

const embed = new Discord.MessageEmbed()
	.setColor(colourList.Lime.hexString)
	.setTitle('Making an embed')
	.setDescription("Hello world")
	.addFields(
		{ name: 'Thanks for checking out this repository', value: 'Have a nice day!' },
		
	)
module.exports = { embed, embed };

