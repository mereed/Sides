/*
* K·Pay Integration Library - v1.2.3 - Copyright Kiezel 2018
* Last Modified: 2018-04-11
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

import * as fs from "fs";
import * as messaging from 'messaging';
import * as kcm from '../../../common/kpay/kpay_common.js';
import * as kcfg from '../kpay_config.js';
import * as kp from './kpay.js';
var KPAY_APP_ID = 383597502;
export var kp0=null,n=!1,t={t:!1,i:!1,s:!1,u:0,o:0,h:0},e=null,s=null,u=null,o=null,f=!1,a=function(){return!1},h=function(){},g=function(){},k=function(){},v=function(){},m=function(){return!1},p=function(n,t,e){return!0};export function init(){P()?(kp0={sl:!1,it:(new Date).getTime()},k(!0),kp11()):(T(),k(!1)),messaging.peerSocket.addEventListener("open",v),0===messaging.peerSocket.readyState&&v()}export function useFileTransfer(){n=!0}export function processMessageFromCompanion(n){x(n)?(t.u>kcfg.StatusRequestsWithoutResponseThreshold&&g(),t.u=0,A(n)):n&&"start"===n.purchase?startPurchase():n&&"cancel"===n.purchase&&cancelPurchase()}function b(){null!==s&&(clearTimeout(s),s=null)}export function kp1(n){t.s=!1,kp2(n)}export function kp2(n){b(),t.s||(n&&y(),null===s&&(s=setTimeout(function(){kp2(!0)},15e3)))}export function kp3(){b(),t.s=!0}function y(){t.s=!1,kcfg.SuppressAllErrors||5===e||6===e||0!=t.o||kp0.it&&!((new Date).getTime()-kp0.it>kcfg.SupressConnectionErrorsTimeout)||t.u++,t.u>kcfg.StatusRequestsWithoutResponseThreshold&&kp5(1,null,!1),u||(u=Math.round(4294967295*Math.random())),D(M(KPAY_APP_ID,u,w(kcfg.KPAY_TEST_MODE,!f)))}function w(e,s){var u=1;return e&&(u|=2),(s||t.i)&&(u|=4),u|=32,n&&(u|=64),u}function D(n){try{if(0===messaging.peerSocket.readyState)return messaging.peerSocket.send(n),t.o>kcfg.CompanionConnectionFailuresThreshold&&g(),void(t.o=0)}catch(n){console.error(JSON.stringify(n))}_(n)}function _(n){t.o>kcfg.CompanionConnectionFailuresThreshold?kp5(0,null,!1):kcfg.SuppressAllErrors||kp0.it&&!((new Date).getTime()-kp0.it>kcfg.SupressConnectionErrorsTimeout)||t.o++,kp1(!1)}export function startPurchase(){kp0.sl||(kp0.te=!0,t.i=!0,t.s=!1,kp11(),kp1(!0))}export function cancelPurchase(){D(I()),kp0.sl||(kp0.te=!1,t.i=!1,kp11(),kp3(),g(),e=null)}function M(n,t,e){return{isKpayMsg:!0,type:0,appId:n,random:t,flags:e}}function I(){return{isKpayMsg:!0,type:3}}function x(n){return kcm.isKPayMessage(n)&&1===n.type}export function getStatus(){return kp0.sl?"licensed":kp0.ts&&!kp0.te?"trial":"unlicensed"}export function kp4(){t.h>5?kp5(2,null,!1):kcfg.SuppressAllErrors||t.h++}function A(n){if(!p(n,u,w(kcfg.KPAY_TEST_MODE,!f)))return kp4(),void kp1(!0);t.h>5&&g(),t.h=0;var s=n.serverResponse;if("licensed"==s.status)kp0.sl=!0,kp11(),kp5(7,null,!1),t.t=!1,kp3();else if("unlicensed"==s.status){kp0.sl=!1,kp11(),7===e&&(e=null),t.t=!0;var a=Number(s.paymentCode),h=a!=o;o=a,"waitForUser"==s.purchaseStatus?kp5(5,a,h):"inProgress"==s.purchaseStatus&&kp5(6,a,h),kp1(!0)}else m(s)||(kp4(),kp1(!0))}export function kp5(n,s,u){if((e!==n||u)&&(e=n,7!==n||t.t))try{a(n,s)||h(n,s)}catch(n){}}export function kp6(){return e}export function kp7(){e=null}export function setEventHandler(n){a=n}export function kp8(n,t){h=n,g=t}export function kp9(n,t,e){f=!0,k=n,v=t,m=e}export function kp10(n){p=n}function P(){try{var n=fs.statSync("kps");return!(n&&n.size)}catch(n){return!0}}function T(){P()||(kp0=fs.readFileSync("kps","cbor"))}export function kp11(){fs.writeFileSync("kps",kp0,"cbor")}