import clock from "clock";
import document from "document";
import {display} from "display";
import * as messaging from "messaging";
import * as utils from "../common/utils";
import * as util from "./util";
import { today } from "user-activity";
import { HeartRateSensor } from "heart-rate";
import * as fs from "fs";
import { me } from "appbit";
import userSettings from "user-settings";
import {preferences} from "user-settings";
import { charger, battery } from "power";
import Weather from '../common/weather/device';
import {weather_icon} from '../common/weather/common.js';
import { user } from "user-profile";
import { units } from "user-settings";
import { inbox } from "file-transfer";
import { me as device } from "device";
import { prefs, save, load } from "../common/shared_preferences";

// always on display?
//display.autoOff = true

// Create a new instance of the HeartRateSensor object
var hrm = new HeartRateSensor();

// Update the clock every minute
clock.granularity = "minutes";

// Clock view
let myLabel = document.getElementById("myLabel");
let myLabelb = document.getElementById("myLabelb");
let myLabel0 = document.getElementById("myLabel0");
let myLabel0b = document.getElementById("myLabel0b");
let dateLabel1 = document.getElementById("dateLabel1");
let dateLabel1b = document.getElementById("dateLabel1b");
let dateLabel1b2 = document.getElementById("dateLabel1b2");
let dateLabel2 = document.getElementById("dateLabel2");
let dateLabel10b = document.getElementById("dateLabel10b");
let dateLabel10b2 = document.getElementById("dateLabel10b");

let temp = document.getElementById("temp");
let temp0 = document.getElementById("temp0");
let tempb = document.getElementById("tempb");
let temp0b = document.getElementById("temp0b");

let steptext = document.getElementById("steptext");
let caltext = document.getElementById("caltext");
let eletext = document.getElementById("eletext");
let acttext = document.getElementById("acttext");
let disttext = document.getElementById("disttext");
let hrLabel = document.getElementById("hrm");
hrLabel.text = "––";

let steptext0 = document.getElementById("steptext0");
let caltext0 = document.getElementById("caltext0");
let eletext0 = document.getElementById("eletext0");
let acttext0 = document.getElementById("acttext0");
let disttext0 = document.getElementById("disttext0");
let hrLabel0 = document.getElementById("hrm0");
hrLabel0.text = "––";

let hearticon = document.getElementById("hearticon");
let sicon = document.getElementById("sicon");
let cicon = document.getElementById("cicon");
let ficon = document.getElementById("ficon");
let aicon = document.getElementById("aicon");
let dicon = document.getElementById("dicon");
let sicon0 = document.getElementById("sicon0");
let cicon0 = document.getElementById("cicon0");
let ficon0 = document.getElementById("ficon0");
let aicon0 = document.getElementById("aicon0");
let dicon0 = document.getElementById("dicon0");

let batterytext = document.getElementById("batterytext");
let batterytext2 = document.getElementById("batterytext2");
let battimg = document.getElementById("battimg");

let swapside = document.getElementById("swapside");

// Views
let right = document.getElementById("righthand");
let left = document.getElementById("lefthand");

let statview = document.getElementById("stat");  
let statview2 = document.getElementById("stat2");  
const count = 2;

// TOUCH EVENTS
const side = true;

const imageBackground = document.getElementById("imageBackground");
const SETTINGS_FILE = "settings.cbor";
const SETTINGS_TYPE = "cbor";


/*
 * Entry point for the watch app
 */
import document from "document";
import clock from "clock";
import * as messaging from 'messaging';


/**** BEGIN KPAY IMPORTS - REQUIRED ****/
/*
 * If you want (a lot of) logging from the KPay library,
 * replace "release" with "debug" in the import paths for
 * ALL KPAY IMPORTS below 
 *    ==> DO NOT MIX RELEASE AND DEBUG IMPORTS!
 */
// required imports
import * as kpay from './kpay/release/kpay.js';
import * as kpay_common from '../common/kpay/kpay_common.js';

