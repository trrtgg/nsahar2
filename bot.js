const Discord = require('discord.js');
const client = new Discord.Client();
console.log("BOT هههه.");
 
 
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**السلام عليكم
-أحادثينا حقيقية وتواجدنا دائم حتى وأن ضاقت بك الأوقات
‏دائم التواجد لذلك أقترب ولا تزيد أضعاف المسافة**. ♥
https://discord.gg/S3Pw2j9
[ ${member}  ]
@everyone
@here
`)
}).catch(console.error)
})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**السلام عليكم
-أحادثينا حقيقية وتواجدنا دائم حتى وأن ضاقت بك الأوقات
‏دائم التواجد لذلك أقترب ولا تزيد أضعاف المسافة**. ♥
https://discord.gg/S3Pw2j9
[ ${member}  ]
@everyone
@here
`)
}).catch(console.error)
})
 
 
 
 
 
 
 
 
client.login(process.env.BOT_TOKEN);
