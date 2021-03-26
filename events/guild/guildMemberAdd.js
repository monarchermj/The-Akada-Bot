module.exports = (Discord, client, message)=> {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Members');
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('821320875751112724').send(`Welcome! <@${guildMember.user.id}>\nMake sure to check out the #Roles channel to get a Role assigned to you.\nAlso check out the #Help channel for any queries!`);
}