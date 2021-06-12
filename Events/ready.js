const config = require("../config.js")
module.exports = async(client) => {
	client.channels.cache.get("843251428751048724").send("Le redémarrage a été effectué avec succès! <a:elixircheck:781228712590180392>")
    let status_liste = [
        "des Waifu",
        `${config.pdp} pdp`,
        `${config.wallpaper} wallpaper`,
        `${client.guilds.cache.size} serveurs`,
        `${config.version}`,
        "pdp.help"
      ]
    client.user.setActivity()
    setInterval(() => {
    let st = Math.floor(Math.random() * (status_liste.length - 1) + 1)
    client.user.setActivity(status_liste[st], { type: 'WATCHING', activity: 'DND' })
  
    }, 50000)
};
