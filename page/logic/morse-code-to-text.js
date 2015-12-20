var morseCode = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'-----': '0',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'.--.-': 'à',
	'.--.-': 'å',
	'.-.-': 'ä',
	'----': 'ch',
	'.-..-': 'è',
	'..-..': 'é',
	'---.': 'ö',
	'..--': 'ü',
	'...--..': 'ß',
	'--.--': 'ñ',
	'.-.-.-': '.',
	'--..--': ',',
	'---...': ':',
	'-.-.-.': ';',
	'..--..': '?',
	'-....-': '-',
	'..--.-': '_',
	'-.--.': '(',
	'-.--.-': ')',
	'.----.': '\'',
	'-...-': '=',
	'.-.-.': '+',
	'-..-.': '/',
	'.--.-.': '@'
};

function morseCodeToText(morse) {
	var output = '';

	var newLineRegExp = new RegExp('\n', 'g');
	morse = morse.replace(newLineRegExp, ' \n ');

	var words = morse.split(' / ');
	for (var i = 0; i < words.length; i++) {
		if (i !== 0) output += ' '; // word separator

		if (words[i].length === 0) continue;
		var chars = words[i].split(' ');
		for (var j = 0; j < chars.length; j++) {
			var tmp = morseCode[chars[j]];

			// check if a morse code translation exists
			if (typeof tmp === 'undefined') {
				tmp = chars[j];
			}

			output += tmp;
		}
	}

	return output;
}