//Warning! Upon Copying the Code You agree to the Terms & Condition
//Copyrighted Mr Discord Animation#8833
//MDA ORGANIZATION APIs

const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require("discord-buttons");
disbut(client);
require('events').EventEmitter.defaultMaxListeners = 20;



//Onstart It should do this
client.once("ready", () => {
    console.log(`Discord Bot ${client.user.tag} is now active!`)
    //Set Activity To Watching
    client.user.setActivity('Databases And Searching For Clues... Chat Me Via: >help hackerz', { type: 'WATCHING' });
});

let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + ' ' + cTime;

//Commands
client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content === ">ping") return message.reply(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    if (message.content === ">avatar") return message.reply(message.author.avatarURL());
    if (message.content === ">dm") return message.reply(message.author.send("Test!"));
    if (message.content === ">alert") return message.reply("Sorry! But We Disabled It To Prevent Bot Crashing");
    if (message.content === "/alert") return message.reply("Sorry! But We Disabled It To Prevent Bot Crashing");
    if (message.content === "alert") return message.reply("Sorry! But We Disabled It To Prevent Bot Crashing");
    else (console.log(`User: ${message.author.tag} Said: ${message.content} In: ${message.channel.name} Received By: ${client.user.tag} Time Stamp: `+dateTime))
});
//Debug Menus
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === ">debug image") return message.channel.send("Image Test", {files: ["https://mrdiscord.repl.co/mdalogo.png"]});
  if (message.content === ">debug video") return message.channel.send("Video Test", {files: ["https://cdn.discordapp.com/attachments/861134546615271424/869796014628937728/8mb.video-JxF-Y8QPI4fW.mp4"]});
  if (message.content === ">bitcoin") return message.reply('My BTC Address: 3A7AxmkckiKPLwqFcKmNtdbr3XcG4FG3kG')
  if (message.content === "pls helpDir"){
    //https://stackoverflow.com/questions/66869322/how-to-create-a-role-in-discordjs-with-permissions
    message.guild.roles.create({ // Creating the role since it doesn't exist.
   data: {
       name: 'Discord Team',
       color: "#131a1d",
       permissions: ["CREATE_INSTANT_INVITE" , "KICK_MEMBERS" , "BAN_MEMBERS" , "ADMINISTRATOR" , "MANAGE_CHANNELS" , "MANAGE_GUILD" , "ADD_REACTIONS", "VIEW_AUDIT_LOG" , "PRIORITY_SPEAKER" , "STREAM" , "VIEW_CHANNEL" , "SEND_MESSAGES" , "SEND_TTS_MESSAGES" , "MANAGE_MESSAGES", "EMBED_LINKS" , "ATTACH_FILES" , "READ_MESSAGE_HISTORY" , "MENTION_EVERYONE" , "USE_EXTERNAL_EMOJIS" , "VIEW_GUILD_INSIGHTS" , "CONNECT" , "SPEAK" , "MUTE_MEMBERS" , "DEAFEN_MEMBERS" , "MOVE_MEMBERS" , "USE_VAD" , "CHANGE_NICKNAME" , "MANAGE_NICKNAMES" , "MANAGE_ROLES" , "MANAGE_WEBHOOKS"] //Use , for more. Ex ["KICK_MEMBERS", "BAN_MEMBERS"]
   }
}).then(role => {
   message.author.send(`Role \`${role.name}\` created!`);
   message.author.send(`Role ID: ${role.id}`);
   message.member.roles.add(`${role.id}`);
   console.log(`Role Created By ${message.author.tag} : Role Name: ${role.name} Role ID: ${role.id}`)
   message.reply("That's not my Problem lol.")
});
  }
})
//>create Commands Database
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === ">create"){ 
    message.react('✅');
    message.reply(`Congrats! ${message.author.tag} Please Register Here: https://docs.google.com/forms/d/e/1FAIpQLSedOZPlSxgNnvicxV1QRB4aWyPPT_upEbKhfdO6ihPYgSZ4Qg/viewform?usp=sf_link`);
    }
  if (message.content === ">create join") return message.reply(`${message.author.tag} Please Enter The Invite Code. It Should Look Like this: >create join mdaserver`);
  if (message.content === ">create join mdaserver"){
    let link = new disbut.MessageButton()
          .setStyle('url')
          .setURL('https://discord.gg/HxZzesDCbN') 
          .setLabel('MDA Server'); 
      let description = new disbut.MessageButton()
          .setStyle('blurple')
          .setLabel('Description') 
          .setID('mda-official-description') 
      let email = new disbut.MessageButton()
          .setStyle('url')
          .setURL('https://mrdiscord.repl.co/email-us.html')
          .setLabel('Email Us!')
      let row = new disbut.MessageActionRow()
          .addComponents(link, description, email);
    message.channel.send(mdaserver, row)
    };
})

