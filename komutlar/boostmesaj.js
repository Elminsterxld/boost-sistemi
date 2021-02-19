const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {


if(!args[0]) return message.reply('Bir seçenek belirt, belirtebileceğin seçenekler: <ayarla> <mesaj>/<sıfırla>')
if(args[0]) {
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") {
    return message.reply("Lütfen geçerli bir seçenek belirt, belirtebileceğin seçenekler: <ayarla> <mesaj>/<sıfırla>")
}
  if(args[0] == "ayarla") {
    if(!args[1]) {
      return message.reply('Bir Mesaj Girmelisin.')
    } else {
      let msj = args.slice(1).join(' ')
      if(!msj) {
        return message.reply('Lütfen geçerli bir mesaj gir.')
      } else {
       db.set(`boostmesaj_${message.guild.id}`, `${args.slice(1).join(' ')}`)
       message.reply(`Boost Mesajı başarıyla **${args.slice(1).join(' ')}** olarak ayarlandı.`)
      }
    }
  }
  if(args[0] == "sıfırla") {
    db.delete(`boostmesaj_${message.guild.id}`)
    message.reply(`Boost Mesajı başarıyla sıfırlandı.`)
  }
}
  
};
exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['boost-mesaj'],

  permlevel: 0

}

exports.help = {

  name: 'boost-mesaj',

  description: 'kız olarak kayıt eder',

  usage: '!kız @kullanıcı isim yaş'

}
//xports.requires = {
  // usage: "boost-mesaj",
  // permLvL: "MANAGE_GUILD",
 //  guildOnly: "E",
  // disabled: "H",
 //  blacklist: "H",
 //  aliases: ["boostmesaj"],
  // aciklama: "test"
