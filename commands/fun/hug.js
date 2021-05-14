module.exports = {
    name: 'hug',
    aliases: ['hugs'],
    description: '',
    execute(message, args, Discord){
        const hugEmbed = new Discord.MessageEmbed()
        .setColor('ed458b')
        .setImage('https://derpicdn.net/img/view/2020/1/26/2257903.gif');

     message.channel.send(hugEmbed);
    },

}