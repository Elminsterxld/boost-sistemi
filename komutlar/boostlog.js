const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR'))

        return message.channel.send(' Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın! ')

	
if(!args[0]) return message.reply('Bir seçenek belirt, belirtebileceğin seçenekler: <ayarla> <kanal>/<sıfırla>')
if(args[0]) {
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") {
    return message.reply("Lütfen geçerli bir seçenek belirt, belirtebileceğin seçenekler: <ayarla> <kanal>/<sıfırla>")
}
  if(args[0] == "ayarla") {
    if(!args[1]) {
      return message.reply('Bir kanal belirtmelisin.')
    } else {
      let kanal = message.mentions.channels.first() || client.channels.cache.get(args[1])
      if(!kanal) {
        return message.reply('Boyle Bir Kanal Bulamadim')
      } else {
       db.set(`boostlog_${message.guild.id}`, kanal.id)
       message.reply(`Boost Log başarıyla <#${kanal.id}> olarak ayarlandı.`)
      }
    }
  }
  if(args[0] == "sıfırla") {
    db.delete(`boostlog_${message.guild.id}`)
    message.reply(`Boost Log başarıyla sıfırlandı.`)
  }
}
  
};
exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['boost-log'],

  permlevel: 0

}

exports.help = {

  name: 'boostlog',

  description: 'kız olarak kayıt eder',

  usage: '!kız @kullanıcı isim yaş'

}
//exports.requires = {
  // usage: "boost-log",
  // permLvL: "MANAGE_GUILD",
  // guildOnly: "E",
  // disabled: "H",
  // blacklist: "H",
  // aliases: ["boost-log"],
   //aciklama: "test"
  
 //}