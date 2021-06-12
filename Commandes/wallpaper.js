const {MessageEmbed} = require('discord.js');
const config = require("../config.js");
const pc = require("../Storage/Wallpapers/pc.json");
const mobile = require('../Storage/Wallpapers/mobile.json');
const profil = require('../Storage/profil.json');
const util = require('../utils.js');

module.exports.run = async(client, message, args) => {
    const random_pc = util.math.random(0,87)
    const random_mobile = util.math.random(0,98)
    const wpc = pc[random_pc]
    const wmobile = mobile[random_mobile]
    const embednoargs = new MessageEmbed()
        .setColor(message.guild.member(message.author).displayHexColor)
        .setTitle('Commande wallpaper!')
        .setDescription(`Vous devez choisir le type de wallpaper ! \`pc\` ou \`mobile\` \n \n Usage: \`${config.prefix}wallpaper <pc/mobile>\``)
        .setTimestamp()
        .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
    message.delete();
    if(!args[0]) return message.channel.send(embednoargs)
    if(args[0] ==! "mobile" || args[0] ==! "pc") return message.channel.send(embednoargs)
    if(profil[message.author.id]){
        const embed_mobile_badge = new MessageEmbed()
            .setColor(message.guild.member(message.author).displayHexColor)
            .setImage(wmobile)
            .setDescription(`**🖌️ Wallpaper Mobile 🖌️**\nDe: ${message.author.tag} ${profil[message.author.id].badge}\n\n[Télécharger ici](${wmobile})`)
            .setTimestamp()
            .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
        const embed_pc_badge = new MessageEmbed()
            .setColor(message.guild.member(message.author).displayHexColor)
            .setImage(wpc)
            .setDescription(`**🖌️ Wallpaper PC 🖌️**\nDe: ${message.author.tag} ${profil[message.author.id].badge}\n\n[Télécharger ici](${wpc})`)
            .setTimestamp()
            .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
        if(args[0] === "pc") return message.channel.send(embed_pc_badge)
        if(args[0] === "mobile") return message.channel.send(embed_mobile_badge)
    }else{
        const embed_pc = new MessageEmbed()
            .setColor(message.guild.member(message.author).displayHexColor)
            .setImage(wpc)
            .setDescription(`**🖌️ Wallpaper PC 🖌️**\nDe: ${message.author.tag}\n\n[Télécharger ici](${wpc})`)
            .setTimestamp()
            .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
        const embed_mobile = new MessageEmbed()
            .setColor(message.guild.member(message.author).displayHexColor)
            .setImage(wmobile)
            .setDescription(`**🖌️ Wallpaper Mobile 🖌️**\nDe: ${message.author.tag}\n\n[Télécharger ici](${wmobile})`)
            .setTimestamp()
            .setFooter(`${config.version}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
        if(args[0] === "pc") return message.channel.send(embed_pc)
        if(args[0] === "mobile") return message.channel.send(embed_mobile)
    }
    client.channels.cache.get("791685146461863956").send(`${message.guild.name} | **${message.author.tag}** -> \`${config.prefix}wallpaper\``)
}

module.exports.help = {
    name: "wallpaper",
    aliases: ["Wallpaper", "WALLPAPER", "WAllpaper", "wl", "Wl", "wL", "WL", "w", "W", "wp", "Wp", "wP", "WP"]
}