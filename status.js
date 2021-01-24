const Discord = require('discord.js');
const bot = new Discord.Client();
const bdd = require("./bdd.json");
const token = "VOTRE_TOKEN"

bot.on("ready", async () =>{
  console.log(`Connecté en tant que ${bot.user.tag}`);
  bot.user.setStatus("online")//invisible dnd online idle
  setTimeout(() => {
    let statuts = bdd.stats
    setInterval(function() {
      let stats = statuts[Math.floor(Math.random()*statuts.length)];
      bot.user.setActivity(stats, {type: "WATCHING"})
    }, 7000)
  }, 100)
});

bot.login(token);
