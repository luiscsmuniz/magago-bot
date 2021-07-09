const Discord = require("discord.js");

const helpText = [
  { name: '!mamaco', value: 'Eu vim ver o MACACO!' },
  { name: '!mamada', value: 'Mame seus amiguinhos' },
  { name: '!jojo', value: "it's me, DIO!!!" },
  { name: '!help', value: 'Lista de comandos' },
  { name: '!bia', value: ':snake:' },
  { name: '!run [personagem]', value: 'Naruto, Nezuko, Mahito' },
  { name: '!github', value: 'Repositório oficial do Mamaco BOT' },
]

const help = (message) => {
   const helpEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Lista de comandos')
      .setURL('')
      .setAuthor('Mamaco BOT', 'https://i.imgur.com/I7LOxp5.jpg')
      .addFields(
        helpText,
      )
      .setTimestamp()
      .setFooter('Mamaco BOT', 'https://i.imgur.com/I7LOxp5.jpg');

    return message.channel.send(helpEmbed)
}



module.exports = help