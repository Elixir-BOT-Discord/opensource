const {MessageEmbed} = require('discord.js');
const config = require("../config.js");

module.exports.run = async(client, message, args) => {

	const args1 = args[0];
	const args2 = args.slice(0).join(" ");
	const membre = message.mentions.members.first() || message.member;
	let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);
	let embed2 = new MessageEmbed()
	.setTitle('Upload')
	.setColor(userinfoget.displayHexColor)
	.setDescription(`Cette commande peut beaucoup aider le bot, upload des pdp ou wallpaper pour nous, pour toi? Pour tout le monde !! \n **Cette commande permet d\'ajouter des images dans notre base de donnée.** \n \n Usage: \`${config.prefix}upload <lien de l\'image>\` \n \n **Rejoignez notre Team Elixir!** Si vous avez beaucoup de pdp ou wallpaper pour Elixir alors rejoinez notre team [plus d\'info.](https://discord.gg/jsFauHYKbd)`)
	.setTimestamp()
    .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
	if(!args[0]) return message.channel.send(embed2)
	const embed = new MessageEmbed()
	.setColor("RANDOM")
	.setTitle('Upload...')
	.setThumbnail(membre.user.displayAvatarURL({dynamic: true}))
	.addField("Pseudo :", message.author.tag)
	.addField(" ID : ", membre.id)
	.addField("Serveur :", message.guild.name)
	.addField("Serveur ID :", message.guild.id)
	.setTimestamp()
	.setFooter(`Upload`)
	client.channels.cache.get("770009178264698881").send(embed)
	client.channels.cache.get("770009178264698881").send(args2)
	message.react("✅")
	setTimeout(() => {
		message.delete()
	}, 2500);
	message.reply("Nous avons bien reçu votre demande d'upload!")
}

module.exports.help = {
    name: "upload",
    aliases: ["contrib", "Upload"]
}