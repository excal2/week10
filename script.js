// Create a preset array of numbers. Create a piece of code that chooses the largest number from that array
let preset=[5,6,98,202,42,8,54]
	function largest() {
		var large=0;
		for(i=0;i<preset.length;i++){
			if (preset[i] >large){
				large=preset[i];
			}
		}		
		alert("the biggest number is"+large);

			
	}
	