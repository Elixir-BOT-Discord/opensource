const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send('**Voici l\'invitation du bot:** https://discord.com/api/oauth2/authorize?client_id=767677758385160252&permissions=67497025&scope=bot \n \n **Voici l\'invite du serveur discord:** https://discord.gg/q3B4bkM')
}
module.exports.help = {
    name: "invite",
    aliases: ["add", "Invite", "Add", "support", "Support"]
};