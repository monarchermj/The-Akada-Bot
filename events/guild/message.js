module.exports = (Discord, client, message)=> {
    const prefix = '-';
    if(!message.content.startsWith(prefix)||message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if(command) command.execute(client, message, args, Discord);
    
    else if(command === 'hello'){
        message.reply('Hello!');
    }
    else if(command === 'help'){
        message.channel.send('For bot commands, type **-coms** in **#chat**.\n\nCheck Out The #Help tab!');
    }
    else if(command === 'coms'){
        message.channel.send('These are the bot commands:\n**-hello**\n**-help**\n**-coms**\n**-clear**\n**-links**');
    }
    else if (command === 'links') {
        message.channel.send('Check out the #Social tab!');
    }
}