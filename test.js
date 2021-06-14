const Discord = require('discord.js');

const fetch = require('node-fetch');
const {prefix, token} = require('./config.json');
//const querystring = require('querystring');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    const { images } = await fetch('https://derpibooru.org/api/v1/json/search/images?q=pp%2C+safe%2C+cute%2C+solo%2Cscore.gt%3A0&sf=random').then(response => response.json());
        const [answer] = images;


    if (command === 'pic') {
    
        const embedSpoiler = new Discord.MessageEmbed()
                .setColor('ed458b')
                .setTitle(`${answer.id}`)
                .setURL(`https://derpibooru.org/${answer.id}`)
                .setImage(answer.representations.large)
                .addFields(
                    { name: 'Score', value: `↑${answer.upvotes} **${answer.score}** ↓${answer.downvotes}\n⭐ ${answer.faves}` },
                );

        if (answer.spoilered === true){
        
        message.channel.send(`This pic is rated higher than my filters allow, therefore I spoiler this\n||${embedSpoiler}||`)
        } else {

        const embed = new Discord.MessageEmbed()
            .setColor('ed458b')
            .setTitle(`${answer.id}`)
            .setURL(`https://derpibooru.org/${answer.id}`)
            .setImage(answer.representations.medium)
            .addFields(
                { name: 'Score', value: `↑${answer.upvotes} **${answer.score}** ↓${answer.downvotes}\n⭐ ${answer.faves}` },
            );
     message.channel.send(embed);
            }
    }

/*     try {
        command.execute(message, args, Discord);
    } catch (error) {
        console.error(error);
        message.channel.send(`Oh no! I can't do that!`);
        
    }
    process.on('unhandledRejection', error => {
        console.error('Unhandled promise rejection:', error);
    }); */
});



client.login(token);