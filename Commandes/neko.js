const {MessageEmbed} = require('discord.js');
const config = require("../config.js");
const profil=require('../Storage/profil.json')
const superagent=require('superagent')
module.exports.run = async(client, message, args) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/neko`)
    if(profil[message.author.id]){
        const embed = new MessageEmbed()
        .setColor(message.guild.member(message.author).displayHexColor)
        .setImage(body.url)
        .setDescription(`**Random Neko**\nDe: ${message.author.tag} ${profil[message.author.id].badge}\n\n[Télécharger ici](${body.url})`)
        .setTimestamp()
        .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
        message.channel.send(embed)
    } else {
        const embed = new MessageEmbed()
        .setColor(message.guild.member(message.author).displayHexColor)
        .setImage(body.url)
        .setDescription(`**Random Neko**\nDe: ${message.author.tag}\n\n[Télécharger ici](${body.url})`)
        .setTimestamp()
        .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
        message.channel.send(embed)
    }
    message.delete();
    client.channels.cache.get("791685146461863956").send(`${message.guild.name} | **${message.author.tag}** -> \`${config.prefix}neko\``)
}

module.exports.help = {
    name: "neko",
    aliases: ["Neko", "NEko", "NEKo", "NEKO", "nKEO"]
}