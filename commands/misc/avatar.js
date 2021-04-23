module.exports = ({
    name: "avatar",
    aliases: ['av'],
    description: "Get your or a user's avatar",
    usage: "avatar (user)",
    category: "miscellaneous",
    code: `$color[RANDOM]
    $author[$userTag;$authorAvatar]
    $description[<@$findMember[$message]>'s avatar]
    $image[$userAvatar[$findMember[$message]]]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
