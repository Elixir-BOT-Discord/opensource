const {MessageEmbed} = require('discord.js')
const config = require("../config.js");

module.exports.run = async (client, message, args) => {
	let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);

  let support = new MessageEmbed()
  	.setTitle('Informations')
  	.setDescription(`Prefix du bot: \`${config.prefix}\` \n Nombre de PDP disponibles: \`${config.pdp}\` \n Nombre de Wallpaper disponibles: \`${config.wallpaper}\` \n Langue disponibles: \`🇫🇷\` \n Création du projet: \`19 Octobre 2020\` \n Début de la beta: \`26 Octobre 2020\` \n Date de sortie officielle: \`2 Mars 2021\` \n Serveurs: \`${client.guilds.cache.size}\` \n Version: \`${config.version}\` \n Développement: \`JavaScript (discord.js v. 12.3.1)\` \n Développeur: \`StevenTed#0001\` \n Elixir Team: \`AKKURRA#7392\`, \`YukuseKnox#0001\`, \`Tanuki_#0001\`, \`nin#0002\`, \`BRIZE GLACE#0019\` \n \n **Lien utiles:** \n [Serveur Support](https://discord.gg/q3B4bkM) | [Invitation du bot](https://discord.com/api/oauth2/authorize?client_id=767677758385160252&permissions=67497025&scope=bot)`)
	.setThumbnail(config.avatarb)
	.setColor(userinfoget.displayHexColor)
	.setTimestamp()
	.setFooter(`${config.version}`, `${message.author.displayAvatarURL({dynamic: true})}`)
	message.delete()
	message.channel.send(support)
	 
}

module.exports.help = {
    name: "info",
    aliases: ["bot", "information"]
}