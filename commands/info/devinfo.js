// use the code below if you use `dbd.js 2.2.6`

module.exports = ({
    name: "developerinfo", 
    aliases: ['devinfo', 'whoisdev'],
    description: "Know about my developer!",
    usage: "",
    category: "information",
    code: `$title[Click the link!;https://github.com/baeriri/multipurpose-bot]
    $author[$userTag[$botOwnerID]]
    $color[RANDOM]
    $thumbnail[$userAvatar[$botOwnerID]]
    $description[You may contact the developer by clicking this [link\\](https://discordapp.com/users/$botOwnerID)!]
    $addField[Platform; $replaceText[$replaceText[$replaceText[$replaceText[$platform[$botOwnerID];none;None];web;Website];mobile;Phone];desktop;PC]]
    $addField[Custom Discord Status; $replaceText[$replaceText[$checkContains[$getCustomStatus[$botOwnerID;state];none];true;None];false;$getCustomStatus[$botOwnerID;state]]]]
    $addField[Status; $replaceText[$replaceText[$replaceText[$replaceText[$status[$botOwnerID];offline;Offline];online;Online];dnd;Do not disturb];idle;Idle]]
    $addField[Joined Discord;$creationDate[$botOwnerID]]
    $addTimestamp
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $botTyping`
    })

// use this code if you're using the latest version of dbd.js (dbd.js@latest)
// remember to remove every `//` at the side and delete the code above!

// module.exports = ({
//    name: "developerinfo", 
//    aliases: ['devinfo', 'whoisdev'],
//    description: "Know about my developer!",
//    usage: "",
//    category: "information",
//    code: `$title[Click the link!;https://github.com/baeriri/multipurpose-bot]
//    $author[$userTag[$botOwnerID]]
//    $color[RANDOM]
//    $thumbnail[$userAvatar[$botOwnerID]]
//    $description[You may contact the developer by clicking this [link\\](https://discordapp.com/users/$botOwnerID)!]
//    $addField[Platform; $replaceText[$replaceText[$replaceText[$replaceText[$platform[$botOwnerID];none;None];web;Website];mobile;Phone];desktop;PC]]
//    $addField[Custom Discord Status; $replaceText[$replaceText[$checkContains[$getCustomStatus[$botOwnerID;state];none];true;None];false;$getCustomStatus[$botOwnerID;state]]]]
//    $addField[Status; $replaceText[$replaceText[$replaceText[$replaceText[$status[$botOwnerID];offline;Offline];online;Online];dnd;Do not disturb];idle;Idle]]
//    $addField[Joined Discord;$creationDate[$botOwnerID]]
//    $addTimestamp
//    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
//    $botTyping`
//    })
