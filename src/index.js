const { Client, Intents } = require('discord.js'); // Load the discord.js classes
require('dotenv').config(); // Load the .env file

// Start Discord bot client

// Place your bot client here //

// End Discord bot client

require(`./commands.js`)(client); // Command handler

client.login(process.env.BOT_TOKEN);

// Runs when the bot is ready
client.once("ready", () => {

});

// Runs when an interaction is created
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
});