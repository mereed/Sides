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
import { inbox } from "file-transfer";
import * as kcm from '../../../common/kpay/kpay_common.js';
import * as kc from './kpay_core.js';

var V=[kcm.statusMessageFilename,kcm.purchaseMessageFilename],X=[],Z=[],$=inbox.nextFile;function nn(){kc.useFileTransfer(),inbox.addEventListener("newfile",tn)}function tn(n){var t=en();void 0!==t&&kc.processMessageFromCompanion(fs.readFileSync(t,"cbor"))}inbox.nextFile=function(){if(X.length>0)return X.pop();for(var n;n=$();){if(!(V.indexOf(n)>-1))return n;Z.push(n)}};function en(){if(Z.length>0)return Z.pop();for(var n;n=$();){if(V.indexOf(n)>-1)return n;X.push(n)}}nn();