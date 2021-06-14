module.exports = {
    name: 'pinkiekick',
    description: 'Pinkie is not allowed to kick',
    guildOnly: true,
    execute(message) {
        if (!message.mentions.users.size){
            return message.channel.send(`Hey ${message.author.username}, I'd rather invite ponies, not kick them out!`)
        }
        const taggedUser = message.mentions.users.first();
        message.channel.send(`I'm sorry ${message.author.username}, but I'm not allowed to kick ${taggedUser}`);
    },
};