module.exports = ({
    name: "userinfo",
    aliases: ['userinformation', 'whois'],
    description: "Know information about a user",
    usage: "userinfo (user)",
    category: "info",
    code: `$color[RANDOM]
    $thumbnail[$userAvatar[$findMember[$message]]]
    $author[$userTag[$findMember[$message]];$userAvatar[$findMember[$message]]]
    $title[User Information]
    $addField[Bot; $replaceText[$replaceText[$checkCondition[$isBot[$findMember[$message]]==true];true;Yes];false;No]]
    $addField[Roles;
    $replaceText[$replaceText[$checkCondition[$charCount[$userRoles[$findMember[$message];mentions;/]]>1850];true;User has too many roles to be displayed];false;$userRoles[$findMember[$message];mentions; ]]]
    $addField[Highest Role; <@&$highestRole[$findMember[$message]]>;yes]
    $addField[ID; $findMember[$message];yes]
    $addField[Platform; $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];None;None];web;Website];mobile;Phone];desktop;PC];yes]
    $addField[Status; $replaceText[$replaceText[$replaceText[$replaceText[$status[$findMember[$message]];offline;Offline];online;Online];dnd;Do not disturb];idle;Idle];yes]
    $addField[Creation Date; $creationDate[$findMember[$message]];yes]
    $addField[Join Date; $memberJoinedDate[$findMember[$message]];yes]
    $addTimestamp
    $footer[Requested by $userTag;$authorAvatar]
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}{delete:$getCooldownTime[globalUser;userinfo;$authorID;yes]ms}]
    $onlyIf[$findMember[$message;no]!=;{description: :x: Couldn't find that member in the server!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
