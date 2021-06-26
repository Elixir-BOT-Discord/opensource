const {MessageEmbed} = require('discord.js');
const config = require("../config.js");

module.exports.run = async (client, message, args, settings) => {
  let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);
  let embed = new MessageEmbed()
    .setColor(userinfoget.displayHexColor)
    .setThumbnail(config.avatarb)
    .setDescription(`**Information des badges** ${config.new}\n\nListe des badges: <:Elixir_Staff:850723144876556321><:Elixir_Partner:850723144813641758><:Elixir_BugHunter:850723143941226536><:Elixir_Team:850723145145122887><:Elixir_Certif:736529373821272074>\n\n\n **Comment avoir le badge "Elixir Staff" <:Elixir_Staff:850723144876556321>**\nPour avoir ce badge il faut être un développeur du bot Elixir.\n\n**Comment avoir le badge "Elixir Partner" <:Elixir_Partner:850723144813641758>**\nPour avoir ce badge il faut être en partenariat avec Elixir, plus d'[info ici](https://discord.gg/xqWUQZyjsn)\n\n**Comment avoir le badge "Bug Hunter" <:Elixir_BugHunter:850723143941226536>**\nPour avoir ce badge il faut avoir report 1 bug validé par les développeurs\n\n**Comment avoir le badge "Elixir Team" <:Elixir_Team:850723145145122887>**\nPour avoir ce badge il faut upload beaucoup de pdp validé par les développeurs plus d'[info ici](https://discord.gg/jsFauHYKbd)\n\n**Comment avoir le badge "Elixir Suggestion Certifié" <:Elixir_Certif:736529373821272074>**\nPour avoir ce badge il faut faire une [suggestion](https://discord.gg/WaNRmnEv6j) validé par les développeurs\n\n[Serveur Support](https://discord.gg/q3B4bkM) | [Invitation du bot](https://discord.com/api/oauth2/authorize?client_id=767677758385160252&permissions=67497025&scope=bot) | [Elixir Team](https://discord.gg/jsFauHYKbd) | [Elixir Partner](https://discord.gg/xqWUQZyjsn)`)
    .setTimestamp()
    .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
    message.channel.send(embed)
    message.delete()
}

module.exports.help = {
  name: "badges",
  aliases: ["badgelist", 'badge', "badgeinfo", "infobadge"]
};