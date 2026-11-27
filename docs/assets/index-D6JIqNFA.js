(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="170",Id=0,hu=1,Ld=2,Kh=1,jh=2,xi=3,wi=0,xn=1,Ge=2,Vi=0,Xs=1,Kn=2,fu=3,du=4,Qh=5,yi=100,Dd=101,tf=102,Ud=103,Nd=104,Fd=200,fc=201,Od=202,Bd=203,dc=204,pc=205,zd=206,kd=207,Vd=208,Gd=209,Hd=210,Wd=211,Xd=212,qd=213,Yd=214,mc=0,gc=1,vc=2,Zs=3,_c=4,xc=5,yc=6,Mc=7,ef=0,Zd=1,$d=2,Gi=0,Jd=1,Kd=2,jd=3,Qd=4,tp=5,ep=6,np=7,pu="attached",ip="detached",nf=300,$s=301,Js=302,Sc=303,bc=304,Jo=306,Ks=1e3,ls=1001,wc=1002,Dn=1003,sp=1004,Jr=1005,En=1006,va=1007,us=1008,ti=1009,sf=1010,rf=1011,Fr=1012,ml=1013,fs=1014,si=1015,ir=1016,gl=1017,vl=1018,js=1020,of=35902,af=1021,cf=1022,Vn=1023,lf=1024,uf=1025,qs=1026,Qs=1027,_l=1028,xl=1029,hf=1030,yl=1031,Ml=1033,Io=33776,Lo=33777,Do=33778,Uo=33779,Ec=35840,Tc=35841,Ac=35842,Rc=35843,Cc=36196,Pc=37492,Ic=37496,Lc=37808,Dc=37809,Uc=37810,Nc=37811,Fc=37812,Oc=37813,Bc=37814,zc=37815,kc=37816,Vc=37817,Gc=37818,Hc=37819,Wc=37820,Xc=37821,No=36492,qc=36494,Yc=36495,ff=36283,Zc=36284,$c=36285,Jc=36286,df=2200,rp=2201,op=2202,zo=2300,Kc=2301,_a=2302,Vs=2400,Gs=2401,ko=2402,Sl=2500,bl=2501,ap=3200,cp=3201,pf=0,lp=1,Bi="",Ne="srgb",sr="srgb-linear",Ko="linear",Ce="srgb",Ms=7680,mu=519,up=512,hp=513,fp=514,mf=515,dp=516,pp=517,mp=518,gp=519,jc=35044,gu="300 es",Mi=2e3,Vo=2001;class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vu=1234567;const Ir=Math.PI/180,Or=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function rn(i,t,e){return Math.max(t,Math.min(e,i))}function wl(i,t){return(i%t+t)%t}function vp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function _p(i,t,e){return i!==t?(e-i)/(t-i):0}function Lr(i,t,e){return(1-e)*i+e*t}function xp(i,t,e,n){return Lr(i,t,1-Math.exp(-e*n))}function yp(i,t=1){return t-Math.abs(wl(i,t*2)-t)}function Mp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Sp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function bp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wp(i,t){return i+Math.random()*(t-i)}function Ep(i){return i*(.5-Math.random())}function Tp(i){i!==void 0&&(vu=i);let t=vu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ap(i){return i*Ir}function Rp(i){return i*Or}function Cp(i){return(i&i-1)===0&&i!==0}function Pp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ip(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lp(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const nn={DEG2RAD:Ir,RAD2DEG:Or,generateUUID:Gn,clamp:rn,euclideanModulo:wl,mapLinear:vp,inverseLerp:_p,lerp:Lr,damp:xp,pingpong:yp,smoothstep:Mp,smootherstep:Sp,randInt:bp,randFloat:wp,randFloatSpread:Ep,seededRandom:Tp,degToRad:Ap,radToDeg:Rp,isPowerOfTwo:Cp,ceilPowerOfTwo:Pp,floorPowerOfTwo:Ip,setQuaternionFromProperEuler:Lp,normalize:Te,denormalize:Jn};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,n,s,r,o,a,c,l){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],v=s[0],p=s[3],m=s[6],S=s[1],M=s[4],_=s[7],P=s[2],T=s[5],E=s[8];return r[0]=o*v+a*S+c*P,r[3]=o*p+a*M+c*T,r[6]=o*m+a*_+c*E,r[1]=l*v+u*S+h*P,r[4]=l*p+u*M+h*T,r[7]=l*m+u*_+h*E,r[2]=f*v+d*S+g*P,r[5]=f*p+d*M+g*T,r[8]=f*m+d*_+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*l-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new se;function gf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dp(){const i=Br("canvas");return i.style.display="block",i}const _u={};function Cr(i){i in _u||(_u[i]=!0,console.warn(i))}function Up(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Np(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ve={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ce&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ce&&(i.r=Ys(i.r),i.g=Ys(i.g),i.b=Ys(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?Ko:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const xu=[.64,.33,.3,.6,.15,.06],yu=[.2126,.7152,.0722],Mu=[.3127,.329],Su=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ve.define({[sr]:{primaries:xu,whitePoint:Mu,transfer:Ko,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:yu,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:xu,whitePoint:Mu,transfer:Ce,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:yu,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let Ss;class Op{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ss===void 0&&(Ss=Br("canvas")),Ss.width=t.width,Ss.height=t.height;const n=Ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bp=0;class vf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ya(s[o].image)):r.push(ya(s[o]))}else r=ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Op.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zp=0;class un extends ps{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,n=ls,s=ls,r=En,o=us,a=Vn,c=ti,l=un.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Gn(),this.name="",this.source=new vf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ks:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ks:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=nf;un.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,_=(d+1)/2,P=(m+1)/2,T=(u+f)/4,E=(h+v)/4,C=(g+p)/4;return M>_&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=E/n):_>P?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=E/r,s=C/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-v)/S,this.z=(f-u)/S,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kp extends ps{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends kp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _f extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vp extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==f||l!==d||u!==g){let p=1-a;const m=c*f+l*d+u*g+h*v,S=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const P=Math.sqrt(M),T=Math.atan2(P,m*S);p=Math.sin(p*T)/P,a=Math.sin(a*T)/P}const _=a*S;if(c=c*p+f*_,l=l*p+d*_,u=u*p+g*_,h=h*p+v*_,p===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new I,wu=new oi;class rr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),jr.subVectors(this.max,_r),bs.subVectors(t.a,_r),ws.subVectors(t.b,_r),Es.subVectors(t.c,_r),Pi.subVectors(ws,bs),Ii.subVectors(Es,ws),Qi.subVectors(bs,Es);let e=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-Qi.z,Qi.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,Qi.z,0,-Qi.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-Qi.y,Qi.x,0];return!Sa(e,bs,ws,Es,jr)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,bs,ws,Es,jr))?!1:(Qr.crossVectors(Pi,Ii),e=[Qr.x,Qr.y,Qr.z],Sa(e,bs,ws,Es,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const di=[new I,new I,new I,new I,new I,new I,new I,new I],Xn=new I,Kr=new rr,bs=new I,ws=new I,Es=new I,Pi=new I,Ii=new I,Qi=new I,_r=new I,jr=new I,Qr=new I,ts=new I;function Sa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ts.fromArray(i,r);const a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),c=t.dot(ts),l=e.dot(ts),u=n.dot(ts);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Gp=new rr,xr=new I,ba=new I;class or{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(ba)),this.expandByPoint(xr.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new I,wa=new I,to=new I,Li=new I,Ea=new I,eo=new I,Ta=new I;class jo{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wa.copy(t).add(e).multiplyScalar(.5),to.copy(e).sub(t).normalize(),Li.copy(this.origin).sub(wa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(to),a=Li.dot(this.direction),c=-Li.dot(to),l=Li.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(wa).addScaledVector(to,f),d}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,s,r){Ea.subVectors(e,t),eo.subVectors(n,t),Ta.crossVectors(Ea,eo);let o=this.direction.dot(Ta),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,t);const c=a*this.direction.dot(eo.crossVectors(Li,eo));if(c<0)return null;const l=a*this.direction.dot(Ea.cross(Li));if(l<0||c+l>o)return null;const u=-a*Li.dot(Ta);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,c,l,u,h,f,d,g,v,p){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,v,p)}set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,v=l*h;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,v=l*h;e[0]=f-v*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+v,e[1]=c*h,e[5]=v*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+v,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hp,t,Wp)}lookAt(t,e,n){const s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Di.crossVectors(n,Pn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Di.crossVectors(n,Pn)),Di.normalize(),no.crossVectors(Pn,Di),s[0]=Di.x,s[4]=no.x,s[8]=Pn.x,s[1]=Di.y,s[5]=no.y,s[9]=Pn.y,s[2]=Di.z,s[6]=no.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],S=n[3],M=n[7],_=n[11],P=n[15],T=s[0],E=s[4],C=s[8],x=s[12],y=s[1],A=s[5],F=s[9],U=s[13],W=s[2],Y=s[6],X=s[10],Z=s[14],z=s[3],nt=s[7],ht=s[11],lt=s[15];return r[0]=o*T+a*y+c*W+l*z,r[4]=o*E+a*A+c*Y+l*nt,r[8]=o*C+a*F+c*X+l*ht,r[12]=o*x+a*U+c*Z+l*lt,r[1]=u*T+h*y+f*W+d*z,r[5]=u*E+h*A+f*Y+d*nt,r[9]=u*C+h*F+f*X+d*ht,r[13]=u*x+h*U+f*Z+d*lt,r[2]=g*T+v*y+p*W+m*z,r[6]=g*E+v*A+p*Y+m*nt,r[10]=g*C+v*F+p*X+m*ht,r[14]=g*x+v*U+p*Z+m*lt,r[3]=S*T+M*y+_*W+P*z,r[7]=S*E+M*A+_*Y+P*nt,r[11]=S*C+M*F+_*X+P*ht,r[15]=S*x+M*U+_*Z+P*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*d-n*c*d)+v*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+p*(+e*l*h-e*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+m*(-s*a*u-e*c*h+e*a*f+s*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],v=t[13],p=t[14],m=t[15],S=h*p*l-v*f*l+v*c*d-a*p*d-h*c*m+a*f*m,M=g*f*l-u*p*l-g*c*d+o*p*d+u*c*m-o*f*m,_=u*v*l-g*h*l+g*a*d-o*v*d-u*a*m+o*h*m,P=g*h*c-u*v*c-g*a*f+o*v*f+u*a*p-o*h*p,T=e*S+n*M+s*_+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=S*E,t[1]=(v*f*r-h*p*r-v*s*d+n*p*d+h*s*m-n*f*m)*E,t[2]=(a*p*r-v*c*r+v*s*l-n*p*l-a*s*m+n*c*m)*E,t[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*d-n*c*d)*E,t[4]=M*E,t[5]=(u*p*r-g*f*r+g*s*d-e*p*d-u*s*m+e*f*m)*E,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*m-e*c*m)*E,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*d+e*c*d)*E,t[8]=_*E,t[9]=(g*h*r-u*v*r-g*n*d+e*v*d+u*n*m-e*h*m)*E,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*m+e*a*m)*E,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*d-e*a*d)*E,t[12]=P*E,t[13]=(u*v*s-g*h*s+g*n*f-e*v*f-u*n*p+e*h*p)*E,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*p-e*a*p)*E,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,v=o*u,p=o*h,m=a*h,S=c*l,M=c*u,_=c*h,P=n.x,T=n.y,E=n.z;return s[0]=(1-(v+m))*P,s[1]=(d+_)*P,s[2]=(g-M)*P,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(f+m))*T,s[6]=(p+S)*T,s[7]=0,s[8]=(g+M)*E,s[9]=(p-S)*E,s[10]=(1-(f+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qn.copy(this);const l=1/r,u=1/o,h=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,e.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Mi){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===Mi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Mi){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*l,d=(n+s)*u;let g,v;if(a===Mi)g=(o+r)*h,v=-2*h;else if(a===Vo)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ts=new I,qn=new le,Hp=new I(0,0,0),Wp=new I(1,1,1),Di=new I,no=new I,Pn=new I,Eu=new le,Tu=new oi;class ci{constructor(t=0,e=0,n=0,s=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xp=0;const Au=new I,As=new oi,mi=new le,io=new I,yr=new I,qp=new I,Yp=new oi,Ru=new I(1,0,0),Cu=new I(0,1,0),Pu=new I(0,0,1),Iu={type:"added"},Zp={type:"removed"},Rs={type:"childadded",child:null},Aa={type:"childremoved",child:null};class qe extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new I,e=new ci,n=new oi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new se}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.multiply(As),this}rotateOnWorldAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.premultiply(As),this}rotateX(t){return this.rotateOnAxis(Ru,t)}rotateY(t){return this.rotateOnAxis(Cu,t)}rotateZ(t){return this.rotateOnAxis(Pu,t)}translateOnAxis(t,e){return Au.copy(t).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ru,t)}translateY(t){return this.translateOnAxis(Cu,t)}translateZ(t){return this.translateOnAxis(Pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?io.copy(t):io.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(yr,io,this.up):mi.lookAt(io,yr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),As.setFromRotationMatrix(mi),this.quaternion.premultiply(As.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Iu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zp),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Iu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,qp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}qe.DEFAULT_UP=new I(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new I,gi=new I,Ra=new I,vi=new I,Cs=new I,Ps=new I,Lu=new I,Ca=new I,Pa=new I,Ia=new I,La=new xe,Da=new xe,Ua=new xe;class kn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Yn.subVectors(t,e),s.cross(Yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Yn.subVectors(s,e),gi.subVectors(n,e),Ra.subVectors(t,e);const o=Yn.dot(Yn),a=Yn.dot(gi),c=Yn.dot(Ra),l=gi.dot(gi),u=gi.dot(Ra),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return La.setScalar(0),Da.setScalar(0),Ua.setScalar(0),La.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,n),Ua.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(La,r.x),o.addScaledVector(Da,r.y),o.addScaledVector(Ua,r.z),o}static isFrontFacing(t,e,n,s){return Yn.subVectors(n,e),gi.subVectors(t,e),Yn.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Yn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return kn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Cs.subVectors(s,n),Ps.subVectors(r,n),Ca.subVectors(t,n);const c=Cs.dot(Ca),l=Ps.dot(Ca);if(c<=0&&l<=0)return e.copy(n);Pa.subVectors(t,s);const u=Cs.dot(Pa),h=Ps.dot(Pa);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Cs,o);Ia.subVectors(t,r);const d=Cs.dot(Ia),g=Ps.dot(Ia);if(g>=0&&d<=g)return e.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ps,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Lu.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Lu,a);const m=1/(p+v+f);return o=v*m,a=f*m,e.copy(n).addScaledVector(Cs,o).addScaledVector(Ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},so={h:0,s:0,l:0};function Na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=wl(t,1),e=rn(e,0,1),n=rn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Na(o,r,t+1/3),this.g=Na(o,r,t),this.b=Na(o,r,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=xf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ve.fromWorkingColorSpace(pn.copy(this),t),Math.round(rn(pn.r*255,0,255))*65536+Math.round(rn(pn.g*255,0,255))*256+Math.round(rn(pn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Ne){ve.fromWorkingColorSpace(pn.copy(this),t);const e=pn.r,n=pn.g,s=pn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(so);const n=Lr(Ui.h,so.h,e),s=Lr(Ui.s,so.s,e),r=Lr(Ui.l,so.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Yt;Yt.NAMES=xf;let $p=0;class qi extends ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Gn(),this.name="",this.blending=Xs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=pc,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xe extends qi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ye=new I,ro=new ot;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ro.fromBufferAttribute(this,e),ro.applyMatrix3(t),this.setXY(e,ro.x,ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jc&&(t.usage=this.usage),t}}class Tl extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yf extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jp=0;const Bn=new le,Fa=new qe,Is=new I,In=new rr,Mr=new rr,sn=new I;class Ve extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gf(t)?yf:Tl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,n){return Bn.makeTranslation(t,e,n),this.applyMatrix4(Bn),this}scale(t,e,n){return Bn.makeScale(t,e,n),this.applyMatrix4(Bn),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(In.min,Mr.min),In.expandByPoint(sn),sn.addVectors(In.max,Mr.max),In.expandByPoint(sn)):(In.expandByPoint(Mr.min),In.expandByPoint(Mr.max))}In.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)sn.fromBufferAttribute(a,l),c&&(Is.fromBufferAttribute(t,l),sn.add(Is)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new I,c[C]=new I;const l=new I,u=new I,h=new I,f=new ot,d=new ot,g=new ot,v=new I,p=new I;function m(C,x,y){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(A),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(A),a[C].add(v),a[x].add(v),a[y].add(v),c[C].add(p),c[x].add(p),c[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,x=S.length;C<x;++C){const y=S[C],A=y.start,F=y.count;for(let U=A,W=A+F;U<W;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new I,_=new I,P=new I,T=new I;function E(C){P.fromBufferAttribute(s,C),T.copy(P);const x=a[C];M.copy(x),M.sub(P.multiplyScalar(P.dot(x))).normalize(),_.crossVectors(T,x);const A=_.dot(c[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,A)}for(let C=0,x=S.length;C<x;++C){const y=S[C],A=y.start,F=y.count;for(let U=A,W=A+F;U<W;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let m=0;m<u;m++)f[g++]=l[d++]}return new on(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Du=new le,es=new jo,oo=new or,Uu=new I,ao=new I,co=new I,lo=new I,Oa=new I,uo=new I,Nu=new I,ho=new I;class ut extends qe{constructor(t=new Ve,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Oa.fromBufferAttribute(h,t),o?uo.addScaledVector(Oa,u):uo.addScaledVector(Oa.sub(e),u))}e.add(uo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(oo.containsPoint(es.origin)===!1&&(es.intersectSphere(oo,Uu)===null||es.origin.distanceToSquared(Uu)>(t.far-t.near)**2))&&(Du.copy(r).invert(),es.copy(t.ray).applyMatrix4(Du),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let _=S,P=M;_<P;_+=3){const T=a.getX(_),E=a.getX(_+1),C=a.getX(_+2);s=fo(this,m,t,n,l,u,h,T,E,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const S=a.getX(p),M=a.getX(p+1),_=a.getX(p+2);s=fo(this,o,t,n,l,u,h,S,M,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let _=S,P=M;_<P;_+=3){const T=_,E=_+1,C=_+2;s=fo(this,m,t,n,l,u,h,T,E,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const S=p,M=p+1,_=p+2;s=fo(this,o,t,n,l,u,h,S,M,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Kp(i,t,e,n,s,r,o,a){let c;if(t.side===xn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===wi,a),c===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ho);return l<e.near||l>e.far?null:{distance:l,point:ho.clone(),object:i}}function fo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ao),i.getVertexPosition(c,co),i.getVertexPosition(l,lo);const u=Kp(i,t,e,n,ao,co,lo,Nu);if(u){const h=new I;kn.getBarycoord(Nu,ao,co,lo,h),s&&(u.uv=kn.getInterpolatedAttribute(s,a,c,l,h,new ot)),r&&(u.uv1=kn.getInterpolatedAttribute(r,a,c,l,h,new ot)),o&&(u.normal=kn.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};kn.getNormal(ao,co,lo,f.normal),u.face=f,u.barycoord=h}return u}class yn extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(h,2));function g(v,p,m,S,M,_,P,T,E,C,x){const y=_/E,A=P/C,F=_/2,U=P/2,W=T/2,Y=E+1,X=C+1;let Z=0,z=0;const nt=new I;for(let ht=0;ht<X;ht++){const lt=ht*A-U;for(let It=0;It<Y;It++){const kt=It*y-F;nt[v]=kt*S,nt[p]=lt*M,nt[m]=W,l.push(nt.x,nt.y,nt.z),nt[v]=0,nt[p]=0,nt[m]=T>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(It/E),h.push(1-ht/C),Z+=1}}for(let ht=0;ht<C;ht++)for(let lt=0;lt<E;lt++){const It=f+lt+Y*ht,kt=f+lt+Y*(ht+1),$=f+(lt+1)+Y*(ht+1),st=f+(lt+1)+Y*ht;c.push(It,kt,st),c.push(kt,$,st),z+=6}a.addGroup(d,z,x),d+=z,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function tr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function gn(i){const t={};for(let e=0;e<i.length;e++){const n=tr(i[e]);for(const s in n)t[s]=n[s]}return t}function jp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const Qp={clone:tr,merge:gn};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends qi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sf extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new I,Fu=new ot,Ou=new ot;class vn extends Sf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,Fu,Ou),e.subVectors(Ou,Fu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ls=-90,Ds=1;class n0 extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Ls,Ds,t,e);s.layers=this.layers,this.add(s);const r=new vn(Ls,Ds,t,e);r.layers=this.layers,this.add(r);const o=new vn(Ls,Ds,t,e);o.layers=this.layers,this.add(o);const a=new vn(Ls,Ds,t,e);a.layers=this.layers,this.add(a);const c=new vn(Ls,Ds,t,e);c.layers=this.layers,this.add(c);const l=new vn(Ls,Ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bf extends un{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:$s,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class i0 extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yn(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Vi});r.uniforms.tEquirect.value=e;const o=new ut(s,r),a=e.minFilter;return e.minFilter===us&&(e.minFilter=En),new n0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ba=new I,s0=new I,r0=new se;class Oi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ba.subVectors(n,e).cross(s0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||r0.getNormalMatrix(t),s=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new or,po=new I;class Al{constructor(t=new Oi,e=new Oi,n=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],v=s[10],p=s[11],m=s[12],S=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,p-d,_-m).normalize(),n[1].setComponents(c+r,f+l,p+d,_+m).normalize(),n[2].setComponents(c+o,f+u,p+g,_+S).normalize(),n[3].setComponents(c-o,f-u,p-g,_-S).normalize(),n[4].setComponents(c-a,f-h,p-v,_-M).normalize(),e===Mi)n[5].setComponents(c+a,f+h,p+v,_+M).normalize();else if(e===Vo)n[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function o0(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ze extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const S=m*f-o;for(let M=0;M<l;M++){const _=M*h-r;g.push(_,-S,0),v.push(0,0,1),p.push(M/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const M=S+l*m,_=S+l*(m+1),P=S+1+l*(m+1),T=S+1+l*m;d.push(M,_,T),d.push(_,P,T)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.widthSegments,t.heightSegments)}}var a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
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
#endif`,l0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d0=`#ifdef USE_AOMAP
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
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
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
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y0=`#ifdef USE_IRIDESCENCE
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
#endif`,M0=`#ifdef USE_BUMPMAP
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,P0=`#define PI 3.141592653589793
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
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",B0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
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
#endif`,rm=`struct PhysicalMaterial {
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
}`,om=`
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gm=`#if defined( USE_POINTS_UV )
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
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
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
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xm=`float getShadowMask() {
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
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`#include <common>
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
}`,dg=`#if DEPTH_PACKING == 3200
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
}`,pg=`#define DISTANCE
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
}`,mg=`#define DISTANCE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#define LAMBERT
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
}`,bg=`#define LAMBERT
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
}`,wg=`#define MATCAP
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
}`,Eg=`#define MATCAP
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
}`,Tg=`#define NORMAL
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
}`,Ag=`#define NORMAL
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
}`,Rg=`#define PHONG
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
}`,Cg=`#define PHONG
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
}`,Pg=`#define STANDARD
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
}`,Ig=`#define STANDARD
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
}`,Lg=`#define TOON
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
}`,Dg=`#define TOON
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
}`,Ug=`uniform float size;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Og=`uniform vec3 color;
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
}`,Bg=`uniform float rotation;
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
}`,zg=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:a0,alphahash_pars_fragment:c0,alphamap_fragment:l0,alphamap_pars_fragment:u0,alphatest_fragment:h0,alphatest_pars_fragment:f0,aomap_fragment:d0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:v0,beginnormal_vertex:_0,bsdfs:x0,iridescence_fragment:y0,bumpmap_pars_fragment:M0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:E0,color_fragment:T0,color_pars_fragment:A0,color_pars_vertex:R0,color_vertex:C0,common:P0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:L0,displacementmap_pars_vertex:D0,displacementmap_vertex:U0,emissivemap_fragment:N0,emissivemap_pars_fragment:F0,colorspace_fragment:O0,colorspace_pars_fragment:B0,envmap_fragment:z0,envmap_common_pars_fragment:k0,envmap_pars_fragment:V0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:Q0,envmap_vertex:H0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:q0,fog_pars_fragment:Y0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:$0,lights_lambert_fragment:J0,lights_lambert_pars_fragment:K0,lights_pars_begin:j0,lights_toon_fragment:tm,lights_toon_pars_fragment:em,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:sm,lights_physical_pars_fragment:rm,lights_fragment_begin:om,lights_fragment_maps:am,lights_fragment_end:cm,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:fm,map_fragment:dm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:vm,metalnessmap_pars_fragment:_m,morphinstance_vertex:xm,morphcolor_vertex:ym,morphnormal_vertex:Mm,morphtarget_pars_vertex:Sm,morphtarget_vertex:bm,normal_fragment_begin:wm,normal_fragment_maps:Em,normal_pars_fragment:Tm,normal_pars_vertex:Am,normal_vertex:Rm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Dm,opaque_fragment:Um,packing:Nm,premultiplied_alpha_fragment:Fm,project_vertex:Om,dithering_fragment:Bm,dithering_pars_fragment:zm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:Zm,skinnormal_vertex:$m,specularmap_fragment:Jm,specularmap_pars_fragment:Km,tonemapping_fragment:jm,tonemapping_pars_fragment:Qm,transmission_fragment:tg,transmission_pars_fragment:eg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:sg,worldpos_vertex:rg,background_vert:og,background_frag:ag,backgroundCube_vert:cg,backgroundCube_frag:lg,cube_vert:ug,cube_frag:hg,depth_vert:fg,depth_frag:dg,distanceRGBA_vert:pg,distanceRGBA_frag:mg,equirect_vert:gg,equirect_frag:vg,linedashed_vert:_g,linedashed_frag:xg,meshbasic_vert:yg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:bg,meshmatcap_vert:wg,meshmatcap_frag:Eg,meshnormal_vert:Tg,meshnormal_frag:Ag,meshphong_vert:Rg,meshphong_frag:Cg,meshphysical_vert:Pg,meshphysical_frag:Ig,meshtoon_vert:Lg,meshtoon_frag:Dg,points_vert:Ug,points_frag:Ng,shadow_vert:Fg,shadow_frag:Og,sprite_vert:Bg,sprite_frag:zg},bt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ii={basic:{uniforms:gn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:gn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:gn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:gn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:gn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:gn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:gn([bt.points,bt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:gn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:gn([bt.common,bt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:gn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:gn([bt.sprite,bt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:gn([bt.common,bt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:gn([bt.lights,bt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};ii.physical={uniforms:gn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const mo={r:0,b:0,g:0},is=new ci,kg=new le;function Vg(i,t,e,n,s,r,o){const a=new Yt(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function v(S){let M=!1;const _=g(S);_===null?m(a,c):_&&_.isColor&&(m(_,1),M=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===Jo)?(u===void 0&&(u=new ut(new yn(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:tr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),is.copy(M.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(is)),u.material.toneMapped=ve.getTransfer(_.colorSpace)!==Ce,(h!==_||f!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ut(new Ze(2,2),new Tn({name:"BackgroundMaterial",uniforms:tr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ve.getTransfer(_.colorSpace)!==Ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,M){S.getRGB(mo,Mf(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,m(a,c)},render:v,addToRenderList:p}}function Gg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,A,F,U,W){let Y=!1;const X=h(U,F,A);r!==X&&(r=X,l(r.object)),Y=d(y,U,F,W),Y&&g(y,U,F,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,_(y,A,F,U),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,A,F){const U=F.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let Y=W[A.id];Y===void 0&&(Y={},W[A.id]=Y);let X=Y[U];return X===void 0&&(X=f(c()),Y[U]=X),X}function f(y){const A=[],F=[],U=[];for(let W=0;W<e;W++)A[W]=0,F[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:F,attributeDivisors:U,object:y,attributes:{},index:null}}function d(y,A,F,U){const W=r.attributes,Y=A.attributes;let X=0;const Z=F.getAttributes();for(const z in Z)if(Z[z].location>=0){const ht=W[z];let lt=Y[z];if(lt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor)),ht===void 0||ht.attribute!==lt||lt&&ht.data!==lt.data)return!0;X++}return r.attributesNum!==X||r.index!==U}function g(y,A,F,U){const W={},Y=A.attributes;let X=0;const Z=F.getAttributes();for(const z in Z)if(Z[z].location>=0){let ht=Y[z];ht===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));const lt={};lt.attribute=ht,ht&&ht.data&&(lt.data=ht.data),W[z]=lt,X++}r.attributes=W,r.attributesNum=X,r.index=U}function v(){const y=r.newAttributes;for(let A=0,F=y.length;A<F;A++)y[A]=0}function p(y){m(y,0)}function m(y,A){const F=r.newAttributes,U=r.enabledAttributes,W=r.attributeDivisors;F[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),W[y]!==A&&(i.vertexAttribDivisor(y,A),W[y]=A)}function S(){const y=r.newAttributes,A=r.enabledAttributes;for(let F=0,U=A.length;F<U;F++)A[F]!==y[F]&&(i.disableVertexAttribArray(F),A[F]=0)}function M(y,A,F,U,W,Y,X){X===!0?i.vertexAttribIPointer(y,A,F,W,Y):i.vertexAttribPointer(y,A,F,U,W,Y)}function _(y,A,F,U){v();const W=U.attributes,Y=F.getAttributes(),X=A.defaultAttributeValues;for(const Z in Y){const z=Y[Z];if(z.location>=0){let nt=W[Z];if(nt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const ht=nt.normalized,lt=nt.itemSize,It=t.get(nt);if(It===void 0)continue;const kt=It.buffer,$=It.type,st=It.bytesPerElement,tt=$===i.INT||$===i.UNSIGNED_INT||nt.gpuType===ml;if(nt.isInterleavedBufferAttribute){const K=nt.data,dt=K.stride,xt=nt.offset;if(K.isInstancedInterleavedBuffer){for(let Dt=0;Dt<z.locationSize;Dt++)m(z.location+Dt,K.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Dt=0;Dt<z.locationSize;Dt++)p(z.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Dt=0;Dt<z.locationSize;Dt++)M(z.location+Dt,lt/z.locationSize,$,ht,dt*st,(xt+lt/z.locationSize*Dt)*st,tt)}else{if(nt.isInstancedBufferAttribute){for(let K=0;K<z.locationSize;K++)m(z.location+K,nt.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let K=0;K<z.locationSize;K++)p(z.location+K);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let K=0;K<z.locationSize;K++)M(z.location+K,lt/z.locationSize,$,ht,lt*st,lt/z.locationSize*K*st,tt)}}else if(X!==void 0){const ht=X[Z];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(z.location,ht);break;case 3:i.vertexAttrib3fv(z.location,ht);break;case 4:i.vertexAttrib4fv(z.location,ht);break;default:i.vertexAttrib1fv(z.location,ht)}}}}S()}function P(){C();for(const y in n){const A=n[y];for(const F in A){const U=A[F];for(const W in U)u(U[W].object),delete U[W];delete A[F]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const A=n[y.id];for(const F in A){const U=A[F];for(const W in U)u(U[W].object),delete U[W];delete A[F]}delete n[y.id]}function E(y){for(const A in n){const F=n[A];if(F[y.id]===void 0)continue;const U=F[y.id];for(const W in U)u(U[W].object),delete U[W];delete F[y.id]}}function C(){x(),o=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:x,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function Hg(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Wg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Vn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==ti&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==si&&!C)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:P,maxSamples:T}}function Xg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Oi,a=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const S=r?0:n,M=S*4;let _=m.clippingState||null;c.value=_,_=u(g,f,M,d);for(let P=0;P!==M;++P)_[P]=e[P];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=d+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,_=d;M!==v;++M,_+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function qg(i){let t=new WeakMap;function e(o,a){return a===Sc?o.mapping=$s:a===bc&&(o.mapping=Js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sc||a===bc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new i0(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Qo extends Sf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hs=4,Bu=[.125,.215,.35,.446,.526,.582],as=20,za=new Qo,zu=new Yt;let ka=null,Va=0,Ga=0,Ha=!1;const os=(1+Math.sqrt(5))/2,Us=1/os,ku=[new I(-os,Us,0),new I(os,Us,0),new I(-Us,0,os),new I(Us,0,os),new I(0,os,-Us),new I(0,os,Us),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Vu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ka=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ka,Va,Ga),this._renderer.xr.enabled=Ha,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ka=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:ir,format:Vn,colorSpace:sr,depthBuffer:!1},s=Gu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yg(r)),this._blurMaterial=Zg(r,t,e)}return s}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,s){const a=new vn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(zu),u.toneMapping=Gi,u.autoClear=!1;const d=new Xe({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new ut(new yn,d);let v=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,v=!0):(d.color.copy(zu),v=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):S===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const M=this._cubeSize;go(s,S*M,m>2?M:0,M,M),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===$s||t.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;go(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,za)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ku[(s-r-1)%ku.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ut(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*as-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):as;p>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${as}`);const m=[];let S=0;for(let E=0;E<as;++E){const C=E/v,x=Math.exp(-C*C/2);m.push(x),E===0?S+=x:E<p&&(S+=2*x)}for(let E=0;E<m.length;E++)m[E]=m[E]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const _=this._sizeLods[s],P=3*_*(s>M-Hs?s-M+Hs:0),T=4*(this._cubeSize-_);go(e,P,T,3*_,2*_),c.setRenderTarget(e),c.render(h,za)}}function Yg(i){const t=[],e=[],n=[];let s=i;const r=i-Hs+1+Bu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Hs?c=Bu[o-i+Hs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,p=2,m=1,S=new Float32Array(v*g*d),M=new Float32Array(p*g*d),_=new Float32Array(m*g*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,C=T>2?0:-1,x=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];S.set(x,v*g*T),M.set(f,p*g*T);const y=[T,T,T,T,T,T];_.set(y,m*g*T)}const P=new Ve;P.setAttribute("position",new on(S,v)),P.setAttribute("uv",new on(M,p)),P.setAttribute("faceIndex",new on(_,m)),t.push(P),s>Hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gu(i,t,e){const n=new ai(i,t,e);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zg(i,t,e){const n=new Float32Array(as),s=new I(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Hu(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Wu(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function $g(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Sc||c===bc,u=c===$s||c===Js;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Vu(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Vu(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Jg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Kg(i,t,e,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let M=0,_=S.length;M<_;M+=3){const P=S[M+0],T=S[M+1],E=S[M+2];f.push(P,T,T,E,E,P)}}else if(g!==void 0){const S=g.array;v=g.version;for(let M=0,_=S.length/3-1;M<_;M+=3){const P=M+0,T=M+1,E=M+2;f.push(P,T,T,E,E,P)}}else return;const p=new(gf(f)?yf:Tl)(f,1);p.version=v;const m=r.get(h);m&&t.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function jg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function h(f,d,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let m=0;for(let S=0;S<g;S++)m+=d[S]*v[S];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Qg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tv(i,t,e){const n=new WeakMap,s=new xe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let P=a.attributes.position.count*_,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const E=new Float32Array(P*T*4*h),C=new _f(E,P,T,h);C.type=si,C.needsUpdate=!0;const x=_*4;for(let A=0;A<h;A++){const F=m[A],U=S[A],W=M[A],Y=P*T*4*A;for(let X=0;X<F.count;X++){const Z=X*x;g===!0&&(s.fromBufferAttribute(F,X),E[Y+Z+0]=s.x,E[Y+Z+1]=s.y,E[Y+Z+2]=s.z,E[Y+Z+3]=0),v===!0&&(s.fromBufferAttribute(U,X),E[Y+Z+4]=s.x,E[Y+Z+5]=s.y,E[Y+Z+6]=s.z,E[Y+Z+7]=0),p===!0&&(s.fromBufferAttribute(W,X),E[Y+Z+8]=s.x,E[Y+Z+9]=s.y,E[Y+Z+10]=s.z,E[Y+Z+11]=W.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new ot(P,T)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ev(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Ef extends un{constructor(t,e,n,s,r,o,a,c,l,u=qs){if(u!==qs&&u!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qs&&(n=fs),n===void 0&&u===Qs&&(n=js),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Dn,this.minFilter=c!==void 0?c:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tf=new un,Xu=new Ef(1,1),Af=new _f,Rf=new Vp,Cf=new bf,qu=[],Yu=[],Zu=new Float32Array(16),$u=new Float32Array(9),Ju=new Float32Array(4);function ar(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ta(i,t){let e=Yu[t];e===void 0&&(e=new Int32Array(t),Yu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function iv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function sv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function rv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function ov(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Ju.set(n),i.uniformMatrix2fv(this.addr,!1,Ju),Ke(e,n)}}function av(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),Ke(e,n)}}function cv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Zu.set(n),i.uniformMatrix4fv(this.addr,!1,Zu),Ke(e,n)}}function lv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function hv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function dv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function mv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function gv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function vv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xu.compareFunction=mf,r=Xu):r=Tf,e.setTexture2D(t||r,s)}function _v(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rf,s)}function xv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Cf,s)}function yv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Af,s)}function Mv(i){switch(i){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return ov;case 35675:return av;case 35676:return cv;case 5124:case 35670:return lv;case 35667:case 35671:return uv;case 35668:case 35672:return hv;case 35669:case 35673:return fv;case 5125:return dv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return yv}}function Sv(i,t){i.uniform1fv(this.addr,t)}function bv(i,t){const e=ar(t,this.size,2);i.uniform2fv(this.addr,e)}function wv(i,t){const e=ar(t,this.size,3);i.uniform3fv(this.addr,e)}function Ev(i,t){const e=ar(t,this.size,4);i.uniform4fv(this.addr,e)}function Tv(i,t){const e=ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Av(i,t){const e=ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Rv(i,t){const e=ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cv(i,t){i.uniform1iv(this.addr,t)}function Pv(i,t){i.uniform2iv(this.addr,t)}function Iv(i,t){i.uniform3iv(this.addr,t)}function Lv(i,t){i.uniform4iv(this.addr,t)}function Dv(i,t){i.uniform1uiv(this.addr,t)}function Uv(i,t){i.uniform2uiv(this.addr,t)}function Nv(i,t){i.uniform3uiv(this.addr,t)}function Fv(i,t){i.uniform4uiv(this.addr,t)}function Ov(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Tf,r[o])}function Bv(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rf,r[o])}function zv(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Cf,r[o])}function kv(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Af,r[o])}function Vv(i){switch(i){case 5126:return Sv;case 35664:return bv;case 35665:return wv;case 35666:return Ev;case 35674:return Tv;case 35675:return Av;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Pv;case 35668:case 35672:return Iv;case 35669:case 35673:return Lv;case 5125:return Dv;case 36294:return Uv;case 36295:return Nv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return kv}}class Gv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mv(e.type)}}class Hv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vv(e.type)}}class Wv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function Ku(i,t){i.seq.push(t),i.map[t.id]=t}function Xv(i,t,e){const n=i.name,s=n.length;for(Wa.lastIndex=0;;){const r=Wa.exec(n),o=Wa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ku(e,l===void 0?new Gv(a,i,t):new Hv(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Wv(a),Ku(e,h)),e=h}}}class Fo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Xv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ju(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const qv=37297;let Yv=0;function Zv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Qu=new se;function $v(i){ve._getMatrix(Qu,ve.workingColorSpace,i);const t=`mat3( ${Qu.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case Ko:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function th(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Zv(i.getShaderSource(t),o)}else return s}function Jv(i,t){const e=$v(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kv(i,t){let e;switch(t){case Jd:e="Linear";break;case Kd:e="Reinhard";break;case jd:e="Cineon";break;case Qd:e="ACESFilmic";break;case ep:e="AgX";break;case np:e="Neutral";break;case tp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vo=new I;function jv(){ve.getLuminanceCoefficients(vo);const i=vo.x.toFixed(4),t=vo.y.toFixed(4),e=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function t_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Pr(i){return i!==""}function eh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(i){return i.replace(n_,s_)}const i_=new Map;function s_(i,t){let e=oe[t];if(e===void 0){const n=i_.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qc(e)}const r_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(i){return i.replace(r_,o_)}function o_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function a_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xi&&(t="SHADOWMAP_TYPE_VSM"),t}function c_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $s:case Js:t="ENVMAP_TYPE_CUBE";break;case Jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function l_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Js:t="ENVMAP_MODE_REFRACTION";break}return t}function u_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ef:t="ENVMAP_BLENDING_MULTIPLY";break;case Zd:t="ENVMAP_BLENDING_MIX";break;case $d:t="ENVMAP_BLENDING_ADD";break}return t}function h_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function f_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=a_(e),l=c_(e),u=l_(e),h=u_(e),f=h_(e),d=Qv(e),g=t_(r),v=s.createProgram();let p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(p=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?oe.tonemapping_pars_fragment:"",e.toneMapping!==Gi?Kv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Jv("linearToOutputTexel",e.outputColorSpace),jv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),o=Qc(o),o=eh(o,e),o=nh(o,e),a=Qc(a),a=eh(a,e),a=nh(a,e),o=ih(o),a=ih(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=S+p+o,_=S+m+a,P=ju(s,s.VERTEX_SHADER,M),T=ju(s,s.FRAGMENT_SHADER,_);s.attachShader(v,P),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(A){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v).trim(),U=s.getShaderInfoLog(P).trim(),W=s.getShaderInfoLog(T).trim();let Y=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,T);else{const Z=th(s,P,"vertex"),z=th(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+Z+`
`+z)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||W==="")&&(X=!1);X&&(A.diagnostics={runnable:Y,programLog:F,vertexShader:{log:U,prefix:p},fragmentShader:{log:W,prefix:m}})}s.deleteShader(P),s.deleteShader(T),C=new Fo(s,v),x=e_(s,v)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,qv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=T,this}let d_=0;class p_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new m_(t),e.set(t,n)),n}}class m_{constructor(t){this.id=d_++,this.code=t,this.usedTimes=0}}function g_(i,t,e,n,s,r,o){const a=new El,c=new p_,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,y,A,F,U){const W=F.fog,Y=U.geometry,X=x.isMeshStandardMaterial?F.environment:null,Z=(x.isMeshStandardMaterial?e:t).get(x.envMap||X),z=Z&&Z.mapping===Jo?Z.image.height:null,nt=g[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,lt=ht!==void 0?ht.length:0;let It=0;Y.morphAttributes.position!==void 0&&(It=1),Y.morphAttributes.normal!==void 0&&(It=2),Y.morphAttributes.color!==void 0&&(It=3);let kt,$,st,tt;if(nt){const pe=ii[nt];kt=pe.vertexShader,$=pe.fragmentShader}else kt=x.vertexShader,$=x.fragmentShader,c.update(x),st=c.getVertexShaderID(x),tt=c.getFragmentShaderID(x);const K=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),xt=U.isInstancedMesh===!0,Dt=U.isBatchedMesh===!0,ee=!!x.map,it=!!x.matcap,mt=!!Z,L=!!x.aoMap,Ot=!!x.lightMap,ft=!!x.bumpMap,Ct=!!x.normalMap,_t=!!x.displacementMap,Ht=!!x.emissiveMap,At=!!x.metalnessMap,R=!!x.roughnessMap,w=x.anisotropy>0,H=x.clearcoat>0,Q=x.dispersion>0,at=x.iridescence>0,et=x.sheen>0,Ut=x.transmission>0,yt=w&&!!x.anisotropyMap,Rt=H&&!!x.clearcoatMap,ce=H&&!!x.clearcoatNormalMap,pt=H&&!!x.clearcoatRoughnessMap,Pt=at&&!!x.iridescenceMap,Wt=at&&!!x.iridescenceThicknessMap,qt=et&&!!x.sheenColorMap,Lt=et&&!!x.sheenRoughnessMap,Qt=!!x.specularMap,Xt=!!x.specularColorMap,be=!!x.specularIntensityMap,O=Ut&&!!x.transmissionMap,St=Ut&&!!x.thicknessMap,j=!!x.gradientMap,rt=!!x.alphaMap,wt=x.alphaTest>0,Et=!!x.alphaHash,jt=!!x.extensions;let Fe=Gi;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const je={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:kt,fragmentShader:$,defines:x.defines,customVertexShaderID:st,customFragmentShaderID:tt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Dt,batchingColor:Dt&&U._colorsTexture!==null,instancing:xt,instancingColor:xt&&U.instanceColor!==null,instancingMorph:xt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:sr,alphaToCoverage:!!x.alphaToCoverage,map:ee,matcap:it,envMap:mt,envMapMode:mt&&Z.mapping,envMapCubeUVHeight:z,aoMap:L,lightMap:Ot,bumpMap:ft,normalMap:Ct,displacementMap:f&&_t,emissiveMap:Ht,normalMapObjectSpace:Ct&&x.normalMapType===lp,normalMapTangentSpace:Ct&&x.normalMapType===pf,metalnessMap:At,roughnessMap:R,anisotropy:w,anisotropyMap:yt,clearcoat:H,clearcoatMap:Rt,clearcoatNormalMap:ce,clearcoatRoughnessMap:pt,dispersion:Q,iridescence:at,iridescenceMap:Pt,iridescenceThicknessMap:Wt,sheen:et,sheenColorMap:qt,sheenRoughnessMap:Lt,specularMap:Qt,specularColorMap:Xt,specularIntensityMap:be,transmission:Ut,transmissionMap:O,thicknessMap:St,gradientMap:j,opaque:x.transparent===!1&&x.blending===Xs&&x.alphaToCoverage===!1,alphaMap:rt,alphaTest:wt,alphaHash:Et,combine:x.combine,mapUv:ee&&v(x.map.channel),aoMapUv:L&&v(x.aoMap.channel),lightMapUv:Ot&&v(x.lightMap.channel),bumpMapUv:ft&&v(x.bumpMap.channel),normalMapUv:Ct&&v(x.normalMap.channel),displacementMapUv:_t&&v(x.displacementMap.channel),emissiveMapUv:Ht&&v(x.emissiveMap.channel),metalnessMapUv:At&&v(x.metalnessMap.channel),roughnessMapUv:R&&v(x.roughnessMap.channel),anisotropyMapUv:yt&&v(x.anisotropyMap.channel),clearcoatMapUv:Rt&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(x.sheenRoughnessMap.channel),specularMapUv:Qt&&v(x.specularMap.channel),specularColorMapUv:Xt&&v(x.specularColorMap.channel),specularIntensityMapUv:be&&v(x.specularIntensityMap.channel),transmissionMapUv:O&&v(x.transmissionMap.channel),thicknessMapUv:St&&v(x.thicknessMap.channel),alphaMapUv:rt&&v(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ct||w),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(ee||rt),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:dt,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:It,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ee&&x.map.isVideoTexture===!0&&ve.getTransfer(x.map.colorSpace)===Ce,decodeVideoTextureEmissive:Ht&&x.emissiveMap.isVideoTexture===!0&&ve.getTransfer(x.emissiveMap.colorSpace)===Ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ge,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:jt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&x.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function m(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)y.push(A),y.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(S(y,x),M(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function _(x){const y=g[x.type];let A;if(y){const F=ii[y];A=Qp.clone(F.uniforms)}else A=x.uniforms;return A}function P(x,y){let A;for(let F=0,U=u.length;F<U;F++){const W=u[F];if(W.cacheKey===y){A=W,++A.usedTimes;break}}return A===void 0&&(A=new f_(i,y,x,r),u.push(A)),A}function T(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function E(x){c.remove(x)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:P,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:C}}function v_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function __(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function rh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,g,v,p){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},i[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=v,m.group=p),t++,m}function a(h,f,d,g,v,p){const m=o(h,f,d,g,v,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(h,f,d,g,v,p){const m=o(h,f,d,g,v,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(h,f){e.length>1&&e.sort(h||__),n.length>1&&n.sort(f||rh),s.length>1&&s.sort(f||rh)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function x_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new oh,i.set(n,[o])):s>=r.length?(o=new oh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function y_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Yt};break;case"SpotLight":e={position:new I,direction:new I,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function M_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let S_=0;function b_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w_(i){const t=new y_,e=M_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new le,o=new le;function a(l){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,S=0,M=0,_=0,P=0,T=0,E=0;l.sort(b_);for(let x=0,y=l.length;x<y;x++){const A=l[x],F=A.color,U=A.intensity,W=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=F.r*U,h+=F.g*U,f+=F.b*U;else if(A.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(A.sh.coefficients[X],U);E++}else if(A.isDirectionalLight){const X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Z=A.shadow,z=e.get(A);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=A.shadow.matrix,S++}n.directional[d]=X,d++}else if(A.isSpotLight){const X=t.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(F).multiplyScalar(U),X.distance=W,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,n.spot[v]=X;const Z=A.shadow;if(A.map&&(n.spotLightMap[P]=A.map,P++,Z.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[v]=Z.matrix,A.castShadow){const z=e.get(A);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=Y,_++}v++}else if(A.isRectAreaLight){const X=t.get(A);X.color.copy(F).multiplyScalar(U),X.halfWidth.set(A.width*.5,0,0),X.halfHeight.set(0,A.height*.5,0),n.rectArea[p]=X,p++}else if(A.isPointLight){const X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){const Z=A.shadow,z=e.get(A);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=A.shadow.matrix,M++}n.point[g]=X,g++}else if(A.isHemisphereLight){const X=t.get(A);X.skyColor.copy(A.color).multiplyScalar(U),X.groundColor.copy(A.groundColor).multiplyScalar(U),n.hemi[m]=X,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==S||C.numPointShadows!==M||C.numSpotShadows!==_||C.numSpotMaps!==P||C.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,C.directionalLength=d,C.pointLength=g,C.spotLength=v,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=S,C.numPointShadows=M,C.numSpotShadows=_,C.numSpotMaps=P,C.numLightProbes=E,n.version=S_++)}function c(l,u){let h=0,f=0,d=0,g=0,v=0;const p=u.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const M=l[m];if(M.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),h++}else if(M.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:n}}function ah(i){const t=new w_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function E_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ah(i),t.set(s,[a])):r>=o.length?(a=new ah(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class T_ extends qi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class A_ extends qi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`;function P_(i,t,e){let n=new Al;const s=new ot,r=new ot,o=new xe,a=new T_({depthPacking:cp}),c=new A_,l={},u=e.maxTextureSize,h={[wi]:xn,[xn]:wi,[Ge]:Ge},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ut(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let m=this.type;this.render=function(T,E,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const x=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Vi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=m!==xi&&this.type===xi,W=m===xi&&this.type!==xi;for(let Y=0,X=T.length;Y<X;Y++){const Z=T[Y],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const nt=z.getFrameExtents();if(s.multiply(nt),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,z.mapSize.y=r.y)),z.map===null||U===!0||W===!0){const lt=this.type!==xi?{minFilter:Dn,magFilter:Dn}:{};z.map!==null&&z.map.dispose(),z.map=new ai(s.x,s.y,lt),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ht=z.getViewportCount();for(let lt=0;lt<ht;lt++){const It=z.getViewport(lt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),F.viewport(o),z.updateMatrices(Z,lt),n=z.getFrustum(),_(E,C,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===xi&&S(z,C),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(x,y,A)};function S(T,E){const C=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,C,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,C,d,v,null)}function M(T,E,C,x){let y=null;const A=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)y=A;else if(y=C.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=y.uuid,U=E.uuid;let W=l[F];W===void 0&&(W={},l[F]=W);let Y=W[U];Y===void 0&&(Y=y.clone(),W[U]=Y,E.addEventListener("dispose",P)),y=Y}if(y.visible=E.visible,y.wireframe=E.wireframe,x===xi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=i.properties.get(y);F.light=C}return y}function _(T,E,C,x,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===xi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const U=t.update(T),W=T.material;if(Array.isArray(W)){const Y=U.groups;for(let X=0,Z=Y.length;X<Z;X++){const z=Y[X],nt=W[z.materialIndex];if(nt&&nt.visible){const ht=M(T,nt,x,y);T.onBeforeShadow(i,T,E,C,U,ht,z),i.renderBufferDirect(C,null,U,ht,T,z),T.onAfterShadow(i,T,E,C,U,ht,z)}}}else if(W.visible){const Y=M(T,W,x,y);T.onBeforeShadow(i,T,E,C,U,Y,null),i.renderBufferDirect(C,null,U,Y,T,null),T.onAfterShadow(i,T,E,C,U,Y,null)}}const F=T.children;for(let U=0,W=F.length;U<W;U++)_(F[U],E,C,x,y)}function P(T){T.target.removeEventListener("dispose",P);for(const C in l){const x=l[C],y=T.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const I_={[mc]:gc,[vc]:yc,[_c]:Mc,[Zs]:xc,[gc]:mc,[yc]:vc,[Mc]:_c,[xc]:Zs};function L_(i,t){function e(){let O=!1;const St=new xe;let j=null;const rt=new xe(0,0,0,0);return{setMask:function(wt){j!==wt&&!O&&(i.colorMask(wt,wt,wt,wt),j=wt)},setLocked:function(wt){O=wt},setClear:function(wt,Et,jt,Fe,je){je===!0&&(wt*=Fe,Et*=Fe,jt*=Fe),St.set(wt,Et,jt,Fe),rt.equals(St)===!1&&(i.clearColor(wt,Et,jt,Fe),rt.copy(St))},reset:function(){O=!1,j=null,rt.set(-1,0,0,0)}}}function n(){let O=!1,St=!1,j=null,rt=null,wt=null;return{setReversed:function(Et){if(St!==Et){const jt=t.get("EXT_clip_control");St?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const Fe=wt;wt=null,this.setClear(Fe)}St=Et},getReversed:function(){return St},setTest:function(Et){Et?K(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(Et){j!==Et&&!O&&(i.depthMask(Et),j=Et)},setFunc:function(Et){if(St&&(Et=I_[Et]),rt!==Et){switch(Et){case mc:i.depthFunc(i.NEVER);break;case gc:i.depthFunc(i.ALWAYS);break;case vc:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case _c:i.depthFunc(i.EQUAL);break;case xc:i.depthFunc(i.GEQUAL);break;case yc:i.depthFunc(i.GREATER);break;case Mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=Et}},setLocked:function(Et){O=Et},setClear:function(Et){wt!==Et&&(St&&(Et=1-Et),i.clearDepth(Et),wt=Et)},reset:function(){O=!1,j=null,rt=null,wt=null,St=!1}}}function s(){let O=!1,St=null,j=null,rt=null,wt=null,Et=null,jt=null,Fe=null,je=null;return{setTest:function(pe){O||(pe?K(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(pe){St!==pe&&!O&&(i.stencilMask(pe),St=pe)},setFunc:function(pe,an,Ue){(j!==pe||rt!==an||wt!==Ue)&&(i.stencilFunc(pe,an,Ue),j=pe,rt=an,wt=Ue)},setOp:function(pe,an,Ue){(Et!==pe||jt!==an||Fe!==Ue)&&(i.stencilOp(pe,an,Ue),Et=pe,jt=an,Fe=Ue)},setLocked:function(pe){O=pe},setClear:function(pe){je!==pe&&(i.clearStencil(pe),je=pe)},reset:function(){O=!1,St=null,j=null,rt=null,wt=null,Et=null,jt=null,Fe=null,je=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,p=null,m=null,S=null,M=null,_=null,P=null,T=null,E=new Yt(0,0,0),C=0,x=!1,y=null,A=null,F=null,U=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=Z>=2);let nt=null,ht={};const lt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),kt=new xe().fromArray(lt),$=new xe().fromArray(It);function st(O,St,j,rt){const wt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(O,Et),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<j;jt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(St+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Et}const tt={};tt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(Zs),ft(!1),Ct(hu),K(i.CULL_FACE),L(Vi);function K(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function dt(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function xt(O,St){return h[O]!==St?(i.bindFramebuffer(O,St),h[O]=St,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=St),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Dt(O,St){let j=d,rt=!1;if(O){j=f.get(St),j===void 0&&(j=[],f.set(St,j));const wt=O.textures;if(j.length!==wt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,jt=wt.length;Et<jt;Et++)j[Et]=i.COLOR_ATTACHMENT0+Et;j.length=wt.length,rt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,rt=!0);rt&&i.drawBuffers(j)}function ee(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const it={[yi]:i.FUNC_ADD,[Dd]:i.FUNC_SUBTRACT,[tf]:i.FUNC_REVERSE_SUBTRACT};it[Ud]=i.MIN,it[Nd]=i.MAX;const mt={[Fd]:i.ZERO,[fc]:i.ONE,[Od]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[Hd]:i.SRC_ALPHA_SATURATE,[Vd]:i.DST_COLOR,[zd]:i.DST_ALPHA,[Bd]:i.ONE_MINUS_SRC_COLOR,[pc]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[kd]:i.ONE_MINUS_DST_ALPHA,[Wd]:i.CONSTANT_COLOR,[Xd]:i.ONE_MINUS_CONSTANT_COLOR,[qd]:i.CONSTANT_ALPHA,[Yd]:i.ONE_MINUS_CONSTANT_ALPHA};function L(O,St,j,rt,wt,Et,jt,Fe,je,pe){if(O===Vi){v===!0&&(dt(i.BLEND),v=!1);return}if(v===!1&&(K(i.BLEND),v=!0),O!==Qh){if(O!==p||pe!==x){if((m!==yi||_!==yi)&&(i.blendEquation(i.FUNC_ADD),m=yi,_=yi),pe)switch(O){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFunc(i.ONE,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,M=null,P=null,T=null,E.set(0,0,0),C=0,p=O,x=pe}return}wt=wt||St,Et=Et||j,jt=jt||rt,(St!==m||wt!==_)&&(i.blendEquationSeparate(it[St],it[wt]),m=St,_=wt),(j!==S||rt!==M||Et!==P||jt!==T)&&(i.blendFuncSeparate(mt[j],mt[rt],mt[Et],mt[jt]),S=j,M=rt,P=Et,T=jt),(Fe.equals(E)===!1||je!==C)&&(i.blendColor(Fe.r,Fe.g,Fe.b,je),E.copy(Fe),C=je),p=O,x=!1}function Ot(O,St){O.side===Ge?dt(i.CULL_FACE):K(i.CULL_FACE);let j=O.side===xn;St&&(j=!j),ft(j),O.blending===Xs&&O.transparent===!1?L(Vi):L(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const rt=O.stencilWrite;a.setTest(rt),rt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function Ct(O){O!==Id?(K(i.CULL_FACE),O!==A&&(O===hu?i.cullFace(i.BACK):O===Ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),A=O}function _t(O){O!==F&&(X&&i.lineWidth(O),F=O)}function Ht(O,St,j){O?(K(i.POLYGON_OFFSET_FILL),(U!==St||W!==j)&&(i.polygonOffset(St,j),U=St,W=j)):dt(i.POLYGON_OFFSET_FILL)}function At(O){O?K(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function R(O){O===void 0&&(O=i.TEXTURE0+Y-1),nt!==O&&(i.activeTexture(O),nt=O)}function w(O,St,j){j===void 0&&(nt===null?j=i.TEXTURE0+Y-1:j=nt);let rt=ht[j];rt===void 0&&(rt={type:void 0,texture:void 0},ht[j]=rt),(rt.type!==O||rt.texture!==St)&&(nt!==j&&(i.activeTexture(j),nt=j),i.bindTexture(O,St||tt[O]),rt.type=O,rt.texture=St)}function H(){const O=ht[nt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qt(O){kt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),kt.copy(O))}function Lt(O){$.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function Qt(O,St){let j=l.get(St);j===void 0&&(j=new WeakMap,l.set(St,j));let rt=j.get(O);rt===void 0&&(rt=i.getUniformBlockIndex(St,O.name),j.set(O,rt))}function Xt(O,St){const rt=l.get(St).get(O);c.get(St)!==rt&&(i.uniformBlockBinding(St,rt,O.__bindingPointIndex),c.set(St,rt))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},nt=null,ht={},h={},f=new WeakMap,d=[],g=null,v=!1,p=null,m=null,S=null,M=null,_=null,P=null,T=null,E=new Yt(0,0,0),C=0,x=!1,y=null,A=null,F=null,U=null,W=null,kt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:dt,bindFramebuffer:xt,drawBuffers:Dt,useProgram:ee,setBlending:L,setMaterial:Ot,setFlipSided:ft,setCullFace:Ct,setLineWidth:_t,setPolygonOffset:Ht,setScissorTest:At,activeTexture:R,bindTexture:w,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:at,texImage2D:Pt,texImage3D:Wt,updateUBOMapping:Qt,uniformBlockBinding:Xt,texStorage2D:ce,texStorage3D:pt,texSubImage2D:et,texSubImage3D:Ut,compressedTexSubImage2D:yt,compressedTexSubImage3D:Rt,scissor:qt,viewport:Lt,reset:be}}function ch(i,t,e,n){const s=D_(n);switch(e){case af:return i*t;case lf:return i*t;case uf:return i*t*2;case _l:return i*t/s.components*s.byteLength;case xl:return i*t/s.components*s.byteLength;case hf:return i*t*2/s.components*s.byteLength;case yl:return i*t*2/s.components*s.byteLength;case cf:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case Ml:return i*t*4/s.components*s.byteLength;case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Do:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Rc:return Math.max(i,16)*Math.max(t,8)/4;case Ec:case Ac:return Math.max(i,8)*Math.max(t,8)/2;case Cc:case Pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case kc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case No:case qc:case Yc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ff:case Zc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $c:case Jc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function D_(i){switch(i){case ti:case sf:return{byteLength:1,components:1};case Fr:case rf:case ir:return{byteLength:2,components:1};case gl:case vl:return{byteLength:2,components:4};case fs:case ml:case si:return{byteLength:4,components:1};case of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function U_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return d?new OffscreenCanvas(R,w):Br("canvas")}function v(R,w,H){let Q=1;const at=At(R);if((at.width>H||at.height>H)&&(Q=H/Math.max(at.width,at.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){const et=Math.floor(Q*at.width),Ut=Math.floor(Q*at.height);h===void 0&&(h=g(et,Ut));const yt=w?g(et,Ut):h;return yt.width=et,yt.height=Ut,yt.getContext("2d").drawImage(R,0,0,et,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+et+"x"+Ut+")."),yt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,w,H,Q,at=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=w;if(w===i.RED&&(H===i.FLOAT&&(et=i.R32F),H===i.HALF_FLOAT&&(et=i.R16F),H===i.UNSIGNED_BYTE&&(et=i.R8)),w===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.R8UI),H===i.UNSIGNED_SHORT&&(et=i.R16UI),H===i.UNSIGNED_INT&&(et=i.R32UI),H===i.BYTE&&(et=i.R8I),H===i.SHORT&&(et=i.R16I),H===i.INT&&(et=i.R32I)),w===i.RG&&(H===i.FLOAT&&(et=i.RG32F),H===i.HALF_FLOAT&&(et=i.RG16F),H===i.UNSIGNED_BYTE&&(et=i.RG8)),w===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RG8UI),H===i.UNSIGNED_SHORT&&(et=i.RG16UI),H===i.UNSIGNED_INT&&(et=i.RG32UI),H===i.BYTE&&(et=i.RG8I),H===i.SHORT&&(et=i.RG16I),H===i.INT&&(et=i.RG32I)),w===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGB8UI),H===i.UNSIGNED_SHORT&&(et=i.RGB16UI),H===i.UNSIGNED_INT&&(et=i.RGB32UI),H===i.BYTE&&(et=i.RGB8I),H===i.SHORT&&(et=i.RGB16I),H===i.INT&&(et=i.RGB32I)),w===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),H===i.UNSIGNED_INT&&(et=i.RGBA32UI),H===i.BYTE&&(et=i.RGBA8I),H===i.SHORT&&(et=i.RGBA16I),H===i.INT&&(et=i.RGBA32I)),w===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),w===i.RGBA){const Ut=at?Ko:ve.getTransfer(Q);H===i.FLOAT&&(et=i.RGBA32F),H===i.HALF_FLOAT&&(et=i.RGBA16F),H===i.UNSIGNED_BYTE&&(et=Ut===Ce?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(R,w){let H;return R?w===null||w===fs||w===js?H=i.DEPTH24_STENCIL8:w===si?H=i.DEPTH32F_STENCIL8:w===Fr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===fs||w===js?H=i.DEPTH_COMPONENT24:w===si?H=i.DEPTH_COMPONENT32F:w===Fr&&(H=i.DEPTH_COMPONENT16),H}function P(R,w){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Dn&&R.minFilter!==En?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function T(R){const w=R.target;w.removeEventListener("dispose",T),C(w),w.isVideoTexture&&u.delete(w)}function E(R){const w=R.target;w.removeEventListener("dispose",E),y(w)}function C(R){const w=n.get(R);if(w.__webglInit===void 0)return;const H=R.source,Q=f.get(H);if(Q){const at=Q[w.__cacheKey];at.usedTimes--,at.usedTimes===0&&x(R),Object.keys(Q).length===0&&f.delete(H)}n.remove(R)}function x(R){const w=n.get(R);i.deleteTexture(w.__webglTexture);const H=R.source,Q=f.get(H);delete Q[w.__cacheKey],o.memory.textures--}function y(R){const w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let at=0;at<w.__webglFramebuffer[Q].length;at++)i.deleteFramebuffer(w.__webglFramebuffer[Q][at]);else i.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[Q]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=R.textures;for(let Q=0,at=H.length;Q<at;Q++){const et=n.get(H[Q]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(H[Q])}n.remove(R)}let A=0;function F(){A=0}function U(){const R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function W(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function Y(R,w){const H=n.get(R);if(R.isVideoTexture&&_t(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,R,w);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+w)}function X(R,w){const H=n.get(R);if(R.version>0&&H.__version!==R.version){$(H,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+w)}function Z(R,w){const H=n.get(R);if(R.version>0&&H.__version!==R.version){$(H,R,w);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+w)}function z(R,w){const H=n.get(R);if(R.version>0&&H.__version!==R.version){st(H,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+w)}const nt={[Ks]:i.REPEAT,[ls]:i.CLAMP_TO_EDGE,[wc]:i.MIRRORED_REPEAT},ht={[Dn]:i.NEAREST,[sp]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[us]:i.LINEAR_MIPMAP_LINEAR},lt={[up]:i.NEVER,[gp]:i.ALWAYS,[hp]:i.LESS,[mf]:i.LEQUAL,[fp]:i.EQUAL,[mp]:i.GEQUAL,[dp]:i.GREATER,[pp]:i.NOTEQUAL};function It(R,w){if(w.type===si&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===En||w.magFilter===va||w.magFilter===Jr||w.magFilter===us||w.minFilter===En||w.minFilter===va||w.minFilter===Jr||w.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,nt[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,nt[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,nt[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ht[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ht[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,lt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Dn||w.minFilter!==Jr&&w.minFilter!==us||w.type===si&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function kt(R,w){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",T));const Q=w.source;let at=f.get(Q);at===void 0&&(at={},f.set(Q,at));const et=W(w);if(et!==R.__cacheKey){at[et]===void 0&&(at[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),at[et].usedTimes++;const Ut=at[R.__cacheKey];Ut!==void 0&&(at[R.__cacheKey].usedTimes--,Ut.usedTimes===0&&x(w)),R.__cacheKey=et,R.__webglTexture=at[et].texture}return H}function $(R,w,H){let Q=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=i.TEXTURE_3D);const at=kt(R,w),et=w.source;e.bindTexture(Q,R.__webglTexture,i.TEXTURE0+H);const Ut=n.get(et);if(et.version!==Ut.__version||at===!0){e.activeTexture(i.TEXTURE0+H);const yt=ve.getPrimaries(ve.workingColorSpace),Rt=w.colorSpace===Bi?null:ve.getPrimaries(w.colorSpace),ce=w.colorSpace===Bi||yt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let pt=v(w.image,!1,s.maxTextureSize);pt=Ht(w,pt);const Pt=r.convert(w.format,w.colorSpace),Wt=r.convert(w.type);let qt=M(w.internalFormat,Pt,Wt,w.colorSpace,w.isVideoTexture);It(Q,w);let Lt;const Qt=w.mipmaps,Xt=w.isVideoTexture!==!0,be=Ut.__version===void 0||at===!0,O=et.dataReady,St=P(w,pt);if(w.isDepthTexture)qt=_(w.format===Qs,w.type),be&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,qt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,qt,pt.width,pt.height,0,Pt,Wt,null));else if(w.isDataTexture)if(Qt.length>0){Xt&&be&&e.texStorage2D(i.TEXTURE_2D,St,qt,Qt[0].width,Qt[0].height);for(let j=0,rt=Qt.length;j<rt;j++)Lt=Qt[j],Xt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Lt.width,Lt.height,Pt,Wt,Lt.data):e.texImage2D(i.TEXTURE_2D,j,qt,Lt.width,Lt.height,0,Pt,Wt,Lt.data);w.generateMipmaps=!1}else Xt?(be&&e.texStorage2D(i.TEXTURE_2D,St,qt,pt.width,pt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,Pt,Wt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,qt,pt.width,pt.height,0,Pt,Wt,pt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xt&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,qt,Qt[0].width,Qt[0].height,pt.depth);for(let j=0,rt=Qt.length;j<rt;j++)if(Lt=Qt[j],w.format!==Vn)if(Pt!==null)if(Xt){if(O)if(w.layerUpdates.size>0){const wt=ch(Lt.width,Lt.height,w.format,w.type);for(const Et of w.layerUpdates){const jt=Lt.data.subarray(Et*wt/Lt.data.BYTES_PER_ELEMENT,(Et+1)*wt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Et,Lt.width,Lt.height,1,Pt,jt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Lt.width,Lt.height,pt.depth,Pt,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,qt,Lt.width,Lt.height,pt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Lt.width,Lt.height,pt.depth,Pt,Wt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,qt,Lt.width,Lt.height,pt.depth,0,Pt,Wt,Lt.data)}else{Xt&&be&&e.texStorage2D(i.TEXTURE_2D,St,qt,Qt[0].width,Qt[0].height);for(let j=0,rt=Qt.length;j<rt;j++)Lt=Qt[j],w.format!==Vn?Pt!==null?Xt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Lt.width,Lt.height,Pt,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,qt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Lt.width,Lt.height,Pt,Wt,Lt.data):e.texImage2D(i.TEXTURE_2D,j,qt,Lt.width,Lt.height,0,Pt,Wt,Lt.data)}else if(w.isDataArrayTexture)if(Xt){if(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,qt,pt.width,pt.height,pt.depth),O)if(w.layerUpdates.size>0){const j=ch(pt.width,pt.height,w.format,w.type);for(const rt of w.layerUpdates){const wt=pt.data.subarray(rt*j/pt.data.BYTES_PER_ELEMENT,(rt+1)*j/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,pt.width,pt.height,1,Pt,Wt,wt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Pt,Wt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,pt.width,pt.height,pt.depth,0,Pt,Wt,pt.data);else if(w.isData3DTexture)Xt?(be&&e.texStorage3D(i.TEXTURE_3D,St,qt,pt.width,pt.height,pt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Pt,Wt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,qt,pt.width,pt.height,pt.depth,0,Pt,Wt,pt.data);else if(w.isFramebufferTexture){if(be)if(Xt)e.texStorage2D(i.TEXTURE_2D,St,qt,pt.width,pt.height);else{let j=pt.width,rt=pt.height;for(let wt=0;wt<St;wt++)e.texImage2D(i.TEXTURE_2D,wt,qt,j,rt,0,Pt,Wt,null),j>>=1,rt>>=1}}else if(Qt.length>0){if(Xt&&be){const j=At(Qt[0]);e.texStorage2D(i.TEXTURE_2D,St,qt,j.width,j.height)}for(let j=0,rt=Qt.length;j<rt;j++)Lt=Qt[j],Xt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Pt,Wt,Lt):e.texImage2D(i.TEXTURE_2D,j,qt,Pt,Wt,Lt);w.generateMipmaps=!1}else if(Xt){if(be){const j=At(pt);e.texStorage2D(i.TEXTURE_2D,St,qt,j.width,j.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Wt,pt)}else e.texImage2D(i.TEXTURE_2D,0,qt,Pt,Wt,pt);p(w)&&m(Q),Ut.__version=et.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function st(R,w,H){if(w.image.length!==6)return;const Q=kt(R,w),at=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const et=n.get(at);if(at.version!==et.__version||Q===!0){e.activeTexture(i.TEXTURE0+H);const Ut=ve.getPrimaries(ve.workingColorSpace),yt=w.colorSpace===Bi?null:ve.getPrimaries(w.colorSpace),Rt=w.colorSpace===Bi||Ut===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const ce=w.isCompressedTexture||w.image[0].isCompressedTexture,pt=w.image[0]&&w.image[0].isDataTexture,Pt=[];for(let rt=0;rt<6;rt++)!ce&&!pt?Pt[rt]=v(w.image[rt],!0,s.maxCubemapSize):Pt[rt]=pt?w.image[rt].image:w.image[rt],Pt[rt]=Ht(w,Pt[rt]);const Wt=Pt[0],qt=r.convert(w.format,w.colorSpace),Lt=r.convert(w.type),Qt=M(w.internalFormat,qt,Lt,w.colorSpace),Xt=w.isVideoTexture!==!0,be=et.__version===void 0||Q===!0,O=at.dataReady;let St=P(w,Wt);It(i.TEXTURE_CUBE_MAP,w);let j;if(ce){Xt&&be&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Qt,Wt.width,Wt.height);for(let rt=0;rt<6;rt++){j=Pt[rt].mipmaps;for(let wt=0;wt<j.length;wt++){const Et=j[wt];w.format!==Vn?qt!==null?Xt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,Et.width,Et.height,qt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,Qt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,Et.width,Et.height,qt,Lt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,Qt,Et.width,Et.height,0,qt,Lt,Et.data)}}}else{if(j=w.mipmaps,Xt&&be){j.length>0&&St++;const rt=At(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Qt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(pt){Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Pt[rt].width,Pt[rt].height,qt,Lt,Pt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,Pt[rt].width,Pt[rt].height,0,qt,Lt,Pt[rt].data);for(let wt=0;wt<j.length;wt++){const jt=j[wt].image[rt].image;Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,jt.width,jt.height,qt,Lt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,Qt,jt.width,jt.height,0,qt,Lt,jt.data)}}else{Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,qt,Lt,Pt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,qt,Lt,Pt[rt]);for(let wt=0;wt<j.length;wt++){const Et=j[wt];Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,qt,Lt,Et.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,Qt,qt,Lt,Et.image[rt])}}}p(w)&&m(i.TEXTURE_CUBE_MAP),et.__version=at.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function tt(R,w,H,Q,at,et){const Ut=r.convert(H.format,H.colorSpace),yt=r.convert(H.type),Rt=M(H.internalFormat,Ut,yt,H.colorSpace),ce=n.get(w),pt=n.get(H);if(pt.__renderTarget=w,!ce.__hasExternalTextures){const Pt=Math.max(1,w.width>>et),Wt=Math.max(1,w.height>>et);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,et,Rt,Pt,Wt,w.depth,0,Ut,yt,null):e.texImage2D(at,et,Rt,Pt,Wt,0,Ut,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ct(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,at,pt.__webglTexture,0,ft(w)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,at,pt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(R,w,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){const Q=w.depthTexture,at=Q&&Q.isDepthTexture?Q.type:null,et=_(w.stencilBuffer,at),Ut=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=ft(w);Ct(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,et,w.width,w.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,et,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,et,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,R)}else{const Q=w.textures;for(let at=0;at<Q.length;at++){const et=Q[at],Ut=r.convert(et.format,et.colorSpace),yt=r.convert(et.type),Rt=M(et.internalFormat,Ut,yt,et.colorSpace),ce=ft(w);H&&Ct(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Rt,w.width,w.height):Ct(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(w.depthTexture);Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const at=Q.__webglTexture,et=ft(w);if(w.depthTexture.format===qs)Ct(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(w.depthTexture.format===Qs)Ct(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function xt(R){const w=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){const at=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",at)};Q.addEventListener("dispose",at),w.__depthDisposeCallback=at}w.__boundDepthTexture=Q}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");dt(w.__webglFramebuffer,R)}else if(H){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=i.createRenderbuffer(),K(w.__webglDepthbuffer[Q],R,!1);else{const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=w.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),K(w.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(R,w,H){const Q=n.get(R);w!==void 0&&tt(Q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&xt(R)}function ee(R){const w=R.texture,H=n.get(R),Q=n.get(w);R.addEventListener("dispose",E);const at=R.textures,et=R.isWebGLCubeRenderTarget===!0,Ut=at.length>1;if(Ut||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=w.version,o.memory.textures++),et){H.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[yt]=[];for(let Rt=0;Rt<w.mipmaps.length;Rt++)H.__webglFramebuffer[yt][Rt]=i.createFramebuffer()}else H.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let yt=0;yt<w.mipmaps.length;yt++)H.__webglFramebuffer[yt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let yt=0,Rt=at.length;yt<Rt;yt++){const ce=n.get(at[yt]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ct(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let yt=0;yt<at.length;yt++){const Rt=at[yt];H.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[yt]);const ce=r.convert(Rt.format,Rt.colorSpace),pt=r.convert(Rt.type),Pt=M(Rt.internalFormat,ce,pt,Rt.colorSpace,R.isXRRenderTarget===!0),Wt=ft(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Pt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,H.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),K(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),It(i.TEXTURE_CUBE_MAP,w);for(let yt=0;yt<6;yt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)tt(H.__webglFramebuffer[yt][Rt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt);else tt(H.__webglFramebuffer[yt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);p(w)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let yt=0,Rt=at.length;yt<Rt;yt++){const ce=at[yt],pt=n.get(ce);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),It(i.TEXTURE_2D,ce),tt(H.__webglFramebuffer,R,ce,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),p(ce)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(yt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Q.__webglTexture),It(yt,w),w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)tt(H.__webglFramebuffer[Rt],R,w,i.COLOR_ATTACHMENT0,yt,Rt);else tt(H.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,yt,0);p(w)&&m(yt),e.unbindTexture()}R.depthBuffer&&xt(R)}function it(R){const w=R.textures;for(let H=0,Q=w.length;H<Q;H++){const at=w[H];if(p(at)){const et=S(R),Ut=n.get(at).__webglTexture;e.bindTexture(et,Ut),m(et),e.unbindTexture()}}}const mt=[],L=[];function Ot(R){if(R.samples>0){if(Ct(R)===!1){const w=R.textures,H=R.width,Q=R.height;let at=i.COLOR_BUFFER_BIT;const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(R),yt=w.length>1;if(yt)for(let Rt=0;Rt<w.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Rt=0;Rt<w.length;Rt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const ce=n.get(w[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,at,i.NEAREST),c===!0&&(mt.length=0,L.length=0,mt.push(i.COLOR_ATTACHMENT0+Rt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(mt.push(et),L.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Rt=0;Rt<w.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const ce=n.get(w[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ft(R){return Math.min(s.maxSamples,R.samples)}function Ct(R){const w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function _t(R){const w=o.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function Ht(R,w){const H=R.colorSpace,Q=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==sr&&H!==Bi&&(ve.getTransfer(H)===Ce?(Q!==Vn||at!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function At(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=Dt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Ct}function N_(i,t){function e(n,s=Bi){let r;const o=ve.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===of)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sf)return i.BYTE;if(n===rf)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===ml)return i.INT;if(n===fs)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===ir)return i.HALF_FLOAT;if(n===af)return i.ALPHA;if(n===cf)return i.RGB;if(n===Vn)return i.RGBA;if(n===lf)return i.LUMINANCE;if(n===uf)return i.LUMINANCE_ALPHA;if(n===qs)return i.DEPTH_COMPONENT;if(n===Qs)return i.DEPTH_STENCIL;if(n===_l)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===hf)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===Io||n===Lo||n===Do||n===Uo)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ec||n===Tc||n===Ac||n===Rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cc||n===Pc||n===Ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cc||n===Pc)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ic)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===qc||n===Yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===No)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ff||n===Zc||n===$c||n===Jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===No)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class F_ extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zt extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O_={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const B_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
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

}`;class k_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new un,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:B_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V_ extends ps{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const v=new k_,p=e.getContextAttributes();let m=null,S=null;const M=[],_=[],P=new ot;let T=null;const E=new vn;E.viewport=new xe;const C=new vn;C.viewport=new xe;const x=[E,C],y=new F_;let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=M[$];return st===void 0&&(st=new Xa,M[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=M[$];return st===void 0&&(st=new Xa,M[$]=st),st.getGripSpace()},this.getHand=function($){let st=M[$];return st===void 0&&(st=new Xa,M[$]=st),st.getHandSpace()};function U($){const st=_.indexOf($.inputSource);if(st===-1)return;const tt=M[st];tt!==void 0&&(tt.update($.inputSource,$.frame,l||o),tt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<M.length;$++){const st=_[$];st!==null&&(_[$]=null,M[$].disconnect(st))}A=null,F=null,v.reset(),t.setRenderTarget(m),d=null,f=null,h=null,s=null,S=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const st={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ai(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let st=null,tt=null,K=null;p.depth&&(K=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=p.stencil?Qs:qs,tt=p.stencil?js:fs);const dt={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new ai(f.textureWidth,f.textureHeight,{format:Vn,type:ti,depthTexture:new Ef(f.textureWidth,f.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y($){for(let st=0;st<$.removed.length;st++){const tt=$.removed[st],K=_.indexOf(tt);K>=0&&(_[K]=null,M[K].disconnect(tt))}for(let st=0;st<$.added.length;st++){const tt=$.added[st];let K=_.indexOf(tt);if(K===-1){for(let xt=0;xt<M.length;xt++)if(xt>=_.length){_.push(tt),K=xt;break}else if(_[xt]===null){_[xt]=tt,K=xt;break}if(K===-1)break}const dt=M[K];dt&&dt.connect(tt)}}const X=new I,Z=new I;function z($,st,tt){X.setFromMatrixPosition(st.matrixWorld),Z.setFromMatrixPosition(tt.matrixWorld);const K=X.distanceTo(Z),dt=st.projectionMatrix.elements,xt=tt.projectionMatrix.elements,Dt=dt[14]/(dt[10]-1),ee=dt[14]/(dt[10]+1),it=(dt[9]+1)/dt[5],mt=(dt[9]-1)/dt[5],L=(dt[8]-1)/dt[0],Ot=(xt[8]+1)/xt[0],ft=Dt*L,Ct=Dt*Ot,_t=K/(-L+Ot),Ht=_t*-L;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ht),$.translateZ(_t),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),dt[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const At=Dt+_t,R=ee+_t,w=ft-Ht,H=Ct+(K-Ht),Q=it*ee/R*At,at=mt*ee/R*At;$.projectionMatrix.makePerspective(w,H,Q,at,At,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function nt($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let st=$.near,tt=$.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(tt=v.depthFar)),y.near=C.near=E.near=st,y.far=C.far=E.far=tt,(A!==y.near||F!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,F=y.far),E.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,y.layers.mask=E.layers.mask|C.layers.mask;const K=$.parent,dt=y.cameras;nt(y,K);for(let xt=0;xt<dt.length;xt++)nt(dt[xt],K);dt.length===2?z(y,E,C):y.projectionMatrix.copy(E.projectionMatrix),ht($,y,K)};function ht($,st,tt){tt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(tt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Or*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let lt=null;function It($,st){if(u=st.getViewerPose(l||o),g=st,u!==null){const tt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let K=!1;tt.length!==y.cameras.length&&(y.cameras.length=0,K=!0);for(let xt=0;xt<tt.length;xt++){const Dt=tt[xt];let ee=null;if(d!==null)ee=d.getViewport(Dt);else{const mt=h.getViewSubImage(f,Dt);ee=mt.viewport,xt===0&&(t.setRenderTargetTextures(S,mt.colorTexture,f.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(S))}let it=x[xt];it===void 0&&(it=new vn,it.layers.enable(xt),it.viewport=new xe,x[xt]=it),it.matrix.fromArray(Dt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Dt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ee.x,ee.y,ee.width,ee.height),xt===0&&(y.matrix.copy(it.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),K===!0&&y.cameras.push(it)}const dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const xt=h.getDepthInformation(tt[0]);xt&&xt.isValid&&xt.texture&&v.init(t,xt,s.renderState)}}for(let tt=0;tt<M.length;tt++){const K=_[tt],dt=M[tt];K!==null&&dt!==void 0&&dt.update(K,st,l||o)}lt&&lt($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const kt=new wf;kt.setAnimationLoop(It),this.setAnimationLoop=function($){lt=$},this.dispose=function(){}}}const ss=new ci,G_=new le;function H_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Mf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,M,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,S,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===xn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===xn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),M=S.envMap,_=S.envMapRotation;M&&(p.envMap.value=M,ss.copy(_),ss.x*=-1,ss.y*=-1,ss.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),p.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(ss)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,S,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const _=M.program;n.uniformBlockBinding(S,_)}function l(S,M){let _=s[S.id];_===void 0&&(g(S),_=u(S),s[S.id]=_,S.addEventListener("dispose",p));const P=M.program;n.updateUBOMapping(S,P);const T=t.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function u(S){const M=h();S.__bindingPointIndex=M;const _=i.createBuffer(),P=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=s[S.id],_=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,E=_.length;T<E;T++){const C=Array.isArray(_[T])?_[T]:[_[T]];for(let x=0,y=C.length;x<y;x++){const A=C[x];if(d(A,T,x,P)===!0){const F=A.__offset,U=Array.isArray(A.value)?A.value:[A.value];let W=0;for(let Y=0;Y<U.length;Y++){const X=U[Y],Z=v(X);typeof X=="number"||typeof X=="boolean"?(A.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,F+W,A.__data)):X.isMatrix3?(A.__data[0]=X.elements[0],A.__data[1]=X.elements[1],A.__data[2]=X.elements[2],A.__data[3]=0,A.__data[4]=X.elements[3],A.__data[5]=X.elements[4],A.__data[6]=X.elements[5],A.__data[7]=0,A.__data[8]=X.elements[6],A.__data[9]=X.elements[7],A.__data[10]=X.elements[8],A.__data[11]=0):(X.toArray(A.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,M,_,P){const T=S.value,E=M+"_"+_;if(P[E]===void 0)return typeof T=="number"||typeof T=="boolean"?P[E]=T:P[E]=T.clone(),!0;{const C=P[E];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return P[E]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(S){const M=S.uniforms;let _=0;const P=16;for(let E=0,C=M.length;E<C;E++){const x=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,A=x.length;y<A;y++){const F=x[y],U=Array.isArray(F.value)?F.value:[F.value];for(let W=0,Y=U.length;W<Y;W++){const X=U[W],Z=v(X),z=_%P,nt=z%Z.boundary,ht=z+nt;_+=nt,ht!==0&&P-ht<Z.storage&&(_+=P-ht),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=Z.storage}}}const T=_%P;return T>0&&(_+=P-T),S.__size=_,S.__cache={},this}function v(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){const M=S.target;M.removeEventListener("dispose",p);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class X_{constructor(t={}){const{canvas:e=Dp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,m=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Gi,this.toneMappingExposure=1;const _=this;let P=!1,T=0,E=0,C=null,x=-1,y=null;const A=new xe,F=new xe;let U=null;const W=new Yt(0);let Y=0,X=e.width,Z=e.height,z=1,nt=null,ht=null;const lt=new xe(0,0,X,Z),It=new xe(0,0,X,Z);let kt=!1;const $=new Al;let st=!1,tt=!1;const K=new le,dt=new le,xt=new I,Dt=new xe,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function mt(){return C===null?z:1}let L=n;function Ot(b,D){return e.getContext(b,D)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),L===null){const D="webgl2";if(L=Ot(D,b),L===null)throw Ot(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ft,Ct,_t,Ht,At,R,w,H,Q,at,et,Ut,yt,Rt,ce,pt,Pt,Wt,qt,Lt,Qt,Xt,be,O;function St(){ft=new Jg(L),ft.init(),Xt=new N_(L,ft),Ct=new Wg(L,ft,t,Xt),_t=new L_(L,ft),Ct.reverseDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),Ht=new Qg(L),At=new v_,R=new U_(L,ft,_t,At,Ct,Xt,Ht),w=new qg(_),H=new $g(_),Q=new o0(L),be=new Gg(L,Q),at=new Kg(L,Q,Ht,be),et=new ev(L,at,Q,Ht),qt=new tv(L,Ct,R),pt=new Xg(At),Ut=new g_(_,w,H,ft,Ct,be,pt),yt=new H_(_,At),Rt=new x_,ce=new E_(ft),Wt=new Vg(_,w,H,_t,et,d,c),Pt=new P_(_,et,Ct),O=new W_(L,Ht,Ct,_t),Lt=new Hg(L,ft,Ht),Qt=new jg(L,ft,Ht),Ht.programs=Ut.programs,_.capabilities=Ct,_.extensions=ft,_.properties=At,_.renderLists=Rt,_.shadowMap=Pt,_.state=_t,_.info=Ht}St();const j=new V_(_,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(X,Z,!1))},this.getSize=function(b){return b.set(X,Z)},this.setSize=function(b,D,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,Z=D,e.width=Math.floor(b*z),e.height=Math.floor(D*z),G===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(X*z,Z*z).floor()},this.setDrawingBufferSize=function(b,D,G){X=b,Z=D,z=G,e.width=Math.floor(b*G),e.height=Math.floor(D*G),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(lt)},this.setViewport=function(b,D,G,k){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,D,G,k),_t.viewport(A.copy(lt).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(It)},this.setScissor=function(b,D,G,k){b.isVector4?It.set(b.x,b.y,b.z,b.w):It.set(b,D,G,k),_t.scissor(F.copy(It).multiplyScalar(z).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(b){_t.setScissorTest(kt=b)},this.setOpaqueSort=function(b){nt=b},this.setTransparentSort=function(b){ht=b},this.getClearColor=function(b){return b.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(b=!0,D=!0,G=!0){let k=0;if(b){let B=!1;if(C!==null){const gt=C.texture.format;B=gt===Ml||gt===yl||gt===xl}if(B){const gt=C.texture.type,Tt=gt===ti||gt===fs||gt===Fr||gt===js||gt===gl||gt===vl,Ft=Wt.getClearColor(),Nt=Wt.getClearAlpha(),$t=Ft.r,Gt=Ft.g,Bt=Ft.b;Tt?(g[0]=$t,g[1]=Gt,g[2]=Bt,g[3]=Nt,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=$t,v[1]=Gt,v[2]=Bt,v[3]=Nt,L.clearBufferiv(L.COLOR,0,v))}else k|=L.COLOR_BUFFER_BIT}D&&(k|=L.DEPTH_BUFFER_BIT),G&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Rt.dispose(),ce.dispose(),At.dispose(),w.dispose(),H.dispose(),et.dispose(),be.dispose(),O.dispose(),Ut.dispose(),j.dispose(),j.removeEventListener("sessionstart",Zi),j.removeEventListener("sessionend",Ti),Rn.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=Ht.autoReset,D=Pt.enabled,G=Pt.autoUpdate,k=Pt.needsUpdate,B=Pt.type;St(),Ht.autoReset=b,Pt.enabled=D,Pt.autoUpdate=G,Pt.needsUpdate=k,Pt.type=B}function Et(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function jt(b){const D=b.target;D.removeEventListener("dispose",jt),Fe(D)}function Fe(b){je(b),At.remove(b)}function je(b){const D=At.get(b).programs;D!==void 0&&(D.forEach(function(G){Ut.releaseProgram(G)}),b.isShaderMaterial&&Ut.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,G,k,B,gt){D===null&&(D=ee);const Tt=B.isMesh&&B.matrixWorld.determinant()<0,Ft=la(b,D,G,k,B);_t.setMaterial(k,Tt);let Nt=G.index,$t=1;if(k.wireframe===!0){if(Nt=at.getWireframeAttribute(G),Nt===void 0)return;$t=2}const Gt=G.drawRange,Bt=G.attributes.position;let fe=Gt.start*$t,_e=(Gt.start+Gt.count)*$t;gt!==null&&(fe=Math.max(fe,gt.start*$t),_e=Math.min(_e,(gt.start+gt.count)*$t)),Nt!==null?(fe=Math.max(fe,0),_e=Math.min(_e,Nt.count)):Bt!=null&&(fe=Math.max(fe,0),_e=Math.min(_e,Bt.count));const Re=_e-fe;if(Re<0||Re===1/0)return;be.setup(B,k,Ft,G,Nt);let We,de=Lt;if(Nt!==null&&(We=Q.get(Nt),de=Qt,de.setIndex(We)),B.isMesh)k.wireframe===!0?(_t.setLineWidth(k.wireframeLinewidth*mt()),de.setMode(L.LINES)):de.setMode(L.TRIANGLES);else if(B.isLine){let zt=k.linewidth;zt===void 0&&(zt=1),_t.setLineWidth(zt*mt()),B.isLineSegments?de.setMode(L.LINES):B.isLineLoop?de.setMode(L.LINE_LOOP):de.setMode(L.LINE_STRIP)}else B.isPoints?de.setMode(L.POINTS):B.isSprite&&de.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)de.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))de.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const zt=B._multiDrawStarts,Un=B._multiDrawCounts,ge=B._multiDrawCount,Mn=Nt?Q.get(Nt).bytesPerElement:1,Ai=At.get(k).currentProgram.getUniforms();for(let Le=0;Le<ge;Le++)Ai.setValue(L,"_gl_DrawID",Le),de.render(zt[Le]/Mn,Un[Le])}else if(B.isInstancedMesh)de.renderInstances(fe,Re,B.count);else if(G.isInstancedBufferGeometry){const zt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Un=Math.min(G.instanceCount,zt);de.renderInstances(fe,Re,Un)}else de.render(fe,Re)};function pe(b,D,G){b.transparent===!0&&b.side===Ge&&b.forceSinglePass===!1?(b.side=xn,b.needsUpdate=!0,Oe(b,D,G),b.side=wi,b.needsUpdate=!0,Oe(b,D,G),b.side=Ge):Oe(b,D,G)}this.compile=function(b,D,G=null){G===null&&(G=b),m=ce.get(G),m.init(D),M.push(m),G.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==G&&b.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const k=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const gt=B.material;if(gt)if(Array.isArray(gt))for(let Tt=0;Tt<gt.length;Tt++){const Ft=gt[Tt];pe(Ft,G,B),k.add(Ft)}else pe(gt,G,B),k.add(gt)}),M.pop(),m=null,k},this.compileAsync=function(b,D,G=null){const k=this.compile(b,D,G);return new Promise(B=>{function gt(){if(k.forEach(function(Tt){At.get(Tt).currentProgram.isReady()&&k.delete(Tt)}),k.size===0){B(b);return}setTimeout(gt,10)}ft.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let an=null;function Ue(b){an&&an(b)}function Zi(){Rn.stop()}function Ti(){Rn.start()}const Rn=new wf;Rn.setAnimationLoop(Ue),typeof self!="undefined"&&Rn.setContext(self),this.setAnimationLoop=function(b){an=b,j.setAnimationLoop(b),b===null?Rn.stop():Rn.start()},j.addEventListener("sessionstart",Zi),j.addEventListener("sessionend",Ti),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(D),D=j.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,D,C),m=ce.get(b,M.length),m.init(D),M.push(m),dt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$.setFromProjectionMatrix(dt),tt=this.localClippingEnabled,st=pt.init(this.clippingPlanes,tt),p=Rt.get(b,S.length),p.init(),S.push(p),j.enabled===!0&&j.isPresenting===!0){const gt=_.xr.getDepthSensingMesh();gt!==null&&vs(gt,D,-1/0,_.sortObjects)}vs(b,D,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(nt,ht),it=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,it&&Wt.addToRenderList(p,b),this.info.render.frame++,st===!0&&pt.beginShadows();const G=m.state.shadowsArray;Pt.render(G,b,D),st===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,B=p.transmissive;if(m.setupLights(),D.isArrayCamera){const gt=D.cameras;if(B.length>0)for(let Tt=0,Ft=gt.length;Tt<Ft;Tt++){const Nt=gt[Tt];tn(k,B,b,Nt)}it&&Wt.render(b);for(let Tt=0,Ft=gt.length;Tt<Ft;Tt++){const Nt=gt[Tt];Qe(p,b,Nt,Nt.viewport)}}else B.length>0&&tn(k,B,b,D),it&&Wt.render(b),Qe(p,b,D);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(_,b,D),be.resetDefaultState(),x=-1,y=null,M.pop(),M.length>0?(m=M[M.length-1],st===!0&&pt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function vs(b,D,G,k){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){k&&Dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);const Tt=et.update(b),Ft=b.material;Ft.visible&&p.push(b,Tt,Ft,G,Dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const Tt=et.update(b),Ft=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Dt.copy(b.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Dt.copy(Tt.boundingSphere.center)),Dt.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(Ft)){const Nt=Tt.groups;for(let $t=0,Gt=Nt.length;$t<Gt;$t++){const Bt=Nt[$t],fe=Ft[Bt.materialIndex];fe&&fe.visible&&p.push(b,Tt,fe,G,Dt.z,Bt)}}else Ft.visible&&p.push(b,Tt,Ft,G,Dt.z,null)}}const gt=b.children;for(let Tt=0,Ft=gt.length;Tt<Ft;Tt++)vs(gt[Tt],D,G,k)}function Qe(b,D,G,k){const B=b.opaque,gt=b.transmissive,Tt=b.transparent;m.setupLightsView(G),st===!0&&pt.setGlobalState(_.clippingPlanes,G),k&&_t.viewport(A.copy(k)),B.length>0&&we(B,D,G),gt.length>0&&we(gt,D,G),Tt.length>0&&we(Tt,D,G),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function tn(b,D,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new ai(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?ir:ti,minFilter:us,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));const gt=m.state.transmissionRenderTarget[k.id],Tt=k.viewport||A;gt.setSize(Tt.z,Tt.w);const Ft=_.getRenderTarget();_.setRenderTarget(gt),_.getClearColor(W),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),it&&Wt.render(G);const Nt=_.toneMapping;_.toneMapping=Gi;const $t=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),st===!0&&pt.setGlobalState(_.clippingPlanes,k),we(b,G,k),R.updateMultisampleRenderTarget(gt),R.updateRenderTargetMipmap(gt),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Bt=0,fe=D.length;Bt<fe;Bt++){const _e=D[Bt],Re=_e.object,We=_e.geometry,de=_e.material,zt=_e.group;if(de.side===Ge&&Re.layers.test(k.layers)){const Un=de.side;de.side=xn,de.needsUpdate=!0,$i(Re,G,k,We,de,zt),de.side=Un,de.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(gt),R.updateRenderTargetMipmap(gt))}_.setRenderTarget(Ft),_.setClearColor(W,Y),$t!==void 0&&(k.viewport=$t),_.toneMapping=Nt}function we(b,D,G){const k=D.isScene===!0?D.overrideMaterial:null;for(let B=0,gt=b.length;B<gt;B++){const Tt=b[B],Ft=Tt.object,Nt=Tt.geometry,$t=k===null?Tt.material:k,Gt=Tt.group;Ft.layers.test(G.layers)&&$i(Ft,D,G,Nt,$t,Gt)}}function $i(b,D,G,k,B,gt){b.onBeforeRender(_,D,G,k,B,gt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(_,D,G,k,b,gt),B.transparent===!0&&B.side===Ge&&B.forceSinglePass===!1?(B.side=xn,B.needsUpdate=!0,_.renderBufferDirect(G,D,k,B,b,gt),B.side=wi,B.needsUpdate=!0,_.renderBufferDirect(G,D,k,B,b,gt),B.side=Ge):_.renderBufferDirect(G,D,k,B,b,gt),b.onAfterRender(_,D,G,k,B,gt)}function Oe(b,D,G){D.isScene!==!0&&(D=ee);const k=At.get(b),B=m.state.lights,gt=m.state.shadowsArray,Tt=B.state.version,Ft=Ut.getParameters(b,B.state,gt,D,G),Nt=Ut.getProgramCacheKey(Ft);let $t=k.programs;k.environment=b.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(b.isMeshStandardMaterial?H:w).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,$t===void 0&&(b.addEventListener("dispose",jt),$t=new Map,k.programs=$t);let Gt=$t.get(Nt);if(Gt!==void 0){if(k.currentProgram===Gt&&k.lightsStateVersion===Tt)return dr(b,Ft),Gt}else Ft.uniforms=Ut.getUniforms(b),b.onBeforeCompile(Ft,_),Gt=Ut.acquireProgram(Ft,Nt),$t.set(Nt,Gt),k.uniforms=Ft.uniforms;const Bt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Bt.clippingPlanes=pt.uniform),dr(b,Ft),k.needsLights=he(b),k.lightsStateVersion=Tt,k.needsLights&&(Bt.ambientLightColor.value=B.state.ambient,Bt.lightProbe.value=B.state.probe,Bt.directionalLights.value=B.state.directional,Bt.directionalLightShadows.value=B.state.directionalShadow,Bt.spotLights.value=B.state.spot,Bt.spotLightShadows.value=B.state.spotShadow,Bt.rectAreaLights.value=B.state.rectArea,Bt.ltc_1.value=B.state.rectAreaLTC1,Bt.ltc_2.value=B.state.rectAreaLTC2,Bt.pointLights.value=B.state.point,Bt.pointLightShadows.value=B.state.pointShadow,Bt.hemisphereLights.value=B.state.hemi,Bt.directionalShadowMap.value=B.state.directionalShadowMap,Bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Bt.spotShadowMap.value=B.state.spotShadowMap,Bt.spotLightMatrix.value=B.state.spotLightMatrix,Bt.spotLightMap.value=B.state.spotLightMap,Bt.pointShadowMap.value=B.state.pointShadowMap,Bt.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=Gt,k.uniformsList=null,Gt}function fr(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=Fo.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function dr(b,D){const G=At.get(b);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function la(b,D,G,k,B){D.isScene!==!0&&(D=ee),R.resetTextureUnits();const gt=D.fog,Tt=k.isMeshStandardMaterial?D.environment:null,Ft=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:sr,Nt=(k.isMeshStandardMaterial?H:w).get(k.envMap||Tt),$t=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Bt=!!G.morphAttributes.position,fe=!!G.morphAttributes.normal,_e=!!G.morphAttributes.color;let Re=Gi;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Re=_.toneMapping);const We=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,de=We!==void 0?We.length:0,zt=At.get(k),Un=m.state.lights;if(st===!0&&(tt===!0||b!==y)){const Sn=b===y&&k.id===x;pt.setState(k,b,Sn)}let ge=!1;k.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Un.state.version||zt.outputColorSpace!==Ft||B.isBatchedMesh&&zt.batching===!1||!B.isBatchedMesh&&zt.batching===!0||B.isBatchedMesh&&zt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&zt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&zt.instancing===!1||!B.isInstancedMesh&&zt.instancing===!0||B.isSkinnedMesh&&zt.skinning===!1||!B.isSkinnedMesh&&zt.skinning===!0||B.isInstancedMesh&&zt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&zt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&zt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&zt.instancingMorph===!1&&B.morphTexture!==null||zt.envMap!==Nt||k.fog===!0&&zt.fog!==gt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==pt.numPlanes||zt.numIntersection!==pt.numIntersection)||zt.vertexAlphas!==$t||zt.vertexTangents!==Gt||zt.morphTargets!==Bt||zt.morphNormals!==fe||zt.morphColors!==_e||zt.toneMapping!==Re||zt.morphTargetsCount!==de)&&(ge=!0):(ge=!0,zt.__version=k.version);let Mn=zt.currentProgram;ge===!0&&(Mn=Oe(k,D,B));let Ai=!1,Le=!1,Ri=!1;const Pe=Mn.getUniforms(),Cn=zt.uniforms;if(_t.useProgram(Mn.program)&&(Ai=!0,Le=!0,Ri=!0),k.id!==x&&(x=k.id,Le=!0),Ai||y!==b){_t.buffers.depth.getReversed()?(K.copy(b.projectionMatrix),Np(K),Fp(K),Pe.setValue(L,"projectionMatrix",K)):Pe.setValue(L,"projectionMatrix",b.projectionMatrix),Pe.setValue(L,"viewMatrix",b.matrixWorldInverse);const Nn=Pe.map.cameraPosition;Nn!==void 0&&Nn.setValue(L,xt.setFromMatrixPosition(b.matrixWorld)),Ct.logarithmicDepthBuffer&&Pe.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Pe.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Le=!0,Ri=!0)}if(B.isSkinnedMesh){Pe.setOptional(L,B,"bindMatrix"),Pe.setOptional(L,B,"bindMatrixInverse");const Sn=B.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Pe.setValue(L,"boneTexture",Sn.boneTexture,R))}B.isBatchedMesh&&(Pe.setOptional(L,B,"batchingTexture"),Pe.setValue(L,"batchingTexture",B._matricesTexture,R),Pe.setOptional(L,B,"batchingIdTexture"),Pe.setValue(L,"batchingIdTexture",B._indirectTexture,R),Pe.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&Pe.setValue(L,"batchingColorTexture",B._colorsTexture,R));const Ji=G.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&qt.update(B,G,Mn),(Le||zt.receiveShadow!==B.receiveShadow)&&(zt.receiveShadow=B.receiveShadow,Pe.setValue(L,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Cn.envMap.value=Nt,Cn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Cn.envMapIntensity.value=D.environmentIntensity),Le&&(Pe.setValue(L,"toneMappingExposure",_.toneMappingExposure),zt.needsLights&&me(Cn,Ri),gt&&k.fog===!0&&yt.refreshFogUniforms(Cn,gt),yt.refreshMaterialUniforms(Cn,k,z,Z,m.state.transmissionRenderTarget[b.id]),Fo.upload(L,fr(zt),Cn,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Fo.upload(L,fr(zt),Cn,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Pe.setValue(L,"center",B.center),Pe.setValue(L,"modelViewMatrix",B.modelViewMatrix),Pe.setValue(L,"normalMatrix",B.normalMatrix),Pe.setValue(L,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Sn=k.uniformsGroups;for(let Nn=0,Fn=Sn.length;Nn<Fn;Nn++){const pr=Sn[Nn];O.update(pr,Mn),O.bind(pr,Mn)}}return Mn}function me(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function he(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,D,G){At.get(b.texture).__webglTexture=D,At.get(b.depthTexture).__webglTexture=G;const k=At.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){const G=At.get(b);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,G=0){C=b,T=D,E=G;let k=!0,B=null,gt=!1,Tt=!1;if(b){const Nt=At.get(b);if(Nt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(L.FRAMEBUFFER,null),k=!1;else if(Nt.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Nt.__hasExternalTextures)R.rebindTextures(b,At.get(b.texture).__webglTexture,At.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Bt=b.depthTexture;if(Nt.__boundDepthTexture!==Bt){if(Bt!==null&&At.has(Bt)&&(b.width!==Bt.image.width||b.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const $t=b.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Tt=!0);const Gt=At.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Gt[D])?B=Gt[D][G]:B=Gt[D],gt=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?B=At.get(b).__webglMultisampledFramebuffer:Array.isArray(Gt)?B=Gt[G]:B=Gt,A.copy(b.viewport),F.copy(b.scissor),U=b.scissorTest}else A.copy(lt).multiplyScalar(z).floor(),F.copy(It).multiplyScalar(z).floor(),U=kt;if(_t.bindFramebuffer(L.FRAMEBUFFER,B)&&k&&_t.drawBuffers(b,B),_t.viewport(A),_t.scissor(F),_t.setScissorTest(U),gt){const Nt=At.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,Nt.__webglTexture,G)}else if(Tt){const Nt=At.get(b.texture),$t=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.__webglTexture,G||0,$t)}x=-1},this.readRenderTargetPixels=function(b,D,G,k,B,gt,Tt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ft=Ft[Tt]),Ft){_t.bindFramebuffer(L.FRAMEBUFFER,Ft);try{const Nt=b.texture,$t=Nt.format,Gt=Nt.type;if(!Ct.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-k&&G>=0&&G<=b.height-B&&L.readPixels(D,G,k,B,Xt.convert($t),Xt.convert(Gt),gt)}finally{const Nt=C!==null?At.get(C).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,D,G,k,B,gt,Tt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ft=Ft[Tt]),Ft){const Nt=b.texture,$t=Nt.format,Gt=Nt.type;if(!Ct.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-k&&G>=0&&G<=b.height-B){_t.bindFramebuffer(L.FRAMEBUFFER,Ft);const Bt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Bt),L.bufferData(L.PIXEL_PACK_BUFFER,gt.byteLength,L.STREAM_READ),L.readPixels(D,G,k,B,Xt.convert($t),Xt.convert(Gt),0);const fe=C!==null?At.get(C).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,fe);const _e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Up(L,_e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Bt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,gt),L.deleteBuffer(Bt),L.deleteSync(_e),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,G=0){b.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-G),B=Math.floor(b.image.width*k),gt=Math.floor(b.image.height*k),Tt=D!==null?D.x:0,Ft=D!==null?D.y:0;R.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,Tt,Ft,B,gt),_t.unbindTexture()},this.copyTextureToTexture=function(b,D,G=null,k=null,B=0){b.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],D=arguments[2],B=arguments[3]||0,G=null);let gt,Tt,Ft,Nt,$t,Gt,Bt,fe,_e;const Re=b.isCompressedTexture?b.mipmaps[B]:b.image;G!==null?(gt=G.max.x-G.min.x,Tt=G.max.y-G.min.y,Ft=G.isBox3?G.max.z-G.min.z:1,Nt=G.min.x,$t=G.min.y,Gt=G.isBox3?G.min.z:0):(gt=Re.width,Tt=Re.height,Ft=Re.depth||1,Nt=0,$t=0,Gt=0),k!==null?(Bt=k.x,fe=k.y,_e=k.z):(Bt=0,fe=0,_e=0);const We=Xt.convert(D.format),de=Xt.convert(D.type);let zt;D.isData3DTexture?(R.setTexture3D(D,0),zt=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(R.setTexture2DArray(D,0),zt=L.TEXTURE_2D_ARRAY):(R.setTexture2D(D,0),zt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Un=L.getParameter(L.UNPACK_ROW_LENGTH),ge=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ai=L.getParameter(L.UNPACK_SKIP_ROWS),Le=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Re.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Re.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nt),L.pixelStorei(L.UNPACK_SKIP_ROWS,$t),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt);const Ri=b.isDataArrayTexture||b.isData3DTexture,Pe=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Cn=At.get(b),Ji=At.get(D),Sn=At.get(Cn.__renderTarget),Nn=At.get(Ji.__renderTarget);_t.bindFramebuffer(L.READ_FRAMEBUFFER,Sn.__webglFramebuffer),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<Ft;Fn++)Ri&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.get(b).__webglTexture,B,Gt+Fn),b.isDepthTexture?(Pe&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.get(D).__webglTexture,B,_e+Fn),L.blitFramebuffer(Nt,$t,gt,Tt,Bt,fe,gt,Tt,L.DEPTH_BUFFER_BIT,L.NEAREST)):Pe?L.copyTexSubImage3D(zt,B,Bt,fe,_e+Fn,Nt,$t,gt,Tt):L.copyTexSubImage2D(zt,B,Bt,fe,_e+Fn,Nt,$t,gt,Tt);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Pe?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(zt,B,Bt,fe,_e,gt,Tt,Ft,We,de,Re.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(zt,B,Bt,fe,_e,gt,Tt,Ft,We,Re.data):L.texSubImage3D(zt,B,Bt,fe,_e,gt,Tt,Ft,We,de,Re):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,Bt,fe,gt,Tt,We,de,Re.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,Bt,fe,Re.width,Re.height,We,Re.data):L.texSubImage2D(L.TEXTURE_2D,B,Bt,fe,gt,Tt,We,de,Re);L.pixelStorei(L.UNPACK_ROW_LENGTH,Un),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ge),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ai),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le),B===0&&D.generateMipmaps&&L.generateMipmap(zt),_t.unbindTexture()},this.copyTextureToTexture3D=function(b,D,G=null,k=null,B=0){return b.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,k=arguments[1]||null,b=arguments[2],D=arguments[3],B=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,G,k,B)},this.initRenderTarget=function(b){At.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){T=0,E=0,C=null,_t.reset(),be.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}}class Dr extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class q_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new I;class Go{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Go(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Oo extends qi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ns;const Sr=new I,Fs=new I,Os=new I,Bs=new ot,br=new ot,Pf=new le,_o=new I,wr=new I,xo=new I,lh=new ot,qa=new ot,uh=new ot;class Ya extends qe{constructor(t=new Oo){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new Ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new q_(e,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new Go(n,3,0,!1)),Ns.setAttribute("uv",new Go(n,2,3,!1))}this.geometry=Ns,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Pf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Os.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;yo(_o.set(-.5,-.5,0),Os,o,Fs,s,r),yo(wr.set(.5,-.5,0),Os,o,Fs,s,r),yo(xo.set(.5,.5,0),Os,o,Fs,s,r),lh.set(0,0),qa.set(1,0),uh.set(1,1);let a=t.ray.intersectTriangle(_o,wr,xo,!1,Sr);if(a===null&&(yo(wr.set(-.5,.5,0),Os,o,Fs,s,r),qa.set(0,1),a=t.ray.intersectTriangle(_o,xo,wr,!1,Sr),a===null))return;const c=t.ray.origin.distanceTo(Sr);c<t.near||c>t.far||e.push({distance:c,point:Sr.clone(),uv:kn.getInterpolation(Sr,_o,wr,xo,lh,qa,uh,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function yo(i,t,e,n,s,r){Bs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(br.x=r*Bs.x-s*Bs.y,br.y=s*Bs.x+r*Bs.y):br.copy(Bs),i.copy(t),i.x+=br.x,i.y+=br.y,i.applyMatrix4(Pf)}const hh=new I,fh=new xe,dh=new xe,Y_=new I,ph=new le,Mo=new I,Za=new or,mh=new le,$a=new jo;class gh extends ut{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pu,this.bindMatrix=new le,this.bindMatrixInverse=new le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new rr),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Mo),this.boundingBox.expandByPoint(Mo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new or),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Mo),this.boundingSphere.expandByPoint(Mo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Za.copy(this.boundingSphere),Za.applyMatrix4(s),t.ray.intersectsSphere(Za)!==!1&&(mh.copy(s).invert(),$a.copy(t.ray).applyMatrix4(mh),!(this.boundingBox!==null&&$a.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,$a)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new xe,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===pu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ip?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;fh.fromBufferAttribute(s.attributes.skinIndex,t),dh.fromBufferAttribute(s.attributes.skinWeight,t),hh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=dh.getComponent(r);if(o!==0){const a=fh.getComponent(r);ph.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Y_.copy(hh).applyMatrix4(ph),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class If extends qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Lf extends un{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Dn,u=Dn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vh=new le,Z_=new le;class Cl{constructor(t=[],e=[]){this.uuid=Gn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new le)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new le;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Z_;vh.multiplyMatrices(a,e[r]),vh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Cl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Lf(e,t,t,Vn,si);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new If),this.bones.push(o),this.boneInverses.push(new le().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Pl extends qi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _h=new le,tl=new jo,So=new or,bo=new I;class Il extends qe{constructor(t=new Ve,e=new Pl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;_h.copy(s).invert(),tl.copy(t.ray).applyMatrix4(_h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const p=l.getX(g);bo.fromBufferAttribute(h,p),xh(bo,p,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,v=d;g<v;g++)bo.fromBufferAttribute(h,g),xh(bo,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xh(i,t,e,n,s,r,o){const a=tl.distanceSqToPoint(i);if(a<e){const c=new I;tl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class jn extends un{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ot:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,c=new le;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(rn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ll extends ui{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ot){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $_ extends Ll{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const wo=new I,Ja=new Dl,Ka=new Dl,ja=new Dl;class Df extends ui{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(wo.subVectors(s[0],s[1]).add(s[0]),l=wo);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=wo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Ja.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,v,p),Ka.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,v,p),ja.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(Ja.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ka.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),ja.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Ja.calc(c),Ka.calc(c),ja.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function J_(i,t){const e=1-i;return e*e*t}function K_(i,t){return 2*(1-i)*i*t}function j_(i,t){return i*i*t}function Ur(i,t,e,n){return J_(i,t)+K_(i,e)+j_(i,n)}function Q_(i,t){const e=1-i;return e*e*e*t}function tx(i,t){const e=1-i;return 3*e*e*i*t}function ex(i,t){return 3*(1-i)*i*i*t}function nx(i,t){return i*i*i*t}function Nr(i,t,e,n,s){return Q_(i,t)+tx(i,e)+ex(i,n)+nx(i,s)}class Uf extends ui{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ix extends ui{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y),Nr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nf extends ui{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sx extends ui{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ff extends ui{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Of extends ui{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y),Ur(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ul extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(yh(a,c.x,l.x,u.x,h.x),yh(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var Ho=Object.freeze({__proto__:null,ArcCurve:$_,CatmullRomCurve3:Df,CubicBezierCurve:Uf,CubicBezierCurve3:ix,EllipseCurve:Ll,LineCurve:Nf,LineCurve3:sx,QuadraticBezierCurve:Ff,QuadraticBezierCurve3:Of,SplineCurve:Ul});class rx extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ho[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ho[s.type]().fromJSON(s))}return this}}class el extends rx{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Nf(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ff(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Uf(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ul(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ll(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Yi extends Ve{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=rn(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new I,f=new ot,d=new I,g=new I,v=new I;let p=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-p,d.z=m*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let S=0;S<=e;S++){const M=n+S*u*s,_=Math.sin(M),P=Math.cos(M);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*_,h.y=t[T].y,h.z=t[T].x*P,o.push(h.x,h.y,h.z),f.x=S/e,f.y=T/(t.length-1),a.push(f.x,f.y);const E=c[3*T+0]*_,C=c[3*T+1],x=c[3*T+0]*P;l.push(E,C,x)}}for(let S=0;S<e;S++)for(let M=0;M<t.length-1;M++){const _=M+S*t.length,P=_,T=_+t.length,E=_+t.length+1,C=_+1;r.push(P,T,C),r.push(E,C,T)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.points,t.segments,t.phiStart,t.phiLength)}}class bi extends Yi{constructor(t=1,e=1,n=4,s=8){const r=new el;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new bi(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ln extends Ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,u=new ot;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Se extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const v=[],p=n/2;let m=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(d,2));function S(){const _=new I,P=new I;let T=0;const E=(e-t)/n;for(let C=0;C<=r;C++){const x=[],y=C/r,A=y*(e-t)+t;for(let F=0;F<=s;F++){const U=F/s,W=U*c+a,Y=Math.sin(W),X=Math.cos(W);P.x=A*Y,P.y=-y*n+p,P.z=A*X,h.push(P.x,P.y,P.z),_.set(Y,E,X).normalize(),f.push(_.x,_.y,_.z),d.push(U,1-y),x.push(g++)}v.push(x)}for(let C=0;C<s;C++)for(let x=0;x<r;x++){const y=v[x][C],A=v[x+1][C],F=v[x+1][C+1],U=v[x][C+1];(t>0||x!==0)&&(u.push(y,A,U),T+=3),(e>0||x!==r-1)&&(u.push(A,F,U),T+=3)}l.addGroup(m,T,0),m+=T}function M(_){const P=g,T=new ot,E=new I;let C=0;const x=_===!0?t:e,y=_===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,p*y,0),f.push(0,y,0),d.push(.5,.5),g++;const A=g;for(let F=0;F<=s;F++){const W=F/s*c+a,Y=Math.cos(W),X=Math.sin(W);E.x=x*X,E.y=p*y,E.z=x*Y,h.push(E.x,E.y,E.z),f.push(0,y,0),T.x=Y*.5+.5,T.y=X*.5*y+.5,d.push(T.x,T.y),g++}for(let F=0;F<s;F++){const U=P+F,W=A+F;_===!0?u.push(W,W+1,U):u.push(W+1,W,U),C+=3}l.addGroup(m,C,_===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ms extends Se{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ms(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ea extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new I,_=new I,P=new I;for(let T=0;T<e.length;T+=3)d(e[T+0],M),d(e[T+1],_),d(e[T+2],P),c(M,_,P,S)}function c(S,M,_,P){const T=P+1,E=[];for(let C=0;C<=T;C++){E[C]=[];const x=S.clone().lerp(_,C/T),y=M.clone().lerp(_,C/T),A=T-C;for(let F=0;F<=A;F++)F===0&&C===T?E[C][F]=x:E[C][F]=x.clone().lerp(y,F/A)}for(let C=0;C<T;C++)for(let x=0;x<2*(T-C)-1;x++){const y=Math.floor(x/2);x%2===0?(f(E[C][y+1]),f(E[C+1][y]),f(E[C][y])):(f(E[C][y+1]),f(E[C+1][y+1]),f(E[C+1][y]))}}function l(S){const M=new I;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(S),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function u(){const S=new I;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const _=p(S)/2/Math.PI+.5,P=m(S)/Math.PI+.5;o.push(_,1-P)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const M=o[S+0],_=o[S+2],P=o[S+4],T=Math.max(M,_,P),E=Math.min(M,_,P);T>.9&&E<.1&&(M<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),P<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,M){const _=S*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const S=new I,M=new I,_=new I,P=new I,T=new ot,E=new ot,C=new ot;for(let x=0,y=0;x<r.length;x+=9,y+=6){S.set(r[x+0],r[x+1],r[x+2]),M.set(r[x+3],r[x+4],r[x+5]),_.set(r[x+6],r[x+7],r[x+8]),T.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),P.copy(S).add(M).add(_).divideScalar(3);const A=p(P);v(T,y+0,S,A),v(E,y+2,M,A),v(C,y+4,_,A)}}function v(S,M,_,P){P<0&&S.x===1&&(o[M]=S.x-1),_.x===0&&_.z===0&&(o[M]=P/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.vertices,t.indices,t.radius,t.details)}}class Nl extends ea{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Nl(t.radius,t.detail)}}class er extends el{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new el().fromJSON(s))}return this}}const ox={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Bf(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=hx(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return zr(r,o,e,a,c,d,0),o}};function Bf(i,t,e,n,s){let r,o;if(s===Sx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Mh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Mh(r,i[r],i[r+1],o);return o&&na(o,o.next)&&(Vr(o),o=o.next),o}function ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(na(e,e.next)||He(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&gx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?cx(i,n,s,r):ax(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Vr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=lx(ds(i),t,e),zr(i,t,e,n,s,r,2)):o===2&&ux(i,t,e,n,s,r):zr(ds(i),t,e,n,s,r,1);break}}}function ax(i){const t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Ws(s,a,r,c,o,l,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cx(i,t,e,n){const s=i.prev,r=i,o=i.next;if(He(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,v=a>c?a>l?a:l:c>l?c:l,p=u>h?u>f?u:f:h>f?h:f,m=nl(d,g,t,e,n),S=nl(v,p,t,e,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=m&&_&&_.z<=S;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Ws(a,u,c,h,l,f,M.x,M.y)&&He(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Ws(a,u,c,h,l,f,_.x,_.y)&&He(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Ws(a,u,c,h,l,f,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Ws(a,u,c,h,l,f,_.x,_.y)&&He(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function lx(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!na(s,r)&&zf(s,n,n.next,r)&&kr(s,r)&&kr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Vr(n),Vr(n.next),n=i=r),n=n.next}while(n!==i);return ds(n)}function ux(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xx(o,a)){let c=kf(o,a);o=ds(o,o.next),c=ds(c,c.next),zr(o,t,e,n,s,r,0),zr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function hx(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Bf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(_x(l));for(s.sort(fx),r=0;r<s.length;r++)e=dx(s[r],e);return e}function fx(i,t){return i.x-t.x}function dx(i,t){const e=px(i,t);if(!e)return t;const n=kf(e,i);return ds(n,n.next),ds(e,e.next)}function px(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ws(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),kr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&mx(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function mx(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function gx(i,t,e,n){let s=i;do s.z===0&&(s.z=nl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vx(s)}function vx(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function nl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _x(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ws(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function xx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!yx(i,t)&&(kr(i,t)&&kr(t,i)&&Mx(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||na(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function na(i,t){return i.x===t.x&&i.y===t.y}function zf(i,t,e,n){const s=To(He(i,t,e)),r=To(He(i,t,n)),o=To(He(e,n,i)),a=To(He(e,n,t));return!!(s!==r&&o!==a||s===0&&Eo(i,e,t)||r===0&&Eo(i,n,t)||o===0&&Eo(e,i,n)||a===0&&Eo(e,t,n))}function Eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function To(i){return i>0?1:i<0?-1:0}function yx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&zf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function kr(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function Mx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function kf(i,t){const e=new il(i.i,i.x,i.y),n=new il(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mh(i,t,e,n){const s=new il(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function il(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Hi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Hi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Sh(t),bh(n,t);let o=t.length;e.forEach(Sh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,bh(n,e[c]);const a=ox.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Sh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Fl extends Ve{constructor(t=new er([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:bx;let M,_=!1,P,T,E,C;m&&(M=m.getSpacedPoints(u),_=!0,f=!1,P=m.computeFrenetFrames(u,!1),T=new I,E=new I,C=new I),f||(p=0,d=0,g=0,v=0);const x=a.extractPoints(l);let y=x.shape;const A=x.holes;if(!Hi.isClockWise(y)){y=y.reverse();for(let it=0,mt=A.length;it<mt;it++){const L=A[it];Hi.isClockWise(L)&&(A[it]=L.reverse())}}const U=Hi.triangulateShape(y,A),W=y;for(let it=0,mt=A.length;it<mt;it++){const L=A[it];y=y.concat(L)}function Y(it,mt,L){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(mt,L)}const X=y.length,Z=U.length;function z(it,mt,L){let Ot,ft,Ct;const _t=it.x-mt.x,Ht=it.y-mt.y,At=L.x-it.x,R=L.y-it.y,w=_t*_t+Ht*Ht,H=_t*R-Ht*At;if(Math.abs(H)>Number.EPSILON){const Q=Math.sqrt(w),at=Math.sqrt(At*At+R*R),et=mt.x-Ht/Q,Ut=mt.y+_t/Q,yt=L.x-R/at,Rt=L.y+At/at,ce=((yt-et)*R-(Rt-Ut)*At)/(_t*R-Ht*At);Ot=et+_t*ce-it.x,ft=Ut+Ht*ce-it.y;const pt=Ot*Ot+ft*ft;if(pt<=2)return new ot(Ot,ft);Ct=Math.sqrt(pt/2)}else{let Q=!1;_t>Number.EPSILON?At>Number.EPSILON&&(Q=!0):_t<-Number.EPSILON?At<-Number.EPSILON&&(Q=!0):Math.sign(Ht)===Math.sign(R)&&(Q=!0),Q?(Ot=-Ht,ft=_t,Ct=Math.sqrt(w)):(Ot=_t,ft=Ht,Ct=Math.sqrt(w/2))}return new ot(Ot/Ct,ft/Ct)}const nt=[];for(let it=0,mt=W.length,L=mt-1,Ot=it+1;it<mt;it++,L++,Ot++)L===mt&&(L=0),Ot===mt&&(Ot=0),nt[it]=z(W[it],W[L],W[Ot]);const ht=[];let lt,It=nt.concat();for(let it=0,mt=A.length;it<mt;it++){const L=A[it];lt=[];for(let Ot=0,ft=L.length,Ct=ft-1,_t=Ot+1;Ot<ft;Ot++,Ct++,_t++)Ct===ft&&(Ct=0),_t===ft&&(_t=0),lt[Ot]=z(L[Ot],L[Ct],L[_t]);ht.push(lt),It=It.concat(lt)}for(let it=0;it<p;it++){const mt=it/p,L=d*Math.cos(mt*Math.PI/2),Ot=g*Math.sin(mt*Math.PI/2)+v;for(let ft=0,Ct=W.length;ft<Ct;ft++){const _t=Y(W[ft],nt[ft],Ot);K(_t.x,_t.y,-L)}for(let ft=0,Ct=A.length;ft<Ct;ft++){const _t=A[ft];lt=ht[ft];for(let Ht=0,At=_t.length;Ht<At;Ht++){const R=Y(_t[Ht],lt[Ht],Ot);K(R.x,R.y,-L)}}}const kt=g+v;for(let it=0;it<X;it++){const mt=f?Y(y[it],It[it],kt):y[it];_?(E.copy(P.normals[0]).multiplyScalar(mt.x),T.copy(P.binormals[0]).multiplyScalar(mt.y),C.copy(M[0]).add(E).add(T),K(C.x,C.y,C.z)):K(mt.x,mt.y,0)}for(let it=1;it<=u;it++)for(let mt=0;mt<X;mt++){const L=f?Y(y[mt],It[mt],kt):y[mt];_?(E.copy(P.normals[it]).multiplyScalar(L.x),T.copy(P.binormals[it]).multiplyScalar(L.y),C.copy(M[it]).add(E).add(T),K(C.x,C.y,C.z)):K(L.x,L.y,h/u*it)}for(let it=p-1;it>=0;it--){const mt=it/p,L=d*Math.cos(mt*Math.PI/2),Ot=g*Math.sin(mt*Math.PI/2)+v;for(let ft=0,Ct=W.length;ft<Ct;ft++){const _t=Y(W[ft],nt[ft],Ot);K(_t.x,_t.y,h+L)}for(let ft=0,Ct=A.length;ft<Ct;ft++){const _t=A[ft];lt=ht[ft];for(let Ht=0,At=_t.length;Ht<At;Ht++){const R=Y(_t[Ht],lt[Ht],Ot);_?K(R.x,R.y+M[u-1].y,M[u-1].x+L):K(R.x,R.y,h+L)}}}$(),st();function $(){const it=s.length/3;if(f){let mt=0,L=X*mt;for(let Ot=0;Ot<Z;Ot++){const ft=U[Ot];dt(ft[2]+L,ft[1]+L,ft[0]+L)}mt=u+p*2,L=X*mt;for(let Ot=0;Ot<Z;Ot++){const ft=U[Ot];dt(ft[0]+L,ft[1]+L,ft[2]+L)}}else{for(let mt=0;mt<Z;mt++){const L=U[mt];dt(L[2],L[1],L[0])}for(let mt=0;mt<Z;mt++){const L=U[mt];dt(L[0]+X*u,L[1]+X*u,L[2]+X*u)}}n.addGroup(it,s.length/3-it,0)}function st(){const it=s.length/3;let mt=0;tt(W,mt),mt+=W.length;for(let L=0,Ot=A.length;L<Ot;L++){const ft=A[L];tt(ft,mt),mt+=ft.length}n.addGroup(it,s.length/3-it,1)}function tt(it,mt){let L=it.length;for(;--L>=0;){const Ot=L;let ft=L-1;ft<0&&(ft=it.length-1);for(let Ct=0,_t=u+p*2;Ct<_t;Ct++){const Ht=X*Ct,At=X*(Ct+1),R=mt+Ot+Ht,w=mt+ft+Ht,H=mt+ft+At,Q=mt+Ot+At;xt(R,w,H,Q)}}}function K(it,mt,L){c.push(it),c.push(mt),c.push(L)}function dt(it,mt,L){Dt(it),Dt(mt),Dt(L);const Ot=s.length/3,ft=S.generateTopUV(n,s,Ot-3,Ot-2,Ot-1);ee(ft[0]),ee(ft[1]),ee(ft[2])}function xt(it,mt,L,Ot){Dt(it),Dt(mt),Dt(Ot),Dt(mt),Dt(L),Dt(Ot);const ft=s.length/3,Ct=S.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);ee(Ct[0]),ee(Ct[1]),ee(Ct[3]),ee(Ct[1]),ee(Ct[2]),ee(Ct[3])}function Dt(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function ee(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return wx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ho[s.type]().fromJSON(s)),new Fl(n,t.options)}}const bx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ot(r,o),new ot(a,c),new ot(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ot(o,1-c),new ot(l,1-h),new ot(f,1-g),new ot(v,1-m)]:[new ot(a,1-c),new ot(u,1-h),new ot(d,1-g),new ot(p,1-m)]}};function wx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ia extends ea{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ia(t.radius,t.detail)}}class sa extends Ve{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/s,d=new I,g=new ot;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const S=m+p,M=S,_=S+n+1,P=S+n+2,T=S+1;a.push(M,_,T),a.push(_,P,T)}}this.setIndex(a),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Gr extends Ve{constructor(t=new er([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(r,3)),this.setAttribute("uv",new ue(o,2));function l(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;Hi.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const S=g[p];Hi.isClockWise(S)===!0&&(g[p]=S.reverse())}const v=Hi.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const S=g[p];d=d.concat(S)}for(let p=0,m=d.length;p<m;p++){const S=d[p];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let p=0,m=v.length;p<m;p++){const S=v[p],M=S[0]+h,_=S[1]+h,P=S[2]+h;n.push(M,_,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Ex(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Gr(n,t.curveSegments)}}function Ex(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ke extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,f=new I,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const S=[],M=m/n;let _=0;m===0&&o===0?_=.5/e:m===n&&c===Math.PI&&(_=-.5/e);for(let P=0;P<=e;P++){const T=P/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),p.push(T+_,1-M),S.push(l++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const M=u[m][S+1],_=u[m][S],P=u[m+1][S],T=u[m+1][S+1];(m!==0||o>0)&&d.push(M,_,T),(m!==n-1||c<Math.PI)&&d.push(_,P,T)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Hn extends Ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new I,h=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*r,p=d/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(v),h.y=(t+e*Math.cos(p))*Math.sin(v),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,S=(s+1)*d+g;o.push(v,p,S),o.push(p,m,S)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ol extends Ve{constructor(t=new Of(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new ot;let u=new I;const h=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(d,2));function v(){for(let M=0;M<e;M++)p(M);p(r===!1?e:0),S(),m()}function p(M){u=t.getPointAt(M/e,u);const _=o.normals[M],P=o.binormals[M];for(let T=0;T<=s;T++){const E=T/s*Math.PI*2,C=Math.sin(E),x=-Math.cos(E);c.x=x*_.x+C*P.x,c.y=x*_.y+C*P.y,c.z=x*_.z+C*P.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){const P=(s+1)*(M-1)+(_-1),T=(s+1)*M+(_-1),E=(s+1)*M+_,C=(s+1)*(M-1)+_;g.push(P,T,C),g.push(T,E,C)}}function S(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)l.x=M/e,l.y=_/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ol(new Ho[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Tx extends qi{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Yt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Vf extends qi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Yt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}function Ao(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ax(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rx(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function wh(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Gf(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class ra{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cx extends ra{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vs,endingEnd:Vs}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gs:r=t,a=2*e-n;break;case ko:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gs:o=t,c=2*n-e;break;case ko:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),v=g*g,p=v*g,m=-f*p+2*f*v-f*g,S=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*g+1,M=(-1-d)*p+(1.5+d)*v+.5*g,_=d*p-d*v;for(let P=0;P!==a;++P)r[P]=m*o[u+P]+S*o[l+P]+M*o[c+P]+_*o[h+P];return r}}class Hf extends ra{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class Px extends ra{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class hi{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ao(e,this.TimeBufferType),this.values=Ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ao(t.times,Array),values:Ao(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Px(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cx(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case zo:e=this.InterpolantFactoryMethodDiscrete;break;case Kc:e=this.InterpolantFactoryMethodLinear;break;case _a:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zo;case this.InterpolantFactoryMethodLinear:return Kc;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Ax(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_a,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const v=e[h+g];if(v!==e[f+g]||v!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Kc;class cr extends hi{constructor(t,e,n){super(t,e,n)}}cr.prototype.ValueTypeName="bool";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=zo;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wf extends hi{}Wf.prototype.ValueTypeName="color";class Wo extends hi{}Wo.prototype.ValueTypeName="number";class Ix extends ra{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let u=l+a;l!==u;l+=4)oi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Xr extends hi{InterpolantFactoryMethodLinear(t){return new Ix(this.times,this.values,this.getValueSize(),t)}}Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class lr extends hi{constructor(t,e,n){super(t,e,n)}}lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=zo;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends hi{}Hr.prototype.ValueTypeName="vector";class sl{constructor(t="",e=-1,n=[],s=Sl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Gn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Dx(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(hi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Rx(c);c=wh(c,1,u),l=wh(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Wo(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,v){if(d.length!==0){const p=[],m=[];Gf(d,p,m,g),p.length!==0&&v.push(new h(f,p,m))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)d[f[g].morphTargets[v]]=-1;for(const v in d){const p=[],m=[];for(let S=0;S!==f[g].morphTargets.length;++S){const M=f[g];p.push(M.time),m.push(M.morphTarget===v?1:0)}s.push(new Wo(".morphTargetInfluence["+v+"]",p,m))}c=d.length*o}else{const d=".bones["+e[h].name+"]";n(Hr,d+".position",f,"pos",s),n(Xr,d+".quaternion",f,"rot",s),n(Hr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Lx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wo;case"vector":case"vector2":case"vector3":case"vector4":return Hr;case"color":return Wf;case"quaternion":return Xr;case"bool":case"boolean":return cr;case"string":return lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Dx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Lx(i.type);if(i.times===void 0){const e=[],n=[];Gf(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Eh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ux{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Nx=new Ux;class Bl{constructor(t){this.manager=t!==void 0?t:Nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Bl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Fx extends Bl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Eh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Br("img");function c(){u(),Eh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Ox extends Bl{constructor(t){super(t)}load(t,e,n,s){const r=new un,o=new Fx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class zl extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Bx extends zl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qa=new le,Th=new I,Ah=new I;class Xf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),Qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rh=new le,Er=new I,tc=new I;class zx extends Xf{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Er.setFromMatrixPosition(t.matrixWorld),n.position.copy(Er),tc.copy(n.position),tc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(tc),n.updateMatrixWorld(),s.makeTranslation(-Er.x,-Er.y,-Er.z),Rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh)}}class kx extends zl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Vx extends Xf{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ch extends zl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Vx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gx{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){oi.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;oi.multiplyQuaternionsFlat(t,o,t,e,t,n),oi.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const kl="\\[\\]\\.:\\/",Hx=new RegExp("["+kl+"]","g"),Vl="[^"+kl+"]",Wx="[^"+kl.replace("\\.","")+"]",Xx=/((?:WC+[\/:])*)/.source.replace("WC",Vl),qx=/(WCOD+)?/.source.replace("WCOD",Wx),Yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vl),Zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vl),$x=new RegExp("^"+Xx+qx+Yx+Zx+"$"),Jx=["material","materials","bones","map"];class Kx{constructor(t,e,n){const s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Ae{constructor(t,e,n){this.path=e,this.parsedPath=n||Ae.parseTrackName(e),this.node=Ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Ae.Composite(t,e,n):new Ae(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hx,"")}static parseTrackName(t){const e=$x.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Jx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Ae.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ae.Composite=Kx;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jx{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:Vs,endingEnd:Vs};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=rp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case bl:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Sl:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===op;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===df){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=Gs,s.endingEnd=Gs):(t?s.endingStart=this.zeroSlopeAtStart?Gs:Vs:s.endingStart=ko,e?s.endingEnd=this.zeroSlopeAtEnd?Gs:Vs:s.endingEnd=ko)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const Qx=new Float32Array(1);class ty extends ps{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const f=s[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}const v=e&&e._propertyBindings[h].binding.parsedPath;g=new Gx(Ae.create(n,d,v),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const h=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete h[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Hf(new Float32Array(2),new Float32Array(2),1,Qx),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?sl.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Sl),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new jx(this,o,e,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?sl.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Ph=new le;class Ih{constructor(t,e,n=0,s=1/0){this.ray=new jo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new El,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ph.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(t,e=!0,n=[]){return rl(t,this,n,e),n.sort(Lh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)rl(t[s],this,n,e);return n.sort(Lh),n}}function Lh(i,t){return i.distance-t.distance}function rl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)rl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);const qr=`
float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x){
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p *= 2.03; a *= 0.5; } return s; }
`;let rs=null;function ey(){return rs||(rs=new Lf(new Uint8Array([120,160,205,238,255]),5,1,_l),rs.minFilter=rs.magFilter=En,rs.needsUpdate=!0,rs)}function ae(i,{map:t=null,grain:e=6,grainAmt:n=.12,tint:s="#9a86c4",rim:r=0,form:o=0,side:a=wi,transparent:c=!1,opacity:l=1}={}){const u=new Vf({color:i,map:t,gradientMap:ey(),side:a,transparent:c,opacity:l});return u.onBeforeCompile=h=>{Object.assign(h.uniforms,{uTint:{value:new Yt(s)},uGrain:{value:e},uGrainAmt:{value:n},uRim:{value:r},uRimCol:{value:new Yt("#ffb98a")},uForm:{value:o}}),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <project_vertex>",`#include <project_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP; uniform vec3 uTint; uniform float uGrain; uniform float uGrainAmt; uniform float uRim; uniform vec3 uRimCol; uniform float uForm;
${qr}`).replace("#include <dithering_fragment>",`
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
}`)},u}const ec=new Map;function qf(i="#7a5646",t=.008,e=12){const n=`${i}|${t}|${e}`;if(ec.has(n))return ec.get(n);const s=new Xe({color:i,side:xn});return s.onBeforeCompile=r=>{r.uniforms.uThick={value:t},r.uniforms.uFreq={value:e},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uThick; uniform float uFreq;
${qr}`).replace("#include <begin_vertex>",`
#include <begin_vertex>
float wob = vnoise(position * uFreq);
transformed += normal * uThick * (0.4 + 1.2 * wob);`)},ec.set(n,s),s}function hn(i,t,e,n){const s=new ut(i.geometry,qf(t,e,n));return s.name=`${i.name||"mesh"}-outline`,i.add(s),i}function ny(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);e.addColorStop(0,"rgba(110,70,90,0.5)"),e.addColorStop(1,"rgba(110,70,90,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new jn(i);return n.colorSpace=Ne,n}function Yf(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#e9e2f0",t.fillRect(0,0,256,256);let e=11;const n=()=>(e=e*16807%2147483647)/2147483647;for(let r=0;r<4;r++)t.fillStyle="rgba(126, 168, 196, 0.38)",t.fillRect(r*64+14,0,26,256),t.fillStyle="rgba(240, 160, 140, 0.34)",t.fillRect(0,r*64+14,256,26);for(let r=0;r<1600;r++)t.fillStyle=`rgba(110, 80, 90, ${n()*.05})`,t.fillRect(n()*256,n()*256,1+n()*2,1);const s=new jn(i);return s.colorSpace=Ne,s.wrapS=s.wrapT=Ks,s.anisotropy=4,s}function iy(i=20261115){let t=i>>>0;const e=()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296,n=c=>({t0:c,d:6.5+e()*3,s:.42+.58*Math.pow(e(),.8),seed:1+e()*40});let s=n(.5),r=n(s.t0+s.d*(.75+e()*.2));const o=c=>(c=Math.min(1,Math.max(0,c)),Math.pow(Math.sin(Math.PI*Math.pow(c,.7)),1.3));let a=0;return{at(c){for(;(c-s.t0)/s.d>1.12;)s=r,r=n(s.t0+s.d*(.75+e()*.2)),a++;const l=(c-s.t0)/s.d,u=(c-r.t0)/r.d;return{a:[l,s.s,s.seed],b:[u,r.s,r.seed],wash:Math.max(s.s*o(l),r.s*o(u)),count:a,period:s.d,strength:s.s}}}}const Zf=`
uniform vec3 uWA, uWB; uniform float uTime;
float wshape(float p){ p = clamp(p, 0.0, 1.0); return pow(sin(3.14159265 * pow(p, 0.7)), 1.3); }
float wreach(vec3 w, float x, float lag){
  float n = vnoise(vec3(x * 0.0045, w.z, 2.0)) - 0.5;          // 해안선을 따라 도착 시간·높이가 조금씩 다름
  return w.y * wshape(w.x - lag - n * 0.14) * (50.0 + 44.0 * n);
}
float restLine(float x){ return 690.0 + (vnoise(vec3(x * 0.006, 1.0, 0.0)) - 0.5) * 24.0 + sin(x * 0.013 + uTime * 0.4) * 4.0; }
float frontY(float x, float lag){ return restLine(x) + max(wreach(uWA, x, lag), wreach(uWB, x, lag)); }   // 최대 약 778 (마른 모래 기준선 800 미만)
`,$f=i=>typeof window!="undefined"&&window.__ASSETS&&window.__ASSETS[i]||"./"+i,cn={w:1536,h:1024,horizon:355,focusX:768},sy=800,ze={x0:-256,w:2048,y0:640,h:512},Jf=`
${qr}
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
`,ry=`
uniform sampler2D tSky; uniform vec2 uRes; uniform vec4 uView; uniform float uS, uDpr, uTime; uniform vec3 uSky;
${Jf}
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
}`,oy=`
uniform sampler2D tSky, tSea, tWaves, tSand, tMap;
uniform vec2 uRes; uniform vec4 uView; uniform float uS, uDpr; uniform vec3 uSky; uniform mat4 uRefVP; uniform vec2 uMapPx;
varying vec3 vWP;
${Jf}
${Zf}
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
  vec2 muv = vec2((P.x - ${ze.x0.toFixed(1)}) / ${ze.w.toFixed(1)}, (P.y - ${ze.y0.toFixed(1)}) / ${ze.h.toFixed(1)});
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
}`,ay=`
uniform sampler2D tPrev; uniform float uDt; varying vec2 vUv;
${qr}
${Zf}
void main(){
  vec2 P = vec2(${ze.x0.toFixed(1)} + vUv.x * ${ze.w.toFixed(1)}, ${ze.y0.toFixed(1)} + vUv.y * ${ze.h.toFixed(1)});
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
}`;function cy(i,{mapW:t=1024}={}){const e=new Ox;let n=4;const s={done:!1},r=Z=>{const z=e.load($f(`bg/${Z}.webp`),()=>{--n===0&&(s.done=!0)});return z.colorSpace=Ne,z.minFilter=En,z.generateMipmaps=!1,z},o=t/4,a=()=>new ai(t,o,{type:ti,depthBuffer:!1,minFilter:En,magFilter:En});let c=a(),l=a();const u={uRes:{value:new ot(1,1)},uView:{value:new xe(1,1,0,0)},uS:{value:1},uDpr:{value:1},uSky:{value:new I(0,1,0)},uTime:{value:0},uWA:{value:new I(-1,0,1)},uWB:{value:new I(-1,0,2)}},h={value:r("sky")},f=new ut(new Ze(2,2),new Tn({uniforms:{tSky:h,...u},depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:ry}));f.frustumCulled=!1,f.renderOrder=-100;const d={tSky:h,tSea:{value:r("sea")},tWaves:{value:r("waves")},tSand:{value:r("sand")},tMap:{value:c.texture},uRefVP:{value:new le},uMapPx:{value:new ot(1/t,1/o)},...u},g=new Ve,v=400,p=-900,m=40;g.setAttribute("position",new on(new Float32Array([-v,0,p,v,0,p,-v,0,m,v,0,m]),3)),g.setIndex([0,2,1,1,2,3]);const S=new ut(g,new Tn({uniforms:d,vertexShader:"varying vec3 vWP; void main(){ vWP = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vWP, 1.0); }",fragmentShader:oy}));S.frustumCulled=!1,S.renderOrder=-50;const M=new Dr,_=new Qo(-1,1,1,-1,0,1),P={tPrev:{value:null},uDt:{value:.1},uTime:u.uTime,uWA:u.uWA,uWB:u.uWB},T=new ut(new Ze(2,2),new Tn({uniforms:P,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:ay}));T.frustumCulled=!1,M.add(T);const E=new Dr,C=new Tn({uniforms:{tStamp:{value:null},uAmt:{value:1}},depthTest:!1,depthWrite:!1,transparent:!0,side:Ge,blending:Qh,blendEquation:yi,blendSrc:fc,blendDst:fc,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4((modelMatrix * vec4(position, 1.0)).xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D tStamp; uniform float uAmt; varying vec2 vUv; void main(){ gl_FragColor = vec4(0.0, texture2D(tStamp, vUv).a * uAmt, 0.0, 0.0); }"}),x=new ut(new Ze(1,1),C);x.frustumCulled=!1,E.add(x);let y=!1,A=0;function F(Z){const z=i.getRenderTarget(),nt=i.autoClear;if(!y){for(const ht of[c,l])i.setRenderTarget(ht),i.setClearColor(0,1),i.clear();y=!0}P.tPrev.value=c.texture,P.uDt.value=Z,i.setRenderTarget(l),i.render(M,_),[c,l]=[l,c],d.tMap.value=c.texture,i.setRenderTarget(z),i.autoClear=nt}function U(Z,z,nt,ht,lt,It=1,kt=!1){C.blendEquation=kt?tf:yi;const $=new jn(Z);$.flipY=!0,C.uniforms.tStamp.value=$,C.uniforms.uAmt.value=It;const st=(z-ze.x0)/ze.w,tt=(nt-ze.y0)/ze.h;x.position.set(st*2-1,tt*2-1,0),x.scale.set(ht/ze.w*2,-(lt/ze.h)*2,1);const K=i.getRenderTarget(),dt=i.autoClear;i.autoClear=!1,i.setRenderTarget(c),i.render(E,_),i.setRenderTarget(K),i.autoClear=dt,$.dispose()}function W(Z=ze.x0,z=ze.y0,nt=ze.w,ht=ze.h){const lt=Math.max(0,Math.floor((Z-ze.x0)/ze.w*t)),It=Math.max(0,Math.floor((z-ze.y0)/ze.h*o)),kt=Math.max(1,Math.min(t-lt,Math.round(nt/ze.w*t))),$=Math.max(1,Math.min(o-It,Math.round(ht/ze.h*o))),st=new Uint8Array(kt*$*4);i.readRenderTargetPixels(c,lt,It,kt,$,st);let tt=0,K=0;for(let xt=0;xt<st.length;xt+=4)tt+=st[xt],K+=st[xt+1];const dt=kt*$*255;return[tt/dt,K/dt]}function Y(Z,z,nt){const ht=Z/z<1;let lt,It,kt,$=0;if(ht)lt=z/cn.h,It=Z/2-cn.focusX*lt,kt=0;else{lt=Math.max(Z/cn.w,z/cn.h);const st=z/lt,tt=Math.max(0,sy-.93*st),K=Math.min(cn.h-st,200,cn.horizon-.12*st);$=Math.min(cn.h-st,Math.max(tt,Math.min(K,cn.horizon-.2*st))),It=(Z-cn.w*lt)/2,kt=-$*lt}return u.uRes.value.set(Math.round(Z*nt),Math.round(z*nt)),u.uView.value.set(Z,z,It,kt),u.uS.value=lt,u.uDpr.value=nt,{portrait:ht,scale:lt,tx:It,ty:kt,horizonFrac:(kt+cn.horizon*lt)/z,w:Z,h:z,stageTop:-kt/lt,stageBottom:(z-kt)/lt}}function X(Z,z,nt,ht=1){u.uTime.value=Z,u.uWA.value.fromArray(nt.a),u.uWB.value.fromArray(nt.b),A+=z;let lt=0;for(;A>=.1&&lt<3*ht;)F(.1),A-=.1,lt++;A>.3*ht&&(A=0)}return{sky:f,ground:S,layout:Y,update:X,stamp:U,readMap:W,ready:s,shared:u,setRef:Z=>d.uRefVP.value.copy(Z),setSky:(Z,z)=>u.uSky.value.set(Z,z,0),mapSize:[t,o]}}const Dh="#7a5646",Kf={strawHat:{slot:"head",label:"밀짚모자",build(){const i=new Zt;i.name="item:strawHat";const t=ae("#ecd096",{grain:30,grainAmt:.22,tint:"#b49ac0",rim:.35}),e=new ut(new Se(.25,.27,.02,40),t);e.position.y=-.035,e.castShadow=!0,hn(e,Dh,.006,20);const n=e.geometry.attributes.position;for(let o=0;o<n.count;o++){const a=Math.hypot(n.getX(o),n.getZ(o));a>.2&&n.setY(o,n.getY(o)-(a-.2)*.35)}e.geometry.computeVertexNormals();const s=new ut(new ke(.15,32,16,0,Math.PI*2,0,Math.PI/2),t);s.scale.set(1,.72,.95),s.position.y=-.03,s.castShadow=!0,hn(s,Dh,.006,20);const r=new ut(new Se(.152,.152,.032,40,1,!0),ae("#ec8f7c",{grain:12,side:Ge}));return r.position.y=-.012,r.scale.z=.95,i.add(e,s,r),i.rotation.z=.12,i.scale.setScalar(1.35),i}},glasses:{slot:"face",label:"안경",build(){const i=new Zt;i.name="item:glasses";const t=ae("#8a5a46",{grain:8,rim:.2}),e=new Xe({color:"#cfe6ee",transparent:!0,opacity:.22,depthWrite:!1});for(const s of[-1,1]){const r=new ut(new Hn(.052,.008,10,36),t);r.position.set(s*.092,0,-.012),r.scale.y=.92,i.add(r);const o=new ut(new Ln(.052,28),e);o.position.set(s*.092,0,-.012),o.rotation.y=Math.PI,i.add(o);const a=new ut(new Se(.005,.005,.17,6),t);a.rotation.x=Math.PI/2,a.position.set(s*.146,0,.07),i.add(a)}const n=new ut(new Se(.0055,.0055,.06,6),t);return n.rotation.z=Math.PI/2,n.position.set(0,.012,-.014),i.add(n),i}}},ly="#f6db8c",Gl="#7c573f",uy=[[0,0],[.17,.01],[.27,.05],[.325,.14],[.34,.26],[.33,.38],[.3,.49],[.272,.58],[.262,.65],[.266,.73],[.258,.81],[.232,.89],[.18,.96],[.1,1.01],[0,1.03]];function hy(){const t=new Ul(uy.map(([a,c])=>new ot(a,c))).getPoints(48).map(a=>new ot(Math.max(0,a.x),a.y));t[0].x=0,t[t.length-1].x=0;const e=new Yi(t,48);e.scale(1,1,.9);const n=e.attributes.position,s=[],r=[],o=(a,c,l)=>{const u=Math.min(1,Math.max(0,(l-a)/(c-a)));return u*u*(3-2*u)};for(let a=0;a<n.count;a++){const c=n.getY(a),l=o(.58,.74,c),u=o(.28,.5,c),h=u-l,f=1-u;s.push(0,1,2,0),r.push(f,h,l,0)}return e.setAttribute("skinIndex",new Tl(s,4)),e.setAttribute("skinWeight",new ue(r,4)),e}function zn(i,t,e,{outline:n=!0,shadow:s=!0}={}){const r=new ut(i,t);return r.name=e,r.castShadow=s,n&&hn(r,Gl,.006,16),r}function fy(){const n=[[.338,.29],[.355,.26],[.358,.2],[.362,.13],[.385,.06],[.44,.022],[.52,.01],[.585,.008]],s=c=>{const l=c*(n.length-1),u=Math.min(n.length-2,Math.floor(l)),h=l-u;return[n[u][0]+(n[u+1][0]-n[u][0])*h,n[u][1]+(n[u+1][1]-n[u][1])*h]},r=new Ze(1,1,40,18),o=r.attributes.position,a=r.attributes.uv;for(let c=0;c<o.count;c++){const l=a.getX(c),u=1-a.getY(c),h=(l-.5)*2*2,f=Math.abs(l-.5)*2;let[d,g]=s(u);const v=.036*Math.pow(u,1.2)*(Math.sin(h*6+.7)+.45*Math.sin(h*11+2.1));d+=v+.012*Math.sin(h*3.1),u<.12&&(d+=.018*(1-u/.12)),g+=(f*f*.02+(l-.5)*.07)*(1-u),u>.8&&(g=Math.max(.006,g+.006*Math.sin(h*9))),o.setXYZ(c,Math.sin(h)*d,g,-Math.cos(h)*d*.9)}return r.computeVertexNormals(),r}function dy(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#efe2cf",t.fillRect(0,0,256,256);let e=3;const n=()=>(e=e*16807%2147483647)/2147483647;for(let r=0;r<1400;r++){const o=n()*256,a=n()*256,c=2+n()*4,l=t.createRadialGradient(o-1,a-1,0,o,a,c);l.addColorStop(0,"rgba(255,250,240,.9)"),l.addColorStop(.7,"rgba(236,220,198,.5)"),l.addColorStop(1,"rgba(180,150,120,0)"),t.fillStyle=l,t.beginPath(),t.arc(o,a,c,0,6.3),t.fill()}for(let r=0;r<6;r++)t.fillStyle="rgba(176,120,96,.10)",t.fillRect(0,r*44+10,256,12),t.fillRect(r*44+10,0,12,256);const s=new jn(i);return s.colorSpace=Ne,s.wrapS=s.wrapT=Ks,s.repeat.set(3,2),s}function py(){const i=new Zt;i.name="shawl";const t=ae("#ffffff",{map:dy(),grain:30,grainAmt:.18,tint:"#a08ac8",rim:.35,side:Ge}),e=[[.27,.225],[.33,.175],[.385,.09],[.41,-.02],[.425,-.14],[.43,-.26]],n=d=>{const g=d*(e.length-1),v=Math.min(e.length-2,Math.floor(g)),p=g-v;return[e[v][0]+(e[v+1][0]-e[v][0])*p,e[v][1]+(e[v+1][1]-e[v][1])*p]},s=2,r=(d,g)=>{const v=(d-.5)*2*s;let[p,m]=n(g);p+=.012*Math.sin(v*7)*g*g+.01+.028*Math.pow(Math.sin(v*3.2),2)*Math.pow(Math.sin(g*Math.PI*2.2+.4),2);const S=Math.abs(d-.5)*2;return m-=S*S*.05*g,new I(Math.sin(v)*p,m,Math.cos(v)*p*.9)},o=48,a=16,c=new Ze(1,1,o,a),l=c.attributes.position,u=c.attributes.uv;for(let d=0;d<l.count;d++){const g=r(u.getX(d),1-u.getY(d));l.setXYZ(d,g.x,g.y,g.z)}c.computeVertexNormals();const h=new ut(c,t);h.castShadow=!0,i.add(h);const f=(d,g)=>{const v=new ut(new Ol(new Df(d),d.length*6,g,8,!1),t);v.castShadow=!0,hn(v,Gl,.005,14),i.add(v)};f(Array.from({length:13},(d,g)=>r(g/12,0).add(new I(0,.015,0))),.058);for(const d of[0,1])f(Array.from({length:8},(g,v)=>r(d,v/7)),.038);return f(Array.from({length:13},(d,g)=>r(g/12,1)),.036),i}function my(){const i=new Zt;i.name="seal";const t=ae(ly,{grain:6,grainAmt:.22,tint:"#c4a0b0",rim:.45,form:1}),e=ae("#fbecc4",{grain:9,grainAmt:.1,tint:"#c4a0b0",rim:.3,form:.6}),n=new Xe({color:"#3d2c25"}),s=(tt,K,dt,xt,Dt)=>{const ee=new If;return ee.name=tt,ee.position.set(K,dt,xt),Dt&&Dt.add(ee),ee},r=s("root",0,0,0),o=s("spine",0,.42,0,r),a=s("head",0,.24,0,o),c=s("armL",-.255,.05,-.05,o),l=s("armR",.255,.05,-.05,o),u=s("footL",-.12,.07,-.22,r),h=s("footR",.12,.07,-.22,r),f=s("book",0,.03,-.37,o);f.scale.setScalar(1.75),a.rotation.x=-.26,f.rotation.x=-1.05;const d=hy(),g=new gh(d,t);g.name="body",g.castShadow=!0,g.add(r);const v=new Cl([r,o,a,c,l,u,h,f]);g.bind(v);const p=new gh(d,qf(Gl,.0045,14));p.name="body-outline",g.add(p),p.bind(v,g.bindMatrix),i.add(g);const m=new ke(.021,14,10);for(const tt of[-1,1]){const K=new ut(m,n);K.name=tt<0?"eyeL":"eyeR",K.position.set(tt*.092,.17,-.212),K.scale.set(1,1.15,.6),a.add(K);const dt=new ut(new Ln(.034,18),new Xe({color:"#f2a0a0",transparent:!0,opacity:.45,depthWrite:!1}));dt.position.set(tt*.15,.11,-.195),dt.rotation.y=Math.PI+tt*-.62,dt.scale.y=.7,a.add(dt);const xt=zn(new ke(.048,18,12),e,tt<0?"muzzleL":"muzzleR",{outline:!1});xt.position.set(tt*.038,.095,-.222),xt.scale.set(1,.85,.7),a.add(xt)}const S=new ut(new ke(.02,12,8),n);S.name="nose",S.position.set(0,.125,-.252),S.scale.set(1.3,.85,.8),a.add(S);const M=zn(new ke(.2,24,16),e,"belly",{outline:!1});M.position.set(0,-.12,-.215),M.scale.set(1.05,1.3,.35),o.add(M);const _=new ke(.07,18,12);for(const[tt,K]of[[c,-1],[l,1]]){const dt=zn(_,t,`${tt.name}-flipper`);dt.scale.set(.8,1.7,.62),dt.position.set(0,-.09,0),tt.add(dt),tt.rotation.set(1.45,0,K*.3)}const P=new ke(.07,18,12);for(const[tt,K]of[[u,-1],[h,1]]){const dt=zn(P,t,`${tt.name}-flipper`);dt.scale.set(.9,.55,1.5),dt.position.set(0,0,-.06),tt.add(dt),tt.rotation.set(.15,K*.25,0)}const T=ae("#f8efdc",{grain:14,tint:"#b6a6cf",rim:.2}),E=ae("#6286a8",{grain:10});for(const tt of[-1,1]){const K=new Zt,dt=zn(new yn(.15,.2,.024),T,"pages");dt.position.x=tt*.08;const xt=new ut(new yn(.16,.21,.007),E);xt.position.set(tt*.082,0,-.016),xt.castShadow=!0,K.add(dt,xt),K.rotation.y=tt*-.4,f.add(K)}const C=(tt,K,dt,xt,Dt,ee=0)=>{const it=new qe;return it.name=`slot:${tt}`,it.position.set(dt,xt,Dt),it.rotation.x=ee,K.add(it),it},x={head:C("head",a,0,.345,0,.08),face:C("face",a,0,.17,-.22),neck:C("neck",o,0,.2,0),back:C("back",o,0,0,.27),hand:C("hand",f,0,0,0)},y=new Hn(.024,.0062,6,16,Math.PI),A=[-1,1].map(tt=>{const K=new ut(y,n);return K.name=tt<0?"lidL":"lidR",K.position.set(tt*.092,.162,-.216),K.rotation.y=Math.PI,K.visible=!1,a.add(K),K}),F=new Zt;F.name="mug";{const tt=zn(new Se(.05,.043,.095,18),ae("#fbf3e6",{grain:30}),"mug-cup");F.add(tt);const K=new ut(new Se(.0515,.048,.026,18,1,!0),ae("#6fb0c6",{grain:20}));F.add(K);const dt=zn(new Hn(.026,.008,6,12,Math.PI),ae("#fbf3e6"),"mug-handle");dt.position.x=.05,dt.rotation.z=-Math.PI/2,F.add(dt);const xt=new ut(new Ln(.045,16),new Xe({color:"#9a6240"}));xt.rotation.x=-Math.PI/2,xt.position.y=.042,F.add(xt)}F.position.set(0,-.2,-.04),F.rotation.set(-2.3,0,0),F.visible=!1,l.add(F);const U=new Zt;U.name="leaf",U.rotation.y=-.4,f.add(U);{const tt=zn(new yn(.145,.195,.004),T,"leaf-page");tt.position.set(.078,0,.015),U.add(tt)}U.visible=!1;const W=Yf();W.repeat.set(2.2,1.4);const Y=new ut(fy(),ae("#ffffff",{map:W,grain:5,tint:"#a08ac8",rim:.2,side:Ge}));Y.name="blanket",Y.castShadow=!0,Y.receiveShadow=!0,Y.visible=!1,r.add(Y);const X=Kf.glasses.build();X.visible=!1,x.face.add(X);const Z=[a.getObjectByName("eyeL"),a.getObjectByName("eyeR")],z=py();z.visible=!1,o.add(z);const nt=new Zt;nt.name="skewer";{const tt=zn(new Se(.008,.01,.62,6),ae("#b98a5a"),"stick");tt.position.y=-.26,nt.add(tt);const K=zn(new bi(.045,.2,6,12),ae("#fff8ea",{grain:20}),"tteok");K.position.y=-.5,nt.add(K);for(let dt=0;dt<6;dt++){const xt=new ut(new Ln(.012,8),new Xe({color:"#c9874a",transparent:!0,opacity:0})),Dt=dt*1.7;xt.position.set(Math.cos(Dt)*.046,-.43-dt%3*.06,Math.sin(Dt)*.046),xt.lookAt(xt.position.clone().multiplyScalar(2).setY(xt.position.y)),xt.name="toast",nt.add(xt)}}nt.position.set(0,-.17,-.03),nt.rotation.set(-1.05,0,.55),nt.visible=!1,l.add(nt);const ht=new Zt,lt=new Zt;a.add(ht,lt);const It=ae("#f6b8b4",{grain:10,rim:.2});for(const tt of[-1,1]){const K=zn(new ke(.075,18,12),t,"earBear");K.scale.set(1,1,.55),K.position.set(tt*.235,.285,.02),K.rotation.z=tt*-.75,K.scale.multiplyScalar(1.1),ht.add(K);const dt=new ut(new Ln(.045,16),It);dt.position.set(tt*.235,.285,-.025),dt.rotation.set(0,Math.PI,tt*.75),ht.add(dt);const xt=zn(new bi(.05,.2,6,14),t,"earBunny");xt.scale.set(1,1,.5),xt.position.set(tt*.085,.47,.03),xt.rotation.z=tt*-.22,xt.rotation.x=.12,lt.add(xt);const Dt=new ut(new bi(.028,.15,4,10),It);Dt.scale.set(1,1,.3),Dt.position.set(tt*.085,.47,.006),Dt.rotation.z=tt*-.22,Dt.rotation.x=.12,lt.add(Dt)}ht.visible=lt.visible=!1;const kt={seal:{name:"노란 물범",fur:"#f6db8c",cream:"#fbecc4"},bear:{name:"곰돌이",fur:"#c99670",cream:"#f3dcc0"},bunny:{name:"하얀 토끼",fur:"#fbf4ea",cream:"#ffffff"}};let $="seal";function st(tt){kt[tt]||(tt="seal"),$=tt;const K=kt[tt];return t.color.set(K.fur),e.color.set(K.cream),ht.visible=tt==="bear",lt.visible=tt==="bunny",K.name}return{group:i,body:g,skeleton:v,bones:{root:r,spine:o,head:a,armL:c,armR:l,footL:u,footR:h,book:f},slots:x,extras:{lids:A,eyes:Z,mug:F,leaf:U,blanket:Y,glasses:X,shawl:z,skewer:nt},setKind:st,get kind(){return $},KINDS:kt}}const Uh=30,jf=i=>i<=0?0:i>=1?1:i*i*i*(i*(i*6-15)+10),$n=(i,t,e)=>jf((i-t)/(e-t)),Ee=(i,t,e,n,s)=>$n(i,t,e)*(1-$n(i,n,s)),Ro=(i,t,e=9,n=5)=>i<t?0:Math.exp(-(i-t)*n)*Math.sin((i-t)*e),_i=(i,t,e)=>Math.exp(-(((i-t)/e)**2)),Tr=new oi,gy=new ci;function Zn(i,t,e){const n=Math.round(t*Uh)+1,s=Array.from({length:n},(a,c)=>c/Uh),r=[];for(const[a,c]of Object.entries(e)){const l=a.split(".").pop(),u=[];for(const h of s){const f=c(h);l==="quaternion"?(Tr.setFromEuler(gy.set(f[0]||0,f[1]||0,f[2]||0)),u.push(Tr.x,Tr.y,Tr.z,Tr.w)):u.push(f[0]||0,f[1]||0,f[2]||0)}r.push(l==="quaternion"?new Xr(a,s,u):new Hr(a,s,u))}const o=new sl(i,t,r);return o.blendMode=bl,o}const zs=i=>({"book.position":t=>[0,-.11*i(t),.1*i(t)],"book.quaternion":t=>[-.45*i(t),0,.12*i(t)]}),nc={read:{loop:!0,clip:()=>{const t=e=>.5-.5*Math.cos(e*2*Math.PI/3.6);return Zn("read",7.2,{"spine.scale":e=>[.008*t(e),.02*t(e),.012*t(e)],"head.quaternion":e=>[.03*Math.sin(e*2*Math.PI/7.2),.05*Math.sin(e*2*Math.PI/7.2+1.2),.02*Math.sin(e*2*Math.PI/7.2+.4)],"book.position":e=>[0,.005*t(e),0]})}},page:{D:1.9,show:{leaf:[.35,1.45]},cues:[[.45,"page"]],clip:()=>{const t=n=>Ee(n,.05,.4,1.25,1.75),e=n=>$n(n,.4,1.2);return Zn("page",1.9,{"armR.quaternion":n=>[.25*t(n),0,-.15*t(n)-.55*e(n)*t(n)],"leaf.quaternion":n=>[0,-2.3*$n(n,.42,1.25)-.08*Ro(n,1.25,14,7),0],"head.quaternion":n=>[.03*t(n),(-.1+.22*e(n))*t(n),.04*Math.sin(Math.PI*e(n))],"spine.quaternion":n=>[0,.05*Math.sin(Math.PI*e(n)),0],"book.quaternion":n=>[.05*_i(n,.5,.15),0,0]})}},coffee:{D:3.8,eyes:i=>Ee(i,1.15,1.35,2.5,2.75),show:{mug:[.2,3.45]},cues:[[1.25,"sip"],[2.6,"ahh"],[3.35,"clink"]],clip:()=>{const t=s=>Ee(s,0,.5,3.1,3.7),e=s=>Ee(s,.35,1.1,2.7,3.4),n=s=>Ee(s,1.05,1.35,2.3,2.7);return Zn("coffee",3.8,{...zs(t),"armR.quaternion":s=>[.95*e(s)+.15*n(s),0,-.5*e(s)],"armL.quaternion":s=>[-.25*t(s),0,0],"head.quaternion":s=>[.34*e(s)+.12*n(s)-.05*_i(s,1.6,.1),-.06*e(s),.05*n(s)],"spine.quaternion":s=>[.06*n(s),0,0],"spine.scale":s=>[.02*_i(s,2.65,.2),-.035*_i(s,2.65,.2),.02*_i(s,2.65,.2)]})}},sea:{D:6.4,sleepy:!0,eyes:i=>.55*Ee(i,2.4,2.8,3.7,4.1),cues:[[.3,"breeze"]],clip:()=>{const t=e=>Ee(e,.25,1.9,4.6,6.2);return Zn("sea",6.4,{"head.quaternion":e=>[.42*t(e)+.03*Math.sin(e*1.3)*t(e),.95*t(e),-.06*t(e)],"spine.quaternion":e=>[.04*t(e),.45*t(e),0],"root.quaternion":e=>[0,.12*t(e),0],"spine.scale":e=>[0,.03*_i(e,3.2,.5),0],...zs(e=>.6*t(e))})}},stretch:{D:3.9,eyes:i=>Ee(i,.5,.8,2.6,2.9),cues:[[.5,"stretch"],[2.55,"plop"]],clip:()=>{const t=s=>Ee(s,.45,1.15,2.4,2.75),e=s=>Ee(s,0,.4,.45,.75),n=s=>Ee(s,1.15,1.35,2.2,2.4)*Math.sin(s*38);return Zn("stretch",3.9,{...zs(s=>Ee(s,.1,.55,2.9,3.6)),"spine.scale":s=>[-.03*t(s)+.03*e(s)+.04*Ro(s,2.6,16,6),.09*t(s)-.04*e(s)-.05*Ro(s,2.6,16,6),0],"root.position":s=>[0,.02*t(s)+.025*Math.max(0,Ro(s,2.6,13,6)),0],"armL.quaternion":s=>[1.3*t(s)+.05*n(s),0,-1.2*t(s)],"armR.quaternion":s=>[1.3*t(s)-.05*n(s),0,1.2*t(s)],"head.quaternion":s=>[.4*t(s)-.08*e(s),0,.03*n(s)],"footL.quaternion":s=>[-.35*t(s),0,0],"footR.quaternion":s=>[-.35*t(s),0,0]})}},doze:{D:6.6,sleepy:!0,eyes:i=>$n(i,.4,1.3)*(1-$n(i,4.15,4.25)),cues:[[1,"snore"],[4.15,"wake"]],clip:()=>{const t=s=>.22*Ee(s,1,1.9,2,2.4)+.36*Ee(s,2.6,3.6,4.1,4.3)+.06*Ee(s,.3,.9,3.8,4.2),e=s=>s<4.12?0:Math.exp(-(s-4.12)*3.5)*Math.cos((s-4.12)*9)*(1-$n(s,5.4,6.2)),n=s=>Ee(s,4.5,4.7,5.3,5.6)*Math.sin((s-4.5)*17);return Zn("doze",6.6,{"head.quaternion":s=>[-t(s)+.14*Math.max(0,e(s)),.22*n(s),.06*Ee(s,1,2,3.8,4.2)],"spine.quaternion":s=>[-.35*t(s),0,0],"book.position":s=>[0,-.06*t(s)/.36*(s<4.2?1:0),0],"book.quaternion":s=>[.4*t(s),0,0],"root.position":s=>[0,.05*Math.max(0,e(s)),0],"spine.scale":s=>[0,.05*Math.max(0,e(s)),0],"armL.quaternion":s=>[-.25*t(s)+.3*Math.max(0,e(s)),0,-.25*Math.max(0,e(s))],"armR.quaternion":s=>[-.25*t(s)+.3*Math.max(0,e(s)),0,.25*Math.max(0,e(s))],"eyeL.scale":s=>[.25*Math.max(0,e(s)),.45*Math.max(0,e(s)),0],"eyeR.scale":s=>[.25*Math.max(0,e(s)),.45*Math.max(0,e(s)),0]})}},clap:{D:3,eyes:i=>Ee(i,.45,.6,2.3,2.5),cues:[[.62,"pat"],[.98,"pat"],[1.34,"pat"],[1.7,"pat"],[.55,"coo"]],clip:()=>{const t=n=>Ee(n,.1,.5,2.1,2.7),e=n=>n>.45&&n<1.9?.5-.5*Math.cos((n-.45)*Math.PI*2/.36):0;return Zn("clap",3,{...zs(t),"armL.quaternion":n=>[.3*t(n),0,(.7+.8*e(n))*t(n)],"armR.quaternion":n=>[.3*t(n),0,-(.7+.8*e(n))*t(n)],"root.position":n=>[0,.018*e(n)*t(n),0],"spine.scale":n=>[.015*e(n)*t(n),-.02*e(n)*t(n),0],"head.quaternion":n=>[.22*t(n),-.5*t(n),.1*Math.sin(n*5)*t(n)]})}},hello:{D:3,eyes:i=>Ee(i,.9,1,2,2.1),cues:[[.35,"coo"],[.5,"flap"]],clip:()=>{const t=n=>Ee(n,.1,.55,2.3,2.85),e=n=>Ee(n,0,.45,2.4,2.95);return Zn("hello",3,{"armR.quaternion":n=>[1.5*t(n),0,.85*t(n)+.4*t(n)*Math.sin(Math.max(0,n-.5)*12)],"head.quaternion":n=>[.2*e(n),-.85*e(n),.14*e(n)*Math.sin(Math.max(0,n-.3)*4.5)],"spine.quaternion":n=>[0,-.25*e(n),.05*t(n)],"spine.scale":n=>[0,.02*t(n),0]})}},write:{D:3.2,cues:[[.6,"scratch"]],clip:()=>{const t=n=>Ee(n,.1,.65,2.5,3.1),e=n=>Ee(n,.6,.75,2.3,2.5);return Zn("write",3.2,{...zs(t),"root.quaternion":n=>[-.28*t(n),-.35*t(n),0],"spine.quaternion":n=>[-.25*t(n),0,0],"head.quaternion":n=>[-.2*t(n),0,.05*Math.sin(n*7)*e(n)],"armR.quaternion":n=>[-.55*t(n)+.12*Math.sin(n*15)*e(n),0,-.2*t(n)+.25*Math.sin(n*9.5)*e(n)]})}},tteok:{D:7.6,eyes:i=>Ee(i,4.6,4.8,6.4,6.7),show:{skewer:[.25,7]},cues:[[1,"sizzle"],[2.4,"sizzle"],[4.1,"ahh"],[4.7,"nyam"]],clip:()=>{const t=r=>Ee(r,0,.5,6.9,7.5),e=r=>Ee(r,.3,1,3.3,4),n=r=>Ee(r,3.5,4.3,6.6,7.2),s=r=>Math.sin(r*5)*e(r);return Zn("tteok",7.6,{...zs(t),"armR.quaternion":r=>[.55*e(r)+.95*n(r),.15*s(r),-.9*e(r)-.45*n(r)],"armL.quaternion":r=>[-.25*t(r),0,0],"head.quaternion":r=>[.1*e(r)+.3*n(r)+.06*Math.sin(r*9)*Ee(r,4.7,4.9,6.2,6.6),-.35*e(r),.06*e(r)],"spine.quaternion":r=>[.05*e(r),-.18*e(r),0],"spine.scale":r=>[.02*_i(r,4.7,.2),-.03*_i(r,4.7,.2),.02*_i(r,4.7,.2)]})}},startle:{D:2.2,cues:[],clip:()=>{const i=e=>e<.12?jf(e/.12):Math.exp(-(e-.12)*3.2)*Math.cos((e-.12)*11)*(1-$n(e,1.6,2.2)),t=e=>$n(e,0,.1)*(1-$n(e,.9,1.9));return Zn("startle",2.2,{"root.position":e=>[0,.045*Math.max(0,i(e)),0],"spine.scale":e=>[-.02*t(e),.045*Math.max(0,i(e)),0],"head.quaternion":e=>[.16*t(e),0,.08*Math.sin(e*9)*(1-$n(e,.4,1.4))*t(e)],"eyeL.scale":e=>[.3*t(e),.45*t(e),0],"eyeR.scale":e=>[.3*t(e),.45*t(e),0]})}}};function vy(i,{onCue:t}={}){const e=new ty(i),n={};for(const[l,u]of Object.entries(nc)){const h=e.clipAction(u.clip());h.blendMode=bl,u.loop||(h.setLoop(df,1),h.clampWhenFinished=!1),n[l]=h}n.read.play();let s=null,r=0,o=0,a=1;const c={eyes:0,show:{}};return{mixer:e,actions:n,state:c,play(l){const u=nc[l];if(!u||u.loop)return!1;s&&s!==l&&n[s].fadeOut(.35);const h=n[l];return h.reset(),h.setEffectiveWeight(1),h.fadeIn(s&&s!==l?.3:.12),h.play(),s=l,r=0,o=0,!0},get current(){return s},get time(){return r},isPlaying:l=>s===l,update(l){if(s){const u=nc[s];r+=l;const h=u.cues||[];for(;o<h.length&&h[o][0]<=r;)t==null||t(h[o][1],s),o++;c.eyes=u.eyes?u.eyes(r):0,c.sleepy=!!u.sleepy,c.show={};for(const[f,[d,g]]of Object.entries(u.show||{}))c.show[f]=r>=d&&r<=g;r>=u.D&&(s=null,c.eyes=0,c.show={},c.sleepy=!1)}a+=((s?.35:1)-a)*Math.min(1,l*3),n.read.setEffectiveWeight(a),e.update(l)}}}const Qf="#8a6250",Me=(i,t,e={},n=.006)=>{const s=new ut(i,ae(t,{grain:14,grainAmt:.16,rim:.25,...e}));return s.castShadow=!0,n&&hn(s,e.line||Qf,n,16),s};let Nh=11;const ln=()=>(Nh=Nh*16807%2147483647)/2147483647;function Fh(i="#ee8f78",t="#fbeeda"){const e=new Zt;e.name="parasol";const n=Me(new Se(.022,.026,2.35,10),"#e9dcc6",{grain:20});n.position.y=1.17,e.add(n);const s=new Zt;s.position.y=2.2,e.add(s);const r=10,o=1.32,a=.46;for(let l=0;l<r;l++){const u=new ut(new ms(o,a,5,1,!0,l/r*Math.PI*2,Math.PI*2/r),ae(l%2?t:i,{grain:6,grainAmt:.14,side:Ge,tint:"#a08ac8",rim:.2}));u.castShadow=!0,s.add(u);const h=Me(new ke(.035,8,6),l%2?i:t,{},0),f=(l+.5)/r*Math.PI*2;h.position.set(Math.sin(f)*o*.99,-a/2-.02,Math.cos(f)*o*.99),h.userData.tip=!0,s.add(h)}const c=Me(new ke(.05,10,8),"#c99662");return c.position.y=a/2+.03,s.add(c),e.userData.top=s,e.rotation.z=.1,e.rotation.x=.06,e}function _y(){const i=new Zt;i.name="table";const t={grain:9,grainAmt:.2,tint:"#8a6a9c"},e=Me(new Se(.3,.3,.035,24),"#d2a06c",t);e.position.y=.44,i.add(e);for(let h=0;h<3;h++){const f=h/3*Math.PI*2+.4,d=Me(new Se(.018,.022,.46,8),"#c08d5c",t,.004);d.position.set(Math.cos(f)*.2,.22,Math.sin(f)*.2),d.rotation.set(Math.sin(f)*.16,0,-Math.cos(f)*.16),i.add(d)}const n=new Zt;n.position.set(-.1,.46,.06);const s=Me(new Se(.058,.05,.11,20),"#fbf3e6",{grain:30});s.position.y=.055,n.add(s);const r=new ut(new Se(.0595,.056,.03,20,1,!0),ae("#7fb6c9",{grain:20}));r.position.y=.05,n.add(r);const o=Me(new Hn(.032,.01,8,14,Math.PI),"#fbf3e6",{},.004);o.position.set(.058,.055,0),o.rotation.z=-Math.PI/2,n.add(o);const a=new ut(new Ln(.052,18),new Xe({color:"#b97a4e"}));a.rotation.x=-Math.PI/2,a.position.y=.105,n.add(a);const c=[],l=new Xe({color:"#fff6ea",transparent:!0,opacity:.35,depthWrite:!1});for(let h=0;h<4;h++){const f=new ut(new ke(.022,8,6),l.clone());f.userData.ph=h/4,n.add(f),c.push(f)}return i.add(n),["#e58f7a","#7fb0bf","#f0cf86"].forEach((h,f)=>{const d=Me(new yn(.2,.034,.145),h,{grain:22},.004);d.position.set(.09,.475+f*.036,-.06),d.rotation.y=.25-f*.22,i.add(d);const g=new ut(new yn(.19,.024,.14),ae("#fbf3e0",{grain:30}));g.position.copy(d.position),g.position.x+=.006,g.rotation.y=d.rotation.y,i.add(g)}),i.userData.update=h=>c.forEach(f=>{const d=(h*.22+f.userData.ph)%1;f.position.set(Math.sin(d*6+f.userData.ph*9)*.02,.12+d*.26,0),f.scale.setScalar(.6+d*1.6),f.material.opacity=.36*Math.sin(Math.PI*d)}),i}function xy(){const i=new Zt;i.name="lantern";const t="#6e5a58",e=Me(new Se(.07,.08,.03,14),t,{},.004);e.position.y=.015,i.add(e);const n=Me(new ms(.085,.07,14),t,{},.004);n.position.y=.245,i.add(n);for(let l=0;l<4;l++){const u=l/4*Math.PI*2+.78,h=new ut(new Se(.006,.006,.19,6),ae(t));h.position.set(Math.cos(u)*.062,.12,Math.sin(u)*.062),i.add(h)}const s=new ut(new ke(.045,12,10),new Xe({color:"#ffd98a"}));s.position.y=.12,i.add(s);const r=new ut(new ke(.16,14,10),new Xe({color:"#ffc36a",transparent:!0,opacity:.2,depthWrite:!1,blending:Kn}));r.position.y=.12,i.add(r);const o=new ut(new Hn(.035,.006,6,14),ae(t));o.position.y=.3,i.add(o);const a=new kx("#ffb866",.3,2.2,2);a.position.y=.14,i.add(a);let c=1;return i.userData.setOn=l=>{c=l,s.material.color.set("#7a6658").lerp(new Yt("#ffd98a"),l)},i.userData.glowAt=s,i.userData.update=l=>{const u=.85+.15*Math.sin(l*7.3)*Math.sin(l*2.9+1);a.intensity=1*u*c,r.material.opacity=(.16+.07*u)*c,r.scale.setScalar(.95+.1*u)},i}function ic(i=!1){const t=new Zt;t.name="mat";const e=new Ze(1.5,.95,12,8),n=e.attributes.position;for(let c=0;c<n.count;c++)n.setZ(c,.012*Math.sin(n.getX(c)*7)*Math.cos(n.getY(c)*6)+.006*ln());e.computeVertexNormals();const s=Yf();s.repeat.set(3,2);const r=new ut(e,ae("#ffffff",{map:s,grain:5,tint:"#a08ac8"}));if(r.rotation.x=-Math.PI/2,r.position.y=.012,r.receiveShadow=!0,t.add(r),i)return t;const o=Kf.strawHat.build();o.scale.setScalar(1.25),o.position.set(-.38,.1,-.1),o.rotation.set(.06,.6,.05),t.add(o);for(const c of[-1,1]){const l=Me(new bi(.045,.13,4,10),"#ee8f78",{grain:24},.004);l.rotation.set(Math.PI/2,0,.25*c+.3),l.scale.z=.3,l.position.set(.42+c*.07,.03,.22+c*.02),t.add(l);const u=new ut(new Hn(.04,.008,6,12,Math.PI),ae("#fbf3e6"));u.position.copy(l.position),u.position.y+=.012,u.position.z-=.03,u.rotation.y=.25*c+.3,t.add(u)}const a=new Zt;a.position.set(.1,.03,-.15),a.rotation.y=-.4;for(const c of[-1,1]){const l=Me(new yn(.14,.012,.2),"#7fb0bf",{grain:22},.004);l.position.set(c*.068,.025,0),l.rotation.z=c*.38,a.add(l)}return t.add(a),t}function sc(){const i=new Zt;i.name="castle";const t={grain:40,grainAmt:.3,tint:"#b98a8a",rim:.15},e="#efc58d",n=Me(new Se(.3,.36,.16,20),e,t,.005);n.position.y=.08,i.add(n);const s=[],r=(_,P,T,E)=>{const C=[],x=Me(new Se(T*.9,T,E,14),e,t,.005);x.position.set(_,E/2,P),i.add(x);const y=Me(new ms(T*1.05,T*1.3,14),"#f3d09c",t,.005);y.position.set(_,E+T*.62,P),i.add(y),C.push(y);for(let A=0;A<6;A++){const F=A/6*Math.PI*2,U=new ut(new yn(T*.3,T*.3,T*.3),ae(e,t));U.position.set(_+Math.cos(F)*T*.82,E+T*.08,P+Math.sin(F)*T*.82),U.castShadow=!0,i.add(U),C.push(U)}s.push(C)};r(0,0,.13,.42),r(-.27,.12,.085,.27),r(.27,.1,.085,.25),r(.02,.3,.07,.2);const o=new ut(new Ln(.045,12,0,Math.PI),new Xe({color:"#b98c62"}));o.position.set(0,.03,.372),i.add(o);const a=Me(new Se(.006,.006,.22,6),"#c99662",{},0);a.position.set(0,.42+.17+.11,0),i.add(a);const c=new Ze(.13,.08,6,1);c.translate(.065,0,0);const l=new ut(c,ae("#ee8f78",{side:Ge,grain:20}));l.position.set(0,.42+.17+.17,0),l.castShadow=!0,i.add(l);const u=Me(new Se(.105,.08,.16,18,1,!0),"#74b9c4",{grain:22,side:Ge});u.position.set(.55,.08,.28),i.add(u);const h=new ut(new Ln(.098,16),ae(e,t));h.rotation.x=-Math.PI/2,h.position.set(.55,.14,.28),i.add(h);const f=new ut(new Hn(.105,.007,6,18,Math.PI),ae("#fbf3e6"));f.position.set(.55,.16,.28),f.rotation.x=-.5,i.add(f);const d=new Zt;d.position.set(.36,.02,.52),d.rotation.set(0,.9,0);const g=Me(new Se(.012,.012,.22,8),"#f2c35f",{},.004);g.rotation.z=Math.PI/2,d.add(g);const v=Me(new yn(.1,.012,.075),"#f2c35f",{},.004);v.position.x=.15,d.add(v),i.add(d);const p=new Zt;i.add(p);const m=[...s[0],a,l].map(_=>[_,_.position.y]);i.userData.setLevel=_=>{for(_=Math.max(0,Math.min(6,_|0));p.children.length;)p.remove(p.children[0]);for(let P=0;P<_;P++){const T=.12-P*.008,E=Me(new Se(T*.92,T,.1,14),P%2?"#f3d09c":e,t,.005);E.position.set(0,.42+.05+P*.1,0),p.add(E)}for(const[P,T]of m)P.position.y=T+_*.1};const S=c.attributes.position,M=Float32Array.from(S.array);return i.userData.update=_=>{for(let P=0;P<S.count;P++){const T=M[P*3];S.setZ(P,Math.sin(T*40-_*5)*.012*(T/.13))}S.needsUpdate=!0},i}function yy(){const i=document.createElement("canvas");i.width=256,i.height=64;const t=i.getContext("2d");["#ee8f78","#fbf3e6","#74b9c4","#fbf3e6","#f2c35f","#fbf3e6"].forEach((s,r)=>{t.fillStyle=s,t.fillRect(r*256/6,0,256/6+1,64)});const e=new jn(i);e.colorSpace=Ne;const n=new ut(new ke(.2,28,18),ae("#ffffff",{map:e,grain:8,rim:.3,form:1}));return n.castShadow=!0,hn(n,Qf,.006,12),n.rotation.set(.5,.4,.3),n.name="ball",n}function My(){const i=new Zt;return i.name="rocks",[[0,0,.32,.62],[.42,.12,.2,.6],[-.36,.2,.17,.55],[.15,.36,.12,.5],[-.62,-.05,.1,.6]].forEach(([t,e,n,s],r)=>{const o=new ia(n,1),a=o.attributes.position;for(let l=0;l<a.count;l++){const u=1+.16*Math.sin(a.getX(l)*23+r)*Math.cos(a.getZ(l)*19+a.getY(l)*13);a.setXYZ(l,a.getX(l)*u,a.getY(l)*u,a.getZ(l)*u)}o.computeVertexNormals();const c=Me(o,r%2?"#a99aa6":"#b9a79f",{grain:16,grainAmt:.3,tint:"#7d6f9c",rim:.35,form:1},.008);c.scale.y=s,c.position.set(t,n*s*.55,e),c.rotation.y=r*1.3,i.add(c)}),i}function Oh(i="#f08f6f"){const t=new er,e=5;for(let o=0;o<e*2;o++){const a=o/(e*2)*Math.PI*2,c=o%2?.045:.13,l=Math.cos(a)*c,u=Math.sin(a)*c;o===0?t.moveTo(l,u):t.lineTo(l,u)}t.closePath();const n=new Fl(t,{depth:.025,bevelEnabled:!0,bevelThickness:.015,bevelSize:.018,bevelSegments:3,curveSegments:4}),s=Me(n,i,{grain:50,grainAmt:.3,rim:.4},.005);s.rotation.x=-Math.PI/2,s.name="starfish";const r=new Zt;return r.add(s),r}function Co(i="#f2a9a0"){const t=new Zt;t.name="shell";const e=new ke(.15,36,14,0,Math.PI*2,0,Math.PI/2),n=e.attributes.position;for(let r=0;r<n.count;r++){const o=n.getX(r),a=n.getZ(r),c=Math.hypot(o,a)||1,l=Math.atan2(a,o),u=1+.11*Math.cos(l*11)*Math.min(1,c/.1);n.setX(r,o*u),n.setZ(r,a*u)}e.computeVertexNormals();const s=Me(e,i,{grain:28,grainAmt:.25,tint:"#b07ab0",rim:.35,line:"#a4645a"});return s.scale.set(1,.55,.9),t.add(s),t.rotation.set(.12,.5,-.1),t}function rc(i="#f6dcc4"){const t=[];for(let s=0;s<=14;s++){const r=s/14;t.push(new ot(.075*Math.sin(Math.PI*Math.pow(r,.75))*(1+.12*Math.sin(r*30)),r*.24))}const e=Me(new Yi(t,20),i,{grain:30,grainAmt:.25,tint:"#b07ab0",rim:.4,line:"#a4645a"},.005);e.rotation.set(Math.PI/2-.15,0,.4),e.position.y=.06;const n=new Zt;return n.add(e),n.name="conch",n}function Bh(i=16,t=.7){const e=new Zt;e.name="grass";const n=[],s=["#9db77a","#b7c486","#86a76f","#c9cf93"];for(let r=0;r<i;r++){const o=t*(.55+ln()*.6),a=new Ze(.035,o,1,5);a.translate(0,o/2,0);const c=a.attributes.position;for(let d=0;d<c.count;d++){const g=c.getY(d)/o;c.setX(d,c.getX(d)*(1-g*.92)),c.setZ(d,g*g*.22*o)}a.computeVertexNormals();const l=new ut(a,ae(s[r%4],{grain:20,grainAmt:.2,side:Ge,rim:.45,tint:"#6f8a9c"}));l.castShadow=!0;const u=new Zt,h=ln()*Math.PI*2,f=ln()*.16;u.position.set(Math.cos(h)*f,0,Math.sin(h)*f),u.rotation.y=ln()*Math.PI*2,u.rotation.x=(ln()-.3)*.5,u.add(l),e.add(u),n.push([u,u.rotation.x,ln()*6])}for(let r=0;r<3;r++){const o=new ut(new ke(.028,8,6),ae(r%2?"#f6b3c2":"#fbe9a6",{rim:.4}));o.position.set((ln()-.5)*.3,t*(.45+ln()*.3),(ln()-.5)*.3),e.add(o)}return e.userData.update=r=>n.forEach(([o,a,c])=>{o.rotation.x=a+Math.sin(r*1.3+c)*.07+Math.sin(r*.37+c*2)*.05}),e}function Sy(i=.045,t="#b3a092"){const e=Me(new ke(i,12,8),t,{grain:30,grainAmt:.2},0);return e.scale.set(1.2,.55,.9),e.position.y=i*.2,e}function by(){const i=new Zt;i.name="campfire";for(let u=0;u<9;u++){const h=u/9*Math.PI*2,f=Me(new Nl(.06+ln()*.02,0),u%2?"#9c8d86":"#b3a39a",{grain:30},.004);f.scale.y=.65,f.position.set(Math.cos(h)*.24,.03,Math.sin(h)*.24),f.rotation.set(ln(),ln()*3,ln()),i.add(f)}const t=new ut(new Ln(.2,20),new Xe({color:"#5b4a44"}));t.rotation.x=-Math.PI/2,t.position.y=.006,i.add(t);for(let u=0;u<4;u++){const h=Me(new Se(.03,.035,.36,8),u%2?"#8a5a3c":"#9b6a48",{grain:26},.004);h.rotation.set(Math.PI/2-.35,u/4*Math.PI*2+.3,0),h.position.y=.07,i.add(h)}const e=(u,h)=>new Xe({color:u,transparent:!0,opacity:h,depthWrite:!1,blending:Kn}),n=[["#ff7a2e",.85,.13,.34],["#ffb347",.8,.09,.27],["#fff1b0",.9,.05,.17]].map(([u,h,f,d],g)=>{const v=new ms(f,d,10,4,!0),p=v.attributes.position;for(let S=0;S<p.count;S++){const M=p.getY(S);p.setX(S,p.getX(S)*(1+.25*Math.sin(M*18+g)))}const m=new ut(v,e(u,h));return m.position.y=.08+d/2,m.userData.h=d,i.add(m),m}),s=Array.from({length:14},()=>({t:ln()*2,x:0,z:0})),r=new Ve;r.setAttribute("position",new on(new Float32Array(42),3)),r.setAttribute("color",new on(new Float32Array(42),3));const o=new Il(r,new Pl({size:.024,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Kn}));o.frustumCulled=!1,i.add(o);const a=new Yt("#ffcf6a"),c=new qe;c.position.y=.2,i.add(c);let l=0;return i.userData.on=0,i.userData.setOn=u=>{l=u,i.userData.on=u},i.userData.glowAt=c,i.userData.update=(u,h)=>{if(n.forEach((f,d)=>{f.visible=l>.02,f.scale.set(l*(.9+.12*Math.sin(u*(11+d*3)+d)),l*(.85+.25*Math.sin(u*(7+d*2)+d*2)),l*(.9+.1*Math.cos(u*9+d))),f.rotation.y=u*(.8+d*.5),f.position.y=.08+f.userData.h/2*f.scale.y}),o.visible=l>.3,o.visible){const f=r.attributes.position.array,d=r.attributes.color.array;s.forEach((g,v)=>{g.t+=(h||.016)*.7,g.t>1&&(g.t=0,g.x=(ln()-.5)*.12,g.z=(ln()-.5)*.12),f[v*3]=g.x+Math.sin(g.t*8+g.x*50)*.04*g.t,f[v*3+1]=.15+g.t*.7,f[v*3+2]=g.z;const p=(1-Math.min(1,g.t))*l;d[v*3]=a.r*p,d[v*3+1]=a.g*p,d[v*3+2]=a.b*p}),r.attributes.position.needsUpdate=!0,r.attributes.color.needsUpdate=!0}},i}function wy(){const i=new Zt;i.name="bottle";const t=new ut(new bi(.05,.13,6,14),new Vf({color:"#9fd6c2",transparent:!0,opacity:.6}));t.rotation.z=Math.PI/2,t.position.y=.05,i.add(t),hn(t,"#4f7f74",.004,12);const e=new ut(new Se(.02,.03,.05,10),t.material);e.rotation.z=Math.PI/2,e.position.set(.12,.05,0),i.add(e);const n=Me(new Se(.019,.017,.035,10),"#b98a5a",{},.003);n.rotation.z=Math.PI/2,n.position.set(.155,.05,0),i.add(n);const s=Me(new Se(.025,.025,.12,10),"#fbf0d8",{},0);s.rotation.z=Math.PI/2,s.position.y=.05,i.add(s);const r=Me(new Hn(.026,.004,6,14),"#e07a5f",{},0);return r.rotation.y=Math.PI/2,r.position.y=.05,i.add(r),i.userData.update=o=>{i.rotation.z=Math.sin(o*1.6)*.06,i.position.y=(i.userData.y0||0)+Math.abs(Math.sin(o*1.6))*.01},i}const Ey="#6a4a44",zh=(i,t,e={},n=0)=>{const s=new ut(i,ae(t,{grain:16,grainAmt:.12,rim:.35,...e}));return s.castShadow=!0,n&&hn(s,e.line||Ey,n,18),s};function Ty(i=.285){const t=new Zt,e="#fbf3e6",n="#7fc8c0",s=zh(new Hn(i,.02,8,28,Math.PI),e);t.add(s);for(const r of[-1,1]){const o=zh(new Se(i*.32,i*.32,.07,20),n,{},.006);o.rotation.z=Math.PI/2,o.position.set(r*(i+.01),-.01,0),t.add(o)}return t}const Ar=[[.266,.07],[.258,.15],[.232,.23],[.18,.3],[.1,.35],[0,.37]],hs="#7c573f";function cs(i){if(i<=Ar[0][1])return Ar[0][0];for(let t=1;t<Ar.length;t++){const[e,n]=Ar[t],[s,r]=Ar[t-1];if(i<=n){const o=(i-r)/(n-r);return s+(e-s)*o}}return 0}function td(i,t,e=.03,n=18){const s=[];for(let r=0;r<=n;r++){const o=r/n,a=i+(.37-i)*o,c=Math.max(0,cs(a)+t*(1-o*o*.4));s.push(new ot(r===n?0:c,a+e*Math.pow(o,3)))}return new Yi(s,40)}function Hl(i,t=256,e=256,n=[1,1]){const s=document.createElement("canvas");s.width=t,s.height=e,i(s.getContext("2d"),t,e);const r=new jn(s);return r.colorSpace=Ne,r.wrapS=r.wrapT=Ks,r.repeat.set(...n),r.anisotropy=4,r}const Wl=i=>()=>(i=i*16807%2147483647)/2147483647;function ol(i,t,e){return Hl((n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);const o=16,a=s/o,c=Wl(3);for(let l=0;l<o;l++){n.fillStyle=t,n.fillRect(l*a,0,a*.22,r),n.fillStyle=e,n.fillRect(l*a+a*.45,0,a*.22,r);for(let u=0;u<22;u++)n.fillStyle="rgba(0,0,0,.07)",n.beginPath(),n.ellipse(l*a+a*.5,u*r/22+4,a*.32,r/44,0,0,6.3),n.fill()}for(let l=0;l<900;l++)n.fillStyle=c()<.5?"rgba(255,255,255,.08)":"rgba(0,0,0,.08)",n.fillRect(c()*s,c()*r,1.5,1.5)},256,256,[4,1])}function Ay(){const i=new Zt;i.name="beanie";const t=new ut(td(.2,.045,.05),ae("#ffffff",{map:ol("#d96a5c","rgba(110,30,30,.35)","rgba(255,200,180,.25)"),grain:10,tint:"#9a6a9a",rim:.25,side:Ge}));t.castShadow=!0,hn(t,hs,.006,16),i.add(t);const e=.195,n=.26,s=[];for(let u=0;u<=8;u++){const h=u/8,f=e+(n-e)*h;s.push(new ot(cs(f)+.058+Math.sin(h*Math.PI)*.014,f))}const r=new ut(new Yi(s,40),ae("#ffffff",{map:ol("#f3e6cf","rgba(120,90,60,.3)","rgba(255,255,255,.35)"),grain:10,tint:"#9a86c4",rim:.2,side:Ge}));r.castShadow=!0,hn(r,hs,.006,16),i.add(r);const o=new ia(.068,3),a=o.attributes.position,c=Wl(8);for(let u=0;u<a.count;u++){const h=new I().fromBufferAttribute(a,u);h.multiplyScalar(1+(c()-.5)*.18),a.setXYZ(u,h.x,h.y,h.z)}o.computeVertexNormals();const l=new ut(o,ae("#f3e6cf",{grain:40,grainAmt:.3,tint:"#9a86c4",rim:.3}));return l.position.set(0,.46,.02),l.scale.setScalar(1.25),l.castShadow=!0,hn(l,hs,.005,12),i.add(l),i.rotation.x=.06,i.scale.setScalar(1.08),i.scale.z=.98,i}function Ry(){const i=new Zt;i.name="sunhat";const t=Hl((l,u,h)=>{l.fillStyle="#ead29a",l.fillRect(0,0,u,h);const f=Wl(5);for(let d=0;d<h;d+=6)l.fillStyle=d%12?"rgba(160,110,50,.18)":"rgba(255,245,215,.35)",l.fillRect(0,d,u,3);for(let d=0;d<1200;d++)l.fillStyle=f()<.5?"rgba(130,90,40,.15)":"rgba(255,250,230,.25)",l.fillRect(f()*u,f()*h,3,1)},256,256,[6,3]),e=ae("#ffffff",{map:t,grain:10,tint:"#a08ac8",rim:.25,side:Ge}),n=new ut(td(.19,.024,.02),e);n.castShadow=!0,hn(n,hs,.006,16),i.add(n);const s=new sa(cs(.19)+.02,cs(.19)+.15,48,4),r=s.attributes.position;for(let l=0;l<r.count;l++){const u=r.getX(l),h=r.getY(l),f=Math.hypot(u,h),d=(f-cs(.19)-.02)/.13,g=Math.atan2(h,u);r.setXYZ(l,u,.19-d*d*.06+Math.sin(g*5)*.006*d,h)}s.computeVertexNormals();const o=new ut(s,e);o.castShadow=!0,hn(o,hs,.005,16),i.add(o);const a=[new ot(cs(.2)+.027,.195),new ot(cs(.24)+.027,.24)],c=new ut(new Yi(a,40),ae("#6fa8b8",{grain:20,side:Ge}));return i.add(c),i.rotation.x=.1,i.scale.z=.9,i}function Cy(i=new Date){const t=new URLSearchParams(location.search).get("season");if(t==="winter")return!0;if(t==="summer")return!1;const e=i.getMonth()+1;return e>=11||e<=2}function Py(){return Cy()?Ay():Ry()}function Iy(){const i=new Zt;i.name="scarf";const t=ol("#d96a5c","rgba(110,30,30,.35)","rgba(255,200,180,.25)"),e=Hl((c,l,u)=>{c.drawImage(t.image,0,0,l,u),c.fillStyle="rgba(246,236,220,.95)",c.fillRect(0,u*.2,l,u*.09),c.fillRect(0,u*.7,l,u*.09)},256,256,[6,1]),n=ae("#ffffff",{map:e,grain:12,tint:"#9a86c4",rim:.25,side:Ge}),s=(c,l,u,h)=>{const f=new ut(new Hn(l,u,12,40),n);return f.rotation.x=Math.PI/2+h,f.position.y=c,f.scale.set(1,1,1),f.castShadow=!0,hn(f,hs,.006,14),i.add(f),f};s(.12,.3,.05,.08),s(.185,.285,.045,-.06);const r=new yn(.11,.24,.035,2,8,1),o=r.attributes.position;for(let c=0;c<o.count;c++){const l=o.getY(c),u=(.12-l)/.24;o.setZ(c,o.getZ(c)-u*u*.05),o.setX(c,o.getX(c)*(1+u*.15))}r.computeVertexNormals();const a=new ut(r,n);a.position.set(.17,.01,-.24),a.rotation.set(.15,.55,.12),a.castShadow=!0,hn(a,hs,.005,14),i.add(a);{const c=new ut(new yn(.118,.035,.04),ae("#f3e6cf",{grain:12}));c.position.set(0,-.09,0),a.add(c)}for(let c=0;c<5;c++){const l=new ut(new Se(.006,.004,.04,5),ae("#f6ecdc"));l.position.set(-.044+c*.022,-.14,0),a.add(l)}return i.scale.z=.9,i}const li=[{id:"pen",label:"손글씨 펜",css:'"Nanum Pen Script", "Gaegu", "Segoe Script", cursive',k:1.12},{id:"gaegu",label:"또박 손글씨",css:'"Gaegu", "Nanum Pen Script", cursive',k:1}];async function Ly(){for(const i of["woff2","otf","ttf"])try{const t=new FontFace("SandCustom",`url(./fonts/custom.${i})`);return await t.load(),document.fonts.add(t),li.push({id:"custom",label:"내 서체",css:'"SandCustom", "Nanum Pen Script", cursive',k:1}),!0}catch{}return!1}const Dy=3,ed=i=>()=>(i=i*16807%2147483647)/2147483647;async function Xl(i,t){try{await document.fonts.load(`48px ${i.css}`,t||"가")}catch{}}function Xo(i,t,e="#000",n=768,s=256){const r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d"),a=String(i).split(`
`).slice(0,2).map(u=>u.slice(0,14));if(!a.join(""))return r;const c=ed(a.join("|").length*131+17),l=Math.min(s/a.length*.82,n*.92/Math.max(...a.map(u=>u.length),3)/.92)*t.k;return o.textBaseline="middle",o.textAlign="center",o.fillStyle=e,o.strokeStyle=e,o.lineJoin="round",o.lineWidth=l*.012,o.font=`${l}px ${t.css}`,a.forEach((u,h)=>{const f=o.measureText("가").width*.86,d=[...u].reduce((p,m)=>p+(/\s/.test(m)?f*.5:/[ -~]/.test(m)?f*.62:f),0);let g=n/2-d/2;const v=s/a.length*(h+.5);for(const p of u){const m=/\s/.test(p)?f*.5:/[ -~]/.test(p)?f*.62:f;if(!/\s/.test(p)){o.save(),o.translate(g+m/2,v+(c()-.5)*l*.14),o.rotate((c()-.5)*.22-.03);const S=.93+c()*.14;o.scale(S,S),o.fillText(p,0,0),o.strokeText(p,0,0),o.restore()}g+=m}}),r}function kh(i){var e,n;if(i.length<3)return i;const t=[i[0]];for(let s=0;s<i.length-1;s++){const r=i[s],o=i[s+1],a=(e=r[2])!=null?e:1,c=(n=o[2])!=null?n:1;t.push([r[0]*.75+o[0]*.25,r[1]*.75+o[1]*.25,a*.75+c*.25],[r[0]*.25+o[0]*.75,r[1]*.25+o[1]*.75,a*.25+c*.75])}return t.push(i[i.length-1]),t}function nd(i,t="#000",e=768,n=256){var a,c,l;const s=document.createElement("canvas");s.width=e,s.height=n;const r=s.getContext("2d");r.strokeStyle=t,r.fillStyle=t,r.lineCap="round",r.lineJoin="round";const o=n*.058;for(const u of i){if(!u.length)continue;if(u.length===1){r.beginPath(),r.arc(u[0][0]*e,u[0][1]*n,o*.5*((a=u[0][2])!=null?a:1.1),0,6.3),r.fill();continue}const h=kh(kh(u)),f=h.length;for(let d=1;d<f;d++){const g=h[d-1],v=h[d],p=Math.min(1,.45+.55*Math.min(d,f-d)/Math.min(6,f/2));r.lineWidth=o*(((c=g[2])!=null?c:1)+((l=v[2])!=null?l:1))/2*p,r.beginPath(),r.moveTo(g[0]*e,g[1]*n),r.lineTo(v[0]*e,v[1]*n),r.stroke()}}return s}const oc=new Map;function Vh(i,t){const e=i+"x"+t;if(oc.has(e))return oc.get(e);const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d"),r=ed(77),o=s.createLinearGradient(0,0,i*.3,t);o.addColorStop(0,"#f1d3a4"),o.addColorStop(.55,"#e9c48f"),o.addColorStop(1,"#ddb27c"),s.fillStyle=o,s.fillRect(0,0,i,t);for(let c=0;c<26;c++){const l=r()*i,u=r()*t,h=30+r()*110,f=s.createRadialGradient(l,u,0,l,u,h),d=r()<.5;f.addColorStop(0,d?"rgba(170,118,70,.13)":"rgba(255,240,212,.16)"),f.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=f,s.fillRect(l-h,u-h,h*2,h*2)}for(let c=0;c<15;c++){const l=(c+r()*.6)/15*t*1.25-t*.12,u=3+r()*4,h=r()*6.3,f=.012+r()*.008;for(const[d,g]of[[0,"rgba(160,108,62,.14)"],[2.2,"rgba(255,244,222,.22)"]]){s.beginPath();for(let v=-10;v<=i+10;v+=8){const p=l+d+Math.sin(v*f+h)*u+v*.06;v<0?s.moveTo(v,p):s.lineTo(v,p)}s.strokeStyle=g,s.lineWidth=2.4,s.stroke()}}const a=["rgba(255,247,230,.55)","rgba(140,95,60,.35)","rgba(205,140,80,.35)","rgba(90,70,60,.3)","rgba(255,255,255,.5)"];for(let c=0;c<i*t/55;c++){s.fillStyle=a[r()*a.length|0];const l=r()<.92?1+r()*1.2:1.8+r()*1.8;s.fillRect(r()*i,r()*t,l,l*(.7+r()*.6))}for(let c=0;c<7;c++)s.save(),s.translate(r()*i,r()*t),s.rotate(r()*6.3),s.fillStyle=r()<.5?"rgba(255,236,226,.8)":"rgba(240,214,190,.85)",s.beginPath(),s.ellipse(0,0,2.5+r()*3,1.5+r()*2,0,0,6.3),s.fill(),s.fillStyle="rgba(150,100,70,.35)",s.fillRect(-1,1,3,1),s.restore();return oc.set(e,n),n}const ac={};function id(i,t,e){const n=ac[i]||(ac[i]=document.createElement("canvas"));(n.width!==t||n.height!==e)&&(n.width=t,n.height=e);const s=n.getContext("2d");return s.clearRect(0,0,t,e),s.globalCompositeOperation="source-over",[n,s]}function Rr(i,t,e,n,s){const[r,o]=id(i,n,s);return o.drawImage(t,0,0,n,s),o.globalCompositeOperation="source-in",o.fillStyle=e,o.fillRect(0,0,n,s),r}function sd(i,t,e,n){i.drawImage(Vh(t,e),0,0);const s=t/720;i.save(),i.filter=`blur(${3*s}px)`,i.globalAlpha=.7,i.drawImage(Rr("a",n,"#fff2d6",t,e),0,5*s),i.drawImage(Rr("a",n,"#fbe6c0",t,e),0,-5*s),i.restore(),i.save(),i.filter=`blur(${1.2*s}px)`,i.drawImage(Rr("a",n,"#fff0d4",t,e),0,2.5*s),i.drawImage(Rr("a",n,"#6b4029",t,e),0,-2.5*s),i.restore(),i.save(),i.filter=`blur(${.8*s}px)`,i.drawImage(Rr("a",n,"#b07f54",t,e),0,0),i.restore();const[r,o]=id("b",t,e);o.drawImage(n,0,0,t,e),o.globalCompositeOperation="source-in",o.drawImage(Vh(t,e),0,0),i.save(),i.globalAlpha=.5,i.globalCompositeOperation="multiply",i.drawImage(r,0,0),i.restore()}function Uy(i,t=1,e=1024,n=342){if(i.strokes){const a=i.strokes.reduce((h,f)=>h+Math.max(1,f.length),0);let c=Math.ceil(a*t);const l=[];for(const h of i.strokes){if(c<=0)break;l.push(h.slice(0,Math.max(1,c))),c-=Math.max(1,h.length)}return nd(l,"#000",e,n)}const s=li.find(a=>a.id===i.font)||li[0],r=Xo(i.text||"",s,"#000",e,n),o=document.createElement("canvas");o.width=e,o.height=n;{const a=o.getContext("2d");for(const[c,l]of[[0,0],[3,0],[-3,0],[0,3],[0,-3],[2,2],[-2,-2],[2,-2],[-2,2]])a.drawImage(r,c,l)}if(t<1){const a=o.getContext("2d");a.globalCompositeOperation="destination-in";const c=a.createLinearGradient(0,0,e,0),l=t*1.08*e;c.addColorStop(0,"#000"),c.addColorStop(Math.max(0,Math.min(1,(l-40)/e)),"#000"),c.addColorStop(Math.max(0,Math.min(1,l/e)),"rgba(0,0,0,0)"),a.fillStyle=c,a.fillRect(0,0,e,n)}return o}const bn=(i,t={})=>new Xe({color:i,side:Ge,...t}),Wr=i=>{const t=new Ve;return t.setAttribute("position",new on(new Float32Array(i.flat()),3)),t.computeVertexNormals(),t};function Gh(i=7,t="#b06c74",e="#fff4e4"){const n=new Zt,s=new Zt;n.add(s);const r=new er;r.moveTo(-.5,.16),r.lineTo(.55,.16),r.lineTo(.4,0),r.lineTo(-.38,0),r.closePath(),s.add(new ut(new Gr(r),bn(t)));const o=new ut(new Ze(.02,.95),bn("#8c6a66"));o.position.set(.02,.62,0),s.add(o),s.add(new ut(Wr([[.05,.22,0],[.05,1.08,0],[.5,.22,0]]),bn(e))),s.add(new ut(Wr([[-.02,.24,0],[-.02,.92,0],[-.36,.24,0]]),bn("#ffd9c2")));const a=new ut(new Ze(.9,.22),bn("#fff0e0",{transparent:!0,opacity:.28}));return a.position.y=-.1,s.add(a),s.scale.setScalar(i),n.userData.update=c=>{s.rotation.z=Math.sin(c*.9+i)*.035,s.position.y=Math.sin(c*1.1+i)*.05*i*.2},n}function Ny(){const i=new Zt,t=new er;t.moveTo(-30,0),t.bezierCurveTo(-22,9,-10,13,0,11),t.bezierCurveTo(10,15,24,8,34,0),t.closePath(),i.add(new ut(new Gr(t,16),bn("#b99ab8")));const e=new er;e.moveTo(10,0),e.bezierCurveTo(22,6,40,7,58,0),e.closePath();const n=new ut(new Gr(e,12),bn("#cfb4c6"));n.position.z=-2,i.add(n);const s=new ut(new Ze(2.6,14),bn("#fff1e6"));s.position.set(-6,18,.5),i.add(s);const r=new ut(new Ze(2.6,3),bn("#e58a7c"));r.position.set(-6,17,.6),i.add(r);const o=new ut(Wr([[-8,25,.6],[-4,25,.6],[-6,28.5,.6]]),bn("#c9706a"));i.add(o);const a=new ut(new Ln(3.2,20),bn("#fff3b8",{transparent:!0,opacity:.8,blending:Kn,depthWrite:!1}));return a.position.set(-6,24,.8),i.add(a),i.userData.update=c=>{const l=.5+.5*Math.sin(c*1.3);a.material.opacity=.25+.6*l*l,a.scale.setScalar(.7+.8*l)},i}function cc({cx:i=0,cy:t=6,cz:e=-30,rx:n=14,rz:s=6,speed:r=.22,ph:o=0,size:a=1}={}){const c=new Zt,l=bn("#fffaf2"),u=bn("#8b7a88"),h=new ut(new ke(.16,8,6),l);h.scale.set(.7,.6,2),c.add(h);const f=new ut(new ms(.035,.14,6),bn("#f0a45c"));f.rotation.x=-Math.PI/2,f.position.z=-.38,c.add(f);const d=[-1,1].map(g=>{const v=new Zt,p=new Zt;v.add(p),p.scale.x=g,p.add(new ut(Wr([[0,0,-.16],[0,0,.14],[.62,0,-.1],[0,0,.14],[.62,0,.06],[.62,0,-.1]]),l));const m=new Zt;return m.position.x=.62,p.add(m),m.add(new ut(Wr([[0,0,-.1],[0,0,.06],[.55,0,.1]]),u)),c.add(v),{piv:v,outer:m,s:g}});return c.scale.setScalar(a),c.userData.update=g=>{const v=g*r+o,p=i+Math.sin(v)*n,m=e+Math.cos(v)*s,S=Math.cos(v)*n,M=-Math.sin(v)*s;c.position.set(p,t+Math.sin(g*.5+o)*.5,m),c.rotation.set(0,Math.atan2(-S,-M),0),c.rotateZ(-.25);const _=Math.sin(g*.33+o*2)>.55?.25:1,P=Math.sin(g*5.2+o*3)*.55*_+.12;for(const T of d)T.piv.rotation.z=P*T.s,T.outer.rotation.z=P*.7-.15},c}function Hh(i="#ea7458",t=.6,e=0){const n=new Zt,s=new Zt;n.add(s);const r=ae(i,{grain:26,grainAmt:.22,rim:.4,tint:"#b0527a"}),o=new ut(new ke(.1,16,10),r);o.scale.set(1.25,.55,.9),o.position.y=.075,o.castShadow=!0,hn(o,"#9a4a48",.006,20),s.add(o);const a=[-1,1].map(_=>{const P=new Zt;P.position.set(_*.045,.11,-.06);const T=new ut(new Se(.008,.008,.06,6),r);T.position.y=.03,P.add(T);const E=new ut(new ke(.02,8,6),new Xe({color:"#3a2a34"}));E.position.y=.065,P.add(E);const C=new ut(new ke(.007,6,4),new Xe({color:"#ffffff"}));return C.position.set(.006,.073,-.014),P.add(C),s.add(P),P}),c=[-1,1].map(_=>{const P=new Zt;P.position.set(_*.11,.07,-.05);const T=new ut(new bi(.014,.06,3,6),r);T.rotation.z=_*-1.1,T.position.set(_*.03,.015,0),P.add(T);const E=new ut(new ke(.036,10,8),r);return E.scale.set(1.25,.8,.7),E.position.set(_*.075,.04,-.01),E.castShadow=!0,hn(E,"#9a4a48",.005,20),P.add(E),s.add(P),{p:P,s:_}}),l=[];for(const _ of[-1,1])for(let P=0;P<3;P++){const T=new Zt;T.position.set(_*.1,.06,-.02+P*.04);const E=new ut(new bi(.008,.09,3,5),r);E.rotation.z=_*.95,E.position.set(_*.045,-.025,0),T.add(E),s.add(T),l.push({p:T,s:_,i:P})}let u=0,h=0,f=0,d=0,g=1+e,v=0,p=0,m=Math.random,S=0;const M=()=>{const _=m()*Math.PI*2,P=t*Math.sqrt(m());f=Math.cos(_)*P,d=Math.sin(_)*P*.7};return n.userData.poke=()=>{v=1,S=.35,g=Math.max(g,.6)},n.userData.worldPos=_=>(_.set(u,.08,h),s.parent.localToWorld(_)),n.userData.update=(_,P)=>{const T=Math.min(P,.1);if(S=Math.max(0,S-T),g>0)g-=T,g<=0&&M();else{const x=f-u,y=d-h,A=Math.hypot(x,y);if(A<.02)g=.8+2.6*m(),m()<.5&&(v=1);else{const F=.32*T;u+=x/A*Math.min(F,A),h+=y/A*Math.min(F,A);let U=Math.atan2(y,-x)*0+Math.atan2(-y,x);Math.abs(Math.atan2(Math.sin(U-p),Math.cos(U-p)))>Math.PI/2&&(U+=Math.PI),p+=Math.atan2(Math.sin(U-p),Math.cos(U-p))*Math.min(1,T*5)}}const E=g<=0?1:0;s.position.set(u,E*Math.abs(Math.sin(_*14))*.006+Math.sin(Math.PI*Math.min(1,S/.35))*.05,h),s.rotation.set(0,p,E*Math.sin(_*14)*.05);for(const x of l)x.p.rotation.z=E*Math.sin(_*16+x.i*2.1+(x.s>0?0:1.5))*.35;v=Math.max(0,v-T*.45);const C=Math.sin(Math.PI*Math.min(1,v*1.4))*.9;for(const x of c)x.p.rotation.z=x.s*(C*.9+Math.sin(_*2+x.s)*.06),x.p.position.y=.07+C*.03;for(const x of a)x.rotation.x=Math.sin(_*1.7+e)*.12+S*1.2},n}function Fy(i=46){const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d"),n=e.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,240,200,0.5)"),n.addColorStop(1,"rgba(255,230,180,0)"),e.fillStyle=n,e.fillRect(0,0,32,32);const s=new Float32Array(i*3),r=[];for(let c=0;c<i;c++)r.push([Math.random()*7-3.5,.25+Math.random()*2.3,-3.2+Math.random()*5.6,Math.random()*6.28,.4+Math.random()]);const o=new Ve;o.setAttribute("position",new on(s,3));const a=new Il(o,new Pl({map:new jn(t),size:.07,transparent:!0,opacity:.6,depthWrite:!1,blending:Kn,color:"#ffe6b0",sizeAttenuation:!0}));return a.frustumCulled=!1,a.userData.update=c=>{for(let l=0;l<i;l++){const u=r[l];s[l*3]=u[0]+Math.sin(c*.21*u[4]+u[3])*.5+c*.05*u[4]%1*.6,s[l*3+1]=u[1]+Math.sin(c*.33*u[4]+u[3]*2)*.22,s[l*3+2]=u[2]+Math.cos(c*.17*u[4]+u[3])*.4}o.attributes.position.needsUpdate=!0,a.material.opacity=.5+.12*Math.sin(c*.8)},a}const qo={low:{label:"낮음",pixelRatio:1,shadow:1024,fps:30,map:512,msaa:0,finish:!1},mid:{label:"보통",pixelRatio:1.5,shadow:1024,fps:30,map:2048,msaa:0,finish:!0},high:{label:"높음",pixelRatio:2,shadow:2048,fps:60,map:2048,msaa:4,finish:!0}};function Oy(){const i=new URLSearchParams(location.search).get("quality");if(qo[i])return i;try{const e=sessionStorage.getItem("s5q");if(qo[e])return e}catch{}return(matchMedia==null?void 0:matchMedia("(pointer: coarse)").matches)||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")?"mid":"high"}const By=`
uniform sampler2D tScene; uniform vec2 uRes, uSun; uniform float uDpr, uPaper, uDof, uFocus, uDusk, uHor, uSkyK, uNight, uSink, uTime, uSunR; uniform vec3 uLamp0, uLamp1, uLamp2; uniform vec2 uSunD;
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
${qr}
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
  // S10 해가 바다 뒤로: 그림 속 해를 위에서부터 하늘빛으로 덮어 점점 내려가 사라지는 것처럼
  if (uSink > 0.001) {
    vec2 dS = (uv - uSunD) * vec2(uRes.x / uRes.y, 1.0); float dl = length(dS);
    float disc = 1.0 - smoothstep(uSunR * 1.05, uSunR * 1.9, dl);
    float line = uSunD.y + uSunR * 1.3 - uSink * uSunR * 2.6;           // 이 높이보다 위쪽은 이미 진 부분
    float gone = disc * smoothstep(line - 0.003, line + 0.003, uv.y) * step(uHor + 0.002, uv.y);
    vec3 skyL = texture2D(tScene, uvw + vec2(uSunR * 2.6 * uRes.y / uRes.x, 0.0)).rgb, skyR = texture2D(tScene, uvw - vec2(uSunR * 2.6 * uRes.y / uRes.x, 0.0)).rgb;
    c = mix(c, (skyL + skyR) * 0.5, gone);
    float bandSea = (1.0 - step(uHor, uv.y)) * exp(-abs(uv.x - uSunD.x) * 9.0);    // 바다에 비친 해길도 함께 흐려짐
    c = mix(c, c * 0.78, bandSea * uSink);
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
  // S9 공기 원근: 멀어질수록(화면 위쪽, 수평선 쪽) 채도를 조금씩 낮추고 하늘빛으로 살짝 옅게 — 부드러운 파스텔 느낌
  { float farK = smoothstep(uFocus + 0.04, uFocus + 0.42, uv.y); float lm = dot(o.rgb, vec3(0.3, 0.59, 0.11));
    o.rgb = mix(o.rgb, mix(vec3(lm), o.rgb, 0.62) * 0.96 + vec3(0.05, 0.045, 0.06), farK * 0.55); }
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
  // S10 밤바다: 푸르고 어둡게. 랜턴·파라솔 아래만 따뜻하게 밝음. 하늘엔 별이 하나둘, 달 하나
  if (uNight > 0.001) {
    vec3 day = o.rgb; float lmN = dot(o.rgb, vec3(0.3, 0.59, 0.11));
    vec3 nightC = lmN * vec3(0.30, 0.37, 0.62) + o.rgb * 0.10 + vec3(0.015, 0.02, 0.05);
    o.rgb = mix(o.rgb, nightC, uNight * 0.92);
    vec2 asp = vec2(uRes.x / uRes.y, 1.0);
    float p2 = uLamp2.z > 0.001 ? exp(-pow(length((uv - uLamp2.xy) * asp) / uLamp2.z, 2.0)) : 0.0;
    float p0 = exp(-pow(length((uv - uLamp0.xy) * asp) / max(uLamp0.z, 1e-3), 2.0)), p1 = exp(-pow(length((uv - uLamp1.xy) * asp) / max(uLamp1.z, 1e-3), 2.0));
    o.rgb = mix(o.rgb, day * vec3(1.05, 0.78, 0.52), clamp(p0 * 0.5 + p1 * 0.34 + p2 * 0.66, 0.0, 1.0) * uNight);
    /* S12: 밤에는 불빛(랜턴·모닥불·물범 둘레)에서 먼 바다와 하늘을 더 어둡게 */
    float keep = clamp(p0 * 1.1 + p1 * 0.5 + p2 * 1.1 + exp(-pow(length((uv - uLamp0.xy) * asp) / max(uLamp0.z * 2.4, 1e-3), 2.0)) * 0.85, 0.0, 1.0);
    o.rgb *= 1.0 - uNight * 0.6 * (1.0 - keep);
    o.rgb = mix(o.rgb, o.rgb * vec3(0.82, 0.86, 1.08), uNight * (1.0 - keep) * 0.6);
    float skyN = step(uHor + 0.006, uv.y);
    vec2 cellP = px / 22.0, cell = floor(cellP), f = fract(cellP);
    float hs = h21(cell), on = step(0.66, h21(cell + 9.1));
    vec2 sp = vec2(h21(cell + 1.3), h21(cell + 7.7)) * 0.8 + 0.1;
    float d = length(f - sp) * 22.0, sz = 0.7 + 1.5 * h21(cell + 3.3);
    float appear = smoothstep(hs, hs + 0.15, uNight * 1.15);
    float tw = 0.6 + 0.4 * sin(uTime * (1.2 + 2.5 * hs) + hs * 50.0);
    float star = on * appear * tw * (1.0 - smoothstep(0.0, sz, d)) * smoothstep(uHor + 0.01, uHor + 0.12, uv.y);
    o.rgb += vec3(1.0, 0.96, 0.86) * star * skyN;
    vec2 mc = vec2(0.2, min(uHor + 0.3, 0.86)); float md = length((uv - mc) * asp);
    float moon = (1.0 - smoothstep(0.028, 0.031, md)) * smoothstep(0.02, 0.026, length((uv - mc - vec2(0.012, 0.006)) * asp));   // 초승달
    o.rgb += (vec3(1.0, 0.95, 0.8) * moon * 0.9 + vec3(0.5, 0.55, 0.8) * exp(-md * 14.0) * 0.12) * uNight * skyN;
  }
  float v = length((uv - 0.5) * vec2(1.0, 0.9));
  o.rgb *= mix(vec3(1.0), vec3(0.74, 0.69, 0.82), smoothstep(0.42, 0.95, v));
  gl_FragColor = vec4(o.rgb, 1.0);
}`,Fi=new I(0,0,-.8);function zy(i,t=null){var cu,lu;const e=Oy(),n=qo[e],s=new X_({canvas:i,antialias:!1,powerPreference:"default"});s.setPixelRatio(Math.min(devicePixelRatio||1,n.pixelRatio)),s.shadowMap.enabled=!0,s.shadowMap.type=jh,s.outputColorSpace=Ne,s.info.autoReset=!1;const r=s.getContext(),o=s.capabilities.isWebGL2&&(s.extensions.has("EXT_color_buffer_half_float")||s.extensions.has("EXT_color_buffer_float")),a=new Dr,c=new vn(40,1,.05,2e3);c.rotation.order="YXZ";const l=new vn(40,1,.05,2e3),u=cy(s,{mapW:n.map});a.add(u.sky,u.ground);const h=iy(Number(new URLSearchParams(location.search).get("seed"))||20261115),f=new Bx("#efd2dc","#d9b08e",.9);a.add(f);const d=new Ch("#ffd6a8",1.35);d.position.set(1.6,4,-7.8),d.target.position.set(0,0,-.3),a.add(d.target),d.castShadow=!0,d.shadow.mapSize.set(n.shadow*2,n.shadow*2),Object.assign(d.shadow.camera,{left:-10,right:10,top:7,bottom:-7,near:1,far:22}),d.shadow.bias=-8e-4,d.shadow.normalBias=.02,d.shadow.radius=5,a.add(d);const g=new Ch("#fff0dc",1.3);g.position.set(-2.4,3.6,3.2),a.add(g);const v=new ut(new Ze(24,16),new Tx({color:"#5e2f4c",opacity:.58}));v.rotation.x=-Math.PI/2,v.position.set(0,.002,1),v.receiveShadow=!0,a.add(v);const p=new I(Fi.x+.05,0,Fi.z+.1),m=-2.25,S=ic(!0);S.scale.setScalar(1.12),S.position.set(p.x+.08,0,p.z+.08),S.rotation.y=.1,a.add(S);const M=new ut(new Ze(1.3,1.1),new Xe({map:ny(),transparent:!0,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.set(p.x,.03,p.z+.05),a.add(M);const _=my();a.add(_.group);let P=null;const T=vy(_.group,{onCue:(N,V)=>P==null?void 0:P(N,V)});_.group.rotation.order="YXZ",_.group.position.set(p.x,.03,p.z),_.group.rotation.set(0,m,0);const E=Py();_.bones.head.add(E);const C=Ty(.265);C.position.set(0,.13,0),C.visible=!1,_.bones.head.add(C);const x=_.extras,y=Iy();y.visible=!1,_.bones.spine.add(y);const A={cap:!0,blanket:!1,headset:!1,glasses:!1},F=()=>{E.visible=A.cap,C.visible=A.headset,x.blanket.visible=!1,y.visible=A.blanket,x.glasses.visible=A.glasses};F();let U=2.2;const W={group:_.group,head:_.bones.head,front:-1,update(N,V){T.update(V),U-=V,U<-.13&&(U=2.4+Math.random()*3.4+(Math.random()<.2?-2.1:0));const J=T.state.eyes>.5||U<0,Mt=T.state.eyes<=.5||T.state.sleepy;for(const ct of x.lids)ct.visible=J,ct.rotation.z=Mt?Math.PI:0,ct.position.y=Mt?.178:.162;for(const ct of x.eyes)ct.visible=!J;x.mug.visible=!!T.state.show.mug,x.leaf.visible=!!T.state.show.leaf,x.skewer.visible=!!T.state.show.skewer}},Y=[W],X=0;function Z(N){return A[N]=!A[N],F(),A[N]}const z=N=>T.play(N),nt=[],ht=[],lt=(N,V,J,Mt,ct,vt=1,te=null)=>(te!==null&&(N.rotation.y=te),a.add(N),nt.push({o:N,dxL:V,syL:J,dxP:Mt,syP:ct,sP:vt,s0:N.scale.x,y0:N.position.y}),N.userData.update&&ht.push(N),N),It=Fh();It.scale.setScalar(.86),a.add(It);const kt=[];It.traverse(N=>{N.userData.tip&&kt.push(N)});const $=xy();$.position.set(p.x+.5,.03,p.z+.22),$.scale.setScalar(1.25),a.add($),ht.push($);const st=by();st.position.set(p.x+.38,.02,p.z+.95),st.scale.setScalar(.95),a.add(st),ht.push(st);let tt=0,K=0;const dt=new Dr,xt=(()=>{const N=document.createElement("canvas");N.width=N.height=64;const V=N.getContext("2d"),J=V.createRadialGradient(32,32,0,32,32,32);J.addColorStop(0,"rgba(255,240,200,1)"),J.addColorStop(.2,"rgba(255,200,120,.75)"),J.addColorStop(.5,"rgba(255,170,90,.22)"),J.addColorStop(1,"rgba(255,150,80,0)"),V.fillStyle=J,V.fillRect(0,0,64,64);const Mt=new jn(N);return Mt.colorSpace=Ne,Mt})(),Dt=N=>{const V=new Ya(new Oo({map:xt,transparent:!0,depthWrite:!1,depthTest:!1,blending:Kn,opacity:0}));return V.scale.setScalar(N),dt.add(V),V},ee=kt.map(()=>Dt(.3)),it=Dt(.75),mt=Dt(1.6),L=(N,V,J)=>{const Mt=new Ve;Mt.setAttribute("position",new on(new Float32Array(N*3),3)),Mt.setAttribute("aA",new on(new Float32Array(N),1));const ct=new Tn({uniforms:{map:{value:xt},uC:{value:new Yt(J)},uS:{value:V},uH:{value:400}},transparent:!0,depthWrite:!1,depthTest:!1,blending:Kn,vertexShader:"attribute float aA; varying float vA; uniform float uS, uH; void main(){ vA = aA; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = aA > 0.003 ? uS * projectionMatrix[1][1] * uH / -mv.z : 0.0; }",fragmentShader:`uniform sampler2D map; uniform vec3 uC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(t.rgb * uC, t.a * vA); 
#include <colorspace_fragment>
}`}),vt=new Il(Mt,ct);return vt.frustumCulled=!1,dt.add(vt),vt},Ot=L(22,.12,"#e4ff9c"),ft=L(46,.32,"#6fe6ff"),Ct=Array.from({length:22},()=>({x:-3+Math.random()*6,y:.25+Math.random()*1.1,z:p.z-.8+Math.random()*2.6,ph:Math.random()*20,sp:.3+Math.random()*.5})),_t=Array.from({length:46},(N,V)=>({i:V,ph:Math.random()*10,base:new I}));function Ht(){if(!b)return;const N=me/b.scale/2;_t.forEach((V,J)=>{const Mt=cn.focusX-N*1.1+J/(_t.length-1)*N*2.2,ct=748+26*Math.sin(J*1.7)*Math.random();V.base.copy($t(Mt,ct)).setY(.03)})}const At=new Yt("#ffc874");lt(_y(),255,812,150,828,.85);const R=lt(sc(),545,880,168,985,.72,-.3);lt(My(),-600,776,-250,760,.35),lt(Oh("#ef8466"),-470,935,-232,940,.85,.4);const w=[[-345,875,-190,870],[-330,992,-165,1e3],[250,975,160,1003],[395,890,205,885]],H=["#f4a99c","#f6e3cf","#e5c3ea","#f7c9a8"],Q=w.map(([N,V,J,Mt],ct)=>lt(ct===2?rc(H[ct]):Co(H[ct]),N,V,J,Mt,.9,.6+ct*1.7));Q.forEach((N,V)=>{N.scale.setScalar(.9),nt[nt.length-Q.length+V].s0=.9});const at=[[-560,870],[470,820],[-120,1e3],[600,960],[130,905]].map(([N,V],J)=>lt(Sy(.032+J%3*.01,J%2?"#a99486":"#bba59e"),N,V,N*.32,V+J%3*8,1,J));lt(Bh(16,.75),-735,1006,-232,1012,.7),lt(Bh(12,.6),748,1010,236,1016,.7,1.2);const et=lt(Hh("#e8694c",4,0),415,820,-150,806,.6),Ut=lt(Hh("#f2a06a",3.5,2.3),300,860,-60,850,.42);Ut.visible=!1;const yt=lt(wy(),-260,792,-120,786,1.1,.5);yt.visible=!1,yt.userData.y0=0;const Rt=(()=>{const N=document.createElement("canvas");N.width=N.height=64;const V=N.getContext("2d");V.translate(32,32);const J=V.createRadialGradient(0,0,0,0,0,30);J.addColorStop(0,"rgba(255,255,255,1)"),J.addColorStop(.25,"rgba(255,246,214,0.55)"),J.addColorStop(1,"rgba(255,230,180,0)"),V.fillStyle=J,V.fillRect(-32,-32,64,64),V.fillStyle="rgba(255,255,255,0.95)";for(const ct of[0,Math.PI/2])V.save(),V.rotate(ct),V.beginPath(),V.moveTo(-30,0),V.quadraticCurveTo(0,2.5,30,0),V.quadraticCurveTo(0,-2.5,-30,0),V.fill(),V.restore();const Mt=new jn(N);return Mt.colorSpace=Ne,Mt})(),ce=Q.map(()=>{const N=new Ya(new Oo({map:Rt,transparent:!0,depthWrite:!1,blending:Kn,opacity:0}));return N.scale.setScalar(.2),a.add(N),N}),pt=Q.map(()=>0),Pt=Gh(7.5);Pt.position.set(-22,0,-125),a.add(Pt),ht.push(Pt);const Wt=Gh(9,"#8f7aa6","#ffe9d6");Wt.position.set(30,0,-300),a.add(Wt),ht.push(Wt);const qt=Ny();qt.position.set(-58,0,-560),qt.scale.setScalar(1.35),a.add(qt),ht.push(qt);for(const N of[cc({cx:-6,cy:7,cz:-34,rx:15,rz:6,speed:.2,ph:0}),cc({cx:6,cy:8.5,cz:-44,rx:18,rz:8,speed:-.16,ph:2.2,size:1.1}),cc({cx:-2,cy:4.2,cz:-17,rx:7,rz:3,speed:.27,ph:4.1,size:.8})])a.add(N),ht.push(N);const Lt=Fy(n.finish?46:24);a.add(Lt),ht.push(Lt);const Qt=new Zt;Qt.visible=!1,a.add(Qt);const Xt=(N,V,J,Mt=0,ct=1)=>(N.position.x=V,N.position.z=J,N.rotation.y=Mt,N.scale.setScalar(ct),Qt.add(N),N.userData.update&&ht.push(N),N),be=(N,V="rgba(255,248,236,0.92)",J="#5a4034")=>{const Mt=document.createElement("canvas");Mt.width=512,Mt.height=112;const ct=Mt.getContext("2d");ct.font='600 44px "Gaegu", "Nanum Pen Script", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';const vt=Math.min(480,ct.measureText(N).width+56);ct.fillStyle=V,ct.beginPath(),ct.roundRect(256-vt/2,14,vt,84,42),ct.fill(),ct.fillStyle=J,ct.textAlign="center",ct.textBaseline="middle",ct.fillText(N,256,58,440);const te=new jn(Mt);return te.colorSpace=Ne,te},O=[],St=[{x:p.x,z:p.z,mine:!0}],j=[],rt=[["바다의 뚜껑","파도 소리 들으면서 읽으니까 문장이 더 천천히 들어온다"],["작은 것들의 신","오늘은 스무 쪽. 내일 또 올게"],["어린 왕자","길들인다는 건 시간을 쓰는 일"],["달러구트 꿈 백화점","졸리지만 한 장만 더"],["모모","시간은 삶이고 삶은 마음속에 있다"],["긴긴밤","노을이 예뻐서 책을 잠깐 덮었다"]],wt=(N,V,J,Mt=.6,ct)=>{const vt=new Ya(new Oo({map:be(N,ct),transparent:!0,depthTest:!1,depthWrite:!1}));return vt.scale.set(3.7,.81,1),vt.position.set(V,Mt,J),vt.renderOrder=50,vt.userData.text=N,vt.userData.bg=ct,Qt.add(vt),O.push(vt),vt},Et=[],jt=(N,V,J,Mt,ct=2.6)=>{const vt=new Xe({transparent:!0,depthWrite:!1,opacity:.85}),te=new ut(new Ze(ct,ct/3),vt);te.rotation.set(-Math.PI/2,0,Mt),te.position.set(V,.006,J),te.renderOrder=2,Qt.add(te);const Jt=()=>{var ne;const re=document.createElement("canvas");re.width=768,re.height=256;const Kt=re.getContext("2d");Kt.globalAlpha=.7,Kt.drawImage(Xo(N,li[0],"#fff0d8"),2,3),Kt.globalAlpha=1,Kt.drawImage(Xo(N,li[0],"#8a5644"),0,0),(ne=vt.map)==null||ne.dispose(),vt.map=new jn(re),vt.map.colorSpace=Ne,vt.needsUpdate=!0};Jt(),Et.push(Jt)},Fe=new Xe({color:"#7a4a3c",transparent:!0,opacity:.3,depthWrite:!1}),je=new Ln(.07,10),pe=(N,V,J,Mt)=>{const ct=Math.round(Math.hypot(J-N,Mt-V)/.32),vt=Math.atan2(J-N,Mt-V);for(let te=0;te<=ct;te++){const Jt=te/ct,re=te%2?1:-1,Kt=new ut(je,Fe);Kt.rotation.set(-Math.PI/2,0,vt),Kt.scale.set(.7,1.25,1),Kt.position.set(N+(J-N)*Jt+Math.cos(vt)*.09*re+Math.sin(Jt*9)*.05,.005,V+(Mt-V)*Jt-Math.sin(vt)*.09*re),Kt.renderOrder=2,Qt.add(Kt)}};[[-5.4,1.2,"#6fa8c9",.3,"소미 · 읽는 중"],[4.9,.4,"#f2c14e",-.4,"바다곰 · 읽는 중"],[-2.9,4,"#b98ad0",.8,null],[3.2,3.6,"#7cc4a0",-.2,"달빛 · 쉬는 중"],[8.2,2.6,"#ee8f78",.5,null],[-8.4,3.4,"#f0a8b8",-.6,null]].forEach(([N,V,J,Mt,ct],vt)=>{const te=Xt(Fh(J,"#fbeeda"),N,V,Mt,.86);te.rotation.z=.08*(vt%2?1:-1),Xt(ic(),N+.9,V+.6,Mt+.4,.9);const Jt=Xt(vt%2?rc():Co(H[vt%6]),N-.5,V+1,vt,1);j.push({o:Jt,who:ct?ct.split(" ")[0]:"누군가",title:rt[vt][0],text:rt[vt][1]}),St.push({x:N+.3,z:V+.4}),vt%3===0&&Xt(yy(),N+1.7,V-.3,0,.9),ct&&wt(ct,N,V-1.5,.6)}),Xt(sc(),-6.6,4.4,.5,.9),Xt(sc(),6.3,4.6,-.8,.75),Xt(ic(),5.6,-.4+2.6,-.3,.9),Xt(Co("#f7c9b6"),6.5,2.9,1,.9),Xt(rc(),5,3,2,.8),St.push({x:5.7,z:2.6}),wt("10분 전에 집에 갔어요",5.8,1.35,.6,"rgba(255,236,214,0.94)"),pe(6.2,2.9,10.5,5.6),pe(-5,1.9,-3.4,-.9),pe(3,3.2,1.6,5.8),pe(-8,4,-10.5,2),jt("오늘도 수고했어",-3.3,1.9,.12),jt("소미 다녀감",2.6,1.5,-.1,2),jt("또 올게 바다야",-6.6,2.5,.2,2.4),jt("한 장만 더",7.2,1,-.15,2),[[-1.8,2.6],[1.4,4.3],[-4.2,3.1],[6.9,3.9],[-7.3,1.5],[9.2,4.4],[.6,5.4],[-9.4,4.9]].forEach(([N,V],J)=>Xt(J%3?Co(H[J%6]):Oh(J%2?"#f6b56a":"#e88aa0"),N,V,J*1.3,.85));const an=new ut(new sa(1.25,1.36,48),new Xe({color:"#fff3c8",transparent:!0,opacity:.8,depthWrite:!1,blending:Kn}));an.rotation.x=-Math.PI/2,an.position.set(Fi.x,.012,Fi.z+.1),Qt.add(an),wt("내 자리",Fi.x,Fi.z-1.7,.6,"rgba(255,255,255,0.96)"),(lu=(cu=document.fonts)==null?void 0:cu.ready)==null||lu.then(()=>setTimeout(()=>{Et.forEach(N=>N()),O.forEach(N=>{N.material.map.dispose(),N.material.map=be(N.userData.text,N.userData.bg)})},300));let Ue="seat",Zi=null;const Ti={k:0,b:0},Rn={x:p.x,z:p.z,mine:!0};function vs(N,V=null){Ue=N,N==="focus"&&Object.assign(Rn,V||St[0]),N!=="bird"&&(k.tx=0,k.ty=0),N!=="focus"&&(we.on=!1),Zi==null||Zi(N,Rn)}const Qe={pos:new I,pitch:0,fov:40,init:!1},tn={pos:new I,pitch:0,fov:40},we={on:!1,onShell:null,onOther:null,noted:new Set,hover:-1},$i=new ai(1,1,{type:o?ir:ti,samples:n.msaa});o||($i.texture.colorSpace=Ne);const Oe={tScene:{value:$i.texture},uRes:{value:new ot},uDpr:{value:1},uPaper:{value:n.finish?1:0},uSun:{value:new ot(.7,.75)},uDof:{value:1},uFocus:{value:.35},uDusk:{value:0},uHor:{value:.6},uSkyK:{value:1},uNight:{value:0},uSink:{value:0},uTime:{value:0},uSunR:{value:.04},uLamp0:{value:new I},uLamp1:{value:new I},uSunD:{value:new ot(.65,.7)},uLamp2:{value:new I}},fr=new Dr,dr=new ut(new Ze(2,2),new Tn({uniforms:Oe,depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:By}));dr.frustumCulled=!1,fr.add(dr);const la=new Qo;let me=1,he=1,b=null,D=0;const G={pos:new I,pitch:0,fov:40,f:1,d:5},k={on:!1,x:0,y:0,tx:0,ty:0,k:0},B=new Oi(new I(0,1,0),0),gt=new Ih,Tt=new ot,Ft=new I,Nt=new I;function $t(N,V){const J=b.tx+N*b.scale,Mt=b.ty+V*b.scale;return Tt.set(J/me*2-1,-(Mt/he)*2+1),gt.setFromCamera(Tt,l),gt.ray.intersectPlane(B,Ft)?Ft.clone():new I}function Gt(N){return Nt.copy(N).project(c),[(Nt.x+1)/2*me,(1-Nt.y)/2*he]}function Bt(N){return Nt.copy(N).project(l),[((Nt.x+1)/2*me-b.tx)/b.scale,((1-Nt.y)/2*he-b.ty)/b.scale]}function fe(){me=i.clientWidth||innerWidth,he=i.clientHeight||innerHeight,s.setSize(me,he,!1);const N=s.getPixelRatio();$i.setSize(Math.round(me*N),Math.round(he*N)),Oe.uRes.value.set(Math.round(me*N),Math.round(he*N)),Oe.uDpr.value=N,b=u.layout(me,he,N);const V=b.scale,J=he/2,Mt=b.portrait?178:205,ct=.3,vt=b.horizonFrac*he;Oe.uHor.value=1-b.horizonFrac;const te=Math.min(805,b.stageBottom-.2*(b.stageBottom-b.stageTop)),Jt=b.ty+te*V,re=J-vt,Kt=(Jt-J)/re,ne=(-(Kt+1)+Math.sqrt((Kt+1)**2+4*Kt*ct*ct))/(2*Kt*ct),en=re/ne,ie=en/(Mt*V),$e=ct*ie;G.pitch=Math.atan(ne),G.f=en,G.d=ie,G.fov=nn.radToDeg(2*Math.atan(he/2/en)),G.pos.set(0,$e,ie+Fi.z-.36),l.fov=G.fov,l.aspect=me/he,l.position.copy(G.pos),l.rotation.order="YXZ",l.rotation.set(-G.pitch,0,0),l.updateProjectionMatrix(),l.updateMatrixWorld(),l.matrixWorldInverse.copy(l.matrixWorld).invert(),u.setRef(new le().multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse)),b.feetStage=te,b.camY=$e,b.camDist=ie;const fi=me/V/2,vr=b.stageBottom,ga=cn.focusX,ys=nn.clamp((fi-237)/360,0,1),Be=nn.lerp;for(const Wn of nt){const uu=$t(ga+Be(Wn.dxP,Wn.dxL,ys),Math.min(Be(Wn.syP,Wn.syL,ys),vr+4));Wn.o.position.set(uu.x,Wn.y0,uu.z),Wn.o.scale.setScalar(Wn.s0*Be(Wn.sP,1,ys)),Wn.o.userData.s0=Wn.o.scale.x}It.position.set(Be(-.5,-.92,ys),0,Fi.z-.42);const On=[b.tx+1e3*V,b.ty+232*V];Oe.uSun.value.set(On[0]/me,1-On[1]/he),Oe.uSunR.value=30*V/he,Oe.uSunD.value.set((b.tx+1e3*V)/me,1-(b.ty+338*V)/he),Re(!0),Ht==null||Ht()}let _e=0;function Re(N){const V=k.k,J=k.x*V,Mt=k.y*V,ct=(1-V)*(b.portrait?.035:.07),vt=J*.95+Math.sin(D*.21)*ct,te=(Mt<0?-Mt*1:-Mt*.45)+.25*V+(Math.sin(D*.13+1)*.5+.5)*ct,Jt=Math.atan2(vt,G.d)*.18,re=1+.08*V,Kt=me/he>1?1:0,ne=nn.radToDeg(2*Math.atan(Math.tan(nn.degToRad(G.fov)/2)/re));if(Ue==="bird"?(tn.pos.set(k.x*(Kt?4.5:6.5),Kt?13.5:15,3.4+k.y*3.2),tn.pitch=-1.32,tn.fov=Kt?52:64):Ue==="focus"?(tn.pos.set(Rn.x,Kt?4.3:5.6,Rn.z+(Kt?3.3:3.6)),tn.pitch=-.93,tn.fov=Kt?44:54):(tn.pos.set(G.pos.x+vt,G.pos.y-.1*Math.max(0,te),G.pos.z-te),tn.pitch=-G.pitch,tn.fov=ne),!Qe.init||N===!0)Qe.pos.copy(tn.pos),Qe.pitch=tn.pitch,Qe.fov=tn.fov,Qe.init=!0;else{const ie=Math.min(1,_e*3.2);Qe.pos.lerp(tn.pos,ie),Qe.pitch+=(tn.pitch-Qe.pitch)*ie,Qe.fov+=(tn.fov-Qe.fov)*ie}c.fov=Qe.fov,c.aspect=me/he,c.position.copy(Qe.pos);const en=nn.clamp((-Qe.pitch-G.pitch)/.5,0,1);c.rotation.set(Qe.pitch,Jt*(1-en),0),c.updateProjectionMatrix(),c.updateMatrixWorld(),Ti.k=en,Ti.b=nn.clamp((-Qe.pitch-1)/.3,0,1),u.setSky(-(G.f*Math.tan(Jt))/b.scale,re)}addEventListener("resize",fe),fe();let We=null,de=null;const zt=new Ih,Un=new ot;i.addEventListener("pointerup",N=>{var ct,vt,te;if(!de||Math.hypot(N.clientX-de.x,N.clientY-de.y)>8)return;const V=i.getBoundingClientRect();Un.set((N.clientX-V.left)/V.width*2-1,-((N.clientY-V.top)/V.height)*2+1),zt.setFromCamera(Un,c);const J=N.clientX-V.left,Mt=N.clientY-V.top;if(Ue==="bird"){if(!zt.ray.intersectPlane(B,Ft))return;let Jt=null,re=2.6;for(const Kt of St){const ne=Math.hypot(Ft.x-Kt.x,Ft.z-Kt.z);ne<re&&(re=ne,Jt=Kt)}Jt&&vs("focus",Jt);return}if(Ue==="seat"){const Jt=ge(J,Mt);if(Jt>=0){pt[Jt]=1,(ct=we.onShell)==null||ct.call(we,Jt);return}for(const re of[et,Ut]){if(!re.visible)continue;const[Kt,ne]=Gt(re.userData.worldPos(fn));if(Math.hypot(Kt-J,ne-Mt)<Math.max(50,Math.min(me,he)*.075)){re.userData.poke(),(vt=we.onCrab)==null||vt.call(we,Kt,ne,re===Ut);return}}if(yt.visible){fn.copy(yt.position).setY(.06);const[re,Kt]=Gt(fn);if(Math.hypot(re-J,Kt-Mt)<Math.max(58,Math.min(me,he)*.09)){(te=we.onBottle)==null||te.call(we);return}}return}if(Ue==="focus"){let Jt=null,re=56;Q.forEach((Kt,ne)=>{const[en,ie]=Gt(Kt.position),$e=Math.hypot(en-J,ie-Mt);$e<re&&(re=$e,Jt=()=>{var fi;return(fi=we.onShell)==null?void 0:fi.call(we,ne)})}),j.forEach(Kt=>{const[ne,en]=Gt(Kt.o.position),ie=Math.hypot(ne-J,en-Mt);ie<re&&(re=ie,Jt=()=>{var $e;return($e=we.onOther)==null?void 0:$e.call(we,Kt)})}),Jt==null||Jt()}});function ge(N,V){let J=-1,Mt=Math.max(40,Math.min(me,he)*.075);return Q.forEach((ct,vt)=>{const[te,Jt]=Gt(ct.position),re=Math.hypot(te-N,Jt-(V+6));re<Mt&&(Mt=re,J=vt)}),J}i.addEventListener("pointermove",N=>{if(N.pointerType!=="mouse"||Ue!=="seat"){we.hover=-1;return}const V=i.getBoundingClientRect();we.hover=ge(N.clientX-V.left,N.clientY-V.top),i.style.cursor=we.hover>=0?"pointer":""}),i.addEventListener("pointerdown",N=>{var V;de={x:N.clientX,y:N.clientY},Ue==="bird"&&(We={x:N.clientX,y:N.clientY,tx:k.tx,ty:k.ty},(V=i.setPointerCapture)==null||V.call(i,N.pointerId))}),i.addEventListener("pointermove",N=>{if(!We)return;const V=Math.min(me,he)*.9;k.tx=nn.clamp(We.tx-(N.clientX-We.x)/V*2,-1,1),k.ty=nn.clamp(We.ty+(N.clientY-We.y)/V*2,-1,1)});const Mn=()=>{We=null};i.addEventListener("pointerup",Mn),i.addEventListener("pointercancel",Mn);function Ai(N){k.on=N,N||(k.tx=0,k.ty=0)}let Le=null;const Ri=1.6;function Pe(){const N=me/b.scale/2,V=nn.clamp((N-237)/360,0,1),J=nn.lerp(300,400,V);return{cx:cn.focusX+nn.lerp(-5,-40,V),cy:nn.lerp(950,946,V),w:J,h:J/3*Ri}}const Cn=(N,V)=>Uy(N,V,768,256*Ri|0);function Ji(N,{instant:V=!1,delay:J=.7}={}){Le&&Le.drawn>0&&(Le.erasing={mask:Cn(Le.spec,1),box:Le.box,left:4});const Mt=Pe(),ct=Le==null?void 0:Le.erasing;return Le={spec:N,box:Mt,p:V?1:0,wait:V?D<1?1-D:0:J,dur:N.strokes?2:1.7,drawn:0,erasing:ct,instant:V},Le}function Sn(N){const V=Le;if(!(!V||!ua)){if(V.erasing&&V.erasing.left>0){const J=V.erasing;u.stamp(J.mask,J.box.cx,J.box.cy,J.box.w,J.box.h,.3,!0),J.left--;return}if(V.wait>0){V.wait-=N;return}V.drawn>=1||(V.p=V.instant?1:Math.min(1,V.p+N/V.dur),(V.p-V.drawn>.035||V.p>=1)&&(u.stamp(Cn(V.spec,V.p),V.box.cx,V.box.cy,V.box.w,V.box.h,1),V.drawn=V.p))}}const Nn=new ai(256,256);Nn.texture.colorSpace=Ne;const Fn=new vn(24,1,.1,30),pr=new Uint8Array(256*256*4),bd=new Yt("#cfe7ea"),Ki=new I;function wd(N){const V=Y[X],J=V.group.rotation.y,Mt=V.front,ct=Math.sin(J)*Mt,vt=Math.cos(J)*Mt,te=V===W;V.head.getWorldPosition(Ki),Fn.position.set(Ki.x+ct*2.6+vt*.2,Ki.y+(te?.22:.02),Ki.z+vt*2.6-ct*.2),Fn.lookAt(Ki.x,Ki.y+(te?.16:-.06),Ki.z);const Jt=a.children.map(ne=>ne.visible);a.children.forEach(ne=>{!ne.isLight&&ne!==Y[X].group&&(ne.visible=!1)});const re=a.background;a.background=bd,s.setRenderTarget(Nn),s.render(a,Fn),s.setRenderTarget(null),a.background=re,a.children.forEach((ne,en)=>{ne.visible=Jt[en]}),s.readRenderTargetPixels(Nn,0,0,256,256,pr);const Kt=N.createImageData(256,256);for(let ne=0;ne<256;ne++)Kt.data.set(pr.subarray((255-ne)*1024,(256-ne)*1024),ne*1024);N.putImageData(Kt,0,0)}function Ed(N="파도서재"){const V=document.createElement("canvas");V.width=512,V.height=128;const J=V.getContext("2d");J.clearRect(0,0,512,128),J.font='700 84px "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif',J.textAlign="center",J.textBaseline="middle",J.lineJoin="round",J.lineWidth=9,J.strokeStyle="rgba(0,0,0,0.55)",J.strokeText(N,256,68),J.fillStyle="#000",J.fillText(N,256,68);const Mt=me/b.scale/2,ct=Mt<420,vt=ct?Mt*.55:360,te=ct?cn.focusX-Mt+vt/2+14:cn.focusX-330,Jt=735;return u.stamp(V,te,Jt,vt,vt/4,1),{cx:te,cy:Jt,w:vt,h:vt/4}}let ua=!1,jl=14,Ql=0,_s=1,tu=1;const fn=new I;function Td(){const N=document.createElement("canvas");N.width=512,N.height=256;const V=N.getContext("2d");V.fillStyle="rgba(0,0,0,0.85)";for(let te=0;te<15;te++){const Jt=te/14,re=480-Jt*400-Math.sin(Jt*3)*30,Kt=236-Jt*190+Math.sin(Jt*5)*6,ne=te%2?1:-1;V.save(),V.translate(re+ne*5,Kt+ne*6),V.rotate(-.6-Jt*.3+ne*.25),V.beginPath(),V.ellipse(0,0,9,5,0,0,6.3),V.fill(),V.restore()}const J=me/b.scale/2,Mt=nn.clamp((J-237)/360,0,1);u.stamp(N,cn.focusX+nn.lerp(120,390,Mt),915,nn.lerp(260,520,Mt),nn.lerp(180,230,Mt),.8);const ct=document.createElement("canvas");ct.width=ct.height=128;const vt=ct.getContext("2d");vt.strokeStyle="rgba(0,0,0,0.95)",vt.lineWidth=9,vt.lineCap="round",vt.lineJoin="round",vt.beginPath(),vt.moveTo(64,108),vt.bezierCurveTo(8,66,20,18,64,44),vt.bezierCurveTo(108,18,120,66,64,108),vt.stroke(),u.stamp(ct,cn.focusX+nn.lerp(-120,-250,Mt),792,84,52,1)}const ei=Number(new URLSearchParams(location.search).get("timescale"))||1,eu=Number(new URLSearchParams(location.search).get("dusk")),nu=Number(new URLSearchParams(location.search).get("night")),Ie={start:performance.now(),minutes:10,forced:Number.isFinite(eu)&&new URLSearchParams(location.search).has("dusk")?eu:null,v:0,night:0,sink:0,nightForced:Number.isFinite(nu)&&new URLSearchParams(location.search).has("night")?nu:null};let ji=null,ha=-1,mr=0;const Ci={sun:new Yt("#ffd6a8"),sunD:new Yt("#ff9a5c"),fill:new Yt("#fff0dc"),fillD:new Yt("#e9b2b8"),sky:new Yt("#efd2dc"),skyD:new Yt("#d9a0b8"),night:new Yt("#8fa2d8")},xs=new I;function Ad(){var Kt,ne,en;const N=(performance.now()-Ie.start)/6e4,V=ie=>(ie=Math.min(1,Math.max(0,ie)),ie*ie*(3-2*ie));if(Ie.to!==void 0){const ie=(Kt=Ie.nightForced)!=null?Kt:Ie.night,$e=_e/7,fi=ie+Math.max(-$e,Math.min($e,Ie.to-ie));Ie.nightForced=fi,fi===Ie.to&&(Ie.to=void 0)}let J=(ne=Ie.nightForced)!=null?ne:V((N-11)/8),Mt=Ie.nightForced!==null?Math.min(1,Ie.nightForced*3):V((N-10)/4);const ct=J>0?1:(en=Ie.forced)!=null?en:Math.min(1,N/Ie.minutes),vt=ct*ct*(3-2*ct);Ie.v=vt,Ie.night=J,Ie.sink=Mt,Oe.uDusk.value=vt*(1-J*.6),Oe.uNight.value=J,Oe.uSink.value=Mt,Oe.uTime.value=D;const te=J;for(let ie=0;ie<kt.length;ie++)kt[ie].material.emissive.copy(At).multiplyScalar(te*.9),kt[ie].getWorldPosition(fn),ee[ie].position.copy(fn),ee[ie].material.opacity=te*(.75+.25*Math.sin(D*2.3+ie));$.userData.setOn(V((J-.15)/.3)),$.userData.glowAt.getWorldPosition(fn),it.position.copy(fn),it.material.opacity=V((J-.15)/.3)*(.85+.15*Math.sin(D*7.3));{const[ie,$e]=Gt(fn);Oe.uLamp0.value.set(ie/me,1-$e/he,.32*Math.min(1,he/me*1.6,me/he*1.15))}{fn.set(It.position.x,1.3,It.position.z);const[ie,$e]=Gt(fn);Oe.uLamp1.value.set(ie/me,1-$e/he,.42*Math.min(1,he/me*1.6,me/he*1.15))}st.visible=J>.25,J<.25&&(tt=0),K+=(tt-K)*Math.min(1,_e*1.5),st.userData.setOn(K),st.userData.glowAt.getWorldPosition(fn),mt.position.copy(fn),mt.material.opacity=K*(.55+.15*Math.sin(D*9.1)*Math.sin(D*3.7));{const[ie,$e]=Gt(fn);Oe.uLamp2.value.set(ie/me,1-$e/he,.5*Math.min(1,he/me*1.6,me/he*1.15)*K)}{const ie=Ot.geometry.attributes.position.array,$e=Ot.geometry.attributes.aA.array,fi=V((J-.5)/.4);Ct.forEach((Be,On)=>{ie[On*3]=Be.x+Math.sin(D*Be.sp+Be.ph)*.5,ie[On*3+1]=Be.y+Math.sin(D*Be.sp*1.7+Be.ph*2)*.2,ie[On*3+2]=Be.z+Math.cos(D*Be.sp*.8+Be.ph)*.4,$e[On]=fi*Math.max(0,Math.sin(D*1.3+Be.ph*3))**2});const vr=ft.geometry.attributes.position.array,ga=ft.geometry.attributes.aA.array,ys=V((J-.4)/.4)*(.25+.75*(gr.wash||0));_t.forEach((Be,On)=>{vr[On*3]=Be.base.x,vr[On*3+1]=Be.base.y,vr[On*3+2]=Be.base.z,ga[On]=ys*(.5+.5*Math.sin(D*3+Be.ph))});for(const Be of[Ot,ft])Be.geometry.attributes.position.needsUpdate=!0,Be.geometry.attributes.aA.needsUpdate=!0,Be.material.uniforms.uH.value=s.domElement.height*.5}mr+=((J>.4?1:0)-mr)*Math.min(1,_e*2.5),x.shawl.visible=mr>.02,x.shawl.scale.setScalar(.85+.15*mr),x.shawl.position.y=(1-mr)*.12;const Jt=J>.4?2:J>.02?1:0;if(Jt!==ha){const ie=ha;ha=Jt,ie>=0?ji==null||ji(Jt,J):ji==null||ji(Jt,J,!0)}if(Yr==null||Yr(J),d.color.copy(Ci.sun).lerp(Ci.sunD,vt),d.intensity=(1.35-.25*vt)*(1-.85*J),g.color.copy(Ci.fill).lerp(Ci.fillD,vt).lerp(Ci.night,J),g.intensity=(1.3-.45*vt)*(1-.5*J),f.color.copy(Ci.sky).lerp(Ci.skyD,vt).lerp(Ci.night,J),f.intensity=(.9-.2*vt)*(1-.45*J),c.getWorldDirection(xs),xs.y=0,xs.lengthSq()<1e-6){Oe.uHor.value=9;return}xs.normalize(),fn.set(c.position.x+xs.x*1500,0,c.position.z+xs.z*1500);const[,re]=Gt(fn);Oe.uHor.value=1-re/he}const Rd=N=>{Ie.forced=N},Cd=N=>{Ie.nightForced=N};let Yr=null;const iu={paused:!1};let fa=performance.now(),su=0,da=null,Zr=0,pa=fa,ru=0,ou=0,ma=0,gr=h.at(0);const $r={calls:0,triangles:0};function au(N){if(requestAnimationFrame(au),N-su<1e3/n.fps-2)return;const V=performance.now(),J=iu.paused?0:Math.min(.1,(N-fa)/1e3)*ei;fa=N,su=N,D+=J,k.x+=(k.tx-k.x)*Math.min(1,J/ei*4.5),k.y+=(k.ty-k.y)*Math.min(1,J/ei*4.5),k.k+=((k.on?1:0)-k.k)*Math.min(1,J/ei*3.5),_e=J/ei,Re(),gr=h.at(D),Y[X].update(D,J),D>jl&&Ue==="seat"&&!T.current&&(jl=D+22+Math.random()*20,z(Math.random()<.8?"page":"sea"));for(const ct of ht)ct.userData.update(D,J);if(It.userData.top.rotation.z=Math.sin(D*.7)*.012,It.userData.top.rotation.x=Math.sin(D*.53+1)*.01,!ua&&D>.6&&(ua=!0,Td()),Qt.visible=Ti.k>.03,Qt.visible){for(const ct of O)ct.material.opacity=Ti.b;an.material.opacity=(.55+.3*Math.sin(D*2.4))*Ti.b,an.scale.setScalar(1+.04*Math.sin(D*2.4))}const Mt=Ue==="focus"?1:0;_s+=((Ue==="focus"&&Rn.mine?.28:1)-_s)*Math.min(1,J/ei*3),Math.abs(_s-tu)>.005&&(tu=_s,It.userData.top.traverse(ct=>{ct.material&&!ct.userData.isOutline&&(ct.material.transparent=_s<.99,ct.material.opacity=_s)})),j.forEach((ct,vt)=>{ct.o.position.y=Mt*Math.abs(Math.sin(D*3+vt*1.7))*.04}),Oe.uDof.value+=((Ue==="seat"?1:Ue==="focus"?.35:0)-Oe.uDof.value)*Math.min(1,J/ei*3);{const[,ct]=Gt(fn.set(p.x,.55,p.z));Oe.uFocus.value=1-ct/he}if(Q.forEach((ct,vt)=>{var en;const te=(en=ct.userData.y0)!=null?en:ct.userData.y0=ct.position.y;pt[vt]=Math.max(0,pt[vt]-J/ei*1.6);const Jt=pt[vt]>0?Math.sin(Math.PI*(1-pt[vt])):0;ct.position.y=te+Jt*.12,ct.rotation.z=Jt*.35;const re=(D*.42+vt*.29)%1,Kt=Math.max(0,Math.sin(Math.PI*Math.min(1,re/.22))),ne=ce[vt];ne.position.set(ct.position.x+.06,ct.position.y+.14*ct.scale.x/.9,ct.position.z),ne.material.opacity=Ue==="bird"?0:(re<.22?Kt:0)*(we.noted.has(vt)?1:.85)+(we.hover===vt?.6:0),ne.scale.setScalar(.16+.12*Kt+(we.hover===vt?.08:0)),ne.material.rotation=D*.6+vt,ct.scale.setScalar(ct.userData.s0),we.hover===vt&&ct.scale.multiplyScalar(1.12)}),Sn(J/ei),Ad(),t!=null&&t.ready&&(Ql+=J)>.2&&(Ql=0,t.setWash(gr.wash)),s.info.reset(),u.update(D,J,gr,ei),s.setRenderTarget($i),s.render(a,c),s.setRenderTarget(null),s.render(fr,la),Ie.night>.01){const ct=s.autoClear;s.autoClear=!1,s.render(dt,c),s.autoClear=ct}$r.calls=s.info.render.calls,$r.triangles=s.info.render.triangles,r.flush(),ma+=performance.now()-V,Zr++,da===null&&u.ready.done&&(da=Math.round(N),setTimeout(Pd,2500)),N-pa>=1e3&&(ru=Math.round(Zr*1e3/(N-pa)),ou=+(ma/Zr).toFixed(1),Zr=0,ma=0,pa=N)}function Pd(){var N;try{const V=[];a.traverse(Mt=>{Mt.visible||(V.push(Mt),Mt.visible=!0)});const J=s.compileAsync?s.compileAsync(a,c):(s.compile(a,c),null);s.compile(dt,c);for(const Mt of V)Mt.visible=!1;(N=J==null?void 0:J.catch)==null||N.call(J,()=>{})}catch{}}return requestAnimationFrame(au),{setView:vs,get view(){return Ue},set onView(N){Zi=N},pick:we,writeSand:Ji,renderMirror:wd,toggleItem:Z,worn:A,act:z,motion:T,ctl:iu,set onCue(N){P=N},get sandWriting(){return Le},setDusk:Rd,get dusk(){return Ie.v},setNight:Cd,get night(){return Ie.night},set onNight(N){ji=N},set onNightLevel(N){Yr=N},setKind:N=>_.setKind(N),get kind(){return _.kind},objects2:{lantern:$,tips:kt,fire:st,bottle:yt,castle:R,crab2:Ut},setNightTarget:N=>{Ie.to=N,Ie.nightForced===null&&(Ie.nightForced=Ie.night),N===0&&(Ie.forced=0)},setFire:N=>(tt=N&&Ie.night>.25?1:0,tt===1),get fireOn(){return tt===1},showBottle:N=>{yt.visible=N},get bottleVisible(){return yt.visible},setCastleLevel:N=>R.userData.setLevel(N),addCrabFriend:()=>{Ut.visible=!0},Q:n,qName:e,renderer:s,camera:c,refCam:l,beach:u,look:k,setLook:Ai,stampTest:Ed,groundFromStage:$t,screenOf:Gt,stageOf:Bt,objects:{crab:et,shells:Q,pebbles:at,parasol:It,seal:_},motion:T,get layoutInfo(){return b},get wave(){return gr},get simT(){return D},stats:()=>({fps:ru,workMs:ou,calls:$r.calls,triangles:$r.triangles,firstFrameMs:da,quality:e,pixelRatio:s.getPixelRatio(),size:[me,he],halfFloat:o,map:u.mapSize,fpsCap:n.fps})}}const ky={waveNear:"wave-near.ogg",waveFar:"wave-far.ogg",windBirds:"wind-birds.ogg",gull:"gull.ogg",page:"page.ogg",step1:"step1.ogg",step2:"step2.ogg",step3:"step3.ogg",step4:"step4.ogg"},Vy=(()=>{try{return!!document.createElement("audio").canPlayType('audio/ogg; codecs="vorbis"')}catch{return!0}})();async function Wh(i){if(i.startsWith("data:")){const e=atob(i.slice(i.indexOf(",")+1)),n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n.buffer}const t=await fetch(i);if(!t.ok)throw new Error(t.status);return t.arrayBuffer()}function Gy(i="./audio/"){const t=window.AudioContext||window.webkitAudioContext;let e=null,n=!1,s=null;const r={},o={bg:.8,sfx:.8};let a=!1,c=1,l=null,u=0;const h=()=>c>.01&&u<.3,f={},d={step:0,page:0,gull:0};let g=0,v=-1;const p=x=>new Promise((y,A)=>{const F=e.decodeAudioData(x,y,A);F&&F.then&&F.then(y,A)});async function m(){return s||(s=Promise.all(Object.entries(ky).map(async([x,y])=>{try{const A=Y=>i==="./audio/"?$f("audio/"+Y):i+Y,F=y.replace(/\.ogg$/,".m4a"),[U,W]=Vy?[y,F]:[F,y];try{r[x]=await p(await Wh(A(U)))}catch{r[x]=await p(await Wh(A(W)))}}catch(A){r[x]=null,console.warn("[audio] 불러오기 실패",y,A)}})),s)}function S(x,{gain:y,pan:A=0,lp:F=0,offset:U=0}){const W=r[x];if(!W)return null;const Y=e.createBufferSource();Y.buffer=W,Y.loop=!0;const X=e.createGain();X.gain.value=y;let Z=Y.connect(X);if(F){const z=e.createBiquadFilter();z.type="lowpass",z.frequency.value=F,Z.connect(z),Z=z}if(e.createStereoPanner){const z=e.createStereoPanner();z.pan.value=A,Z.connect(z),Z=z}return Z.connect(f.bg),Y.start(0,U%W.duration),X}const M={},_={step:180,page:400,pick:250,gull:5e3},P=x=>{const y=performance.now();return y-(M[x]||-1e9)<(_[x]||0)?!0:(M[x]=y,!1)};function T(x,{gain:y=1,rate:A=1,pan:F=0,lp:U=0,bus:W="sfx"}={}){const Y=r[x];if(!e||!Y||!n)return;const X=e.createBufferSource();X.buffer=Y,X.playbackRate.value=A;const Z=e.createGain();Z.gain.value=y;let z=X.connect(Z);if(U){const nt=e.createBiquadFilter();nt.type="lowpass",nt.frequency.value=U,z.connect(nt),z=nt}if(e.createStereoPanner){const nt=e.createStereoPanner();nt.pan.value=F,z.connect(nt),z=nt}z.connect(f[W]),X.start()}function E(){if(!e)return;const x=e.currentTime;f.master.gain.setTargetAtTime(a?0:1,x,.08),f.bg.gain.setTargetAtTime(o.bg*c*(1-.8*u),x,.6),f.sfx.gain.setTargetAtTime(o.sfx,x,.05)}function C(){clearTimeout(g),g=setTimeout(()=>{n&&!document.hidden&&h()&&(d.gull++,T("gull",{gain:.5,rate:.95+Math.random()*.1,pan:(Math.random()-.5)*1.4,lp:2600})),C()},3e4+Math.random()*4e4)}return{unlock(){return l||(l=this._unlock().finally(()=>{l=null}))},async _unlock(){return t?(e||(e=new t,f.master=e.createGain(),f.master.connect(e.destination),f.bg=e.createGain(),f.sfx=e.createGain(),f.bg.connect(f.master),f.sfx.connect(f.master),E()),e.state!=="running"&&await e.resume(),await m(),n||(n=!0,f.near=S("waveNear",{gain:.9,pan:-.15}),f.far=S("waveFar",{gain:.5,pan:.2,offset:7}),f.wind=S("windBirds",{gain:.45}),C()),!0):!1},setWash(x){f.near&&e&&(f.near.gain.setTargetAtTime(.55+.4*x,e.currentTime,.3),f.far.gain.setTargetAtTime(.5-.12*x,e.currentTime,.3))},step(x=1){if(P("step"))return;let y;do y=1+Math.floor(Math.random()*4);while(y===v);v=y,d.step++,T("step"+y,{gain:(.8+Math.random()*.3)*(.5+.5*x),rate:.92+Math.random()*.16,pan:(Math.random()-.5)*.2,lp:x<.5?2400+x*6e3:0})},pick(){P("pick")||(d.pick=(d.pick||0)+1,T("step3",{gain:.5,rate:1.55,pan:0}))},page(){P("page")||(d.page++,T("page",{gain:1,rate:.96+Math.random()*.08}))},gull(){h()&&(d.gull++,T("gull",{gain:.5,lp:2600}))},setNight(x){Math.abs(x-u)<.02&&x!==0&&x!==1||(u=x,E())},setBgScale(x){c=x,E()},get ctx(){return e},get out(){return f.master},get sfxBus(){return f.sfx},get ready(){return n},setVolume(x,y){o[x]=Math.min(1,Math.max(0,y)),E()},getVolume:x=>o[x],setMuted(x){a=x,E()},get muted(){return a},diag(){var x;return{supported:!!t,state:(x=e==null?void 0:e.state)!=null?x:"none",started:n,loaded:Object.fromEntries(Object.entries(r).map(([y,A])=>[y,A?+A.duration.toFixed(1):null])),bgGain:f.bg?+f.bg.gain.value.toFixed(3):null,sfxGain:f.sfx?+f.sfx.gain.value.toFixed(3):null,vol:{...o},muted:a,played:{...d}}}}}const lc=i=>440*Math.pow(2,(i-69)/12),ni=[{title:"오후의 책장",bpm:72,seed:3,pent:[72,74,76,79,81],chords:[{b:36,n:[55,59,62,64]},{b:33,n:[52,55,60,64]},{b:41,n:[53,57,60,64]},{b:43,n:[55,59,62,65]}]},{title:"파도 사이",bpm:64,seed:8,pent:[74,76,78,81,83],chords:[{b:38,n:[57,61,64,66]},{b:35,n:[54,57,62,66]},{b:43,n:[59,62,66,69]},{b:45,n:[57,61,66,69]}]},{title:"노을 아래 한 장",bpm:78,seed:5,pent:[77,79,81,84,86],chords:[{b:41,n:[57,60,64,67]},{b:40,n:[55,59,62,67]},{b:38,n:[53,57,60,64]},{b:36,n:[55,59,64,67]}]}];function Hy(i){let t=null,e=null,n=null,s=null,r=0,o=!1,a=0,c=0,l=0,u=Math.random;const h=new Set,f=()=>h.forEach(E=>E({playing:o,index:a,title:ni[a].title})),d=E=>()=>(E=E*16807%2147483647)/2147483647;let g=null;function v(){const E=e;E&&(E.gain.cancelScheduledValues(t.currentTime),E.gain.setTargetAtTime(0,t.currentTime,.08),setTimeout(()=>E.disconnect(),600)),e=t.createGain(),e.gain.value=0,e.connect(g),e.connect(n)}function p(){t=i.ctx,e=t.createGain(),e.gain.value=0;const E=t.createBiquadFilter();E.type="lowpass",E.frequency.value=3200,g=E,e.connect(E),E.connect(i.out);const C=t.sampleRate*1.8,x=t.createBuffer(2,C,t.sampleRate);for(let F=0;F<2;F++){const U=x.getChannelData(F);for(let W=0;W<C;W++)U[W]=(Math.random()*2-1)*Math.pow(1-W/C,2.6)}n=t.createConvolver(),n.buffer=x;const y=t.createGain();y.gain.value=.32,e.connect(n),n.connect(y),y.connect(E),s=t.createBuffer(1,t.sampleRate,t.sampleRate);const A=s.getChannelData(0);for(let F=0;F<A.length;F++)A[F]=Math.random()*2-1}function m(E,C,x,y){const A=t.createGain();A.gain.setValueAtTime(1e-4,E),A.gain.exponentialRampToValueAtTime(y,E+.01),A.gain.exponentialRampToValueAtTime(1e-4,E+x);const F=t.createOscillator();F.type="sine",F.frequency.value=lc(C);const U=t.createOscillator();U.type="triangle",U.frequency.value=lc(C)*2.003;const W=t.createGain();W.gain.value=.18,F.connect(A),U.connect(W),W.connect(A),A.connect(e),F.start(E),U.start(E),F.stop(E+x+.05),U.stop(E+x+.05)}function S(E,C,x){const y=t.createGain();y.gain.setValueAtTime(1e-4,E),y.gain.exponentialRampToValueAtTime(.2,E+.03),y.gain.exponentialRampToValueAtTime(1e-4,E+x);const A=t.createOscillator();A.type="sine",A.frequency.value=lc(C),A.connect(y),y.connect(e),A.start(E),A.stop(E+x+.05)}function M(E,C,x=6e3,y=.05){const A=t.createBufferSource();A.buffer=s,A.playbackRate.value=.8+Math.random()*.4;const F=t.createBiquadFilter();F.type="highpass",F.frequency.value=x;const U=t.createGain();U.gain.setValueAtTime(C,E),U.gain.exponentialRampToValueAtTime(1e-4,E+y),A.connect(F),F.connect(U),U.connect(e),A.start(E,Math.random()*.8),A.stop(E+y+.02)}function _(E,C){const x=60/C.bpm,y=C.chords[l%4],A=.12*x;S(E,y.b,x*1.8),S(E+x*2.5,y.b+(l%2?7:0),x*1.3);const F=[0,2,1,3,2,1,3,2];for(let U=0;U<8;U++){const W=E+U*x*.5+(U%2?A:0);u()<.86&&m(W,y.n[F[U]],x*1.6,.05+.025*u()),U%2&&M(W,.05+.02*u())}if(u()<.7){const U=C.pent[Math.floor(u()*5)],W=E+x*(1+Math.floor(u()*3))+A;m(W,U,x*2.2,.075),u()<.5&&m(W+x*.75,C.pent[Math.floor(u()*5)],x*1.8,.06)}for(let U=0;U<4;U++)u()<.5&&M(E+u()*x*4,.05,2500,.012)}function P(){if(!o||!t)return;const E=ni[a];for(;c<t.currentTime+1.2;)if(_(c,E),c+=60/E.bpm*4,l++,l>=36){T((a+1)%ni.length);return}}function T(E){a=(E+ni.length)%ni.length,l=0,u=d(ni[a].seed*977+Math.floor(Math.random()*1e3)),c=((t==null?void 0:t.currentTime)||0)+.15,f()}return{start(){i.ctx&&(t||p(),!o&&(o=!0,v(),T(a),e.gain.setTargetAtTime(.9,t.currentTime,.5),clearInterval(r),r=setInterval(P,250),P()))},stop(){o&&(o=!1,clearInterval(r),r=0,e&&(e.gain.cancelScheduledValues(t.currentTime),e.gain.setTargetAtTime(0,t.currentTime,.12)),f())},next(){o?(v(),e.gain.setTargetAtTime(.9,t.currentTime,.3),T(a+1)):(a=(a+1)%ni.length,f())},prev(){o?(v(),e.gain.setTargetAtTime(.9,t.currentTime,.3),T(a-1)):(a=(a+ni.length-1)%ni.length,f())},onChange(E){h.add(E)},get playing(){return o},get title(){return ni[a].title}}}const Xh={videos:["BxFbF8oGlic","fS-glIMAoUM","nPk1bo_9CfM","gSpQUDDPUpw","21yPAtV20cw","f4S3Hn5wHsE","5852pGvlogw","nREb6TRDqwo"],list:""};function Wy(i,t){const e=new URLSearchParams(location.search),n=e.get("yt")?e.get("yt").split(","):Xh.videos,s=n[0],r=e.get("ytlist")||Xh.list;let o=0,a=null,c=!1,l=!1,u=!1,h="유튜브 음악",f=!1;const d=new Set,g=()=>d.forEach(M=>M({playing:S.playing,title:S.title,source:v()?"youtube":"built-in"})),v=()=>c&&!l;i.onChange(()=>{v()||g()});let p=!1;function m(){if(p)return;if(p=!0,!t||e.get("yt")==="off"){l=!0;return}const M=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{M==null||M();const P={autoplay:0,controls:1,playsinline:1,rel:0,modestbranding:1,loop:1};r?Object.assign(P,{listType:"playlist",list:r}):P.playlist=n.join(","),a=new window.YT.Player(t.querySelector(".yt-frame"),{width:200,height:200,videoId:r?void 0:s,playerVars:P,events:{onReady:()=>{c=!0;try{a.setVolume(70)}catch{}if(g(),f){t.hidden=!1;try{a.playVideo()}catch{}}},onStateChange:T=>{var C;const E=window.YT.PlayerState;u=T.data===E.PLAYING||T.data===E.BUFFERING,T.data===E.PLAYING&&(o=0,i.playing&&i.stop(),f||a.pauseVideo());try{const x=(C=a.getVideoData())==null?void 0:C.title;x&&(h=x)}catch{}T.data===E.ENDED&&n.length===1&&!r&&(a.seekTo(0),a.playVideo()),g()},onError:()=>{if(o++,o<n.length&&(r||n.length>1)){try{a.nextVideo()}catch{}return}l=!0,t.hidden=!0,f&&i.start(),g()}}})};const _=document.createElement("script");_.src="https://www.youtube.com/iframe_api",_.async=!0,_.onerror=()=>{l=!0,g()},document.head.appendChild(_),setTimeout(()=>{!c&&f&&!i.playing&&i.start(),g()},12e3)}const S={start(){if(f=!0,m(),v()){t.hidden=!1;try{a.playVideo()}catch{}g(),clearTimeout(S._chk),S._chk=setTimeout(()=>{f&&!u&&!i.playing&&(i.start(),g())},2500)}else i.start()},stop(){if(f=!1,clearTimeout(S._chk),v()){try{a.pauseVideo()}catch{}u=!1,g()}i.stop()},hide(){S.stop(),t.hidden=!0},next(){v()?r||n.length>1?a.nextVideo():a.seekTo(Math.min((a.getCurrentTime()||0)+30,(a.getDuration()||1e9)-1),!0):i.next()},prev(){v()?r||n.length>1?a.previousVideo():a.seekTo(Math.max(0,(a.getCurrentTime()||0)-30),!0):i.prev()},onChange(M){d.add(M)},get playing(){return v()&&u||i.playing},get title(){return v()&&u?h:i.playing?i.title:h},get source(){return v()&&!i.playing?"youtube":"built-in"},get single(){return!r&&n.length===1}};return setTimeout(()=>(window.requestIdleCallback||(M=>setTimeout(M,1)))(m,{timeout:4e3}),5e3),S}function Xy(i){let t=null,e=null;const n=()=>i.ctx&&i.ready,s=()=>{if(!t){const l=i.ctx;t=l.createBuffer(1,l.sampleRate*2,l.sampleRate);const u=t.getChannelData(0);let h=0;for(let f=0;f<u.length;f++)h=.6*h+.4*(Math.random()*2-1),u[f]=h}return t};function r(l,u,{type:h="bandpass",f0:f=3e3,f1:d=f,q:g=.8,gain:v=.2,attack:p=.01}={}){const m=i.ctx,S=m.createBufferSource();S.buffer=s(),S.loop=!0;const M=m.createBiquadFilter();M.type=h,M.Q.value=g,M.frequency.setValueAtTime(f,l),M.frequency.exponentialRampToValueAtTime(d,l+u);const _=m.createGain();_.gain.setValueAtTime(1e-4,l),_.gain.exponentialRampToValueAtTime(v,l+p),_.gain.exponentialRampToValueAtTime(1e-4,l+u),S.connect(M),M.connect(_),_.connect(i.sfxBus),S.start(l,Math.random()),S.stop(l+u+.05)}function o(l,u,h,f=.08,d="sine"){const g=i.ctx,v=g.createOscillator(),p=g.createGain();v.type=d,v.frequency.value=u,p.gain.setValueAtTime(f,l),p.gain.exponentialRampToValueAtTime(1e-4,l+h),v.connect(p),p.connect(i.sfxBus),v.start(l),v.stop(l+h+.02)}function a(l,u,h=.06,f=7){const d=i.ctx,g=d.createOscillator(),v=d.createOscillator(),p=d.createGain(),m=d.createBiquadFilter(),S=d.createOscillator(),M=d.createGain();g.type="triangle",v.type="sine",m.type="lowpass",m.frequency.value=2200,m.Q.value=.8,S.frequency.value=f,M.gain.value=12,S.connect(M),M.connect(g.frequency),M.connect(v.frequency),g.frequency.setValueAtTime(u[0][1],l),v.frequency.setValueAtTime(u[0][1]*2,l);for(const[T,E]of u.slice(1))g.frequency.exponentialRampToValueAtTime(E,l+T),v.frequency.exponentialRampToValueAtTime(E*2,l+T);const _=l+u[u.length-1][0];p.gain.setValueAtTime(1e-4,l),p.gain.exponentialRampToValueAtTime(h,l+.04),p.gain.setTargetAtTime(h*.7,l+.08,.1),p.gain.exponentialRampToValueAtTime(1e-4,_+.05);const P=d.createGain();P.gain.value=.18,g.connect(m),v.connect(P),P.connect(m),m.connect(p),p.connect(i.sfxBus);for(const T of[g,v,S])T.start(l),T.stop(_+.1)}const c=()=>i.ctx.currentTime+.01;return{sand(l=5){if(!n())return;let u=i.ctx.currentTime+.02;for(let h=0;h<l;h++){const f=.16+Math.random()*.18;r(u,f,{f0:2600+Math.random()*900,f1:1900+Math.random()*700,q:.7,gain:.34,attack:.03}),u+=f*.85+.05}},scratchStart(){if(!n()||e)return;const l=i.ctx,u=l.createBufferSource();u.buffer=s(),u.loop=!0;const h=l.createBiquadFilter();h.type="bandpass",h.frequency.value=2400,h.Q.value=.7;const f=l.createGain();f.gain.value=1e-4,u.connect(h),h.connect(f),f.connect(i.sfxBus),u.start(),e={s:u,f:h,g:f}},scratchMove(l){if(!e)return;const u=i.ctx,h=Math.min(1,l);e.g.gain.setTargetAtTime(.06+.4*h,u.currentTime,.03),e.f.frequency.setTargetAtTime(1900+1500*h,u.currentTime,.05),clearTimeout(e.t),e.t=setTimeout(()=>e&&e.g.gain.setTargetAtTime(1e-4,i.ctx.currentTime,.05),70)},scratchStop(){if(!e)return;const{s:l,g:u}=e;clearTimeout(e.t),e=null,u.gain.setTargetAtTime(1e-4,i.ctx.currentTime,.03),l.stop(i.ctx.currentTime+.2)},sip(){if(!n())return;const l=c();r(l,.42,{f0:700,f1:2300,q:2.2,gain:.28,attack:.08}),r(l+.5,.16,{f0:500,f1:320,q:1.5,gain:.12})},ahh(){if(!n())return;const l=c();r(l,.75,{type:"lowpass",f0:1300,f1:380,q:.6,gain:.16,attack:.14}),a(l+.02,[[0,420],[.35,360]],.025,5)},clink(){if(!n())return;const l=c();o(l,1750,.09,.05),o(l+.01,2630,.06,.03),r(l,.05,{type:"lowpass",f0:900,q:.6,gain:.12})},breeze(){if(!n())return;const l=c();r(l,2.6,{f0:320,f1:900,q:.5,gain:.13,attack:1}),r(l+.6,2.2,{type:"lowpass",f0:600,f1:1400,q:.4,gain:.08,attack:.9}),setTimeout(()=>{var u;return(u=i.gull)==null?void 0:u.call(i)},1500)},stretch(){if(!n())return;const l=c();r(l,.95,{f0:500,f1:1500,q:.7,gain:.12,attack:.5}),this.cloth(),a(l+.55,[[0,520],[.35,760],[.9,700],[1.3,620]],.05,9)},plop(){if(!n())return;const l=c(),u=i.ctx,h=u.createOscillator(),f=u.createGain();h.frequency.setValueAtTime(190,l),h.frequency.exponentialRampToValueAtTime(85,l+.16),f.gain.setValueAtTime(.22,l),f.gain.exponentialRampToValueAtTime(1e-4,l+.2),h.connect(f),f.connect(i.sfxBus),h.start(l),h.stop(l+.25),r(l+.02,.5,{type:"lowpass",f0:1200,f1:400,q:.5,gain:.18,attack:.04})},snore(){if(!n())return;const l=c();for(const u of[0,1.55]){r(l+u,1.1,{type:"lowpass",f0:380,f1:180,q:1.2,gain:.2,attack:.45});const h=i.ctx,f=h.createOscillator(),d=h.createGain(),g=h.createBiquadFilter();f.type="sawtooth",f.frequency.value=62+u*6,g.type="lowpass",g.frequency.value=260,d.gain.setValueAtTime(1e-4,l+u),d.gain.exponentialRampToValueAtTime(.04,l+u+.5),d.gain.exponentialRampToValueAtTime(1e-4,l+u+1.1),f.connect(g),g.connect(d),d.connect(i.sfxBus),f.start(l+u),f.stop(l+u+1.2)}},wake(){if(!n())return;const l=c();a(l,[[0,700],[.08,1150],[.16,980]],.07,0),this.plop()},pat(){if(!n())return;const l=c();r(l,.08,{type:"lowpass",f0:1800,f1:600,q:.7,gain:.42,attack:.004}),o(l,230,.07,.08)},yip(){if(!n())return;const l=c();a(l,[[0,900],[.05,1350],[.11,1e3]],.05,0),a(l+.17,[[0,950],[.05,1400],[.1,1050]],.04,0)},fireOn(){if(!n()||this._fire)return;const l=i.ctx,u=l.createBufferSource();u.buffer=s(),u.loop=!0;const h=l.createBiquadFilter();h.type="lowpass",h.frequency.value=520;const f=l.createGain();f.gain.value=1e-4,f.gain.setTargetAtTime(.09,l.currentTime,1.2),u.connect(h),h.connect(f),f.connect(i.sfxBus),u.start();const d=()=>{if(!this._fire)return;const g=c(),v=1+(Math.random()*3|0);for(let p=0;p<v;p++)r(g+p*(.02+Math.random()*.05),.02+Math.random()*.04,{type:"highpass",f0:1800+Math.random()*2500,q:.7,gain:.05+Math.random()*.12,attack:.002});this._fire.timer=setTimeout(d,120+Math.random()*700)};this._fire={s:u,g:f,timer:0},d()},fireOff(){const l=this._fire;if(!l)return;this._fire=null,clearTimeout(l.timer);const u=i.ctx.currentTime;l.g.gain.setTargetAtTime(1e-4,u,.5),setTimeout(()=>{try{l.s.stop()}catch{}},2500)},sizzle(){if(!n())return;const l=c();r(l,1.6,{type:"highpass",f0:3500,f1:2600,q:.5,gain:.05,attack:.3})},nyam(){if(!n())return;const l=c();for(let u=0;u<3;u++)r(l+u*.26,.12,{type:"bandpass",f0:700,f1:420,q:1.2,gain:.12,attack:.02});a(l+.9,[[0,620],[.15,820],[.35,720]],.045)},twinkle(){if(!n())return;const l=c();[1568,2093,2637,3136].forEach((u,h)=>o(l+h*.07,u,.5,.035))},coo(){if(!n())return;const l=c();a(l,[[0,640],[.12,880],[.32,760]],.055),a(l+.38,[[0,700],[.14,920]],.045)},flap(){if(!n())return;const l=c();for(let u=0;u<3;u++)r(l+u*.26,.2,{f0:700,f1:1500,q:.8,gain:.07,attack:.05})},scratch(){this.sand(9)},tick(){if(!n())return;const l=c();o(l,1250,.035,.05,"triangle"),r(l,.03,{f0:2500,q:1.2,gain:.05})},shell(){if(!n())return;const l=c();r(l,.06,{f0:3800,q:2.5,gain:.16}),o(l+.01,2900,.12,.035),o(l+.09,3700,.1,.025),r(l+.1,.05,{f0:3200,q:2.5,gain:.1}),[1760,2350,2960].forEach((u,h)=>o(l+.2+h*.06,u,.35,.018))},shellClose(){if(!n())return;const l=c();r(l,.05,{f0:2600,q:2,gain:.16}),o(l,1900,.09,.035)},done(){if(!n())return;const l=c();[1047,1319,1568,2093].forEach((u,h)=>{o(l+h*.16,u,1.4,.045),o(l+h*.16,u*2.01,.6,.012)})},cloth(){if(!n())return;const l=i.ctx.currentTime;r(l,.28,{type:"lowpass",f0:1800,f1:700,q:.5,gain:.3,attack:.06}),r(l+.2,.22,{type:"lowpass",f0:1400,f1:600,q:.5,gain:.2,attack:.05})},click(){if(!n())return;const l=i.ctx.currentTime;o(l,1300,.04,.07),o(l+.09,900,.05,.07)},chime(){if(!n())return;const l=i.ctx.currentTime;[1320,1760,2640].forEach((u,h)=>o(l+h*.07,u,.5,.035))},whoosh(){n()&&r(i.ctx.currentTime,.7,{f0:400,f1:1500,q:.6,gain:.14,attack:.3})}}}const rd=1.75;document.documentElement.style.setProperty("--max-aspect",rd);const q=i=>document.getElementById(i),nr=new URLSearchParams(location.search);nr.get("fill")==="1"&&document.body.classList.add("fill");const An=Gy(),Vt=zy(q("c"),An),wn=Wy(Hy(An),document.getElementById("yt-box")),ye=Xy(An),De=(i,t=3500)=>{q("tip").textContent=i,q("tip").hidden=!1,clearTimeout(De.t),De.t=setTimeout(()=>{q("tip").hidden=!0},t)};let ur=!1;async function Ei(i){ur=i,i&&await An.unlock(),An.setMuted(!i),q("btn-sound").setAttribute("aria-pressed",String(i)),q("btn-sound").textContent=i?"소리 끄기":"소리 켜기"}q("btn-sound").addEventListener("click",()=>Ei(!ur));addEventListener("pointerdown",i=>{!ur&&!i.target.closest("#btn-sound")&&Ei(!0)},{once:!0});Vt.onView=(i,t)=>{document.body.classList.toggle("bird",i==="bird"),document.body.classList.toggle("focus",i==="focus"),q("btn-home").hidden=i==="seat",q("btn-view").hidden=i==="bird",ye.whoosh(),i==="bird"&&De("끌어서 해변을 둘러보세요. 자리를 누르면 가까이 볼 수 있어요",4500),i==="focus"&&De(t.mine?"통통 뛰는 조개를 누르면 쪽지를 남기거나 읽을 수 있어요":"이 자리의 조개를 누르면 쪽지를 읽을 수 있어요",4500)};q("btn-view").addEventListener("click",()=>Vt.setView("bird"));q("btn-home").addEventListener("click",()=>Vt.setView("seat"));const al={motion:q("pane-motion"),dress:q("pane-dress")};function od(i){for(const[t,e]of Object.entries(al)){const n=t===i&&e.hidden;e.hidden=!n,q("rail-"+t).setAttribute("aria-expanded",String(n))}ye.tick()}q("rail-motion").addEventListener("click",()=>od("motion"));q("rail-dress").addEventListener("click",()=>od("dress"));const gs=()=>{for(const i in al)al[i].hidden=!0,q("rail-"+i).setAttribute("aria-expanded","false")};q("c").addEventListener("pointerdown",gs);document.querySelectorAll("[data-motion]").forEach(i=>i.addEventListener("click",()=>{if(Ei(!0),gs(),i.dataset.motion==="tteok")return $y();Vt.act(i.dataset.motion)}));Vt.onCue=i=>{var t;i==="page"?An.page():i==="gull"?An.gull():(t=ye[i])==null||t.call(ye)};const ad=["cap","blanket","headset","glasses"];function cd(){for(const i of ad)q("act-"+i).setAttribute("aria-pressed",String(Vt.worn[i])),document.querySelectorAll(`[data-item="${i}"]`).forEach(t=>t.setAttribute("aria-pressed",String(Vt.worn[i])))}async function ql(i){const t=Vt.toggleItem(i);i==="headset"?(t?(wn.start(),An.setBgScale(Yl()),Ei(!0)):(wn.hide(),An.setBgScale(1)),q("np").hidden=!t):ye.cloth(),i==="headset"&&ye.click(),cd()}for(const i of ad)q("act-"+i).addEventListener("click",()=>ql(i));document.querySelectorAll("[data-item]").forEach(i=>i.addEventListener("click",()=>ql(i.dataset.item)));wn.onChange(i=>{q("np-title").textContent=i.title,q("np-src").textContent=i.source==="youtube"?"유튜브 · 헤드셋 음악":"독서 음악",q("np-prev").setAttribute("aria-label",wn.source==="youtube"&&wn.single?"30초 뒤로":"이전 곡"),q("np-next").setAttribute("aria-label",wn.source==="youtube"&&wn.single?"30초 앞으로":"다음 곡"),q("np-play").textContent=i.playing?"⏸":"▶",q("np-play").setAttribute("aria-label",i.playing?"일시정지":"다시 재생"),q("np").classList.toggle("paused",!i.playing)});q("np-play").addEventListener("click",()=>{wn.playing?(wn.stop(),An.setBgScale(1)):(wn.start(),An.setBgScale(Yl())),ye.click()});const ld="padoseojae.wavesWithMusic";let zi=!0;try{zi=localStorage.getItem(ld)!=="0"}catch{}function Yl(){return zi?.35:0}const ud=()=>{q("np-wave").setAttribute("aria-pressed",String(zi)),q("np-wave").title=zi?"파도 소리 켜짐 (누르면 끔)":"파도 소리 꺼짐 (누르면 켬)"};ud();q("np-wave").addEventListener("click",()=>{zi=!zi;try{localStorage.setItem(ld,zi?"1":"0")}catch{}ud(),wn.playing&&An.setBgScale(Yl()),ye.click(),De(zi?"음악과 함께 파도 소리도 들려요":"음악만 들려요 (파도 소리 끔)")});q("np-prev").addEventListener("click",()=>wn.prev());q("np-next").addEventListener("click",()=>wn.next());cd();let hd=0;const qh=q("mirror").getContext("2d");q("act-mirror").addEventListener("click",()=>{gs(),ye.chime(),q("dlg-mirror").hidden=!1,Vt.renderMirror(qh),hd=setInterval(()=>Vt.renderMirror(qh),90)});q("mirror-close").addEventListener("click",()=>{q("dlg-mirror").hidden=!0,clearInterval(hd)});const Qn=q("pad"),qy=Qn.getContext("2d");let Wi=[],ri=null,oa="hand";const Yy=()=>{cl=0,sd(qy,Qn.width,Qn.height,nd(ri?[...Wi,ri]:Wi,"#000",Qn.width,Qn.height))};let cl=0;const hr=()=>{cl||(cl=requestAnimationFrame(Yy))},fd=i=>{const t=Qn.getBoundingClientRect();return[Math.min(1,Math.max(0,(i.clientX-t.left)/t.width)),Math.min(1,Math.max(0,(i.clientY-t.top)/t.height))]};let ll=0,Bo=1.1;Qn.addEventListener("pointerdown",i=>{Qn.setPointerCapture(i.pointerId),i.preventDefault();const t=fd(i);ll=performance.now(),Bo=1.15,ri=[[t[0],t[1],1.15]],hr(),ye.scratchStart()});Qn.addEventListener("pointermove",i=>{var e;if(!ri)return;let t=0;for(const n of((e=i.getCoalescedEvents)==null?void 0:e.call(i))||[i]){const s=fd(n),r=ri[ri.length-1],o=Math.hypot((s[0]-r[0])*Dy,s[1]-r[1]);if(o<.006)continue;const a=n.timeStamp||performance.now(),c=Math.max(4,a-ll);ll=a;const l=o/c*1e3;Bo=Bo*.7+Math.min(1.3,Math.max(.6,1.35-l*.16))*.3,ri.push([s[0],s[1],+Bo.toFixed(2)]),t+=o}t&&(hr(),ye.scratchMove(t*14))});const dd=()=>{ye.scratchStop(),ri&&(Wi.push(ri),ri=null,hr())};Qn.addEventListener("pointerup",dd);Qn.addEventListener("pointercancel",dd);const ul=()=>li.find(i=>i.id===q("sand-font").value)||li[0];async function aa(){const i=ul(),t=q("sand-text").value;await Xl(i,t),sd(q("sand-prev").getContext("2d"),720,240,Xo(t,i,"#000",720,240))}function pd(){q("sand-font").innerHTML=li.map(i=>`<option value="${i.id}">${i.label}</option>`).join("")}pd();(window.__ASSETS?Promise.resolve(!1):Ly()).then(i=>{i&&(pd(),q("sand-font").value="custom")});q("sand-text").addEventListener("input",()=>{aa(),ye.sand(1)});q("sand-font").addEventListener("change",aa);function Zl(i){oa=i,q("tab-hand").setAttribute("aria-pressed",String(i==="hand")),q("tab-type").setAttribute("aria-pressed",String(i==="type")),q("pane-hand").hidden=i!=="hand",q("pane-type").hidden=i!=="type",q("sand-undo").hidden=i!=="hand",i==="type"?(aa(),q("sand-text").focus()):hr()}q("tab-hand").addEventListener("click",()=>Zl("hand"));q("tab-type").addEventListener("click",()=>Zl("type"));q("act-sand").addEventListener("click",()=>{gs(),q("dlg-sand").hidden=!1,Zl(oa)});q("sand-undo").addEventListener("click",()=>{Wi.pop(),hr()});q("sand-clear").addEventListener("click",()=>{oa==="hand"?(Wi=[],hr()):(q("sand-text").value="",aa())});q("sand-cancel").addEventListener("click",()=>{q("dlg-sand").hidden=!0});const md="padoseojae.sand.v1";q("sand-ok").addEventListener("click",async()=>{let i;if(oa==="hand"){if(!Wi.length)return De("모래판에 먼저 글씨를 써 주세요");i={strokes:Wi.map(t=>t.map(([e,n,s=1])=>[+e.toFixed(4),+n.toFixed(4),s]))}}else{const t=q("sand-text").value.trim();if(!t)return De("남길 말을 먼저 적어 주세요");await Xl(ul(),t),i={text:t,font:ul().id}}q("dlg-sand").hidden=!0,Wi=[],q("sand-text").value="",Vt.view!=="seat"&&Vt.setView("seat"),Ei(!0),Vt.act("write"),Vt.writeSand(i,{delay:.75});try{localStorage.setItem(md,JSON.stringify(i))}catch{}setTimeout(()=>De("물범 앞 모래에 글씨를 새겼어요. 다음에 와도 남아 있어요",4500),2600)});var $h;try{const i=JSON.parse(localStorage.getItem(md)||"null");i&&(($h=i.strokes)!=null&&$h.length||i.text)&&Xl(li.find(t=>t.id===i.font)||li[0],i.text||"가").then(()=>Vt.writeSand(i,{instant:!0}))}catch{}const gd="padoseojae.shellnotes.v2";let Xi={},$l=-1;try{Xi=JSON.parse(localStorage.getItem(gd)||"{}")||{}}catch{Xi={}}const Jl=()=>{try{localStorage.setItem(gd,JSON.stringify(Xi))}catch{}Vt.pick.noted=new Set(Object.keys(Xi).map(Number))};Jl();function vd(i,t,e){q("shell-h").textContent=t?i?"내가 남긴 쪽지":"조개 속에 쪽지 남기기":"조개 속 쪽지",q("shell-title").value=(i==null?void 0:i.title)||"",q("shell-text").value=(i==null?void 0:i.text)||"",q("shell-who").hidden=t,q("shell-who").textContent=t?"":`${e} 님이 남긴 쪽지 (예시)`;for(const n of["shell-title","shell-text"])q(n).readOnly=!t;q("shell-del").hidden=!t||!i,q("shell-ok").hidden=!t,document.querySelector("#dlg-shell .hint").hidden=!t,q("dlg-shell").hidden=!1}Vt.onNightLevel=i=>An.setNight(i);Vt.onNight=(i,t,e)=>{e||(i===1&&De("해가 바다 뒤로 넘어가요. 곧 밤바다예요",4500),i===2&&(ye.cloth(),De("밤이 되어 랜턴을 켜고 털담요를 둘렀어요",4500)))};const _d="padoseojae.kind",uc=["seal","bear","bunny"];function hl(i,t){const e=Vt.setKind(i);try{localStorage.setItem(_d,i)}catch{}q("act-kind").querySelector("span").textContent=e,t||(ye.cloth(),Vt.act("hello"))}try{hl(localStorage.getItem(_d)||"seal",!0)}catch{hl("seal",!0)}q("act-kind").addEventListener("click",()=>{const i=uc.indexOf(Vt.kind);hl(uc[(i+1)%uc.length])});function Zy(){const i=Vt.night>.5,t=q("act-daynight");t.setAttribute("aria-pressed",String(i)),t.querySelector("i").textContent=i?"☀️":"🌙",t.querySelector("span").textContent=i?"낮으로":"밤으로",q("act-fire").hidden=!(Vt.night>.3),Vt.night<=.3&&Vt.fireOn&&Yo(!1)}q("act-daynight").addEventListener("click",()=>{Ei(!0),gs();const i=Vt.night<.5;Vt.setNightTarget(i?1:0),ye.twinkle(),De(i?"해가 바다 뒤로 넘어가요…":"다시 해가 떠요",3500)});setInterval(Zy,400);function Yo(i){const t=Vt.setFire(i);return q("act-fire").setAttribute("aria-pressed",String(t)),t?ye.fireOn():ye.fireOff(),t}q("act-fire").addEventListener("click",async()=>{await Ei(!0),gs();const i=!Vt.fireOn;if(i&&!Yo(!0))return De("모닥불은 밤에만 켤 수 있어요");i?De("모닥불을 켰어요. 동작 메뉴에서 가래떡을 구워 보세요",4e3):Yo(!1)});async function $y(){if(Vt.night<.3)return De("밤이 되면 모닥불에 가래떡을 구울 수 있어요 (🌙 단추)",4e3);await Ei(!0),Vt.fireOn?Vt.act("tteok"):(Yo(!0),setTimeout(()=>Vt.act("tteok"),900))}const fl="padoseojae.wishes";function ks(){if(Vt.night>.6&&Vt.view==="seat"&&document.visibilityState==="visible"&&q("star-fall").hidden){const i=q("star-fall"),t=innerWidth,e=innerHeight;i.style.left=t*(.3+Math.random()*.45)+"px",i.style.top=e*(.02+Math.random()*.08)+"px",i.hidden=!1,i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(ks.t),ks.t=setTimeout(()=>{i.hidden=!0},6e3),ks.told||(ks.told=!0,De("별똥별이 지나가요! 눌러서 소원을 빌어 보세요 🌠",4500))}setTimeout(ks,18e3+Math.random()*25e3)}setTimeout(ks,6e3);q("star-fall").addEventListener("pointerdown",()=>{if(q("star-fall").hidden)return;q("star-fall").hidden=!0,ur&&ye.twinkle(),q("dlg-wish").hidden=!1;let i=0;try{i=JSON.parse(localStorage.getItem(fl)||"[]").length}catch{}q("wish-count").textContent=i?`지금까지 별에 보낸 소원 ${i}개`:"",q("wish-text").focus()});q("wish-close").addEventListener("click",()=>{q("dlg-wish").hidden=!0});q("wish-ok").addEventListener("click",()=>{const i=q("wish-text").value.trim();if(!i)return De("소원을 먼저 적어 주세요");try{const t=JSON.parse(localStorage.getItem(fl)||"[]");t.push({t:i,at:Date.now()}),localStorage.setItem(fl,JSON.stringify(t.slice(-100)))}catch{}q("wish-text").value="",q("dlg-wish").hidden=!0,ye.twinkle(),Vt.act("clap"),De("소원이 별을 타고 날아갔어요 ✨",4e3)});const Po=[["책은 한 번에 한 사람에게 말을 건다.","파도서재 메모"],["오늘 읽은 한 문장이 내일의 나를 조금 바꾼다.","파도서재 메모"],["가장 중요한 것은 눈에 보이지 않아.","생텍쥐페리, 「어린 왕자」"],["네가 네 장미에게 들인 시간 때문에 네 장미가 그토록 소중한 거야.","생텍쥐페리, 「어린 왕자」"],["행복한 가정은 모두 비슷하고, 불행한 가정은 저마다의 이유로 불행하다.","톨스토이, 「안나 카레니나」"],["내일은 또 다른 날이니까.","마거릿 미첼, 「바람과 함께 사라지다」"],["나는 생각한다, 그러므로 나는 존재한다.","데카르트, 「방법서설」"],["새는 알에서 나오려고 투쟁한다. 알은 세계이다.","헤르만 헤세, 「데미안」"],["우리가 할 수 있는 것은 주어진 시간으로 무엇을 할지 정하는 것뿐이야.","톨킨, 「반지의 제왕」"],["천천히 서두르라.","옛 라틴어 격언"],["한 권의 책을 읽은 사람은 그만큼의 바다를 건넌 사람이다.","파도서재 메모"],["우리는 모두 시궁창에 있지만, 그중 몇몇은 별을 바라보고 있다.","오스카 와일드, 「윈더미어 부인의 부채」"]],Yh="padoseojae.bottleIdx";function Zo(i){clearTimeout(Zo.t),Zo.t=setTimeout(()=>{Vt.bottleVisible||(Vt.showBottle(!0),De("파도가 유리병을 데려왔어요. 눌러 보세요",4500))},i)}Zo(45e3);Vt.pick.onBottle=()=>{ur&&ye.shell();let i=0;try{i=(+localStorage.getItem(Yh)||0)%Po.length,localStorage.setItem(Yh,String(i+1))}catch{i=Math.floor(Math.random()*Po.length)}q("bottle-quote").textContent=Po[i][0],q("bottle-src").textContent="— "+Po[i][1],q("dlg-bottle").hidden=!1,Vt.showBottle(!1)};q("bottle-close").addEventListener("click",()=>{q("dlg-bottle").hidden=!0,Zo(15e4+Math.random()*12e4)});const xd="padoseojae.read."+new Date().toISOString().slice(0,10);let ki=0;try{ki=+localStorage.getItem(xd)||0}catch{}let dl=Math.min(6,Math.floor(ki/600));Vt.setCastleLevel(dl);setInterval(()=>{if(document.visibilityState!=="visible")return;ki+=5;try{localStorage.setItem(xd,String(ki))}catch{}const i=Math.min(6,Math.floor(ki/600));i>dl&&(dl=i,Vt.setCastleLevel(i),ye.twinkle(),De(`오늘 ${Math.floor(ki/60)}분 함께 읽었어요. 모래성이 ${i}층 높아졌어요 🏰`,5e3))},5e3);window.__read={add:i=>{ki+=i*60},get sec(){return ki}};let Jy=0;const Zh=["뿅","뀨","꼬륵","챱","*.*","+••+","집게 조심!","사각사각","안녕?","...!","♪","킁"];Vt.pick.onCrab=(i,t,e)=>{var s;ur&&((s=ye.yip)==null||s.call(ye)),!e&&++Jy===5&&(Vt.addCrabFriend(),setTimeout(()=>De("꽃게 친구가 놀러 왔어요 🦀🦀",4e3),600));const n=document.createElement("div");n.className="bubble",n.textContent=Zh[Math.floor(Math.random()*Zh.length)],n.style.left=i+"px",n.style.top=t+"px",q("app").appendChild(n),setTimeout(()=>n.remove(),1700)};Vt.pick.onShell=i=>{$l=i,ye.shell(),setTimeout(()=>vd(Xi[i],!0),380)};Vt.pick.onOther=i=>vd(i,!1,i.who);q("shell-cancel").addEventListener("click",()=>{q("dlg-shell").hidden=!0});q("shell-del").addEventListener("click",()=>{delete Xi[$l],Jl(),q("dlg-shell").hidden=!0,De("쪽지를 지웠어요")});q("shell-ok").addEventListener("click",()=>{const i=q("shell-title").value.trim(),t=q("shell-text").value.trim();if(!i&&!t)return De("책 제목이나 남길 말을 적어 주세요");Xi[$l]={title:i,text:t,at:Date.now()},Jl(),ye.shellClose(),q("dlg-shell").hidden=!0,De("조개 속에 쪽지를 넣었어요. 반짝이는 조개를 누르면 다시 읽을 수 있어요")});const hc=["low","mid","high"];q("btn-quality").textContent=`품질: ${Vt.Q.label}`;q("btn-quality").addEventListener("click",()=>{const i=hc[(hc.indexOf(Vt.qName)+1)%hc.length];let t=!1;try{sessionStorage.setItem("s5q",i),t=!0}catch{}if(t&&!nr.get("quality"))location.reload();else{const e=new URL(location.href);e.searchParams.set("quality",i),location.href=e.toString()}});function yd(){q("btn-fill").hidden=innerWidth/innerHeight<=rd+.01}yd();addEventListener("resize",yd);var Jh;{const i=matchMedia("(orientation: landscape) and (max-height: 500px)");let t=!1;const e=()=>{nr.get("fill")||(i.matches&&!document.body.classList.contains("fill")?(document.body.classList.add("fill"),t=!0):!i.matches&&t&&(document.body.classList.remove("fill"),t=!1),q("btn-fill").setAttribute("aria-pressed",String(document.body.classList.contains("fill"))),dispatchEvent(new Event("resize")))};(Jh=i.addEventListener)==null||Jh.call(i,"change",e),e()}q("btn-fill").addEventListener("click",()=>{const i=document.body.classList.toggle("fill");q("btn-fill").setAttribute("aria-pressed",String(i)),dispatchEvent(new Event("resize"))});q("hud").hidden=nr.get("hud")!=="1";setInterval(()=>{if(q("hud").hidden)return;const i=Vt.stats();q("hud").textContent=`초당 ${i.fps}장 (상한 ${i.fpsCap}) · 한 장 ${i.workMs}ms
품질 ${qo[i.quality].label} · ${i.size[0]}×${i.size[1]} ×${i.pixelRatio} · 그리기 ${i.calls}회`},500);window.__s5=Vt;window.__ui={music:wn,audio:An,sfx:ye,toggle:ql,notes:()=>Xi};const Kl="padoseojae.timer.v1";let _n=null;const Md=i=>{const t=Math.max(0,Math.ceil(i/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`};function ca(){const i=!!_n;q("btn-timer").classList.toggle("on",i),q("timer-text").textContent=i?Md(_n.end-Date.now()):"타이머",q("timer-h").textContent=i?`${_n.min}분 읽는 중`:"얼마나 읽을까요?",q("timer-mins").hidden=i,q("timer-stop").hidden=!i,q("timer-hint").textContent=i?"타이머를 끄고 그냥 쉴 수도 있어요":"시간이 다 되면 물범이 기지개를 켜고 알려 줘요"}function Sd(i){_n={end:Date.now()+i*6e4/(Number(nr.get("timescale"))>1&&nr.get("fasttimer")?60:1),min:i};try{localStorage.setItem(Kl,JSON.stringify(_n))}catch{}q("dlg-timer").hidden=!0,ca(),Ei(!0),ye.tick(),Vt.act("page"),De(`${i}분 동안 함께 읽어요`)}function $o(i){const t=_n==null?void 0:_n.min;_n=null;try{localStorage.removeItem(Kl)}catch{}ca(),i&&(ye.done(),Vt.act("stretch"),setTimeout(()=>Vt.act("clap"),3700),q("toast").textContent=`${t}분 독서 완료 ✓  오늘도 한 장 넘겼어요`,q("toast").hidden=!1,clearTimeout($o.t),$o.t=setTimeout(()=>{q("toast").hidden=!0},12e3))}try{const i=JSON.parse(localStorage.getItem(Kl)||"null");i&&i.end>Date.now()&&(_n=i)}catch{}q("btn-timer").addEventListener("click",()=>{gs(),ca(),q("dlg-timer").hidden=!1,ye.tick()});document.querySelectorAll("[data-min]").forEach(i=>i.addEventListener("click",()=>Sd(+i.dataset.min)));q("timer-stop").addEventListener("click",()=>{$o(!1),q("dlg-timer").hidden=!0,De("타이머를 껐어요")});q("timer-close").addEventListener("click",()=>{q("dlg-timer").hidden=!0});q("toast").addEventListener("click",()=>{q("toast").hidden=!0});setInterval(()=>{_n&&(Date.now()>=_n.end?$o(!0):q("timer-text").textContent=Md(_n.end-Date.now()))},500);ca();window.__timer={start:Sd,finish:()=>{_n&&(_n.end=Date.now()-1)}};setTimeout(()=>{Vt.view==="seat"&&De("반짝이는 조개를 누르면 쪽지를 남길 수 있어요 · 오른쪽에서 동작을 골라 보세요",5500)},1800);
