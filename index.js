const Discord = require("discord.js");
require('dotenv/config');

const client = new Discord.Client();

const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "mamaco") {
    message.channel.send(
      "",
      {files: ["https://i.imgur.com/1lwclvz.jpeg"]},
    );
  }

  if (command === "mamada") {
    message.reply(
      `deu uma sugada no(a) ${message.guild.members.cache.random()}`,
      {files: ["https://i.imgur.com/PCsLfPs.gif"]}
    );
  }

  if (command === "jojo") {
    message.channel.send(
      "",
      {files: ["./images/jojo.png"]}
    );
  }

  if (command === "help") {
    const helpEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Lista de comandos')
      .setURL('')
      .setAuthor('Mamaco BOT', 'https://i.imgur.com/I7LOxp5.jpg')
      .addFields(
        { name: '!mamaco', value: 'Eu vim ver o MACACO!' },
        { name: '!mamada', value: 'Mame seus amiguinhos' },
        { name: '!jojo', value: "it's me, DIO!!!" },
        { name: '!help', value: 'Lista de comandos' },
      )
      .setTimestamp()
      .setFooter('Mamaco BOT', 'https://i.imgur.com/I7LOxp5.jpg');

    message.channel.send(helpEmbed)
  }
});

client.login(process.env.TOKEN);