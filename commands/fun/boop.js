module.exports = {
    name: 'boop',
    aliases: ['boops'],
    description: '',
    execute(message, args, Discord){
        const boopEmbed = new Discord.MessageEmbed()
        .setColor('PINK')
        .setImage('https://derpicdn.net/img/2019/5/10/2035427/large.png');

        message.channel.send(boopEmbed);
    },
}