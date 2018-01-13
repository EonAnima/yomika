'use strict';

let color = require('../config/color');

exports.parseEmoticons = parseEmoticons;

let emotes = {
	':discordance:': 'http://i.imgur.com/2CKkVTI.gif',
   'derpdance': 'http://i.imgur.com/zYI7jzd.gif',     
   ':ouch:': 'http://i.imgur.com/myMRma5.gif',                   
	':nuzzle:': 'http://i.imgur.com/Wjaxv8K.gif',           
	':wtf:': 'http://i.imgur.com/xT2jEw8.gif',                  
	':lick:': 'http://i.imgur.com/jqBaMxi.gif',             
	'twisheen': 'http://i.imgur.com/z0H7Cnh.gif',                 
   ':twilightsparkle:': 'http://i.imgur.com/UizjLrs.gif',      
	':applejack:': 'http://i.imgur.com/JslmewM.gif',      
	':pinkiepie:': 'http://i.imgur.com/ukc8qTS.gif',       
   ':jajaja:': 'http://i.imgur.com/eLn5vnQ.gif',                
   ':jejeje:': 'http://i.imgur.com/gWtOs04.gif',            
   ':hehehe:': 'http://i.imgur.com/a6aCt5w.gif',
   'slowdance': 'http://i.imgur.com/rOPqRE6.gif',
	'durpdash': 'http://i.imgur.com/oMKzjv0.jpg',                    
	':lenguita:': 'http://i.imgur.com/2Y507Ab.gif',                
	'Seriously?': 'http://i.imgur.com/8JbXlhM.gif',             
	'idontknow': 'http://i.imgur.com/uoRd7k2.gif',                   
	':claps:': 'http://i.imgur.com/S0CyMEJ.gif',                     
	':bipolar:': 'http://i.imgur.com/uUX021u.gif',                   
	':psyco:': 'http://i.imgur.com/3LiDbBH.gif',                     
	'flutterage': 'http://i.imgur.com/zDYiQx0.png',                  
	':frustracion:': 'http://i.imgur.com/SzTunU4.png',               
	':triggered:': 'http://i.imgur.com/HfCU7GR.gif',                 
	':wave:':'http://i.imgur.com/DkmWq76.gif',                       
	'omgno': 'http://i.imgur.com/0inJnh4.gif',                      
	'fuckno': 'http://i.imgur.com/G3NlYWR.gif',                      
	'justasplaned': 'http://i.imgur.com/zqmIVVn.png',         
	':oo:': 'http://i.imgur.com/kibTBO0.png',                
	':ponys:': 'http://i.imgur.com/M2dxaE2.gif',              
	':scot:': 'http://i.imgur.com/vJr4DKN.gif',           
	'motherof': 'http://i.imgur.com/7TqW6HY.gif',
	':flow:': 'http://i.imgur.com/BaqR70d.jpg',               
	':swag:': 'http://i.imgur.com/E8fu47s.png',              
	':cool:': 'http://i.imgur.com/qw7wrnd.png',              
	'applebed': 'http://i.imgur.com/R9mWJv1.jpg',     
	':tired:': 'http://i.imgur.com/nq5UdK3.png',     
   ':khe:': 'http://i.imgur.com/X1XbSHr.png',                  
   ':nn:': 'http://i.imgur.com/CZznjoa.jpg',      
	'goodmorning': 'http://i.imgur.com/pFa8Sdc.png',          
	':eww:': 'http://i.imgur.com/TSQQHqA.png',            
	'cadenceap': 'http://i.imgur.com/y63ADoF.png',          
	'celestiaap': 'http://i.imgur.com/7qp05oS.png',        
	'lunaap': 'http://i.imgur.com/E67iI9M.png',          
	'molestiaap': 'http://i.imgur.com/wAf2FeY.png',            
	'pervestiaap': 'http://i.imgur.com/pxLejNd.png',                  
	'pinkieap': 'http://i.imgur.com/pggFdPn.png',                 
	'sweetieap': 'http://i.imgur.com/XkkjLPV.png',             
	'srainbowap': 'http://i.imgur.com/2TDghbn.png',          
	'rainbowap': 'http://i.imgur.com/DvDY4ZV.png',            
	'lunastamp': 'http://i.imgur.com/itKRUAe.png',
	'celestamp': 'http://i.imgur.com/tooUPP8.png',
	'rainstamp': 'http://i.imgur.com/3vqnQmI.png', 
   ':scared:': 'http://i.imgur.com/OlbECNd.gif',         
	':hum:': 'http://i.imgur.com/cRdF1JJ.gif',             
	'oiezy': 'http://i.imgur.com/Kah3twU.png',       
	':yandere:': 'http://i.imgur.com/ZzDenFg.png',     
	':bezo:': 'http://i.imgur.com/accZgJ9.gif',    
	':nwn:': 'http://i.imgur.com/TTyFDwj.gif',   
	':a.e:': 'http://i.imgur.com/bJHFpKt.gif',     
	':n3n:': 'http://i.imgur.com/wfvgBfp.png',     
	':ovo:': 'http://i.imgur.com/1YazKtK.gif',    
	':wot:': 'http://i.imgur.com/szKVmbh.png',      
	':waaa:': 'http://i.imgur.com/LNDSvBD.gif',       
};

let emotesKeys = Object.keys(emotes);
let patterns = [];
let metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

