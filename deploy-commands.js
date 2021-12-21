const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');


const commands = [];
const commandFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFile) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async() => {
    try {

        await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
        console.log('les commandes ont été enregistrées ')

    } catch (error) {
        console.error(error);
    }
})