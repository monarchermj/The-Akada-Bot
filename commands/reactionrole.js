module.exports = {
    name: 'reactionrole',
    description: "Allows to assign role by reacting to a message!",
    async execute(message, args, Discord, client){
        const channel = '822505377463664671';
        const pcRole = message.guild.roles.cache.find(role => role.name === "PC");
        const xboxRole = message.guild.roles.cache.find(role => role.name === "XBOX");
        const psRole = message.guild.roles.cache.find(role => role.name === "PlayStation");

        const pcEmoji = '🖥️';
        const xboxEmoji = '<:3139_Xbox:822779999966330891>';
        const psEmoji = '<:7307_playstation_logo:822780132845682740>';

        let embed  = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Choose the Platform that you game on:')
            .setDescription('Choosing a platform will allow you to interact with people with similar interests.\n\n'
                + `${pcEmoji} for PC Gamers\n`
                + `${xboxEmoji} for XBOX Gamers\n`
                + `${psEmoji} for PlayStation Gamers\n`);
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(pcEmoji);
        messageEmbed.react(xboxEmoji);
        messageEmbed.react(psEmoji);
    }

}