const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

module.exports = async (client) => {
    const commands = [
        new SlashCommandBuilder()
            .setName('ping')
            .setDescription('Replies with pong!'),
    ];

    const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

    (async () => {
        try {
            await rest.put(
                Routes.applicationCommands(process.env.BOT_ID, process.env.SERVER_ID),
                { body: commands },
            )

            console.log('Successfully registered application commands.')

        } catch (error) {
            console.error(error);
        }
    })();
}

