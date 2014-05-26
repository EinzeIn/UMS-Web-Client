/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 500;
  var height = 300;

  chrome.app.window.create('index.html', {
    id: "helloWorldID",
    bounds: {
      width: width,
      height: height,
      left: Math.round((screenWidth-width)/2),
      top: Math.round((screenHeight-height)/2)
    }
  });
});
(function soapReq(){
  var dirReq = new XMLHttpRequest();
  dirReq.open('POST', "192.168.1.8:1400/renderer/rendercontrol/control HTTP/1.1/", true);
  var reqPacket = '<?xml version="1.0" encoding="utf-8"?>'+
  '<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://scemas.xmlsoap.org/soap/envelope/">'+
  '<s:Body>'+
  '<u:BrowseResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">'+
  '</u:BrowseResponse>'+
  '</s:Body>'+
  '</s:Envelope>';

  dirReq.setRequestHeader("SOAPACTION", "urn:schemas-upnp-org:service:ContentDirectory:1#Browse");
  dirReq.setRequestHeader("CONTENT-TYPE",  "text/xml;charset=UTF-8");

  dirReq.send(reqPacket);
});
