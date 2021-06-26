const {MessageEmbed} = require('discord.js');
const config = require("../config.js");

module.exports.run = async (client, message, args, settings) => {
  let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);
  let embed = new MessageEmbed()
    .setColor(userinfoget.displayHexColor)
    .setTitle('Liste des packs')
    .setThumbnail("https://cdn.discordapp.com/attachments/764956856711118850/790963987545718795/download.gif")
    .setDescription(`Voici la liste des packs de pdp disponible. \n \n \`${config.prefix}ditf\` Pack de 50 pdp de **__Darling In The Franxx__** \n \`${config.prefix}rezero\` Pack de 50 pdp de **__Re: Zero__** \n \`${config.prefix}toradora\` Pack de 50 pdp de **__Toradora__** \n \`${config.prefix}genshin\` Pack de 100 pdp de **__Genshin Impact__** \n \`${config.prefix}snk\` Pack de 100 pdp de **__L'Attaque des Titans__**\n \`${config.prefix}bsd\` Pack de 78 pdp de **__Bungo Stray Dogs__**\n \`${config.prefix}ks\` Pack de 36 pdp de **__Kekkai Sensen__**\n \`${config.prefix}ons\` Pack de 34 pdp de **__Owari No Seraph__**\n \`${config.prefix}onepiece\` Pack de 325 pdp de **__One Piece__**\n \`${config.prefix}orange\` Pack de 50 pdp de **__Orange__**`)
    .setTimestamp()
    .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
    message.channel.send(embed)
    message.delete()
}

module.exports.help = {
  name: "anime",
  aliases: ["Anime", 'ani', "Ani", "a", "A", "pack", "Pack", "PAck", "PACK", "packs", "Packs", "PAcks", "PACKS"]
};