module.exports = ({
    name: "channelinfo",
    aliases: ['channelinformation', 'chnlinformation', 'chnlinfo'],
    description: "Know information about a specific server channel",
    usage: "channelinfo (channel)",
    category: "information",
    code: `$color[RANDOM]
    $author[$userTag;$authorAvatar]
    $title[Channel Information]
    $addField[Viewable; $replaceText[$replaceText[$checkCondition[$channel[$findServerChannel[$message];isviewable]==true];true;Yes];false;No];yes]
    $addField[ID; $findServerChannel[$message];yes]
    $addField[Position; $channel[$findServerChannel[$message];rawposition];yes]
    $addField[Topic; $replaceText[$replaceText[$checkCondition[$channelTopic[$findServerChannel[$message]]!=];true;$channelTopic[$findServerChannel[$message]]];false;None];yes]
    $addField[Type; $toLocaleUpperCase[$channelType[$findServerChannel[$message]]];yes]
    $addField[Creation Date; $channel[$findServerChannel[$message];created];yes]$addTimestamp
    $onlyIf[$findServerChannel[$message;no]!=;{description: :x: That server channel doesn't exist!}{color:RANDOM}]
    $suppressErrors[{description:An error occurred! Please contact the Bot Developer if this keeps happening!}{color:RANDOM}]
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
