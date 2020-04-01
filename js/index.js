function evalCountry(country) {
	let seventyFivePercentArray = ['SO', 'TV', 'NE', 'CF', 'SS', 'TD', 'BI', 'SL', 'BF', 'ML']
	let fiftyPercentArray = ['BG', 'TR', 'HU', 'PL', 'RO', 'EE', 'LT', 'KZ', 'GE', 'UA', 'MD']
	let thirtyPercentArray = ['RU', 'CN', 'MX', 'VN', 'TH']
	
	if (seventyFivePercentArray.includes(country)) {
		fastspring.builder.promo('75percent');
	} else if (fiftyPercentArray.includes(country)) {
		fastspring.builder.promo('50percent');
	} else if (thirtyPercentArray.includes(country)) {
		fastspring.builder.promo('30percent');
	}
}


function dataCallbackFunction(fsData) {
	let buyerCountry = fsData.country;
	let coupons = fsData.coupons;

	if (coupons.length == 0) {
		evalCountry(buyerCountry);
	}
}


