var popup = {
    
    isOverlayed: false,
 
    overlayScreen: function (){
        console.log('Overlaying ');
        $('body').prepend("<div style='width: 100%; height: 100%; background: #013f5d; opacity: 0.8; position: fixed; z-index: 999999' id='overlay-master'></div>");
        popup.isOverlayed = true;
        console.log(popup);
    },
    
    removeOverlay: function(){ 
        $('#overlay-master').remove();
        popup.isOverlayed = false;
    },
    
    closePopup: function() {
        $('.popup_window').remove();
    },
    
    activateFirstPopup: function(){
        $('#overlay-master').append('<div id="1_popup" class="popup_window"><h3>Welcome to <b>SmartProfits Auto Trader</b>.</h3><p>Learn how you can load up your account with fast cash by letting Smart Profits Auto Trader work for you. Just follow this quick tour. </p><a href="javascript:popup.removeOverlay() ">Cancel</a> <a class="btn2" href="javascript: popup.activateSecondPopup()">Start</a></div>'); 
        $('#1_popup').addClass("popup1");
          },
    
    activateSecondPopup: function(){
        popup.closePopup();
        $('#overlay-master').append('<div id="2_popup" class="popup_window"><p >We provide the hottest assets on the market here.  Click TRADE NOW and our system will make a trade for you based on the amount that you predetermine in the settings. </p> <a href="javascript: popup.closePopup(); popup.activateFirstPopup() ">&lt; Back</a> <a href="javascript: popup.activateThirdPopup()">Next &gt;</a></div>');
       $('#2_popup').addClass("popup2");
    },
    
    activateThirdPopup: function(){
        popup.closePopup();
        $('#overlay-master').append('<div id="3_popup" class="popup_window"><p>This space exhibits open trades that are still in progress.</p><a href="javascript: popup.closePopup(); popup.activateSecondPopup() ">&lt; Back</a> <a href="javascript: popup.activateFourthPopup()">Next &gt;</a></div>');
        $('#3_popup').addClass("popup3");
    },
    
      activateFourthPopup: function(){
          popup.closePopup();
        $('#overlay-master').append('<div id="4_popup" class="popup_window"><p>Review your earnings here, check to see if you need to make another deposit, and keep track of your trades here.</p><a href="javascript: popup.closePopup(); popup.activateThirdPopup() ">&lt; Back</a> <a href="javascript: popup.activateFifthPopup()">Next &gt;</a> </div>');
          $('#4_popup').addClass("popup4");
    },
    
     activateFifthPopup: function(){
          popup.closePopup();
        $('#overlay-master').append('<div id="5_popup" class="popup_window"><p>This space exhibits expired trades that the <br /> user has already placed.</p><a href="javascript: popup.closePopup(); popup.activateFourthPopup() ">&lt; Back</a> <a href="javascript: popup.activateSixthPopup()">Next &gt;</a></div>');
         $('#5_popup').addClass("popup5");
    },
    
     activateSixthPopup: function(){
          popup.closePopup();
        $('#overlay-master').append('<div id="6_popup" class="popup_window"><p>6 </p><a href="javascript: popup.closePopup(); popup.activateFourthPopup() ">&lt; Back</a> <a href="javascript: popup.activateSeventhPopup()">Next &gt;</a></div>');
         $('#6_popup').addClass("popup5");
    },
    
     activateSeventhPopup: function(){
          popup.closePopup();
        $('#overlay-master').append('<div id="7_popup" class="popup_window"><p>7</p><a href="javascript: popup.closePopup(); popup.activateFourthPopup() ">&lt; Back</a><a href="javascript: popup.activateEighthPopup()">Next &gt;</a></div>');
         $('#7_popup').addClass("popup5");
    },
    
       activateEighthPopup: function(){
          popup.closePopup();
        $('#overlay-master').append('<div id="8_popup" class="popup_window"><p>8</p><a href="javascript: popup.closePopup(); popup.activateFourthPopup() ">&lt; Back</a> <a href="javascript:popup.removeOverlay() ">Close</a></div>');
         $('#8_popup').addClass("popup5");
    }
    
    
}

$(function(){
    // once the page finished loading
    popup.overlayScreen();
    popup.activateFirstPopup();
});