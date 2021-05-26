module.exports = ({
    name: "botinfo", 
    aliases: ['botstats'],
    description: "Check the bot's information/stats",
    usage: "",
    category: "information",
    code: `$title[Botinfo ($username[$clientID])]
    $color[RANDOM]
    $thumbnail[$userAvatar[$clientID]]
    $addField[RAM; $ramMB]
    $addField[CPU Usage; $cpu/100]
    $addField[Ping; $pingms]
    $addField[Uptime;$uptime]
    $addField[Commands; $commandsCount]
    $addField[Users;$allMembersCount]
    $addField[Channels;$allChannelsCount]
    $addField[Servers;$serverCount]
    $addField[Version;1.0.0]
    $addField[Created;$creationDate[$clientID]]
    $addField[Developer;$userTag[$botOwnerID]]
    $addTimestamp
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]`
    })
