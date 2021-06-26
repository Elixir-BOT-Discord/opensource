const {MessageEmbed} = require('discord.js')
const config = require("../config.js");
const profil = require("../Storage/profil.json");

module.exports.run = async (client, message, args) => {
	let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);

  let support = new MessageEmbed()
  	.setTitle('Informations')
  	.setDescription(`Prefix du bot: \`${config.prefix}\` \n Nombre de PDP disponibles: \`${config.pdp}\` \n Nombre de Wallpaper disponibles: \`${config.wallpaper}\` \n Langue disponible: \`🇫🇷\` \n Création du projet: \`19 Octobre 2020\` \n Début de la beta: \`26 Octobre 2020\` \n Date de sortie officielle: \`2 Mars 2021\` \n Serveurs: \`${client.guilds.cache.size}\` \n Version: \`${config.version}\` \n Développement: \`JavaScript (discord.js v. 12.3.1)\` \n Développeur: \`StevenTed#0001\` ${profil["327878748466839552"].badge}\nBadge liste: <:Elixir_Staff:850723144876556321><:Elixir_Partner:850723144813641758><:Elixir_BugHunter:850723143941226536><:Elixir_Team:850723145145122887><:Elixir_Certif:736529373821272074>\n \n **Lien utiles:** \n [Serveur Support](https://discord.gg/q3B4bkM) | [Invitation du bot](https://discord.com/api/oauth2/authorize?client_id=767677758385160252&permissions=67497025&scope=bot) | [Elixir Team](https://discord.gg/jsFauHYKbd) | [Elixir Partner](https://discord.gg/xqWUQZyjsn)`)
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