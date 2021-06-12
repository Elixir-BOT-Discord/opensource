const Discord = require('discord.js');
const Steven = 327878748466839552;
const fs=require('fs');
const profil=require('../Storage/profil.json')
module.exports.run = async(client, message, args) => {
	if(!message.author.id == Steven) return message.react('❌')
  const channel = client.channels.cache.get(args[0]);
  if(!channel) return console.log('Channel introuvable!');
  channel.join().then(connection => {
  console.log("Connection réussie");
  }).catch(e =>{
  console.error(e);
  })
    message.react('✅')
}

module.exports.help = {
  name: "join",
  aliases: []
};