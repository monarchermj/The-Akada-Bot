const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = process.env.PREFIX;

const fs = require('fs');

const memberCounter = require('./counters/member_counter')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for ( const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('AKADA BOT IS ONLINE!');
    memberCounter(client);
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Members');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('821320875751112724').send(`Welcome! <@${guildMember.user.id}>\nMake sure to check out the #🧬roles channel to get a Role assigned to you.\nUse command **-coms** to check out the Akada Bot commands.\nAlso check out the <821732987779022880> channel for any queries!`);
});

client.on('message', message => {
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hello'){
        message.reply('Hello!');
    }
    else if(command === 'help'){
        message.channel.send('For bot commands, type **-coms** in **#📃chat**.\n\nCheck Out The <#822338603719720995> tab!');
    }
    else if(command === 'coms'){
        message.channel.send('These are the bot commands:\n**-hello**\n**-help**\n**-coms**\n**-clear**\n**-links**');
    }
    else if (command === 'clear') {
        client.commands.get('clear').execute(message, args+1);
    }
    else if (command === 'links') {
        message.channel.send('Check out the #📌social tab!');
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

client.login(process.env.DISCORD_TOKEN);

