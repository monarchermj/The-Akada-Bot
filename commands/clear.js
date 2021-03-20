module.exports = {
    name: 'clear',
    description: "This command clear an amount of messages",
    async execute(message,args){
        if(!args[0]) return message.reply("Please enter the amount of messages you want to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");
        if(args[0]>100) return message.reply("You cannot delete more than a hundred messages!");
        if(args[0]<1) return message.reply("You cannot delete less than one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
            message.reply("Deleted "+args[0]+" messages!");
        })
    }
}