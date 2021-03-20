const { Emoji } = require("discord.js");

module.exports = {
    name: 'embed_social',
    description: 'Used to embed message in social tab',
    execute(message, args, Discord) {

        const Embed = new Discord.MessageEmbed()
        
        .setColor('#FF0000')

        .addFields(
            {name: 'SOCIAL MEDIA HANDLES', value: '\n\n\n<:8635_instagram:822343308067864586> - [INSTAGRAM](https://www.instagram.com/akadagaming/)\n\n<:7474_twitter:822343190865903657> - [TWITTER](https://twitter.com/AkadaGaming)\n\n<:6537_Facebook:822343565300072479>  - [FACEBOOK](https://www.facebook.com/Akada-Gaming-107090688118978)\n\n<:5194_Gmail:822352875572822057>    - akadasocial@gmail.com'}
        )
                
        
        
        message.channel.send(Embed);

        
    }
}