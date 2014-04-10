/* GET piano page. */
exports.index = function(req, res, next){
  	res.render('piano', {
 		key_value 			: 20,
		key_iterator 		: 0,		
		section_iterator 	: 1,
		key_infos 			: { 
			key_info_1 : [1,0,1,1,0,1,1,1,0,1,1,0,1], 
			key_info_2 : [1,1,0,1,1,0,1,1,1,0,1,1,0], 
			key_info_3 : [1,1,1,0,1,1,0,1,1,1,0,1,1], 
			key_info_4 : [0,1,1,1,0,1,1,0,1,1,1,0,0]
		},
		key_labels : {
			25 : ['left-hand-first', 'A'],
			26 : ['left-hand-first', 'Z'],
			27 : ['left-hand-first', 'S'],
			28 : ['left-hand-first', 'X'],
			29 : ['left-hand-first', 'C'],
			30 : ['left-hand-first', 'F'],
			31 : ['left-hand-first', 'V'],
			32 : ['left-hand-first', 'G'],
			33 : ['left-hand-first', 'B'],
			34 : ['left-hand-first', 'H'],
			35 : ['left-hand-first', 'N'],
			36 : ['left-hand-first', 'M'],
			37 : ['left-hand-first', 'K'],
			38 : ['left-hand-first', ','],
			39 : ['left-hand-first', 'L'],
			40 : ['left-hand-first', '.'],
			41 : ['left-hand-first', '/'],
			42 : ['left-hand-second', 'A'],
			43 : ['left-hand-second', 'Z'],
			44 : ['left-hand-second', 'S'],
			45 : ['left-hand-second', 'X'],
			46 : ['left-hand-second', 'D'],
			47 : ['left-hand-second', 'C'],
			48 : ['left-hand-second', 'V'],
			49 : ['left-hand-second', 'G'],
			50 : ['left-hand-second', 'B'],
			51 : ['left-hand-second', 'H'],
			52 : ['left-hand-second', 'N'],
			53 : ['left-hand-second', 'M'],
			54 : ['left-hand-second', 'K'],
			55 : ['left-hand-second', ','],
			56 : ['left-hand-second', 'L'],
			57 : ['left-hand-second', '.'],
			58 : ['left-hand-second', ';'],
			59 : ['left-hand-second', '/'],	
			60 : ['right-hand-first', 'Q'],
			61 : ['right-hand-first', '2'],
			62 : ['right-hand-first', 'W'],
			63 : ['right-hand-first', '3'],
			64 : ['right-hand-first', 'E'],
			65 : ['right-hand-first', 'R'],
			66 : ['right-hand-first', '5'],
			67 : ['right-hand-first', 'T'],
			68 : ['right-hand-first', '6'],
			69 : ['right-hand-first', 'Y'],
			70 : ['right-hand-first', '7'],
			71 : ['right-hand-first', 'U'],
			72 : ['right-hand-first', 'I'],
			73 : ['right-hand-first', '9'],
			74 : ['right-hand-first', 'O'],
			75 : ['right-hand-first', '0'],
			76 : ['right-hand-first', 'P'],
			77 : ['right-hand-first', '['],
			78 : ['right-hand-first', '='],
			79 : ['right-hand-first', ']'],
			80 : ['right-hand-second', '1'],
			81 : ['right-hand-second', 'Q'],
			82 : ['right-hand-second', '2'],
			83 : ['right-hand-second', 'W'],
			84 : ['right-hand-second', 'E'],
			85 : ['right-hand-second', '4'],
			86 : ['right-hand-second', 'R'],
			87 : ['right-hand-second', '5'],
			88 : ['right-hand-second', 'T'],
			89 : ['right-hand-second', 'Y'],
			90 : ['right-hand-second', '7'],
			91 : ['right-hand-second', 'U'],
			92 : ['right-hand-second', '8'],
			93 : ['right-hand-second', 'I'],
			94 : ['right-hand-second', '9'],
			95 : ['right-hand-second', 'O'],
			96 : ['right-hand-second', 'P'],
			97 : ['right-hand-second', '-'],
			98 : ['right-hand-second', '['],
			99 : ['right-hand-second', '='],
			100 : ['right-hand-second', ']']
		}
  	});
};
