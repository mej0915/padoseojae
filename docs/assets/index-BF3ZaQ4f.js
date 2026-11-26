(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="170",Td=0,ou=1,Ad=2,Xh=1,qh=2,xi=3,Ei=0,Sn=1,Ge=2,zi=0,Vs=1,Si=2,au=3,cu=4,Yh=5,yi=100,Rd=101,Zh=102,Cd=103,Pd=104,Id=200,ac=201,Ld=202,Dd=203,cc=204,lc=205,Ud=206,Nd=207,Fd=208,Od=209,Bd=210,zd=211,kd=212,Vd=213,Gd=214,uc=0,hc=1,fc=2,Ws=3,dc=4,pc=5,mc=6,gc=7,$h=0,Hd=1,Wd=2,ki=0,Xd=1,qd=2,Yd=3,Zd=4,$d=5,Jd=6,Kd=7,lu="attached",jd="detached",Jh=300,Xs=301,qs=302,_c=303,vc=304,Yo=306,Ys=1e3,as=1001,xc=1002,Nn=1003,Qd=1004,qr=1005,Rn=1006,fa=1007,cs=1008,Qn=1009,Kh=1010,jh=1011,Rr=1012,ul=1013,us=1014,si=1015,js=1016,hl=1017,fl=1018,Zs=1020,Qh=35902,tf=1021,ef=1022,zn=1023,nf=1024,sf=1025,Gs=1026,$s=1027,dl=1028,pl=1029,rf=1030,ml=1031,gl=1033,Ao=33776,Ro=33777,Co=33778,Po=33779,yc=35840,Mc=35841,Sc=35842,bc=35843,wc=36196,Ec=37492,Tc=37496,Ac=37808,Rc=37809,Cc=37810,Pc=37811,Ic=37812,Lc=37813,Dc=37814,Uc=37815,Nc=37816,Fc=37817,Oc=37818,Bc=37819,zc=37820,kc=37821,Io=36492,Vc=36494,Gc=36495,of=36283,Hc=36284,Wc=36285,Xc=36286,af=2200,tp=2201,ep=2202,Fo=2300,qc=2301,da=2302,Os=2400,Bs=2401,Oo=2402,_l=2500,vl=2501,np=3200,ip=3201,cf=0,sp=1,Fi="",Oe="srgb",Qs="srgb-linear",Zo="linear",Ue="srgb",vs=7680,uu=519,rp=512,op=513,ap=514,lf=515,cp=516,lp=517,up=518,hp=519,Yc=35044,hu="300 es",Mi=2e3,Bo=2001;class fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fu=1234567;const br=Math.PI/180,Cr=180/Math.PI;function kn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function sn(i,t,e){return Math.max(t,Math.min(e,i))}function xl(i,t){return(i%t+t)%t}function fp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function dp(i,t,e){return i!==t?(e-i)/(t-i):0}function wr(i,t,e){return(1-e)*i+e*t}function pp(i,t,e,n){return wr(i,t,1-Math.exp(-e*n))}function mp(i,t=1){return t-Math.abs(xl(i,t*2)-t)}function gp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _p(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xp(i,t){return i+Math.random()*(t-i)}function yp(i){return i*(.5-Math.random())}function Mp(i){i!==void 0&&(fu=i);let t=fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sp(i){return i*br}function bp(i){return i*Cr}function wp(i){return(i&i-1)===0&&i!==0}function Ep(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ap(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const en={DEG2RAD:br,RAD2DEG:Cr,generateUUID:kn,clamp:sn,euclideanModulo:xl,mapLinear:fp,inverseLerp:dp,lerp:wr,damp:pp,pingpong:mp,smoothstep:gp,smootherstep:_p,randInt:vp,randFloat:xp,randFloatSpread:yp,seededRandom:Mp,degToRad:Sp,radToDeg:bp,isPowerOfTwo:wp,ceilPowerOfTwo:Ep,floorPowerOfTwo:Tp,setQuaternionFromProperEuler:Ap,normalize:Ce,denormalize:Jn};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,n,s,r,o,a,c,l){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],M=s[4],v=s[7],C=s[2],T=s[5],E=s[8];return r[0]=o*_+a*S+c*C,r[3]=o*m+a*M+c*T,r[6]=o*p+a*v+c*E,r[1]=l*_+u*S+h*C,r[4]=l*m+u*M+h*T,r[7]=l*p+u*v+h*E,r[2]=f*_+d*S+g*C,r[5]=f*m+d*M+g*T,r[8]=f*p+d*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pa.makeScale(t,e)),this}rotate(t){return this.premultiply(pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new se;function uf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rp(){const i=Pr("canvas");return i.style.display="block",i}const du={};function Mr(i){i in du||(du[i]=!0,console.warn(i))}function Cp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Pp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ip(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _e={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ue&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ue&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fi?Zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const pu=[.64,.33,.3,.6,.15,.06],mu=[.2126,.7152,.0722],gu=[.3127,.329],_u=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_e.define({[Qs]:{primaries:pu,whitePoint:gu,transfer:Zo,toXYZ:_u,fromXYZ:vu,luminanceCoefficients:mu,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:pu,whitePoint:gu,transfer:Ue,toXYZ:_u,fromXYZ:vu,luminanceCoefficients:mu,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let xs;class Lp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=Pr("canvas")),xs.width=t.width,xs.height=t.height;const n=xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dp=0;class hf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ma(s[o].image)):r.push(ma(s[o]))}else r=ma(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ma(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Lp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Up=0;class ln extends fs{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,n=as,s=as,r=Rn,o=cs,a=zn,c=Qn,l=ln.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=kn(),this.name="",this.source=new hf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ys:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ys:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Jh;ln.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,v=(d+1)/2,C=(p+1)/2,T=(u+f)/4,E=(h+_)/4,P=(g+m)/4;return M>v&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=E/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=E/r,s=P/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Np extends fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Np{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ff extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fp extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*_,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),T=Math.atan2(C,p*S);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const v=a*S;if(c=c*m+f*v,l=l*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new I,xu=new oi;class tr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Zr.subVectors(this.max,ur),ys.subVectors(t.a,ur),Ms.subVectors(t.b,ur),Ss.subVectors(t.c,ur),Ri.subVectors(Ms,ys),Ci.subVectors(Ss,Ms),Ki.subVectors(ys,Ss);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Ki.z,Ki.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Ki.z,0,-Ki.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Ki.y,Ki.x,0];return!_a(e,ys,Ms,Ss,Zr)||(e=[1,0,0,0,1,0,0,0,1],!_a(e,ys,Ms,Ss,Zr))?!1:($r.crossVectors(Ri,Ci),e=[$r.x,$r.y,$r.z],_a(e,ys,Ms,Ss,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const di=[new I,new I,new I,new I,new I,new I,new I,new I],Xn=new I,Yr=new tr,ys=new I,Ms=new I,Ss=new I,Ri=new I,Ci=new I,Ki=new I,ur=new I,Zr=new I,$r=new I,ji=new I;function _a(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ji.fromArray(i,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),c=t.dot(ji),l=e.dot(ji),u=n.dot(ji);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Op=new tr,hr=new I,va=new I;class er{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Op.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(va)),this.expandByPoint(hr.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new I,xa=new I,Jr=new I,Pi=new I,ya=new I,Kr=new I,Ma=new I;class $o{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xa.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(xa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Jr),a=Pi.dot(this.direction),c=-Pi.dot(Jr),l=Pi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xa).addScaledVector(Jr,f),d}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,s,r){ya.subVectors(e,t),Kr.subVectors(n,t),Ma.crossVectors(ya,Kr);let o=this.direction.dot(Ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,t);const c=a*this.direction.dot(Kr.crossVectors(Pi,Kr));if(c<0)return null;const l=a*this.direction.dot(ya.cross(Pi));if(l<0||c+l>o)return null;const u=-a*Pi.dot(Ma);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),o=1/bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bp,t,zp)}lookAt(t,e,n){const s=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),Ii.crossVectors(n,In),Ii.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ii.crossVectors(n,In)),Ii.normalize(),jr.crossVectors(In,Ii),s[0]=Ii.x,s[4]=jr.x,s[8]=In.x,s[1]=Ii.y,s[5]=jr.y,s[9]=In.y,s[2]=Ii.z,s[6]=jr.z,s[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],M=n[7],v=n[11],C=n[15],T=s[0],E=s[4],P=s[8],x=s[12],y=s[1],R=s[5],N=s[9],D=s[13],G=s[2],q=s[6],X=s[10],Y=s[14],z=s[3],nt=s[7],ht=s[11],lt=s[15];return r[0]=o*T+a*y+c*G+l*z,r[4]=o*E+a*R+c*q+l*nt,r[8]=o*P+a*N+c*X+l*ht,r[12]=o*x+a*D+c*Y+l*lt,r[1]=u*T+h*y+f*G+d*z,r[5]=u*E+h*R+f*q+d*nt,r[9]=u*P+h*N+f*X+d*ht,r[13]=u*x+h*D+f*Y+d*lt,r[2]=g*T+_*y+m*G+p*z,r[6]=g*E+_*R+m*q+p*nt,r[10]=g*P+_*N+m*X+p*ht,r[14]=g*x+_*D+m*Y+p*lt,r[3]=S*T+M*y+v*G+C*z,r[7]=S*E+M*R+v*q+C*nt,r[11]=S*P+M*N+v*X+C*ht,r[15]=S*x+M*D+v*Y+C*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+e*l*h-e*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=h*m*l-_*f*l+_*c*d-a*m*d-h*c*p+a*f*p,M=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,v=u*_*l-g*h*l+g*a*d-o*_*d-u*a*p+o*h*p,C=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,T=e*S+n*M+s*v+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=S*E,t[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*E,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*E,t[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*d-n*c*d)*E,t[4]=M*E,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*d+e*c*d)*E,t[8]=v*E,t[9]=(g*h*r-u*_*r-g*n*d+e*_*d+u*n*p-e*h*p)*E,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*E,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*d-e*a*d)*E,t[12]=C*E,t[13]=(u*_*s-g*h*s+g*n*f-e*_*f-u*n*m+e*h*m)*E,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*E,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,S=c*l,M=c*u,v=c*h,C=n.x,T=n.y,E=n.z;return s[0]=(1-(_+p))*C,s[1]=(d+v)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(f+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+M)*E,s[9]=(m-S)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=bs.set(s[0],s[1],s[2]).length();const o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qn.copy(this);const l=1/r,u=1/o,h=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,e.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Mi){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===Mi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Bo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Mi){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*l,d=(n+s)*u;let g,_;if(a===Mi)g=(o+r)*h,_=-2*h;else if(a===Bo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bs=new I,qn=new he,Bp=new I(0,0,0),zp=new I(1,1,1),Ii=new I,jr=new I,In=new I,yu=new he,Mu=new oi;class ci{constructor(t=0,e=0,n=0,s=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class yl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kp=0;const Su=new I,ws=new oi,mi=new he,Qr=new I,fr=new I,Vp=new I,Gp=new oi,bu=new I(1,0,0),wu=new I(0,1,0),Eu=new I(0,0,1),Tu={type:"added"},Hp={type:"removed"},Es={type:"childadded",child:null},Sa={type:"childremoved",child:null};class qe extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new I,e=new ci,n=new oi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new se}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(bu,t)}rotateY(t){return this.rotateOnAxis(wu,t)}rotateZ(t){return this.rotateOnAxis(Eu,t)}translateOnAxis(t,e){return Su.copy(t).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bu,t)}translateY(t){return this.translateOnAxis(wu,t)}translateZ(t){return this.translateOnAxis(Eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(fr,Qr,this.up):mi.lookAt(Qr,fr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(mi),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tu),Es.child=t,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hp),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tu),Es.child=t,this.dispatchEvent(Es),Es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}qe.DEFAULT_UP=new I(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new I,gi=new I,ba=new I,_i=new I,Ts=new I,As=new I,Au=new I,wa=new I,Ea=new I,Ta=new I,Aa=new Me,Ra=new Me,Ca=new Me;class Bn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Yn.subVectors(t,e),s.cross(Yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Yn.subVectors(s,e),gi.subVectors(n,e),ba.subVectors(t,e);const o=Yn.dot(Yn),a=Yn.dot(gi),c=Yn.dot(ba),l=gi.dot(gi),u=gi.dot(ba),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Aa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Aa,r.x),o.addScaledVector(Ra,r.y),o.addScaledVector(Ca,r.z),o}static isFrontFacing(t,e,n,s){return Yn.subVectors(n,e),gi.subVectors(t,e),Yn.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Yn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Bn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ts.subVectors(s,n),As.subVectors(r,n),wa.subVectors(t,n);const c=Ts.dot(wa),l=As.dot(wa);if(c<=0&&l<=0)return e.copy(n);Ea.subVectors(t,s);const u=Ts.dot(Ea),h=As.dot(Ea);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ts,o);Ta.subVectors(t,r);const d=Ts.dot(Ta),g=As.dot(Ta);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(As,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Au.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Au,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Ts,o).addScaledVector(As,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},to={h:0,s:0,l:0};function Pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=xl(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Pa(o,r,t+1/3),this.g=Pa(o,r,t),this.b=Pa(o,r,t-1/3)}return _e.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return _e.fromWorkingColorSpace(mn.copy(this),t),Math.round(sn(mn.r*255,0,255))*65536+Math.round(sn(mn.g*255,0,255))*256+Math.round(sn(mn.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,s=mn.g,r=mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=Oe){_e.fromWorkingColorSpace(mn.copy(this),t);const e=mn.r,n=mn.g,s=mn.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(to);const n=wr(Li.h,to.h,e),s=wr(Li.s,to.s,e),r=wr(Li.l,to.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Jt;Jt.NAMES=df;let Wp=0;class Wi extends fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=kn(),this.name="",this.blending=Vs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xe extends Wi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new I,eo=new at;class Cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yc,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yc&&(t.usage=this.usage),t}}class Ml extends Cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pf extends Cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends Cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xp=0;const Fn=new he,Ia=new qe,Rs=new I,Ln=new tr,dr=new tr,nn=new I;class Ye extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uf(t)?pf:Ml)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Ln.min,dr.min),Ln.expandByPoint(nn),nn.addVectors(Ln.max,dr.max),Ln.expandByPoint(nn)):(Ln.expandByPoint(dr.min),Ln.expandByPoint(dr.max))}Ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)nn.fromBufferAttribute(a,l),c&&(Rs.fromBufferAttribute(t,l),nn.add(Rs)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;const l=new I,u=new I,h=new I,f=new at,d=new at,g=new at,_=new I,m=new I;function p(P,x,y){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[P].add(_),a[x].add(_),a[y].add(_),c[P].add(m),c[x].add(m),c[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,x=S.length;P<x;++P){const y=S[P],R=y.start,N=y.count;for(let D=R,G=R+N;D<G;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const M=new I,v=new I,C=new I,T=new I;function E(P){C.fromBufferAttribute(s,P),T.copy(C);const x=a[P];M.copy(x),M.sub(C.multiplyScalar(C.dot(x))).normalize(),v.crossVectors(T,x);const R=v.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,R)}for(let P=0,x=S.length;P<x;++P){const y=S[P],R=y.start,N=y.count;for(let D=R,G=R+N;D<G;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ru=new he,Qi=new $o,no=new er,Cu=new I,io=new I,so=new I,ro=new I,La=new I,oo=new I,Pu=new I,ao=new I;class ut extends qe{constructor(t=new Ye,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(La.fromBufferAttribute(h,t),o?oo.addScaledVector(La,u):oo.addScaledVector(La.sub(e),u))}e.add(oo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(no.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(no,Cu)===null||Qi.origin.distanceToSquared(Cu)>(t.far-t.near)**2))&&(Ru.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(Ru),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,C=M;v<C;v+=3){const T=a.getX(v),E=a.getX(v+1),P=a.getX(v+2);s=co(this,p,t,n,l,u,h,T,E,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=co(this,o,t,n,l,u,h,S,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,C=M;v<C;v+=3){const T=v,E=v+1,P=v+2;s=co(this,p,t,n,l,u,h,T,E,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,M=m+1,v=m+2;s=co(this,o,t,n,l,u,h,S,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function qp(i,t,e,n,s,r,o,a){let c;if(t.side===Sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ei,a),c===null)return null;ao.copy(a),ao.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ao);return l<e.near||l>e.far?null:{distance:l,point:ao.clone(),object:i}}function co(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,io),i.getVertexPosition(c,so),i.getVertexPosition(l,ro);const u=qp(i,t,e,n,io,so,ro,Pu);if(u){const h=new I;Bn.getBarycoord(Pu,io,so,ro,h),s&&(u.uv=Bn.getInterpolatedAttribute(s,a,c,l,h,new at)),r&&(u.uv1=Bn.getInterpolatedAttribute(r,a,c,l,h,new at)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};Bn.getNormal(io,so,ro,f.normal),u.face=f,u.barycoord=h}return u}class bn extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(h,2));function g(_,m,p,S,M,v,C,T,E,P,x){const y=v/E,R=C/P,N=v/2,D=C/2,G=T/2,q=E+1,X=P+1;let Y=0,z=0;const nt=new I;for(let ht=0;ht<X;ht++){const lt=ht*R-D;for(let Lt=0;Lt<q;Lt++){const Gt=Lt*y-N;nt[_]=Gt*S,nt[m]=lt*M,nt[p]=G,l.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=T>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Lt/E),h.push(1-ht/P),Y+=1}}for(let ht=0;ht<P;ht++)for(let lt=0;lt<E;lt++){const Lt=f+lt+q*ht,Gt=f+lt+q*(ht+1),$=f+(lt+1)+q*(ht+1),rt=f+(lt+1)+q*ht;c.push(Lt,Gt,rt),c.push(Gt,$,rt),z+=6}a.addGroup(d,z,x),d+=z,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Js(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xn(i){const t={};for(let e=0;e<i.length;e++){const n=Js(i[e]);for(const s in n)t[s]=n[s]}return t}function Yp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const Zp={clone:Js,merge:xn};var $p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Wi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$p,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=Yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gf extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new I,Iu=new at,Lu=new at;class yn extends gf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Lu),e.subVectors(Lu,Iu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cs=-90,Ps=1;class Kp extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(Cs,Ps,t,e);s.layers=this.layers,this.add(s);const r=new yn(Cs,Ps,t,e);r.layers=this.layers,this.add(r);const o=new yn(Cs,Ps,t,e);o.layers=this.layers,this.add(o);const a=new yn(Cs,Ps,t,e);a.layers=this.layers,this.add(a);const c=new yn(Cs,Ps,t,e);c.layers=this.layers,this.add(c);const l=new yn(Cs,Ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _f extends ln{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jp extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _f(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bn(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:zi});r.uniforms.tEquirect.value=e;const o=new ut(s,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=Rn),new Kp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Da=new I,Qp=new I,t0=new se;class Ni{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Da.subVectors(n,e).cross(Qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||t0.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new er,lo=new I;class Sl{constructor(t=new Ni,e=new Ni,n=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],M=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-d,v-p).normalize(),n[1].setComponents(c+r,f+l,m+d,v+p).normalize(),n[2].setComponents(c+o,f+u,m+g,v+S).normalize(),n[3].setComponents(c-o,f-u,m-g,v-S).normalize(),n[4].setComponents(c-a,f-h,m-_,v-M).normalize(),e===Mi)n[5].setComponents(c+a,f+h,m+_,v+M).normalize();else if(e===Bo)n[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(lo.x=s.normal.x>0?t.max.x:t.min.x,lo.y=s.normal.y>0?t.max.y:t.min.y,lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function e0(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class $e extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let M=0;M<l;M++){const v=M*h-r;g.push(v,-S,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const M=S+l*p,v=S+l*(p+1),C=S+1+l*(p+1),T=S+1+l*p;d.push(M,v,T),d.push(v,C,T)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.widthSegments,t.heightSegments)}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
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
#endif`,l0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,E0=`#define PI 3.141592653589793
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
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A0=`vec3 transformedNormal = objectNormal;
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
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
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
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
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
#endif`,tm=`struct PhysicalMaterial {
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
}`,em=`
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
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
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#define LAMBERT
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
}`,vg=`#define LAMBERT
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
}`,xg=`#define MATCAP
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
}`,yg=`#define MATCAP
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
}`,Mg=`#define NORMAL
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
}`,Sg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,wg=`#define PHONG
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
}`,Eg=`#define STANDARD
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
}`,Tg=`#define STANDARD
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
}`,Ag=`#define TOON
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
}`,Rg=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Lg=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:c0,aomap_pars_fragment:l0,batching_pars_vertex:u0,batching_vertex:h0,begin_vertex:f0,beginnormal_vertex:d0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:y0,color_fragment:M0,color_pars_fragment:S0,color_pars_vertex:b0,color_vertex:w0,common:E0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:A0,displacementmap_pars_vertex:R0,displacementmap_vertex:C0,emissivemap_fragment:P0,emissivemap_pars_fragment:I0,colorspace_fragment:L0,colorspace_pars_fragment:D0,envmap_fragment:U0,envmap_common_pars_fragment:N0,envmap_pars_fragment:F0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:Z0,envmap_vertex:B0,fog_vertex:z0,fog_pars_vertex:k0,fog_fragment:V0,fog_pars_fragment:G0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:Y0,lights_toon_fragment:$0,lights_toon_pars_fragment:J0,lights_phong_fragment:K0,lights_phong_pars_fragment:j0,lights_physical_fragment:Q0,lights_physical_pars_fragment:tm,lights_fragment_begin:em,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:am,map_fragment:cm,map_pars_fragment:lm,map_particle_fragment:um,map_particle_pars_fragment:hm,metalnessmap_fragment:fm,metalnessmap_pars_fragment:dm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:vm,normal_fragment_begin:xm,normal_fragment_maps:ym,normal_pars_fragment:Mm,normal_pars_vertex:Sm,normal_vertex:bm,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Im,project_vertex:Lm,dithering_fragment:Dm,dithering_pars_fragment:Um,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:km,skinbase_vertex:Vm,skinning_pars_vertex:Gm,skinning_vertex:Hm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:Zm,transmission_fragment:$m,transmission_pars_fragment:Jm,uv_pars_fragment:Km,uv_pars_vertex:jm,uv_vertex:Qm,worldpos_vertex:tg,background_vert:eg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:og,depth_vert:ag,depth_frag:cg,distanceRGBA_vert:lg,distanceRGBA_frag:ug,equirect_vert:hg,equirect_frag:fg,linedashed_vert:dg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:_g,meshlambert_frag:vg,meshmatcap_vert:xg,meshmatcap_frag:yg,meshnormal_vert:Mg,meshnormal_frag:Sg,meshphong_vert:bg,meshphong_frag:wg,meshphysical_vert:Eg,meshphysical_frag:Tg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Pg,shadow_vert:Ig,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ug},St={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ii={basic:{uniforms:xn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:xn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:xn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:xn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:xn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:xn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:xn([St.points,St.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:xn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:xn([St.common,St.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:xn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:xn([St.sprite,St.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:xn([St.common,St.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:xn([St.lights,St.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};ii.physical={uniforms:xn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const uo={r:0,b:0,g:0},es=new ci,Ng=new he;function Fg(i,t,e,n,s,r,o){const a=new Jt(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function _(S){let M=!1;const v=g(S);v===null?p(a,c):v&&v.isColor&&(p(v,1),M=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===Yo)?(u===void 0&&(u=new ut(new bn(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Js(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),es.copy(M.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(es)),u.material.toneMapped=_e.getTransfer(v.colorSpace)!==Ue,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ut(new $e(2,2),new Dn({name:"BackgroundMaterial",uniforms:Js(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=_e.getTransfer(v.colorSpace)!==Ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,M){S.getRGB(uo,mf(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:m}}function Og(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,R,N,D,G){let q=!1;const X=h(D,N,R);r!==X&&(r=X,l(r.object)),q=d(y,D,N,G),q&&g(y,D,N,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(y,R,N,D),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,R,N){const D=N.wireframe===!0;let G=n[y.id];G===void 0&&(G={},n[y.id]=G);let q=G[R.id];q===void 0&&(q={},G[R.id]=q);let X=q[D];return X===void 0&&(X=f(c()),q[D]=X),X}function f(y){const R=[],N=[],D=[];for(let G=0;G<e;G++)R[G]=0,N[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:D,object:y,attributes:{},index:null}}function d(y,R,N,D){const G=r.attributes,q=R.attributes;let X=0;const Y=N.getAttributes();for(const z in Y)if(Y[z].location>=0){const ht=G[z];let lt=q[z];if(lt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor)),ht===void 0||ht.attribute!==lt||lt&&ht.data!==lt.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function g(y,R,N,D){const G={},q=R.attributes;let X=0;const Y=N.getAttributes();for(const z in Y)if(Y[z].location>=0){let ht=q[z];ht===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));const lt={};lt.attribute=ht,ht&&ht.data&&(lt.data=ht.data),G[z]=lt,X++}r.attributes=G,r.attributesNum=X,r.index=D}function _(){const y=r.newAttributes;for(let R=0,N=y.length;R<N;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const N=r.newAttributes,D=r.enabledAttributes,G=r.attributeDivisors;N[y]=1,D[y]===0&&(i.enableVertexAttribArray(y),D[y]=1),G[y]!==R&&(i.vertexAttribDivisor(y,R),G[y]=R)}function S(){const y=r.newAttributes,R=r.enabledAttributes;for(let N=0,D=R.length;N<D;N++)R[N]!==y[N]&&(i.disableVertexAttribArray(N),R[N]=0)}function M(y,R,N,D,G,q,X){X===!0?i.vertexAttribIPointer(y,R,N,G,q):i.vertexAttribPointer(y,R,N,D,G,q)}function v(y,R,N,D){_();const G=D.attributes,q=N.getAttributes(),X=R.defaultAttributeValues;for(const Y in q){const z=q[Y];if(z.location>=0){let nt=G[Y];if(nt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const ht=nt.normalized,lt=nt.itemSize,Lt=t.get(nt);if(Lt===void 0)continue;const Gt=Lt.buffer,$=Lt.type,rt=Lt.bytesPerElement,Q=$===i.INT||$===i.UNSIGNED_INT||nt.gpuType===ul;if(nt.isInterleavedBufferAttribute){const K=nt.data,pt=K.stride,xt=nt.offset;if(K.isInstancedInterleavedBuffer){for(let Pt=0;Pt<z.locationSize;Pt++)p(z.location+Pt,K.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Pt=0;Pt<z.locationSize;Pt++)m(z.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let Pt=0;Pt<z.locationSize;Pt++)M(z.location+Pt,lt/z.locationSize,$,ht,pt*rt,(xt+lt/z.locationSize*Pt)*rt,Q)}else{if(nt.isInstancedBufferAttribute){for(let K=0;K<z.locationSize;K++)p(z.location+K,nt.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let K=0;K<z.locationSize;K++)m(z.location+K);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let K=0;K<z.locationSize;K++)M(z.location+K,lt/z.locationSize,$,ht,lt*rt,lt/z.locationSize*K*rt,Q)}}else if(X!==void 0){const ht=X[Y];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(z.location,ht);break;case 3:i.vertexAttrib3fv(z.location,ht);break;case 4:i.vertexAttrib4fv(z.location,ht);break;default:i.vertexAttrib1fv(z.location,ht)}}}}S()}function C(){P();for(const y in n){const R=n[y];for(const N in R){const D=R[N];for(const G in D)u(D[G].object),delete D[G];delete R[N]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const N in R){const D=R[N];for(const G in D)u(D[G].object),delete D[G];delete R[N]}delete n[y.id]}function E(y){for(const R in n){const N=n[R];if(N[y.id]===void 0)continue;const D=N[y.id];for(const G in D)u(D[G].object),delete D[G];delete N[y.id]}}function P(){x(),o=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Bg(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function zg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==zn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Qn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==si&&!P)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:C,maxSamples:T}}function kg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ni,a=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:n,M=S*4;let v=p.clippingState||null;c.value=v,v=u(g,f,M,d);for(let C=0;C!==M;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==_;++M,v+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Vg(i){let t=new WeakMap;function e(o,a){return a===_c?o.mapping=Xs:a===vc&&(o.mapping=qs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_c||a===vc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new jp(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Jo extends gf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zs=4,Du=[.125,.215,.35,.446,.526,.582],rs=20,Ua=new Jo,Uu=new Jt;let Na=null,Fa=0,Oa=0,Ba=!1;const ss=(1+Math.sqrt(5))/2,Is=1/ss,Nu=[new I(-ss,Is,0),new I(ss,Is,0),new I(-Is,0,ss),new I(Is,0,ss),new I(0,ss,-Is),new I(0,ss,Is),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Fu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Fa,Oa),this._renderer.xr.enabled=Ba,t.scissorTest=!1,ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:js,format:zn,colorSpace:Qs,depthBuffer:!1},s=Ou(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gg(r)),this._blurMaterial=Hg(r,t,e)}return s}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,s){const a=new yn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Uu),u.toneMapping=ki,u.autoClear=!1;const d=new Xe({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new ut(new bn,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Uu),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;ho(s,S*M,p>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xs||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ho(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ua)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nu[(s-r-1)%Nu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ut(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*rs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const p=[];let S=0;for(let E=0;E<rs;++E){const P=E/_,x=Math.exp(-P*P/2);p.push(x),E===0?S+=x:E<m&&(S+=2*x)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const v=this._sizeLods[s],C=3*v*(s>M-zs?s-M+zs:0),T=4*(this._cubeSize-v);ho(e,C,T,3*v,2*v),c.setRenderTarget(e),c.render(h,Ua)}}function Gg(i){const t=[],e=[],n=[];let s=i;const r=i-zs+1+Du.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-zs?c=Du[o-i+zs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),M=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,P=T>2?0:-1,x=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];S.set(x,_*g*T),M.set(f,m*g*T);const y=[T,T,T,T,T,T];v.set(y,p*g*T)}const C=new Ye;C.setAttribute("position",new Cn(S,_)),C.setAttribute("uv",new Cn(M,m)),C.setAttribute("faceIndex",new Cn(v,p)),t.push(C),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ou(i,t,e){const n=new ai(i,t,e);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hg(i,t,e){const n=new Float32Array(rs),s=new I(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Bu(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function zu(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}function Wg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===_c||c===vc,u=c===Xs||c===qs;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Fu(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Fu(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Xg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qg(i,t,e,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let M=0,v=S.length;M<v;M+=3){const C=S[M+0],T=S[M+1],E=S[M+2];f.push(C,T,T,E,E,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let M=0,v=S.length/3-1;M<v;M+=3){const C=M+0,T=M+1,E=M+2;f.push(C,T,T,E,E,C)}}else return;const m=new(uf(f)?pf:Ml)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Yg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Zg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $g(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const E=new Float32Array(C*T*4*h),P=new ff(E,C,T,h);P.type=si,P.needsUpdate=!0;const x=v*4;for(let R=0;R<h;R++){const N=p[R],D=S[R],G=M[R],q=C*T*4*R;for(let X=0;X<N.count;X++){const Y=X*x;g===!0&&(s.fromBufferAttribute(N,X),E[q+Y+0]=s.x,E[q+Y+1]=s.y,E[q+Y+2]=s.z,E[q+Y+3]=0),_===!0&&(s.fromBufferAttribute(D,X),E[q+Y+4]=s.x,E[q+Y+5]=s.y,E[q+Y+6]=s.z,E[q+Y+7]=0),m===!0&&(s.fromBufferAttribute(G,X),E[q+Y+8]=s.x,E[q+Y+9]=s.y,E[q+Y+10]=s.z,E[q+Y+11]=G.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new at(C,T)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Jg(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class xf extends ln{constructor(t,e,n,s,r,o,a,c,l,u=Gs){if(u!==Gs&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Gs&&(n=us),n===void 0&&u===$s&&(n=Zs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Nn,this.minFilter=c!==void 0?c:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yf=new ln,ku=new xf(1,1),Mf=new ff,Sf=new Fp,bf=new _f,Vu=[],Gu=[],Hu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function nr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Vu[s];if(r===void 0&&(r=new Float32Array(s),Vu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ko(i,t){let e=Gu[t];e===void 0&&(e=new Int32Array(t),Gu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function Qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function e_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Xu.set(n),i.uniformMatrix2fv(this.addr,!1,Xu),Ke(e,n)}}function n_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Wu.set(n),i.uniformMatrix3fv(this.addr,!1,Wu),Ke(e,n)}}function i_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Hu.set(n),i.uniformMatrix4fv(this.addr,!1,Hu),Ke(e,n)}}function s_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function r_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function o_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function a_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function c_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function l_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function u_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function h_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function f_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ku.compareFunction=lf,r=ku):r=yf,e.setTexture2D(t||r,s)}function d_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sf,s)}function p_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bf,s)}function m_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mf,s)}function g_(i){switch(i){case 5126:return Kg;case 35664:return jg;case 35665:return Qg;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return c_;case 36294:return l_;case 36295:return u_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function __(i,t){i.uniform1fv(this.addr,t)}function v_(i,t){const e=nr(t,this.size,2);i.uniform2fv(this.addr,e)}function x_(i,t){const e=nr(t,this.size,3);i.uniform3fv(this.addr,e)}function y_(i,t){const e=nr(t,this.size,4);i.uniform4fv(this.addr,e)}function M_(i,t){const e=nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function S_(i,t){const e=nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function b_(i,t){const e=nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function w_(i,t){i.uniform1iv(this.addr,t)}function E_(i,t){i.uniform2iv(this.addr,t)}function T_(i,t){i.uniform3iv(this.addr,t)}function A_(i,t){i.uniform4iv(this.addr,t)}function R_(i,t){i.uniform1uiv(this.addr,t)}function C_(i,t){i.uniform2uiv(this.addr,t)}function P_(i,t){i.uniform3uiv(this.addr,t)}function I_(i,t){i.uniform4uiv(this.addr,t)}function L_(i,t,e){const n=this.cache,s=t.length,r=Ko(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yf,r[o])}function D_(i,t,e){const n=this.cache,s=t.length,r=Ko(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Sf,r[o])}function U_(i,t,e){const n=this.cache,s=t.length,r=Ko(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bf,r[o])}function N_(i,t,e){const n=this.cache,s=t.length,r=Ko(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Mf,r[o])}function F_(i){switch(i){case 5126:return __;case 35664:return v_;case 35665:return x_;case 35666:return y_;case 35674:return M_;case 35675:return S_;case 35676:return b_;case 5124:case 35670:return w_;case 35667:case 35671:return E_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return R_;case 36294:return C_;case 36295:return P_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return N_}}class O_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=g_(e.type)}}class B_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F_(e.type)}}class z_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function qu(i,t){i.seq.push(t),i.map[t.id]=t}function k_(i,t,e){const n=i.name,s=n.length;for(za.lastIndex=0;;){const r=za.exec(n),o=za.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){qu(e,l===void 0?new O_(a,i,t):new B_(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new z_(a),qu(e,h)),e=h}}}class Lo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);k_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Yu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const V_=37297;let G_=0;function H_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Zu=new se;function W_(i){_e._getMatrix(Zu,_e.workingColorSpace,i);const t=`mat3( ${Zu.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case Zo:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $u(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+H_(i.getShaderSource(t),o)}else return s}function X_(i,t){const e=W_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function q_(i,t){let e;switch(t){case Xd:e="Linear";break;case qd:e="Reinhard";break;case Yd:e="Cineon";break;case Zd:e="ACESFilmic";break;case Jd:e="AgX";break;case Kd:e="Neutral";break;case $d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fo=new I;function Y_(){_e.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function $_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Sr(i){return i!==""}function Ju(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ku(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const K_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(i){return i.replace(K_,Q_)}const j_=new Map;function Q_(i,t){let e=ce[t];if(e===void 0){const n=j_.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zc(e)}const tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(i){return i.replace(tv,ev)}function ev(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function nv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xi&&(t="SHADOWMAP_TYPE_VSM"),t}function iv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case qs:t="ENVMAP_TYPE_CUBE";break;case Yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function rv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $h:t="ENVMAP_BLENDING_MULTIPLY";break;case Hd:t="ENVMAP_BLENDING_MIX";break;case Wd:t="ENVMAP_BLENDING_ADD";break}return t}function ov(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function av(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=nv(e),l=iv(e),u=sv(e),h=rv(e),f=ov(e),d=Z_(e),g=$_(r),_=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?ce.tonemapping_pars_fragment:"",e.toneMapping!==ki?q_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,X_("linearToOutputTexel",e.outputColorSpace),Y_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),o=Zc(o),o=Ju(o,e),o=Ku(o,e),a=Zc(a),a=Ju(a,e),a=Ku(a,e),o=ju(o),a=ju(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+o,v=S+p+a,C=Yu(s,s.VERTEX_SHADER,M),T=Yu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,C),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(R){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(C).trim(),G=s.getShaderInfoLog(T).trim();let q=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,T);else{const Y=$u(s,C,"vertex"),z=$u(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+Y+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||G==="")&&(X=!1);X&&(R.diagnostics={runnable:q,programLog:N,vertexShader:{log:D,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(C),s.deleteShader(T),P=new Lo(s,_),x=J_(s,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,V_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let cv=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new uv(t),e.set(t,n)),n}}class uv{constructor(t){this.id=cv++,this.code=t,this.usedTimes=0}}function hv(i,t,e,n,s,r,o){const a=new yl,c=new lv,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,R,N,D){const G=N.fog,q=D.geometry,X=x.isMeshStandardMaterial?N.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||X),z=Y&&Y.mapping===Yo?Y.image.height:null,nt=g[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=ht!==void 0?ht.length:0;let Lt=0;q.morphAttributes.position!==void 0&&(Lt=1),q.morphAttributes.normal!==void 0&&(Lt=2),q.morphAttributes.color!==void 0&&(Lt=3);let Gt,$,rt,Q;if(nt){const pe=ii[nt];Gt=pe.vertexShader,$=pe.fragmentShader}else Gt=x.vertexShader,$=x.fragmentShader,c.update(x),rt=c.getVertexShaderID(x),Q=c.getFragmentShaderID(x);const K=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),xt=D.isInstancedMesh===!0,Pt=D.isBatchedMesh===!0,ee=!!x.map,it=!!x.matcap,gt=!!Y,L=!!x.aoMap,Nt=!!x.lightMap,ft=!!x.bumpMap,It=!!x.normalMap,vt=!!x.displacementMap,Wt=!!x.emissiveMap,Et=!!x.metalnessMap,A=!!x.roughnessMap,b=x.anisotropy>0,V=x.clearcoat>0,tt=x.dispersion>0,ot=x.iridescence>0,et=x.sheen>0,Ft=x.transmission>0,yt=b&&!!x.anisotropyMap,At=V&&!!x.clearcoatMap,re=V&&!!x.clearcoatNormalMap,dt=V&&!!x.clearcoatRoughnessMap,Dt=ot&&!!x.iridescenceMap,kt=ot&&!!x.iridescenceThicknessMap,Vt=et&&!!x.sheenColorMap,Ut=et&&!!x.sheenRoughnessMap,ue=!!x.specularMap,Qt=!!x.specularColorMap,Ee=!!x.specularIntensityMap,F=Ft&&!!x.transmissionMap,Mt=Ft&&!!x.thicknessMap,j=!!x.gradientMap,st=!!x.alphaMap,Tt=x.alphaTest>0,wt=!!x.alphaHash,Kt=!!x.extensions;let Ie=ki;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const ve={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:Gt,fragmentShader:$,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Pt,batchingColor:Pt&&D._colorsTexture!==null,instancing:xt,instancingColor:xt&&D.instanceColor!==null,instancingMorph:xt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Qs,alphaToCoverage:!!x.alphaToCoverage,map:ee,matcap:it,envMap:gt,envMapMode:gt&&Y.mapping,envMapCubeUVHeight:z,aoMap:L,lightMap:Nt,bumpMap:ft,normalMap:It,displacementMap:f&&vt,emissiveMap:Wt,normalMapObjectSpace:It&&x.normalMapType===sp,normalMapTangentSpace:It&&x.normalMapType===cf,metalnessMap:Et,roughnessMap:A,anisotropy:b,anisotropyMap:yt,clearcoat:V,clearcoatMap:At,clearcoatNormalMap:re,clearcoatRoughnessMap:dt,dispersion:tt,iridescence:ot,iridescenceMap:Dt,iridescenceThicknessMap:kt,sheen:et,sheenColorMap:Vt,sheenRoughnessMap:Ut,specularMap:ue,specularColorMap:Qt,specularIntensityMap:Ee,transmission:Ft,transmissionMap:F,thicknessMap:Mt,gradientMap:j,opaque:x.transparent===!1&&x.blending===Vs&&x.alphaToCoverage===!1,alphaMap:st,alphaTest:Tt,alphaHash:wt,combine:x.combine,mapUv:ee&&_(x.map.channel),aoMapUv:L&&_(x.aoMap.channel),lightMapUv:Nt&&_(x.lightMap.channel),bumpMapUv:ft&&_(x.bumpMap.channel),normalMapUv:It&&_(x.normalMap.channel),displacementMapUv:vt&&_(x.displacementMap.channel),emissiveMapUv:Wt&&_(x.emissiveMap.channel),metalnessMapUv:Et&&_(x.metalnessMap.channel),roughnessMapUv:A&&_(x.roughnessMap.channel),anisotropyMapUv:yt&&_(x.anisotropyMap.channel),clearcoatMapUv:At&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(x.sheenRoughnessMap.channel),specularMapUv:ue&&_(x.specularMap.channel),specularColorMapUv:Qt&&_(x.specularColorMap.channel),specularIntensityMapUv:Ee&&_(x.specularIntensityMap.channel),transmissionMapUv:F&&_(x.transmissionMap.channel),thicknessMapUv:Mt&&_(x.thicknessMap.channel),alphaMapUv:st&&_(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(It||b),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!q.attributes.uv&&(ee||st),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:pt,skinning:D.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Lt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ee&&x.map.isVideoTexture===!0&&_e.getTransfer(x.map.colorSpace)===Ue,decodeVideoTextureEmissive:Wt&&x.emissiveMap.isVideoTexture===!0&&_e.getTransfer(x.emissiveMap.colorSpace)===Ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ge,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Kt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&x.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)y.push(R),y.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(S(y,x),M(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const y=g[x.type];let R;if(y){const N=ii[y];R=Zp.clone(N.uniforms)}else R=x.uniforms;return R}function C(x,y){let R;for(let N=0,D=u.length;N<D;N++){const G=u[N];if(G.cacheKey===y){R=G,++R.usedTimes;break}}return R===void 0&&(R=new av(i,y,x,r),u.push(R)),R}function T(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function E(x){c.remove(x)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:P}}function fv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function th(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function eh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||dv),n.length>1&&n.sort(f||th),s.length>1&&s.sort(f||th)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function pv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new eh,i.set(n,[o])):s>=r.length?(o=new eh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function mv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Jt};break;case"SpotLight":e={position:new I,direction:new I,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function gv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let _v=0;function vv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xv(i){const t=new mv,e=gv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new he,o=new he;function a(l){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,M=0,v=0,C=0,T=0,E=0;l.sort(vv);for(let x=0,y=l.length;x<y;x++){const R=l[x],N=R.color,D=R.intensity,G=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*D,h+=N.g*D,f+=N.b*D;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],D);E++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,z=e.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=R.shadow.matrix,S++}n.directional[d]=X,d++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(N).multiplyScalar(D),X.distance=G,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[_]=X;const Y=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,Y.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=Y.matrix,R.castShadow){const z=e.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=q,v++}_++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(N).multiplyScalar(D),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=X,m++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const Y=R.shadow,z=e.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=X,g++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(D),X.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==C||P.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=C,P.numLightProbes=E,n.version=_v++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const M=l[p];if(M.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function nh(i){const t=new xv(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function yv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new nh(i),t.set(s,[a])):r>=o.length?(a=new nh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Mv extends Wi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sv extends Wi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wv=`uniform sampler2D shadow_pass;
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
}`;function Ev(i,t,e){let n=new Sl;const s=new at,r=new at,o=new Me,a=new Mv({depthPacking:ip}),c=new Sv,l={},u=e.maxTextureSize,h={[Ei]:Sn,[Sn]:Ei,[Ge]:Ge},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:bv,fragmentShader:wv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let p=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),N=i.state;N.setBlending(zi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=p!==xi&&this.type===xi,G=p===xi&&this.type!==xi;for(let q=0,X=T.length;q<X;q++){const Y=T[q],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const nt=z.getFrameExtents();if(s.multiply(nt),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,z.mapSize.y=r.y)),z.map===null||D===!0||G===!0){const lt=this.type!==xi?{minFilter:Nn,magFilter:Nn}:{};z.map!==null&&z.map.dispose(),z.map=new ai(s.x,s.y,lt),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ht=z.getViewportCount();for(let lt=0;lt<ht;lt++){const Lt=z.getViewport(lt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),N.viewport(o),z.updateMatrices(Y,lt),n=z.getFrustum(),v(E,P,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===xi&&S(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,y,R)};function S(T,E){const P=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,P,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,P,d,_,null)}function M(T,E,P,x){let y=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)y=R;else if(y=P.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=y.uuid,D=E.uuid;let G=l[N];G===void 0&&(G={},l[N]=G);let q=G[D];q===void 0&&(q=y.clone(),G[D]=q,E.addEventListener("dispose",C)),y=q}if(y.visible=E.visible,y.wireframe=E.wireframe,x===xi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=P}return y}function v(T,E,P,x,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===xi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const D=t.update(T),G=T.material;if(Array.isArray(G)){const q=D.groups;for(let X=0,Y=q.length;X<Y;X++){const z=q[X],nt=G[z.materialIndex];if(nt&&nt.visible){const ht=M(T,nt,x,y);T.onBeforeShadow(i,T,E,P,D,ht,z),i.renderBufferDirect(P,null,D,ht,T,z),T.onAfterShadow(i,T,E,P,D,ht,z)}}}else if(G.visible){const q=M(T,G,x,y);T.onBeforeShadow(i,T,E,P,D,q,null),i.renderBufferDirect(P,null,D,q,T,null),T.onAfterShadow(i,T,E,P,D,q,null)}}const N=T.children;for(let D=0,G=N.length;D<G;D++)v(N[D],E,P,x,y)}function C(T){T.target.removeEventListener("dispose",C);for(const P in l){const x=l[P],y=T.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const Tv={[uc]:hc,[fc]:mc,[dc]:gc,[Ws]:pc,[hc]:uc,[mc]:fc,[gc]:dc,[pc]:Ws};function Av(i,t){function e(){let F=!1;const Mt=new Me;let j=null;const st=new Me(0,0,0,0);return{setMask:function(Tt){j!==Tt&&!F&&(i.colorMask(Tt,Tt,Tt,Tt),j=Tt)},setLocked:function(Tt){F=Tt},setClear:function(Tt,wt,Kt,Ie,ve){ve===!0&&(Tt*=Ie,wt*=Ie,Kt*=Ie),Mt.set(Tt,wt,Kt,Ie),st.equals(Mt)===!1&&(i.clearColor(Tt,wt,Kt,Ie),st.copy(Mt))},reset:function(){F=!1,j=null,st.set(-1,0,0,0)}}}function n(){let F=!1,Mt=!1,j=null,st=null,Tt=null;return{setReversed:function(wt){if(Mt!==wt){const Kt=t.get("EXT_clip_control");Mt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT);const Ie=Tt;Tt=null,this.setClear(Ie)}Mt=wt},getReversed:function(){return Mt},setTest:function(wt){wt?K(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(wt){j!==wt&&!F&&(i.depthMask(wt),j=wt)},setFunc:function(wt){if(Mt&&(wt=Tv[wt]),st!==wt){switch(wt){case uc:i.depthFunc(i.NEVER);break;case hc:i.depthFunc(i.ALWAYS);break;case fc:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case dc:i.depthFunc(i.EQUAL);break;case pc:i.depthFunc(i.GEQUAL);break;case mc:i.depthFunc(i.GREATER);break;case gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=wt}},setLocked:function(wt){F=wt},setClear:function(wt){Tt!==wt&&(Mt&&(wt=1-wt),i.clearDepth(wt),Tt=wt)},reset:function(){F=!1,j=null,st=null,Tt=null,Mt=!1}}}function s(){let F=!1,Mt=null,j=null,st=null,Tt=null,wt=null,Kt=null,Ie=null,ve=null;return{setTest:function(pe){F||(pe?K(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(pe){Mt!==pe&&!F&&(i.stencilMask(pe),Mt=pe)},setFunc:function(pe,rn,gn){(j!==pe||st!==rn||Tt!==gn)&&(i.stencilFunc(pe,rn,gn),j=pe,st=rn,Tt=gn)},setOp:function(pe,rn,gn){(wt!==pe||Kt!==rn||Ie!==gn)&&(i.stencilOp(pe,rn,gn),wt=pe,Kt=rn,Ie=gn)},setLocked:function(pe){F=pe},setClear:function(pe){ve!==pe&&(i.clearStencil(pe),ve=pe)},reset:function(){F=!1,Mt=null,j=null,st=null,Tt=null,wt=null,Kt=null,Ie=null,ve=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,M=null,v=null,C=null,T=null,E=new Jt(0,0,0),P=0,x=!1,y=null,R=null,N=null,D=null,G=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=Y>=2);let nt=null,ht={};const lt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Gt=new Me().fromArray(lt),$=new Me().fromArray(Lt);function rt(F,Mt,j,st){const Tt=new Uint8Array(4),wt=i.createTexture();i.bindTexture(F,wt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<j;Kt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(Mt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return wt}const Q={};Q[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(Ws),ft(!1),It(ou),K(i.CULL_FACE),L(zi);function K(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function pt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function xt(F,Mt){return h[F]!==Mt?(i.bindFramebuffer(F,Mt),h[F]=Mt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Pt(F,Mt){let j=d,st=!1;if(F){j=f.get(Mt),j===void 0&&(j=[],f.set(Mt,j));const Tt=F.textures;if(j.length!==Tt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Kt=Tt.length;wt<Kt;wt++)j[wt]=i.COLOR_ATTACHMENT0+wt;j.length=Tt.length,st=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,st=!0);st&&i.drawBuffers(j)}function ee(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const it={[yi]:i.FUNC_ADD,[Rd]:i.FUNC_SUBTRACT,[Zh]:i.FUNC_REVERSE_SUBTRACT};it[Cd]=i.MIN,it[Pd]=i.MAX;const gt={[Id]:i.ZERO,[ac]:i.ONE,[Ld]:i.SRC_COLOR,[cc]:i.SRC_ALPHA,[Bd]:i.SRC_ALPHA_SATURATE,[Fd]:i.DST_COLOR,[Ud]:i.DST_ALPHA,[Dd]:i.ONE_MINUS_SRC_COLOR,[lc]:i.ONE_MINUS_SRC_ALPHA,[Od]:i.ONE_MINUS_DST_COLOR,[Nd]:i.ONE_MINUS_DST_ALPHA,[zd]:i.CONSTANT_COLOR,[kd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Gd]:i.ONE_MINUS_CONSTANT_ALPHA};function L(F,Mt,j,st,Tt,wt,Kt,Ie,ve,pe){if(F===zi){_===!0&&(pt(i.BLEND),_=!1);return}if(_===!1&&(K(i.BLEND),_=!0),F!==Yh){if(F!==m||pe!==x){if((p!==yi||v!==yi)&&(i.blendEquation(i.FUNC_ADD),p=yi,v=yi),pe)switch(F){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,M=null,C=null,T=null,E.set(0,0,0),P=0,m=F,x=pe}return}Tt=Tt||Mt,wt=wt||j,Kt=Kt||st,(Mt!==p||Tt!==v)&&(i.blendEquationSeparate(it[Mt],it[Tt]),p=Mt,v=Tt),(j!==S||st!==M||wt!==C||Kt!==T)&&(i.blendFuncSeparate(gt[j],gt[st],gt[wt],gt[Kt]),S=j,M=st,C=wt,T=Kt),(Ie.equals(E)===!1||ve!==P)&&(i.blendColor(Ie.r,Ie.g,Ie.b,ve),E.copy(Ie),P=ve),m=F,x=!1}function Nt(F,Mt){F.side===Ge?pt(i.CULL_FACE):K(i.CULL_FACE);let j=F.side===Sn;Mt&&(j=!j),ft(j),F.blending===Vs&&F.transparent===!1?L(zi):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const st=F.stencilWrite;a.setTest(st),st&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Wt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function It(F){F!==Td?(K(i.CULL_FACE),F!==R&&(F===ou?i.cullFace(i.BACK):F===Ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),R=F}function vt(F){F!==N&&(X&&i.lineWidth(F),N=F)}function Wt(F,Mt,j){F?(K(i.POLYGON_OFFSET_FILL),(D!==Mt||G!==j)&&(i.polygonOffset(Mt,j),D=Mt,G=j)):pt(i.POLYGON_OFFSET_FILL)}function Et(F){F?K(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function A(F){F===void 0&&(F=i.TEXTURE0+q-1),nt!==F&&(i.activeTexture(F),nt=F)}function b(F,Mt,j){j===void 0&&(nt===null?j=i.TEXTURE0+q-1:j=nt);let st=ht[j];st===void 0&&(st={type:void 0,texture:void 0},ht[j]=st),(st.type!==F||st.texture!==Mt)&&(nt!==j&&(i.activeTexture(j),nt=j),i.bindTexture(F,Mt||Q[F]),st.type=F,st.texture=Mt)}function V(){const F=ht[nt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Vt(F){Gt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Gt.copy(F))}function Ut(F){$.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),$.copy(F))}function ue(F,Mt){let j=l.get(Mt);j===void 0&&(j=new WeakMap,l.set(Mt,j));let st=j.get(F);st===void 0&&(st=i.getUniformBlockIndex(Mt,F.name),j.set(F,st))}function Qt(F,Mt){const st=l.get(Mt).get(F);c.get(Mt)!==st&&(i.uniformBlockBinding(Mt,st,F.__bindingPointIndex),c.set(Mt,st))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},nt=null,ht={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,M=null,v=null,C=null,T=null,E=new Jt(0,0,0),P=0,x=!1,y=null,R=null,N=null,D=null,G=null,Gt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:pt,bindFramebuffer:xt,drawBuffers:Pt,useProgram:ee,setBlending:L,setMaterial:Nt,setFlipSided:ft,setCullFace:It,setLineWidth:vt,setPolygonOffset:Wt,setScissorTest:Et,activeTexture:A,bindTexture:b,unbindTexture:V,compressedTexImage2D:tt,compressedTexImage3D:ot,texImage2D:Dt,texImage3D:kt,updateUBOMapping:ue,uniformBlockBinding:Qt,texStorage2D:re,texStorage3D:dt,texSubImage2D:et,texSubImage3D:Ft,compressedTexSubImage2D:yt,compressedTexSubImage3D:At,scissor:Vt,viewport:Ut,reset:Ee}}function ih(i,t,e,n){const s=Rv(n);switch(e){case tf:return i*t;case nf:return i*t;case sf:return i*t*2;case dl:return i*t/s.components*s.byteLength;case pl:return i*t/s.components*s.byteLength;case rf:return i*t*2/s.components*s.byteLength;case ml:return i*t*2/s.components*s.byteLength;case ef:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case gl:return i*t*4/s.components*s.byteLength;case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Co:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mc:case bc:return Math.max(i,16)*Math.max(t,8)/4;case yc:case Sc:return Math.max(i,8)*Math.max(t,8)/2;case wc:case Ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Io:case Vc:case Gc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case of:case Hc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rv(i){switch(i){case Qn:case Kh:return{byteLength:1,components:1};case Rr:case jh:case js:return{byteLength:2,components:1};case hl:case fl:return{byteLength:2,components:4};case us:case ul:case si:return{byteLength:4,components:1};case Qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Cv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return d?new OffscreenCanvas(A,b):Pr("canvas")}function _(A,b,V){let tt=1;const ot=Et(A);if((ot.width>V||ot.height>V)&&(tt=V/Math.max(ot.width,ot.height)),tt<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){const et=Math.floor(tt*ot.width),Ft=Math.floor(tt*ot.height);h===void 0&&(h=g(et,Ft));const yt=b?g(et,Ft):h;return yt.width=et,yt.height=Ft,yt.getContext("2d").drawImage(A,0,0,et,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+et+"x"+Ft+")."),yt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,b,V,tt,ot=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=b;if(b===i.RED&&(V===i.FLOAT&&(et=i.R32F),V===i.HALF_FLOAT&&(et=i.R16F),V===i.UNSIGNED_BYTE&&(et=i.R8)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.R8UI),V===i.UNSIGNED_SHORT&&(et=i.R16UI),V===i.UNSIGNED_INT&&(et=i.R32UI),V===i.BYTE&&(et=i.R8I),V===i.SHORT&&(et=i.R16I),V===i.INT&&(et=i.R32I)),b===i.RG&&(V===i.FLOAT&&(et=i.RG32F),V===i.HALF_FLOAT&&(et=i.RG16F),V===i.UNSIGNED_BYTE&&(et=i.RG8)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RG8UI),V===i.UNSIGNED_SHORT&&(et=i.RG16UI),V===i.UNSIGNED_INT&&(et=i.RG32UI),V===i.BYTE&&(et=i.RG8I),V===i.SHORT&&(et=i.RG16I),V===i.INT&&(et=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RGB8UI),V===i.UNSIGNED_SHORT&&(et=i.RGB16UI),V===i.UNSIGNED_INT&&(et=i.RGB32UI),V===i.BYTE&&(et=i.RGB8I),V===i.SHORT&&(et=i.RGB16I),V===i.INT&&(et=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),V===i.UNSIGNED_INT&&(et=i.RGBA32UI),V===i.BYTE&&(et=i.RGBA8I),V===i.SHORT&&(et=i.RGBA16I),V===i.INT&&(et=i.RGBA32I)),b===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),b===i.RGBA){const Ft=ot?Zo:_e.getTransfer(tt);V===i.FLOAT&&(et=i.RGBA32F),V===i.HALF_FLOAT&&(et=i.RGBA16F),V===i.UNSIGNED_BYTE&&(et=Ft===Ue?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(A,b){let V;return A?b===null||b===us||b===Zs?V=i.DEPTH24_STENCIL8:b===si?V=i.DEPTH32F_STENCIL8:b===Rr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===us||b===Zs?V=i.DEPTH_COMPONENT24:b===si?V=i.DEPTH_COMPONENT32F:b===Rr&&(V=i.DEPTH_COMPONENT16),V}function C(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nn&&A.minFilter!==Rn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){const b=A.target;b.removeEventListener("dispose",T),P(b),b.isVideoTexture&&u.delete(b)}function E(A){const b=A.target;b.removeEventListener("dispose",E),y(b)}function P(A){const b=n.get(A);if(b.__webglInit===void 0)return;const V=A.source,tt=f.get(V);if(tt){const ot=tt[b.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&x(A),Object.keys(tt).length===0&&f.delete(V)}n.remove(A)}function x(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const V=A.source,tt=f.get(V);delete tt[b.__cacheKey],o.memory.textures--}function y(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let ot=0;ot<b.__webglFramebuffer[tt].length;ot++)i.deleteFramebuffer(b.__webglFramebuffer[tt][ot]);else i.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[tt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=A.textures;for(let tt=0,ot=V.length;tt<ot;tt++){const et=n.get(V[tt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(V[tt])}n.remove(A)}let R=0;function N(){R=0}function D(){const A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function G(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function q(A,b){const V=n.get(A);if(A.isVideoTexture&&vt(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(V,A,b);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function X(A,b){const V=n.get(A);if(A.version>0&&V.__version!==A.version){$(V,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function Y(A,b){const V=n.get(A);if(A.version>0&&V.__version!==A.version){$(V,A,b);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function z(A,b){const V=n.get(A);if(A.version>0&&V.__version!==A.version){rt(V,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}const nt={[Ys]:i.REPEAT,[as]:i.CLAMP_TO_EDGE,[xc]:i.MIRRORED_REPEAT},ht={[Nn]:i.NEAREST,[Qd]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},lt={[rp]:i.NEVER,[hp]:i.ALWAYS,[op]:i.LESS,[lf]:i.LEQUAL,[ap]:i.EQUAL,[up]:i.GEQUAL,[cp]:i.GREATER,[lp]:i.NOTEQUAL};function Lt(A,b){if(b.type===si&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Rn||b.magFilter===fa||b.magFilter===qr||b.magFilter===cs||b.minFilter===Rn||b.minFilter===fa||b.minFilter===qr||b.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,nt[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,nt[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,nt[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ht[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ht[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,lt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==qr&&b.minFilter!==cs||b.type===si&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Gt(A,b){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));const tt=b.source;let ot=f.get(tt);ot===void 0&&(ot={},f.set(tt,ot));const et=G(b);if(et!==A.__cacheKey){ot[et]===void 0&&(ot[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ot[et].usedTimes++;const Ft=ot[A.__cacheKey];Ft!==void 0&&(ot[A.__cacheKey].usedTimes--,Ft.usedTimes===0&&x(b)),A.__cacheKey=et,A.__webglTexture=ot[et].texture}return V}function $(A,b,V){let tt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=i.TEXTURE_3D);const ot=Gt(A,b),et=b.source;e.bindTexture(tt,A.__webglTexture,i.TEXTURE0+V);const Ft=n.get(et);if(et.version!==Ft.__version||ot===!0){e.activeTexture(i.TEXTURE0+V);const yt=_e.getPrimaries(_e.workingColorSpace),At=b.colorSpace===Fi?null:_e.getPrimaries(b.colorSpace),re=b.colorSpace===Fi||yt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let dt=_(b.image,!1,s.maxTextureSize);dt=Wt(b,dt);const Dt=r.convert(b.format,b.colorSpace),kt=r.convert(b.type);let Vt=M(b.internalFormat,Dt,kt,b.colorSpace,b.isVideoTexture);Lt(tt,b);let Ut;const ue=b.mipmaps,Qt=b.isVideoTexture!==!0,Ee=Ft.__version===void 0||ot===!0,F=et.dataReady,Mt=C(b,dt);if(b.isDepthTexture)Vt=v(b.format===$s,b.type),Ee&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Vt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Vt,dt.width,dt.height,0,Dt,kt,null));else if(b.isDataTexture)if(ue.length>0){Qt&&Ee&&e.texStorage2D(i.TEXTURE_2D,Mt,Vt,ue[0].width,ue[0].height);for(let j=0,st=ue.length;j<st;j++)Ut=ue[j],Qt?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Ut.width,Ut.height,Dt,kt,Ut.data):e.texImage2D(i.TEXTURE_2D,j,Vt,Ut.width,Ut.height,0,Dt,kt,Ut.data);b.generateMipmaps=!1}else Qt?(Ee&&e.texStorage2D(i.TEXTURE_2D,Mt,Vt,dt.width,dt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Dt,kt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,dt.width,dt.height,0,Dt,kt,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qt&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Vt,ue[0].width,ue[0].height,dt.depth);for(let j=0,st=ue.length;j<st;j++)if(Ut=ue[j],b.format!==zn)if(Dt!==null)if(Qt){if(F)if(b.layerUpdates.size>0){const Tt=ih(Ut.width,Ut.height,b.format,b.type);for(const wt of b.layerUpdates){const Kt=Ut.data.subarray(wt*Tt/Ut.data.BYTES_PER_ELEMENT,(wt+1)*Tt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,wt,Ut.width,Ut.height,1,Dt,Kt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ut.width,Ut.height,dt.depth,Dt,Ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Vt,Ut.width,Ut.height,dt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ut.width,Ut.height,dt.depth,Dt,kt,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Vt,Ut.width,Ut.height,dt.depth,0,Dt,kt,Ut.data)}else{Qt&&Ee&&e.texStorage2D(i.TEXTURE_2D,Mt,Vt,ue[0].width,ue[0].height);for(let j=0,st=ue.length;j<st;j++)Ut=ue[j],b.format!==zn?Dt!==null?Qt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Ut.width,Ut.height,Dt,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Vt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Ut.width,Ut.height,Dt,kt,Ut.data):e.texImage2D(i.TEXTURE_2D,j,Vt,Ut.width,Ut.height,0,Dt,kt,Ut.data)}else if(b.isDataArrayTexture)if(Qt){if(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Vt,dt.width,dt.height,dt.depth),F)if(b.layerUpdates.size>0){const j=ih(dt.width,dt.height,b.format,b.type);for(const st of b.layerUpdates){const Tt=dt.data.subarray(st*j/dt.data.BYTES_PER_ELEMENT,(st+1)*j/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,dt.width,dt.height,1,Dt,kt,Tt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Dt,kt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,dt.width,dt.height,dt.depth,0,Dt,kt,dt.data);else if(b.isData3DTexture)Qt?(Ee&&e.texStorage3D(i.TEXTURE_3D,Mt,Vt,dt.width,dt.height,dt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Dt,kt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,dt.width,dt.height,dt.depth,0,Dt,kt,dt.data);else if(b.isFramebufferTexture){if(Ee)if(Qt)e.texStorage2D(i.TEXTURE_2D,Mt,Vt,dt.width,dt.height);else{let j=dt.width,st=dt.height;for(let Tt=0;Tt<Mt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Vt,j,st,0,Dt,kt,null),j>>=1,st>>=1}}else if(ue.length>0){if(Qt&&Ee){const j=Et(ue[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Vt,j.width,j.height)}for(let j=0,st=ue.length;j<st;j++)Ut=ue[j],Qt?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Dt,kt,Ut):e.texImage2D(i.TEXTURE_2D,j,Vt,Dt,kt,Ut);b.generateMipmaps=!1}else if(Qt){if(Ee){const j=Et(dt);e.texStorage2D(i.TEXTURE_2D,Mt,Vt,j.width,j.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,kt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Vt,Dt,kt,dt);m(b)&&p(tt),Ft.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function rt(A,b,V){if(b.image.length!==6)return;const tt=Gt(A,b),ot=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const et=n.get(ot);if(ot.version!==et.__version||tt===!0){e.activeTexture(i.TEXTURE0+V);const Ft=_e.getPrimaries(_e.workingColorSpace),yt=b.colorSpace===Fi?null:_e.getPrimaries(b.colorSpace),At=b.colorSpace===Fi||Ft===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const re=b.isCompressedTexture||b.image[0].isCompressedTexture,dt=b.image[0]&&b.image[0].isDataTexture,Dt=[];for(let st=0;st<6;st++)!re&&!dt?Dt[st]=_(b.image[st],!0,s.maxCubemapSize):Dt[st]=dt?b.image[st].image:b.image[st],Dt[st]=Wt(b,Dt[st]);const kt=Dt[0],Vt=r.convert(b.format,b.colorSpace),Ut=r.convert(b.type),ue=M(b.internalFormat,Vt,Ut,b.colorSpace),Qt=b.isVideoTexture!==!0,Ee=et.__version===void 0||tt===!0,F=ot.dataReady;let Mt=C(b,kt);Lt(i.TEXTURE_CUBE_MAP,b);let j;if(re){Qt&&Ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,ue,kt.width,kt.height);for(let st=0;st<6;st++){j=Dt[st].mipmaps;for(let Tt=0;Tt<j.length;Tt++){const wt=j[Tt];b.format!==zn?Vt!==null?Qt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,0,0,wt.width,wt.height,Vt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,ue,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,0,0,wt.width,wt.height,Vt,Ut,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,ue,wt.width,wt.height,0,Vt,Ut,wt.data)}}}else{if(j=b.mipmaps,Qt&&Ee){j.length>0&&Mt++;const st=Et(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,ue,st.width,st.height)}for(let st=0;st<6;st++)if(dt){Qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt[st].width,Dt[st].height,Vt,Ut,Dt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ue,Dt[st].width,Dt[st].height,0,Vt,Ut,Dt[st].data);for(let Tt=0;Tt<j.length;Tt++){const Kt=j[Tt].image[st].image;Qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,0,0,Kt.width,Kt.height,Vt,Ut,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,ue,Kt.width,Kt.height,0,Vt,Ut,Kt.data)}}else{Qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Vt,Ut,Dt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ue,Vt,Ut,Dt[st]);for(let Tt=0;Tt<j.length;Tt++){const wt=j[Tt];Qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,0,0,Vt,Ut,wt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,ue,Vt,Ut,wt.image[st])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),et.__version=ot.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Q(A,b,V,tt,ot,et){const Ft=r.convert(V.format,V.colorSpace),yt=r.convert(V.type),At=M(V.internalFormat,Ft,yt,V.colorSpace),re=n.get(b),dt=n.get(V);if(dt.__renderTarget=b,!re.__hasExternalTextures){const Dt=Math.max(1,b.width>>et),kt=Math.max(1,b.height>>et);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,et,At,Dt,kt,b.depth,0,Ft,yt,null):e.texImage2D(ot,et,At,Dt,kt,0,Ft,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),It(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,ot,dt.__webglTexture,0,ft(b)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,ot,dt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(A,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const tt=b.depthTexture,ot=tt&&tt.isDepthTexture?tt.type:null,et=v(b.stencilBuffer,ot),Ft=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=ft(b);It(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,et,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,et,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,et,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,A)}else{const tt=b.textures;for(let ot=0;ot<tt.length;ot++){const et=tt[ot],Ft=r.convert(et.format,et.colorSpace),yt=r.convert(et.type),At=M(et.internalFormat,Ft,yt,et.colorSpace),re=ft(b);V&&It(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,At,b.width,b.height):It(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,At,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,At,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(b.depthTexture);tt.__renderTarget=b,(!tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const ot=tt.__webglTexture,et=ft(b);if(b.depthTexture.format===Gs)It(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(b.depthTexture.format===$s)It(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function xt(A){const b=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const tt=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),tt){const ot=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,tt.removeEventListener("dispose",ot)};tt.addEventListener("dispose",ot),b.__depthDisposeCallback=ot}b.__boundDepthTexture=tt}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");pt(b.__webglFramebuffer,A)}else if(V){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]===void 0)b.__webglDepthbuffer[tt]=i.createRenderbuffer(),K(b.__webglDepthbuffer[tt],A,!1);else{const ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),K(b.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(A,b,V){const tt=n.get(A);b!==void 0&&Q(tt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&xt(A)}function ee(A){const b=A.texture,V=n.get(A),tt=n.get(b);A.addEventListener("dispose",E);const ot=A.textures,et=A.isWebGLCubeRenderTarget===!0,Ft=ot.length>1;if(Ft||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=b.version,o.memory.textures++),et){V.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[yt]=[];for(let At=0;At<b.mipmaps.length;At++)V.__webglFramebuffer[yt][At]=i.createFramebuffer()}else V.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let yt=0;yt<b.mipmaps.length;yt++)V.__webglFramebuffer[yt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let yt=0,At=ot.length;yt<At;yt++){const re=n.get(ot[yt]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&It(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let yt=0;yt<ot.length;yt++){const At=ot[yt];V.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[yt]);const re=r.convert(At.format,At.colorSpace),dt=r.convert(At.type),Dt=M(At.internalFormat,re,dt,At.colorSpace,A.isXRRenderTarget===!0),kt=ft(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Dt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,V.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),K(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,b);for(let yt=0;yt<6;yt++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)Q(V.__webglFramebuffer[yt][At],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At);else Q(V.__webglFramebuffer[yt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let yt=0,At=ot.length;yt<At;yt++){const re=ot[yt],dt=n.get(re);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Lt(i.TEXTURE_2D,re),Q(V.__webglFramebuffer,A,re,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),m(re)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(yt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,tt.__webglTexture),Lt(yt,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)Q(V.__webglFramebuffer[At],A,b,i.COLOR_ATTACHMENT0,yt,At);else Q(V.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,yt,0);m(b)&&p(yt),e.unbindTexture()}A.depthBuffer&&xt(A)}function it(A){const b=A.textures;for(let V=0,tt=b.length;V<tt;V++){const ot=b[V];if(m(ot)){const et=S(A),Ft=n.get(ot).__webglTexture;e.bindTexture(et,Ft),p(et),e.unbindTexture()}}}const gt=[],L=[];function Nt(A){if(A.samples>0){if(It(A)===!1){const b=A.textures,V=A.width,tt=A.height;let ot=i.COLOR_BUFFER_BIT;const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(A),yt=b.length>1;if(yt)for(let At=0;At<b.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let At=0;At<b.length;At++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[At]);const re=n.get(b[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,V,tt,0,0,V,tt,ot,i.NEAREST),c===!0&&(gt.length=0,L.length=0,gt.push(i.COLOR_ATTACHMENT0+At),A.depthBuffer&&A.resolveDepthBuffer===!1&&(gt.push(et),L.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let At=0;At<b.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[At]);const re=n.get(b[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ft(A){return Math.min(s.maxSamples,A.samples)}function It(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function vt(A){const b=o.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Wt(A,b){const V=A.colorSpace,tt=A.format,ot=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Qs&&V!==Fi&&(_e.getTransfer(V)===Ue?(tt!==zn||ot!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Et(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=Pt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=It}function Pv(i,t){function e(n,s=Fi){let r;const o=_e.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return i.BYTE;if(n===jh)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===us)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===js)return i.HALF_FLOAT;if(n===tf)return i.ALPHA;if(n===ef)return i.RGB;if(n===zn)return i.RGBA;if(n===nf)return i.LUMINANCE;if(n===sf)return i.LUMINANCE_ALPHA;if(n===Gs)return i.DEPTH_COMPONENT;if(n===$s)return i.DEPTH_STENCIL;if(n===dl)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===rf)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===Ao||n===Ro||n===Co||n===Po)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===Mc||n===Sc||n===bc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc||n===Ec||n===Tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wc||n===Ec)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===zc||n===kc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Vc||n===Gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Io)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===of||n===Hc||n===Wc||n===Xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Iv extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xt extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lv={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uv=`
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

}`;class Nv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:Dv,fragmentShader:Uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new $e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fv extends fs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=new Nv,m=e.getContextAttributes();let p=null,S=null;const M=[],v=[],C=new at;let T=null;const E=new yn;E.viewport=new Me;const P=new yn;P.viewport=new Me;const x=[E,P],y=new Iv;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=M[$];return rt===void 0&&(rt=new ka,M[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=M[$];return rt===void 0&&(rt=new ka,M[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=M[$];return rt===void 0&&(rt=new ka,M[$]=rt),rt.getHandSpace()};function D($){const rt=v.indexOf($.inputSource);if(rt===-1)return;const Q=M[rt];Q!==void 0&&(Q.update($.inputSource,$.frame,l||o),Q.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",q);for(let $=0;$<M.length;$++){const rt=v[$];rt!==null&&(v[$]=null,M[$].disconnect(rt))}R=null,N=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,S=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",G),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ai(d.framebufferWidth,d.framebufferHeight,{format:zn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Q=null,K=null;m.depth&&(K=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?$s:Gs,Q=m.stencil?Zs:us);const pt={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new ai(f.textureWidth,f.textureHeight,{format:zn,type:Qn,depthTexture:new xf(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q($){for(let rt=0;rt<$.removed.length;rt++){const Q=$.removed[rt],K=v.indexOf(Q);K>=0&&(v[K]=null,M[K].disconnect(Q))}for(let rt=0;rt<$.added.length;rt++){const Q=$.added[rt];let K=v.indexOf(Q);if(K===-1){for(let xt=0;xt<M.length;xt++)if(xt>=v.length){v.push(Q),K=xt;break}else if(v[xt]===null){v[xt]=Q,K=xt;break}if(K===-1)break}const pt=M[K];pt&&pt.connect(Q)}}const X=new I,Y=new I;function z($,rt,Q){X.setFromMatrixPosition(rt.matrixWorld),Y.setFromMatrixPosition(Q.matrixWorld);const K=X.distanceTo(Y),pt=rt.projectionMatrix.elements,xt=Q.projectionMatrix.elements,Pt=pt[14]/(pt[10]-1),ee=pt[14]/(pt[10]+1),it=(pt[9]+1)/pt[5],gt=(pt[9]-1)/pt[5],L=(pt[8]-1)/pt[0],Nt=(xt[8]+1)/xt[0],ft=Pt*L,It=Pt*Nt,vt=K/(-L+Nt),Wt=vt*-L;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Wt),$.translateZ(vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),pt[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Et=Pt+vt,A=ee+vt,b=ft-Wt,V=It+(K-Wt),tt=it*ee/A*Et,ot=gt*ee/A*Et;$.projectionMatrix.makePerspective(b,V,tt,ot,Et,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function nt($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let rt=$.near,Q=$.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(Q=_.depthFar)),y.near=P.near=E.near=rt,y.far=P.far=E.far=Q,(R!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,N=y.far),E.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,y.layers.mask=E.layers.mask|P.layers.mask;const K=$.parent,pt=y.cameras;nt(y,K);for(let xt=0;xt<pt.length;xt++)nt(pt[xt],K);pt.length===2?z(y,E,P):y.projectionMatrix.copy(E.projectionMatrix),ht($,y,K)};function ht($,rt,Q){Q===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(Q.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Cr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let lt=null;function Lt($,rt){if(u=rt.getViewerPose(l||o),g=rt,u!==null){const Q=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let K=!1;Q.length!==y.cameras.length&&(y.cameras.length=0,K=!0);for(let xt=0;xt<Q.length;xt++){const Pt=Q[xt];let ee=null;if(d!==null)ee=d.getViewport(Pt);else{const gt=h.getViewSubImage(f,Pt);ee=gt.viewport,xt===0&&(t.setRenderTargetTextures(S,gt.colorTexture,f.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(S))}let it=x[xt];it===void 0&&(it=new yn,it.layers.enable(xt),it.viewport=new Me,x[xt]=it),it.matrix.fromArray(Pt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Pt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ee.x,ee.y,ee.width,ee.height),xt===0&&(y.matrix.copy(it.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),K===!0&&y.cameras.push(it)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const xt=h.getDepthInformation(Q[0]);xt&&xt.isValid&&xt.texture&&_.init(t,xt,s.renderState)}}for(let Q=0;Q<M.length;Q++){const K=v[Q],pt=M[Q];K!==null&&pt!==void 0&&pt.update(K,rt,l||o)}lt&&lt($,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const Gt=new vf;Gt.setAnimationLoop(Lt),this.setAnimationLoop=function($){lt=$},this.dispose=function(){}}}const ns=new ci,Ov=new he;function Bv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),M=S.envMap,v=S.envMapRotation;M&&(m.envMap.value=M,ns.copy(v),ns.x*=-1,ns.y*=-1,ns.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(ns)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const v=M.program;n.uniformBlockBinding(S,v)}function l(S,M){let v=s[S.id];v===void 0&&(g(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(S,C);const T=t.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function u(S){const M=h();S.__bindingPointIndex=M;const v=i.createBuffer(),C=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=s[S.id],v=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,E=v.length;T<E;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,y=P.length;x<y;x++){const R=P[x];if(d(R,T,x,C)===!0){const N=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let q=0;q<D.length;q++){const X=D[q],Y=_(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,N+G,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,M,v,C){const T=S.value,E=M+"_"+v;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{const P=C[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(S){const M=S.uniforms;let v=0;const C=16;for(let E=0,P=M.length;E<P;E++){const x=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,R=x.length;y<R;y++){const N=x[y],D=Array.isArray(N.value)?N.value:[N.value];for(let G=0,q=D.length;G<q;G++){const X=D[G],Y=_(X),z=v%C,nt=z%Y.boundary,ht=z+nt;v+=nt,ht!==0&&C-ht<Y.storage&&(v+=C-ht),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}const T=v%C;return T>0&&(v+=C-T),S.__size=v,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class kv{constructor(t={}){const{canvas:e=Rp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=ki,this.toneMappingExposure=1;const v=this;let C=!1,T=0,E=0,P=null,x=-1,y=null;const R=new Me,N=new Me;let D=null;const G=new Jt(0);let q=0,X=e.width,Y=e.height,z=1,nt=null,ht=null;const lt=new Me(0,0,X,Y),Lt=new Me(0,0,X,Y);let Gt=!1;const $=new Sl;let rt=!1,Q=!1;const K=new he,pt=new he,xt=new I,Pt=new Me,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function gt(){return P===null?z:1}let L=n;function Nt(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ll}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),L===null){const B="webgl2";if(L=Nt(B,w),L===null)throw Nt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ft,It,vt,Wt,Et,A,b,V,tt,ot,et,Ft,yt,At,re,dt,Dt,kt,Vt,Ut,ue,Qt,Ee,F;function Mt(){ft=new Xg(L),ft.init(),Qt=new Pv(L,ft),It=new zg(L,ft,t,Qt),vt=new Av(L,ft),It.reverseDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),Wt=new Zg(L),Et=new fv,A=new Cv(L,ft,vt,Et,It,Qt,Wt),b=new Vg(v),V=new Wg(v),tt=new e0(L),Ee=new Og(L,tt),ot=new qg(L,tt,Wt,Ee),et=new Jg(L,ot,tt,Wt),Vt=new $g(L,It,A),dt=new kg(Et),Ft=new hv(v,b,V,ft,It,Ee,dt),yt=new Bv(v,Et),At=new pv,re=new yv(ft),kt=new Fg(v,b,V,vt,et,d,c),Dt=new Ev(v,et,It),F=new zv(L,Wt,It,vt),Ut=new Bg(L,ft,Wt),ue=new Yg(L,ft,Wt),Wt.programs=Ft.programs,v.capabilities=It,v.extensions=ft,v.properties=Et,v.renderLists=At,v.shadowMap=Dt,v.state=vt,v.info=Wt}Mt();const j=new Fv(v,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(X,Y,!1))},this.getSize=function(w){return w.set(X,Y)},this.setSize=function(w,B,H=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,Y=B,e.width=Math.floor(w*z),e.height=Math.floor(B*z),H===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(X*z,Y*z).floor()},this.setDrawingBufferSize=function(w,B,H){X=w,Y=B,z=H,e.width=Math.floor(w*H),e.height=Math.floor(B*H),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(lt)},this.setViewport=function(w,B,H,W){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,B,H,W),vt.viewport(R.copy(lt).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(Lt)},this.setScissor=function(w,B,H,W){w.isVector4?Lt.set(w.x,w.y,w.z,w.w):Lt.set(w,B,H,W),vt.scissor(N.copy(Lt).multiplyScalar(z).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(w){vt.setScissorTest(Gt=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(w=!0,B=!0,H=!0){let W=0;if(w){let O=!1;if(P!==null){const mt=P.texture.format;O=mt===gl||mt===ml||mt===pl}if(O){const mt=P.texture.type,bt=mt===Qn||mt===us||mt===Rr||mt===Zs||mt===hl||mt===fl,Rt=kt.getClearColor(),Bt=kt.getClearAlpha(),Yt=Rt.r,Zt=Rt.g,Ot=Rt.b;bt?(g[0]=Yt,g[1]=Zt,g[2]=Ot,g[3]=Bt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Yt,_[1]=Zt,_[2]=Ot,_[3]=Bt,L.clearBufferiv(L.COLOR,0,_))}else W|=L.COLOR_BUFFER_BIT}B&&(W|=L.DEPTH_BUFFER_BIT),H&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),At.dispose(),re.dispose(),Et.dispose(),b.dispose(),V.dispose(),et.dispose(),Ee.dispose(),F.dispose(),Ft.dispose(),j.dispose(),j.removeEventListener("sessionstart",or),j.removeEventListener("sessionend",je),Ve.stop()};function st(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=Wt.autoReset,B=Dt.enabled,H=Dt.autoUpdate,W=Dt.needsUpdate,O=Dt.type;Mt(),Wt.autoReset=w,Dt.enabled=B,Dt.autoUpdate=H,Dt.needsUpdate=W,Dt.type=O}function wt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Kt(w){const B=w.target;B.removeEventListener("dispose",Kt),Ie(B)}function Ie(w){ve(w),Et.remove(w)}function ve(w){const B=Et.get(w).programs;B!==void 0&&(B.forEach(function(H){Ft.releaseProgram(H)}),w.isShaderMaterial&&Ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,H,W,O,mt){B===null&&(B=ee);const bt=O.isMesh&&O.matrixWorld.determinant()<0,Rt=de(w,B,H,W,O);vt.setMaterial(W,bt);let Bt=H.index,Yt=1;if(W.wireframe===!0){if(Bt=ot.getWireframeAttribute(H),Bt===void 0)return;Yt=2}const Zt=H.drawRange,Ot=H.attributes.position;let oe=Zt.start*Yt,be=(Zt.start+Zt.count)*Yt;mt!==null&&(oe=Math.max(oe,mt.start*Yt),be=Math.min(be,(mt.start+mt.count)*Yt)),Bt!==null?(oe=Math.max(oe,0),be=Math.min(be,Bt.count)):Ot!=null&&(oe=Math.max(oe,0),be=Math.min(be,Ot.count));const De=be-oe;if(De<0||De===1/0)return;Ee.setup(O,W,Rt,H,Bt);let on,ge=Ut;if(Bt!==null&&(on=tt.get(Bt),ge=ue,ge.setIndex(on)),O.isMesh)W.wireframe===!0?(vt.setLineWidth(W.wireframeLinewidth*gt()),ge.setMode(L.LINES)):ge.setMode(L.TRIANGLES);else if(O.isLine){let zt=W.linewidth;zt===void 0&&(zt=1),vt.setLineWidth(zt*gt()),O.isLineSegments?ge.setMode(L.LINES):O.isLineLoop?ge.setMode(L.LINE_LOOP):ge.setMode(L.LINE_STRIP)}else O.isPoints?ge.setMode(L.POINTS):O.isSprite&&ge.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ge.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))ge.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const zt=O._multiDrawStarts,Hn=O._multiDrawCounts,ne=O._multiDrawCount,wn=Bt?tt.get(Bt).bytesPerElement:1,Ti=Et.get(W).currentProgram.getUniforms();for(let hn=0;hn<ne;hn++)Ti.setValue(L,"_gl_DrawID",hn),ge.render(zt[hn]/wn,Hn[hn])}else if(O.isInstancedMesh)ge.renderInstances(oe,De,O.count);else if(H.isInstancedBufferGeometry){const zt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Hn=Math.min(H.instanceCount,zt);ge.renderInstances(oe,De,Hn)}else ge.render(oe,De)};function pe(w,B,H){w.transparent===!0&&w.side===Ge&&w.forceSinglePass===!1?(w.side=Sn,w.needsUpdate=!0,ms(w,B,H),w.side=Ei,w.needsUpdate=!0,ms(w,B,H),w.side=Ge):ms(w,B,H)}this.compile=function(w,B,H=null){H===null&&(H=w),p=re.get(H),p.init(B),M.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const mt=O.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){const Rt=mt[bt];pe(Rt,H,O),W.add(Rt)}else pe(mt,H,O),W.add(mt)}),M.pop(),p=null,W},this.compileAsync=function(w,B,H=null){const W=this.compile(w,B,H);return new Promise(O=>{function mt(){if(W.forEach(function(bt){Et.get(bt).currentProgram.isReady()&&W.delete(bt)}),W.size===0){O(w);return}setTimeout(mt,10)}ft.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let rn=null;function gn(w){rn&&rn(w)}function or(){Ve.stop()}function je(){Ve.start()}const Ve=new vf;Ve.setAnimationLoop(gn),typeof self!="undefined"&&Ve.setContext(self),this.setAnimationLoop=function(w){rn=w,j.setAnimationLoop(w),w===null?Ve.stop():Ve.start()},j.addEventListener("sessionstart",or),j.addEventListener("sessionend",je),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,P),p=re.get(w,M.length),p.init(B),M.push(p),pt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(pt),Q=this.localClippingEnabled,rt=dt.init(this.clippingPlanes,Q),m=At.get(w,S.length),m.init(),S.push(m),j.enabled===!0&&j.isPresenting===!0){const mt=v.xr.getDepthSensingMesh();mt!==null&&Le(mt,B,-1/0,v.sortObjects)}Le(w,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,ht),it=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,it&&kt.addToRenderList(m,w),this.info.render.frame++,rt===!0&&dt.beginShadows();const H=p.state.shadowsArray;Dt.render(H,w,B),rt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(p.setupLights(),B.isArrayCamera){const mt=B.cameras;if(O.length>0)for(let bt=0,Rt=mt.length;bt<Rt;bt++){const Bt=mt[bt];We(W,O,w,Bt)}it&&kt.render(w);for(let bt=0,Rt=mt.length;bt<Rt;bt++){const Bt=mt[bt];qi(m,w,Bt,Bt.viewport)}}else O.length>0&&We(W,O,w,B),it&&kt.render(w),qi(m,w,B);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,B),Ee.resetDefaultState(),x=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],rt===!0&&dt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Le(w,B,H,W){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){W&&Pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pt);const bt=et.update(w),Rt=w.material;Rt.visible&&m.push(w,bt,Rt,H,Pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const bt=et.update(w),Rt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pt.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(w.matrixWorld).applyMatrix4(pt)),Array.isArray(Rt)){const Bt=bt.groups;for(let Yt=0,Zt=Bt.length;Yt<Zt;Yt++){const Ot=Bt[Yt],oe=Rt[Ot.materialIndex];oe&&oe.visible&&m.push(w,bt,oe,H,Pt.z,Ot)}}else Rt.visible&&m.push(w,bt,Rt,H,Pt.z,null)}}const mt=w.children;for(let bt=0,Rt=mt.length;bt<Rt;bt++)Le(mt[bt],B,H,W)}function qi(w,B,H,W){const O=w.opaque,mt=w.transmissive,bt=w.transparent;p.setupLightsView(H),rt===!0&&dt.setGlobalState(v.clippingPlanes,H),W&&vt.viewport(R.copy(W)),O.length>0&&Yi(O,B,H),mt.length>0&&Yi(mt,B,H),bt.length>0&&Yi(bt,B,H),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function We(w,B,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ai(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?js:Qn,minFilter:cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const mt=p.state.transmissionRenderTarget[W.id],bt=W.viewport||R;mt.setSize(bt.z,bt.w);const Rt=v.getRenderTarget();v.setRenderTarget(mt),v.getClearColor(G),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),it&&kt.render(H);const Bt=v.toneMapping;v.toneMapping=ki;const Yt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),rt===!0&&dt.setGlobalState(v.clippingPlanes,W),Yi(w,H,W),A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ot=0,oe=B.length;Ot<oe;Ot++){const be=B[Ot],De=be.object,on=be.geometry,ge=be.material,zt=be.group;if(ge.side===Ge&&De.layers.test(W.layers)){const Hn=ge.side;ge.side=Sn,ge.needsUpdate=!0,ar(De,H,W,on,ge,zt),ge.side=Hn,ge.needsUpdate=!0,Zt=!0}}Zt===!0&&(A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt))}v.setRenderTarget(Rt),v.setClearColor(G,q),Yt!==void 0&&(W.viewport=Yt),v.toneMapping=Bt}function Yi(w,B,H){const W=B.isScene===!0?B.overrideMaterial:null;for(let O=0,mt=w.length;O<mt;O++){const bt=w[O],Rt=bt.object,Bt=bt.geometry,Yt=W===null?bt.material:W,Zt=bt.group;Rt.layers.test(H.layers)&&ar(Rt,B,H,Bt,Yt,Zt)}}function ar(w,B,H,W,O,mt){w.onBeforeRender(v,B,H,W,O,mt),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(v,B,H,W,w,mt),O.transparent===!0&&O.side===Ge&&O.forceSinglePass===!1?(O.side=Sn,O.needsUpdate=!0,v.renderBufferDirect(H,B,W,O,w,mt),O.side=Ei,O.needsUpdate=!0,v.renderBufferDirect(H,B,W,O,w,mt),O.side=Ge):v.renderBufferDirect(H,B,W,O,w,mt),w.onAfterRender(v,B,H,W,O,mt)}function ms(w,B,H){B.isScene!==!0&&(B=ee);const W=Et.get(w),O=p.state.lights,mt=p.state.shadowsArray,bt=O.state.version,Rt=Ft.getParameters(w,O.state,mt,B,H),Bt=Ft.getProgramCacheKey(Rt);let Yt=W.programs;W.environment=w.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(w.isMeshStandardMaterial?V:b).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Yt===void 0&&(w.addEventListener("dispose",Kt),Yt=new Map,W.programs=Yt);let Zt=Yt.get(Bt);if(Zt!==void 0){if(W.currentProgram===Zt&&W.lightsStateVersion===bt)return me(w,Rt),Zt}else Rt.uniforms=Ft.getUniforms(w),w.onBeforeCompile(Rt,v),Zt=Ft.acquireProgram(Rt,Bt),Yt.set(Bt,Zt),W.uniforms=Rt.uniforms;const Ot=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ot.clippingPlanes=dt.uniform),me(w,Rt),W.needsLights=Qe(w),W.lightsStateVersion=bt,W.needsLights&&(Ot.ambientLightColor.value=O.state.ambient,Ot.lightProbe.value=O.state.probe,Ot.directionalLights.value=O.state.directional,Ot.directionalLightShadows.value=O.state.directionalShadow,Ot.spotLights.value=O.state.spot,Ot.spotLightShadows.value=O.state.spotShadow,Ot.rectAreaLights.value=O.state.rectArea,Ot.ltc_1.value=O.state.rectAreaLTC1,Ot.ltc_2.value=O.state.rectAreaLTC2,Ot.pointLights.value=O.state.point,Ot.pointLightShadows.value=O.state.pointShadow,Ot.hemisphereLights.value=O.state.hemi,Ot.directionalShadowMap.value=O.state.directionalShadowMap,Ot.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ot.spotShadowMap.value=O.state.spotShadowMap,Ot.spotLightMatrix.value=O.state.spotLightMatrix,Ot.spotLightMap.value=O.state.spotLightMap,Ot.pointShadowMap.value=O.state.pointShadowMap,Ot.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Zt,W.uniformsList=null,Zt}function xe(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=Lo.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function me(w,B){const H=Et.get(w);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.batchingColor=B.batchingColor,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.instancingMorph=B.instancingMorph,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function de(w,B,H,W,O){B.isScene!==!0&&(B=ee),A.resetTextureUnits();const mt=B.fog,bt=W.isMeshStandardMaterial?B.environment:null,Rt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Qs,Bt=(W.isMeshStandardMaterial?V:b).get(W.envMap||bt),Yt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Zt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ot=!!H.morphAttributes.position,oe=!!H.morphAttributes.normal,be=!!H.morphAttributes.color;let De=ki;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(De=v.toneMapping);const on=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ge=on!==void 0?on.length:0,zt=Et.get(W),Hn=p.state.lights;if(rt===!0&&(Q===!0||w!==y)){const _n=w===y&&W.id===x;dt.setState(W,w,_n)}let ne=!1;W.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Hn.state.version||zt.outputColorSpace!==Rt||O.isBatchedMesh&&zt.batching===!1||!O.isBatchedMesh&&zt.batching===!0||O.isBatchedMesh&&zt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&zt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&zt.instancing===!1||!O.isInstancedMesh&&zt.instancing===!0||O.isSkinnedMesh&&zt.skinning===!1||!O.isSkinnedMesh&&zt.skinning===!0||O.isInstancedMesh&&zt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&zt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&zt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&zt.instancingMorph===!1&&O.morphTexture!==null||zt.envMap!==Bt||W.fog===!0&&zt.fog!==mt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==dt.numPlanes||zt.numIntersection!==dt.numIntersection)||zt.vertexAlphas!==Yt||zt.vertexTangents!==Zt||zt.morphTargets!==Ot||zt.morphNormals!==oe||zt.morphColors!==be||zt.toneMapping!==De||zt.morphTargetsCount!==ge)&&(ne=!0):(ne=!0,zt.__version=W.version);let wn=zt.currentProgram;ne===!0&&(wn=ms(W,B,O));let Ti=!1,hn=!1,Zi=!1;const Ne=wn.getUniforms(),En=zt.uniforms;if(vt.useProgram(wn.program)&&(Ti=!0,hn=!0,Zi=!0),W.id!==x&&(x=W.id,hn=!0),Ti||y!==w){vt.buffers.depth.getReversed()?(K.copy(w.projectionMatrix),Pp(K),Ip(K),Ne.setValue(L,"projectionMatrix",K)):Ne.setValue(L,"projectionMatrix",w.projectionMatrix),Ne.setValue(L,"viewMatrix",w.matrixWorldInverse);const ti=Ne.map.cameraPosition;ti!==void 0&&ti.setValue(L,xt.setFromMatrixPosition(w.matrixWorld)),It.logarithmicDepthBuffer&&Ne.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ne.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,hn=!0,Zi=!0)}if(O.isSkinnedMesh){Ne.setOptional(L,O,"bindMatrix"),Ne.setOptional(L,O,"bindMatrixInverse");const _n=O.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ne.setValue(L,"boneTexture",_n.boneTexture,A))}O.isBatchedMesh&&(Ne.setOptional(L,O,"batchingTexture"),Ne.setValue(L,"batchingTexture",O._matricesTexture,A),Ne.setOptional(L,O,"batchingIdTexture"),Ne.setValue(L,"batchingIdTexture",O._indirectTexture,A),Ne.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Ne.setValue(L,"batchingColorTexture",O._colorsTexture,A));const fi=H.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&Vt.update(O,H,wn),(hn||zt.receiveShadow!==O.receiveShadow)&&(zt.receiveShadow=O.receiveShadow,Ne.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(En.envMap.value=Bt,En.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(En.envMapIntensity.value=B.environmentIntensity),hn&&(Ne.setValue(L,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&ye(En,Zi),mt&&W.fog===!0&&yt.refreshFogUniforms(En,mt),yt.refreshMaterialUniforms(En,W,z,Y,p.state.transmissionRenderTarget[w.id]),Lo.upload(L,xe(zt),En,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Lo.upload(L,xe(zt),En,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ne.setValue(L,"center",O.center),Ne.setValue(L,"modelViewMatrix",O.modelViewMatrix),Ne.setValue(L,"normalMatrix",O.normalMatrix),Ne.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const _n=W.uniformsGroups;for(let ti=0,fn=_n.length;ti<fn;ti++){const kr=_n[ti];F.update(kr,wn),F.bind(kr,wn)}}return wn}function ye(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Qe(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,B,H){Et.get(w.texture).__webglTexture=B,Et.get(w.depthTexture).__webglTexture=H;const W=Et.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const H=Et.get(w);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,H=0){P=w,T=B,E=H;let W=!0,O=null,mt=!1,bt=!1;if(w){const Bt=Et.get(w);if(Bt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Bt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Bt.__hasExternalTextures)A.rebindTextures(w,Et.get(w.texture).__webglTexture,Et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ot=w.depthTexture;if(Bt.__boundDepthTexture!==Ot){if(Ot!==null&&Et.has(Ot)&&(w.width!==Ot.image.width||w.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Yt=w.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(bt=!0);const Zt=Et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[B])?O=Zt[B][H]:O=Zt[B],mt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?O=Et.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?O=Zt[H]:O=Zt,R.copy(w.viewport),N.copy(w.scissor),D=w.scissorTest}else R.copy(lt).multiplyScalar(z).floor(),N.copy(Lt).multiplyScalar(z).floor(),D=Gt;if(vt.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&vt.drawBuffers(w,O),vt.viewport(R),vt.scissor(N),vt.setScissorTest(D),mt){const Bt=Et.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Bt.__webglTexture,H)}else if(bt){const Bt=Et.get(w.texture),Yt=B||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bt.__webglTexture,H||0,Yt)}x=-1},this.readRenderTargetPixels=function(w,B,H,W,O,mt,bt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){vt.bindFramebuffer(L.FRAMEBUFFER,Rt);try{const Bt=w.texture,Yt=Bt.format,Zt=Bt.type;if(!It.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-W&&H>=0&&H<=w.height-O&&L.readPixels(B,H,W,O,Qt.convert(Yt),Qt.convert(Zt),mt)}finally{const Bt=P!==null?Et.get(P).__webglFramebuffer:null;vt.bindFramebuffer(L.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(w,B,H,W,O,mt,bt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){const Bt=w.texture,Yt=Bt.format,Zt=Bt.type;if(!It.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-W&&H>=0&&H<=w.height-O){vt.bindFramebuffer(L.FRAMEBUFFER,Rt);const Ot=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.bufferData(L.PIXEL_PACK_BUFFER,mt.byteLength,L.STREAM_READ),L.readPixels(B,H,W,O,Qt.convert(Yt),Qt.convert(Zt),0);const oe=P!==null?Et.get(P).__webglFramebuffer:null;vt.bindFramebuffer(L.FRAMEBUFFER,oe);const be=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Cp(L,be,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,mt),L.deleteBuffer(Ot),L.deleteSync(be),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,H=0){w.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);const W=Math.pow(2,-H),O=Math.floor(w.image.width*W),mt=Math.floor(w.image.height*W),bt=B!==null?B.x:0,Rt=B!==null?B.y:0;A.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,bt,Rt,O,mt),vt.unbindTexture()},this.copyTextureToTexture=function(w,B,H=null,W=null,O=0){w.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],B=arguments[2],O=arguments[3]||0,H=null);let mt,bt,Rt,Bt,Yt,Zt,Ot,oe,be;const De=w.isCompressedTexture?w.mipmaps[O]:w.image;H!==null?(mt=H.max.x-H.min.x,bt=H.max.y-H.min.y,Rt=H.isBox3?H.max.z-H.min.z:1,Bt=H.min.x,Yt=H.min.y,Zt=H.isBox3?H.min.z:0):(mt=De.width,bt=De.height,Rt=De.depth||1,Bt=0,Yt=0,Zt=0),W!==null?(Ot=W.x,oe=W.y,be=W.z):(Ot=0,oe=0,be=0);const on=Qt.convert(B.format),ge=Qt.convert(B.type);let zt;B.isData3DTexture?(A.setTexture3D(B,0),zt=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),zt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),zt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const Hn=L.getParameter(L.UNPACK_ROW_LENGTH),ne=L.getParameter(L.UNPACK_IMAGE_HEIGHT),wn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ti=L.getParameter(L.UNPACK_SKIP_ROWS),hn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,De.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,De.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Bt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Yt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Zt);const Zi=w.isDataArrayTexture||w.isData3DTexture,Ne=B.isDataArrayTexture||B.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const En=Et.get(w),fi=Et.get(B),_n=Et.get(En.__renderTarget),ti=Et.get(fi.__renderTarget);vt.bindFramebuffer(L.READ_FRAMEBUFFER,_n.__webglFramebuffer),vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let fn=0;fn<Rt;fn++)Zi&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.get(w).__webglTexture,O,Zt+fn),w.isDepthTexture?(Ne&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.get(B).__webglTexture,O,be+fn),L.blitFramebuffer(Bt,Yt,mt,bt,Ot,oe,mt,bt,L.DEPTH_BUFFER_BIT,L.NEAREST)):Ne?L.copyTexSubImage3D(zt,O,Ot,oe,be+fn,Bt,Yt,mt,bt):L.copyTexSubImage2D(zt,O,Ot,oe,be+fn,Bt,Yt,mt,bt);vt.bindFramebuffer(L.READ_FRAMEBUFFER,null),vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ne?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(zt,O,Ot,oe,be,mt,bt,Rt,on,ge,De.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(zt,O,Ot,oe,be,mt,bt,Rt,on,De.data):L.texSubImage3D(zt,O,Ot,oe,be,mt,bt,Rt,on,ge,De):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Ot,oe,mt,bt,on,ge,De.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Ot,oe,De.width,De.height,on,De.data):L.texSubImage2D(L.TEXTURE_2D,O,Ot,oe,mt,bt,on,ge,De);L.pixelStorei(L.UNPACK_ROW_LENGTH,Hn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ne),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ti),L.pixelStorei(L.UNPACK_SKIP_IMAGES,hn),O===0&&B.generateMipmaps&&L.generateMipmap(zt),vt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,H=null,W=null,O=0){return w.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,w=arguments[2],B=arguments[3],O=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,B,H,W,O)},this.initRenderTarget=function(w){Et.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),vt.unbindTexture()},this.resetState=function(){T=0,E=0,P=null,vt.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}}class Er extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yc,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vn=new I;class zo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new zo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Do extends Wi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ls;const pr=new I,Ds=new I,Us=new I,Ns=new at,mr=new at,wf=new he,po=new I,gr=new I,mo=new I,sh=new at,Va=new at,rh=new at;class Ga extends qe{constructor(t=new Do){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new Ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vv(e,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new zo(n,3,0,!1)),Ls.setAttribute("uv",new zo(n,2,3,!1))}this.geometry=Ls,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),wf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Us.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;go(po.set(-.5,-.5,0),Us,o,Ds,s,r),go(gr.set(.5,-.5,0),Us,o,Ds,s,r),go(mo.set(.5,.5,0),Us,o,Ds,s,r),sh.set(0,0),Va.set(1,0),rh.set(1,1);let a=t.ray.intersectTriangle(po,gr,mo,!1,pr);if(a===null&&(go(gr.set(-.5,.5,0),Us,o,Ds,s,r),Va.set(0,1),a=t.ray.intersectTriangle(po,mo,gr,!1,pr),a===null))return;const c=t.ray.origin.distanceTo(pr);c<t.near||c>t.far||e.push({distance:c,point:pr.clone(),uv:Bn.getInterpolation(pr,po,gr,mo,sh,Va,rh,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function go(i,t,e,n,s,r){Ns.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(mr.x=r*Ns.x-s*Ns.y,mr.y=s*Ns.x+r*Ns.y):mr.copy(Ns),i.copy(t),i.x+=mr.x,i.y+=mr.y,i.applyMatrix4(wf)}const oh=new I,ah=new Me,ch=new Me,Gv=new I,lh=new he,_o=new I,Ha=new er,uh=new he,Wa=new $o;class hh extends ut{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lu,this.bindMatrix=new he,this.bindMatrixInverse=new he,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new tr),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,_o),this.boundingBox.expandByPoint(_o)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new er),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,_o),this.boundingSphere.expandByPoint(_o)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ha.copy(this.boundingSphere),Ha.applyMatrix4(s),t.ray.intersectsSphere(Ha)!==!1&&(uh.copy(s).invert(),Wa.copy(t.ray).applyMatrix4(uh),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Wa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Me,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===lu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;ah.fromBufferAttribute(s.attributes.skinIndex,t),ch.fromBufferAttribute(s.attributes.skinWeight,t),oh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=ch.getComponent(r);if(o!==0){const a=ah.getComponent(r);lh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Gv.copy(oh).applyMatrix4(lh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Ef extends qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tf extends ln{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Nn,u=Nn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fh=new he,Hv=new he;class wl{constructor(t=[],e=[]){this.uuid=kn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new he)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new he;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Hv;fh.multiplyMatrices(a,e[r]),fh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new wl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Tf(e,t,t,zn,si);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ef),this.bones.push(o),this.boneInverses.push(new he().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Af extends Wi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dh=new he,$c=new $o,vo=new er,xo=new I;class Wv extends qe{constructor(t=new Ye,e=new Af){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;dh.copy(s).invert(),$c.copy(t.ray).applyMatrix4(dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);xo.fromBufferAttribute(h,m),ph(xo,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)xo.fromBufferAttribute(h,g),ph(xo,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ph(i,t,e,n,s,r,o){const a=$c.distanceSqToPoint(i);if(a<e){const c=new I;$c.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Kn extends ln{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new at:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,c=new he;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(sn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(sn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class El extends ui{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Xv extends El{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const yo=new I,Xa=new Tl,qa=new Tl,Ya=new Tl;class Rf extends ui{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(yo.subVectors(s[0],s[1]).add(s[0]),l=yo);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=yo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Xa.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),qa.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),Ya.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),qa.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ya.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Xa.calc(c),qa.calc(c),Ya.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function qv(i,t){const e=1-i;return e*e*t}function Yv(i,t){return 2*(1-i)*i*t}function Zv(i,t){return i*i*t}function Tr(i,t,e,n){return qv(i,t)+Yv(i,e)+Zv(i,n)}function $v(i,t){const e=1-i;return e*e*e*t}function Jv(i,t){const e=1-i;return 3*e*e*i*t}function Kv(i,t){return 3*(1-i)*i*i*t}function jv(i,t){return i*i*i*t}function Ar(i,t,e,n,s){return $v(i,t)+Jv(i,e)+Kv(i,n)+jv(i,s)}class Cf extends ui{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(t,s.x,r.x,o.x,a.x),Ar(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qv extends ui{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(t,s.x,r.x,o.x,a.x),Ar(t,s.y,r.y,o.y,a.y),Ar(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pf extends ui{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tx extends ui{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class If extends ui{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Tr(t,s.x,r.x,o.x),Tr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lf extends ui{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Tr(t,s.x,r.x,o.x),Tr(t,s.y,r.y,o.y),Tr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Al extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(mh(a,c.x,l.x,u.x,h.x),mh(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var ko=Object.freeze({__proto__:null,ArcCurve:Xv,CatmullRomCurve3:Rf,CubicBezierCurve:Cf,CubicBezierCurve3:Qv,EllipseCurve:El,LineCurve:Pf,LineCurve3:tx,QuadraticBezierCurve:If,QuadraticBezierCurve3:Lf,SplineCurve:Al});class ex extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ko[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ko[s.type]().fromJSON(s))}return this}}class Jc extends ex{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pf(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new If(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Cf(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Al(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new El(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Xi extends Ye{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=sn(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new I,f=new at,d=new I,g=new I,_=new I;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let S=0;S<=e;S++){const M=n+S*u*s,v=Math.sin(M),C=Math.cos(M);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*v,h.y=t[T].y,h.z=t[T].x*C,o.push(h.x,h.y,h.z),f.x=S/e,f.y=T/(t.length-1),a.push(f.x,f.y);const E=c[3*T+0]*v,P=c[3*T+1],x=c[3*T+0]*C;l.push(E,P,x)}}for(let S=0;S<e;S++)for(let M=0;M<t.length-1;M++){const v=M+S*t.length,C=v,T=v+t.length,E=v+t.length+1,P=v+1;r.push(C,T,P),r.push(E,P,T)}this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("uv",new fe(a,2)),this.setAttribute("normal",new fe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.points,t.segments,t.phiStart,t.phiLength)}}class wi extends Xi{constructor(t=1,e=1,n=4,s=8){const r=new Jc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new wi(t.radius,t.length,t.capSegments,t.radialSegments)}}class Un extends Ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,u=new at;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ae extends Ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function S(){const v=new I,C=new I;let T=0;const E=(e-t)/n;for(let P=0;P<=r;P++){const x=[],y=P/r,R=y*(e-t)+t;for(let N=0;N<=s;N++){const D=N/s,G=D*c+a,q=Math.sin(G),X=Math.cos(G);C.x=R*q,C.y=-y*n+m,C.z=R*X,h.push(C.x,C.y,C.z),v.set(q,E,X).normalize(),f.push(v.x,v.y,v.z),d.push(D,1-y),x.push(g++)}_.push(x)}for(let P=0;P<s;P++)for(let x=0;x<r;x++){const y=_[x][P],R=_[x+1][P],N=_[x+1][P+1],D=_[x][P+1];(t>0||x!==0)&&(u.push(y,R,D),T+=3),(e>0||x!==r-1)&&(u.push(R,N,D),T+=3)}l.addGroup(p,T,0),p+=T}function M(v){const C=g,T=new at,E=new I;let P=0;const x=v===!0?t:e,y=v===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const R=g;for(let N=0;N<=s;N++){const G=N/s*c+a,q=Math.cos(G),X=Math.sin(G);E.x=x*X,E.y=m*y,E.z=x*q,h.push(E.x,E.y,E.z),f.push(0,y,0),T.x=q*.5+.5,T.y=X*.5*y+.5,d.push(T.x,T.y),g++}for(let N=0;N<s;N++){const D=C+N,G=R+N;v===!0?u.push(G,G+1,D):u.push(G+1,G,D),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends Ae{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ds(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jo extends Ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new I,v=new I,C=new I;for(let T=0;T<e.length;T+=3)d(e[T+0],M),d(e[T+1],v),d(e[T+2],C),c(M,v,C,S)}function c(S,M,v,C){const T=C+1,E=[];for(let P=0;P<=T;P++){E[P]=[];const x=S.clone().lerp(v,P/T),y=M.clone().lerp(v,P/T),R=T-P;for(let N=0;N<=R;N++)N===0&&P===T?E[P][N]=x:E[P][N]=x.clone().lerp(y,N/R)}for(let P=0;P<T;P++)for(let x=0;x<2*(T-P)-1;x++){const y=Math.floor(x/2);x%2===0?(f(E[P][y+1]),f(E[P+1][y]),f(E[P][y])):(f(E[P][y+1]),f(E[P+1][y+1]),f(E[P+1][y]))}}function l(S){const M=new I;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(S),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function u(){const S=new I;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const v=m(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;o.push(v,1-C)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const M=o[S+0],v=o[S+2],C=o[S+4],T=Math.max(M,v,C),E=Math.min(M,v,C);T>.9&&E<.1&&(M<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,M){const v=S*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const S=new I,M=new I,v=new I,C=new I,T=new at,E=new at,P=new at;for(let x=0,y=0;x<r.length;x+=9,y+=6){S.set(r[x+0],r[x+1],r[x+2]),M.set(r[x+3],r[x+4],r[x+5]),v.set(r[x+6],r[x+7],r[x+8]),T.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),C.copy(S).add(M).add(v).divideScalar(3);const R=m(C);_(T,y+0,S,R),_(E,y+2,M,R),_(P,y+4,v,R)}}function _(S,M,v,C){C<0&&S.x===1&&(o[M]=S.x-1),v.x===0&&v.z===0&&(o[M]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.vertices,t.indices,t.radius,t.details)}}class Rl extends jo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rl(t.radius,t.detail)}}class Ks extends Jc{constructor(t){super(t),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Jc().fromJSON(s))}return this}}const nx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Df(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=ax(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Ir(r,o,e,a,c,d,0),o}};function Df(i,t,e,n,s){let r,o;if(s===vx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=gh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=gh(r,i[r],i[r+1],o);return o&&Qo(o,o.next)&&(Dr(o),o=o.next),o}function hs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qo(e,e.next)||He(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(i,t,e,n,s,r,o){if(!i)return;!o&&r&&fx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?sx(i,n,s,r):ix(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Dr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=rx(hs(i),t,e),Ir(i,t,e,n,s,r,2)):o===2&&ox(i,t,e,n,s,r):Ir(hs(i),t,e,n,s,r,1);break}}}function ix(i){const t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&ks(s,a,r,c,o,l,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sx(i,t,e,n){const s=i.prev,r=i,o=i.next;if(He(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=Kc(d,g,t,e,n),S=Kc(_,m,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=S;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ks(a,u,c,h,l,f,M.x,M.y)&&He(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ks(a,u,c,h,l,f,v.x,v.y)&&He(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ks(a,u,c,h,l,f,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ks(a,u,c,h,l,f,v.x,v.y)&&He(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function rx(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Qo(s,r)&&Uf(s,n,n.next,r)&&Lr(s,r)&&Lr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Dr(n),Dr(n.next),n=i=r),n=n.next}while(n!==i);return hs(n)}function ox(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mx(o,a)){let c=Nf(o,a);o=hs(o,o.next),c=hs(c,c.next),Ir(o,t,e,n,s,r,0),Ir(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ax(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Df(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(px(l));for(s.sort(cx),r=0;r<s.length;r++)e=lx(s[r],e);return e}function cx(i,t){return i.x-t.x}function lx(i,t){const e=ux(i,t);if(!e)return t;const n=Nf(e,i);return hs(n,n.next),hs(e,e.next)}function ux(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ks(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Lr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&hx(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function hx(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function fx(i,t,e,n){let s=i;do s.z===0&&(s.z=Kc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dx(s)}function dx(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Kc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function px(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ks(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function mx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gx(i,t)&&(Lr(i,t)&&Lr(t,i)&&_x(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||Qo(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qo(i,t){return i.x===t.x&&i.y===t.y}function Uf(i,t,e,n){const s=So(He(i,t,e)),r=So(He(i,t,n)),o=So(He(e,n,i)),a=So(He(e,n,t));return!!(s!==r&&o!==a||s===0&&Mo(i,e,t)||r===0&&Mo(i,n,t)||o===0&&Mo(e,i,n)||a===0&&Mo(e,t,n))}function Mo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function So(i){return i>0?1:i<0?-1:0}function gx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Uf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function _x(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nf(i,t){const e=new jc(i.i,i.x,i.y),n=new jc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function gh(i,t,e,n){const s=new jc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Vi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Vi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];_h(t),vh(n,t);let o=t.length;e.forEach(_h);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,vh(n,e[c]);const a=nx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function _h(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Cl extends Ye{constructor(t=new Ks([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:xx;let M,v=!1,C,T,E,P;p&&(M=p.getSpacedPoints(u),v=!0,f=!1,C=p.computeFrenetFrames(u,!1),T=new I,E=new I,P=new I),f||(m=0,d=0,g=0,_=0);const x=a.extractPoints(l);let y=x.shape;const R=x.holes;if(!Vi.isClockWise(y)){y=y.reverse();for(let it=0,gt=R.length;it<gt;it++){const L=R[it];Vi.isClockWise(L)&&(R[it]=L.reverse())}}const D=Vi.triangulateShape(y,R),G=y;for(let it=0,gt=R.length;it<gt;it++){const L=R[it];y=y.concat(L)}function q(it,gt,L){return gt||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(gt,L)}const X=y.length,Y=D.length;function z(it,gt,L){let Nt,ft,It;const vt=it.x-gt.x,Wt=it.y-gt.y,Et=L.x-it.x,A=L.y-it.y,b=vt*vt+Wt*Wt,V=vt*A-Wt*Et;if(Math.abs(V)>Number.EPSILON){const tt=Math.sqrt(b),ot=Math.sqrt(Et*Et+A*A),et=gt.x-Wt/tt,Ft=gt.y+vt/tt,yt=L.x-A/ot,At=L.y+Et/ot,re=((yt-et)*A-(At-Ft)*Et)/(vt*A-Wt*Et);Nt=et+vt*re-it.x,ft=Ft+Wt*re-it.y;const dt=Nt*Nt+ft*ft;if(dt<=2)return new at(Nt,ft);It=Math.sqrt(dt/2)}else{let tt=!1;vt>Number.EPSILON?Et>Number.EPSILON&&(tt=!0):vt<-Number.EPSILON?Et<-Number.EPSILON&&(tt=!0):Math.sign(Wt)===Math.sign(A)&&(tt=!0),tt?(Nt=-Wt,ft=vt,It=Math.sqrt(b)):(Nt=vt,ft=Wt,It=Math.sqrt(b/2))}return new at(Nt/It,ft/It)}const nt=[];for(let it=0,gt=G.length,L=gt-1,Nt=it+1;it<gt;it++,L++,Nt++)L===gt&&(L=0),Nt===gt&&(Nt=0),nt[it]=z(G[it],G[L],G[Nt]);const ht=[];let lt,Lt=nt.concat();for(let it=0,gt=R.length;it<gt;it++){const L=R[it];lt=[];for(let Nt=0,ft=L.length,It=ft-1,vt=Nt+1;Nt<ft;Nt++,It++,vt++)It===ft&&(It=0),vt===ft&&(vt=0),lt[Nt]=z(L[Nt],L[It],L[vt]);ht.push(lt),Lt=Lt.concat(lt)}for(let it=0;it<m;it++){const gt=it/m,L=d*Math.cos(gt*Math.PI/2),Nt=g*Math.sin(gt*Math.PI/2)+_;for(let ft=0,It=G.length;ft<It;ft++){const vt=q(G[ft],nt[ft],Nt);K(vt.x,vt.y,-L)}for(let ft=0,It=R.length;ft<It;ft++){const vt=R[ft];lt=ht[ft];for(let Wt=0,Et=vt.length;Wt<Et;Wt++){const A=q(vt[Wt],lt[Wt],Nt);K(A.x,A.y,-L)}}}const Gt=g+_;for(let it=0;it<X;it++){const gt=f?q(y[it],Lt[it],Gt):y[it];v?(E.copy(C.normals[0]).multiplyScalar(gt.x),T.copy(C.binormals[0]).multiplyScalar(gt.y),P.copy(M[0]).add(E).add(T),K(P.x,P.y,P.z)):K(gt.x,gt.y,0)}for(let it=1;it<=u;it++)for(let gt=0;gt<X;gt++){const L=f?q(y[gt],Lt[gt],Gt):y[gt];v?(E.copy(C.normals[it]).multiplyScalar(L.x),T.copy(C.binormals[it]).multiplyScalar(L.y),P.copy(M[it]).add(E).add(T),K(P.x,P.y,P.z)):K(L.x,L.y,h/u*it)}for(let it=m-1;it>=0;it--){const gt=it/m,L=d*Math.cos(gt*Math.PI/2),Nt=g*Math.sin(gt*Math.PI/2)+_;for(let ft=0,It=G.length;ft<It;ft++){const vt=q(G[ft],nt[ft],Nt);K(vt.x,vt.y,h+L)}for(let ft=0,It=R.length;ft<It;ft++){const vt=R[ft];lt=ht[ft];for(let Wt=0,Et=vt.length;Wt<Et;Wt++){const A=q(vt[Wt],lt[Wt],Nt);v?K(A.x,A.y+M[u-1].y,M[u-1].x+L):K(A.x,A.y,h+L)}}}$(),rt();function $(){const it=s.length/3;if(f){let gt=0,L=X*gt;for(let Nt=0;Nt<Y;Nt++){const ft=D[Nt];pt(ft[2]+L,ft[1]+L,ft[0]+L)}gt=u+m*2,L=X*gt;for(let Nt=0;Nt<Y;Nt++){const ft=D[Nt];pt(ft[0]+L,ft[1]+L,ft[2]+L)}}else{for(let gt=0;gt<Y;gt++){const L=D[gt];pt(L[2],L[1],L[0])}for(let gt=0;gt<Y;gt++){const L=D[gt];pt(L[0]+X*u,L[1]+X*u,L[2]+X*u)}}n.addGroup(it,s.length/3-it,0)}function rt(){const it=s.length/3;let gt=0;Q(G,gt),gt+=G.length;for(let L=0,Nt=R.length;L<Nt;L++){const ft=R[L];Q(ft,gt),gt+=ft.length}n.addGroup(it,s.length/3-it,1)}function Q(it,gt){let L=it.length;for(;--L>=0;){const Nt=L;let ft=L-1;ft<0&&(ft=it.length-1);for(let It=0,vt=u+m*2;It<vt;It++){const Wt=X*It,Et=X*(It+1),A=gt+Nt+Wt,b=gt+ft+Wt,V=gt+ft+Et,tt=gt+Nt+Et;xt(A,b,V,tt)}}}function K(it,gt,L){c.push(it),c.push(gt),c.push(L)}function pt(it,gt,L){Pt(it),Pt(gt),Pt(L);const Nt=s.length/3,ft=S.generateTopUV(n,s,Nt-3,Nt-2,Nt-1);ee(ft[0]),ee(ft[1]),ee(ft[2])}function xt(it,gt,L,Nt){Pt(it),Pt(gt),Pt(Nt),Pt(gt),Pt(L),Pt(Nt);const ft=s.length/3,It=S.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);ee(It[0]),ee(It[1]),ee(It[3]),ee(It[1]),ee(It[2]),ee(It[3])}function Pt(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function ee(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ko[s.type]().fromJSON(s)),new Cl(n,t.options)}}const xx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new at(r,o),new at(a,c),new at(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new at(o,1-c),new at(l,1-h),new at(f,1-g),new at(_,1-p)]:[new at(a,1-c),new at(u,1-h),new at(d,1-g),new at(m,1-p)]}};function yx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ta extends jo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ta(t.radius,t.detail)}}class ea extends Ye{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/s,d=new I,g=new at;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const S=p+m,M=S,v=S+n+1,C=S+n+2,T=S+1;a.push(M,v,T),a.push(v,C,T)}}this.setIndex(a),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ur extends Ye{constructor(t=new Ks([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(o,2));function l(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;Vi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];Vi.isClockWise(S)===!0&&(g[m]=S.reverse())}const _=Vi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=_.length;m<p;m++){const S=_[m],M=S[0]+h,v=S[1]+h,C=S[2]+h;n.push(M,v,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Mx(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Ur(n,t.curveSegments)}}function Mx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Be extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,f=new I,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],M=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const T=C/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-M),S.push(l++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const M=u[p][S+1],v=u[p][S],C=u[p+1][S],T=u[p+1][S+1];(p!==0||o>0)&&d.push(M,v,T),(p!==n-1||c<Math.PI)&&d.push(v,C,T)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vn extends Ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new I,h=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pl extends Ye{constructor(t=new Lf(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new at;let u=new I;const h=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function _(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),S(),p()}function m(M){u=t.getPointAt(M/e,u);const v=o.normals[M],C=o.binormals[M];for(let T=0;T<=s;T++){const E=T/s*Math.PI*2,P=Math.sin(E),x=-Math.cos(E);c.x=x*v.x+P*C.x,c.y=x*v.y+P*C.y,c.z=x*v.z+P*C.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){const C=(s+1)*(M-1)+(v-1),T=(s+1)*M+(v-1),E=(s+1)*M+v,P=(s+1)*(M-1)+v;g.push(C,T,P),g.push(T,E,P)}}function S(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)l.x=M/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Pl(new ko[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Sx extends Wi{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Ff extends Wi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Jt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}function bo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function bx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wx(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function xh(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Of(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class na{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ex extends na{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Os,endingEnd:Os}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bs:r=t,a=2*e-n;break;case Oo:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Bs:o=t,c=2*n-e;break;case Oo:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let C=0;C!==a;++C)r[C]=p*o[u+C]+S*o[l+C]+M*o[c+C]+v*o[h+C];return r}}class Bf extends na{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class Tx extends na{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class hi{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=bo(e,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:bo(t.times,Array),values:bo(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ex(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fo:e=this.InterpolantFactoryMethodDiscrete;break;case qc:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fo;case this.InterpolantFactoryMethodLinear:return qc;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&bx(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=qc;class ir extends hi{constructor(t,e,n){super(t,e,n)}}ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Fo;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class zf extends hi{}zf.prototype.ValueTypeName="color";class Vo extends hi{}Vo.prototype.ValueTypeName="number";class Ax extends na{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let u=l+a;l!==u;l+=4)oi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Br extends hi{InterpolantFactoryMethodLinear(t){return new Ax(this.times,this.values,this.getValueSize(),t)}}Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends hi{constructor(t,e,n){super(t,e,n)}}sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Fo;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Nr extends hi{}Nr.prototype.ValueTypeName="vector";class Qc{constructor(t="",e=-1,n=[],s=_l){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Cx(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(hi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=wx(c);c=xh(c,1,u),l=xh(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Vo(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Of(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){const M=f[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}s.push(new Vo(".morphTargetInfluence["+_+"]",m,p))}c=d.length*o}else{const d=".bones["+e[h].name+"]";n(Nr,d+".position",f,"pos",s),n(Br,d+".quaternion",f,"rot",s),n(Nr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vo;case"vector":case"vector2":case"vector3":case"vector4":return Nr;case"color":return zf;case"quaternion":return Br;case"bool":case"boolean":return ir;case"string":return sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Cx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Rx(i.type);if(i.times===void 0){const e=[],n=[];Of(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const yh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Px{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Ix=new Px;class Il{constructor(t){this.manager=t!==void 0?t:Ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Il.DEFAULT_MATERIAL_NAME="__DEFAULT";class Lx extends Il{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=yh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Pr("img");function c(){u(),yh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Dx extends Il{constructor(t){super(t)}load(t,e,n,s){const r=new ln,o=new Lx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ll extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ux extends Ll{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Za=new he,Mh=new I,Sh=new I;class kf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mh),Sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sh),e.updateMatrixWorld(),Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bh=new he,_r=new I,$a=new I;class Nx extends kf{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(t.matrixWorld),n.position.copy(_r),$a.copy(n.position),$a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($a),n.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),bh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh)}}class Vf extends Ll{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fx extends kf{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wh extends Ll{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Fx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ox{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){oi.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;oi.multiplyQuaternionsFlat(t,o,t,e,t,n),oi.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const Dl="\\[\\]\\.:\\/",Bx=new RegExp("["+Dl+"]","g"),Ul="[^"+Dl+"]",zx="[^"+Dl.replace("\\.","")+"]",kx=/((?:WC+[\/:])*)/.source.replace("WC",Ul),Vx=/(WCOD+)?/.source.replace("WCOD",zx),Gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ul),Hx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ul),Wx=new RegExp("^"+kx+Vx+Gx+Hx+"$"),Xx=["material","materials","bones","map"];class qx{constructor(t,e,n){const s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Pe{constructor(t,e,n){this.path=e,this.parsedPath=n||Pe.parseTrackName(e),this.node=Pe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Pe.Composite(t,e,n):new Pe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(t){const e=Wx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Xx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Pe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pe.Composite=qx;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yx{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:Os,endingEnd:Os};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=tp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case vl:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case _l:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===ep;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===af){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=Bs,s.endingEnd=Bs):(t?s.endingStart=this.zeroSlopeAtStart?Bs:Os:s.endingStart=Oo,e?s.endingEnd=this.zeroSlopeAtEnd?Bs:Os:s.endingEnd=Oo)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const Zx=new Float32Array(1);class $x extends fs{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const f=s[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}const _=e&&e._propertyBindings[h].binding.parsedPath;g=new Ox(Pe.create(n,d,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const h=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete h[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Bf(new Float32Array(2),new Float32Array(2),1,Zx),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?Qc.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=_l),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new Yx(this,o,e,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?Qc.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Eh=new he;class Th{constructor(t,e,n=0,s=1/0){this.ray=new $o(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Eh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eh),this}intersectObject(t,e=!0,n=[]){return tl(t,this,n,e),n.sort(Ah),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)tl(t[s],this,n,e);return n.sort(Ah),n}}function Ah(i,t){return i.distance-t.distance}function tl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)tl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);const zr=`
float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x){
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p *= 2.03; a *= 0.5; } return s; }
`;let is=null;function Jx(){return is||(is=new Tf(new Uint8Array([120,160,205,238,255]),5,1,dl),is.minFilter=is.magFilter=Rn,is.needsUpdate=!0,is)}function le(i,{map:t=null,grain:e=6,grainAmt:n=.12,tint:s="#9a86c4",rim:r=0,form:o=0,side:a=Ei,transparent:c=!1,opacity:l=1}={}){const u=new Ff({color:i,map:t,gradientMap:Jx(),side:a,transparent:c,opacity:l});return u.onBeforeCompile=h=>{Object.assign(h.uniforms,{uTint:{value:new Jt(s)},uGrain:{value:e},uGrainAmt:{value:n},uRim:{value:r},uRimCol:{value:new Jt("#ffb98a")},uForm:{value:o}}),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <project_vertex>",`#include <project_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP; uniform vec3 uTint; uniform float uGrain; uniform float uGrainAmt; uniform float uRim; uniform vec3 uRimCol; uniform float uForm;
${zr}`).replace("#include <dithering_fragment>",`
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
}`)},u}const Ja=new Map;function Gf(i="#7a5646",t=.008,e=12){const n=`${i}|${t}|${e}`;if(Ja.has(n))return Ja.get(n);const s=new Xe({color:i,side:Sn});return s.onBeforeCompile=r=>{r.uniforms.uThick={value:t},r.uniforms.uFreq={value:e},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uThick; uniform float uFreq;
${zr}`).replace("#include <begin_vertex>",`
#include <begin_vertex>
float wob = vnoise(position * uFreq);
transformed += normal * uThick * (0.4 + 1.2 * wob);`)},Ja.set(n,s),s}function un(i,t,e,n){const s=new ut(i.geometry,Gf(t,e,n));return s.name=`${i.name||"mesh"}-outline`,i.add(s),i}function Kx(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);e.addColorStop(0,"rgba(110,70,90,0.5)"),e.addColorStop(1,"rgba(110,70,90,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Kn(i);return n.colorSpace=Oe,n}function Hf(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#e9e2f0",t.fillRect(0,0,256,256);let e=11;const n=()=>(e=e*16807%2147483647)/2147483647;for(let r=0;r<4;r++)t.fillStyle="rgba(126, 168, 196, 0.38)",t.fillRect(r*64+14,0,26,256),t.fillStyle="rgba(240, 160, 140, 0.34)",t.fillRect(0,r*64+14,256,26);for(let r=0;r<1600;r++)t.fillStyle=`rgba(110, 80, 90, ${n()*.05})`,t.fillRect(n()*256,n()*256,1+n()*2,1);const s=new Kn(i);return s.colorSpace=Oe,s.wrapS=s.wrapT=Ys,s.anisotropy=4,s}function jx(i=20261115){let t=i>>>0;const e=()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296,n=c=>({t0:c,d:6.5+e()*3,s:.42+.58*Math.pow(e(),.8),seed:1+e()*40});let s=n(.5),r=n(s.t0+s.d*(.75+e()*.2));const o=c=>(c=Math.min(1,Math.max(0,c)),Math.pow(Math.sin(Math.PI*Math.pow(c,.7)),1.3));let a=0;return{at(c){for(;(c-s.t0)/s.d>1.12;)s=r,r=n(s.t0+s.d*(.75+e()*.2)),a++;const l=(c-s.t0)/s.d,u=(c-r.t0)/r.d;return{a:[l,s.s,s.seed],b:[u,r.s,r.seed],wash:Math.max(s.s*o(l),r.s*o(u)),count:a,period:s.d,strength:s.s}}}}const Wf=`
uniform vec3 uWA, uWB; uniform float uTime;
float wshape(float p){ p = clamp(p, 0.0, 1.0); return pow(sin(3.14159265 * pow(p, 0.7)), 1.3); }
float wreach(vec3 w, float x, float lag){
  float n = vnoise(vec3(x * 0.0045, w.z, 2.0)) - 0.5;          // 해안선을 따라 도착 시간·높이가 조금씩 다름
  return w.y * wshape(w.x - lag - n * 0.14) * (50.0 + 44.0 * n);
}
float restLine(float x){ return 690.0 + (vnoise(vec3(x * 0.006, 1.0, 0.0)) - 0.5) * 24.0 + sin(x * 0.013 + uTime * 0.4) * 4.0; }
float frontY(float x, float lag){ return restLine(x) + max(wreach(uWA, x, lag), wreach(uWB, x, lag)); }   // 최대 약 778 (마른 모래 기준선 800 미만)
`,Xf=i=>typeof window!="undefined"&&window.__ASSETS&&window.__ASSETS[i]||"./"+i,an={w:1536,h:1024,horizon:355,focusX:768},Qx=800,ke={x0:-256,w:2048,y0:640,h:512},qf=`
${zr}
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
`,ty=`
uniform sampler2D tSky; uniform vec2 uRes; uniform vec4 uView; uniform float uS, uDpr, uTime; uniform vec3 uSky;
${qf}
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
}`,ey=`
uniform sampler2D tSky, tSea, tWaves, tSand, tMap;
uniform vec2 uRes; uniform vec4 uView; uniform float uS, uDpr; uniform vec3 uSky; uniform mat4 uRefVP; uniform vec2 uMapPx;
varying vec3 vWP;
${qf}
${Wf}
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
  vec2 muv = vec2((P.x - ${ke.x0.toFixed(1)}) / ${ke.w.toFixed(1)}, (P.y - ${ke.y0.toFixed(1)}) / ${ke.h.toFixed(1)});
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
}`,ny=`
uniform sampler2D tPrev; uniform float uDt; varying vec2 vUv;
${zr}
${Wf}
void main(){
  vec2 P = vec2(${ke.x0.toFixed(1)} + vUv.x * ${ke.w.toFixed(1)}, ${ke.y0.toFixed(1)} + vUv.y * ${ke.h.toFixed(1)});
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
}`;function iy(i,{mapW:t=1024}={}){const e=new Dx;let n=4;const s={done:!1},r=Y=>{const z=e.load(Xf(`bg/${Y}.webp`),()=>{--n===0&&(s.done=!0)});return z.colorSpace=Oe,z.minFilter=Rn,z.generateMipmaps=!1,z},o=t/4,a=()=>new ai(t,o,{type:Qn,depthBuffer:!1,minFilter:Rn,magFilter:Rn});let c=a(),l=a();const u={uRes:{value:new at(1,1)},uView:{value:new Me(1,1,0,0)},uS:{value:1},uDpr:{value:1},uSky:{value:new I(0,1,0)},uTime:{value:0},uWA:{value:new I(-1,0,1)},uWB:{value:new I(-1,0,2)}},h={value:r("sky")},f=new ut(new $e(2,2),new Dn({uniforms:{tSky:h,...u},depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:ty}));f.frustumCulled=!1,f.renderOrder=-100;const d={tSky:h,tSea:{value:r("sea")},tWaves:{value:r("waves")},tSand:{value:r("sand")},tMap:{value:c.texture},uRefVP:{value:new he},uMapPx:{value:new at(1/t,1/o)},...u},g=new Ye,_=400,m=-900,p=40;g.setAttribute("position",new Cn(new Float32Array([-_,0,m,_,0,m,-_,0,p,_,0,p]),3)),g.setIndex([0,2,1,1,2,3]);const S=new ut(g,new Dn({uniforms:d,vertexShader:"varying vec3 vWP; void main(){ vWP = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vWP, 1.0); }",fragmentShader:ey}));S.frustumCulled=!1,S.renderOrder=-50;const M=new Er,v=new Jo(-1,1,1,-1,0,1),C={tPrev:{value:null},uDt:{value:.1},uTime:u.uTime,uWA:u.uWA,uWB:u.uWB},T=new ut(new $e(2,2),new Dn({uniforms:C,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:ny}));T.frustumCulled=!1,M.add(T);const E=new Er,P=new Dn({uniforms:{tStamp:{value:null},uAmt:{value:1}},depthTest:!1,depthWrite:!1,transparent:!0,side:Ge,blending:Yh,blendEquation:yi,blendSrc:ac,blendDst:ac,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4((modelMatrix * vec4(position, 1.0)).xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D tStamp; uniform float uAmt; varying vec2 vUv; void main(){ gl_FragColor = vec4(0.0, texture2D(tStamp, vUv).a * uAmt, 0.0, 0.0); }"}),x=new ut(new $e(1,1),P);x.frustumCulled=!1,E.add(x);let y=!1,R=0;function N(Y){const z=i.getRenderTarget(),nt=i.autoClear;if(!y){for(const ht of[c,l])i.setRenderTarget(ht),i.setClearColor(0,1),i.clear();y=!0}C.tPrev.value=c.texture,C.uDt.value=Y,i.setRenderTarget(l),i.render(M,v),[c,l]=[l,c],d.tMap.value=c.texture,i.setRenderTarget(z),i.autoClear=nt}function D(Y,z,nt,ht,lt,Lt=1,Gt=!1){P.blendEquation=Gt?Zh:yi;const $=new Kn(Y);$.flipY=!0,P.uniforms.tStamp.value=$,P.uniforms.uAmt.value=Lt;const rt=(z-ke.x0)/ke.w,Q=(nt-ke.y0)/ke.h;x.position.set(rt*2-1,Q*2-1,0),x.scale.set(ht/ke.w*2,-(lt/ke.h)*2,1);const K=i.getRenderTarget(),pt=i.autoClear;i.autoClear=!1,i.setRenderTarget(c),i.render(E,v),i.setRenderTarget(K),i.autoClear=pt,$.dispose()}function G(Y=ke.x0,z=ke.y0,nt=ke.w,ht=ke.h){const lt=Math.max(0,Math.floor((Y-ke.x0)/ke.w*t)),Lt=Math.max(0,Math.floor((z-ke.y0)/ke.h*o)),Gt=Math.max(1,Math.min(t-lt,Math.round(nt/ke.w*t))),$=Math.max(1,Math.min(o-Lt,Math.round(ht/ke.h*o))),rt=new Uint8Array(Gt*$*4);i.readRenderTargetPixels(c,lt,Lt,Gt,$,rt);let Q=0,K=0;for(let xt=0;xt<rt.length;xt+=4)Q+=rt[xt],K+=rt[xt+1];const pt=Gt*$*255;return[Q/pt,K/pt]}function q(Y,z,nt){const ht=Y/z<1;let lt,Lt,Gt,$=0;if(ht)lt=z/an.h,Lt=Y/2-an.focusX*lt,Gt=0;else{lt=Math.max(Y/an.w,z/an.h);const rt=z/lt,Q=Math.max(0,Qx-.93*rt),K=Math.min(an.h-rt,200,an.horizon-.12*rt);$=Math.min(an.h-rt,Math.max(Q,Math.min(K,an.horizon-.2*rt))),Lt=(Y-an.w*lt)/2,Gt=-$*lt}return u.uRes.value.set(Math.round(Y*nt),Math.round(z*nt)),u.uView.value.set(Y,z,Lt,Gt),u.uS.value=lt,u.uDpr.value=nt,{portrait:ht,scale:lt,tx:Lt,ty:Gt,horizonFrac:(Gt+an.horizon*lt)/z,w:Y,h:z,stageTop:-Gt/lt,stageBottom:(z-Gt)/lt}}function X(Y,z,nt,ht=1){u.uTime.value=Y,u.uWA.value.fromArray(nt.a),u.uWB.value.fromArray(nt.b),R+=z;let lt=0;for(;R>=.1&&lt<3*ht;)N(.1),R-=.1,lt++;R>.3*ht&&(R=0)}return{sky:f,ground:S,layout:q,update:X,stamp:D,readMap:G,ready:s,shared:u,setRef:Y=>d.uRefVP.value.copy(Y),setSky:(Y,z)=>u.uSky.value.set(Y,z,0),mapSize:[t,o]}}const Rh="#7a5646",Yf={strawHat:{slot:"head",label:"밀짚모자",build(){const i=new Xt;i.name="item:strawHat";const t=le("#ecd096",{grain:30,grainAmt:.22,tint:"#b49ac0",rim:.35}),e=new ut(new Ae(.25,.27,.02,40),t);e.position.y=-.035,e.castShadow=!0,un(e,Rh,.006,20);const n=e.geometry.attributes.position;for(let o=0;o<n.count;o++){const a=Math.hypot(n.getX(o),n.getZ(o));a>.2&&n.setY(o,n.getY(o)-(a-.2)*.35)}e.geometry.computeVertexNormals();const s=new ut(new Be(.15,32,16,0,Math.PI*2,0,Math.PI/2),t);s.scale.set(1,.72,.95),s.position.y=-.03,s.castShadow=!0,un(s,Rh,.006,20);const r=new ut(new Ae(.152,.152,.032,40,1,!0),le("#ec8f7c",{grain:12,side:Ge}));return r.position.y=-.012,r.scale.z=.95,i.add(e,s,r),i.rotation.z=.12,i.scale.setScalar(1.35),i}},glasses:{slot:"face",label:"안경",build(){const i=new Xt;i.name="item:glasses";const t=le("#8a5a46",{grain:8,rim:.2}),e=new Xe({color:"#cfe6ee",transparent:!0,opacity:.22,depthWrite:!1});for(const s of[-1,1]){const r=new ut(new Vn(.052,.008,10,36),t);r.position.set(s*.092,0,-.012),r.scale.y=.92,i.add(r);const o=new ut(new Un(.052,28),e);o.position.set(s*.092,0,-.012),o.rotation.y=Math.PI,i.add(o);const a=new ut(new Ae(.005,.005,.17,6),t);a.rotation.x=Math.PI/2,a.position.set(s*.146,0,.07),i.add(a)}const n=new ut(new Ae(.0055,.0055,.06,6),t);return n.rotation.z=Math.PI/2,n.position.set(0,.012,-.014),i.add(n),i}}},sy="#f6db8c",Nl="#7c573f",ry=[[0,0],[.17,.01],[.27,.05],[.325,.14],[.34,.26],[.33,.38],[.3,.49],[.272,.58],[.262,.65],[.266,.73],[.258,.81],[.232,.89],[.18,.96],[.1,1.01],[0,1.03]];function oy(){const t=new Al(ry.map(([a,c])=>new at(a,c))).getPoints(48).map(a=>new at(Math.max(0,a.x),a.y));t[0].x=0,t[t.length-1].x=0;const e=new Xi(t,48);e.scale(1,1,.9);const n=e.attributes.position,s=[],r=[],o=(a,c,l)=>{const u=Math.min(1,Math.max(0,(l-a)/(c-a)));return u*u*(3-2*u)};for(let a=0;a<n.count;a++){const c=n.getY(a),l=o(.58,.74,c),u=o(.28,.5,c),h=u-l,f=1-u;s.push(0,1,2,0),r.push(f,h,l,0)}return e.setAttribute("skinIndex",new Ml(s,4)),e.setAttribute("skinWeight",new fe(r,4)),e}function On(i,t,e,{outline:n=!0,shadow:s=!0}={}){const r=new ut(i,t);return r.name=e,r.castShadow=s,n&&un(r,Nl,.006,16),r}function ay(){const n=[[.338,.29],[.355,.26],[.358,.2],[.362,.13],[.385,.06],[.44,.022],[.52,.01],[.585,.008]],s=c=>{const l=c*(n.length-1),u=Math.min(n.length-2,Math.floor(l)),h=l-u;return[n[u][0]+(n[u+1][0]-n[u][0])*h,n[u][1]+(n[u+1][1]-n[u][1])*h]},r=new $e(1,1,40,18),o=r.attributes.position,a=r.attributes.uv;for(let c=0;c<o.count;c++){const l=a.getX(c),u=1-a.getY(c),h=(l-.5)*2*2,f=Math.abs(l-.5)*2;let[d,g]=s(u);const _=.036*Math.pow(u,1.2)*(Math.sin(h*6+.7)+.45*Math.sin(h*11+2.1));d+=_+.012*Math.sin(h*3.1),u<.12&&(d+=.018*(1-u/.12)),g+=(f*f*.02+(l-.5)*.07)*(1-u),u>.8&&(g=Math.max(.006,g+.006*Math.sin(h*9))),o.setXYZ(c,Math.sin(h)*d,g,-Math.cos(h)*d*.9)}return r.computeVertexNormals(),r}function cy(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#efe2cf",t.fillRect(0,0,256,256);let e=3;const n=()=>(e=e*16807%2147483647)/2147483647;for(let r=0;r<1400;r++){const o=n()*256,a=n()*256,c=2+n()*4,l=t.createRadialGradient(o-1,a-1,0,o,a,c);l.addColorStop(0,"rgba(255,250,240,.9)"),l.addColorStop(.7,"rgba(236,220,198,.5)"),l.addColorStop(1,"rgba(180,150,120,0)"),t.fillStyle=l,t.beginPath(),t.arc(o,a,c,0,6.3),t.fill()}for(let r=0;r<6;r++)t.fillStyle="rgba(176,120,96,.10)",t.fillRect(0,r*44+10,256,12),t.fillRect(r*44+10,0,12,256);const s=new Kn(i);return s.colorSpace=Oe,s.wrapS=s.wrapT=Ys,s.repeat.set(3,2),s}function ly(){const i=new Xt;i.name="shawl";const t=le("#ffffff",{map:cy(),grain:30,grainAmt:.18,tint:"#a08ac8",rim:.35,side:Ge}),e=[[.27,.225],[.33,.175],[.385,.09],[.41,-.02],[.425,-.14],[.43,-.26]],n=d=>{const g=d*(e.length-1),_=Math.min(e.length-2,Math.floor(g)),m=g-_;return[e[_][0]+(e[_+1][0]-e[_][0])*m,e[_][1]+(e[_+1][1]-e[_][1])*m]},s=2,r=(d,g)=>{const _=(d-.5)*2*s;let[m,p]=n(g);m+=.012*Math.sin(_*7)*g*g+.01+.028*Math.pow(Math.sin(_*3.2),2)*Math.pow(Math.sin(g*Math.PI*2.2+.4),2);const S=Math.abs(d-.5)*2;return p-=S*S*.05*g,new I(Math.sin(_)*m,p,Math.cos(_)*m*.9)},o=48,a=16,c=new $e(1,1,o,a),l=c.attributes.position,u=c.attributes.uv;for(let d=0;d<l.count;d++){const g=r(u.getX(d),1-u.getY(d));l.setXYZ(d,g.x,g.y,g.z)}c.computeVertexNormals();const h=new ut(c,t);h.castShadow=!0,i.add(h);const f=(d,g)=>{const _=new ut(new Pl(new Rf(d),d.length*6,g,8,!1),t);_.castShadow=!0,un(_,Nl,.005,14),i.add(_)};f(Array.from({length:13},(d,g)=>r(g/12,0).add(new I(0,.015,0))),.058);for(const d of[0,1])f(Array.from({length:8},(g,_)=>r(d,_/7)),.038);return f(Array.from({length:13},(d,g)=>r(g/12,1)),.036),i}function uy(){const i=new Xt;i.name="seal";const t=le(sy,{grain:6,grainAmt:.22,tint:"#c4a0b0",rim:.45,form:1}),e=le("#fbecc4",{grain:9,grainAmt:.1,tint:"#c4a0b0",rim:.3,form:.6}),n=new Xe({color:"#3d2c25"}),s=(Q,K,pt,xt,Pt)=>{const ee=new Ef;return ee.name=Q,ee.position.set(K,pt,xt),Pt&&Pt.add(ee),ee},r=s("root",0,0,0),o=s("spine",0,.42,0,r),a=s("head",0,.24,0,o),c=s("armL",-.255,.05,-.05,o),l=s("armR",.255,.05,-.05,o),u=s("footL",-.12,.07,-.22,r),h=s("footR",.12,.07,-.22,r),f=s("book",0,.03,-.37,o);f.scale.setScalar(1.75),a.rotation.x=-.26,f.rotation.x=-1.05;const d=oy(),g=new hh(d,t);g.name="body",g.castShadow=!0,g.add(r);const _=new wl([r,o,a,c,l,u,h,f]);g.bind(_);const m=new hh(d,Gf(Nl,.0045,14));m.name="body-outline",g.add(m),m.bind(_,g.bindMatrix),i.add(g);const p=new Be(.021,14,10);for(const Q of[-1,1]){const K=new ut(p,n);K.name=Q<0?"eyeL":"eyeR",K.position.set(Q*.092,.17,-.212),K.scale.set(1,1.15,.6),a.add(K);const pt=new ut(new Un(.034,18),new Xe({color:"#f2a0a0",transparent:!0,opacity:.45,depthWrite:!1}));pt.position.set(Q*.15,.11,-.195),pt.rotation.y=Math.PI+Q*-.62,pt.scale.y=.7,a.add(pt);const xt=On(new Be(.048,18,12),e,Q<0?"muzzleL":"muzzleR",{outline:!1});xt.position.set(Q*.038,.095,-.222),xt.scale.set(1,.85,.7),a.add(xt)}const S=new ut(new Be(.02,12,8),n);S.name="nose",S.position.set(0,.125,-.252),S.scale.set(1.3,.85,.8),a.add(S);const M=On(new Be(.2,24,16),e,"belly",{outline:!1});M.position.set(0,-.12,-.215),M.scale.set(1.05,1.3,.35),o.add(M);const v=new Be(.07,18,12);for(const[Q,K]of[[c,-1],[l,1]]){const pt=On(v,t,`${Q.name}-flipper`);pt.scale.set(.8,1.7,.62),pt.position.set(0,-.09,0),Q.add(pt),Q.rotation.set(1.45,0,K*.3)}const C=new Be(.07,18,12);for(const[Q,K]of[[u,-1],[h,1]]){const pt=On(C,t,`${Q.name}-flipper`);pt.scale.set(.9,.55,1.5),pt.position.set(0,0,-.06),Q.add(pt),Q.rotation.set(.15,K*.25,0)}const T=le("#f8efdc",{grain:14,tint:"#b6a6cf",rim:.2}),E=le("#6286a8",{grain:10});for(const Q of[-1,1]){const K=new Xt,pt=On(new bn(.15,.2,.024),T,"pages");pt.position.x=Q*.08;const xt=new ut(new bn(.16,.21,.007),E);xt.position.set(Q*.082,0,-.016),xt.castShadow=!0,K.add(pt,xt),K.rotation.y=Q*-.4,f.add(K)}const P=(Q,K,pt,xt,Pt,ee=0)=>{const it=new qe;return it.name=`slot:${Q}`,it.position.set(pt,xt,Pt),it.rotation.x=ee,K.add(it),it},x={head:P("head",a,0,.345,0,.08),face:P("face",a,0,.17,-.22),neck:P("neck",o,0,.2,0),back:P("back",o,0,0,.27),hand:P("hand",f,0,0,0)},y=new Vn(.024,.0062,6,16,Math.PI),R=[-1,1].map(Q=>{const K=new ut(y,n);return K.name=Q<0?"lidL":"lidR",K.position.set(Q*.092,.162,-.216),K.rotation.y=Math.PI,K.visible=!1,a.add(K),K}),N=new Xt;N.name="mug";{const Q=On(new Ae(.05,.043,.095,18),le("#fbf3e6",{grain:30}),"mug-cup");N.add(Q);const K=new ut(new Ae(.0515,.048,.026,18,1,!0),le("#6fb0c6",{grain:20}));N.add(K);const pt=On(new Vn(.026,.008,6,12,Math.PI),le("#fbf3e6"),"mug-handle");pt.position.x=.05,pt.rotation.z=-Math.PI/2,N.add(pt);const xt=new ut(new Un(.045,16),new Xe({color:"#9a6240"}));xt.rotation.x=-Math.PI/2,xt.position.y=.042,N.add(xt)}N.position.set(0,-.2,-.04),N.rotation.set(-2.3,0,0),N.visible=!1,l.add(N);const D=new Xt;D.name="leaf",D.rotation.y=-.4,f.add(D);{const Q=On(new bn(.145,.195,.004),T,"leaf-page");Q.position.set(.078,0,.015),D.add(Q)}D.visible=!1;const G=Hf();G.repeat.set(2.2,1.4);const q=new ut(ay(),le("#ffffff",{map:G,grain:5,tint:"#a08ac8",rim:.2,side:Ge}));q.name="blanket",q.castShadow=!0,q.receiveShadow=!0,q.visible=!1,r.add(q);const X=Yf.glasses.build();X.visible=!1,x.face.add(X);const Y=[a.getObjectByName("eyeL"),a.getObjectByName("eyeR")],z=ly();z.visible=!1,o.add(z);const nt=new Xt;nt.name="skewer";{const Q=On(new Ae(.008,.01,.62,6),le("#b98a5a"),"stick");Q.position.y=-.26,nt.add(Q);const K=On(new wi(.045,.2,6,12),le("#fff8ea",{grain:20}),"tteok");K.position.y=-.5,nt.add(K);for(let pt=0;pt<6;pt++){const xt=new ut(new Un(.012,8),new Xe({color:"#c9874a",transparent:!0,opacity:0})),Pt=pt*1.7;xt.position.set(Math.cos(Pt)*.046,-.43-pt%3*.06,Math.sin(Pt)*.046),xt.lookAt(xt.position.clone().multiplyScalar(2).setY(xt.position.y)),xt.name="toast",nt.add(xt)}}nt.position.set(0,-.17,-.03),nt.rotation.set(-1.05,0,.55),nt.visible=!1,l.add(nt);const ht=new Xt,lt=new Xt;a.add(ht,lt);const Lt=le("#f6b8b4",{grain:10,rim:.2});for(const Q of[-1,1]){const K=On(new Be(.075,18,12),t,"earBear");K.scale.set(1,1,.55),K.position.set(Q*.235,.285,.02),K.rotation.z=Q*-.75,K.scale.multiplyScalar(1.1),ht.add(K);const pt=new ut(new Un(.045,16),Lt);pt.position.set(Q*.235,.285,-.025),pt.rotation.set(0,Math.PI,Q*.75),ht.add(pt);const xt=On(new wi(.05,.2,6,14),t,"earBunny");xt.scale.set(1,1,.5),xt.position.set(Q*.085,.47,.03),xt.rotation.z=Q*-.22,xt.rotation.x=.12,lt.add(xt);const Pt=new ut(new wi(.028,.15,4,10),Lt);Pt.scale.set(1,1,.3),Pt.position.set(Q*.085,.47,.006),Pt.rotation.z=Q*-.22,Pt.rotation.x=.12,lt.add(Pt)}ht.visible=lt.visible=!1;const Gt={seal:{name:"노란 물범",fur:"#f6db8c",cream:"#fbecc4"},bear:{name:"곰돌이",fur:"#c99670",cream:"#f3dcc0"},bunny:{name:"하얀 토끼",fur:"#fbf4ea",cream:"#ffffff"}};let $="seal";function rt(Q){Gt[Q]||(Q="seal"),$=Q;const K=Gt[Q];return t.color.set(K.fur),e.color.set(K.cream),ht.visible=Q==="bear",lt.visible=Q==="bunny",K.name}return{group:i,body:g,skeleton:_,bones:{root:r,spine:o,head:a,armL:c,armR:l,footL:u,footR:h,book:f},slots:x,extras:{lids:R,eyes:Y,mug:N,leaf:D,blanket:q,glasses:X,shawl:z,skewer:nt},setKind:rt,get kind(){return $},KINDS:Gt}}const Ch=30,Zf=i=>i<=0?0:i>=1?1:i*i*i*(i*(i*6-15)+10),$n=(i,t,e)=>Zf((i-t)/(e-t)),Re=(i,t,e,n,s)=>$n(i,t,e)*(1-$n(i,n,s)),wo=(i,t,e=9,n=5)=>i<t?0:Math.exp(-(i-t)*n)*Math.sin((i-t)*e),vi=(i,t,e)=>Math.exp(-(((i-t)/e)**2)),vr=new oi,hy=new ci;function Zn(i,t,e){const n=Math.round(t*Ch)+1,s=Array.from({length:n},(a,c)=>c/Ch),r=[];for(const[a,c]of Object.entries(e)){const l=a.split(".").pop(),u=[];for(const h of s){const f=c(h);l==="quaternion"?(vr.setFromEuler(hy.set(f[0]||0,f[1]||0,f[2]||0)),u.push(vr.x,vr.y,vr.z,vr.w)):u.push(f[0]||0,f[1]||0,f[2]||0)}r.push(l==="quaternion"?new Br(a,s,u):new Nr(a,s,u))}const o=new Qc(i,t,r);return o.blendMode=vl,o}const Fs=i=>({"book.position":t=>[0,-.11*i(t),.1*i(t)],"book.quaternion":t=>[-.45*i(t),0,.12*i(t)]}),Ka={read:{loop:!0,clip:()=>{const t=e=>.5-.5*Math.cos(e*2*Math.PI/3.6);return Zn("read",7.2,{"spine.scale":e=>[.008*t(e),.02*t(e),.012*t(e)],"head.quaternion":e=>[.03*Math.sin(e*2*Math.PI/7.2),.05*Math.sin(e*2*Math.PI/7.2+1.2),.02*Math.sin(e*2*Math.PI/7.2+.4)],"book.position":e=>[0,.005*t(e),0]})}},page:{D:1.9,show:{leaf:[.35,1.45]},cues:[[.45,"page"]],clip:()=>{const t=n=>Re(n,.05,.4,1.25,1.75),e=n=>$n(n,.4,1.2);return Zn("page",1.9,{"armR.quaternion":n=>[.25*t(n),0,-.15*t(n)-.55*e(n)*t(n)],"leaf.quaternion":n=>[0,-2.3*$n(n,.42,1.25)-.08*wo(n,1.25,14,7),0],"head.quaternion":n=>[.03*t(n),(-.1+.22*e(n))*t(n),.04*Math.sin(Math.PI*e(n))],"spine.quaternion":n=>[0,.05*Math.sin(Math.PI*e(n)),0],"book.quaternion":n=>[.05*vi(n,.5,.15),0,0]})}},coffee:{D:3.8,eyes:i=>Re(i,1.15,1.35,2.5,2.75),show:{mug:[.2,3.45]},cues:[[1.25,"sip"],[2.6,"ahh"],[3.35,"clink"]],clip:()=>{const t=s=>Re(s,0,.5,3.1,3.7),e=s=>Re(s,.35,1.1,2.7,3.4),n=s=>Re(s,1.05,1.35,2.3,2.7);return Zn("coffee",3.8,{...Fs(t),"armR.quaternion":s=>[.95*e(s)+.15*n(s),0,-.5*e(s)],"armL.quaternion":s=>[-.25*t(s),0,0],"head.quaternion":s=>[.34*e(s)+.12*n(s)-.05*vi(s,1.6,.1),-.06*e(s),.05*n(s)],"spine.quaternion":s=>[.06*n(s),0,0],"spine.scale":s=>[.02*vi(s,2.65,.2),-.035*vi(s,2.65,.2),.02*vi(s,2.65,.2)]})}},sea:{D:6.4,sleepy:!0,eyes:i=>.55*Re(i,2.4,2.8,3.7,4.1),cues:[[.3,"breeze"]],clip:()=>{const t=e=>Re(e,.25,1.9,4.6,6.2);return Zn("sea",6.4,{"head.quaternion":e=>[.42*t(e)+.03*Math.sin(e*1.3)*t(e),.95*t(e),-.06*t(e)],"spine.quaternion":e=>[.04*t(e),.45*t(e),0],"root.quaternion":e=>[0,.12*t(e),0],"spine.scale":e=>[0,.03*vi(e,3.2,.5),0],...Fs(e=>.6*t(e))})}},stretch:{D:3.9,eyes:i=>Re(i,.5,.8,2.6,2.9),cues:[[.5,"stretch"],[2.55,"plop"]],clip:()=>{const t=s=>Re(s,.45,1.15,2.4,2.75),e=s=>Re(s,0,.4,.45,.75),n=s=>Re(s,1.15,1.35,2.2,2.4)*Math.sin(s*38);return Zn("stretch",3.9,{...Fs(s=>Re(s,.1,.55,2.9,3.6)),"spine.scale":s=>[-.03*t(s)+.03*e(s)+.04*wo(s,2.6,16,6),.09*t(s)-.04*e(s)-.05*wo(s,2.6,16,6),0],"root.position":s=>[0,.02*t(s)+.025*Math.max(0,wo(s,2.6,13,6)),0],"armL.quaternion":s=>[1.3*t(s)+.05*n(s),0,-1.2*t(s)],"armR.quaternion":s=>[1.3*t(s)-.05*n(s),0,1.2*t(s)],"head.quaternion":s=>[.4*t(s)-.08*e(s),0,.03*n(s)],"footL.quaternion":s=>[-.35*t(s),0,0],"footR.quaternion":s=>[-.35*t(s),0,0]})}},doze:{D:6.6,sleepy:!0,eyes:i=>$n(i,.4,1.3)*(1-$n(i,4.15,4.25)),cues:[[1,"snore"],[4.15,"wake"]],clip:()=>{const t=s=>.22*Re(s,1,1.9,2,2.4)+.36*Re(s,2.6,3.6,4.1,4.3)+.06*Re(s,.3,.9,3.8,4.2),e=s=>s<4.12?0:Math.exp(-(s-4.12)*3.5)*Math.cos((s-4.12)*9)*(1-$n(s,5.4,6.2)),n=s=>Re(s,4.5,4.7,5.3,5.6)*Math.sin((s-4.5)*17);return Zn("doze",6.6,{"head.quaternion":s=>[-t(s)+.14*Math.max(0,e(s)),.22*n(s),.06*Re(s,1,2,3.8,4.2)],"spine.quaternion":s=>[-.35*t(s),0,0],"book.position":s=>[0,-.06*t(s)/.36*(s<4.2?1:0),0],"book.quaternion":s=>[.4*t(s),0,0],"root.position":s=>[0,.05*Math.max(0,e(s)),0],"spine.scale":s=>[0,.05*Math.max(0,e(s)),0],"armL.quaternion":s=>[-.25*t(s)+.3*Math.max(0,e(s)),0,-.25*Math.max(0,e(s))],"armR.quaternion":s=>[-.25*t(s)+.3*Math.max(0,e(s)),0,.25*Math.max(0,e(s))],"eyeL.scale":s=>[.25*Math.max(0,e(s)),.45*Math.max(0,e(s)),0],"eyeR.scale":s=>[.25*Math.max(0,e(s)),.45*Math.max(0,e(s)),0]})}},clap:{D:3,eyes:i=>Re(i,.45,.6,2.3,2.5),cues:[[.62,"pat"],[.98,"pat"],[1.34,"pat"],[1.7,"pat"],[.55,"coo"]],clip:()=>{const t=n=>Re(n,.1,.5,2.1,2.7),e=n=>n>.45&&n<1.9?.5-.5*Math.cos((n-.45)*Math.PI*2/.36):0;return Zn("clap",3,{...Fs(t),"armL.quaternion":n=>[.3*t(n),0,(.7+.8*e(n))*t(n)],"armR.quaternion":n=>[.3*t(n),0,-(.7+.8*e(n))*t(n)],"root.position":n=>[0,.018*e(n)*t(n),0],"spine.scale":n=>[.015*e(n)*t(n),-.02*e(n)*t(n),0],"head.quaternion":n=>[.22*t(n),-.5*t(n),.1*Math.sin(n*5)*t(n)]})}},hello:{D:3,eyes:i=>Re(i,.9,1,2,2.1),cues:[[.35,"coo"],[.5,"flap"]],clip:()=>{const t=n=>Re(n,.1,.55,2.3,2.85),e=n=>Re(n,0,.45,2.4,2.95);return Zn("hello",3,{"armR.quaternion":n=>[1.5*t(n),0,.85*t(n)+.4*t(n)*Math.sin(Math.max(0,n-.5)*12)],"head.quaternion":n=>[.2*e(n),-.85*e(n),.14*e(n)*Math.sin(Math.max(0,n-.3)*4.5)],"spine.quaternion":n=>[0,-.25*e(n),.05*t(n)],"spine.scale":n=>[0,.02*t(n),0]})}},write:{D:3.2,cues:[[.6,"scratch"]],clip:()=>{const t=n=>Re(n,.1,.65,2.5,3.1),e=n=>Re(n,.6,.75,2.3,2.5);return Zn("write",3.2,{...Fs(t),"root.quaternion":n=>[-.28*t(n),-.35*t(n),0],"spine.quaternion":n=>[-.25*t(n),0,0],"head.quaternion":n=>[-.2*t(n),0,.05*Math.sin(n*7)*e(n)],"armR.quaternion":n=>[-.55*t(n)+.12*Math.sin(n*15)*e(n),0,-.2*t(n)+.25*Math.sin(n*9.5)*e(n)]})}},tteok:{D:7.6,eyes:i=>Re(i,4.6,4.8,6.4,6.7),show:{skewer:[.25,7]},cues:[[1,"sizzle"],[2.4,"sizzle"],[4.1,"ahh"],[4.7,"nyam"]],clip:()=>{const t=r=>Re(r,0,.5,6.9,7.5),e=r=>Re(r,.3,1,3.3,4),n=r=>Re(r,3.5,4.3,6.6,7.2),s=r=>Math.sin(r*5)*e(r);return Zn("tteok",7.6,{...Fs(t),"armR.quaternion":r=>[.55*e(r)+.95*n(r),.15*s(r),-.9*e(r)-.45*n(r)],"armL.quaternion":r=>[-.25*t(r),0,0],"head.quaternion":r=>[.1*e(r)+.3*n(r)+.06*Math.sin(r*9)*Re(r,4.7,4.9,6.2,6.6),-.35*e(r),.06*e(r)],"spine.quaternion":r=>[.05*e(r),-.18*e(r),0],"spine.scale":r=>[.02*vi(r,4.7,.2),-.03*vi(r,4.7,.2),.02*vi(r,4.7,.2)]})}},startle:{D:2.2,cues:[],clip:()=>{const i=e=>e<.12?Zf(e/.12):Math.exp(-(e-.12)*3.2)*Math.cos((e-.12)*11)*(1-$n(e,1.6,2.2)),t=e=>$n(e,0,.1)*(1-$n(e,.9,1.9));return Zn("startle",2.2,{"root.position":e=>[0,.045*Math.max(0,i(e)),0],"spine.scale":e=>[-.02*t(e),.045*Math.max(0,i(e)),0],"head.quaternion":e=>[.16*t(e),0,.08*Math.sin(e*9)*(1-$n(e,.4,1.4))*t(e)],"eyeL.scale":e=>[.3*t(e),.45*t(e),0],"eyeR.scale":e=>[.3*t(e),.45*t(e),0]})}}};function fy(i,{onCue:t}={}){const e=new $x(i),n={};for(const[l,u]of Object.entries(Ka)){const h=e.clipAction(u.clip());h.blendMode=vl,u.loop||(h.setLoop(af,1),h.clampWhenFinished=!1),n[l]=h}n.read.play();let s=null,r=0,o=0,a=1;const c={eyes:0,show:{}};return{mixer:e,actions:n,state:c,play(l){const u=Ka[l];if(!u||u.loop)return!1;s&&s!==l&&n[s].fadeOut(.35);const h=n[l];return h.reset(),h.setEffectiveWeight(1),h.fadeIn(s&&s!==l?.3:.12),h.play(),s=l,r=0,o=0,!0},get current(){return s},get time(){return r},isPlaying:l=>s===l,update(l){if(s){const u=Ka[s];r+=l;const h=u.cues||[];for(;o<h.length&&h[o][0]<=r;)t==null||t(h[o][1],s),o++;c.eyes=u.eyes?u.eyes(r):0,c.sleepy=!!u.sleepy,c.show={};for(const[f,[d,g]]of Object.entries(u.show||{}))c.show[f]=r>=d&&r<=g;r>=u.D&&(s=null,c.eyes=0,c.show={},c.sleepy=!1)}a+=((s?.35:1)-a)*Math.min(1,l*3),n.read.setEffectiveWeight(a),e.update(l)}}}const $f="#8a6250",Te=(i,t,e={},n=.006)=>{const s=new ut(i,le(t,{grain:14,grainAmt:.16,rim:.25,...e}));return s.castShadow=!0,n&&un(s,e.line||$f,n,16),s};let Ph=11;const cn=()=>(Ph=Ph*16807%2147483647)/2147483647;function Ih(i="#ee8f78",t="#fbeeda"){const e=new Xt;e.name="parasol";const n=Te(new Ae(.022,.026,2.35,10),"#e9dcc6",{grain:20});n.position.y=1.17,e.add(n);const s=new Xt;s.position.y=2.2,e.add(s);const r=10,o=1.32,a=.46;for(let l=0;l<r;l++){const u=new ut(new ds(o,a,5,1,!0,l/r*Math.PI*2,Math.PI*2/r),le(l%2?t:i,{grain:6,grainAmt:.14,side:Ge,tint:"#a08ac8",rim:.2}));u.castShadow=!0,s.add(u);const h=Te(new Be(.035,8,6),l%2?i:t,{},0),f=(l+.5)/r*Math.PI*2;h.position.set(Math.sin(f)*o*.99,-a/2-.02,Math.cos(f)*o*.99),h.userData.tip=!0,s.add(h)}const c=Te(new Be(.05,10,8),"#c99662");return c.position.y=a/2+.03,s.add(c),e.userData.top=s,e.rotation.z=.1,e.rotation.x=.06,e}function dy(){const i=new Xt;i.name="table";const t={grain:9,grainAmt:.2,tint:"#8a6a9c"},e=Te(new Ae(.3,.3,.035,24),"#d2a06c",t);e.position.y=.44,i.add(e);for(let h=0;h<3;h++){const f=h/3*Math.PI*2+.4,d=Te(new Ae(.018,.022,.46,8),"#c08d5c",t,.004);d.position.set(Math.cos(f)*.2,.22,Math.sin(f)*.2),d.rotation.set(Math.sin(f)*.16,0,-Math.cos(f)*.16),i.add(d)}const n=new Xt;n.position.set(-.1,.46,.06);const s=Te(new Ae(.058,.05,.11,20),"#fbf3e6",{grain:30});s.position.y=.055,n.add(s);const r=new ut(new Ae(.0595,.056,.03,20,1,!0),le("#7fb6c9",{grain:20}));r.position.y=.05,n.add(r);const o=Te(new Vn(.032,.01,8,14,Math.PI),"#fbf3e6",{},.004);o.position.set(.058,.055,0),o.rotation.z=-Math.PI/2,n.add(o);const a=new ut(new Un(.052,18),new Xe({color:"#b97a4e"}));a.rotation.x=-Math.PI/2,a.position.y=.105,n.add(a);const c=[],l=new Xe({color:"#fff6ea",transparent:!0,opacity:.35,depthWrite:!1});for(let h=0;h<4;h++){const f=new ut(new Be(.022,8,6),l.clone());f.userData.ph=h/4,n.add(f),c.push(f)}return i.add(n),["#e58f7a","#7fb0bf","#f0cf86"].forEach((h,f)=>{const d=Te(new bn(.2,.034,.145),h,{grain:22},.004);d.position.set(.09,.475+f*.036,-.06),d.rotation.y=.25-f*.22,i.add(d);const g=new ut(new bn(.19,.024,.14),le("#fbf3e0",{grain:30}));g.position.copy(d.position),g.position.x+=.006,g.rotation.y=d.rotation.y,i.add(g)}),i.userData.update=h=>c.forEach(f=>{const d=(h*.22+f.userData.ph)%1;f.position.set(Math.sin(d*6+f.userData.ph*9)*.02,.12+d*.26,0),f.scale.setScalar(.6+d*1.6),f.material.opacity=.36*Math.sin(Math.PI*d)}),i}function py(){const i=new Xt;i.name="lantern";const t="#6e5a58",e=Te(new Ae(.07,.08,.03,14),t,{},.004);e.position.y=.015,i.add(e);const n=Te(new ds(.085,.07,14),t,{},.004);n.position.y=.245,i.add(n);for(let l=0;l<4;l++){const u=l/4*Math.PI*2+.78,h=new ut(new Ae(.006,.006,.19,6),le(t));h.position.set(Math.cos(u)*.062,.12,Math.sin(u)*.062),i.add(h)}const s=new ut(new Be(.045,12,10),new Xe({color:"#ffd98a"}));s.position.y=.12,i.add(s);const r=new ut(new Be(.16,14,10),new Xe({color:"#ffc36a",transparent:!0,opacity:.2,depthWrite:!1,blending:Si}));r.position.y=.12,i.add(r);const o=new ut(new Vn(.035,.006,6,14),le(t));o.position.y=.3,i.add(o);const a=new Vf("#ffb866",.3,2.2,2);a.position.y=.14,i.add(a);let c=1;return i.userData.setOn=l=>{c=l,s.material.color.set("#7a6658").lerp(new Jt("#ffd98a"),l)},i.userData.glowAt=s,i.userData.update=l=>{const u=.85+.15*Math.sin(l*7.3)*Math.sin(l*2.9+1);a.intensity=1*u*c,r.material.opacity=(.16+.07*u)*c,r.scale.setScalar(.95+.1*u)},i}function ja(i=!1){const t=new Xt;t.name="mat";const e=new $e(1.5,.95,12,8),n=e.attributes.position;for(let c=0;c<n.count;c++)n.setZ(c,.012*Math.sin(n.getX(c)*7)*Math.cos(n.getY(c)*6)+.006*cn());e.computeVertexNormals();const s=Hf();s.repeat.set(3,2);const r=new ut(e,le("#ffffff",{map:s,grain:5,tint:"#a08ac8"}));if(r.rotation.x=-Math.PI/2,r.position.y=.012,r.receiveShadow=!0,t.add(r),i)return t;const o=Yf.strawHat.build();o.scale.setScalar(1.25),o.position.set(-.38,.1,-.1),o.rotation.set(.06,.6,.05),t.add(o);for(const c of[-1,1]){const l=Te(new wi(.045,.13,4,10),"#ee8f78",{grain:24},.004);l.rotation.set(Math.PI/2,0,.25*c+.3),l.scale.z=.3,l.position.set(.42+c*.07,.03,.22+c*.02),t.add(l);const u=new ut(new Vn(.04,.008,6,12,Math.PI),le("#fbf3e6"));u.position.copy(l.position),u.position.y+=.012,u.position.z-=.03,u.rotation.y=.25*c+.3,t.add(u)}const a=new Xt;a.position.set(.1,.03,-.15),a.rotation.y=-.4;for(const c of[-1,1]){const l=Te(new bn(.14,.012,.2),"#7fb0bf",{grain:22},.004);l.position.set(c*.068,.025,0),l.rotation.z=c*.38,a.add(l)}return t.add(a),t}function Qa(){const i=new Xt;i.name="castle";const t={grain:40,grainAmt:.3,tint:"#b98a8a",rim:.15},e="#efc58d",n=Te(new Ae(.3,.36,.16,20),e,t,.005);n.position.y=.08,i.add(n);const s=[],r=(v,C,T,E)=>{const P=[],x=Te(new Ae(T*.9,T,E,14),e,t,.005);x.position.set(v,E/2,C),i.add(x);const y=Te(new ds(T*1.05,T*1.3,14),"#f3d09c",t,.005);y.position.set(v,E+T*.62,C),i.add(y),P.push(y);for(let R=0;R<6;R++){const N=R/6*Math.PI*2,D=new ut(new bn(T*.3,T*.3,T*.3),le(e,t));D.position.set(v+Math.cos(N)*T*.82,E+T*.08,C+Math.sin(N)*T*.82),D.castShadow=!0,i.add(D),P.push(D)}s.push(P)};r(0,0,.13,.42),r(-.27,.12,.085,.27),r(.27,.1,.085,.25),r(.02,.3,.07,.2);const o=new ut(new Un(.045,12,0,Math.PI),new Xe({color:"#b98c62"}));o.position.set(0,.03,.372),i.add(o);const a=Te(new Ae(.006,.006,.22,6),"#c99662",{},0);a.position.set(0,.42+.17+.11,0),i.add(a);const c=new $e(.13,.08,6,1);c.translate(.065,0,0);const l=new ut(c,le("#ee8f78",{side:Ge,grain:20}));l.position.set(0,.42+.17+.17,0),l.castShadow=!0,i.add(l);const u=Te(new Ae(.105,.08,.16,18,1,!0),"#74b9c4",{grain:22,side:Ge});u.position.set(.55,.08,.28),i.add(u);const h=new ut(new Un(.098,16),le(e,t));h.rotation.x=-Math.PI/2,h.position.set(.55,.14,.28),i.add(h);const f=new ut(new Vn(.105,.007,6,18,Math.PI),le("#fbf3e6"));f.position.set(.55,.16,.28),f.rotation.x=-.5,i.add(f);const d=new Xt;d.position.set(.36,.02,.52),d.rotation.set(0,.9,0);const g=Te(new Ae(.012,.012,.22,8),"#f2c35f",{},.004);g.rotation.z=Math.PI/2,d.add(g);const _=Te(new bn(.1,.012,.075),"#f2c35f",{},.004);_.position.x=.15,d.add(_),i.add(d);const m=new Xt;i.add(m);const p=[...s[0],a,l].map(v=>[v,v.position.y]);i.userData.setLevel=v=>{for(v=Math.max(0,Math.min(6,v|0));m.children.length;)m.remove(m.children[0]);for(let C=0;C<v;C++){const T=.12-C*.008,E=Te(new Ae(T*.92,T,.1,14),C%2?"#f3d09c":e,t,.005);E.position.set(0,.42+.05+C*.1,0),m.add(E)}for(const[C,T]of p)C.position.y=T+v*.1};const S=c.attributes.position,M=Float32Array.from(S.array);return i.userData.update=v=>{for(let C=0;C<S.count;C++){const T=M[C*3];S.setZ(C,Math.sin(T*40-v*5)*.012*(T/.13))}S.needsUpdate=!0},i}function my(){const i=document.createElement("canvas");i.width=256,i.height=64;const t=i.getContext("2d");["#ee8f78","#fbf3e6","#74b9c4","#fbf3e6","#f2c35f","#fbf3e6"].forEach((s,r)=>{t.fillStyle=s,t.fillRect(r*256/6,0,256/6+1,64)});const e=new Kn(i);e.colorSpace=Oe;const n=new ut(new Be(.2,28,18),le("#ffffff",{map:e,grain:8,rim:.3,form:1}));return n.castShadow=!0,un(n,$f,.006,12),n.rotation.set(.5,.4,.3),n.name="ball",n}function gy(){const i=new Xt;return i.name="rocks",[[0,0,.32,.62],[.42,.12,.2,.6],[-.36,.2,.17,.55],[.15,.36,.12,.5],[-.62,-.05,.1,.6]].forEach(([t,e,n,s],r)=>{const o=new ta(n,1),a=o.attributes.position;for(let l=0;l<a.count;l++){const u=1+.16*Math.sin(a.getX(l)*23+r)*Math.cos(a.getZ(l)*19+a.getY(l)*13);a.setXYZ(l,a.getX(l)*u,a.getY(l)*u,a.getZ(l)*u)}o.computeVertexNormals();const c=Te(o,r%2?"#a99aa6":"#b9a79f",{grain:16,grainAmt:.3,tint:"#7d6f9c",rim:.35,form:1},.008);c.scale.y=s,c.position.set(t,n*s*.55,e),c.rotation.y=r*1.3,i.add(c)}),i}function Lh(i="#f08f6f"){const t=new Ks,e=5;for(let o=0;o<e*2;o++){const a=o/(e*2)*Math.PI*2,c=o%2?.045:.13,l=Math.cos(a)*c,u=Math.sin(a)*c;o===0?t.moveTo(l,u):t.lineTo(l,u)}t.closePath();const n=new Cl(t,{depth:.025,bevelEnabled:!0,bevelThickness:.015,bevelSize:.018,bevelSegments:3,curveSegments:4}),s=Te(n,i,{grain:50,grainAmt:.3,rim:.4},.005);s.rotation.x=-Math.PI/2,s.name="starfish";const r=new Xt;return r.add(s),r}function Eo(i="#f2a9a0"){const t=new Xt;t.name="shell";const e=new Be(.15,36,14,0,Math.PI*2,0,Math.PI/2),n=e.attributes.position;for(let r=0;r<n.count;r++){const o=n.getX(r),a=n.getZ(r),c=Math.hypot(o,a)||1,l=Math.atan2(a,o),u=1+.11*Math.cos(l*11)*Math.min(1,c/.1);n.setX(r,o*u),n.setZ(r,a*u)}e.computeVertexNormals();const s=Te(e,i,{grain:28,grainAmt:.25,tint:"#b07ab0",rim:.35,line:"#a4645a"});return s.scale.set(1,.55,.9),t.add(s),t.rotation.set(.12,.5,-.1),t}function tc(i="#f6dcc4"){const t=[];for(let s=0;s<=14;s++){const r=s/14;t.push(new at(.075*Math.sin(Math.PI*Math.pow(r,.75))*(1+.12*Math.sin(r*30)),r*.24))}const e=Te(new Xi(t,20),i,{grain:30,grainAmt:.25,tint:"#b07ab0",rim:.4,line:"#a4645a"},.005);e.rotation.set(Math.PI/2-.15,0,.4),e.position.y=.06;const n=new Xt;return n.add(e),n.name="conch",n}function Dh(i=16,t=.7){const e=new Xt;e.name="grass";const n=[],s=["#9db77a","#b7c486","#86a76f","#c9cf93"];for(let r=0;r<i;r++){const o=t*(.55+cn()*.6),a=new $e(.035,o,1,5);a.translate(0,o/2,0);const c=a.attributes.position;for(let d=0;d<c.count;d++){const g=c.getY(d)/o;c.setX(d,c.getX(d)*(1-g*.92)),c.setZ(d,g*g*.22*o)}a.computeVertexNormals();const l=new ut(a,le(s[r%4],{grain:20,grainAmt:.2,side:Ge,rim:.45,tint:"#6f8a9c"}));l.castShadow=!0;const u=new Xt,h=cn()*Math.PI*2,f=cn()*.16;u.position.set(Math.cos(h)*f,0,Math.sin(h)*f),u.rotation.y=cn()*Math.PI*2,u.rotation.x=(cn()-.3)*.5,u.add(l),e.add(u),n.push([u,u.rotation.x,cn()*6])}for(let r=0;r<3;r++){const o=new ut(new Be(.028,8,6),le(r%2?"#f6b3c2":"#fbe9a6",{rim:.4}));o.position.set((cn()-.5)*.3,t*(.45+cn()*.3),(cn()-.5)*.3),e.add(o)}return e.userData.update=r=>n.forEach(([o,a,c])=>{o.rotation.x=a+Math.sin(r*1.3+c)*.07+Math.sin(r*.37+c*2)*.05}),e}function _y(i=.045,t="#b3a092"){const e=Te(new Be(i,12,8),t,{grain:30,grainAmt:.2},0);return e.scale.set(1.2,.55,.9),e.position.y=i*.2,e}function vy(){const i=new Xt;i.name="campfire";for(let c=0;c<9;c++){const l=c/9*Math.PI*2,u=Te(new Rl(.06+cn()*.02,0),c%2?"#9c8d86":"#b3a39a",{grain:30},.004);u.scale.y=.65,u.position.set(Math.cos(l)*.24,.03,Math.sin(l)*.24),u.rotation.set(cn(),cn()*3,cn()),i.add(u)}const t=new ut(new Un(.2,20),new Xe({color:"#5b4a44"}));t.rotation.x=-Math.PI/2,t.position.y=.006,i.add(t);for(let c=0;c<4;c++){const l=Te(new Ae(.03,.035,.36,8),c%2?"#8a5a3c":"#9b6a48",{grain:26},.004);l.rotation.set(Math.PI/2-.35,c/4*Math.PI*2+.3,0),l.position.y=.07,i.add(l)}const e=(c,l)=>new Xe({color:c,transparent:!0,opacity:l,depthWrite:!1,blending:Si}),n=[["#ff7a2e",.85,.13,.34],["#ffb347",.8,.09,.27],["#fff1b0",.9,.05,.17]].map(([c,l,u,h],f)=>{const d=new ds(u,h,10,4,!0),g=d.attributes.position;for(let m=0;m<g.count;m++){const p=g.getY(m);g.setX(m,g.getX(m)*(1+.25*Math.sin(p*18+f)))}const _=new ut(d,e(c,l));return _.position.y=.08+h/2,_.userData.h=h,i.add(_),_}),s=Array.from({length:14},()=>{const c=new ut(new Be(.008,5,4),e("#ffcf6a",1));return c.userData={t:cn()*2,x:0,z:0},i.add(c),c}),r=new Vf("#ff9a4a",0,3.4,1.6);r.position.y=.35,i.add(r);const o=new qe;o.position.y=.2,i.add(o);let a=0;return i.userData.on=0,i.userData.setOn=c=>{a=c,i.userData.on=c},i.userData.glowAt=o,i.userData.update=(c,l)=>{const u=.8+.2*Math.sin(c*9.1)*Math.sin(c*3.7+1.3);n.forEach((h,f)=>{h.visible=a>.02,h.scale.set(a*(.9+.12*Math.sin(c*(11+f*3)+f)),a*(.85+.25*Math.sin(c*(7+f*2)+f*2)),a*(.9+.1*Math.cos(c*9+f))),h.rotation.y=c*(.8+f*.5),h.position.y=.08+h.userData.h/2*h.scale.y});for(const h of s){const f=h.userData;f.t+=(l||.016)*.7,f.t>1&&(f.t=0,f.x=(cn()-.5)*.12,f.z=(cn()-.5)*.12),h.visible=a>.3,h.position.set(f.x+Math.sin(f.t*8+f.x*50)*.04*f.t,.15+f.t*.7,f.z),h.material.opacity=(1-f.t)*a}r.intensity=1.2*u*a},i}function xy(){const i=new Xt;i.name="bottle";const t=new ut(new wi(.05,.13,6,14),new Ff({color:"#9fd6c2",transparent:!0,opacity:.6}));t.rotation.z=Math.PI/2,t.position.y=.05,i.add(t),un(t,"#4f7f74",.004,12);const e=new ut(new Ae(.02,.03,.05,10),t.material);e.rotation.z=Math.PI/2,e.position.set(.12,.05,0),i.add(e);const n=Te(new Ae(.019,.017,.035,10),"#b98a5a",{},.003);n.rotation.z=Math.PI/2,n.position.set(.155,.05,0),i.add(n);const s=Te(new Ae(.025,.025,.12,10),"#fbf0d8",{},0);s.rotation.z=Math.PI/2,s.position.y=.05,i.add(s);const r=Te(new Vn(.026,.004,6,14),"#e07a5f",{},0);return r.rotation.y=Math.PI/2,r.position.y=.05,i.add(r),i.userData.update=o=>{i.rotation.z=Math.sin(o*1.6)*.06,i.position.y=(i.userData.y0||0)+Math.abs(Math.sin(o*1.6))*.01},i}const yy="#6a4a44",Uh=(i,t,e={},n=0)=>{const s=new ut(i,le(t,{grain:16,grainAmt:.12,rim:.35,...e}));return s.castShadow=!0,n&&un(s,e.line||yy,n,18),s};function My(i=.285){const t=new Xt,e="#fbf3e6",n="#7fc8c0",s=Uh(new Vn(i,.02,8,28,Math.PI),e);t.add(s);for(const r of[-1,1]){const o=Uh(new Ae(i*.32,i*.32,.07,20),n,{},.006);o.rotation.z=Math.PI/2,o.position.set(r*(i+.01),-.01,0),t.add(o)}return t}const xr=[[.266,.07],[.258,.15],[.232,.23],[.18,.3],[.1,.35],[0,.37]],ls="#7c573f";function os(i){if(i<=xr[0][1])return xr[0][0];for(let t=1;t<xr.length;t++){const[e,n]=xr[t],[s,r]=xr[t-1];if(i<=n){const o=(i-r)/(n-r);return s+(e-s)*o}}return 0}function Jf(i,t,e=.03,n=18){const s=[];for(let r=0;r<=n;r++){const o=r/n,a=i+(.37-i)*o,c=Math.max(0,os(a)+t*(1-o*o*.4));s.push(new at(r===n?0:c,a+e*Math.pow(o,3)))}return new Xi(s,40)}function Fl(i,t=256,e=256,n=[1,1]){const s=document.createElement("canvas");s.width=t,s.height=e,i(s.getContext("2d"),t,e);const r=new Kn(s);return r.colorSpace=Oe,r.wrapS=r.wrapT=Ys,r.repeat.set(...n),r.anisotropy=4,r}const Ol=i=>()=>(i=i*16807%2147483647)/2147483647;function el(i,t,e){return Fl((n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);const o=16,a=s/o,c=Ol(3);for(let l=0;l<o;l++){n.fillStyle=t,n.fillRect(l*a,0,a*.22,r),n.fillStyle=e,n.fillRect(l*a+a*.45,0,a*.22,r);for(let u=0;u<22;u++)n.fillStyle="rgba(0,0,0,.07)",n.beginPath(),n.ellipse(l*a+a*.5,u*r/22+4,a*.32,r/44,0,0,6.3),n.fill()}for(let l=0;l<900;l++)n.fillStyle=c()<.5?"rgba(255,255,255,.08)":"rgba(0,0,0,.08)",n.fillRect(c()*s,c()*r,1.5,1.5)},256,256,[4,1])}function Sy(){const i=new Xt;i.name="beanie";const t=new ut(Jf(.2,.045,.05),le("#ffffff",{map:el("#d96a5c","rgba(110,30,30,.35)","rgba(255,200,180,.25)"),grain:10,tint:"#9a6a9a",rim:.25,side:Ge}));t.castShadow=!0,un(t,ls,.006,16),i.add(t);const e=.195,n=.26,s=[];for(let u=0;u<=8;u++){const h=u/8,f=e+(n-e)*h;s.push(new at(os(f)+.058+Math.sin(h*Math.PI)*.014,f))}const r=new ut(new Xi(s,40),le("#ffffff",{map:el("#f3e6cf","rgba(120,90,60,.3)","rgba(255,255,255,.35)"),grain:10,tint:"#9a86c4",rim:.2,side:Ge}));r.castShadow=!0,un(r,ls,.006,16),i.add(r);const o=new ta(.068,3),a=o.attributes.position,c=Ol(8);for(let u=0;u<a.count;u++){const h=new I().fromBufferAttribute(a,u);h.multiplyScalar(1+(c()-.5)*.18),a.setXYZ(u,h.x,h.y,h.z)}o.computeVertexNormals();const l=new ut(o,le("#f3e6cf",{grain:40,grainAmt:.3,tint:"#9a86c4",rim:.3}));return l.position.set(0,.46,.02),l.scale.setScalar(1.25),l.castShadow=!0,un(l,ls,.005,12),i.add(l),i.rotation.x=.06,i.scale.setScalar(1.08),i.scale.z=.98,i}function by(){const i=new Xt;i.name="sunhat";const t=Fl((l,u,h)=>{l.fillStyle="#ead29a",l.fillRect(0,0,u,h);const f=Ol(5);for(let d=0;d<h;d+=6)l.fillStyle=d%12?"rgba(160,110,50,.18)":"rgba(255,245,215,.35)",l.fillRect(0,d,u,3);for(let d=0;d<1200;d++)l.fillStyle=f()<.5?"rgba(130,90,40,.15)":"rgba(255,250,230,.25)",l.fillRect(f()*u,f()*h,3,1)},256,256,[6,3]),e=le("#ffffff",{map:t,grain:10,tint:"#a08ac8",rim:.25,side:Ge}),n=new ut(Jf(.19,.024,.02),e);n.castShadow=!0,un(n,ls,.006,16),i.add(n);const s=new ea(os(.19)+.02,os(.19)+.15,48,4),r=s.attributes.position;for(let l=0;l<r.count;l++){const u=r.getX(l),h=r.getY(l),f=Math.hypot(u,h),d=(f-os(.19)-.02)/.13,g=Math.atan2(h,u);r.setXYZ(l,u,.19-d*d*.06+Math.sin(g*5)*.006*d,h)}s.computeVertexNormals();const o=new ut(s,e);o.castShadow=!0,un(o,ls,.005,16),i.add(o);const a=[new at(os(.2)+.027,.195),new at(os(.24)+.027,.24)],c=new ut(new Xi(a,40),le("#6fa8b8",{grain:20,side:Ge}));return i.add(c),i.rotation.x=.1,i.scale.z=.9,i}function wy(i=new Date){const t=new URLSearchParams(location.search).get("season");if(t==="winter")return!0;if(t==="summer")return!1;const e=i.getMonth()+1;return e>=11||e<=2}function Ey(){return wy()?Sy():by()}function Ty(){const i=new Xt;i.name="scarf";const t=el("#d96a5c","rgba(110,30,30,.35)","rgba(255,200,180,.25)"),e=Fl((c,l,u)=>{c.drawImage(t.image,0,0,l,u),c.fillStyle="rgba(246,236,220,.95)",c.fillRect(0,u*.2,l,u*.09),c.fillRect(0,u*.7,l,u*.09)},256,256,[6,1]),n=le("#ffffff",{map:e,grain:12,tint:"#9a86c4",rim:.25,side:Ge}),s=(c,l,u,h)=>{const f=new ut(new Vn(l,u,12,40),n);return f.rotation.x=Math.PI/2+h,f.position.y=c,f.scale.set(1,1,1),f.castShadow=!0,un(f,ls,.006,14),i.add(f),f};s(.12,.3,.05,.08),s(.185,.285,.045,-.06);const r=new bn(.11,.24,.035,2,8,1),o=r.attributes.position;for(let c=0;c<o.count;c++){const l=o.getY(c),u=(.12-l)/.24;o.setZ(c,o.getZ(c)-u*u*.05),o.setX(c,o.getX(c)*(1+u*.15))}r.computeVertexNormals();const a=new ut(r,n);a.position.set(.17,.01,-.24),a.rotation.set(.15,.55,.12),a.castShadow=!0,un(a,ls,.005,14),i.add(a);{const c=new ut(new bn(.118,.035,.04),le("#f3e6cf",{grain:12}));c.position.set(0,-.09,0),a.add(c)}for(let c=0;c<5;c++){const l=new ut(new Ae(.006,.004,.04,5),le("#f6ecdc"));l.position.set(-.044+c*.022,-.14,0),a.add(l)}return i.scale.z=.9,i}const li=[{id:"pen",label:"손글씨 펜",css:'"Nanum Pen Script", "Gaegu", "Segoe Script", cursive',k:1.12},{id:"gaegu",label:"또박 손글씨",css:'"Gaegu", "Nanum Pen Script", cursive',k:1}];async function Ay(){for(const i of["woff2","otf","ttf"])try{const t=new FontFace("SandCustom",`url(./fonts/custom.${i})`);return await t.load(),document.fonts.add(t),li.push({id:"custom",label:"내 서체",css:'"SandCustom", "Nanum Pen Script", cursive',k:1}),!0}catch{}return!1}const Ry=3,Kf=i=>()=>(i=i*16807%2147483647)/2147483647;async function Bl(i,t){try{await document.fonts.load(`48px ${i.css}`,t||"가")}catch{}}function Go(i,t,e="#000",n=768,s=256){const r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d"),a=String(i).split(`
`).slice(0,2).map(u=>u.slice(0,14));if(!a.join(""))return r;const c=Kf(a.join("|").length*131+17),l=Math.min(s/a.length*.82,n*.92/Math.max(...a.map(u=>u.length),3)/.92)*t.k;return o.textBaseline="middle",o.textAlign="center",o.fillStyle=e,o.strokeStyle=e,o.lineJoin="round",o.lineWidth=l*.012,o.font=`${l}px ${t.css}`,a.forEach((u,h)=>{const f=o.measureText("가").width*.86,d=[...u].reduce((m,p)=>m+(/\s/.test(p)?f*.5:/[ -~]/.test(p)?f*.62:f),0);let g=n/2-d/2;const _=s/a.length*(h+.5);for(const m of u){const p=/\s/.test(m)?f*.5:/[ -~]/.test(m)?f*.62:f;if(!/\s/.test(m)){o.save(),o.translate(g+p/2,_+(c()-.5)*l*.14),o.rotate((c()-.5)*.22-.03);const S=.93+c()*.14;o.scale(S,S),o.fillText(m,0,0),o.strokeText(m,0,0),o.restore()}g+=p}}),r}function Nh(i){var e,n;if(i.length<3)return i;const t=[i[0]];for(let s=0;s<i.length-1;s++){const r=i[s],o=i[s+1],a=(e=r[2])!=null?e:1,c=(n=o[2])!=null?n:1;t.push([r[0]*.75+o[0]*.25,r[1]*.75+o[1]*.25,a*.75+c*.25],[r[0]*.25+o[0]*.75,r[1]*.25+o[1]*.75,a*.25+c*.75])}return t.push(i[i.length-1]),t}function jf(i,t="#000",e=768,n=256){var a,c,l;const s=document.createElement("canvas");s.width=e,s.height=n;const r=s.getContext("2d");r.strokeStyle=t,r.fillStyle=t,r.lineCap="round",r.lineJoin="round";const o=n*.058;for(const u of i){if(!u.length)continue;if(u.length===1){r.beginPath(),r.arc(u[0][0]*e,u[0][1]*n,o*.5*((a=u[0][2])!=null?a:1.1),0,6.3),r.fill();continue}const h=Nh(Nh(u)),f=h.length;for(let d=1;d<f;d++){const g=h[d-1],_=h[d],m=Math.min(1,.45+.55*Math.min(d,f-d)/Math.min(6,f/2));r.lineWidth=o*(((c=g[2])!=null?c:1)+((l=_[2])!=null?l:1))/2*m,r.beginPath(),r.moveTo(g[0]*e,g[1]*n),r.lineTo(_[0]*e,_[1]*n),r.stroke()}}return s}const ec=new Map;function Fh(i,t){const e=i+"x"+t;if(ec.has(e))return ec.get(e);const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d"),r=Kf(77),o=s.createLinearGradient(0,0,i*.3,t);o.addColorStop(0,"#f1d3a4"),o.addColorStop(.55,"#e9c48f"),o.addColorStop(1,"#ddb27c"),s.fillStyle=o,s.fillRect(0,0,i,t);for(let c=0;c<26;c++){const l=r()*i,u=r()*t,h=30+r()*110,f=s.createRadialGradient(l,u,0,l,u,h),d=r()<.5;f.addColorStop(0,d?"rgba(170,118,70,.13)":"rgba(255,240,212,.16)"),f.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=f,s.fillRect(l-h,u-h,h*2,h*2)}for(let c=0;c<15;c++){const l=(c+r()*.6)/15*t*1.25-t*.12,u=3+r()*4,h=r()*6.3,f=.012+r()*.008;for(const[d,g]of[[0,"rgba(160,108,62,.14)"],[2.2,"rgba(255,244,222,.22)"]]){s.beginPath();for(let _=-10;_<=i+10;_+=8){const m=l+d+Math.sin(_*f+h)*u+_*.06;_<0?s.moveTo(_,m):s.lineTo(_,m)}s.strokeStyle=g,s.lineWidth=2.4,s.stroke()}}const a=["rgba(255,247,230,.55)","rgba(140,95,60,.35)","rgba(205,140,80,.35)","rgba(90,70,60,.3)","rgba(255,255,255,.5)"];for(let c=0;c<i*t/55;c++){s.fillStyle=a[r()*a.length|0];const l=r()<.92?1+r()*1.2:1.8+r()*1.8;s.fillRect(r()*i,r()*t,l,l*(.7+r()*.6))}for(let c=0;c<7;c++)s.save(),s.translate(r()*i,r()*t),s.rotate(r()*6.3),s.fillStyle=r()<.5?"rgba(255,236,226,.8)":"rgba(240,214,190,.85)",s.beginPath(),s.ellipse(0,0,2.5+r()*3,1.5+r()*2,0,0,6.3),s.fill(),s.fillStyle="rgba(150,100,70,.35)",s.fillRect(-1,1,3,1),s.restore();return ec.set(e,n),n}const nc={};function Qf(i,t,e){const n=nc[i]||(nc[i]=document.createElement("canvas"));(n.width!==t||n.height!==e)&&(n.width=t,n.height=e);const s=n.getContext("2d");return s.clearRect(0,0,t,e),s.globalCompositeOperation="source-over",[n,s]}function yr(i,t,e,n,s){const[r,o]=Qf(i,n,s);return o.drawImage(t,0,0,n,s),o.globalCompositeOperation="source-in",o.fillStyle=e,o.fillRect(0,0,n,s),r}function td(i,t,e,n){i.drawImage(Fh(t,e),0,0);const s=t/720;i.save(),i.filter=`blur(${3*s}px)`,i.globalAlpha=.7,i.drawImage(yr("a",n,"#fff2d6",t,e),0,5*s),i.drawImage(yr("a",n,"#fbe6c0",t,e),0,-5*s),i.restore(),i.save(),i.filter=`blur(${1.2*s}px)`,i.drawImage(yr("a",n,"#fff0d4",t,e),0,2.5*s),i.drawImage(yr("a",n,"#6b4029",t,e),0,-2.5*s),i.restore(),i.save(),i.filter=`blur(${.8*s}px)`,i.drawImage(yr("a",n,"#b07f54",t,e),0,0),i.restore();const[r,o]=Qf("b",t,e);o.drawImage(n,0,0,t,e),o.globalCompositeOperation="source-in",o.drawImage(Fh(t,e),0,0),i.save(),i.globalAlpha=.5,i.globalCompositeOperation="multiply",i.drawImage(r,0,0),i.restore()}function Cy(i,t=1,e=1024,n=342){if(i.strokes){const a=i.strokes.reduce((h,f)=>h+Math.max(1,f.length),0);let c=Math.ceil(a*t);const l=[];for(const h of i.strokes){if(c<=0)break;l.push(h.slice(0,Math.max(1,c))),c-=Math.max(1,h.length)}return jf(l,"#000",e,n)}const s=li.find(a=>a.id===i.font)||li[0],r=Go(i.text||"",s,"#000",e,n),o=document.createElement("canvas");o.width=e,o.height=n;{const a=o.getContext("2d");for(const[c,l]of[[0,0],[3,0],[-3,0],[0,3],[0,-3],[2,2],[-2,-2],[2,-2],[-2,2]])a.drawImage(r,c,l)}if(t<1){const a=o.getContext("2d");a.globalCompositeOperation="destination-in";const c=a.createLinearGradient(0,0,e,0),l=t*1.08*e;c.addColorStop(0,"#000"),c.addColorStop(Math.max(0,Math.min(1,(l-40)/e)),"#000"),c.addColorStop(Math.max(0,Math.min(1,l/e)),"rgba(0,0,0,0)"),a.fillStyle=c,a.fillRect(0,0,e,n)}return o}const Tn=(i,t={})=>new Xe({color:i,side:Ge,...t}),Fr=i=>{const t=new Ye;return t.setAttribute("position",new Cn(new Float32Array(i.flat()),3)),t.computeVertexNormals(),t};function Oh(i=7,t="#b06c74",e="#fff4e4"){const n=new Xt,s=new Xt;n.add(s);const r=new Ks;r.moveTo(-.5,.16),r.lineTo(.55,.16),r.lineTo(.4,0),r.lineTo(-.38,0),r.closePath(),s.add(new ut(new Ur(r),Tn(t)));const o=new ut(new $e(.02,.95),Tn("#8c6a66"));o.position.set(.02,.62,0),s.add(o),s.add(new ut(Fr([[.05,.22,0],[.05,1.08,0],[.5,.22,0]]),Tn(e))),s.add(new ut(Fr([[-.02,.24,0],[-.02,.92,0],[-.36,.24,0]]),Tn("#ffd9c2")));const a=new ut(new $e(.9,.22),Tn("#fff0e0",{transparent:!0,opacity:.28}));return a.position.y=-.1,s.add(a),s.scale.setScalar(i),n.userData.update=c=>{s.rotation.z=Math.sin(c*.9+i)*.035,s.position.y=Math.sin(c*1.1+i)*.05*i*.2},n}function Py(){const i=new Xt,t=new Ks;t.moveTo(-30,0),t.bezierCurveTo(-22,9,-10,13,0,11),t.bezierCurveTo(10,15,24,8,34,0),t.closePath(),i.add(new ut(new Ur(t,16),Tn("#b99ab8")));const e=new Ks;e.moveTo(10,0),e.bezierCurveTo(22,6,40,7,58,0),e.closePath();const n=new ut(new Ur(e,12),Tn("#cfb4c6"));n.position.z=-2,i.add(n);const s=new ut(new $e(2.6,14),Tn("#fff1e6"));s.position.set(-6,18,.5),i.add(s);const r=new ut(new $e(2.6,3),Tn("#e58a7c"));r.position.set(-6,17,.6),i.add(r);const o=new ut(Fr([[-8,25,.6],[-4,25,.6],[-6,28.5,.6]]),Tn("#c9706a"));i.add(o);const a=new ut(new Un(3.2,20),Tn("#fff3b8",{transparent:!0,opacity:.8,blending:Si,depthWrite:!1}));return a.position.set(-6,24,.8),i.add(a),i.userData.update=c=>{const l=.5+.5*Math.sin(c*1.3);a.material.opacity=.25+.6*l*l,a.scale.setScalar(.7+.8*l)},i}function ic({cx:i=0,cy:t=6,cz:e=-30,rx:n=14,rz:s=6,speed:r=.22,ph:o=0,size:a=1}={}){const c=new Xt,l=Tn("#fffaf2"),u=Tn("#8b7a88"),h=new ut(new Be(.16,8,6),l);h.scale.set(.7,.6,2),c.add(h);const f=new ut(new ds(.035,.14,6),Tn("#f0a45c"));f.rotation.x=-Math.PI/2,f.position.z=-.38,c.add(f);const d=[-1,1].map(g=>{const _=new Xt,m=new Xt;_.add(m),m.scale.x=g,m.add(new ut(Fr([[0,0,-.16],[0,0,.14],[.62,0,-.1],[0,0,.14],[.62,0,.06],[.62,0,-.1]]),l));const p=new Xt;return p.position.x=.62,m.add(p),p.add(new ut(Fr([[0,0,-.1],[0,0,.06],[.55,0,.1]]),u)),c.add(_),{piv:_,outer:p,s:g}});return c.scale.setScalar(a),c.userData.update=g=>{const _=g*r+o,m=i+Math.sin(_)*n,p=e+Math.cos(_)*s,S=Math.cos(_)*n,M=-Math.sin(_)*s;c.position.set(m,t+Math.sin(g*.5+o)*.5,p),c.rotation.set(0,Math.atan2(-S,-M),0),c.rotateZ(-.25);const v=Math.sin(g*.33+o*2)>.55?.25:1,C=Math.sin(g*5.2+o*3)*.55*v+.12;for(const T of d)T.piv.rotation.z=C*T.s,T.outer.rotation.z=C*.7-.15},c}function Bh(i="#ea7458",t=.6,e=0){const n=new Xt,s=new Xt;n.add(s);const r=le(i,{grain:26,grainAmt:.22,rim:.4,tint:"#b0527a"}),o=new ut(new Be(.1,16,10),r);o.scale.set(1.25,.55,.9),o.position.y=.075,o.castShadow=!0,un(o,"#9a4a48",.006,20),s.add(o);const a=[-1,1].map(v=>{const C=new Xt;C.position.set(v*.045,.11,-.06);const T=new ut(new Ae(.008,.008,.06,6),r);T.position.y=.03,C.add(T);const E=new ut(new Be(.02,8,6),new Xe({color:"#3a2a34"}));E.position.y=.065,C.add(E);const P=new ut(new Be(.007,6,4),new Xe({color:"#ffffff"}));return P.position.set(.006,.073,-.014),C.add(P),s.add(C),C}),c=[-1,1].map(v=>{const C=new Xt;C.position.set(v*.11,.07,-.05);const T=new ut(new wi(.014,.06,3,6),r);T.rotation.z=v*-1.1,T.position.set(v*.03,.015,0),C.add(T);const E=new ut(new Be(.036,10,8),r);return E.scale.set(1.25,.8,.7),E.position.set(v*.075,.04,-.01),E.castShadow=!0,un(E,"#9a4a48",.005,20),C.add(E),s.add(C),{p:C,s:v}}),l=[];for(const v of[-1,1])for(let C=0;C<3;C++){const T=new Xt;T.position.set(v*.1,.06,-.02+C*.04);const E=new ut(new wi(.008,.09,3,5),r);E.rotation.z=v*.95,E.position.set(v*.045,-.025,0),T.add(E),s.add(T),l.push({p:T,s:v,i:C})}let u=0,h=0,f=0,d=0,g=1+e,_=0,m=0,p=Math.random,S=0;const M=()=>{const v=p()*Math.PI*2,C=t*Math.sqrt(p());f=Math.cos(v)*C,d=Math.sin(v)*C*.7};return n.userData.poke=()=>{_=1,S=.35,g=Math.max(g,.6)},n.userData.worldPos=v=>(v.set(u,.08,h),s.parent.localToWorld(v)),n.userData.update=(v,C)=>{const T=Math.min(C,.1);if(S=Math.max(0,S-T),g>0)g-=T,g<=0&&M();else{const x=f-u,y=d-h,R=Math.hypot(x,y);if(R<.02)g=.8+2.6*p(),p()<.5&&(_=1);else{const N=.32*T;u+=x/R*Math.min(N,R),h+=y/R*Math.min(N,R);let D=Math.atan2(y,-x)*0+Math.atan2(-y,x);Math.abs(Math.atan2(Math.sin(D-m),Math.cos(D-m)))>Math.PI/2&&(D+=Math.PI),m+=Math.atan2(Math.sin(D-m),Math.cos(D-m))*Math.min(1,T*5)}}const E=g<=0?1:0;s.position.set(u,E*Math.abs(Math.sin(v*14))*.006+Math.sin(Math.PI*Math.min(1,S/.35))*.05,h),s.rotation.set(0,m,E*Math.sin(v*14)*.05);for(const x of l)x.p.rotation.z=E*Math.sin(v*16+x.i*2.1+(x.s>0?0:1.5))*.35;_=Math.max(0,_-T*.45);const P=Math.sin(Math.PI*Math.min(1,_*1.4))*.9;for(const x of c)x.p.rotation.z=x.s*(P*.9+Math.sin(v*2+x.s)*.06),x.p.position.y=.07+P*.03;for(const x of a)x.rotation.x=Math.sin(v*1.7+e)*.12+S*1.2},n}function Iy(i=46){const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d"),n=e.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,240,200,0.5)"),n.addColorStop(1,"rgba(255,230,180,0)"),e.fillStyle=n,e.fillRect(0,0,32,32);const s=new Float32Array(i*3),r=[];for(let c=0;c<i;c++)r.push([Math.random()*7-3.5,.25+Math.random()*2.3,-3.2+Math.random()*5.6,Math.random()*6.28,.4+Math.random()]);const o=new Ye;o.setAttribute("position",new Cn(s,3));const a=new Wv(o,new Af({map:new Kn(t),size:.07,transparent:!0,opacity:.6,depthWrite:!1,blending:Si,color:"#ffe6b0",sizeAttenuation:!0}));return a.frustumCulled=!1,a.userData.update=c=>{for(let l=0;l<i;l++){const u=r[l];s[l*3]=u[0]+Math.sin(c*.21*u[4]+u[3])*.5+c*.05*u[4]%1*.6,s[l*3+1]=u[1]+Math.sin(c*.33*u[4]+u[3]*2)*.22,s[l*3+2]=u[2]+Math.cos(c*.17*u[4]+u[3])*.4}o.attributes.position.needsUpdate=!0,a.material.opacity=.5+.12*Math.sin(c*.8)},a}const Ho={low:{label:"낮음",pixelRatio:1,shadow:1024,fps:30,map:512,msaa:0,finish:!1},mid:{label:"보통",pixelRatio:1.5,shadow:1024,fps:30,map:2048,msaa:0,finish:!0},high:{label:"높음",pixelRatio:2,shadow:2048,fps:60,map:2048,msaa:4,finish:!0}};function Ly(){const i=new URLSearchParams(location.search).get("quality");if(Ho[i])return i;try{const e=sessionStorage.getItem("s5q");if(Ho[e])return e}catch{}return(matchMedia==null?void 0:matchMedia("(pointer: coarse)").matches)||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")?"mid":"high"}const Dy=`
uniform sampler2D tScene; uniform vec2 uRes, uSun; uniform float uDpr, uPaper, uDof, uFocus, uDusk, uHor, uSkyK, uNight, uSink, uTime, uSunR; uniform vec3 uLamp0, uLamp1, uLamp2; uniform vec2 uSunD;
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
${zr}
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
}`,Ui=new I(0,0,-.8);function Uy(i,t=null){var nu,iu;const e=Ly(),n=Ho[e],s=new kv({canvas:i,antialias:!1,powerPreference:"default"});s.setPixelRatio(Math.min(devicePixelRatio||1,n.pixelRatio)),s.shadowMap.enabled=!0,s.shadowMap.type=qh,s.outputColorSpace=Oe,s.info.autoReset=!1;const r=s.getContext(),o=s.capabilities.isWebGL2&&(s.extensions.has("EXT_color_buffer_half_float")||s.extensions.has("EXT_color_buffer_float")),a=new Er,c=new yn(40,1,.05,2e3);c.rotation.order="YXZ";const l=new yn(40,1,.05,2e3),u=iy(s,{mapW:n.map});a.add(u.sky,u.ground);const h=jx(Number(new URLSearchParams(location.search).get("seed"))||20261115),f=new Ux("#efd2dc","#d9b08e",.9);a.add(f);const d=new wh("#ffd6a8",1.35);d.position.set(1.6,4,-7.8),d.target.position.set(0,0,-.3),a.add(d.target),d.castShadow=!0,d.shadow.mapSize.set(n.shadow*2,n.shadow*2),Object.assign(d.shadow.camera,{left:-10,right:10,top:7,bottom:-7,near:1,far:22}),d.shadow.bias=-8e-4,d.shadow.normalBias=.02,d.shadow.radius=5,a.add(d);const g=new wh("#fff0dc",1.3);g.position.set(-2.4,3.6,3.2),a.add(g);const _=new ut(new $e(24,16),new Sx({color:"#5e2f4c",opacity:.58}));_.rotation.x=-Math.PI/2,_.position.set(0,.002,1),_.receiveShadow=!0,a.add(_);const m=new I(Ui.x+.05,0,Ui.z+.1),p=-2.25,S=ja(!0);S.scale.setScalar(1.12),S.position.set(m.x+.08,0,m.z+.08),S.rotation.y=.1,a.add(S);const M=new ut(new $e(1.3,1.1),new Xe({map:Kx(),transparent:!0,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.set(m.x,.03,m.z+.05),a.add(M);const v=uy();a.add(v.group);let C=null;const T=fy(v.group,{onCue:(U,k)=>C==null?void 0:C(U,k)});v.group.rotation.order="YXZ",v.group.position.set(m.x,.03,m.z),v.group.rotation.set(0,p,0);const E=Ey();v.bones.head.add(E);const P=My(.265);P.position.set(0,.13,0),P.visible=!1,v.bones.head.add(P);const x=v.extras,y=Ty();y.visible=!1,v.bones.spine.add(y);const R={cap:!0,blanket:!1,headset:!1,glasses:!1},N=()=>{E.visible=R.cap,P.visible=R.headset,x.blanket.visible=!1,y.visible=R.blanket,x.glasses.visible=R.glasses};N();let D=2.2;const G={group:v.group,head:v.bones.head,front:-1,update(U,k){T.update(k),D-=k,D<-.13&&(D=2.4+Math.random()*3.4+(Math.random()<.2?-2.1:0));const J=T.state.eyes>.5||D<0,Ct=T.state.eyes<=.5||T.state.sleepy;for(const ct of x.lids)ct.visible=J,ct.rotation.z=Ct?Math.PI:0,ct.position.y=Ct?.178:.162;for(const ct of x.eyes)ct.visible=!J;x.mug.visible=!!T.state.show.mug,x.leaf.visible=!!T.state.show.leaf,x.skewer.visible=!!T.state.show.skewer}},q=[G],X=0;function Y(U){return R[U]=!R[U],N(),R[U]}const z=U=>T.play(U),nt=[],ht=[],lt=(U,k,J,Ct,ct,_t=1,te=null)=>(te!==null&&(U.rotation.y=te),a.add(U),nt.push({o:U,dxL:k,syL:J,dxP:Ct,syP:ct,sP:_t,s0:U.scale.x,y0:U.position.y}),U.userData.update&&ht.push(U),U),Lt=Ih();Lt.scale.setScalar(.86),a.add(Lt);const Gt=[];Lt.traverse(U=>{U.userData.tip&&Gt.push(U)});const $=py();$.position.set(m.x+.5,.03,m.z+.22),$.scale.setScalar(1.25),a.add($),ht.push($);const rt=vy();rt.position.set(m.x+.38,.02,m.z+.95),rt.scale.setScalar(.95),a.add(rt),ht.push(rt);let Q=0,K=0;const pt=new Er,xt=(()=>{const U=document.createElement("canvas");U.width=U.height=64;const k=U.getContext("2d"),J=k.createRadialGradient(32,32,0,32,32,32);J.addColorStop(0,"rgba(255,240,200,1)"),J.addColorStop(.2,"rgba(255,200,120,.75)"),J.addColorStop(.5,"rgba(255,170,90,.22)"),J.addColorStop(1,"rgba(255,150,80,0)"),k.fillStyle=J,k.fillRect(0,0,64,64);const Ct=new Kn(U);return Ct.colorSpace=Oe,Ct})(),Pt=U=>{const k=new Ga(new Do({map:xt,transparent:!0,depthWrite:!1,depthTest:!1,blending:Si,opacity:0}));return k.scale.setScalar(U),pt.add(k),k},ee=Gt.map(()=>Pt(.3)),it=Pt(.75),gt=Pt(1.6),L=Array.from({length:22},(U,k)=>{const J=Pt(.12);return J.material.color.set("#e4ff9c"),J.userData={x:-3+Math.random()*6,y:.25+Math.random()*1.1,z:m.z-.8+Math.random()*2.6,ph:Math.random()*20,sp:.3+Math.random()*.5},J}),Nt=Array.from({length:46},(U,k)=>{const J=Pt(.32);return J.material.color.set("#6fe6ff"),J.userData={i:k,ph:Math.random()*10,base:new I},J});function ft(){if(!de)return;const U=xe/de.scale/2;Nt.forEach((k,J)=>{const Ct=an.focusX-U*1.1+J/(Nt.length-1)*U*2.2,ct=748+26*Math.sin(J*1.7)*Math.random();k.userData.base.copy(bt(Ct,ct)).setY(.03)})}const It=new Jt("#ffc874");lt(dy(),255,812,150,828,.85);const vt=lt(Qa(),545,880,168,985,.72,-.3);lt(gy(),-600,776,-250,760,.35),lt(Lh("#ef8466"),-470,935,-232,940,.85,.4);const Wt=[[-345,875,-190,870],[-330,992,-165,1e3],[250,975,160,1003],[395,890,205,885]],Et=["#f4a99c","#f6e3cf","#e5c3ea","#f7c9a8"],A=Wt.map(([U,k,J,Ct],ct)=>lt(ct===2?tc(Et[ct]):Eo(Et[ct]),U,k,J,Ct,.9,.6+ct*1.7));A.forEach((U,k)=>{U.scale.setScalar(.9),nt[nt.length-A.length+k].s0=.9});const b=[[-560,870],[470,820],[-120,1e3],[600,960],[130,905]].map(([U,k],J)=>lt(_y(.032+J%3*.01,J%2?"#a99486":"#bba59e"),U,k,U*.32,k+J%3*8,1,J));lt(Dh(16,.75),-735,1006,-232,1012,.7),lt(Dh(12,.6),748,1010,236,1016,.7,1.2);const V=lt(Bh("#e8694c",4,0),415,820,-150,806,.6),tt=lt(Bh("#f2a06a",3.5,2.3),300,860,-60,850,.42);tt.visible=!1;const ot=lt(xy(),-260,792,-120,786,1.1,.5);ot.visible=!1,ot.userData.y0=0;const et=(()=>{const U=document.createElement("canvas");U.width=U.height=64;const k=U.getContext("2d");k.translate(32,32);const J=k.createRadialGradient(0,0,0,0,0,30);J.addColorStop(0,"rgba(255,255,255,1)"),J.addColorStop(.25,"rgba(255,246,214,0.55)"),J.addColorStop(1,"rgba(255,230,180,0)"),k.fillStyle=J,k.fillRect(-32,-32,64,64),k.fillStyle="rgba(255,255,255,0.95)";for(const ct of[0,Math.PI/2])k.save(),k.rotate(ct),k.beginPath(),k.moveTo(-30,0),k.quadraticCurveTo(0,2.5,30,0),k.quadraticCurveTo(0,-2.5,-30,0),k.fill(),k.restore();const Ct=new Kn(U);return Ct.colorSpace=Oe,Ct})(),Ft=A.map(()=>{const U=new Ga(new Do({map:et,transparent:!0,depthWrite:!1,blending:Si,opacity:0}));return U.scale.setScalar(.2),a.add(U),U}),yt=A.map(()=>0),At=Oh(7.5);At.position.set(-22,0,-125),a.add(At),ht.push(At);const re=Oh(9,"#8f7aa6","#ffe9d6");re.position.set(30,0,-300),a.add(re),ht.push(re);const dt=Py();dt.position.set(-58,0,-560),dt.scale.setScalar(1.35),a.add(dt),ht.push(dt);for(const U of[ic({cx:-6,cy:7,cz:-34,rx:15,rz:6,speed:.2,ph:0}),ic({cx:6,cy:8.5,cz:-44,rx:18,rz:8,speed:-.16,ph:2.2,size:1.1}),ic({cx:-2,cy:4.2,cz:-17,rx:7,rz:3,speed:.27,ph:4.1,size:.8})])a.add(U),ht.push(U);const Dt=Iy(n.finish?46:24);a.add(Dt),ht.push(Dt);const kt=new Xt;kt.visible=!1,a.add(kt);const Vt=(U,k,J,Ct=0,ct=1)=>(U.position.x=k,U.position.z=J,U.rotation.y=Ct,U.scale.setScalar(ct),kt.add(U),U.userData.update&&ht.push(U),U),Ut=(U,k="rgba(255,248,236,0.92)",J="#5a4034")=>{const Ct=document.createElement("canvas");Ct.width=512,Ct.height=112;const ct=Ct.getContext("2d");ct.font='600 44px "Gaegu", "Nanum Pen Script", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';const _t=Math.min(480,ct.measureText(U).width+56);ct.fillStyle=k,ct.beginPath(),ct.roundRect(256-_t/2,14,_t,84,42),ct.fill(),ct.fillStyle=J,ct.textAlign="center",ct.textBaseline="middle",ct.fillText(U,256,58,440);const te=new Kn(Ct);return te.colorSpace=Oe,te},ue=[],Qt=[{x:m.x,z:m.z,mine:!0}],Ee=[],F=[["바다의 뚜껑","파도 소리 들으면서 읽으니까 문장이 더 천천히 들어온다"],["작은 것들의 신","오늘은 스무 쪽. 내일 또 올게"],["어린 왕자","길들인다는 건 시간을 쓰는 일"],["달러구트 꿈 백화점","졸리지만 한 장만 더"],["모모","시간은 삶이고 삶은 마음속에 있다"],["긴긴밤","노을이 예뻐서 책을 잠깐 덮었다"]],Mt=(U,k,J,Ct=.6,ct)=>{const _t=new Ga(new Do({map:Ut(U,ct),transparent:!0,depthTest:!1,depthWrite:!1}));return _t.scale.set(3.7,.81,1),_t.position.set(k,Ct,J),_t.renderOrder=50,_t.userData.text=U,_t.userData.bg=ct,kt.add(_t),ue.push(_t),_t},j=[],st=(U,k,J,Ct,ct=2.6)=>{const _t=new Xe({transparent:!0,depthWrite:!1,opacity:.85}),te=new ut(new $e(ct,ct/3),_t);te.rotation.set(-Math.PI/2,0,Ct),te.position.set(k,.006,J),te.renderOrder=2,kt.add(te);const qt=()=>{var ie;const ae=document.createElement("canvas");ae.width=768,ae.height=256;const $t=ae.getContext("2d");$t.globalAlpha=.7,$t.drawImage(Go(U,li[0],"#fff0d8"),2,3),$t.globalAlpha=1,$t.drawImage(Go(U,li[0],"#8a5644"),0,0),(ie=_t.map)==null||ie.dispose(),_t.map=new Kn(ae),_t.map.colorSpace=Oe,_t.needsUpdate=!0};qt(),j.push(qt)},Tt=new Xe({color:"#7a4a3c",transparent:!0,opacity:.3,depthWrite:!1}),wt=new Un(.07,10),Kt=(U,k,J,Ct)=>{const ct=Math.round(Math.hypot(J-U,Ct-k)/.32),_t=Math.atan2(J-U,Ct-k);for(let te=0;te<=ct;te++){const qt=te/ct,ae=te%2?1:-1,$t=new ut(wt,Tt);$t.rotation.set(-Math.PI/2,0,_t),$t.scale.set(.7,1.25,1),$t.position.set(U+(J-U)*qt+Math.cos(_t)*.09*ae+Math.sin(qt*9)*.05,.005,k+(Ct-k)*qt-Math.sin(_t)*.09*ae),$t.renderOrder=2,kt.add($t)}};[[-5.4,1.2,"#6fa8c9",.3,"소미 · 읽는 중"],[4.9,.4,"#f2c14e",-.4,"바다곰 · 읽는 중"],[-2.9,4,"#b98ad0",.8,null],[3.2,3.6,"#7cc4a0",-.2,"달빛 · 쉬는 중"],[8.2,2.6,"#ee8f78",.5,null],[-8.4,3.4,"#f0a8b8",-.6,null]].forEach(([U,k,J,Ct,ct],_t)=>{const te=Vt(Ih(J,"#fbeeda"),U,k,Ct,.86);te.rotation.z=.08*(_t%2?1:-1),Vt(ja(),U+.9,k+.6,Ct+.4,.9);const qt=Vt(_t%2?tc():Eo(Et[_t%6]),U-.5,k+1,_t,1);Ee.push({o:qt,who:ct?ct.split(" ")[0]:"누군가",title:F[_t][0],text:F[_t][1]}),Qt.push({x:U+.3,z:k+.4}),_t%3===0&&Vt(my(),U+1.7,k-.3,0,.9),ct&&Mt(ct,U,k-1.5,.6)}),Vt(Qa(),-6.6,4.4,.5,.9),Vt(Qa(),6.3,4.6,-.8,.75),Vt(ja(),5.6,-.4+2.6,-.3,.9),Vt(Eo("#f7c9b6"),6.5,2.9,1,.9),Vt(tc(),5,3,2,.8),Qt.push({x:5.7,z:2.6}),Mt("10분 전에 집에 갔어요",5.8,1.35,.6,"rgba(255,236,214,0.94)"),Kt(6.2,2.9,10.5,5.6),Kt(-5,1.9,-3.4,-.9),Kt(3,3.2,1.6,5.8),Kt(-8,4,-10.5,2),st("오늘도 수고했어",-3.3,1.9,.12),st("소미 다녀감",2.6,1.5,-.1,2),st("또 올게 바다야",-6.6,2.5,.2,2.4),st("한 장만 더",7.2,1,-.15,2),[[-1.8,2.6],[1.4,4.3],[-4.2,3.1],[6.9,3.9],[-7.3,1.5],[9.2,4.4],[.6,5.4],[-9.4,4.9]].forEach(([U,k],J)=>Vt(J%3?Eo(Et[J%6]):Lh(J%2?"#f6b56a":"#e88aa0"),U,k,J*1.3,.85));const Ie=new ut(new ea(1.25,1.36,48),new Xe({color:"#fff3c8",transparent:!0,opacity:.8,depthWrite:!1,blending:Si}));Ie.rotation.x=-Math.PI/2,Ie.position.set(Ui.x,.012,Ui.z+.1),kt.add(Ie),Mt("내 자리",Ui.x,Ui.z-1.7,.6,"rgba(255,255,255,0.96)"),(iu=(nu=document.fonts)==null?void 0:nu.ready)==null||iu.then(()=>setTimeout(()=>{j.forEach(U=>U()),ue.forEach(U=>{U.material.map.dispose(),U.material.map=Ut(U.userData.text,U.userData.bg)})},300));let ve="seat",pe=null;const rn={k:0,b:0},gn={x:m.x,z:m.z,mine:!0};function or(U,k=null){ve=U,U==="focus"&&Object.assign(gn,k||Qt[0]),U!=="bird"&&(w.tx=0,w.ty=0),U!=="focus"&&(Le.on=!1),pe==null||pe(U,gn)}const je={pos:new I,pitch:0,fov:40,init:!1},Ve={pos:new I,pitch:0,fov:40},Le={on:!1,onShell:null,onOther:null,noted:new Set,hover:-1},qi=new ai(1,1,{type:o?js:Qn,samples:n.msaa});o||(qi.texture.colorSpace=Oe);const We={tScene:{value:qi.texture},uRes:{value:new at},uDpr:{value:1},uPaper:{value:n.finish?1:0},uSun:{value:new at(.7,.75)},uDof:{value:1},uFocus:{value:.35},uDusk:{value:0},uHor:{value:.6},uSkyK:{value:1},uNight:{value:0},uSink:{value:0},uTime:{value:0},uSunR:{value:.04},uLamp0:{value:new I},uLamp1:{value:new I},uSunD:{value:new at(.65,.7)},uLamp2:{value:new I}},Yi=new Er,ar=new ut(new $e(2,2),new Dn({uniforms:We,depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Dy}));ar.frustumCulled=!1,Yi.add(ar);const ms=new Jo;let xe=1,me=1,de=null,ye=0;const Qe={pos:new I,pitch:0,fov:40,f:1,d:5},w={on:!1,x:0,y:0,tx:0,ty:0,k:0},B=new Ni(new I(0,1,0),0),H=new Th,W=new at,O=new I,mt=new I;function bt(U,k){const J=de.tx+U*de.scale,Ct=de.ty+k*de.scale;return W.set(J/xe*2-1,-(Ct/me)*2+1),H.setFromCamera(W,l),H.ray.intersectPlane(B,O)?O.clone():new I}function Rt(U){return mt.copy(U).project(c),[(mt.x+1)/2*xe,(1-mt.y)/2*me]}function Bt(U){return mt.copy(U).project(l),[((mt.x+1)/2*xe-de.tx)/de.scale,((1-mt.y)/2*me-de.ty)/de.scale]}function Yt(){xe=i.clientWidth||innerWidth,me=i.clientHeight||innerHeight,s.setSize(xe,me,!1);const U=s.getPixelRatio();qi.setSize(Math.round(xe*U),Math.round(me*U)),We.uRes.value.set(Math.round(xe*U),Math.round(me*U)),We.uDpr.value=U,de=u.layout(xe,me,U);const k=de.scale,J=me/2,Ct=de.portrait?178:205,ct=.3,_t=de.horizonFrac*me;We.uHor.value=1-de.horizonFrac;const te=Math.min(805,de.stageBottom-.2*(de.stageBottom-de.stageTop)),qt=de.ty+te*k,ae=J-_t,$t=(qt-J)/ae,ie=(-($t+1)+Math.sqrt(($t+1)**2+4*$t*ct*ct))/(2*$t*ct),tn=ae/ie,jt=tn/(Ct*k),we=ct*jt;Qe.pitch=Math.atan(ie),Qe.f=tn,Qe.d=jt,Qe.fov=en.radToDeg(2*Math.atan(me/2/tn)),Qe.pos.set(0,we,jt+Ui.z-.36),l.fov=Qe.fov,l.aspect=xe/me,l.position.copy(Qe.pos),l.rotation.order="YXZ",l.rotation.set(-Qe.pitch,0,0),l.updateProjectionMatrix(),l.updateMatrixWorld(),l.matrixWorldInverse.copy(l.matrixWorld).invert(),u.setRef(new he().multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse)),de.feetStage=te,de.camY=we,de.camDist=jt;const Ji=xe/k/2,wd=de.stageBottom,Ed=an.focusX,Wr=en.clamp((Ji-237)/360,0,1),Xr=en.lerp;for(const Wn of nt){const ru=bt(Ed+Xr(Wn.dxP,Wn.dxL,Wr),Math.min(Xr(Wn.syP,Wn.syL,Wr),wd+4));Wn.o.position.set(ru.x,Wn.y0,ru.z),Wn.o.scale.setScalar(Wn.s0*Xr(Wn.sP,1,Wr)),Wn.o.userData.s0=Wn.o.scale.x}Lt.position.set(Xr(-.5,-.92,Wr),0,Ui.z-.42);const su=[de.tx+1e3*k,de.ty+232*k];We.uSun.value.set(su[0]/xe,1-su[1]/me),We.uSunR.value=30*k/me,We.uSunD.value.set((de.tx+1e3*k)/xe,1-(de.ty+338*k)/me),Ot(!0),ft==null||ft()}let Zt=0;function Ot(U){const k=w.k,J=w.x*k,Ct=w.y*k,ct=(1-k)*(de.portrait?.035:.07),_t=J*.95+Math.sin(ye*.21)*ct,te=(Ct<0?-Ct*1:-Ct*.45)+.25*k+(Math.sin(ye*.13+1)*.5+.5)*ct,qt=Math.atan2(_t,Qe.d)*.18,ae=1+.08*k,$t=xe/me>1?1:0,ie=en.radToDeg(2*Math.atan(Math.tan(en.degToRad(Qe.fov)/2)/ae));if(ve==="bird"?(Ve.pos.set(w.x*($t?4.5:6.5),$t?13.5:15,3.4+w.y*3.2),Ve.pitch=-1.32,Ve.fov=$t?52:64):ve==="focus"?(Ve.pos.set(gn.x,$t?4.3:5.6,gn.z+($t?3.3:3.6)),Ve.pitch=-.93,Ve.fov=$t?44:54):(Ve.pos.set(Qe.pos.x+_t,Qe.pos.y-.1*Math.max(0,te),Qe.pos.z-te),Ve.pitch=-Qe.pitch,Ve.fov=ie),!je.init||U===!0)je.pos.copy(Ve.pos),je.pitch=Ve.pitch,je.fov=Ve.fov,je.init=!0;else{const jt=Math.min(1,Zt*3.2);je.pos.lerp(Ve.pos,jt),je.pitch+=(Ve.pitch-je.pitch)*jt,je.fov+=(Ve.fov-je.fov)*jt}c.fov=je.fov,c.aspect=xe/me,c.position.copy(je.pos);const tn=en.clamp((-je.pitch-Qe.pitch)/.5,0,1);c.rotation.set(je.pitch,qt*(1-tn),0),c.updateProjectionMatrix(),c.updateMatrixWorld(),rn.k=tn,rn.b=en.clamp((-je.pitch-1)/.3,0,1),u.setSky(-(Qe.f*Math.tan(qt))/de.scale,ae)}addEventListener("resize",Yt),Yt();let oe=null,be=null;const De=new Th,on=new at;i.addEventListener("pointerup",U=>{var ct,_t,te;if(!be||Math.hypot(U.clientX-be.x,U.clientY-be.y)>8)return;const k=i.getBoundingClientRect();on.set((U.clientX-k.left)/k.width*2-1,-((U.clientY-k.top)/k.height)*2+1),De.setFromCamera(on,c);const J=U.clientX-k.left,Ct=U.clientY-k.top;if(ve==="bird"){if(!De.ray.intersectPlane(B,O))return;let qt=null,ae=2.6;for(const $t of Qt){const ie=Math.hypot(O.x-$t.x,O.z-$t.z);ie<ae&&(ae=ie,qt=$t)}qt&&or("focus",qt);return}if(ve==="seat"){const qt=ge(J,Ct);if(qt>=0){yt[qt]=1,(ct=Le.onShell)==null||ct.call(Le,qt);return}for(const ae of[V,tt]){if(!ae.visible)continue;const[$t,ie]=Rt(ae.userData.worldPos(dn));if(Math.hypot($t-J,ie-Ct)<Math.max(42,Math.min(xe,me)*.065)){ae.userData.poke(),(_t=Le.onCrab)==null||_t.call(Le,$t,ie,ae===tt);return}}if(ot.visible){dn.copy(ot.position).setY(.06);const[ae,$t]=Rt(dn);if(Math.hypot(ae-J,$t-Ct)<Math.max(44,Math.min(xe,me)*.07)){(te=Le.onBottle)==null||te.call(Le);return}}return}if(ve==="focus"){let qt=null,ae=56;A.forEach(($t,ie)=>{const[tn,jt]=Rt($t.position),we=Math.hypot(tn-J,jt-Ct);we<ae&&(ae=we,qt=()=>{var Ji;return(Ji=Le.onShell)==null?void 0:Ji.call(Le,ie)})}),Ee.forEach($t=>{const[ie,tn]=Rt($t.o.position),jt=Math.hypot(ie-J,tn-Ct);jt<ae&&(ae=jt,qt=()=>{var we;return(we=Le.onOther)==null?void 0:we.call(Le,$t)})}),qt==null||qt()}});function ge(U,k){let J=-1,Ct=Math.max(40,Math.min(xe,me)*.075);return A.forEach((ct,_t)=>{const[te,qt]=Rt(ct.position),ae=Math.hypot(te-U,qt-(k+6));ae<Ct&&(Ct=ae,J=_t)}),J}i.addEventListener("pointermove",U=>{if(U.pointerType!=="mouse"||ve!=="seat"){Le.hover=-1;return}const k=i.getBoundingClientRect();Le.hover=ge(U.clientX-k.left,U.clientY-k.top),i.style.cursor=Le.hover>=0?"pointer":""}),i.addEventListener("pointerdown",U=>{var k;be={x:U.clientX,y:U.clientY},ve==="bird"&&(oe={x:U.clientX,y:U.clientY,tx:w.tx,ty:w.ty},(k=i.setPointerCapture)==null||k.call(i,U.pointerId))}),i.addEventListener("pointermove",U=>{if(!oe)return;const k=Math.min(xe,me)*.9;w.tx=en.clamp(oe.tx-(U.clientX-oe.x)/k*2,-1,1),w.ty=en.clamp(oe.ty+(U.clientY-oe.y)/k*2,-1,1)});const zt=()=>{oe=null};i.addEventListener("pointerup",zt),i.addEventListener("pointercancel",zt);function Hn(U){w.on=U,U||(w.tx=0,w.ty=0)}let ne=null;const wn=1.6;function Ti(){const U=xe/de.scale/2,k=en.clamp((U-237)/360,0,1),J=en.lerp(300,400,k);return{cx:an.focusX+en.lerp(-5,-40,k),cy:en.lerp(950,946,k),w:J,h:J/3*wn}}const hn=(U,k)=>Cy(U,k,768,256*wn|0);function Zi(U,{instant:k=!1,delay:J=.7}={}){ne&&ne.drawn>0&&(ne.erasing={mask:hn(ne.spec,1),box:ne.box,left:4});const Ct=Ti(),ct=ne==null?void 0:ne.erasing;return ne={spec:U,box:Ct,p:k?1:0,wait:k?ye<1?1-ye:0:J,dur:U.strokes?2:1.7,drawn:0,erasing:ct,instant:k},ne}function Ne(U){const k=ne;if(!(!k||!oa)){if(k.erasing&&k.erasing.left>0){const J=k.erasing;u.stamp(J.mask,J.box.cx,J.box.cy,J.box.w,J.box.h,.3,!0),J.left--;return}if(k.wait>0){k.wait-=U;return}k.drawn>=1||(k.p=k.instant?1:Math.min(1,k.p+U/k.dur),(k.p-k.drawn>.035||k.p>=1)&&(u.stamp(hn(k.spec,k.p),k.box.cx,k.box.cy,k.box.w,k.box.h,1),k.drawn=k.p))}}const En=new ai(256,256);En.texture.colorSpace=Oe;const fi=new yn(24,1,.1,30),_n=new Uint8Array(256*256*4),ti=new Jt("#cfe7ea"),fn=new I;function kr(U){const k=q[X],J=k.group.rotation.y,Ct=k.front,ct=Math.sin(J)*Ct,_t=Math.cos(J)*Ct,te=k===G;k.head.getWorldPosition(fn),fi.position.set(fn.x+ct*2.6+_t*.2,fn.y+(te?.22:.02),fn.z+_t*2.6-ct*.2),fi.lookAt(fn.x,fn.y+(te?.16:-.06),fn.z);const qt=a.children.map(ie=>ie.visible);a.children.forEach(ie=>{!ie.isLight&&ie!==q[X].group&&(ie.visible=!1)});const ae=a.background;a.background=ti,s.setRenderTarget(En),s.render(a,fi),s.setRenderTarget(null),a.background=ae,a.children.forEach((ie,tn)=>{ie.visible=qt[tn]}),s.readRenderTargetPixels(En,0,0,256,256,_n);const $t=U.createImageData(256,256);for(let ie=0;ie<256;ie++)$t.data.set(_n.subarray((255-ie)*1024,(256-ie)*1024),ie*1024);U.putImageData($t,0,0)}function xd(U="파도서재"){const k=document.createElement("canvas");k.width=512,k.height=128;const J=k.getContext("2d");J.clearRect(0,0,512,128),J.font='700 84px "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif',J.textAlign="center",J.textBaseline="middle",J.lineJoin="round",J.lineWidth=9,J.strokeStyle="rgba(0,0,0,0.55)",J.strokeText(U,256,68),J.fillStyle="#000",J.fillText(U,256,68);const Ct=xe/de.scale/2,ct=Ct<420,_t=ct?Ct*.55:360,te=ct?an.focusX-Ct+_t/2+14:an.focusX-330,qt=735;return u.stamp(k,te,qt,_t,_t/4,1),{cx:te,cy:qt,w:_t,h:_t/4}}let oa=!1,ql=14,Yl=0,gs=1,Zl=1;const dn=new I;function yd(){const U=document.createElement("canvas");U.width=512,U.height=256;const k=U.getContext("2d");k.fillStyle="rgba(0,0,0,0.85)";for(let te=0;te<15;te++){const qt=te/14,ae=480-qt*400-Math.sin(qt*3)*30,$t=236-qt*190+Math.sin(qt*5)*6,ie=te%2?1:-1;k.save(),k.translate(ae+ie*5,$t+ie*6),k.rotate(-.6-qt*.3+ie*.25),k.beginPath(),k.ellipse(0,0,9,5,0,0,6.3),k.fill(),k.restore()}const J=xe/de.scale/2,Ct=en.clamp((J-237)/360,0,1);u.stamp(U,an.focusX+en.lerp(120,390,Ct),915,en.lerp(260,520,Ct),en.lerp(180,230,Ct),.8);const ct=document.createElement("canvas");ct.width=ct.height=128;const _t=ct.getContext("2d");_t.strokeStyle="rgba(0,0,0,0.95)",_t.lineWidth=9,_t.lineCap="round",_t.lineJoin="round",_t.beginPath(),_t.moveTo(64,108),_t.bezierCurveTo(8,66,20,18,64,44),_t.bezierCurveTo(108,18,120,66,64,108),_t.stroke(),u.stamp(ct,an.focusX+en.lerp(-120,-250,Ct),792,84,52,1)}const ei=Number(new URLSearchParams(location.search).get("timescale"))||1,$l=Number(new URLSearchParams(location.search).get("dusk")),Jl=Number(new URLSearchParams(location.search).get("night")),Fe={start:performance.now(),minutes:10,forced:Number.isFinite($l)&&new URLSearchParams(location.search).has("dusk")?$l:null,v:0,night:0,sink:0,nightForced:Number.isFinite(Jl)&&new URLSearchParams(location.search).has("night")?Jl:null};let $i=null,aa=-1,cr=0;const Ai={sun:new Jt("#ffd6a8"),sunD:new Jt("#ff9a5c"),fill:new Jt("#fff0dc"),fillD:new Jt("#e9b2b8"),sky:new Jt("#efd2dc"),skyD:new Jt("#d9a0b8"),night:new Jt("#8fa2d8")},_s=new I;function Md(){var $t,ie,tn;const U=(performance.now()-Fe.start)/6e4,k=jt=>(jt=Math.min(1,Math.max(0,jt)),jt*jt*(3-2*jt));if(Fe.to!==void 0){const jt=($t=Fe.nightForced)!=null?$t:Fe.night,we=Zt/7,Ji=jt+Math.max(-we,Math.min(we,Fe.to-jt));Fe.nightForced=Ji,Ji===Fe.to&&(Fe.to=void 0)}let J=(ie=Fe.nightForced)!=null?ie:k((U-11)/8),Ct=Fe.nightForced!==null?Math.min(1,Fe.nightForced*3):k((U-10)/4);const ct=J>0?1:(tn=Fe.forced)!=null?tn:Math.min(1,U/Fe.minutes),_t=ct*ct*(3-2*ct);Fe.v=_t,Fe.night=J,Fe.sink=Ct,We.uDusk.value=_t*(1-J*.6),We.uNight.value=J,We.uSink.value=Ct,We.uTime.value=ye;const te=J;for(let jt=0;jt<Gt.length;jt++)Gt[jt].material.emissive.copy(It).multiplyScalar(te*.9),Gt[jt].getWorldPosition(dn),ee[jt].position.copy(dn),ee[jt].material.opacity=te*(.75+.25*Math.sin(ye*2.3+jt));$.userData.setOn(k((J-.15)/.3)),$.userData.glowAt.getWorldPosition(dn),it.position.copy(dn),it.material.opacity=k((J-.15)/.3)*(.85+.15*Math.sin(ye*7.3));{const[jt,we]=Rt(dn);We.uLamp0.value.set(jt/xe,1-we/me,.32*Math.min(1,me/xe*1.6))}{dn.set(Lt.position.x,1.3,Lt.position.z);const[jt,we]=Rt(dn);We.uLamp1.value.set(jt/xe,1-we/me,.42*Math.min(1,me/xe*1.6))}rt.visible=J>.25,J<.25&&(Q=0),K+=(Q-K)*Math.min(1,Zt*1.5),rt.userData.setOn(K),rt.userData.glowAt.getWorldPosition(dn),gt.position.copy(dn),gt.material.opacity=K*(.55+.15*Math.sin(ye*9.1)*Math.sin(ye*3.7));{const[jt,we]=Rt(dn);We.uLamp2.value.set(jt/xe,1-we/me,.5*Math.min(1,me/xe*1.6)*K)}for(const jt of L){const we=jt.userData;jt.position.set(we.x+Math.sin(ye*we.sp+we.ph)*.5,we.y+Math.sin(ye*we.sp*1.7+we.ph*2)*.2,we.z+Math.cos(ye*we.sp*.8+we.ph)*.4),jt.material.opacity=k((J-.5)/.4)*Math.max(0,Math.sin(ye*1.3+we.ph*3))**2}for(const jt of Nt){const we=jt.userData;jt.position.copy(we.base),jt.material.opacity=k((J-.4)/.4)*(.25+.75*(lr.wash||0))*(.5+.5*Math.sin(ye*3+we.ph))}cr+=((J>.4?1:0)-cr)*Math.min(1,Zt*2.5),x.shawl.visible=cr>.02,x.shawl.scale.setScalar(.85+.15*cr),x.shawl.position.y=(1-cr)*.12;const qt=J>.4?2:J>.02?1:0;if(qt!==aa){const jt=aa;aa=qt,jt>=0?$i==null||$i(qt,J):$i==null||$i(qt,J,!0)}if(Vr==null||Vr(J),d.color.copy(Ai.sun).lerp(Ai.sunD,_t),d.intensity=(1.35-.25*_t)*(1-.85*J),g.color.copy(Ai.fill).lerp(Ai.fillD,_t).lerp(Ai.night,J),g.intensity=(1.3-.45*_t)*(1-.5*J),f.color.copy(Ai.sky).lerp(Ai.skyD,_t).lerp(Ai.night,J),f.intensity=(.9-.2*_t)*(1-.45*J),c.getWorldDirection(_s),_s.y=0,_s.lengthSq()<1e-6){We.uHor.value=9;return}_s.normalize(),dn.set(c.position.x+_s.x*1500,0,c.position.z+_s.z*1500);const[,ae]=Rt(dn);We.uHor.value=1-ae/me}const Sd=U=>{Fe.forced=U},bd=U=>{Fe.nightForced=U};let Vr=null;const Kl={paused:!1};let ca=performance.now(),jl=0,la=null,Gr=0,ua=ca,Ql=0,tu=0,ha=0,lr=h.at(0);const Hr={calls:0,triangles:0};function eu(U){if(requestAnimationFrame(eu),U-jl<1e3/n.fps-2)return;const k=performance.now(),J=Kl.paused?0:Math.min(.1,(U-ca)/1e3)*ei;ca=U,jl=U,ye+=J,w.x+=(w.tx-w.x)*Math.min(1,J/ei*4.5),w.y+=(w.ty-w.y)*Math.min(1,J/ei*4.5),w.k+=((w.on?1:0)-w.k)*Math.min(1,J/ei*3.5),Zt=J/ei,Ot(),lr=h.at(ye),q[X].update(ye,J),ye>ql&&ve==="seat"&&!T.current&&(ql=ye+22+Math.random()*20,z(Math.random()<.8?"page":"sea"));for(const ct of ht)ct.userData.update(ye,J);if(Lt.userData.top.rotation.z=Math.sin(ye*.7)*.012,Lt.userData.top.rotation.x=Math.sin(ye*.53+1)*.01,!oa&&ye>.6&&(oa=!0,yd()),kt.visible=rn.k>.03,kt.visible){for(const ct of ue)ct.material.opacity=rn.b;Ie.material.opacity=(.55+.3*Math.sin(ye*2.4))*rn.b,Ie.scale.setScalar(1+.04*Math.sin(ye*2.4))}const Ct=ve==="focus"?1:0;gs+=((ve==="focus"&&gn.mine?.28:1)-gs)*Math.min(1,J/ei*3),Math.abs(gs-Zl)>.005&&(Zl=gs,Lt.userData.top.traverse(ct=>{ct.material&&!ct.userData.isOutline&&(ct.material.transparent=gs<.99,ct.material.opacity=gs)})),Ee.forEach((ct,_t)=>{ct.o.position.y=Ct*Math.abs(Math.sin(ye*3+_t*1.7))*.04}),We.uDof.value+=((ve==="seat"?1:ve==="focus"?.35:0)-We.uDof.value)*Math.min(1,J/ei*3);{const[,ct]=Rt(dn.set(m.x,.55,m.z));We.uFocus.value=1-ct/me}if(A.forEach((ct,_t)=>{var tn;const te=(tn=ct.userData.y0)!=null?tn:ct.userData.y0=ct.position.y;yt[_t]=Math.max(0,yt[_t]-J/ei*1.6);const qt=yt[_t]>0?Math.sin(Math.PI*(1-yt[_t])):0;ct.position.y=te+qt*.12,ct.rotation.z=qt*.35;const ae=(ye*.42+_t*.29)%1,$t=Math.max(0,Math.sin(Math.PI*Math.min(1,ae/.22))),ie=Ft[_t];ie.position.set(ct.position.x+.06,ct.position.y+.14*ct.scale.x/.9,ct.position.z),ie.material.opacity=ve==="bird"?0:(ae<.22?$t:0)*(Le.noted.has(_t)?1:.85)+(Le.hover===_t?.6:0),ie.scale.setScalar(.16+.12*$t+(Le.hover===_t?.08:0)),ie.material.rotation=ye*.6+_t,ct.scale.setScalar(ct.userData.s0),Le.hover===_t&&ct.scale.multiplyScalar(1.12)}),Ne(J/ei),Md(),t!=null&&t.ready&&(Yl+=J)>.2&&(Yl=0,t.setWash(lr.wash)),s.info.reset(),u.update(ye,J,lr,ei),s.setRenderTarget(qi),s.render(a,c),s.setRenderTarget(null),s.render(Yi,ms),Fe.night>.01){const ct=s.autoClear;s.autoClear=!1,s.render(pt,c),s.autoClear=ct}Hr.calls=s.info.render.calls,Hr.triangles=s.info.render.triangles,r.flush(),ha+=performance.now()-k,Gr++,la===null&&u.ready.done&&(la=Math.round(U)),U-ua>=1e3&&(Ql=Math.round(Gr*1e3/(U-ua)),tu=+(ha/Gr).toFixed(1),Gr=0,ha=0,ua=U)}return requestAnimationFrame(eu),{setView:or,get view(){return ve},set onView(U){pe=U},pick:Le,writeSand:Zi,renderMirror:kr,toggleItem:Y,worn:R,act:z,motion:T,ctl:Kl,set onCue(U){C=U},get sandWriting(){return ne},setDusk:Sd,get dusk(){return Fe.v},setNight:bd,get night(){return Fe.night},set onNight(U){$i=U},set onNightLevel(U){Vr=U},setKind:U=>v.setKind(U),get kind(){return v.kind},objects2:{lantern:$,tips:Gt,fire:rt,bottle:ot,castle:vt,crab2:tt},setNightTarget:U=>{Fe.to=U,Fe.nightForced===null&&(Fe.nightForced=Fe.night),U===0&&(Fe.forced=0)},setFire:U=>(Q=U&&Fe.night>.25?1:0,Q===1),get fireOn(){return Q===1},showBottle:U=>{ot.visible=U},get bottleVisible(){return ot.visible},setCastleLevel:U=>vt.userData.setLevel(U),addCrabFriend:()=>{tt.visible=!0},Q:n,qName:e,renderer:s,camera:c,refCam:l,beach:u,look:w,setLook:Hn,stampTest:xd,groundFromStage:bt,screenOf:Rt,stageOf:Bt,objects:{crab:V,shells:A,pebbles:b,parasol:Lt,seal:v},motion:T,get layoutInfo(){return de},get wave(){return lr},get simT(){return ye},stats:()=>({fps:Ql,workMs:tu,calls:Hr.calls,triangles:Hr.triangles,firstFrameMs:la,quality:e,pixelRatio:s.getPixelRatio(),size:[xe,me],halfFloat:o,map:u.mapSize,fpsCap:n.fps})}}const Ny={waveNear:"wave-near.ogg",waveFar:"wave-far.ogg",windBirds:"wind-birds.ogg",gull:"gull.ogg",page:"page.ogg",step1:"step1.ogg",step2:"step2.ogg",step3:"step3.ogg",step4:"step4.ogg"},Fy=(()=>{try{return!!document.createElement("audio").canPlayType('audio/ogg; codecs="vorbis"')}catch{return!0}})();async function zh(i){if(i.startsWith("data:")){const e=atob(i.slice(i.indexOf(",")+1)),n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n.buffer}const t=await fetch(i);if(!t.ok)throw new Error(t.status);return t.arrayBuffer()}function Oy(i="./audio/"){const t=window.AudioContext||window.webkitAudioContext;let e=null,n=!1,s=null;const r={},o={bg:.8,sfx:.8};let a=!1,c=1,l=null,u=0;const h=()=>c>.01&&u<.3,f={},d={step:0,page:0,gull:0};let g=0,_=-1;const m=x=>new Promise((y,R)=>{const N=e.decodeAudioData(x,y,R);N&&N.then&&N.then(y,R)});async function p(){return s||(s=Promise.all(Object.entries(Ny).map(async([x,y])=>{try{const R=q=>i==="./audio/"?Xf("audio/"+q):i+q,N=y.replace(/\.ogg$/,".m4a"),[D,G]=Fy?[y,N]:[N,y];try{r[x]=await m(await zh(R(D)))}catch{r[x]=await m(await zh(R(G)))}}catch(R){r[x]=null,console.warn("[audio] 불러오기 실패",y,R)}})),s)}function S(x,{gain:y,pan:R=0,lp:N=0,offset:D=0}){const G=r[x];if(!G)return null;const q=e.createBufferSource();q.buffer=G,q.loop=!0;const X=e.createGain();X.gain.value=y;let Y=q.connect(X);if(N){const z=e.createBiquadFilter();z.type="lowpass",z.frequency.value=N,Y.connect(z),Y=z}if(e.createStereoPanner){const z=e.createStereoPanner();z.pan.value=R,Y.connect(z),Y=z}return Y.connect(f.bg),q.start(0,D%G.duration),X}const M={},v={step:180,page:400,pick:250,gull:5e3},C=x=>{const y=performance.now();return y-(M[x]||-1e9)<(v[x]||0)?!0:(M[x]=y,!1)};function T(x,{gain:y=1,rate:R=1,pan:N=0,lp:D=0,bus:G="sfx"}={}){const q=r[x];if(!e||!q||!n)return;const X=e.createBufferSource();X.buffer=q,X.playbackRate.value=R;const Y=e.createGain();Y.gain.value=y;let z=X.connect(Y);if(D){const nt=e.createBiquadFilter();nt.type="lowpass",nt.frequency.value=D,z.connect(nt),z=nt}if(e.createStereoPanner){const nt=e.createStereoPanner();nt.pan.value=N,z.connect(nt),z=nt}z.connect(f[G]),X.start()}function E(){if(!e)return;const x=e.currentTime;f.master.gain.setTargetAtTime(a?0:1,x,.08),f.bg.gain.setTargetAtTime(o.bg*c*(1-.8*u),x,.6),f.sfx.gain.setTargetAtTime(o.sfx,x,.05)}function P(){clearTimeout(g),g=setTimeout(()=>{n&&!document.hidden&&h()&&(d.gull++,T("gull",{gain:.5,rate:.95+Math.random()*.1,pan:(Math.random()-.5)*1.4,lp:2600})),P()},3e4+Math.random()*4e4)}return{unlock(){return l||(l=this._unlock().finally(()=>{l=null}))},async _unlock(){return t?(e||(e=new t,f.master=e.createGain(),f.master.connect(e.destination),f.bg=e.createGain(),f.sfx=e.createGain(),f.bg.connect(f.master),f.sfx.connect(f.master),E()),e.state!=="running"&&await e.resume(),await p(),n||(n=!0,f.near=S("waveNear",{gain:.9,pan:-.15}),f.far=S("waveFar",{gain:.5,pan:.2,offset:7}),f.wind=S("windBirds",{gain:.45}),P()),!0):!1},setWash(x){f.near&&e&&(f.near.gain.setTargetAtTime(.55+.4*x,e.currentTime,.3),f.far.gain.setTargetAtTime(.5-.12*x,e.currentTime,.3))},step(x=1){if(C("step"))return;let y;do y=1+Math.floor(Math.random()*4);while(y===_);_=y,d.step++,T("step"+y,{gain:(.8+Math.random()*.3)*(.5+.5*x),rate:.92+Math.random()*.16,pan:(Math.random()-.5)*.2,lp:x<.5?2400+x*6e3:0})},pick(){C("pick")||(d.pick=(d.pick||0)+1,T("step3",{gain:.5,rate:1.55,pan:0}))},page(){C("page")||(d.page++,T("page",{gain:1,rate:.96+Math.random()*.08}))},gull(){h()&&(d.gull++,T("gull",{gain:.5,lp:2600}))},setNight(x){Math.abs(x-u)<.02&&x!==0&&x!==1||(u=x,E())},setBgScale(x){c=x,E()},get ctx(){return e},get out(){return f.master},get sfxBus(){return f.sfx},get ready(){return n},setVolume(x,y){o[x]=Math.min(1,Math.max(0,y)),E()},getVolume:x=>o[x],setMuted(x){a=x,E()},get muted(){return a},diag(){var x;return{supported:!!t,state:(x=e==null?void 0:e.state)!=null?x:"none",started:n,loaded:Object.fromEntries(Object.entries(r).map(([y,R])=>[y,R?+R.duration.toFixed(1):null])),bgGain:f.bg?+f.bg.gain.value.toFixed(3):null,sfxGain:f.sfx?+f.sfx.gain.value.toFixed(3):null,vol:{...o},muted:a,played:{...d}}}}}const sc=i=>440*Math.pow(2,(i-69)/12),ni=[{title:"오후의 책장",bpm:72,seed:3,pent:[72,74,76,79,81],chords:[{b:36,n:[55,59,62,64]},{b:33,n:[52,55,60,64]},{b:41,n:[53,57,60,64]},{b:43,n:[55,59,62,65]}]},{title:"파도 사이",bpm:64,seed:8,pent:[74,76,78,81,83],chords:[{b:38,n:[57,61,64,66]},{b:35,n:[54,57,62,66]},{b:43,n:[59,62,66,69]},{b:45,n:[57,61,66,69]}]},{title:"노을 아래 한 장",bpm:78,seed:5,pent:[77,79,81,84,86],chords:[{b:41,n:[57,60,64,67]},{b:40,n:[55,59,62,67]},{b:38,n:[53,57,60,64]},{b:36,n:[55,59,64,67]}]}];function By(i){let t=null,e=null,n=null,s=null,r=0,o=!1,a=0,c=0,l=0,u=Math.random;const h=new Set,f=()=>h.forEach(E=>E({playing:o,index:a,title:ni[a].title})),d=E=>()=>(E=E*16807%2147483647)/2147483647;let g=null;function _(){const E=e;E&&(E.gain.cancelScheduledValues(t.currentTime),E.gain.setTargetAtTime(0,t.currentTime,.08),setTimeout(()=>E.disconnect(),600)),e=t.createGain(),e.gain.value=0,e.connect(g),e.connect(n)}function m(){t=i.ctx,e=t.createGain(),e.gain.value=0;const E=t.createBiquadFilter();E.type="lowpass",E.frequency.value=3200,g=E,e.connect(E),E.connect(i.out);const P=t.sampleRate*1.8,x=t.createBuffer(2,P,t.sampleRate);for(let N=0;N<2;N++){const D=x.getChannelData(N);for(let G=0;G<P;G++)D[G]=(Math.random()*2-1)*Math.pow(1-G/P,2.6)}n=t.createConvolver(),n.buffer=x;const y=t.createGain();y.gain.value=.32,e.connect(n),n.connect(y),y.connect(E),s=t.createBuffer(1,t.sampleRate,t.sampleRate);const R=s.getChannelData(0);for(let N=0;N<R.length;N++)R[N]=Math.random()*2-1}function p(E,P,x,y){const R=t.createGain();R.gain.setValueAtTime(1e-4,E),R.gain.exponentialRampToValueAtTime(y,E+.01),R.gain.exponentialRampToValueAtTime(1e-4,E+x);const N=t.createOscillator();N.type="sine",N.frequency.value=sc(P);const D=t.createOscillator();D.type="triangle",D.frequency.value=sc(P)*2.003;const G=t.createGain();G.gain.value=.18,N.connect(R),D.connect(G),G.connect(R),R.connect(e),N.start(E),D.start(E),N.stop(E+x+.05),D.stop(E+x+.05)}function S(E,P,x){const y=t.createGain();y.gain.setValueAtTime(1e-4,E),y.gain.exponentialRampToValueAtTime(.2,E+.03),y.gain.exponentialRampToValueAtTime(1e-4,E+x);const R=t.createOscillator();R.type="sine",R.frequency.value=sc(P),R.connect(y),y.connect(e),R.start(E),R.stop(E+x+.05)}function M(E,P,x=6e3,y=.05){const R=t.createBufferSource();R.buffer=s,R.playbackRate.value=.8+Math.random()*.4;const N=t.createBiquadFilter();N.type="highpass",N.frequency.value=x;const D=t.createGain();D.gain.setValueAtTime(P,E),D.gain.exponentialRampToValueAtTime(1e-4,E+y),R.connect(N),N.connect(D),D.connect(e),R.start(E,Math.random()*.8),R.stop(E+y+.02)}function v(E,P){const x=60/P.bpm,y=P.chords[l%4],R=.12*x;S(E,y.b,x*1.8),S(E+x*2.5,y.b+(l%2?7:0),x*1.3);const N=[0,2,1,3,2,1,3,2];for(let D=0;D<8;D++){const G=E+D*x*.5+(D%2?R:0);u()<.86&&p(G,y.n[N[D]],x*1.6,.05+.025*u()),D%2&&M(G,.05+.02*u())}if(u()<.7){const D=P.pent[Math.floor(u()*5)],G=E+x*(1+Math.floor(u()*3))+R;p(G,D,x*2.2,.075),u()<.5&&p(G+x*.75,P.pent[Math.floor(u()*5)],x*1.8,.06)}for(let D=0;D<4;D++)u()<.5&&M(E+u()*x*4,.05,2500,.012)}function C(){if(!o||!t)return;const E=ni[a];for(;c<t.currentTime+1.2;)if(v(c,E),c+=60/E.bpm*4,l++,l>=36){T((a+1)%ni.length);return}}function T(E){a=(E+ni.length)%ni.length,l=0,u=d(ni[a].seed*977+Math.floor(Math.random()*1e3)),c=((t==null?void 0:t.currentTime)||0)+.15,f()}return{start(){i.ctx&&(t||m(),!o&&(o=!0,_(),T(a),e.gain.setTargetAtTime(.9,t.currentTime,.5),clearInterval(r),r=setInterval(C,250),C()))},stop(){o&&(o=!1,clearInterval(r),r=0,e&&(e.gain.cancelScheduledValues(t.currentTime),e.gain.setTargetAtTime(0,t.currentTime,.12)),f())},next(){o?(_(),e.gain.setTargetAtTime(.9,t.currentTime,.3),T(a+1)):(a=(a+1)%ni.length,f())},prev(){o?(_(),e.gain.setTargetAtTime(.9,t.currentTime,.3),T(a-1)):(a=(a+ni.length-1)%ni.length,f())},onChange(E){h.add(E)},get playing(){return o},get title(){return ni[a].title}}}const kh={videos:["BxFbF8oGlic","fS-glIMAoUM","nPk1bo_9CfM","gSpQUDDPUpw","21yPAtV20cw","f4S3Hn5wHsE","5852pGvlogw","nREb6TRDqwo"],list:""};function zy(i,t){const e=new URLSearchParams(location.search),n=e.get("yt")?e.get("yt").split(","):kh.videos,s=n[0],r=e.get("ytlist")||kh.list;let o=0,a=null,c=!1,l=!1,u=!1,h="유튜브 음악",f=!1;const d=new Set,g=()=>d.forEach(S=>S({playing:p.playing,title:p.title,source:_()?"youtube":"built-in"})),_=()=>c&&!l;i.onChange(()=>{_()||g()});function m(){if(!t||e.get("yt")==="off"){l=!0;return}const S=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{S==null||S();const v={autoplay:0,controls:1,playsinline:1,rel:0,modestbranding:1,loop:1};r?Object.assign(v,{listType:"playlist",list:r}):v.playlist=n.join(","),a=new window.YT.Player(t.querySelector(".yt-frame"),{width:200,height:200,videoId:r?void 0:s,playerVars:v,events:{onReady:()=>{c=!0;try{a.setVolume(70)}catch{}g(),f&&p.start()},onStateChange:C=>{var E;const T=window.YT.PlayerState;u=C.data===T.PLAYING||C.data===T.BUFFERING,C.data===T.PLAYING&&(o=0);try{const P=(E=a.getVideoData())==null?void 0:E.title;P&&(h=P)}catch{}C.data===T.ENDED&&n.length===1&&!r&&(a.seekTo(0),a.playVideo()),g()},onError:()=>{if(o++,o<n.length&&(r||n.length>1)){try{a.nextVideo()}catch{}return}l=!0,t.hidden=!0,f&&i.start(),g()}}})};const M=document.createElement("script");M.src="https://www.youtube.com/iframe_api",M.async=!0,M.onerror=()=>{l=!0,g()},document.head.appendChild(M),setTimeout(()=>{c||(l=!0,f&&!i.playing&&i.start(),g())},12e3)}const p={start(){f=!0,_()?(t.hidden=!1,i.stop(),a.playVideo(),u=!0,g()):i.start()},stop(){f=!1,_()&&(a.pauseVideo(),u=!1,g()),i.stop()},hide(){p.stop(),t.hidden=!0},next(){_()?r||n.length>1?a.nextVideo():a.seekTo(Math.min((a.getCurrentTime()||0)+30,(a.getDuration()||1e9)-1),!0):i.next()},prev(){_()?r||n.length>1?a.previousVideo():a.seekTo(Math.max(0,(a.getCurrentTime()||0)-30),!0):i.prev()},onChange(S){d.add(S)},get playing(){return _()?u:i.playing},get title(){return _()?h:i.title},get source(){return _()?"youtube":"built-in"},get single(){return!r&&n.length===1}};return m(),p}function ky(i){let t=null,e=null;const n=()=>i.ctx&&i.ready,s=()=>{if(!t){const l=i.ctx;t=l.createBuffer(1,l.sampleRate*2,l.sampleRate);const u=t.getChannelData(0);let h=0;for(let f=0;f<u.length;f++)h=.6*h+.4*(Math.random()*2-1),u[f]=h}return t};function r(l,u,{type:h="bandpass",f0:f=3e3,f1:d=f,q:g=.8,gain:_=.2,attack:m=.01}={}){const p=i.ctx,S=p.createBufferSource();S.buffer=s(),S.loop=!0;const M=p.createBiquadFilter();M.type=h,M.Q.value=g,M.frequency.setValueAtTime(f,l),M.frequency.exponentialRampToValueAtTime(d,l+u);const v=p.createGain();v.gain.setValueAtTime(1e-4,l),v.gain.exponentialRampToValueAtTime(_,l+m),v.gain.exponentialRampToValueAtTime(1e-4,l+u),S.connect(M),M.connect(v),v.connect(i.sfxBus),S.start(l,Math.random()),S.stop(l+u+.05)}function o(l,u,h,f=.08,d="sine"){const g=i.ctx,_=g.createOscillator(),m=g.createGain();_.type=d,_.frequency.value=u,m.gain.setValueAtTime(f,l),m.gain.exponentialRampToValueAtTime(1e-4,l+h),_.connect(m),m.connect(i.sfxBus),_.start(l),_.stop(l+h+.02)}function a(l,u,h=.06,f=7){const d=i.ctx,g=d.createOscillator(),_=d.createOscillator(),m=d.createGain(),p=d.createBiquadFilter(),S=d.createOscillator(),M=d.createGain();g.type="triangle",_.type="sine",p.type="lowpass",p.frequency.value=2200,p.Q.value=.8,S.frequency.value=f,M.gain.value=12,S.connect(M),M.connect(g.frequency),M.connect(_.frequency),g.frequency.setValueAtTime(u[0][1],l),_.frequency.setValueAtTime(u[0][1]*2,l);for(const[T,E]of u.slice(1))g.frequency.exponentialRampToValueAtTime(E,l+T),_.frequency.exponentialRampToValueAtTime(E*2,l+T);const v=l+u[u.length-1][0];m.gain.setValueAtTime(1e-4,l),m.gain.exponentialRampToValueAtTime(h,l+.04),m.gain.setTargetAtTime(h*.7,l+.08,.1),m.gain.exponentialRampToValueAtTime(1e-4,v+.05);const C=d.createGain();C.gain.value=.18,g.connect(p),_.connect(C),C.connect(p),p.connect(m),m.connect(i.sfxBus);for(const T of[g,_,S])T.start(l),T.stop(v+.1)}const c=()=>i.ctx.currentTime+.01;return{sand(l=5){if(!n())return;let u=i.ctx.currentTime+.02;for(let h=0;h<l;h++){const f=.16+Math.random()*.18;r(u,f,{f0:2600+Math.random()*900,f1:1900+Math.random()*700,q:.7,gain:.34,attack:.03}),u+=f*.85+.05}},scratchStart(){if(!n()||e)return;const l=i.ctx,u=l.createBufferSource();u.buffer=s(),u.loop=!0;const h=l.createBiquadFilter();h.type="bandpass",h.frequency.value=2400,h.Q.value=.7;const f=l.createGain();f.gain.value=1e-4,u.connect(h),h.connect(f),f.connect(i.sfxBus),u.start(),e={s:u,f:h,g:f}},scratchMove(l){if(!e)return;const u=i.ctx,h=Math.min(1,l);e.g.gain.setTargetAtTime(.06+.4*h,u.currentTime,.03),e.f.frequency.setTargetAtTime(1900+1500*h,u.currentTime,.05),clearTimeout(e.t),e.t=setTimeout(()=>e&&e.g.gain.setTargetAtTime(1e-4,i.ctx.currentTime,.05),70)},scratchStop(){if(!e)return;const{s:l,g:u}=e;clearTimeout(e.t),e=null,u.gain.setTargetAtTime(1e-4,i.ctx.currentTime,.03),l.stop(i.ctx.currentTime+.2)},sip(){if(!n())return;const l=c();r(l,.42,{f0:700,f1:2300,q:2.2,gain:.28,attack:.08}),r(l+.5,.16,{f0:500,f1:320,q:1.5,gain:.12})},ahh(){if(!n())return;const l=c();r(l,.75,{type:"lowpass",f0:1300,f1:380,q:.6,gain:.16,attack:.14}),a(l+.02,[[0,420],[.35,360]],.025,5)},clink(){if(!n())return;const l=c();o(l,1750,.09,.05),o(l+.01,2630,.06,.03),r(l,.05,{type:"lowpass",f0:900,q:.6,gain:.12})},breeze(){if(!n())return;const l=c();r(l,2.6,{f0:320,f1:900,q:.5,gain:.13,attack:1}),r(l+.6,2.2,{type:"lowpass",f0:600,f1:1400,q:.4,gain:.08,attack:.9}),setTimeout(()=>{var u;return(u=i.gull)==null?void 0:u.call(i)},1500)},stretch(){if(!n())return;const l=c();r(l,.95,{f0:500,f1:1500,q:.7,gain:.12,attack:.5}),this.cloth(),a(l+.55,[[0,520],[.35,760],[.9,700],[1.3,620]],.05,9)},plop(){if(!n())return;const l=c(),u=i.ctx,h=u.createOscillator(),f=u.createGain();h.frequency.setValueAtTime(190,l),h.frequency.exponentialRampToValueAtTime(85,l+.16),f.gain.setValueAtTime(.22,l),f.gain.exponentialRampToValueAtTime(1e-4,l+.2),h.connect(f),f.connect(i.sfxBus),h.start(l),h.stop(l+.25),r(l+.02,.5,{type:"lowpass",f0:1200,f1:400,q:.5,gain:.18,attack:.04})},snore(){if(!n())return;const l=c();for(const u of[0,1.55]){r(l+u,1.1,{type:"lowpass",f0:380,f1:180,q:1.2,gain:.2,attack:.45});const h=i.ctx,f=h.createOscillator(),d=h.createGain(),g=h.createBiquadFilter();f.type="sawtooth",f.frequency.value=62+u*6,g.type="lowpass",g.frequency.value=260,d.gain.setValueAtTime(1e-4,l+u),d.gain.exponentialRampToValueAtTime(.04,l+u+.5),d.gain.exponentialRampToValueAtTime(1e-4,l+u+1.1),f.connect(g),g.connect(d),d.connect(i.sfxBus),f.start(l+u),f.stop(l+u+1.2)}},wake(){if(!n())return;const l=c();a(l,[[0,700],[.08,1150],[.16,980]],.07,0),this.plop()},pat(){if(!n())return;const l=c();r(l,.08,{type:"lowpass",f0:1800,f1:600,q:.7,gain:.42,attack:.004}),o(l,230,.07,.08)},yip(){if(!n())return;const l=c();a(l,[[0,900],[.05,1350],[.11,1e3]],.05,0),a(l+.17,[[0,950],[.05,1400],[.1,1050]],.04,0)},fireOn(){if(!n()||this._fire)return;const l=i.ctx,u=l.createBufferSource();u.buffer=s(),u.loop=!0;const h=l.createBiquadFilter();h.type="lowpass",h.frequency.value=520;const f=l.createGain();f.gain.value=1e-4,f.gain.setTargetAtTime(.09,l.currentTime,1.2),u.connect(h),h.connect(f),f.connect(i.sfxBus),u.start();const d=()=>{if(!this._fire)return;const g=c(),_=1+(Math.random()*3|0);for(let m=0;m<_;m++)r(g+m*(.02+Math.random()*.05),.02+Math.random()*.04,{type:"highpass",f0:1800+Math.random()*2500,q:.7,gain:.05+Math.random()*.12,attack:.002});this._fire.timer=setTimeout(d,120+Math.random()*700)};this._fire={s:u,g:f,timer:0},d()},fireOff(){const l=this._fire;if(!l)return;this._fire=null,clearTimeout(l.timer);const u=i.ctx.currentTime;l.g.gain.setTargetAtTime(1e-4,u,.5),setTimeout(()=>{try{l.s.stop()}catch{}},2500)},sizzle(){if(!n())return;const l=c();r(l,1.6,{type:"highpass",f0:3500,f1:2600,q:.5,gain:.05,attack:.3})},nyam(){if(!n())return;const l=c();for(let u=0;u<3;u++)r(l+u*.26,.12,{type:"bandpass",f0:700,f1:420,q:1.2,gain:.12,attack:.02});a(l+.9,[[0,620],[.15,820],[.35,720]],.045)},twinkle(){if(!n())return;const l=c();[1568,2093,2637,3136].forEach((u,h)=>o(l+h*.07,u,.5,.035))},coo(){if(!n())return;const l=c();a(l,[[0,640],[.12,880],[.32,760]],.055),a(l+.38,[[0,700],[.14,920]],.045)},flap(){if(!n())return;const l=c();for(let u=0;u<3;u++)r(l+u*.26,.2,{f0:700,f1:1500,q:.8,gain:.07,attack:.05})},scratch(){this.sand(9)},tick(){if(!n())return;const l=c();o(l,1250,.035,.05,"triangle"),r(l,.03,{f0:2500,q:1.2,gain:.05})},shell(){if(!n())return;const l=c();r(l,.06,{f0:3800,q:2.5,gain:.16}),o(l+.01,2900,.12,.035),o(l+.09,3700,.1,.025),r(l+.1,.05,{f0:3200,q:2.5,gain:.1}),[1760,2350,2960].forEach((u,h)=>o(l+.2+h*.06,u,.35,.018))},shellClose(){if(!n())return;const l=c();r(l,.05,{f0:2600,q:2,gain:.16}),o(l,1900,.09,.035)},done(){if(!n())return;const l=c();[1047,1319,1568,2093].forEach((u,h)=>{o(l+h*.16,u,1.4,.045),o(l+h*.16,u*2.01,.6,.012)})},cloth(){if(!n())return;const l=i.ctx.currentTime;r(l,.28,{type:"lowpass",f0:1800,f1:700,q:.5,gain:.3,attack:.06}),r(l+.2,.22,{type:"lowpass",f0:1400,f1:600,q:.5,gain:.2,attack:.05})},click(){if(!n())return;const l=i.ctx.currentTime;o(l,1300,.04,.07),o(l+.09,900,.05,.07)},chime(){if(!n())return;const l=i.ctx.currentTime;[1320,1760,2640].forEach((u,h)=>o(l+h*.07,u,.5,.035))},whoosh(){n()&&r(i.ctx.currentTime,.7,{f0:400,f1:1500,q:.6,gain:.14,attack:.3})}}}const ed=1.75;document.documentElement.style.setProperty("--max-aspect",ed);const Z=i=>document.getElementById(i),Or=new URLSearchParams(location.search);Or.get("fill")==="1"&&document.body.classList.add("fill");const Pn=Oy(),Ht=Uy(Z("c"),Pn),An=zy(By(Pn),document.getElementById("yt-box")),Se=ky(Pn),ze=(i,t=3500)=>{Z("tip").textContent=i,Z("tip").hidden=!1,clearTimeout(ze.t),ze.t=setTimeout(()=>{Z("tip").hidden=!0},t)};let zl=!1;async function Gn(i){zl=i,i&&await Pn.unlock(),Pn.setMuted(!i),Z("btn-sound").setAttribute("aria-pressed",String(i)),Z("btn-sound").textContent=i?"소리 끄기":"소리 켜기"}Z("btn-sound").addEventListener("click",()=>Gn(!zl));addEventListener("pointerdown",i=>{!zl&&!i.target.closest("#btn-sound")&&Gn(!0)},{once:!0});Ht.onView=(i,t)=>{document.body.classList.toggle("bird",i==="bird"),document.body.classList.toggle("focus",i==="focus"),Z("btn-home").hidden=i==="seat",Z("btn-view").hidden=i==="bird",Se.whoosh(),i==="bird"&&ze("끌어서 해변을 둘러보세요. 자리를 누르면 가까이 볼 수 있어요",4500),i==="focus"&&ze(t.mine?"통통 뛰는 조개를 누르면 쪽지를 남기거나 읽을 수 있어요":"이 자리의 조개를 누르면 쪽지를 읽을 수 있어요",4500)};Z("btn-view").addEventListener("click",()=>Ht.setView("bird"));Z("btn-home").addEventListener("click",()=>Ht.setView("seat"));const nl={motion:Z("pane-motion"),dress:Z("pane-dress")};function nd(i){for(const[t,e]of Object.entries(nl)){const n=t===i&&e.hidden;e.hidden=!n,Z("rail-"+t).setAttribute("aria-expanded",String(n))}Se.tick()}Z("rail-motion").addEventListener("click",()=>nd("motion"));Z("rail-dress").addEventListener("click",()=>nd("dress"));const ps=()=>{for(const i in nl)nl[i].hidden=!0,Z("rail-"+i).setAttribute("aria-expanded","false")};Z("c").addEventListener("pointerdown",ps);document.querySelectorAll("[data-motion]").forEach(i=>i.addEventListener("click",()=>{if(Gn(!0),ps(),i.dataset.motion==="tteok")return Wy();Ht.act(i.dataset.motion)}));Ht.onCue=i=>{var t;i==="page"?Pn.page():i==="gull"?Pn.gull():(t=Se[i])==null||t.call(Se)};const id=["cap","blanket","headset","glasses"];function sd(){for(const i of id)Z("act-"+i).setAttribute("aria-pressed",String(Ht.worn[i])),document.querySelectorAll(`[data-item="${i}"]`).forEach(t=>t.setAttribute("aria-pressed",String(Ht.worn[i])))}async function kl(i){const t=Ht.toggleItem(i);i==="headset"?(t?(await Gn(!0),Pn.setBgScale(Vl()),An.start()):(An.hide(),Pn.setBgScale(1)),Z("np").hidden=!t):Se.cloth(),i==="headset"&&Se.click(),sd()}for(const i of id)Z("act-"+i).addEventListener("click",()=>kl(i));document.querySelectorAll("[data-item]").forEach(i=>i.addEventListener("click",()=>kl(i.dataset.item)));An.onChange(i=>{Z("np-title").textContent=i.title,Z("np-src").textContent=i.source==="youtube"?"유튜브 · 헤드셋 음악":"독서 음악",Z("np-prev").setAttribute("aria-label",An.source==="youtube"&&An.single?"30초 뒤로":"이전 곡"),Z("np-next").setAttribute("aria-label",An.source==="youtube"&&An.single?"30초 앞으로":"다음 곡"),Z("np-play").textContent=i.playing?"⏸":"▶",Z("np-play").setAttribute("aria-label",i.playing?"일시정지":"다시 재생"),Z("np").classList.toggle("paused",!i.playing)});Z("np-play").addEventListener("click",()=>{An.playing?(An.stop(),Pn.setBgScale(1)):(An.start(),Pn.setBgScale(Vl())),Se.click()});const rd="padoseojae.wavesWithMusic";let Oi=!0;try{Oi=localStorage.getItem(rd)!=="0"}catch{}function Vl(){return Oi?.35:0}const od=()=>{Z("np-wave").setAttribute("aria-pressed",String(Oi)),Z("np-wave").title=Oi?"파도 소리 켜짐 (누르면 끔)":"파도 소리 꺼짐 (누르면 켬)"};od();Z("np-wave").addEventListener("click",()=>{Oi=!Oi;try{localStorage.setItem(rd,Oi?"1":"0")}catch{}od(),An.playing&&Pn.setBgScale(Vl()),Se.click(),ze(Oi?"음악과 함께 파도 소리도 들려요":"음악만 들려요 (파도 소리 끔)")});Z("np-prev").addEventListener("click",()=>An.prev());Z("np-next").addEventListener("click",()=>An.next());sd();let ad=0;const Vh=Z("mirror").getContext("2d");Z("act-mirror").addEventListener("click",()=>{ps(),Se.chime(),Z("dlg-mirror").hidden=!1,Ht.renderMirror(Vh),ad=setInterval(()=>Ht.renderMirror(Vh),90)});Z("mirror-close").addEventListener("click",()=>{Z("dlg-mirror").hidden=!0,clearInterval(ad)});const jn=Z("pad"),Vy=jn.getContext("2d");let Gi=[],ri=null,ia="hand";const Gy=()=>{il=0,td(Vy,jn.width,jn.height,jf(ri?[...Gi,ri]:Gi,"#000",jn.width,jn.height))};let il=0;const rr=()=>{il||(il=requestAnimationFrame(Gy))},cd=i=>{const t=jn.getBoundingClientRect();return[Math.min(1,Math.max(0,(i.clientX-t.left)/t.width)),Math.min(1,Math.max(0,(i.clientY-t.top)/t.height))]};let sl=0,Uo=1.1;jn.addEventListener("pointerdown",i=>{jn.setPointerCapture(i.pointerId),i.preventDefault();const t=cd(i);sl=performance.now(),Uo=1.15,ri=[[t[0],t[1],1.15]],rr(),Se.scratchStart()});jn.addEventListener("pointermove",i=>{var e;if(!ri)return;let t=0;for(const n of((e=i.getCoalescedEvents)==null?void 0:e.call(i))||[i]){const s=cd(n),r=ri[ri.length-1],o=Math.hypot((s[0]-r[0])*Ry,s[1]-r[1]);if(o<.006)continue;const a=n.timeStamp||performance.now(),c=Math.max(4,a-sl);sl=a;const l=o/c*1e3;Uo=Uo*.7+Math.min(1.3,Math.max(.6,1.35-l*.16))*.3,ri.push([s[0],s[1],+Uo.toFixed(2)]),t+=o}t&&(rr(),Se.scratchMove(t*14))});const ld=()=>{Se.scratchStop(),ri&&(Gi.push(ri),ri=null,rr())};jn.addEventListener("pointerup",ld);jn.addEventListener("pointercancel",ld);const rl=()=>li.find(i=>i.id===Z("sand-font").value)||li[0];async function sa(){const i=rl(),t=Z("sand-text").value;await Bl(i,t),td(Z("sand-prev").getContext("2d"),720,240,Go(t,i,"#000",720,240))}function ud(){Z("sand-font").innerHTML=li.map(i=>`<option value="${i.id}">${i.label}</option>`).join("")}ud();(window.__ASSETS?Promise.resolve(!1):Ay()).then(i=>{i&&(ud(),Z("sand-font").value="custom")});Z("sand-text").addEventListener("input",()=>{sa(),Se.sand(1)});Z("sand-font").addEventListener("change",sa);function Gl(i){ia=i,Z("tab-hand").setAttribute("aria-pressed",String(i==="hand")),Z("tab-type").setAttribute("aria-pressed",String(i==="type")),Z("pane-hand").hidden=i!=="hand",Z("pane-type").hidden=i!=="type",Z("sand-undo").hidden=i!=="hand",i==="type"?(sa(),Z("sand-text").focus()):rr()}Z("tab-hand").addEventListener("click",()=>Gl("hand"));Z("tab-type").addEventListener("click",()=>Gl("type"));Z("act-sand").addEventListener("click",()=>{ps(),Z("dlg-sand").hidden=!1,Gl(ia)});Z("sand-undo").addEventListener("click",()=>{Gi.pop(),rr()});Z("sand-clear").addEventListener("click",()=>{ia==="hand"?(Gi=[],rr()):(Z("sand-text").value="",sa())});Z("sand-cancel").addEventListener("click",()=>{Z("dlg-sand").hidden=!0});const hd="padoseojae.sand.v1";Z("sand-ok").addEventListener("click",async()=>{let i;if(ia==="hand"){if(!Gi.length)return ze("모래판에 먼저 글씨를 써 주세요");i={strokes:Gi.map(t=>t.map(([e,n,s=1])=>[+e.toFixed(4),+n.toFixed(4),s]))}}else{const t=Z("sand-text").value.trim();if(!t)return ze("남길 말을 먼저 적어 주세요");await Bl(rl(),t),i={text:t,font:rl().id}}Z("dlg-sand").hidden=!0,Gi=[],Z("sand-text").value="",Ht.view!=="seat"&&Ht.setView("seat"),Gn(!0),Ht.act("write"),Ht.writeSand(i,{delay:.75});try{localStorage.setItem(hd,JSON.stringify(i))}catch{}setTimeout(()=>ze("물범 앞 모래에 글씨를 새겼어요. 다음에 와도 남아 있어요",4500),2600)});var Wh;try{const i=JSON.parse(localStorage.getItem(hd)||"null");i&&((Wh=i.strokes)!=null&&Wh.length||i.text)&&Bl(li.find(t=>t.id===i.font)||li[0],i.text||"가").then(()=>Ht.writeSand(i,{instant:!0}))}catch{}const fd="padoseojae.shellnotes.v2";let Hi={},Hl=-1;try{Hi=JSON.parse(localStorage.getItem(fd)||"{}")||{}}catch{Hi={}}const Wl=()=>{try{localStorage.setItem(fd,JSON.stringify(Hi))}catch{}Ht.pick.noted=new Set(Object.keys(Hi).map(Number))};Wl();function dd(i,t,e){Z("shell-h").textContent=t?i?"내가 남긴 쪽지":"조개 속에 쪽지 남기기":"조개 속 쪽지",Z("shell-title").value=(i==null?void 0:i.title)||"",Z("shell-text").value=(i==null?void 0:i.text)||"",Z("shell-who").hidden=t,Z("shell-who").textContent=t?"":`${e} 님이 남긴 쪽지 (예시)`;for(const n of["shell-title","shell-text"])Z(n).readOnly=!t;Z("shell-del").hidden=!t||!i,Z("shell-ok").hidden=!t,document.querySelector("#dlg-shell .hint").hidden=!t,Z("dlg-shell").hidden=!1}Ht.onNightLevel=i=>Pn.setNight(i);Ht.onNight=(i,t,e)=>{e||(i===1&&ze("해가 바다 뒤로 넘어가요. 곧 밤바다예요",4500),i===2&&(Se.cloth(),ze("밤이 되어 랜턴을 켜고 털담요를 둘렀어요",4500)))};const pd="padoseojae.kind",rc=["seal","bear","bunny"];function ol(i,t){const e=Ht.setKind(i);try{localStorage.setItem(pd,i)}catch{}Z("act-kind").querySelector("span").textContent=e,t||(Se.cloth(),Ht.act("hello"))}try{ol(localStorage.getItem(pd)||"seal",!0)}catch{ol("seal",!0)}Z("act-kind").addEventListener("click",()=>{const i=rc.indexOf(Ht.kind);ol(rc[(i+1)%rc.length])});function Hy(){const i=Ht.night>.5,t=Z("act-daynight");t.setAttribute("aria-pressed",String(i)),t.querySelector("i").textContent=i?"☀️":"🌙",t.querySelector("span").textContent=i?"낮으로":"밤으로",Z("act-fire").hidden=!(Ht.night>.3),Ht.night<=.3&&Ht.fireOn&&Wo(!1)}Z("act-daynight").addEventListener("click",()=>{Gn(!0),ps();const i=Ht.night<.5;Ht.setNightTarget(i?1:0),Se.twinkle(),ze(i?"해가 바다 뒤로 넘어가요…":"다시 해가 떠요",3500)});setInterval(Hy,400);function Wo(i){const t=Ht.setFire(i);return Z("act-fire").setAttribute("aria-pressed",String(t)),t?Se.fireOn():Se.fireOff(),t}Z("act-fire").addEventListener("click",async()=>{await Gn(!0),ps();const i=!Ht.fireOn;if(i&&!Wo(!0))return ze("모닥불은 밤에만 켤 수 있어요");i?ze("모닥불을 켰어요. 동작 메뉴에서 가래떡을 구워 보세요",4e3):Wo(!1)});async function Wy(){if(Ht.night<.3)return ze("밤이 되면 모닥불에 가래떡을 구울 수 있어요 (🌙 단추)",4e3);await Gn(!0),Ht.fireOn?Ht.act("tteok"):(Wo(!0),setTimeout(()=>Ht.act("tteok"),900))}const al="padoseojae.wishes";function No(){if(Ht.night>.6&&Ht.view==="seat"&&document.visibilityState==="visible"&&Z("star-fall").hidden){const i=Z("star-fall"),t=innerWidth,e=innerHeight;i.style.left=t*(.35+Math.random()*.5)+"px",i.style.top=e*(.06+Math.random()*.16)+"px",i.hidden=!1,i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(No.t),No.t=setTimeout(()=>{i.hidden=!0},3200)}setTimeout(No,18e3+Math.random()*25e3)}setTimeout(No,6e3);Z("star-fall").addEventListener("click",()=>{Z("star-fall").hidden=!0,Gn(!0),Se.twinkle(),Z("dlg-wish").hidden=!1;let i=0;try{i=JSON.parse(localStorage.getItem(al)||"[]").length}catch{}Z("wish-count").textContent=i?`지금까지 별에 보낸 소원 ${i}개`:"",Z("wish-text").focus()});Z("wish-close").addEventListener("click",()=>{Z("dlg-wish").hidden=!0});Z("wish-ok").addEventListener("click",()=>{const i=Z("wish-text").value.trim();if(!i)return ze("소원을 먼저 적어 주세요");try{const t=JSON.parse(localStorage.getItem(al)||"[]");t.push({t:i,at:Date.now()}),localStorage.setItem(al,JSON.stringify(t.slice(-100)))}catch{}Z("wish-text").value="",Z("dlg-wish").hidden=!0,Se.twinkle(),Ht.act("clap"),ze("소원이 별을 타고 날아갔어요 ✨",4e3)});const To=[["책은 한 번에 한 사람에게 말을 건다.","파도서재 메모"],["오늘 읽은 한 문장이 내일의 나를 조금 바꾼다.","파도서재 메모"],["가장 중요한 것은 눈에 보이지 않아.","생텍쥐페리, 「어린 왕자」"],["네가 네 장미에게 들인 시간 때문에 네 장미가 그토록 소중한 거야.","생텍쥐페리, 「어린 왕자」"],["행복한 가정은 모두 비슷하고, 불행한 가정은 저마다의 이유로 불행하다.","톨스토이, 「안나 카레니나」"],["내일은 또 다른 날이니까.","마거릿 미첼, 「바람과 함께 사라지다」"],["나는 생각한다, 그러므로 나는 존재한다.","데카르트, 「방법서설」"],["새는 알에서 나오려고 투쟁한다. 알은 세계이다.","헤르만 헤세, 「데미안」"],["우리가 할 수 있는 것은 주어진 시간으로 무엇을 할지 정하는 것뿐이야.","톨킨, 「반지의 제왕」"],["천천히 서두르라.","옛 라틴어 격언"],["한 권의 책을 읽은 사람은 그만큼의 바다를 건넌 사람이다.","파도서재 메모"],["우리는 모두 시궁창에 있지만, 그중 몇몇은 별을 바라보고 있다.","오스카 와일드, 「윈더미어 부인의 부채」"]],Gh="padoseojae.bottleIdx";function Xo(i){clearTimeout(Xo.t),Xo.t=setTimeout(()=>{Ht.bottleVisible||(Ht.showBottle(!0),ze("파도가 유리병을 데려왔어요. 눌러 보세요",4500))},i)}Xo(45e3);Ht.pick.onBottle=()=>{Gn(!0),Se.shell();let i=0;try{i=(+localStorage.getItem(Gh)||0)%To.length,localStorage.setItem(Gh,String(i+1))}catch{i=Math.floor(Math.random()*To.length)}Z("bottle-quote").textContent=To[i][0],Z("bottle-src").textContent="— "+To[i][1],Z("dlg-bottle").hidden=!1,Ht.showBottle(!1)};Z("bottle-close").addEventListener("click",()=>{Z("dlg-bottle").hidden=!0,Xo(15e4+Math.random()*12e4)});const md="padoseojae.read."+new Date().toISOString().slice(0,10);let Bi=0;try{Bi=+localStorage.getItem(md)||0}catch{}let cl=Math.min(6,Math.floor(Bi/600));Ht.setCastleLevel(cl);setInterval(()=>{if(document.visibilityState!=="visible")return;Bi+=5;try{localStorage.setItem(md,String(Bi))}catch{}const i=Math.min(6,Math.floor(Bi/600));i>cl&&(cl=i,Ht.setCastleLevel(i),Se.twinkle(),ze(`오늘 ${Math.floor(Bi/60)}분 함께 읽었어요. 모래성이 ${i}층 높아졌어요 🏰`,5e3))},5e3);window.__read={add:i=>{Bi+=i*60},get sec(){return Bi}};let Xy=0;const Hh=["뿅","뀨","꼬륵","챱","*.*","+••+","집게 조심!","사각사각","안녕?","...!","♪","킁"];Ht.pick.onCrab=(i,t,e)=>{var s;Gn(!0),(s=Se.yip)==null||s.call(Se),!e&&++Xy===5&&(Ht.addCrabFriend(),setTimeout(()=>ze("꽃게 친구가 놀러 왔어요 🦀🦀",4e3),600));const n=document.createElement("div");n.className="bubble",n.textContent=Hh[Math.floor(Math.random()*Hh.length)],n.style.left=i+"px",n.style.top=t+"px",Z("app").appendChild(n),setTimeout(()=>n.remove(),1700)};Ht.pick.onShell=i=>{Hl=i,Se.shell(),setTimeout(()=>dd(Hi[i],!0),380)};Ht.pick.onOther=i=>dd(i,!1,i.who);Z("shell-cancel").addEventListener("click",()=>{Z("dlg-shell").hidden=!0});Z("shell-del").addEventListener("click",()=>{delete Hi[Hl],Wl(),Z("dlg-shell").hidden=!0,ze("쪽지를 지웠어요")});Z("shell-ok").addEventListener("click",()=>{const i=Z("shell-title").value.trim(),t=Z("shell-text").value.trim();if(!i&&!t)return ze("책 제목이나 남길 말을 적어 주세요");Hi[Hl]={title:i,text:t,at:Date.now()},Wl(),Se.shellClose(),Z("dlg-shell").hidden=!0,ze("조개 속에 쪽지를 넣었어요. 반짝이는 조개를 누르면 다시 읽을 수 있어요")});const oc=["low","mid","high"];Z("btn-quality").textContent=`품질: ${Ht.Q.label}`;Z("btn-quality").addEventListener("click",()=>{const i=oc[(oc.indexOf(Ht.qName)+1)%oc.length];let t=!1;try{sessionStorage.setItem("s5q",i),t=!0}catch{}if(t&&!Or.get("quality"))location.reload();else{const e=new URL(location.href);e.searchParams.set("quality",i),location.href=e.toString()}});function gd(){Z("btn-fill").hidden=innerWidth/innerHeight<=ed+.01}gd();addEventListener("resize",gd);Z("btn-fill").addEventListener("click",()=>{const i=document.body.classList.toggle("fill");Z("btn-fill").setAttribute("aria-pressed",String(i)),dispatchEvent(new Event("resize"))});Z("hud").hidden=Or.get("hud")!=="1";setInterval(()=>{if(Z("hud").hidden)return;const i=Ht.stats();Z("hud").textContent=`초당 ${i.fps}장 (상한 ${i.fpsCap}) · 한 장 ${i.workMs}ms
품질 ${Ho[i.quality].label} · ${i.size[0]}×${i.size[1]} ×${i.pixelRatio} · 그리기 ${i.calls}회`},500);window.__s5=Ht;window.__ui={music:An,audio:Pn,sfx:Se,toggle:kl,notes:()=>Hi};const Xl="padoseojae.timer.v1";let Mn=null;const _d=i=>{const t=Math.max(0,Math.ceil(i/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`};function ra(){const i=!!Mn;Z("btn-timer").classList.toggle("on",i),Z("timer-text").textContent=i?_d(Mn.end-Date.now()):"타이머",Z("timer-h").textContent=i?`${Mn.min}분 읽는 중`:"얼마나 읽을까요?",Z("timer-mins").hidden=i,Z("timer-stop").hidden=!i,Z("timer-hint").textContent=i?"타이머를 끄고 그냥 쉴 수도 있어요":"시간이 다 되면 물범이 기지개를 켜고 알려 줘요"}function vd(i){Mn={end:Date.now()+i*6e4/(Number(Or.get("timescale"))>1&&Or.get("fasttimer")?60:1),min:i};try{localStorage.setItem(Xl,JSON.stringify(Mn))}catch{}Z("dlg-timer").hidden=!0,ra(),Gn(!0),Se.tick(),Ht.act("page"),ze(`${i}분 동안 함께 읽어요`)}function qo(i){const t=Mn==null?void 0:Mn.min;Mn=null;try{localStorage.removeItem(Xl)}catch{}ra(),i&&(Se.done(),Ht.act("stretch"),setTimeout(()=>Ht.act("clap"),3700),Z("toast").textContent=`${t}분 독서 완료 ✓  오늘도 한 장 넘겼어요`,Z("toast").hidden=!1,clearTimeout(qo.t),qo.t=setTimeout(()=>{Z("toast").hidden=!0},12e3))}try{const i=JSON.parse(localStorage.getItem(Xl)||"null");i&&i.end>Date.now()&&(Mn=i)}catch{}Z("btn-timer").addEventListener("click",()=>{ps(),ra(),Z("dlg-timer").hidden=!1,Se.tick()});document.querySelectorAll("[data-min]").forEach(i=>i.addEventListener("click",()=>vd(+i.dataset.min)));Z("timer-stop").addEventListener("click",()=>{qo(!1),Z("dlg-timer").hidden=!0,ze("타이머를 껐어요")});Z("timer-close").addEventListener("click",()=>{Z("dlg-timer").hidden=!0});Z("toast").addEventListener("click",()=>{Z("toast").hidden=!0});setInterval(()=>{Mn&&(Date.now()>=Mn.end?qo(!0):Z("timer-text").textContent=_d(Mn.end-Date.now()))},500);ra();window.__timer={start:vd,finish:()=>{Mn&&(Mn.end=Date.now()-1)}};setTimeout(()=>{Ht.view==="seat"&&ze("반짝이는 조개를 누르면 쪽지를 남길 수 있어요 · 오른쪽에서 동작을 골라 보세요",5500)},1800);
