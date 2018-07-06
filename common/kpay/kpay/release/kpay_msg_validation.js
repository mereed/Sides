/*
* K·Pay Integration Library - v1.2.3 - Copyright Kiezel 2018
* Last Modified: 2017-10-19
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

import * as kc from './kpay_core.js';

var KPAY_SECRET = [218, 158, 203, 149, 44, 92, 146, 108, 119, 140, 166, 1, 174, 225, 90, 128];
function un(){kc.kp10(cn)}function rn(n){return new Uint8Array([255&n,(65280&n)>>8,(16711680&n)>>16,(4278190080&n)>>24])}function cn(n,t,e){var s=n.serverResponse,r=0,i="trial"===s.status,l="licensed"===s.status;i?r=1:l&&(r=2);var d=new Uint8Array(i?29:25),rb=rn(t),fb=rn(e),tb=null;i&&(tb=rn(Number(s.trialDurationInSeconds)));var c=0,u=new gn;
	d[c++] = fb[0];
	d[c++] = KPAY_SECRET[1];
	d[c++] = KPAY_SECRET[3];
	d[c++] = fb[3];
	d[c++] = KPAY_SECRET[4];
	d[c++] = KPAY_SECRET[2];
	d[c++] = rb[2];
	d[c++] = rb[3];
	d[c++] = KPAY_SECRET[15];
	d[c++] = rb[1];
	d[c++] = KPAY_SECRET[13];
	if (i) {
		d[c++] = tb[1];
	}
	d[c++] = KPAY_SECRET[7];
	d[c++] = KPAY_SECRET[12];
	if (i) {
		d[c++] = tb[3];
	}
	d[c++] = fb[1];
	d[c++] = KPAY_SECRET[11];
	d[c++] = KPAY_SECRET[9];
	d[c++] = KPAY_SECRET[5];
	d[c++] = KPAY_SECRET[14];
	d[c++] = rb[0];
	d[c++] = fb[2];
	d[c++] = KPAY_SECRET[6];
	d[c++] = r;
	d[c++] = KPAY_SECRET[8];
	if (i) {
		d[c++] = tb[2];
		d[c++] = tb[0];
	}
	d[c++] = KPAY_SECRET[10];
	d[c++] = KPAY_SECRET[0];
return u.update(d),u.l()===s.checksum}/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
var on="0123456789abcdef".split(""),fn=[-2147483648,8388608,32768,128],an=[24,16,8,0],hn=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],ln=[];function gn(){ln[0]=ln[16]=ln[1]=ln[2]=ln[3]=ln[4]=ln[5]=ln[6]=ln[7]=ln[8]=ln[9]=ln[10]=ln[11]=ln[12]=ln[13]=ln[14]=ln[15]=0,this.g=ln,this.k=1779033703,this.v=3144134277,this.m=1013904242,this.p=2773480762,this.D=1359893119,this._=2600822924,this.M=528734635,this.I=1541459225,this.A=this.start=this.P=0,this.T=this.N=!1,this.S=!0}gn.prototype.update=function(n){if(!this.T){for(var t=(n=new Uint8Array(n)).length,e,s=0,i,u=this.g;s<t;){for(this.N&&(this.N=!1,u[0]=this.A,u[16]=u[1]=u[2]=u[3]=u[4]=u[5]=u[6]=u[7]=u[8]=u[9]=u[10]=u[11]=u[12]=u[13]=u[14]=u[15]=0),i=this.start;s<t&&i<64;++s)u[i>>2]|=n[s]<<an[3&i++];this.U=i,this.P+=i-this.start,i>=64?(this.A=u[16],this.start=i-64,this.hash(),this.N=!0):this.start=i}return this}},gn.prototype.C=function(){if(!this.T){this.T=!0;var n=this.g,i=this.U;n[16]=this.A,n[i>>2]|=fn[3&i],this.A=n[16],i>=56&&(this.N||this.hash(),n[0]=this.A,n[16]=n[1]=n[2]=n[3]=n[4]=n[5]=n[6]=n[7]=n[8]=n[9]=n[10]=n[11]=n[12]=n[13]=n[14]=n[15]=0),n[15]=this.P<<3,this.hash()}},gn.prototype.hash=function(){var n=this.k,t=this.v,c=this.m,d=this.p,e=this.D,s=this._,u=this.M,o=this.I,f=this.g,a,h,g,k,v,m,p,b,y,w,D;for(a=16;a<64;++a)h=((v=f[a-15])>>>7|v<<25)^(v>>>18|v<<14)^v>>>3,g=((v=f[a-2])>>>17|v<<15)^(v>>>19|v<<13)^v>>>10,f[a]=f[a-16]+h+f[a-7]+g<<0;for(D=t&c,a=0;a<64;a+=4)this.S?(b=704751109,o=(v=f[0]-210244248)-1521486534<<0,d=v+143694565<<0,this.S=!1):(h=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),k=(b=n&t)^n&c^D,o=d+(v=o+(g=(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7))+(p=e&s^~e&u)+hn[a]+f[a])<<0,d=v+(m=h+k)<<0),h=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),k=(y=d&n)^d&t^b,u=c+(v=u+(g=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+(p=o&e^~o&s)+hn[a+1]+f[a+1])<<0,h=((c=v+(m=h+k)<<0)>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),k=(w=c&d)^c&n^y,s=t+(v=s+(g=(u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(p=u&o^~u&e)+hn[a+2]+f[a+2])<<0,h=((t=v+(m=h+k)<<0)>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),k=(D=t&c)^t&d^w,e=n+(v=e+(g=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7))+(p=s&u^~s&o)+hn[a+3]+f[a+3])<<0,n=v+(m=h+k)<<0;this.k=this.k+n<<0,this.v=this.v+t<<0,this.m=this.m+c<<0,this.p=this.p+d<<0,this.D=this.D+e<<0,this._=this._+s<<0,this.M=this.M+u<<0,this.I=this.I+o<<0},gn.prototype.l=function(){this.C();var n=this.k,t=this.v,e=this.m,s=this.p,u=this.D,o=this._,f=this.M,a=this.I;return on[n>>28&15]+on[n>>24&15]+on[n>>20&15]+on[n>>16&15]+on[n>>12&15]+on[n>>8&15]+on[n>>4&15]+on[15&n]+on[t>>28&15]+on[t>>24&15]+on[t>>20&15]+on[t>>16&15]+on[t>>12&15]+on[t>>8&15]+on[t>>4&15]+on[15&t]+on[e>>28&15]+on[e>>24&15]+on[e>>20&15]+on[e>>16&15]+on[e>>12&15]+on[e>>8&15]+on[e>>4&15]+on[15&e]+on[s>>28&15]+on[s>>24&15]+on[s>>20&15]+on[s>>16&15]+on[s>>12&15]+on[s>>8&15]+on[s>>4&15]+on[15&s]+on[u>>28&15]+on[u>>24&15]+on[u>>20&15]+on[u>>16&15]+on[u>>12&15]+on[u>>8&15]+on[u>>4&15]+on[15&u]+on[o>>28&15]+on[o>>24&15]+on[o>>20&15]+on[o>>16&15]+on[o>>12&15]+on[o>>8&15]+on[o>>4&15]+on[15&o]+on[f>>28&15]+on[f>>24&15]+on[f>>20&15]+on[f>>16&15]+on[f>>12&15]+on[f>>8&15]+on[f>>4&15]+on[15&f]+on[a>>28&15]+on[a>>24&15]+on[a>>20&15]+on[a>>16&15]+on[a>>12&15]+on[a>>8&15]+on[a>>4&15]+on[15&a]},un();