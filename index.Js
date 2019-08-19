const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = ("!")

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
		.setTitle("Un membre viens de quitter le serveur !")
		.setDescription(user.user.username + " viens de nous quitter... :rage: !")
		.setFooter("FlyBot by Flymeth | BETA version")
	user.guild.channels.get("612629378282684446").send(Embed2)
})

bot.on("message", (message) => {
	if(message.content === prefix + "help") {
		let Embed3 = new Discord.RichEmbed()
			.setColor("#FFFFFF")
			.setDescription("Les commandes :")
			.addField("!help", "Affiche ce menu")
			.setFooter("FlyBot by Flymeth | BETA version")
		message.channel.send(Embed3)
	}
})

bot.login(process.env.TOKEN)