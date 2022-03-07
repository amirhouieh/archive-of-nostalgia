function fltr(array){
	uniqueArray = array.filter(function(elem, pos) {
	    return array.indexOf(elem) == pos;
	});
}

var DB = [
{ Nostalgia: 'dial-up modem sound', Kind: 'object', Main_Category: 'device', Sub_Category: 'electronic', Function_: 'internet', Feeling: 'stress', Period: 'teen', Spacial_Event: 'conecting to internet/ realize have no credit / somebody if talking with the phone'}, 
{ Nostalgia: 'atari/ Asteroids', Kind: 'object', Main_Category: 'device', Sub_Category: 'electronic', Function_: 'entertainment', Feeling: 'exciting, sigh', Period: 'childhood', Spacial_Event: ''}, 
{ Nostalgia: 'matinal rite in school ', Kind: 'act', Main_Category: 'culture', Sub_Category: 'Collective behavior', Function_: 'education', Feeling: 'scunner', Period: 'childhood/ teen', Spacial_Event: ''}, 
{ Nostalgia: 'making clock on the wrist by biting', Kind: 'act', Main_Category: '-', Sub_Category: 'Collective behavior', Function_: 'entertainment', Feeling: 'crativity, pain', Period: 'childhood/ teen', Spacial_Event: 'filling out the ruts by blue pen'}, 
{ Nostalgia: 'AAA batteries', Kind: 'object', Main_Category: 'technical', Sub_Category: 'Collective behavior', Function_: 'reqular usage', Feeling: 'curious, expriencing, exploring', Period: 'teen', Spacial_Event: 'recharge AAA batteries by 2 steps: hitting,  boiling, >> breaking it apart'}, 
{ Nostalgia: 'make animation by fliping school books', Kind: 'act', Main_Category: 'social', Sub_Category: 'Collective behavior', Function_: 'entertainment', Feeling: 'being crative', Period: 'childhood', Spacial_Event: ''}, 
{ Nostalgia: 'pulling car toys by thread ', Kind: 'act', Main_Category: '-', Sub_Category: 'Collective behavior/activity', Function_: 'entertainment', Feeling: 'happiness', Period: 'childhood', Spacial_Event: ''}, 
{ Nostalgia: 'the smell of apple/orange in school bag', Kind: 'event', Main_Category: 'Feeling', Sub_Category: 'smells', Function_: 'feeding', Feeling: 'freshness, enjoyable', Period: 'childhood/ teen', Spacial_Event: 'bring them back to home'}, 
{ Nostalgia: 'VHS-film', Kind: 'object', Main_Category: 'product', Sub_Category: 'electronic', Function_: 'entertainment', Feeling: 'fear', Period: 'childhood', Spacial_Event: 'watching VHS stealthy '}, 
{ Nostalgia: 'glass milk bottles', Kind: 'object', Main_Category: 'product', Sub_Category: 'edible', Function_: 'feeding', Feeling: 'Delicious, erally morning', Period: 'childhood', Spacial_Event: 'the cream that had been made on top of the bottle '}, 
{ Nostalgia: 'palying footbal outside ( at the neighberhood )', Kind: 'act', Main_Category: 'social', Sub_Category: 'Collective behavior/activity', Function_: 'entertainment', Feeling: 'exciting, exhosting, competion, proud, ', Period: 'childhood/ teen', Spacial_Event: 'getting run out of energy'}, 
{ Nostalgia: 'peykan', Kind: 'object', Main_Category: 'product', Sub_Category: 'vehicle', Function_: 'reqular usage', Feeling: 'cold, iran, orange, ', Period: 'childhood', Spacial_Event: 'iran national car'}, 
{ Nostalgia: 'casset tapes +Bik pen', Kind: 'object', Main_Category: 'product', Sub_Category: 'Collective behavior/activity', Function_: 'reqular usage', Feeling: 'crativity,happiness, fear ', Period: 'childhood/ teen', Spacial_Event: 'forward and rewarding tapse, tapes fixing'}, 
{ Nostalgia: 'Kodak 35 mm film roll key chian', Kind: 'object', Main_Category: 'product', Sub_Category: 'Accessory', Function_: 'hold keys', Feeling: 'crativity, modern', Period: 'teen', Spacial_Event: 'making new things out of it'}, 
{ Nostalgia: 'play cards', Kind: 'object', Main_Category: '-', Sub_Category: 'Collective behavior/activity', Function_: 'entertainment', Feeling: 'grate, fun, competetive, football, slepper, asphalt, (TAGH zadan)', Period: 'childhood/ teen', Spacial_Event: 'Tagh zadan, dirty foot, was great'}, 
{ Nostalgia: 'robot wrting/pencil case', Kind: 'object', Main_Category: 'product', Sub_Category: 'Collective behavior', Function_: 'education', Feeling: 'pink, spacecraft, sharpener trash', Period: 'childhood', Spacial_Event: 'make whole on plastic cover/ drawing on the cover '}, 
{ Nostalgia: 'Robin Hood', Kind: 'cartoon/movie', Main_Category: 'media', Sub_Category: 'Collective behavior', Function_: 'entertainment/education', Feeling: 'power, wisdom, hero, chiken ', Period: 'childhood/ teen', Spacial_Event: 'griled chiken ( on fire ) '}, 
{ Nostalgia: 'Zoro', Kind: 'movie', Main_Category: 'media', Sub_Category: 'Heros', Function_: 'entertainment', Feeling: 'power, black, hero, tornado', Period: 'childhood/ teen/youth', Spacial_Event: 'jumping on turnado/ zoro mask and cloth/ remide me "shab haye barare" and that dialog'}, 
{ Nostalgia: 'animal farms', Kind: 'cartoon', Main_Category: 'media', Sub_Category: 'Collective behavior', Function_: 'entertainment', Feeling: 'thoth, chuck', Period: 'childhood/ teen', Spacial_Event: 'name of the main character of the story was very common to use for a while '}, 
{ Nostalgia: 'Jimbo', Kind: 'cartoon', Main_Category: 'media', Sub_Category: 'Collective behavior', Function_: 'entertainment', Feeling: 'valour, exprimental', Period: 'childhood', Spacial_Event: 'always remember Title sequence when the windows get broken'}, 
{ Nostalgia: 'bus tickets', Kind: 'object', Main_Category: 'product', Sub_Category: 'ticket', Function_: 'travel', Feeling: 'wet, warm', Period: 'childhood', Spacial_Event: 'remember when it was rain and you had to wait for the bus and once you get in bus all the tickets got wet and … '}, 
{ Nostalgia: 'orange skin _ Bik pens', Kind: 'act', Main_Category: 'Feeling', Sub_Category: 'Collective behavior', Function_: 'entertainment', Feeling: 'archness', Period: 'childhood/ teen', Spacial_Event: 'teasing the classmates by shooting orange bullet to their head'}, 
{ Nostalgia: 'computer cover', Kind: 'object', Main_Category: 'product', Sub_Category: 'electronic', Function_: 'cumputers health', Feeling: 'guard', Period: 'childhood', Spacial_Event: 'always worry about the dust inside computer'}, 
{ Nostalgia: 'peter schmeichel', Kind: 'Man', Main_Category: 'celebrity', Sub_Category: 'Heros', Function_: 'entertainment', Feeling: 'desire', Period: 'childhood', Spacial_Event: 'always desire to be like him in feture'}, 
{ Nostalgia: 'making robot sound by fan ', Kind: 'object', Main_Category: '-', Sub_Category: 'Collective behavior', Function_: 'entertainment', Feeling: 'crativity, amazed', Period: 'childhood', Spacial_Event: 'getting back of bathroom and with the wet hairs and sitting in front of the fan and making sounds'}, 
{ Nostalgia: 'letraset', Kind: 'object', Main_Category: 'product', Sub_Category: 'stationary', Function_: 'education', Feeling: 'crativity, amazed', Period: 'childhood/ teen', Spacial_Event: 'putting the name of covers on casset taypes '}, 
{ Nostalgia: 'manga mitikoman', Kind: 'cartoon', Main_Category: 'media', Sub_Category: 'Collective behavior', Function_: 'entertainment', Feeling: 'power, strong, pride', Period: 'childhood/ teen', Spacial_Event: 'this is the sign of suprime warlord!'}, 
{ Nostalgia: 'plastic football ball', Kind: 'object', Main_Category: 'product', Sub_Category: 'toy', Function_: 'entertainment', Feeling: 'everything', Period: 'childhood/ teen', Spacial_Event: 'making one ball by covering one by some other one'}, 
{ Nostalgia: 'multi color pen', Kind: 'object', Main_Category: 'product', Sub_Category: 'stationary', Function_: 'education', Feeling: 'happiness, cretivity', Period: 'childhood', Spacial_Event: 'break it in one week'}, 
{ Nostalgia: 'Ganbare,_Kickers!', Kind: 'cartoon', Main_Category: 'media', Sub_Category: 'Heros', Function_: 'entertainment', Feeling: 'power, strong, pride', Period: 'childhood/ teen', Spacial_Event: 'it had been played for more than 400 episods, never ends'}, 
{ Nostalgia: 'The New Adventures of Huckleberry Finn', Kind: 'cartoon', Main_Category: 'media', Sub_Category: 'Heros', Function_: 'entertainment', Feeling: 'power, strong, pride', Period: 'childhood/ teen', Spacial_Event: 'wood boat'}, 
{ Nostalgia: 'Hoshi no Ko Chobin', Kind: 'cartoon', Main_Category: 'media', Sub_Category: 'Heros', Function_: 'entertainment', Feeling: 'fear', Period: 'childhood', Spacial_Event: 'one sphere who was jugging on the ground'}, 
{ Nostalgia: 'Iranian rial banknotes (200 Rials ) ', Kind: 'object', Main_Category: 'product', Sub_Category: 'currency', Function_: 'money', Feeling: 'good', Period: 'childhood', Spacial_Event: 'always had the fantesy of being instead of one of those men who are depicted as planters on the farm'}, 
{ Nostalgia: 'Iranian rial banknotes (500 Rials ) ', Kind: 'object', Main_Category: 'product', Sub_Category: 'currency', Function_: 'money', Feeling: 'good', Period: 'childhood', Spacial_Event: 'always had the fantesy of being instead of one of those men who are depicted as planters on the farm'}, 
{ Nostalgia: 'do not have teacher today!', Kind: 'event', Main_Category: 'Feeling', Sub_Category: 'Collective behavior', Function_: 'education', Feeling: 'exciting', Period: 'childhood/ teen', Spacial_Event: 'always been told! Ok guys first pack your stuff very silent and go to yard in ordered lines'}, 
{ Nostalgia: 'Pink Panther ', Kind: 'cartoon', Main_Category: 'media', Sub_Category: 'Collective behavior', Function_: 'entertainment', Feeling: 'happiness', Period: 'childhood/ teen', Spacial_Event: 'love when he was smoking'}, 
{ Nostalgia: 'brick game console', Kind: 'object', Main_Category: 'device', Sub_Category: 'electronic', Function_: 'entertainment', Feeling: 'addiction', Period: 'childhood/ teen', Spacial_Event: 'always looking for new batteries to replace the dead ones'}, 
{ Nostalgia: 'hand made bow', Kind: 'object', Main_Category: 'product', Sub_Category: 'toy', Function_: 'entertainment', Feeling: 'crativity, pain', Period: 'childhood', Spacial_Event: 'never worked out!'}, 
{ Nostalgia: 'Popeye the Sailor Man and spinach', Kind: 'cartoon', Main_Category: 'media', Sub_Category: 'Heros', Function_: 'entertainment', Feeling: 'power, strong, pride', Period: 'childhood', Spacial_Event: 'getting strong muscle by eating spinach'}, 
{ Nostalgia: 'Joël Fajerman - Flowers Love', Kind: 'music', Main_Category: 'sound truck', Sub_Category: '-', Function_: 'entertainment', Feeling: 'happiness', Period: 'childhood', Spacial_Event: 'always remind me about science'} 
];

