const Discord = require('discord.js')
const bot = new Discord.Client()
const webhook1 = new Discord.WebhookClient('612370842579369996', '-QpPOY2Z1Ehs45CveZJiyQ7NMm4I51HEUN0eTKvp0THmpV82hToiZKFUWCgF7bPIjJFF')


//instance
bot.on('ready', function () {
	bot.user.setActivity('Comment programmer un bot...', { type: 'PLAYING' }).catch(console.error)
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
			.setFooter("Bot by Flymeth")
		message.channel.send(Embed1)
		console.log("Doing !help")
	}

	if (message.content === '!serv') {
		let serveur_name = message.guild.name
		let serveur_size = message.guild.members.size
		message.channel.send('Serveur : ' + serveur_name + '\nMembres : ' + serveur_size)
	}
	if (message.content === '!webhook') {
		webhook1.send('Vous vouliez un webhook ? \nMe voilà !')
	}

})


bot.login(process.env.TOKEN)