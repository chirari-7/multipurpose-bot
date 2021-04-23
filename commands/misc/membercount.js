module.exports = ({
    name: "membercount",
    aliases: ['memberscount'],
    usage: "",
    category: "miscellaneous",
    code: `$color[RANDOM]
    $author[$serverName;$serverIcon]
    $description[**$membersCount** members]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
