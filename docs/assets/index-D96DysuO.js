(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="170",Id=0,El=1,Ld=2,ah=1,ch=2,ui=3,pi=0,rn=1,Fe=2,Ti=0,Ms=1,Es=2,wl=3,Tl=4,lh=5,hi=100,Dd=101,uh=102,Ud=103,Nd=104,Fd=200,Ba=201,Od=202,Bd=203,za=204,ka=205,zd=206,kd=207,Vd=208,Gd=209,Hd=210,Wd=211,Xd=212,qd=213,Yd=214,Va=0,Ga=1,Ha=2,ws=3,Wa=4,Xa=5,qa=6,Ya=7,hh=0,$d=1,Zd=2,Ai=0,Jd=1,Kd=2,jd=3,Qd=4,tf=5,ef=6,nf=7,Al="attached",sf="detached",dh=300,Ts=301,As=302,$a=303,Za=304,Po=306,dr=1e3,qi=1001,Ja=1002,yn=1003,rf=1004,Ur=1005,dn=1006,Xo=1007,Yi=1008,Gn=1009,fh=1010,ph=1011,fr=1012,zc=1013,$i=1014,$n=1015,Ds=1016,kc=1017,Vc=1018,Rs=1020,mh=35902,gh=1021,_h=1022,Cn=1023,vh=1024,xh=1025,Ss=1026,Cs=1027,Gc=1028,Hc=1029,yh=1030,Wc=1031,Xc=1033,po=33776,mo=33777,go=33778,_o=33779,Ka=35840,ja=35841,Qa=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37808,rc=37809,oc=37810,ac=37811,cc=37812,lc=37813,uc=37814,hc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,_c=37821,vo=36492,vc=36494,xc=36495,Mh=36283,yc=36284,Mc=36285,Sc=36286,Sh=2200,of=2201,af=2202,Mo=2300,bc=2301,qo=2302,_s=2400,vs=2401,So=2402,qc=2500,Yc=2501,cf=3200,lf=3201,bh=0,uf=1,wi="",Re="srgb",Us="srgb-linear",Io="linear",be="srgb",ji=7680,Rl=519,hf=512,df=513,ff=514,Eh=515,pf=516,mf=517,gf=518,_f=519,Ec=35044,Cl="300 es",di=2e3,bo=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pl=1234567;const ar=Math.PI/180,pr=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function $c(i,t){return(i%t+t)%t}function vf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xf(i,t,e){return i!==t?(e-i)/(t-i):0}function cr(i,t,e){return(1-e)*i+e*t}function yf(i,t,e,n){return cr(i,t,1-Math.exp(-e*n))}function Mf(i,t=1){return t-Math.abs($c(i,t*2)-t)}function Sf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ef(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wf(i,t){return i+Math.random()*(t-i)}function Tf(i){return i*(.5-Math.random())}function Af(i){i!==void 0&&(Pl=i);let t=Pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rf(i){return i*ar}function Cf(i){return i*pr}function Pf(i){return(i&i-1)===0&&i!==0}function If(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Df(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Be={DEG2RAD:ar,RAD2DEG:pr,generateUUID:Pn,clamp:We,euclideanModulo:$c,mapLinear:vf,inverseLerp:xf,lerp:cr,damp:yf,pingpong:Mf,smoothstep:Sf,smootherstep:bf,randInt:Ef,randFloat:wf,randFloatSpread:Tf,seededRandom:Af,degToRad:Rf,radToDeg:Cf,isPowerOfTwo:Pf,ceilPowerOfTwo:If,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:Df,normalize:ye,denormalize:kn};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,r,o,a,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],y=s[4],x=s[7],I=s[2],R=s[5],E=s[8];return r[0]=o*_+a*M+c*I,r[3]=o*m+a*y+c*R,r[6]=o*p+a*x+c*E,r[1]=l*_+u*M+h*I,r[4]=l*m+u*y+h*R,r[7]=l*p+u*x+h*E,r[2]=d*_+f*M+g*I,r[5]=d*m+f*y+g*R,r[8]=d*p+f*x+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yo.makeScale(t,e)),this}rotate(t){return this.premultiply(Yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yo=new te;function wh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uf(){const i=mr("canvas");return i.style.display="block",i}const Il={};function rr(i){i in Il||(Il[i]=!0,console.warn(i))}function Nf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ff(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Of(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ge={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(i.r=bs(i.r),i.g=bs(i.g),i.b=bs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wi?Io:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ll=[.64,.33,.3,.6,.15,.06],Dl=[.2126,.7152,.0722],Ul=[.3127,.329],Nl=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ge.define({[Us]:{primaries:Ll,whitePoint:Ul,transfer:Io,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:Dl,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:Ll,whitePoint:Ul,transfer:be,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:Dl,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}});let Qi;class Bf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qi===void 0&&(Qi=mr("canvas")),Qi.width=t.width,Qi.height=t.height;const n=Qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zf=0;class Th{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function $o(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kf=0;class Ye extends Ji{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=qi,s=qi,r=dn,o=Yi,a=Cn,c=Gn,l=Ye.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Pn(),this.name="",this.source=new Th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=dh;Ye.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,I=(p+1)/2,R=(u+d)/4,E=(h+_)/4,C=(g+m)/4;return y>x&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=E/n):x>I?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=C/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=E/r,s=C/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vf extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Th(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Vf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ah extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gf extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),R=Math.atan2(I,p*M);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}const x=a*M;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new L,Ol=new Jn;class Ns{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Fr.subVectors(this.max,$s),ts.subVectors(t.a,$s),es.subVectors(t.b,$s),ns.subVectors(t.c,$s),gi.subVectors(es,ts),_i.subVectors(ns,es),Fi.subVectors(ts,ns);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Fi.z,Fi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Fi.z,0,-Fi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Fi.y,Fi.x,0];return!Jo(e,ts,es,ns,Fr)||(e=[1,0,0,0,1,0,0,0,1],!Jo(e,ts,es,ns,Fr))?!1:(Or.crossVectors(gi,_i),e=[Or.x,Or.y,Or.z],Jo(e,ts,es,ns,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const si=[new L,new L,new L,new L,new L,new L,new L,new L],Fn=new L,Nr=new Ns,ts=new L,es=new L,ns=new L,gi=new L,_i=new L,Fi=new L,$s=new L,Fr=new L,Or=new L,Oi=new L;function Jo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Oi.fromArray(i,r);const a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),u=n.dot(Oi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Hf=new Ns,Zs=new L,Ko=new L;class Fs{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(Ko)),this.expandByPoint(Zs.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new L,jo=new L,Br=new L,vi=new L,Qo=new L,zr=new L,ta=new L;class Lo{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jo.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(jo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=vi.dot(this.direction),c=-vi.dot(Br),l=vi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(jo).addScaledVector(Br,d),f}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,s,r){Qo.subVectors(e,t),zr.subVectors(n,t),ta.crossVectors(Qo,zr);let o=this.direction.dot(ta),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,t);const c=a*this.direction.dot(zr.crossVectors(vi,zr));if(c<0)return null;const l=a*this.direction.dot(Qo.cross(vi));if(l<0||c+l>o)return null;const u=-a*vi.dot(ta);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,o,a,c,l,u,h,d,f,g,_,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),o=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wf,t,Xf)}lookAt(t,e,n){const s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),xi.crossVectors(n,gn),xi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),xi.crossVectors(n,gn)),xi.normalize(),kr.crossVectors(gn,xi),s[0]=xi.x,s[4]=kr.x,s[8]=gn.x,s[1]=xi.y,s[5]=kr.y,s[9]=gn.y,s[2]=xi.z,s[6]=kr.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],y=n[7],x=n[11],I=n[15],R=s[0],E=s[4],C=s[8],S=s[12],v=s[1],T=s[5],U=s[9],D=s[13],z=s[2],q=s[6],G=s[10],Y=s[14],F=s[3],j=s[7],tt=s[11],et=s[15];return r[0]=o*R+a*v+c*z+l*F,r[4]=o*E+a*T+c*q+l*j,r[8]=o*C+a*U+c*G+l*tt,r[12]=o*S+a*D+c*Y+l*et,r[1]=u*R+h*v+d*z+f*F,r[5]=u*E+h*T+d*q+f*j,r[9]=u*C+h*U+d*G+f*tt,r[13]=u*S+h*D+d*Y+f*et,r[2]=g*R+_*v+m*z+p*F,r[6]=g*E+_*T+m*q+p*j,r[10]=g*C+_*U+m*G+p*tt,r[14]=g*S+_*D+m*Y+p*et,r[3]=M*R+y*v+x*z+I*F,r[7]=M*E+y*T+x*q+I*j,r[11]=M*C+y*U+x*G+I*tt,r[15]=M*S+y*D+x*Y+I*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,y=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,x=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,I=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,R=e*M+n*y+s*x+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return t[0]=M*E,t[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*E,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*E,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*E,t[4]=y*E,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*E,t[8]=x*E,t[9]=(g*h*r-u*_*r-g*n*f+e*_*f+u*n*p-e*h*p)*E,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*E,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*f-e*a*f)*E,t[12]=I*E,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*m+e*h*m)*E,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*E,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,M=c*l,y=c*u,x=c*h,I=n.x,R=n.y,E=n.z;return s[0]=(1-(_+p))*I,s[1]=(f+x)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(g+y)*E,s[9]=(m-M)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const o=is.set(s[4],s[5],s[6]).length(),a=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],On.copy(this);const l=1/r,u=1/o,h=1/a;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,e.setFromRotationMatrix(On),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=di){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===di)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=di){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*l,f=(n+s)*u;let g,_;if(a===di)g=(o+r)*h,_=-2*h;else if(a===bo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const is=new L,On=new ce,Wf=new L(0,0,0),Xf=new L(1,1,1),xi=new L,kr=new L,gn=new L,Bl=new ce,zl=new Jn;class Qn{constructor(t=0,e=0,n=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zl.setFromEuler(this),this.setFromQuaternion(zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qf=0;const kl=new L,ss=new Jn,oi=new ce,Vr=new L,Js=new L,Yf=new L,$f=new Jn,Vl=new L(1,0,0),Gl=new L(0,1,0),Hl=new L(0,0,1),Wl={type:"added"},Zf={type:"removed"},rs={type:"childadded",child:null},ea={type:"childremoved",child:null};class De extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new L,e=new Qn,n=new Jn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new te}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Js,Vr,this.up):oi.lookAt(Vr,Js,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(oi),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wl),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf),ea.child=t,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wl),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,Yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,$f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new L(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new L,ai=new L,na=new L,ci=new L,os=new L,as=new L,Xl=new L,ia=new L,sa=new L,ra=new L,oa=new we,aa=new we,ca=new we;class Rn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),ai.subVectors(n,e),na.subVectors(t,e);const o=Bn.dot(Bn),a=Bn.dot(ai),c=Bn.dot(na),l=ai.dot(ai),u=ai.dot(na),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(o,ci.y),c.addScaledVector(a,ci.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return oa.setScalar(0),aa.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oa,r.x),o.addScaledVector(aa,r.y),o.addScaledVector(ca,r.z),o}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),ai.subVectors(t,e),Bn.cross(ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Bn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;os.subVectors(s,n),as.subVectors(r,n),ia.subVectors(t,n);const c=os.dot(ia),l=as.dot(ia);if(c<=0&&l<=0)return e.copy(n);sa.subVectors(t,s);const u=os.dot(sa),h=as.dot(sa);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(os,o);ra.subVectors(t,r);const f=os.dot(ra),g=as.dot(ra);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(as,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Xl.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Xl,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function la(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=$c(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=la(o,r,t+1/3),this.g=la(o,r,t),this.b=la(o,r,t-1/3)}return ge.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=Rh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return ge.fromWorkingColorSpace(Ke.copy(this),t),Math.round(We(Ke.r*255,0,255))*65536+Math.round(We(Ke.g*255,0,255))*256+Math.round(We(Ke.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Re){ge.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Gr);const n=cr(yi.h,Gr.h,e),s=cr(yi.s,Gr.s,e),r=cr(yi.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Jt;Jt.NAMES=Rh;let Jf=0;class Ii extends Ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Pn(),this.name="",this.blending=Ms,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=ka,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Le extends Ii{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new L,Hr=new st;class fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ec,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ec&&(t.usage=this.usage),t}}class Jc extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ch extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kf=0;const An=new ce,ua=new De,cs=new L,_n=new Ns,Ks=new Ns,He=new L;class Ue extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wh(t)?Ch:Jc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(_n.min,Ks.min),_n.expandByPoint(He),He.addVectors(_n.max,Ks.max),_n.expandByPoint(He)):(_n.expandByPoint(Ks.min),_n.expandByPoint(Ks.max))}_n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)He.fromBufferAttribute(a,l),c&&(cs.fromBufferAttribute(t,l),He.add(cs)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new L,c[C]=new L;const l=new L,u=new L,h=new L,d=new st,f=new st,g=new st,_=new L,m=new L;function p(C,S,v){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(T),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(T),a[C].add(_),a[S].add(_),a[v].add(_),c[C].add(m),c[S].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,S=M.length;C<S;++C){const v=M[C],T=v.start,U=v.count;for(let D=T,z=T+U;D<z;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new L,x=new L,I=new L,R=new L;function E(C){I.fromBufferAttribute(s,C),R.copy(I);const S=a[C];y.copy(S),y.sub(I.multiplyScalar(I.dot(S))).normalize(),x.crossVectors(R,S);const T=x.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,T)}for(let C=0,S=M.length;C<S;++C){const v=M[C],T=v.start,U=v.count;for(let D=T,z=T+U;D<z;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new fn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new ce,Bi=new Lo,Wr=new Fs,Yl=new L,Xr=new L,qr=new L,Yr=new L,ha=new L,$r=new L,$l=new L,Zr=new L;class mt extends De{constructor(t=new Ue,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(ha.fromBufferAttribute(h,t),o?$r.addScaledVector(ha,u):$r.addScaledVector(ha.sub(e),u))}e.add($r)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Wr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Wr,Yl)===null||Bi.origin.distanceToSquared(Yl)>(t.far-t.near)**2))&&(ql.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(ql),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,I=y;x<I;x+=3){const R=a.getX(x),E=a.getX(x+1),C=a.getX(x+2);s=Jr(this,p,t,n,l,u,h,R,E,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=Jr(this,o,t,n,l,u,h,M,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,I=y;x<I;x+=3){const R=x,E=x+1,C=x+2;s=Jr(this,p,t,n,l,u,h,R,E,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,y=m+1,x=m+2;s=Jr(this,o,t,n,l,u,h,M,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function jf(i,t,e,n,s,r,o,a){let c;if(t.side===rn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===pi,a),c===null)return null;Zr.copy(a),Zr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Zr);return l<e.near||l>e.far?null:{distance:l,point:Zr.clone(),object:i}}function Jr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Xr),i.getVertexPosition(c,qr),i.getVertexPosition(l,Yr);const u=jf(i,t,e,n,Xr,qr,Yr,$l);if(u){const h=new L;Rn.getBarycoord($l,Xr,qr,Yr,h),s&&(u.uv=Rn.getInterpolatedAttribute(s,a,c,l,h,new st)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,a,c,l,h,new st)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};Rn.getNormal(Xr,qr,Yr,d.normal),u.face=d,u.barycoord=h}return u}class tn extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(h,2));function g(_,m,p,M,y,x,I,R,E,C,S){const v=x/E,T=I/C,U=x/2,D=I/2,z=R/2,q=E+1,G=C+1;let Y=0,F=0;const j=new L;for(let tt=0;tt<G;tt++){const et=tt*T-D;for(let It=0;It<q;It++){const Vt=It*v-U;j[_]=Vt*M,j[m]=et*y,j[p]=z,l.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=R>0?1:-1,u.push(j.x,j.y,j.z),h.push(It/E),h.push(1-tt/C),Y+=1}}for(let tt=0;tt<C;tt++)for(let et=0;et<E;et++){const It=d+et+q*tt,Vt=d+et+q*(tt+1),$=d+(et+1)+q*(tt+1),rt=d+(et+1)+q*tt;c.push(It,Vt,rt),c.push(Vt,$,rt),F+=6}a.addGroup(f,F,S),f+=F,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=Ps(i[e]);for(const s in n)t[s]=n[s]}return t}function Qf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ph(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const tp={clone:Ps,merge:nn};var ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Ii{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ep,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=Qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ih extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new L,Zl=new st,Jl=new st;class un extends Ih{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Zl,Jl),e.subVectors(Jl,Zl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ar*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,us=1;class ip extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(ls,us,t,e);s.layers=this.layers,this.add(s);const r=new un(ls,us,t,e);r.layers=this.layers,this.add(r);const o=new un(ls,us,t,e);o.layers=this.layers,this.add(o);const a=new un(ls,us,t,e);a.layers=this.layers,this.add(a);const c=new un(ls,us,t,e);c.layers=this.layers,this.add(c);const l=new un(ls,us,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lh extends Ye{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sp extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new tn(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Ti});r.uniforms.tEquirect.value=e;const o=new mt(s,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=dn),new ip(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const da=new L,rp=new L,op=new te;class Ei{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=da.subVectors(n,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||op.getNormalMatrix(t),s=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Fs,Kr=new L;class Kc{constructor(t=new Ei,e=new Ei,n=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=di){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+u,m+g,x+M).normalize(),n[3].setComponents(c-o,d-u,m-g,x-M).normalize(),n[4].setComponents(c-a,d-h,m-_,x-y).normalize(),e===di)n[5].setComponents(c+a,d+h,m+_,x+y).normalize();else if(e===bo)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Kr.x=s.normal.x>0?t.max.x:t.min.x,Kr.y=s.normal.y>0?t.max.y:t.min.y,Kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ap(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ze extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let y=0;y<l;y++){const x=y*h-r;g.push(x,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const y=M+l*p,x=M+l*(p+1),I=M+1+l*(p+1),R=M+1+l*p;f.push(y,x,R),f.push(x,I,R)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.width,t.height,t.widthSegments,t.heightSegments)}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ip=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,I0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Om=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:cp,alphahash_pars_fragment:lp,alphamap_fragment:up,alphamap_pars_fragment:hp,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:_p,begin_vertex:vp,beginnormal_vertex:xp,bsdfs:yp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Ip,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:Bp,colorspace_pars_fragment:zp,envmap_fragment:kp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Gp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:t0,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:Yp,fog_pars_fragment:$p,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Jp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:jp,lights_pars_begin:Qp,lights_toon_fragment:e0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:s0,lights_physical_fragment:r0,lights_physical_pars_fragment:o0,lights_fragment_begin:a0,lights_fragment_maps:c0,lights_fragment_end:l0,logdepthbuf_fragment:u0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:f0,map_fragment:p0,map_pars_fragment:m0,map_particle_fragment:g0,map_particle_pars_fragment:_0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:x0,morphinstance_vertex:y0,morphcolor_vertex:M0,morphnormal_vertex:S0,morphtarget_pars_vertex:b0,morphtarget_vertex:E0,normal_fragment_begin:w0,normal_fragment_maps:T0,normal_pars_fragment:A0,normal_pars_vertex:R0,normal_vertex:C0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:I0,clearcoat_normal_fragment_maps:L0,clearcoat_pars_fragment:D0,iridescence_pars_fragment:U0,opaque_fragment:N0,packing:F0,premultiplied_alpha_fragment:O0,project_vertex:B0,dithering_fragment:z0,dithering_pars_fragment:k0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:W0,shadowmap_vertex:X0,shadowmask_pars_fragment:q0,skinbase_vertex:Y0,skinning_pars_vertex:$0,skinning_vertex:Z0,skinnormal_vertex:J0,specularmap_fragment:K0,specularmap_pars_fragment:j0,tonemapping_fragment:Q0,tonemapping_pars_fragment:tm,transmission_fragment:em,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:om,background_vert:am,background_frag:cm,backgroundCube_vert:lm,backgroundCube_frag:um,cube_vert:hm,cube_frag:dm,depth_vert:fm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:gm,equirect_vert:_m,equirect_frag:vm,linedashed_vert:xm,linedashed_frag:ym,meshbasic_vert:Mm,meshbasic_frag:Sm,meshlambert_vert:bm,meshlambert_frag:Em,meshmatcap_vert:wm,meshmatcap_frag:Tm,meshnormal_vert:Am,meshnormal_frag:Rm,meshphong_vert:Cm,meshphong_frag:Pm,meshphysical_vert:Im,meshphysical_frag:Lm,meshtoon_vert:Dm,meshtoon_frag:Um,points_vert:Nm,points_frag:Fm,shadow_vert:Om,shadow_frag:Bm,sprite_vert:zm,sprite_frag:km},bt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Yn={basic:{uniforms:nn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:nn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:nn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:nn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:nn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:nn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:nn([bt.points,bt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:nn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:nn([bt.common,bt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:nn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:nn([bt.sprite,bt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:nn([bt.common,bt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:nn([bt.lights,bt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Yn.physical={uniforms:nn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const jr={r:0,b:0,g:0},ki=new Qn,Vm=new ce;function Gm(i,t,e,n,s,r,o){const a=new Jt(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const x=g(M);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Po)?(u===void 0&&(u=new mt(new tn(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Ps(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ki.copy(y.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(ki)),u.material.toneMapped=ge.getTransfer(x.colorSpace)!==be,(h!==x||d!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new mt(new ze(2,2),new xn({name:"BackgroundMaterial",uniforms:Ps(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ge.getTransfer(x.colorSpace)!==be,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,y){M.getRGB(jr,Ph(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m}}function Hm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,T,U,D,z){let q=!1;const G=h(D,U,T);r!==G&&(r=G,l(r.object)),q=f(v,D,U,z),q&&g(v,D,U,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(v,T,U,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,T,U){const D=U.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let q=z[T.id];q===void 0&&(q={},z[T.id]=q);let G=q[D];return G===void 0&&(G=d(c()),q[D]=G),G}function d(v){const T=[],U=[],D=[];for(let z=0;z<e;z++)T[z]=0,U[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:D,object:v,attributes:{},index:null}}function f(v,T,U,D){const z=r.attributes,q=T.attributes;let G=0;const Y=U.getAttributes();for(const F in Y)if(Y[F].location>=0){const tt=z[F];let et=q[F];if(et===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),tt===void 0||tt.attribute!==et||et&&tt.data!==et.data)return!0;G++}return r.attributesNum!==G||r.index!==D}function g(v,T,U,D){const z={},q=T.attributes;let G=0;const Y=U.getAttributes();for(const F in Y)if(Y[F].location>=0){let tt=q[F];tt===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(tt=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(tt=v.instanceColor));const et={};et.attribute=tt,tt&&tt.data&&(et.data=tt.data),z[F]=et,G++}r.attributes=z,r.attributesNum=G,r.index=D}function _(){const v=r.newAttributes;for(let T=0,U=v.length;T<U;T++)v[T]=0}function m(v){p(v,0)}function p(v,T){const U=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;U[v]=1,D[v]===0&&(i.enableVertexAttribArray(v),D[v]=1),z[v]!==T&&(i.vertexAttribDivisor(v,T),z[v]=T)}function M(){const v=r.newAttributes,T=r.enabledAttributes;for(let U=0,D=T.length;U<D;U++)T[U]!==v[U]&&(i.disableVertexAttribArray(U),T[U]=0)}function y(v,T,U,D,z,q,G){G===!0?i.vertexAttribIPointer(v,T,U,z,q):i.vertexAttribPointer(v,T,U,D,z,q)}function x(v,T,U,D){_();const z=D.attributes,q=U.getAttributes(),G=T.defaultAttributeValues;for(const Y in q){const F=q[Y];if(F.location>=0){let j=z[Y];if(j===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){const tt=j.normalized,et=j.itemSize,It=t.get(j);if(It===void 0)continue;const Vt=It.buffer,$=It.type,rt=It.bytesPerElement,Mt=$===i.INT||$===i.UNSIGNED_INT||j.gpuType===zc;if(j.isInterleavedBufferAttribute){const pt=j.data,zt=pt.stride,Xt=j.offset;if(pt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<F.locationSize;Gt++)p(F.location+Gt,pt.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Gt=0;Gt<F.locationSize;Gt++)m(F.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let Gt=0;Gt<F.locationSize;Gt++)y(F.location+Gt,et/F.locationSize,$,tt,zt*rt,(Xt+et/F.locationSize*Gt)*rt,Mt)}else{if(j.isInstancedBufferAttribute){for(let pt=0;pt<F.locationSize;pt++)p(F.location+pt,j.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let pt=0;pt<F.locationSize;pt++)m(F.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let pt=0;pt<F.locationSize;pt++)y(F.location+pt,et/F.locationSize,$,tt,et*rt,et/F.locationSize*pt*rt,Mt)}}else if(G!==void 0){const tt=G[Y];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(F.location,tt);break;case 3:i.vertexAttrib3fv(F.location,tt);break;case 4:i.vertexAttrib4fv(F.location,tt);break;default:i.vertexAttrib1fv(F.location,tt)}}}}M()}function I(){C();for(const v in n){const T=n[v];for(const U in T){const D=T[U];for(const z in D)u(D[z].object),delete D[z];delete T[U]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const U in T){const D=T[U];for(const z in D)u(D[z].object),delete D[z];delete T[U]}delete n[v.id]}function E(v){for(const T in n){const U=n[T];if(U[v.id]===void 0)continue;const D=U[v.id];for(const z in D)u(D[z].object),delete D[z];delete U[v.id]}}function C(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Wm(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Xm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Cn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===Ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Gn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==$n&&!C)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:I,maxSamples:R}}function qm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ei,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:n,y=M*4;let x=p.clippingState||null;c.value=x,x=u(g,d,y,f);for(let I=0;I!==y;++I)x[I]=e[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ym(i){let t=new WeakMap;function e(o,a){return a===$a?o.mapping=Ts:a===Za&&(o.mapping=As),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===Za)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new sp(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Do extends Ih{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xs=4,Kl=[.125,.215,.35,.446,.526,.582],Wi=20,fa=new Do,jl=new Jt;let pa=null,ma=0,ga=0,_a=!1;const Hi=(1+Math.sqrt(5))/2,hs=1/Hi,Ql=[new L(-Hi,hs,0),new L(Hi,hs,0),new L(-hs,0,Hi),new L(hs,0,Hi),new L(0,Hi,-hs),new L(0,Hi,hs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class tu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Ds,format:Cn,colorSpace:Us,depthBuffer:!1},s=eu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$m(r)),this._blurMaterial=Zm(r,t,e)}return s}_compileMaterial(t){const e=new mt(this._lodPlanes[0],t);this._renderer.compile(e,fa)}_sceneToCubeUV(t,e,n,s){const a=new un(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(jl),u.toneMapping=Ai,u.autoClear=!1;const f=new Le({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new mt(new tn,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(jl),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Qr(s,M*y,p>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ts||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Qr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ql[(s-r-1)%Ql.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Wi;m>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const p=[];let M=0;for(let E=0;E<Wi;++E){const C=E/_,S=Math.exp(-C*C/2);p.push(S),E===0?M+=S:E<m&&(M+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[s],I=3*x*(s>y-xs?s-y+xs:0),R=4*(this._cubeSize-x);Qr(e,I,R,3*x,2*x),c.setRenderTarget(e),c.render(h,fa)}}function $m(i){const t=[],e=[],n=[];let s=i;const r=i-xs+1+Kl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-xs?c=Kl[o-i+xs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const E=R%3*2/3-1,C=R>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];M.set(S,_*g*R),y.set(d,m*g*R);const v=[R,R,R,R,R,R];x.set(v,p*g*R)}const I=new Ue;I.setAttribute("position",new fn(M,_)),I.setAttribute("uv",new fn(y,m)),I.setAttribute("faceIndex",new fn(x,p)),t.push(I),s>xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function eu(i,t,e){const n=new jn(i,t,e);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zm(i,t,e){const n=new Float32Array(Wi),s=new L(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function nu(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function iu(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===$a||c===Za,u=c===Ts||c===As;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new tu(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new tu(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jm(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let y=0,x=M.length;y<x;y+=3){const I=M[y+0],R=M[y+1],E=M[y+2];d.push(I,R,R,E,E,I)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,x=M.length/3-1;y<x;y+=3){const I=y+0,R=y+1,E=y+2;d.push(I,R,R,E,E,I)}}else return;const m=new(wh(d)?Ch:Jc)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Qm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function tg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function eg(i,t,e){const n=new WeakMap,s=new we;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let I=a.attributes.position.count*x,R=1;I>t.maxTextureSize&&(R=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const E=new Float32Array(I*R*4*h),C=new Ah(E,I,R,h);C.type=$n,C.needsUpdate=!0;const S=x*4;for(let T=0;T<h;T++){const U=p[T],D=M[T],z=y[T],q=I*R*4*T;for(let G=0;G<U.count;G++){const Y=G*S;g===!0&&(s.fromBufferAttribute(U,G),E[q+Y+0]=s.x,E[q+Y+1]=s.y,E[q+Y+2]=s.z,E[q+Y+3]=0),_===!0&&(s.fromBufferAttribute(D,G),E[q+Y+4]=s.x,E[q+Y+5]=s.y,E[q+Y+6]=s.z,E[q+Y+7]=0),m===!0&&(s.fromBufferAttribute(z,G),E[q+Y+8]=s.x,E[q+Y+9]=s.y,E[q+Y+10]=s.z,E[q+Y+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new st(I,R)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ng(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Uh extends Ye{constructor(t,e,n,s,r,o,a,c,l,u=Ss){if(u!==Ss&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ss&&(n=$i),n===void 0&&u===Cs&&(n=Rs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:yn,this.minFilter=c!==void 0?c:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Nh=new Ye,su=new Uh(1,1),Fh=new Ah,Oh=new Gf,Bh=new Lh,ru=[],ou=[],au=new Float32Array(16),cu=new Float32Array(9),lu=new Float32Array(4);function Os(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ru[s];if(r===void 0&&(r=new Float32Array(s),ru[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Uo(i,t){let e=ou[t];e===void 0&&(e=new Int32Array(t),ou[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ig(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function ag(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),Ve(e,n)}}function cg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;cu.set(n),i.uniformMatrix3fv(this.addr,!1,cu),Ve(e,n)}}function lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;au.set(n),i.uniformMatrix4fv(this.addr,!1,au),Ve(e,n)}}function ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function pg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function vg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(su.compareFunction=Eh,r=su):r=Nh,e.setTexture2D(t||r,s)}function xg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Oh,s)}function yg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bh,s)}function Mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fh,s)}function Sg(i){switch(i){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return og;case 35674:return ag;case 35675:return cg;case 35676:return lg;case 5124:case 35670:return ug;case 35667:case 35671:return hg;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Mg}}function bg(i,t){i.uniform1fv(this.addr,t)}function Eg(i,t){const e=Os(t,this.size,2);i.uniform2fv(this.addr,e)}function wg(i,t){const e=Os(t,this.size,3);i.uniform3fv(this.addr,e)}function Tg(i,t){const e=Os(t,this.size,4);i.uniform4fv(this.addr,e)}function Ag(i,t){const e=Os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rg(i,t){const e=Os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cg(i,t){const e=Os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pg(i,t){i.uniform1iv(this.addr,t)}function Ig(i,t){i.uniform2iv(this.addr,t)}function Lg(i,t){i.uniform3iv(this.addr,t)}function Dg(i,t){i.uniform4iv(this.addr,t)}function Ug(i,t){i.uniform1uiv(this.addr,t)}function Ng(i,t){i.uniform2uiv(this.addr,t)}function Fg(i,t){i.uniform3uiv(this.addr,t)}function Og(i,t){i.uniform4uiv(this.addr,t)}function Bg(i,t,e){const n=this.cache,s=t.length,r=Uo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Nh,r[o])}function zg(i,t,e){const n=this.cache,s=t.length,r=Uo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Oh,r[o])}function kg(i,t,e){const n=this.cache,s=t.length,r=Uo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bh,r[o])}function Vg(i,t,e){const n=this.cache,s=t.length,r=Uo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fh,r[o])}function Gg(i){switch(i){case 5126:return bg;case 35664:return Eg;case 35665:return wg;case 35666:return Tg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Ng;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Vg}}class Hg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sg(e.type)}}class Wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gg(e.type)}}class Xg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function uu(i,t){i.seq.push(t),i.map[t.id]=t}function qg(i,t,e){const n=i.name,s=n.length;for(va.lastIndex=0;;){const r=va.exec(n),o=va.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){uu(e,l===void 0?new Hg(a,i,t):new Wg(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Xg(a),uu(e,h)),e=h}}}class xo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);qg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function hu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Yg=37297;let $g=0;function Zg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const du=new te;function Jg(i){ge._getMatrix(du,ge.workingColorSpace,i);const t=`mat3( ${du.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Io:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Zg(i.getShaderSource(t),o)}else return s}function Kg(i,t){const e=Jg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jg(i,t){let e;switch(t){case Jd:e="Linear";break;case Kd:e="Reinhard";break;case jd:e="Cineon";break;case Qd:e="ACESFilmic";break;case ef:e="AgX";break;case nf:e="Neutral";break;case tf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const to=new L;function Qg(){ge.getLuminanceCoefficients(to);const i=to.x.toFixed(4),t=to.y.toFixed(4),e=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function e_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function or(i){return i!==""}function pu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(i_,r_)}const s_=new Map;function r_(i,t){let e=ee[t];if(e===void 0){const n=s_.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(i){return i.replace(o_,a_)}function a_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _u(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function c_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ch?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function l_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case Po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function h_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hh:t="ENVMAP_BLENDING_MULTIPLY";break;case $d:t="ENVMAP_BLENDING_MIX";break;case Zd:t="ENVMAP_BLENDING_ADD";break}return t}function d_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function f_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=c_(e),l=l_(e),u=u_(e),h=h_(e),d=d_(e),f=t_(e),g=e_(r),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?ee.tonemapping_pars_fragment:"",e.toneMapping!==Ai?jg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Kg("linearToOutputTexel",e.outputColorSpace),Qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=wc(o),o=pu(o,e),o=mu(o,e),a=wc(a),a=pu(a,e),a=mu(a,e),o=gu(o),a=gu(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,x=M+p+a,I=hu(s,s.VERTEX_SHADER,y),R=hu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,I),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(T){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(I).trim(),z=s.getShaderInfoLog(R).trim();let q=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,R);else{const Y=fu(s,I,"vertex"),F=fu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+Y+`
`+F)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||z==="")&&(G=!1);G&&(T.diagnostics={runnable:q,programLog:U,vertexShader:{log:D,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(I),s.deleteShader(R),C=new xo(s,_),S=n_(s,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Yg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$g++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=R,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g_(t),e.set(t,n)),n}}class g_{constructor(t){this.id=p_++,this.code=t,this.usedTimes=0}}function __(i,t,e,n,s,r,o){const a=new Zc,c=new m_,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,T,U,D){const z=U.fog,q=D.geometry,G=S.isMeshStandardMaterial?U.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),F=Y&&Y.mapping===Po?Y.image.height:null,j=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const tt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,et=tt!==void 0?tt.length:0;let It=0;q.morphAttributes.position!==void 0&&(It=1),q.morphAttributes.normal!==void 0&&(It=2),q.morphAttributes.color!==void 0&&(It=3);let Vt,$,rt,Mt;if(j){const _e=Yn[j];Vt=_e.vertexShader,$=_e.fragmentShader}else Vt=S.vertexShader,$=S.fragmentShader,c.update(S),rt=c.getVertexShaderID(S),Mt=c.getFragmentShaderID(S);const pt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Xt=D.isInstancedMesh===!0,Gt=D.isBatchedMesh===!0,oe=!!S.map,nt=!!S.matcap,dt=!!Y,P=!!S.aoMap,Ct=!!S.lightMap,ot=!!S.bumpMap,Rt=!!S.normalMap,_t=!!S.displacementMap,Ht=!!S.emissiveMap,Tt=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,V=S.clearcoat>0,K=S.dispersion>0,at=S.iridescence>0,Q=S.sheen>0,Lt=S.transmission>0,xt=b&&!!S.anisotropyMap,vt=V&&!!S.clearcoatMap,jt=V&&!!S.clearcoatNormalMap,ut=V&&!!S.clearcoatRoughnessMap,At=at&&!!S.iridescenceMap,qt=at&&!!S.iridescenceThicknessMap,Bt=Q&&!!S.sheenColorMap,yt=Q&&!!S.sheenRoughnessMap,kt=!!S.specularMap,Zt=!!S.specularColorMap,se=!!S.specularIntensityMap,O=Lt&&!!S.transmissionMap,St=Lt&&!!S.thicknessMap,Z=!!S.gradientMap,J=!!S.alphaMap,ft=S.alphaTest>0,ct=!!S.alphaHash,Dt=!!S.extensions;let ne=Ai;S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Qt={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:Vt,fragmentShader:$,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Gt,batchingColor:Gt&&D._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&D.instanceColor!==null,instancingMorph:Xt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Us,alphaToCoverage:!!S.alphaToCoverage,map:oe,matcap:nt,envMap:dt,envMapMode:dt&&Y.mapping,envMapCubeUVHeight:F,aoMap:P,lightMap:Ct,bumpMap:ot,normalMap:Rt,displacementMap:d&&_t,emissiveMap:Ht,normalMapObjectSpace:Rt&&S.normalMapType===uf,normalMapTangentSpace:Rt&&S.normalMapType===bh,metalnessMap:Tt,roughnessMap:A,anisotropy:b,anisotropyMap:xt,clearcoat:V,clearcoatMap:vt,clearcoatNormalMap:jt,clearcoatRoughnessMap:ut,dispersion:K,iridescence:at,iridescenceMap:At,iridescenceThicknessMap:qt,sheen:Q,sheenColorMap:Bt,sheenRoughnessMap:yt,specularMap:kt,specularColorMap:Zt,specularIntensityMap:se,transmission:Lt,transmissionMap:O,thicknessMap:St,gradientMap:Z,opaque:S.transparent===!1&&S.blending===Ms&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ct,combine:S.combine,mapUv:oe&&_(S.map.channel),aoMapUv:P&&_(S.aoMap.channel),lightMapUv:Ct&&_(S.lightMap.channel),bumpMapUv:ot&&_(S.bumpMap.channel),normalMapUv:Rt&&_(S.normalMap.channel),displacementMapUv:_t&&_(S.displacementMap.channel),emissiveMapUv:Ht&&_(S.emissiveMap.channel),metalnessMapUv:Tt&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:xt&&_(S.anisotropyMap.channel),clearcoatMapUv:vt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(S.sheenRoughnessMap.channel),specularMapUv:kt&&_(S.specularMap.channel),specularColorMapUv:Zt&&_(S.specularColorMap.channel),specularIntensityMapUv:se&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:St&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Rt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!q.attributes.uv&&(oe||J),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:zt,skinning:D.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:It,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:oe&&S.map.isVideoTexture===!0&&ge.getTransfer(S.map.colorSpace)===be,decodeVideoTextureEmissive:Ht&&S.emissiveMap.isVideoTexture===!0&&ge.getTransfer(S.emissiveMap.colorSpace)===be,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fe,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function p(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)v.push(T),v.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(M(v,S),y(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const v=g[S.type];let T;if(v){const U=Yn[v];T=tp.clone(U.uniforms)}else T=S.uniforms;return T}function I(S,v){let T;for(let U=0,D=u.length;U<D;U++){const z=u[U];if(z.cacheKey===v){T=z,++T.usedTimes;break}}return T===void 0&&(T=new f_(i,v,S,r),u.push(T)),T}function R(S){if(--S.usedTimes===0){const v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function E(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:R,releaseShaderCache:E,programs:u,dispose:C}}function v_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function x_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||x_),n.length>1&&n.sort(d||vu),s.length>1&&s.sort(d||vu)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function y_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new xu,i.set(n,[o])):s>=r.length?(o=new xu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function M_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Jt};break;case"SpotLight":e={position:new L,direction:new L,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function S_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let b_=0;function E_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w_(i){const t=new M_,e=S_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new ce,o=new ce;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,y=0,x=0,I=0,R=0,E=0;l.sort(E_);for(let S=0,v=l.length;S<v;S++){const T=l[S],U=T.color,D=T.intensity,z=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=U.r*D,h+=U.g*D,d+=U.b*D;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],D);E++}else if(T.isDirectionalLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,F=e.get(T);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=T.shadow.matrix,M++}n.directional[f]=G,f++}else if(T.isSpotLight){const G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(U).multiplyScalar(D),G.distance=z,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[_]=G;const Y=T.shadow;if(T.map&&(n.spotLightMap[I]=T.map,I++,Y.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[_]=Y.matrix,T.castShadow){const F=e.get(T);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=q,x++}_++}else if(T.isRectAreaLight){const G=t.get(T);G.color.copy(U).multiplyScalar(D),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=G,m++}else if(T.isPointLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const Y=T.shadow,F=e.get(T);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,F.shadowCameraNear=Y.camera.near,F.shadowCameraFar=Y.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=T.shadow.matrix,y++}n.point[g]=G,g++}else if(T.isHemisphereLight){const G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(D),G.groundColor.copy(T.groundColor).multiplyScalar(D),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==I||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=I,C.numLightProbes=E,n.version=b_++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function yu(i){const t=new w_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function T_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new yu(i),t.set(s,[a])):r>=o.length?(a=new yu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class A_ extends Ii{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R_ extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function I_(i,t,e){let n=new Kc;const s=new st,r=new st,o=new we,a=new A_({depthPacking:lf}),c=new R_,l={},u=e.maxTextureSize,h={[pi]:rn,[rn]:pi,[Fe]:Fe},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:C_,fragmentShader:P_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new mt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let p=this.type;this.render=function(R,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ti),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=p!==ui&&this.type===ui,z=p===ui&&this.type!==ui;for(let q=0,G=R.length;q<G;q++){const Y=R[q],F=Y.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const j=F.getFrameExtents();if(s.multiply(j),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,F.mapSize.y=r.y)),F.map===null||D===!0||z===!0){const et=this.type!==ui?{minFilter:yn,magFilter:yn}:{};F.map!==null&&F.map.dispose(),F.map=new jn(s.x,s.y,et),F.map.texture.name=Y.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const tt=F.getViewportCount();for(let et=0;et<tt;et++){const It=F.getViewport(et);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),U.viewport(o),F.updateMatrices(Y,et),n=F.getFrustum(),x(E,C,F.camera,Y,this.type)}F.isPointLightShadow!==!0&&this.type===ui&&M(F,C),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,T)};function M(R,E){const C=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new jn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(E,null,C,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(E,null,C,f,_,null)}function y(R,E,C,S){let v=null;const T=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)v=T;else if(v=C.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=v.uuid,D=E.uuid;let z=l[U];z===void 0&&(z={},l[U]=z);let q=z[D];q===void 0&&(q=v.clone(),z[D]=q,E.addEventListener("dispose",I)),v=q}if(v.visible=E.visible,v.wireframe=E.wireframe,S===ui?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=i.properties.get(v);U.light=C}return v}function x(R,E,C,S,v){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===ui)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const D=t.update(R),z=R.material;if(Array.isArray(z)){const q=D.groups;for(let G=0,Y=q.length;G<Y;G++){const F=q[G],j=z[F.materialIndex];if(j&&j.visible){const tt=y(R,j,S,v);R.onBeforeShadow(i,R,E,C,D,tt,F),i.renderBufferDirect(C,null,D,tt,R,F),R.onAfterShadow(i,R,E,C,D,tt,F)}}}else if(z.visible){const q=y(R,z,S,v);R.onBeforeShadow(i,R,E,C,D,q,null),i.renderBufferDirect(C,null,D,q,R,null),R.onAfterShadow(i,R,E,C,D,q,null)}}const U=R.children;for(let D=0,z=U.length;D<z;D++)x(U[D],E,C,S,v)}function I(R){R.target.removeEventListener("dispose",I);for(const C in l){const S=l[C],v=R.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const L_={[Va]:Ga,[Ha]:qa,[Wa]:Ya,[ws]:Xa,[Ga]:Va,[qa]:Ha,[Ya]:Wa,[Xa]:ws};function D_(i,t){function e(){let O=!1;const St=new we;let Z=null;const J=new we(0,0,0,0);return{setMask:function(ft){Z!==ft&&!O&&(i.colorMask(ft,ft,ft,ft),Z=ft)},setLocked:function(ft){O=ft},setClear:function(ft,ct,Dt,ne,Qt){Qt===!0&&(ft*=ne,ct*=ne,Dt*=ne),St.set(ft,ct,Dt,ne),J.equals(St)===!1&&(i.clearColor(ft,ct,Dt,ne),J.copy(St))},reset:function(){O=!1,Z=null,J.set(-1,0,0,0)}}}function n(){let O=!1,St=!1,Z=null,J=null,ft=null;return{setReversed:function(ct){if(St!==ct){const Dt=t.get("EXT_clip_control");St?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const ne=ft;ft=null,this.setClear(ne)}St=ct},getReversed:function(){return St},setTest:function(ct){ct?pt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(ct){Z!==ct&&!O&&(i.depthMask(ct),Z=ct)},setFunc:function(ct){if(St&&(ct=L_[ct]),J!==ct){switch(ct){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ct}},setLocked:function(ct){O=ct},setClear:function(ct){ft!==ct&&(St&&(ct=1-ct),i.clearDepth(ct),ft=ct)},reset:function(){O=!1,Z=null,J=null,ft=null,St=!1}}}function s(){let O=!1,St=null,Z=null,J=null,ft=null,ct=null,Dt=null,ne=null,Qt=null;return{setTest:function(_e){O||(_e?pt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(_e){St!==_e&&!O&&(i.stencilMask(_e),St=_e)},setFunc:function(_e,on,Sn){(Z!==_e||J!==on||ft!==Sn)&&(i.stencilFunc(_e,on,Sn),Z=_e,J=on,ft=Sn)},setOp:function(_e,on,Sn){(ct!==_e||Dt!==on||ne!==Sn)&&(i.stencilOp(_e,on,Sn),ct=_e,Dt=on,ne=Sn)},setLocked:function(_e){O=_e},setClear:function(_e){Qt!==_e&&(i.clearStencil(_e),Qt=_e)},reset:function(){O=!1,St=null,Z=null,J=null,ft=null,ct=null,Dt=null,ne=null,Qt=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,y=null,x=null,I=null,R=null,E=new Jt(0,0,0),C=0,S=!1,v=null,T=null,U=null,D=null,z=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=Y>=1):F.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=Y>=2);let j=null,tt={};const et=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Vt=new we().fromArray(et),$=new we().fromArray(It);function rt(O,St,Z,J){const ft=new Uint8Array(4),ct=i.createTexture();i.bindTexture(O,ct),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<Z;Dt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(St+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ct}const Mt={};Mt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),o.setFunc(ws),ot(!1),Rt(El),pt(i.CULL_FACE),P(Ti);function pt(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function zt(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Xt(O,St){return h[O]!==St?(i.bindFramebuffer(O,St),h[O]=St,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=St),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Gt(O,St){let Z=f,J=!1;if(O){Z=d.get(St),Z===void 0&&(Z=[],d.set(St,Z));const ft=O.textures;if(Z.length!==ft.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Dt=ft.length;ct<Dt;ct++)Z[ct]=i.COLOR_ATTACHMENT0+ct;Z.length=ft.length,J=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,J=!0);J&&i.drawBuffers(Z)}function oe(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const nt={[hi]:i.FUNC_ADD,[Dd]:i.FUNC_SUBTRACT,[uh]:i.FUNC_REVERSE_SUBTRACT};nt[Ud]=i.MIN,nt[Nd]=i.MAX;const dt={[Fd]:i.ZERO,[Ba]:i.ONE,[Od]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[Hd]:i.SRC_ALPHA_SATURATE,[Vd]:i.DST_COLOR,[zd]:i.DST_ALPHA,[Bd]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[kd]:i.ONE_MINUS_DST_ALPHA,[Wd]:i.CONSTANT_COLOR,[Xd]:i.ONE_MINUS_CONSTANT_COLOR,[qd]:i.CONSTANT_ALPHA,[Yd]:i.ONE_MINUS_CONSTANT_ALPHA};function P(O,St,Z,J,ft,ct,Dt,ne,Qt,_e){if(O===Ti){_===!0&&(zt(i.BLEND),_=!1);return}if(_===!1&&(pt(i.BLEND),_=!0),O!==lh){if(O!==m||_e!==S){if((p!==hi||x!==hi)&&(i.blendEquation(i.FUNC_ADD),p=hi,x=hi),_e)switch(O){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Es:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Es:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,y=null,I=null,R=null,E.set(0,0,0),C=0,m=O,S=_e}return}ft=ft||St,ct=ct||Z,Dt=Dt||J,(St!==p||ft!==x)&&(i.blendEquationSeparate(nt[St],nt[ft]),p=St,x=ft),(Z!==M||J!==y||ct!==I||Dt!==R)&&(i.blendFuncSeparate(dt[Z],dt[J],dt[ct],dt[Dt]),M=Z,y=J,I=ct,R=Dt),(ne.equals(E)===!1||Qt!==C)&&(i.blendColor(ne.r,ne.g,ne.b,Qt),E.copy(ne),C=Qt),m=O,S=!1}function Ct(O,St){O.side===Fe?zt(i.CULL_FACE):pt(i.CULL_FACE);let Z=O.side===rn;St&&(Z=!Z),ot(Z),O.blending===Ms&&O.transparent===!1?P(Ti):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const J=O.stencilWrite;a.setTest(J),J&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(O){v!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),v=O)}function Rt(O){O!==Id?(pt(i.CULL_FACE),O!==T&&(O===El?i.cullFace(i.BACK):O===Ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),T=O}function _t(O){O!==U&&(G&&i.lineWidth(O),U=O)}function Ht(O,St,Z){O?(pt(i.POLYGON_OFFSET_FILL),(D!==St||z!==Z)&&(i.polygonOffset(St,Z),D=St,z=Z)):zt(i.POLYGON_OFFSET_FILL)}function Tt(O){O?pt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+q-1),j!==O&&(i.activeTexture(O),j=O)}function b(O,St,Z){Z===void 0&&(j===null?Z=i.TEXTURE0+q-1:Z=j);let J=tt[Z];J===void 0&&(J={type:void 0,texture:void 0},tt[Z]=J),(J.type!==O||J.texture!==St)&&(j!==Z&&(i.activeTexture(Z),j=Z),i.bindTexture(O,St||Mt[O]),J.type=O,J.texture=St)}function V(){const O=tt[j];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Bt(O){Vt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Vt.copy(O))}function yt(O){$.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function kt(O,St){let Z=l.get(St);Z===void 0&&(Z=new WeakMap,l.set(St,Z));let J=Z.get(O);J===void 0&&(J=i.getUniformBlockIndex(St,O.name),Z.set(O,J))}function Zt(O,St){const J=l.get(St).get(O);c.get(St)!==J&&(i.uniformBlockBinding(St,J,O.__bindingPointIndex),c.set(St,J))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,tt={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,y=null,x=null,I=null,R=null,E=new Jt(0,0,0),C=0,S=!1,v=null,T=null,U=null,D=null,z=null,Vt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:zt,bindFramebuffer:Xt,drawBuffers:Gt,useProgram:oe,setBlending:P,setMaterial:Ct,setFlipSided:ot,setCullFace:Rt,setLineWidth:_t,setPolygonOffset:Ht,setScissorTest:Tt,activeTexture:A,bindTexture:b,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:at,texImage2D:At,texImage3D:qt,updateUBOMapping:kt,uniformBlockBinding:Zt,texStorage2D:jt,texStorage3D:ut,texSubImage2D:Q,texSubImage3D:Lt,compressedTexSubImage2D:xt,compressedTexSubImage3D:vt,scissor:Bt,viewport:yt,reset:se}}function Mu(i,t,e,n){const s=U_(n);switch(e){case gh:return i*t;case vh:return i*t;case xh:return i*t*2;case Gc:return i*t/s.components*s.byteLength;case Hc:return i*t/s.components*s.byteLength;case yh:return i*t*2/s.components*s.byteLength;case Wc:return i*t*2/s.components*s.byteLength;case _h:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case Xc:return i*t*4/s.components*s.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case go:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:case tc:return Math.max(i,16)*Math.max(t,8)/4;case Ka:case Qa:return Math.max(i,8)*Math.max(t,8)/2;case ec:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vo:case vc:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Mh:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Mc:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function U_(i){switch(i){case Gn:case fh:return{byteLength:1,components:1};case fr:case ph:case Ds:return{byteLength:2,components:1};case kc:case Vc:return{byteLength:2,components:4};case $i:case zc:case $n:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function N_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):mr("canvas")}function _(A,b,V){let K=1;const at=Tt(A);if((at.width>V||at.height>V)&&(K=V/Math.max(at.width,at.height)),K<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){const Q=Math.floor(K*at.width),Lt=Math.floor(K*at.height);h===void 0&&(h=g(Q,Lt));const xt=b?g(Q,Lt):h;return xt.width=Q,xt.height=Lt,xt.getContext("2d").drawImage(A,0,0,Q,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Q+"x"+Lt+")."),xt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,b,V,K,at=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=b;if(b===i.RED&&(V===i.FLOAT&&(Q=i.R32F),V===i.HALF_FLOAT&&(Q=i.R16F),V===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.R8UI),V===i.UNSIGNED_SHORT&&(Q=i.R16UI),V===i.UNSIGNED_INT&&(Q=i.R32UI),V===i.BYTE&&(Q=i.R8I),V===i.SHORT&&(Q=i.R16I),V===i.INT&&(Q=i.R32I)),b===i.RG&&(V===i.FLOAT&&(Q=i.RG32F),V===i.HALF_FLOAT&&(Q=i.RG16F),V===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RG8UI),V===i.UNSIGNED_SHORT&&(Q=i.RG16UI),V===i.UNSIGNED_INT&&(Q=i.RG32UI),V===i.BYTE&&(Q=i.RG8I),V===i.SHORT&&(Q=i.RG16I),V===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),V===i.UNSIGNED_INT&&(Q=i.RGB32UI),V===i.BYTE&&(Q=i.RGB8I),V===i.SHORT&&(Q=i.RGB16I),V===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),V===i.UNSIGNED_INT&&(Q=i.RGBA32UI),V===i.BYTE&&(Q=i.RGBA8I),V===i.SHORT&&(Q=i.RGBA16I),V===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),b===i.RGBA){const Lt=at?Io:ge.getTransfer(K);V===i.FLOAT&&(Q=i.RGBA32F),V===i.HALF_FLOAT&&(Q=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Q=Lt===be?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(A,b){let V;return A?b===null||b===$i||b===Rs?V=i.DEPTH24_STENCIL8:b===$n?V=i.DEPTH32F_STENCIL8:b===fr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$i||b===Rs?V=i.DEPTH_COMPONENT24:b===$n?V=i.DEPTH_COMPONENT32F:b===fr&&(V=i.DEPTH_COMPONENT16),V}function I(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==yn&&A.minFilter!==dn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){const b=A.target;b.removeEventListener("dispose",R),C(b),b.isVideoTexture&&u.delete(b)}function E(A){const b=A.target;b.removeEventListener("dispose",E),v(b)}function C(A){const b=n.get(A);if(b.__webglInit===void 0)return;const V=A.source,K=d.get(V);if(K){const at=K[b.__cacheKey];at.usedTimes--,at.usedTimes===0&&S(A),Object.keys(K).length===0&&d.delete(V)}n.remove(A)}function S(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const V=A.source,K=d.get(V);delete K[b.__cacheKey],o.memory.textures--}function v(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let at=0;at<b.__webglFramebuffer[K].length;at++)i.deleteFramebuffer(b.__webglFramebuffer[K][at]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=A.textures;for(let K=0,at=V.length;K<at;K++){const Q=n.get(V[K]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(V[K])}n.remove(A)}let T=0;function U(){T=0}function D(){const A=T;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),T+=1,A}function z(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function q(A,b){const V=n.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(V,A,b);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function G(A,b){const V=n.get(A);if(A.version>0&&V.__version!==A.version){$(V,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function Y(A,b){const V=n.get(A);if(A.version>0&&V.__version!==A.version){$(V,A,b);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function F(A,b){const V=n.get(A);if(A.version>0&&V.__version!==A.version){rt(V,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}const j={[dr]:i.REPEAT,[qi]:i.CLAMP_TO_EDGE,[Ja]:i.MIRRORED_REPEAT},tt={[yn]:i.NEAREST,[rf]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Xo]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},et={[hf]:i.NEVER,[_f]:i.ALWAYS,[df]:i.LESS,[Eh]:i.LEQUAL,[ff]:i.EQUAL,[gf]:i.GEQUAL,[pf]:i.GREATER,[mf]:i.NOTEQUAL};function It(A,b){if(b.type===$n&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===dn||b.magFilter===Xo||b.magFilter===Ur||b.magFilter===Yi||b.minFilter===dn||b.minFilter===Xo||b.minFilter===Ur||b.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,j[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,j[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,j[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,tt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,tt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===yn||b.minFilter!==Ur&&b.minFilter!==Yi||b.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Vt(A,b){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",R));const K=b.source;let at=d.get(K);at===void 0&&(at={},d.set(K,at));const Q=z(b);if(Q!==A.__cacheKey){at[Q]===void 0&&(at[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),at[Q].usedTimes++;const Lt=at[A.__cacheKey];Lt!==void 0&&(at[A.__cacheKey].usedTimes--,Lt.usedTimes===0&&S(b)),A.__cacheKey=Q,A.__webglTexture=at[Q].texture}return V}function $(A,b,V){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const at=Vt(A,b),Q=b.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+V);const Lt=n.get(Q);if(Q.version!==Lt.__version||at===!0){e.activeTexture(i.TEXTURE0+V);const xt=ge.getPrimaries(ge.workingColorSpace),vt=b.colorSpace===wi?null:ge.getPrimaries(b.colorSpace),jt=b.colorSpace===wi||xt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let ut=_(b.image,!1,s.maxTextureSize);ut=Ht(b,ut);const At=r.convert(b.format,b.colorSpace),qt=r.convert(b.type);let Bt=y(b.internalFormat,At,qt,b.colorSpace,b.isVideoTexture);It(K,b);let yt;const kt=b.mipmaps,Zt=b.isVideoTexture!==!0,se=Lt.__version===void 0||at===!0,O=Q.dataReady,St=I(b,ut);if(b.isDepthTexture)Bt=x(b.format===Cs,b.type),se&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Bt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Bt,ut.width,ut.height,0,At,qt,null));else if(b.isDataTexture)if(kt.length>0){Zt&&se&&e.texStorage2D(i.TEXTURE_2D,St,Bt,kt[0].width,kt[0].height);for(let Z=0,J=kt.length;Z<J;Z++)yt=kt[Z],Zt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,yt.width,yt.height,At,qt,yt.data):e.texImage2D(i.TEXTURE_2D,Z,Bt,yt.width,yt.height,0,At,qt,yt.data);b.generateMipmaps=!1}else Zt?(se&&e.texStorage2D(i.TEXTURE_2D,St,Bt,ut.width,ut.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,At,qt,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,ut.width,ut.height,0,At,qt,ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Zt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Bt,kt[0].width,kt[0].height,ut.depth);for(let Z=0,J=kt.length;Z<J;Z++)if(yt=kt[Z],b.format!==Cn)if(At!==null)if(Zt){if(O)if(b.layerUpdates.size>0){const ft=Mu(yt.width,yt.height,b.format,b.type);for(const ct of b.layerUpdates){const Dt=yt.data.subarray(ct*ft/yt.data.BYTES_PER_ELEMENT,(ct+1)*ft/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ct,yt.width,yt.height,1,At,Dt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,yt.width,yt.height,ut.depth,At,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Bt,yt.width,yt.height,ut.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,yt.width,yt.height,ut.depth,At,qt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Bt,yt.width,yt.height,ut.depth,0,At,qt,yt.data)}else{Zt&&se&&e.texStorage2D(i.TEXTURE_2D,St,Bt,kt[0].width,kt[0].height);for(let Z=0,J=kt.length;Z<J;Z++)yt=kt[Z],b.format!==Cn?At!==null?Zt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,yt.width,yt.height,At,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Bt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,yt.width,yt.height,At,qt,yt.data):e.texImage2D(i.TEXTURE_2D,Z,Bt,yt.width,yt.height,0,At,qt,yt.data)}else if(b.isDataArrayTexture)if(Zt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Bt,ut.width,ut.height,ut.depth),O)if(b.layerUpdates.size>0){const Z=Mu(ut.width,ut.height,b.format,b.type);for(const J of b.layerUpdates){const ft=ut.data.subarray(J*Z/ut.data.BYTES_PER_ELEMENT,(J+1)*Z/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ut.width,ut.height,1,At,qt,ft)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,At,qt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,ut.width,ut.height,ut.depth,0,At,qt,ut.data);else if(b.isData3DTexture)Zt?(se&&e.texStorage3D(i.TEXTURE_3D,St,Bt,ut.width,ut.height,ut.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,At,qt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,ut.width,ut.height,ut.depth,0,At,qt,ut.data);else if(b.isFramebufferTexture){if(se)if(Zt)e.texStorage2D(i.TEXTURE_2D,St,Bt,ut.width,ut.height);else{let Z=ut.width,J=ut.height;for(let ft=0;ft<St;ft++)e.texImage2D(i.TEXTURE_2D,ft,Bt,Z,J,0,At,qt,null),Z>>=1,J>>=1}}else if(kt.length>0){if(Zt&&se){const Z=Tt(kt[0]);e.texStorage2D(i.TEXTURE_2D,St,Bt,Z.width,Z.height)}for(let Z=0,J=kt.length;Z<J;Z++)yt=kt[Z],Zt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,At,qt,yt):e.texImage2D(i.TEXTURE_2D,Z,Bt,At,qt,yt);b.generateMipmaps=!1}else if(Zt){if(se){const Z=Tt(ut);e.texStorage2D(i.TEXTURE_2D,St,Bt,Z.width,Z.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,qt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Bt,At,qt,ut);m(b)&&p(K),Lt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function rt(A,b,V){if(b.image.length!==6)return;const K=Vt(A,b),at=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const Q=n.get(at);if(at.version!==Q.__version||K===!0){e.activeTexture(i.TEXTURE0+V);const Lt=ge.getPrimaries(ge.workingColorSpace),xt=b.colorSpace===wi?null:ge.getPrimaries(b.colorSpace),vt=b.colorSpace===wi||Lt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const jt=b.isCompressedTexture||b.image[0].isCompressedTexture,ut=b.image[0]&&b.image[0].isDataTexture,At=[];for(let J=0;J<6;J++)!jt&&!ut?At[J]=_(b.image[J],!0,s.maxCubemapSize):At[J]=ut?b.image[J].image:b.image[J],At[J]=Ht(b,At[J]);const qt=At[0],Bt=r.convert(b.format,b.colorSpace),yt=r.convert(b.type),kt=y(b.internalFormat,Bt,yt,b.colorSpace),Zt=b.isVideoTexture!==!0,se=Q.__version===void 0||K===!0,O=at.dataReady;let St=I(b,qt);It(i.TEXTURE_CUBE_MAP,b);let Z;if(jt){Zt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,kt,qt.width,qt.height);for(let J=0;J<6;J++){Z=At[J].mipmaps;for(let ft=0;ft<Z.length;ft++){const ct=Z[ft];b.format!==Cn?Bt!==null?Zt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ct.width,ct.height,Bt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,kt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ct.width,ct.height,Bt,yt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,kt,ct.width,ct.height,0,Bt,yt,ct.data)}}}else{if(Z=b.mipmaps,Zt&&se){Z.length>0&&St++;const J=Tt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,kt,J.width,J.height)}for(let J=0;J<6;J++)if(ut){Zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,At[J].width,At[J].height,Bt,yt,At[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,At[J].width,At[J].height,0,Bt,yt,At[J].data);for(let ft=0;ft<Z.length;ft++){const Dt=Z[ft].image[J].image;Zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Dt.width,Dt.height,Bt,yt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,kt,Dt.width,Dt.height,0,Bt,yt,Dt.data)}}else{Zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Bt,yt,At[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,Bt,yt,At[J]);for(let ft=0;ft<Z.length;ft++){const ct=Z[ft];Zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Bt,yt,ct.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,kt,Bt,yt,ct.image[J])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),Q.__version=at.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Mt(A,b,V,K,at,Q){const Lt=r.convert(V.format,V.colorSpace),xt=r.convert(V.type),vt=y(V.internalFormat,Lt,xt,V.colorSpace),jt=n.get(b),ut=n.get(V);if(ut.__renderTarget=b,!jt.__hasExternalTextures){const At=Math.max(1,b.width>>Q),qt=Math.max(1,b.height>>Q);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,Q,vt,At,qt,b.depth,0,Lt,xt,null):e.texImage2D(at,Q,vt,At,qt,0,Lt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Rt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,at,ut.__webglTexture,0,ot(b)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,at,ut.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(A,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const K=b.depthTexture,at=K&&K.isDepthTexture?K.type:null,Q=x(b.stencilBuffer,at),Lt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=ot(b);Rt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,Q,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,A)}else{const K=b.textures;for(let at=0;at<K.length;at++){const Q=K[at],Lt=r.convert(Q.format,Q.colorSpace),xt=r.convert(Q.type),vt=y(Q.internalFormat,Lt,xt,Q.colorSpace),jt=ot(b);V&&Rt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,vt,b.width,b.height):Rt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,vt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,vt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const at=K.__webglTexture,Q=ot(b);if(b.depthTexture.format===Ss)Rt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(b.depthTexture.format===Cs)Rt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Xt(A){const b=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const at=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",at)};K.addEventListener("dispose",at),b.__depthDisposeCallback=at}b.__boundDepthTexture=K}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");zt(b.__webglFramebuffer,A)}else if(V){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),pt(b.__webglDepthbuffer[K],A,!1);else{const at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),pt(b.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,b,V){const K=n.get(A);b!==void 0&&Mt(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Xt(A)}function oe(A){const b=A.texture,V=n.get(A),K=n.get(b);A.addEventListener("dispose",E);const at=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Lt=at.length>1;if(Lt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),Q){V.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[xt]=[];for(let vt=0;vt<b.mipmaps.length;vt++)V.__webglFramebuffer[xt][vt]=i.createFramebuffer()}else V.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)V.__webglFramebuffer[xt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let xt=0,vt=at.length;xt<vt;xt++){const jt=n.get(at[xt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Rt(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let xt=0;xt<at.length;xt++){const vt=at[xt];V.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[xt]);const jt=r.convert(vt.format,vt.colorSpace),ut=r.convert(vt.type),At=y(vt.internalFormat,jt,ut,vt.colorSpace,A.isXRRenderTarget===!0),qt=ot(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,At,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,V.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),It(i.TEXTURE_CUBE_MAP,b);for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)Mt(V.__webglFramebuffer[xt][vt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,vt);else Mt(V.__webglFramebuffer[xt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let xt=0,vt=at.length;xt<vt;xt++){const jt=at[xt],ut=n.get(jt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),It(i.TEXTURE_2D,jt),Mt(V.__webglFramebuffer,A,jt,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),m(jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,K.__webglTexture),It(xt,b),b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)Mt(V.__webglFramebuffer[vt],A,b,i.COLOR_ATTACHMENT0,xt,vt);else Mt(V.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,xt,0);m(b)&&p(xt),e.unbindTexture()}A.depthBuffer&&Xt(A)}function nt(A){const b=A.textures;for(let V=0,K=b.length;V<K;V++){const at=b[V];if(m(at)){const Q=M(A),Lt=n.get(at).__webglTexture;e.bindTexture(Q,Lt),p(Q),e.unbindTexture()}}}const dt=[],P=[];function Ct(A){if(A.samples>0){if(Rt(A)===!1){const b=A.textures,V=A.width,K=A.height;let at=i.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(A),xt=b.length>1;if(xt)for(let vt=0;vt<b.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let vt=0;vt<b.length;vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[vt]);const jt=n.get(b[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,V,K,0,0,V,K,at,i.NEAREST),c===!0&&(dt.length=0,P.length=0,dt.push(i.COLOR_ATTACHMENT0+vt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(dt.push(Q),P.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let vt=0;vt<b.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[vt]);const jt=n.get(b[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ot(A){return Math.min(s.maxSamples,A.samples)}function Rt(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _t(A){const b=o.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Ht(A,b){const V=A.colorSpace,K=A.format,at=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Us&&V!==wi&&(ge.getTransfer(V)===be?(K!==Cn||at!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Tt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=F,this.rebindTextures=Gt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Rt}function F_(i,t){function e(n,s=wi){let r;const o=ge.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return i.BYTE;if(n===ph)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===zc)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Ds)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===_h)return i.RGB;if(n===Cn)return i.RGBA;if(n===vh)return i.LUMINANCE;if(n===xh)return i.LUMINANCE_ALPHA;if(n===Ss)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===Gc)return i.RED;if(n===Hc)return i.RED_INTEGER;if(n===yh)return i.RG;if(n===Wc)return i.RG_INTEGER;if(n===Xc)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===_o)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===ja||n===Qa||n===tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ec||n===nc)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ic)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===vc||n===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mh||n===yc||n===Mc||n===Sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class O_ extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $t extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B_={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xn({vertexShader:z_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G_ extends Ji{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new V_,m=e.getContextAttributes();let p=null,M=null;const y=[],x=[],I=new st;let R=null;const E=new un;E.viewport=new we;const C=new un;C.viewport=new we;const S=[E,C],v=new O_;let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=y[$];return rt===void 0&&(rt=new xa,y[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=y[$];return rt===void 0&&(rt=new xa,y[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=y[$];return rt===void 0&&(rt=new xa,y[$]=rt),rt.getHandSpace()};function D($){const rt=x.indexOf($.inputSource);if(rt===-1)return;const Mt=y[rt];Mt!==void 0&&(Mt.update($.inputSource,$.frame,l||o),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",q);for(let $=0;$<y.length;$++){const rt=x[$];rt!==null&&(x[$]=null,y[$].disconnect(rt))}T=null,U=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,M=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",z),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new jn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Mt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Cs:Ss,Mt=m.stencil?Rs:$i);const zt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new jn(d.textureWidth,d.textureHeight,{format:Cn,type:Gn,depthTexture:new Uh(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q($){for(let rt=0;rt<$.removed.length;rt++){const Mt=$.removed[rt],pt=x.indexOf(Mt);pt>=0&&(x[pt]=null,y[pt].disconnect(Mt))}for(let rt=0;rt<$.added.length;rt++){const Mt=$.added[rt];let pt=x.indexOf(Mt);if(pt===-1){for(let Xt=0;Xt<y.length;Xt++)if(Xt>=x.length){x.push(Mt),pt=Xt;break}else if(x[Xt]===null){x[Xt]=Mt,pt=Xt;break}if(pt===-1)break}const zt=y[pt];zt&&zt.connect(Mt)}}const G=new L,Y=new L;function F($,rt,Mt){G.setFromMatrixPosition(rt.matrixWorld),Y.setFromMatrixPosition(Mt.matrixWorld);const pt=G.distanceTo(Y),zt=rt.projectionMatrix.elements,Xt=Mt.projectionMatrix.elements,Gt=zt[14]/(zt[10]-1),oe=zt[14]/(zt[10]+1),nt=(zt[9]+1)/zt[5],dt=(zt[9]-1)/zt[5],P=(zt[8]-1)/zt[0],Ct=(Xt[8]+1)/Xt[0],ot=Gt*P,Rt=Gt*Ct,_t=pt/(-P+Ct),Ht=_t*-P;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ht),$.translateZ(_t),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),zt[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Tt=Gt+_t,A=oe+_t,b=ot-Ht,V=Rt+(pt-Ht),K=nt*oe/A*Tt,at=dt*oe/A*Tt;$.projectionMatrix.makePerspective(b,V,K,at,Tt,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function j($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let rt=$.near,Mt=$.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),v.near=C.near=E.near=rt,v.far=C.far=E.far=Mt,(T!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,U=v.far),E.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,v.layers.mask=E.layers.mask|C.layers.mask;const pt=$.parent,zt=v.cameras;j(v,pt);for(let Xt=0;Xt<zt.length;Xt++)j(zt[Xt],pt);zt.length===2?F(v,E,C):v.projectionMatrix.copy(E.projectionMatrix),tt($,v,pt)};function tt($,rt,Mt){Mt===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=pr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let et=null;function It($,rt){if(u=rt.getViewerPose(l||o),g=rt,u!==null){const Mt=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let pt=!1;Mt.length!==v.cameras.length&&(v.cameras.length=0,pt=!0);for(let Xt=0;Xt<Mt.length;Xt++){const Gt=Mt[Xt];let oe=null;if(f!==null)oe=f.getViewport(Gt);else{const dt=h.getViewSubImage(d,Gt);oe=dt.viewport,Xt===0&&(t.setRenderTargetTextures(M,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(M))}let nt=S[Xt];nt===void 0&&(nt=new un,nt.layers.enable(Xt),nt.viewport=new we,S[Xt]=nt),nt.matrix.fromArray(Gt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Gt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(oe.x,oe.y,oe.width,oe.height),Xt===0&&(v.matrix.copy(nt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pt===!0&&v.cameras.push(nt)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Xt=h.getDepthInformation(Mt[0]);Xt&&Xt.isValid&&Xt.texture&&_.init(t,Xt,s.renderState)}}for(let Mt=0;Mt<y.length;Mt++){const pt=x[Mt],zt=y[Mt];pt!==null&&zt!==void 0&&zt.update(pt,rt,l||o)}et&&et($,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const Vt=new Dh;Vt.setAnimationLoop(It),this.setAnimationLoop=function($){et=$},this.dispose=function(){}}}const Vi=new Qn,H_=new ce;function W_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ph(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),y=M.envMap,x=M.envMapRotation;y&&(m.envMap.value=y,Vi.copy(x),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(Vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function X_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const x=y.program;n.uniformBlockBinding(M,x)}function l(M,y){let x=s[M.id];x===void 0&&(g(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",m));const I=y.program;n.updateUBOMapping(M,I);const R=t.render.frame;r[M.id]!==R&&(d(M),r[M.id]=R)}function u(M){const y=h();M.__bindingPointIndex=y;const x=i.createBuffer(),I=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=s[M.id],x=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,E=x.length;R<E;R++){const C=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,v=C.length;S<v;S++){const T=C[S];if(f(T,R,S,I)===!0){const U=T.__offset,D=Array.isArray(T.value)?T.value:[T.value];let z=0;for(let q=0;q<D.length;q++){const G=D[q],Y=_(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,U+z,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,y,x,I){const R=M.value,E=y+"_"+x;if(I[E]===void 0)return typeof R=="number"||typeof R=="boolean"?I[E]=R:I[E]=R.clone(),!0;{const C=I[E];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return I[E]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(M){const y=M.uniforms;let x=0;const I=16;for(let E=0,C=y.length;E<C;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let v=0,T=S.length;v<T;v++){const U=S[v],D=Array.isArray(U.value)?U.value:[U.value];for(let z=0,q=D.length;z<q;z++){const G=D[z],Y=_(G),F=x%I,j=F%Y.boundary,tt=F+j;x+=j,tt!==0&&I-tt<Y.storage&&(x+=I-tt),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Y.storage}}}const R=x%I;return R>0&&(x+=I-R),M.__size=x,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class q_{constructor(t={}){const{canvas:e=Uf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=Ai,this.toneMappingExposure=1;const x=this;let I=!1,R=0,E=0,C=null,S=-1,v=null;const T=new we,U=new we;let D=null;const z=new Jt(0);let q=0,G=e.width,Y=e.height,F=1,j=null,tt=null;const et=new we(0,0,G,Y),It=new we(0,0,G,Y);let Vt=!1;const $=new Kc;let rt=!1,Mt=!1;const pt=new ce,zt=new ce,Xt=new L,Gt=new we,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function dt(){return C===null?F:1}let P=n;function Ct(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ct,!1),P===null){const N="webgl2";if(P=Ct(N,w),P===null)throw Ct(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ot,Rt,_t,Ht,Tt,A,b,V,K,at,Q,Lt,xt,vt,jt,ut,At,qt,Bt,yt,kt,Zt,se,O;function St(){ot=new Km(P),ot.init(),Zt=new F_(P,ot),Rt=new Xm(P,ot,t,Zt),_t=new D_(P,ot),Rt.reverseDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),Ht=new tg(P),Tt=new v_,A=new N_(P,ot,_t,Tt,Rt,Zt,Ht),b=new Ym(x),V=new Jm(x),K=new ap(P),se=new Hm(P,K),at=new jm(P,K,Ht,se),Q=new ng(P,at,K,Ht),Bt=new eg(P,Rt,A),ut=new qm(Tt),Lt=new __(x,b,V,ot,Rt,se,ut),xt=new W_(x,Tt),vt=new y_,jt=new T_(ot),qt=new Gm(x,b,V,_t,Q,f,c),At=new I_(x,Q,Rt),O=new X_(P,Ht,Rt,_t),yt=new Wm(P,ot,Ht),kt=new Qm(P,ot,Ht),Ht.programs=Lt.programs,x.capabilities=Rt,x.extensions=ot,x.properties=Tt,x.renderLists=vt,x.shadowMap=At,x.state=_t,x.info=Ht}St();const Z=new G_(x,P);this.xr=Z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(G,Y,!1))},this.getSize=function(w){return w.set(G,Y)},this.setSize=function(w,N,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,Y=N,e.width=Math.floor(w*F),e.height=Math.floor(N*F),W===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(G*F,Y*F).floor()},this.setDrawingBufferSize=function(w,N,W){G=w,Y=N,F=W,e.width=Math.floor(w*W),e.height=Math.floor(N*W),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(et)},this.setViewport=function(w,N,W,X){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,N,W,X),_t.viewport(T.copy(et).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(It)},this.setScissor=function(w,N,W,X){w.isVector4?It.set(w.x,w.y,w.z,w.w):It.set(w,N,W,X),_t.scissor(U.copy(It).multiplyScalar(F).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(w){_t.setScissorTest(Vt=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){tt=w},this.getClearColor=function(w){return w.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(w=!0,N=!0,W=!0){let X=0;if(w){let B=!1;if(C!==null){const gt=C.texture.format;B=gt===Xc||gt===Wc||gt===Hc}if(B){const gt=C.texture.type,wt=gt===Gn||gt===$i||gt===fr||gt===Rs||gt===kc||gt===Vc,Nt=qt.getClearColor(),Ft=qt.getClearAlpha(),Yt=Nt.r,Kt=Nt.g,Pt=Nt.b;wt?(g[0]=Yt,g[1]=Kt,g[2]=Pt,g[3]=Ft,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Yt,_[1]=Kt,_[2]=Pt,_[3]=Ft,P.clearBufferiv(P.COLOR,0,_))}else X|=P.COLOR_BUFFER_BIT}N&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),vt.dispose(),jt.dispose(),Tt.dispose(),b.dispose(),V.dispose(),Q.dispose(),se.dispose(),O.dispose(),Lt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",mi),Z.removeEventListener("sessionend",ii),Wn.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=Ht.autoReset,N=At.enabled,W=At.autoUpdate,X=At.needsUpdate,B=At.type;St(),Ht.autoReset=w,At.enabled=N,At.autoUpdate=W,At.needsUpdate=X,At.type=B}function ct(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dt(w){const N=w.target;N.removeEventListener("dispose",Dt),ne(N)}function ne(w){Qt(w),Tt.remove(w)}function Qt(w){const N=Tt.get(w).programs;N!==void 0&&(N.forEach(function(W){Lt.releaseProgram(W)}),w.isShaderMaterial&&Lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,W,X,B,gt){N===null&&(N=oe);const wt=B.isMesh&&B.matrixWorld.determinant()<0,Nt=Ar(w,N,W,X,B);_t.setMaterial(X,wt);let Ft=W.index,Yt=1;if(X.wireframe===!0){if(Ft=at.getWireframeAttribute(W),Ft===void 0)return;Yt=2}const Kt=W.drawRange,Pt=W.attributes.position;let ue=Kt.start*Yt,Se=(Kt.start+Kt.count)*Yt;gt!==null&&(ue=Math.max(ue,gt.start*Yt),Se=Math.min(Se,(gt.start+gt.count)*Yt)),Ft!==null?(ue=Math.max(ue,0),Se=Math.min(Se,Ft.count)):Pt!=null&&(ue=Math.max(ue,0),Se=Math.min(Se,Pt.count));const xe=Se-ue;if(xe<0||xe===1/0)return;se.setup(B,X,Nt,W,Ft);let Xe,pe=yt;if(Ft!==null&&(Xe=K.get(Ft),pe=kt,pe.setIndex(Xe)),B.isMesh)X.wireframe===!0?(_t.setLineWidth(X.wireframeLinewidth*dt()),pe.setMode(P.LINES)):pe.setMode(P.TRIANGLES);else if(B.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),_t.setLineWidth(Ut*dt()),B.isLineSegments?pe.setMode(P.LINES):B.isLineLoop?pe.setMode(P.LINE_LOOP):pe.setMode(P.LINE_STRIP)}else B.isPoints?pe.setMode(P.POINTS):B.isSprite&&pe.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)pe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))pe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ut=B._multiDrawStarts,En=B._multiDrawCounts,le=B._multiDrawCount,mn=Ft?K.get(Ft).bytesPerElement:1,Ge=Tt.get(X).currentProgram.getUniforms();for(let $e=0;$e<le;$e++)Ge.setValue(P,"_gl_DrawID",$e),pe.render(Ut[$e]/mn,En[$e])}else if(B.isInstancedMesh)pe.renderInstances(ue,xe,B.count);else if(W.isInstancedBufferGeometry){const Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,En=Math.min(W.instanceCount,Ut);pe.renderInstances(ue,xe,En)}else pe.render(ue,xe)};function _e(w,N,W){w.transparent===!0&&w.side===Fe&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,bn(w,N,W),w.side=pi,w.needsUpdate=!0,bn(w,N,W),w.side=Fe):bn(w,N,W)}this.compile=function(w,N,W=null){W===null&&(W=w),p=jt.get(W),p.init(N),y.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==W&&w.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const X=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const gt=B.material;if(gt)if(Array.isArray(gt))for(let wt=0;wt<gt.length;wt++){const Nt=gt[wt];_e(Nt,W,B),X.add(Nt)}else _e(gt,W,B),X.add(gt)}),y.pop(),p=null,X},this.compileAsync=function(w,N,W=null){const X=this.compile(w,N,W);return new Promise(B=>{function gt(){if(X.forEach(function(wt){Tt.get(wt).currentProgram.isReady()&&X.delete(wt)}),X.size===0){B(w);return}setTimeout(gt,10)}ot.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let on=null;function Sn(w){on&&on(w)}function mi(){Wn.stop()}function ii(){Wn.start()}const Wn=new Dh;Wn.setAnimationLoop(Sn),typeof self!="undefined"&&Wn.setContext(self),this.setAnimationLoop=function(w){on=w,Z.setAnimationLoop(w),w===null?Wn.stop():Wn.start()},Z.addEventListener("sessionstart",mi),Z.addEventListener("sessionend",ii),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,C),p=jt.get(w,y.length),p.init(N),y.push(p),zt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(zt),Mt=this.localClippingEnabled,rt=ut.init(this.clippingPlanes,Mt),m=vt.get(w,M.length),m.init(),M.push(m),Z.enabled===!0&&Z.isPresenting===!0){const gt=x.xr.getDepthSensingMesh();gt!==null&&Dn(gt,N,-1/0,x.sortObjects)}Dn(w,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,tt),nt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,nt&&qt.addToRenderList(m,w),this.info.render.frame++,rt===!0&&ut.beginShadows();const W=p.state.shadowsArray;At.render(W,w,N),rt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(p.setupLights(),N.isArrayCamera){const gt=N.cameras;if(B.length>0)for(let wt=0,Nt=gt.length;wt<Nt;wt++){const Ft=gt[wt];Gs(X,B,w,Ft)}nt&&qt.render(w);for(let wt=0,Nt=gt.length;wt<Nt;wt++){const Ft=gt[wt];Tr(m,w,Ft,Ft.viewport)}}else B.length>0&&Gs(X,B,w,N),nt&&qt.render(w),Tr(m,w,N);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,N),se.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],rt===!0&&ut.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Dn(w,N,W,X){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){X&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(zt);const wt=Q.update(w),Nt=w.material;Nt.visible&&m.push(w,wt,Nt,W,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const wt=Q.update(w),Nt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Gt.copy(wt.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(zt)),Array.isArray(Nt)){const Ft=wt.groups;for(let Yt=0,Kt=Ft.length;Yt<Kt;Yt++){const Pt=Ft[Yt],ue=Nt[Pt.materialIndex];ue&&ue.visible&&m.push(w,wt,ue,W,Gt.z,Pt)}}else Nt.visible&&m.push(w,wt,Nt,W,Gt.z,null)}}const gt=w.children;for(let wt=0,Nt=gt.length;wt<Nt;wt++)Dn(gt[wt],N,W,X)}function Tr(w,N,W,X){const B=w.opaque,gt=w.transmissive,wt=w.transparent;p.setupLightsView(W),rt===!0&&ut.setGlobalState(x.clippingPlanes,W),X&&_t.viewport(T.copy(X)),B.length>0&&Di(B,N,W),gt.length>0&&Di(gt,N,W),wt.length>0&&Di(wt,N,W),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Gs(w,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new jn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Ds:Gn,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const gt=p.state.transmissionRenderTarget[X.id],wt=X.viewport||T;gt.setSize(wt.z,wt.w);const Nt=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(z),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),nt&&qt.render(W);const Ft=x.toneMapping;x.toneMapping=Ai;const Yt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),rt===!0&&ut.setGlobalState(x.clippingPlanes,X),Di(w,W,X),A.updateMultisampleRenderTarget(gt),A.updateRenderTargetMipmap(gt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Pt=0,ue=N.length;Pt<ue;Pt++){const Se=N[Pt],xe=Se.object,Xe=Se.geometry,pe=Se.material,Ut=Se.group;if(pe.side===Fe&&xe.layers.test(X.layers)){const En=pe.side;pe.side=rn,pe.needsUpdate=!0,Hs(xe,W,X,Xe,pe,Ut),pe.side=En,pe.needsUpdate=!0,Kt=!0}}Kt===!0&&(A.updateMultisampleRenderTarget(gt),A.updateRenderTargetMipmap(gt))}x.setRenderTarget(Nt),x.setClearColor(z,q),Yt!==void 0&&(X.viewport=Yt),x.toneMapping=Ft}function Di(w,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let B=0,gt=w.length;B<gt;B++){const wt=w[B],Nt=wt.object,Ft=wt.geometry,Yt=X===null?wt.material:X,Kt=wt.group;Nt.layers.test(W.layers)&&Hs(Nt,N,W,Ft,Yt,Kt)}}function Hs(w,N,W,X,B,gt){w.onBeforeRender(x,N,W,X,B,gt),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(x,N,W,X,w,gt),B.transparent===!0&&B.side===Fe&&B.forceSinglePass===!1?(B.side=rn,B.needsUpdate=!0,x.renderBufferDirect(W,N,X,B,w,gt),B.side=pi,B.needsUpdate=!0,x.renderBufferDirect(W,N,X,B,w,gt),B.side=Fe):x.renderBufferDirect(W,N,X,B,w,gt),w.onAfterRender(x,N,W,X,B,gt)}function bn(w,N,W){N.isScene!==!0&&(N=oe);const X=Tt.get(w),B=p.state.lights,gt=p.state.shadowsArray,wt=B.state.version,Nt=Lt.getParameters(w,B.state,gt,N,W),Ft=Lt.getProgramCacheKey(Nt);let Yt=X.programs;X.environment=w.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(w.isMeshStandardMaterial?V:b).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Yt===void 0&&(w.addEventListener("dispose",Dt),Yt=new Map,X.programs=Yt);let Kt=Yt.get(Ft);if(Kt!==void 0){if(X.currentProgram===Kt&&X.lightsStateVersion===wt)return Ws(w,Nt),Kt}else Nt.uniforms=Lt.getUniforms(w),w.onBeforeCompile(Nt,x),Kt=Lt.acquireProgram(Nt,Ft),Yt.set(Ft,Kt),X.uniforms=Nt.uniforms;const Pt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=ut.uniform),Ws(w,Nt),X.needsLights=Cr(w),X.lightsStateVersion=wt,X.needsLights&&(Pt.ambientLightColor.value=B.state.ambient,Pt.lightProbe.value=B.state.probe,Pt.directionalLights.value=B.state.directional,Pt.directionalLightShadows.value=B.state.directionalShadow,Pt.spotLights.value=B.state.spot,Pt.spotLightShadows.value=B.state.spotShadow,Pt.rectAreaLights.value=B.state.rectArea,Pt.ltc_1.value=B.state.rectAreaLTC1,Pt.ltc_2.value=B.state.rectAreaLTC2,Pt.pointLights.value=B.state.point,Pt.pointLightShadows.value=B.state.pointShadow,Pt.hemisphereLights.value=B.state.hemi,Pt.directionalShadowMap.value=B.state.directionalShadowMap,Pt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pt.spotShadowMap.value=B.state.spotShadowMap,Pt.spotLightMatrix.value=B.state.spotLightMatrix,Pt.spotLightMap.value=B.state.spotLightMap,Pt.pointShadowMap.value=B.state.pointShadowMap,Pt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Kt,X.uniformsList=null,Kt}function Ui(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=xo.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Ws(w,N){const W=Tt.get(w);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Ar(w,N,W,X,B){N.isScene!==!0&&(N=oe),A.resetTextureUnits();const gt=N.fog,wt=X.isMeshStandardMaterial?N.environment:null,Nt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Us,Ft=(X.isMeshStandardMaterial?V:b).get(X.envMap||wt),Yt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Kt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!W.morphAttributes.position,ue=!!W.morphAttributes.normal,Se=!!W.morphAttributes.color;let xe=Ai;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xe=x.toneMapping);const Xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=Xe!==void 0?Xe.length:0,Ut=Tt.get(X),En=p.state.lights;if(rt===!0&&(Mt===!0||w!==v)){const an=w===v&&X.id===S;ut.setState(X,w,an)}let le=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==En.state.version||Ut.outputColorSpace!==Nt||B.isBatchedMesh&&Ut.batching===!1||!B.isBatchedMesh&&Ut.batching===!0||B.isBatchedMesh&&Ut.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ut.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ut.instancing===!1||!B.isInstancedMesh&&Ut.instancing===!0||B.isSkinnedMesh&&Ut.skinning===!1||!B.isSkinnedMesh&&Ut.skinning===!0||B.isInstancedMesh&&Ut.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ut.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ut.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ut.instancingMorph===!1&&B.morphTexture!==null||Ut.envMap!==Ft||X.fog===!0&&Ut.fog!==gt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ut.numPlanes||Ut.numIntersection!==ut.numIntersection)||Ut.vertexAlphas!==Yt||Ut.vertexTangents!==Kt||Ut.morphTargets!==Pt||Ut.morphNormals!==ue||Ut.morphColors!==Se||Ut.toneMapping!==xe||Ut.morphTargetsCount!==pe)&&(le=!0):(le=!0,Ut.__version=X.version);let mn=Ut.currentProgram;le===!0&&(mn=bn(X,N,B));let Ge=!1,$e=!1,wn=!1;const ve=mn.getUniforms(),qe=Ut.uniforms;if(_t.useProgram(mn.program)&&(Ge=!0,$e=!0,wn=!0),X.id!==S&&(S=X.id,$e=!0),Ge||v!==w){_t.buffers.depth.getReversed()?(pt.copy(w.projectionMatrix),Ff(pt),Of(pt),ve.setValue(P,"projectionMatrix",pt)):ve.setValue(P,"projectionMatrix",w.projectionMatrix),ve.setValue(P,"viewMatrix",w.matrixWorldInverse);const Un=ve.map.cameraPosition;Un!==void 0&&Un.setValue(P,Xt.setFromMatrixPosition(w.matrixWorld)),Rt.logarithmicDepthBuffer&&ve.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ve.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,$e=!0,wn=!0)}if(B.isSkinnedMesh){ve.setOptional(P,B,"bindMatrix"),ve.setOptional(P,B,"bindMatrixInverse");const an=B.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),ve.setValue(P,"boneTexture",an.boneTexture,A))}B.isBatchedMesh&&(ve.setOptional(P,B,"batchingTexture"),ve.setValue(P,"batchingTexture",B._matricesTexture,A),ve.setOptional(P,B,"batchingIdTexture"),ve.setValue(P,"batchingIdTexture",B._indirectTexture,A),ve.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&ve.setValue(P,"batchingColorTexture",B._colorsTexture,A));const Ni=W.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Bt.update(B,W,mn),($e||Ut.receiveShadow!==B.receiveShadow)&&(Ut.receiveShadow=B.receiveShadow,ve.setValue(P,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(qe.envMap.value=Ft,qe.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(qe.envMapIntensity.value=N.environmentIntensity),$e&&(ve.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&Rr(qe,wn),gt&&X.fog===!0&&xt.refreshFogUniforms(qe,gt),xt.refreshMaterialUniforms(qe,X,F,Y,p.state.transmissionRenderTarget[w.id]),xo.upload(P,Ui(Ut),qe,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(xo.upload(P,Ui(Ut),qe,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ve.setValue(P,"center",B.center),ve.setValue(P,"modelViewMatrix",B.modelViewMatrix),ve.setValue(P,"normalMatrix",B.normalMatrix),ve.setValue(P,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const an=X.uniformsGroups;for(let Un=0,Tn=an.length;Un<Tn;Un++){const Xs=an[Un];O.update(Xs,mn),O.bind(Xs,mn)}}return mn}function Rr(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Cr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,N,W){Tt.get(w.texture).__webglTexture=N,Tt.get(w.depthTexture).__webglTexture=W;const X=Tt.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const W=Tt.get(w);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,W=0){C=w,R=N,E=W;let X=!0,B=null,gt=!1,wt=!1;if(w){const Ft=Tt.get(w);if(Ft.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(Ft.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Ft.__hasExternalTextures)A.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pt=w.depthTexture;if(Ft.__boundDepthTexture!==Pt){if(Pt!==null&&Tt.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Yt=w.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(wt=!0);const Kt=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[N])?B=Kt[N][W]:B=Kt[N],gt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?B=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?B=Kt[W]:B=Kt,T.copy(w.viewport),U.copy(w.scissor),D=w.scissorTest}else T.copy(et).multiplyScalar(F).floor(),U.copy(It).multiplyScalar(F).floor(),D=Vt;if(_t.bindFramebuffer(P.FRAMEBUFFER,B)&&X&&_t.drawBuffers(w,B),_t.viewport(T),_t.scissor(U),_t.setScissorTest(D),gt){const Ft=Tt.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ft.__webglTexture,W)}else if(wt){const Ft=Tt.get(w.texture),Yt=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.__webglTexture,W||0,Yt)}S=-1},this.readRenderTargetPixels=function(w,N,W,X,B,gt,wt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){_t.bindFramebuffer(P.FRAMEBUFFER,Nt);try{const Ft=w.texture,Yt=Ft.format,Kt=Ft.type;if(!Rt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-X&&W>=0&&W<=w.height-B&&P.readPixels(N,W,X,B,Zt.convert(Yt),Zt.convert(Kt),gt)}finally{const Ft=C!==null?Tt.get(C).__webglFramebuffer:null;_t.bindFramebuffer(P.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(w,N,W,X,B,gt,wt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){const Ft=w.texture,Yt=Ft.format,Kt=Ft.type;if(!Rt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-X&&W>=0&&W<=w.height-B){_t.bindFramebuffer(P.FRAMEBUFFER,Nt);const Pt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Pt),P.bufferData(P.PIXEL_PACK_BUFFER,gt.byteLength,P.STREAM_READ),P.readPixels(N,W,X,B,Zt.convert(Yt),Zt.convert(Kt),0);const ue=C!==null?Tt.get(C).__webglFramebuffer:null;_t.bindFramebuffer(P.FRAMEBUFFER,ue);const Se=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Nf(P,Se,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Pt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,gt),P.deleteBuffer(Pt),P.deleteSync(Se),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,W=0){w.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(w.image.width*X),gt=Math.floor(w.image.height*X),wt=N!==null?N.x:0,Nt=N!==null?N.y:0;A.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,wt,Nt,B,gt),_t.unbindTexture()},this.copyTextureToTexture=function(w,N,W=null,X=null,B=0){w.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],N=arguments[2],B=arguments[3]||0,W=null);let gt,wt,Nt,Ft,Yt,Kt,Pt,ue,Se;const xe=w.isCompressedTexture?w.mipmaps[B]:w.image;W!==null?(gt=W.max.x-W.min.x,wt=W.max.y-W.min.y,Nt=W.isBox3?W.max.z-W.min.z:1,Ft=W.min.x,Yt=W.min.y,Kt=W.isBox3?W.min.z:0):(gt=xe.width,wt=xe.height,Nt=xe.depth||1,Ft=0,Yt=0,Kt=0),X!==null?(Pt=X.x,ue=X.y,Se=X.z):(Pt=0,ue=0,Se=0);const Xe=Zt.convert(N.format),pe=Zt.convert(N.type);let Ut;N.isData3DTexture?(A.setTexture3D(N,0),Ut=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Ut=P.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Ut=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const En=P.getParameter(P.UNPACK_ROW_LENGTH),le=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ge=P.getParameter(P.UNPACK_SKIP_ROWS),$e=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ft),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Kt);const wn=w.isDataArrayTexture||w.isData3DTexture,ve=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const qe=Tt.get(w),Ni=Tt.get(N),an=Tt.get(qe.__renderTarget),Un=Tt.get(Ni.__renderTarget);_t.bindFramebuffer(P.READ_FRAMEBUFFER,an.__webglFramebuffer),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Tn=0;Tn<Nt;Tn++)wn&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tt.get(w).__webglTexture,B,Kt+Tn),w.isDepthTexture?(ve&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tt.get(N).__webglTexture,B,Se+Tn),P.blitFramebuffer(Ft,Yt,gt,wt,Pt,ue,gt,wt,P.DEPTH_BUFFER_BIT,P.NEAREST)):ve?P.copyTexSubImage3D(Ut,B,Pt,ue,Se+Tn,Ft,Yt,gt,wt):P.copyTexSubImage2D(Ut,B,Pt,ue,Se+Tn,Ft,Yt,gt,wt);_t.bindFramebuffer(P.READ_FRAMEBUFFER,null),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ve?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Ut,B,Pt,ue,Se,gt,wt,Nt,Xe,pe,xe.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Ut,B,Pt,ue,Se,gt,wt,Nt,Xe,xe.data):P.texSubImage3D(Ut,B,Pt,ue,Se,gt,wt,Nt,Xe,pe,xe):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,B,Pt,ue,gt,wt,Xe,pe,xe.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,B,Pt,ue,xe.width,xe.height,Xe,xe.data):P.texSubImage2D(P.TEXTURE_2D,B,Pt,ue,gt,wt,Xe,pe,xe);P.pixelStorei(P.UNPACK_ROW_LENGTH,En),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ge),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$e),B===0&&N.generateMipmaps&&P.generateMipmap(Ut),_t.unbindTexture()},this.copyTextureToTexture3D=function(w,N,W=null,X=null,B=0){return w.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],N=arguments[3],B=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,W,X,B)},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),_t.unbindTexture()},this.resetState=function(){R=0,E=0,C=null,_t.reset(),se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}class Eo extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Y_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ec,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new L;class wo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tc extends Ii{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ds;const js=new L,fs=new L,ps=new L,ms=new st,Qs=new st,zh=new ce,eo=new L,tr=new L,no=new L,Su=new st,ya=new st,bu=new st;class Eu extends De{constructor(t=new Tc){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new Ue;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Y_(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new wo(n,3,0,!1)),ds.setAttribute("uv",new wo(n,2,3,!1))}this.geometry=ds,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;io(eo.set(-.5,-.5,0),ps,o,fs,s,r),io(tr.set(.5,-.5,0),ps,o,fs,s,r),io(no.set(.5,.5,0),ps,o,fs,s,r),Su.set(0,0),ya.set(1,0),bu.set(1,1);let a=t.ray.intersectTriangle(eo,tr,no,!1,js);if(a===null&&(io(tr.set(-.5,.5,0),ps,o,fs,s,r),ya.set(0,1),a=t.ray.intersectTriangle(eo,no,tr,!1,js),a===null))return;const c=t.ray.origin.distanceTo(js);c<t.near||c>t.far||e.push({distance:c,point:js.clone(),uv:Rn.getInterpolation(js,eo,tr,no,Su,ya,bu,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function io(i,t,e,n,s,r){ms.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Qs.x=r*ms.x-s*ms.y,Qs.y=s*ms.x+r*ms.y):Qs.copy(ms),i.copy(t),i.x+=Qs.x,i.y+=Qs.y,i.applyMatrix4(zh)}const wu=new L,Tu=new we,Au=new we,$_=new L,Ru=new ce,so=new L,Ma=new Fs,Cu=new ce,Sa=new Lo;class Pu extends mt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Al,this.bindMatrix=new ce,this.bindMatrixInverse=new ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ns),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,so),this.boundingBox.expandByPoint(so)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,so),this.boundingSphere.expandByPoint(so)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(s),t.ray.intersectsSphere(Ma)!==!1&&(Cu.copy(s).invert(),Sa.copy(t.ray).applyMatrix4(Cu),!(this.boundingBox!==null&&Sa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Sa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new we,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Al?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Tu.fromBufferAttribute(s.attributes.skinIndex,t),Au.fromBufferAttribute(s.attributes.skinWeight,t),wu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Au.getComponent(r);if(o!==0){const a=Tu.getComponent(r);Ru.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector($_.copy(wu).applyMatrix4(Ru),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class kh extends De{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vh extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,c,l=yn,u=yn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Iu=new ce,Z_=new ce;class Qc{constructor(t=[],e=[]){this.uuid=Pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ce)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ce;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Z_;Iu.multiplyMatrices(a,e[r]),Iu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Qc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Vh(e,t,t,Cn,$n);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new kh),this.bones.push(o),this.boneInverses.push(new ce().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Gh extends Ii{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lu=new ce,Ac=new Lo,ro=new Fs,oo=new L;class J_ extends De{constructor(t=new Ue,e=new Gh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,t.ray.intersectsSphere(ro)===!1)return;Lu.copy(s).invert(),Ac.copy(t.ray).applyMatrix4(Lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);oo.fromBufferAttribute(h,m),Du(oo,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)oo.fromBufferAttribute(h,g),Du(oo,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Du(i,t,e,n,s,r,o){const a=Ac.distanceSqToPoint(i);if(a<e){const c=new L;Ac.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Kn extends Ye{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new st:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],o=[],a=new L,c=new ce;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(We(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tl extends ei{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new st){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class K_ extends tl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function el(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ao=new L,ba=new el,Ea=new el,wa=new el;class j_ extends ei{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ao.subVectors(s[0],s[1]).add(s[0]),l=ao);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ao),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ba.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),Ea.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),wa.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Ea.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),wa.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(ba.calc(c),Ea.calc(c),wa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Uu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Q_(i,t){const e=1-i;return e*e*t}function tv(i,t){return 2*(1-i)*i*t}function ev(i,t){return i*i*t}function lr(i,t,e,n){return Q_(i,t)+tv(i,e)+ev(i,n)}function nv(i,t){const e=1-i;return e*e*e*t}function iv(i,t){const e=1-i;return 3*e*e*i*t}function sv(i,t){return 3*(1-i)*i*i*t}function rv(i,t){return i*i*i*t}function ur(i,t,e,n,s){return nv(i,t)+iv(i,e)+sv(i,n)+rv(i,s)}class Hh extends ei{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ov extends ei{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y),ur(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wh extends ei{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class av extends ei{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xh extends ei{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cv extends ei{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y),lr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nl extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Uu(a,c.x,l.x,u.x,h.x),Uu(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var Rc=Object.freeze({__proto__:null,ArcCurve:K_,CatmullRomCurve3:j_,CubicBezierCurve:Hh,CubicBezierCurve3:ov,EllipseCurve:tl,LineCurve:Wh,LineCurve3:av,QuadraticBezierCurve:Xh,QuadraticBezierCurve3:cv,SplineCurve:nl});class lv extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Rc[s.type]().fromJSON(s))}return this}}class Cc extends lv{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Wh(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Xh(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Hh(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new nl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new tl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Li extends Ue{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=We(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new L,d=new st,f=new L,g=new L,_=new L;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const y=n+M*u*s,x=Math.sin(y),I=Math.cos(y);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*x,h.y=t[R].y,h.z=t[R].x*I,o.push(h.x,h.y,h.z),d.x=M/e,d.y=R/(t.length-1),a.push(d.x,d.y);const E=c[3*R+0]*x,C=c[3*R+1],S=c[3*R+0]*I;l.push(E,C,S)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){const x=y+M*t.length,I=x,R=x+t.length,E=x+t.length+1,C=x+1;r.push(I,R,C),r.push(E,C,R)}this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("uv",new fe(a,2)),this.setAttribute("normal",new fe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.points,t.segments,t.phiStart,t.phiLength)}}class Is extends Li{constructor(t=1,e=1,n=4,s=8){const r=new Cc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Is(t.radius,t.length,t.capSegments,t.radialSegments)}}class Hn extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new L,u=new st;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ie extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function M(){const x=new L,I=new L;let R=0;const E=(e-t)/n;for(let C=0;C<=r;C++){const S=[],v=C/r,T=v*(e-t)+t;for(let U=0;U<=s;U++){const D=U/s,z=D*c+a,q=Math.sin(z),G=Math.cos(z);I.x=T*q,I.y=-v*n+m,I.z=T*G,h.push(I.x,I.y,I.z),x.set(q,E,G).normalize(),d.push(x.x,x.y,x.z),f.push(D,1-v),S.push(g++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const v=_[S][C],T=_[S+1][C],U=_[S+1][C+1],D=_[S][C+1];(t>0||S!==0)&&(u.push(v,T,D),R+=3),(e>0||S!==r-1)&&(u.push(T,U,D),R+=3)}l.addGroup(p,R,0),p+=R}function y(x){const I=g,R=new st,E=new L;let C=0;const S=x===!0?t:e,v=x===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const T=g;for(let U=0;U<=s;U++){const z=U/s*c+a,q=Math.cos(z),G=Math.sin(z);E.x=S*G,E.y=m*v,E.z=S*q,h.push(E.x,E.y,E.z),d.push(0,v,0),R.x=q*.5+.5,R.y=G*.5*v+.5,f.push(R.x,R.y),g++}for(let U=0;U<s;U++){const D=I+U,z=T+U;x===!0?u.push(z,z+1,D):u.push(z+1,z,D),C+=3}l.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bs extends Ie{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Bs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class il extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new L,x=new L,I=new L;for(let R=0;R<e.length;R+=3)f(e[R+0],y),f(e[R+1],x),f(e[R+2],I),c(y,x,I,M)}function c(M,y,x,I){const R=I+1,E=[];for(let C=0;C<=R;C++){E[C]=[];const S=M.clone().lerp(x,C/R),v=y.clone().lerp(x,C/R),T=R-C;for(let U=0;U<=T;U++)U===0&&C===R?E[C][U]=S:E[C][U]=S.clone().lerp(v,U/T)}for(let C=0;C<R;C++)for(let S=0;S<2*(R-C)-1;S++){const v=Math.floor(S/2);S%2===0?(d(E[C][v+1]),d(E[C+1][v]),d(E[C][v])):(d(E[C][v+1]),d(E[C+1][v+1]),d(E[C+1][v]))}}function l(M){const y=new L;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(M),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const M=new L;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const x=m(M)/2/Math.PI+.5,I=p(M)/Math.PI+.5;o.push(x,1-I)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const y=o[M+0],x=o[M+2],I=o[M+4],R=Math.max(y,x,I),E=Math.min(y,x,I);R>.9&&E<.1&&(y<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){const x=M*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const M=new L,y=new L,x=new L,I=new L,R=new st,E=new st,C=new st;for(let S=0,v=0;S<r.length;S+=9,v+=6){M.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),R.set(o[v+0],o[v+1]),E.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),I.copy(M).add(y).add(x).divideScalar(3);const T=m(I);_(R,v+0,M,T),_(E,v+2,y,T),_(C,v+4,x,T)}}function _(M,y,x,I){I<0&&M.x===1&&(o[y]=M.x-1),x.x===0&&x.z===0&&(o[y]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.vertices,t.indices,t.radius,t.details)}}class Ls extends Cc{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Cc().fromJSON(s))}return this}}const uv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=qh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=mv(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return gr(r,o,e,a,c,f,0),o}};function qh(i,t,e,n,s){let r,o;if(s===Tv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Nu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Nu(r,i[r],i[r+1],o);return o&&No(o,o.next)&&(vr(o),o=o.next),o}function Zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(No(e,e.next)||Pe(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&yv(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?dv(i,n,s,r):hv(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),vr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=fv(Zi(i),t,e),gr(i,t,e,n,s,r,2)):o===2&&pv(i,t,e,n,s,r):gr(Zi(i),t,e,n,s,r,1);break}}}function hv(i){const t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&ys(s,a,r,c,o,l,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dv(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Pe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=Pc(f,g,t,e,n),M=Pc(_,m,t,e,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ys(a,u,c,h,l,d,y.x,y.y)&&Pe(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ys(a,u,c,h,l,d,x.x,x.y)&&Pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ys(a,u,c,h,l,d,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ys(a,u,c,h,l,d,x.x,x.y)&&Pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function fv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!No(s,r)&&Yh(s,n,n.next,r)&&_r(s,r)&&_r(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vr(n),vr(n.next),n=i=r),n=n.next}while(n!==i);return Zi(n)}function pv(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bv(o,a)){let c=$h(o,a);o=Zi(o,o.next),c=Zi(c,c.next),gr(o,t,e,n,s,r,0),gr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function mv(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=qh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Sv(l));for(s.sort(gv),r=0;r<s.length;r++)e=_v(s[r],e);return e}function gv(i,t){return i.x-t.x}function _v(i,t){const e=vv(i,t);if(!e)return t;const n=$h(e,i);return Zi(n,n.next),Zi(e,e.next)}function vv(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ys(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),_r(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&xv(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function xv(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function yv(i,t,e,n){let s=i;do s.z===0&&(s.z=Pc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mv(s)}function Mv(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Pc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Sv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ys(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function bv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ev(i,t)&&(_r(i,t)&&_r(t,i)&&wv(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||No(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function No(i,t){return i.x===t.x&&i.y===t.y}function Yh(i,t,e,n){const s=lo(Pe(i,t,e)),r=lo(Pe(i,t,n)),o=lo(Pe(e,n,i)),a=lo(Pe(e,n,t));return!!(s!==r&&o!==a||s===0&&co(i,e,t)||r===0&&co(i,n,t)||o===0&&co(e,i,n)||a===0&&co(e,t,n))}function co(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function lo(i){return i>0?1:i<0?-1:0}function Ev(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _r(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function wv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $h(i,t){const e=new Ic(i.i,i.x,i.y),n=new Ic(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Nu(i,t,e,n){const s=new Ic(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ic(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ri{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ri.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Fu(t),Ou(n,t);let o=t.length;e.forEach(Fu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ou(n,e[c]);const a=uv.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Fu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ou(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class sl extends Ue{constructor(t=new Ls([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Av;let y,x=!1,I,R,E,C;p&&(y=p.getSpacedPoints(u),x=!0,d=!1,I=p.computeFrenetFrames(u,!1),R=new L,E=new L,C=new L),d||(m=0,f=0,g=0,_=0);const S=a.extractPoints(l);let v=S.shape;const T=S.holes;if(!Ri.isClockWise(v)){v=v.reverse();for(let nt=0,dt=T.length;nt<dt;nt++){const P=T[nt];Ri.isClockWise(P)&&(T[nt]=P.reverse())}}const D=Ri.triangulateShape(v,T),z=v;for(let nt=0,dt=T.length;nt<dt;nt++){const P=T[nt];v=v.concat(P)}function q(nt,dt,P){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(dt,P)}const G=v.length,Y=D.length;function F(nt,dt,P){let Ct,ot,Rt;const _t=nt.x-dt.x,Ht=nt.y-dt.y,Tt=P.x-nt.x,A=P.y-nt.y,b=_t*_t+Ht*Ht,V=_t*A-Ht*Tt;if(Math.abs(V)>Number.EPSILON){const K=Math.sqrt(b),at=Math.sqrt(Tt*Tt+A*A),Q=dt.x-Ht/K,Lt=dt.y+_t/K,xt=P.x-A/at,vt=P.y+Tt/at,jt=((xt-Q)*A-(vt-Lt)*Tt)/(_t*A-Ht*Tt);Ct=Q+_t*jt-nt.x,ot=Lt+Ht*jt-nt.y;const ut=Ct*Ct+ot*ot;if(ut<=2)return new st(Ct,ot);Rt=Math.sqrt(ut/2)}else{let K=!1;_t>Number.EPSILON?Tt>Number.EPSILON&&(K=!0):_t<-Number.EPSILON?Tt<-Number.EPSILON&&(K=!0):Math.sign(Ht)===Math.sign(A)&&(K=!0),K?(Ct=-Ht,ot=_t,Rt=Math.sqrt(b)):(Ct=_t,ot=Ht,Rt=Math.sqrt(b/2))}return new st(Ct/Rt,ot/Rt)}const j=[];for(let nt=0,dt=z.length,P=dt-1,Ct=nt+1;nt<dt;nt++,P++,Ct++)P===dt&&(P=0),Ct===dt&&(Ct=0),j[nt]=F(z[nt],z[P],z[Ct]);const tt=[];let et,It=j.concat();for(let nt=0,dt=T.length;nt<dt;nt++){const P=T[nt];et=[];for(let Ct=0,ot=P.length,Rt=ot-1,_t=Ct+1;Ct<ot;Ct++,Rt++,_t++)Rt===ot&&(Rt=0),_t===ot&&(_t=0),et[Ct]=F(P[Ct],P[Rt],P[_t]);tt.push(et),It=It.concat(et)}for(let nt=0;nt<m;nt++){const dt=nt/m,P=f*Math.cos(dt*Math.PI/2),Ct=g*Math.sin(dt*Math.PI/2)+_;for(let ot=0,Rt=z.length;ot<Rt;ot++){const _t=q(z[ot],j[ot],Ct);pt(_t.x,_t.y,-P)}for(let ot=0,Rt=T.length;ot<Rt;ot++){const _t=T[ot];et=tt[ot];for(let Ht=0,Tt=_t.length;Ht<Tt;Ht++){const A=q(_t[Ht],et[Ht],Ct);pt(A.x,A.y,-P)}}}const Vt=g+_;for(let nt=0;nt<G;nt++){const dt=d?q(v[nt],It[nt],Vt):v[nt];x?(E.copy(I.normals[0]).multiplyScalar(dt.x),R.copy(I.binormals[0]).multiplyScalar(dt.y),C.copy(y[0]).add(E).add(R),pt(C.x,C.y,C.z)):pt(dt.x,dt.y,0)}for(let nt=1;nt<=u;nt++)for(let dt=0;dt<G;dt++){const P=d?q(v[dt],It[dt],Vt):v[dt];x?(E.copy(I.normals[nt]).multiplyScalar(P.x),R.copy(I.binormals[nt]).multiplyScalar(P.y),C.copy(y[nt]).add(E).add(R),pt(C.x,C.y,C.z)):pt(P.x,P.y,h/u*nt)}for(let nt=m-1;nt>=0;nt--){const dt=nt/m,P=f*Math.cos(dt*Math.PI/2),Ct=g*Math.sin(dt*Math.PI/2)+_;for(let ot=0,Rt=z.length;ot<Rt;ot++){const _t=q(z[ot],j[ot],Ct);pt(_t.x,_t.y,h+P)}for(let ot=0,Rt=T.length;ot<Rt;ot++){const _t=T[ot];et=tt[ot];for(let Ht=0,Tt=_t.length;Ht<Tt;Ht++){const A=q(_t[Ht],et[Ht],Ct);x?pt(A.x,A.y+y[u-1].y,y[u-1].x+P):pt(A.x,A.y,h+P)}}}$(),rt();function $(){const nt=s.length/3;if(d){let dt=0,P=G*dt;for(let Ct=0;Ct<Y;Ct++){const ot=D[Ct];zt(ot[2]+P,ot[1]+P,ot[0]+P)}dt=u+m*2,P=G*dt;for(let Ct=0;Ct<Y;Ct++){const ot=D[Ct];zt(ot[0]+P,ot[1]+P,ot[2]+P)}}else{for(let dt=0;dt<Y;dt++){const P=D[dt];zt(P[2],P[1],P[0])}for(let dt=0;dt<Y;dt++){const P=D[dt];zt(P[0]+G*u,P[1]+G*u,P[2]+G*u)}}n.addGroup(nt,s.length/3-nt,0)}function rt(){const nt=s.length/3;let dt=0;Mt(z,dt),dt+=z.length;for(let P=0,Ct=T.length;P<Ct;P++){const ot=T[P];Mt(ot,dt),dt+=ot.length}n.addGroup(nt,s.length/3-nt,1)}function Mt(nt,dt){let P=nt.length;for(;--P>=0;){const Ct=P;let ot=P-1;ot<0&&(ot=nt.length-1);for(let Rt=0,_t=u+m*2;Rt<_t;Rt++){const Ht=G*Rt,Tt=G*(Rt+1),A=dt+Ct+Ht,b=dt+ot+Ht,V=dt+ot+Tt,K=dt+Ct+Tt;Xt(A,b,V,K)}}}function pt(nt,dt,P){c.push(nt),c.push(dt),c.push(P)}function zt(nt,dt,P){Gt(nt),Gt(dt),Gt(P);const Ct=s.length/3,ot=M.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);oe(ot[0]),oe(ot[1]),oe(ot[2])}function Xt(nt,dt,P,Ct){Gt(nt),Gt(dt),Gt(Ct),Gt(dt),Gt(P),Gt(Ct);const ot=s.length/3,Rt=M.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);oe(Rt[0]),oe(Rt[1]),oe(Rt[3]),oe(Rt[1]),oe(Rt[2]),oe(Rt[3])}function Gt(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function oe(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Rv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Rc[s.type]().fromJSON(s)),new sl(n,t.options)}}const Av={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new st(r,o),new st(a,c),new st(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new st(o,1-c),new st(l,1-h),new st(d,1-g),new st(_,1-p)]:[new st(a,1-c),new st(u,1-h),new st(f,1-g),new st(m,1-p)]}};function Rv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Fo extends il{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fo(t.radius,t.detail)}}class Oo extends Ue{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,f=new L,g=new st;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,y=M,x=M+n+1,I=M+n+2,R=M+1;a.push(y,x,R),a.push(x,I,R)}}this.setIndex(a),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xr extends Ue{constructor(t=new Ls([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(o,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let f=d.shape;const g=d.holes;Ri.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];Ri.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=Ri.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){const M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){const M=_[m],y=M[0]+h,x=M[1]+h,I=M[2]+h;n.push(y,x,I),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Cv(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new xr(n,t.curveSegments)}}function Cv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class me extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let I=0;I<=e;I++){const R=I/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-y),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const y=u[p][M+1],x=u[p][M],I=u[p+1][M],R=u[p+1][M+1];(p!==0||o>0)&&f.push(y,x,R),(p!==n-1||c<Math.PI)&&f.push(x,I,R)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class In extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new L,h=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pv extends Ii{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Iv extends Ii{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Jt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}function uo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Lv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dv(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Bu(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Zh(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class Bo{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Uv extends Bo{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_s,endingEnd:_s}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vs:r=t,a=2*e-n;break;case So:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case vs:o=t,c=2*n-e;break;case So:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+M*o[l+I]+y*o[c+I]+x*o[h+I];return r}}class Jh extends Bo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class Nv extends Bo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class ni{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=uo(e,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:uo(t.times,Array),values:uo(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Nv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uv(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mo:e=this.InterpolantFactoryMethodDiscrete;break;case bc:e=this.InterpolantFactoryMethodLinear;break;case qo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return bc;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Lv(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qo,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=bc;class zs extends ni{constructor(t,e,n){super(t,e,n)}}zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Mo;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Kh extends ni{}Kh.prototype.ValueTypeName="color";class To extends ni{}To.prototype.ValueTypeName="number";class Fv extends Bo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let u=l+a;l!==u;l+=4)Jn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class br extends ni{InterpolantFactoryMethodLinear(t){return new Fv(this.times,this.values,this.getValueSize(),t)}}br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends ni{constructor(t,e,n){super(t,e,n)}}ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Mo;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends ni{}yr.prototype.ValueTypeName="vector";class Lc{constructor(t="",e=-1,n=[],s=qc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Bv(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(ni.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Dv(c);c=Bu(c,1,u),l=Bu(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new To(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];Zh(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new To(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+e[h].name+"]";n(yr,f+".position",d,"pos",s),n(br,f+".quaternion",d,"rot",s),n(yr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ov(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return To;case"vector":case"vector2":case"vector3":case"vector4":return yr;case"color":return Kh;case"quaternion":return br;case"bool":case"boolean":return zs;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Bv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Ov(i.type);if(i.times===void 0){const e=[],n=[];Zh(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const zu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class zv{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const kv=new zv;class rl{constructor(t){this.manager=t!==void 0?t:kv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}rl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Vv extends rl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=zu.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=mr("img");function c(){u(),zu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Gv extends rl{constructor(t){super(t)}load(t,e,n,s){const r=new Ye,o=new Vv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class jh extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Hv extends jh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ta=new ce,ku=new L,Vu=new L;class Wv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kc,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(ku),Vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vu),e.updateMatrixWorld(),Ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Xv extends Wv{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gu extends jh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Xv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qv{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){Jn.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;Jn.multiplyQuaternionsFlat(t,o,t,e,t,n),Jn.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const ol="\\[\\]\\.:\\/",Yv=new RegExp("["+ol+"]","g"),al="[^"+ol+"]",$v="[^"+ol.replace("\\.","")+"]",Zv=/((?:WC+[\/:])*)/.source.replace("WC",al),Jv=/(WCOD+)?/.source.replace("WCOD",$v),Kv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),jv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),Qv=new RegExp("^"+Zv+Jv+Kv+jv+"$"),tx=["material","materials","bones","map"];class ex{constructor(t,e,n){const s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Me{constructor(t,e,n){this.path=e,this.parsedPath=n||Me.parseTrackName(e),this.node=Me.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Me.Composite(t,e,n):new Me(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yv,"")}static parseTrackName(t){const e=Qv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);tx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Me.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Me.Composite=ex;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class nx{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:_s,endingEnd:_s};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=of,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Yc:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case qc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===af;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===Sh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=vs,s.endingEnd=vs):(t?s.endingStart=this.zeroSlopeAtStart?vs:_s:s.endingStart=So,e?s.endingEnd=this.zeroSlopeAtEnd?vs:_s:s.endingEnd=So)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const ix=new Float32Array(1);class sx extends Ji{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=e&&e._propertyBindings[h].binding.parsedPath;g=new qv(Me.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const h=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Jh(new Float32Array(2),new Float32Array(2),1,ix),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?Lc.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=qc),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new nx(this,o,e,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?Lc.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Hu=new ce;class Wu{constructor(t,e,n=0,s=1/0){this.ray=new Lo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hu),this}intersectObject(t,e=!0,n=[]){return Dc(t,this,n,e),n.sort(Xu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Dc(t[s],this,n,e);return n.sort(Xu),n}}function Xu(i,t){return i.distance-t.distance}function Dc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Dc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);const Er=`
float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x){
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p *= 2.03; a *= 0.5; } return s; }
`;let Gi=null;function rx(){return Gi||(Gi=new Vh(new Uint8Array([120,160,205,238,255]),5,1,Gc),Gi.minFilter=Gi.magFilter=dn,Gi.needsUpdate=!0,Gi)}function re(i,{map:t=null,grain:e=6,grainAmt:n=.12,tint:s="#9a86c4",rim:r=0,form:o=0,side:a=pi,transparent:c=!1,opacity:l=1}={}){const u=new Iv({color:i,map:t,gradientMap:rx(),side:a,transparent:c,opacity:l});return u.onBeforeCompile=h=>{Object.assign(h.uniforms,{uTint:{value:new Jt(s)},uGrain:{value:e},uGrainAmt:{value:n},uRim:{value:r},uRimCol:{value:new Jt("#ffb98a")},uForm:{value:o}}),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <project_vertex>",`#include <project_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP; uniform vec3 uTint; uniform float uGrain; uniform float uGrainAmt; uniform float uRim; uniform vec3 uRimCol; uniform float uForm;
${Er}`).replace("#include <dithering_fragment>",`
#include <dithering_fragment>
{
  vec3 col = gl_FragColor.rgb;
  float shade = dot(col, vec3(0.333)) / max(dot(diffuseColor.rgb, vec3(0.333)), 0.01);
  float t = smoothstep(0.95, 0.45, shade);
  col = mix(col, col * mix(vec3(1.0), uTint * 1.6, 0.6), t);          // 그림자는 라벤더로
  col *= 1.0 - uGrainAmt * 0.5 + uGrainAmt * fbm(vWP * uGrain);       // 물감 얼룩
  col *= 0.97 + 0.05 * vnoise(vWP * uGrain * 9.0);                    // 종이결
  vec3 vn = normalize(normal);
  float rim = 1.0 - abs(dot(vn, normalize(vViewPosition)));
  col *= 1.0 - 0.14 * smoothstep(0.55, 1.0, rim);                       // 가장자리 물감 고임
  col *= 1.0 + uForm * (0.12 * vn.y - 0.12 * smoothstep(0.4, 0.95, rim)); // 둥근 덩어리감
  col += uRimCol * uRim * smoothstep(0.62, 1.0, rim) * (0.6 + 0.4 * vn.y); // 노을 역광 테두리
  gl_FragColor.rgb = col;
}`)},u}const Aa=new Map;function Qh(i="#7a5646",t=.008,e=12){const n=`${i}|${t}|${e}`;if(Aa.has(n))return Aa.get(n);const s=new Le({color:i,side:rn});return s.onBeforeCompile=r=>{r.uniforms.uThick={value:t},r.uniforms.uFreq={value:e},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uThick; uniform float uFreq;
${Er}`).replace("#include <begin_vertex>",`
#include <begin_vertex>
float wob = vnoise(position * uFreq);
transformed += normal * uThick * (0.4 + 1.2 * wob);`)},Aa.set(n,s),s}function pn(i,t,e,n){const s=new mt(i.geometry,Qh(t,e,n));return s.name=`${i.name||"mesh"}-outline`,i.add(s),i}function ox(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);e.addColorStop(0,"rgba(110,70,90,0.5)"),e.addColorStop(1,"rgba(110,70,90,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Kn(i);return n.colorSpace=Re,n}function td(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#e9e2f0",t.fillRect(0,0,256,256);let e=11;const n=()=>(e=e*16807%2147483647)/2147483647;for(let r=0;r<4;r++)t.fillStyle="rgba(126, 168, 196, 0.38)",t.fillRect(r*64+14,0,26,256),t.fillStyle="rgba(240, 160, 140, 0.34)",t.fillRect(0,r*64+14,256,26);for(let r=0;r<1600;r++)t.fillStyle=`rgba(110, 80, 90, ${n()*.05})`,t.fillRect(n()*256,n()*256,1+n()*2,1);const s=new Kn(i);return s.colorSpace=Re,s.wrapS=s.wrapT=dr,s.anisotropy=4,s}function ax(i=20261115){let t=i>>>0;const e=()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296,n=c=>({t0:c,d:6.5+e()*3,s:.42+.58*Math.pow(e(),.8),seed:1+e()*40});let s=n(.5),r=n(s.t0+s.d*(.75+e()*.2));const o=c=>(c=Math.min(1,Math.max(0,c)),Math.pow(Math.sin(Math.PI*Math.pow(c,.7)),1.3));let a=0;return{at(c){for(;(c-s.t0)/s.d>1.12;)s=r,r=n(s.t0+s.d*(.75+e()*.2)),a++;const l=(c-s.t0)/s.d,u=(c-r.t0)/r.d;return{a:[l,s.s,s.seed],b:[u,r.s,r.seed],wash:Math.max(s.s*o(l),r.s*o(u)),count:a,period:s.d,strength:s.s}}}}const ed=`
uniform vec3 uWA, uWB; uniform float uTime;
float wshape(float p){ p = clamp(p, 0.0, 1.0); return pow(sin(3.14159265 * pow(p, 0.7)), 1.3); }
float wreach(vec3 w, float x, float lag){
  float n = vnoise(vec3(x * 0.0045, w.z, 2.0)) - 0.5;          // 해안선을 따라 도착 시간·높이가 조금씩 다름
  return w.y * wshape(w.x - lag - n * 0.14) * (50.0 + 44.0 * n);
}
float restLine(float x){ return 690.0 + (vnoise(vec3(x * 0.006, 1.0, 0.0)) - 0.5) * 24.0 + sin(x * 0.013 + uTime * 0.4) * 4.0; }
float frontY(float x, float lag){ return restLine(x) + max(wreach(uWA, x, lag), wreach(uWB, x, lag)); }   // 최대 약 778 (마른 모래 기준선 800 미만)
`,nd=i=>typeof window!="undefined"&&window.__ASSETS&&window.__ASSETS[i]||"./"+i,je={w:1536,h:1024,horizon:355,focusX:768},cx=800,Ae={x0:-256,w:2048,y0:640,h:512},id=`
${Er}
vec3 toLin(vec3 c){ return pow(c, vec3(2.2)); }
vec3 over(vec3 base, vec4 c){ return mix(base, c.rgb, c.a); }
vec4 layerM(sampler2D t, vec2 P, float top, float h){      // 그림 좌우 바깥은 거울처럼 이어 붙임(하늘에서 볼 때 바다가 끊기지 않게)
  vec2 uv = vec2(P.x / 1536.0, 1.0 - (P.y - top) / h);
  if (uv.y < 0.0 || uv.y > 1.0) return vec4(0.0);
  uv.x = abs(mod(uv.x + 1.0, 2.0) - 1.0);
  return texture2D(t, vec2(clamp(uv.x, 0.002, 0.998), clamp(uv.y, 0.004, 0.996)));
}
vec4 layer(sampler2D t, vec2 P, float top, float h){
  vec2 uv = vec2(P.x / 1536.0, 1.0 - (P.y - top) / h);
  if (uv.y < 0.0 || uv.y > 1.0) return vec4(0.0);
  return texture2D(t, vec2(clamp(uv.x, 0.002, 0.998), clamp(uv.y, 0.004, 0.996)));   // 그림 밖(좌우)은 가장자리 색을 이어 씀
}
`,lx=`
uniform sampler2D tSky; uniform vec2 uRes; uniform vec4 uView; uniform float uS, uDpr, uTime; uniform vec3 uSky;
${id}
void main(){
  vec2 fc = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr;
  vec2 c = uView.xy * 0.5;
  vec2 P = ((c + (fc - c) / uSky.y) - uView.zw) / uS + vec2(uSky.x, 0.0);
  P.x += (vnoise(vec3(P.y * 0.05, 3.0, 1.0)) - 0.5) * 14.0 * step(1536.0, max(P.x, 1536.0 - P.x));   // 그림 밖은 살짝 흔들어 줄무늬가 덜 보이게
  vec3 col = layer(tSky, vec2(P.x, min(P.y, 418.0)), 0.0, 420.0).rgb;
  // 천천히 흐르는 엷은 구름과 해 주변의 빛 번짐
  float cl = fbm(vec3(P.x * 0.0035 + uTime * 0.012, P.y * 0.011, 2.0 + uTime * 0.006));
  float wisp = smoothstep(0.5, 0.78, cl) * smoothstep(350.0, 250.0, P.y) * smoothstep(-40.0, 90.0, P.y);
  col = mix(col, toLin(vec3(1.0, 0.9, 0.86)), wisp * 0.42);
  float sd = length((P - vec2(1000.0, 232.0)) * vec2(1.0, 1.15));
  float rays = 0.75 + 0.25 * sin(atan(P.y - 232.0, P.x - 1000.0) * 14.0 + uTime * 0.15);
  col += toLin(vec3(1.0, 0.8, 0.5)) * (0.5 * exp(-sd / 70.0) + 0.22 * exp(-sd / 260.0) * rays);
  gl_FragColor = vec4(col, 1.0);
}`,ux=`
uniform sampler2D tSky, tSea, tWaves, tSand, tMap;
uniform vec2 uRes; uniform vec4 uView; uniform float uS, uDpr; uniform vec3 uSky; uniform mat4 uRefVP; uniform vec2 uMapPx;
varying vec3 vWP;
${id}
${ed}
void main(){
  float t = uTime;
  // 바닥 점 → 기준 카메라 화면 → 무대 좌표
  vec4 cp = uRefVP * vec4(vWP, 1.0);
  vec2 P;
  if (cp.w > 0.05) { vec2 n = cp.xy / cp.w; P = (vec2((n.x * 0.5 + 0.5) * uView.x, (0.5 - n.y * 0.5) * uView.y) - uView.zw) / uS; }
  else P = vec2(768.0 + vWP.x * 120.0, 4000.0);
  P.y = min(P.y, 4000.0);
  // 하늘(수평선 바로 아래 바다 가장자리가 반투명이라 밑색으로 필요)
  vec2 fc = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr, c = uView.xy * 0.5;
  vec2 Ps = ((c + (fc - c) / uSky.y) - uView.zw) / uS + vec2(uSky.x, 0.0);
  vec3 col = layer(tSky, vec2(Ps.x, min(Ps.y, 418.0)), 0.0, 420.0).rgb;

  // ---- 바다: 잔물결, 윤슬 ----
  float depth = clamp((P.y - 355.0) / 250.0, 0.0, 1.0);
  vec2 flow = vec2(vnoise(vec3(P.x * 0.012, P.y * 0.09, t * 0.25)) - 0.5, vnoise(vec3(P.x * 0.01 + 7.0, P.y * 0.07, t * 0.22)) - 0.5);
  vec4 sea = layerM(tSea, P + flow * vec2(5.0, 2.2) * (0.25 + depth), 330.0, 270.0);
  float path = exp(-pow((P.x - 1000.0) / (18.0 + depth * 60.0), 2.0)) * step(356.0, P.y) * (1.0 - smoothstep(600.0, 700.0, P.y));
  float spark = smoothstep(0.72, 0.92, vnoise(vec3(P.x * 0.18, P.y * 0.5, t * 1.4)));
  sea.rgb = mix(sea.rgb, sea.rgb * toLin(vec3(0.86, 1.0, 1.04)) + toLin(vec3(0.0, 0.07, 0.09)), 0.55 * sea.a);     // 바다색을 더 맑고 깊게
  float wide = exp(-pow((P.x - 1000.0) / (120.0 + depth * 300.0), 2.0)) * step(356.0, P.y);
  sea.rgb += toLin(vec3(1.0, 0.78, 0.5)) * wide * 0.13 * sea.a;
  sea.rgb += toLin(vec3(1.0, 0.92, 0.68)) * path * (0.25 + spark) * 0.8 * sea.a;
  sea.rgb += toLin(vec3(1.0, 0.95, 0.8)) * smoothstep(0.8, 0.95, vnoise(vec3(P.x * 0.09, P.y * 0.45, t * 1.1 + 4.0))) * 0.22 * sea.a * depth;
  col = over(col, sea);
  vec2 Pw = P + vec2((vnoise(vec3(P.y * 0.05, t * 0.4, 3.0)) - 0.5) * 6.0, sin(t * 0.9 + P.x * 0.004) * 2.5);
  col = over(col, layerM(tWaves, Pw, 520.0, 240.0));

  // ---- 모래: 그림 + 그림 아래쪽(카메라 발밑)은 같은 색으로 이어 칠함 + 바닥에 붙은 모래알 ----
  // 그림 좌우 바깥의 모래는 가장자리 띠에서 얼룩지게 가져와 줄무늬가 생기지 않게 한다
  float outX = max(-P.x, P.x - 1536.0);
  vec2 Pn = vec2(P.x, min(P.y, 1020.0));
  if (outX > 0.0) {
    float nx = vnoise(vec3(vWP.xz * 2.3, 6.0)), ny = vnoise(vec3(vWP.xz * 1.9, 8.0));
    Pn.x = P.x < 0.0 ? 6.0 + 70.0 * nx : 1530.0 - 70.0 * nx;
    Pn.y = clamp(Pn.y + (ny - 0.5) * 36.0, 700.0, 1020.0);
  }
  vec4 sand = layer(tSand, Pn, 680.0, 344.0);
  float beyond = smoothstep(1010.0, 1130.0, P.y);
  vec3 plain = toLin(vec3(0.95, 0.72, 0.45)) * (0.92 + 0.16 * fbm(vec3(vWP.xz * 1.7, 4.0)));
  sand.rgb = mix(sand.rgb, plain, beyond * 0.85);
  float grain = vnoise(vec3(vWP.xz * 55.0, 1.0)) * 0.6 + vnoise(vec3(vWP.xz * 140.0, 2.0)) * 0.4;
  sand.rgb *= 0.95 + 0.10 * grain;
  float rip = sin(vWP.z * 26.0 + vnoise(vec3(vWP.xz * 1.6, 3.0)) * 9.0 + vWP.x * 2.0);                          // 바람이 만든 잔 모래결
  sand.rgb *= 1.0 + 0.045 * rip * smoothstep(790.0, 840.0, P.y);
  sand.rgb *= mix(vec3(1.0), toLin(vec3(1.03, 1.0, 0.97)), 0.9);
  sand.rgb *= 0.93 + 0.14 * fbm(vec3(vWP.xz * 0.9, 9.0));                                                      // 넓은 얼룩(햇빛 드는 곳과 살짝 눅은 곳)
  sand.rgb += toLin(vec3(1.0, 0.85, 0.6)) * 0.10 * exp(-pow((P.x - 1000.0) / 420.0, 2.0)) * smoothstep(1024.0, 780.0, P.y);
  sand.rgb += toLin(vec3(1.0, 0.96, 0.85)) * 0.5 * step(0.985, h3(vec3(floor(vWP.xz * 260.0), 1.0))) * (0.5 + 0.5 * sin(t * 2.0 + vWP.x * 40.0));
  col = over(col, sand);

  // ---- 모래 상태 지도 ----
  vec2 muv = vec2((P.x - ${Ae.x0.toFixed(1)}) / ${Ae.w.toFixed(1)}, (P.y - ${Ae.y0.toFixed(1)}) / ${Ae.h.toFixed(1)});
  float inMap = step(0.0, muv.x) * step(muv.x, 1.0) * step(0.0, muv.y) * step(muv.y, 1.0);
  vec4 m = texture2D(tMap, muv) * inMap;
  float wet = smoothstep(0.02, 0.75, m.r) * smoothstep(668.0, 690.0, P.y);
  // 파인 자국: 홈 안쪽은 어둡게, 해를 등진 벽은 그늘, 해를 보는 벽은 밝게
  float gU = texture2D(tMap, muv - vec2(0.0, uMapPx.y * 1.5)).g, gD = texture2D(tMap, muv + vec2(0.0, uMapPx.y * 1.5)).g;
  float gL = texture2D(tMap, muv - vec2(uMapPx.x * 1.5, 0.0)).g, gR = texture2D(tMap, muv + vec2(uMapPx.x * 1.5, 0.0)).g;
  float slope = (gD - gU) + 0.35 * (gL - gR);
  col *= 1.0 - 0.34 * smoothstep(0.05, 0.9, m.g) * inMap;
  col *= 1.0 - 0.55 * clamp(slope, 0.0, 1.0) * inMap;
  col += toLin(vec3(1.0, 0.9, 0.72)) * 0.3 * clamp(-slope, 0.0, 1.0) * inMap;

  // ---- 젖은 모래: 어둡고, 해 쪽으로 반사광 ----
  col *= mix(vec3(1.0), toLin(vec3(0.78, 0.71, 0.76)), wet * 0.72);
  col = mix(col, toLin(vec3(0.99, 0.74, 0.70)), wet * 0.16 * smoothstep(800.0, 690.0, P.y));   // 젖은 모래에 비친 노을
  float refl = exp(-pow((P.x - 1000.0 + (P.y - 700.0) * 0.35) / (60.0 + (P.y - 690.0) * 0.5), 2.0)) * wet;
  refl *= 0.45 + 0.55 * vnoise(vec3(P.x * 0.05, P.y * 0.4, t * 0.7));
  col += toLin(vec3(1.0, 0.86, 0.62)) * refl * 0.5;
  col += toLin(vec3(1.0, 0.9, 0.8)) * 0.05 * wet * smoothstep(0.55, 0.8, vnoise(vec3(P.x * 0.3, P.y * 0.8, 5.0)));   // 젖은 모래의 잔 반짝임

  // ---- 밀려오는 물과 포말 (두 겹) ----
  float e1 = frontY(P.x, 0.0), e2 = restLine(P.x) - 6.0 + 0.88 * (frontY(P.x, 0.11) - restLine(P.x));
  float shallow = smoothstep(e1 + 2.0, e1 - 12.0, P.y) * smoothstep(672.0, 696.0, P.y);
  float lagoon = smoothstep(585.0, 690.0, P.y) * smoothstep(e1 + 2.0, e1 - 14.0, P.y);                           // 물가의 맑은 옥빛
  col = mix(col, toLin(vec3(0.50, 0.86, 0.83)), lagoon * 0.34);
  float ca = abs(vnoise(vec3(P.x * 0.07 + t * 0.3, P.y * 0.2, t * 0.5)) - 0.5); ca = smoothstep(0.06, 0.0, ca);
  col += toLin(vec3(0.9, 1.0, 0.95)) * ca * 0.16 * lagoon;
  col = mix(col, col * toLin(vec3(0.78, 0.96, 0.96)) + toLin(vec3(0.05, 0.10, 0.10)), shallow * 0.7);
  float lacy1 = fbm(vec3(P.x * 0.06, P.y * 0.14, t * 0.45));
  float front1 = smoothstep(5.0 + 7.0 * lacy1, 0.0, abs(P.y - e1 + 3.0)) * smoothstep(0.36, 0.62, lacy1 + 0.18 + 0.12 * sin(P.x * 0.03 + t * 0.9));
  float lacy2 = fbm(vec3(P.x * 0.05 + 9.0, P.y * 0.12, t * 0.4));
  float front2 = smoothstep(4.0 + 6.0 * lacy2, 0.0, abs(P.y - e2 + 2.0)) * smoothstep(0.4, 0.66, lacy2 + 0.14) * 0.7;
  float bub = smoothstep(0.62, 0.72, vnoise(vec3(P.x * 0.35, P.y * 0.6, t * 0.3))) * smoothstep(e1 - 28.0, e1 - 2.0, P.y) * smoothstep(e1 + 2.0, e1 - 10.0, P.y) * 0.5;
  float foam = clamp(front1 + front2 + bub, 0.0, 1.0) * step(660.0, P.y);
  col = mix(col, toLin(vec3(1.0, 0.98, 0.94)), foam * 0.88);
  col = mix(col, col * toLin(vec3(1.0, 0.93, 0.95)), smoothstep(10.0, 0.0, abs(P.y - e1 - 6.0)) * 0.3);
  gl_FragColor = vec4(col, 1.0);
}`,hx=`
uniform sampler2D tPrev; uniform float uDt; varying vec2 vUv;
${Er}
${ed}
void main(){
  vec2 P = vec2(${Ae.x0.toFixed(1)} + vUv.x * ${Ae.w.toFixed(1)}, ${Ae.y0.toFixed(1)} + vUv.y * ${Ae.h.toFixed(1)});
  vec4 prev = texture2D(tPrev, vUv);
  float e1 = frontY(P.x, 0.0);
  float cover = smoothstep(e1 + 3.0, e1 - 5.0, P.y);                     // 지금 물이 덮고 있는가
  float rnd = h3(vec3(P * 0.37, uTime * 7.0));
  // 젖음: 덮이면 1. 마를 때는 8비트 한 칸(1/255)씩, 확률로 내려 아주 느린 속도도 표현
  float dry = uDt / 16.0 * (0.7 + 0.9 * vnoise(vec3(P * 0.03, 3.0)));
  float wet = prev.r - floor(dry * 255.0 + rnd) / 255.0;
  wet = max(wet, cover);
  // 파인 깊이: 물이 덮는 동안 불규칙하게 조금씩 메워짐 (물에 닿은 쪽부터, 여러 번에 걸쳐)
  float crumble = 0.35 + 1.5 * vnoise(vec3(P * 0.11, uTime * 0.35));
  float fill = cover * uDt * 0.2 * crumble;
  float g = prev.g - floor(fill * 255.0 + rnd) / 255.0;
  gl_FragColor = vec4(clamp(wet, 0.0, 1.0), clamp(g, 0.0, 1.0), 0.0, 1.0);
}`;function dx(i,{mapW:t=1024}={}){const e=new Gv;let n=4;const s={done:!1},r=Y=>{const F=e.load(nd(`bg/${Y}.webp`),()=>{--n===0&&(s.done=!0)});return F.colorSpace=Re,F.minFilter=dn,F.generateMipmaps=!1,F},o=t/4,a=()=>new jn(t,o,{type:Gn,depthBuffer:!1,minFilter:dn,magFilter:dn});let c=a(),l=a();const u={uRes:{value:new st(1,1)},uView:{value:new we(1,1,0,0)},uS:{value:1},uDpr:{value:1},uSky:{value:new L(0,1,0)},uTime:{value:0},uWA:{value:new L(-1,0,1)},uWB:{value:new L(-1,0,2)}},h={value:r("sky")},d=new mt(new ze(2,2),new xn({uniforms:{tSky:h,...u},depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:lx}));d.frustumCulled=!1,d.renderOrder=-100;const f={tSky:h,tSea:{value:r("sea")},tWaves:{value:r("waves")},tSand:{value:r("sand")},tMap:{value:c.texture},uRefVP:{value:new ce},uMapPx:{value:new st(1/t,1/o)},...u},g=new Ue,_=400,m=-900,p=40;g.setAttribute("position",new fn(new Float32Array([-_,0,m,_,0,m,-_,0,p,_,0,p]),3)),g.setIndex([0,2,1,1,2,3]);const M=new mt(g,new xn({uniforms:f,vertexShader:"varying vec3 vWP; void main(){ vWP = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vWP, 1.0); }",fragmentShader:ux}));M.frustumCulled=!1,M.renderOrder=-50;const y=new Eo,x=new Do(-1,1,1,-1,0,1),I={tPrev:{value:null},uDt:{value:.1},uTime:u.uTime,uWA:u.uWA,uWB:u.uWB},R=new mt(new ze(2,2),new xn({uniforms:I,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:hx}));R.frustumCulled=!1,y.add(R);const E=new Eo,C=new xn({uniforms:{tStamp:{value:null},uAmt:{value:1}},depthTest:!1,depthWrite:!1,transparent:!0,side:Fe,blending:lh,blendEquation:hi,blendSrc:Ba,blendDst:Ba,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4((modelMatrix * vec4(position, 1.0)).xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D tStamp; uniform float uAmt; varying vec2 vUv; void main(){ gl_FragColor = vec4(0.0, texture2D(tStamp, vUv).a * uAmt, 0.0, 0.0); }"}),S=new mt(new ze(1,1),C);S.frustumCulled=!1,E.add(S);let v=!1,T=0;function U(Y){const F=i.getRenderTarget(),j=i.autoClear;if(!v){for(const tt of[c,l])i.setRenderTarget(tt),i.setClearColor(0,1),i.clear();v=!0}I.tPrev.value=c.texture,I.uDt.value=Y,i.setRenderTarget(l),i.render(y,x),[c,l]=[l,c],f.tMap.value=c.texture,i.setRenderTarget(F),i.autoClear=j}function D(Y,F,j,tt,et,It=1,Vt=!1){C.blendEquation=Vt?uh:hi;const $=new Kn(Y);$.flipY=!0,C.uniforms.tStamp.value=$,C.uniforms.uAmt.value=It;const rt=(F-Ae.x0)/Ae.w,Mt=(j-Ae.y0)/Ae.h;S.position.set(rt*2-1,Mt*2-1,0),S.scale.set(tt/Ae.w*2,-(et/Ae.h)*2,1);const pt=i.getRenderTarget(),zt=i.autoClear;i.autoClear=!1,i.setRenderTarget(c),i.render(E,x),i.setRenderTarget(pt),i.autoClear=zt,$.dispose()}function z(Y=Ae.x0,F=Ae.y0,j=Ae.w,tt=Ae.h){const et=Math.max(0,Math.floor((Y-Ae.x0)/Ae.w*t)),It=Math.max(0,Math.floor((F-Ae.y0)/Ae.h*o)),Vt=Math.max(1,Math.min(t-et,Math.round(j/Ae.w*t))),$=Math.max(1,Math.min(o-It,Math.round(tt/Ae.h*o))),rt=new Uint8Array(Vt*$*4);i.readRenderTargetPixels(c,et,It,Vt,$,rt);let Mt=0,pt=0;for(let Xt=0;Xt<rt.length;Xt+=4)Mt+=rt[Xt],pt+=rt[Xt+1];const zt=Vt*$*255;return[Mt/zt,pt/zt]}function q(Y,F,j){const tt=Y/F<1;let et,It,Vt,$=0;if(tt)et=F/je.h,It=Y/2-je.focusX*et,Vt=0;else{et=Math.max(Y/je.w,F/je.h);const rt=F/et,Mt=Math.max(0,cx-.93*rt),pt=Math.min(je.h-rt,200,je.horizon-.12*rt);$=Math.min(je.h-rt,Math.max(Mt,Math.min(pt,je.horizon-.2*rt))),It=(Y-je.w*et)/2,Vt=-$*et}return u.uRes.value.set(Math.round(Y*j),Math.round(F*j)),u.uView.value.set(Y,F,It,Vt),u.uS.value=et,u.uDpr.value=j,{portrait:tt,scale:et,tx:It,ty:Vt,horizonFrac:(Vt+je.horizon*et)/F,w:Y,h:F,stageTop:-Vt/et,stageBottom:(F-Vt)/et}}function G(Y,F,j,tt=1){u.uTime.value=Y,u.uWA.value.fromArray(j.a),u.uWB.value.fromArray(j.b),T+=F;let et=0;for(;T>=.1&&et<3*tt;)U(.1),T-=.1,et++;T>.3*tt&&(T=0)}return{sky:d,ground:M,layout:q,update:G,stamp:D,readMap:z,ready:s,shared:u,setRef:Y=>f.uRefVP.value.copy(Y),setSky:(Y,F)=>u.uSky.value.set(Y,F,0),mapSize:[t,o]}}const qu="#7a5646",sd={strawHat:{slot:"head",label:"밀짚모자",build(){const i=new $t;i.name="item:strawHat";const t=re("#ecd096",{grain:30,grainAmt:.22,tint:"#b49ac0",rim:.35}),e=new mt(new Ie(.25,.27,.02,40),t);e.position.y=-.035,e.castShadow=!0,pn(e,qu,.006,20);const n=e.geometry.attributes.position;for(let o=0;o<n.count;o++){const a=Math.hypot(n.getX(o),n.getZ(o));a>.2&&n.setY(o,n.getY(o)-(a-.2)*.35)}e.geometry.computeVertexNormals();const s=new mt(new me(.15,32,16,0,Math.PI*2,0,Math.PI/2),t);s.scale.set(1,.72,.95),s.position.y=-.03,s.castShadow=!0,pn(s,qu,.006,20);const r=new mt(new Ie(.152,.152,.032,40,1,!0),re("#ec8f7c",{grain:12,side:Fe}));return r.position.y=-.012,r.scale.z=.95,i.add(e,s,r),i.rotation.z=.12,i.scale.setScalar(1.35),i}},glasses:{slot:"face",label:"안경",build(){const i=new $t;i.name="item:glasses";const t=re("#8a5a46",{grain:8,rim:.2}),e=new Le({color:"#cfe6ee",transparent:!0,opacity:.22,depthWrite:!1});for(const s of[-1,1]){const r=new mt(new In(.052,.008,10,36),t);r.position.set(s*.092,0,-.012),r.scale.y=.92,i.add(r);const o=new mt(new Hn(.052,28),e);o.position.set(s*.092,0,-.012),o.rotation.y=Math.PI,i.add(o);const a=new mt(new Ie(.005,.005,.17,6),t);a.rotation.x=Math.PI/2,a.position.set(s*.146,0,.07),i.add(a)}const n=new mt(new Ie(.0055,.0055,.06,6),t);return n.rotation.z=Math.PI/2,n.position.set(0,.012,-.014),i.add(n),i}}},fx="#f6db8c",rd="#7c573f",px=[[0,0],[.17,.01],[.27,.05],[.325,.14],[.34,.26],[.33,.38],[.3,.49],[.272,.58],[.262,.65],[.266,.73],[.258,.81],[.232,.89],[.18,.96],[.1,1.01],[0,1.03]];function mx(){const t=new nl(px.map(([a,c])=>new st(a,c))).getPoints(48).map(a=>new st(Math.max(0,a.x),a.y));t[0].x=0,t[t.length-1].x=0;const e=new Li(t,48);e.scale(1,1,.9);const n=e.attributes.position,s=[],r=[],o=(a,c,l)=>{const u=Math.min(1,Math.max(0,(l-a)/(c-a)));return u*u*(3-2*u)};for(let a=0;a<n.count;a++){const c=n.getY(a),l=o(.58,.74,c),u=o(.28,.5,c),h=u-l,d=1-u;s.push(0,1,2,0),r.push(d,h,l,0)}return e.setAttribute("skinIndex",new Jc(s,4)),e.setAttribute("skinWeight",new fe(r,4)),e}function Si(i,t,e,{outline:n=!0,shadow:s=!0}={}){const r=new mt(i,t);return r.name=e,r.castShadow=s,n&&pn(r,rd,.006,16),r}function gx(){const n=[[.338,.29],[.355,.26],[.358,.2],[.362,.13],[.385,.06],[.44,.022],[.52,.01],[.585,.008]],s=c=>{const l=c*(n.length-1),u=Math.min(n.length-2,Math.floor(l)),h=l-u;return[n[u][0]+(n[u+1][0]-n[u][0])*h,n[u][1]+(n[u+1][1]-n[u][1])*h]},r=new ze(1,1,40,18),o=r.attributes.position,a=r.attributes.uv;for(let c=0;c<o.count;c++){const l=a.getX(c),u=1-a.getY(c),h=(l-.5)*2*2,d=Math.abs(l-.5)*2;let[f,g]=s(u);const _=.036*Math.pow(u,1.2)*(Math.sin(h*6+.7)+.45*Math.sin(h*11+2.1));f+=_+.012*Math.sin(h*3.1),u<.12&&(f+=.018*(1-u/.12)),g+=(d*d*.02+(l-.5)*.07)*(1-u),u>.8&&(g=Math.max(.006,g+.006*Math.sin(h*9))),o.setXYZ(c,Math.sin(h)*f,g,-Math.cos(h)*f*.9)}return r.computeVertexNormals(),r}function _x(){const i=new $t;i.name="seal";const t=re(fx,{grain:6,grainAmt:.22,tint:"#c4a0b0",rim:.45,form:1}),e=re("#fbecc4",{grain:9,grainAmt:.1,tint:"#c4a0b0",rim:.3,form:.6}),n=new Le({color:"#3d2c25"}),s=(F,j,tt,et,It)=>{const Vt=new kh;return Vt.name=F,Vt.position.set(j,tt,et),It&&It.add(Vt),Vt},r=s("root",0,0,0),o=s("spine",0,.42,0,r),a=s("head",0,.24,0,o),c=s("armL",-.255,.05,-.05,o),l=s("armR",.255,.05,-.05,o),u=s("footL",-.12,.07,-.22,r),h=s("footR",.12,.07,-.22,r),d=s("book",0,.03,-.37,o);d.scale.setScalar(1.75),a.rotation.x=-.26,d.rotation.x=-1.05;const f=mx(),g=new Pu(f,t);g.name="body",g.castShadow=!0,g.add(r);const _=new Qc([r,o,a,c,l,u,h,d]);g.bind(_);const m=new Pu(f,Qh(rd,.0045,14));m.name="body-outline",g.add(m),m.bind(_,g.bindMatrix),i.add(g);const p=new me(.021,14,10);for(const F of[-1,1]){const j=new mt(p,n);j.name=F<0?"eyeL":"eyeR",j.position.set(F*.092,.17,-.212),j.scale.set(1,1.15,.6),a.add(j);const tt=new mt(new Hn(.034,18),new Le({color:"#f2a0a0",transparent:!0,opacity:.45,depthWrite:!1}));tt.position.set(F*.15,.11,-.195),tt.rotation.y=Math.PI+F*-.62,tt.scale.y=.7,a.add(tt);const et=Si(new me(.048,18,12),e,F<0?"muzzleL":"muzzleR",{outline:!1});et.position.set(F*.038,.095,-.222),et.scale.set(1,.85,.7),a.add(et)}const M=new mt(new me(.02,12,8),n);M.name="nose",M.position.set(0,.125,-.252),M.scale.set(1.3,.85,.8),a.add(M);const y=Si(new me(.2,24,16),e,"belly",{outline:!1});y.position.set(0,-.12,-.215),y.scale.set(1.05,1.3,.35),o.add(y);const x=new me(.07,18,12);for(const[F,j]of[[c,-1],[l,1]]){const tt=Si(x,t,`${F.name}-flipper`);tt.scale.set(.8,1.7,.62),tt.position.set(0,-.09,0),F.add(tt),F.rotation.set(1.45,0,j*.3)}const I=new me(.07,18,12);for(const[F,j]of[[u,-1],[h,1]]){const tt=Si(I,t,`${F.name}-flipper`);tt.scale.set(.9,.55,1.5),tt.position.set(0,0,-.06),F.add(tt),F.rotation.set(.15,j*.25,0)}const R=re("#f8efdc",{grain:14,tint:"#b6a6cf",rim:.2}),E=re("#6286a8",{grain:10});for(const F of[-1,1]){const j=new $t,tt=Si(new tn(.15,.2,.024),R,"pages");tt.position.x=F*.08;const et=new mt(new tn(.16,.21,.007),E);et.position.set(F*.082,0,-.016),et.castShadow=!0,j.add(tt,et),j.rotation.y=F*-.4,d.add(j)}const C=(F,j,tt,et,It,Vt=0)=>{const $=new De;return $.name=`slot:${F}`,$.position.set(tt,et,It),$.rotation.x=Vt,j.add($),$},S={head:C("head",a,0,.345,0,.08),face:C("face",a,0,.17,-.22),neck:C("neck",o,0,.2,0),back:C("back",o,0,0,.27),hand:C("hand",d,0,0,0)},v=new In(.024,.0062,6,16,Math.PI),T=[-1,1].map(F=>{const j=new mt(v,n);return j.name=F<0?"lidL":"lidR",j.position.set(F*.092,.162,-.216),j.rotation.y=Math.PI,j.visible=!1,a.add(j),j}),U=new $t;U.name="mug";{const F=Si(new Ie(.05,.043,.095,18),re("#fbf3e6",{grain:30}),"mug-cup");U.add(F);const j=new mt(new Ie(.0515,.048,.026,18,1,!0),re("#6fb0c6",{grain:20}));U.add(j);const tt=Si(new In(.026,.008,6,12,Math.PI),re("#fbf3e6"),"mug-handle");tt.position.x=.05,tt.rotation.z=-Math.PI/2,U.add(tt);const et=new mt(new Hn(.045,16),new Le({color:"#9a6240"}));et.rotation.x=-Math.PI/2,et.position.y=.042,U.add(et)}U.position.set(0,-.2,-.04),U.rotation.set(-2.3,0,0),U.visible=!1,l.add(U);const D=new $t;D.name="leaf",D.rotation.y=-.4,d.add(D);{const F=Si(new tn(.145,.195,.004),R,"leaf-page");F.position.set(.078,0,.015),D.add(F)}D.visible=!1;const z=td();z.repeat.set(2.2,1.4);const q=new mt(gx(),re("#ffffff",{map:z,grain:5,tint:"#a08ac8",rim:.2,side:Fe}));q.name="blanket",q.castShadow=!0,q.receiveShadow=!0,q.visible=!1,r.add(q);const G=sd.glasses.build();G.visible=!1,S.face.add(G);const Y=[a.getObjectByName("eyeL"),a.getObjectByName("eyeR")];return{group:i,body:g,skeleton:_,bones:{root:r,spine:o,head:a,armL:c,armR:l,footL:u,footR:h,book:d},slots:S,extras:{lids:T,eyes:Y,mug:U,leaf:D,blanket:q,glasses:G}}}const Yu=30,od=i=>i<=0?0:i>=1?1:i*i*i*(i*(i*6-15)+10),zn=(i,t,e)=>od((i-t)/(e-t)),Te=(i,t,e,n,s)=>zn(i,t,e)*(1-zn(i,n,s)),ho=(i,t,e=9,n=5)=>i<t?0:Math.exp(-(i-t)*n)*Math.sin((i-t)*e),gs=(i,t,e)=>Math.exp(-(((i-t)/e)**2)),er=new Jn,vx=new Qn;function Xn(i,t,e){const n=Math.round(t*Yu)+1,s=Array.from({length:n},(a,c)=>c/Yu),r=[];for(const[a,c]of Object.entries(e)){const l=a.split(".").pop(),u=[];for(const h of s){const d=c(h);l==="quaternion"?(er.setFromEuler(vx.set(d[0]||0,d[1]||0,d[2]||0)),u.push(er.x,er.y,er.z,er.w)):u.push(d[0]||0,d[1]||0,d[2]||0)}r.push(l==="quaternion"?new br(a,s,u):new yr(a,s,u))}const o=new Lc(i,t,r);return o.blendMode=Yc,o}const nr=i=>({"book.position":t=>[0,-.11*i(t),.1*i(t)],"book.quaternion":t=>[-.45*i(t),0,.12*i(t)]}),Ra={read:{loop:!0,clip:()=>{const t=e=>.5-.5*Math.cos(e*2*Math.PI/3.6);return Xn("read",7.2,{"spine.scale":e=>[.008*t(e),.02*t(e),.012*t(e)],"head.quaternion":e=>[.03*Math.sin(e*2*Math.PI/7.2),.05*Math.sin(e*2*Math.PI/7.2+1.2),.02*Math.sin(e*2*Math.PI/7.2+.4)],"book.position":e=>[0,.005*t(e),0]})}},page:{D:1.9,show:{leaf:[.35,1.45]},cues:[[.45,"page"]],clip:()=>{const t=n=>Te(n,.05,.4,1.25,1.75),e=n=>zn(n,.4,1.2);return Xn("page",1.9,{"armR.quaternion":n=>[.25*t(n),0,-.15*t(n)-.55*e(n)*t(n)],"leaf.quaternion":n=>[0,-2.3*zn(n,.42,1.25)-.08*ho(n,1.25,14,7),0],"head.quaternion":n=>[.03*t(n),(-.1+.22*e(n))*t(n),.04*Math.sin(Math.PI*e(n))],"spine.quaternion":n=>[0,.05*Math.sin(Math.PI*e(n)),0],"book.quaternion":n=>[.05*gs(n,.5,.15),0,0]})}},coffee:{D:3.8,eyes:i=>Te(i,1.15,1.35,2.5,2.75),show:{mug:[.2,3.45]},cues:[[1.25,"sip"],[2.6,"ahh"],[3.35,"clink"]],clip:()=>{const t=s=>Te(s,0,.5,3.1,3.7),e=s=>Te(s,.35,1.1,2.7,3.4),n=s=>Te(s,1.05,1.35,2.3,2.7);return Xn("coffee",3.8,{...nr(t),"armR.quaternion":s=>[.95*e(s)+.15*n(s),0,-.5*e(s)],"armL.quaternion":s=>[-.25*t(s),0,0],"head.quaternion":s=>[.34*e(s)+.12*n(s)-.05*gs(s,1.6,.1),-.06*e(s),.05*n(s)],"spine.quaternion":s=>[.06*n(s),0,0],"spine.scale":s=>[.02*gs(s,2.65,.2),-.035*gs(s,2.65,.2),.02*gs(s,2.65,.2)]})}},sea:{D:6.4,sleepy:!0,eyes:i=>.55*Te(i,2.4,2.8,3.7,4.1),cues:[[.3,"breeze"]],clip:()=>{const t=e=>Te(e,.25,1.9,4.6,6.2);return Xn("sea",6.4,{"head.quaternion":e=>[.42*t(e)+.03*Math.sin(e*1.3)*t(e),.95*t(e),-.06*t(e)],"spine.quaternion":e=>[.04*t(e),.45*t(e),0],"root.quaternion":e=>[0,.12*t(e),0],"spine.scale":e=>[0,.03*gs(e,3.2,.5),0],...nr(e=>.6*t(e))})}},stretch:{D:3.9,eyes:i=>Te(i,.5,.8,2.6,2.9),cues:[[.5,"stretch"],[2.55,"plop"]],clip:()=>{const t=s=>Te(s,.45,1.15,2.4,2.75),e=s=>Te(s,0,.4,.45,.75),n=s=>Te(s,1.15,1.35,2.2,2.4)*Math.sin(s*38);return Xn("stretch",3.9,{...nr(s=>Te(s,.1,.55,2.9,3.6)),"spine.scale":s=>[-.03*t(s)+.03*e(s)+.04*ho(s,2.6,16,6),.09*t(s)-.04*e(s)-.05*ho(s,2.6,16,6),0],"root.position":s=>[0,.02*t(s)+.025*Math.max(0,ho(s,2.6,13,6)),0],"armL.quaternion":s=>[1.3*t(s)+.05*n(s),0,-1.2*t(s)],"armR.quaternion":s=>[1.3*t(s)-.05*n(s),0,1.2*t(s)],"head.quaternion":s=>[.4*t(s)-.08*e(s),0,.03*n(s)],"footL.quaternion":s=>[-.35*t(s),0,0],"footR.quaternion":s=>[-.35*t(s),0,0]})}},doze:{D:6.6,sleepy:!0,eyes:i=>zn(i,.4,1.3)*(1-zn(i,4.15,4.25)),cues:[[1,"snore"],[4.15,"wake"]],clip:()=>{const t=s=>.22*Te(s,1,1.9,2,2.4)+.36*Te(s,2.6,3.6,4.1,4.3)+.06*Te(s,.3,.9,3.8,4.2),e=s=>s<4.12?0:Math.exp(-(s-4.12)*3.5)*Math.cos((s-4.12)*9)*(1-zn(s,5.4,6.2)),n=s=>Te(s,4.5,4.7,5.3,5.6)*Math.sin((s-4.5)*17);return Xn("doze",6.6,{"head.quaternion":s=>[-t(s)+.14*Math.max(0,e(s)),.22*n(s),.06*Te(s,1,2,3.8,4.2)],"spine.quaternion":s=>[-.35*t(s),0,0],"book.position":s=>[0,-.06*t(s)/.36*(s<4.2?1:0),0],"book.quaternion":s=>[.4*t(s),0,0],"root.position":s=>[0,.05*Math.max(0,e(s)),0],"spine.scale":s=>[0,.05*Math.max(0,e(s)),0],"armL.quaternion":s=>[-.25*t(s)+.3*Math.max(0,e(s)),0,-.25*Math.max(0,e(s))],"armR.quaternion":s=>[-.25*t(s)+.3*Math.max(0,e(s)),0,.25*Math.max(0,e(s))],"eyeL.scale":s=>[.25*Math.max(0,e(s)),.45*Math.max(0,e(s)),0],"eyeR.scale":s=>[.25*Math.max(0,e(s)),.45*Math.max(0,e(s)),0]})}},clap:{D:3,eyes:i=>Te(i,.45,.6,2.3,2.5),cues:[[.62,"pat"],[.98,"pat"],[1.34,"pat"],[1.7,"pat"],[.55,"coo"]],clip:()=>{const t=n=>Te(n,.1,.5,2.1,2.7),e=n=>n>.45&&n<1.9?.5-.5*Math.cos((n-.45)*Math.PI*2/.36):0;return Xn("clap",3,{...nr(t),"armL.quaternion":n=>[.3*t(n),0,(.7+.8*e(n))*t(n)],"armR.quaternion":n=>[.3*t(n),0,-(.7+.8*e(n))*t(n)],"root.position":n=>[0,.018*e(n)*t(n),0],"spine.scale":n=>[.015*e(n)*t(n),-.02*e(n)*t(n),0],"head.quaternion":n=>[.22*t(n),-.5*t(n),.1*Math.sin(n*5)*t(n)]})}},hello:{D:3,eyes:i=>Te(i,.9,1,2,2.1),cues:[[.35,"coo"],[.5,"flap"]],clip:()=>{const t=n=>Te(n,.1,.55,2.3,2.85),e=n=>Te(n,0,.45,2.4,2.95);return Xn("hello",3,{"armR.quaternion":n=>[1.5*t(n),0,.85*t(n)+.4*t(n)*Math.sin(Math.max(0,n-.5)*12)],"head.quaternion":n=>[.2*e(n),-.85*e(n),.14*e(n)*Math.sin(Math.max(0,n-.3)*4.5)],"spine.quaternion":n=>[0,-.25*e(n),.05*t(n)],"spine.scale":n=>[0,.02*t(n),0]})}},write:{D:3.2,cues:[[.6,"scratch"]],clip:()=>{const t=n=>Te(n,.1,.65,2.5,3.1),e=n=>Te(n,.6,.75,2.3,2.5);return Xn("write",3.2,{...nr(t),"root.quaternion":n=>[-.28*t(n),-.35*t(n),0],"spine.quaternion":n=>[-.25*t(n),0,0],"head.quaternion":n=>[-.2*t(n),0,.05*Math.sin(n*7)*e(n)],"armR.quaternion":n=>[-.55*t(n)+.12*Math.sin(n*15)*e(n),0,-.2*t(n)+.25*Math.sin(n*9.5)*e(n)]})}},startle:{D:2.2,cues:[],clip:()=>{const i=e=>e<.12?od(e/.12):Math.exp(-(e-.12)*3.2)*Math.cos((e-.12)*11)*(1-zn(e,1.6,2.2)),t=e=>zn(e,0,.1)*(1-zn(e,.9,1.9));return Xn("startle",2.2,{"root.position":e=>[0,.045*Math.max(0,i(e)),0],"spine.scale":e=>[-.02*t(e),.045*Math.max(0,i(e)),0],"head.quaternion":e=>[.16*t(e),0,.08*Math.sin(e*9)*(1-zn(e,.4,1.4))*t(e)],"eyeL.scale":e=>[.3*t(e),.45*t(e),0],"eyeR.scale":e=>[.3*t(e),.45*t(e),0]})}}};function xx(i,{onCue:t}={}){const e=new sx(i),n={};for(const[l,u]of Object.entries(Ra)){const h=e.clipAction(u.clip());h.blendMode=Yc,u.loop||(h.setLoop(Sh,1),h.clampWhenFinished=!1),n[l]=h}n.read.play();let s=null,r=0,o=0,a=1;const c={eyes:0,show:{}};return{mixer:e,actions:n,state:c,play(l){const u=Ra[l];if(!u||u.loop)return!1;s&&s!==l&&n[s].fadeOut(.35);const h=n[l];return h.reset(),h.setEffectiveWeight(1),h.fadeIn(s&&s!==l?.3:.12),h.play(),s=l,r=0,o=0,!0},get current(){return s},get time(){return r},isPlaying:l=>s===l,update(l){if(s){const u=Ra[s];r+=l;const h=u.cues||[];for(;o<h.length&&h[o][0]<=r;)t==null||t(h[o][1],s),o++;c.eyes=u.eyes?u.eyes(r):0,c.sleepy=!!u.sleepy,c.show={};for(const[d,[f,g]]of Object.entries(u.show||{}))c.show[d]=r>=f&&r<=g;r>=u.D&&(s=null,c.eyes=0,c.show={},c.sleepy=!1)}a+=((s?.35:1)-a)*Math.min(1,l*3),n.read.setEffectiveWeight(a),e.update(l)}}}const cl="#8a6250",Ce=(i,t,e={},n=.006)=>{const s=new mt(i,re(t,{grain:14,grainAmt:.16,rim:.25,...e}));return s.castShadow=!0,n&&pn(s,e.line||cl,n,16),s};let $u=11;const Qe=()=>($u=$u*16807%2147483647)/2147483647;function Zu(i="#ee8f78",t="#fbeeda"){const e=new $t;e.name="parasol";const n=Ce(new Ie(.022,.026,2.35,10),"#e9dcc6",{grain:20});n.position.y=1.17,e.add(n);const s=new $t;s.position.y=2.2,e.add(s);const r=10,o=1.32,a=.46;for(let l=0;l<r;l++){const u=new mt(new Bs(o,a,5,1,!0,l/r*Math.PI*2,Math.PI*2/r),re(l%2?t:i,{grain:6,grainAmt:.14,side:Fe,tint:"#a08ac8",rim:.2}));u.castShadow=!0,s.add(u);const h=Ce(new me(.035,8,6),l%2?i:t,{},0),d=(l+.5)/r*Math.PI*2;h.position.set(Math.sin(d)*o*.99,-a/2-.02,Math.cos(d)*o*.99),s.add(h)}const c=Ce(new me(.05,10,8),"#c99662");return c.position.y=a/2+.03,s.add(c),e.userData.top=s,e.rotation.z=.1,e.rotation.x=.06,e}function yx(){const i=new $t;i.name="table";const t={grain:9,grainAmt:.2,tint:"#8a6a9c"},e=Ce(new Ie(.3,.3,.035,24),"#d2a06c",t);e.position.y=.44,i.add(e);for(let h=0;h<3;h++){const d=h/3*Math.PI*2+.4,f=Ce(new Ie(.018,.022,.46,8),"#c08d5c",t,.004);f.position.set(Math.cos(d)*.2,.22,Math.sin(d)*.2),f.rotation.set(Math.sin(d)*.16,0,-Math.cos(d)*.16),i.add(f)}const n=new $t;n.position.set(-.1,.46,.06);const s=Ce(new Ie(.058,.05,.11,20),"#fbf3e6",{grain:30});s.position.y=.055,n.add(s);const r=new mt(new Ie(.0595,.056,.03,20,1,!0),re("#7fb6c9",{grain:20}));r.position.y=.05,n.add(r);const o=Ce(new In(.032,.01,8,14,Math.PI),"#fbf3e6",{},.004);o.position.set(.058,.055,0),o.rotation.z=-Math.PI/2,n.add(o);const a=new mt(new Hn(.052,18),new Le({color:"#b97a4e"}));a.rotation.x=-Math.PI/2,a.position.y=.105,n.add(a);const c=[],l=new Le({color:"#fff6ea",transparent:!0,opacity:.35,depthWrite:!1});for(let h=0;h<4;h++){const d=new mt(new me(.022,8,6),l.clone());d.userData.ph=h/4,n.add(d),c.push(d)}return i.add(n),["#e58f7a","#7fb0bf","#f0cf86"].forEach((h,d)=>{const f=Ce(new tn(.2,.034,.145),h,{grain:22},.004);f.position.set(.09,.475+d*.036,-.06),f.rotation.y=.25-d*.22,i.add(f);const g=new mt(new tn(.19,.024,.14),re("#fbf3e0",{grain:30}));g.position.copy(f.position),g.position.x+=.006,g.rotation.y=f.rotation.y,i.add(g)}),i.userData.update=h=>c.forEach(d=>{const f=(h*.22+d.userData.ph)%1;d.position.set(Math.sin(f*6+d.userData.ph*9)*.02,.12+f*.26,0),d.scale.setScalar(.6+f*1.6),d.material.opacity=.36*Math.sin(Math.PI*f)}),i}function Ca(i=!1){const t=new $t;t.name="mat";const e=new ze(1.5,.95,12,8),n=e.attributes.position;for(let c=0;c<n.count;c++)n.setZ(c,.012*Math.sin(n.getX(c)*7)*Math.cos(n.getY(c)*6)+.006*Qe());e.computeVertexNormals();const s=td();s.repeat.set(3,2);const r=new mt(e,re("#ffffff",{map:s,grain:5,tint:"#a08ac8"}));if(r.rotation.x=-Math.PI/2,r.position.y=.012,r.receiveShadow=!0,t.add(r),i)return t;const o=sd.strawHat.build();o.scale.setScalar(1.25),o.position.set(-.38,.1,-.1),o.rotation.set(.06,.6,.05),t.add(o);for(const c of[-1,1]){const l=Ce(new Is(.045,.13,4,10),"#ee8f78",{grain:24},.004);l.rotation.set(Math.PI/2,0,.25*c+.3),l.scale.z=.3,l.position.set(.42+c*.07,.03,.22+c*.02),t.add(l);const u=new mt(new In(.04,.008,6,12,Math.PI),re("#fbf3e6"));u.position.copy(l.position),u.position.y+=.012,u.position.z-=.03,u.rotation.y=.25*c+.3,t.add(u)}const a=new $t;a.position.set(.1,.03,-.15),a.rotation.y=-.4;for(const c of[-1,1]){const l=Ce(new tn(.14,.012,.2),"#7fb0bf",{grain:22},.004);l.position.set(c*.068,.025,0),l.rotation.z=c*.38,a.add(l)}return t.add(a),t}function Pa(){const i=new $t;i.name="castle";const t={grain:40,grainAmt:.3,tint:"#b98a8a",rim:.15},e="#efc58d",n=Ce(new Ie(.3,.36,.16,20),e,t,.005);n.position.y=.08,i.add(n);const s=(p,M,y,x)=>{const I=Ce(new Ie(y*.9,y,x,14),e,t,.005);I.position.set(p,x/2,M),i.add(I);const R=Ce(new Bs(y*1.05,y*1.3,14),"#f3d09c",t,.005);R.position.set(p,x+y*.62,M),i.add(R);for(let E=0;E<6;E++){const C=E/6*Math.PI*2,S=new mt(new tn(y*.3,y*.3,y*.3),re(e,t));S.position.set(p+Math.cos(C)*y*.82,x+y*.08,M+Math.sin(C)*y*.82),S.castShadow=!0,i.add(S)}};s(0,0,.13,.42),s(-.27,.12,.085,.27),s(.27,.1,.085,.25),s(.02,.3,.07,.2);const r=new mt(new Hn(.045,12,0,Math.PI),new Le({color:"#b98c62"}));r.position.set(0,.03,.372),i.add(r);const o=Ce(new Ie(.006,.006,.22,6),"#c99662",{},0);o.position.set(0,.42+.17+.11,0),i.add(o);const a=new ze(.13,.08,6,1);a.translate(.065,0,0);const c=new mt(a,re("#ee8f78",{side:Fe,grain:20}));c.position.set(0,.42+.17+.17,0),c.castShadow=!0,i.add(c);const l=Ce(new Ie(.105,.08,.16,18,1,!0),"#74b9c4",{grain:22,side:Fe});l.position.set(.55,.08,.28),i.add(l);const u=new mt(new Hn(.098,16),re(e,t));u.rotation.x=-Math.PI/2,u.position.set(.55,.14,.28),i.add(u);const h=new mt(new In(.105,.007,6,18,Math.PI),re("#fbf3e6"));h.position.set(.55,.16,.28),h.rotation.x=-.5,i.add(h);const d=new $t;d.position.set(.36,.02,.52),d.rotation.set(0,.9,0);const f=Ce(new Ie(.012,.012,.22,8),"#f2c35f",{},.004);f.rotation.z=Math.PI/2,d.add(f);const g=Ce(new tn(.1,.012,.075),"#f2c35f",{},.004);g.position.x=.15,d.add(g),i.add(d);const _=a.attributes.position,m=Float32Array.from(_.array);return i.userData.update=p=>{for(let M=0;M<_.count;M++){const y=m[M*3];_.setZ(M,Math.sin(y*40-p*5)*.012*(y/.13))}_.needsUpdate=!0},i}function Mx(){const i=document.createElement("canvas");i.width=256,i.height=64;const t=i.getContext("2d");["#ee8f78","#fbf3e6","#74b9c4","#fbf3e6","#f2c35f","#fbf3e6"].forEach((s,r)=>{t.fillStyle=s,t.fillRect(r*256/6,0,256/6+1,64)});const e=new Kn(i);e.colorSpace=Re;const n=new mt(new me(.2,28,18),re("#ffffff",{map:e,grain:8,rim:.3,form:1}));return n.castShadow=!0,pn(n,cl,.006,12),n.rotation.set(.5,.4,.3),n.name="ball",n}function Sx(){const i=new $t;return i.name="rocks",[[0,0,.32,.62],[.42,.12,.2,.6],[-.36,.2,.17,.55],[.15,.36,.12,.5],[-.62,-.05,.1,.6]].forEach(([t,e,n,s],r)=>{const o=new Fo(n,1),a=o.attributes.position;for(let l=0;l<a.count;l++){const u=1+.16*Math.sin(a.getX(l)*23+r)*Math.cos(a.getZ(l)*19+a.getY(l)*13);a.setXYZ(l,a.getX(l)*u,a.getY(l)*u,a.getZ(l)*u)}o.computeVertexNormals();const c=Ce(o,r%2?"#a99aa6":"#b9a79f",{grain:16,grainAmt:.3,tint:"#7d6f9c",rim:.35,form:1},.008);c.scale.y=s,c.position.set(t,n*s*.55,e),c.rotation.y=r*1.3,i.add(c)}),i}function Ju(i="#f08f6f"){const t=new Ls,e=5;for(let o=0;o<e*2;o++){const a=o/(e*2)*Math.PI*2,c=o%2?.045:.13,l=Math.cos(a)*c,u=Math.sin(a)*c;o===0?t.moveTo(l,u):t.lineTo(l,u)}t.closePath();const n=new sl(t,{depth:.025,bevelEnabled:!0,bevelThickness:.015,bevelSize:.018,bevelSegments:3,curveSegments:4}),s=Ce(n,i,{grain:50,grainAmt:.3,rim:.4},.005);s.rotation.x=-Math.PI/2,s.name="starfish";const r=new $t;return r.add(s),r}function fo(i="#f2a9a0"){const t=new $t;t.name="shell";const e=new me(.15,36,14,0,Math.PI*2,0,Math.PI/2),n=e.attributes.position;for(let r=0;r<n.count;r++){const o=n.getX(r),a=n.getZ(r),c=Math.hypot(o,a)||1,l=Math.atan2(a,o),u=1+.11*Math.cos(l*11)*Math.min(1,c/.1);n.setX(r,o*u),n.setZ(r,a*u)}e.computeVertexNormals();const s=Ce(e,i,{grain:28,grainAmt:.25,tint:"#b07ab0",rim:.35,line:"#a4645a"});return s.scale.set(1,.55,.9),t.add(s),t.rotation.set(.12,.5,-.1),t}function Ia(i="#f6dcc4"){const t=[];for(let s=0;s<=14;s++){const r=s/14;t.push(new st(.075*Math.sin(Math.PI*Math.pow(r,.75))*(1+.12*Math.sin(r*30)),r*.24))}const e=Ce(new Li(t,20),i,{grain:30,grainAmt:.25,tint:"#b07ab0",rim:.4,line:"#a4645a"},.005);e.rotation.set(Math.PI/2-.15,0,.4),e.position.y=.06;const n=new $t;return n.add(e),n.name="conch",n}function Ku(i=16,t=.7){const e=new $t;e.name="grass";const n=[],s=["#9db77a","#b7c486","#86a76f","#c9cf93"];for(let r=0;r<i;r++){const o=t*(.55+Qe()*.6),a=new ze(.035,o,1,5);a.translate(0,o/2,0);const c=a.attributes.position;for(let f=0;f<c.count;f++){const g=c.getY(f)/o;c.setX(f,c.getX(f)*(1-g*.92)),c.setZ(f,g*g*.22*o)}a.computeVertexNormals();const l=new mt(a,re(s[r%4],{grain:20,grainAmt:.2,side:Fe,rim:.45,tint:"#6f8a9c"}));l.castShadow=!0;const u=new $t,h=Qe()*Math.PI*2,d=Qe()*.16;u.position.set(Math.cos(h)*d,0,Math.sin(h)*d),u.rotation.y=Qe()*Math.PI*2,u.rotation.x=(Qe()-.3)*.5,u.add(l),e.add(u),n.push([u,u.rotation.x,Qe()*6])}for(let r=0;r<3;r++){const o=new mt(new me(.028,8,6),re(r%2?"#f6b3c2":"#fbe9a6",{rim:.4}));o.position.set((Qe()-.5)*.3,t*(.45+Qe()*.3),(Qe()-.5)*.3),e.add(o)}return e.userData.update=r=>n.forEach(([o,a,c])=>{o.rotation.x=a+Math.sin(r*1.3+c)*.07+Math.sin(r*.37+c*2)*.05}),e}function bx(){var u,h;const i=new $t;i.name="sign";const t=Ce(new Ie(.025,.03,.9,8),"#b98a5e",{grain:12,grainAmt:.2});t.position.set(0,.45,-.045),t.rotation.z=-.05,i.add(t);const e=document.createElement("canvas");e.width=512,e.height=192;const n=e.getContext("2d");n.fillStyle="#e7c49a",n.fillRect(0,0,512,192);for(let d=0;d<40;d++){n.strokeStyle=`rgba(140,96,64,${.05+Qe()*.1})`,n.lineWidth=1+Qe()*2,n.beginPath();const f=Qe()*192;n.moveTo(0,f),n.bezierCurveTo(170,f+Qe()*12-6,340,f+Qe()*12-6,512,f+Qe()*8-4),n.stroke()}const s=n.getImageData(0,0,512,192),r='"Nanum Pen Script", "Gaegu", cursive',o=()=>{n.putImageData(s,0,0),n.save(),n.translate(256,104),n.rotate(-.035),n.textAlign="center",n.textBaseline="middle",n.font=`150px ${r}`,n.globalAlpha=.35,n.fillStyle="#fff3e0",n.fillText("파도서재",2,3),n.globalAlpha=1,n.lineJoin="round",n.lineWidth=3,n.strokeStyle="#5a3424",n.fillStyle="#5a3424",n.fillText("파도서재",0,0),n.strokeText("파도서재",0,0),n.restore()};o();const a=new Kn(e);a.colorSpace=Re,a.anisotropy=4,(h=(u=document.fonts)==null?void 0:u.load)==null||h.call(u,`150px ${r}`,"파도서재").then(()=>{o(),a.needsUpdate=!0}).catch(()=>{});const c=new mt(new tn(.62,.23,.03),[re("#d4ad82"),re("#d4ad82"),re("#d4ad82"),re("#d4ad82"),re("#ffffff",{map:a,grain:8,grainAmt:.1}),re("#d4ad82")]);c.castShadow=!0,c.position.y=.78,c.rotation.z=.04,i.add(c);const l=new mt(new tn(.64,.25,.02),new Le({color:cl}));return l.position.set(0,.78,-.012),l.rotation.z=.04,i.add(l),i}function Ex(i=.045,t="#b3a092"){const e=Ce(new me(i,12,8),t,{grain:30,grainAmt:.2},0);return e.scale.set(1.2,.55,.9),e.position.y=i*.2,e}const wx="#6a4a44",ju=(i,t,e={},n=0)=>{const s=new mt(i,re(t,{grain:16,grainAmt:.12,rim:.35,...e}));return s.castShadow=!0,n&&pn(s,e.line||wx,n,18),s};function Tx(i=.285){const t=new $t,e="#fbf3e6",n="#7fc8c0",s=ju(new In(i,.02,8,28,Math.PI),e);t.add(s);for(const r of[-1,1]){const o=ju(new Ie(i*.32,i*.32,.07,20),n,{},.006);o.rotation.z=Math.PI/2,o.position.set(r*(i+.01),-.01,0),t.add(o)}return t}const ir=[[.266,.07],[.258,.15],[.232,.23],[.18,.3],[.1,.35],[0,.37]],hr="#7c573f";function Xi(i){if(i<=ir[0][1])return ir[0][0];for(let t=1;t<ir.length;t++){const[e,n]=ir[t],[s,r]=ir[t-1];if(i<=n){const o=(i-r)/(n-r);return s+(e-s)*o}}return 0}function ad(i,t,e=.03,n=18){const s=[];for(let r=0;r<=n;r++){const o=r/n,a=i+(.37-i)*o,c=Math.max(0,Xi(a)+t*(1-o*o*.4));s.push(new st(r===n?0:c,a+e*Math.pow(o,3)))}return new Li(s,40)}function cd(i,t=256,e=256,n=[1,1]){const s=document.createElement("canvas");s.width=t,s.height=e,i(s.getContext("2d"),t,e);const r=new Kn(s);return r.colorSpace=Re,r.wrapS=r.wrapT=dr,r.repeat.set(...n),r.anisotropy=4,r}const ll=i=>()=>(i=i*16807%2147483647)/2147483647;function Qu(i,t,e){return cd((n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);const o=16,a=s/o,c=ll(3);for(let l=0;l<o;l++){n.fillStyle=t,n.fillRect(l*a,0,a*.22,r),n.fillStyle=e,n.fillRect(l*a+a*.45,0,a*.22,r);for(let u=0;u<22;u++)n.fillStyle="rgba(0,0,0,.07)",n.beginPath(),n.ellipse(l*a+a*.5,u*r/22+4,a*.32,r/44,0,0,6.3),n.fill()}for(let l=0;l<900;l++)n.fillStyle=c()<.5?"rgba(255,255,255,.08)":"rgba(0,0,0,.08)",n.fillRect(c()*s,c()*r,1.5,1.5)},256,256,[4,1])}function Ax(){const i=new $t;i.name="beanie";const t=new mt(ad(.2,.022,.035),re("#ffffff",{map:Qu("#d96a5c","rgba(110,30,30,.35)","rgba(255,200,180,.25)"),grain:10,tint:"#9a6a9a",rim:.25}));t.castShadow=!0,pn(t,hr,.006,16),i.add(t);const e=.185,n=.245,s=[];for(let u=0;u<=8;u++){const h=u/8,d=e+(n-e)*h;s.push(new st(Xi(d)+.034+Math.sin(h*Math.PI)*.01,d))}const r=new mt(new Li(s,40),re("#ffffff",{map:Qu("#f3e6cf","rgba(120,90,60,.3)","rgba(255,255,255,.35)"),grain:10,tint:"#9a86c4",rim:.2,side:Fe}));r.castShadow=!0,pn(r,hr,.006,16),i.add(r);const o=new Fo(.068,3),a=o.attributes.position,c=ll(8);for(let u=0;u<a.count;u++){const h=new L().fromBufferAttribute(a,u);h.multiplyScalar(1+(c()-.5)*.18),a.setXYZ(u,h.x,h.y,h.z)}o.computeVertexNormals();const l=new mt(o,re("#f3e6cf",{grain:40,grainAmt:.3,tint:"#9a86c4",rim:.3}));return l.position.set(0,.43,.02),l.castShadow=!0,pn(l,hr,.005,12),i.add(l),i.rotation.x=.13,i.scale.z=.9,i}function Rx(){const i=new $t;i.name="sunhat";const t=cd((l,u,h)=>{l.fillStyle="#ead29a",l.fillRect(0,0,u,h);const d=ll(5);for(let f=0;f<h;f+=6)l.fillStyle=f%12?"rgba(160,110,50,.18)":"rgba(255,245,215,.35)",l.fillRect(0,f,u,3);for(let f=0;f<1200;f++)l.fillStyle=d()<.5?"rgba(130,90,40,.15)":"rgba(255,250,230,.25)",l.fillRect(d()*u,d()*h,3,1)},256,256,[6,3]),e=re("#ffffff",{map:t,grain:10,tint:"#a08ac8",rim:.25,side:Fe}),n=new mt(ad(.19,.024,.02),e);n.castShadow=!0,pn(n,hr,.006,16),i.add(n);const s=new Oo(Xi(.19)+.02,Xi(.19)+.15,48,4),r=s.attributes.position;for(let l=0;l<r.count;l++){const u=r.getX(l),h=r.getY(l),d=Math.hypot(u,h),f=(d-Xi(.19)-.02)/.13,g=Math.atan2(h,u);r.setXYZ(l,u,.19-f*f*.06+Math.sin(g*5)*.006*f,h)}s.computeVertexNormals();const o=new mt(s,e);o.castShadow=!0,pn(o,hr,.005,16),i.add(o);const a=[new st(Xi(.2)+.027,.195),new st(Xi(.24)+.027,.24)],c=new mt(new Li(a,40),re("#6fa8b8",{grain:20,side:Fe}));return i.add(c),i.rotation.x=.1,i.scale.z=.9,i}function ld(i=new Date){const t=new URLSearchParams(location.search).get("season");if(t==="winter")return!0;if(t==="summer")return!1;const e=i.getMonth()+1;return e>=11||e<=2}function Cx(){return ld()?Ax():Rx()}const Px="#7c573f",li="#fbf2e2",Ix="#efc39a",ln=(i,t,e={},n=.006)=>{const s=new mt(i,re(t,{grain:14,grainAmt:.14,tint:"#b39ac4",rim:.4,form:.6,...e}));return s.castShadow=!0,n&&pn(s,Px,n,16),s},La=new Le({color:"#3a2a24"}),Lx=new Le({color:"#ffffff"});function Dx(){const i=new $t;i.name="puppy";const t=new $t;i.add(t);const e=ln(new me(.17,28,20),li);e.scale.set(1,1.08,.95),e.position.y=.17,t.add(e);const n=ln(new me(.12,20,14),"#fffaf0",{},0);n.scale.set(1,1.1,.5),n.position.set(0,.15,.1),t.add(n);for(const v of[-1,1]){const T=ln(new me(.085,18,12),li);T.scale.set(.8,.7,1.15),T.position.set(v*.13,.07,0),t.add(T);const U=ln(new me(.045,14,10),li);U.scale.set(1,.6,1.4),U.position.set(v*.14,.025,.08),t.add(U);const D=ln(new Is(.038,.1,6,12),li);D.position.set(v*.06,.08,.12),t.add(D);const z=ln(new me(.044,14,10),li);z.scale.set(1,.65,1.25),z.position.set(v*.06,.025,.14),t.add(z)}const s=new $t;s.position.set(0,.12,-.15),t.add(s);const r=ln(new In(.05,.03,10,18,Math.PI*1.5),li);r.rotation.set(0,Math.PI/2,.4),r.position.set(0,.05,-.03),s.add(r);const o=new $t;o.position.set(0,.36,.02),t.add(o);const a=ln(new me(.16,30,22),li);a.scale.set(1.12,.95,1),o.add(a);for(const v of[-1,1]){const T=ln(new me(.075,16,12),li,{},0);T.position.set(v*.085,-.055,.075),o.add(T);const U=new mt(new Hn(.026,16),new Le({color:"#f4a4a0",transparent:!0,opacity:.7}));U.position.set(v*.11,-.05,.138),U.rotation.y=v*.55,o.add(U);const D=new mt(new me(.019,12,10),La);D.scale.z=.5,D.position.set(v*.06,.005,.148),D.name=v<0?"eyeL":"eyeR",o.add(D);const z=new mt(new me(.006,8,6),Lx);z.position.set(v*.06+.006,.012,.157),o.add(z)}const c=ln(new me(.055,18,12),"#fffaf0",{},.004);c.scale.set(1.25,.8,.8),c.position.set(0,-.055,.135),o.add(c);const l=new mt(new me(.019,12,10),La);l.scale.set(1.3,.85,.8),l.position.set(0,-.035,.18),o.add(l);const u=new mt(new In(.013,.0035,6,12,Math.PI),La);u.rotation.z=Math.PI,u.position.set(0,-.068,.177),o.add(u);const h=[-1,1].map(v=>{const T=new $t;T.position.set(v*.13,.07,0),o.add(T);const U=ln(new me(.07,18,12),Ix);return U.scale.set(.62,1.25,.4),U.position.set(v*.025,-.07,0),U.rotation.z=v*.25,T.add(U),T.rotation.z=v*.15,{pivot:T,s:v}}),d=ln(new Bs(.025,.06,10),li,{},.004);d.position.set(.01,.155,.03),d.rotation.z=-.5,o.add(d);const f=ld(),g=ln(new In(.125,.032,10,28),f?"#d9584c":"#7fc0d2");g.rotation.x=Math.PI/2-.15,g.scale.set(1,1,.9),g.position.set(0,.27,0),t.add(g);const _=ln(new tn(.06,.12,.022),f?"#d9584c":"#7fc0d2",{},.004);_.position.set(.06,.2,.12),_.rotation.set(.2,0,.25),t.add(_),i.traverse(v=>{v.isMesh&&(v.castShadow=!0)});let m=0,p=0,M=4,y=0,x=0,I=9,R=0,E=0,C=2.5;const S=[o.getObjectByName("eyeL"),o.getObjectByName("eyeR")];return i.userData.poke=()=>{m=1,p=3,x=(Math.random()<.5?-1:1)*.3,M=1.6},i.userData.lookAtSeal=v=>{E=v?1:0,I=v?6:0},i.userData.update=(v,T)=>{const U=Math.sin(v*2.2)*.012;t.scale.set(1+U*.5,1+U,1+U*.5),m=Math.max(0,m-T*2.2);const D=m>0?Math.sin(Math.PI*(1-m)):0;t.position.y=D*.13,p=Math.max(0,p-T),s.rotation.y=Math.sin(v*(7+p*4))*(.35+p*.18),(M-=T)<0&&(M=4+Math.random()*5,x=Math.random()<.5?(Math.random()-.5)*.5:0),(I-=T)<0&&(I=6+Math.random()*8,E=Math.random()<.45?1:0),y+=(x-y)*Math.min(1,T*4),R+=(E-R)*Math.min(1,T*2.5),o.rotation.set(-.05+Math.sin(v*.9)*.03-D*.2,R*-.65,y);for(const q of h)q.pivot.rotation.z=q.s*(.15+Math.max(0,Math.sin(v*1.3+q.s))*.06+D*.5)-y*.4;(C-=T)<0&&(C=2.5+Math.random()*4);const z=C<.12?.15:1;for(const q of S)q.scale.y=z},i}const ti=[{id:"pen",label:"손글씨 펜",css:'"Nanum Pen Script", "Gaegu", "Segoe Script", cursive',k:1.12},{id:"gaegu",label:"또박 손글씨",css:'"Gaegu", "Nanum Pen Script", cursive',k:1}];async function Ux(){for(const i of["woff2","otf","ttf"])try{const t=new FontFace("SandCustom",`url(./fonts/custom.${i})`);return await t.load(),document.fonts.add(t),ti.push({id:"custom",label:"내 서체",css:'"SandCustom", "Nanum Pen Script", cursive',k:1}),!0}catch{}return!1}const Nx=3,ud=i=>()=>(i=i*16807%2147483647)/2147483647;async function ul(i,t){try{await document.fonts.load(`48px ${i.css}`,t||"가")}catch{}}function Ao(i,t,e="#000",n=768,s=256){const r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d"),a=String(i).split(`
`).slice(0,2).map(u=>u.slice(0,14));if(!a.join(""))return r;const c=ud(a.join("|").length*131+17),l=Math.min(s/a.length*.82,n*.92/Math.max(...a.map(u=>u.length),3)/.92)*t.k;return o.textBaseline="middle",o.textAlign="center",o.fillStyle=e,o.strokeStyle=e,o.lineJoin="round",o.lineWidth=l*.012,o.font=`${l}px ${t.css}`,a.forEach((u,h)=>{const d=o.measureText("가").width*.86,f=[...u].reduce((m,p)=>m+(/\s/.test(p)?d*.5:/[ -~]/.test(p)?d*.62:d),0);let g=n/2-f/2;const _=s/a.length*(h+.5);for(const m of u){const p=/\s/.test(m)?d*.5:/[ -~]/.test(m)?d*.62:d;if(!/\s/.test(m)){o.save(),o.translate(g+p/2,_+(c()-.5)*l*.14),o.rotate((c()-.5)*.22-.03);const M=.93+c()*.14;o.scale(M,M),o.fillText(m,0,0),o.strokeText(m,0,0),o.restore()}g+=p}}),r}function th(i){var e,n;if(i.length<3)return i;const t=[i[0]];for(let s=0;s<i.length-1;s++){const r=i[s],o=i[s+1],a=(e=r[2])!=null?e:1,c=(n=o[2])!=null?n:1;t.push([r[0]*.75+o[0]*.25,r[1]*.75+o[1]*.25,a*.75+c*.25],[r[0]*.25+o[0]*.75,r[1]*.25+o[1]*.75,a*.25+c*.75])}return t.push(i[i.length-1]),t}function hd(i,t="#000",e=768,n=256){var a,c,l;const s=document.createElement("canvas");s.width=e,s.height=n;const r=s.getContext("2d");r.strokeStyle=t,r.fillStyle=t,r.lineCap="round",r.lineJoin="round";const o=n*.058;for(const u of i){if(!u.length)continue;if(u.length===1){r.beginPath(),r.arc(u[0][0]*e,u[0][1]*n,o*.5*((a=u[0][2])!=null?a:1.1),0,6.3),r.fill();continue}const h=th(th(u)),d=h.length;for(let f=1;f<d;f++){const g=h[f-1],_=h[f],m=Math.min(1,.45+.55*Math.min(f,d-f)/Math.min(6,d/2));r.lineWidth=o*(((c=g[2])!=null?c:1)+((l=_[2])!=null?l:1))/2*m,r.beginPath(),r.moveTo(g[0]*e,g[1]*n),r.lineTo(_[0]*e,_[1]*n),r.stroke()}}return s}const Da=new Map;function eh(i,t){const e=i+"x"+t;if(Da.has(e))return Da.get(e);const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d"),r=ud(77),o=s.createLinearGradient(0,0,i*.3,t);o.addColorStop(0,"#f1d3a4"),o.addColorStop(.55,"#e9c48f"),o.addColorStop(1,"#ddb27c"),s.fillStyle=o,s.fillRect(0,0,i,t);for(let c=0;c<26;c++){const l=r()*i,u=r()*t,h=30+r()*110,d=s.createRadialGradient(l,u,0,l,u,h),f=r()<.5;d.addColorStop(0,f?"rgba(170,118,70,.13)":"rgba(255,240,212,.16)"),d.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=d,s.fillRect(l-h,u-h,h*2,h*2)}for(let c=0;c<15;c++){const l=(c+r()*.6)/15*t*1.25-t*.12,u=3+r()*4,h=r()*6.3,d=.012+r()*.008;for(const[f,g]of[[0,"rgba(160,108,62,.14)"],[2.2,"rgba(255,244,222,.22)"]]){s.beginPath();for(let _=-10;_<=i+10;_+=8){const m=l+f+Math.sin(_*d+h)*u+_*.06;_<0?s.moveTo(_,m):s.lineTo(_,m)}s.strokeStyle=g,s.lineWidth=2.4,s.stroke()}}const a=["rgba(255,247,230,.55)","rgba(140,95,60,.35)","rgba(205,140,80,.35)","rgba(90,70,60,.3)","rgba(255,255,255,.5)"];for(let c=0;c<i*t/55;c++){s.fillStyle=a[r()*a.length|0];const l=r()<.92?1+r()*1.2:1.8+r()*1.8;s.fillRect(r()*i,r()*t,l,l*(.7+r()*.6))}for(let c=0;c<7;c++)s.save(),s.translate(r()*i,r()*t),s.rotate(r()*6.3),s.fillStyle=r()<.5?"rgba(255,236,226,.8)":"rgba(240,214,190,.85)",s.beginPath(),s.ellipse(0,0,2.5+r()*3,1.5+r()*2,0,0,6.3),s.fill(),s.fillStyle="rgba(150,100,70,.35)",s.fillRect(-1,1,3,1),s.restore();return Da.set(e,n),n}const Ua={};function dd(i,t,e){const n=Ua[i]||(Ua[i]=document.createElement("canvas"));(n.width!==t||n.height!==e)&&(n.width=t,n.height=e);const s=n.getContext("2d");return s.clearRect(0,0,t,e),s.globalCompositeOperation="source-over",[n,s]}function sr(i,t,e,n,s){const[r,o]=dd(i,n,s);return o.drawImage(t,0,0,n,s),o.globalCompositeOperation="source-in",o.fillStyle=e,o.fillRect(0,0,n,s),r}function fd(i,t,e,n){i.drawImage(eh(t,e),0,0);const s=t/720;i.save(),i.filter=`blur(${3*s}px)`,i.globalAlpha=.7,i.drawImage(sr("a",n,"#fff2d6",t,e),0,5*s),i.drawImage(sr("a",n,"#fbe6c0",t,e),0,-5*s),i.restore(),i.save(),i.filter=`blur(${1.2*s}px)`,i.drawImage(sr("a",n,"#fff0d4",t,e),0,2.5*s),i.drawImage(sr("a",n,"#6b4029",t,e),0,-2.5*s),i.restore(),i.save(),i.filter=`blur(${.8*s}px)`,i.drawImage(sr("a",n,"#b07f54",t,e),0,0),i.restore();const[r,o]=dd("b",t,e);o.drawImage(n,0,0,t,e),o.globalCompositeOperation="source-in",o.drawImage(eh(t,e),0,0),i.save(),i.globalAlpha=.5,i.globalCompositeOperation="multiply",i.drawImage(r,0,0),i.restore()}function Fx(i,t=1,e=1024,n=342){if(i.strokes){const a=i.strokes.reduce((h,d)=>h+Math.max(1,d.length),0);let c=Math.ceil(a*t);const l=[];for(const h of i.strokes){if(c<=0)break;l.push(h.slice(0,Math.max(1,c))),c-=Math.max(1,h.length)}return hd(l,"#000",e,n)}const s=ti.find(a=>a.id===i.font)||ti[0],r=Ao(i.text||"",s,"#000",e,n),o=document.createElement("canvas");o.width=e,o.height=n;{const a=o.getContext("2d");for(const[c,l]of[[0,0],[3,0],[-3,0],[0,3],[0,-3],[2,2],[-2,-2],[2,-2],[-2,2]])a.drawImage(r,c,l)}if(t<1){const a=o.getContext("2d");a.globalCompositeOperation="destination-in";const c=a.createLinearGradient(0,0,e,0),l=t*1.08*e;c.addColorStop(0,"#000"),c.addColorStop(Math.max(0,Math.min(1,(l-40)/e)),"#000"),c.addColorStop(Math.max(0,Math.min(1,l/e)),"rgba(0,0,0,0)"),a.fillStyle=c,a.fillRect(0,0,e,n)}return o}const hn=(i,t={})=>new Le({color:i,side:Fe,...t}),Mr=i=>{const t=new Ue;return t.setAttribute("position",new fn(new Float32Array(i.flat()),3)),t.computeVertexNormals(),t};function nh(i=7,t="#b06c74",e="#fff4e4"){const n=new $t,s=new $t;n.add(s);const r=new Ls;r.moveTo(-.5,.16),r.lineTo(.55,.16),r.lineTo(.4,0),r.lineTo(-.38,0),r.closePath(),s.add(new mt(new xr(r),hn(t)));const o=new mt(new ze(.02,.95),hn("#8c6a66"));o.position.set(.02,.62,0),s.add(o),s.add(new mt(Mr([[.05,.22,0],[.05,1.08,0],[.5,.22,0]]),hn(e))),s.add(new mt(Mr([[-.02,.24,0],[-.02,.92,0],[-.36,.24,0]]),hn("#ffd9c2")));const a=new mt(new ze(.9,.22),hn("#fff0e0",{transparent:!0,opacity:.28}));return a.position.y=-.1,s.add(a),s.scale.setScalar(i),n.userData.update=c=>{s.rotation.z=Math.sin(c*.9+i)*.035,s.position.y=Math.sin(c*1.1+i)*.05*i*.2},n}function Ox(){const i=new $t,t=new Ls;t.moveTo(-30,0),t.bezierCurveTo(-22,9,-10,13,0,11),t.bezierCurveTo(10,15,24,8,34,0),t.closePath(),i.add(new mt(new xr(t,16),hn("#b99ab8")));const e=new Ls;e.moveTo(10,0),e.bezierCurveTo(22,6,40,7,58,0),e.closePath();const n=new mt(new xr(e,12),hn("#cfb4c6"));n.position.z=-2,i.add(n);const s=new mt(new ze(2.6,14),hn("#fff1e6"));s.position.set(-6,18,.5),i.add(s);const r=new mt(new ze(2.6,3),hn("#e58a7c"));r.position.set(-6,17,.6),i.add(r);const o=new mt(Mr([[-8,25,.6],[-4,25,.6],[-6,28.5,.6]]),hn("#c9706a"));i.add(o);const a=new mt(new Hn(3.2,20),hn("#fff3b8",{transparent:!0,opacity:.8,blending:Es,depthWrite:!1}));return a.position.set(-6,24,.8),i.add(a),i.userData.update=c=>{const l=.5+.5*Math.sin(c*1.3);a.material.opacity=.25+.6*l*l,a.scale.setScalar(.7+.8*l)},i}function Na({cx:i=0,cy:t=6,cz:e=-30,rx:n=14,rz:s=6,speed:r=.22,ph:o=0,size:a=1}={}){const c=new $t,l=hn("#fffaf2"),u=hn("#8b7a88"),h=new mt(new me(.16,8,6),l);h.scale.set(.7,.6,2),c.add(h);const d=new mt(new Bs(.035,.14,6),hn("#f0a45c"));d.rotation.x=-Math.PI/2,d.position.z=-.38,c.add(d);const f=[-1,1].map(g=>{const _=new $t,m=new $t;_.add(m),m.scale.x=g,m.add(new mt(Mr([[0,0,-.16],[0,0,.14],[.62,0,-.1],[0,0,.14],[.62,0,.06],[.62,0,-.1]]),l));const p=new $t;return p.position.x=.62,m.add(p),p.add(new mt(Mr([[0,0,-.1],[0,0,.06],[.55,0,.1]]),u)),c.add(_),{piv:_,outer:p,s:g}});return c.scale.setScalar(a),c.userData.update=g=>{const _=g*r+o,m=i+Math.sin(_)*n,p=e+Math.cos(_)*s,M=Math.cos(_)*n,y=-Math.sin(_)*s;c.position.set(m,t+Math.sin(g*.5+o)*.5,p),c.rotation.set(0,Math.atan2(-M,-y),0),c.rotateZ(-.25);const x=Math.sin(g*.33+o*2)>.55?.25:1,I=Math.sin(g*5.2+o*3)*.55*x+.12;for(const R of f)R.piv.rotation.z=I*R.s,R.outer.rotation.z=I*.7-.15},c}function Bx(i="#ea7458",t=.6,e=0){const n=new $t,s=new $t;n.add(s);const r=re(i,{grain:26,grainAmt:.22,rim:.4,tint:"#b0527a"}),o=new mt(new me(.1,16,10),r);o.scale.set(1.25,.55,.9),o.position.y=.075,o.castShadow=!0,pn(o,"#9a4a48",.006,20),s.add(o);const a=[-1,1].map(g=>{const _=new $t;_.position.set(g*.045,.11,-.06);const m=new mt(new Ie(.008,.008,.06,6),r);m.position.y=.03,_.add(m);const p=new mt(new me(.02,8,6),new Le({color:"#3a2a34"}));p.position.y=.065,_.add(p);const M=new mt(new me(.007,6,4),new Le({color:"#ffffff"}));return M.position.set(.006,.073,-.014),_.add(M),s.add(_),_}),c=[-1,1].map(g=>{const _=new $t;_.position.set(g*.11,.07,-.05);const m=new mt(new Is(.014,.06,3,6),r);m.rotation.z=g*-1.1,m.position.set(g*.03,.015,0),_.add(m);const p=new mt(new me(.036,10,8),r);return p.scale.set(1.25,.8,.7),p.position.set(g*.075,.04,-.01),p.castShadow=!0,pn(p,"#9a4a48",.005,20),_.add(p),s.add(_),{p:_,s:g}}),l=[];for(const g of[-1,1])for(let _=0;_<3;_++){const m=new $t;m.position.set(g*.1,.06,-.02+_*.04);const p=new mt(new Is(.008,.09,3,5),r);p.rotation.z=g*.95,p.position.set(g*.045,-.025,0),m.add(p),s.add(m),l.push({p:m,s:g,i:_})}let u=0,h=1,d=1+e,f=0;return n.userData.update=(g,_)=>{const m=Math.min(_,.1);d>0?(d-=m,d<=0&&(h=Math.abs(u)>t*.6?-Math.sign(u):Math.sin(g*13.7+e)>0?1:-1)):(u+=h*.16*m,(Math.abs(u)>t||Math.sin(g*.9+e*5)>.985)&&(u=Be.clamp(u,-t,t),d=1.2+2.2*Math.abs(Math.sin(g*3.1)),f=1));const p=d<=0?1:0;s.position.set(u,p*Math.abs(Math.sin(g*14))*.006,0),s.rotation.z=p*Math.sin(g*14)*.05;for(const y of l)y.p.rotation.z=p*Math.sin(g*16+y.i*2.1+(y.s>0?0:1.5))*.35;f=Math.max(0,f-m*.45);const M=Math.sin(Math.PI*Math.min(1,f*1.4))*.9;for(const y of c)y.p.rotation.z=y.s*(M*.9+Math.sin(g*2+y.s)*.06),y.p.position.y=.07+M*.03;for(const y of a)y.rotation.x=Math.sin(g*1.7+e)*.12},n}function zx(i=46){const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d"),n=e.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,240,200,0.5)"),n.addColorStop(1,"rgba(255,230,180,0)"),e.fillStyle=n,e.fillRect(0,0,32,32);const s=new Float32Array(i*3),r=[];for(let c=0;c<i;c++)r.push([Math.random()*7-3.5,.25+Math.random()*2.3,-3.2+Math.random()*5.6,Math.random()*6.28,.4+Math.random()]);const o=new Ue;o.setAttribute("position",new fn(s,3));const a=new J_(o,new Gh({map:new Kn(t),size:.07,transparent:!0,opacity:.6,depthWrite:!1,blending:Es,color:"#ffe6b0",sizeAttenuation:!0}));return a.frustumCulled=!1,a.userData.update=c=>{for(let l=0;l<i;l++){const u=r[l];s[l*3]=u[0]+Math.sin(c*.21*u[4]+u[3])*.5+c*.05*u[4]%1*.6,s[l*3+1]=u[1]+Math.sin(c*.33*u[4]+u[3]*2)*.22,s[l*3+2]=u[2]+Math.cos(c*.17*u[4]+u[3])*.4}o.attributes.position.needsUpdate=!0,a.material.opacity=.5+.12*Math.sin(c*.8)},a}const Ro={low:{label:"낮음",pixelRatio:1,shadow:1024,fps:30,map:512,msaa:0,finish:!1},mid:{label:"보통",pixelRatio:1.5,shadow:1024,fps:30,map:2048,msaa:0,finish:!0},high:{label:"높음",pixelRatio:2,shadow:2048,fps:60,map:2048,msaa:4,finish:!0}};function kx(){const i=new URLSearchParams(location.search).get("quality");if(Ro[i])return i;try{const e=sessionStorage.getItem("s5q");if(Ro[e])return e}catch{}return(matchMedia==null?void 0:matchMedia("(pointer: coarse)").matches)||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")?"mid":"high"}const Vx=`
uniform sampler2D tScene; uniform vec2 uRes, uSun; uniform float uDpr, uPaper, uDof, uFocus, uDusk, uHor, uSkyK;
${Er}
void main(){
  vec2 px = gl_FragCoord.xy / uDpr;
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 w = (vec2(vnoise(vec3(px * 0.045, 1.0)), vnoise(vec3(px * 0.045, 7.0))) - 0.5) * uPaper;
  vec2 uvw = uv + w * 1.4 * uDpr / uRes;
  // 몰입감: 캐릭터가 있는 높이만 또렷하게, 먼 바다와 하늘, 화면 맨 앞은 부드럽게 흐림
  float far = smoothstep(0.14, 0.46, uv.y - uFocus), near = smoothstep(0.30, 0.55, uFocus - uv.y);
  float blur = uDof * max(far * 0.8, near * 0.45);
  vec3 c = texture2D(tScene, uvw).rgb;
  if (blur > 0.02) {
    vec2 rad = blur * 4.2 * uDpr / uRes; vec3 acc = c; 
    for (int i = 0; i < 12; i++) { float a = float(i) * 2.399963, rr = sqrt((float(i) + 0.5) / 12.0); acc += texture2D(tScene, uvw + vec2(cos(a), sin(a)) * rr * rad).rgb; }
    c = acc / 13.0;
    c = mix(c, mix(vec3(dot(c, vec3(0.3, 0.59, 0.11))), c, 0.9) * 1.02 + vec3(0.008, 0.005, 0.003), far * uDof);     // 먼 곳은 살짝 옅게
  } else {
    // S7: 또렷한 곳은 살짝 선명하게(언샤프): 윤곽선과 질감이 뭉개지지 않게
    vec2 o1 = 1.2 * uDpr / uRes;
    vec3 nb = (texture2D(tScene, uvw + vec2(o1.x, 0.0)).rgb + texture2D(tScene, uvw - vec2(o1.x, 0.0)).rgb + texture2D(tScene, uvw + vec2(0.0, o1.y)).rgb + texture2D(tScene, uvw - vec2(0.0, o1.y)).rgb) * 0.25;
    c = max(c + (c - nb) * 0.55, vec3(0.0));
  }
  vec4 o = linearToOutputTexel(vec4(c, 1.0));
  float paper = 0.955 + 0.06 * fbm(vec3(px * 0.22, 2.0)) + 0.025 * (vnoise(vec3(px * 1.3, 4.0)) - 0.5);
  o.rgb *= mix(1.0, paper, uPaper * 0.8);
  // 채색 (S7: 색감은 유지하고 대비를 올림) — 어두운 곳을 더 깊게, 밝은 곳은 그대로, 채도 조금 더
  float lum = dot(o.rgb, vec3(0.3, 0.59, 0.11));
  o.rgb = mix(vec3(lum), o.rgb, 1.14);
  o.rgb = clamp((o.rgb - 0.045) / 0.955, 0.0, 1.0);                         // 검은 쪽 기준점을 내림(뿌연 막 걷어냄)
  o.rgb = mix(o.rgb, o.rgb * o.rgb * (3.0 - 2.0 * o.rgb), 0.48);           // S자 대비
  vec3 shadowTint = vec3(0.93, 0.9, 1.02), lightTint = vec3(1.03, 1.0, 0.95);  // 그늘은 살짝 보랏빛, 빛은 살짝 따뜻하게
  float l2 = dot(o.rgb, vec3(0.3, 0.59, 0.11));
  o.rgb *= mix(shadowTint, lightTint, smoothstep(0.2, 0.75, l2));
  float sunD = length((uv - uSun) * vec2(uRes.x / uRes.y, 1.0));
  o.rgb += vec3(1.0, 0.72, 0.42) * (0.10 * exp(-sunD * 2.4) + 0.08 * exp(-sunD * 7.0));
  // S8 노을: 머무는 시간이 길어질수록(uDusk 0→1) 하늘은 주황·분홍·보라로, 땅은 따뜻하고 낮게, 그늘은 보랏빛으로
  if (uDusk > 0.001) {
    float l3 = dot(o.rgb, vec3(0.3, 0.59, 0.11));
    float sky = smoothstep(uHor - 0.015, uHor + 0.06, uv.y) * uSkyK;
    float up = smoothstep(uHor, uHor + 0.5, uv.y);
    vec3 skyGrad = mix(mix(vec3(1.0, 0.6, 0.3), vec3(0.98, 0.5, 0.5), smoothstep(0.0, 0.45, up)), vec3(0.52, 0.42, 0.7), smoothstep(0.35, 1.0, up));
    vec3 skyC = skyGrad * (0.62 + 0.55 * l3);
    o.rgb = mix(o.rgb, skyC, sky * uDusk * 0.72);
    vec3 warm = o.rgb * mix(vec3(0.66, 0.56, 0.72), vec3(1.12, 0.84, 0.64), smoothstep(0.12, 0.8, l3));
    o.rgb = mix(o.rgb, warm, (1.0 - sky) * uDusk * 0.8);
    float band = exp(-abs(uv.y - uHor) * 22.0) * uSkyK;                       // 수평선 근처 바다에 노을빛 띠
    o.rgb += vec3(1.0, 0.5, 0.25) * band * 0.16 * uDusk;
    o.rgb += vec3(1.0, 0.45, 0.2) * 0.22 * exp(-sunD * 3.2) * uDusk;          // 해 주변이 붉게 번짐
  }
  float v = length((uv - 0.5) * vec2(1.0, 0.9));
  o.rgb *= mix(vec3(1.0), vec3(0.74, 0.69, 0.82), smoothstep(0.42, 0.95, v));
  gl_FragColor = vec4(o.rgb, 1.0);
}`,bi=new L(0,0,-.8);function Gx(i,t=null){var yl,Ml;const e=kx(),n=Ro[e],s=new q_({canvas:i,antialias:!1,powerPreference:"default"});s.setPixelRatio(Math.min(devicePixelRatio||1,n.pixelRatio)),s.shadowMap.enabled=!0,s.shadowMap.type=ch,s.outputColorSpace=Re,s.info.autoReset=!1;const r=s.getContext(),o=s.capabilities.isWebGL2&&(s.extensions.has("EXT_color_buffer_half_float")||s.extensions.has("EXT_color_buffer_float")),a=new Eo,c=new un(40,1,.05,2e3);c.rotation.order="YXZ";const l=new un(40,1,.05,2e3),u=dx(s,{mapW:n.map});a.add(u.sky,u.ground);const h=ax(Number(new URLSearchParams(location.search).get("seed"))||20261115),d=new Hv("#efd2dc","#d9b08e",.9);a.add(d);const f=new Gu("#ffd6a8",1.35);f.position.set(1.6,4,-7.8),f.target.position.set(0,0,-.3),a.add(f.target),f.castShadow=!0,f.shadow.mapSize.set(n.shadow*2,n.shadow*2),Object.assign(f.shadow.camera,{left:-10,right:10,top:7,bottom:-7,near:1,far:22}),f.shadow.bias=-8e-4,f.shadow.normalBias=.02,f.shadow.radius=5,a.add(f);const g=new Gu("#fff0dc",1.3);g.position.set(-2.4,3.6,3.2),a.add(g);const _=new mt(new ze(24,16),new Pv({color:"#5e2f4c",opacity:.58}));_.rotation.x=-Math.PI/2,_.position.set(0,.002,1),_.receiveShadow=!0,a.add(_);const m=new L(bi.x+.05,0,bi.z+.1),p=-2.25,M=Ca(!0);M.scale.setScalar(1.12),M.position.set(m.x+.08,0,m.z+.08),M.rotation.y=.1,a.add(M);const y=new mt(new ze(1.3,1.1),new Le({map:ox(),transparent:!0,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.set(m.x,.03,m.z+.05),a.add(y);const x=_x();a.add(x.group);let I=null;const R=xx(x.group,{onCue:(k,H)=>I==null?void 0:I(k,H)});x.group.rotation.order="YXZ",x.group.position.set(m.x,.03,m.z),x.group.rotation.set(0,p,0);const E=Cx();x.bones.head.add(E);const C=Dx();C.position.set(m.x+.68,.03,m.z+.26),C.rotation.y=-.45,C.scale.setScalar(1.05),a.add(C);const S=Tx(.265);S.position.set(0,.13,0),S.visible=!1,x.bones.head.add(S);const v=x.extras,T={cap:!0,blanket:!1,headset:!1,glasses:!1},U=()=>{E.visible=T.cap,S.visible=T.headset,v.blanket.visible=T.blanket,v.glasses.visible=T.glasses};U();let D=2.2;const z={group:x.group,head:x.bones.head,front:-1,update(k,H){R.update(H),D-=H,D<-.13&&(D=2.4+Math.random()*3.4+(Math.random()<.2?-2.1:0));const lt=R.state.eyes>.5||D<0,Ot=R.state.eyes<=.5||R.state.sleepy;for(const ht of v.lids)ht.visible=lt,ht.rotation.z=Ot?Math.PI:0,ht.position.y=Ot?.178:.162;for(const ht of v.eyes)ht.visible=!lt;v.mug.visible=!!R.state.show.mug,v.leaf.visible=!!R.state.show.leaf}},q=[z],G=0;function Y(k){return T[k]=!T[k],U(),T[k]}const F=k=>R.play(k),j=[],tt=[],et=(k,H,lt,Ot,ht,Et=1,Wt=null)=>(Wt!==null&&(k.rotation.y=Wt),a.add(k),j.push({o:k,dxL:H,syL:lt,dxP:Ot,syP:ht,sP:Et,s0:k.scale.x,y0:k.position.y}),k.userData.update&&tt.push(k),k),It=Zu();It.scale.setScalar(.86),a.add(It),et(yx(),255,812,150,828,.85);const Vt=et(Pa(),545,880,230,960,1,-.3);et(bx(),505,798,222,786,.55,-.25),et(Sx(),-600,776,-250,760,.35),et(Ju("#ef8466"),-470,935,-232,940,.85,.4);const $=[[-345,875,-190,870],[-330,992,-165,1e3],[250,975,160,1003],[395,890,205,885]],rt=["#f4a99c","#f6e3cf","#e5c3ea","#f7c9a8"],Mt=$.map(([k,H,lt,Ot],ht)=>et(ht===2?Ia(rt[ht]):fo(rt[ht]),k,H,lt,Ot,.9,.6+ht*1.7));Mt.forEach((k,H)=>{k.scale.setScalar(.9),j[j.length-Mt.length+H].s0=.9});const pt=[[-560,870],[470,820],[-120,1e3],[600,960],[130,905]].map(([k,H],lt)=>et(Ex(.032+lt%3*.01,lt%2?"#a99486":"#bba59e"),k,H,k*.32,H+lt%3*8,1,lt));et(Ku(16,.75),-735,1006,-232,1012,.7),et(Ku(12,.6),748,1010,236,1016,.7,1.2),et(Bx("#e8694c",.45,0),415,820,-150,806,.6);const zt=(()=>{const k=document.createElement("canvas");k.width=k.height=64;const H=k.getContext("2d");H.translate(32,32);const lt=H.createRadialGradient(0,0,0,0,0,30);lt.addColorStop(0,"rgba(255,255,255,1)"),lt.addColorStop(.25,"rgba(255,246,214,0.55)"),lt.addColorStop(1,"rgba(255,230,180,0)"),H.fillStyle=lt,H.fillRect(-32,-32,64,64),H.fillStyle="rgba(255,255,255,0.95)";for(const ht of[0,Math.PI/2])H.save(),H.rotate(ht),H.beginPath(),H.moveTo(-30,0),H.quadraticCurveTo(0,2.5,30,0),H.quadraticCurveTo(0,-2.5,-30,0),H.fill(),H.restore();const Ot=new Kn(k);return Ot.colorSpace=Re,Ot})(),Xt=Mt.map(()=>{const k=new Eu(new Tc({map:zt,transparent:!0,depthWrite:!1,blending:Es,opacity:0}));return k.scale.setScalar(.2),a.add(k),k}),Gt=Mt.map(()=>0),oe=nh(7.5);oe.position.set(-22,0,-125),a.add(oe),tt.push(oe);const nt=nh(9,"#8f7aa6","#ffe9d6");nt.position.set(30,0,-300),a.add(nt),tt.push(nt);const dt=Ox();dt.position.set(-58,0,-560),dt.scale.setScalar(1.35),a.add(dt),tt.push(dt);for(const k of[Na({cx:-6,cy:7,cz:-34,rx:15,rz:6,speed:.2,ph:0}),Na({cx:6,cy:8.5,cz:-44,rx:18,rz:8,speed:-.16,ph:2.2,size:1.1}),Na({cx:-2,cy:4.2,cz:-17,rx:7,rz:3,speed:.27,ph:4.1,size:.8})])a.add(k),tt.push(k);const P=zx(n.finish?46:24);a.add(P),tt.push(P);const Ct=new $t;Ct.visible=!1,a.add(Ct);const ot=(k,H,lt,Ot=0,ht=1)=>(k.position.x=H,k.position.z=lt,k.rotation.y=Ot,k.scale.setScalar(ht),Ct.add(k),k.userData.update&&tt.push(k),k),Rt=(k,H="rgba(255,248,236,0.92)",lt="#5a4034")=>{const Ot=document.createElement("canvas");Ot.width=512,Ot.height=112;const ht=Ot.getContext("2d");ht.font='600 44px "Gaegu", "Nanum Pen Script", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';const Et=Math.min(480,ht.measureText(k).width+56);ht.fillStyle=H,ht.beginPath(),ht.roundRect(256-Et/2,14,Et,84,42),ht.fill(),ht.fillStyle=lt,ht.textAlign="center",ht.textBaseline="middle",ht.fillText(k,256,58,440);const Wt=new Kn(Ot);return Wt.colorSpace=Re,Wt},_t=[],Ht=[{x:m.x,z:m.z,mine:!0}],Tt=[],A=[["바다의 뚜껑","파도 소리 들으면서 읽으니까 문장이 더 천천히 들어온다"],["작은 것들의 신","오늘은 스무 쪽. 내일 또 올게"],["어린 왕자","길들인다는 건 시간을 쓰는 일"],["달러구트 꿈 백화점","졸리지만 한 장만 더"],["모모","시간은 삶이고 삶은 마음속에 있다"],["긴긴밤","노을이 예뻐서 책을 잠깐 덮었다"]],b=(k,H,lt,Ot=.6,ht)=>{const Et=new Eu(new Tc({map:Rt(k,ht),transparent:!0,depthTest:!1,depthWrite:!1}));return Et.scale.set(3.7,.81,1),Et.position.set(H,Ot,lt),Et.renderOrder=50,Et.userData.text=k,Et.userData.bg=ht,Ct.add(Et),_t.push(Et),Et},V=[],K=(k,H,lt,Ot,ht=2.6)=>{const Et=new Le({transparent:!0,depthWrite:!1,opacity:.85}),Wt=new mt(new ze(ht,ht/3),Et);Wt.rotation.set(-Math.PI/2,0,Ot),Wt.position.set(H,.006,lt),Wt.renderOrder=2,Ct.add(Wt);const ie=()=>{var de;const he=document.createElement("canvas");he.width=768,he.height=256;const ae=he.getContext("2d");ae.globalAlpha=.7,ae.drawImage(Ao(k,ti[0],"#fff0d8"),2,3),ae.globalAlpha=1,ae.drawImage(Ao(k,ti[0],"#8a5644"),0,0),(de=Et.map)==null||de.dispose(),Et.map=new Kn(he),Et.map.colorSpace=Re,Et.needsUpdate=!0};ie(),V.push(ie)},at=new Le({color:"#7a4a3c",transparent:!0,opacity:.3,depthWrite:!1}),Q=new Hn(.07,10),Lt=(k,H,lt,Ot)=>{const ht=Math.round(Math.hypot(lt-k,Ot-H)/.32),Et=Math.atan2(lt-k,Ot-H);for(let Wt=0;Wt<=ht;Wt++){const ie=Wt/ht,he=Wt%2?1:-1,ae=new mt(Q,at);ae.rotation.set(-Math.PI/2,0,Et),ae.scale.set(.7,1.25,1),ae.position.set(k+(lt-k)*ie+Math.cos(Et)*.09*he+Math.sin(ie*9)*.05,.005,H+(Ot-H)*ie-Math.sin(Et)*.09*he),ae.renderOrder=2,Ct.add(ae)}};[[-5.4,1.2,"#6fa8c9",.3,"소미 · 읽는 중"],[4.9,.4,"#f2c14e",-.4,"바다곰 · 읽는 중"],[-2.9,4,"#b98ad0",.8,null],[3.2,3.6,"#7cc4a0",-.2,"달빛 · 쉬는 중"],[8.2,2.6,"#ee8f78",.5,null],[-8.4,3.4,"#f0a8b8",-.6,null]].forEach(([k,H,lt,Ot,ht],Et)=>{const Wt=ot(Zu(lt,"#fbeeda"),k,H,Ot,.86);Wt.rotation.z=.08*(Et%2?1:-1),ot(Ca(),k+.9,H+.6,Ot+.4,.9);const ie=ot(Et%2?Ia():fo(rt[Et%6]),k-.5,H+1,Et,1);Tt.push({o:ie,who:ht?ht.split(" ")[0]:"누군가",title:A[Et][0],text:A[Et][1]}),Ht.push({x:k+.3,z:H+.4}),Et%3===0&&ot(Mx(),k+1.7,H-.3,0,.9),ht&&b(ht,k,H-1.5,.6)}),ot(Pa(),-6.6,4.4,.5,.9),ot(Pa(),6.3,4.6,-.8,.75),ot(Ca(),5.6,-.4+2.6,-.3,.9),ot(fo("#f7c9b6"),6.5,2.9,1,.9),ot(Ia(),5,3,2,.8),Ht.push({x:5.7,z:2.6}),b("10분 전에 집에 갔어요",5.8,1.35,.6,"rgba(255,236,214,0.94)"),Lt(6.2,2.9,10.5,5.6),Lt(-5,1.9,-3.4,-.9),Lt(3,3.2,1.6,5.8),Lt(-8,4,-10.5,2),K("오늘도 수고했어",-3.3,1.9,.12),K("소미 다녀감",2.6,1.5,-.1,2),K("또 올게 바다야",-6.6,2.5,.2,2.4),K("한 장만 더",7.2,1,-.15,2),[[-1.8,2.6],[1.4,4.3],[-4.2,3.1],[6.9,3.9],[-7.3,1.5],[9.2,4.4],[.6,5.4],[-9.4,4.9]].forEach(([k,H],lt)=>ot(lt%3?fo(rt[lt%6]):Ju(lt%2?"#f6b56a":"#e88aa0"),k,H,lt*1.3,.85));const xt=new mt(new Oo(1.25,1.36,48),new Le({color:"#fff3c8",transparent:!0,opacity:.8,depthWrite:!1,blending:Es}));xt.rotation.x=-Math.PI/2,xt.position.set(bi.x,.012,bi.z+.1),Ct.add(xt),b("내 자리",bi.x,bi.z-1.7,.6,"rgba(255,255,255,0.96)"),(Ml=(yl=document.fonts)==null?void 0:yl.ready)==null||Ml.then(()=>setTimeout(()=>{V.forEach(k=>k()),_t.forEach(k=>{k.material.map.dispose(),k.material.map=Rt(k.userData.text,k.userData.bg)})},300));let vt="seat",jt=null;const ut={k:0,b:0},At={x:m.x,z:m.z,mine:!0};function qt(k,H=null){vt=k,k==="focus"&&Object.assign(At,H||Ht[0]),k!=="bird"&&(Qt.tx=0,Qt.ty=0),k!=="focus"&&(kt.on=!1),jt==null||jt(k,At)}const Bt={pos:new L,pitch:0,fov:40,init:!1},yt={pos:new L,pitch:0,fov:40},kt={on:!1,onShell:null,onOther:null,noted:new Set,hover:-1},Zt=new jn(1,1,{type:o?Ds:Gn,samples:n.msaa});o||(Zt.texture.colorSpace=Re);const se={tScene:{value:Zt.texture},uRes:{value:new st},uDpr:{value:1},uPaper:{value:n.finish?1:0},uSun:{value:new st(.7,.75)},uDof:{value:1},uFocus:{value:.35},uDusk:{value:0},uHor:{value:.6},uSkyK:{value:1}},O=new Eo,St=new mt(new ze(2,2),new xn({uniforms:se,depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Vx}));St.frustumCulled=!1,O.add(St);const Z=new Do;let J=1,ft=1,ct=null,Dt=0;const ne={pos:new L,pitch:0,fov:40,f:1,d:5},Qt={on:!1,x:0,y:0,tx:0,ty:0,k:0},_e=new Ei(new L(0,1,0),0),on=new Wu,Sn=new st,mi=new L,ii=new L;function Wn(k,H){const lt=ct.tx+k*ct.scale,Ot=ct.ty+H*ct.scale;return Sn.set(lt/J*2-1,-(Ot/ft)*2+1),on.setFromCamera(Sn,l),on.ray.intersectPlane(_e,mi)?mi.clone():new L}function Dn(k){return ii.copy(k).project(c),[(ii.x+1)/2*J,(1-ii.y)/2*ft]}function Tr(k){return ii.copy(k).project(l),[((ii.x+1)/2*J-ct.tx)/ct.scale,((1-ii.y)/2*ft-ct.ty)/ct.scale]}function Gs(){J=i.clientWidth||innerWidth,ft=i.clientHeight||innerHeight,s.setSize(J,ft,!1);const k=s.getPixelRatio();Zt.setSize(Math.round(J*k),Math.round(ft*k)),se.uRes.value.set(Math.round(J*k),Math.round(ft*k)),se.uDpr.value=k,ct=u.layout(J,ft,k);const H=ct.scale,lt=ft/2,Ot=ct.portrait?178:205,ht=.3,Et=ct.horizonFrac*ft;se.uHor.value=1-ct.horizonFrac;const Wt=Math.min(805,ct.stageBottom-.2*(ct.stageBottom-ct.stageTop)),ie=ct.ty+Wt*H,he=lt-Et,ae=(ie-lt)/he,de=(-(ae+1)+Math.sqrt((ae+1)**2+4*ae*ht*ht))/(2*ae*ht),Ze=he/de,cn=Ze/(Ot*H),qs=ht*cn;ne.pitch=Math.atan(de),ne.f=Ze,ne.d=cn,ne.fov=Be.radToDeg(2*Math.atan(ft/2/Ze)),ne.pos.set(0,qs,cn+bi.z-.36),l.fov=ne.fov,l.aspect=J/ft,l.position.copy(ne.pos),l.rotation.order="YXZ",l.rotation.set(-ne.pitch,0,0),l.updateProjectionMatrix(),l.updateMatrixWorld(),l.matrixWorldInverse.copy(l.matrixWorld).invert(),u.setRef(new ce().multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse)),ct.feetStage=Wt,ct.camY=qs,ct.camDist=cn;const Rd=J/H/2,Cd=ct.stageBottom,Pd=je.focusX,Ys=Be.clamp((Rd-237)/360,0,1),Dr=Be.lerp;for(const Nn of j){const bl=Wn(Pd+Dr(Nn.dxP,Nn.dxL,Ys),Math.min(Dr(Nn.syP,Nn.syL,Ys),Cd+4));Nn.o.position.set(bl.x,Nn.y0,bl.z),Nn.o.scale.setScalar(Nn.s0*Dr(Nn.sP,1,Ys)),Nn.o.userData.s0=Nn.o.scale.x}It.position.set(Dr(-.5,-.92,Ys),0,bi.z-.42),Vt.visible=Ys>.45;const Sl=[ct.tx+1e3*H,ct.ty+232*H];se.uSun.value.set(Sl[0]/J,1-Sl[1]/ft),Hs(!0)}let Di=0;function Hs(k){const H=Qt.k,lt=Qt.x*H,Ot=Qt.y*H,ht=(1-H)*(ct.portrait?.035:.07),Et=lt*.95+Math.sin(Dt*.21)*ht,Wt=(Ot<0?-Ot*1:-Ot*.45)+.25*H+(Math.sin(Dt*.13+1)*.5+.5)*ht,ie=Math.atan2(Et,ne.d)*.18,he=1+.08*H,ae=J/ft>1?1:0,de=Be.radToDeg(2*Math.atan(Math.tan(Be.degToRad(ne.fov)/2)/he));if(vt==="bird"?(yt.pos.set(Qt.x*(ae?4.5:6.5),ae?13.5:15,3.4+Qt.y*3.2),yt.pitch=-1.32,yt.fov=ae?52:64):vt==="focus"?(yt.pos.set(At.x,ae?4.3:5.6,At.z+(ae?3.3:3.6)),yt.pitch=-.93,yt.fov=ae?44:54):(yt.pos.set(ne.pos.x+Et,ne.pos.y-.1*Math.max(0,Wt),ne.pos.z-Wt),yt.pitch=-ne.pitch,yt.fov=de),!Bt.init||k===!0)Bt.pos.copy(yt.pos),Bt.pitch=yt.pitch,Bt.fov=yt.fov,Bt.init=!0;else{const cn=Math.min(1,Di*3.2);Bt.pos.lerp(yt.pos,cn),Bt.pitch+=(yt.pitch-Bt.pitch)*cn,Bt.fov+=(yt.fov-Bt.fov)*cn}c.fov=Bt.fov,c.aspect=J/ft,c.position.copy(Bt.pos);const Ze=Be.clamp((-Bt.pitch-ne.pitch)/.5,0,1);c.rotation.set(Bt.pitch,ie*(1-Ze),0),c.updateProjectionMatrix(),c.updateMatrixWorld(),ut.k=Ze,ut.b=Be.clamp((-Bt.pitch-1)/.3,0,1),u.setSky(-(ne.f*Math.tan(ie))/ct.scale,he)}addEventListener("resize",Gs),Gs();let bn=null,Ui=null;const Ws=new Wu,Ar=new st;i.addEventListener("pointerup",k=>{var ht,Et;if(!Ui||Math.hypot(k.clientX-Ui.x,k.clientY-Ui.y)>8)return;const H=i.getBoundingClientRect();Ar.set((k.clientX-H.left)/H.width*2-1,-((k.clientY-H.top)/H.height)*2+1),Ws.setFromCamera(Ar,c);const lt=k.clientX-H.left,Ot=k.clientY-H.top;if(vt==="bird"){if(!Ws.ray.intersectPlane(_e,mi))return;let Wt=null,ie=2.6;for(const he of Ht){const ae=Math.hypot(mi.x-he.x,mi.z-he.z);ae<ie&&(ie=ae,Wt=he)}Wt&&qt("focus",Wt);return}if(vt==="seat"){const Wt=Rr(lt,Ot);if(Wt>=0){Gt[Wt]=1,(ht=kt.onShell)==null||ht.call(kt,Wt);return}le.copy(C.position).setY(.3);const[ie,he]=Dn(le);Math.hypot(ie-lt,he-Ot)<Math.max(45,Math.min(J,ft)*.07)&&(C.userData.poke(),(Et=kt.onPuppy)==null||Et.call(kt));return}if(vt==="focus"){let Wt=null,ie=56;Mt.forEach((he,ae)=>{const[de,Ze]=Dn(he.position),cn=Math.hypot(de-lt,Ze-Ot);cn<ie&&(ie=cn,Wt=()=>{var qs;return(qs=kt.onShell)==null?void 0:qs.call(kt,ae)})}),Tt.forEach(he=>{const[ae,de]=Dn(he.o.position),Ze=Math.hypot(ae-lt,de-Ot);Ze<ie&&(ie=Ze,Wt=()=>{var cn;return(cn=kt.onOther)==null?void 0:cn.call(kt,he)})}),Wt==null||Wt()}});function Rr(k,H){let lt=-1,Ot=Math.max(40,Math.min(J,ft)*.075);return Mt.forEach((ht,Et)=>{const[Wt,ie]=Dn(ht.position),he=Math.hypot(Wt-k,ie-(H+6));he<Ot&&(Ot=he,lt=Et)}),lt}i.addEventListener("pointermove",k=>{if(k.pointerType!=="mouse"||vt!=="seat"){kt.hover=-1;return}const H=i.getBoundingClientRect();kt.hover=Rr(k.clientX-H.left,k.clientY-H.top),i.style.cursor=kt.hover>=0?"pointer":""}),i.addEventListener("pointerdown",k=>{var H;Ui={x:k.clientX,y:k.clientY},vt==="bird"&&(bn={x:k.clientX,y:k.clientY,tx:Qt.tx,ty:Qt.ty},(H=i.setPointerCapture)==null||H.call(i,k.pointerId))}),i.addEventListener("pointermove",k=>{if(!bn)return;const H=Math.min(J,ft)*.9;Qt.tx=Be.clamp(bn.tx-(k.clientX-bn.x)/H*2,-1,1),Qt.ty=Be.clamp(bn.ty+(k.clientY-bn.y)/H*2,-1,1)});const Cr=()=>{bn=null};i.addEventListener("pointerup",Cr),i.addEventListener("pointercancel",Cr);function w(k){Qt.on=k,k||(Qt.tx=0,Qt.ty=0)}let N=null;const W=1.6;function X(){const k=J/ct.scale/2,H=Be.clamp((k-237)/360,0,1),lt=Be.lerp(300,400,H);return{cx:je.focusX+Be.lerp(-5,-40,H),cy:Be.lerp(950,946,H),w:lt,h:lt/3*W}}const B=(k,H)=>Fx(k,H,768,256*W|0);function gt(k,{instant:H=!1,delay:lt=.7}={}){N&&N.drawn>0&&(N.erasing={mask:B(N.spec,1),box:N.box,left:4});const Ot=X(),ht=N==null?void 0:N.erasing;return N={spec:k,box:Ot,p:H?1:0,wait:H?Dt<1?1-Dt:0:lt,dur:k.strokes?2:1.7,drawn:0,erasing:ht,instant:H},N}function wt(k){const H=N;if(!(!H||!xe)){if(H.erasing&&H.erasing.left>0){const lt=H.erasing;u.stamp(lt.mask,lt.box.cx,lt.box.cy,lt.box.w,lt.box.h,.3,!0),lt.left--;return}if(H.wait>0){H.wait-=k;return}H.drawn>=1||(H.p=H.instant?1:Math.min(1,H.p+k/H.dur),(H.p-H.drawn>.035||H.p>=1)&&(u.stamp(B(H.spec,H.p),H.box.cx,H.box.cy,H.box.w,H.box.h,1),H.drawn=H.p))}}const Nt=new jn(256,256);Nt.texture.colorSpace=Re;const Ft=new un(24,1,.1,30),Yt=new Uint8Array(256*256*4),Kt=new Jt("#cfe7ea"),Pt=new L;function ue(k){const H=q[G],lt=H.group.rotation.y,Ot=H.front,ht=Math.sin(lt)*Ot,Et=Math.cos(lt)*Ot,Wt=H===z;H.head.getWorldPosition(Pt),Ft.position.set(Pt.x+ht*2.6+Et*.2,Pt.y+(Wt?.22:.02),Pt.z+Et*2.6-ht*.2),Ft.lookAt(Pt.x,Pt.y+(Wt?.16:-.06),Pt.z);const ie=a.children.map(de=>de.visible);a.children.forEach(de=>{!de.isLight&&de!==q[G].group&&(de.visible=!1)});const he=a.background;a.background=Kt,s.setRenderTarget(Nt),s.render(a,Ft),s.setRenderTarget(null),a.background=he,a.children.forEach((de,Ze)=>{de.visible=ie[Ze]}),s.readRenderTargetPixels(Nt,0,0,256,256,Yt);const ae=k.createImageData(256,256);for(let de=0;de<256;de++)ae.data.set(Yt.subarray((255-de)*1024,(256-de)*1024),de*1024);k.putImageData(ae,0,0)}function Se(k="파도서재"){const H=document.createElement("canvas");H.width=512,H.height=128;const lt=H.getContext("2d");lt.clearRect(0,0,512,128),lt.font='700 84px "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif',lt.textAlign="center",lt.textBaseline="middle",lt.lineJoin="round",lt.lineWidth=9,lt.strokeStyle="rgba(0,0,0,0.55)",lt.strokeText(k,256,68),lt.fillStyle="#000",lt.fillText(k,256,68);const Ot=J/ct.scale/2,ht=Ot<420,Et=ht?Ot*.55:360,Wt=ht?je.focusX-Ot+Et/2+14:je.focusX-330,ie=735;return u.stamp(H,Wt,ie,Et,Et/4,1),{cx:Wt,cy:ie,w:Et,h:Et/4}}let xe=!1,Xe=14,pe=0,Ut=1,En=1;const le=new L;function mn(){const k=document.createElement("canvas");k.width=512,k.height=256;const H=k.getContext("2d");H.fillStyle="rgba(0,0,0,0.85)";for(let Wt=0;Wt<15;Wt++){const ie=Wt/14,he=480-ie*400-Math.sin(ie*3)*30,ae=236-ie*190+Math.sin(ie*5)*6,de=Wt%2?1:-1;H.save(),H.translate(he+de*5,ae+de*6),H.rotate(-.6-ie*.3+de*.25),H.beginPath(),H.ellipse(0,0,9,5,0,0,6.3),H.fill(),H.restore()}const lt=J/ct.scale/2,Ot=Be.clamp((lt-237)/360,0,1);u.stamp(k,je.focusX+Be.lerp(120,390,Ot),915,Be.lerp(260,520,Ot),Be.lerp(180,230,Ot),.8);const ht=document.createElement("canvas");ht.width=ht.height=128;const Et=ht.getContext("2d");Et.strokeStyle="rgba(0,0,0,0.95)",Et.lineWidth=9,Et.lineCap="round",Et.lineJoin="round",Et.beginPath(),Et.moveTo(64,108),Et.bezierCurveTo(8,66,20,18,64,44),Et.bezierCurveTo(108,18,120,66,64,108),Et.stroke(),u.stamp(ht,je.focusX+Be.lerp(-120,-250,Ot),792,84,52,1)}const Ge=Number(new URLSearchParams(location.search).get("timescale"))||1,$e=Number(new URLSearchParams(location.search).get("dusk")),wn={start:performance.now(),minutes:25,forced:Number.isFinite($e)&&new URLSearchParams(location.search).has("dusk")?$e:null,v:0},ve={sun:new Jt("#ffd6a8"),sunD:new Jt("#ff9a5c"),fill:new Jt("#fff0dc"),fillD:new Jt("#e9b2b8"),sky:new Jt("#efd2dc"),skyD:new Jt("#d9a0b8")},qe=new L;function Ni(){var Ot;const k=(Ot=wn.forced)!=null?Ot:Math.min(1,(performance.now()-wn.start)/6e4/wn.minutes),H=k*k*(3-2*k);if(wn.v=H,se.uDusk.value=H,f.color.copy(ve.sun).lerp(ve.sunD,H),f.intensity=1.35-.25*H,g.color.copy(ve.fill).lerp(ve.fillD,H),g.intensity=1.3-.45*H,d.color.copy(ve.sky).lerp(ve.skyD,H),d.intensity=.9-.2*H,c.getWorldDirection(qe),qe.y=0,qe.lengthSq()<1e-6){se.uHor.value=9;return}qe.normalize(),le.set(c.position.x+qe.x*1500,0,c.position.z+qe.z*1500);const[,lt]=Dn(le);se.uHor.value=1-lt/ft}const an=k=>{wn.forced=k},Un={paused:!1};let Tn=performance.now(),Xs=0,Go=null,Pr=0,Ho=Tn,_l=0,vl=0,Wo=0,Ir=h.at(0);const Lr={calls:0,triangles:0};function xl(k){if(requestAnimationFrame(xl),k-Xs<1e3/n.fps-2)return;const H=performance.now(),lt=Un.paused?0:Math.min(.1,(k-Tn)/1e3)*Ge;Tn=k,Xs=k,Dt+=lt,Qt.x+=(Qt.tx-Qt.x)*Math.min(1,lt/Ge*4.5),Qt.y+=(Qt.ty-Qt.y)*Math.min(1,lt/Ge*4.5),Qt.k+=((Qt.on?1:0)-Qt.k)*Math.min(1,lt/Ge*3.5),Di=lt/Ge,Hs(),Ir=h.at(Dt),q[G].update(Dt,lt),Dt>Xe&&vt==="seat"&&!R.current&&(Xe=Dt+22+Math.random()*20,F(Math.random()<.8?"page":"sea"));for(const ht of tt)ht.userData.update(Dt,lt);if(C.userData.update(Dt,lt/Ge),It.userData.top.rotation.z=Math.sin(Dt*.7)*.012,It.userData.top.rotation.x=Math.sin(Dt*.53+1)*.01,!xe&&Dt>.6&&(xe=!0,mn()),Ct.visible=ut.k>.03,Ct.visible){for(const ht of _t)ht.material.opacity=ut.b;xt.material.opacity=(.55+.3*Math.sin(Dt*2.4))*ut.b,xt.scale.setScalar(1+.04*Math.sin(Dt*2.4))}const Ot=vt==="focus"?1:0;Ut+=((vt==="focus"&&At.mine?.28:1)-Ut)*Math.min(1,lt/Ge*3),Math.abs(Ut-En)>.005&&(En=Ut,It.userData.top.traverse(ht=>{ht.material&&!ht.userData.isOutline&&(ht.material.transparent=Ut<.99,ht.material.opacity=Ut)})),Tt.forEach((ht,Et)=>{ht.o.position.y=Ot*Math.abs(Math.sin(Dt*3+Et*1.7))*.04}),se.uDof.value+=((vt==="seat"?1:vt==="focus"?.35:0)-se.uDof.value)*Math.min(1,lt/Ge*3);{const[,ht]=Dn(le.set(m.x,.55,m.z));se.uFocus.value=1-ht/ft}Mt.forEach((ht,Et)=>{var Ze;const Wt=(Ze=ht.userData.y0)!=null?Ze:ht.userData.y0=ht.position.y;Gt[Et]=Math.max(0,Gt[Et]-lt/Ge*1.6);const ie=Gt[Et]>0?Math.sin(Math.PI*(1-Gt[Et])):0;ht.position.y=Wt+ie*.12,ht.rotation.z=ie*.35;const he=(Dt*.42+Et*.29)%1,ae=Math.max(0,Math.sin(Math.PI*Math.min(1,he/.22))),de=Xt[Et];de.position.set(ht.position.x+.06,ht.position.y+.14*ht.scale.x/.9,ht.position.z),de.material.opacity=vt==="bird"?0:(he<.22?ae:0)*(kt.noted.has(Et)?1:.85)+(kt.hover===Et?.6:0),de.scale.setScalar(.16+.12*ae+(kt.hover===Et?.08:0)),de.material.rotation=Dt*.6+Et,ht.scale.setScalar(ht.userData.s0),kt.hover===Et&&ht.scale.multiplyScalar(1.12)}),wt(lt/Ge),Ni(),t!=null&&t.ready&&(pe+=lt)>.2&&(pe=0,t.setWash(Ir.wash)),s.info.reset(),u.update(Dt,lt,Ir,Ge),s.setRenderTarget(Zt),s.render(a,c),s.setRenderTarget(null),s.render(O,Z),Lr.calls=s.info.render.calls,Lr.triangles=s.info.render.triangles,r.flush(),Wo+=performance.now()-H,Pr++,Go===null&&u.ready.done&&(Go=Math.round(k)),k-Ho>=1e3&&(_l=Math.round(Pr*1e3/(k-Ho)),vl=+(Wo/Pr).toFixed(1),Pr=0,Wo=0,Ho=k)}return requestAnimationFrame(xl),{setView:qt,get view(){return vt},set onView(k){jt=k},pick:kt,writeSand:gt,renderMirror:ue,toggleItem:Y,worn:T,act:F,motion:R,ctl:Un,set onCue(k){I=k},get sandWriting(){return N},setDusk:an,get dusk(){return wn.v},Q:n,qName:e,renderer:s,camera:c,refCam:l,beach:u,look:Qt,setLook:w,stampTest:Se,groundFromStage:Wn,screenOf:Dn,stageOf:Tr,objects:{puppy:C,shells:Mt,pebbles:pt,parasol:It,seal:x},motion:R,get layoutInfo(){return ct},get wave(){return Ir},get simT(){return Dt},stats:()=>({fps:_l,workMs:vl,calls:Lr.calls,triangles:Lr.triangles,firstFrameMs:Go,quality:e,pixelRatio:s.getPixelRatio(),size:[J,ft],halfFloat:o,map:u.mapSize,fpsCap:n.fps})}}const Hx={waveNear:"wave-near.ogg",waveFar:"wave-far.ogg",windBirds:"wind-birds.ogg",gull:"gull.ogg",page:"page.ogg",step1:"step1.ogg",step2:"step2.ogg",step3:"step3.ogg",step4:"step4.ogg"},Wx=(()=>{try{return!!document.createElement("audio").canPlayType('audio/ogg; codecs="vorbis"')}catch{return!0}})();async function ih(i){if(i.startsWith("data:")){const e=atob(i.slice(i.indexOf(",")+1)),n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n.buffer}const t=await fetch(i);if(!t.ok)throw new Error(t.status);return t.arrayBuffer()}function Xx(i="./audio/"){const t=window.AudioContext||window.webkitAudioContext;let e=null,n=!1,s=null;const r={},o={bg:.8,sfx:.8};let a=!1,c=1,l=null;const u={},h={step:0,page:0,gull:0};let d=0,f=-1;const g=E=>new Promise((C,S)=>{const v=e.decodeAudioData(E,C,S);v&&v.then&&v.then(C,S)});async function _(){return s||(s=Promise.all(Object.entries(Hx).map(async([E,C])=>{try{const S=D=>i==="./audio/"?nd("audio/"+D):i+D,v=C.replace(/\.ogg$/,".m4a"),[T,U]=Wx?[C,v]:[v,C];try{r[E]=await g(await ih(S(T)))}catch{r[E]=await g(await ih(S(U)))}}catch(S){r[E]=null,console.warn("[audio] 불러오기 실패",C,S)}})),s)}function m(E,{gain:C,pan:S=0,lp:v=0,offset:T=0}){const U=r[E];if(!U)return null;const D=e.createBufferSource();D.buffer=U,D.loop=!0;const z=e.createGain();z.gain.value=C;let q=D.connect(z);if(v){const G=e.createBiquadFilter();G.type="lowpass",G.frequency.value=v,q.connect(G),q=G}if(e.createStereoPanner){const G=e.createStereoPanner();G.pan.value=S,q.connect(G),q=G}return q.connect(u.bg),D.start(0,T%U.duration),z}const p={},M={step:180,page:400,pick:250,gull:5e3},y=E=>{const C=performance.now();return C-(p[E]||-1e9)<(M[E]||0)?!0:(p[E]=C,!1)};function x(E,{gain:C=1,rate:S=1,pan:v=0,lp:T=0,bus:U="sfx"}={}){const D=r[E];if(!e||!D||!n)return;const z=e.createBufferSource();z.buffer=D,z.playbackRate.value=S;const q=e.createGain();q.gain.value=C;let G=z.connect(q);if(T){const Y=e.createBiquadFilter();Y.type="lowpass",Y.frequency.value=T,G.connect(Y),G=Y}if(e.createStereoPanner){const Y=e.createStereoPanner();Y.pan.value=v,G.connect(Y),G=Y}G.connect(u[U]),z.start()}function I(){if(!e)return;const E=e.currentTime;u.master.gain.setTargetAtTime(a?0:1,E,.08),u.bg.gain.setTargetAtTime(o.bg*c,E,.25),u.sfx.gain.setTargetAtTime(o.sfx,E,.05)}function R(){clearTimeout(d),d=setTimeout(()=>{n&&!document.hidden&&(h.gull++,x("gull",{gain:.5,rate:.95+Math.random()*.1,pan:(Math.random()-.5)*1.4,lp:2600})),R()},3e4+Math.random()*4e4)}return{unlock(){return l||(l=this._unlock().finally(()=>{l=null}))},async _unlock(){return t?(e||(e=new t,u.master=e.createGain(),u.master.connect(e.destination),u.bg=e.createGain(),u.sfx=e.createGain(),u.bg.connect(u.master),u.sfx.connect(u.master),I()),e.state!=="running"&&await e.resume(),await _(),n||(n=!0,u.near=m("waveNear",{gain:.9,pan:-.15}),u.far=m("waveFar",{gain:.5,pan:.2,offset:7}),u.wind=m("windBirds",{gain:.45}),R()),!0):!1},setWash(E){u.near&&e&&(u.near.gain.setTargetAtTime(.55+.4*E,e.currentTime,.3),u.far.gain.setTargetAtTime(.5-.12*E,e.currentTime,.3))},step(E=1){if(y("step"))return;let C;do C=1+Math.floor(Math.random()*4);while(C===f);f=C,h.step++,x("step"+C,{gain:(.8+Math.random()*.3)*(.5+.5*E),rate:.92+Math.random()*.16,pan:(Math.random()-.5)*.2,lp:E<.5?2400+E*6e3:0})},pick(){y("pick")||(h.pick=(h.pick||0)+1,x("step3",{gain:.5,rate:1.55,pan:0}))},page(){y("page")||(h.page++,x("page",{gain:1,rate:.96+Math.random()*.08}))},gull(){h.gull++,x("gull",{gain:.5,lp:2600})},setBgScale(E){c=E,I()},get ctx(){return e},get out(){return u.master},get sfxBus(){return u.sfx},get ready(){return n},setVolume(E,C){o[E]=Math.min(1,Math.max(0,C)),I()},getVolume:E=>o[E],setMuted(E){a=E,I()},get muted(){return a},diag(){var E;return{supported:!!t,state:(E=e==null?void 0:e.state)!=null?E:"none",started:n,loaded:Object.fromEntries(Object.entries(r).map(([C,S])=>[C,S?+S.duration.toFixed(1):null])),bgGain:u.bg?+u.bg.gain.value.toFixed(3):null,sfxGain:u.sfx?+u.sfx.gain.value.toFixed(3):null,vol:{...o},muted:a,played:{...h}}}}}const Fa=i=>440*Math.pow(2,(i-69)/12),qn=[{title:"오후의 책장",bpm:72,seed:3,pent:[72,74,76,79,81],chords:[{b:36,n:[55,59,62,64]},{b:33,n:[52,55,60,64]},{b:41,n:[53,57,60,64]},{b:43,n:[55,59,62,65]}]},{title:"파도 사이",bpm:64,seed:8,pent:[74,76,78,81,83],chords:[{b:38,n:[57,61,64,66]},{b:35,n:[54,57,62,66]},{b:43,n:[59,62,66,69]},{b:45,n:[57,61,66,69]}]},{title:"노을 아래 한 장",bpm:78,seed:5,pent:[77,79,81,84,86],chords:[{b:41,n:[57,60,64,67]},{b:40,n:[55,59,62,67]},{b:38,n:[53,57,60,64]},{b:36,n:[55,59,64,67]}]}];function qx(i){let t=null,e=null,n=null,s=null,r=0,o=!1,a=0,c=0,l=0,u=Math.random;const h=new Set,d=()=>h.forEach(E=>E({playing:o,index:a,title:qn[a].title})),f=E=>()=>(E=E*16807%2147483647)/2147483647;let g=null;function _(){const E=e;E&&(E.gain.cancelScheduledValues(t.currentTime),E.gain.setTargetAtTime(0,t.currentTime,.08),setTimeout(()=>E.disconnect(),600)),e=t.createGain(),e.gain.value=0,e.connect(g),e.connect(n)}function m(){t=i.ctx,e=t.createGain(),e.gain.value=0;const E=t.createBiquadFilter();E.type="lowpass",E.frequency.value=3200,g=E,e.connect(E),E.connect(i.out);const C=t.sampleRate*1.8,S=t.createBuffer(2,C,t.sampleRate);for(let U=0;U<2;U++){const D=S.getChannelData(U);for(let z=0;z<C;z++)D[z]=(Math.random()*2-1)*Math.pow(1-z/C,2.6)}n=t.createConvolver(),n.buffer=S;const v=t.createGain();v.gain.value=.32,e.connect(n),n.connect(v),v.connect(E),s=t.createBuffer(1,t.sampleRate,t.sampleRate);const T=s.getChannelData(0);for(let U=0;U<T.length;U++)T[U]=Math.random()*2-1}function p(E,C,S,v){const T=t.createGain();T.gain.setValueAtTime(1e-4,E),T.gain.exponentialRampToValueAtTime(v,E+.01),T.gain.exponentialRampToValueAtTime(1e-4,E+S);const U=t.createOscillator();U.type="sine",U.frequency.value=Fa(C);const D=t.createOscillator();D.type="triangle",D.frequency.value=Fa(C)*2.003;const z=t.createGain();z.gain.value=.18,U.connect(T),D.connect(z),z.connect(T),T.connect(e),U.start(E),D.start(E),U.stop(E+S+.05),D.stop(E+S+.05)}function M(E,C,S){const v=t.createGain();v.gain.setValueAtTime(1e-4,E),v.gain.exponentialRampToValueAtTime(.2,E+.03),v.gain.exponentialRampToValueAtTime(1e-4,E+S);const T=t.createOscillator();T.type="sine",T.frequency.value=Fa(C),T.connect(v),v.connect(e),T.start(E),T.stop(E+S+.05)}function y(E,C,S=6e3,v=.05){const T=t.createBufferSource();T.buffer=s,T.playbackRate.value=.8+Math.random()*.4;const U=t.createBiquadFilter();U.type="highpass",U.frequency.value=S;const D=t.createGain();D.gain.setValueAtTime(C,E),D.gain.exponentialRampToValueAtTime(1e-4,E+v),T.connect(U),U.connect(D),D.connect(e),T.start(E,Math.random()*.8),T.stop(E+v+.02)}function x(E,C){const S=60/C.bpm,v=C.chords[l%4],T=.12*S;M(E,v.b,S*1.8),M(E+S*2.5,v.b+(l%2?7:0),S*1.3);const U=[0,2,1,3,2,1,3,2];for(let D=0;D<8;D++){const z=E+D*S*.5+(D%2?T:0);u()<.86&&p(z,v.n[U[D]],S*1.6,.05+.025*u()),D%2&&y(z,.05+.02*u())}if(u()<.7){const D=C.pent[Math.floor(u()*5)],z=E+S*(1+Math.floor(u()*3))+T;p(z,D,S*2.2,.075),u()<.5&&p(z+S*.75,C.pent[Math.floor(u()*5)],S*1.8,.06)}for(let D=0;D<4;D++)u()<.5&&y(E+u()*S*4,.05,2500,.012)}function I(){if(!o||!t)return;const E=qn[a];for(;c<t.currentTime+1.2;)if(x(c,E),c+=60/E.bpm*4,l++,l>=36){R((a+1)%qn.length);return}}function R(E){a=(E+qn.length)%qn.length,l=0,u=f(qn[a].seed*977+Math.floor(Math.random()*1e3)),c=((t==null?void 0:t.currentTime)||0)+.15,d()}return{start(){i.ctx&&(t||m(),!o&&(o=!0,_(),R(a),e.gain.setTargetAtTime(.9,t.currentTime,.5),clearInterval(r),r=setInterval(I,250),I()))},stop(){o&&(o=!1,clearInterval(r),r=0,e&&(e.gain.cancelScheduledValues(t.currentTime),e.gain.setTargetAtTime(0,t.currentTime,.12)),d())},next(){o?(_(),e.gain.setTargetAtTime(.9,t.currentTime,.3),R(a+1)):(a=(a+1)%qn.length,d())},prev(){o?(_(),e.gain.setTargetAtTime(.9,t.currentTime,.3),R(a-1)):(a=(a+qn.length-1)%qn.length,d())},onChange(E){h.add(E)},get playing(){return o},get title(){return qn[a].title}}}const sh={video:"fS-glIMAoUM",list:""};function Yx(i,t){const e=new URLSearchParams(location.search),n=e.get("yt")||sh.video,s=e.get("ytlist")||sh.list;let r=null,o=!1,a=!1,c=!1,l="유튜브 음악",u=!1;const h=new Set,d=()=>h.forEach(m=>m({playing:_.playing,title:_.title,source:f()?"youtube":"built-in"})),f=()=>o&&!a;i.onChange(()=>{f()||d()});function g(){if(!t||e.get("yt")==="off"){a=!0;return}const m=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{m==null||m();const M={autoplay:0,controls:1,playsinline:1,rel:0,modestbranding:1,loop:1};s?Object.assign(M,{listType:"playlist",list:s}):M.playlist=n,r=new window.YT.Player(t.querySelector(".yt-frame"),{width:200,height:200,videoId:s?void 0:n,playerVars:M,events:{onReady:()=>{o=!0;try{r.setVolume(70)}catch{}d(),u&&_.start()},onStateChange:y=>{var I;const x=window.YT.PlayerState;c=y.data===x.PLAYING||y.data===x.BUFFERING;try{const R=(I=r.getVideoData())==null?void 0:I.title;R&&(l=R)}catch{}y.data===x.ENDED&&!s&&(r.seekTo(0),r.playVideo()),d()},onError:()=>{a=!0,t.hidden=!0,u&&i.start(),d()}}})};const p=document.createElement("script");p.src="https://www.youtube.com/iframe_api",p.async=!0,p.onerror=()=>{a=!0,d()},document.head.appendChild(p),setTimeout(()=>{o||(a=!0,u&&!i.playing&&i.start(),d())},12e3)}const _={start(){u=!0,f()?(t.hidden=!1,i.stop(),r.playVideo(),c=!0,d()):i.start()},stop(){u=!1,f()&&(r.pauseVideo(),c=!1,d()),i.stop()},hide(){_.stop(),t.hidden=!0},next(){f()?s?r.nextVideo():r.seekTo(Math.min((r.getCurrentTime()||0)+30,(r.getDuration()||1e9)-1),!0):i.next()},prev(){f()?s?r.previousVideo():r.seekTo(Math.max(0,(r.getCurrentTime()||0)-30),!0):i.prev()},onChange(m){h.add(m)},get playing(){return f()?c:i.playing},get title(){return f()?l:i.title},get source(){return f()?"youtube":"built-in"},get single(){return!s}};return g(),_}function $x(i){let t=null,e=null;const n=()=>i.ctx&&i.ready,s=()=>{if(!t){const l=i.ctx;t=l.createBuffer(1,l.sampleRate*2,l.sampleRate);const u=t.getChannelData(0);let h=0;for(let d=0;d<u.length;d++)h=.6*h+.4*(Math.random()*2-1),u[d]=h}return t};function r(l,u,{type:h="bandpass",f0:d=3e3,f1:f=d,q:g=.8,gain:_=.2,attack:m=.01}={}){const p=i.ctx,M=p.createBufferSource();M.buffer=s(),M.loop=!0;const y=p.createBiquadFilter();y.type=h,y.Q.value=g,y.frequency.setValueAtTime(d,l),y.frequency.exponentialRampToValueAtTime(f,l+u);const x=p.createGain();x.gain.setValueAtTime(1e-4,l),x.gain.exponentialRampToValueAtTime(_,l+m),x.gain.exponentialRampToValueAtTime(1e-4,l+u),M.connect(y),y.connect(x),x.connect(i.sfxBus),M.start(l,Math.random()),M.stop(l+u+.05)}function o(l,u,h,d=.08,f="sine"){const g=i.ctx,_=g.createOscillator(),m=g.createGain();_.type=f,_.frequency.value=u,m.gain.setValueAtTime(d,l),m.gain.exponentialRampToValueAtTime(1e-4,l+h),_.connect(m),m.connect(i.sfxBus),_.start(l),_.stop(l+h+.02)}function a(l,u,h=.06,d=7){const f=i.ctx,g=f.createOscillator(),_=f.createOscillator(),m=f.createGain(),p=f.createBiquadFilter(),M=f.createOscillator(),y=f.createGain();g.type="triangle",_.type="sine",p.type="lowpass",p.frequency.value=2200,p.Q.value=.8,M.frequency.value=d,y.gain.value=12,M.connect(y),y.connect(g.frequency),y.connect(_.frequency),g.frequency.setValueAtTime(u[0][1],l),_.frequency.setValueAtTime(u[0][1]*2,l);for(const[R,E]of u.slice(1))g.frequency.exponentialRampToValueAtTime(E,l+R),_.frequency.exponentialRampToValueAtTime(E*2,l+R);const x=l+u[u.length-1][0];m.gain.setValueAtTime(1e-4,l),m.gain.exponentialRampToValueAtTime(h,l+.04),m.gain.setTargetAtTime(h*.7,l+.08,.1),m.gain.exponentialRampToValueAtTime(1e-4,x+.05);const I=f.createGain();I.gain.value=.18,g.connect(p),_.connect(I),I.connect(p),p.connect(m),m.connect(i.sfxBus);for(const R of[g,_,M])R.start(l),R.stop(x+.1)}const c=()=>i.ctx.currentTime+.01;return{sand(l=5){if(!n())return;let u=i.ctx.currentTime+.02;for(let h=0;h<l;h++){const d=.16+Math.random()*.18;r(u,d,{f0:2600+Math.random()*900,f1:1900+Math.random()*700,q:.7,gain:.34,attack:.03}),u+=d*.85+.05}},scratchStart(){if(!n()||e)return;const l=i.ctx,u=l.createBufferSource();u.buffer=s(),u.loop=!0;const h=l.createBiquadFilter();h.type="bandpass",h.frequency.value=2400,h.Q.value=.7;const d=l.createGain();d.gain.value=1e-4,u.connect(h),h.connect(d),d.connect(i.sfxBus),u.start(),e={s:u,f:h,g:d}},scratchMove(l){if(!e)return;const u=i.ctx,h=Math.min(1,l);e.g.gain.setTargetAtTime(.06+.4*h,u.currentTime,.03),e.f.frequency.setTargetAtTime(1900+1500*h,u.currentTime,.05),clearTimeout(e.t),e.t=setTimeout(()=>e&&e.g.gain.setTargetAtTime(1e-4,i.ctx.currentTime,.05),70)},scratchStop(){if(!e)return;const{s:l,g:u}=e;clearTimeout(e.t),e=null,u.gain.setTargetAtTime(1e-4,i.ctx.currentTime,.03),l.stop(i.ctx.currentTime+.2)},sip(){if(!n())return;const l=c();r(l,.42,{f0:700,f1:2300,q:2.2,gain:.28,attack:.08}),r(l+.5,.16,{f0:500,f1:320,q:1.5,gain:.12})},ahh(){if(!n())return;const l=c();r(l,.75,{type:"lowpass",f0:1300,f1:380,q:.6,gain:.16,attack:.14}),a(l+.02,[[0,420],[.35,360]],.025,5)},clink(){if(!n())return;const l=c();o(l,1750,.09,.05),o(l+.01,2630,.06,.03),r(l,.05,{type:"lowpass",f0:900,q:.6,gain:.12})},breeze(){if(!n())return;const l=c();r(l,2.6,{f0:320,f1:900,q:.5,gain:.13,attack:1}),r(l+.6,2.2,{type:"lowpass",f0:600,f1:1400,q:.4,gain:.08,attack:.9}),setTimeout(()=>{var u;return(u=i.gull)==null?void 0:u.call(i)},1500)},stretch(){if(!n())return;const l=c();r(l,.95,{f0:500,f1:1500,q:.7,gain:.12,attack:.5}),this.cloth(),a(l+.55,[[0,520],[.35,760],[.9,700],[1.3,620]],.05,9)},plop(){if(!n())return;const l=c(),u=i.ctx,h=u.createOscillator(),d=u.createGain();h.frequency.setValueAtTime(190,l),h.frequency.exponentialRampToValueAtTime(85,l+.16),d.gain.setValueAtTime(.22,l),d.gain.exponentialRampToValueAtTime(1e-4,l+.2),h.connect(d),d.connect(i.sfxBus),h.start(l),h.stop(l+.25),r(l+.02,.5,{type:"lowpass",f0:1200,f1:400,q:.5,gain:.18,attack:.04})},snore(){if(!n())return;const l=c();for(const u of[0,1.55]){r(l+u,1.1,{type:"lowpass",f0:380,f1:180,q:1.2,gain:.2,attack:.45});const h=i.ctx,d=h.createOscillator(),f=h.createGain(),g=h.createBiquadFilter();d.type="sawtooth",d.frequency.value=62+u*6,g.type="lowpass",g.frequency.value=260,f.gain.setValueAtTime(1e-4,l+u),f.gain.exponentialRampToValueAtTime(.04,l+u+.5),f.gain.exponentialRampToValueAtTime(1e-4,l+u+1.1),d.connect(g),g.connect(f),f.connect(i.sfxBus),d.start(l+u),d.stop(l+u+1.2)}},wake(){if(!n())return;const l=c();a(l,[[0,700],[.08,1150],[.16,980]],.07,0),this.plop()},pat(){if(!n())return;const l=c();r(l,.08,{type:"lowpass",f0:1800,f1:600,q:.7,gain:.42,attack:.004}),o(l,230,.07,.08)},yip(){if(!n())return;const l=c();a(l,[[0,900],[.05,1350],[.11,1e3]],.05,0),a(l+.17,[[0,950],[.05,1400],[.1,1050]],.04,0)},coo(){if(!n())return;const l=c();a(l,[[0,640],[.12,880],[.32,760]],.055),a(l+.38,[[0,700],[.14,920]],.045)},flap(){if(!n())return;const l=c();for(let u=0;u<3;u++)r(l+u*.26,.2,{f0:700,f1:1500,q:.8,gain:.07,attack:.05})},scratch(){this.sand(9)},tick(){if(!n())return;const l=c();o(l,1250,.035,.05,"triangle"),r(l,.03,{f0:2500,q:1.2,gain:.05})},shell(){if(!n())return;const l=c();r(l,.06,{f0:3800,q:2.5,gain:.16}),o(l+.01,2900,.12,.035),o(l+.09,3700,.1,.025),r(l+.1,.05,{f0:3200,q:2.5,gain:.1}),[1760,2350,2960].forEach((u,h)=>o(l+.2+h*.06,u,.35,.018))},shellClose(){if(!n())return;const l=c();r(l,.05,{f0:2600,q:2,gain:.16}),o(l,1900,.09,.035)},done(){if(!n())return;const l=c();[1047,1319,1568,2093].forEach((u,h)=>{o(l+h*.16,u,1.4,.045),o(l+h*.16,u*2.01,.6,.012)})},cloth(){if(!n())return;const l=i.ctx.currentTime;r(l,.28,{type:"lowpass",f0:1800,f1:700,q:.5,gain:.3,attack:.06}),r(l+.2,.22,{type:"lowpass",f0:1400,f1:600,q:.5,gain:.2,attack:.05})},click(){if(!n())return;const l=i.ctx.currentTime;o(l,1300,.04,.07),o(l+.09,900,.05,.07)},chime(){if(!n())return;const l=i.ctx.currentTime;[1320,1760,2640].forEach((u,h)=>o(l+h*.07,u,.5,.035))},whoosh(){n()&&r(i.ctx.currentTime,.7,{f0:400,f1:1500,q:.6,gain:.14,attack:.3})}}}const pd=1.75;document.documentElement.style.setProperty("--max-aspect",pd);const it=i=>document.getElementById(i),Sr=new URLSearchParams(location.search);Sr.get("fill")==="1"&&document.body.classList.add("fill");const Ln=Xx(),Ee=Gx(it("c"),Ln),vn=Yx(qx(Ln),document.getElementById("yt-box")),Oe=$x(Ln),Mn=(i,t=3500)=>{it("tip").textContent=i,it("tip").hidden=!1,clearTimeout(Mn.t),Mn.t=setTimeout(()=>{it("tip").hidden=!0},t)};let hl=!1;async function Ki(i){hl=i,i&&await Ln.unlock(),Ln.setMuted(!i),it("btn-sound").setAttribute("aria-pressed",String(i)),it("btn-sound").textContent=i?"소리 끄기":"소리 켜기"}it("btn-sound").addEventListener("click",()=>Ki(!hl));addEventListener("pointerdown",i=>{!hl&&!i.target.closest("#btn-sound")&&Ki(!0)},{once:!0});Ee.onView=(i,t)=>{document.body.classList.toggle("bird",i==="bird"),document.body.classList.toggle("focus",i==="focus"),it("btn-home").hidden=i==="seat",it("btn-view").hidden=i==="bird",Oe.whoosh(),i==="bird"&&Mn("끌어서 해변을 둘러보세요. 자리를 누르면 가까이 볼 수 있어요",4500),i==="focus"&&Mn(t.mine?"통통 뛰는 조개를 누르면 쪽지를 남기거나 읽을 수 있어요":"이 자리의 조개를 누르면 쪽지를 읽을 수 있어요",4500)};it("btn-view").addEventListener("click",()=>Ee.setView("bird"));it("btn-home").addEventListener("click",()=>Ee.setView("seat"));const Uc={motion:it("pane-motion"),dress:it("pane-dress")};function md(i){for(const[t,e]of Object.entries(Uc)){const n=t===i&&e.hidden;e.hidden=!n,it("rail-"+t).setAttribute("aria-expanded",String(n))}Oe.tick()}it("rail-motion").addEventListener("click",()=>md("motion"));it("rail-dress").addEventListener("click",()=>md("dress"));const wr=()=>{for(const i in Uc)Uc[i].hidden=!0,it("rail-"+i).setAttribute("aria-expanded","false")};it("c").addEventListener("pointerdown",wr);document.querySelectorAll("[data-motion]").forEach(i=>i.addEventListener("click",()=>{Ki(!0),Ee.act(i.dataset.motion),wr()}));Ee.onCue=i=>{var t;i==="page"?Ln.page():i==="gull"?Ln.gull():(t=Oe[i])==null||t.call(Oe)};const gd=["cap","blanket","headset","glasses"];function _d(){for(const i of gd)it("act-"+i).setAttribute("aria-pressed",String(Ee.worn[i])),document.querySelectorAll(`[data-item="${i}"]`).forEach(t=>t.setAttribute("aria-pressed",String(Ee.worn[i])))}async function dl(i){const t=Ee.toggleItem(i);i==="headset"?(t?(await Ki(!0),Ln.setBgScale(.3),vn.start()):(vn.hide(),Ln.setBgScale(1)),it("np").hidden=!t):Oe.cloth(),i==="headset"&&Oe.click(),_d()}for(const i of gd)it("act-"+i).addEventListener("click",()=>dl(i));document.querySelectorAll("[data-item]").forEach(i=>i.addEventListener("click",()=>dl(i.dataset.item)));vn.onChange(i=>{it("np-title").textContent=i.title,it("np-src").textContent=i.source==="youtube"?"유튜브 · 헤드셋 음악":"독서 음악",it("np-prev").setAttribute("aria-label",vn.source==="youtube"&&vn.single?"30초 뒤로":"이전 곡"),it("np-next").setAttribute("aria-label",vn.source==="youtube"&&vn.single?"30초 앞으로":"다음 곡"),it("np-play").textContent=i.playing?"⏸":"▶",it("np-play").setAttribute("aria-label",i.playing?"일시정지":"다시 재생"),it("np").classList.toggle("paused",!i.playing)});it("np-play").addEventListener("click",()=>{vn.playing?(vn.stop(),Ln.setBgScale(1)):(vn.start(),Ln.setBgScale(.3)),Oe.click()});it("np-prev").addEventListener("click",()=>vn.prev());it("np-next").addEventListener("click",()=>vn.next());_d();let vd=0;const rh=it("mirror").getContext("2d");it("act-mirror").addEventListener("click",()=>{wr(),Oe.chime(),it("dlg-mirror").hidden=!1,Ee.renderMirror(rh),vd=setInterval(()=>Ee.renderMirror(rh),90)});it("mirror-close").addEventListener("click",()=>{it("dlg-mirror").hidden=!0,clearInterval(vd)});const Vn=it("pad"),Zx=Vn.getContext("2d");let Ci=[],Zn=null,zo="hand";const Jx=()=>{Nc=0,fd(Zx,Vn.width,Vn.height,hd(Zn?[...Ci,Zn]:Ci,"#000",Vn.width,Vn.height))};let Nc=0;const Vs=()=>{Nc||(Nc=requestAnimationFrame(Jx))},xd=i=>{const t=Vn.getBoundingClientRect();return[Math.min(1,Math.max(0,(i.clientX-t.left)/t.width)),Math.min(1,Math.max(0,(i.clientY-t.top)/t.height))]};let Fc=0,yo=1.1;Vn.addEventListener("pointerdown",i=>{Vn.setPointerCapture(i.pointerId),i.preventDefault();const t=xd(i);Fc=performance.now(),yo=1.15,Zn=[[t[0],t[1],1.15]],Vs(),Oe.scratchStart()});Vn.addEventListener("pointermove",i=>{var e;if(!Zn)return;let t=0;for(const n of((e=i.getCoalescedEvents)==null?void 0:e.call(i))||[i]){const s=xd(n),r=Zn[Zn.length-1],o=Math.hypot((s[0]-r[0])*Nx,s[1]-r[1]);if(o<.006)continue;const a=n.timeStamp||performance.now(),c=Math.max(4,a-Fc);Fc=a;const l=o/c*1e3;yo=yo*.7+Math.min(1.3,Math.max(.6,1.35-l*.16))*.3,Zn.push([s[0],s[1],+yo.toFixed(2)]),t+=o}t&&(Vs(),Oe.scratchMove(t*14))});const yd=()=>{Oe.scratchStop(),Zn&&(Ci.push(Zn),Zn=null,Vs())};Vn.addEventListener("pointerup",yd);Vn.addEventListener("pointercancel",yd);const Oc=()=>ti.find(i=>i.id===it("sand-font").value)||ti[0];async function ko(){const i=Oc(),t=it("sand-text").value;await ul(i,t),fd(it("sand-prev").getContext("2d"),720,240,Ao(t,i,"#000",720,240))}function Md(){it("sand-font").innerHTML=ti.map(i=>`<option value="${i.id}">${i.label}</option>`).join("")}Md();(window.__ASSETS?Promise.resolve(!1):Ux()).then(i=>{i&&(Md(),it("sand-font").value="custom")});it("sand-text").addEventListener("input",()=>{ko(),Oe.sand(1)});it("sand-font").addEventListener("change",ko);function fl(i){zo=i,it("tab-hand").setAttribute("aria-pressed",String(i==="hand")),it("tab-type").setAttribute("aria-pressed",String(i==="type")),it("pane-hand").hidden=i!=="hand",it("pane-type").hidden=i!=="type",it("sand-undo").hidden=i!=="hand",i==="type"?(ko(),it("sand-text").focus()):Vs()}it("tab-hand").addEventListener("click",()=>fl("hand"));it("tab-type").addEventListener("click",()=>fl("type"));it("act-sand").addEventListener("click",()=>{wr(),it("dlg-sand").hidden=!1,fl(zo)});it("sand-undo").addEventListener("click",()=>{Ci.pop(),Vs()});it("sand-clear").addEventListener("click",()=>{zo==="hand"?(Ci=[],Vs()):(it("sand-text").value="",ko())});it("sand-cancel").addEventListener("click",()=>{it("dlg-sand").hidden=!0});const Sd="padoseojae.sand.v1";it("sand-ok").addEventListener("click",async()=>{let i;if(zo==="hand"){if(!Ci.length)return Mn("모래판에 먼저 글씨를 써 주세요");i={strokes:Ci.map(t=>t.map(([e,n,s=1])=>[+e.toFixed(4),+n.toFixed(4),s]))}}else{const t=it("sand-text").value.trim();if(!t)return Mn("남길 말을 먼저 적어 주세요");await ul(Oc(),t),i={text:t,font:Oc().id}}it("dlg-sand").hidden=!0,Ci=[],it("sand-text").value="",Ee.view!=="seat"&&Ee.setView("seat"),Ki(!0),Ee.act("write"),Ee.writeSand(i,{delay:.75});try{localStorage.setItem(Sd,JSON.stringify(i))}catch{}setTimeout(()=>Mn("물범 앞 모래에 글씨를 새겼어요. 다음에 와도 남아 있어요",4500),2600)});var oh;try{const i=JSON.parse(localStorage.getItem(Sd)||"null");i&&((oh=i.strokes)!=null&&oh.length||i.text)&&ul(ti.find(t=>t.id===i.font)||ti[0],i.text||"가").then(()=>Ee.writeSand(i,{instant:!0}))}catch{}const bd="padoseojae.shellnotes.v2";let Pi={},pl=-1;try{Pi=JSON.parse(localStorage.getItem(bd)||"{}")||{}}catch{Pi={}}const ml=()=>{try{localStorage.setItem(bd,JSON.stringify(Pi))}catch{}Ee.pick.noted=new Set(Object.keys(Pi).map(Number))};ml();function Ed(i,t,e){it("shell-h").textContent=t?i?"내가 남긴 쪽지":"조개 속에 쪽지 남기기":"조개 속 쪽지",it("shell-title").value=(i==null?void 0:i.title)||"",it("shell-text").value=(i==null?void 0:i.text)||"",it("shell-who").hidden=t,it("shell-who").textContent=t?"":`${e} 님이 남긴 쪽지 (예시)`;for(const n of["shell-title","shell-text"])it(n).readOnly=!t;it("shell-del").hidden=!t||!i,it("shell-ok").hidden=!t,document.querySelector("#dlg-shell .hint").hidden=!t,it("dlg-shell").hidden=!1}Ee.pick.onPuppy=()=>{Ki(!0),Oe.yip()};Ee.pick.onShell=i=>{pl=i,Oe.shell(),setTimeout(()=>Ed(Pi[i],!0),380)};Ee.pick.onOther=i=>Ed(i,!1,i.who);it("shell-cancel").addEventListener("click",()=>{it("dlg-shell").hidden=!0});it("shell-del").addEventListener("click",()=>{delete Pi[pl],ml(),it("dlg-shell").hidden=!0,Mn("쪽지를 지웠어요")});it("shell-ok").addEventListener("click",()=>{const i=it("shell-title").value.trim(),t=it("shell-text").value.trim();if(!i&&!t)return Mn("책 제목이나 남길 말을 적어 주세요");Pi[pl]={title:i,text:t,at:Date.now()},ml(),Oe.shellClose(),it("dlg-shell").hidden=!0,Mn("조개 속에 쪽지를 넣었어요. 반짝이는 조개를 누르면 다시 읽을 수 있어요")});const Oa=["low","mid","high"];it("btn-quality").textContent=`품질: ${Ee.Q.label}`;it("btn-quality").addEventListener("click",()=>{const i=Oa[(Oa.indexOf(Ee.qName)+1)%Oa.length];let t=!1;try{sessionStorage.setItem("s5q",i),t=!0}catch{}if(t&&!Sr.get("quality"))location.reload();else{const e=new URL(location.href);e.searchParams.set("quality",i),location.href=e.toString()}});function wd(){it("btn-fill").hidden=innerWidth/innerHeight<=pd+.01}wd();addEventListener("resize",wd);it("btn-fill").addEventListener("click",()=>{const i=document.body.classList.toggle("fill");it("btn-fill").setAttribute("aria-pressed",String(i)),dispatchEvent(new Event("resize"))});it("hud").hidden=Sr.get("hud")!=="1";setInterval(()=>{if(it("hud").hidden)return;const i=Ee.stats();it("hud").textContent=`초당 ${i.fps}장 (상한 ${i.fpsCap}) · 한 장 ${i.workMs}ms
품질 ${Ro[i.quality].label} · ${i.size[0]}×${i.size[1]} ×${i.pixelRatio} · 그리기 ${i.calls}회`},500);window.__s5=Ee;window.__ui={music:vn,audio:Ln,sfx:Oe,toggle:dl,notes:()=>Pi};const gl="padoseojae.timer.v1";let sn=null;const Td=i=>{const t=Math.max(0,Math.ceil(i/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`};function Vo(){const i=!!sn;it("btn-timer").classList.toggle("on",i),it("timer-text").textContent=i?Td(sn.end-Date.now()):"타이머",it("timer-h").textContent=i?`${sn.min}분 읽는 중`:"얼마나 읽을까요?",it("timer-mins").hidden=i,it("timer-stop").hidden=!i,it("timer-hint").textContent=i?"타이머를 끄고 그냥 쉴 수도 있어요":"시간이 다 되면 물범이 기지개를 켜고 알려 줘요"}function Ad(i){sn={end:Date.now()+i*6e4/(Number(Sr.get("timescale"))>1&&Sr.get("fasttimer")?60:1),min:i};try{localStorage.setItem(gl,JSON.stringify(sn))}catch{}it("dlg-timer").hidden=!0,Vo(),Ki(!0),Oe.tick(),Ee.act("page"),Mn(`${i}분 동안 함께 읽어요`)}function Co(i){const t=sn==null?void 0:sn.min;sn=null;try{localStorage.removeItem(gl)}catch{}Vo(),i&&(Oe.done(),Ee.act("stretch"),setTimeout(()=>Ee.act("clap"),3700),it("toast").textContent=`${t}분 독서 완료 ✓  오늘도 한 장 넘겼어요`,it("toast").hidden=!1,clearTimeout(Co.t),Co.t=setTimeout(()=>{it("toast").hidden=!0},12e3))}try{const i=JSON.parse(localStorage.getItem(gl)||"null");i&&i.end>Date.now()&&(sn=i)}catch{}it("btn-timer").addEventListener("click",()=>{wr(),Vo(),it("dlg-timer").hidden=!1,Oe.tick()});document.querySelectorAll("[data-min]").forEach(i=>i.addEventListener("click",()=>Ad(+i.dataset.min)));it("timer-stop").addEventListener("click",()=>{Co(!1),it("dlg-timer").hidden=!0,Mn("타이머를 껐어요")});it("timer-close").addEventListener("click",()=>{it("dlg-timer").hidden=!0});it("toast").addEventListener("click",()=>{it("toast").hidden=!0});setInterval(()=>{sn&&(Date.now()>=sn.end?Co(!0):it("timer-text").textContent=Td(sn.end-Date.now()))},500);Vo();window.__timer={start:Ad,finish:()=>{sn&&(sn.end=Date.now()-1)}};setTimeout(()=>{Ee.view==="seat"&&Mn("반짝이는 조개를 누르면 쪽지를 남길 수 있어요 · 오른쪽에서 동작을 골라 보세요",5500)},1800);
