const {Client, Collection} = require('discord.js');
const client = new Client();
const config = require("./config.js");

const fs = require ('fs');
client.config = require("./config");
client.login(config.token);
client.commands = new Collection();
client.aliases = new Collection();

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {
        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

    client.commands.set(commande.help.name, commande);
    commande.help.aliases.forEach(alias => {
        client.aliases.set(alias, commande.help.name)
    })
    });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
    });
});
client.on("ready", () => {
    const channel = client.channels.cache.get("850862264302043197");
    if(!channel) return console.log('Channel introuvable!');
    channel.join().then(connection => {
    console.log("Connection réussie");
    }).catch(e =>{
    console.error(e);
    })
});

module.exports.client = client