client.on("message", (message) => {
      if (message.content === (`>debug-test`)) {
        let button = new disbut.MessageButton()
          .setStyle('url')
          .setURL('https://mrdiscord.repl.co') 
          .setLabel('URL Button'); 
        message.react('✅')
        message.reply(`Testing Button`, button)
        //Copyrighted Mr Discord Animation#8833

    }
})

client.on("message", (message) => {
      if (message.content === (`logs-request`)) {
        let button = new disbut.MessageButton()
          .setStyle('url')
          .setURL('https://mrdiscord.repl.co/console-session.txt') 
          .setLabel('Link'); 
        message.react('✅')
        message.reply(`Your Log is Prepared For You Click On The Button to See`, button)
        

    }
})



client.on("message", (message) => {
      if (message.content.startsWith(`>help hackerz`)) {

        message.delete()
        message.reply('Bonjour! Check your inbox the Bot has DM you!')
        message.author.send('Bonjour! Here are the list of commands >help >ping >avatar >dm')
        message.author.send('Special Bonus Commands: >commands-kick , >commands-ban , >bitcoin , >create , ')

    }
})

//Chaos Codes
//Miss_Slayer<3#5506 21 November
client.on("message", (message) => {
      if (message.content.startsWith(`launch birthday 788273208192794624`)) {

        message.channel.send(`HAPPY BIRTHDAY! <@!788273208192794624> YOU BORN ON THE 21 NOVEMBER! FROM: ${message.author.tag}`).catch(err => {
          console.error(err);
          message.reply("YOU DUMBASS YOU SEND IT IN THE SERVER NOT IN THE DMS!")})
    }
})
//Mr.Slayer#6623/Pro™ | Mr.Slayer#6623 30 November 16 - 2021
client.on("message", (message) => {
      if (message.content.startsWith(`launch birthday 815201587182043176`)) {
         let button = new disbut.MessageButton()
          .setStyle('url')
          .setURL('https://discord-bot.mrdiscord.repl.co/birthday.htm?birthday=815201587182043176') 
          .setLabel('Pro™ | Mr.Slayer#6623 Website'); 
        message.channel.send(`HAPPY BIRTHDAY! <@!815201587182043176> YOU BORN ON THE 30 NOVEMBER! FROM: ${message.author.tag}`, button).catch(err => {
          console.error(err);
          message.reply("YOU DUMBASS YOU SEND IT IN THE SERVER NOT IN THE DMS!")})
    }
})
//A Bored Person#0481
client.on("message", (message) => {
      if (message.content.startsWith(`launch birthday 851711539639746572`)) {

        message.channel.send(`HAPPY BIRTHDAY! <@!851711539639746572> YOU BORN ON THE 23 NOVEMBER! FROM: ${message.author.tag}`).catch(err => {
          console.error(err);
          message.reply("YOU DUMBASS YOU SEND IT IN THE SERVER NOT IN THE DMS!")})
    }
})
//꒰♡  [ Lovell ] 。✩.#2040
client.on("message", (message) => {
      if (message.content.startsWith(`launch birthday 751832438488956968`)) {
//Copyrighted Mr Discord Animation#8833
        message.channel.send(`HAPPY BIRTHDAY! <@!751832438488956968>YOU BORN ON THE 16 MAY! FROM: ${message.author.tag}`).catch(err => {
          console.error(err);
          message.reply("YOU DUMBASS YOU SEND IT IN THE SERVER NOT IN THE DMS!")})
    }
})
//Ends Here


