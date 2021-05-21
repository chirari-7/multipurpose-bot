module.exports = ({
    name: "command",
    aliases: ['cmd'],
    description: "Know information about a specific command",
    usage: "command <command name>",
    category: "utility",
    code:
    `
    $title[$toLocaleUppercase[$commandInfo[$message[1];name]]]
    $description[<> - Mandatory arguments
() - Optional arguments]
    $color[RANDOM]
    $addField[Usage;$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];usage]!=];true;$commandInfo[$message[1];usage]];false;None];yes]
    $addField[Aliases;$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];aliases]!=];true;$replaceText[$commandInfo[$message[1];aliases];,;, ]];false;None]]
    $addField[Description;$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];description]!=];true;$commandInfo[$message[1];description]];false;None]]
    $addField[Category;$toLocaleUpperCase[$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];category]!=];true;$commandInfo[$message[1];category]];false;None]];yes]
    $onlyIf[$commandInfo[$message[1];name]!=;{description:❌ That is not a valid command!}{color:RANDOM}]
    $onlyIf[$message!=;{description:You have to specify a command name to see information!}{color:RANDOM}]
    $addTimestamp
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}{delete:$getCooldownTime[globalUser;commandinfo;$authorID;yes]ms}]
    `
    })
