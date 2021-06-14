// require the discord.js module
const fs = require('fs')
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

// create a new Discord client

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready to party!');
});

//messages that bot will respond to
client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
    //name
    if (!client.commands.has(commandName)) return;


    const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.include(commandName)); //aliases options

    if (!command) return;

    if (command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
            return message.reply('Silly, you can\'t use this command!');
        }
    }
    if (command.args && !args.length) {
        let reply = `You provided no arguments, silly!`;
        
        if (command.usage) {
            reply += `\nYou should use it like this: \`${prefix}${command.name} ${command.usage}\``
        }
        return message.channel.send(reply);
    }
    //server only command settings
    if (command.guildOnly && message.channel.type === 'dm') {
        return message.channel.send(`Can't do that inside DMs, silly!`);
    }
    //cooldown settings
    const { cooldowns } = client;
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }


    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

if (timestamps.has(message.author.id)){
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply (`please wait ${timeLeft.toFixed(1)} more second(s) before reusing this command!`);
    }
}

timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send(`Oh no! I can't do that!`);
    }
});

client.on('message', message => {
            //party
            if (message.content.startsWith === `party?`
            || message.content.startsWith === `Party?`){
               message.channel.send('Party!');
           }
           //fun
           else if (message.content.startsWith === 'fun?'){
               message.channel.send('Fun!');
           }
});

//logging to Discord with app's token

client.login(token);