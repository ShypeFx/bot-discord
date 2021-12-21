    const Discord = require('discord.js');

    const Client = new Discord.Client({
        intents: [
            Discord.Intents.FLAGS.GUILDS,
            Discord.Intents.FLAGS.GUILD_MESSAGES
        ]
    });

    const prefix = "!";



    Client.on("ready", () => {
        console.log(" bot ready ");
    });

    Client.on("messageCreate", message => {



        if (message.author.bot) return;

        // fdp
        if (message.content === "fdp") {
            message.reply(" grosse merde va retourne au poubelle ");
        }

        //!Help

        if (message.content === prefix + "help") {
            const emb = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Some title')
                .setURL('https://discord.js.org/')
                .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
                .setDescription('Some description here')
            message.channel.send(emb);
        }

        //!Ping
        if (message.content === prefix + "ping") {
            message.reply("pong");
        }

        //!Spam
        if (message.content.startsWith(prefix + "spam")) {
            const member = message.mentions.members.first().user;
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            var command = args.shift();
            command = args.shift();
            command = args.shift();

            command = parseInt(command, 10);
            console.log(command);
            if (isNaN(command)) {
                console.error("mauvais chiffre");
                message.reply(" salope tu sais pas mettre de chiffre ");
            }

            for (var i = 0; i < command; i++) {
                message.channel.send(`Xavier est un enculé ${ member }`);
            }
        }

    });

    Client.login("");
