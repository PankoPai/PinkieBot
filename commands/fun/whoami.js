module.exports = {
    name: 'whoami',
    description: 'Answersing who you are',
    execute(message) {
        message.channel.send(`You're ${message.author.username}, silly!`);
    },
};