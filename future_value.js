$(document).ready(function() {
	// compounding interest calculations
	var calculateFV = function(investment,addition,rate,years) {
		var futureValue = investment;
		var additionalTotal = addition;
		let futureInterest;
		for (var i = 1; i <= years; i++ ) {
			// for each year, add the initial investment to the interest rate: compounding
			futureValue += futureValue * rate / 100;
			// for each year add the addition investments +
			// their interest earning: compounding
			futureValue += addition + addition * rate / 100;
		}	
			additionalTotal = addition * years
			futureInterest = (futureValue - investment) - additionalTotal
			formatFV(futureValue, futureInterest, additionalTotal)
	};
	// formats the calculated value returning USD Format.
	var formatFV = function (futureValue, futureInterest, additionalTotal) {
		futureValue = futureValue.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
		$("#future_value").val(futureValue)
		futureInterest = futureInterest.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
		$("#interest").val(futureInterest)
		additionalTotal = additionalTotal.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
		$("#additional_total").val(additionalTotal)
	};
	
	$("#calculate").click( function() {
    	var investment = parseInt($("#investment").val() );
    	var rate = parseFloat( $("#annual_rate").val() );
			var years = parseInt( $("#years").val() );
			var addition = parseFloat( $("#additional").val() );
		// ensures user input numbers
			if (isNaN(investment) || investment <= 0) {
			console.log("Must be > 0");
		} else if (isNaN(rate) || rate <= 0) {
				console.log("Must be > 0");
		} else if (isNaN(years) || years <= 0) {
				console.log("Must be > 0");
				allValid = false;
		} else if (isNaN(addition)) {
				console.log("muhh");
		} else {
				calculateFV(investment,addition,rate,years);
		}
	});
    $("#investment").focus();
});
