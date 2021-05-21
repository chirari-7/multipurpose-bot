module.exports = ({
    name: "beg",
    description: "Beg for money!",
    usage: "",
    category: "economy",
    code: `$color[RANDOM]
    $description[You begged from $randomMention and got $random[10;500]💴!]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[10;500]]]
    $globalCooldown[25s;{description: Don't beg so much... Do it again in **%time%!**}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`    
})
