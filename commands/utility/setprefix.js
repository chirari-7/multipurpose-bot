module.exports = ({
    name: "setprefix",
    aliases: ['changeprefix', 'prefix'],
    usage: "setprefix <prefix>",
    description: "change the server prefix",
    category: "utility",
    code: `$description[✅ Done! My new prefix is "$message".]
    $color[RANDOM]
    $setServerVar[prefix;$message]
    $onlyIf[$message[1]!=;{description:You have to specify a message to change the server prefix! 
    Example - $getServerVar[prefix]}{color:RANDOM}]
    $onlyPerms[admin;{description:❌ You require these permissions - **Administrator** }{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
    })