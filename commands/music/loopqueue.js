module.exports = ({
    name: "loopqueue",
    aliases: ['lpq', 'lq'],
    description: "Loops the current queue",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[🔁 $replaceText[$replaceText[$loopQueue;true;Now looping the queue!];false;No longer looping the queue.]]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})