var DB2 = [
[ 'dial-up modem sound', 'object', 'device', 'electronic', 'internet', 'stress', 'teen', 'conecting to internet/ realize have no credit / somebody if talking with the phone'], 
[ 'atari/ Asteroids', 'object', 'device', 'electronic', 'entertainment', 'exciting, sigh', 'childhood', ''], 
[ 'matinal rite in school ', 'act', 'culture', 'Collective behavior', 'education', 'scunner', 'childhood/ teen', ''], 
[ 'making clock on the wrist by biting', 'act', '-', 'Collective behavior', 'entertainment', 'crativity, pain', 'childhood/ teen', 'filling out the ruts by blue pen'], 
[ 'AAA batteries', 'object', 'technical', 'Collective behavior', 'reqular usage', 'curious, expriencing, exploring', 'teen', 'recharge AAA batteries by 2 steps: hitting,  boiling, >> breaking it apart'], 
[ 'make animation by fliping school books', 'act', 'social', 'Collective behavior', 'entertainment', 'being crative', 'childhood', ''], 
[ 'pulling car toys by thread ', 'act', '-', 'Collective behavior/activity', 'entertainment', 'happiness', 'childhood', ''], 
[ 'the smell of apple/orange in school bag', 'event', 'Feeling', 'smells', 'feeding', 'freshness, enjoyable', 'childhood/ teen', 'bring them back to home'], 
[ 'VHS-film', 'object', 'product', 'electronic', 'entertainment', 'fear', 'childhood', 'watching VHS stealthy '], 
[ 'glass milk bottles', 'object', 'product', 'edible', 'feeding', 'Delicious, erally morning', 'childhood', 'the cream that had been made on top of the bottle '], 
[ 'palying footbal outside ( at the neighberhood )', 'act', 'social', 'Collective behavior/activity', 'entertainment', 'exciting, exhosting, competion, proud, ', 'childhood/ teen', 'getting run out of energy'], 
[ 'peykan', 'object', 'product', 'vehicle', 'reqular usage', 'cold, iran, orange, ', 'childhood', 'iran national car'], 
[ 'casset tapes +Bik pen', 'object', 'product', 'Collective behavior/activity', 'reqular usage', 'crativity,happiness, fear ', 'childhood/ teen', 'forward and rewarding tapse, tapes fixing'], 
[ 'Kodak 35 mm film roll key chian', 'object', 'product', 'Accessory', 'hold keys', 'crativity, modern', 'teen', 'making new things out of it'], 
[ 'play cards', 'object', '-', 'Collective behavior/activity', 'entertainment', 'grate, fun, competetive, football, slepper, asphalt, (TAGH zadan)', 'childhood/ teen', 'Tagh zadan, dirty foot, was great'], 
[ 'robot wrting/pencil case', 'object', 'product', 'Collective behavior', 'education', 'pink, spacecraft, sharpener trash', 'childhood', 'make whole on plastic cover/ drawing on the cover '], 
[ 'Robin Hood', 'cartoon/movie', 'media', 'Collective behavior', 'entertainment/education', 'power, wisdom, hero, chiken ', 'childhood/ teen', 'griled chiken ( on fire ) '], 
[ 'Zoro', 'movie', 'media', 'Heros', 'entertainment', 'power, black, hero, tornado', 'childhood/ teen/youth', 'jumping on turnado/ zoro mask and cloth/ remide me "shab haye barare" and that dialog'], 
[ 'animal farms', 'cartoon', 'media', 'Collective behavior', 'entertainment', 'thoth, chuck', 'childhood/ teen', 'name of the main character of the story was very common to use for a while '], 
[ 'Jimbo', 'cartoon', 'media', 'Collective behavior', 'entertainment', 'valour, exprimental', 'childhood', 'always remember Title sequence when the windows get broken'], 
[ 'bus tickets', 'object', 'product', 'ticket', 'travel', 'wet, warm', 'childhood', 'remember when it was rain and you had to wait for the bus and once you get in bus all the tickets got wet and … '], 
[ 'orange skin _ Bik pens', 'act', 'Feeling', 'Collective behavior', 'entertainment', 'archness', 'childhood/ teen', 'teasing the classmates by shooting orange bullet to their head'], 
[ 'computer cover', 'object', 'product', 'electronic', 'cumputers health', 'guard', 'childhood', 'always worry about the dust inside computer'], 
[ 'peter schmeichel', 'Man', 'celebrity', 'Heros', 'entertainment', 'desire', 'childhood', 'always desire to be like him in feture'], 
[ 'making robot sound by fan ', 'object', '-', 'Collective behavior', 'entertainment', 'crativity, amazed', 'childhood', 'getting back of bathroom and with the wet hairs and sitting in front of the fan and making sounds'], 
[ 'letraset', 'object', 'product', 'stationary', 'education', 'crativity, amazed', 'childhood/ teen', 'putting the name of covers on casset taypes '], 
[ 'manga mitikoman', 'cartoon', 'media', 'Collective behavior', 'entertainment', 'power, strong, pride', 'childhood/ teen', 'this is the sign of suprime warlord!'], 
[ 'plastic football ball', 'object', 'product', 'toy', 'entertainment', 'everything', 'childhood/ teen', 'making one ball by covering one by some other one'], 
[ 'multi color pen', 'object', 'product', 'stationary', 'education', 'happiness, cretivity', 'childhood', 'break it in one week'], 
[ 'Ganbare,_Kickers!', 'cartoon', 'media', 'Heros', 'entertainment', 'power, strong, pride', 'childhood/ teen', 'it had been played for more than 400 episods, never ends'], 
[ 'The New Adventures of Huckleberry Finn', 'cartoon', 'media', 'Heros', 'entertainment', 'power, strong, pride', 'childhood/ teen', 'wood boat'], 
[ 'Hoshi no Ko Chobin', 'cartoon', 'media', 'Heros', 'entertainment', 'fear', 'childhood', 'one sphere who was jugging on the ground'], 
[ 'Iranian rial banknotes (200 Rials ) ', 'object', 'product', 'currency', 'money', 'good', 'childhood', 'always had the fantesy of being instead of one of those men who are depicted as planters on the farm'], 
[ 'Iranian rial banknotes (500 Rials ) ', 'object', 'product', 'currency', 'money', 'good', 'childhood', 'always had the fantesy of being instead of one of those men who are depicted as planters on the farm'], 
[ 'do not have teacher today!', 'event', 'Feeling', 'Collective behavior', 'education', 'exciting', 'childhood/ teen', 'always been told! Ok guys first pack your stuff very silent and go to yard in ordered lines'], 
[ 'Pink Panther ', 'cartoon', 'media', 'Collective behavior', 'entertainment', 'happiness', 'childhood/ teen', 'love when he was smoking'], 
[ 'brick game console', 'object', 'device', 'electronic', 'entertainment', 'addiction', 'childhood/ teen', 'always looking for new batteries to replace the dead ones'], 
[ 'hand made bow', 'object', 'product', 'toy', 'entertainment', 'crativity, pain', 'childhood', 'never worked out!'], 
[ 'Popeye the Sailor Man and spinach', 'cartoon', 'media', 'Heros', 'entertainment', 'power, strong, pride', 'childhood', 'getting strong muscle by eating spinach'], 
[ 'Joël Fajerman - Flowers Love', 'music', 'sound truck', '-', 'entertainment', 'happiness', 'childhood', 'always remind me about science'] 
];

