const Discord = require('discord.js');
const config = require('../config.js')

module.exports.run = async(client, message, args) => {
	if(!message.guild.member(message.author).roles.cache.has(config.dev)) return message.channel.send(':x: **Erreur** Seul les développeurs du bot peuvent utiliser la commande !')
	let user = message.mentions.members.first();
	if(!user) return message.channel.send(':x: **Erreur** Vous devez ping un utilisateur !')
	user.roles.add(config.hunter);
	message.channel.send(`<a:elixircheck:781228712590180392> ${user} est maintenant **Bug Hunter**`)
} 		


module.exports.help = {
	name: 'addhunter',
	aliases: ["Addhunter", "addh", "hunter"]
}