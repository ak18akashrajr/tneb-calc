
let units=document.getElementById("unit-consumed");
let outputEl=document.getElementById("output-el");




function calculateFn(params) {

		
            let ebAmount = 0;
			let tariff = 0;
			let ebUnits = 0;
			ebUnits = units.value;
            // console.log(ebUnits);
			if (ebUnits > 0 && ebUnits <= 100) {
				
				tariff = 0;
                
			} else if (ebUnits <= 200) {
				ebAmount = 20 + ((ebUnits - 100) * 1.5);
				tariff = ebAmount;
                
			} else if (ebUnits <= 500) {
				ebAmount = 30 + 100 * 2 + (ebUnits - 200) * 3;
				tariff = ebAmount;
                
			} else if (ebUnits > 500) {
				ebAmount = 50 + 100 * 3.5 + 300 * 4.6 + (ebUnits - 500) * 6.6;
				tariff = ebAmount;
                
			}
            console.log(tariff);
            outputEl.textContent=tariff;
            
            
}




    

