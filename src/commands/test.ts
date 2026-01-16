import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import type { Command } from '../../types/discord.js';

export const TestCommand: Command = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Testing to see if the API is working.'),

    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.reply("Hello, World! I'm BB-BOT.");
    },
}