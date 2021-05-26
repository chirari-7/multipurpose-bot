module.exports = ({
    name: "help",
    aliases: ['h', 'commands', 'cmds'],
    description: "Show the list of commands",
    usage: "",
    category: "utility",
    code:
    `
    $thumbnail[$userAvatar[$clientID]]
    $description[Do \`$getServerVar[prefix]command <command name>\` to show a command's information
Utility:
\`\`\`
help
command
invite
ping
setprefix
\`\`\`
Fun:
\`\`\`
meme
gun
rip
\`\`\`
Leveling:
\`\`\`
leveling enable/disable (enabled by default)
levels
exp
expcooldown
\`\`\`
Economy:
\`\`\`
daily
work
beg
pay
roulette
balance
leaderboard
award (Bot Developer only)
\`\`\`
Information:
\`\`\`
userinfo
channelinfo
roleinfo
serverinfo
botinfo
developerinfo
\`\`\`
Music:
\`\`\`
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
\`\`\`
Miscellaneous: 
\`\`\`
avatar
membercount
emojicount
poll
\`\`\`
Developer:
\`\`\`
eval
\`\`\`
]
$color[RANDOM]`
    })
