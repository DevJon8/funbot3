const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});


client.on('message', message => {

    if (message.content === 'help') {

       message.reply('The commands are as followed -There is no prefix, -ping : Saying ping will cause the bot to respond pong -help : Well it returns this command');

       }

});
 bot.user.setPresence({ game: { name: 'Something', type: "streaming", url: "https://alvyrious.gq"}});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
