const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
	bot.user.setGame(`faire des TOP 1`);
});

bot.login(process.env.TOKEN);

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Joueurs');
    member.addRole(role);
    member.sendMessage("Salut ! Je suis le BOT de la Fortnite Family , tu est le bienvenue ! Je t'invite à lire le règlement , c'est moi qui te passeras toutes les infos et peut être tes avertissement !");
});