/* Choose which type of "companion => phone communications" you want to use:
 *   - file transfer: is more reliable, uses more memory
 *          ==> import './kpay/release/kpay_filetransfer.js';
 *   - normal messaging: less reliable then file transfer, might cause frustration with the user if messaging fails, but uses less memory
 *          ==> import './kpay/release/kpay_messaging.js';
 * If you do not run into memory issues with your app or clockface, we recommend you use the file transfer communications
 *
 * Check the comments in the "message" event handler at the bottom of this file how to save even more memory by forwarding all KPay communications yourself.
 */
import './kpay/release/kpay_filetransfer.js';
//import './kpay/release/kpay_messaging.js';

// optional imports, remove if not needed to save memory
import './kpay/release/kpay_dialogs.js';			// remove if you handle KPay dialogs yourself
import './kpay/release/kpay_time_trial.js';			// remove if you do not want a time based trial

/*
 * Removing the import below can save up to 8.5kb of extra memory.
 *
 * BEWARE: Only do this when you really need that extra memory and cannot get it by optimizing your own code!
 * Removing this import will disable the message checksum validation, which means the KPay lib
 * can no longer detect if the messages received from the KPay server are tampered with.
 * Eventhough the risk of your app being cracked are very small, removing this import makes it a possibility!
 */
import './kpay/release/kpay_msg_validation.js';			// remove if you need extra memory and are willing to take the risk described above
/**** END KPAY IMPORTS ****/


/**** KPAY INIT - REQUIRED ***/
kpay.initialize();

// After initializing the library, you can either wait for the time based trial to end 
// (when enabled with the import above)
// OR
// You can start the purchase yourself, even before the trial ends, by calling
// the function "kpay.startPurchase()" ==> for example a "purchase now!" button that 
// allows users to purchase before trial ends
//
// When not using the time based trial, this is the only way to start a purchase!
//kpay.startPurchase();

// all public KPay functions can be found in kpay.js (in debug/release folders)
// some KPay settings can be found in kpay_config.js


/**** BEGIN APP MESSAGING -- CAN BE REMOVED IF YOUR APP DOES NOT NEED MESSAGING ****/
messaging.peerSocket.addEventListener("open", () => {
  console.log("Communication onOpen called!");
});

messaging.peerSocket.addEventListener("message", (evt) => {
  let msg = evt.data;
  if (kpay_common.isKPayMessage(msg)) {
    /* 
      To save even more memory, it is possible to completely turn off KPay messaging and forward all KPay
      messages to the lib yourself.
      Do this by commenting both the "kpay_filetransfer.js" and "kpay_messaging.js" imports on top.
      Then call "kpay.processMessageFromCompanion(msg);" here to forward the message to our lib.
      
      DO NOT CALL THIS FUNCTION WITHOUT DISABLING THE IMPORTS FIRST!!
    */
    return;
  }
  
  // handle your own messages from companion to watch below this line!
  console.log("Communication onMessage called: " + JSON.stringify(msg));
});

messaging.peerSocket.addEventListener("close", (evt) => {
  console.log("Communication onClose called: " + JSON.stringify(evt));
});

messaging.peerSocket.addEventListener("error", (err) => {
  console.log("Communication onError called: " + err.code + " - " + err.message);
});
/**** END APP MESSAGING -- CAN BE REMOVED IF YOUR APP DOES NOT NEED MESSAGING ****/


//---------------------shared prefs Settings------------------------

let fileOpen = load();

function init() {
  if (fileOpen) {
    side  = prefs.side;
    let tempText = prefs.tempText
    let tempText2 = prefs.tempText2
    let location = prefs.location
  } else {
    preferences.side = side;
    preferences.tempText = tempText;
    preferences.tempText2 = tempText2;
    preferences.location = location;
    save();
  }
  
  if (side) {      
    right.style.display = "none";  
    left.style.display = "inline";  
  } else {  
    right.style.display = "inline";  
    left.style.display = "none";  
  }
  
  if (location) {      
    document.getElementById("GW_DESCRIPTION").text = location;
  } 
  
  if (tempText) {      
    temp.text = tempText;  
  } 
  
}

//-----------------------------------------------------------------------


let mySettings;
loadSettings();
me.onunload = saveSettings;

