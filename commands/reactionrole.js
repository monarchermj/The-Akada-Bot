module.exports = {
    name: 'reactionrole',
    description: "Allows to assign role by reacting to a message!",
    async execute(message, args, Discord, client){
        const channel = '822505377463664671';
        const pcRole = message.guild.roles.cache.find(role => role.name === "PC");
        const xboxRole = message.guild.roles.cache.find(role => role.name === "XBOX");
        const psRole = message.guild.roles.cache.find(role => role.name === "PlayStation");

        const pcEmoji = '🖥️';
        const xboxEmoji = '🎮';
        const psEmoji = '🕹️';

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

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === pcEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pcRole);
                }
                else if (reaction.emoji.name === xboxEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(xboxRole);
                }
                else if (reaction.emoji.name === psEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(psRole);
                }
            } else {
                return;
            }
        });
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === pcEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pcRole);
                }
                else if (reaction.emoji.name === xboxEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(xboxRole);
                }
                else if (reaction.emoji.name === psEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(psRole);
                }
            } else {
                return;
            }
        });
    }

}