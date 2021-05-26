module.exports = ({
    name: "rip",
    aliases: ['dead'],
    usage: "rip (user)",
    description: "⚰",
    category: "fun",
    code: `$color[RANDOM]
    $image[https://dinosaur.ml/overlay/rip/?image=$userAvatar[$findUser[$message]]]
    $cooldown[3s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
   $onlyIf[$checkContains[$channelType;text;news]==true;]`
})