inbox.onnewfile = () => {
  let fileName;
  do {
    fileName = inbox.nextFile();
    if (fileName) {
      if (mySettings.bg && mySettings.bg !== "") {
        fs.unlinkSync(mySettings.bg);
      }
      mySettings.bg = `/private/data/${fileName}`;
      applySettings();
    }
  } while (fileName);
};

function loadSettings() {
  try {
    mySettings = fs.readFileSync(SETTINGS_FILE, SETTINGS_TYPE);
  } catch(ex) {
    mySettings = {};
  }
  applySettings();
}

function saveSettings() {
  fs.writeFileSync(SETTINGS_FILE, mySettings, SETTINGS_TYPE);
}

function applySettings() {
  if (mySettings.bg) {
    imageBackground.image = mySettings.bg;
  }
  display.on = true;
}

// Listen for the onopen event
// Message socket opens
messaging.peerSocket.onopen = () => {
  // kicking off updates
  console.log("App socket open")      
  setWeatherInterval(userSettings.weatherInterval);
  weather.fetch();
}

// Message socket closes
messaging.peerSocket.onclose = () => {
  
}

messaging.peerSocket.onmessage = evt => {
 
   switch (evt.data.key) {
    
     case "weatherInterval":
       userSettings.weatherInterval = JSON.parse(evt.data.newValue).values[0].value;
       setWeatherInterval(userSettings.weatherInterval);
     break;
     case "weatherTemperature":
       userSettings.weatherTemperature = JSON.parse(evt.data.newValue).values[0].value;
       weather.fetch();
     break;

case "battery":
          userSettings.battery = (evt.data.newValue == "true");
   
          if (userSettings.battery) {
            batterytext.style.display="inline";
            batterytext2.style.display="inline";
       //     battimg.style.display="inline";
          } else {     
            batterytext.style.display="none";
            batterytext2.style.display="none";
        //    battimg.style.display="none";
          }
    break;  

   }
}

//--------- startup settings ---------//

// trying to get user settings if saved before
let userSettings;
try {
  userSettings = fs.readFileSync("user_settings.cbor", "cbor");
   
} catch (e) {
  userSettings = {
    weatherInterval: 120, // update weather every 120 min
    weatherTemperature: "C" // display temperature units

  }
}

// setting interval to fetch weather
let iWeatherInterval; 
function setWeatherInterval(interval) {
  clearInterval(iWeatherInterval);
  iWeatherInterval = setInterval(() => weather.fetch(), interval * 60 * 1000); 
}

//--------- weather ---------//

function titleCase(str) {
  return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}

let weather = new Weather();

weather.setProvider("owm"); 
weather.setApiKey("5a8a46f282097fe19e5c6fe4205a27e0");
weather.setMaximumAge(25 * 1000); 

// Display the weather data received from the companion
weather.onsuccess = (data) => {
  console.log("Weather on device " + JSON.stringify(data));
//  icon.href =  weather_icon[data.isDay? "day" : "night"][data.conditionCode];
  
   if (data.description == "light intensity shower rain") {
    
    data.description = "light rain";
  }
  
var mystring = (data.description);  // limit string length to 18 chars
mystring = mystring.substring(0,18);
temp.text = (Math.round(data[`temperature${userSettings.weatherTemperature}`]) + "° ") + " " + titleCase(mystring);
temp0.text = (Math.round(data[`temperature${userSettings.weatherTemperature}`]) + "° ") + " " + titleCase(mystring);


var mystring2 = (data.location);
mystring2 = mystring2.substring(0,18);   // limit string length to 18 chars
document.getElementById("GW_DESCRIPTION").text = titleCase(mystring2);
document.getElementById("GW_DESCRIPTION0").text = titleCase(mystring2);
  
// preserving in user settings
  prefs.tempText = temp.text;
  prefs.tempText2 = temp0.text;
  
  prefs.location = mystring2;
  
  save();
}

weather.onerror = (error) => {
  console.log("Weather error " + JSON.stringify(error));

//setting temperature
  temp.text = "--°";
  
// preserving in user settings
  userSettings.tempText = temp.text;
}

function updateBattery(charge) {
  batterytext.text = (Math.floor(battery.chargeLevel) + "%");
  batterytext2.text = (Math.floor(battery.chargeLevel) + "%");
}

