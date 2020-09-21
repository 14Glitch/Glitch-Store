const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const pkg = require('./package.json');
const ytdl = require("ytdl-core");
const ytSearch = require( 'yt-search' );
const config = require("./config.json"); 


client.on('ready', () => {
    console.log(`O ${client.user.username} foi iniciado com sucesso! Com ${client.users.size} usuários, ${client.channels.size} canais e ${client.guilds.size} servidores.`);
    let status = [
        {name:`Glitch | DISCORD!`, type: 'PLAYING'},
        {name:`${client.users.size} pessoas!`, type: 'LISTENING'},
        {name:`By Glitch14`, type: 'STREAMING', url:'https://twitch.tv/glitch144'},
        {name: `Eu amo a Glitch | Discord`, type: 'WATCHING'}
    ]
    function setStatus(){ //Função para o BOT mudar de Status aleatoriamente
        let randomStatus = status[Math.floor(Math.random()*status.length)]
        client.user.setPresence({game: randomStatus})
    }
    setStatus();
    setInterval(() => setStatus(),5000)
});
client.on("message", async message => {

    if (message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    if (!message.content.indexOf(config.prefix) == -1) return;
});
//música
if (command === "play") {
  let avatarMember = message.author.displayAvatarURL
  let targetLink = arg.join(' ');
  let member = message.author;
  let memberUsername = message.author.username;
  let channelId1 = message.member.voiceChannelID;
  let VoiceChannel = message.guild.channels.find(channel => channel.id === channelId1)
  
    if (VoiceChannel === null) {
      let embed = new Discord.RichEmbed()
        .addField("Ocorreu um erro", `I cannot connect to (**${targetLink}**), cause you aren't in a voice channel, or in one that i cannot access.`)
        .setFooter(`${memberUsername}`, avatarMember)
        .setColor("#ff1a1a")
      message.channel.send(embed)
  } if (VoiceChannel !== null) {
    let validateURL = ytdl.validateURL(targetLink)
    if (validateURL === true) {
      VoiceChannel.join()
      .then(connection => {
        let stream = ytdl(`${targetLink}`, {filter: 'audioonly'});
        let DJ = connection.playStream(stream, streamOptions)
        DJ.on('end', end => {
          VoiceChannel.leave()
        })})}
    
      ytSearch( targetLink, function ( err, r ) {
      if ( err ) throw err

      const videos = r.videos
      const playlists = r.playlists
      const accounts = r.accounts
      const firstResult = videos[ 0 ]
      let urlVideo = firstResult.url
      let nameURL = firstResult.title
      let viewsNumber = firstResult.views
      let channelName = firstResult.author.name
      let durationTimestamp = firstResult.timestamp
      
      let validateURL = ytdl.validateURL(targetLink)
      if (validateURL === false) {
        let embed = new Discord.RichEmbed()
          .addField("Result found!", `I did find it:\n`)
          .addField(":musical_note: Music", `[${nameURL}](${urlVideo})`)
          .addField("⠀", "⠀")
          .addField("Duration :clock4:⠀⠀⠀⠀", `${durationTimestamp}`,true)
          .addField(":satellite: Views⠀⠀⠀⠀", `${viewsNumber}`,true)
          .addField(":bookmark: By⠀⠀⠀⠀", `${channelName}`,true)
          .setFooter(`${memberUsername}`, avatarMember)
          .setColor("#34ff1c")
      message.channel.send(embed)
      }
        VoiceChannel.join()
      .then(connection => {
        let stream = ytdl(`${urlVideo}`, {filter: 'audioonly'});
        
        let DJ = connection.playStream(stream, streamOptions)
        DJ.on('end', end => {
          VoiceChannel.leave()
      })
        let embed = new Discord.RichEmbed()
        .addField("Connected.", `I'm connected on (**${urlVideo}**)`)
        .setFooter(`${memberUsername}`, avatarMember)
        .setColor("#34ff1c")
        message.channel.send(embed)
        
        
      } )
      }
    )}
  }

if (command === "leave") {
  let member = message.author
  let avatarMember = message.author.displayAvatarURL
  let channelId1 = message.member.voiceChannelID;
  let VoiceChannel2 = message.guild.channels.find(channel => channel.id === channelId1);
  let embed = new Discord.RichEmbed()
    .addField("Disconnected.", `Disconnected. (ChannelID: **${channelId1}**)`)
    .setFooter(`${member.username}`, avatarMember)
    .setColor("#3ffffb")
  const byeLeaveCommandMusic = await message.channel.send(embed)
  byeLeaveCommandMusic.react("👋")
  VoiceChannel2.leave();
}

if (command === "volume") {
var volumeNow = arg[0]
if (!volumeNow) return message.reply(`me diga um volume para alterar!`)
streamOptions.volume = volumeNow
message.channel.send('Volume do ' + sys.p + 'play alterado para `' + streamOptions.volume + '`')
}


          



client.login(config.Token)  
