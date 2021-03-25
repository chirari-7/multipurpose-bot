module.exports = ({
    name: "stop",
    aliases: ['st'],
    description: "Stops the current playing song",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏹ Stopped the song!]
    $stopSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})