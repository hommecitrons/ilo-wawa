//////////////////////////////////
// - - - - - ilo wawa - - - - - //
// ilo wawa li "Discord Bot" pi //
// pana sitelen pi sitelen pona //
//////////////////////////////////

// configuration include file
const config = require("./config.json");
//    config.token - bot token
//    config.prefix - message prefix

// utility funtions
var fs = require('fs'); // for filesystem read/write

// import sitelen pona font using the FreeType Project
// var freetype = require('freetype2');
// fs.readFile('./lib/toki-pona.ttf', function(err, buffer) {
//   if (!!err) throw err;
//   var face = {};
//   var err = freetype.New_Memory_Face(buffer, 0, face);
//   if (!err) {
//     face = face.face;
//     console.log(face);
//   }
// });

// var gm = require('gm').subClass({
//   imageMagick: true,
//   appPath: 'C:\\Program Files\\ImageMagick-7.0.8-Q16'
// });

const Discord = require('discord.js');
const client = new Discord.Client();
console.log(client)

// function imagetest() {
//   console.log(`Attempting image test...`);
//   // gm('').textFont("toki-pona.ttf",24)
//   // .drawText(10, 50, "ilo wawa li ilo li wawa")
//   // .write(`./test.jpg`, function (err) {
//   // resize and remove EXIF profile data
//   waso = gm('waso.jpg').options({imageMagick: true}).noProfile();
//   console.log(`Image imported successfully!`);
//   console.log(`Attempting size check...`);
//   waso.options({imageMagick: true}).size(function (err, size) {
//     if (err)
//       console.log(`${err}`);
//     if (!err)
//       console.log(`w=${size.width}, h=${size.height}`);
//   });
//   console.log(`Attempting to write test.jpg.....`);
//   waso.options({imageMagick: true}).write('test.jpg', function (err) {
//     if(err) {
//       console.log(`No luck. :( :( :( :( :(  `);
//       console.log(err);
//     } else {
//       console.log(`Image test successful!!`);
//     }
//   });
// }

var dict = require('./lib/rawdict.json'); // dictionary of toki pona words

// function savedict() {
//   fs.writeFile("./lib/rawdict.json", JSON.stringify(dict, null, 2),
//     function(err) {
//       if (err) {
//         console.log("Dictionary couldn't be saved. :(   ");
//         console.log(err);
//       } else {
//         console.log("Dictionary saved successfully!");
//       }
//   });
// }

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`------------------------`);
  // imagetest();
});

client.on('message', async msg => { // for every message, do the following:
  if(!msg.author.bot) { // ignore bots
    if (msg.content === 'ping') { // test connection time
      const m = await msg.channel.send("Ping?");
      const reply = `Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.`;
      m.edit(reply);
      console.log(reply);
    }
    if (msg.content.startsWith(config.prefix)) {
      // do stuff
    }
  }
});

// if(msg.content.startsWith(config.prefix)) {
//   // write message onto new image
//   gm(64, 256, "#ffffffff").textFont("toki-pona.ttf",24)
//   .drawText(10, 50, "ilo wawa li ilo li wawa")
//   .write(`./${msg.id}.jpg`, function (err) {
//     console.log(err)
//   });
//   // reply with attachment of image
//   msg.channel.send(
//     `${msg.author} li toki:`,
//     new Discord.Attachment(`./${msg.id}.jpg`)
//   )
// };


client.login(config.token);
