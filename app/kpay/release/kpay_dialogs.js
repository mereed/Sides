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

var E=null,N=null,S=null,U=null,C=null,F=null,K=null,q=null;function R(){me.permissions.granted("access_internet")||O('This app requires the "Internet" permission to be granted'),kc.kp8(J,j)}function J(n,t){switch(n){case 2:O(kcfg.KPAY_UNKNOWN_ERROR_MSG);break;case 0:O(kcfg.KPAY_BLUETOOTH_UNAVAILABLE_MSG);break;case 1:O(kcfg.KPAY_INTERNET_UNAVAILABLE_MSG);break;case 5:W(kcfg.KPAY_CODE_AVAILABLE_MSG,t);break;case 6:W(kcfg.KPAY_PURCHASE_STARTED_MSG,t);break;case 7:Y()}}function O(n){E||(E=document.getElementById("kpay_errorDialog"),N=document.getElementById("kpay_errorMessage")),N.text=n,z(),E.style.display="inline",G()}function W(n,t){S||(S=document.getElementById("kpay_trialEndedDialog"),U=document.getElementById("kpay_trialEndedMessage"),C=document.getElementById("kpay_trialEndedCode")),C.text=L(t),U.text=n,z(),S.style.display="inline",G()}function Y(){q||(q=document.getElementById("kpay_purchaseSuccessDialog")),z(),q.style.display="inline",G("celebration-long"),setTimeout(j,5e3)}function j(){B(),E&&(E.style.display="none"),S&&(S.style.display="none"),q&&(q.style.display="none")}function z(){F||(F=document.getElementById("kpay_timeInDialog"),K=function(){var n=new Date,t=("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2);F.text=t},clock.addEventListener("tick",function(){F&&"inline"==F.style.display&&K()})),F&&(K(),F.style.display="inline")}function B(){F&&(F.style.display="none")}function G(n){display.poke(),vibration.start(n||"nudge-max")}function H(){return E&&"inline"==E.style.display}function L(n){for(var t="",e=n.toString(),s=0;s<e.length;s++){var u=e.charAt(s);t=t.concat(Q("0x1"+u))}return t}function Q(n){for(var t="",e=0;e<n.length;e+=2){var s=parseInt(n.substr(e,2),16);s&&(t+=String.fromCharCode(s))}return t.toString()}R();