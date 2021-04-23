module.exports = ({
    name: "emojicount",
    aliases: ['emojiscount'],
    usage: "",
    category: "miscellaneous",
    code: `$color[RANDOM]
    $author[$serverName;$serverIcon]
    $description[**$emojiCount** emojis
    
    **Emojis**
    $replaceText[$replaceText[$checkCondition[$serverEmojis==];true;$serverEmojis];false;$serverName has no custom emojis.]
    ]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
