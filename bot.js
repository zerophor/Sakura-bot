const Discord = require("discord.js");
const Music = require("discord.js-music-v11")
const Cleverbot = require("cleverbot-node");
const client = new Discord.Client();
const newUsers = new Discord.Collection();
const clbot = new Cleverbot;
clbot.configure({botapi: "CC5hrPSZOpPA14AGI8IfPODvZYQ"});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`on ${client.guilds.size} servers`);

});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`you`);
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 0) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.get(guild.id).send("https://images7.alphacoders.com/677/677447.jpg \n" + "Hello," + userlist + " and welcome");
    newUsers[guild.id].clear();
  }
});

/*client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  guild.channels.get(guild.id).send("Fuckoutahere" + member + "\n http://img1.wikia.nocookie.net/__cb20140626045029/degrassi/images/4/41/Shiina_threatening.jpg" );
});*/

client.on("message", msg => {

  if (msg.content === 'ryan jones') {
    console.log(client.guilds)
    msg.reply('https://i.pinimg.com/736x/a9/ce/db/a9cedbd5d3091b1e85e74da806342731--your-hair-death-note-l.jpg ');
  }
  if (msg.content === '~re-zoop') {
    console.log(client.guilds)
    client.guilds.pruneMembers(0,true,'git fucked nurd')
    msg.reply('octopus')
  }
  if (msg.content === 'who is ian'){
    msg.reply('ᕙ(˵ ಠ ਊ ಠ ˵)ᕗ');
  }
  if (msg.content === '~hello') { 
    msg.reply('**HELLO**');
  }
  /*if (msg.content === '~rules') { 
    msg.channel.send("Hello everyone Welcome to the guild Before you get started let\'s go over some basic rules 1 Please refrain from shit talking other players outside AND inside the guild We don\'t want any bad blood or salt If it\'s just friendly banter, that\'s ok. 2. Be nice to your guild mates at all times. Again friendly banter is ok, but let\'s not create any drama. 3.  The only time NSFW images or content is allowed is if it is relevant to something occuring and if it\’s in offtopic 4. Please be active as much as you want. There will be Node Wars in the future and we will keep you updated. If you are unable to log on for an extended amount of time, please let us know in inactive 5. Bots will only work in bots, so please avoid using commands where they won\'t work. 6. If you need a contract renewal, or want to invite a friend into the guild, just let one of the officers know and we will be happy to help you. 7.  Absolutely no karma bombing. It just causes unnecessary problems. 8. Please change your nickname to your family name. It helps us quite a bit. If you don\’t know how, right click on your name in the server and hit change nickname. 9. Please attach your Class with the command ?rank [class name]. This will help everyone in the server! Thank you for reading and following the rules!",{
      tts: true
    });   
  }
 
  /*if (msg.content === 'eat my ass') {
    msg.reply('https://i.imgur.com/rBK90gF.jpg');
  }*/
  if (msg.content === '~join') {
    if (msg.member.voiceChannel) {
        msg.member.voiceChannel.join()
            .then(connection => {
                msg.reply('Hi Everyone!');
            })
    }else{
        msg.reply('Something is wrong, I am sorry');
    }
  }
  if (msg.content === '~theme') {
    if (msg.member.voiceChannel) {
        msg.member.voiceChannel.join()
            .then(connection => {
                connection.playFile('C:/Users/Ian/Desktop/CHARM_BOT/theme.mp3.mp3');
                msg.reply('**MUSIC TIME!!!**');
            })
            .then(dispatcher => {
                dispatcher.on('error', console.error);
                // You can also do things like dispatcher.pause() and dispatcher.end() here.
            })

            .catch(console.error);
    }else{
        msg.reply('Something is wrong, I am sorry');
    }
  }
  if (msg.content === 'eat my ass') {
    if (msg.member.voiceChannel) {
        msg.member.voiceChannel.join(setTimeout(function(){console.log('hi'); },4000))
            .then(connection => {
      
                connection.playFile('C:/Users/ianho/Desktop/Charm_bot/Can_do.mp3')
                msg.reply('https://i.imgur.com/rBK90gF.jpg');
                const m = await 
                 m.leave()   
            })
            .catch(console.error);
    }else{
        msg.reply('Something is wrong, I am sorry');
    }
  }
  if (msg.content === '~leave') {
     if (msg.member.voiceChannel) {
        msg.member.voiceChannel.leave()
        msg.reply('Goodbye')
    }else{
        msg.reply('Something is wrong, I am sorry');
    }
  }

  if (msg.content === '~leave') {
     if (msg.member.voiceChannel) {
        msg.member.voiceChannel.leave()
        msg.reply('Goodbye')
    }else{
        msg.reply('Something is wrong, I am sorry');
    }
  }
  if (msg.content === '~play ' + 'https://www.youtube.com/watch?v=AyPI0QHyM_A&has_verified=1' ) {
    if (msg.member.voiceChannel) {
        msg.member.voiceChannel.join()
            .then(connection => {
                connection.playFile('https://www.youtube.com/watch?v=AyPI0QHyM_A&has_verified=1');
                msg.reply('**MUSIC TIME!!!**');
            })
            .then(dispatcher => {
                dispatcher.on('error', console.error);
                // You can also do things like dispatcher.pause() and dispatcher.end() here.
            })
            .catch(console.error);
    }else{
        msg.reply('Something is wrong, I am sorry');
    }
  }
  if (msg.channel.type === "dm" && msg.author.bot === false ) {
    clbot.write(msg.content, (response) => {
      msg.channel.startTyping();
      setTimeout(() => {
        msg.channel.send(response.output).catch(console.error);
        msg.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1);
    });
  }
<<<<<<< HEAD
if (msg.content[0] === '~' && msg.content[1] === '~' && msg.author.bot === false ) {
=======
  if (msg.content[0] === "~" && msg.content[1] === "~" && msg.author.bot === false ) {
>>>>>>> 32faec2f1cb131f581d818728ce79a10fdb3fde8
    clbot.write(msg.content, (response) => {
      msg.channel.startTyping();
      setTimeout(() => {
        msg.channel.send(response.output).catch(console.error);
        msg.channel.stopTyping();
<<<<<<< HEAD
      }, Math.random() * (1 - 3) + 1 * 1);
=======
      }, Math.random() * (1 - 3) + 1 * 100);
>>>>>>> 32faec2f1cb131f581d818728ce79a10fdb3fde8
    });
  }
});
Music(client);


<<<<<<< HEAD
client.login('MzgxMTY5ODg1MzgxNjU2NTc2.DPSYAw.NvZmxj-v5YspFR_zahl9p1w0hCs');
=======
client.login('');
>>>>>>> 32faec2f1cb131f581d818728ce79a10fdb3fde8
