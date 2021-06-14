/* const fetchpic = require(`node-fetch`)

module.exports = {
    name: 'pic',
    description: 'Post a random pic of Pinkie',
    execute(message, args, Discord, fetch){


        const { images } = await fetchpic('https://derpibooru.org/api/v1/json/search/images?q=pp%2C+safe%2C+cute%2C+solo%2Cscore.gt%3A0&sf=random').then(response => response.json());
        const [answer] = images;
    
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
    },
} */