'use strict';

let color = require('../config/color');

exports.parseEmoticons = parseEmoticons;

let emotes = {
	        'derpdance': 'http://i.imgur.com/zYI7jzd.gif',
	'discordance': 'http://i.imgur.com/2CKkVTI.gif',       
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
	'xaa': 'http://i.imgur.com/V728AvL.png',
	'kappa': 'http://i.imgur.com/SIGOFd9.png',
	':pacman:': 'http://i.imgur.com/fmEOv9b.png',
	'Sanic': 'http://i.imgur.com/Y6etmna.png'
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
	'facepalm': 'http://i.imgur.com/S69PFuc.png',     
	':pew:': 'http://i.imgur.com/Gcx2QTn.gif',       
	'baneverypony': 'http://i.imgur.com/I6y8T0E.png',       
	':why:': 'http://i.imgur.com/xz1WLKS.png',          
	':ditto:': 'http://i.imgur.com/puHrixp.gif',
	'raptordance': 'http://i.imgur.com/ckDGK5c.gif',
	'celestialdance': 'http://i.imgur.com/SqRzBps.gif',         
	'moondance': 'http://i.imgur.com/jwF7pDv.gif',          
	':20:': 'http://i.imgur.com/Jv6zyee.gif',          
   ':4head:': 'http://cbc.pokecommunity.com/config/emoticons/4head.png',
	':absol:': 'http://cbc.pokecommunity.com/config/emoticons/absol.png',
	':aggron:': 'http://cbc.pokecommunity.com/config/emoticons/aggron.png',
	':aids:': 'http://cbc.pokecommunity.com/config/emoticons/aids.png',
	':alarm:': 'http://cbc.pokecommunity.com/config/emoticons/alarm.gif',
	':ampharos:': 'http://cbc.pokecommunity.com/config/emoticons/ampharos.png',
	':ana:': 'http://cbc.pokecommunity.com/config/emoticons/ana.png',
	':arcanine:': 'http://cbc.pokecommunity.com/config/emoticons/arcanine.png',
	':arceus:': 'http://cbc.pokecommunity.com/config/emoticons/arceus.png',
	':armycat:': 'http://cbc.pokecommunity.com/config/emoticons/armycat.png',
	':ashhug:': 'http://cbc.pokecommunity.com/config/emoticons/ashhug.png',
	':ball:': 'http://cbc.pokecommunity.com/config/emoticons/ball.gif',
	':barrel:': 'http://cbc.pokecommunity.com/config/emoticons/barrel.gif',
	':bastion:': 'http://cbc.pokecommunity.com/config/emoticons/bastion.png',
	':bearhug:': 'http://cbc.pokecommunity.com/config/emoticons/bearhug.png',
	':bed:': 'http://cbc.pokecommunity.com/config/emoticons/bed.gif',
	':bellossom:': 'http://cbc.pokecommunity.com/config/emoticons/bellossom.png',
	':bidoof:': 'http://cbc.pokecommunity.com/config/emoticons/bidoof.png',
	':blastoise:': 'http://cbc.pokecommunity.com/config/emoticons/blastoise.png',
	':blink:': 'http://cbc.pokecommunity.com/config/emoticons/blink.gif',
	':blissey:': 'http://cbc.pokecommunity.com/config/emoticons/blissey.png',
	':blush:': 'http://cbc.pokecommunity.com/config/emoticons/blush.png',
	':blust:': 'http://cbc.pokecommunity.com/config/emoticons/blust.gif',
	':boatydrugs:': 'http://cbc.pokecommunity.com/config/emoticons/boatydrugs.png',
	':bowie:': 'http://cbc.pokecommunity.com/config/emoticons/bowie.png',
	':bulbasaur:': 'http://cbc.pokecommunity.com/config/emoticons/bulbasaur.png',
	':bunny:': 'http://cbc.pokecommunity.com/config/emoticons/bunny.gif',
	':camiss:': 'http://cbc.pokecommunity.com/config/emoticons/camiss.png',
	':carol:': 'http://cbc.pokecommunity.com/config/emoticons/carol.png',
	':castform:': 'http://cbc.pokecommunity.com/config/emoticons/castform.png',
	':catflip:': 'http://cbc.pokecommunity.com/config/emoticons/catflip.png',
	':censor:': 'http://cbc.pokecommunity.com/config/emoticons/censor.png',
	':chansey:': 'http://cbc.pokecommunity.com/config/emoticons/chansey.png',
	':charizard:': 'http://cbc.pokecommunity.com/config/emoticons/charizard.png',
	':charmander:': 'http://cbc.pokecommunity.com/config/emoticons/charmander.png',
	':cheers:': 'http://cbc.pokecommunity.com/config/emoticons/cheers.png',
	':chikorita:': 'http://cbc.pokecommunity.com/config/emoticons/chikorita.png',
	':choicehug:': 'http://cbc.pokecommunity.com/config/emoticons/choicehug.png',
	':choke:': 'http://cbc.pokecommunity.com/config/emoticons/choke.png',
	':christos:': 'http://cbc.pokecommunity.com/config/emoticons/christos.png',
	':clefairy:': 'http://cbc.pokecommunity.com/config/emoticons/clefairy.png',
	':clown:': 'http://cbc.pokecommunity.com/config/emoticons/clown.png',
	':cookie:': 'http://cbc.pokecommunity.com/config/emoticons/cookie.png',
	':cthulhu:': 'http://cbc.pokecommunity.com/config/emoticons/cthulhu.png',
	':curry:': 'http://cbc.pokecommunity.com/config/emoticons/curry.png',
	':dab:': 'http://cbc.pokecommunity.com/config/emoticons/dab.png',
	':dance:': 'http://cbc.pokecommunity.com/config/emoticons/dance.gif',
	':dedenne:': 'http://cbc.pokecommunity.com/config/emoticons/dedenne.png',
	':delivert:': 'http://cbc.pokecommunity.com/config/emoticons/delivert.png',
	':diddy:': 'http://cbc.pokecommunity.com/config/emoticons/diddy.png',
	':dinner:': 'http://cbc.pokecommunity.com/config/emoticons/dinner.png',
	':ditto:': 'http://cbc.pokecommunity.com/config/emoticons/ditto.png',
	':dk:': 'http://cbc.pokecommunity.com/config/emoticons/dk.png',
	':doomfist:': 'http://cbc.pokecommunity.com/config/emoticons/doomfist.png',
	':drama:': 'http://cbc.pokecommunity.com/config/emoticons/drama.png',
	':drowzee:': 'http://cbc.pokecommunity.com/config/emoticons/drowzee.png',
	':dva:': 'http://cbc.pokecommunity.com/config/emoticons/dva.png',
	':eevee:': 'http://cbc.pokecommunity.com/config/emoticons/eevee.png',
	':electrode:': 'http://cbc.pokecommunity.com/config/emoticons/electrode.png',
	':emboar:': 'http://cbc.pokecommunity.com/config/emoticons/emboar.png',
	':espurr:': 'http://cbc.pokecommunity.com/config/emoticons/espurr.png',
	':eyes:': 'http://cbc.pokecommunity.com/config/emoticons/eyes.png',
	':fatbowie:': 'http://cbc.pokecommunity.com/config/emoticons/bowie.png',
	':feebas:': 'http://cbc.pokecommunity.com/config/emoticons/feebas.png',
	':fish:': 'http://cbc.pokecommunity.com/config/emoticons/fish.gif',
	':flirt:': 'http://cbc.pokecommunity.com/config/emoticons/flirt.png',
	':flygon:': 'http://cbc.pokecommunity.com/config/emoticons/flygon.png',
	':frank:': 'http://cbc.pokecommunity.com/config/emoticons/frank.png',
	':gav:': 'http://cbc.pokecommunity.com/config/emoticons/gav.png',
	':gawk:': 'http://cbc.pokecommunity.com/config/emoticons/gawk.png',
	':genji:': 'http://cbc.pokecommunity.com/config/emoticons/genji.png',
	':glare:': 'http://cbc.pokecommunity.com/config/emoticons/glare.png',
	':gloom:': 'http://cbc.pokecommunity.com/config/emoticons/gloom.png',
	':goodra:': 'http://cbc.pokecommunity.com/config/emoticons/goodra.png',
	':goomy:': 'http://cbc.pokecommunity.com/config/emoticons/goomy.png',
	':growlithe:': 'http://cbc.pokecommunity.com/config/emoticons/growlithe.png',
	':hamster:': 'http://cbc.pokecommunity.com/config/emoticons/hamster.png',
	':hamtaro:': 'http://cbc.pokecommunity.com/config/emoticons/hamtaro.gif',
	':hanzo:': 'http://cbc.pokecommunity.com/config/emoticons/hanzo.png',
	':harambe:': 'http://cbc.pokecommunity.com/config/emoticons/harambe.png',
	':helix:': 'http://cbc.pokecommunity.com/config/emoticons/helix.png',
	':houndoom:': 'http://cbc.pokecommunity.com/config/emoticons/houndoom.png',
	':hug:': 'http://cbc.pokecommunity.com/config/emoticons/hug.png',
	':hypno:': 'http://cbc.pokecommunity.com/config/emoticons/hypno.png',
	':infernape:': 'http://cbc.pokecommunity.com/config/emoticons/infernape.png',
	':jack:': 'http://cbc.pokecommunity.com/config/emoticons/jack.png',
	':jigglypuff:': 'http://cbc.pokecommunity.com/config/emoticons/jigglypuff.png',
	':joanne:': 'http://cbc.pokecommunity.com/config/emoticons/joanne.png',
	':junkrat:': 'http://cbc.pokecommunity.com/config/emoticons/junkrat.png',
	':jynx:': 'http://cbc.pokecommunity.com/config/emoticons/jynx.png',
	':kanye:': 'http://cbc.pokecommunity.com/config/emoticons/kanye.png',
	':kappa:': 'http://cbc.pokecommunity.com/config/emoticons/kappa.png',
	':kappapride:': 'http://cbc.pokecommunity.com/config/emoticons/kappapride.png',
	':kappaross:': 'http://cbc.pokecommunity.com/config/emoticons/kappaross.png',
	':keepo:': 'http://cbc.pokecommunity.com/config/emoticons/keepo.png',
	':kermit:': 'http://cbc.pokecommunity.com/config/emoticons/kermit.png',
	':khaled:': 'http://cbc.pokecommunity.com/config/emoticons/khaled.png',
	':kitty:': 'http://cbc.pokecommunity.com/config/emoticons/kitty.png',
	':kreygasm:': 'http://cbc.pokecommunity.com/config/emoticons/kreygasm.png',
	':lapras:': 'http://cbc.pokecommunity.com/config/emoticons/lapras.png',
	':latias:': 'http://cbc.pokecommunity.com/config/emoticons/latias.png',
	':latios:': 'http://cbc.pokecommunity.com/config/emoticons/latios.png',
	':ledian:': 'http://cbc.pokecommunity.com/config/emoticons/ledian.png',
	':leg:': 'http://cbc.pokecommunity.com/config/emoticons/leg.png',
	':lewd:': 'http://cbc.pokecommunity.com/config/emoticons/lewd.png',
	':lickilicky:': 'http://cbc.pokecommunity.com/config/emoticons/lickilicky.png',
	':lickitung:': 'http://cbc.pokecommunity.com/config/emoticons/lickitung.gif',
	':lileep:': 'http://cbc.pokecommunity.com/config/emoticons/lileep.png',
	':link:': 'http://cbc.pokecommunity.com/config/emoticons/link.png',
	':loudred:': 'http://cbc.pokecommunity.com/config/emoticons/loudred.png',
	':lucio:': 'http://cbc.pokecommunity.com/config/emoticons/lucio.png',
	':ludicolo:': 'http://cbc.pokecommunity.com/config/emoticons/ludicolo.png',
	':luvdisc:': 'http://cbc.pokecommunity.com/config/emoticons/luvdisc.png',
	':lyin:': 'http://cbc.pokecommunity.com/config/emoticons/lyin.png',
	':magikarp:': 'http://cbc.pokecommunity.com/config/emoticons/magikarp.png',
	':mccree:': 'http://cbc.pokecommunity.com/config/emoticons/mccree.png',
	':meganium:': 'http://cbc.pokecommunity.com/config/emoticons/meganium.png',
	':mei:': 'http://cbc.pokecommunity.com/config/emoticons/mei.png',
	':meowstic:': 'http://cbc.pokecommunity.com/config/emoticons/meowstic.png',
	':meowsticf:': 'http://cbc.pokecommunity.com/config/emoticons/meowsticf.png',
	':meowth:': 'http://cbc.pokecommunity.com/config/emoticons/meowth.png',
	':mercy:': 'http://cbc.pokecommunity.com/config/emoticons/mercy.png',
	':mermaid:': 'http://cbc.pokecommunity.com/config/emoticons/mermaid.png',
	':metagross:': 'http://cbc.pokecommunity.com/config/emoticons/metagross.png',
	':mind:': 'http://cbc.pokecommunity.com/config/emoticons/mind.png',
	':moo:': 'http://cbc.pokecommunity.com/config/emoticons/moo.gif',
	':mrmime:': 'http://cbc.pokecommunity.com/config/emoticons/mrmime.png',
	':mudkip:': 'http://cbc.pokecommunity.com/config/emoticons/mudkip.png',
	':muk:': 'http://cbc.pokecommunity.com/config/emoticons/muk.png',
	':no:': 'http://cbc.pokecommunity.com/config/emoticons/no.png',
	':nw:': 'http://cbc.pokecommunity.com/config/emoticons/nw.gif',
	':oddish:': 'http://cbc.pokecommunity.com/config/emoticons/oddish.png',
	':ok:': 'http://cbc.pokecommunity.com/config/emoticons/ok.png',
	':orisa:': 'http://cbc.pokecommunity.com/config/emoticons/orisa.png',
	':pachirisu:': 'http://cbc.pokecommunity.com/config/emoticons/pachirisu.png',
	':pancham:': 'http://cbc.pokecommunity.com/config/emoticons/pancham.png',
	':pangoro:': 'http://cbc.pokecommunity.com/config/emoticons/pangoro.png',
	':papabless:': 'http://cbc.pokecommunity.com/config/emoticons/papabless.png',
	':papi:': 'http://cbc.pokecommunity.com/config/emoticons/papi.png',
	':pear:': 'http://cbc.pokecommunity.com/config/emoticons/pear.png',
	':petty:': 'http://cbc.pokecommunity.com/config/emoticons/petty.png',
	':pharah:': 'http://cbc.pokecommunity.com/config/emoticons/pharah.png',
	':pikachu:': 'http://cbc.pokecommunity.com/config/emoticons/pikachu.png',
	':pikahug:': 'http://cbc.pokecommunity.com/config/emoticons/pikahug.png',
	':pix:': 'http://cbc.pokecommunity.com/config/emoticons/pix.png',
	':pjsalt:': 'http://cbc.pokecommunity.com/config/emoticons/pjsalt.png',
	':plot:': 'http://cbc.pokecommunity.com/config/emoticons/plot.gif',
	':pogchamp:': 'http://cbc.pokecommunity.com/config/emoticons/pogchamp.png',
	':pole:': 'http://cbc.pokecommunity.com/config/emoticons/pole.png',
	':pose:': 'http://cbc.pokecommunity.com/config/emoticons/pose.gif',
	':potato:': 'http://cbc.pokecommunity.com/config/emoticons/potato.png',
	':primeape:': 'http://cbc.pokecommunity.com/config/emoticons/primeape.png',
	':psyduck:': 'http://cbc.pokecommunity.com/config/emoticons/psyduck.png',
	':pyoshi:': 'http://cbc.pokecommunity.com/config/emoticons/pyoshi.png',
	':raffey:': 'http://cbc.pokecommunity.com/config/emoticons/raffey.png',
	':raichu:': 'http://cbc.pokecommunity.com/config/emoticons/raichu.png',
	':rainbow:': 'http://cbc.pokecommunity.com/config/emoticons/rainbow.gif',
	':ralts:': 'http://cbc.pokecommunity.com/config/emoticons/ralts.png',
	':reaper:': 'http://cbc.pokecommunity.com/config/emoticons/reaper.png',
	':reinhardt:': 'http://cbc.pokecommunity.com/config/emoticons/reinhardt.png',
	':respek:': 'http://cbc.pokecommunity.com/config/emoticons/respek.png',
	':roadhog:': 'http://cbc.pokecommunity.com/config/emoticons/roadhog.png',
	':roll:': 'http://cbc.pokecommunity.com/config/emoticons/roll.gif',
	':roselia:': 'http://cbc.pokecommunity.com/config/emoticons/roselia.png',
	':rude:': 'http://cbc.pokecommunity.com/config/emoticons/rude.gif',
	':sableye:': 'http://cbc.pokecommunity.com/config/emoticons/sableye.png',
	':salute:': 'http://cbc.pokecommunity.com/config/emoticons/salute.png',
	':scarfhug:': 'http://cbc.pokecommunity.com/config/emoticons/scarfhug.png',
	':scizor:': 'http://cbc.pokecommunity.com/config/emoticons/scizor.png',
	':seduce:': 'http://cbc.pokecommunity.com/config/emoticons/seduce.png',
	':senpai:': 'http://cbc.pokecommunity.com/config/emoticons/senpai.png',
	':sharpie:': 'http://cbc.pokecommunity.com/config/emoticons/sharpie.png',
	':shift:': 'http://cbc.pokecommunity.com/config/emoticons/shift.gif',
	':shifty:': 'http://cbc.pokecommunity.com/config/emoticons/shifty.png',
	':shinx:': 'http://cbc.pokecommunity.com/config/emoticons/shinx.png',
	':shinyhug:': 'http://cbc.pokecommunity.com/config/emoticons/shinyhug.png',
	':sims:': 'http://cbc.pokecommunity.com/config/emoticons/sims.png',
	':skarmory:': 'http://cbc.pokecommunity.com/config/emoticons/skarmory.png',
	':slowbro:': 'http://cbc.pokecommunity.com/config/emoticons/slowbro.png',
	':slowking:': 'http://cbc.pokecommunity.com/config/emoticons/slowking.png',
	':slowpoke:': 'http://cbc.pokecommunity.com/config/emoticons/slowpoke.png',
	':snivy:': 'http://cbc.pokecommunity.com/config/emoticons/snivy.png',
	':snorlax:': 'http://cbc.pokecommunity.com/config/emoticons/snorlax.png',
	':soldier76:': 'http://cbc.pokecommunity.com/config/emoticons/soldier76.png',
	':sombra:': 'http://cbc.pokecommunity.com/config/emoticons/sombra.png',
	':spasm:': 'http://cbc.pokecommunity.com/config/emoticons/spasm.gif',
	':spheal:': 'http://cbc.pokecommunity.com/config/emoticons/spheal.png',
	':spinda:': 'http://cbc.pokecommunity.com/config/emoticons/spinda.png',
	':squint:': 'http://cbc.pokecommunity.com/config/emoticons/squint.png',
	':squirtle:': 'http://cbc.pokecommunity.com/config/emoticons/squirtle.png',
	':steelix:': 'http://cbc.pokecommunity.com/config/emoticons/steelix.png',
	':stephenking:': 'http://cbc.pokecommunity.com/config/emoticons/stephenking.png',
	':strut:': 'http://cbc.pokecommunity.com/config/emoticons/strut.png',
	':suicune:': 'http://cbc.pokecommunity.com/config/emoticons/suicune.png',
	':superman:': 'http://cbc.pokecommunity.com/config/emoticons/superman.png',
	':sweep:': 'http://cbc.pokecommunity.com/config/emoticons/sweep.gif',
	':swiftrage:': 'http://cbc.pokecommunity.com/config/emoticons/swiftrage.png',
	':symmetra:': 'http://cbc.pokecommunity.com/config/emoticons/symmetra.png',
	':taco:': 'http://cbc.pokecommunity.com/config/emoticons/taco.png',
	':taillow:': 'http://cbc.pokecommunity.com/config/emoticons/taillow.png',
	':thinkeng:': 'http://cbc.pokecommunity.com/config/emoticons/thinkeng.png',
	':thonkeng:': 'http://cbc.pokecommunity.com/config/emoticons/thinkeng.png',
	':thinkform:': 'http://cbc.pokecommunity.com/config/emoticons/thinkform.png',
	':thonk:': 'http://cbc.pokecommunity.com/config/emoticons/thonk.png',
	':thonkang:': 'http://cbc.pokecommunity.com/config/emoticons/thonkang.png',
	':thugga:': 'http://cbc.pokecommunity.com/config/emoticons/thugga.png',
	':torbjorn:': 'http://cbc.pokecommunity.com/config/emoticons/torbjorn.png',
	':toxic:': 'http://cbc.pokecommunity.com/config/emoticons/toxic.png',
	':tracer:': 'http://cbc.pokecommunity.com/config/emoticons/tracer.png',
	':tyranitar:': 'http://cbc.pokecommunity.com/config/emoticons/tyranitar.png',
	':ugh:': 'http://cbc.pokecommunity.com/config/emoticons/ugh.gif',
	':uhhuh:': 'http://cbc.pokecommunity.com/config/emoticons/uhhuh.png',
	':venusaur:': 'http://cbc.pokecommunity.com/config/emoticons/venusaur.png',
	':victini:': 'http://cbc.pokecommunity.com/config/emoticons/victini.gif',
	':viper:': 'http://cbc.pokecommunity.com/config/emoticons/viper.png',
	':voltypride:': 'http://cbc.pokecommunity.com/config/emoticons/voltypride.png',
	':vulpix:': 'http://cbc.pokecommunity.com/config/emoticons/vulpix.png',
	':wailmer:': 'http://cbc.pokecommunity.com/config/emoticons/wailmer.png',
	':wave:': 'http://cbc.pokecommunity.com/config/emoticons/wave.gif',
	':weedle:': 'http://cbc.pokecommunity.com/config/emoticons/weedle.png',
	':what:': 'http://cbc.pokecommunity.com/config/emoticons/what.png',
	':why:': 'http://cbc.pokecommunity.com/config/emoticons/why.png',
	':widowmaker:': 'http://cbc.pokecommunity.com/config/emoticons/widowmaker.png',
	':wigglytuff:': 'http://cbc.pokecommunity.com/config/emoticons/wigglytuff.png',
	':wink:': 'http://cbc.pokecommunity.com/config/emoticons/wink.png',
	':winston:': 'http://cbc.pokecommunity.com/config/emoticons/winston.png',
	':wlink:': 'http://cbc.pokecommunity.com/config/emoticons/wlink.gif',
	':wobbuffet:': 'http://cbc.pokecommunity.com/config/emoticons/wobbuffet.png',
	':wooper:': 'http://cbc.pokecommunity.com/config/emoticons/wooper.png',
	':wutface:': 'http://cbc.pokecommunity.com/config/emoticons/wutface.png',
	':wynaut:': 'http://cbc.pokecommunity.com/config/emoticons/wynaut.png',
	':y:': 'http://cbc.pokecommunity.com/config/emoticons/y.png',
	':yoshi:': 'http://cbc.pokecommunity.com/config/emoticons/yoshi.png',
	':zarya:': 'http://cbc.pokecommunity.com/config/emoticons/zarya.png',
	':zenyatta:': 'http://cbc.pokecommunity.com/config/emoticons/zenyatta.png',
	':zzz:': 'http://cbc.pokecommunity.com/config/emoticons/zzz.gif',      
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
		if (match === ':ashhug:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="44" height="42"/>' :
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
