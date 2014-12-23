var platform = {
	
	assets: [],
	
	// Prepare the app and verify connection to platform
	init : function() {
		
		// Try to init login
		platform.login();
		
		$('.user_platform_info').hide();
		// Loading assets
		$.ajax({
		  type: "POST",
		  url: 'api/Platform.class.php?action=getAssets',
		}).done(function(data){
			
			console.log('platform init success!');
			
			// Sending assets to handler function
			platform.loadAssets(data);
			
		}).fail(function(){
			console.log('platform init failed');
			platform.error('platform init failed');
		});
	},
	
	logout: function (){
		$.ajax({
		  type: "POST",
		  url: 'api/Platform.class.php?action=logout',
		}).done(function (response){
			Gui.logoutInterfaceLoad();
		}).fail(function(){
			console.log('platform init failed');
			platform.error('Could not logout, please try again later');
		});
		
	},
	
	
	// login user
	login : function(user, pass) {
		$.ajax({
		  type: "POST",
		  url: 'api/Platform.class.php?action=login',
		  data: { username: user, password: pass }
		}).done(function (response){
			var Customer = jQuery.parseJSON(response).Customer;
			console.log(Customer);
			Gui.loadUserInformation(Customer);
		}).fail(function(){
			console.log('platform init failed');
			platform.error('Username/password were wrong, please try again');
		});
	},
	
	afterLoginInit: function (){
		
	},
	
	loadAssets: function (sAssetStringArray){
		
		$.ajax({
		  type: "POST",
		  url: 'api/Platform.class.php?action=getEndDate',
		}).done(function (response){
			var times = jQuery.parseJSON(response);
			
			var Assets = jQuery.parseJSON(sAssetStringArray).Assets;
			// sort in array
			$.each(Assets, function(key, oAssets){
				if(oAssets.trend !== 'put' && oAssets.trend !== 'call')
					return ;
					
				platform.assets.push({id: oAssets.id, title: oAssets.name, type: oAssets.trend, expire: times[Math.floor(Math.random() * times.length)], success_rate: platform.generateSuccessRate()});
			});
			//console.log(Assets);
			console.log(platform.assets);
			Gui.loadAssetsIntoCallAndPutBoxs(platform.assets);



		}).fail(function(){
			console.log('end time load failed');
		});
		
		
		
	},
	
	error: function (msg){
		popup.activateErrorPopup(msg);
	},
	
	initStatsViews: function (){
		$('.user_platform_info').fadeIn();
	},
	
	loadPositions: function (){
		
	},
	
	generateSuccessRate: function(){
		return Math.floor(Math.random()*(90-22+1)+22);
	},
	
	generateEndDate: function(){
		var liftoff = new Date();
	    var time = new Date(liftoff.getFullYear(), liftoff.getMonth(), liftoff.getDate(), 17, 0, 0);
		return time;
	},
	
	
};

$(function() {
	platform.init(function(){
		
	});
	
	
});
