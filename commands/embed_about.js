const { Emoji } = require("discord.js");

module.exports = {
    name: 'embed_about',
    description: 'Used to embed message in social tab',
    execute(message, args, Discord) {

        const Embed = new Discord.MessageEmbed()
        .setColor('#FF0000')

        .setTitle('WHAT IS AKADA?')

        .setDescription('Akada is a platform that brings together gamers - offering skill based tournaments across genres and games in the PC, console and mobile space, where they can play solo or in teams with their friends to win prizes.\n\nWe also provide community events and a social hub for gamers to interact, engage, share videos, memes and other content and play with others.')
           
        message.channel.send(Embed);

        const Embed1 = new Discord.MessageEmbed()
        .setColor('#FF0000')

        .setTitle('HOW TO REGISTER?')

        .setDescription('Signing up to Akada is FREE and EASY, and takes less than 5 minutes.\nAll you need is an active Indian mobile number and email id to complete the registration process.\n\nYou can register [HERE!](https://www.theakada.com/register)')
        
        message.channel.send(Embed1);

        
    }
}