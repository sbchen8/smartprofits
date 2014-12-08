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
        $('#overlay-master').append('<div id="2_popup" class="popup_window"><p >Review your earnings here, check to see if you need to make another deposit, and keep track of your trades here. </p> <a href="javascript: popup.closePopup(); popup.activateFirstPopup() ">&lt; Back</a> <a href="javascript: popup.activateThirdPopup()">Next &gt;</a></div>');
       $('#2_popup').addClass("popup2");
    },
    
    activateThirdPopup: function(){
        popup.closePopup();
        $('#overlay-master').append('<div id="3_popup" class="popup_window"><p>We provide the hottest assets on the market here. <br /> Click TRADE NOW and our system will make a trade for you based on the amount that you predetermine in the settings.  </p><a href="javascript: popup.closePopup(); popup.activateSecondPopup() ">&lt; Back</a> <a href="javascript: popup.activateFourthPopup()">Next &gt;</a></div>');
        $('#3_popup').addClass("popup3");
    },
    
      activateFourthPopup: function(){
          popup.closePopup();
        $('#overlay-master').append('<div id="4_popup" class="popup_window"><p>Increase your rate of success by following the success rate trends in real-time.</p><a href="javascript: popup.closePopup(); popup.activateThirdPopup() ">&lt; Back</a> <a href="javascript: popup.activateFifthPopup()">Next &gt;</a> </div>');
          $('#4_popup').addClass("popup4");
    },
    
     activateFifthPopup: function(){
          popup.closePopup();
        $('#overlay-master').append('<div id="5_popup" class="popup_window"><p>Scroll here in order to see popular positions that are currently open in the market.</p><a href="javascript: popup.closePopup(); popup.activateFourthPopup() ">&lt; Back</a> <a href="javascript: popup.activateSixthPopup()">Next &gt;</a></div>');
         $('#5_popup').addClass("popup5");
    },
    
     activateSixthPopup: function(){
          popup.closePopup();
        $('#overlay-master').append('<div id="6_popup" class="popup_window"><p>Scroll here in order to get a status update about positions that are currently closed in the market.</p><a href="javascript: popup.closePopup(); popup.activateFifthPopup() ">&lt; Back</a> <a href="javascript: popup.activateSeventhPopup()">Next &gt;</a></div>');
         $('#6_popup').addClass("popup6");
    },
    
     activateSeventhPopup: function(){
          popup.closePopup();
        $('#overlay-master').append('<div id="7_popup" class="popup_window"><p>Crowd-source your trades by watching successful trades around the globe.</p><a href="javascript: popup.closePopup(); popup.activateSixthPopup() ">&lt; Back</a> <a href="javascript: popup.activateEighthPopup()">Next &gt;</a></div>');
         $('#7_popup').addClass("popup7");
    },
    
       activateEighthPopup: function(){
          popup.closePopup();
        $('#overlay-master').append('<div id="8_popup" class="popup_window"><p>Experienced and confident traders may wish to go directly to the broker\'\s platform in order to make their own decisions about the financial market. Click here in order to go directly to the broker\'\s website, where you can get information on binary options and the latest opportunities for you to make smart trades online.</p><a href="javascript: popup.closePopup(); popup.activateSeventhPopup() ">&lt; Back</a> <a href="javascript: popup.activateNinthPopup()">Next &gt;</a></div>');
         $('#8_popup').addClass("popup8");
    },
    
      activateNinthPopup: function(){
          popup.closePopup();
        $('#overlay-master').append('<div id="9_popup" class="popup_window"><p>Select your investment amount here and trade <br /> as little as $25 on a single asset.</p><a href="javascript: popup.closePopup(); popup.activateEighthPopup() ">&lt; Back</a> <a href="javascript:popup.removeOverlay() ">Close</a></div>');
         $('#9_popup').addClass("popup9");
    }
    
    
}

$(function(){
    // once the page finished loading
    popup.overlayScreen();
    popup.activateFirstPopup();
});