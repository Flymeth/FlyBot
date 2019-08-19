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
			.setTitle("__Les commandes:__")
			.addField("!help", "*Affiche ce menu*")
			.setFooter("FlyBot by Flymeth | BETA version")
		message.channel.send(Embed3)
	}

	if(message.content === prefix + "info") {
		let Embed4 = new Discord.RichEmbed()
			.setColor("#838383")
			.setAuthor("Information du bot :", 'https://hebergeur-images.com/fr/vi/d7160af55da8558d17cd18ae936a891c')
			.addField("Version:", "1.0.3", true)
			.addField("Bot developper:", "[Flymeth](https://discord.gg/yDeWzDH)")
			.addField("Prochaîne mise à jour:", "Implémentation de plus de commande")
		message.channel.send(Embed4)
	}
})

bot.login(process.env.TOKEN)