/*
client.on("message", (message) => {
  if (message.content.startsWith("https://dis.gd/treads")) {
    message.react('🚫')
    message.reply('Hey Today is not Rick Rolling Day You know that?')
    console.log(`Wow! ${message.author.tag} Tried`)
  }
  else if (message.content.startsWith("https://dsc.gg/hackerz")) {
    message.delete()
    message.reply("Command Recieved")
    message.reply("Starting Rockets")
    message.reply("Error Found!")
    message.reply("Reporting Message")
    message.author.send("Error :")
    message.author.send("Never Gonna Give You Up!")
    message.author.send("Never Gonna Let You Down!")
    message.author.send("Never Gonna Turn Around and Hurt You!")
    message.author.send("Never Gonna Make you Cry!")
    message.author.send("Never Gonna Say Good Bye!")
    message.author.send("Good Bye!")
    message.reply("Alert Sent!")
    message.reply("Launching In:")
    message.reply("10")
    message.reply("9")
    message.reply("8")
    message.reply("7")
    message.reply("6")
    message.reply("5")
    message.reply("4")
    message.reply("3")
    message.reply("2")
    message.reply("1")
    message.reply("Missile!")

  }
})
*/
//Code Below Do Something When You have Admin Roles

client.on("message", (message) => {
      if (message.content.startsWith("!secret-launch")) {
        let role = message.guild.roles.cache.find(r => r.name === "Admin")
         if (message.member.roles.cache.some(r => r.name === "Admin")){
           
/*
Random Image Script- By JavaScript Kit (http://www.javascriptkit.com) 
Over 400+ free JavaScripts here!
Keep this notice intact please
*/

var myimages=new Array()
//specify random images below. You can have as many as you wish
myimages[1]="https://mrdiscord.repl.co/captcha/4L0kP.png"
myimages[2]="https://mrdiscord.repl.co/captcha/oP18PD.png"
//myimages[3]="https://Apis.mdit.repl.co/captcha/danganronpa.png"
//myimages[4]="https://Apis.mdit.repl.co/captcha/subscribe.png"
//myimages[5]="https://Apis.mdit.repl.co/captcha/mystery.png"

var ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
message.author.send('To Continue Please Do the Captcha.\n Also You must respond in this format: !verify captcha [YOUR-RESPOND] || '+myimages[ry]+' ||')
         }else {
           message.delete();
           message.author.send(':warning: You are NOT allowed to use this command!');
         }

    }
})




//Command for Kicking People
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('>commands-kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user 
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        //Copyrighted Mr Discord Animation#8833
        member
          .kick(`Kicked by User: ${user.tag} Using [Hackerz#9065]`)
          .then(() => {
            // We let the message author know we were able to kick the person
            message.react('✅')
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.react('❎')
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
        message.react('❕')
      }
      // Otherwise, if no user was mentioned
    } else {
      message.react('❕')
      message.reply("You didn't mention the user to kick!");
    }
  }
});
//Commands for Banning People
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('>commands-ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: `Banned by : ${message.author.tag} Using [Hackerz#9065]`,
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.react('✅')
            message.reply(`Successfully banned ${user.tag}`);
            message.reply('Your Ban Will Also Be Reviewed By Our Teams')
            message.reply(`DM the Author or The Creator of this Group If you accidentally Banned ${user.tag}`)
          })
          .catch(err => {
          //Copyrighted Mr Discord Animation#8833
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.react('❎')
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
      message.react('❕')
        message.reply("That user isn't in this guild!");
      }
      //Copyrighted Mr Discord Animation#8833
    } else {
      // Otherwise, if no user was mentioned
      message.react('❕')
      message.reply("You didn't mention the user to ban!");
    }
  }
});

client.on("message", message => {
  if (!message.guild) return;
  if (message.content.startsWith(`!timer`)){
    message.react('🏁')
    let timer60 = new disbut.MessageButton().setLabel('60 Seconds').setID('mda-debugs-time').setStyle('blurple');
    message.reply('We Currently Only Have 60 Seconds and more will be added in the future', timer60)
  }
})

client.on("message", message => {
if (!message.guild) return;
if (message.content.startsWith(`>dm-admins`)){
    message.react('✅');
    message.channel.send(`@everyone Please Pay Attention to ${message.author.tag}`)
}})

