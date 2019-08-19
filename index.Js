//NE PAS SUPPRIMER:
const Discord = require("discord.js")
const bot = new Discord.Client()

//instance
bot.on("ready", function () {
	bot.user.setGame("être en fase de test | !help").catch(console.error)
})

//Variables:

var prefix = ("!")
var version = ("1.0.3")

//Quand un membre arrive / quitte le serveur:

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

//Conditions/commandes:

bot.on("message", (message) => {
	if(message.content === prefix + "help") {
		let Embed3 = new Discord.RichEmbed()
			.setColor("#FFFFFF")
			.setTitle("__Les commandes:__")
			.addField("!help", "*Affiche ce menu*")
			.addField("!info", "*Affiche les information du bot*")
			.setFooter("FlyBot by Flymeth | BETA version")
		message.channel.send(Embed3)
	}

	if(message.content === prefix + "info") {
		let Embed4 = new Discord.RichEmbed()
			.setColor("#838383")
			.setAuthor("Information du bot :", 'https://cdn.discordapp.com/attachments/613003356771713079/613003643565768776/images.png')
			.addField("Version:", version, true)
			.setImage("https://cdn.discordapp.com/attachments/613003356771713079/613003643565768776/images.png")
			.addField("Bot developper:", "[Flymeth](https://discord.gg/yDeWzDH)", true)
			.addField("Prochaîne mise à jour:", "-Implémentation de nouvelles commandes \n-~~Activitée du bot~~", true)
		message.channel.send(Embed4)
	}
})


//TOKEN caché:
bot.login(process.env.TOKEN)