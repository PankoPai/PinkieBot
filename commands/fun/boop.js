const Discord = require('discord.js');
const boopEmbed = new Discord.MessageEmbed()
        .setColor('PINK')
        .setImage('https://derpicdn.net/img/2019/5/10/2035427/large.png');


module.exports = {
    name: 'boop',
    aliases: ['boops'],
    description: '',
    execute(message){

        message.channel.send(boopEmbed);
    },
}