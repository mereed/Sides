/*
* K·Pay Integration Library - v1.2.3 - Copyright Kiezel 2018
* Last Modified: 2018-03-19
*
* BECAUSE THE LIBRARY IS LICENSED FREE OF CHARGE, THERE IS NO 
* WARRANTY FOR THE LIBRARY, TO THE EXTENT PERMITTED BY APPLICABLE 
* LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT 
* HOLDERS AND/OR OTHER PARTIES PROVIDE THE LIBRARY "AS IS" 
* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, 
* INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE
* RISK AS TO THE QUALITY AND PERFORMANCE OF THE LIBRARY IS WITH YOU.
* SHOULD THE LIBRARY PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL 
* NECESSARY SERVICING, REPAIR OR CORRECTION.
* 
* IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN 
* WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY 
* MODIFY AND/OR REDISTRIBUTE THE LIBRARY AS PERMITTED ABOVE, BE 
* LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, 
* INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR 
* INABILITY TO USE THE LIBRARY (INCLUDING BUT NOT LIMITED TO LOSS
* OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY 
* YOU OR THIRD PARTIES OR A FAILURE OF THE LIBRARY TO OPERATE WITH
* ANY OTHER SOFTWARE), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN 
* ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
*/

/**
  When set to true, you can test the purchasing of your app without having to pay for real.
  When set to true, trial times will always be 30 seconds (only when time trial is enabled here and on the server)
  
  Test purchases only, set to false before releasing or users can get your app for free!
*/
export var KPAY_TEST_MODE = false;

/**
  Default messages shown to the user in different stages of the purchase.
  Only used when the messages are handled by KPay and not overridden by your app
  
  You can change the messages to your liking here. Make sure to check if the changed message still fits the display.

  It is also possible to configure a custom url in your product settings on our website so its shows your personalized purchase page to the customers.
*/
export var KPAY_CODE_AVAILABLE_MSG = "To continue using Sides please visit kzl.io/code and enter this code:";
export var KPAY_PURCHASE_STARTED_MSG = "Please complete the purchase process on kzl.io/code to unlock Sides";

export var KPAY_UNKNOWN_ERROR_MSG = "An unknown error occurred";
export var KPAY_BLUETOOTH_UNAVAILABLE_MSG = "k·pay detected a problem with the connection between your watch and your phone";
export var KPAY_INTERNET_UNAVAILABLE_MSG = "k·pay detected a problem with the internet connection of your phone";


/******************************************************************************************/
/*    Advanced setting below this line, do not alter if you don't know what they mean!    */
/******************************************************************************************/


/**
  Set this to true if you never want to show any KPay errors to the user; set to false if you want
  to show an error (and lock down the app/clockface) when there is a problem with the BT connection
  between watch and phone, or the internet connection of the phone.
  This will ONLY happen at the moment the trial or the purchase is startin; once the app is licensed
  these error will NEVER show up anyore
  
  When set to true, this means the library will run in "best effort" mode. 
  It will keep retrying to start the trial and
  start the purchase, but if there are connection problems, it will never show an error and allow
  the user to keep using the app.
*/
export var SuppressAllErrors = true;


/******************************************************************************************/
/*      Below settings ONLY have effect when "SuppressAllErrors" is set to "false"!       */
/******************************************************************************************/
/**
  The amount of time to wait after initial install before connection errors are shown to the user
  Change to 0 if you want the watch to complain about the phone or internet connection not working
  right away when it happens.
  
  Value in milliseconds!!!
  
  Default: 30 minutes
*/
export var SupressConnectionErrorsTimeout = 1800000;   /* 30 minutes in ms */

/**
  The amount of times the connection with the phone can fail in a row before an error is displayed.
  It will be counted as a failure if the following requirements are met:
    - SupressConnectionErrorsTimeout has passed
    - messaging.peerSocket.readyState !== messaging.peerSocket.OPEN
    
  An attempt at connecting to the internet will be made in the following situations:
    - Time based trial is enabled and the watchface is (re)installed
    - Time based trial ends and the purchase needs to start
    - The method "startPurchase()" is called
    
  In each of these situations, the connection error will be displayed after the below defined number of retries.
  Retries are attempted with 15 second intervals.
*/
export var CompanionConnectionFailuresThreshold = 5;

/**
  The amount of times the connection with the internet can fail in a row before an error is displayed.
  It will be counted as a failure if the following requirements are met:
    - SupressConnectionErrorsTimeout has passed
    - A message was sent to the companion **successfully**, but no reply came by the time we attempt it again 15 seconds later
    
  An attempt at connecting to the internet will be made in the following situations:
    - Time based trial is enabled and the watchface is (re)installed
    - Time based trial ends and the purchase needs to start
    - The method "startPurchase()" is called
    
  In each of these situations, the connection error will be displayed after the below defined number of retries.
  Retries are attempted with 15 second intervals.
*/

export var StatusRequestsWithoutResponseThreshold = 3;

