module.exports = ({
    name: "gun",
    aliases: ['shoot'],
    category: "fun",
    description: "Hold a gun",
    usage: "gun (user)",
    code: `
    $image[https://api.tomio.codes/api/gun?url=$replaceText[$userAvatar[$findUser[$message]];webp;png]]
    $color[RANDOM]
    $addTimestamp
    $cooldown[3s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
   })