const {MessageEmbed} = require('discord.js');
const config = require("../config.js");

module.exports.run = async(client, message, args) => {

	const args1 = args[0];
	const args2 = args.slice(0).join(" ");
	const membre = message.mentions.members.first() || message.member;
	let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);
	let embed2 = new MessageEmbed()
	.setTitle('Report Bug')
	.setColor(userinfoget.displayHexColor)
	.setDescription(`Cette commande permet de report des bugs \n \n Usage: \`${config.prefix}reportbug <message>\``)
	.setTimestamp()
    .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
	if(!args[0]) return message.channel.send(embed2), message.delete()
	const embed = new MessageEmbed()
	.setColor(userinfoget.displayHexColor) 
	.setTitle('Report...')
	.setThumbnail(membre.user.displayAvatarURL({dynamic: true}))
	.addField("Pseudo :", message.author.tag)
	.addField(" ID : ", membre.id)
	.addField("Serveur :", message.guild.name)
	.addField("Serveur ID :", message.guild.id)
	.addField("Report ID :", Date.now())
	.setTimestamp()
	.setFooter(`Report Bug`)
	client.channels.cache.get("777207636386512906").send(embed)
	client.channels.cache.get("777207636386512906").send(args2)
	message.react("✅")
	setTimeout(() => {
		message.delete()
	}, 2500);
	const embed3 = new MessageEmbed()
	.setDescription(`**Message Officiel de Elixir** 📫 \n \n Nous avons bien reçu votre report \n \n Report ID: **${Date.now()}**`)
	.setTimestamp()
    .setColor('#ff4141')
    .setThumbnail(config.avatarb)
    .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
	await membre.send(embed3).catch(() => {
		message.reply(`:x: **Erreur** **__Vous devez activer vos messages privés!__**`)
	});
	message.reply('Nous vous avons envoyé un message privé pour valider l\'envoie du report, si vous n\'avez pas reçu de message privé vous devez alors activer vos messages privés pour recevoir une réponse de plus vous devrez rejoindre le serveur support https://discord.gg/q3B4bkM (si une réponse est nécessaire)')
}

module.exports.help = {
    name: "reportbug",
    aliases: ["Reporbug", "report", "Report"]
}