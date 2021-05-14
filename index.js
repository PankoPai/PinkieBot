// require the discord.js module
const fs = require('fs')
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

// create a new Discord client

const client = new Discord.Client();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders){
   
const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
    }
}

//messages that bot will respond to
client.on('message', message => {
        //party
        if (message.content === `party?`
         || message.content === `Party?`){
            message.channel.send('Party!');
        }
        else if (message.content === 'PARTY?'){
                message.channel.send('PARTY! YEAH!')
        }
        //fun
        else if (message.content === 'fun?'){
            message.channel.send('Fun!');
        }
        //shutup
        else if (message.content === 'shut up bot'
        ||  message.content === 'Shut up bot'
        ||  message.content === 'Shut up Pinkie'
        ||  message.content === 'shut up Pinkie')
        {
            message.react(`842848542002249738`)
            .catch(() => console.error('Failed to load emojis'));
        }
        

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
    //name
    if (!client.commands.has(commandName)) return;


    const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)); //aliases options

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
        command.execute(message, args, Discord);
    } catch (error) {
        console.error(error);
        message.channel.send(`Oh no! I can't do that!`);
    }
});



//logging to Discord with app's token

client.login(token);