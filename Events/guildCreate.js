const {MessageEmbed} = require('discord.js');

module.exports = async(client, guild) => {
  const Embed = new MessageEmbed()
  .setTitle(`${client.user.username} a été ajouté !`)
  .setDescription(`J'ai été ajouté sur \`${guild.name}\``)
  .setColor('#0c61f1')
  .setThumbnail(guild.iconURL({dynamic: true}))
  .addFields(
    {name: "Membres (guilde) :", value: `${guild.memberCount}`, inline: true},
    {name: "Nombre de serveur :", value: `${client.guilds.cache.size}`, inline: true},
    {name: "Serveur ID :", value: `${guild.id}`, inline: true}
  )
  .setTimestamp()
  .setFooter("Merci de m'avoir ajouté !", `${client.user.displayAvatarURL()}`)
  client.channels.cache.get("769988443358625792").send(Embed)
};