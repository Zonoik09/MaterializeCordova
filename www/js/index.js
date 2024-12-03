// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

}

(function($){
    $(function(){
  
        var options = { "swipeable": true };
        var el = document.getElementsByClassName('tabs');
        var instance = M.Tabs.init(el, options);
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space
  
