const tmi = require('tmi.js');

const Discord = require("discord.js");

/* ------------------------------------------------- DISCORD */

const clientDiscord = new Discord.Client();

clientDiscord.login("Nzg2NjkyNTcxODUzNzUwMjcy.X9KGjQ.WKD-1gyFI4fr1gRa9F8MFMcfx4w");

const channelNoticia = "550007308483035142";
const channelChat = "550007308483035142";

clientDiscord.on('ready', () => {
	console.log(`Logged in as ${clientDiscord.user.tag}!`);
  });

/* ----------------------------------------------- TWITCH */ 
const client = new tmi.Client({
	channels: [ 'felipebernardi21' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	console.log(`${tags['display-name']}: ${message}`);

	clientDiscord.channels.fetch(channelChat)
    .then(channel => {
        channel.send(`${tags['display-name']}: ${message}`);
    })
});


client.on('connected', (address, port) => {
	console.log(`PRENDIÓ EL GOTIIXXX`);
	/*clientDiscord.channels.fetch(channelNoticia)
    .then(channel => {
        channel.send(`${tags['display-name']}: ${message}`);
    })*/
});

client.on("hosted", (channel, username, viewers, autohost) => {
	if(!autohost)
	{
		clientDiscord.channels.fetch(channelNoticia)
		.then(channel => {
			channel.send(`${username} HOSTEÓ AL GOTIIXXX CON ${viewers} VIEWERS`);
		})		
	}
});