var NS = ['dial-up modem sound', 'atari/ Asteroids', 'matinal rite in school ', 'making clock on the wrist by biting', 'AAA batteries', 'make animation by fliping school books', 'pulling car toys by thread ', 'the smell of apple/orange in school bag', 'VHS-film', 'glass milk bottles', 'palying footbal outside ( at the neighberhood )', 'peykan', 'casset tapes +Bik pen', 'Kodak 35 mm film roll key chian', 'play cards', 'robot wrting/pencil case', 'Robin Hood', 'Zoro', 'animal farms', 'Jimbo', 'bus tickets', 'orange skin _ Bik pens', 'computer cover', 'peter schmeichel', 'making robot sound by fan ', 'letraset', 'manga mitikoman', 'plastic football ball', 'multi color pen', 'Ganbare,_Kickers!', 'The New Adventures of Huckleberry Finn', 'Hoshi no Ko Chobin', 'Iranian rial banknotes (200 Rials ) ', 'Iranian rial banknotes (500 Rials ) ', 'do not have teacher today!', 'Pink Panther ', 'brick game console', 'hand made bow', 'Popeye the Sailor Man and spinach', 'Joël Fajerman - Flowers Love'];

var TAGS = [];
var Kind = [];
var Main_Category = [];
var Sub_Category = [];
var Function_ = [];
var Feeling = [];
var Period = [];
var Spacial_Event = [];

for (var propName in DB[0]){
	TAGS.push( propName )
}
for( var i=0; i < DB.length; i++){

		Kind.push( DB[i].Kind );
		Main_Category.push( DB[i].Main_Category );
		Sub_Category.push( DB[i].Sub_Category );
		Function_.push( DB[i].Function_ );
		Feeling.push( DB[i].Feeling );
		Period.push( DB[i].Period );
		Spacial_Event.push( DB[i].Spacial_Event );
}

fltr(Kind);
Kind = uniqueArray;

fltr(Main_Category);
Main_Category = uniqueArray;

fltr(Sub_Category);
Sub_Category = uniqueArray;

fltr(Function_);
Function_ = uniqueArray;

fltr(Feeling);
Feeling = uniqueArray;

fltr(Period);
Period = uniqueArray;
fltr(Spacial_Event);
Spacial_Event = uniqueArray;

var S_list = {
	"Kind": Kind,
	"Main_Category": Main_Category,
	"Sub_Category": Sub_Category,
	"Function_": Function_,
	"Feeling": Feeling,
	"Period": Period,
	"Spacial_Event": Spacial_Event
	}


