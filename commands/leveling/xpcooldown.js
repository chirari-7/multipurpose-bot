module.exports = ({
    name: "expcooldown",
    aliases: ['xpcooldown'],
    description: "Change the server EXP cooldown",
    category: "leveling",
    usage: "expcooldown <number in seconds>",
    code: `$description[✅ I set EXP cooldown to "$message".]
    $color[RANDOM]
    $setServerVar[expcd;$message]
    $onlyIf[$message!=;{description:You have to specify a message to change the server EXP cooldown!(In seconds)
        Example - $getServerVar[prefix]expcooldown 60 (1 minute)}{color:RANDOM}]
   $onlyIf[$checkContains[$channelType;text;news]==true;]
   $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;{description: Leveling is not enabled in this server! To enable it, do \`$getServerVar[prefix]leveling enable\`}{color:RANDOM}]
   $onlyPerms[manageserver;{description:❌ You require these permissions - **Manage Server** }{color:RANDOM}]`
  })
