const config = require("../config.js");

module.exports = async (client, message) => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    let prefix = config.prefix;
    if(prefix === null) prefix = default_prefix;
    const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if(!prefixRegex.test(message.content)) return;
    const [, matchedPrefix] = message.content.match(prefixRegex);
    if(prefixRegex.test(message.content)){
        const args = message.content.slice(matchedPrefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.has(command) ? client.commands.get(command) : client.commands.get(client.aliases.get(command))
        try {
            cmd.run(client, message, args);
        } catch{
            message.channel.send(`Commande introuvable \`${config.prefix}help\` pour voir la liste des commandes !`)
        }
    }
};