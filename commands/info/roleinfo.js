module.exports = ({
    name: "roleinfo",
    aliases: ['roleinformation'],
    description: "Know information about a specific server role",
    usage: "roleinfo <role>",
    category: "information",
    code: `$color[$role[$findRole[$message];hex]]
    $author[$userTag;$authorAvatar]
    $title[Role Information]
    $addField[Hoisted; $replaceText[$replaceText[$checkCondition[$isHoisted[$findRole[$message]]==true];true;Yes];false;No];yes]
    $addField[Mentionable; $replaceText[$replaceText[$checkCondition[$isMentionable[$findRole[$message]]==true];true;Yes];false;No];yes]
    $addField[Hex; $role[$findRole[$message];hex];yes]
    $addField[ID; $findRole[$message];yes]
    $addField[Position; $role[$findRole[$message];position];yes]
    $addField[Creation Date; $role[$findRole[$message];created];yes]
    $addTimestamp
    $onlyIf[$findRole[$message]!=;{description: :x: That role doesn't exist!}{color:RANDOM}]
    $onlyIf[$message!=;{description:You have to specify a role to see that role's information!}{color:RANDOM}]
    $suppressErrors[{description:An error occurred! Please contact the Bot Developer if this keeps happening!}{color:RANDOM}]
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})
