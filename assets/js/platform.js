var platform = {

	init : function() {
		console.log('Platform is now connecting, ver:' + SO.version);
		platform.oMainObject = platform.generateObject();
		// verify if user is logged
		console.log(SO.model);
		
		if (!SO.model.Customer.isLoggedIn()) {
					 console.log('not connected');
		}
		

	},

	login : function(user, pass) {

	},

	generateObject : function() {
		SO.load({
			lang : "en",
			dir : 'LTR',
			cookieOptions : {
				domain : ".beeoptions.com"
			},
			packages : {
				RegularPlatform : {
					settings : {
				//		selector : "#so_container"
					}
				},
				MyAccount : {},
				Clock : {},
				Balance : {}
			},
			googleFonts : {
				families : ['Roboto+Condensed:400,300,700:latin,latin-ext,cyrillic']
			}
		});
		
	}
}

$(function() {
	platform.init();
});
