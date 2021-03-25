module.exports = ({
    name: "pause",
    aliases: ['ps'],
    description: "Pause the current playing song",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏸ Paused the song!]
    $pauseSong
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})