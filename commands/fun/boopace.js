const Discord = require('discord.js')
const boopEmbed = new Discord.MessageEmbed()
        .setColor('PINK')
        .setImage('https://cdn.discordapp.com/attachments/712916156008104017/733281893147082782/boop.png');

module.exports = {
    name: 'boopace',
    description: '',
    execute(message){
        message.channel.send(boopEmbed);
    },
}