'use strict';

let color = require('../config/color');

exports.parseEmoticons = parseEmoticons;

let emotes = {
	'twna':'https://i.imgur.com/HKp19WH.jpg',
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
	'applecry': 'http://i.imgur.com/xEkczlv.gif',       
	'anadieleimporta': 'http://i.imgur.com/sDO85s4.jpg',     
	':celebrate:': 'http://i.imgur.com/j5Ob4T1.gif',       
	':smile:': 'http://i.imgur.com/1Zvzdd0.gif',        
	':aiuda:': 'http://i.imgur.com/K3QlLDH.gif',            
	':nonono:': 'http://i.imgur.com/T4MfQeu.gif',        
	':jumps:': 'http://i.imgur.com/c5cQEEA.gif',                
	':nope:': 'http://i.imgur.com/fdrKgty.gif',       
	':sleep:': 'http://i.imgur.com/itEG4qR.gif',                
	':etto:': 'http://i.imgur.com/xDWW0Z6.gif',            
	':jijiji:': 'http://i.imgur.com/qQKWlgL.gif',          
	':plis:': 'http://i.imgur.com/xJB9aBE.gif',           
	':buuu:': 'http://i.imgur.com/QZqmFlP.gif',      
	':crazy:': 'http://i.imgur.com/aEm9OSb.gif',          
	'quierepelea?': 'http://i.imgur.com/MJPZjtB.gif', 
	'feelsangry': 'http://i.imgur.com/SdVeXXB.gif',              
	'feelssick': 'http://i.imgur.com/vNMGLTu.gif',            
	'feelssad': 'http://i.imgur.com/SPXdiXc.gif',        
   'twiden': 'http://i.imgur.com/vFnQEEF.png',             
        'applepie': 'http://i.imgur.com/TdQ5zsN.png',       
        'rarekiss': 'http://i.imgur.com/dOPLtdi.png',            
        'manehug': 'http://i.imgur.com/sfBCmvA.png',        
        'celuna': 'http://i.imgur.com/dTV2fF5.png',                 
	'lunetia': 'http://i.imgur.com/mQxhQzU.png',                  
	'sqhug': 'http://i.imgur.com/LnOpia5.png',               
	'flutterstamp': 'http://i.imgur.com/sHBC2h2.png',
	'rainkiss': 'http://i.imgur.com/p0C40QY.png',       
	'lunash': 'http://i.imgur.com/YnxHMWA.png',           
	'cyndashy': 'http://i.imgur.com/XSm3moT.png',
        'rainhug': 'http://i.imgur.com/otc67r9.png',
	  'scoo3': 'http://i.imgur.com/x6lyfJM.png',         
	'seduce': 'http://i.imgur.com/SozXDPC.gif',        
	':baka:': 'http://i.imgur.com/jUJLHP7.gif',       
	':death:': 'http://i.imgur.com/Ftb7lCZ.png',        
	':friends:': 'http://i.imgur.com/PhRWHHk.gif',
	'oshet': 'http://i.imgur.com/973LjcS.gif',         
	'crybelle': 'http://i.imgur.com/AlTL5kG.png',        
	':spoopy:': 'http://i.imgur.com/yuDSicN.gif',     
	':hug:': 'http://i.imgur.com/JpgwVRL.gif',         
	'lundere': 'http://i.imgur.com/HvAfNRO.png',      
	':defeated:': 'http://i.imgur.com/wVRUyli.gif',      
	'whathe': 'http://i.imgur.com/J62J2EC.gif',          
	'celenny': 'http://i.imgur.com/QGeRmLk.gif',     
	':yes:': 'http://i.imgur.com/NmzYjfE.gif',          
	'dontlietome': 'http://i.imgur.com/afl2ZrU.gif',       
	':tc:': 'http://i.imgur.com/s5RqCPH.gif',        
	':mmm:': 'http://i.imgur.com/TzSz840.gif',        
	':okay:': 'http://i.imgur.com/cLdAFmE.gif',       
	'comfo': 'http://i.imgur.com/mXcuPJF.gif',          
	':moar:': 'http://i.imgur.com/4ehFLbd.gif',         
	':ah:': 'http://i.imgur.com/ZEvYXQW.jpg',          
	':lalala:': 'http://i.imgur.com/Ahygo5c.gif',           
	':nomnom:': 'http://i.imgur.com/qiiw0rg.gif',
	'huzaa': 'http://i.imgur.com/QM9gOIw.gif',         
	'filososweetie': 'http://i.imgur.com/4yYfCnR.png',     
	':terr:': 'http://i.imgur.com/OsshTAF.gif',        
	':placer:': 'http://i.imgur.com/sAsPZli.png',       
	'pmbusy': 'http://i.imgur.com/XaBNyJy.gif',         
	'noentiendo': 'http://i.imgur.com/na3ILqb.gif',
	'kicknorris': 'http://i.imgur.com/aiQ4qsC.gif',          
	':amsi:': 'http://i.imgur.com/xkS1mBe.gif',       
	':oh:': 'http://i.imgur.com/sTB9d8Y.gif',        
	':tension:': 'http://i.imgur.com/kGSbTdh.gif',       
	':sorry:': 'http://i.imgur.com/NmTVQOE.gif',
	'ravechu': 'http://i.imgur.com/evQ7ig6.gif',
	'nekokawaii':'http://i.imgur.com/SIcdaoY.gif',
	':byebye:':'http://i.imgur.com/FV5H4ES.gif',
	'ponyflip':'http://i.imgur.com/n0gzkPT.png',
	':7u7:': 'http://i.imgur.com/gPpWWVO.jpg',         
	'yonofui':'http://i.imgur.com/Cm3XSLE.png',        
	'umad?': 'http://i.imgur.com/tHON8LQ.jpg',          
	'banishmoon': 'http://i.imgur.com/R9BCKjK.jpg',      
	'banishsun': 'http://i.imgur.com/PsiroeP.jpg',      
	':facepalm:': 'http://i.imgur.com/S69PFuc.png',     
	':pew:': 'http://i.imgur.com/Gcx2QTn.gif',       
	'baneverypony': 'http://i.imgur.com/I6y8T0E.png',       
	':why:': 'http://i.imgur.com/xz1WLKS.png',          
	':ditto:': 'http://i.imgur.com/puHrixp.gif',
	'raptordance': 'http://i.imgur.com/ckDGK5c.gif',
	'celestialdance': 'http://i.imgur.com/SqRzBps.gif',         
	'moondance': 'http://i.imgur.com/jwF7pDv.gif',          
	':20:': 'http://i.imgur.com/Jv6zyee.gif',      
	':pokebolas:': 'https://i.imgur.com/f0c9zQ3.gif',
':join': 'https://i.imgur.com/v9CNxOI.gif',     
'akanbe': 'https://i.imgur.com/kJsanLM.gif',                   
':nuzzle:': 'http://i.imgur.com/Wjaxv8K.gif',           
':triste:': 'https://i.imgur.com/GNSwItS.gif',               
':sueño:': 'https://i.imgur.com/wx95WLY.gif',             
':oiezy:': 'https://i.imgur.com/aNzqYs1.gif',
':pikano:': 'https://i.imgur.com/kC2pUcJ.gif',     
':shy:': 'https://i.imgur.com/on0wgXQ.gif',
':tongue:': 'https://i.imgur.com/OXlP3yH.gif',
':angry:': 'https://i.imgur.com/dylbeRB.gif',
':jiii:': 'https://i.imgur.com/LOmociD.gif',
':miss u:': 'https://i.imgur.com/UYOfivO.gif',
':nanana:': 'https://i.imgur.com/P9pbwYd.gif',
':loli:': 'https://i.imgur.com/sbzZHKk.gif',
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
	message = message.replace(patternRegex, function (match) {
		var emote = emotes[match];
		if (match === ':discordance:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="79" height="85"/>' :
			match;
		if (match === ':dab:' || match === ':fatbowie:' || match === ':gav:' || match === ':hamtaro:' || match === ':kermit:' || match === ':nw:' || match === ':superman:' || match === ':sweep:' || match === ':yoshi:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="30" height="30"/>' :
			match;
		if (match === ':ana:' || match === ':mercy:' || match === ':pikahug:' || match === ':tracer:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="35" height="33"/>' :
			match;
		if (match === ':bastion:' || match === ':dva:' || match === ':hanzo:' || match === ':junkrat:' || match === ':mccree:' || match === ':mei:' || match === ':orisa:' || match === ':pharah:' || match === ':reaper:' || match === ':reinhardt:' || match === ':roadhog:' || match === ':soldier76:' || match === ':sombra:' || match === ':torbjorn:' || match === ':winston:' || match === ':zarya:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="37" height="33"/>' :
			match;
		if (match === ':bed:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="39" height="32"/>' :
			match;
		if (match === ':bowie:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="22" height="30"/>' :
			match;
		if (match === ':bearhug:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="49" height="32"/>' :
			match;
		if (match === ':bunny:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="28" height="33"/>' :
			match;
		if (match === ':camiss:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="29" height="35"/>' :
			match;
		if (match === ':catflip:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="44" height="32"/>' :
			match;
		if (match === ':censor:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="83" height="15"/>' :
			match;
		if (match === ':christos:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="40" height="30"/>' :
			match;
		if (match === ':curry:' || match === ':jack:' || match === ':ok:' || match === ':thinkform:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="23" height="30"/>' :
			match;
		if (match === ':delivert:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="28" height="42"/>' :
			match;
		if (match === ':drama:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="83" height="55"/>' :
			match;
		if (match === ':eyes:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="39" height="30"/>' :
			match;
		if (match === ':fish:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="65" height="42"/>' :
			match;
		if (match === ':doomfist:' || match === ':genji:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="36" height="33"/>' :
			match;
		if (match === ':glare:' || match === ':shifty:' || match === ':squint:' || match === ':uhhuh:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="21" height="32"/>' :
			match;
		if (match === ':harambe:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="19" height="30"/>' :
			match;
		if (match === ':joanne:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="26" height="32"/>' :
			match;
		if (match === ':kanye:' || match === ':papabless:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="21" height="30"/>' :
			match;
		if (match === ':khaled:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="40" height="42"/>' :
			match;
		if (match === ':lewd:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="54" height="42"/>' :
			match;
		if (match === ':lucio:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="33" height="33"/>' :
			match;
		if (match === ':carol:' || match === ':lyin:' || match === ':thugga:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="25" height="30"/>' :
			match;
		if (match === ':frank:' || match === ':papi:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="20" height="30"/>' :
			match;
		if (match === ':petty:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="59" height="55"/>' :
			match;
		if (match === ':pikahug:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="40" height="37"/>' :
			match;
		if (match === ':raffey:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="28" height="30"/>' :
			match;
		if (match === ':respek:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="24" height="30"/>' :
			match;
		if (match === ':sharpie:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="111" height="12"/>' :
			match;
		if (match === ':stephenking:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="37" height="42"/>' :
			match;
		if (match === ':strut:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="23" height="33"/>' :
			match;
		if (match === ':symmetra:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="30" height="33"/>' :
			match;
		if (match === ':thonk:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="35" height="30"/>' :
			match;
		if (match === ':thinkeng:' || match === ':thonkeng:' || match === ':thonkang:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="29" height="30"/>' :
			match;
		if (match === ':viper:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="27" height="30"/>' :
			match;
		if (match === ':voltypride:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="43" height="42"/>' :
			match;
		if (match === ':what:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="77" height="30"/>' :
			match;
		if (match === ':choke:' || match === ':widowmaker:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="34" height="33"/>' :
			match;
		if (match === ':wink:' || match === ':wlink:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="33" height="30"/>' :
			match;
		if (match === ':zenyatta:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="39" height="33"/>' :
			match;
		return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '"/>' :
			match;
	});

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
