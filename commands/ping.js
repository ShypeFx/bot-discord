const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Return number of ping'),

    /**
     * 
     * @param {CommandInteraction} interaction 
     */

    async execute(interaction) {
        await interaction.reply(' Xavier suce ');

        const message = await interaction.fetchReply();
        return interaction.editReply('le message a mit : ${message.createdTimestamp - interaction.createdTimestamp} ms \n')

    }
}