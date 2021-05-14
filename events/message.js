const { guildOnly } = require("../commands/moderation/pinkiekick");

module.exports = {
    name: 'message',
    guildOnly: true,
    execute(message) {
        console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
    },
}