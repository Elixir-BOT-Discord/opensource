const {MessageEmbed} = require('discord.js');
const config = require("../config.js");

module.exports.run = async(client, message, args) => {
  const search = args[0] ? args[0].toLowerCase() : message.author.id;
  const userID = message.guild.members.cache.get(search);
  const userUsername = message.guild.members.cache.filter(e => e.user.username.toLowerCase().includes(search)).first();
  const userNickname = message.guild.members.cache.filter(e => e.displayName.toLowerCase().includes(search)).first();
  const userDiscrim = message.guild.members.cache.filter(e => e.user.discriminator.toLowerCase().includes(search)).first();
  const userTag = message.guild.members.cache.filter(e => e.user.tag.toLowerCase().includes(search)).first();
  const userMention = message.guild.members.cache.get(search.replace(/\D/g, ""));
  const getUser = userID || userUsername || userNickname || userDiscrim || userTag || userMention;
  const embed = new MessageEmbed()
    .setColor('RANTOM')
    .setTitle(`Avatar de ${getUser.user.tag} :`)
    .setImage(getUser.user.displayAvatarURL({size: 2048, dynamic: true, fromat: "png"}))
    .setTimestamp()
    .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
  return message.channel.send(embed).disableMentions
};

module.exports.help = {
  name: "avatar",
  aliases: ["pdp", "pfp", "pp"]
};