module.exports = ({
    name: "exp",
    aliases: ['xp'],
    description: "Check your or a user's current server EXP",
    usage: "exp (user)",
    category: "leveling",
    code: `$color[RANDOM]
    $description[<@$findMember[$message]>'s current EXP is **$getUserVar[xp;$findMember[$message]]**!
They need **$replaceText[$sub[$sum[$getUserVar[req;$findMember[$message]];0];$getUserVar[xp;$findMember[$message]]];-; ;1]** EXP in order to get Level **$sum[$getUserVar[level;$findMember[$message]];1]**!]
$cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}{delete:$getCooldownTime[globalUser;exp;$authorID;yes]ms}]
$onlyIf[$isBot[$findMember[$message]]==false;{description: Mention a User, not a Bot!}{color:RANDOM}]
$onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;{description: Leveling is not enabled in this server! To enable it, do \`$getServerVar[prefix]leveling enable\`}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})
