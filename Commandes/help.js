const {MessageEmbed} = require('discord.js');
const config = require("../config.js");

module.exports.run = async (client, message, args, settings) => {
  let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);
  let help = new MessageEmbed()
    .setColor(userinfoget.displayHexColor)
    .setTitle('Voici le menu d\'aide')
    .setThumbnail(config.avatarb)
    .setDescription(`Mon prefix sur  ce serveur est : \`${config.prefix}\` \n \n **Liste des commandes:** \n \`${config.prefix}partner\` Permet de voir nos partenaires\n \`${config.prefix}random\` Permet d'envoyer une pdp au hasard \n \`${config.prefix}normal\` Permet d'envoyer une pdp (png, jpg) \n \`${config.prefix}gif\` Permet d'envoyer une pdp (gif) \n \`${config.prefix}wallpaper\` Permet d'avoir des wallpaper (pc ou mobile)\n \`${config.prefix}pack\` Permet de voir la liste des packs de pdp \n \`${config.prefix}upload\` Permet d'upload des images et gif dans notre database \n \`${config.prefix}info\` Permet de voir les infos du bot \n \`${config.prefix}ping\` Permet de voir le ping du bot \n \`${config.prefix}reportbug\` Permet de report des bugs \n \n **Lien utiles:** \n [Serveur Support](https://discord.gg/q3B4bkM) | [Invitation du bot](https://discord.com/api/oauth2/authorize?client_id=767677758385160252&permissions=67497025&scope=bot) | [Elixir Team](https://discord.gg/jsFauHYKbd) | [Elixir Partner](https://discord.gg/xqWUQZyjsn)`)
    .setTimestamp()
    .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
    message.channel.send(help)
    message.channel.send("|| https://discord.gg/q3B4bkM ||")
    message.delete()
}

module.exports.help = {
  name: "help",
  aliases: ["aide", 'Help']
};