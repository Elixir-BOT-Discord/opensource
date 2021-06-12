const {MessageEmbed} = require('discord.js');
const config = require("../config.js");
const util=require('../utils.js')
const profil=require('../Storage/profil.json')
const pdp=require('../Storage/Packs/toradora.json')
module.exports.run = async(client, message, args) => {
    const random = util.math.random(0,49)
    const pfp = pdp[random]
    if(profil[message.author.id]){
        const embed = new MessageEmbed()
        .setColor(message.guild.member(message.author).displayHexColor)
        .setImage(pfp)
        .setDescription(`**Toradora**\nDe: ${message.author.tag} ${profil[message.author.id].badge}\n\n[Télécharger ici](${pfp})`)
        .setTimestamp()
        .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
        message.channel.send(embed)
    } else {
        const embed = new MessageEmbed()
        .setColor(message.guild.member(message.author).displayHexColor)
        .setImage(pfp)
        .setDescription(`**Toradora**\nDe: ${message.author.tag}\n\n[Télécharger ici](${pfp})`)
        .setTimestamp()
        .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
        message.channel.send(embed)
    }
    message.delete();
    client.channels.cache.get("791685146461863956").send(`${message.guild.name} | **${message.author.tag}** -> \`${config.prefix}toradora\``)
}
module.exports.help = {
    name: "toradora",
    aliases: ["Toradora", "TORADORA", "TORadora", "TOradora"]
}