const mamada = (message) => {
  return message.reply(
    `deu uma sugada no(a) ${message.guild.members.cache.random()}`,
    {files: ["https://i.imgur.com/PCsLfPs.gif"]}
  );
}

module.exports = mamada