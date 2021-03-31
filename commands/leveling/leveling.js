module.exports = ({
    name: "leveling",
    aliases: ['lvling'],
    description: "Change whether leveling should be enabled or disabled in the server",
    usage: "leveling <enable/disable>",
    category: "leveling",
    code: `$color[RANDOM]
    $description[✅ Leveling is now "$getServerVar[leveling]".]
    $setServerVar[leveling;$toLowerCase[$message[1]]]
    $onlyIf[$getServerVar[leveling]!=$message[1];{description: Leveling is already $message[1]!}{color:RANDOM}]
    $onlyIf[$checkContains[$message[1];enable;disable;enabled;disabled]==true;{description: Choose only between "enable" or "disable"!}{color:RANDOM}]
    $onlyIf[$message[1]!=; {description: Please specify whether to "enable" or "disable" leveling in this server!}{color:RANDOM}]
    $onlyPerms[manageserver;{description:❌ You require these permissions - **Manage Server** }{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
