//NE PAS SUPPRIMER:
const Discord = require("discord.js")
const bot = new Discord.Client()

//instance
bot.on("ready", function () {

	bot.user.setGame("être en fase de test | !help").catch(console.error)

	let Embed6 = new Discord.RichEmbed()
		.setDescription('Le bot "' + bot.user.username + '" est prêt à être testé !')
		.setImage(bot.user.displayAvatarURL)
		.setColor("#10FF9B")
		.setFooter("FlyBot by Flymeth | BETA version | " + Date())
	bot.channels.get(dbchannel).send(Embed6).catch(console.error)
	
})

//Variables (var):
var prefix = ("!")
var version = ("1.0.3")
var interv = ("3") //L'interval est défini en seconde !
var dbchannel = ("613055646862147600")
let icon = new icon

//Variables (const):

//Quand un membre rejoin le serveur:
bot.on("guildMemberAdd", user => {
	let Embed1 = new Discord.RichEmbed()
		.setColor("#00F23E")
		.setAuthor("Nouveau membre !")
		.setThumbnail(user.user.displayAvatarURL)
		.setDescription(user + " viens de rejoindre " + user.guild.name + " ! :heart:")
		.setFooter("FlyBot by Flymeth | BETA version")
	bot.guild.channels.get("612629378282684446").send(Embed1)

})

//Quand un membre quitte le serveur:
bot.on("guildMemberRemove", user => {
	let Embed2 = new Discord.RichEmbed()
		.setColor("#F20000")
		.setTitle("Un membre viens de quitter le serveur !")
		.setDescription(user.user.username + " viens de nous quitter... :rage: !")
		.setFooter("FlyBot by Flymeth | BETA version")
	bot.guild.channels.get("612629378282684446").send(Embed2)
})

//Conditions/commandes:
bot.on("message", (message) => {
	if(message.content === prefix + "help") {
		let Embed3 = new Discord.RichEmbed()
			.setColor("#FFFFFF")
			.setTitle("__Les commandes:__")
			.addField("> !help", "*Affiche ce menu*")
			.addField("> !info", "*Affiche les information du bot*")
			.addField("> !servinfo", "*Affiche les information du serveur* (toujours en test)")
			.setFooter("FlyBot by Flymeth | BETA version")
		message.channel.send(Embed3)
	}

	if(message.content === prefix + "info") {
		let Embed4 = new Discord.RichEmbed()
			.setColor("#838383")
			.setAuthor(":information_source: Information du bot :", "https://cdn.discordapp.com/attachments/613003356771713079/613003643565768776/images.png")
			.addField("🌐 Version:", version, true)
			.addField("👨‍💻 Bot developper:", "[Flymeth](https://discord.gg/yDeWzDH)", true)
			.addField("💬 Prochaîne mise à jour:", "-Ajout de nouvelles commandes \n-Réglage de la date \n-Affichage de l'icon du serveur", true)
			.setFooter("FlyBot by Flymeth | BETA version")
		message.channel.send(Embed4)
	}

	if(message.content === prefix + "servinfo") {
		let Embed5 = new Discord.RichEmbed()
		.setTitle("Information du serveur:")
		.addField("Membres du serveur:", "**" + message.guild.memberCount + "**")
		.setFooter("FlyBot by Flymeth | BETA version")
	message.channel.send(Embed5)
	}
})

//TOKEN caché:
bot.login(process.env.TOKEN)