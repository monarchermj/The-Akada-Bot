const Discord = require('discord.js');

const key = require('./token.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for ( const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('logged in!')
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Members');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('821320875751112724').send(`Welcome! <@${guildMember.user.id}>\nMake sure to check out the #Roles channel to get a Role assigned to you.\nAlso check out the #Help channel for any queries!`);
});

client.on('message', message => {
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hello'){
        message.reply('Hello!');
    }
    else if(command === 'help'){
        message.channel.send('For bot commands, type **-coms** in **#chat**.\n\nCheck Out The #Help tab!');
    }
    else if(command === 'coms'){
        message.channel.send('**-hello**\n**-help**\n**-coms**\n**-clear**\n**-links**');
    }
    else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }
    else if (command === 'links') {
        message.channel.send('Check out the #Social tab!');
    }
    else if (command === 'embed') {
        message.channel.send('https://imgur.com/mzFyb4X.png');
        client.commands.get('embed').execute(message, args, Discord);
    }
    else if (command === 'embed_social') {
        message.channel.send('https://imgur.com/ekypHqG.png');
        client.commands.get('embed_social').execute(message, args, Discord);
    }
    else if (command === 'embed_about') {
        message.channel.send('https://imgur.com/Za1co8P.png');
        client.commands.get('embed_about').execute(message, args, Discord);
    }
    else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
});

client.login(key.key);

