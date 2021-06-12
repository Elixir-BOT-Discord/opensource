const Discord = require('discord.js');
const util = require("util");
const Steven = 327878748466839552;
const Adel = 260831072831406090;
module.exports.run = async(client, message, args) => {
	if(message.author.id == Steven || message.author.id == Adel){
		if(args.length == 0) return message.reply("le eval ne peux etre vide");
	    var evalCode = args.join(" ");
	    let result = null;
	    try {
	        result = eval(evalCode);
	    }
	    catch(e) {
	        result = e.toString();
	    }
	    if (evalCode.length > 1000) {
	        var embed = new Discord.MessageEmbed()
	            .setTitle("Code Eval")
	            .setColor("RANDOM")
	            .addField("Input:", "Message dépassant le seuil autorisé")
	            .addField("Output:", '```' + util.inspect(result) + '```')
	        message.channel.send(embed).catch(() => {
	            message.channel.send(`:x: Trop de caractères`);
	            console.log(util.inspect(result));
	        })
	    }
	    var embed = new Discord.MessageEmbed() 
	        .setTitle("Code Eval")
	        .setColor("RANDOM")
	        .addField("Input:", '```' + evalCode + '```')
	        .addField("Output:", '```' + util.inspect(result) + '```')
	    message.channel.send(embed).catch(() => {
	        message.channel.send(`:x: Trop de caractères`);
	        console.log(util.inspect(result));
	     })
		}
};

module.exports.help = {
  name: "eval",
  aliases: []
};