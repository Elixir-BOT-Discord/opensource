const Discord = require('discord.js');
const fs=require('fs');
const config=require('../config.js')
const profil=require('../Storage/profil.json')
module.exports.run = async(client, message, args) => {
    let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);
    const embed = new Discord.MessageEmbed()
    .setColor(userinfoget.displayHexColor)
    .setThumbnail('https://cdn.discordapp.com/emojis/850723144813641758.png?v=1')
    .setDescription(`**Nos partenaire Elixir** <:Elixir_New:850723144464990228>\nCliquez [ici](https://discord.gg/xqWUQZyjsn) pour devenir Partner!\n\n**[ChilledBot Server](https://discord.gg/ZuJccJuBWc)** Thème: *Bot Chill (Musique)* - Propriétaire: Derp#5777 ${profil["555429540613062656"].badge}\n\n**[Serveur de StevenTed](https://discord.gg/yquy94Z)** Thème: *Communauté YouTube/Discord* - Propriétaire: StevenTed#0001 ${profil["327878748466839552"].badge}`)
    .setTimestamp()
    .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
    message.channel.send(embed)
    message.delete()
}

module.exports.help = {
  name: "partner",
  aliases: ["partenariat", "partenaire", "partners"]
};