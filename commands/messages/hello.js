module.exports = {
	name: 'hello',
	description: 'Welcome to Ponyville!',
	guildOnly: true,
	//permissions: 'ADMINISTRATOR',
	execute(message) {
		message.channel.send(`Hello everypony! Pinkie Pie is here!`);
	},
}