const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*");

bot.on('ready', () => {
	bot.user.setGame(`Botter des fesses`);
});

bot.login(process.env.TOKEN);

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Joueurs');
    member.addRole(role);
    member.sendMessage("Salut ! Je suis le BOT de la Fortnite Family , tu est le bienvenue ! Je t'invite à lire le règlement , c'est moi qui te passeras toutes les infos et peut être tes avertissement !");
});

bot.on('message', message => {

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(message.content("F)ban") || message.content("F)BAN")) {

        if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
          return message.reply("Nope ! Vous ne passerez pas !");
        
        let member = message.mentions.members.first();
        if(!member)
          return message.reply("Merci de mettre un membre du serveur !");
        if(!member.bannable) 
          return message.reply("Je peux pas le ban, il est peut être trop fort pour moi :/");
    
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "Il n'y a aucune raison visible de ban";
        
        await member.ban(reason)
          .catch(error => message.reply(`Désolé ${message.author} je n'est pas réussis a bannir quelqu'un : ${error}`));
        message.reply(`${member.user.tag} a été banni par ${message.author.tag} car: ${reason}`);
      }
    


});

