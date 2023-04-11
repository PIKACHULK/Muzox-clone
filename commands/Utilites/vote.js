const { EmbedBuilder, Message } = require('discord.js')
const { mem, cpu } = require('node-os-utils');
const packageJSON = require("../../package.json");
const User = require("../../Models/User");
const discordJSVersion = packageJSON.dependencies["discord.js"];

const os = require('os');
const ms = require("ms")

module.exports = {

  name: "about",
  description: "Stats of bot",
  aliases: ['stats', 'bi', 'botinfo'],
  run: async (client, message, args, prefix) => {
    let connectedchannelsamount = "22";
    let guilds = client.guilds.cache.map((guild) => guild);
    for (let i = 0; i < guilds.length; i++) {
      // if (guilds[i].me.voice.channel) connectedchannelsamount += 1;
    }
    if (connectedchannelsamount > client.guilds.cache.size) connectedchannelsamount = client.guilds.cache.size;

    let data = await User.findOne({ userId: message.author.id });
    if (!data) data = await User.create({ userId: message.author.id });

    const { totalMemMb, usedMemMb } = await mem.info();
    const cpus = os.cpus();
    const cpu = cpus[0];
    const total = Object.values(cpu.times).reduce(
      (acc, tv) => acc + tv, 0
    );
    const usage = process.cpuUsage();
    const currentCPUUsage = (usage.user + usage.system) * 1000;




    let users = 0;
    client.guilds.cache.forEach(guild => {
      users += guild.memberCount;
    })
    const duration1 = Math.round((Date.now() - message.client.uptime) / 1000);

    const memusage = process.memoryUsage();
    const embed = new EmbedBuilder()

      .setColor(`${client.config.embedColor}`)
     // .setAuthor({ name: `Potato <3#1474`, iconURL: "https://media.discordapp.net/attachments/1011309439510380578/1058717780964290620/IMG_20221005_132627.jpg", url: "https://discord.gg/yRWSH98pAs" })
      .setDescription(`**[Bot Invite Link](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)**`)
      .addFields([
       // {
      //    name: "ㅤ",
        //  value: "NOTE: This Stats are Only of **Cluster 0**"
      //  },
        {
          name: `__Information__`,
          value: `\`\`\`ml

Servers     : ${client.guilds.cache.size}
Users       : ${users}
Channels    : ${client.channels.cache.size}
Commands    : ${client.commands.size}
Uptime      : ${ms(client.uptime)}
Shards      : ${message.guild.shard.id}/1
Api         : ${client.ws.ping}\`\`\``
        },
        {
          name: "Developer",
          value: "[OBITO](https://discord.com/users/847770840266833961) , [DAKSHH](https://discord.com/users/847770840266833961) , [ISHAN](https://discord.com/users/847770840266833961)" }
      ])
      /*.setDescription(`**Hi, I am ${client.user.username}!\nMy work is to provide you quality music!\n\nPlay the music directly by ${prefix}play <song>!**`)
      .addFields([
        {
          name: "Stats",
          value: `➜ **${client.guilds.cache.size}** Servers\n➜ **${users}** Users\n➜ **${client.channels.cache.size}** Channels\n`,
          inline: true
        
        },
        {
          name: "Command Used By You",
          value: `➜ **${data.count} Commands**`
        },
        {
          name: "Links",
          value: `➜ [Invite](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)\n➜ [Support Server](https://discord.gg/wrCzESkVzK)\n➜ [Vote](https://top.gg/bot/${client.user.id}/vote)`
        },
        {
          name: "General Information",
          value: `➜ Connections: **${connectedchannelsamount}**\n➜ Platform: \`${os.platform()}\`\n➜ CPU Usage: \`${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%\`\n➜ RAM Usage: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}Mb\`\n➜ Ping: \`${client.ws.ping}ms\`\n➜ Up Since: `
        }
      ])*/
        /*.addField(`<:stats:985100769520930816> Stats`,
      `➜ **${client.guilds.cache.size}** Servers\n➜ **${users}** Users\n➜ **${client.channels.cache.size}** Channels\n`)
      .addField(`Command Used By You`,`${data.count}Commands`)

      .addField(`<:links:985105785921081344> Links`,
      `➜ [Invite](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)\n➜ [Support Server](https://discord.gg/wrCzESkVzK)\n➜ [Vote](https://top.gg/bot/${client.user.id}/vote)`)
      .addField(`<:gi:985100765783810151> General Information`,
      `➜ Connections: **${connectedchannelsamount}**\n➜ Platform: \`${os.platform()}\`\n➜ CPU Usage:\`${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%\`\n➜ RAM Usage: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}Mb\`\n➜ Ping: \`${client.ws.ping}ms\`\n➜ Up Since: <t:${duration1}:R> `)
      
      .addField(`<:dev:978563383580295188> Developers`,`\`\`\`js\n! ARYAN.NFT#0082\nBraylon ඞ#5950\`\`\``)
      .addField(`<:djs:984372533002395720> Discord.JS Version`,`\`\`\`js\n${discordJSVersion}\`\`\``)
      .addField(`<:nodejs:984372538236891196> Node.JS Version`,`\`\`\`js\n${process.version}\`\`\``)
      .addField(`<:premiumbadge:967414570169802832> Poru  Version`,`\`\`\`js\n${client.poru.version}\`\`\``)*/
      //.setThumbnail(client.user.displayAvatarURL())
      .setFooter({
        text: `Requested by ${message.author.tag}`,
        iconURL: message.guild.iconURL()
      })
    message.channel.send({ embeds: [embed] })

  }



}
