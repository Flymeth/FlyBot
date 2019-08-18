const Discord = require('discord.js')
const bot = new Discord.Client()
const webhook1 = new Discord.WebhookClient('612370842579369996', '-QpPOY2Z1Ehs45CveZJiyQ7NMm4I51HEUN0eTKvp0THmpV82hToiZKFUWCgF7bPIjJFF')


//instance
bot.on('ready', function () {
	bot.user.setActivity('En face de test [Do !help]', { type: 'PLAYING' }).catch(console.error)
	console.log("////|-------------|////")
	console.log("[!]>|Connection On|<[!]")
	console.log("////|-------------|////")
})

bot.on('message', function (message) {
	if (message.content === '!help') {
		let Embed1 = new Discord.RichEmbed()
			.setDescription("**__Les commandes:__**")
			.setColor("#FF5500")
			.addField("!help", "Affiche ce menu")
			.addField("!serv", "Affiche les statisiques du serveur")
			.addField("!webhook", "Affiche un webhook")
			.addField("!logo", "Affiche le logo de Flymeth")
			.addField("!info", "Affiche la version du bot, et ses avancements")
			.setFooter("Bot by Flymeth | BETA version")
		message.channel.send(Embed1)
		console.log("Doing *!help*")
	}

	if (message.content === '!serv') {
		let serveur_name = message.guild.name
		let serveur_size = message.guild.members.size
		message.channel.send('Serveur : ' + serveur_name + '\nMembres : ' + serveur_size)
		console.log("Doing *!serv*")
	}
	if (message.content === '!webhook') {
		webhook1.send('Vous vouliez un webhook ? \nMe voilà !')
		console.log("Doing *!webhook*")
	}
	if (message.content === '!logo') {
		message.channel.send('Voici le logo de **Flymeth**', {files: ["./Images/Logo flymeth.png"]})
		console.log("Doing *!logo*")
	}
	if (message.content === '!info') {
		let Embed2 = new Discord.RichEmbed()
			.setColor("#FF0000")
			.setDescription("__Information sur le bot__")
			.addField("Version du bot: ", "1.0.1")
			.addField(" ", " ")
			.addField("Avancements du bot:", "pour l'instant, seul des commandes sont disponible. \n**Prochaîne mise à jour:** \n-Message de bienvenue \n-Image dans un Embed")
			.setFooter("Bot by Flymeth | BETA version")
		message.channel.send(Embed2)
		console.log("Doing *!info*")
	}

})


bot.login(process.env.TOKEN)