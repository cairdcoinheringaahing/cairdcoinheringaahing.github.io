document.getElementById('run').onclick = function() {
	document.enter = true;
	
	document.size  =  document.getElementById('size');
	document.limit =  document.getElementById('limit');
	document.start = [document.getElementById('start_x'),
			  document.getElementById('start_y'),
			  document.getElementById('start_z')];
	document.delta = [document.getElementById('delta_x'),
			  document.getElementById('delta_y'),
			  document.getElementById('delta_z')];
	document.out   =  document.getElementById('out');
	
	document.flags = [document.getElementById('flag_b'),
			  document.getElementById('flag_e'),
			  document.getElementById('flag_x'),
			  document.getElementById('flag_d')];
	
	document.input =  document.getElementById('input');
};
