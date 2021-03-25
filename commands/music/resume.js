module.exports = ({
    name: "resume",
    aliases: ['rs'],
    description: "Resume the current paused song",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[▶ Resumed the song!]
    $resumeSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})