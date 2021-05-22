module.exports = ({
    name: "$alwaysExecute",
    code: `
   $setUserVar[xp;$sum[$getUserVar[xp];$random[5;25]]]
   $cooldown[$getServerVar[expcd]s;]
   
   $onlyIf[$isBot[$authorID]==false;]
   $onlyIf[$checkContains[$channelType;text;news]==true;]
   $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;]
   $suppressErrors` 
   })
