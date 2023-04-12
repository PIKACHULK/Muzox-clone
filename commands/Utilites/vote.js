const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");

module.exports = {
    name: "vote",
    
    aliases: [ "supvote", "vot", "dbl"],
    description: "Shows my invite Links!",
    args: false,
    usage: "",
    owner: false,
   run: async (client, message, args) => {
         
         
    const row = new ActionRowBuilder()


.addComponents(
                
    new ButtonBuilder()
.setLabel(`Vote`)
.setStyle("Link")
.setURL(`https://discordbotlist.com/bots/wave-8862/upvote`)
);


          
           message.channel.send({components: [row]})
    }
}
