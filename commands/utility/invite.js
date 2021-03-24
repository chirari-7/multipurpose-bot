module.exports = ({
    name: "invite",
    aliases: ['add'],
    description: "Invite me to your server!",
    usage: "none",
    category: "utility",
    code: `$description[Click [here\\](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=1544023161) to invite me!]
    $color[RANDOM]`
})