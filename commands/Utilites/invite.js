const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");

module.exports = {
    name: "invite",
    
    aliases: [ "addme", "Links", "inv"],
    description: "Shows my invite Links!",
    args: false,
    usage: "",
    owner: false,
   run: async (client, message, args) => {
         
         
    const row = new ActionRowBuilder()
			.addComponents(
                
            new ButtonBuilder()
    .setLabel(`${client.user.username}`)
    .setStyle("Link")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
   )

   .addComponents(
                
    new ButtonBuilder()
.setLabel(`Support server`)
.setStyle("Link")
.setURL(`https://discord.gg/SHqAhhZK3X`)
)

.addComponents(
                
    new ButtonBuilder()
.setLabel(`Vote`)
.setStyle("Link")
.setURL(`https://discordbotlist.com/bots/wave-8862/upvote`)
);


          
           message.channel.send({components: [row]})
    }
}
