#!/usr/bin/node

// import the discord.js module
const Discord = require('discord.js');
const client = new Discord.Client();

var token = require('./token.js').tokenid; // get token from token.js

//Makes sure there is only one poll at a time
var livePoll = false;

client.on('ready', () => {
    console.log('ready');
});

client.on('message', message => {
    if (message.content.match(/^help$/i)) {
        message.channel.send('here are the commands available:\n'+
                             '\tPing: Type ping to get a response pong back.\n'+
                             '\tRoll $n: Type Roll $n to get a die roll of $n sides');
    }
});

// ping pong
client.on('message', message => {
    if (message.content.match(/^ping$/i)) {
        message.channel.send(message.content.replace('i', 'o').replace('I', 'O'));
    }
});

// get the id of a channel
client.on('message', message => {
    if (message.content.match(/^id$/i)) {
        message.channel.send(message.channel.id);
    }
});

// swear filter
client.on('message', message => {
    if (message.content.match(/bazinga/i)) {
        var tempmessage = message;
        message.delete();
        tempmessage.reply('http://imgh.us/swe.jpg');
    }
})

// how do dice even work (idk, must be hard)
function rolldie(sides) {
    return Math.ceil((Math.random() * sides));
}if(message.content.toLowerCase().match(/^poll/)){

  }

// roll a die
// usage: roll [sides]
client.on('message', message => {
    if (message.content.toLowerCase().match(/^roll( \d*)?$/)) {
        var sides = message.content.replace(/[^0-9]/g, '');
        if (sides === '')
            sides = 6;
        var result = rolldie(sides);
        message.channel.send(result);
        console.log('die rolled: ' + result + ' out of ' + sides);
    }
});

//Event trigger for poll management
client.on('message', message => {
  var args = messaage.split(' ');

  if(args[0] === 'poll'){
    if(!args.length > 1){
      message.channel.send('Uh oh!\n---------\n- - -\n I didn\'t understand that. The proper use of the poll command is:\n`poll [Option]`.\n\n If you would like a more indepth look at poll try:\n`poll help`');
      return;
    }
    switch(args[1]){

    }
  }
});

// log in
client.login(token);
