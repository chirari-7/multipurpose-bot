module.exports = ({
    name: "roulette",
    aliases: ['rl'],
    description: "Play the roulette.",
    usage: "roulette <amount> <red/black>",
    category: "economy",
    code: `$color[RANDOM]
   $title[__Roulette Game__]
   $thumbnail[$authorAvatar]
   $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[2]]==$randomText[red;black]];true;$message[1]];false;-$message[1]]]]
   
   $description[Your choice: **$replaceText[$replaceText[$toLowercase[$message[2]];red;red (🔴)];black;black (⚫)]**.
Testing your luck, please wait...]
   $editIn[5s;{color:RANDOM}{description: The ball landed on __**$randomText[red;black]**__!
   
   $replaceText[$replaceText[$checkCondition[$toLowercase[$message[2]]==$randomText[red;black]];true;You won **$message[1]**💴!];false;You lost **$message[1]**💴.] 
   
   Now you have: **$sum[$getGlobalUserVar[money];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[2]]==$randomText[red;black]];true;$message[1]];false;-$message[1]]]**💴.}]
   $addTimestamp
   $onlyIf[$getGlobalUserVar[money]>=$message[1];{description:description:You can't bet more than what you have!}{color:RANDOM}]
   $onlyIf[$isNumber[$message[1]]==true;{description: Argument must be a number!}{color:RANDOM}]
   $onlyIf[$checkContains[$message[2];red;black]==true;{description:Choose between **red** or **black**!}{color:RANDOM}]
   $onlyIf[$message[1]!=;{description: You need to specify the amount of 💴 to play the roulette!}{color:RANDOM}]
   $globalCooldown[3m;{description: You can play the roulette again in **%time%**!}{color:RANDOM}]
   $onlyIf[$checkContains[$channelType;text;news]==true;]`
   });
