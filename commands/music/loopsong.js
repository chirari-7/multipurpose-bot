module.exports = ({
    name: "loopsong",
    aliases: ['lps', 'ls'],
    description: "Loops the current song",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[🔁 $replaceText[$replaceText[$loopSong;true;Now looping the song!];false;No longer looping the song.]]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
