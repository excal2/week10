// Create a preset array of numbers. Create a piece of code that chooses the largest number from that array
let preset=[5,6,98,202,42,8,54]
function showarray(){
	document.getElementById("main").innerHTML=preset.toString();
}
	function largest() {
		//set the large variable to zero
		var large=0;
		//step through the array and compare each number with the one before first is zero
		for(i=0;i<preset.length;i++){
			if (preset[i] >large){
				large=preset[i];
			}
		}		
		//tell the user what the biggest figure in array is
		alert("The biggest number is "+large);

			
	}
	