module.exports = ({
    name: "award",
    aliases: ['reward'],
    description: "Award a user some money",
    usage: "award <amount> <user>",
    category: "economy",
    code: `$color[RANDOM]
    $author[$userTag[$findMember[$messageSlice[1]]];$userAvatar[$findMember[$messageSlice[1]]]]
    $description[<@$findMember[$messageSlice[1]]> has been awarded $message[1]💴!]
    $setGlobalUserVar[money;$sum[$getGLobalUserVar[money;$findMember[$messageSlice[1]]];$message[1]];$findMember[$messageSlice[1]]]
    $onlyIf[$isBot[$findMember[$message[2]]]==false;{description: Why not try mention a user that is not a bot?}{color:RANDOM}]
    $onlyIf[$findMember[$message[2]]!=;{description: <@$botOwnerID>, maybe try mentioning a user?}{color:RANDOM}]
    $onlyIf[$isNumber[$message[1]]==true;{description: Argument must be a number!}{color:RANDOM}]
    $onlyIf[$message[1]!=;{description: Specify the amount to award.}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;{description: Please do this in a guild!}{color:RANDOM}]
    $onlyForIDs[$botOwnerID;{description:❌ You are not my Developer}{color:RANDOM}]
    $suppressErrors[{description: Correct Usage: $getServerVar[prefix]award <amount> <user>}{color:RANDOM}]
    `
})
