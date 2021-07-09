const run = (message, args) => {
  if (args[0] === 'nezuko') {
    return message.channel.send('', {
      files: ['https://i.imgur.com/EuD6kHK.gif']
    })
  }

  if (args[0] === 'naruto') {
    return message.channel.send('', {
      files: ['https://media.tenor.com/images/b3b9f6278532fcb8d68f1b751cabb19e/tenor.gif']
    })
  }

  return message.channel.send('Digite o nome de um personagem (naruto, nezuko)')
}

module.exports = run