const Discord = require("discord.js");

const github = (message) => {
   const githubEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Repositório Mamaco BOT')
      .setURL('https://github.com/luiscsmuniz/mamaco-bot')
      .setAuthor('Valandil', 'https://avatars.githubusercontent.com/u/47360932?v=4',
      'https://github.com/luiscsmuniz')
      .setTimestamp()
      .setFooter('Valandil', 'https://avatars.githubusercontent.com/u/47360932?v=4', 'https://github.com/luiscsmuniz');

    return message.channel.send(githubEmbed)
}



module.exports = github