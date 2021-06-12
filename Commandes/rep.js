const {MessageEmbed} = require('discord.js');
const config = require('../config.js')

module.exports.run = async(client, message, args) => {
    if(!message.author.id === "327878748466839552") return message.reply(":x: **Erreur** Vous n'avez pas la permission! `DEVELOPER`")
    var arg = args.join(" ").split("-%");
    if(arg[1] === '') return message.reply(':x: **Erreur** Vous devez m\'être un type `(Report, Warn, Ban)`')
    if(arg[2] === '') return message.reply(':x: **Erreur** Vous devez m\'être un message')
    const search = args[0] ? args[0].toLowerCase() : message.author.id;
    const user = message.guild.members.cache.get(search);
    if(!user){
        return message.reply(':x: **Erreur** Je n\'es pas trouvé l\'utilisateur!')
    }
    
    const embed = new MessageEmbed()
    .setDescription(`**Message Officiel de Elixir** 📫 \n \n Type: __${arg[1]}__ \n \n Message: \n \`\`\`${arg[2]}\`\`\` \n*Merci de ne pas réponse à ce message, si vous voulez commencer une conversation avec l'équipe de développement du bot Elixir merci de rejoindre le serveur support || https://discord.gg/q3B4bkM ||* `)
    .setTimestamp()
    .setColor('#ff4141')
    .setThumbnail(config.avatarb)
    .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
    await user.send(embed).catch(() => {
		message.reply(`:x: **Erreur** DM: Close`)
	});
    message.delete()
    message.reply(`<a:elixircheck:781228712590180392> Message envoyer!`)
}

module.exports.help = {
	name: 'rep',
	aliases: ["Rep", "REP"]
}