const Discord = require("discord.js")


module.exports.run = (client, message, args) => {

    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        return `${hrs.padStart(2, '0')} heures, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} secondes.`
    }
    message.channel.send(`Je suis connecté depuis: \`${duration(client.uptime)}\``)

}


module.exports.help = {
    name: 'uptime',
    aliases: []
};