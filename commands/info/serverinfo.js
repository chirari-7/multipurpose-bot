module.exports = ({
    name: "serverinfo",
    aliases: ['serverinformation', 'servinformation', 'servinfo'],
    description: "Know information about the server",
    usage: "",
    category: "information",
    code: `$color[RANDOM]
    $thumbnail[$serverIcon]
    $author[$serverName;$serverIcon]
    $title[Server Information]
    $addField[Other;
    Verification Level: $serverVerificationLevel
    Content Filtering: $serverContentFilter$replaceText[$replaceText[$checkCondition[$serverFeatures==];true;];false;
    Features: $serverFeatures;yes]
    Creation Date: $creationDate[$guildID]
    Guild ID: $guildID]
    $addField[Members;
    Total: $membersCount
    Online: $sum[$membersCount[$guildID;online];$membersCount[$guildID;dnd];$membersCount[$guildID;idle]]
    Offline: $membersCount[$guildID;offline]$replaceText[$replaceText[$checkCondition[$botCount<1];true;];false;
    Bots: $botCount]]
    $addField[Boost;
    Level: $serverBoostLevel
    Boosts: $serverBoostCount$replaceText[$replaceText[$checkCondition[$vanityURL==];true;];false;
    Vanity URL: discord.gg/$vanityURL
    Vanity Uses: $vanityUses]]
    $addField[General;
    Owner: <@$ownerID>
    Region: $serverRegion
    Channel Count: $channelCount$replaceText[$replaceText[$checkCondition[$roleCount==0];true;];false;
    Role Count: $roleCount]$replaceText[$replaceText[$checkCondition[$emojiCount==0];true;];false;
    Emoji Count: $emojiCount]$replaceText[$replaceText[$checkCondition[$serverBoostCount==0];true;];false;]]
    $addTimestamp  
$cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})
