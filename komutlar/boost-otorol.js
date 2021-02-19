const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const ayarlar = require("../ayarlar.json");
let prefix = await db.fetch(`prefix_${message.guild.id}`) || "!";    
let rol = message.mentions.roles.first() 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:by:  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`:x:  **Lütfen Bir Rol Belirt!**\nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n**__Örnek Kullanım__** : \`${prefix} boost-rol @rol \`\n\n**__Önemli Not!!__**: **Boost Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Bir Rolde Olmalı Yoksa Rolü Veremez!** `)
 
 
 
  message.channel.send(`╔▬▬▬▬▬▬▬Boost Otorol▬▬▬▬▬▬▬▬▬
║► ✅ Boost Rol Aktif Edildi.
║► ✅  **${rol}** Olarak Güncelledim! 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`boostrol_${message.guild.id}`, rol.id)  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['boost-rol']
  };
  
  exports.help = {
    name: 'boost-rol',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };
