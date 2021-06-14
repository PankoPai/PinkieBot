const Discord = require ('discord.js')
const hugEmbed = new Discord.MessageEmbed()
    .setColor('ed458b')
    .setImage('https://derpicdn.net/img/view/2020/1/26/2257903.gif');

module.exports = {
    name: 'hug',
    aliases: ['hugs'],
    description: '',
    execute(message){
     message.channel.send(hugEmbed);
    },

}