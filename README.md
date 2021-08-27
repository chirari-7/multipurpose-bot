# multipurpose-bot

a multipurpose discord bot made with dbd.js/aoi.js!

august 27, 2021
i will no longer continue to do updates with this repository. sorry for the inconvenience.

### 💖 installation and setup

- first, go to `index.js` and change TOKEN with your bot token.
> example:
```js
const bot = new dbd.Bot({
  mobile: false, // you can change it to "true" if you want a mobile status
  token: "TOKEN", // change TOKEN with your bot token
  prefix: ['$getServerVar[prefix]', '<@!$clientID>', '<@$clientID>'] // you may change the bot's main prefix in vars.js
})
```

- after setting that up. go to `vars.js` and change you main prefix!
- don't change/remove anything in `vars.js` except for the prefix.
> example:
```js
module.exports = ({
prefix: ";", // you can change it with desired prefix
})
```

- now, for the bot status.
> example:
```js
bot.status({
    text: `with $serverCount servers`, // put any text
    type: "PLAYING", // LISTENING, PLAYING, WATCHING, COMPETING
    status: "online", // online, dnd, idle, invisible
    time: 75 // amount of times where you can change the bot status (if have multiple statuses)
    })
```

- for multiple bot statuses do this.
> example:
```js
bot.status({
    text: `in games`,
    type: "COMPETING",
    status: "online", 
    time: 75 
    })
    
bot.status({
    text: `music`, 
    type: "LISTENING", 
    status: "online", 
    time: 75
    })

bot.status({
    text: `tv shows`, 
    type: "WATCHING", 
    status: "online", 
    time: 75
    })
```

- for streaming status.
```js
bot.status({
    text: "text", 
    type: "STREAMING", 
    url: "enter url/link"
    })
```

in the console, type `npm i dbd.js@2.2.6` and `npm i dbd.db`.
or, if you want the latest one, do `npm i dbd.js@latest` and `npm i dbdjs.db`
(but you may have to change some particular things in the codes)
then to start the bot, type `node index.js`.
then there you go! you have made your multipurpose bot!

### 💝 features and commands
🔨 utility:
```
help
command
invite
ping
setprefix
```
🎉 fun:
```
meme
gun
rip
```
⬆ leveling:
```
leveling enable/disable (enabled by default)
levels
exp
expcooldown
```
💲 economy:
```
daily
work
beg
pay
roulette
balance
leaderboard
award (Bot Developer only command)
```
ℹ information:
```
userinfo
channelinfo
roleinfo
serverinfo
botinfo
developerinfo
```
🎵 music:
```
play
stop
pause
resume
skip
skipto
queue
lyrics
volume
loopqueue
loopsong
nowplaying
```
🌌 miscellaneous
```
avatar
membercount
emojicount
poll
```
👩‍💻 developer
```
eval
```
