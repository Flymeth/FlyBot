const Discord = require('discord.js')
const bot = new Discord.Client()
const webhook1 = new Discord.WebhookClient('612370842579369996', '-QpPOY2Z1Ehs45CveZJiyQ7NMm4I51HEUN0eTKvp0THmpV82hToiZKFUWCgF7bPIjJFF')
var prefix = '!'

bot.on("guildMemberAdd", user => {
	let Embed1 = new Discord.RichEmbed()
		.setColor("#00F23E")
		.setAuthor("Nouveau membre !", user.user.displayAvatarURL)
		.setDescription(user + " viens de rejoindre " + user.guild.name + " ! :heart:")
		.setFooter("FlyBot by Flymeth | BETA version")
	user.guild.channels.get("612629378282684446").send(Embed1)

})

bot.on("guildMemberRemove", user => {
	let Embed2 = new Discord.RichEmbed()
		.setColor("#F20000")
		.setAuthor("Un membre viens de quitter le serveur !")
		.setDescription(user.user.username + " viens de nous quitter... :rage: !")
		.setFooter("FlyBot by Flymeth | BETA version")
	user.guild.channels.get("612629378282684446").send(Embed2)
})

bot.login(process.env.TOKEN)