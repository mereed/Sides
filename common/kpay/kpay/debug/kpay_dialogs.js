/*
* K·Pay Integration Library - v1.2.3 - Copyright Kiezel 2018
* Last Modified: 2018-06-05
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

/*****************************************************************************************/
/*                 GENERATED CODE BELOW THIS LINE - DO NOT MODIFY!                       */
/*****************************************************************************************/

import document from "document";
import { vibration } from "haptics";
import { display } from "display";
import clock from "clock";
import { me } from "appbit";
import * as kc from './kpay_core.js';
import * as kcfg from '../kpay_config.js';
import * as kp from './kpay.js';
import * as kcm from '../../../common/kpay/kpay_common.js';

var T = null, E = null, x = null, z = null, I = null, N = null, R = null, A = null;

function O() {
    console.log("KPay_dialogs - kpay_dialogs initialize called!"), me.permissions.granted("access_internet") || (console.log("KPay - ERROR: internet permission not enabled!"), 
    J('This app requires the "Internet" permission to be granted')), kc.kp8(U, W);
}

function U(n, e) {
    switch (console.log("KPay_dialogs - _handleEvent(e == " + n + ", extraData == " + e + ")"), 
    n) {
      case 2:
        J(kcfg.KPAY_UNKNOWN_ERROR_MSG);
        break;

      case 0:
        J(kcfg.KPAY_BLUETOOTH_UNAVAILABLE_MSG);
        break;

      case 1:
        J(kcfg.KPAY_INTERNET_UNAVAILABLE_MSG);
        break;

      case 5:
        q(kcfg.KPAY_CODE_AVAILABLE_MSG, e);
        break;

      case 6:
        q(kcfg.KPAY_PURCHASE_STARTED_MSG, e);
        break;

      case 7:
        L();
    }
}

function J(n) {
    console.log("KPay_dialogs - _showError() - message == " + n), T || (T = document.getElementById("kpay_errorDialog"), 
    E = document.getElementById("kpay_errorMessage")), E.text = n, H(), T.style.display = "inline", 
    j();
}

function q(n, e) {
    console.log("KPay_dialogs - _showTrialEnded() - message == " + n + "; code == " + e), 
    x || (x = document.getElementById("kpay_trialEndedDialog"), z = document.getElementById("kpay_trialEndedMessage"), 
    I = document.getElementById("kpay_trialEndedCode")), I.text = G(e), z.text = n, 
    H(), x.style.display = "inline", j();
}

function L() {
    console.log("KPay_dialogs - _showPurchaseSuccess()"), A || (A = document.getElementById("kpay_purchaseSuccessDialog")), 
    H(), A.style.display = "inline", j("celebration-long"), setTimeout(W, 5e3);
}

function W() {
    console.log("KPay_dialogs - _hideAlert()"), Y(), T && (T.style.display = "none"), 
    x && (x.style.display = "none"), A && (A.style.display = "none");
}

function H() {
    N || (N = document.getElementById("kpay_timeInDialog"), R = function() {
        var n = new Date(), e = ("0" + n.getHours()).slice(-2) + ":" + ("0" + n.getMinutes()).slice(-2);
        N.text = e;
    }, clock.addEventListener("tick", function() {
        N && "inline" == N.style.display && R();
    })), N && (R(), N.style.display = "inline");
}

function Y() {
    N && (N.style.display = "none");
}

function j(n) {
    display.poke(), vibration.start(n || "nudge-max");
}

function B() {
    return T && "inline" == T.style.display;
}

function G(n) {
    for (var e = "", t = n.toString(), s = 0; s < t.length; s++) {
        var a = t.charAt(s);
        e = e.concat(Q("0x1" + a));
    }
    return e;
}

function Q(n) {
    for (var e = "", t = 0; t < n.length; t += 2) {
        var s = parseInt(n.substr(t, 2), 16);
        s && (e += String.fromCharCode(s));
    }
    return e.toString();
}

O();