for (let i in emotes) {
	if (emotes.hasOwnProperty(i)) {
		patterns.push('(' + i.replace(metachars, '\\$&') + ')');
	}
}
let patternRegex = new RegExp(patterns.join('|'), 'g');

/**
* Parse emoticons in message.
*
* @param {String} message
* @param {Object} room
* @param {Object} user
* @param {Boolean} pm - returns a string if it is in private messages
* @returns {Boolean|String}
*/
function parseEmoticons(message, room, user, pm) {
	if (typeof message !== 'string' || (!pm && room.disableEmoticons)) return false;

	let match = false;
	let len = emotesKeys.length;

	while (len--) {
		if (message && message.indexOf(emotesKeys[len]) >= 0) {
			match = true;
			break;
		}
	}

	if (!match) return false;

	// escape HTML
	message = Chat.escapeHTML(message);

	// add emotes


	// __italics__
	message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>');

	// **bold**
	message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>');

	let group = user.getIdentity().charAt(0);
	if (room && room.auth) group = room.auth[user.userid] || group;
	if (pm && !user.hiding) group = user.group;

	if (pm) return "<div class='chat' style='display:inline'>" + "<em class='mine'>" + message + "</em></div>";

	let style = "background:none;border:0;padding:0 5px 0 0;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:9pt;cursor:pointer";
	message = "<div class='chat'>" + "<small>" + group + "</small>" + "<button name='parseCommand' value='/user " + user.name + "' style='" + style + "'>" + "<b><font color='" + color(user.userid) + "'>" + user.name + ":</font></b>" + "</button><em class='mine'>" + message + "</em></div>";

	room.addRaw(message);

	room.update();

	return true;
}

/**
* Create a two column table listing emoticons.
*
* @return {String} emotes table
*/
function create_table() {
	let emotes_name = Object.keys(emotes);
	let emotes_list = [];
	let emotes_group_list = [];
	let len = emotes_name.length;

	for (let i = 0; i < len; i++) {
		emotes_list.push("<td style='padding: 5px; box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5) inset; border-radius: 5px;'>" + "<img src='" + emotes[emotes_name[i]] + "'' title='" + emotes_name[i] + "' height='50' width='50' style='vertical-align: middle;  padding-right: 5px;' />" + emotes_name[i] + "</td>");
	}

	for (let i = 0; i < len; i += 4) {
		let emoteOutput = [emotes_list[i], emotes_list[i + 1], emotes_list[i + 2], emotes_list[i + 3]];
		if (i < len) emotes_group_list.push("<tr>" + emoteOutput.join('') + "</tr>");
	}

	return (
		"<div class='infobox'><center><font style='font-weight: bold; text-decoration: underline; color: #555;'>List of Emoticons</font></center>" +
		"<div style='max-height: 300px; overflow-y: scroll; padding: 5px 0px;'><table style='background: rgba(245, 245, 245, 0.4); border: 1px solid #BBB;' width='100%'>" +
		emotes_group_list.join("") +
		"</table></div></div>"
	);
}

let emotes_table = create_table();

exports.commands = {
	blockemote: 'blockemoticons',
	blockemotes: 'blockemoticons',
	blockemoticon: 'blockemoticons',
	blockemoticons: function (target, room, user) {
		if (user.blockEmoticons === (target || true)) return this.sendReply("You are already blocking emoticons in private messages! To unblock, use /unblockemoticons");
		user.blockEmoticons = true;
		return this.sendReply("You are now blocking emoticons in private messages.");
	},
	blockemoticonshelp: ["/blockemoticons - Blocks emoticons in private messages. Unblock them with /unblockemoticons."],

	unblockemote: 'unblockemoticons',
	unblockemotes: 'unblockemoticons',
	unblockemoticon: 'unblockemoticons',
	unblockemoticons: function (target, room, user) {
		if (!user.blockEmoticons) return this.sendReply("You are not blocking emoticons in private messages! To block, use /blockemoticons");
		user.blockEmoticons = false;
		return this.sendReply("You are no longer blocking emoticons in private messages.");
	},
	unblockemoticonshelp: ["/unblockemoticons - Unblocks emoticons in private messages. Block them with /blockemoticons."],

	emote: 'emoticons',
	emotes: 'emoticons',
	emoticons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReply("|raw|" + emotes_table);
	},
	emoticonshelp: ["/emoticons - Get a list of emoticons."],

	toggleemote: 'toggleemoticons',
	toggleemotes: 'toggleemoticons',
	toggleemoticons: function (target, room, user) {
		if (!this.can('warn', null, room)) return false;
		room.disableEmoticons = !room.disableEmoticons;
		this.sendReply("Disallowing emoticons is set to " + room.disableEmoticons + " in this room.");
		if (room.disableEmoticons) {
			this.add("|raw|<div class=\"broadcast-red\"><b>Emoticons are disabled!</b><br />Emoticons will not work.</div>");
		} else {
			this.add("|raw|<div class=\"broadcast-blue\"><b>Emoticons are enabled!</b><br />Emoticons will work now.</div>");
		}
	},
	toggleemoticonshelp: ["/toggleemoticons - Toggle emoticons on or off."],

	rande: 'randemote',
	randemote: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let rng = Math.floor(Math.random() * emotesKeys.length);
		let randomEmote = emotesKeys[rng];
		this.sendReplyBox("<img src='" + emotes[randomEmote] + "' title='" + randomEmote + "' height='50' width='50' />");
	},
	randemotehelp: ["/randemote - Get a random emote."],
};
