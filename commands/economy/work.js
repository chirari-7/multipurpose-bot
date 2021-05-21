module.exports = ({
    name: "work",
    desription: "Work to earn more money!",
    usage: "",
    category: "economy",
    code: `$color[RANDOM]
    $description[You worked and got $random[50;2000]💴!]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[50;2000]]]
    $globalCooldown[1h;{description: You can work again in **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`    
})
