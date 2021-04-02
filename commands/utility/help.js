module.exports = ({
    name: "help",
    aliases: ['h', 'commands', 'cmds'],
    description: "Show the list of commands",
    usage: "",
    category: "utility",
    code:
    `
    $thumbnail[$userAvatar[$clientID]]
    $description[Do \`$getServerVar[prefix]commandinfo <command name>\` to show a command's information
Utility:
\`\`\`
help
invite
ping
setprefix
\`\`\`
Leveling:
\`\`\`
leveling enable/disable [enabled by default\\]
levels
exp
expcooldown
\`\`\`
Economy:
\`\`\`
daily
work
beg
balance
leaderboard
award [Bot Developer only\\]
\`\`\`
Information:
\`\`\`
commandinfo
userinfo
channelinfo
roleinfo
serverinfo
botinfo
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
\`\`\`]
$color[RANDOM]`
    })
