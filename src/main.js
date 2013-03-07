var data = require("sdk/self").data;

var mainpanel = require("sdk/panel").Panel({
  width: 260,
  height: 260,
  contentURL: data.url("popup.html"),
  contentScriptFile: data.url("popup.js")
});
 
require("sdk/widget").Widget({
  label: "Wednesday Lunch Viewer",
  id: "mainpanel",
  contentURL: data.url("icon.png"),
  panel: mainpanel
});