var stopNote = function(e, context) {
	e.stopPropagation();
	MIDI.noteOff(0, $(context).data('note'), 0);
	$(context).removeClass('down');
	// clear the binding so that MIDI.noteOff is only called once
	$(context).unbind('mouseleave');	
}

var startNote = function(context, note) {
	var delay = 0, // play one note every quarter second
		note = note || $(context).data('note');
		velocity = 127; // how hard the note hits
	MIDI.setVolume(0, 127);
	MIDI.noteOn(0, note, velocity, delay);
	$(context).addClass('down');
}
	
var key_binding_data = {
	right_hand_keys 			: [49, 81, 50, 87, 51, 69, 52, 82, 53, 84, 54, 89, 55, 85, 56, 73, 57, 79, 48, 80, 189, 219, 187, 221],
	right_keys_first_position	: [false, 60, 61, 62, 63, 64, false, 65, 66, 67, 68, 69, 70, 71, false, 72, 73, 74, 75, 76, false, 77, 78, 79],
	right_keys_second_position	: [80, 81, 82, 83, false, 84, 85, 86, 87, 88, false, 89, 90, 91, 92, 93, 94, 95, false, 96, 97, 98, 99 , 100],
	left_hand_keys 				: [65, 90, 83, 88, 68, 67, 70, 86, 71, 66, 72, 78, 74, 77, 75, 188, 76, 190, 186, 191, 222],
	left_keys_first_position	: [25, 26, 27, 28, false, 29, 30, 31, 32, 33, 34, 35, false, 36, 37, 38, 39, 40, false,  41, false],
	left_keys_second_position	: [42, 43, 44, 45, 46, 47, false, 48, 49, 50, 51, 52, false, 53, 54, 55, 56, 57, 58, 59, false]
};

var switchHandPositions = function(context) {
	var piano = document.getElementsByClassName('piano-holder')[0],
		hand = context.getAttribute('data-hand'),
		piano_attribute = 'data-' + hand + '-hand-position';

	if (context.getAttribute('data-hand-position') == 'first') {
		context.setAttribute('data-hand-position', 'second');
		piano.classList.remove(hand + '-first');
		piano.classList.add(hand + '-second');
		piano.setAttribute(piano_attribute, 'second');
	} else {
		context.setAttribute('data-hand-position', 'first');
		piano.classList.remove(hand + '-second');
		piano.classList.add(hand + '-first');
		piano.setAttribute(piano_attribute, 'first');
	}

}

var checkKey = function(e) {
	var key_info = {};	
	if(key_binding_data.right_hand_keys.indexOf(e.which) != -1) {
		return {
			hand : 'right',
			array_index : key_binding_data.right_hand_keys.indexOf(e.which)
		}
	} else if (key_binding_data.left_hand_keys.indexOf(e.which) != -1) {
		return {
			hand : 'left',
			array_index : key_binding_data.left_hand_keys.indexOf(e.which)
		}
	} else {
		return false
	}
} 

var findPianoKeyFromKeyboardKey = function(e) {
	var key_info = checkKey(e);
	if(!key_info) {
		return false;
	}
	var hand = key_info.hand,
		array_index = key_info.array_index,
		piano_holder = document.getElementsByClassName('piano-holder')[0],
		key_set = piano_holder.getAttribute('data-' + hand + '-hand-position');	

	midi_value = key_binding_data[hand + '_keys_' + key_set + '_position'][array_index];
	
	if (midi_value === false) {
		return false
	} 
	return $('.key[data-note=' + midi_value + ']');
};

var held_keys = {};

$(document).ready(function(){
	MIDI.loadPlugin({
		soundfontUrl: "../vendor/midi/soundfont/",
		instrument: "acoustic_grand_piano",
		callback: function() {
			$(document).keydown(function(e) {
				if(e.which === 9) {
					e.preventDefault();
				}
				if (held_keys[e.which]) {
					return;
				}
				startNote(findPianoKeyFromKeyboardKey(e));
				held_keys[e.which] = true
			}).keyup(function(e) {
				stopNote(e, findPianoKeyFromKeyboardKey(e));
				delete held_keys[e.which]
			});

			$('.hand-control').on('click', function(e) {
				switchHandPositions(this);
			});

			$('.key').on({
				'mousedown' : function(e) {
					e.stopPropagation();
					startNote($(this));
					// only bind mouse leave when a key is clicked on
					// this will prevent MIDI.noteOff from being called needlessly
					$(this).bind('mouseleave', function(e){
						stopNote(e, this);
					});

				},
				'mouseup' : function(e) {
					stopNote(e, this);
				}
			});

			
		}
	});
});