//--------- time & date ---------//

// Update the <text> element with the current time
function updateClock() {
  
let today = new Date();

let hours = utils.zeroPad(today.getHours());
  
if (preferences.clockDisplay === '12h') {
    let displayHours = hours % 12;
    hours = displayHours ? displayHours : 12; 
  }

let mins = utils.zeroPad(today.getMinutes());
let secs = (today.getSeconds());
  
  let monthNames = [
    "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  let weekdays = [
    "SU", "MO", "TU", "WED", "THU", "FR", "SA"
  ];
  
    // DATE

  	switch(today.getDate()) {
        
    case 1 :
    case 21 :
    case 31 :
  let weekdateindex =  "st";
    break;
      
    case 2 :
    case 22 :
  let weekdateindex =  "nd";
    break;
        
    case 3 :
    case 23 :
  let weekdateindex =  "rd";
    break;
        
    default :
  let weekdateindex = "th";
    break;
  }
  
  let weekdate = today.getDate();
  let weekindex = today.getDay();
  let monthIndex = today.getMonth();

myLabel.text = `${hours}:${mins}`;
myLabel0.text = `${hours}:${mins}`;
dateLabel1.text = `${weekdays[weekindex]}${weekdate}`;
dateLabel2.text = `${weekdays[weekindex]}${weekdate}`;
dateLabel1b.text = `${weekdateindex}`;
dateLabel1b2.text = `${weekdateindex}`;

updateBattery(Math.floor(battery.chargeLevel));
updateStats();

}

//--------- health stats ---------//

function updateStats() {
      if (today.adjusted.steps < 999) {
              steptext.text = (today.adjusted.steps || 0);
              steptext0.text = (today.adjusted.steps || 0) ;
      } else {
              steptext.text = Math.floor(today.adjusted.steps/1000) + "," + ("00"+(today.adjusted.steps%1000)).slice(-3);
              steptext0.text = Math.floor(today.adjusted.steps/1000) + "," + ("00"+(today.adjusted.steps%1000)).slice(-3);
      }
      
  
     if (today.adjusted.calories < 999) {
              caltext.text = (today.adjusted.calories || 0);
              caltext0.text = (today.adjusted.calories || 0);
      } else {
              caltext.text = Math.floor(today.adjusted.calories/1000) + "," + ("00"+(today.adjusted.calories%1000)).slice(-3);
              caltext0.text = Math.floor(today.adjusted.calories/1000) + "," + ("00"+(today.adjusted.calories%1000)).slice(-3);
      }  
  
     acttext.text = (today.adjusted.activeMinutes || 0);
     acttext0.text = (today.adjusted.activeMinutes || 0);
     eletext.text = (today.adjusted.elevationGain || 0);   
     eletext0.text = (today.adjusted.elevationGain || 0);   
  
    if (units.distance === "metric") {
       let units =  (today.adjusted.distance / 1000 || 0);
       disttext.text = units.toFixed(1) + "km";
       disttext0.text = units.toFixed(1) + "km";
//  console.log("dist km = " + JSON.stringify(units));
    } else {
       let units =  ((today.adjusted.distance / 1000) * 0.624 || 0);
       disttext.text = units.toFixed(1) + "mi";
       disttext0.text = units.toFixed(1) + "mi";
//  console.log("dist mi = " + JSON.stringify(units));
      
    }   
}
 
// Declare a even handler that will be called every time a new HR value is received.
hrm.onreading = function() {
// Initialize the UI with some values
  hrLabel.text = (hrm.heartRate || 0);
  hrLabel0.text = (hrm.heartRate || 0);
  hrm.stop();
}

// This function updates the label on the display that shows when data was last updated.
function updateDisplay() {
// Begin monitoring the sensor
hrm.start();
}

// And update the display every 5 sec
setInterval(updateDisplay, 5000);
  
// time side
swapside.onclick = function(evt) {
  if (side) {
    side = false;
    right.style.display = "inline";  
    left.style.display = "none";  
  } else {
    side = true;
    right.style.display = "none";
    left.style.display = "inline";
  } 
prefs.side = side;
save();
} 

// Change stat displayed
statview.onclick = function(evt) {
//  console.log("Click");
  setStat(); 
}

