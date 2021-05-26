// for dbd.js 2.2.6 version

module.exports = ({
    name: "meme",
    category: "fun",
    description: "Shows a random meme from Reddit",
    usage: "", 
    code: `$djseval[(async()=>{
   channel.startTyping()
   const Discord = require('discord.js')
   const fetch = require('node-fetch')
   const subReddits = ["dankmeme", "meme", "memes"\\];
   const random = Math.floor(Math.random() * subReddits.length)
   var body = await fetch('https://www.reddit.com/r/' + subReddits[random\\] + '/random/.json')
   body = await body.json()
   
   const a = body[0\\]
   const embed = new Discord.MessageEmbed()
   .setTitle(a.data.children[0\\].data.title)
   .setURL('https://reddit.com'+a.data.children[0\\].data.permalink)
   .setColor('RANDOM')
   .setImage(a.data.children[0\\].data.url_overridden_by_dest)
   .setFooter('👍 ' + a.data.children[0\\].data.ups + ' 💬 ' + a.data.children[0\\].data.num_comments + ' - ' + a.data.children[0\\].data.subreddit_name_prefixed);
   message.channel.send(embed)
   channel.stopTyping()
   })()]
   $cooldown[3s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
   $onlyIf[$checkContains[$channelType;text;news]==true;]`
   })  

// for dbd.js latest version
// remove all `//` at the side and delete the code above

// module.exports = ({
//    name: "meme",
//    category: "fun",
//    description: "Shows a random meme from Reddit",
//    usage: "", 
//    code: `$djseval[(async()=>{
//   channel.startTyping()
//   const Discord = require('discord.js')
//   const fetch = require('node-fetch')
//   const subReddits = ["dankmeme", "meme", "memes"];
//   const random = Math.floor(Math.random() * subReddits.length)
//   var body = await fetch('https://www.reddit.com/r/' + subReddits[random] + '/random/.json')
//   body = await body.json()
   
//   const a = body[0]
//   const embed = new Discord.MessageEmbed()
//   .setTitle(a.data.children[0].data.title)
//   .setURL('https://reddit.com'+a.data.children[0].data.permalink)
//   .setColor('RANDOM')
//   .setImage(a.data.children[0].data.url_overridden_by_dest)
//   .setFooter('👍 ' + a.data.children[0].data.ups + ' 💬 ' + a.data.children[0].data.num_comments + ' - ' + a.data.children[0].data.subreddit_name_prefixed);
//   message.channel.send(embed)
//   channel.stopTyping()
//   })()]
//   $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
//   $onlyIf[$checkContains[$channelType;text;news]==true;]`
//   })
