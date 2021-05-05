// require the discord.js module
const fs = require('fs')
const Discord = require('discord.js');

// create a new Discord client
const {prefix, token} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});
//messages that bot will response to
client.on('message', message => {
        //party
        if (message.content === 'party?'){
            message.channel.send('Party!');
        }
        //fun
        else if (message.content === 'fun?'){
            message.channel.send('Fun!');
        }
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
    //name
    if (command === 'whoami') {
        message.channel.send('You are ' + message.author.username + ', silly!');
    }
/*    else if (command === 'kick') {
        if (!message.mentions.users.size){
            return message.reply("Hey, I'd rather invite ponies, not kick them out!")
        }
        const taggedUser = message.mentions.users.first();
        message.channel.send("I'm sorry ${message.author.username}, but I'm not allowed to kick ${taggedUser}");
    }*/
});

//logging to Discord with app's token
client.login(token);