var Gui = {
	
	userId: 0,
	waitBetweenBoxsSwitch: 800,
	
	// Login options 
	loginInterfaceLoad: function (){
		$('#unlogged_user_box').hide();
		$('#logged_user_box').fadeIn();
	},
	
	logoutInterfaceLoad: function (){
		$('#unlogged_user_box').fadeIn();
		$('#logged_user_box').hide();
		Gui.unloadUserInformation();
	},
	
	loadUserInformation: function (userObject){
		console.log('placing values');
		Gui.loginInterfaceLoad();
		console.log(userObject);
		var name = userObject.name;
		$('#logged_user_name').html(userObject.FirstName);
		$('#userBalance').html(userObject.accountBalance);
		$('#userBalance').append(' ('+userObject.currency+')');
		console.log('values placed');
	},
	
	unloadUserInformation: function (){
		$('#login_user').val('');
		$('#login_password').val('');
		$('.value_cell').html('0');
	},
	
	loadAssetsIntoCallAndPutBoxs: function (aAssetsArray){
		console.log('func approched');
		
		$.each(aAssetsArray, function(key, asset) {
			setTimeout(function() {
			$('#trading_'+asset.type).fadeOut('slow', function (){
					$('#trading_'+asset.type).parent('.trading_options_container').show();
					$('#trading_'+asset.type).fadeIn();
					$('#trading_'+asset.type).find('.currency_text').html(asset.title);
					
					if(asset.title.length > 10)
						$('#trading_'+asset.type).find('.currency_text').css('font-size', '20px');
					else if(asset.title.length > 15)
						$('#trading_'+asset.type).find('.currency_text').css('font-size', '15px');
					else 
						$('#trading_'+asset.type).find('.currency_text').css('font-size', '28px');
						
					$('#trading_'+asset.type).parent('.trading_options_container').find('.rate_percentage').html(asset.success_rate + "%");
					$('#trading_'+asset.type).parent('.trading_options_container').find('.precentage').css('width', asset.success_rate + "%");
					$('#trading_'+asset.type).parent('.trading_options_container').find('.timer').countdown('destroy');
					$('#trading_'+asset.type).parent('.trading_options_container').find('.timer').countdown({until: new Date(asset.expire*1000), compact: true});
					console.log('Ends: '+asset.expire)
					
					$('#trading_'+asset.type).parent('.trading_options_container').find('.btn').css('display', 'block');
					
				});
			}, 4000*key);
		});
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	countdown: function (unixtimeEnd, element){
		setInterval(function (){
			element.html(Gui.calculateTime(unixtimeEnd));
		}, 1000);
	},
	
	calculateTime: function (date_future){
		var calcNewYear = setInterval(function(){
        date_now = new Date();

        seconds = Math.floor((date_future - (date_now))/1000);
        minutes = Math.floor(seconds/60);
        hours = Math.floor(minutes/60);
        days = Math.floor(hours/24);
        
        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

        return "Time until new year:\nDays: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds;
    },1000);
		
	}
	
}
