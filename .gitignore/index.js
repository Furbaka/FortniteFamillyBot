const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
	bot.user.setGame(`Botter des fesses`);
});

bot.login(process.env.TOKEN);

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Joueurs');
    member.addRole(role);
    member.sendMessage("Salut ! Je suis le BOT de la Fortnite Family , tu est le bienvenue ! Je t'invite à lire le règlement , c'est moi qui te passeras toutes les infos et peut être tes avertissement !");
});

client.on("message", (message) => {
    if (message.content.startsWith("F?kick")) {
        // Easy way to get member object though mentions.
        var member = message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " a bien été kick :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Nope !");
        });
    }
});