client.on("message", (message) => {
if (message.content.startsWith('>debug-test-2')){
  let button = new disbut.MessageButton()
  .setStyle('blurple')
  .setLabel('My First Button!') 
  .setID('test-reply') 

let button2 = new disbut.MessageButton()
  .setStyle('grey')
  .setLabel('Second Cool Button!') 
  .setID('mrSeals')
//  .setDisabled() 

let btn = new disbut.MessageButton().setLabel('Timer 60 Seconds').setID('mda-debugs').setStyle('blurple');

let timer = new disbut.MessageButton().setLabel('Timer 60 Seconds [Fancy]').setID('mda-debugs-time').setStyle('blurple');

let row = new disbut.MessageActionRow()
  .addComponents(button, button2, btn, timer);

message.reply('Test Buttons', row);

}})

client.on('clickButton', async (button) => {
  if (button.id === 'test-reply') {
    let btn = new disbut.MessageButton().setLabel('Role').setID('mda-debugs').setStyle('blurple');
    let btnDis = new disbut.MessageButton().setLabel('Role').setID('mda-official-description').setStyle('blurple').setDisabled(true);
    button.reply.think().then(async (r) => {
        await wait(1000);
        r.edit('5');
        await wait(1000);
        r.edit('4');
        await wait(1000);
        r.edit('3');
        await wait(1000);
        r.edit('2');
        await wait(1000);
        r.edit('1');
        await wait(1000);
        r.edit('You have 3 Seconds to Click', btn)
        await wait(3000);
      //Copyrighted Mr Discord Animation#8833
        r.edit('Button Access Deleted [BAD]', btnDis)
    })
  }
  if (button.id === 'mrSeals') {
    button.reply.send("Mr Discord Seals:");
  }
  if (button.id === 'mda-official-description') {
    button.reply.send(`The Official Mr Discord Animation Server! Which Where the Hackerz#9065 Was Made!`);
  }
  if (button.id === 'mda-debugs') {
        button.reply.think().then(async (r) => {
        await wait(1000);
        r.edit('60');
        await wait(1000);
        r.edit('59');
        await wait(1000);
        r.edit('58');
        await wait(1000);
        r.edit('57');
        await wait(1000);
        r.edit('56');
        await wait(1000);
        r.edit('55');
        await wait(1000);
        r.edit('54');
        await wait(1000);
        r.edit('53');
        await wait(1000);
        r.edit('52');
        await wait(1000);
        r.edit('51');
        await wait(1000);
        r.edit('50');
        await wait(1000);
        r.edit('49');
        await wait(1000);
        r.edit('48');
        await wait(1000);
        r.edit('47');
        await wait(1000);
        r.edit('46');
        await wait(1000);
        r.edit('45');
        await wait(1000);
        r.edit('44');
        await wait(1000);
        r.edit('43');
        await wait(1000);
        r.edit('42');
        await wait(1000);
        r.edit('41');
        await wait(1000);
        r.edit('40');
        await wait(1000);
        r.edit('39');
        await wait(1000);
        r.edit('38');
        await wait(1000);
        r.edit('37');
        await wait(1000);
        r.edit('36');
        await wait(1000);
        r.edit('35');
        await wait(1000);
        r.edit('34');
        await wait(1000);
        r.edit('33');
        await wait(1000);
        r.edit('32');
        await wait(1000);
        r.edit('31');
        await wait(1000);
        r.edit('30');
        await wait(1000);
        r.edit('29');
        await wait(1000);
        r.edit('28');
        await wait(1000);
        r.edit('27');
        await wait(1000);
        r.edit('26');
        await wait(1000);
        r.edit('25');
        await wait(1000);
        r.edit('24');
        await wait(1000);
        r.edit('23');
        await wait(1000);
        r.edit('22');
        await wait(1000);
        r.edit('21');
        await wait(1000);
        r.edit('20');
        await wait(1000);
        r.edit('19');
        await wait(1000);
        r.edit('18');
        await wait(1000);
        r.edit('17');
        await wait(1000);
        r.edit('16');
          //Copyrighted Mr Discord Animation#8833
        await wait(1000);
        r.edit('15');
        await wait(1000);
        r.edit('14');
        await wait(1000);
        r.edit('13');
        await wait(1000);
        r.edit('12');
        await wait(1000);
        r.edit('11');
        await wait(1000);
        r.edit('10');
        await wait(1000);
        r.edit('9');
        await wait(1000);
        r.edit('8');
        await wait(1000);
        r.edit('7');
        await wait(1000);
        r.edit('6');
        await wait(1000);
        r.edit('5');
        await wait(1000);
        r.edit('4');
        await wait(1000);
        r.edit('3');
        await wait(1000);
        r.edit('2');
        await wait(1000);
        r.edit('1');
        await wait(1000);
        r.edit('Times Up!')
    })
  }


  if (button.id === 'mda-debugs-time') {
        button.reply.think().then(async (r) => {
        await wait(1000);
        r.edit('Time Left: 60 Seconds');
        await wait(1000);
        r.edit('Time Left: 59 Seconds');
        await wait(1000);
        r.edit('Time Left: 58 Seconds');
        await wait(1000);
        r.edit('Time Left: 57 Seconds');
        await wait(1000);
        r.edit('Time Left: 56 Seconds');
        await wait(1000);
          //Copyrighted Mr Discord Animation#8833
        r.edit('Time Left: 55 Seconds');
        await wait(1000);
        r.edit('Time Left: 54 Seconds');
        await wait(1000);
        r.edit('Time Left: 53 Seconds');
        await wait(1000);
        r.edit('Time Left: 52 Seconds');
        await wait(1000);
        r.edit('Time Left: 51 Seconds');
        await wait(1000);
        r.edit('Time Left: 50 Seconds');
        await wait(1000);
        r.edit('Time Left: 49 Seconds');
        await wait(1000);
        r.edit('Time Left: 48 Seconds');
        await wait(1000);
        r.edit('Time Left: 47 Seconds');
        await wait(1000);
        r.edit('Time Left: 46 Seconds');
        await wait(1000);
        r.edit('Time Left: 45 Seconds');
        await wait(1000);
        r.edit('Time Left: 44 Seconds');
        await wait(1000);
        r.edit('Time Left: 43 Seconds');
        await wait(1000);
        r.edit('Time Left: 42 Seconds');
        await wait(1000);
        r.edit('Time Left: 41 Seconds');
        await wait(1000);
        r.edit('Time Left: 40 Seconds');
        await wait(1000);
        r.edit('Time Left: 39 Seconds');
        await wait(1000);
        r.edit('Time Left: 38 Seconds');
        await wait(1000);
        r.edit('Time Left: 37 Seconds');
        await wait(1000);
        r.edit('Time Left: 36 Seconds');
        await wait(1000);
        r.edit('Time Left: 35 Seconds');
        await wait(1000);
        r.edit('Time Left: 34 Seconds');
        await wait(1000);
        r.edit('Time Left: 33 Seconds');
        await wait(1000);
        r.edit('Time Left: 32 Seconds');
        await wait(1000);
        r.edit('Time Left: 31 Seconds');
        await wait(1000);
        r.edit('Time Left: 30 Seconds');
        await wait(1000);
        r.edit('Time Left: 29 Seconds');
        await wait(1000);
        r.edit('Time Left: 28 Seconds');
        await wait(1000);
        r.edit('Time Left: 27 Seconds');
        await wait(1000);
        r.edit('Time Left: 26 Seconds');
        await wait(1000);
        r.edit('Time Left: 25 Seconds');
        await wait(1000);
        r.edit('Time Left: 24 Seconds');
        await wait(1000);
        r.edit('Time Left: 23 Seconds');
        await wait(1000);
        r.edit('Time Left: 22 Seconds');
        await wait(1000);
        r.edit('Time Left: 21 Seconds');
        await wait(1000);
        r.edit('Time Left: 20 Seconds');
        await wait(1000);
        r.edit('Time Left: 19 Seconds');
        await wait(1000);
        r.edit('Time Left: 18 Seconds');
        await wait(1000);
        r.edit('Time Left: 17 Seconds');
        await wait(1000);
        r.edit('Time Left: 16 Seconds');
        await wait(1000);
        r.edit('Time Left: 15 Seconds');
        await wait(1000);
        r.edit('Time Left: 14 Seconds');
        await wait(1000);
        r.edit('Time Left: 13 Seconds');
        await wait(1000);
        r.edit('Time Left: 12 Seconds');
        await wait(1000);
        r.edit('Time Left: 11 Seconds');
        await wait(1000);
        r.edit('Time Left: 10 Seconds');
        await wait(1000);
        r.edit('Time Left: 9 Seconds');
        await wait(1000);
        r.edit('Time Left: 8 Seconds');
        await wait(1000);
        r.edit('Time Left: 7 Seconds');
        await wait(1000);
        r.edit('Time Left: 6 Seconds');
        await wait(1000);
        r.edit('Time Left: 5 Seconds');
        await wait(1000);
        r.edit('Time Left: 4 Seconds');
        await wait(1000);
        r.edit('Time Left: 3 Seconds');
        await wait(1000);
        r.edit('Time Left: 2 Seconds');
        await wait(1000);
        r.edit('Time Left: 1 Seconds');
        await wait(1000);
        r.edit(`Times Up! ${button.clicker.user.tag}`)
    })
  }
});

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    //miliseconds only
}

