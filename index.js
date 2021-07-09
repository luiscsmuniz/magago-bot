const Discord = require("discord.js");
const keepAlive = require("./server");
const help = require("./commands/help");
const bia = require("./commands/bia");
const mamaco = require("./commands/mamaco");
const mamada = require("./commands/mamada");
const run = require("./commands/run");
const jojo = require("./commands/jojo");
const github = require("./commands/github");
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
    mamaco(message)
  }

  if (command === "mamada") {
    mamada(message)
  }

  if (command === "jojo") {
    jojo(message)
  }

  if (command === "bia") {
    bia(message)
  }

  if (command === "run") {
    run(message, args)
  }

  if (command === "help") {
    help(message)
  }

  if (command === "github") {
    github(message)
  }
});

keepAlive()

client.login(process.env.TOKEN);