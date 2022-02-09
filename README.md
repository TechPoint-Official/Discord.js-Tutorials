# Discord.JS #1 - Setup client
In this tutorial we will cover the basics. How do you properly set up your client? And how do you make sure you can see commands? 

## 📝・The beginning
Before you start check if you have nodejs. If you don't have this, you can [download it here](https://nodejs.org/en/download/)

We use [visual studio code](https://code.visualstudio.com/download) for this tutorial.

When you have opened the project you can open a terminal with ` ctrl+shift+` `

Run the following commands in it
> Install all packages
```
npm install
```
> Create an .env file
```D
cp .env.example .env
```
Fill in all necessary details with your .env file.
Make sure you have already created a bot in the [Discord developer portal](https://discord.dev/)

## 💻・Start coding!
Now let's really start coding! Follow all the steps and you will become a real discord.js developer

### 1. Creating the Discord bot client
Open the `index.js` file and add the following to the correct comment
```js
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
    ]
});
```
> The intentions are obligatory to use! This indicates what the bot is allowed to do

### 2. Set status + logging
It is very useful if you are going to log certain things from your bot. We are therefore going to put a line in the console when the bot is online
```js
console.log(`${client.user.username} is ready!`);
```
> Place this line in the ready event that has already been created for you. So this event:
```js
client.once("ready", () => {
    
});
```

**Creating the status:**
Have you ever seen that? Those bots that have such a special status as below?<br/>
![Dbot Status](https://cdn.discordapp.com/attachments/841418077908238377/940226317243252777/unknown.png)

To create a status use `client.user.setPresence()` <br/>
You then place this in your `ready` event so that it sets it up when the bot is online. <br/>
Place the following code in your `ready` event:
```js
client.user.setPresence({
    activities: [
        {
            name: `Coding..`,
            type: "PLAYING",
        }
    ]
});
```
> Try something fun yourself with this piece of code! For more information on presences check out the [discord.js docs](https://discord.js.org/#/docs/discord.js/stable/class/ClientPresence)

Start the bot with the command
```
node .
```

### 3. Your first command
To start simple, we have already created a command for you in the command handler! This can be found in `commands.js`. </br>
In the next tutorial we will go deeper into creating commands </br>
We have already created the following code for you:
```js
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
});
```
This code responds when a command is executed. Then it checks if it is a valid command otherwise it stops.</br></br>

The command we made is a `ping` command. Now nothing happens when you run this command, but we are going to change this.</br>
We are going to use the deferreply method first. This causes the bot to first respond with `<application> is thinking...`. You do this with:
```js
await interaction.deferReply();
```
Now that we have done this we can call the command. You do this with
```js
if (interaction.commandName === 'ping') {
    
}
```
Now that you've done this, you can edit the reply with
```js
await interaction.editReply('Pong!');
```
If you have done everything correctly you will get the following result:
![Command result](https://cdn.discordapp.com/attachments/814767825016193035/940230813117714442/unknown.png)

> Try for yourself to get the real bot ping via the ping command

# 💻・TechPoint Network
- **Discord** [https://discord.gg/techpoint](https://discord.gg/techpoint)
- **Instagram** [https://www.instagram.com/techpoint.official/](https://www.instagram.com/techpoint.official/)

# 📑- License
This project has an <a href="https://github.com/TechPoint-Official/Discord.js-Tutorials/blob/main/LICENSE">MIT</a> license