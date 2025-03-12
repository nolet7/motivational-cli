#!/usr/bin/env node

const { Command } = require("commander");
const chalk = require("chalk");

const program = new Command();

const quotes = [
    "Believe in yourself!",
    "Keep pushing forward!",
    "The best time to start is now!",
    "You are capable of amazing things!",
    "Stay positive and work hard!"
];

program
    .name("motivational-cli")
    .version("1.0.0")
    .description("A simple CLI tool that prints a random motivational quote.")
    .action(() => {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        console.log(chalk.green(`\n✨ ${quote} ✨\n`));
    });

program.parse(process.argv);

