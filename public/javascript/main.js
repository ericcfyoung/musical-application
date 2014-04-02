var stopNote = function(e, context) {
	e.stopPropagation();
	MIDI.noteOff(0, $(context).data('note'), 0);
	$(context).removeClass('down');
	// clear the binding so that MIDI.noteOff is only called once
	$(context).unbind('mouseleave');	
}
$(document).ready(function(){
	MIDI.loadPlugin({
		soundfontUrl: "../vendor/midi/soundfont/",
		instrument: "acoustic_grand_piano",
		callback: function() {
			$('.key').on({
				'mousedown' : function(e) {
					e.stopPropagation();
					var delay = 0; // play one note every quarter second
					var velocity = 127; // how hard the note hits
					MIDI.setVolume(0, 127);
					MIDI.noteOn(0, $(this).data('note'), velocity, delay);
					$(this).addClass('down');
					// only bind mouse leave when a key is clicked on
					// this will prevent MIDI.noteOff from being called needlessly
					$(this).bind('mouseleave', function(e){
						stopNote(e, this);
					})

				},
				'mouseup' : function(e) {
					stopNote(e, this);
				}
			});

			
		}
	});
});