module.exports = ({
    name: "balance",
    aliases: ['bal', 'money', 'cash'],
    description: "See your or a user's balance",
    usage: "balance (user)",
    category: "economy",
    code: `$color[RANDOM]
    $title[$username[$findMember[$message]]'s balance]
    $description[<@$findMember[$message]> currently has $getGlobalUserVar[money;$findMember[$message]]💴.]
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}{delete:$getCooldownTime[globalUser;balance;$authorID;yes]ms}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})