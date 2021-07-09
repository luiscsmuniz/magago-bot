const run = (message, args) => {
  const character = args[0].toLowerCase()

  if (character === 'nezuko') {
    return message.channel.send('', {
      files: ['https://i.imgur.com/EuD6kHK.gif']
    })
  }

  if (character === 'naruto') {
    return message.channel.send('', {
      files: ['https://media.tenor.com/images/b3b9f6278532fcb8d68f1b751cabb19e/tenor.gif']
    })
  }

  if (character === 'mahito') {
    return message.channel.send('', {
      files: ['https://media.tenor.com/images/90910eacb3e9a5adbbd8977f2f513ee8/tenor.gif']
    })
  }

  return message.channel.send('Digite o nome de um personagem (Naruto, Nezuko, Mahito)')
}

module.exports = run