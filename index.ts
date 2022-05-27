import dotenv from 'dotenv';
import * as Discord from 'discord.js';

dotenv.config();


const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        // Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
        // Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    ],
}); // Client requires one parameter, which is intents.

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`); // Use ? to enable this to be undefined: https://stackoverflow.com/questions/37632760/what-is-the-question-mark-for-in-a-typescript-parameter-name
});

client.login(process.env.TOKEN);

client.on('messageCreate', (msg: Discord.Message) => {
    if (!msg.author.bot && msg.content == "Yuumi") {
        msg.reply("https://tenor.com/view/yuumi-dance-breakdance-gif-19389907");
    }
});