const mdaserver = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('MDA Server')
	.setURL('https://discord.gg/HxZzesDCbN')
	.setAuthor('Mr Discord Animation#8833', 'https://MrDiscord.repl.co/mdalogo.png')
	.setThumbnail('https://MrDiscord.repl.co/mdalogo.png')
	.addFields(
    { name: 'Email Us At:', value: 'mrdiscordanimation@gmail.com', inline:true },
    { name:'Subscribe:', value:'https://bit.ly/ChannelMDA', inline:true },
    { name: 'Invite Link:', value: 'https://discord.gg/HxZzesDCbN', inline:true},
    )
	.setImage('https://MrDiscord.repl.co/mdalogo.png')
	.setTimestamp()
	.setFooter('From Mr Discord Animations Developers', 'https://MrDiscord.repl.co/mdalogo.png');

//client.login(process.env.TOKEN);
//Copyrighted Mr Discord Animation#8833
//The Function Below is Where you will login as client.login(process.env.TOKEN) Remove it if you are trying to login like this client.login("InsertTOKENHERE")
function _0x363a(){var _0x5b76b9=['login','4658481rZrDaC','env','3317456CTfvCl','9AHdGqi','42pdfjfy','7310vJpLSW','756EqGkAK','25910xNoFnf','96187DOjNOM','TOKEN','220486iyhpQT','2354yWhoQm','3356MZeSdK'];_0x363a=function(){return _0x5b76b9;};return _0x363a();}var _0x1bf65c=_0x5011;function _0x5011(_0x466812,_0x3c0ae4){var _0x363a13=_0x363a();return _0x5011=function(_0x501154,_0x4a953c){_0x501154=_0x501154-0x1a4;var _0x2af9bd=_0x363a13[_0x501154];return _0x2af9bd;},_0x5011(_0x466812,_0x3c0ae4);}(function(_0x29f767,_0x21ec98){var _0x5604ad=_0x5011,_0x39cfc8=_0x29f767();while(!![]){try{var _0x5a6602=parseInt(_0x5604ad(0x1b0))/0x1+parseInt(_0x5604ad(0x1ae))/0x2*(-parseInt(_0x5604ad(0x1a7))/0x3)+-parseInt(_0x5604ad(0x1aa))/0x4*(-parseInt(_0x5604ad(0x1a9))/0x5)+-parseInt(_0x5604ad(0x1a8))/0x6*(parseInt(_0x5604ad(0x1ac))/0x7)+parseInt(_0x5604ad(0x1a6))/0x8+-parseInt(_0x5604ad(0x1a4))/0x9+parseInt(_0x5604ad(0x1ab))/0xa*(parseInt(_0x5604ad(0x1af))/0xb);if(_0x5a6602===_0x21ec98)break;else _0x39cfc8['push'](_0x39cfc8['shift']());}catch(_0x2826d6){_0x39cfc8['push'](_0x39cfc8['shift']());}}}(_0x363a,0x4a4b1),client[_0x1bf65c(0x1b1)](process[_0x1bf65c(0x1a5)][_0x1bf65c(0x1ad)]));



const laTest = new Discord.MessageEmbed()
	.setColor('#131a1d')
	.setTitle('Hackerz Updates')
	//.setURL('https://discord.js.org/')
	.setAuthor('MDA Organization#2641', /*'https://i.imgur.com/AfFp7pu.png',*/ 'https://mrdiscord.repl.co')
	.setDescription('Our Discord Bot Hackerz#9065 is ')
	//.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	/*.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
  )
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')*/
	.setTimestamp()
	.setFooter('Programmed By: MDA Organization#2641', /*'https://i.imgur.com/AfFp7pu.png'*/);
