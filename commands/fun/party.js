module.exports = {
    name: 'party',
    description: 'That pony sure does love parties',
    execute(message) {
        message.channel.send('Party!');
    },
};