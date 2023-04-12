const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const User = require("../Models/User");
module.exports.run = async (client) => {
 
  client.poru.init(client)
  client.logger.log(`${client.user.username} is ready with ${client.guilds.cache.size} server`);

  

client.db.on("ready", () => {     client.logger.log("DB READY");
});
    client.db.on("err", err => {
        
    })

await client.db.connect();
    
  

 
client.user.setPresence({
  activities: [{ name: `discord.js v14`, type: ActivityType.Watching }],
  status: 'dnd',
})
    
}
