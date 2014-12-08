var smartprofits = {
	
	menuStatus: 'open',
	
	openAmountsMenu: function (){
		$('.trading_amount_cta_close').show();
		$('.trading_amount_cta_open').hide();
		$(".slider_inside").show();
	},
	
	closeAmountMenu: function (){
		$('.trading_amount_cta_close').hide();
		$('.trading_amount_cta_open').show();
		$(".slider_inside").hide();
	},
	
	unselectAmount: function (){
		$('.trade_amount').find('div').removeClass('active');
	},
	
	selectAmount: function (element){
		element.find('div').addClass('active');
	}
	
}

    ////////////////////////////////////////////////

$(function(){
	$('.trading_amount_cta_close').on('click', function(){
		smartprofits.closeAmountMenu();
	});
	$('.trading_amount_cta_open').on('click', function(){
		smartprofits.openAmountsMenu();
	});
	$('.trade_amount').on('click', function (){
		smartprofits.unselectAmount();
		smartprofits.selectAmount($(this));
	});
});
