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
function an() {
    console.log("KPay_msg_validation - kpay_msg_validation initialize called!"), kc.kp10(cn);
}

function on(n) {
    return new Uint8Array([ 255 & n, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24 ]);
}

function cn(n, e, t) {
    console.log("KPay - _validateMessage()");
    var s = n.serverResponse, r = 0, i = "trial" === s.status, l = "licensed" === s.status;
    i ? r = 1 : l && (r = 2);
    var d = new Uint8Array(i ? 29 : 25), rb = on(e), fb = on(t), tb = null;
    i && (tb = on(Number(s.trialDurationInSeconds)));
    var c = 0, a = new dn();
    
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
    a.update(d);
    var o = a.h();
    return console.log("KPay - _validateMessage(); generated: " + o + "; received: " + s.checksum), 
    o === s.checksum;
}

/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
var ln = "0123456789abcdef".split(""), rn = [ -2147483648, 8388608, 32768, 128 ], un = [ 24, 16, 8, 0 ], fn = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], hn = [];

function dn() {
    hn[0] = hn[16] = hn[1] = hn[2] = hn[3] = hn[4] = hn[5] = hn[6] = hn[7] = hn[8] = hn[9] = hn[10] = hn[11] = hn[12] = hn[13] = hn[14] = hn[15] = 0, 
    this.g = hn, this.m = 1779033703, this._ = 3144134277, this.P = 1013904242, this.K = 2773480762, 
    this.k = 1359893119, this.v = 2600822924, this.p = 528734635, this.S = 1541459225, 
    this.C = this.start = this.M = 0, this.D = this.F = !1, this.T = !0;
}

dn.prototype.update = function(n) {
    if (!this.D) {
        for (var e = (n = new Uint8Array(n)).length, t, s = 0, i, a = this.g; s < e; ) {
            for (this.F && (this.F = !1, a[0] = this.C, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), 
            i = this.start; s < e && i < 64; ++s) a[i >> 2] |= n[s] << un[3 & i++];
            this.I = i, this.M += i - this.start, i >= 64 ? (this.C = a[16], this.start = i - 64, 
            this.hash(), this.F = !0) : this.start = i;
        }
        return this;
    }
}, dn.prototype.N = function() {
    if (!this.D) {
        this.D = !0;
        var n = this.g, i = this.I;
        n[16] = this.C, n[i >> 2] |= rn[3 & i], this.C = n[16], i >= 56 && (this.F || this.hash(), 
        n[0] = this.C, n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0), 
        n[15] = this.M << 3, this.hash();
    }
}, dn.prototype.hash = function() {
    var n = this.m, e = this._, c = this.P, d = this.K, t = this.k, s = this.v, a = this.p, o = this.S, u = this.g, f, h, g, y, m, _, P, K, k, v, p;
    for (f = 16; f < 64; ++f) h = ((m = u[f - 15]) >>> 7 | m << 25) ^ (m >>> 18 | m << 14) ^ m >>> 3, 
    g = ((m = u[f - 2]) >>> 17 | m << 15) ^ (m >>> 19 | m << 13) ^ m >>> 10, u[f] = u[f - 16] + h + u[f - 7] + g << 0;
    for (p = e & c, f = 0; f < 64; f += 4) this.T ? (K = 704751109, o = (m = u[0] - 210244248) - 1521486534 << 0, 
    d = m + 143694565 << 0, this.T = !1) : (h = (n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10), 
    y = (K = n & e) ^ n & c ^ p, o = d + (m = o + (g = (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)) + (P = t & s ^ ~t & a) + fn[f] + u[f]) << 0, 
    d = m + (_ = h + y) << 0), h = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10), 
    y = (k = d & n) ^ d & e ^ K, a = c + (m = a + (g = (o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + (P = o & t ^ ~o & s) + fn[f + 1] + u[f + 1]) << 0, 
    h = ((c = m + (_ = h + y) << 0) >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10), 
    y = (v = c & d) ^ c & n ^ k, s = e + (m = s + (g = (a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + (P = a & o ^ ~a & t) + fn[f + 2] + u[f + 2]) << 0, 
    h = ((e = m + (_ = h + y) << 0) >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10), 
    y = (p = e & c) ^ e & d ^ v, t = n + (m = t + (g = (s >>> 6 | s << 26) ^ (s >>> 11 | s << 21) ^ (s >>> 25 | s << 7)) + (P = s & a ^ ~s & o) + fn[f + 3] + u[f + 3]) << 0, 
    n = m + (_ = h + y) << 0;
    this.m = this.m + n << 0, this._ = this._ + e << 0, this.P = this.P + c << 0, this.K = this.K + d << 0, 
    this.k = this.k + t << 0, this.v = this.v + s << 0, this.p = this.p + a << 0, this.S = this.S + o << 0;
}, dn.prototype.h = function() {
    this.N();
    var n = this.m, e = this._, t = this.P, s = this.K, a = this.k, o = this.v, u = this.p, f = this.S;
    return ln[n >> 28 & 15] + ln[n >> 24 & 15] + ln[n >> 20 & 15] + ln[n >> 16 & 15] + ln[n >> 12 & 15] + ln[n >> 8 & 15] + ln[n >> 4 & 15] + ln[15 & n] + ln[e >> 28 & 15] + ln[e >> 24 & 15] + ln[e >> 20 & 15] + ln[e >> 16 & 15] + ln[e >> 12 & 15] + ln[e >> 8 & 15] + ln[e >> 4 & 15] + ln[15 & e] + ln[t >> 28 & 15] + ln[t >> 24 & 15] + ln[t >> 20 & 15] + ln[t >> 16 & 15] + ln[t >> 12 & 15] + ln[t >> 8 & 15] + ln[t >> 4 & 15] + ln[15 & t] + ln[s >> 28 & 15] + ln[s >> 24 & 15] + ln[s >> 20 & 15] + ln[s >> 16 & 15] + ln[s >> 12 & 15] + ln[s >> 8 & 15] + ln[s >> 4 & 15] + ln[15 & s] + ln[a >> 28 & 15] + ln[a >> 24 & 15] + ln[a >> 20 & 15] + ln[a >> 16 & 15] + ln[a >> 12 & 15] + ln[a >> 8 & 15] + ln[a >> 4 & 15] + ln[15 & a] + ln[o >> 28 & 15] + ln[o >> 24 & 15] + ln[o >> 20 & 15] + ln[o >> 16 & 15] + ln[o >> 12 & 15] + ln[o >> 8 & 15] + ln[o >> 4 & 15] + ln[15 & o] + ln[u >> 28 & 15] + ln[u >> 24 & 15] + ln[u >> 20 & 15] + ln[u >> 16 & 15] + ln[u >> 12 & 15] + ln[u >> 8 & 15] + ln[u >> 4 & 15] + ln[15 & u] + ln[f >> 28 & 15] + ln[f >> 24 & 15] + ln[f >> 20 & 15] + ln[f >> 16 & 15] + ln[f >> 12 & 15] + ln[f >> 8 & 15] + ln[f >> 4 & 15] + ln[15 & f];
}, an();

