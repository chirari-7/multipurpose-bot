module.exports = ({
    name: "leveling",
    aliases: ['lvling'],
    description: "Change whether leveling should be enabled or disabled in the server",
    usage: "leveling <enable/disable>",
    category: "leveling",
    code: `$color[RANDOM]
    $description[✅ Done! Leveling is now "$replaceText[$replaceText[$checkCondition[$message==enable];true;enabled];false;disabled]".]
    $setServerVar[leveling;$toLowerCase[$message]]
    $onlyIf[$message[1]!=; {description: Please specify whether to enable or disable leveling in this server!}{color:RANDOM}]
    $onlyIf[$getServerVar[leveling]!=$message;{description: Leveling is already $messaged!}{color:RANDOM}]
    $onlyPerms[manageserver;{description:❌ You require these permissions - **Manage Server** }{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
