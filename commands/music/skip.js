module.exports = ({
    name: "skip",
    aliases: ['s'],
    description: "Skips the current playing song",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏩ Skipped the song!]
    $skipSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})