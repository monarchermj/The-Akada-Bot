module.exports = {
    name: 'embed',
    description: 'Used to embed messages in help tab',
    execute(client, message, args, Discord) {
        
        const Embed1 = new Discord.MessageEmbed()
        .setColor('#ff3030')
                
        .setTitle('How to sign up to Akada?')
        
        .setDescription('Signing up to Akada is FREE and EASY, and takes less than 5 minutes.\nAll you need is an active Indian mobile number and email id to complete the registration process.\n\nYou can register [HERE!](https://www.theakada.com/register)')
        

        message.channel.send(Embed1);
        
        const Embed2 = new Discord.MessageEmbed()
        .setColor('#FFD9DA')
                
        .setTitle('How will I be able to participate in tournaments and win prizes?')
        
        .setDescription('Once you have initially registered to AKADA, registration to tournaments is as easy as CLICKING A BUTTON.\nTo Participate, you do need to have access to the game, and have a valid online platform id on the respective platform.\n\nWe will be sending tournament updates, deadlines and registration dates by email, as well as providing regular updates on our website.\nRemember to check the events page regularly for tournaments that might interest you.')
        

        message.channel.send(Embed2);

        const Embed3 = new Discord.MessageEmbed()
        .setColor('#33658A')
                
        .setTitle('Do I have to Pay to Play in AKADA tournaments?')
        
        .setDescription('AKADA tournaments are currently FREE to PLAY. However not all games are free to play (Examples being Call of Duty, FIFA, Tekken) and to participate in a particular game, it would require you to purchase that specific game.\nGames that are FREE to PLAY (Fortnite, Warzone, Rogue Company) would only require you to download the game onto your device and you will be Tournament ready.\n\nIn the coming future, there will also be paid tournaments that you can register for, but there will always be free tournaments for you to enjoy.')
        

        message.channel.send(Embed3);

        const Embed4 = new Discord.MessageEmbed()
        .setColor('#9CFFFA')
                
        .setTitle('How do I get Tournament Ready?')
        
        .setDescription('Successful Participation requires three main things. Firstly access to the platform on which the tournament is taking place (this could be a Laptop/PC/PS4/XBOX/Mobile) as well as a valid and active Id on the platform.\nSecondly, access to an internet connection. Lastly access to the game in question.\n\nOn the Playstation and Xbox platforms, some games will require an online PS plus or XBOX LIVE membership to play online, so please check the same in advance.')
        

        message.channel.send(Embed4);

        const Embed5 = new Discord.MessageEmbed()
        .setColor('#A37C40')
                
        .setTitle('Which platform is best for you? How do I choose?')
        
        .setDescription('The platform you choose will depend on your budget, the games that interest you and the access to tech that you have. AKADA tournaments can be played by anyone, and you can participate from your home or a cyber cafe.\nIf you do plan to play from a cyber cafe, do ensure you confirm the games availability on their system.\n\nYou can select and provide the details of your platform in the account signup form. If you have already signed up and want to add a platform and platform id to your account, you can do so from the EDIT PROFILE button.\nYou can have multiple platforms linked to your account, but only one platform id per platform.')
        

        message.channel.send(Embed5);

        const Embed6 = new Discord.MessageEmbed()
        .setColor('#D4E79E')
                
        .setTitle('What is a Platform ID and how can I create one?')
        
        .setDescription('Your platform ID will be dependent on the platform you finally choose. We need a valid and active id for participation in tournaments.\nWe will be inviting you to the tournament, using the platform details and the platform id that you provide in your signup details.')
        .addFields(
            {name: 'If you have chosen a PC/Laptop/Cyber Cafe as your hardware, you will need an active STEAM ACCOUNT:', value: 'Steam is a gaming marketplace for pc, and can be accessed through an internet browser or a downloadable app on your laptop or PC. Creating a steam ID is free, and allows you to play games with other PC players online. You will also need to download/purchase the game through the steam app, in order to use the steam id to play the game. For registering in PC tournaments, a steam profile is mandatory. To create a steam profile, click [here](https://store.steampowered.com/join/completesignup).'},
            {name: 'If you have chosen an Xbox 360/Xbox One/Xbox series S/X as your hardware, you will need an Xbox live account (and a Xbox live Gold membership in the case of some games):', value: 'Xbox live is the community platform for Microsoft Xbox players. Creating an Xbox live id is free, however in order to play some games online you may need an XBOX live gold membership - which can be purchased from their store. For registering in Xbox tournaments, a Xbox live profile is mandatory. To create a xbox live account , click [here](https://signup.live.com/signup?wa=wsignin1.0&rpsnv=13&rver=7.3.6963.0&wp=MBI_SSL&wreply=https://account.xbox.com/en-in/accountcreation?rtc=1&csrf=iRRDbBsXHWOzqJoxX9GqJOfUcAQCvJVJSNVhpu9YR0ntJtPfRjwCMjSg4qE1UQC4yx6KIvX4cVItbVhM5kW-6bAyA7o1&id=292543&aadredir=1&contextid=8369C2F0524F361B&bk=1602012918&uiflavor=web&lic=1&mkt=en-in&lc=1033&uaid=3ba71ae4427e4c300da204fc26106240).'},    
            {name: 'If you have chosen a Playstation 3/Playstation 4/Playstation 5 as your hardware, you will need an PSN account (and a PS PLUS membership in the case of some games):', value: 'Playstation Network is the community platform for playstation players. Creating a PSN id is free, however in order to play some games online you may need a PS PLUS membership - which can be purchased from their store. For registering in Playstation  tournaments - a playstation PSN profile is mandatory. To create a PSN account, click [here](https://www.playstation.com/en-us/support/account/create-account-for-psn/#:~:text=Set%20up%20an%20account%20for%20PlayStation%20Network%201,in%20the%20message%20to%20verify%20your%20email%20address).'}
            )
        

        message.channel.send(Embed6);

        const Embed7 = new Discord.MessageEmbed()
        .setColor('#573280')
                
        .setTitle('Can I play solo or with friends? ')
        
        .setDescription('On Akada you can play both solo and with friends. You can create your own team of upto 4 players and invite your friends to this team on AKADA. You can create the team in the initial signup or later through the edit profile functionality.\nYou can also change the name and the composition of your team members at any time. While you can only create one team, you can be part of multiple teams.\n\nTournaments will provide different modes for tournaments, while certain modes you will be able to play solo, other modes will require you to register as duos, trios or quads. You will be able to participate in any specific tournament mode with only one of your teams at a time.')
        

        message.channel.send(Embed7);
    }
}