// Change time zone displayed

statview2.onclick = function(evt) {
//  console.log("Click");
  setStat(); 
} 

function setStat() {
  switch (count) {
 
      case 1: // steps
        steptext.style.display = "inline";      
        steptext0.style.display = "inline";      
        sicon.style.display = "inline";
        sicon0.style.display = "inline";
        caltext.style.display = "none";
        caltext0.style.display = "none";
        cicon.style.display = "none";
        cicon0.style.display = "none";
        disttext.style.display = "none";
        disttext0.style.display = "none";
        dicon.style.display = "none";
        dicon0.style.display = "none";
        eletext.style.display = "none";
        eletext0.style.display = "none";
        ficon.style.display = "none";
        ficon0.style.display = "none";
        acttext.style.display = "none";
        acttext0.style.display = "none";
        aicon.style.display = "none";
        aicon0.style.display = "none";
 
        count = 2;
      break;
      
      case 2:  //calories
        steptext.style.display = "none";      
        steptext0.style.display = "none";      
        sicon.style.display = "none";
        sicon0.style.display = "none";
        caltext.style.display = "inline";
        caltext0.style.display = "inline";
        cicon.style.display = "inline";
        cicon0.style.display = "inline";
        disttext.style.display = "none";
        disttext0.style.display = "none";
        dicon.style.display = "none";
        dicon0.style.display = "none";
        eletext.style.display = "none";
        eletext0.style.display = "none";
        ficon.style.display = "none";
        ficon0.style.display = "none";
        acttext.style.display = "none";
        acttext0.style.display = "none";
        aicon.style.display = "none";
        aicon0.style.display = "none";
      
        count = 3;
      break;
      
      case 3:  //distance
        steptext.style.display = "none";      
        steptext0.style.display = "none";      
        sicon.style.display = "none";
        sicon0.style.display = "none";
        caltext.style.display = "none";
        caltext0.style.display = "none";
        cicon.style.display = "none";
        cicon0.style.display = "none";
        disttext.style.display = "inline";
        disttext0.style.display = "inline";
        dicon.style.display = "inline";
        dicon0.style.display = "inline";
        eletext.style.display = "none";
        eletext0.style.display = "none";
        ficon.style.display = "none";
        ficon0.style.display = "none";
        acttext.style.display = "none";
        acttext0.style.display = "none";
        aicon.style.display = "none";
        aicon0.style.display = "none";
      
        count = 4;
      break;
      
      case 4:  //floors
        steptext.style.display = "none";      
        steptext0.style.display = "none";      
        sicon.style.display = "none";
        sicon0.style.display = "none";
        caltext.style.display = "none";
        caltext0.style.display = "none";
        cicon.style.display = "none";
        cicon0.style.display = "none";
        disttext.style.display = "none";
        disttext0.style.display = "none";
        dicon.style.display = "none";
        dicon0.style.display = "none";
        eletext.style.display = "inline";
        eletext0.style.display = "inline";
        ficon.style.display = "inline";
        ficon0.style.display = "inline";
        acttext.style.display = "none";
        acttext0.style.display = "none";
        aicon.style.display = "none";
        aicon0.style.display = "none";
      
        count = 5;
      break;
      
      case 5:  //active mins
        steptext.style.display = "none";      
        steptext0.style.display = "none";      
        sicon.style.display = "none";
        sicon0.style.display = "none";
        caltext.style.display = "none";
        caltext0.style.display = "none";
        cicon.style.display = "none";
        cicon0.style.display = "none";
        disttext.style.display = "none";
        disttext0.style.display = "none";
        dicon.style.display = "none";
        dicon0.style.display = "none";
        eletext.style.display = "none";
        eletext0.style.display = "none";
        ficon.style.display = "none";
        ficon0.style.display = "none";
        acttext.style.display = "inline";
        acttext0.style.display = "inline";
        aicon.style.display = "inline";
        aicon0.style.display = "inline";
      
        count = 1;
      break;
  
  } 
}
// -------------------------------------------------

init();

// Update the clock every tick event
clock.ontick = () => updateClock();

// Don't start with a blank screen
updateClock();
