const Discord = require('discord.js')
const embedHelp = new Discord.MessageEmbed()
    .setTitle('Pinkie Command Assistance! <:pinkiesquee:712921381729468456>')
    .setDescription("The following commands I can respond to ^w^")
    .addFields(
        { name:"`boop`", value: "Boop!", inline: true },
        { name:"`hug`", value: "Hugs!", inline: true },
        { name:"`whoami`", value: "I'll respond who you are!", inline: true},
        { name:"`boopace`", value: "Boopsies for Acey!", inline: true},
        { name:"`pic`", value: "Post a random picture of me! (not 100% guaranteed I'll appear on it all the time)", inline: true}
    )
    .setFooter("I'll have more functions soon, and some of them aren't included here until you discover it first!\nSometimes I may respond to you without the need of the `p.` prefix!")

module.exports = {
    name: "help",
    description: "Help menu!",
    execute(message) {
        message.channel.send(embedHelp);
    },
}