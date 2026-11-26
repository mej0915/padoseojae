(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="170",Df=0,Tl=1,Uf=2,lh=1,uh=2,ci=3,fi=0,an=1,De=2,Ti=0,ws=1,As=2,Al=3,Rl=4,hh=5,li=100,Nf=101,fh=102,Ff=103,Of=104,Bf=200,Ba=201,zf=202,kf=203,za=204,ka=205,Vf=206,Gf=207,Hf=208,Wf=209,Xf=210,qf=211,Yf=212,$f=213,Zf=214,Va=0,Ga=1,Ha=2,Rs=3,Wa=4,Xa=5,qa=6,Ya=7,dh=0,Jf=1,Kf=2,Ai=0,jf=1,Qf=2,td=3,ed=4,nd=5,id=6,sd=7,Cl="attached",rd="detached",ph=300,Cs=301,Ps=302,$a=303,Za=304,Po=306,fr=1e3,qi=1001,Ja=1002,Mn=1003,od=1004,Ur=1005,mn=1006,Xo=1007,Yi=1008,zn=1009,mh=1010,gh=1011,dr=1012,zc=1013,Zi=1014,Yn=1015,Fs=1016,kc=1017,Vc=1018,Is=1020,_h=35902,vh=1021,xh=1022,Rn=1023,yh=1024,Mh=1025,Es=1026,Ls=1027,Gc=1028,Hc=1029,Sh=1030,Wc=1031,Xc=1033,po=33776,mo=33777,go=33778,_o=33779,Ka=35840,ja=35841,Qa=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37808,rc=37809,oc=37810,ac=37811,cc=37812,lc=37813,uc=37814,hc=37815,fc=37816,dc=37817,pc=37818,mc=37819,gc=37820,_c=37821,vo=36492,vc=36494,xc=36495,bh=36283,yc=36284,Mc=36285,Sc=36286,wh=2200,ad=2201,cd=2202,Mo=2300,bc=2301,qo=2302,ys=2400,Ms=2401,So=2402,qc=2500,Yc=2501,ld=3200,ud=3201,Eh=0,hd=1,Ei="",Ce="srgb",Os="srgb-linear",Io="linear",Se="srgb",es=7680,Pl=519,fd=512,dd=513,pd=514,Th=515,md=516,gd=517,_d=518,vd=519,wc=35044,Il="300 es",ui=2e3,bo=2001;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ll=1234567;const cr=Math.PI/180,pr=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function $c(i,t){return(i%t+t)%t}function xd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yd(i,t,e){return i!==t?(e-i)/(t-i):0}function lr(i,t,e){return(1-e)*i+e*t}function Md(i,t,e,n){return lr(i,t,1-Math.exp(-e*n))}function Sd(i,t=1){return t-Math.abs($c(i,t*2)-t)}function bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ed(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Td(i,t){return i+Math.random()*(t-i)}function Ad(i){return i*(.5-Math.random())}function Rd(i){i!==void 0&&(Ll=i);let t=Ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cd(i){return i*cr}function Pd(i){return i*pr}function Id(i){return(i&i-1)===0&&i!==0}function Ld(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ud(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ze={DEG2RAD:cr,RAD2DEG:pr,generateUUID:Cn,clamp:Xe,euclideanModulo:$c,mapLinear:xd,inverseLerp:yd,lerp:lr,damp:Md,pingpong:Sd,smoothstep:bd,smootherstep:wd,randInt:Ed,randFloat:Td,randFloatSpread:Ad,seededRandom:Rd,degToRad:Cd,radToDeg:Pd,isPowerOfTwo:Id,ceilPowerOfTwo:Ld,floorPowerOfTwo:Dd,setQuaternionFromProperEuler:Ud,normalize:xe,denormalize:On};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,s,r,o,a,c,l){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],x=s[4],v=s[7],I=s[2],A=s[5],w=s[8];return r[0]=o*_+a*M+c*I,r[3]=o*m+a*x+c*A,r[6]=o*p+a*v+c*w,r[1]=l*_+u*M+h*I,r[4]=l*m+u*x+h*A,r[7]=l*p+u*v+h*w,r[2]=f*_+d*M+g*I,r[5]=f*m+d*x+g*A,r[8]=f*p+d*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yo.makeScale(t,e)),this}rotate(t){return this.premultiply(Yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yo=new ee;function Ah(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nd(){const i=mr("canvas");return i.style.display="block",i}const Dl={};function or(i){i in Dl||(Dl[i]=!0,console.warn(i))}function Fd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Od(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ge={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Se&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Se&&(i.r=Ts(i.r),i.g=Ts(i.g),i.b=Ts(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ei?Io:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ul=[.64,.33,.3,.6,.15,.06],Nl=[.2126,.7152,.0722],Fl=[.3127,.329],Ol=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ge.define({[Os]:{primaries:Ul,whitePoint:Fl,transfer:Io,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:Nl,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:Ul,whitePoint:Fl,transfer:Se,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:Nl,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});let ns;class zd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=mr("canvas")),ns.width=t.width,ns.height=t.height;const n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kd=0;class Rh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Cn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function $o(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?zd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vd=0;class $e extends Ki{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=qi,s=qi,r=mn,o=Yi,a=Rn,c=zn,l=$e.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Cn(),this.name="",this.source=new Rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=ph;$e.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(d+1)/2,I=(p+1)/2,A=(u+f)/4,w=(h+_)/4,R=(g+m)/4;return x>v&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=w/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=R/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=w/r,s=R/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gd extends Ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Gd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ch extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hd extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const I=Math.sqrt(x),A=Math.atan2(I,p*M);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}const v=a*M;if(c=c*m+f*v,l=l*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new L,zl=new Zn;class Bs{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Fr.subVectors(this.max,Zs),is.subVectors(t.a,Zs),ss.subVectors(t.b,Zs),rs.subVectors(t.c,Zs),gi.subVectors(ss,is),_i.subVectors(rs,ss),Fi.subVectors(is,rs);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Fi.z,Fi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Fi.z,0,-Fi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Fi.y,Fi.x,0];return!Jo(e,is,ss,rs,Fr)||(e=[1,0,0,0,1,0,0,0,1],!Jo(e,is,ss,rs,Fr))?!1:(Or.crossVectors(gi,_i),e=[Or.x,Or.y,Or.z],Jo(e,is,ss,rs,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new L,new L,new L,new L,new L,new L,new L,new L],Dn=new L,Nr=new Bs,is=new L,ss=new L,rs=new L,gi=new L,_i=new L,Fi=new L,Zs=new L,Fr=new L,Or=new L,Oi=new L;function Jo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Oi.fromArray(i,r);const a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),u=n.dot(Oi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Wd=new Bs,Js=new L,Ko=new L;class zs{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);const e=Js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Ko)),this.expandByPoint(Js.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new L,jo=new L,Br=new L,vi=new L,Qo=new L,zr=new L,ta=new L;class Lo{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jo.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(jo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=vi.dot(this.direction),c=-vi.dot(Br),l=vi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(jo).addScaledVector(Br,f),d}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){Qo.subVectors(e,t),zr.subVectors(n,t),ta.crossVectors(Qo,zr);let o=this.direction.dot(ta),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,t);const c=a*this.direction.dot(zr.crossVectors(vi,zr));if(c<0)return null;const l=a*this.direction.dot(Qo.cross(vi));if(l<0||c+l>o)return null;const u=-a*vi.dot(ta);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xd,t,qd)}lookAt(t,e,n){const s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),xi.crossVectors(n,_n),xi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),xi.crossVectors(n,_n)),xi.normalize(),kr.crossVectors(_n,xi),s[0]=xi.x,s[4]=kr.x,s[8]=_n.x,s[1]=xi.y,s[5]=kr.y,s[9]=_n.y,s[2]=xi.z,s[6]=kr.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],I=n[15],A=s[0],w=s[4],R=s[8],S=s[12],y=s[1],C=s[5],U=s[9],N=s[13],O=s[2],V=s[6],k=s[10],W=s[14],D=s[3],J=s[7],Q=s[11],K=s[15];return r[0]=o*A+a*y+c*O+l*D,r[4]=o*w+a*C+c*V+l*J,r[8]=o*R+a*U+c*k+l*Q,r[12]=o*S+a*N+c*W+l*K,r[1]=u*A+h*y+f*O+d*D,r[5]=u*w+h*C+f*V+d*J,r[9]=u*R+h*U+f*k+d*Q,r[13]=u*S+h*N+f*W+d*K,r[2]=g*A+_*y+m*O+p*D,r[6]=g*w+_*C+m*V+p*J,r[10]=g*R+_*U+m*k+p*Q,r[14]=g*S+_*N+m*W+p*K,r[3]=M*A+x*y+v*O+I*D,r[7]=M*w+x*C+v*V+I*J,r[11]=M*R+x*U+v*k+I*Q,r[15]=M*S+x*N+v*W+I*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+e*l*h-e*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=h*m*l-_*f*l+_*c*d-a*m*d-h*c*p+a*f*p,x=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,v=u*_*l-g*h*l+g*a*d-o*_*d-u*a*p+o*h*p,I=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,A=e*M+n*x+s*v+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=M*w,t[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*w,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*w,t[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*d-n*c*d)*w,t[4]=x*w,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*w,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*d+e*c*d)*w,t[8]=v*w,t[9]=(g*h*r-u*_*r-g*n*d+e*_*d+u*n*p-e*h*p)*w,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*w,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*d-e*a*d)*w,t[12]=I*w,t[13]=(u*_*s-g*h*s+g*n*f-e*_*f-u*n*m+e*h*m)*w,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*w,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*f+e*a*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,M=c*l,x=c*u,v=c*h,I=n.x,A=n.y,w=n.z;return s[0]=(1-(_+p))*I,s[1]=(d+v)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(f+p))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+x)*w,s[9]=(m-M)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=os.set(s[0],s[1],s[2]).length();const o=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);const l=1/r,u=1/o,h=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ui){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===ui)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ui){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*l,d=(n+s)*u;let g,_;if(a===ui)g=(o+r)*h,_=-2*h;else if(a===bo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const os=new L,Un=new ce,Xd=new L(0,0,0),qd=new L(1,1,1),xi=new L,kr=new L,_n=new L,kl=new ce,Vl=new Zn;class jn{constructor(t=0,e=0,n=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yd=0;const Gl=new L,as=new Zn,si=new ce,Vr=new L,Ks=new L,$d=new L,Zd=new Zn,Hl=new L(1,0,0),Wl=new L(0,1,0),Xl=new L(0,0,1),ql={type:"added"},Jd={type:"removed"},cs={type:"childadded",child:null},ea={type:"childremoved",child:null};class Ne extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new L,e=new jn,n=new Zn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new ee}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(Wl,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(Wl,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ks,Vr,this.up):si.lookAt(Vr,Ks,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),as.setFromRotationMatrix(si),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ql),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jd),ea.child=t,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ql),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,$d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new L(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new L,ri=new L,na=new L,oi=new L,ls=new L,us=new L,Yl=new L,ia=new L,sa=new L,ra=new L,oa=new Ee,aa=new Ee,ca=new Ee;class An{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),ri.subVectors(n,e),na.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(ri),c=Nn.dot(na),l=ri.dot(ri),u=ri.dot(na),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(o,oi.y),c.addScaledVector(a,oi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return oa.setScalar(0),aa.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oa,r.x),o.addScaledVector(aa,r.y),o.addScaledVector(ca,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),ri.subVectors(t,e),Nn.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Nn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,n),us.subVectors(r,n),ia.subVectors(t,n);const c=ls.dot(ia),l=us.dot(ia);if(c<=0&&l<=0)return e.copy(n);sa.subVectors(t,s);const u=ls.dot(sa),h=us.dot(sa);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ls,o);ra.subVectors(t,r);const d=ls.dot(ra),g=us.dot(ra);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(us,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Yl.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Yl,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(ls,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function la(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=$c(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=la(o,r,t+1/3),this.g=la(o,r,t),this.b=la(o,r,t-1/3)}return ge.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ge.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Xe(Qe.r*255,0,255))*65536+Math.round(Xe(Qe.g*255,0,255))*256+Math.round(Xe(Qe.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(Qe.copy(this),e);const n=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Ce){ge.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,s=Qe.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Gr);const n=lr(yi.h,Gr.h,e),s=lr(yi.s,Gr.s,e),r=lr(yi.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new te;te.NAMES=Ph;let Kd=0;class Ii extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Cn(),this.name="",this.blending=ws,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=ka,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ue extends Ii{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new L,Hr=new rt;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wc,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wc&&(t.usage=this.usage),t}}class Jc extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ih extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jd=0;const Tn=new ce,ua=new Ne,hs=new L,vn=new Bs,js=new Bs,We=new L;class Fe extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ah(t)?Ih:Jc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(vn.min,js.min),vn.expandByPoint(We),We.addVectors(vn.max,js.max),vn.expandByPoint(We)):(vn.expandByPoint(js.min),vn.expandByPoint(js.max))}vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)We.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(t,l),We.add(hs)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new L,c[R]=new L;const l=new L,u=new L,h=new L,f=new rt,d=new rt,g=new rt,_=new L,m=new L;function p(R,S,y){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(_),a[S].add(_),a[y].add(_),c[R].add(m),c[S].add(m),c[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){const y=M[R],C=y.start,U=y.count;for(let N=C,O=C+U;N<O;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new L,v=new L,I=new L,A=new L;function w(R){I.fromBufferAttribute(s,R),A.copy(I);const S=a[R];x.copy(S),x.sub(I.multiplyScalar(I.dot(S))).normalize(),v.crossVectors(A,S);const C=v.dot(c[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,C)}for(let R=0,S=M.length;R<S;++R){const y=M[R],C=y.start,U=y.count;for(let N=C,O=C+U;N<O;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new gn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new ce,Bi=new Lo,Wr=new zs,Zl=new L,Xr=new L,qr=new L,Yr=new L,ha=new L,$r=new L,Jl=new L,Zr=new L;class ft extends Ne{constructor(t=new Fe,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(ha.fromBufferAttribute(h,t),o?$r.addScaledVector(ha,u):$r.addScaledVector(ha.sub(e),u))}e.add($r)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Wr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Wr,Zl)===null||Bi.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&($l.copy(r).invert(),Bi.copy(t.ray).applyMatrix4($l),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,I=x;v<I;v+=3){const A=a.getX(v),w=a.getX(v+1),R=a.getX(v+2);s=Jr(this,p,t,n,l,u,h,A,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Jr(this,o,t,n,l,u,h,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,I=x;v<I;v+=3){const A=v,w=v+1,R=v+2;s=Jr(this,p,t,n,l,u,h,A,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,v=m+2;s=Jr(this,o,t,n,l,u,h,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Qd(i,t,e,n,s,r,o,a){let c;if(t.side===an?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===fi,a),c===null)return null;Zr.copy(a),Zr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Zr);return l<e.near||l>e.far?null:{distance:l,point:Zr.clone(),object:i}}function Jr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Xr),i.getVertexPosition(c,qr),i.getVertexPosition(l,Yr);const u=Qd(i,t,e,n,Xr,qr,Yr,Jl);if(u){const h=new L;An.getBarycoord(Jl,Xr,qr,Yr,h),s&&(u.uv=An.getInterpolatedAttribute(s,a,c,l,h,new rt)),r&&(u.uv1=An.getInterpolatedAttribute(r,a,c,l,h,new rt)),o&&(u.normal=An.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};An.getNormal(Xr,qr,Yr,f.normal),u.face=f,u.barycoord=h}return u}class Ze extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(h,2));function g(_,m,p,M,x,v,I,A,w,R,S){const y=v/w,C=I/R,U=v/2,N=I/2,O=A/2,V=w+1,k=R+1;let W=0,D=0;const J=new L;for(let Q=0;Q<k;Q++){const K=Q*C-N;for(let wt=0;wt<V;wt++){const It=wt*y-U;J[_]=It*M,J[m]=K*x,J[p]=O,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=A>0?1:-1,u.push(J.x,J.y,J.z),h.push(wt/w),h.push(1-Q/R),W+=1}}for(let Q=0;Q<R;Q++)for(let K=0;K<w;K++){const wt=f+K+V*Q,It=f+K+V*(Q+1),$=f+(K+1)+V*(Q+1),at=f+(K+1)+V*Q;c.push(wt,It,at),c.push(It,$,at),D+=6}a.addGroup(d,D,S),d+=D,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function rn(i){const t={};for(let e=0;e<i.length;e++){const n=Ds(i[e]);for(const s in n)t[s]=n[s]}return t}function tp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const ep={clone:Ds,merge:rn};var np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Ii{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dh extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new L,Kl=new rt,jl=new rt;class dn extends Dh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Kl,jl),e.subVectors(jl,Kl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fs=-90,ds=1;class sp extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(fs,ds,t,e);s.layers=this.layers,this.add(s);const r=new dn(fs,ds,t,e);r.layers=this.layers,this.add(r);const o=new dn(fs,ds,t,e);o.layers=this.layers,this.add(o);const a=new dn(fs,ds,t,e);a.layers=this.layers,this.add(a);const c=new dn(fs,ds,t,e);c.layers=this.layers,this.add(c);const l=new dn(fs,ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uh extends $e{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rp extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ze(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Ti});r.uniforms.tEquirect.value=e;const o=new ft(s,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=mn),new sp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const fa=new L,op=new L,ap=new ee;class wi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fa.subVectors(n,e).cross(op.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ap.getNormalMatrix(t),s=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new zs,Kr=new L;class Kc{constructor(t=new wi,e=new wi,n=new wi,s=new wi,r=new wi,o=new wi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-d,v-p).normalize(),n[1].setComponents(c+r,f+l,m+d,v+p).normalize(),n[2].setComponents(c+o,f+u,m+g,v+M).normalize(),n[3].setComponents(c-o,f-u,m-g,v-M).normalize(),n[4].setComponents(c-a,f-h,m-_,v-x).normalize(),e===ui)n[5].setComponents(c+a,f+h,m+_,v+x).normalize();else if(e===bo)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Kr.x=s.normal.x>0?t.max.x:t.min.x,Kr.y=s.normal.y>0?t.max.y:t.min.y,Kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cp(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ke extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let x=0;x<l;x++){const v=x*h-r;g.push(v,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const x=M+l*p,v=M+l*(p+1),I=M+1+l*(p+1),A=M+1+l*p;d.push(x,v,A),d.push(v,I,A)}this.setIndex(d),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.widthSegments,t.heightSegments)}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
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
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,bp=`#ifdef USE_BUMPMAP
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lp=`#define PI 3.141592653589793
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
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
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
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
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
#endif`,a0=`struct PhysicalMaterial {
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
}`,c0=`
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`#ifdef USE_MORPHTARGETS
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
#endif`,T0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y0=`float getShadowMask() {
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
}`,$0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,J0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fm=`varying vec3 vWorldDirection;
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
}`,pm=`#include <common>
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
}`,mm=`#if DEPTH_PACKING == 3200
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
}`,gm=`#define DISTANCE
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
}`,_m=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,bm=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Tm=`#define MATCAP
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define NORMAL
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define PHONG
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
}`,Im=`#define PHONG
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
}`,Lm=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Um=`#define TOON
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
}`,Nm=`#define TOON
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
}`,Fm=`uniform float size;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,zm=`uniform vec3 color;
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
}`,km=`uniform float rotation;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:lp,alphahash_pars_fragment:up,alphamap_fragment:hp,alphamap_pars_fragment:fp,alphatest_fragment:dp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:_p,batching_vertex:vp,begin_vertex:xp,beginnormal_vertex:yp,bsdfs:Mp,iridescence_fragment:Sp,bumpmap_pars_fragment:bp,clipping_planes_fragment:wp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Ap,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Ip,common:Lp,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Up,displacementmap_pars_vertex:Np,displacementmap_vertex:Fp,emissivemap_fragment:Op,emissivemap_pars_fragment:Bp,colorspace_fragment:zp,colorspace_pars_fragment:kp,envmap_fragment:Vp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Hp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:e0,envmap_vertex:Xp,fog_vertex:qp,fog_pars_vertex:Yp,fog_fragment:$p,fog_pars_fragment:Zp,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:Kp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:t0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:s0,lights_phong_pars_fragment:r0,lights_physical_fragment:o0,lights_physical_pars_fragment:a0,lights_fragment_begin:c0,lights_fragment_maps:l0,lights_fragment_end:u0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:_0,map_particle_pars_fragment:v0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:y0,morphinstance_vertex:M0,morphcolor_vertex:S0,morphnormal_vertex:b0,morphtarget_pars_vertex:w0,morphtarget_vertex:E0,normal_fragment_begin:T0,normal_fragment_maps:A0,normal_pars_fragment:R0,normal_pars_vertex:C0,normal_vertex:P0,normalmap_pars_fragment:I0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:N0,opaque_fragment:F0,packing:O0,premultiplied_alpha_fragment:B0,project_vertex:z0,dithering_fragment:k0,dithering_pars_fragment:V0,roughnessmap_fragment:G0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:X0,shadowmap_vertex:q0,shadowmask_pars_fragment:Y0,skinbase_vertex:$0,skinning_pars_vertex:Z0,skinning_vertex:J0,skinnormal_vertex:K0,specularmap_fragment:j0,specularmap_pars_fragment:Q0,tonemapping_fragment:tm,tonemapping_pars_fragment:em,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:sm,uv_pars_vertex:rm,uv_vertex:om,worldpos_vertex:am,background_vert:cm,background_frag:lm,backgroundCube_vert:um,backgroundCube_frag:hm,cube_vert:fm,cube_frag:dm,depth_vert:pm,depth_frag:mm,distanceRGBA_vert:gm,distanceRGBA_frag:_m,equirect_vert:vm,equirect_frag:xm,linedashed_vert:ym,linedashed_frag:Mm,meshbasic_vert:Sm,meshbasic_frag:bm,meshlambert_vert:wm,meshlambert_frag:Em,meshmatcap_vert:Tm,meshmatcap_frag:Am,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Pm,meshphong_frag:Im,meshphysical_vert:Lm,meshphysical_frag:Dm,meshtoon_vert:Um,meshtoon_frag:Nm,points_vert:Fm,points_frag:Om,shadow_vert:Bm,shadow_frag:zm,sprite_vert:km,sprite_frag:Vm},St={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},qn={basic:{uniforms:rn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:rn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new te(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:rn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:rn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:rn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new te(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:rn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:rn([St.points,St.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:rn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:rn([St.common,St.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:rn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:rn([St.sprite,St.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:rn([St.common,St.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:rn([St.lights,St.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};qn.physical={uniforms:rn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const jr={r:0,b:0,g:0},ki=new jn,Gm=new ce;function Hm(i,t,e,n,s,r,o){const a=new te(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?p(a,c):v&&v.isColor&&(p(v,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Po)?(u===void 0&&(u=new ft(new Ze(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ds(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ki.copy(x.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(ki)),u.material.toneMapped=ge.getTransfer(v.colorSpace)!==Se,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ft(new ke(2,2),new yn({name:"BackgroundMaterial",uniforms:Ds(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ge.getTransfer(v.colorSpace)!==Se,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(jr,Lh(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m}}function Wm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,C,U,N,O){let V=!1;const k=h(N,U,C);r!==k&&(r=k,l(r.object)),V=d(y,N,U,O),V&&g(y,N,U,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(y,C,U,N),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,C,U){const N=U.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let V=O[C.id];V===void 0&&(V={},O[C.id]=V);let k=V[N];return k===void 0&&(k=f(c()),V[N]=k),k}function f(y){const C=[],U=[],N=[];for(let O=0;O<e;O++)C[O]=0,U[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:N,object:y,attributes:{},index:null}}function d(y,C,U,N){const O=r.attributes,V=C.attributes;let k=0;const W=U.getAttributes();for(const D in W)if(W[D].location>=0){const Q=O[D];let K=V[D];if(K===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),Q===void 0||Q.attribute!==K||K&&Q.data!==K.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function g(y,C,U,N){const O={},V=C.attributes;let k=0;const W=U.getAttributes();for(const D in W)if(W[D].location>=0){let Q=V[D];Q===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const K={};K.attribute=Q,Q&&Q.data&&(K.data=Q.data),O[D]=K,k++}r.attributes=O,r.attributesNum=k,r.index=N}function _(){const y=r.newAttributes;for(let C=0,U=y.length;C<U;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const U=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;U[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),O[y]!==C&&(i.vertexAttribDivisor(y,C),O[y]=C)}function M(){const y=r.newAttributes,C=r.enabledAttributes;for(let U=0,N=C.length;U<N;U++)C[U]!==y[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function x(y,C,U,N,O,V,k){k===!0?i.vertexAttribIPointer(y,C,U,O,V):i.vertexAttribPointer(y,C,U,N,O,V)}function v(y,C,U,N){_();const O=N.attributes,V=U.getAttributes(),k=C.defaultAttributeValues;for(const W in V){const D=V[W];if(D.location>=0){let J=O[W];if(J===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){const Q=J.normalized,K=J.itemSize,wt=t.get(J);if(wt===void 0)continue;const It=wt.buffer,$=wt.type,at=wt.bytesPerElement,Et=$===i.INT||$===i.UNSIGNED_INT||J.gpuType===zc;if(J.isInterleavedBufferAttribute){const ct=J.data,zt=ct.stride,qt=J.offset;if(ct.isInstancedInterleavedBuffer){for(let $t=0;$t<D.locationSize;$t++)p(D.location+$t,ct.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let $t=0;$t<D.locationSize;$t++)m(D.location+$t);i.bindBuffer(i.ARRAY_BUFFER,It);for(let $t=0;$t<D.locationSize;$t++)x(D.location+$t,K/D.locationSize,$,Q,zt*at,(qt+K/D.locationSize*$t)*at,Et)}else{if(J.isInstancedBufferAttribute){for(let ct=0;ct<D.locationSize;ct++)p(D.location+ct,J.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ct=0;ct<D.locationSize;ct++)m(D.location+ct);i.bindBuffer(i.ARRAY_BUFFER,It);for(let ct=0;ct<D.locationSize;ct++)x(D.location+ct,K/D.locationSize,$,Q,K*at,K/D.locationSize*ct*at,Et)}}else if(k!==void 0){const Q=k[W];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(D.location,Q);break;case 3:i.vertexAttrib3fv(D.location,Q);break;case 4:i.vertexAttrib4fv(D.location,Q);break;default:i.vertexAttrib1fv(D.location,Q)}}}}M()}function I(){R();for(const y in n){const C=n[y];for(const U in C){const N=C[U];for(const O in N)u(N[O].object),delete N[O];delete C[U]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const U in C){const N=C[U];for(const O in N)u(N[O].object),delete N[O];delete C[U]}delete n[y.id]}function w(y){for(const C in n){const U=n[C];if(U[y.id]===void 0)continue;const N=U[y.id];for(const O in N)u(N[O].object),delete N[O];delete U[y.id]}}function R(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Xm(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function qm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==zn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Yn&&!R)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:I,maxSamples:A}}function Ym(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new wi,a=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:n,x=M*4;let v=p.clippingState||null;c.value=v,v=u(g,f,x,d);for(let I=0;I!==x;++I)v[I]=e[I];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function $m(i){let t=new WeakMap;function e(o,a){return a===$a?o.mapping=Cs:a===Za&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===Za)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new rp(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Do extends Dh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ss=4,Ql=[.125,.215,.35,.446,.526,.582],Wi=20,da=new Do,tu=new te;let pa=null,ma=0,ga=0,_a=!1;const Hi=(1+Math.sqrt(5))/2,ps=1/Hi,eu=[new L(-Hi,ps,0),new L(Hi,ps,0),new L(-ps,0,Hi),new L(ps,0,Hi),new L(0,Hi,-ps),new L(0,Hi,ps),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class nu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Fs,format:Rn,colorSpace:Os,depthBuffer:!1},s=iu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zm(r)),this._blurMaterial=Jm(r,t,e)}return s}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,n,s){const a=new dn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(tu),u.toneMapping=Ai,u.autoClear=!1;const d=new Ue({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new ft(new Ze,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(tu),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Qr(s,M*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Cs||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Qr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=eu[(s-r-1)%eu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ft(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Wi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Wi;m>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const p=[];let M=0;for(let w=0;w<Wi;++w){const R=w/_,S=Math.exp(-R*R/2);p.push(S),w===0?M+=S:w<m&&(M+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[s],I=3*v*(s>x-Ss?s-x+Ss:0),A=4*(this._cubeSize-v);Qr(e,I,A,3*v,2*v),c.setRenderTarget(e),c.render(h,da)}}function Zm(i){const t=[],e=[],n=[];let s=i;const r=i-Ss+1+Ql.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ss?c=Ql[o-i+Ss-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,R=A>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(S,_*g*A),x.set(f,m*g*A);const y=[A,A,A,A,A,A];v.set(y,p*g*A)}const I=new Fe;I.setAttribute("position",new gn(M,_)),I.setAttribute("uv",new gn(x,m)),I.setAttribute("faceIndex",new gn(v,p)),t.push(I),s>Ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function iu(i,t,e){const n=new Kn(i,t,e);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jm(i,t,e){const n=new Float32Array(Wi),s=new L(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function su(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ru(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

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
	`}function Km(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===$a||c===Za,u=c===Cs||c===Ps;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new nu(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new nu(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qm(i,t,e,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,v=M.length;x<v;x+=3){const I=M[x+0],A=M[x+1],w=M[x+2];f.push(I,A,A,w,w,I)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const I=x+0,A=x+1,w=x+2;f.push(I,A,A,w,w,I)}}else return;const m=new(Ah(f)?Ih:Jc)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function tg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function eg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ng(i,t,e){const n=new WeakMap,s=new Ee;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let I=a.attributes.position.count*v,A=1;I>t.maxTextureSize&&(A=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const w=new Float32Array(I*A*4*h),R=new Ch(w,I,A,h);R.type=Yn,R.needsUpdate=!0;const S=v*4;for(let C=0;C<h;C++){const U=p[C],N=M[C],O=x[C],V=I*A*4*C;for(let k=0;k<U.count;k++){const W=k*S;g===!0&&(s.fromBufferAttribute(U,k),w[V+W+0]=s.x,w[V+W+1]=s.y,w[V+W+2]=s.z,w[V+W+3]=0),_===!0&&(s.fromBufferAttribute(N,k),w[V+W+4]=s.x,w[V+W+5]=s.y,w[V+W+6]=s.z,w[V+W+7]=0),m===!0&&(s.fromBufferAttribute(O,k),w[V+W+8]=s.x,w[V+W+9]=s.y,w[V+W+10]=s.z,w[V+W+11]=O.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new rt(I,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ig(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Fh extends $e{constructor(t,e,n,s,r,o,a,c,l,u=Es){if(u!==Es&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Es&&(n=Zi),n===void 0&&u===Ls&&(n=Is),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Mn,this.minFilter=c!==void 0?c:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Oh=new $e,ou=new Fh(1,1),Bh=new Ch,zh=new Hd,kh=new Uh,au=[],cu=[],lu=new Float32Array(16),uu=new Float32Array(9),hu=new Float32Array(4);function ks(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Uo(i,t){let e=cu[t];e===void 0&&(e=new Int32Array(t),cu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function cg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;hu.set(n),i.uniformMatrix2fv(this.addr,!1,hu),Ge(e,n)}}function lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;uu.set(n),i.uniformMatrix3fv(this.addr,!1,uu),Ge(e,n)}}function ug(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;lu.set(n),i.uniformMatrix4fv(this.addr,!1,lu),Ge(e,n)}}function hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function xg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ou.compareFunction=Th,r=ou):r=Oh,e.setTexture2D(t||r,s)}function yg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zh,s)}function Mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kh,s)}function Sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bh,s)}function bg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return cg;case 35675:return lg;case 35676:return ug;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}function wg(i,t){i.uniform1fv(this.addr,t)}function Eg(i,t){const e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function Tg(i,t){const e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function Ag(i,t){const e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function Rg(i,t){const e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cg(i,t){const e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pg(i,t){const e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ig(i,t){i.uniform1iv(this.addr,t)}function Lg(i,t){i.uniform2iv(this.addr,t)}function Dg(i,t){i.uniform3iv(this.addr,t)}function Ug(i,t){i.uniform4iv(this.addr,t)}function Ng(i,t){i.uniform1uiv(this.addr,t)}function Fg(i,t){i.uniform2uiv(this.addr,t)}function Og(i,t){i.uniform3uiv(this.addr,t)}function Bg(i,t){i.uniform4uiv(this.addr,t)}function zg(i,t,e){const n=this.cache,s=t.length,r=Uo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Oh,r[o])}function kg(i,t,e){const n=this.cache,s=t.length,r=Uo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zh,r[o])}function Vg(i,t,e){const n=this.cache,s=t.length,r=Uo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||kh,r[o])}function Gg(i,t,e){const n=this.cache,s=t.length,r=Uo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bh,r[o])}function Hg(i){switch(i){case 5126:return wg;case 35664:return Eg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Ig;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bg(e.type)}}class Xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hg(e.type)}}class qg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function fu(i,t){i.seq.push(t),i.map[t.id]=t}function Yg(i,t,e){const n=i.name,s=n.length;for(va.lastIndex=0;;){const r=va.exec(n),o=va.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){fu(e,l===void 0?new Wg(a,i,t):new Xg(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new qg(a),fu(e,h)),e=h}}}class xo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Yg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function du(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $g=37297;let Zg=0;function Jg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const pu=new ee;function Kg(i){ge._getMatrix(pu,ge.workingColorSpace,i);const t=`mat3( ${pu.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Io:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Jg(i.getShaderSource(t),o)}else return s}function jg(i,t){const e=Kg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qg(i,t){let e;switch(t){case jf:e="Linear";break;case Qf:e="Reinhard";break;case td:e="Cineon";break;case ed:e="ACESFilmic";break;case id:e="AgX";break;case sd:e="Neutral";break;case nd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const to=new L;function t_(){ge.getLuminanceCoefficients(to);const i=to.x.toFixed(4),t=to.y.toFixed(4),e=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function n_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ar(i){return i!==""}function gu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _u(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(i){return i.replace(s_,o_)}const r_=new Map;function o_(i,t){let e=ie[t];if(e===void 0){const n=r_.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ec(e)}const a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(i){return i.replace(a_,c_)}function c_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function l_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===uh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function u_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cs:case Ps:t="ENVMAP_TYPE_CUBE";break;case Po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function f_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dh:t="ENVMAP_BLENDING_MULTIPLY";break;case Jf:t="ENVMAP_BLENDING_MIX";break;case Kf:t="ENVMAP_BLENDING_ADD";break}return t}function d_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function p_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=l_(e),l=u_(e),u=h_(e),h=f_(e),f=d_(e),d=e_(e),g=n_(r),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(m=[xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?ie.tonemapping_pars_fragment:"",e.toneMapping!==Ai?Qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,jg("linearToOutputTexel",e.outputColorSpace),t_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),o=Ec(o),o=gu(o,e),o=_u(o,e),a=Ec(a),a=gu(a,e),a=_u(a,e),o=vu(o),a=vu(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,v=M+p+a,I=du(s,s.VERTEX_SHADER,x),A=du(s,s.FRAGMENT_SHADER,v);s.attachShader(_,I),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(I).trim(),O=s.getShaderInfoLog(A).trim();let V=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,A);else{const W=mu(s,I,"vertex"),D=mu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+W+`
`+D)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||O==="")&&(k=!1);k&&(C.diagnostics={runnable:V,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(I),s.deleteShader(A),R=new xo(s,_),S=i_(s,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,$g)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}let m_=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new __(t),e.set(t,n)),n}}class __{constructor(t){this.id=m_++,this.code=t,this.usedTimes=0}}function v_(i,t,e,n,s,r,o){const a=new Zc,c=new g_,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,U,N){const O=U.fog,V=N.geometry,k=S.isMeshStandardMaterial?U.environment:null,W=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),D=W&&W.mapping===Po?W.image.height:null,J=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const Q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,K=Q!==void 0?Q.length:0;let wt=0;V.morphAttributes.position!==void 0&&(wt=1),V.morphAttributes.normal!==void 0&&(wt=2),V.morphAttributes.color!==void 0&&(wt=3);let It,$,at,Et;if(J){const Gt=qn[J];It=Gt.vertexShader,$=Gt.fragmentShader}else It=S.vertexShader,$=S.fragmentShader,c.update(S),at=c.getVertexShaderID(S),Et=c.getFragmentShaderID(S);const ct=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),qt=N.isInstancedMesh===!0,$t=N.isBatchedMesh===!0,re=!!S.map,et=!!S.matcap,pt=!!W,P=!!S.aoMap,Ft=!!S.lightMap,ot=!!S.bumpMap,yt=!!S.normalMap,_t=!!S.displacementMap,Wt=!!S.emissiveMap,Rt=!!S.metalnessMap,T=!!S.roughnessMap,b=S.anisotropy>0,H=S.clearcoat>0,j=S.dispersion>0,st=S.iridescence>0,tt=S.sheen>0,Nt=S.transmission>0,xt=b&&!!S.anisotropyMap,Tt=H&&!!S.clearcoatMap,Xt=H&&!!S.clearcoatNormalMap,ut=H&&!!S.clearcoatRoughnessMap,Pt=st&&!!S.iridescenceMap,Vt=st&&!!S.iridescenceThicknessMap,Zt=tt&&!!S.sheenColorMap,vt=tt&&!!S.sheenRoughnessMap,Yt=!!S.specularMap,Lt=!!S.specularColorMap,ve=!!S.specularIntensityMap,F=Nt&&!!S.transmissionMap,Mt=Nt&&!!S.thicknessMap,Z=!!S.gradientMap,nt=!!S.alphaMap,mt=S.alphaTest>0,dt=!!S.alphaHash,Ct=!!S.extensions;let jt=Ai;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(jt=i.toneMapping);const fe={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:It,fragmentShader:$,defines:S.defines,customVertexShaderID:at,customFragmentShaderID:Et,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:$t,batchingColor:$t&&N._colorsTexture!==null,instancing:qt,instancingColor:qt&&N.instanceColor!==null,instancingMorph:qt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Os,alphaToCoverage:!!S.alphaToCoverage,map:re,matcap:et,envMap:pt,envMapMode:pt&&W.mapping,envMapCubeUVHeight:D,aoMap:P,lightMap:Ft,bumpMap:ot,normalMap:yt,displacementMap:f&&_t,emissiveMap:Wt,normalMapObjectSpace:yt&&S.normalMapType===hd,normalMapTangentSpace:yt&&S.normalMapType===Eh,metalnessMap:Rt,roughnessMap:T,anisotropy:b,anisotropyMap:xt,clearcoat:H,clearcoatMap:Tt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:ut,dispersion:j,iridescence:st,iridescenceMap:Pt,iridescenceThicknessMap:Vt,sheen:tt,sheenColorMap:Zt,sheenRoughnessMap:vt,specularMap:Yt,specularColorMap:Lt,specularIntensityMap:ve,transmission:Nt,transmissionMap:F,thicknessMap:Mt,gradientMap:Z,opaque:S.transparent===!1&&S.blending===ws&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:mt,alphaHash:dt,combine:S.combine,mapUv:re&&_(S.map.channel),aoMapUv:P&&_(S.aoMap.channel),lightMapUv:Ft&&_(S.lightMap.channel),bumpMapUv:ot&&_(S.bumpMap.channel),normalMapUv:yt&&_(S.normalMap.channel),displacementMapUv:_t&&_(S.displacementMap.channel),emissiveMapUv:Wt&&_(S.emissiveMap.channel),metalnessMapUv:Rt&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:xt&&_(S.anisotropyMap.channel),clearcoatMapUv:Tt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(S.sheenRoughnessMap.channel),specularMapUv:Yt&&_(S.specularMap.channel),specularColorMapUv:Lt&&_(S.specularColorMap.channel),specularIntensityMapUv:ve&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:Mt&&_(S.thicknessMap.channel),alphaMapUv:nt&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(yt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(re||nt),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:zt,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,decodeVideoTexture:re&&S.map.isVideoTexture===!0&&ge.getTransfer(S.map.colorSpace)===Se,decodeVideoTextureEmissive:Wt&&S.emissiveMap.isVideoTexture===!0&&ge.getTransfer(S.emissiveMap.colorSpace)===Se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===De,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ct&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&S.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(M(y,S),x(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=g[S.type];let C;if(y){const U=qn[y];C=ep.clone(U.uniforms)}else C=S.uniforms;return C}function I(S,y){let C;for(let U=0,N=u.length;U<N;U++){const O=u[U];if(O.cacheKey===y){C=O,++C.usedTimes;break}}return C===void 0&&(C=new p_(i,y,S,r),u.push(C)),C}function A(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function w(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:R}}function x_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function y_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||y_),n.length>1&&n.sort(f||yu),s.length>1&&s.sort(f||yu)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function M_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Mu,i.set(n,[o])):s>=r.length?(o=new Mu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function S_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new te};break;case"SpotLight":e={position:new L,direction:new L,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function b_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let w_=0;function E_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function T_(i){const t=new S_,e=b_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new ce,o=new ce;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,x=0,v=0,I=0,A=0,w=0;l.sort(E_);for(let S=0,y=l.length;S<y;S++){const C=l[S],U=C.color,N=C.intensity,O=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*N,h+=U.g*N,f+=U.b*N;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],N);w++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,D=e.get(C);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,n.directionalShadow[d]=D,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=C.shadow.matrix,M++}n.directional[d]=k,d++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(U).multiplyScalar(N),k.distance=O,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[_]=k;const W=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,W.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=W.matrix,C.castShadow){const D=e.get(C);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=V,v++}_++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(U).multiplyScalar(N),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=k,m++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const W=C.shadow,D=e.get(C);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,D.shadowCameraNear=W.camera.near,D.shadowCameraFar=W.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=C.shadow.matrix,x++}n.point[g]=k,g++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(N),k.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==I||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=I,R.numLightProbes=w,n.version=w_++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Su(i){const t=new T_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function A_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Su(i),t.set(s,[a])):r>=o.length?(a=new Su(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class R_ extends Ii{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class C_ extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
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
}`;function L_(i,t,e){let n=new Kc;const s=new rt,r=new rt,o=new Ee,a=new R_({depthPacking:ud}),c=new C_,l={},u=e.maxTextureSize,h={[fi]:an,[an]:fi,[De]:De},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:P_,fragmentShader:I_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let p=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ti),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=p!==ci&&this.type===ci,O=p===ci&&this.type!==ci;for(let V=0,k=A.length;V<k;V++){const W=A[V],D=W.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const J=D.getFrameExtents();if(s.multiply(J),r.copy(D.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,D.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,D.mapSize.y=r.y)),D.map===null||N===!0||O===!0){const K=this.type!==ci?{minFilter:Mn,magFilter:Mn}:{};D.map!==null&&D.map.dispose(),D.map=new Kn(s.x,s.y,K),D.map.texture.name=W.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const Q=D.getViewportCount();for(let K=0;K<Q;K++){const wt=D.getViewport(K);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),U.viewport(o),D.updateMatrices(W,K),n=D.getFrustum(),v(w,R,D.camera,W,this.type)}D.isPointLightShadow!==!0&&this.type===ci&&M(D,R),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,C)};function M(A,w){const R=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,R,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,R,d,_,null)}function x(A,w,R,S){let y=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=y.uuid,N=w.uuid;let O=l[U];O===void 0&&(O={},l[U]=O);let V=O[N];V===void 0&&(V=y.clone(),O[N]=V,w.addEventListener("dispose",I)),y=V}if(y.visible=w.visible,y.wireframe=w.wireframe,S===ci?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=i.properties.get(y);U.light=R}return y}function v(A,w,R,S,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===ci)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const N=t.update(A),O=A.material;if(Array.isArray(O)){const V=N.groups;for(let k=0,W=V.length;k<W;k++){const D=V[k],J=O[D.materialIndex];if(J&&J.visible){const Q=x(A,J,S,y);A.onBeforeShadow(i,A,w,R,N,Q,D),i.renderBufferDirect(R,null,N,Q,A,D),A.onAfterShadow(i,A,w,R,N,Q,D)}}}else if(O.visible){const V=x(A,O,S,y);A.onBeforeShadow(i,A,w,R,N,V,null),i.renderBufferDirect(R,null,N,V,A,null),A.onAfterShadow(i,A,w,R,N,V,null)}}const U=A.children;for(let N=0,O=U.length;N<O;N++)v(U[N],w,R,S,y)}function I(A){A.target.removeEventListener("dispose",I);for(const R in l){const S=l[R],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const D_={[Va]:Ga,[Ha]:qa,[Wa]:Ya,[Rs]:Xa,[Ga]:Va,[qa]:Ha,[Ya]:Wa,[Xa]:Rs};function U_(i,t){function e(){let F=!1;const Mt=new Ee;let Z=null;const nt=new Ee(0,0,0,0);return{setMask:function(mt){Z!==mt&&!F&&(i.colorMask(mt,mt,mt,mt),Z=mt)},setLocked:function(mt){F=mt},setClear:function(mt,dt,Ct,jt,fe){fe===!0&&(mt*=jt,dt*=jt,Ct*=jt),Mt.set(mt,dt,Ct,jt),nt.equals(Mt)===!1&&(i.clearColor(mt,dt,Ct,jt),nt.copy(Mt))},reset:function(){F=!1,Z=null,nt.set(-1,0,0,0)}}}function n(){let F=!1,Mt=!1,Z=null,nt=null,mt=null;return{setReversed:function(dt){if(Mt!==dt){const Ct=t.get("EXT_clip_control");Mt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);const jt=mt;mt=null,this.setClear(jt)}Mt=dt},getReversed:function(){return Mt},setTest:function(dt){dt?ct(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(dt){Z!==dt&&!F&&(i.depthMask(dt),Z=dt)},setFunc:function(dt){if(Mt&&(dt=D_[dt]),nt!==dt){switch(dt){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=dt}},setLocked:function(dt){F=dt},setClear:function(dt){mt!==dt&&(Mt&&(dt=1-dt),i.clearDepth(dt),mt=dt)},reset:function(){F=!1,Z=null,nt=null,mt=null,Mt=!1}}}function s(){let F=!1,Mt=null,Z=null,nt=null,mt=null,dt=null,Ct=null,jt=null,fe=null;return{setTest:function(Gt){F||(Gt?ct(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(Gt){Mt!==Gt&&!F&&(i.stencilMask(Gt),Mt=Gt)},setFunc:function(Gt,cn,wn){(Z!==Gt||nt!==cn||mt!==wn)&&(i.stencilFunc(Gt,cn,wn),Z=Gt,nt=cn,mt=wn)},setOp:function(Gt,cn,wn){(dt!==Gt||Ct!==cn||jt!==wn)&&(i.stencilOp(Gt,cn,wn),dt=Gt,Ct=cn,jt=wn)},setLocked:function(Gt){F=Gt},setClear:function(Gt){fe!==Gt&&(i.clearStencil(Gt),fe=Gt)},reset:function(){F=!1,Mt=null,Z=null,nt=null,mt=null,dt=null,Ct=null,jt=null,fe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,I=null,A=null,w=new te(0,0,0),R=0,S=!1,y=null,C=null,U=null,N=null,O=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,W=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(D)[1]),k=W>=1):D.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),k=W>=2);let J=null,Q={};const K=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),It=new Ee().fromArray(K),$=new Ee().fromArray(wt);function at(F,Mt,Z,nt){const mt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(F,dt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<Z;Ct++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(Mt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return dt}const Et={};Et[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Rs),ot(!1),yt(Tl),ct(i.CULL_FACE),P(Ti);function ct(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function zt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function qt(F,Mt){return h[F]!==Mt?(i.bindFramebuffer(F,Mt),h[F]=Mt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function $t(F,Mt){let Z=d,nt=!1;if(F){Z=f.get(Mt),Z===void 0&&(Z=[],f.set(Mt,Z));const mt=F.textures;if(Z.length!==mt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ct=mt.length;dt<Ct;dt++)Z[dt]=i.COLOR_ATTACHMENT0+dt;Z.length=mt.length,nt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Z)}function re(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const et={[li]:i.FUNC_ADD,[Nf]:i.FUNC_SUBTRACT,[fh]:i.FUNC_REVERSE_SUBTRACT};et[Ff]=i.MIN,et[Of]=i.MAX;const pt={[Bf]:i.ZERO,[Ba]:i.ONE,[zf]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[Xf]:i.SRC_ALPHA_SATURATE,[Hf]:i.DST_COLOR,[Vf]:i.DST_ALPHA,[kf]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[Wf]:i.ONE_MINUS_DST_COLOR,[Gf]:i.ONE_MINUS_DST_ALPHA,[qf]:i.CONSTANT_COLOR,[Yf]:i.ONE_MINUS_CONSTANT_COLOR,[$f]:i.CONSTANT_ALPHA,[Zf]:i.ONE_MINUS_CONSTANT_ALPHA};function P(F,Mt,Z,nt,mt,dt,Ct,jt,fe,Gt){if(F===Ti){_===!0&&(zt(i.BLEND),_=!1);return}if(_===!1&&(ct(i.BLEND),_=!0),F!==hh){if(F!==m||Gt!==S){if((p!==li||v!==li)&&(i.blendEquation(i.FUNC_ADD),p=li,v=li),Gt)switch(F){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case As:i.blendFunc(i.ONE,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case As:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,x=null,I=null,A=null,w.set(0,0,0),R=0,m=F,S=Gt}return}mt=mt||Mt,dt=dt||Z,Ct=Ct||nt,(Mt!==p||mt!==v)&&(i.blendEquationSeparate(et[Mt],et[mt]),p=Mt,v=mt),(Z!==M||nt!==x||dt!==I||Ct!==A)&&(i.blendFuncSeparate(pt[Z],pt[nt],pt[dt],pt[Ct]),M=Z,x=nt,I=dt,A=Ct),(jt.equals(w)===!1||fe!==R)&&(i.blendColor(jt.r,jt.g,jt.b,fe),w.copy(jt),R=fe),m=F,S=!1}function Ft(F,Mt){F.side===De?zt(i.CULL_FACE):ct(i.CULL_FACE);let Z=F.side===an;Mt&&(Z=!Z),ot(Z),F.blending===ws&&F.transparent===!1?P(Ti):P(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const nt=F.stencilWrite;a.setTest(nt),nt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Wt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function yt(F){F!==Df?(ct(i.CULL_FACE),F!==C&&(F===Tl?i.cullFace(i.BACK):F===Uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),C=F}function _t(F){F!==U&&(k&&i.lineWidth(F),U=F)}function Wt(F,Mt,Z){F?(ct(i.POLYGON_OFFSET_FILL),(N!==Mt||O!==Z)&&(i.polygonOffset(Mt,Z),N=Mt,O=Z)):zt(i.POLYGON_OFFSET_FILL)}function Rt(F){F?ct(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function T(F){F===void 0&&(F=i.TEXTURE0+V-1),J!==F&&(i.activeTexture(F),J=F)}function b(F,Mt,Z){Z===void 0&&(J===null?Z=i.TEXTURE0+V-1:Z=J);let nt=Q[Z];nt===void 0&&(nt={type:void 0,texture:void 0},Q[Z]=nt),(nt.type!==F||nt.texture!==Mt)&&(J!==Z&&(i.activeTexture(Z),J=Z),i.bindTexture(F,Mt||Et[F]),nt.type=F,nt.texture=Mt)}function H(){const F=Q[J];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Zt(F){It.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),It.copy(F))}function vt(F){$.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),$.copy(F))}function Yt(F,Mt){let Z=l.get(Mt);Z===void 0&&(Z=new WeakMap,l.set(Mt,Z));let nt=Z.get(F);nt===void 0&&(nt=i.getUniformBlockIndex(Mt,F.name),Z.set(F,nt))}function Lt(F,Mt){const nt=l.get(Mt).get(F);c.get(Mt)!==nt&&(i.uniformBlockBinding(Mt,nt,F.__bindingPointIndex),c.set(Mt,nt))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},J=null,Q={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,I=null,A=null,w=new te(0,0,0),R=0,S=!1,y=null,C=null,U=null,N=null,O=null,It.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:zt,bindFramebuffer:qt,drawBuffers:$t,useProgram:re,setBlending:P,setMaterial:Ft,setFlipSided:ot,setCullFace:yt,setLineWidth:_t,setPolygonOffset:Wt,setScissorTest:Rt,activeTexture:T,bindTexture:b,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:st,texImage2D:Pt,texImage3D:Vt,updateUBOMapping:Yt,uniformBlockBinding:Lt,texStorage2D:Xt,texStorage3D:ut,texSubImage2D:tt,texSubImage3D:Nt,compressedTexSubImage2D:xt,compressedTexSubImage3D:Tt,scissor:Zt,viewport:vt,reset:ve}}function bu(i,t,e,n){const s=N_(n);switch(e){case vh:return i*t;case yh:return i*t;case Mh:return i*t*2;case Gc:return i*t/s.components*s.byteLength;case Hc:return i*t/s.components*s.byteLength;case Sh:return i*t*2/s.components*s.byteLength;case Wc:return i*t*2/s.components*s.byteLength;case xh:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case Xc:return i*t*4/s.components*s.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case go:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:case tc:return Math.max(i,16)*Math.max(t,8)/4;case Ka:case Qa:return Math.max(i,8)*Math.max(t,8)/2;case ec:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vo:case vc:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bh:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Mc:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function N_(i){switch(i){case zn:case mh:return{byteLength:1,components:1};case dr:case gh:case Fs:return{byteLength:2,components:1};case kc:case Vc:return{byteLength:2,components:4};case Zi:case zc:case Yn:return{byteLength:4,components:1};case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function F_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return d?new OffscreenCanvas(T,b):mr("canvas")}function _(T,b,H){let j=1;const st=Rt(T);if((st.width>H||st.height>H)&&(j=H/Math.max(st.width,st.height)),j<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){const tt=Math.floor(j*st.width),Nt=Math.floor(j*st.height);h===void 0&&(h=g(tt,Nt));const xt=b?g(tt,Nt):h;return xt.width=tt,xt.height=Nt,xt.getContext("2d").drawImage(T,0,0,tt,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+tt+"x"+Nt+")."),xt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(T,b,H,j,st=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let tt=b;if(b===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),b===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RG8UI),H===i.UNSIGNED_SHORT&&(tt=i.RG16UI),H===i.UNSIGNED_INT&&(tt=i.RG32UI),H===i.BYTE&&(tt=i.RG8I),H===i.SHORT&&(tt=i.RG16I),H===i.INT&&(tt=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),H===i.UNSIGNED_INT&&(tt=i.RGB32UI),H===i.BYTE&&(tt=i.RGB8I),H===i.SHORT&&(tt=i.RGB16I),H===i.INT&&(tt=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),H===i.UNSIGNED_INT&&(tt=i.RGBA32UI),H===i.BYTE&&(tt=i.RGBA8I),H===i.SHORT&&(tt=i.RGBA16I),H===i.INT&&(tt=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),b===i.RGBA){const Nt=st?Io:ge.getTransfer(j);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=Nt===Se?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(T,b){let H;return T?b===null||b===Zi||b===Is?H=i.DEPTH24_STENCIL8:b===Yn?H=i.DEPTH32F_STENCIL8:b===dr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===Is?H=i.DEPTH_COMPONENT24:b===Yn?H=i.DEPTH_COMPONENT32F:b===dr&&(H=i.DEPTH_COMPONENT16),H}function I(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Mn&&T.minFilter!==mn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function A(T){const b=T.target;b.removeEventListener("dispose",A),R(b),b.isVideoTexture&&u.delete(b)}function w(T){const b=T.target;b.removeEventListener("dispose",w),y(b)}function R(T){const b=n.get(T);if(b.__webglInit===void 0)return;const H=T.source,j=f.get(H);if(j){const st=j[b.__cacheKey];st.usedTimes--,st.usedTimes===0&&S(T),Object.keys(j).length===0&&f.delete(H)}n.remove(T)}function S(T){const b=n.get(T);i.deleteTexture(b.__webglTexture);const H=T.source,j=f.get(H);delete j[b.__cacheKey],o.memory.textures--}function y(T){const b=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let st=0;st<b.__webglFramebuffer[j].length;st++)i.deleteFramebuffer(b.__webglFramebuffer[j][st]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=T.textures;for(let j=0,st=H.length;j<st;j++){const tt=n.get(H[j]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(H[j])}n.remove(T)}let C=0;function U(){C=0}function N(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function O(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function V(T,b){const H=n.get(T);if(T.isVideoTexture&&_t(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,T,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function k(T,b){const H=n.get(T);if(T.version>0&&H.__version!==T.version){$(H,T,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function W(T,b){const H=n.get(T);if(T.version>0&&H.__version!==T.version){$(H,T,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function D(T,b){const H=n.get(T);if(T.version>0&&H.__version!==T.version){at(H,T,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const J={[fr]:i.REPEAT,[qi]:i.CLAMP_TO_EDGE,[Ja]:i.MIRRORED_REPEAT},Q={[Mn]:i.NEAREST,[od]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Xo]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},K={[fd]:i.NEVER,[vd]:i.ALWAYS,[dd]:i.LESS,[Th]:i.LEQUAL,[pd]:i.EQUAL,[_d]:i.GEQUAL,[md]:i.GREATER,[gd]:i.NOTEQUAL};function wt(T,b){if(b.type===Yn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===mn||b.magFilter===Xo||b.magFilter===Ur||b.magFilter===Yi||b.minFilter===mn||b.minFilter===Xo||b.minFilter===Ur||b.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,J[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,J[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,J[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Q[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Q[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,K[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mn||b.minFilter!==Ur&&b.minFilter!==Yi||b.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function It(T,b){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",A));const j=b.source;let st=f.get(j);st===void 0&&(st={},f.set(j,st));const tt=O(b);if(tt!==T.__cacheKey){st[tt]===void 0&&(st[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),st[tt].usedTimes++;const Nt=st[T.__cacheKey];Nt!==void 0&&(st[T.__cacheKey].usedTimes--,Nt.usedTimes===0&&S(b)),T.__cacheKey=tt,T.__webglTexture=st[tt].texture}return H}function $(T,b,H){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);const st=It(T,b),tt=b.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+H);const Nt=n.get(tt);if(tt.version!==Nt.__version||st===!0){e.activeTexture(i.TEXTURE0+H);const xt=ge.getPrimaries(ge.workingColorSpace),Tt=b.colorSpace===Ei?null:ge.getPrimaries(b.colorSpace),Xt=b.colorSpace===Ei||xt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ut=_(b.image,!1,s.maxTextureSize);ut=Wt(b,ut);const Pt=r.convert(b.format,b.colorSpace),Vt=r.convert(b.type);let Zt=x(b.internalFormat,Pt,Vt,b.colorSpace,b.isVideoTexture);wt(j,b);let vt;const Yt=b.mipmaps,Lt=b.isVideoTexture!==!0,ve=Nt.__version===void 0||st===!0,F=tt.dataReady,Mt=I(b,ut);if(b.isDepthTexture)Zt=v(b.format===Ls,b.type),ve&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Zt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Zt,ut.width,ut.height,0,Pt,Vt,null));else if(b.isDataTexture)if(Yt.length>0){Lt&&ve&&e.texStorage2D(i.TEXTURE_2D,Mt,Zt,Yt[0].width,Yt[0].height);for(let Z=0,nt=Yt.length;Z<nt;Z++)vt=Yt[Z],Lt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,vt.width,vt.height,Pt,Vt,vt.data):e.texImage2D(i.TEXTURE_2D,Z,Zt,vt.width,vt.height,0,Pt,Vt,vt.data);b.generateMipmaps=!1}else Lt?(ve&&e.texStorage2D(i.TEXTURE_2D,Mt,Zt,ut.width,ut.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,Pt,Vt,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Zt,ut.width,ut.height,0,Pt,Vt,ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Lt&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Zt,Yt[0].width,Yt[0].height,ut.depth);for(let Z=0,nt=Yt.length;Z<nt;Z++)if(vt=Yt[Z],b.format!==Rn)if(Pt!==null)if(Lt){if(F)if(b.layerUpdates.size>0){const mt=bu(vt.width,vt.height,b.format,b.type);for(const dt of b.layerUpdates){const Ct=vt.data.subarray(dt*mt/vt.data.BYTES_PER_ELEMENT,(dt+1)*mt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,dt,vt.width,vt.height,1,Pt,Ct)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,vt.width,vt.height,ut.depth,Pt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Zt,vt.width,vt.height,ut.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,vt.width,vt.height,ut.depth,Pt,Vt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Zt,vt.width,vt.height,ut.depth,0,Pt,Vt,vt.data)}else{Lt&&ve&&e.texStorage2D(i.TEXTURE_2D,Mt,Zt,Yt[0].width,Yt[0].height);for(let Z=0,nt=Yt.length;Z<nt;Z++)vt=Yt[Z],b.format!==Rn?Pt!==null?Lt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,vt.width,vt.height,Pt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Zt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,vt.width,vt.height,Pt,Vt,vt.data):e.texImage2D(i.TEXTURE_2D,Z,Zt,vt.width,vt.height,0,Pt,Vt,vt.data)}else if(b.isDataArrayTexture)if(Lt){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Zt,ut.width,ut.height,ut.depth),F)if(b.layerUpdates.size>0){const Z=bu(ut.width,ut.height,b.format,b.type);for(const nt of b.layerUpdates){const mt=ut.data.subarray(nt*Z/ut.data.BYTES_PER_ELEMENT,(nt+1)*Z/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ut.width,ut.height,1,Pt,Vt,mt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Pt,Vt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,ut.width,ut.height,ut.depth,0,Pt,Vt,ut.data);else if(b.isData3DTexture)Lt?(ve&&e.texStorage3D(i.TEXTURE_3D,Mt,Zt,ut.width,ut.height,ut.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Pt,Vt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,ut.width,ut.height,ut.depth,0,Pt,Vt,ut.data);else if(b.isFramebufferTexture){if(ve)if(Lt)e.texStorage2D(i.TEXTURE_2D,Mt,Zt,ut.width,ut.height);else{let Z=ut.width,nt=ut.height;for(let mt=0;mt<Mt;mt++)e.texImage2D(i.TEXTURE_2D,mt,Zt,Z,nt,0,Pt,Vt,null),Z>>=1,nt>>=1}}else if(Yt.length>0){if(Lt&&ve){const Z=Rt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Zt,Z.width,Z.height)}for(let Z=0,nt=Yt.length;Z<nt;Z++)vt=Yt[Z],Lt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Pt,Vt,vt):e.texImage2D(i.TEXTURE_2D,Z,Zt,Pt,Vt,vt);b.generateMipmaps=!1}else if(Lt){if(ve){const Z=Rt(ut);e.texStorage2D(i.TEXTURE_2D,Mt,Zt,Z.width,Z.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Vt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Zt,Pt,Vt,ut);m(b)&&p(j),Nt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function at(T,b,H){if(b.image.length!==6)return;const j=It(T,b),st=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);const tt=n.get(st);if(st.version!==tt.__version||j===!0){e.activeTexture(i.TEXTURE0+H);const Nt=ge.getPrimaries(ge.workingColorSpace),xt=b.colorSpace===Ei?null:ge.getPrimaries(b.colorSpace),Tt=b.colorSpace===Ei||Nt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Xt=b.isCompressedTexture||b.image[0].isCompressedTexture,ut=b.image[0]&&b.image[0].isDataTexture,Pt=[];for(let nt=0;nt<6;nt++)!Xt&&!ut?Pt[nt]=_(b.image[nt],!0,s.maxCubemapSize):Pt[nt]=ut?b.image[nt].image:b.image[nt],Pt[nt]=Wt(b,Pt[nt]);const Vt=Pt[0],Zt=r.convert(b.format,b.colorSpace),vt=r.convert(b.type),Yt=x(b.internalFormat,Zt,vt,b.colorSpace),Lt=b.isVideoTexture!==!0,ve=tt.__version===void 0||j===!0,F=st.dataReady;let Mt=I(b,Vt);wt(i.TEXTURE_CUBE_MAP,b);let Z;if(Xt){Lt&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Yt,Vt.width,Vt.height);for(let nt=0;nt<6;nt++){Z=Pt[nt].mipmaps;for(let mt=0;mt<Z.length;mt++){const dt=Z[mt];b.format!==Rn?Zt!==null?Lt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt,0,0,dt.width,dt.height,Zt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt,Yt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt,0,0,dt.width,dt.height,Zt,vt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt,Yt,dt.width,dt.height,0,Zt,vt,dt.data)}}}else{if(Z=b.mipmaps,Lt&&ve){Z.length>0&&Mt++;const nt=Rt(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Yt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ut){Lt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Pt[nt].width,Pt[nt].height,Zt,vt,Pt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Yt,Pt[nt].width,Pt[nt].height,0,Zt,vt,Pt[nt].data);for(let mt=0;mt<Z.length;mt++){const Ct=Z[mt].image[nt].image;Lt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt+1,0,0,Ct.width,Ct.height,Zt,vt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt+1,Yt,Ct.width,Ct.height,0,Zt,vt,Ct.data)}}else{Lt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Zt,vt,Pt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Yt,Zt,vt,Pt[nt]);for(let mt=0;mt<Z.length;mt++){const dt=Z[mt];Lt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt+1,0,0,Zt,vt,dt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,mt+1,Yt,Zt,vt,dt.image[nt])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),tt.__version=st.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Et(T,b,H,j,st,tt){const Nt=r.convert(H.format,H.colorSpace),xt=r.convert(H.type),Tt=x(H.internalFormat,Nt,xt,H.colorSpace),Xt=n.get(b),ut=n.get(H);if(ut.__renderTarget=b,!Xt.__hasExternalTextures){const Pt=Math.max(1,b.width>>tt),Vt=Math.max(1,b.height>>tt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,Tt,Pt,Vt,b.depth,0,Nt,xt,null):e.texImage2D(st,tt,Tt,Pt,Vt,0,Nt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),yt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,st,ut.__webglTexture,0,ot(b)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,st,ut.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(T,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){const j=b.depthTexture,st=j&&j.isDepthTexture?j.type:null,tt=v(b.stencilBuffer,st),Nt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=ot(b);yt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,tt,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,tt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,tt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,T)}else{const j=b.textures;for(let st=0;st<j.length;st++){const tt=j[st],Nt=r.convert(tt.format,tt.colorSpace),xt=r.convert(tt.type),Tt=x(tt.internalFormat,Nt,xt,tt.colorSpace),Xt=ot(b);H&&yt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Tt,b.width,b.height):yt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,Tt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const st=j.__webglTexture,tt=ot(b);if(b.depthTexture.format===Es)yt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(b.depthTexture.format===Ls)yt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function qt(T){const b=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const st=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",st)};j.addEventListener("dispose",st),b.__depthDisposeCallback=st}b.__boundDepthTexture=j}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");zt(b.__webglFramebuffer,T)}else if(H){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),ct(b.__webglDepthbuffer[j],T,!1);else{const st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ct(b.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(T,b,H){const j=n.get(T);b!==void 0&&Et(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&qt(T)}function re(T){const b=T.texture,H=n.get(T),j=n.get(b);T.addEventListener("dispose",w);const st=T.textures,tt=T.isWebGLCubeRenderTarget===!0,Nt=st.length>1;if(Nt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,o.memory.textures++),tt){H.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[xt]=[];for(let Tt=0;Tt<b.mipmaps.length;Tt++)H.__webglFramebuffer[xt][Tt]=i.createFramebuffer()}else H.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)H.__webglFramebuffer[xt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let xt=0,Tt=st.length;xt<Tt;xt++){const Xt=n.get(st[xt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&yt(T)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xt=0;xt<st.length;xt++){const Tt=st[xt];H.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[xt]);const Xt=r.convert(Tt.format,Tt.colorSpace),ut=r.convert(Tt.type),Pt=x(Tt.internalFormat,Xt,ut,Tt.colorSpace,T.isXRRenderTarget===!0),Vt=ot(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Pt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,H.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),wt(i.TEXTURE_CUBE_MAP,b);for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)Et(H.__webglFramebuffer[xt][Tt],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Tt);else Et(H.__webglFramebuffer[xt],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let xt=0,Tt=st.length;xt<Tt;xt++){const Xt=st[xt],ut=n.get(Xt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),wt(i.TEXTURE_2D,Xt),Et(H.__webglFramebuffer,T,Xt,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),m(Xt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,j.__webglTexture),wt(xt,b),b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)Et(H.__webglFramebuffer[Tt],T,b,i.COLOR_ATTACHMENT0,xt,Tt);else Et(H.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,xt,0);m(b)&&p(xt),e.unbindTexture()}T.depthBuffer&&qt(T)}function et(T){const b=T.textures;for(let H=0,j=b.length;H<j;H++){const st=b[H];if(m(st)){const tt=M(T),Nt=n.get(st).__webglTexture;e.bindTexture(tt,Nt),p(tt),e.unbindTexture()}}}const pt=[],P=[];function Ft(T){if(T.samples>0){if(yt(T)===!1){const b=T.textures,H=T.width,j=T.height;let st=i.COLOR_BUFFER_BIT;const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(T),xt=b.length>1;if(xt)for(let Tt=0;Tt<b.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Tt]);const Xt=n.get(b[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,st,i.NEAREST),c===!0&&(pt.length=0,P.length=0,pt.push(i.COLOR_ATTACHMENT0+Tt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(pt.push(tt),P.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Tt=0;Tt<b.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Tt]);const Xt=n.get(b[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ot(T){return Math.min(s.maxSamples,T.samples)}function yt(T){const b=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _t(T){const b=o.render.frame;u.get(T)!==b&&(u.set(T,b),T.update())}function Wt(T,b){const H=T.colorSpace,j=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==Os&&H!==Ei&&(ge.getTransfer(H)===Se?(j!==Rn||st!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function Rt(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=D,this.rebindTextures=$t,this.setupRenderTarget=re,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=yt}function O_(i,t){function e(n,s=Ei){let r;const o=ge.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.BYTE;if(n===gh)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===zc)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===Fs)return i.HALF_FLOAT;if(n===vh)return i.ALPHA;if(n===xh)return i.RGB;if(n===Rn)return i.RGBA;if(n===yh)return i.LUMINANCE;if(n===Mh)return i.LUMINANCE_ALPHA;if(n===Es)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===Gc)return i.RED;if(n===Hc)return i.RED_INTEGER;if(n===Sh)return i.RG;if(n===Wc)return i.RG_INTEGER;if(n===Xc)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===_o)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===ja||n===Qa||n===tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ec||n===nc)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ic)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===_c)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===vc||n===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bh||n===yc||n===Mc||n===Sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class B_ extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z_={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
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

}`;class G_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new $e,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:k_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H_ extends Ki{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=new G_,m=e.getContextAttributes();let p=null,M=null;const x=[],v=[],I=new rt;let A=null;const w=new dn;w.viewport=new Ee;const R=new dn;R.viewport=new Ee;const S=[w,R],y=new B_;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=x[$];return at===void 0&&(at=new xa,x[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=x[$];return at===void 0&&(at=new xa,x[$]=at),at.getGripSpace()},this.getHand=function($){let at=x[$];return at===void 0&&(at=new xa,x[$]=at),at.getHandSpace()};function N($){const at=v.indexOf($.inputSource);if(at===-1)return;const Et=x[at];Et!==void 0&&(Et.update($.inputSource,$.frame,l||o),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",V);for(let $=0;$<x.length;$++){const at=v[$];at!==null&&(v[$]=null,x[$].disconnect(at))}C=null,U=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,M=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Kn(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,Et=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?Ls:Es,Et=m.stencil?Is:Zi);const zt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Kn(f.textureWidth,f.textureHeight,{format:Rn,type:zn,depthTexture:new Fh(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V($){for(let at=0;at<$.removed.length;at++){const Et=$.removed[at],ct=v.indexOf(Et);ct>=0&&(v[ct]=null,x[ct].disconnect(Et))}for(let at=0;at<$.added.length;at++){const Et=$.added[at];let ct=v.indexOf(Et);if(ct===-1){for(let qt=0;qt<x.length;qt++)if(qt>=v.length){v.push(Et),ct=qt;break}else if(v[qt]===null){v[qt]=Et,ct=qt;break}if(ct===-1)break}const zt=x[ct];zt&&zt.connect(Et)}}const k=new L,W=new L;function D($,at,Et){k.setFromMatrixPosition(at.matrixWorld),W.setFromMatrixPosition(Et.matrixWorld);const ct=k.distanceTo(W),zt=at.projectionMatrix.elements,qt=Et.projectionMatrix.elements,$t=zt[14]/(zt[10]-1),re=zt[14]/(zt[10]+1),et=(zt[9]+1)/zt[5],pt=(zt[9]-1)/zt[5],P=(zt[8]-1)/zt[0],Ft=(qt[8]+1)/qt[0],ot=$t*P,yt=$t*Ft,_t=ct/(-P+Ft),Wt=_t*-P;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Wt),$.translateZ(_t),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),zt[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Rt=$t+_t,T=re+_t,b=ot-Wt,H=yt+(ct-Wt),j=et*re/T*Rt,st=pt*re/T*Rt;$.projectionMatrix.makePerspective(b,H,j,st,Rt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function J($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let at=$.near,Et=$.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),y.near=R.near=w.near=at,y.far=R.far=w.far=Et,(C!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,U=y.far),w.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,y.layers.mask=w.layers.mask|R.layers.mask;const ct=$.parent,zt=y.cameras;J(y,ct);for(let qt=0;qt<zt.length;qt++)J(zt[qt],ct);zt.length===2?D(y,w,R):y.projectionMatrix.copy(w.projectionMatrix),Q($,y,ct)};function Q($,at,Et){Et===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=pr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let K=null;function wt($,at){if(u=at.getViewerPose(l||o),g=at,u!==null){const Et=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let ct=!1;Et.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let qt=0;qt<Et.length;qt++){const $t=Et[qt];let re=null;if(d!==null)re=d.getViewport($t);else{const pt=h.getViewSubImage(f,$t);re=pt.viewport,qt===0&&(t.setRenderTargetTextures(M,pt.colorTexture,f.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(M))}let et=S[qt];et===void 0&&(et=new dn,et.layers.enable(qt),et.viewport=new Ee,S[qt]=et),et.matrix.fromArray($t.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray($t.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(re.x,re.y,re.width,re.height),qt===0&&(y.matrix.copy(et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(et)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const qt=h.getDepthInformation(Et[0]);qt&&qt.isValid&&qt.texture&&_.init(t,qt,s.renderState)}}for(let Et=0;Et<x.length;Et++){const ct=v[Et],zt=x[Et];ct!==null&&zt!==void 0&&zt.update(ct,at,l||o)}K&&K($,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const It=new Nh;It.setAnimationLoop(wt),this.setAnimationLoop=function($){K=$},this.dispose=function(){}}}const Vi=new jn,W_=new ce;function X_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Lh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,Vi.copy(v),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(W_.makeRotationFromEuler(Vi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function q_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function l(M,x){let v=s[M.id];v===void 0&&(g(M),v=u(M),s[M.id]=v,M.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(M,I);const A=t.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function u(M){const x=h();M.__bindingPointIndex=x;const v=i.createBuffer(),I=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],v=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,w=v.length;A<w;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,y=R.length;S<y;S++){const C=R[S];if(d(C,A,S,I)===!0){const U=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let V=0;V<N.length;V++){const k=N[V],W=_(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,U+O,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,O),O+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,v,I){const A=M.value,w=x+"_"+v;if(I[w]===void 0)return typeof A=="number"||typeof A=="boolean"?I[w]=A:I[w]=A.clone(),!0;{const R=I[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return I[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(M){const x=M.uniforms;let v=0;const I=16;for(let w=0,R=x.length;w<R;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,C=S.length;y<C;y++){const U=S[y],N=Array.isArray(U.value)?U.value:[U.value];for(let O=0,V=N.length;O<V;O++){const k=N[O],W=_(k),D=v%I,J=D%W.boundary,Q=D+J;v+=J,Q!==0&&I-Q<W.storage&&(v+=I-Q),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=W.storage}}}const A=v%I;return A>0&&(v+=I-A),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Y_{constructor(t={}){const{canvas:e=Nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=Ai,this.toneMappingExposure=1;const v=this;let I=!1,A=0,w=0,R=null,S=-1,y=null;const C=new Ee,U=new Ee;let N=null;const O=new te(0);let V=0,k=e.width,W=e.height,D=1,J=null,Q=null;const K=new Ee(0,0,k,W),wt=new Ee(0,0,k,W);let It=!1;const $=new Kc;let at=!1,Et=!1;const ct=new ce,zt=new ce,qt=new L,$t=new Ee,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function pt(){return R===null?D:1}let P=n;function Ft(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bc}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),P===null){const B="webgl2";if(P=Ft(B,E),P===null)throw Ft(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ot,yt,_t,Wt,Rt,T,b,H,j,st,tt,Nt,xt,Tt,Xt,ut,Pt,Vt,Zt,vt,Yt,Lt,ve,F;function Mt(){ot=new jm(P),ot.init(),Lt=new O_(P,ot),yt=new qm(P,ot,t,Lt),_t=new U_(P,ot),yt.reverseDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),Wt=new eg(P),Rt=new x_,T=new F_(P,ot,_t,Rt,yt,Lt,Wt),b=new $m(v),H=new Km(v),j=new cp(P),ve=new Wm(P,j),st=new Qm(P,j,Wt,ve),tt=new ig(P,st,j,Wt),Zt=new ng(P,yt,T),ut=new Ym(Rt),Nt=new v_(v,b,H,ot,yt,ve,ut),xt=new X_(v,Rt),Tt=new M_,Xt=new A_(ot),Vt=new Hm(v,b,H,_t,tt,d,c),Pt=new L_(v,tt,yt),F=new q_(P,Wt,yt,_t),vt=new Xm(P,ot,Wt),Yt=new tg(P,ot,Wt),Wt.programs=Nt.programs,v.capabilities=yt,v.extensions=ot,v.properties=Rt,v.renderLists=Tt,v.shadowMap=Pt,v.state=_t,v.info=Wt}Mt();const Z=new H_(v,P);this.xr=Z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=ot.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ot.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(k,W,!1))},this.getSize=function(E){return E.set(k,W)},this.setSize=function(E,B,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,W=B,e.width=Math.floor(E*D),e.height=Math.floor(B*D),X===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(k*D,W*D).floor()},this.setDrawingBufferSize=function(E,B,X){k=E,W=B,D=X,e.width=Math.floor(E*X),e.height=Math.floor(B*X),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,B,X,Y){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,B,X,Y),_t.viewport(C.copy(K).multiplyScalar(D).round())},this.getScissor=function(E){return E.copy(wt)},this.setScissor=function(E,B,X,Y){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,B,X,Y),_t.scissor(U.copy(wt).multiplyScalar(D).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(E){_t.setScissorTest(It=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(E=!0,B=!0,X=!0){let Y=0;if(E){let z=!1;if(R!==null){const gt=R.texture.format;z=gt===Xc||gt===Wc||gt===Hc}if(z){const gt=R.texture.type,At=gt===zn||gt===Zi||gt===dr||gt===Is||gt===kc||gt===Vc,Ot=Vt.getClearColor(),Dt=Vt.getClearAlpha(),Jt=Ot.r,Qt=Ot.g,Bt=Ot.b;At?(g[0]=Jt,g[1]=Qt,g[2]=Bt,g[3]=Dt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Jt,_[1]=Qt,_[2]=Bt,_[3]=Dt,P.clearBufferiv(P.COLOR,0,_))}else Y|=P.COLOR_BUFFER_BIT}B&&(Y|=P.DEPTH_BUFFER_BIT),X&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Tt.dispose(),Xt.dispose(),Rt.dispose(),b.dispose(),H.dispose(),tt.dispose(),ve.dispose(),F.dispose(),Nt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Xs),Z.removeEventListener("sessionend",di),ln.stop()};function nt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=Wt.autoReset,B=Pt.enabled,X=Pt.autoUpdate,Y=Pt.needsUpdate,z=Pt.type;Mt(),Wt.autoReset=E,Pt.enabled=B,Pt.autoUpdate=X,Pt.needsUpdate=Y,Pt.type=z}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ct(E){const B=E.target;B.removeEventListener("dispose",Ct),jt(B)}function jt(E){fe(E),Rt.remove(E)}function fe(E){const B=Rt.get(E).programs;B!==void 0&&(B.forEach(function(X){Nt.releaseProgram(X)}),E.isShaderMaterial&&Nt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,X,Y,z,gt){B===null&&(B=re);const At=z.isMesh&&z.matrixWorld.determinant()<0,Ot=Ar(E,B,X,Y,z);_t.setMaterial(Y,At);let Dt=X.index,Jt=1;if(Y.wireframe===!0){if(Dt=st.getWireframeAttribute(X),Dt===void 0)return;Jt=2}const Qt=X.drawRange,Bt=X.attributes.position;let ne=Qt.start*Jt,Me=(Qt.start+Qt.count)*Jt;gt!==null&&(ne=Math.max(ne,gt.start*Jt),Me=Math.min(Me,(gt.start+gt.count)*Jt)),Dt!==null?(ne=Math.max(ne,0),Me=Math.min(Me,Dt.count)):Bt!=null&&(ne=Math.max(ne,0),Me=Math.min(Me,Bt.count));const be=Me-ne;if(be<0||be===1/0)return;ve.setup(z,Y,Ot,X,Dt);let He,de=vt;if(Dt!==null&&(He=j.get(Dt),de=Yt,de.setIndex(He)),z.isMesh)Y.wireframe===!0?(_t.setLineWidth(Y.wireframeLinewidth*pt()),de.setMode(P.LINES)):de.setMode(P.TRIANGLES);else if(z.isLine){let kt=Y.linewidth;kt===void 0&&(kt=1),_t.setLineWidth(kt*pt()),z.isLineSegments?de.setMode(P.LINES):z.isLineLoop?de.setMode(P.LINE_LOOP):de.setMode(P.LINE_STRIP)}else z.isPoints?de.setMode(P.POINTS):z.isSprite&&de.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)de.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))de.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const kt=z._multiDrawStarts,Je=z._multiDrawCounts,pe=z._multiDrawCount,qe=Dt?j.get(Dt).bytesPerElement:1,pi=Rt.get(Y).currentProgram.getUniforms();for(let Te=0;Te<pe;Te++)pi.setValue(P,"_gl_DrawID",Te),de.render(kt[Te]/qe,Je[Te])}else if(z.isInstancedMesh)de.renderInstances(ne,be,z.count);else if(X.isInstancedBufferGeometry){const kt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Je=Math.min(X.instanceCount,kt);de.renderInstances(ne,be,Je)}else de.render(ne,be)};function Gt(E,B,X){E.transparent===!0&&E.side===De&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,Ui(E,B,X),E.side=fi,E.needsUpdate=!0,Ui(E,B,X),E.side=De):Ui(E,B,X)}this.compile=function(E,B,X=null){X===null&&(X=E),p=Xt.get(X),p.init(B),x.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==X&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Y=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const gt=z.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){const Ot=gt[At];Gt(Ot,X,z),Y.add(Ot)}else Gt(gt,X,z),Y.add(gt)}),x.pop(),p=null,Y},this.compileAsync=function(E,B,X=null){const Y=this.compile(E,B,X);return new Promise(z=>{function gt(){if(Y.forEach(function(At){Rt.get(At).currentProgram.isReady()&&Y.delete(At)}),Y.size===0){z(E);return}setTimeout(gt,10)}ot.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let cn=null;function wn(E){cn&&cn(E)}function Xs(){ln.stop()}function di(){ln.start()}const ln=new Nh;ln.setAnimationLoop(wn),typeof self!="undefined"&&ln.setContext(self),this.setAnimationLoop=function(E){cn=E,Z.setAnimationLoop(E),E===null?ln.stop():ln.start()},Z.addEventListener("sessionstart",Xs),Z.addEventListener("sessionend",di),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,R),p=Xt.get(E,x.length),p.init(B),x.push(p),zt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(zt),Et=this.localClippingEnabled,at=ut.init(this.clippingPlanes,Et),m=Tt.get(E,M.length),m.init(),M.push(m),Z.enabled===!0&&Z.isPresenting===!0){const gt=v.xr.getDepthSensingMesh();gt!==null&&Qi(gt,B,-1/0,v.sortObjects)}Qi(E,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(J,Q),et=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,et&&Vt.addToRenderList(m,E),this.info.render.frame++,at===!0&&ut.beginShadows();const X=p.state.shadowsArray;Pt.render(X,E,B),at===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const gt=B.cameras;if(z.length>0)for(let At=0,Ot=gt.length;At<Ot;At++){const Dt=gt[At];Tr(Y,z,E,Dt)}et&&Vt.render(E);for(let At=0,Ot=gt.length;At<Ot;At++){const Dt=gt[At];Vn(m,E,Dt,Dt.viewport)}}else z.length>0&&Tr(Y,z,E,B),et&&Vt.render(E),Vn(m,E,B);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,B),ve.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],at===!0&&ut.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Qi(E,B,X,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){Y&&$t.setFromMatrixPosition(E.matrixWorld).applyMatrix4(zt);const At=tt.update(E),Ot=E.material;Ot.visible&&m.push(E,At,Ot,X,$t.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const At=tt.update(E),Ot=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$t.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),$t.copy(At.boundingSphere.center)),$t.applyMatrix4(E.matrixWorld).applyMatrix4(zt)),Array.isArray(Ot)){const Dt=At.groups;for(let Jt=0,Qt=Dt.length;Jt<Qt;Jt++){const Bt=Dt[Jt],ne=Ot[Bt.materialIndex];ne&&ne.visible&&m.push(E,At,ne,X,$t.z,Bt)}}else Ot.visible&&m.push(E,At,Ot,X,$t.z,null)}}const gt=E.children;for(let At=0,Ot=gt.length;At<Ot;At++)Qi(gt[At],B,X,Y)}function Vn(E,B,X,Y){const z=E.opaque,gt=E.transmissive,At=E.transparent;p.setupLightsView(X),at===!0&&ut.setGlobalState(v.clippingPlanes,X),Y&&_t.viewport(C.copy(Y)),z.length>0&&Di(z,B,X),gt.length>0&&Di(gt,B,X),At.length>0&&Di(At,B,X),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Tr(E,B,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Kn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Fs:zn,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const gt=p.state.transmissionRenderTarget[Y.id],At=Y.viewport||C;gt.setSize(At.z,At.w);const Ot=v.getRenderTarget();v.setRenderTarget(gt),v.getClearColor(O),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),et&&Vt.render(X);const Dt=v.toneMapping;v.toneMapping=Ai;const Jt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),at===!0&&ut.setGlobalState(v.clippingPlanes,Y),Di(E,X,Y),T.updateMultisampleRenderTarget(gt),T.updateRenderTargetMipmap(gt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Bt=0,ne=B.length;Bt<ne;Bt++){const Me=B[Bt],be=Me.object,He=Me.geometry,de=Me.material,kt=Me.group;if(de.side===De&&be.layers.test(Y.layers)){const Je=de.side;de.side=an,de.needsUpdate=!0,qs(be,X,Y,He,de,kt),de.side=Je,de.needsUpdate=!0,Qt=!0}}Qt===!0&&(T.updateMultisampleRenderTarget(gt),T.updateRenderTargetMipmap(gt))}v.setRenderTarget(Ot),v.setClearColor(O,V),Jt!==void 0&&(Y.viewport=Jt),v.toneMapping=Dt}function Di(E,B,X){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,gt=E.length;z<gt;z++){const At=E[z],Ot=At.object,Dt=At.geometry,Jt=Y===null?At.material:Y,Qt=At.group;Ot.layers.test(X.layers)&&qs(Ot,B,X,Dt,Jt,Qt)}}function qs(E,B,X,Y,z,gt){E.onBeforeRender(v,B,X,Y,z,gt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(v,B,X,Y,E,gt),z.transparent===!0&&z.side===De&&z.forceSinglePass===!1?(z.side=an,z.needsUpdate=!0,v.renderBufferDirect(X,B,Y,z,E,gt),z.side=fi,z.needsUpdate=!0,v.renderBufferDirect(X,B,Y,z,E,gt),z.side=De):v.renderBufferDirect(X,B,Y,z,E,gt),E.onAfterRender(v,B,X,Y,z,gt)}function Ui(E,B,X){B.isScene!==!0&&(B=re);const Y=Rt.get(E),z=p.state.lights,gt=p.state.shadowsArray,At=z.state.version,Ot=Nt.getParameters(E,z.state,gt,B,X),Dt=Nt.getProgramCacheKey(Ot);let Jt=Y.programs;Y.environment=E.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(E.isMeshStandardMaterial?H:b).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Jt===void 0&&(E.addEventListener("dispose",Ct),Jt=new Map,Y.programs=Jt);let Qt=Jt.get(Dt);if(Qt!==void 0){if(Y.currentProgram===Qt&&Y.lightsStateVersion===At)return Ni(E,Ot),Qt}else Ot.uniforms=Nt.getUniforms(E),E.onBeforeCompile(Ot,v),Qt=Nt.acquireProgram(Ot,Dt),Jt.set(Dt,Qt),Y.uniforms=Ot.uniforms;const Bt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=ut.uniform),Ni(E,Ot),Y.needsLights=Cr(E),Y.lightsStateVersion=At,Y.needsLights&&(Bt.ambientLightColor.value=z.state.ambient,Bt.lightProbe.value=z.state.probe,Bt.directionalLights.value=z.state.directional,Bt.directionalLightShadows.value=z.state.directionalShadow,Bt.spotLights.value=z.state.spot,Bt.spotLightShadows.value=z.state.spotShadow,Bt.rectAreaLights.value=z.state.rectArea,Bt.ltc_1.value=z.state.rectAreaLTC1,Bt.ltc_2.value=z.state.rectAreaLTC2,Bt.pointLights.value=z.state.point,Bt.pointLightShadows.value=z.state.pointShadow,Bt.hemisphereLights.value=z.state.hemi,Bt.directionalShadowMap.value=z.state.directionalShadowMap,Bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Bt.spotShadowMap.value=z.state.spotShadowMap,Bt.spotLightMatrix.value=z.state.spotLightMatrix,Bt.spotLightMap.value=z.state.spotLightMap,Bt.pointShadowMap.value=z.state.pointShadowMap,Bt.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Qt,Y.uniformsList=null,Qt}function Gn(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=xo.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Ni(E,B){const X=Rt.get(E);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Ar(E,B,X,Y,z){B.isScene!==!0&&(B=re),T.resetTextureUnits();const gt=B.fog,At=Y.isMeshStandardMaterial?B.environment:null,Ot=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Os,Dt=(Y.isMeshStandardMaterial?H:b).get(Y.envMap||At),Jt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Bt=!!X.morphAttributes.position,ne=!!X.morphAttributes.normal,Me=!!X.morphAttributes.color;let be=Ai;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(be=v.toneMapping);const He=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=He!==void 0?He.length:0,kt=Rt.get(Y),Je=p.state.lights;if(at===!0&&(Et===!0||E!==y)){const un=E===y&&Y.id===S;ut.setState(Y,E,un)}let pe=!1;Y.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Je.state.version||kt.outputColorSpace!==Ot||z.isBatchedMesh&&kt.batching===!1||!z.isBatchedMesh&&kt.batching===!0||z.isBatchedMesh&&kt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&kt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&kt.instancing===!1||!z.isInstancedMesh&&kt.instancing===!0||z.isSkinnedMesh&&kt.skinning===!1||!z.isSkinnedMesh&&kt.skinning===!0||z.isInstancedMesh&&kt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&kt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&kt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&kt.instancingMorph===!1&&z.morphTexture!==null||kt.envMap!==Dt||Y.fog===!0&&kt.fog!==gt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ut.numPlanes||kt.numIntersection!==ut.numIntersection)||kt.vertexAlphas!==Jt||kt.vertexTangents!==Qt||kt.morphTargets!==Bt||kt.morphNormals!==ne||kt.morphColors!==Me||kt.toneMapping!==be||kt.morphTargetsCount!==de)&&(pe=!0):(pe=!0,kt.__version=Y.version);let qe=kt.currentProgram;pe===!0&&(qe=Ui(Y,B,z));let pi=!1,Te=!1,mi=!1;const _e=qe.getUniforms(),Ye=kt.uniforms;if(_t.useProgram(qe.program)&&(pi=!0,Te=!0,mi=!0),Y.id!==S&&(S=Y.id,Te=!0),pi||y!==E){_t.buffers.depth.getReversed()?(ct.copy(E.projectionMatrix),Od(ct),Bd(ct),_e.setValue(P,"projectionMatrix",ct)):_e.setValue(P,"projectionMatrix",E.projectionMatrix),_e.setValue(P,"viewMatrix",E.matrixWorldInverse);const Hn=_e.map.cameraPosition;Hn!==void 0&&Hn.setValue(P,qt.setFromMatrixPosition(E.matrixWorld)),yt.logarithmicDepthBuffer&&_e.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&_e.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Te=!0,mi=!0)}if(z.isSkinnedMesh){_e.setOptional(P,z,"bindMatrix"),_e.setOptional(P,z,"bindMatrixInverse");const un=z.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),_e.setValue(P,"boneTexture",un.boneTexture,T))}z.isBatchedMesh&&(_e.setOptional(P,z,"batchingTexture"),_e.setValue(P,"batchingTexture",z._matricesTexture,T),_e.setOptional(P,z,"batchingIdTexture"),_e.setValue(P,"batchingIdTexture",z._indirectTexture,T),_e.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&_e.setValue(P,"batchingColorTexture",z._colorsTexture,T));const En=X.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Zt.update(z,X,qe),(Te||kt.receiveShadow!==z.receiveShadow)&&(kt.receiveShadow=z.receiveShadow,_e.setValue(P,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ye.envMap.value=Dt,Ye.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Ye.envMapIntensity.value=B.environmentIntensity),Te&&(_e.setValue(P,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&Rr(Ye,mi),gt&&Y.fog===!0&&xt.refreshFogUniforms(Ye,gt),xt.refreshMaterialUniforms(Ye,Y,D,W,p.state.transmissionRenderTarget[E.id]),xo.upload(P,Gn(kt),Ye,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(xo.upload(P,Gn(kt),Ye,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&_e.setValue(P,"center",z.center),_e.setValue(P,"modelViewMatrix",z.modelViewMatrix),_e.setValue(P,"normalMatrix",z.normalMatrix),_e.setValue(P,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const un=Y.uniformsGroups;for(let Hn=0,In=un.length;Hn<In;Hn++){const ts=un[Hn];F.update(ts,qe),F.bind(ts,qe)}}return qe}function Rr(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Cr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,B,X){Rt.get(E.texture).__webglTexture=B,Rt.get(E.depthTexture).__webglTexture=X;const Y=Rt.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const X=Rt.get(E);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,X=0){R=E,A=B,w=X;let Y=!0,z=null,gt=!1,At=!1;if(E){const Dt=Rt.get(E);if(Dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(P.FRAMEBUFFER,null),Y=!1;else if(Dt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Dt.__hasExternalTextures)T.rebindTextures(E,Rt.get(E.texture).__webglTexture,Rt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Bt=E.depthTexture;if(Dt.__boundDepthTexture!==Bt){if(Bt!==null&&Rt.has(Bt)&&(E.width!==Bt.image.width||E.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Jt=E.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(At=!0);const Qt=Rt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Qt[B])?z=Qt[B][X]:z=Qt[B],gt=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?z=Rt.get(E).__webglMultisampledFramebuffer:Array.isArray(Qt)?z=Qt[X]:z=Qt,C.copy(E.viewport),U.copy(E.scissor),N=E.scissorTest}else C.copy(K).multiplyScalar(D).floor(),U.copy(wt).multiplyScalar(D).floor(),N=It;if(_t.bindFramebuffer(P.FRAMEBUFFER,z)&&Y&&_t.drawBuffers(E,z),_t.viewport(C),_t.scissor(U),_t.setScissorTest(N),gt){const Dt=Rt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,Dt.__webglTexture,X)}else if(At){const Dt=Rt.get(E.texture),Jt=B||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,X||0,Jt)}S=-1},this.readRenderTargetPixels=function(E,B,X,Y,z,gt,At){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Ot=Ot[At]),Ot){_t.bindFramebuffer(P.FRAMEBUFFER,Ot);try{const Dt=E.texture,Jt=Dt.format,Qt=Dt.type;if(!yt.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&X>=0&&X<=E.height-z&&P.readPixels(B,X,Y,z,Lt.convert(Jt),Lt.convert(Qt),gt)}finally{const Dt=R!==null?Rt.get(R).__webglFramebuffer:null;_t.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,B,X,Y,z,gt,At){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Ot=Ot[At]),Ot){const Dt=E.texture,Jt=Dt.format,Qt=Dt.type;if(!yt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-Y&&X>=0&&X<=E.height-z){_t.bindFramebuffer(P.FRAMEBUFFER,Ot);const Bt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Bt),P.bufferData(P.PIXEL_PACK_BUFFER,gt.byteLength,P.STREAM_READ),P.readPixels(B,X,Y,z,Lt.convert(Jt),Lt.convert(Qt),0);const ne=R!==null?Rt.get(R).__webglFramebuffer:null;_t.bindFramebuffer(P.FRAMEBUFFER,ne);const Me=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Fd(P,Me,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Bt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,gt),P.deleteBuffer(Bt),P.deleteSync(Me),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,X=0){E.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-X),z=Math.floor(E.image.width*Y),gt=Math.floor(E.image.height*Y),At=B!==null?B.x:0,Ot=B!==null?B.y:0;T.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,At,Ot,z,gt),_t.unbindTexture()},this.copyTextureToTexture=function(E,B,X=null,Y=null,z=0){E.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],B=arguments[2],z=arguments[3]||0,X=null);let gt,At,Ot,Dt,Jt,Qt,Bt,ne,Me;const be=E.isCompressedTexture?E.mipmaps[z]:E.image;X!==null?(gt=X.max.x-X.min.x,At=X.max.y-X.min.y,Ot=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,Jt=X.min.y,Qt=X.isBox3?X.min.z:0):(gt=be.width,At=be.height,Ot=be.depth||1,Dt=0,Jt=0,Qt=0),Y!==null?(Bt=Y.x,ne=Y.y,Me=Y.z):(Bt=0,ne=0,Me=0);const He=Lt.convert(B.format),de=Lt.convert(B.type);let kt;B.isData3DTexture?(T.setTexture3D(B,0),kt=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(T.setTexture2DArray(B,0),kt=P.TEXTURE_2D_ARRAY):(T.setTexture2D(B,0),kt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const Je=P.getParameter(P.UNPACK_ROW_LENGTH),pe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qe=P.getParameter(P.UNPACK_SKIP_PIXELS),pi=P.getParameter(P.UNPACK_SKIP_ROWS),Te=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,be.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,be.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Qt);const mi=E.isDataArrayTexture||E.isData3DTexture,_e=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Ye=Rt.get(E),En=Rt.get(B),un=Rt.get(Ye.__renderTarget),Hn=Rt.get(En.__renderTarget);_t.bindFramebuffer(P.READ_FRAMEBUFFER,un.__webglFramebuffer),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let In=0;In<Ot;In++)mi&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.get(E).__webglTexture,z,Qt+In),E.isDepthTexture?(_e&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.get(B).__webglTexture,z,Me+In),P.blitFramebuffer(Dt,Jt,gt,At,Bt,ne,gt,At,P.DEPTH_BUFFER_BIT,P.NEAREST)):_e?P.copyTexSubImage3D(kt,z,Bt,ne,Me+In,Dt,Jt,gt,At):P.copyTexSubImage2D(kt,z,Bt,ne,Me+In,Dt,Jt,gt,At);_t.bindFramebuffer(P.READ_FRAMEBUFFER,null),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else _e?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(kt,z,Bt,ne,Me,gt,At,Ot,He,de,be.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(kt,z,Bt,ne,Me,gt,At,Ot,He,be.data):P.texSubImage3D(kt,z,Bt,ne,Me,gt,At,Ot,He,de,be):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,z,Bt,ne,gt,At,He,de,be.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,z,Bt,ne,be.width,be.height,He,be.data):P.texSubImage2D(P.TEXTURE_2D,z,Bt,ne,gt,At,He,de,be);P.pixelStorei(P.UNPACK_ROW_LENGTH,Je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qe),P.pixelStorei(P.UNPACK_SKIP_ROWS,pi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te),z===0&&B.generateMipmaps&&P.generateMipmap(kt),_t.unbindTexture()},this.copyTextureToTexture3D=function(E,B,X=null,Y=null,z=0){return E.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],B=arguments[3],z=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,X,Y,z)},this.initRenderTarget=function(E){Rt.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),_t.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,_t.reset(),ve.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}class wo extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wc,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new L;class Eo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Eo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tc extends Ii{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ms;const Qs=new L,gs=new L,_s=new L,vs=new rt,tr=new rt,Vh=new ce,eo=new L,er=new L,no=new L,wu=new rt,ya=new rt,Eu=new rt;class Tu extends Ne{constructor(t=new Tc){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $_(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new Eo(n,3,0,!1)),ms.setAttribute("uv",new Eo(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),Vh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-_s.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;io(eo.set(-.5,-.5,0),_s,o,gs,s,r),io(er.set(.5,-.5,0),_s,o,gs,s,r),io(no.set(.5,.5,0),_s,o,gs,s,r),wu.set(0,0),ya.set(1,0),Eu.set(1,1);let a=t.ray.intersectTriangle(eo,er,no,!1,Qs);if(a===null&&(io(er.set(-.5,.5,0),_s,o,gs,s,r),ya.set(0,1),a=t.ray.intersectTriangle(eo,no,er,!1,Qs),a===null))return;const c=t.ray.origin.distanceTo(Qs);c<t.near||c>t.far||e.push({distance:c,point:Qs.clone(),uv:An.getInterpolation(Qs,eo,er,no,wu,ya,Eu,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function io(i,t,e,n,s,r){vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*vs.x-s*vs.y,tr.y=s*vs.x+r*vs.y):tr.copy(vs),i.copy(t),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(Vh)}const Au=new L,Ru=new Ee,Cu=new Ee,Z_=new L,Pu=new ce,so=new L,Ma=new zs,Iu=new ce,Sa=new Lo;class Lu extends ft{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cl,this.bindMatrix=new ce,this.bindMatrixInverse=new ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bs),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,so),this.boundingBox.expandByPoint(so)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,so),this.boundingSphere.expandByPoint(so)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(s),t.ray.intersectsSphere(Ma)!==!1&&(Iu.copy(s).invert(),Sa.copy(t.ray).applyMatrix4(Iu),!(this.boundingBox!==null&&Sa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Sa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ee,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Ru.fromBufferAttribute(s.attributes.skinIndex,t),Cu.fromBufferAttribute(s.attributes.skinWeight,t),Au.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Cu.getComponent(r);if(o!==0){const a=Ru.getComponent(r);Pu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Z_.copy(Au).applyMatrix4(Pu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Gh extends Ne{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hh extends $e{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Mn,u=Mn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Du=new ce,J_=new ce;class Qc{constructor(t=[],e=[]){this.uuid=Cn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ce)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ce;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:J_;Du.multiplyMatrices(a,e[r]),Du.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Qc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Hh(e,t,t,Rn,Yn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Gh),this.bones.push(o),this.boneInverses.push(new ce().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Wh extends Ii{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Uu=new ce,Ac=new Lo,ro=new zs,oo=new L;class K_ extends Ne{constructor(t=new Fe,e=new Wh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,t.ray.intersectsSphere(ro)===!1)return;Uu.copy(s).invert(),Ac.copy(t.ray).applyMatrix4(Uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);oo.fromBufferAttribute(h,m),Nu(oo,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)oo.fromBufferAttribute(h,g),Nu(oo,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nu(i,t,e,n,s,r,o){const a=Ac.distanceSqToPoint(i);if(a<e){const c=new L;Ac.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Jn extends $e{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new rt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],o=[],a=new L,c=new ce;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Xe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tl extends ti{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class j_ extends tl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function el(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ao=new L,ba=new el,wa=new el,Ea=new el;class Q_ extends ti{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ao.subVectors(s[0],s[1]).add(s[0]),l=ao);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ao),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ba.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),wa.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),Ea.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),wa.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ea.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(ba.calc(c),wa.calc(c),Ea.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function tv(i,t){const e=1-i;return e*e*t}function ev(i,t){return 2*(1-i)*i*t}function nv(i,t){return i*i*t}function ur(i,t,e,n){return tv(i,t)+ev(i,e)+nv(i,n)}function iv(i,t){const e=1-i;return e*e*e*t}function sv(i,t){const e=1-i;return 3*e*e*i*t}function rv(i,t){return 3*(1-i)*i*i*t}function ov(i,t){return i*i*i*t}function hr(i,t,e,n,s){return iv(i,t)+sv(i,e)+rv(i,n)+ov(i,s)}class Xh extends ti{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,s.x,r.x,o.x,a.x),hr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class av extends ti{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,s.x,r.x,o.x,a.x),hr(t,s.y,r.y,o.y,a.y),hr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qh extends ti{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cv extends ti{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends ti{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ur(t,s.x,r.x,o.x),ur(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lv extends ti{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ur(t,s.x,r.x,o.x),ur(t,s.y,r.y,o.y),ur(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nl extends ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Fu(a,c.x,l.x,u.x,h.x),Fu(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var Rc=Object.freeze({__proto__:null,ArcCurve:j_,CatmullRomCurve3:Q_,CubicBezierCurve:Xh,CubicBezierCurve3:av,EllipseCurve:tl,LineCurve:qh,LineCurve3:cv,QuadraticBezierCurve:Yh,QuadraticBezierCurve3:lv,SplineCurve:nl});class uv extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Rc[s.type]().fromJSON(s))}return this}}class Cc extends uv{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qh(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Yh(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Xh(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new nl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new tl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Li extends Fe{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Xe(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new L,f=new rt,d=new L,g=new L,_=new L;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let M=0;M<=e;M++){const x=n+M*u*s,v=Math.sin(x),I=Math.cos(x);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*v,h.y=t[A].y,h.z=t[A].x*I,o.push(h.x,h.y,h.z),f.x=M/e,f.y=A/(t.length-1),a.push(f.x,f.y);const w=c[3*A+0]*v,R=c[3*A+1],S=c[3*A+0]*I;l.push(w,R,S)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const v=x+M*t.length,I=v,A=v+t.length,w=v+t.length+1,R=v+1;r.push(I,A,R),r.push(w,R,A)}this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("uv",new he(a,2)),this.setAttribute("normal",new he(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.points,t.segments,t.phiStart,t.phiLength)}}class Us extends Li{constructor(t=1,e=1,n=4,s=8){const r=new Cc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Us(t.radius,t.length,t.capSegments,t.radialSegments)}}class kn extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new L,u=new rt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ie extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(d,2));function M(){const v=new L,I=new L;let A=0;const w=(e-t)/n;for(let R=0;R<=r;R++){const S=[],y=R/r,C=y*(e-t)+t;for(let U=0;U<=s;U++){const N=U/s,O=N*c+a,V=Math.sin(O),k=Math.cos(O);I.x=C*V,I.y=-y*n+m,I.z=C*k,h.push(I.x,I.y,I.z),v.set(V,w,k).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-y),S.push(g++)}_.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const y=_[S][R],C=_[S+1][R],U=_[S+1][R+1],N=_[S][R+1];(t>0||S!==0)&&(u.push(y,C,N),A+=3),(e>0||S!==r-1)&&(u.push(C,U,N),A+=3)}l.addGroup(p,A,0),p+=A}function x(v){const I=g,A=new rt,w=new L;let R=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const C=g;for(let U=0;U<=s;U++){const O=U/s*c+a,V=Math.cos(O),k=Math.sin(O);w.x=S*k,w.y=m*y,w.z=S*V,h.push(w.x,w.y,w.z),f.push(0,y,0),A.x=V*.5+.5,A.y=k*.5*y+.5,d.push(A.x,A.y),g++}for(let U=0;U<s;U++){const N=I+U,O=C+U;v===!0?u.push(O,O+1,N):u.push(O+1,O,N),R+=3}l.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vs extends Ie{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Vs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class il extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new L,v=new L,I=new L;for(let A=0;A<e.length;A+=3)d(e[A+0],x),d(e[A+1],v),d(e[A+2],I),c(x,v,I,M)}function c(M,x,v,I){const A=I+1,w=[];for(let R=0;R<=A;R++){w[R]=[];const S=M.clone().lerp(v,R/A),y=x.clone().lerp(v,R/A),C=A-R;for(let U=0;U<=C;U++)U===0&&R===A?w[R][U]=S:w[R][U]=S.clone().lerp(y,U/C)}for(let R=0;R<A;R++)for(let S=0;S<2*(A-R)-1;S++){const y=Math.floor(S/2);S%2===0?(f(w[R][y+1]),f(w[R+1][y]),f(w[R][y])):(f(w[R][y+1]),f(w[R+1][y+1]),f(w[R+1][y]))}}function l(M){const x=new L;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){const M=new L;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const v=m(M)/2/Math.PI+.5,I=p(M)/Math.PI+.5;o.push(v,1-I)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const x=o[M+0],v=o[M+2],I=o[M+4],A=Math.max(x,v,I),w=Math.min(x,v,I);A>.9&&w<.1&&(x<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const M=new L,x=new L,v=new L,I=new L,A=new rt,w=new rt,R=new rt;for(let S=0,y=0;S<r.length;S+=9,y+=6){M.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),A.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),I.copy(M).add(x).add(v).divideScalar(3);const C=m(I);_(A,y+0,M,C),_(w,y+2,x,C),_(R,y+4,v,C)}}function _(M,x,v,I){I<0&&M.x===1&&(o[x]=M.x-1),v.x===0&&v.z===0&&(o[x]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.vertices,t.indices,t.radius,t.details)}}class Ns extends Cc{constructor(t){super(t),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Cc().fromJSON(s))}return this}}const hv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=$h(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=gv(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return gr(r,o,e,a,c,d,0),o}};function $h(i,t,e,n,s){let r,o;if(s===Av(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ou(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ou(r,i[r],i[r+1],o);return o&&No(o,o.next)&&(vr(o),o=o.next),o}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(No(e,e.next)||Le(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Mv(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?dv(i,n,s,r):fv(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),vr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=pv(Ji(i),t,e),gr(i,t,e,n,s,r,2)):o===2&&mv(i,t,e,n,s,r):gr(Ji(i),t,e,n,s,r,1);break}}}function fv(i){const t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&bs(s,a,r,c,o,l,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dv(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Le(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=Pc(d,g,t,e,n),M=Pc(_,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&bs(a,u,c,h,l,f,x.x,x.y)&&Le(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&bs(a,u,c,h,l,f,v.x,v.y)&&Le(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&bs(a,u,c,h,l,f,x.x,x.y)&&Le(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&bs(a,u,c,h,l,f,v.x,v.y)&&Le(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function pv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!No(s,r)&&Zh(s,n,n.next,r)&&_r(s,r)&&_r(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vr(n),vr(n.next),n=i=r),n=n.next}while(n!==i);return Ji(n)}function mv(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wv(o,a)){let c=Jh(o,a);o=Ji(o,o.next),c=Ji(c,c.next),gr(o,t,e,n,s,r,0),gr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gv(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=$h(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(bv(l));for(s.sort(_v),r=0;r<s.length;r++)e=vv(s[r],e);return e}function _v(i,t){return i.x-t.x}function vv(i,t){const e=xv(i,t);if(!e)return t;const n=Jh(e,i);return Ji(n,n.next),Ji(e,e.next)}function xv(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&bs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),_r(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&yv(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function yv(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function Mv(i,t,e,n){let s=i;do s.z===0&&(s.z=Pc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sv(s)}function Sv(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Pc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function bv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function wv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ev(i,t)&&(_r(i,t)&&_r(t,i)&&Tv(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||No(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function No(i,t){return i.x===t.x&&i.y===t.y}function Zh(i,t,e,n){const s=lo(Le(i,t,e)),r=lo(Le(i,t,n)),o=lo(Le(e,n,i)),a=lo(Le(e,n,t));return!!(s!==r&&o!==a||s===0&&co(i,e,t)||r===0&&co(i,n,t)||o===0&&co(e,i,n)||a===0&&co(e,t,n))}function co(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function lo(i){return i>0?1:i<0?-1:0}function Ev(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _r(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function Tv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Jh(i,t){const e=new Ic(i.i,i.x,i.y),n=new Ic(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ou(i,t,e,n){const s=new Ic(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ic(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Av(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ri{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ri.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Bu(t),zu(n,t);let o=t.length;e.forEach(Bu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,zu(n,e[c]);const a=hv.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Bu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class sl extends Fe{constructor(t=new Ns([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Rv;let x,v=!1,I,A,w,R;p&&(x=p.getSpacedPoints(u),v=!0,f=!1,I=p.computeFrenetFrames(u,!1),A=new L,w=new L,R=new L),f||(m=0,d=0,g=0,_=0);const S=a.extractPoints(l);let y=S.shape;const C=S.holes;if(!Ri.isClockWise(y)){y=y.reverse();for(let et=0,pt=C.length;et<pt;et++){const P=C[et];Ri.isClockWise(P)&&(C[et]=P.reverse())}}const N=Ri.triangulateShape(y,C),O=y;for(let et=0,pt=C.length;et<pt;et++){const P=C[et];y=y.concat(P)}function V(et,pt,P){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(pt,P)}const k=y.length,W=N.length;function D(et,pt,P){let Ft,ot,yt;const _t=et.x-pt.x,Wt=et.y-pt.y,Rt=P.x-et.x,T=P.y-et.y,b=_t*_t+Wt*Wt,H=_t*T-Wt*Rt;if(Math.abs(H)>Number.EPSILON){const j=Math.sqrt(b),st=Math.sqrt(Rt*Rt+T*T),tt=pt.x-Wt/j,Nt=pt.y+_t/j,xt=P.x-T/st,Tt=P.y+Rt/st,Xt=((xt-tt)*T-(Tt-Nt)*Rt)/(_t*T-Wt*Rt);Ft=tt+_t*Xt-et.x,ot=Nt+Wt*Xt-et.y;const ut=Ft*Ft+ot*ot;if(ut<=2)return new rt(Ft,ot);yt=Math.sqrt(ut/2)}else{let j=!1;_t>Number.EPSILON?Rt>Number.EPSILON&&(j=!0):_t<-Number.EPSILON?Rt<-Number.EPSILON&&(j=!0):Math.sign(Wt)===Math.sign(T)&&(j=!0),j?(Ft=-Wt,ot=_t,yt=Math.sqrt(b)):(Ft=_t,ot=Wt,yt=Math.sqrt(b/2))}return new rt(Ft/yt,ot/yt)}const J=[];for(let et=0,pt=O.length,P=pt-1,Ft=et+1;et<pt;et++,P++,Ft++)P===pt&&(P=0),Ft===pt&&(Ft=0),J[et]=D(O[et],O[P],O[Ft]);const Q=[];let K,wt=J.concat();for(let et=0,pt=C.length;et<pt;et++){const P=C[et];K=[];for(let Ft=0,ot=P.length,yt=ot-1,_t=Ft+1;Ft<ot;Ft++,yt++,_t++)yt===ot&&(yt=0),_t===ot&&(_t=0),K[Ft]=D(P[Ft],P[yt],P[_t]);Q.push(K),wt=wt.concat(K)}for(let et=0;et<m;et++){const pt=et/m,P=d*Math.cos(pt*Math.PI/2),Ft=g*Math.sin(pt*Math.PI/2)+_;for(let ot=0,yt=O.length;ot<yt;ot++){const _t=V(O[ot],J[ot],Ft);ct(_t.x,_t.y,-P)}for(let ot=0,yt=C.length;ot<yt;ot++){const _t=C[ot];K=Q[ot];for(let Wt=0,Rt=_t.length;Wt<Rt;Wt++){const T=V(_t[Wt],K[Wt],Ft);ct(T.x,T.y,-P)}}}const It=g+_;for(let et=0;et<k;et++){const pt=f?V(y[et],wt[et],It):y[et];v?(w.copy(I.normals[0]).multiplyScalar(pt.x),A.copy(I.binormals[0]).multiplyScalar(pt.y),R.copy(x[0]).add(w).add(A),ct(R.x,R.y,R.z)):ct(pt.x,pt.y,0)}for(let et=1;et<=u;et++)for(let pt=0;pt<k;pt++){const P=f?V(y[pt],wt[pt],It):y[pt];v?(w.copy(I.normals[et]).multiplyScalar(P.x),A.copy(I.binormals[et]).multiplyScalar(P.y),R.copy(x[et]).add(w).add(A),ct(R.x,R.y,R.z)):ct(P.x,P.y,h/u*et)}for(let et=m-1;et>=0;et--){const pt=et/m,P=d*Math.cos(pt*Math.PI/2),Ft=g*Math.sin(pt*Math.PI/2)+_;for(let ot=0,yt=O.length;ot<yt;ot++){const _t=V(O[ot],J[ot],Ft);ct(_t.x,_t.y,h+P)}for(let ot=0,yt=C.length;ot<yt;ot++){const _t=C[ot];K=Q[ot];for(let Wt=0,Rt=_t.length;Wt<Rt;Wt++){const T=V(_t[Wt],K[Wt],Ft);v?ct(T.x,T.y+x[u-1].y,x[u-1].x+P):ct(T.x,T.y,h+P)}}}$(),at();function $(){const et=s.length/3;if(f){let pt=0,P=k*pt;for(let Ft=0;Ft<W;Ft++){const ot=N[Ft];zt(ot[2]+P,ot[1]+P,ot[0]+P)}pt=u+m*2,P=k*pt;for(let Ft=0;Ft<W;Ft++){const ot=N[Ft];zt(ot[0]+P,ot[1]+P,ot[2]+P)}}else{for(let pt=0;pt<W;pt++){const P=N[pt];zt(P[2],P[1],P[0])}for(let pt=0;pt<W;pt++){const P=N[pt];zt(P[0]+k*u,P[1]+k*u,P[2]+k*u)}}n.addGroup(et,s.length/3-et,0)}function at(){const et=s.length/3;let pt=0;Et(O,pt),pt+=O.length;for(let P=0,Ft=C.length;P<Ft;P++){const ot=C[P];Et(ot,pt),pt+=ot.length}n.addGroup(et,s.length/3-et,1)}function Et(et,pt){let P=et.length;for(;--P>=0;){const Ft=P;let ot=P-1;ot<0&&(ot=et.length-1);for(let yt=0,_t=u+m*2;yt<_t;yt++){const Wt=k*yt,Rt=k*(yt+1),T=pt+Ft+Wt,b=pt+ot+Wt,H=pt+ot+Rt,j=pt+Ft+Rt;qt(T,b,H,j)}}}function ct(et,pt,P){c.push(et),c.push(pt),c.push(P)}function zt(et,pt,P){$t(et),$t(pt),$t(P);const Ft=s.length/3,ot=M.generateTopUV(n,s,Ft-3,Ft-2,Ft-1);re(ot[0]),re(ot[1]),re(ot[2])}function qt(et,pt,P,Ft){$t(et),$t(pt),$t(Ft),$t(pt),$t(P),$t(Ft);const ot=s.length/3,yt=M.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);re(yt[0]),re(yt[1]),re(yt[3]),re(yt[1]),re(yt[2]),re(yt[3])}function $t(et){s.push(c[et*3+0]),s.push(c[et*3+1]),s.push(c[et*3+2])}function re(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Cv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Rc[s.type]().fromJSON(s)),new sl(n,t.options)}}const Rv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new rt(r,o),new rt(a,c),new rt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new rt(o,1-c),new rt(l,1-h),new rt(f,1-g),new rt(_,1-p)]:[new rt(a,1-c),new rt(u,1-h),new rt(d,1-g),new rt(m,1-p)]}};function Cv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Fo extends il{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fo(t.radius,t.detail)}}class Oo extends Fe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/s,d=new L,g=new rt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,x=M,v=M+n+1,I=M+n+2,A=M+1;a.push(x,v,A),a.push(v,I,A)}}this.setIndex(a),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xr extends Fe{constructor(t=new Ns([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new he(s,3)),this.setAttribute("normal",new he(r,3)),this.setAttribute("uv",new he(o,2));function l(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;Ri.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];Ri.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=Ri.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){const M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){const M=_[m],x=M[0]+h,v=M[1]+h,I=M[2]+h;n.push(x,v,I),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Pv(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new xr(n,t.curveSegments)}}function Pv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class me extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,f=new L,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){const A=I/e;h.x=-t*Math.cos(s+A*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(A+v,1-x),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=u[p][M+1],v=u[p][M],I=u[p+1][M],A=u[p+1][M+1];(p!==0||o>0)&&d.push(x,v,A),(p!==n-1||c<Math.PI)&&d.push(v,I,A)}this.setIndex(d),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Sn extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new L,h=new L,f=new L;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Iv extends Ii{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new te(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Lv extends Ii{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}function uo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Dv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Uv(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function ku(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Kh(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class Bo{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nv extends Bo{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ys,endingEnd:ys}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ms:r=t,a=2*e-n;break;case So:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ms:o=t,c=2*n-e;break;case So:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+M*o[l+I]+x*o[c+I]+v*o[h+I];return r}}class jh extends Bo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class Fv extends Bo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class ei{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=uo(e,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:uo(t.times,Array),values:uo(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nv(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mo:e=this.InterpolantFactoryMethodDiscrete;break;case bc:e=this.InterpolantFactoryMethodLinear;break;case qo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return bc;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Dv(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qo,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=bc;class Gs extends ei{constructor(t,e,n){super(t,e,n)}}Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Mo;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Qh extends ei{}Qh.prototype.ValueTypeName="color";class To extends ei{}To.prototype.ValueTypeName="number";class Ov extends Bo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let u=l+a;l!==u;l+=4)Zn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class br extends ei{InterpolantFactoryMethodLinear(t){return new Ov(this.times,this.values,this.getValueSize(),t)}}br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends ei{constructor(t,e,n){super(t,e,n)}}Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Mo;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends ei{}yr.prototype.ValueTypeName="vector";class Lc{constructor(t="",e=-1,n=[],s=qc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(zv(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(ei.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Uv(c);c=ku(c,1,u),l=ku(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new To(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Kh(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let M=0;M!==f[g].morphTargets.length;++M){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new To(".morphTargetInfluence["+_+"]",m,p))}c=d.length*o}else{const d=".bones["+e[h].name+"]";n(yr,d+".position",f,"pos",s),n(br,d+".quaternion",f,"rot",s),n(yr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Bv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return To;case"vector":case"vector2":case"vector3":case"vector4":return yr;case"color":return Qh;case"quaternion":return br;case"bool":case"boolean":return Gs;case"string":return Hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function zv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Bv(i.type);if(i.times===void 0){const e=[],n=[];Kh(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Vu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kv{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Vv=new kv;class rl{constructor(t){this.manager=t!==void 0?t:Vv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}rl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gv extends rl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Vu.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=mr("img");function c(){u(),Vu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Hv extends rl{constructor(t){super(t)}load(t,e,n,s){const r=new $e,o=new Gv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class tf extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Wv extends tf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ta=new ce,Gu=new L,Hu=new L;class Xv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kc,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gu),Hu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hu),e.updateMatrixWorld(),Ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qv extends Xv{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wu extends tf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new qv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yv{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){Zn.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;Zn.multiplyQuaternionsFlat(t,o,t,e,t,n),Zn.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const ol="\\[\\]\\.:\\/",$v=new RegExp("["+ol+"]","g"),al="[^"+ol+"]",Zv="[^"+ol.replace("\\.","")+"]",Jv=/((?:WC+[\/:])*)/.source.replace("WC",al),Kv=/(WCOD+)?/.source.replace("WCOD",Zv),jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),Qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),tx=new RegExp("^"+Jv+Kv+jv+Qv+"$"),ex=["material","materials","bones","map"];class nx{constructor(t,e,n){const s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ye{constructor(t,e,n){this.path=e,this.parsedPath=n||ye.parseTrackName(e),this.node=ye.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ye.Composite(t,e,n):new ye(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($v,"")}static parseTrackName(t){const e=tx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);ex.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ye.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ye.Composite=nx;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ix{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:ys,endingEnd:ys};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ad,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Yc:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case qc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===cd;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===wh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=Ms,s.endingEnd=Ms):(t?s.endingStart=this.zeroSlopeAtStart?Ms:ys:s.endingStart=So,e?s.endingEnd=this.zeroSlopeAtEnd?Ms:ys:s.endingEnd=So)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const sx=new Float32Array(1);class rx extends Ki{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const f=s[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}const _=e&&e._propertyBindings[h].binding.parsedPath;g=new Yv(ye.create(n,d,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const h=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete h[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new jh(new Float32Array(2),new Float32Array(2),1,sx),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?Lc.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=qc),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new ix(this,o,e,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?Lc.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Xu=new ce;class qu{constructor(t,e,n=0,s=1/0){this.ray=new Lo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xu),this}intersectObject(t,e=!0,n=[]){return Dc(t,this,n,e),n.sort(Yu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Dc(t[s],this,n,e);return n.sort(Yu),n}}function Yu(i,t){return i.distance-t.distance}function Dc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Dc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);const wr=`
float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x){
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p *= 2.03; a *= 0.5; } return s; }
`;let Gi=null;function ox(){return Gi||(Gi=new Hh(new Uint8Array([120,160,205,238,255]),5,1,Gc),Gi.minFilter=Gi.magFilter=mn,Gi.needsUpdate=!0,Gi)}function se(i,{map:t=null,grain:e=6,grainAmt:n=.12,tint:s="#9a86c4",rim:r=0,form:o=0,side:a=fi,transparent:c=!1,opacity:l=1}={}){const u=new Lv({color:i,map:t,gradientMap:ox(),side:a,transparent:c,opacity:l});return u.onBeforeCompile=h=>{Object.assign(h.uniforms,{uTint:{value:new te(s)},uGrain:{value:e},uGrainAmt:{value:n},uRim:{value:r},uRimCol:{value:new te("#ffb98a")},uForm:{value:o}}),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <project_vertex>",`#include <project_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP; uniform vec3 uTint; uniform float uGrain; uniform float uGrainAmt; uniform float uRim; uniform vec3 uRimCol; uniform float uForm;
${wr}`).replace("#include <dithering_fragment>",`
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
}`)},u}const Aa=new Map;function ef(i="#7a5646",t=.008,e=12){const n=`${i}|${t}|${e}`;if(Aa.has(n))return Aa.get(n);const s=new Ue({color:i,side:an});return s.onBeforeCompile=r=>{r.uniforms.uThick={value:t},r.uniforms.uFreq={value:e},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uThick; uniform float uFreq;
${wr}`).replace("#include <begin_vertex>",`
#include <begin_vertex>
float wob = vnoise(position * uFreq);
transformed += normal * uThick * (0.4 + 1.2 * wob);`)},Aa.set(n,s),s}function nn(i,t,e,n){const s=new ft(i.geometry,ef(t,e,n));return s.name=`${i.name||"mesh"}-outline`,i.add(s),i}function ax(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);e.addColorStop(0,"rgba(110,70,90,0.5)"),e.addColorStop(1,"rgba(110,70,90,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Jn(i);return n.colorSpace=Ce,n}function nf(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#e9e2f0",t.fillRect(0,0,256,256);let e=11;const n=()=>(e=e*16807%2147483647)/2147483647;for(let r=0;r<4;r++)t.fillStyle="rgba(126, 168, 196, 0.38)",t.fillRect(r*64+14,0,26,256),t.fillStyle="rgba(240, 160, 140, 0.34)",t.fillRect(0,r*64+14,256,26);for(let r=0;r<1600;r++)t.fillStyle=`rgba(110, 80, 90, ${n()*.05})`,t.fillRect(n()*256,n()*256,1+n()*2,1);const s=new Jn(i);return s.colorSpace=Ce,s.wrapS=s.wrapT=fr,s.anisotropy=4,s}function cx(i=20261115){let t=i>>>0;const e=()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296,n=c=>({t0:c,d:6.5+e()*3,s:.42+.58*Math.pow(e(),.8),seed:1+e()*40});let s=n(.5),r=n(s.t0+s.d*(.75+e()*.2));const o=c=>(c=Math.min(1,Math.max(0,c)),Math.pow(Math.sin(Math.PI*Math.pow(c,.7)),1.3));let a=0;return{at(c){for(;(c-s.t0)/s.d>1.12;)s=r,r=n(s.t0+s.d*(.75+e()*.2)),a++;const l=(c-s.t0)/s.d,u=(c-r.t0)/r.d;return{a:[l,s.s,s.seed],b:[u,r.s,r.seed],wash:Math.max(s.s*o(l),r.s*o(u)),count:a,period:s.d,strength:s.s}}}}const sf=`
uniform vec3 uWA, uWB; uniform float uTime;
float wshape(float p){ p = clamp(p, 0.0, 1.0); return pow(sin(3.14159265 * pow(p, 0.7)), 1.3); }
float wreach(vec3 w, float x, float lag){
  float n = vnoise(vec3(x * 0.0045, w.z, 2.0)) - 0.5;          // 해안선을 따라 도착 시간·높이가 조금씩 다름
  return w.y * wshape(w.x - lag - n * 0.14) * (50.0 + 44.0 * n);
}
float restLine(float x){ return 690.0 + (vnoise(vec3(x * 0.006, 1.0, 0.0)) - 0.5) * 24.0 + sin(x * 0.013 + uTime * 0.4) * 4.0; }
float frontY(float x, float lag){ return restLine(x) + max(wreach(uWA, x, lag), wreach(uWB, x, lag)); }   // 최대 약 778 (마른 모래 기준선 800 미만)
`,rf=i=>typeof window!="undefined"&&window.__ASSETS&&window.__ASSETS[i]||"./"+i,tn={w:1536,h:1024,horizon:355,focusX:768},lx=800,Re={x0:-256,w:2048,y0:640,h:512},of=`
${wr}
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
`,ux=`
uniform sampler2D tSky; uniform vec2 uRes; uniform vec4 uView; uniform float uS, uDpr, uTime; uniform vec3 uSky;
${of}
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
}`,hx=`
uniform sampler2D tSky, tSea, tWaves, tSand, tMap;
uniform vec2 uRes; uniform vec4 uView; uniform float uS, uDpr; uniform vec3 uSky; uniform mat4 uRefVP; uniform vec2 uMapPx;
varying vec3 vWP;
${of}
${sf}
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
  vec2 muv = vec2((P.x - ${Re.x0.toFixed(1)}) / ${Re.w.toFixed(1)}, (P.y - ${Re.y0.toFixed(1)}) / ${Re.h.toFixed(1)});
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
}`,fx=`
uniform sampler2D tPrev; uniform float uDt; varying vec2 vUv;
${wr}
${sf}
void main(){
  vec2 P = vec2(${Re.x0.toFixed(1)} + vUv.x * ${Re.w.toFixed(1)}, ${Re.y0.toFixed(1)} + vUv.y * ${Re.h.toFixed(1)});
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
}`;function dx(i,{mapW:t=1024}={}){const e=new Hv;let n=4;const s={done:!1},r=W=>{const D=e.load(rf(`bg/${W}.webp`),()=>{--n===0&&(s.done=!0)});return D.colorSpace=Ce,D.minFilter=mn,D.generateMipmaps=!1,D},o=t/4,a=()=>new Kn(t,o,{type:zn,depthBuffer:!1,minFilter:mn,magFilter:mn});let c=a(),l=a();const u={uRes:{value:new rt(1,1)},uView:{value:new Ee(1,1,0,0)},uS:{value:1},uDpr:{value:1},uSky:{value:new L(0,1,0)},uTime:{value:0},uWA:{value:new L(-1,0,1)},uWB:{value:new L(-1,0,2)}},h={value:r("sky")},f=new ft(new ke(2,2),new yn({uniforms:{tSky:h,...u},depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:ux}));f.frustumCulled=!1,f.renderOrder=-100;const d={tSky:h,tSea:{value:r("sea")},tWaves:{value:r("waves")},tSand:{value:r("sand")},tMap:{value:c.texture},uRefVP:{value:new ce},uMapPx:{value:new rt(1/t,1/o)},...u},g=new Fe,_=400,m=-900,p=40;g.setAttribute("position",new gn(new Float32Array([-_,0,m,_,0,m,-_,0,p,_,0,p]),3)),g.setIndex([0,2,1,1,2,3]);const M=new ft(g,new yn({uniforms:d,vertexShader:"varying vec3 vWP; void main(){ vWP = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vWP, 1.0); }",fragmentShader:hx}));M.frustumCulled=!1,M.renderOrder=-50;const x=new wo,v=new Do(-1,1,1,-1,0,1),I={tPrev:{value:null},uDt:{value:.1},uTime:u.uTime,uWA:u.uWA,uWB:u.uWB},A=new ft(new ke(2,2),new yn({uniforms:I,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:fx}));A.frustumCulled=!1,x.add(A);const w=new wo,R=new yn({uniforms:{tStamp:{value:null},uAmt:{value:1}},depthTest:!1,depthWrite:!1,transparent:!0,side:De,blending:hh,blendEquation:li,blendSrc:Ba,blendDst:Ba,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4((modelMatrix * vec4(position, 1.0)).xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D tStamp; uniform float uAmt; varying vec2 vUv; void main(){ gl_FragColor = vec4(0.0, texture2D(tStamp, vUv).a * uAmt, 0.0, 0.0); }"}),S=new ft(new ke(1,1),R);S.frustumCulled=!1,w.add(S);let y=!1,C=0;function U(W){const D=i.getRenderTarget(),J=i.autoClear;if(!y){for(const Q of[c,l])i.setRenderTarget(Q),i.setClearColor(0,1),i.clear();y=!0}I.tPrev.value=c.texture,I.uDt.value=W,i.setRenderTarget(l),i.render(x,v),[c,l]=[l,c],d.tMap.value=c.texture,i.setRenderTarget(D),i.autoClear=J}function N(W,D,J,Q,K,wt=1,It=!1){R.blendEquation=It?fh:li;const $=new Jn(W);$.flipY=!0,R.uniforms.tStamp.value=$,R.uniforms.uAmt.value=wt;const at=(D-Re.x0)/Re.w,Et=(J-Re.y0)/Re.h;S.position.set(at*2-1,Et*2-1,0),S.scale.set(Q/Re.w*2,-(K/Re.h)*2,1);const ct=i.getRenderTarget(),zt=i.autoClear;i.autoClear=!1,i.setRenderTarget(c),i.render(w,v),i.setRenderTarget(ct),i.autoClear=zt,$.dispose()}function O(W=Re.x0,D=Re.y0,J=Re.w,Q=Re.h){const K=Math.max(0,Math.floor((W-Re.x0)/Re.w*t)),wt=Math.max(0,Math.floor((D-Re.y0)/Re.h*o)),It=Math.max(1,Math.min(t-K,Math.round(J/Re.w*t))),$=Math.max(1,Math.min(o-wt,Math.round(Q/Re.h*o))),at=new Uint8Array(It*$*4);i.readRenderTargetPixels(c,K,wt,It,$,at);let Et=0,ct=0;for(let qt=0;qt<at.length;qt+=4)Et+=at[qt],ct+=at[qt+1];const zt=It*$*255;return[Et/zt,ct/zt]}function V(W,D,J){const Q=W/D<1;let K,wt,It,$=0;if(Q)K=D/tn.h,wt=W/2-tn.focusX*K,It=0;else{K=Math.max(W/tn.w,D/tn.h);const at=D/K,Et=Math.max(0,lx-.93*at),ct=Math.min(tn.h-at,200,tn.horizon-.12*at);$=Math.min(tn.h-at,Math.max(Et,Math.min(ct,tn.horizon-.2*at))),wt=(W-tn.w*K)/2,It=-$*K}return u.uRes.value.set(Math.round(W*J),Math.round(D*J)),u.uView.value.set(W,D,wt,It),u.uS.value=K,u.uDpr.value=J,{portrait:Q,scale:K,tx:wt,ty:It,horizonFrac:(It+tn.horizon*K)/D,w:W,h:D,stageTop:-It/K,stageBottom:(D-It)/K}}function k(W,D,J,Q=1){u.uTime.value=W,u.uWA.value.fromArray(J.a),u.uWB.value.fromArray(J.b),C+=D;let K=0;for(;C>=.1&&K<3*Q;)U(.1),C-=.1,K++;C>.3*Q&&(C=0)}return{sky:f,ground:M,layout:V,update:k,stamp:N,readMap:O,ready:s,shared:u,setRef:W=>d.uRefVP.value.copy(W),setSky:(W,D)=>u.uSky.value.set(W,D,0),mapSize:[t,o]}}const $u="#7a5646",af={strawHat:{slot:"head",label:"밀짚모자",build(){const i=new Kt;i.name="item:strawHat";const t=se("#ecd096",{grain:30,grainAmt:.22,tint:"#b49ac0",rim:.35}),e=new ft(new Ie(.25,.27,.02,40),t);e.position.y=-.035,e.castShadow=!0,nn(e,$u,.006,20);const n=e.geometry.attributes.position;for(let o=0;o<n.count;o++){const a=Math.hypot(n.getX(o),n.getZ(o));a>.2&&n.setY(o,n.getY(o)-(a-.2)*.35)}e.geometry.computeVertexNormals();const s=new ft(new me(.15,32,16,0,Math.PI*2,0,Math.PI/2),t);s.scale.set(1,.72,.95),s.position.y=-.03,s.castShadow=!0,nn(s,$u,.006,20);const r=new ft(new Ie(.152,.152,.032,40,1,!0),se("#ec8f7c",{grain:12,side:De}));return r.position.y=-.012,r.scale.z=.95,i.add(e,s,r),i.rotation.z=.12,i.scale.setScalar(1.35),i}},glasses:{slot:"face",label:"안경",build(){const i=new Kt;i.name="item:glasses";const t=se("#8a5a46",{grain:8,rim:.2}),e=new Ue({color:"#cfe6ee",transparent:!0,opacity:.22,depthWrite:!1});for(const s of[-1,1]){const r=new ft(new Sn(.052,.008,10,36),t);r.position.set(s*.092,0,-.012),r.scale.y=.92,i.add(r);const o=new ft(new kn(.052,28),e);o.position.set(s*.092,0,-.012),o.rotation.y=Math.PI,i.add(o);const a=new ft(new Ie(.005,.005,.17,6),t);a.rotation.x=Math.PI/2,a.position.set(s*.146,0,.07),i.add(a)}const n=new ft(new Ie(.0055,.0055,.06,6),t);return n.rotation.z=Math.PI/2,n.position.set(0,.012,-.014),i.add(n),i}}},px="#f6db8c",cf="#7c573f",mx=[[0,0],[.17,.01],[.27,.05],[.325,.14],[.34,.26],[.33,.38],[.3,.49],[.272,.58],[.262,.65],[.266,.73],[.258,.81],[.232,.89],[.18,.96],[.1,1.01],[0,1.03]];function gx(){const t=new nl(mx.map(([a,c])=>new rt(a,c))).getPoints(48).map(a=>new rt(Math.max(0,a.x),a.y));t[0].x=0,t[t.length-1].x=0;const e=new Li(t,48);e.scale(1,1,.9);const n=e.attributes.position,s=[],r=[],o=(a,c,l)=>{const u=Math.min(1,Math.max(0,(l-a)/(c-a)));return u*u*(3-2*u)};for(let a=0;a<n.count;a++){const c=n.getY(a),l=o(.58,.74,c),u=o(.28,.5,c),h=u-l,f=1-u;s.push(0,1,2,0),r.push(f,h,l,0)}return e.setAttribute("skinIndex",new Jc(s,4)),e.setAttribute("skinWeight",new he(r,4)),e}function Si(i,t,e,{outline:n=!0,shadow:s=!0}={}){const r=new ft(i,t);return r.name=e,r.castShadow=s,n&&nn(r,cf,.006,16),r}function _x(){const n=[[.338,.29],[.355,.26],[.358,.2],[.362,.13],[.385,.06],[.44,.022],[.52,.01],[.585,.008]],s=c=>{const l=c*(n.length-1),u=Math.min(n.length-2,Math.floor(l)),h=l-u;return[n[u][0]+(n[u+1][0]-n[u][0])*h,n[u][1]+(n[u+1][1]-n[u][1])*h]},r=new ke(1,1,40,18),o=r.attributes.position,a=r.attributes.uv;for(let c=0;c<o.count;c++){const l=a.getX(c),u=1-a.getY(c),h=(l-.5)*2*2,f=Math.abs(l-.5)*2;let[d,g]=s(u);const _=.036*Math.pow(u,1.2)*(Math.sin(h*6+.7)+.45*Math.sin(h*11+2.1));d+=_+.012*Math.sin(h*3.1),u<.12&&(d+=.018*(1-u/.12)),g+=(f*f*.02+(l-.5)*.07)*(1-u),u>.8&&(g=Math.max(.006,g+.006*Math.sin(h*9))),o.setXYZ(c,Math.sin(h)*d,g,-Math.cos(h)*d*.9)}return r.computeVertexNormals(),r}function vx(){const i=new Kt;i.name="seal";const t=se(px,{grain:6,grainAmt:.22,tint:"#c4a0b0",rim:.45,form:1}),e=se("#fbecc4",{grain:9,grainAmt:.1,tint:"#c4a0b0",rim:.3,form:.6}),n=new Ue({color:"#3d2c25"}),s=(D,J,Q,K,wt)=>{const It=new Gh;return It.name=D,It.position.set(J,Q,K),wt&&wt.add(It),It},r=s("root",0,0,0),o=s("spine",0,.42,0,r),a=s("head",0,.24,0,o),c=s("armL",-.255,.05,-.05,o),l=s("armR",.255,.05,-.05,o),u=s("footL",-.12,.07,-.22,r),h=s("footR",.12,.07,-.22,r),f=s("book",0,.03,-.37,o);f.scale.setScalar(1.75),a.rotation.x=-.26,f.rotation.x=-1.05;const d=gx(),g=new Lu(d,t);g.name="body",g.castShadow=!0,g.add(r);const _=new Qc([r,o,a,c,l,u,h,f]);g.bind(_);const m=new Lu(d,ef(cf,.0045,14));m.name="body-outline",g.add(m),m.bind(_,g.bindMatrix),i.add(g);const p=new me(.021,14,10);for(const D of[-1,1]){const J=new ft(p,n);J.name=D<0?"eyeL":"eyeR",J.position.set(D*.092,.17,-.212),J.scale.set(1,1.15,.6),a.add(J);const Q=new ft(new kn(.034,18),new Ue({color:"#f2a0a0",transparent:!0,opacity:.45,depthWrite:!1}));Q.position.set(D*.15,.11,-.195),Q.rotation.y=Math.PI+D*-.62,Q.scale.y=.7,a.add(Q);const K=Si(new me(.048,18,12),e,D<0?"muzzleL":"muzzleR",{outline:!1});K.position.set(D*.038,.095,-.222),K.scale.set(1,.85,.7),a.add(K)}const M=new ft(new me(.02,12,8),n);M.name="nose",M.position.set(0,.125,-.252),M.scale.set(1.3,.85,.8),a.add(M);const x=Si(new me(.2,24,16),e,"belly",{outline:!1});x.position.set(0,-.12,-.215),x.scale.set(1.05,1.3,.35),o.add(x);const v=new me(.07,18,12);for(const[D,J]of[[c,-1],[l,1]]){const Q=Si(v,t,`${D.name}-flipper`);Q.scale.set(.8,1.7,.62),Q.position.set(0,-.09,0),D.add(Q),D.rotation.set(1.45,0,J*.3)}const I=new me(.07,18,12);for(const[D,J]of[[u,-1],[h,1]]){const Q=Si(I,t,`${D.name}-flipper`);Q.scale.set(.9,.55,1.5),Q.position.set(0,0,-.06),D.add(Q),D.rotation.set(.15,J*.25,0)}const A=se("#f8efdc",{grain:14,tint:"#b6a6cf",rim:.2}),w=se("#6286a8",{grain:10});for(const D of[-1,1]){const J=new Kt,Q=Si(new Ze(.15,.2,.024),A,"pages");Q.position.x=D*.08;const K=new ft(new Ze(.16,.21,.007),w);K.position.set(D*.082,0,-.016),K.castShadow=!0,J.add(Q,K),J.rotation.y=D*-.4,f.add(J)}const R=(D,J,Q,K,wt,It=0)=>{const $=new Ne;return $.name=`slot:${D}`,$.position.set(Q,K,wt),$.rotation.x=It,J.add($),$},S={head:R("head",a,0,.345,0,.08),face:R("face",a,0,.17,-.22),neck:R("neck",o,0,.2,0),back:R("back",o,0,0,.27),hand:R("hand",f,0,0,0)},y=new Sn(.024,.0062,6,16,Math.PI),C=[-1,1].map(D=>{const J=new ft(y,n);return J.name=D<0?"lidL":"lidR",J.position.set(D*.092,.162,-.216),J.rotation.y=Math.PI,J.visible=!1,a.add(J),J}),U=new Kt;U.name="mug";{const D=Si(new Ie(.05,.043,.095,18),se("#fbf3e6",{grain:30}),"mug-cup");U.add(D);const J=new ft(new Ie(.0515,.048,.026,18,1,!0),se("#6fb0c6",{grain:20}));U.add(J);const Q=Si(new Sn(.026,.008,6,12,Math.PI),se("#fbf3e6"),"mug-handle");Q.position.x=.05,Q.rotation.z=-Math.PI/2,U.add(Q);const K=new ft(new kn(.045,16),new Ue({color:"#9a6240"}));K.rotation.x=-Math.PI/2,K.position.y=.042,U.add(K)}U.position.set(0,-.2,-.04),U.rotation.set(-2.3,0,0),U.visible=!1,l.add(U);const N=new Kt;N.name="leaf",N.rotation.y=-.4,f.add(N);{const D=Si(new Ze(.145,.195,.004),A,"leaf-page");D.position.set(.078,0,.015),N.add(D)}N.visible=!1;const O=nf();O.repeat.set(2.2,1.4);const V=new ft(_x(),se("#ffffff",{map:O,grain:5,tint:"#a08ac8",rim:.2,side:De}));V.name="blanket",V.castShadow=!0,V.receiveShadow=!0,V.visible=!1,r.add(V);const k=af.glasses.build();k.visible=!1,S.face.add(k);const W=[a.getObjectByName("eyeL"),a.getObjectByName("eyeR")];return{group:i,body:g,skeleton:_,bones:{root:r,spine:o,head:a,armL:c,armR:l,footL:u,footR:h,book:f},slots:S,extras:{lids:C,eyes:W,mug:U,leaf:N,blanket:V,glasses:k}}}const Zu=30,lf=i=>i<=0?0:i>=1?1:i*i*i*(i*(i*6-15)+10),Fn=(i,t,e)=>lf((i-t)/(e-t)),Ae=(i,t,e,n,s)=>Fn(i,t,e)*(1-Fn(i,n,s)),ho=(i,t,e=9,n=5)=>i<t?0:Math.exp(-(i-t)*n)*Math.sin((i-t)*e),xs=(i,t,e)=>Math.exp(-(((i-t)/e)**2)),nr=new Zn,xx=new jn;function Wn(i,t,e){const n=Math.round(t*Zu)+1,s=Array.from({length:n},(a,c)=>c/Zu),r=[];for(const[a,c]of Object.entries(e)){const l=a.split(".").pop(),u=[];for(const h of s){const f=c(h);l==="quaternion"?(nr.setFromEuler(xx.set(f[0]||0,f[1]||0,f[2]||0)),u.push(nr.x,nr.y,nr.z,nr.w)):u.push(f[0]||0,f[1]||0,f[2]||0)}r.push(l==="quaternion"?new br(a,s,u):new yr(a,s,u))}const o=new Lc(i,t,r);return o.blendMode=Yc,o}const ir=i=>({"book.position":t=>[0,-.11*i(t),.1*i(t)],"book.quaternion":t=>[-.45*i(t),0,.12*i(t)]}),Ra={read:{loop:!0,clip:()=>{const t=e=>.5-.5*Math.cos(e*2*Math.PI/3.6);return Wn("read",7.2,{"spine.scale":e=>[.008*t(e),.02*t(e),.012*t(e)],"head.quaternion":e=>[.03*Math.sin(e*2*Math.PI/7.2),.05*Math.sin(e*2*Math.PI/7.2+1.2),.02*Math.sin(e*2*Math.PI/7.2+.4)],"book.position":e=>[0,.005*t(e),0]})}},page:{D:1.9,show:{leaf:[.35,1.45]},cues:[[.45,"page"]],clip:()=>{const t=n=>Ae(n,.05,.4,1.25,1.75),e=n=>Fn(n,.4,1.2);return Wn("page",1.9,{"armR.quaternion":n=>[.25*t(n),0,-.15*t(n)-.55*e(n)*t(n)],"leaf.quaternion":n=>[0,-2.3*Fn(n,.42,1.25)-.08*ho(n,1.25,14,7),0],"head.quaternion":n=>[.03*t(n),(-.1+.22*e(n))*t(n),.04*Math.sin(Math.PI*e(n))],"spine.quaternion":n=>[0,.05*Math.sin(Math.PI*e(n)),0],"book.quaternion":n=>[.05*xs(n,.5,.15),0,0]})}},coffee:{D:3.8,eyes:i=>Ae(i,1.15,1.35,2.5,2.75),show:{mug:[.2,3.45]},cues:[[1.25,"sip"],[2.6,"ahh"],[3.35,"clink"]],clip:()=>{const t=s=>Ae(s,0,.5,3.1,3.7),e=s=>Ae(s,.35,1.1,2.7,3.4),n=s=>Ae(s,1.05,1.35,2.3,2.7);return Wn("coffee",3.8,{...ir(t),"armR.quaternion":s=>[.95*e(s)+.15*n(s),0,-.5*e(s)],"armL.quaternion":s=>[-.25*t(s),0,0],"head.quaternion":s=>[.34*e(s)+.12*n(s)-.05*xs(s,1.6,.1),-.06*e(s),.05*n(s)],"spine.quaternion":s=>[.06*n(s),0,0],"spine.scale":s=>[.02*xs(s,2.65,.2),-.035*xs(s,2.65,.2),.02*xs(s,2.65,.2)]})}},sea:{D:6.4,sleepy:!0,eyes:i=>.55*Ae(i,2.4,2.8,3.7,4.1),cues:[[.3,"breeze"]],clip:()=>{const t=e=>Ae(e,.25,1.9,4.6,6.2);return Wn("sea",6.4,{"head.quaternion":e=>[.42*t(e)+.03*Math.sin(e*1.3)*t(e),.95*t(e),-.06*t(e)],"spine.quaternion":e=>[.04*t(e),.45*t(e),0],"root.quaternion":e=>[0,.12*t(e),0],"spine.scale":e=>[0,.03*xs(e,3.2,.5),0],...ir(e=>.6*t(e))})}},stretch:{D:3.9,eyes:i=>Ae(i,.5,.8,2.6,2.9),cues:[[.5,"stretch"],[2.55,"plop"]],clip:()=>{const t=s=>Ae(s,.45,1.15,2.4,2.75),e=s=>Ae(s,0,.4,.45,.75),n=s=>Ae(s,1.15,1.35,2.2,2.4)*Math.sin(s*38);return Wn("stretch",3.9,{...ir(s=>Ae(s,.1,.55,2.9,3.6)),"spine.scale":s=>[-.03*t(s)+.03*e(s)+.04*ho(s,2.6,16,6),.09*t(s)-.04*e(s)-.05*ho(s,2.6,16,6),0],"root.position":s=>[0,.02*t(s)+.025*Math.max(0,ho(s,2.6,13,6)),0],"armL.quaternion":s=>[1.3*t(s)+.05*n(s),0,-1.2*t(s)],"armR.quaternion":s=>[1.3*t(s)-.05*n(s),0,1.2*t(s)],"head.quaternion":s=>[.4*t(s)-.08*e(s),0,.03*n(s)],"footL.quaternion":s=>[-.35*t(s),0,0],"footR.quaternion":s=>[-.35*t(s),0,0]})}},doze:{D:6.6,sleepy:!0,eyes:i=>Fn(i,.4,1.3)*(1-Fn(i,4.15,4.25)),cues:[[1,"snore"],[4.15,"wake"]],clip:()=>{const t=s=>.22*Ae(s,1,1.9,2,2.4)+.36*Ae(s,2.6,3.6,4.1,4.3)+.06*Ae(s,.3,.9,3.8,4.2),e=s=>s<4.12?0:Math.exp(-(s-4.12)*3.5)*Math.cos((s-4.12)*9)*(1-Fn(s,5.4,6.2)),n=s=>Ae(s,4.5,4.7,5.3,5.6)*Math.sin((s-4.5)*17);return Wn("doze",6.6,{"head.quaternion":s=>[-t(s)+.14*Math.max(0,e(s)),.22*n(s),.06*Ae(s,1,2,3.8,4.2)],"spine.quaternion":s=>[-.35*t(s),0,0],"book.position":s=>[0,-.06*t(s)/.36*(s<4.2?1:0),0],"book.quaternion":s=>[.4*t(s),0,0],"root.position":s=>[0,.05*Math.max(0,e(s)),0],"spine.scale":s=>[0,.05*Math.max(0,e(s)),0],"armL.quaternion":s=>[-.25*t(s)+.3*Math.max(0,e(s)),0,-.25*Math.max(0,e(s))],"armR.quaternion":s=>[-.25*t(s)+.3*Math.max(0,e(s)),0,.25*Math.max(0,e(s))],"eyeL.scale":s=>[.25*Math.max(0,e(s)),.45*Math.max(0,e(s)),0],"eyeR.scale":s=>[.25*Math.max(0,e(s)),.45*Math.max(0,e(s)),0]})}},clap:{D:3,eyes:i=>Ae(i,.45,.6,2.3,2.5),cues:[[.62,"pat"],[.98,"pat"],[1.34,"pat"],[1.7,"pat"],[.55,"coo"]],clip:()=>{const t=n=>Ae(n,.1,.5,2.1,2.7),e=n=>n>.45&&n<1.9?.5-.5*Math.cos((n-.45)*Math.PI*2/.36):0;return Wn("clap",3,{...ir(t),"armL.quaternion":n=>[.3*t(n),0,(.7+.8*e(n))*t(n)],"armR.quaternion":n=>[.3*t(n),0,-(.7+.8*e(n))*t(n)],"root.position":n=>[0,.018*e(n)*t(n),0],"spine.scale":n=>[.015*e(n)*t(n),-.02*e(n)*t(n),0],"head.quaternion":n=>[.22*t(n),-.5*t(n),.1*Math.sin(n*5)*t(n)]})}},hello:{D:3,eyes:i=>Ae(i,.9,1,2,2.1),cues:[[.35,"coo"],[.5,"flap"]],clip:()=>{const t=n=>Ae(n,.1,.55,2.3,2.85),e=n=>Ae(n,0,.45,2.4,2.95);return Wn("hello",3,{"armR.quaternion":n=>[1.5*t(n),0,.85*t(n)+.4*t(n)*Math.sin(Math.max(0,n-.5)*12)],"head.quaternion":n=>[.2*e(n),-.85*e(n),.14*e(n)*Math.sin(Math.max(0,n-.3)*4.5)],"spine.quaternion":n=>[0,-.25*e(n),.05*t(n)],"spine.scale":n=>[0,.02*t(n),0]})}},write:{D:3.2,cues:[[.6,"scratch"]],clip:()=>{const t=n=>Ae(n,.1,.65,2.5,3.1),e=n=>Ae(n,.6,.75,2.3,2.5);return Wn("write",3.2,{...ir(t),"root.quaternion":n=>[-.28*t(n),-.35*t(n),0],"spine.quaternion":n=>[-.25*t(n),0,0],"head.quaternion":n=>[-.2*t(n),0,.05*Math.sin(n*7)*e(n)],"armR.quaternion":n=>[-.55*t(n)+.12*Math.sin(n*15)*e(n),0,-.2*t(n)+.25*Math.sin(n*9.5)*e(n)]})}},startle:{D:2.2,cues:[],clip:()=>{const i=e=>e<.12?lf(e/.12):Math.exp(-(e-.12)*3.2)*Math.cos((e-.12)*11)*(1-Fn(e,1.6,2.2)),t=e=>Fn(e,0,.1)*(1-Fn(e,.9,1.9));return Wn("startle",2.2,{"root.position":e=>[0,.045*Math.max(0,i(e)),0],"spine.scale":e=>[-.02*t(e),.045*Math.max(0,i(e)),0],"head.quaternion":e=>[.16*t(e),0,.08*Math.sin(e*9)*(1-Fn(e,.4,1.4))*t(e)],"eyeL.scale":e=>[.3*t(e),.45*t(e),0],"eyeR.scale":e=>[.3*t(e),.45*t(e),0]})}}};function yx(i,{onCue:t}={}){const e=new rx(i),n={};for(const[l,u]of Object.entries(Ra)){const h=e.clipAction(u.clip());h.blendMode=Yc,u.loop||(h.setLoop(wh,1),h.clampWhenFinished=!1),n[l]=h}n.read.play();let s=null,r=0,o=0,a=1;const c={eyes:0,show:{}};return{mixer:e,actions:n,state:c,play(l){const u=Ra[l];if(!u||u.loop)return!1;s&&s!==l&&n[s].fadeOut(.35);const h=n[l];return h.reset(),h.setEffectiveWeight(1),h.fadeIn(s&&s!==l?.3:.12),h.play(),s=l,r=0,o=0,!0},get current(){return s},get time(){return r},isPlaying:l=>s===l,update(l){if(s){const u=Ra[s];r+=l;const h=u.cues||[];for(;o<h.length&&h[o][0]<=r;)t==null||t(h[o][1],s),o++;c.eyes=u.eyes?u.eyes(r):0,c.sleepy=!!u.sleepy,c.show={};for(const[f,[d,g]]of Object.entries(u.show||{}))c.show[f]=r>=d&&r<=g;r>=u.D&&(s=null,c.eyes=0,c.show={},c.sleepy=!1)}a+=((s?.35:1)-a)*Math.min(1,l*3),n.read.setEffectiveWeight(a),e.update(l)}}}const cl="#8a6250",Pe=(i,t,e={},n=.006)=>{const s=new ft(i,se(t,{grain:14,grainAmt:.16,rim:.25,...e}));return s.castShadow=!0,n&&nn(s,e.line||cl,n,16),s};let Ju=11;const en=()=>(Ju=Ju*16807%2147483647)/2147483647;function Ku(i="#ee8f78",t="#fbeeda"){const e=new Kt;e.name="parasol";const n=Pe(new Ie(.022,.026,2.35,10),"#e9dcc6",{grain:20});n.position.y=1.17,e.add(n);const s=new Kt;s.position.y=2.2,e.add(s);const r=10,o=1.32,a=.46;for(let l=0;l<r;l++){const u=new ft(new Vs(o,a,5,1,!0,l/r*Math.PI*2,Math.PI*2/r),se(l%2?t:i,{grain:6,grainAmt:.14,side:De,tint:"#a08ac8",rim:.2}));u.castShadow=!0,s.add(u);const h=Pe(new me(.035,8,6),l%2?i:t,{},0),f=(l+.5)/r*Math.PI*2;h.position.set(Math.sin(f)*o*.99,-a/2-.02,Math.cos(f)*o*.99),s.add(h)}const c=Pe(new me(.05,10,8),"#c99662");return c.position.y=a/2+.03,s.add(c),e.userData.top=s,e.rotation.z=.1,e.rotation.x=.06,e}function Mx(){const i=new Kt;i.name="table";const t={grain:9,grainAmt:.2,tint:"#8a6a9c"},e=Pe(new Ie(.3,.3,.035,24),"#d2a06c",t);e.position.y=.44,i.add(e);for(let h=0;h<3;h++){const f=h/3*Math.PI*2+.4,d=Pe(new Ie(.018,.022,.46,8),"#c08d5c",t,.004);d.position.set(Math.cos(f)*.2,.22,Math.sin(f)*.2),d.rotation.set(Math.sin(f)*.16,0,-Math.cos(f)*.16),i.add(d)}const n=new Kt;n.position.set(-.1,.46,.06);const s=Pe(new Ie(.058,.05,.11,20),"#fbf3e6",{grain:30});s.position.y=.055,n.add(s);const r=new ft(new Ie(.0595,.056,.03,20,1,!0),se("#7fb6c9",{grain:20}));r.position.y=.05,n.add(r);const o=Pe(new Sn(.032,.01,8,14,Math.PI),"#fbf3e6",{},.004);o.position.set(.058,.055,0),o.rotation.z=-Math.PI/2,n.add(o);const a=new ft(new kn(.052,18),new Ue({color:"#b97a4e"}));a.rotation.x=-Math.PI/2,a.position.y=.105,n.add(a);const c=[],l=new Ue({color:"#fff6ea",transparent:!0,opacity:.35,depthWrite:!1});for(let h=0;h<4;h++){const f=new ft(new me(.022,8,6),l.clone());f.userData.ph=h/4,n.add(f),c.push(f)}return i.add(n),["#e58f7a","#7fb0bf","#f0cf86"].forEach((h,f)=>{const d=Pe(new Ze(.2,.034,.145),h,{grain:22},.004);d.position.set(.09,.475+f*.036,-.06),d.rotation.y=.25-f*.22,i.add(d);const g=new ft(new Ze(.19,.024,.14),se("#fbf3e0",{grain:30}));g.position.copy(d.position),g.position.x+=.006,g.rotation.y=d.rotation.y,i.add(g)}),i.userData.update=h=>c.forEach(f=>{const d=(h*.22+f.userData.ph)%1;f.position.set(Math.sin(d*6+f.userData.ph*9)*.02,.12+d*.26,0),f.scale.setScalar(.6+d*1.6),f.material.opacity=.36*Math.sin(Math.PI*d)}),i}function Ca(i=!1){const t=new Kt;t.name="mat";const e=new ke(1.5,.95,12,8),n=e.attributes.position;for(let c=0;c<n.count;c++)n.setZ(c,.012*Math.sin(n.getX(c)*7)*Math.cos(n.getY(c)*6)+.006*en());e.computeVertexNormals();const s=nf();s.repeat.set(3,2);const r=new ft(e,se("#ffffff",{map:s,grain:5,tint:"#a08ac8"}));if(r.rotation.x=-Math.PI/2,r.position.y=.012,r.receiveShadow=!0,t.add(r),i)return t;const o=af.strawHat.build();o.scale.setScalar(1.25),o.position.set(-.38,.1,-.1),o.rotation.set(.06,.6,.05),t.add(o);for(const c of[-1,1]){const l=Pe(new Us(.045,.13,4,10),"#ee8f78",{grain:24},.004);l.rotation.set(Math.PI/2,0,.25*c+.3),l.scale.z=.3,l.position.set(.42+c*.07,.03,.22+c*.02),t.add(l);const u=new ft(new Sn(.04,.008,6,12,Math.PI),se("#fbf3e6"));u.position.copy(l.position),u.position.y+=.012,u.position.z-=.03,u.rotation.y=.25*c+.3,t.add(u)}const a=new Kt;a.position.set(.1,.03,-.15),a.rotation.y=-.4;for(const c of[-1,1]){const l=Pe(new Ze(.14,.012,.2),"#7fb0bf",{grain:22},.004);l.position.set(c*.068,.025,0),l.rotation.z=c*.38,a.add(l)}return t.add(a),t}function Pa(){const i=new Kt;i.name="castle";const t={grain:40,grainAmt:.3,tint:"#b98a8a",rim:.15},e="#efc58d",n=Pe(new Ie(.3,.36,.16,20),e,t,.005);n.position.y=.08,i.add(n);const s=(p,M,x,v)=>{const I=Pe(new Ie(x*.9,x,v,14),e,t,.005);I.position.set(p,v/2,M),i.add(I);const A=Pe(new Vs(x*1.05,x*1.3,14),"#f3d09c",t,.005);A.position.set(p,v+x*.62,M),i.add(A);for(let w=0;w<6;w++){const R=w/6*Math.PI*2,S=new ft(new Ze(x*.3,x*.3,x*.3),se(e,t));S.position.set(p+Math.cos(R)*x*.82,v+x*.08,M+Math.sin(R)*x*.82),S.castShadow=!0,i.add(S)}};s(0,0,.13,.42),s(-.27,.12,.085,.27),s(.27,.1,.085,.25),s(.02,.3,.07,.2);const r=new ft(new kn(.045,12,0,Math.PI),new Ue({color:"#b98c62"}));r.position.set(0,.03,.372),i.add(r);const o=Pe(new Ie(.006,.006,.22,6),"#c99662",{},0);o.position.set(0,.42+.17+.11,0),i.add(o);const a=new ke(.13,.08,6,1);a.translate(.065,0,0);const c=new ft(a,se("#ee8f78",{side:De,grain:20}));c.position.set(0,.42+.17+.17,0),c.castShadow=!0,i.add(c);const l=Pe(new Ie(.105,.08,.16,18,1,!0),"#74b9c4",{grain:22,side:De});l.position.set(.55,.08,.28),i.add(l);const u=new ft(new kn(.098,16),se(e,t));u.rotation.x=-Math.PI/2,u.position.set(.55,.14,.28),i.add(u);const h=new ft(new Sn(.105,.007,6,18,Math.PI),se("#fbf3e6"));h.position.set(.55,.16,.28),h.rotation.x=-.5,i.add(h);const f=new Kt;f.position.set(.36,.02,.52),f.rotation.set(0,.9,0);const d=Pe(new Ie(.012,.012,.22,8),"#f2c35f",{},.004);d.rotation.z=Math.PI/2,f.add(d);const g=Pe(new Ze(.1,.012,.075),"#f2c35f",{},.004);g.position.x=.15,f.add(g),i.add(f);const _=a.attributes.position,m=Float32Array.from(_.array);return i.userData.update=p=>{for(let M=0;M<_.count;M++){const x=m[M*3];_.setZ(M,Math.sin(x*40-p*5)*.012*(x/.13))}_.needsUpdate=!0},i}function Sx(){const i=document.createElement("canvas");i.width=256,i.height=64;const t=i.getContext("2d");["#ee8f78","#fbf3e6","#74b9c4","#fbf3e6","#f2c35f","#fbf3e6"].forEach((s,r)=>{t.fillStyle=s,t.fillRect(r*256/6,0,256/6+1,64)});const e=new Jn(i);e.colorSpace=Ce;const n=new ft(new me(.2,28,18),se("#ffffff",{map:e,grain:8,rim:.3,form:1}));return n.castShadow=!0,nn(n,cl,.006,12),n.rotation.set(.5,.4,.3),n.name="ball",n}function bx(){const i=new Kt;return i.name="rocks",[[0,0,.32,.62],[.42,.12,.2,.6],[-.36,.2,.17,.55],[.15,.36,.12,.5],[-.62,-.05,.1,.6]].forEach(([t,e,n,s],r)=>{const o=new Fo(n,1),a=o.attributes.position;for(let l=0;l<a.count;l++){const u=1+.16*Math.sin(a.getX(l)*23+r)*Math.cos(a.getZ(l)*19+a.getY(l)*13);a.setXYZ(l,a.getX(l)*u,a.getY(l)*u,a.getZ(l)*u)}o.computeVertexNormals();const c=Pe(o,r%2?"#a99aa6":"#b9a79f",{grain:16,grainAmt:.3,tint:"#7d6f9c",rim:.35,form:1},.008);c.scale.y=s,c.position.set(t,n*s*.55,e),c.rotation.y=r*1.3,i.add(c)}),i}function ju(i="#f08f6f"){const t=new Ns,e=5;for(let o=0;o<e*2;o++){const a=o/(e*2)*Math.PI*2,c=o%2?.045:.13,l=Math.cos(a)*c,u=Math.sin(a)*c;o===0?t.moveTo(l,u):t.lineTo(l,u)}t.closePath();const n=new sl(t,{depth:.025,bevelEnabled:!0,bevelThickness:.015,bevelSize:.018,bevelSegments:3,curveSegments:4}),s=Pe(n,i,{grain:50,grainAmt:.3,rim:.4},.005);s.rotation.x=-Math.PI/2,s.name="starfish";const r=new Kt;return r.add(s),r}function fo(i="#f2a9a0"){const t=new Kt;t.name="shell";const e=new me(.15,36,14,0,Math.PI*2,0,Math.PI/2),n=e.attributes.position;for(let r=0;r<n.count;r++){const o=n.getX(r),a=n.getZ(r),c=Math.hypot(o,a)||1,l=Math.atan2(a,o),u=1+.11*Math.cos(l*11)*Math.min(1,c/.1);n.setX(r,o*u),n.setZ(r,a*u)}e.computeVertexNormals();const s=Pe(e,i,{grain:28,grainAmt:.25,tint:"#b07ab0",rim:.35,line:"#a4645a"});return s.scale.set(1,.55,.9),t.add(s),t.rotation.set(.12,.5,-.1),t}function Ia(i="#f6dcc4"){const t=[];for(let s=0;s<=14;s++){const r=s/14;t.push(new rt(.075*Math.sin(Math.PI*Math.pow(r,.75))*(1+.12*Math.sin(r*30)),r*.24))}const e=Pe(new Li(t,20),i,{grain:30,grainAmt:.25,tint:"#b07ab0",rim:.4,line:"#a4645a"},.005);e.rotation.set(Math.PI/2-.15,0,.4),e.position.y=.06;const n=new Kt;return n.add(e),n.name="conch",n}function Qu(i=16,t=.7){const e=new Kt;e.name="grass";const n=[],s=["#9db77a","#b7c486","#86a76f","#c9cf93"];for(let r=0;r<i;r++){const o=t*(.55+en()*.6),a=new ke(.035,o,1,5);a.translate(0,o/2,0);const c=a.attributes.position;for(let d=0;d<c.count;d++){const g=c.getY(d)/o;c.setX(d,c.getX(d)*(1-g*.92)),c.setZ(d,g*g*.22*o)}a.computeVertexNormals();const l=new ft(a,se(s[r%4],{grain:20,grainAmt:.2,side:De,rim:.45,tint:"#6f8a9c"}));l.castShadow=!0;const u=new Kt,h=en()*Math.PI*2,f=en()*.16;u.position.set(Math.cos(h)*f,0,Math.sin(h)*f),u.rotation.y=en()*Math.PI*2,u.rotation.x=(en()-.3)*.5,u.add(l),e.add(u),n.push([u,u.rotation.x,en()*6])}for(let r=0;r<3;r++){const o=new ft(new me(.028,8,6),se(r%2?"#f6b3c2":"#fbe9a6",{rim:.4}));o.position.set((en()-.5)*.3,t*(.45+en()*.3),(en()-.5)*.3),e.add(o)}return e.userData.update=r=>n.forEach(([o,a,c])=>{o.rotation.x=a+Math.sin(r*1.3+c)*.07+Math.sin(r*.37+c*2)*.05}),e}function wx(){var u,h;const i=new Kt;i.name="sign";const t=Pe(new Ie(.025,.03,.9,8),"#b98a5e",{grain:12,grainAmt:.2});t.position.set(0,.45,-.045),t.rotation.z=-.05,i.add(t);const e=document.createElement("canvas");e.width=512,e.height=192;const n=e.getContext("2d");n.fillStyle="#e7c49a",n.fillRect(0,0,512,192);for(let f=0;f<40;f++){n.strokeStyle=`rgba(140,96,64,${.05+en()*.1})`,n.lineWidth=1+en()*2,n.beginPath();const d=en()*192;n.moveTo(0,d),n.bezierCurveTo(170,d+en()*12-6,340,d+en()*12-6,512,d+en()*8-4),n.stroke()}const s=n.getImageData(0,0,512,192),r='"Nanum Pen Script", "Gaegu", cursive',o=()=>{n.putImageData(s,0,0),n.save(),n.translate(256,104),n.rotate(-.035),n.textAlign="center",n.textBaseline="middle",n.font=`150px ${r}`,n.globalAlpha=.35,n.fillStyle="#fff3e0",n.fillText("파도서재",2,3),n.globalAlpha=1,n.lineJoin="round",n.lineWidth=3,n.strokeStyle="#5a3424",n.fillStyle="#5a3424",n.fillText("파도서재",0,0),n.strokeText("파도서재",0,0),n.restore()};o();const a=new Jn(e);a.colorSpace=Ce,a.anisotropy=4,(h=(u=document.fonts)==null?void 0:u.load)==null||h.call(u,`150px ${r}`,"파도서재").then(()=>{o(),a.needsUpdate=!0}).catch(()=>{});const c=new ft(new Ze(.62,.23,.03),[se("#d4ad82"),se("#d4ad82"),se("#d4ad82"),se("#d4ad82"),se("#ffffff",{map:a,grain:8,grainAmt:.1}),se("#d4ad82")]);c.castShadow=!0,c.position.y=.78,c.rotation.z=.04,i.add(c);const l=new ft(new Ze(.64,.25,.02),new Ue({color:cl}));return l.position.set(0,.78,-.012),l.rotation.z=.04,i.add(l),i}function Ex(i=.045,t="#b3a092"){const e=Pe(new me(i,12,8),t,{grain:30,grainAmt:.2},0);return e.scale.set(1.2,.55,.9),e.position.y=i*.2,e}const Tx="#6a4a44",th=(i,t,e={},n=0)=>{const s=new ft(i,se(t,{grain:16,grainAmt:.12,rim:.35,...e}));return s.castShadow=!0,n&&nn(s,e.line||Tx,n,18),s};function Ax(i=.285){const t=new Kt,e="#fbf3e6",n="#7fc8c0",s=th(new Sn(i,.02,8,28,Math.PI),e);t.add(s);for(const r of[-1,1]){const o=th(new Ie(i*.32,i*.32,.07,20),n,{},.006);o.rotation.z=Math.PI/2,o.position.set(r*(i+.01),-.01,0),t.add(o)}return t}const sr=[[.266,.07],[.258,.15],[.232,.23],[.18,.3],[.1,.35],[0,.37]],$i="#7c573f";function Xi(i){if(i<=sr[0][1])return sr[0][0];for(let t=1;t<sr.length;t++){const[e,n]=sr[t],[s,r]=sr[t-1];if(i<=n){const o=(i-r)/(n-r);return s+(e-s)*o}}return 0}function uf(i,t,e=.03,n=18){const s=[];for(let r=0;r<=n;r++){const o=r/n,a=i+(.37-i)*o,c=Math.max(0,Xi(a)+t*(1-o*o*.4));s.push(new rt(r===n?0:c,a+e*Math.pow(o,3)))}return new Li(s,40)}function ll(i,t=256,e=256,n=[1,1]){const s=document.createElement("canvas");s.width=t,s.height=e,i(s.getContext("2d"),t,e);const r=new Jn(s);return r.colorSpace=Ce,r.wrapS=r.wrapT=fr,r.repeat.set(...n),r.anisotropy=4,r}const ul=i=>()=>(i=i*16807%2147483647)/2147483647;function eh(i,t,e){return ll((n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);const o=16,a=s/o,c=ul(3);for(let l=0;l<o;l++){n.fillStyle=t,n.fillRect(l*a,0,a*.22,r),n.fillStyle=e,n.fillRect(l*a+a*.45,0,a*.22,r);for(let u=0;u<22;u++)n.fillStyle="rgba(0,0,0,.07)",n.beginPath(),n.ellipse(l*a+a*.5,u*r/22+4,a*.32,r/44,0,0,6.3),n.fill()}for(let l=0;l<900;l++)n.fillStyle=c()<.5?"rgba(255,255,255,.08)":"rgba(0,0,0,.08)",n.fillRect(c()*s,c()*r,1.5,1.5)},256,256,[4,1])}function Rx(){const i=new Kt;i.name="beanie";const t=new ft(uf(.2,.045,.05),se("#ffffff",{map:eh("#d96a5c","rgba(110,30,30,.35)","rgba(255,200,180,.25)"),grain:10,tint:"#9a6a9a",rim:.25,side:De}));t.castShadow=!0,nn(t,$i,.006,16),i.add(t);const e=.195,n=.26,s=[];for(let u=0;u<=8;u++){const h=u/8,f=e+(n-e)*h;s.push(new rt(Xi(f)+.058+Math.sin(h*Math.PI)*.014,f))}const r=new ft(new Li(s,40),se("#ffffff",{map:eh("#f3e6cf","rgba(120,90,60,.3)","rgba(255,255,255,.35)"),grain:10,tint:"#9a86c4",rim:.2,side:De}));r.castShadow=!0,nn(r,$i,.006,16),i.add(r);const o=new Fo(.068,3),a=o.attributes.position,c=ul(8);for(let u=0;u<a.count;u++){const h=new L().fromBufferAttribute(a,u);h.multiplyScalar(1+(c()-.5)*.18),a.setXYZ(u,h.x,h.y,h.z)}o.computeVertexNormals();const l=new ft(o,se("#f3e6cf",{grain:40,grainAmt:.3,tint:"#9a86c4",rim:.3}));return l.position.set(0,.46,.02),l.scale.setScalar(1.25),l.castShadow=!0,nn(l,$i,.005,12),i.add(l),i.rotation.x=.06,i.scale.setScalar(1.08),i.scale.z=.98,i}function Cx(){const i=new Kt;i.name="sunhat";const t=ll((l,u,h)=>{l.fillStyle="#ead29a",l.fillRect(0,0,u,h);const f=ul(5);for(let d=0;d<h;d+=6)l.fillStyle=d%12?"rgba(160,110,50,.18)":"rgba(255,245,215,.35)",l.fillRect(0,d,u,3);for(let d=0;d<1200;d++)l.fillStyle=f()<.5?"rgba(130,90,40,.15)":"rgba(255,250,230,.25)",l.fillRect(f()*u,f()*h,3,1)},256,256,[6,3]),e=se("#ffffff",{map:t,grain:10,tint:"#a08ac8",rim:.25,side:De}),n=new ft(uf(.19,.024,.02),e);n.castShadow=!0,nn(n,$i,.006,16),i.add(n);const s=new Oo(Xi(.19)+.02,Xi(.19)+.15,48,4),r=s.attributes.position;for(let l=0;l<r.count;l++){const u=r.getX(l),h=r.getY(l),f=Math.hypot(u,h),d=(f-Xi(.19)-.02)/.13,g=Math.atan2(h,u);r.setXYZ(l,u,.19-d*d*.06+Math.sin(g*5)*.006*d,h)}s.computeVertexNormals();const o=new ft(s,e);o.castShadow=!0,nn(o,$i,.005,16),i.add(o);const a=[new rt(Xi(.2)+.027,.195),new rt(Xi(.24)+.027,.24)],c=new ft(new Li(a,40),se("#6fa8b8",{grain:20,side:De}));return i.add(c),i.rotation.x=.1,i.scale.z=.9,i}function hf(i=new Date){const t=new URLSearchParams(location.search).get("season");if(t==="winter")return!0;if(t==="summer")return!1;const e=i.getMonth()+1;return e>=11||e<=2}function Px(){return hf()?Rx():Cx()}function Ix(){const i=new Kt;i.name="scarf";const t=ll((a,c,l)=>{a.fillStyle="#f1e4c8",a.fillRect(0,0,c,l);for(let u=0;u<6;u++)a.fillStyle=u%2?"#5f8fb8":"#e3a24f",a.fillRect(0,u*l/6+l/24,c,l/12);for(let u=0;u<64;u++)a.fillStyle="rgba(0,0,0,.08)",a.fillRect(u*c/64,0,c/128,l)},256,256,[6,1]),e=se("#ffffff",{map:t,grain:12,tint:"#9a86c4",rim:.25,side:De}),n=(a,c,l,u)=>{const h=new ft(new Sn(c,l,12,40),e);return h.rotation.x=Math.PI/2+u,h.position.y=a,h.scale.set(1,1,1),h.castShadow=!0,nn(h,$i,.006,14),i.add(h),h};n(.12,.3,.05,.08),n(.185,.285,.045,-.06);const s=new Ze(.11,.24,.035,2,8,1),r=s.attributes.position;for(let a=0;a<r.count;a++){const c=r.getY(a),l=(.12-c)/.24;r.setZ(a,r.getZ(a)-l*l*.05),r.setX(a,r.getX(a)*(1+l*.15))}s.computeVertexNormals();const o=new ft(s,e);o.position.set(.17,.01,-.24),o.rotation.set(.15,.55,.12),o.castShadow=!0,nn(o,$i,.005,14),i.add(o);for(let a=0;a<5;a++){const c=new ft(new Ie(.006,.004,.04,5),se("#e3a24f"));c.position.set(-.044+a*.022,-.14,0),o.add(c)}return i.scale.z=.9,i}const Lx="#7c573f",ai="#fbf2e2",Dx="#efc39a",fn=(i,t,e={},n=.006)=>{const s=new ft(i,se(t,{grain:14,grainAmt:.14,tint:"#b39ac4",rim:.4,form:.6,...e}));return s.castShadow=!0,n&&nn(s,Lx,n,16),s},La=new Ue({color:"#3a2a24"});new Ue({color:"#ffffff"});function Ux(){const i=new Kt;i.name="puppy";const t=new Kt;i.add(t);const e=fn(new me(.17,28,20),ai);e.scale.set(1,1.08,.95),e.position.y=.17,t.add(e);const n=fn(new me(.12,20,14),"#fffaf0",{},0);n.scale.set(1,1.1,.5),n.position.set(0,.15,.1),t.add(n);for(const O of[-1,1]){const V=fn(new me(.085,18,12),ai);V.scale.set(.8,.7,1.15),V.position.set(O*.13,.07,0),t.add(V);const k=fn(new me(.045,14,10),ai);k.scale.set(1,.6,1.4),k.position.set(O*.14,.025,.08),t.add(k);const W=fn(new Us(.038,.1,6,12),ai);W.position.set(O*.06,.08,.12),t.add(W);const D=fn(new me(.044,14,10),ai);D.scale.set(1,.65,1.25),D.position.set(O*.06,.025,.14),t.add(D)}const s=new Kt;s.position.set(0,.12,-.15),t.add(s);const r=fn(new Sn(.05,.03,10,18,Math.PI*1.5),ai);r.rotation.set(0,Math.PI/2,.4),r.position.set(0,.05,-.03),s.add(r);const o=new Kt;o.position.set(0,.37,.02),t.add(o);const a=fn(new me(.175,30,22),ai);a.scale.set(1.18,.92,1),o.add(a);for(const O of[-1,1]){const V=fn(new me(.085,16,12),ai,{},0);V.position.set(O*.09,-.065,.07),o.add(V);const k=new ft(new kn(.03,16),new Ue({color:"#f4a4a0",transparent:!0,opacity:.75}));k.scale.y=.7,k.position.set(O*.122,-.06,.128),k.rotation.y=O*.6,o.add(k);const W=new ft(new me(.0135,12,10),La);W.scale.set(1,1.1,.5),W.position.set(O*.083,-.012,.142),W.rotation.y=O*.5,W.name=O<0?"eyeL":"eyeR",o.add(W);const D=new ft(new Sn(.012,.0028,6,10,Math.PI),La);D.rotation.z=Math.PI,D.position.set(O*.012,-.072,.176),o.add(D)}const c=fn(new me(.05,18,12),"#fffaf0",{},0);c.scale.set(1.3,.75,.75),c.position.set(0,-.06,.135),o.add(c);const l=new ft(new me(.014,12,10),La);l.scale.set(1.35,.85,.8),l.position.set(0,-.045,.172),o.add(l);const u=new ft(new me(.012,10,8),new Ue({color:"#f08c8c"}));u.scale.set(1,1.3,.5),u.position.set(.008,-.088,.17),o.add(u);const h=[-1,1].map(O=>{const V=new Kt;V.position.set(O*.13,.07,0),o.add(V);const k=fn(new me(.07,18,12),Dx);return k.scale.set(.62,1.25,.4),k.position.set(O*.025,-.07,0),k.rotation.z=O*.25,V.add(k),V.rotation.z=O*.15,{pivot:V,s:O,base:O<0?.15:.32}}),f=fn(new Vs(.025,.06,10),ai,{},.004);f.position.set(.01,.155,.03),f.rotation.z=-.5,o.add(f);const d=hf(),g=fn(new Sn(.125,.032,10,28),d?"#d9584c":"#7fc0d2");g.rotation.x=Math.PI/2-.15,g.scale.set(1,1,.9),g.position.set(0,.27,0),t.add(g);const _=fn(new Ze(.06,.12,.022),d?"#d9584c":"#7fc0d2",{},.004);_.position.set(.06,.2,.12),_.rotation.set(.2,0,.25),t.add(_),i.traverse(O=>{O.isMesh&&(O.castShadow=!0)});let m=0,p=null,M=0,x=0,v=4,I=0,A=0,w=9,R=0,S=0,y=2.5;const C=[o.getObjectByName("eyeL"),o.getObjectByName("eyeR")];i.userData.poke=()=>{m=1,x=3,A=(Math.random()<.5?-1:1)*.3,v=1.6},i.userData.lookAtSeal=O=>{S=O?1:0,w=O?6:0};const U={x:0,z:0,yaw:0,set:!1};i.userData.runTo=(O,V)=>{U.set||(U.x=i.position.x,U.z=i.position.z,U.yaw=i.rotation.y,U.set=!0),p={phase:"go",tx:O,tz:V,wait:0},x=2};function N(O,V,k,W){const D=O-i.position.x,J=V-i.position.z,Q=Math.hypot(D,J);let wt=Math.atan2(D,J)-i.rotation.y;if(wt=Math.atan2(Math.sin(wt),Math.cos(wt)),i.rotation.y+=wt*Math.min(1,k*12),Q<=W)return!0;const It=1.9*k;return i.position.x+=D/Q*Math.min(It,Q-W),i.position.z+=J/Q*Math.min(It,Q-W),M+=k*11,!1}return i.userData.update=(O,V)=>{if(p){if(p.phase==="go"&&N(p.tx,p.tz,V,.22))p.phase="sniff",p.wait=1.6;else if(p.phase==="sniff"&&(p.wait-=V)<0)p.phase="back";else if(p.phase==="back"&&N(U.x,U.z,V,.01))p.phase="turn";else if(p.phase==="turn"){let K=U.yaw-i.rotation.y;K=Math.atan2(Math.sin(K),Math.cos(K)),i.rotation.y+=K*Math.min(1,V*6),Math.abs(K)<.02&&(p=null)}}const k=p&&(p.phase==="go"||p.phase==="back"),W=Math.sin(O*2.2)*.012;t.scale.set(1+W*.5,1+W,1+W*.5),m=Math.max(0,m-V*2.2);const D=m>0?Math.sin(Math.PI*(1-m)):0;t.position.y=D*.13+(k?Math.abs(Math.sin(M))*.06:0),t.rotation.x=k?.18+Math.sin(M*2)*.05:0,(k||p&&p.phase==="sniff")&&(x=Math.max(x,1.5)),x=Math.max(0,x-V),s.rotation.y=Math.sin(O*(7+x*4))*(.35+x*.18),(v-=V)<0&&(v=4+Math.random()*5,A=Math.random()<.5?(Math.random()-.5)*.5:0),(w-=V)<0&&(w=6+Math.random()*8,S=Math.random()<.45?1:0),I+=(A-I)*Math.min(1,V*4),R+=(S-R)*Math.min(1,V*2.5);const J=p&&p.phase==="sniff"?1:0;o.rotation.set(-.05+Math.sin(O*.9)*.03-D*.2+J*(.35+Math.sin(O*14)*.05),R*-.65*(p?0:1),I+.12);for(const K of h)K.pivot.rotation.z=K.s*(K.base+Math.max(0,Math.sin(O*1.3+K.s))*.06+D*.5)-I*.4;(y-=V)<0&&(y=2.5+Math.random()*4);const Q=y<.12?.15:1;for(const K of C)K.scale.y=Q},i}const Qn=[{id:"pen",label:"손글씨 펜",css:'"Nanum Pen Script", "Gaegu", "Segoe Script", cursive',k:1.12},{id:"gaegu",label:"또박 손글씨",css:'"Gaegu", "Nanum Pen Script", cursive',k:1}];async function Nx(){for(const i of["woff2","otf","ttf"])try{const t=new FontFace("SandCustom",`url(./fonts/custom.${i})`);return await t.load(),document.fonts.add(t),Qn.push({id:"custom",label:"내 서체",css:'"SandCustom", "Nanum Pen Script", cursive',k:1}),!0}catch{}return!1}const Fx=3,ff=i=>()=>(i=i*16807%2147483647)/2147483647;async function hl(i,t){try{await document.fonts.load(`48px ${i.css}`,t||"가")}catch{}}function Ao(i,t,e="#000",n=768,s=256){const r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d"),a=String(i).split(`
`).slice(0,2).map(u=>u.slice(0,14));if(!a.join(""))return r;const c=ff(a.join("|").length*131+17),l=Math.min(s/a.length*.82,n*.92/Math.max(...a.map(u=>u.length),3)/.92)*t.k;return o.textBaseline="middle",o.textAlign="center",o.fillStyle=e,o.strokeStyle=e,o.lineJoin="round",o.lineWidth=l*.012,o.font=`${l}px ${t.css}`,a.forEach((u,h)=>{const f=o.measureText("가").width*.86,d=[...u].reduce((m,p)=>m+(/\s/.test(p)?f*.5:/[ -~]/.test(p)?f*.62:f),0);let g=n/2-d/2;const _=s/a.length*(h+.5);for(const m of u){const p=/\s/.test(m)?f*.5:/[ -~]/.test(m)?f*.62:f;if(!/\s/.test(m)){o.save(),o.translate(g+p/2,_+(c()-.5)*l*.14),o.rotate((c()-.5)*.22-.03);const M=.93+c()*.14;o.scale(M,M),o.fillText(m,0,0),o.strokeText(m,0,0),o.restore()}g+=p}}),r}function nh(i){var e,n;if(i.length<3)return i;const t=[i[0]];for(let s=0;s<i.length-1;s++){const r=i[s],o=i[s+1],a=(e=r[2])!=null?e:1,c=(n=o[2])!=null?n:1;t.push([r[0]*.75+o[0]*.25,r[1]*.75+o[1]*.25,a*.75+c*.25],[r[0]*.25+o[0]*.75,r[1]*.25+o[1]*.75,a*.25+c*.75])}return t.push(i[i.length-1]),t}function df(i,t="#000",e=768,n=256){var a,c,l;const s=document.createElement("canvas");s.width=e,s.height=n;const r=s.getContext("2d");r.strokeStyle=t,r.fillStyle=t,r.lineCap="round",r.lineJoin="round";const o=n*.058;for(const u of i){if(!u.length)continue;if(u.length===1){r.beginPath(),r.arc(u[0][0]*e,u[0][1]*n,o*.5*((a=u[0][2])!=null?a:1.1),0,6.3),r.fill();continue}const h=nh(nh(u)),f=h.length;for(let d=1;d<f;d++){const g=h[d-1],_=h[d],m=Math.min(1,.45+.55*Math.min(d,f-d)/Math.min(6,f/2));r.lineWidth=o*(((c=g[2])!=null?c:1)+((l=_[2])!=null?l:1))/2*m,r.beginPath(),r.moveTo(g[0]*e,g[1]*n),r.lineTo(_[0]*e,_[1]*n),r.stroke()}}return s}const Da=new Map;function ih(i,t){const e=i+"x"+t;if(Da.has(e))return Da.get(e);const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d"),r=ff(77),o=s.createLinearGradient(0,0,i*.3,t);o.addColorStop(0,"#f1d3a4"),o.addColorStop(.55,"#e9c48f"),o.addColorStop(1,"#ddb27c"),s.fillStyle=o,s.fillRect(0,0,i,t);for(let c=0;c<26;c++){const l=r()*i,u=r()*t,h=30+r()*110,f=s.createRadialGradient(l,u,0,l,u,h),d=r()<.5;f.addColorStop(0,d?"rgba(170,118,70,.13)":"rgba(255,240,212,.16)"),f.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=f,s.fillRect(l-h,u-h,h*2,h*2)}for(let c=0;c<15;c++){const l=(c+r()*.6)/15*t*1.25-t*.12,u=3+r()*4,h=r()*6.3,f=.012+r()*.008;for(const[d,g]of[[0,"rgba(160,108,62,.14)"],[2.2,"rgba(255,244,222,.22)"]]){s.beginPath();for(let _=-10;_<=i+10;_+=8){const m=l+d+Math.sin(_*f+h)*u+_*.06;_<0?s.moveTo(_,m):s.lineTo(_,m)}s.strokeStyle=g,s.lineWidth=2.4,s.stroke()}}const a=["rgba(255,247,230,.55)","rgba(140,95,60,.35)","rgba(205,140,80,.35)","rgba(90,70,60,.3)","rgba(255,255,255,.5)"];for(let c=0;c<i*t/55;c++){s.fillStyle=a[r()*a.length|0];const l=r()<.92?1+r()*1.2:1.8+r()*1.8;s.fillRect(r()*i,r()*t,l,l*(.7+r()*.6))}for(let c=0;c<7;c++)s.save(),s.translate(r()*i,r()*t),s.rotate(r()*6.3),s.fillStyle=r()<.5?"rgba(255,236,226,.8)":"rgba(240,214,190,.85)",s.beginPath(),s.ellipse(0,0,2.5+r()*3,1.5+r()*2,0,0,6.3),s.fill(),s.fillStyle="rgba(150,100,70,.35)",s.fillRect(-1,1,3,1),s.restore();return Da.set(e,n),n}const Ua={};function pf(i,t,e){const n=Ua[i]||(Ua[i]=document.createElement("canvas"));(n.width!==t||n.height!==e)&&(n.width=t,n.height=e);const s=n.getContext("2d");return s.clearRect(0,0,t,e),s.globalCompositeOperation="source-over",[n,s]}function rr(i,t,e,n,s){const[r,o]=pf(i,n,s);return o.drawImage(t,0,0,n,s),o.globalCompositeOperation="source-in",o.fillStyle=e,o.fillRect(0,0,n,s),r}function mf(i,t,e,n){i.drawImage(ih(t,e),0,0);const s=t/720;i.save(),i.filter=`blur(${3*s}px)`,i.globalAlpha=.7,i.drawImage(rr("a",n,"#fff2d6",t,e),0,5*s),i.drawImage(rr("a",n,"#fbe6c0",t,e),0,-5*s),i.restore(),i.save(),i.filter=`blur(${1.2*s}px)`,i.drawImage(rr("a",n,"#fff0d4",t,e),0,2.5*s),i.drawImage(rr("a",n,"#6b4029",t,e),0,-2.5*s),i.restore(),i.save(),i.filter=`blur(${.8*s}px)`,i.drawImage(rr("a",n,"#b07f54",t,e),0,0),i.restore();const[r,o]=pf("b",t,e);o.drawImage(n,0,0,t,e),o.globalCompositeOperation="source-in",o.drawImage(ih(t,e),0,0),i.save(),i.globalAlpha=.5,i.globalCompositeOperation="multiply",i.drawImage(r,0,0),i.restore()}function Ox(i,t=1,e=1024,n=342){if(i.strokes){const a=i.strokes.reduce((h,f)=>h+Math.max(1,f.length),0);let c=Math.ceil(a*t);const l=[];for(const h of i.strokes){if(c<=0)break;l.push(h.slice(0,Math.max(1,c))),c-=Math.max(1,h.length)}return df(l,"#000",e,n)}const s=Qn.find(a=>a.id===i.font)||Qn[0],r=Ao(i.text||"",s,"#000",e,n),o=document.createElement("canvas");o.width=e,o.height=n;{const a=o.getContext("2d");for(const[c,l]of[[0,0],[3,0],[-3,0],[0,3],[0,-3],[2,2],[-2,-2],[2,-2],[-2,2]])a.drawImage(r,c,l)}if(t<1){const a=o.getContext("2d");a.globalCompositeOperation="destination-in";const c=a.createLinearGradient(0,0,e,0),l=t*1.08*e;c.addColorStop(0,"#000"),c.addColorStop(Math.max(0,Math.min(1,(l-40)/e)),"#000"),c.addColorStop(Math.max(0,Math.min(1,l/e)),"rgba(0,0,0,0)"),a.fillStyle=c,a.fillRect(0,0,e,n)}return o}const pn=(i,t={})=>new Ue({color:i,side:De,...t}),Mr=i=>{const t=new Fe;return t.setAttribute("position",new gn(new Float32Array(i.flat()),3)),t.computeVertexNormals(),t};function sh(i=7,t="#b06c74",e="#fff4e4"){const n=new Kt,s=new Kt;n.add(s);const r=new Ns;r.moveTo(-.5,.16),r.lineTo(.55,.16),r.lineTo(.4,0),r.lineTo(-.38,0),r.closePath(),s.add(new ft(new xr(r),pn(t)));const o=new ft(new ke(.02,.95),pn("#8c6a66"));o.position.set(.02,.62,0),s.add(o),s.add(new ft(Mr([[.05,.22,0],[.05,1.08,0],[.5,.22,0]]),pn(e))),s.add(new ft(Mr([[-.02,.24,0],[-.02,.92,0],[-.36,.24,0]]),pn("#ffd9c2")));const a=new ft(new ke(.9,.22),pn("#fff0e0",{transparent:!0,opacity:.28}));return a.position.y=-.1,s.add(a),s.scale.setScalar(i),n.userData.update=c=>{s.rotation.z=Math.sin(c*.9+i)*.035,s.position.y=Math.sin(c*1.1+i)*.05*i*.2},n}function Bx(){const i=new Kt,t=new Ns;t.moveTo(-30,0),t.bezierCurveTo(-22,9,-10,13,0,11),t.bezierCurveTo(10,15,24,8,34,0),t.closePath(),i.add(new ft(new xr(t,16),pn("#b99ab8")));const e=new Ns;e.moveTo(10,0),e.bezierCurveTo(22,6,40,7,58,0),e.closePath();const n=new ft(new xr(e,12),pn("#cfb4c6"));n.position.z=-2,i.add(n);const s=new ft(new ke(2.6,14),pn("#fff1e6"));s.position.set(-6,18,.5),i.add(s);const r=new ft(new ke(2.6,3),pn("#e58a7c"));r.position.set(-6,17,.6),i.add(r);const o=new ft(Mr([[-8,25,.6],[-4,25,.6],[-6,28.5,.6]]),pn("#c9706a"));i.add(o);const a=new ft(new kn(3.2,20),pn("#fff3b8",{transparent:!0,opacity:.8,blending:As,depthWrite:!1}));return a.position.set(-6,24,.8),i.add(a),i.userData.update=c=>{const l=.5+.5*Math.sin(c*1.3);a.material.opacity=.25+.6*l*l,a.scale.setScalar(.7+.8*l)},i}function Na({cx:i=0,cy:t=6,cz:e=-30,rx:n=14,rz:s=6,speed:r=.22,ph:o=0,size:a=1}={}){const c=new Kt,l=pn("#fffaf2"),u=pn("#8b7a88"),h=new ft(new me(.16,8,6),l);h.scale.set(.7,.6,2),c.add(h);const f=new ft(new Vs(.035,.14,6),pn("#f0a45c"));f.rotation.x=-Math.PI/2,f.position.z=-.38,c.add(f);const d=[-1,1].map(g=>{const _=new Kt,m=new Kt;_.add(m),m.scale.x=g,m.add(new ft(Mr([[0,0,-.16],[0,0,.14],[.62,0,-.1],[0,0,.14],[.62,0,.06],[.62,0,-.1]]),l));const p=new Kt;return p.position.x=.62,m.add(p),p.add(new ft(Mr([[0,0,-.1],[0,0,.06],[.55,0,.1]]),u)),c.add(_),{piv:_,outer:p,s:g}});return c.scale.setScalar(a),c.userData.update=g=>{const _=g*r+o,m=i+Math.sin(_)*n,p=e+Math.cos(_)*s,M=Math.cos(_)*n,x=-Math.sin(_)*s;c.position.set(m,t+Math.sin(g*.5+o)*.5,p),c.rotation.set(0,Math.atan2(-M,-x),0),c.rotateZ(-.25);const v=Math.sin(g*.33+o*2)>.55?.25:1,I=Math.sin(g*5.2+o*3)*.55*v+.12;for(const A of d)A.piv.rotation.z=I*A.s,A.outer.rotation.z=I*.7-.15},c}function zx(i="#ea7458",t=.6,e=0){const n=new Kt,s=new Kt;n.add(s);const r=se(i,{grain:26,grainAmt:.22,rim:.4,tint:"#b0527a"}),o=new ft(new me(.1,16,10),r);o.scale.set(1.25,.55,.9),o.position.y=.075,o.castShadow=!0,nn(o,"#9a4a48",.006,20),s.add(o);const a=[-1,1].map(g=>{const _=new Kt;_.position.set(g*.045,.11,-.06);const m=new ft(new Ie(.008,.008,.06,6),r);m.position.y=.03,_.add(m);const p=new ft(new me(.02,8,6),new Ue({color:"#3a2a34"}));p.position.y=.065,_.add(p);const M=new ft(new me(.007,6,4),new Ue({color:"#ffffff"}));return M.position.set(.006,.073,-.014),_.add(M),s.add(_),_}),c=[-1,1].map(g=>{const _=new Kt;_.position.set(g*.11,.07,-.05);const m=new ft(new Us(.014,.06,3,6),r);m.rotation.z=g*-1.1,m.position.set(g*.03,.015,0),_.add(m);const p=new ft(new me(.036,10,8),r);return p.scale.set(1.25,.8,.7),p.position.set(g*.075,.04,-.01),p.castShadow=!0,nn(p,"#9a4a48",.005,20),_.add(p),s.add(_),{p:_,s:g}}),l=[];for(const g of[-1,1])for(let _=0;_<3;_++){const m=new Kt;m.position.set(g*.1,.06,-.02+_*.04);const p=new ft(new Us(.008,.09,3,5),r);p.rotation.z=g*.95,p.position.set(g*.045,-.025,0),m.add(p),s.add(m),l.push({p:m,s:g,i:_})}let u=0,h=1,f=1+e,d=0;return n.userData.update=(g,_)=>{const m=Math.min(_,.1);f>0?(f-=m,f<=0&&(h=Math.abs(u)>t*.6?-Math.sign(u):Math.sin(g*13.7+e)>0?1:-1)):(u+=h*.16*m,(Math.abs(u)>t||Math.sin(g*.9+e*5)>.985)&&(u=ze.clamp(u,-t,t),f=1.2+2.2*Math.abs(Math.sin(g*3.1)),d=1));const p=f<=0?1:0;s.position.set(u,p*Math.abs(Math.sin(g*14))*.006,0),s.rotation.z=p*Math.sin(g*14)*.05;for(const x of l)x.p.rotation.z=p*Math.sin(g*16+x.i*2.1+(x.s>0?0:1.5))*.35;d=Math.max(0,d-m*.45);const M=Math.sin(Math.PI*Math.min(1,d*1.4))*.9;for(const x of c)x.p.rotation.z=x.s*(M*.9+Math.sin(g*2+x.s)*.06),x.p.position.y=.07+M*.03;for(const x of a)x.rotation.x=Math.sin(g*1.7+e)*.12},n}function kx(i=46){const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d"),n=e.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,240,200,0.5)"),n.addColorStop(1,"rgba(255,230,180,0)"),e.fillStyle=n,e.fillRect(0,0,32,32);const s=new Float32Array(i*3),r=[];for(let c=0;c<i;c++)r.push([Math.random()*7-3.5,.25+Math.random()*2.3,-3.2+Math.random()*5.6,Math.random()*6.28,.4+Math.random()]);const o=new Fe;o.setAttribute("position",new gn(s,3));const a=new K_(o,new Wh({map:new Jn(t),size:.07,transparent:!0,opacity:.6,depthWrite:!1,blending:As,color:"#ffe6b0",sizeAttenuation:!0}));return a.frustumCulled=!1,a.userData.update=c=>{for(let l=0;l<i;l++){const u=r[l];s[l*3]=u[0]+Math.sin(c*.21*u[4]+u[3])*.5+c*.05*u[4]%1*.6,s[l*3+1]=u[1]+Math.sin(c*.33*u[4]+u[3]*2)*.22,s[l*3+2]=u[2]+Math.cos(c*.17*u[4]+u[3])*.4}o.attributes.position.needsUpdate=!0,a.material.opacity=.5+.12*Math.sin(c*.8)},a}const Ro={low:{label:"낮음",pixelRatio:1,shadow:1024,fps:30,map:512,msaa:0,finish:!1},mid:{label:"보통",pixelRatio:1.5,shadow:1024,fps:30,map:2048,msaa:0,finish:!0},high:{label:"높음",pixelRatio:2,shadow:2048,fps:60,map:2048,msaa:4,finish:!0}};function Vx(){const i=new URLSearchParams(location.search).get("quality");if(Ro[i])return i;try{const e=sessionStorage.getItem("s5q");if(Ro[e])return e}catch{}return(matchMedia==null?void 0:matchMedia("(pointer: coarse)").matches)||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")?"mid":"high"}const Gx=`
uniform sampler2D tScene; uniform vec2 uRes, uSun; uniform float uDpr, uPaper, uDof, uFocus, uDusk, uHor, uSkyK;
${wr}
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
}`,bi=new L(0,0,-.8);function Hx(i,t=null){var Sl,bl;const e=Vx(),n=Ro[e],s=new Y_({canvas:i,antialias:!1,powerPreference:"default"});s.setPixelRatio(Math.min(devicePixelRatio||1,n.pixelRatio)),s.shadowMap.enabled=!0,s.shadowMap.type=uh,s.outputColorSpace=Ce,s.info.autoReset=!1;const r=s.getContext(),o=s.capabilities.isWebGL2&&(s.extensions.has("EXT_color_buffer_half_float")||s.extensions.has("EXT_color_buffer_float")),a=new wo,c=new dn(40,1,.05,2e3);c.rotation.order="YXZ";const l=new dn(40,1,.05,2e3),u=dx(s,{mapW:n.map});a.add(u.sky,u.ground);const h=cx(Number(new URLSearchParams(location.search).get("seed"))||20261115),f=new Wv("#efd2dc","#d9b08e",.9);a.add(f);const d=new Wu("#ffd6a8",1.35);d.position.set(1.6,4,-7.8),d.target.position.set(0,0,-.3),a.add(d.target),d.castShadow=!0,d.shadow.mapSize.set(n.shadow*2,n.shadow*2),Object.assign(d.shadow.camera,{left:-10,right:10,top:7,bottom:-7,near:1,far:22}),d.shadow.bias=-8e-4,d.shadow.normalBias=.02,d.shadow.radius=5,a.add(d);const g=new Wu("#fff0dc",1.3);g.position.set(-2.4,3.6,3.2),a.add(g);const _=new ft(new ke(24,16),new Iv({color:"#5e2f4c",opacity:.58}));_.rotation.x=-Math.PI/2,_.position.set(0,.002,1),_.receiveShadow=!0,a.add(_);const m=new L(bi.x+.05,0,bi.z+.1),p=-2.25,M=Ca(!0);M.scale.setScalar(1.12),M.position.set(m.x+.08,0,m.z+.08),M.rotation.y=.1,a.add(M);const x=new ft(new ke(1.3,1.1),new Ue({map:ax(),transparent:!0,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.position.set(m.x,.03,m.z+.05),a.add(x);const v=vx();a.add(v.group);let I=null;const A=yx(v.group,{onCue:(G,q)=>I==null?void 0:I(G,q)});v.group.rotation.order="YXZ",v.group.position.set(m.x,.03,m.z),v.group.rotation.set(0,p,0);const w=Px();v.bones.head.add(w);const R=Ux();R.position.set(m.x+.68,.03,m.z+.26),R.rotation.y=-.45,R.scale.setScalar(1.05),a.add(R);const S=Ax(.265);S.position.set(0,.13,0),S.visible=!1,v.bones.head.add(S);const y=v.extras,C=Ix();C.visible=!1,v.bones.spine.add(C);const U={cap:!0,blanket:!1,headset:!1,glasses:!1},N=()=>{w.visible=U.cap,S.visible=U.headset,y.blanket.visible=!1,C.visible=U.blanket,y.glasses.visible=U.glasses};N();let O=2.2;const V={group:v.group,head:v.bones.head,front:-1,update(G,q){A.update(q),O-=q,O<-.13&&(O=2.4+Math.random()*3.4+(Math.random()<.2?-2.1:0));const lt=A.state.eyes>.5||O<0,Ut=A.state.eyes<=.5||A.state.sleepy;for(const ht of y.lids)ht.visible=lt,ht.rotation.z=Ut?Math.PI:0,ht.position.y=Ut?.178:.162;for(const ht of y.eyes)ht.visible=!lt;y.mug.visible=!!A.state.show.mug,y.leaf.visible=!!A.state.show.leaf}},k=[V],W=0;function D(G){return U[G]=!U[G],N(),U[G]}const J=G=>A.play(G),Q=[],K=[],wt=(G,q,lt,Ut,ht,bt=1,Ht=null)=>(Ht!==null&&(G.rotation.y=Ht),a.add(G),Q.push({o:G,dxL:q,syL:lt,dxP:Ut,syP:ht,sP:bt,s0:G.scale.x,y0:G.position.y}),G.userData.update&&K.push(G),G),It=Ku();It.scale.setScalar(.86),a.add(It),wt(Mx(),255,812,150,828,.85);const $=wt(Pa(),545,880,230,960,1,-.3);wt(wx(),505,798,222,786,.55,-.25),wt(bx(),-600,776,-250,760,.35),wt(ju("#ef8466"),-470,935,-232,940,.85,.4);const at=[[-345,875,-190,870],[-330,992,-165,1e3],[250,975,160,1003],[395,890,205,885]],Et=["#f4a99c","#f6e3cf","#e5c3ea","#f7c9a8"],ct=at.map(([G,q,lt,Ut],ht)=>wt(ht===2?Ia(Et[ht]):fo(Et[ht]),G,q,lt,Ut,.9,.6+ht*1.7));ct.forEach((G,q)=>{G.scale.setScalar(.9),Q[Q.length-ct.length+q].s0=.9});const zt=[[-560,870],[470,820],[-120,1e3],[600,960],[130,905]].map(([G,q],lt)=>wt(Ex(.032+lt%3*.01,lt%2?"#a99486":"#bba59e"),G,q,G*.32,q+lt%3*8,1,lt));wt(Qu(16,.75),-735,1006,-232,1012,.7),wt(Qu(12,.6),748,1010,236,1016,.7,1.2),wt(zx("#e8694c",.45,0),415,820,-150,806,.6);const qt=(()=>{const G=document.createElement("canvas");G.width=G.height=64;const q=G.getContext("2d");q.translate(32,32);const lt=q.createRadialGradient(0,0,0,0,0,30);lt.addColorStop(0,"rgba(255,255,255,1)"),lt.addColorStop(.25,"rgba(255,246,214,0.55)"),lt.addColorStop(1,"rgba(255,230,180,0)"),q.fillStyle=lt,q.fillRect(-32,-32,64,64),q.fillStyle="rgba(255,255,255,0.95)";for(const ht of[0,Math.PI/2])q.save(),q.rotate(ht),q.beginPath(),q.moveTo(-30,0),q.quadraticCurveTo(0,2.5,30,0),q.quadraticCurveTo(0,-2.5,-30,0),q.fill(),q.restore();const Ut=new Jn(G);return Ut.colorSpace=Ce,Ut})(),$t=ct.map(()=>{const G=new Tu(new Tc({map:qt,transparent:!0,depthWrite:!1,blending:As,opacity:0}));return G.scale.setScalar(.2),a.add(G),G}),re=ct.map(()=>0),et=sh(7.5);et.position.set(-22,0,-125),a.add(et),K.push(et);const pt=sh(9,"#8f7aa6","#ffe9d6");pt.position.set(30,0,-300),a.add(pt),K.push(pt);const P=Bx();P.position.set(-58,0,-560),P.scale.setScalar(1.35),a.add(P),K.push(P);for(const G of[Na({cx:-6,cy:7,cz:-34,rx:15,rz:6,speed:.2,ph:0}),Na({cx:6,cy:8.5,cz:-44,rx:18,rz:8,speed:-.16,ph:2.2,size:1.1}),Na({cx:-2,cy:4.2,cz:-17,rx:7,rz:3,speed:.27,ph:4.1,size:.8})])a.add(G),K.push(G);const Ft=kx(n.finish?46:24);a.add(Ft),K.push(Ft);const ot=new Kt;ot.visible=!1,a.add(ot);const yt=(G,q,lt,Ut=0,ht=1)=>(G.position.x=q,G.position.z=lt,G.rotation.y=Ut,G.scale.setScalar(ht),ot.add(G),G.userData.update&&K.push(G),G),_t=(G,q="rgba(255,248,236,0.92)",lt="#5a4034")=>{const Ut=document.createElement("canvas");Ut.width=512,Ut.height=112;const ht=Ut.getContext("2d");ht.font='600 44px "Gaegu", "Nanum Pen Script", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';const bt=Math.min(480,ht.measureText(G).width+56);ht.fillStyle=q,ht.beginPath(),ht.roundRect(256-bt/2,14,bt,84,42),ht.fill(),ht.fillStyle=lt,ht.textAlign="center",ht.textBaseline="middle",ht.fillText(G,256,58,440);const Ht=new Jn(Ut);return Ht.colorSpace=Ce,Ht},Wt=[],Rt=[{x:m.x,z:m.z,mine:!0}],T=[],b=[["바다의 뚜껑","파도 소리 들으면서 읽으니까 문장이 더 천천히 들어온다"],["작은 것들의 신","오늘은 스무 쪽. 내일 또 올게"],["어린 왕자","길들인다는 건 시간을 쓰는 일"],["달러구트 꿈 백화점","졸리지만 한 장만 더"],["모모","시간은 삶이고 삶은 마음속에 있다"],["긴긴밤","노을이 예뻐서 책을 잠깐 덮었다"]],H=(G,q,lt,Ut=.6,ht)=>{const bt=new Tu(new Tc({map:_t(G,ht),transparent:!0,depthTest:!1,depthWrite:!1}));return bt.scale.set(3.7,.81,1),bt.position.set(q,Ut,lt),bt.renderOrder=50,bt.userData.text=G,bt.userData.bg=ht,ot.add(bt),Wt.push(bt),bt},j=[],st=(G,q,lt,Ut,ht=2.6)=>{const bt=new Ue({transparent:!0,depthWrite:!1,opacity:.85}),Ht=new ft(new ke(ht,ht/3),bt);Ht.rotation.set(-Math.PI/2,0,Ut),Ht.position.set(q,.006,lt),Ht.renderOrder=2,ot.add(Ht);const oe=()=>{var ue;const le=document.createElement("canvas");le.width=768,le.height=256;const ae=le.getContext("2d");ae.globalAlpha=.7,ae.drawImage(Ao(G,Qn[0],"#fff0d8"),2,3),ae.globalAlpha=1,ae.drawImage(Ao(G,Qn[0],"#8a5644"),0,0),(ue=bt.map)==null||ue.dispose(),bt.map=new Jn(le),bt.map.colorSpace=Ce,bt.needsUpdate=!0};oe(),j.push(oe)},tt=new Ue({color:"#7a4a3c",transparent:!0,opacity:.3,depthWrite:!1}),Nt=new kn(.07,10),xt=(G,q,lt,Ut)=>{const ht=Math.round(Math.hypot(lt-G,Ut-q)/.32),bt=Math.atan2(lt-G,Ut-q);for(let Ht=0;Ht<=ht;Ht++){const oe=Ht/ht,le=Ht%2?1:-1,ae=new ft(Nt,tt);ae.rotation.set(-Math.PI/2,0,bt),ae.scale.set(.7,1.25,1),ae.position.set(G+(lt-G)*oe+Math.cos(bt)*.09*le+Math.sin(oe*9)*.05,.005,q+(Ut-q)*oe-Math.sin(bt)*.09*le),ae.renderOrder=2,ot.add(ae)}};[[-5.4,1.2,"#6fa8c9",.3,"소미 · 읽는 중"],[4.9,.4,"#f2c14e",-.4,"바다곰 · 읽는 중"],[-2.9,4,"#b98ad0",.8,null],[3.2,3.6,"#7cc4a0",-.2,"달빛 · 쉬는 중"],[8.2,2.6,"#ee8f78",.5,null],[-8.4,3.4,"#f0a8b8",-.6,null]].forEach(([G,q,lt,Ut,ht],bt)=>{const Ht=yt(Ku(lt,"#fbeeda"),G,q,Ut,.86);Ht.rotation.z=.08*(bt%2?1:-1),yt(Ca(),G+.9,q+.6,Ut+.4,.9);const oe=yt(bt%2?Ia():fo(Et[bt%6]),G-.5,q+1,bt,1);T.push({o:oe,who:ht?ht.split(" ")[0]:"누군가",title:b[bt][0],text:b[bt][1]}),Rt.push({x:G+.3,z:q+.4}),bt%3===0&&yt(Sx(),G+1.7,q-.3,0,.9),ht&&H(ht,G,q-1.5,.6)}),yt(Pa(),-6.6,4.4,.5,.9),yt(Pa(),6.3,4.6,-.8,.75),yt(Ca(),5.6,-.4+2.6,-.3,.9),yt(fo("#f7c9b6"),6.5,2.9,1,.9),yt(Ia(),5,3,2,.8),Rt.push({x:5.7,z:2.6}),H("10분 전에 집에 갔어요",5.8,1.35,.6,"rgba(255,236,214,0.94)"),xt(6.2,2.9,10.5,5.6),xt(-5,1.9,-3.4,-.9),xt(3,3.2,1.6,5.8),xt(-8,4,-10.5,2),st("오늘도 수고했어",-3.3,1.9,.12),st("소미 다녀감",2.6,1.5,-.1,2),st("또 올게 바다야",-6.6,2.5,.2,2.4),st("한 장만 더",7.2,1,-.15,2),[[-1.8,2.6],[1.4,4.3],[-4.2,3.1],[6.9,3.9],[-7.3,1.5],[9.2,4.4],[.6,5.4],[-9.4,4.9]].forEach(([G,q],lt)=>yt(lt%3?fo(Et[lt%6]):ju(lt%2?"#f6b56a":"#e88aa0"),G,q,lt*1.3,.85));const Tt=new ft(new Oo(1.25,1.36,48),new Ue({color:"#fff3c8",transparent:!0,opacity:.8,depthWrite:!1,blending:As}));Tt.rotation.x=-Math.PI/2,Tt.position.set(bi.x,.012,bi.z+.1),ot.add(Tt),H("내 자리",bi.x,bi.z-1.7,.6,"rgba(255,255,255,0.96)"),(bl=(Sl=document.fonts)==null?void 0:Sl.ready)==null||bl.then(()=>setTimeout(()=>{j.forEach(G=>G()),Wt.forEach(G=>{G.material.map.dispose(),G.material.map=_t(G.userData.text,G.userData.bg)})},300));let Xt="seat",ut=null;const Pt={k:0,b:0},Vt={x:m.x,z:m.z,mine:!0};function Zt(G,q=null){Xt=G,G==="focus"&&Object.assign(Vt,q||Rt[0]),G!=="bird"&&(Gt.tx=0,Gt.ty=0),G!=="focus"&&(Lt.on=!1),ut==null||ut(G,Vt)}const vt={pos:new L,pitch:0,fov:40,init:!1},Yt={pos:new L,pitch:0,fov:40},Lt={on:!1,onShell:null,onOther:null,noted:new Set,hover:-1},ve=new Kn(1,1,{type:o?Fs:zn,samples:n.msaa});o||(ve.texture.colorSpace=Ce);const F={tScene:{value:ve.texture},uRes:{value:new rt},uDpr:{value:1},uPaper:{value:n.finish?1:0},uSun:{value:new rt(.7,.75)},uDof:{value:1},uFocus:{value:.35},uDusk:{value:0},uHor:{value:.6},uSkyK:{value:1}},Mt=new wo,Z=new ft(new ke(2,2),new yn({uniforms:F,depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Gx}));Z.frustumCulled=!1,Mt.add(Z);const nt=new Do;let mt=1,dt=1,Ct=null,jt=0;const fe={pos:new L,pitch:0,fov:40,f:1,d:5},Gt={on:!1,x:0,y:0,tx:0,ty:0,k:0},cn=new wi(new L(0,1,0),0),wn=new qu,Xs=new rt,di=new L,ln=new L;function Qi(G,q){const lt=Ct.tx+G*Ct.scale,Ut=Ct.ty+q*Ct.scale;return Xs.set(lt/mt*2-1,-(Ut/dt)*2+1),wn.setFromCamera(Xs,l),wn.ray.intersectPlane(cn,di)?di.clone():new L}function Vn(G){return ln.copy(G).project(c),[(ln.x+1)/2*mt,(1-ln.y)/2*dt]}function Tr(G){return ln.copy(G).project(l),[((ln.x+1)/2*mt-Ct.tx)/Ct.scale,((1-ln.y)/2*dt-Ct.ty)/Ct.scale]}function Di(){mt=i.clientWidth||innerWidth,dt=i.clientHeight||innerHeight,s.setSize(mt,dt,!1);const G=s.getPixelRatio();ve.setSize(Math.round(mt*G),Math.round(dt*G)),F.uRes.value.set(Math.round(mt*G),Math.round(dt*G)),F.uDpr.value=G,Ct=u.layout(mt,dt,G);const q=Ct.scale,lt=dt/2,Ut=Ct.portrait?178:205,ht=.3,bt=Ct.horizonFrac*dt;F.uHor.value=1-Ct.horizonFrac;const Ht=Math.min(805,Ct.stageBottom-.2*(Ct.stageBottom-Ct.stageTop)),oe=Ct.ty+Ht*q,le=lt-bt,ae=(oe-lt)/le,ue=(-(ae+1)+Math.sqrt((ae+1)**2+4*ae*ht*ht))/(2*ae*ht),Ke=le/ue,hn=Ke/(Ut*q),Ys=ht*hn;fe.pitch=Math.atan(ue),fe.f=Ke,fe.d=hn,fe.fov=ze.radToDeg(2*Math.atan(dt/2/Ke)),fe.pos.set(0,Ys,hn+bi.z-.36),l.fov=fe.fov,l.aspect=mt/dt,l.position.copy(fe.pos),l.rotation.order="YXZ",l.rotation.set(-fe.pitch,0,0),l.updateProjectionMatrix(),l.updateMatrixWorld(),l.matrixWorldInverse.copy(l.matrixWorld).invert(),u.setRef(new ce().multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse)),Ct.feetStage=Ht,Ct.camY=Ys,Ct.camDist=hn;const Pf=mt/q/2,If=Ct.stageBottom,Lf=tn.focusX,$s=ze.clamp((Pf-237)/360,0,1),Dr=ze.lerp;for(const Ln of Q){const El=Qi(Lf+Dr(Ln.dxP,Ln.dxL,$s),Math.min(Dr(Ln.syP,Ln.syL,$s),If+4));Ln.o.position.set(El.x,Ln.y0,El.z),Ln.o.scale.setScalar(Ln.s0*Dr(Ln.sP,1,$s)),Ln.o.userData.s0=Ln.o.scale.x}It.position.set(Dr(-.5,-.92,$s),0,bi.z-.42),$.visible=$s>.45;const wl=[Ct.tx+1e3*q,Ct.ty+232*q];F.uSun.value.set(wl[0]/mt,1-wl[1]/dt),Ui(!0)}let qs=0;function Ui(G){const q=Gt.k,lt=Gt.x*q,Ut=Gt.y*q,ht=(1-q)*(Ct.portrait?.035:.07),bt=lt*.95+Math.sin(jt*.21)*ht,Ht=(Ut<0?-Ut*1:-Ut*.45)+.25*q+(Math.sin(jt*.13+1)*.5+.5)*ht,oe=Math.atan2(bt,fe.d)*.18,le=1+.08*q,ae=mt/dt>1?1:0,ue=ze.radToDeg(2*Math.atan(Math.tan(ze.degToRad(fe.fov)/2)/le));if(Xt==="bird"?(Yt.pos.set(Gt.x*(ae?4.5:6.5),ae?13.5:15,3.4+Gt.y*3.2),Yt.pitch=-1.32,Yt.fov=ae?52:64):Xt==="focus"?(Yt.pos.set(Vt.x,ae?4.3:5.6,Vt.z+(ae?3.3:3.6)),Yt.pitch=-.93,Yt.fov=ae?44:54):(Yt.pos.set(fe.pos.x+bt,fe.pos.y-.1*Math.max(0,Ht),fe.pos.z-Ht),Yt.pitch=-fe.pitch,Yt.fov=ue),!vt.init||G===!0)vt.pos.copy(Yt.pos),vt.pitch=Yt.pitch,vt.fov=Yt.fov,vt.init=!0;else{const hn=Math.min(1,qs*3.2);vt.pos.lerp(Yt.pos,hn),vt.pitch+=(Yt.pitch-vt.pitch)*hn,vt.fov+=(Yt.fov-vt.fov)*hn}c.fov=vt.fov,c.aspect=mt/dt,c.position.copy(vt.pos);const Ke=ze.clamp((-vt.pitch-fe.pitch)/.5,0,1);c.rotation.set(vt.pitch,oe*(1-Ke),0),c.updateProjectionMatrix(),c.updateMatrixWorld(),Pt.k=Ke,Pt.b=ze.clamp((-vt.pitch-1)/.3,0,1),u.setSky(-(fe.f*Math.tan(oe))/Ct.scale,le)}addEventListener("resize",Di),Di();let Gn=null,Ni=null;const Ar=new qu,Rr=new rt;i.addEventListener("pointerup",G=>{var ht,bt;if(!Ni||Math.hypot(G.clientX-Ni.x,G.clientY-Ni.y)>8)return;const q=i.getBoundingClientRect();Rr.set((G.clientX-q.left)/q.width*2-1,-((G.clientY-q.top)/q.height)*2+1),Ar.setFromCamera(Rr,c);const lt=G.clientX-q.left,Ut=G.clientY-q.top;if(Xt==="bird"){if(!Ar.ray.intersectPlane(cn,di))return;let Ht=null,oe=2.6;for(const le of Rt){const ae=Math.hypot(di.x-le.x,di.z-le.z);ae<oe&&(oe=ae,Ht=le)}Ht&&Zt("focus",Ht);return}if(Xt==="seat"){const Ht=Cr(lt,Ut);if(Ht>=0){re[Ht]=1,R.userData.runTo(ct[Ht].position.x,ct[Ht].position.z),(ht=Lt.onShell)==null||ht.call(Lt,Ht);return}qe.copy(R.position).setY(.3);const[oe,le]=Vn(qe);Math.hypot(oe-lt,le-Ut)<Math.max(45,Math.min(mt,dt)*.07)&&(R.userData.poke(),(bt=Lt.onPuppy)==null||bt.call(Lt));return}if(Xt==="focus"){let Ht=null,oe=56;ct.forEach((le,ae)=>{const[ue,Ke]=Vn(le.position),hn=Math.hypot(ue-lt,Ke-Ut);hn<oe&&(oe=hn,Ht=()=>{var Ys;return(Ys=Lt.onShell)==null?void 0:Ys.call(Lt,ae)})}),T.forEach(le=>{const[ae,ue]=Vn(le.o.position),Ke=Math.hypot(ae-lt,ue-Ut);Ke<oe&&(oe=Ke,Ht=()=>{var hn;return(hn=Lt.onOther)==null?void 0:hn.call(Lt,le)})}),Ht==null||Ht()}});function Cr(G,q){let lt=-1,Ut=Math.max(40,Math.min(mt,dt)*.075);return ct.forEach((ht,bt)=>{const[Ht,oe]=Vn(ht.position),le=Math.hypot(Ht-G,oe-(q+6));le<Ut&&(Ut=le,lt=bt)}),lt}i.addEventListener("pointermove",G=>{if(G.pointerType!=="mouse"||Xt!=="seat"){Lt.hover=-1;return}const q=i.getBoundingClientRect();Lt.hover=Cr(G.clientX-q.left,G.clientY-q.top),i.style.cursor=Lt.hover>=0?"pointer":""}),i.addEventListener("pointerdown",G=>{var q;Ni={x:G.clientX,y:G.clientY},Xt==="bird"&&(Gn={x:G.clientX,y:G.clientY,tx:Gt.tx,ty:Gt.ty},(q=i.setPointerCapture)==null||q.call(i,G.pointerId))}),i.addEventListener("pointermove",G=>{if(!Gn)return;const q=Math.min(mt,dt)*.9;Gt.tx=ze.clamp(Gn.tx-(G.clientX-Gn.x)/q*2,-1,1),Gt.ty=ze.clamp(Gn.ty+(G.clientY-Gn.y)/q*2,-1,1)});const E=()=>{Gn=null};i.addEventListener("pointerup",E),i.addEventListener("pointercancel",E);function B(G){Gt.on=G,G||(Gt.tx=0,Gt.ty=0)}let X=null;const Y=1.6;function z(){const G=mt/Ct.scale/2,q=ze.clamp((G-237)/360,0,1),lt=ze.lerp(300,400,q);return{cx:tn.focusX+ze.lerp(-5,-40,q),cy:ze.lerp(950,946,q),w:lt,h:lt/3*Y}}const gt=(G,q)=>Ox(G,q,768,256*Y|0);function At(G,{instant:q=!1,delay:lt=.7}={}){X&&X.drawn>0&&(X.erasing={mask:gt(X.spec,1),box:X.box,left:4});const Ut=z(),ht=X==null?void 0:X.erasing;return X={spec:G,box:Ut,p:q?1:0,wait:q?jt<1?1-jt:0:lt,dur:G.strokes?2:1.7,drawn:0,erasing:ht,instant:q},X}function Ot(G){const q=X;if(!(!q||!He)){if(q.erasing&&q.erasing.left>0){const lt=q.erasing;u.stamp(lt.mask,lt.box.cx,lt.box.cy,lt.box.w,lt.box.h,.3,!0),lt.left--;return}if(q.wait>0){q.wait-=G;return}q.drawn>=1||(q.p=q.instant?1:Math.min(1,q.p+G/q.dur),(q.p-q.drawn>.035||q.p>=1)&&(u.stamp(gt(q.spec,q.p),q.box.cx,q.box.cy,q.box.w,q.box.h,1),q.drawn=q.p))}}const Dt=new Kn(256,256);Dt.texture.colorSpace=Ce;const Jt=new dn(24,1,.1,30),Qt=new Uint8Array(256*256*4),Bt=new te("#cfe7ea"),ne=new L;function Me(G){const q=k[W],lt=q.group.rotation.y,Ut=q.front,ht=Math.sin(lt)*Ut,bt=Math.cos(lt)*Ut,Ht=q===V;q.head.getWorldPosition(ne),Jt.position.set(ne.x+ht*2.6+bt*.2,ne.y+(Ht?.22:.02),ne.z+bt*2.6-ht*.2),Jt.lookAt(ne.x,ne.y+(Ht?.16:-.06),ne.z);const oe=a.children.map(ue=>ue.visible);a.children.forEach(ue=>{!ue.isLight&&ue!==k[W].group&&(ue.visible=!1)});const le=a.background;a.background=Bt,s.setRenderTarget(Dt),s.render(a,Jt),s.setRenderTarget(null),a.background=le,a.children.forEach((ue,Ke)=>{ue.visible=oe[Ke]}),s.readRenderTargetPixels(Dt,0,0,256,256,Qt);const ae=G.createImageData(256,256);for(let ue=0;ue<256;ue++)ae.data.set(Qt.subarray((255-ue)*1024,(256-ue)*1024),ue*1024);G.putImageData(ae,0,0)}function be(G="파도서재"){const q=document.createElement("canvas");q.width=512,q.height=128;const lt=q.getContext("2d");lt.clearRect(0,0,512,128),lt.font='700 84px "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif',lt.textAlign="center",lt.textBaseline="middle",lt.lineJoin="round",lt.lineWidth=9,lt.strokeStyle="rgba(0,0,0,0.55)",lt.strokeText(G,256,68),lt.fillStyle="#000",lt.fillText(G,256,68);const Ut=mt/Ct.scale/2,ht=Ut<420,bt=ht?Ut*.55:360,Ht=ht?tn.focusX-Ut+bt/2+14:tn.focusX-330,oe=735;return u.stamp(q,Ht,oe,bt,bt/4,1),{cx:Ht,cy:oe,w:bt,h:bt/4}}let He=!1,de=14,kt=0,Je=1,pe=1;const qe=new L;function pi(){const G=document.createElement("canvas");G.width=512,G.height=256;const q=G.getContext("2d");q.fillStyle="rgba(0,0,0,0.85)";for(let Ht=0;Ht<15;Ht++){const oe=Ht/14,le=480-oe*400-Math.sin(oe*3)*30,ae=236-oe*190+Math.sin(oe*5)*6,ue=Ht%2?1:-1;q.save(),q.translate(le+ue*5,ae+ue*6),q.rotate(-.6-oe*.3+ue*.25),q.beginPath(),q.ellipse(0,0,9,5,0,0,6.3),q.fill(),q.restore()}const lt=mt/Ct.scale/2,Ut=ze.clamp((lt-237)/360,0,1);u.stamp(G,tn.focusX+ze.lerp(120,390,Ut),915,ze.lerp(260,520,Ut),ze.lerp(180,230,Ut),.8);const ht=document.createElement("canvas");ht.width=ht.height=128;const bt=ht.getContext("2d");bt.strokeStyle="rgba(0,0,0,0.95)",bt.lineWidth=9,bt.lineCap="round",bt.lineJoin="round",bt.beginPath(),bt.moveTo(64,108),bt.bezierCurveTo(8,66,20,18,64,44),bt.bezierCurveTo(108,18,120,66,64,108),bt.stroke(),u.stamp(ht,tn.focusX+ze.lerp(-120,-250,Ut),792,84,52,1)}const Te=Number(new URLSearchParams(location.search).get("timescale"))||1,mi=Number(new URLSearchParams(location.search).get("dusk")),_e={start:performance.now(),minutes:25,forced:Number.isFinite(mi)&&new URLSearchParams(location.search).has("dusk")?mi:null,v:0},Ye={sun:new te("#ffd6a8"),sunD:new te("#ff9a5c"),fill:new te("#fff0dc"),fillD:new te("#e9b2b8"),sky:new te("#efd2dc"),skyD:new te("#d9a0b8")},En=new L;function un(){var Ut;const G=(Ut=_e.forced)!=null?Ut:Math.min(1,(performance.now()-_e.start)/6e4/_e.minutes),q=G*G*(3-2*G);if(_e.v=q,F.uDusk.value=q,d.color.copy(Ye.sun).lerp(Ye.sunD,q),d.intensity=1.35-.25*q,g.color.copy(Ye.fill).lerp(Ye.fillD,q),g.intensity=1.3-.45*q,f.color.copy(Ye.sky).lerp(Ye.skyD,q),f.intensity=.9-.2*q,c.getWorldDirection(En),En.y=0,En.lengthSq()<1e-6){F.uHor.value=9;return}En.normalize(),qe.set(c.position.x+En.x*1500,0,c.position.z+En.z*1500);const[,lt]=Vn(qe);F.uHor.value=1-lt/dt}const Hn=G=>{_e.forced=G},In={paused:!1};let ts=performance.now(),vl=0,Go=null,Pr=0,Ho=ts,xl=0,yl=0,Wo=0,Ir=h.at(0);const Lr={calls:0,triangles:0};function Ml(G){if(requestAnimationFrame(Ml),G-vl<1e3/n.fps-2)return;const q=performance.now(),lt=In.paused?0:Math.min(.1,(G-ts)/1e3)*Te;ts=G,vl=G,jt+=lt,Gt.x+=(Gt.tx-Gt.x)*Math.min(1,lt/Te*4.5),Gt.y+=(Gt.ty-Gt.y)*Math.min(1,lt/Te*4.5),Gt.k+=((Gt.on?1:0)-Gt.k)*Math.min(1,lt/Te*3.5),qs=lt/Te,Ui(),Ir=h.at(jt),k[W].update(jt,lt),jt>de&&Xt==="seat"&&!A.current&&(de=jt+22+Math.random()*20,J(Math.random()<.8?"page":"sea"));for(const ht of K)ht.userData.update(jt,lt);if(R.userData.update(jt,lt/Te),It.userData.top.rotation.z=Math.sin(jt*.7)*.012,It.userData.top.rotation.x=Math.sin(jt*.53+1)*.01,!He&&jt>.6&&(He=!0,pi()),ot.visible=Pt.k>.03,ot.visible){for(const ht of Wt)ht.material.opacity=Pt.b;Tt.material.opacity=(.55+.3*Math.sin(jt*2.4))*Pt.b,Tt.scale.setScalar(1+.04*Math.sin(jt*2.4))}const Ut=Xt==="focus"?1:0;Je+=((Xt==="focus"&&Vt.mine?.28:1)-Je)*Math.min(1,lt/Te*3),Math.abs(Je-pe)>.005&&(pe=Je,It.userData.top.traverse(ht=>{ht.material&&!ht.userData.isOutline&&(ht.material.transparent=Je<.99,ht.material.opacity=Je)})),T.forEach((ht,bt)=>{ht.o.position.y=Ut*Math.abs(Math.sin(jt*3+bt*1.7))*.04}),F.uDof.value+=((Xt==="seat"?1:Xt==="focus"?.35:0)-F.uDof.value)*Math.min(1,lt/Te*3);{const[,ht]=Vn(qe.set(m.x,.55,m.z));F.uFocus.value=1-ht/dt}ct.forEach((ht,bt)=>{var Ke;const Ht=(Ke=ht.userData.y0)!=null?Ke:ht.userData.y0=ht.position.y;re[bt]=Math.max(0,re[bt]-lt/Te*1.6);const oe=re[bt]>0?Math.sin(Math.PI*(1-re[bt])):0;ht.position.y=Ht+oe*.12,ht.rotation.z=oe*.35;const le=(jt*.42+bt*.29)%1,ae=Math.max(0,Math.sin(Math.PI*Math.min(1,le/.22))),ue=$t[bt];ue.position.set(ht.position.x+.06,ht.position.y+.14*ht.scale.x/.9,ht.position.z),ue.material.opacity=Xt==="bird"?0:(le<.22?ae:0)*(Lt.noted.has(bt)?1:.85)+(Lt.hover===bt?.6:0),ue.scale.setScalar(.16+.12*ae+(Lt.hover===bt?.08:0)),ue.material.rotation=jt*.6+bt,ht.scale.setScalar(ht.userData.s0),Lt.hover===bt&&ht.scale.multiplyScalar(1.12)}),Ot(lt/Te),un(),t!=null&&t.ready&&(kt+=lt)>.2&&(kt=0,t.setWash(Ir.wash)),s.info.reset(),u.update(jt,lt,Ir,Te),s.setRenderTarget(ve),s.render(a,c),s.setRenderTarget(null),s.render(Mt,nt),Lr.calls=s.info.render.calls,Lr.triangles=s.info.render.triangles,r.flush(),Wo+=performance.now()-q,Pr++,Go===null&&u.ready.done&&(Go=Math.round(G)),G-Ho>=1e3&&(xl=Math.round(Pr*1e3/(G-Ho)),yl=+(Wo/Pr).toFixed(1),Pr=0,Wo=0,Ho=G)}return requestAnimationFrame(Ml),{setView:Zt,get view(){return Xt},set onView(G){ut=G},pick:Lt,writeSand:At,renderMirror:Me,toggleItem:D,worn:U,act:J,motion:A,ctl:In,set onCue(G){I=G},get sandWriting(){return X},setDusk:Hn,get dusk(){return _e.v},Q:n,qName:e,renderer:s,camera:c,refCam:l,beach:u,look:Gt,setLook:B,stampTest:be,groundFromStage:Qi,screenOf:Vn,stageOf:Tr,objects:{puppy:R,shells:ct,pebbles:zt,parasol:It,seal:v},motion:A,get layoutInfo(){return Ct},get wave(){return Ir},get simT(){return jt},stats:()=>({fps:xl,workMs:yl,calls:Lr.calls,triangles:Lr.triangles,firstFrameMs:Go,quality:e,pixelRatio:s.getPixelRatio(),size:[mt,dt],halfFloat:o,map:u.mapSize,fpsCap:n.fps})}}const Wx={waveNear:"wave-near.ogg",waveFar:"wave-far.ogg",windBirds:"wind-birds.ogg",gull:"gull.ogg",page:"page.ogg",step1:"step1.ogg",step2:"step2.ogg",step3:"step3.ogg",step4:"step4.ogg"},Xx=(()=>{try{return!!document.createElement("audio").canPlayType('audio/ogg; codecs="vorbis"')}catch{return!0}})();async function rh(i){if(i.startsWith("data:")){const e=atob(i.slice(i.indexOf(",")+1)),n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n.buffer}const t=await fetch(i);if(!t.ok)throw new Error(t.status);return t.arrayBuffer()}function qx(i="./audio/"){const t=window.AudioContext||window.webkitAudioContext;let e=null,n=!1,s=null;const r={},o={bg:.8,sfx:.8};let a=!1,c=1,l=null;const u={},h={step:0,page:0,gull:0};let f=0,d=-1;const g=w=>new Promise((R,S)=>{const y=e.decodeAudioData(w,R,S);y&&y.then&&y.then(R,S)});async function _(){return s||(s=Promise.all(Object.entries(Wx).map(async([w,R])=>{try{const S=N=>i==="./audio/"?rf("audio/"+N):i+N,y=R.replace(/\.ogg$/,".m4a"),[C,U]=Xx?[R,y]:[y,R];try{r[w]=await g(await rh(S(C)))}catch{r[w]=await g(await rh(S(U)))}}catch(S){r[w]=null,console.warn("[audio] 불러오기 실패",R,S)}})),s)}function m(w,{gain:R,pan:S=0,lp:y=0,offset:C=0}){const U=r[w];if(!U)return null;const N=e.createBufferSource();N.buffer=U,N.loop=!0;const O=e.createGain();O.gain.value=R;let V=N.connect(O);if(y){const k=e.createBiquadFilter();k.type="lowpass",k.frequency.value=y,V.connect(k),V=k}if(e.createStereoPanner){const k=e.createStereoPanner();k.pan.value=S,V.connect(k),V=k}return V.connect(u.bg),N.start(0,C%U.duration),O}const p={},M={step:180,page:400,pick:250,gull:5e3},x=w=>{const R=performance.now();return R-(p[w]||-1e9)<(M[w]||0)?!0:(p[w]=R,!1)};function v(w,{gain:R=1,rate:S=1,pan:y=0,lp:C=0,bus:U="sfx"}={}){const N=r[w];if(!e||!N||!n)return;const O=e.createBufferSource();O.buffer=N,O.playbackRate.value=S;const V=e.createGain();V.gain.value=R;let k=O.connect(V);if(C){const W=e.createBiquadFilter();W.type="lowpass",W.frequency.value=C,k.connect(W),k=W}if(e.createStereoPanner){const W=e.createStereoPanner();W.pan.value=y,k.connect(W),k=W}k.connect(u[U]),O.start()}function I(){if(!e)return;const w=e.currentTime;u.master.gain.setTargetAtTime(a?0:1,w,.08),u.bg.gain.setTargetAtTime(o.bg*c,w,.25),u.sfx.gain.setTargetAtTime(o.sfx,w,.05)}function A(){clearTimeout(f),f=setTimeout(()=>{n&&!document.hidden&&(h.gull++,v("gull",{gain:.5,rate:.95+Math.random()*.1,pan:(Math.random()-.5)*1.4,lp:2600})),A()},3e4+Math.random()*4e4)}return{unlock(){return l||(l=this._unlock().finally(()=>{l=null}))},async _unlock(){return t?(e||(e=new t,u.master=e.createGain(),u.master.connect(e.destination),u.bg=e.createGain(),u.sfx=e.createGain(),u.bg.connect(u.master),u.sfx.connect(u.master),I()),e.state!=="running"&&await e.resume(),await _(),n||(n=!0,u.near=m("waveNear",{gain:.9,pan:-.15}),u.far=m("waveFar",{gain:.5,pan:.2,offset:7}),u.wind=m("windBirds",{gain:.45}),A()),!0):!1},setWash(w){u.near&&e&&(u.near.gain.setTargetAtTime(.55+.4*w,e.currentTime,.3),u.far.gain.setTargetAtTime(.5-.12*w,e.currentTime,.3))},step(w=1){if(x("step"))return;let R;do R=1+Math.floor(Math.random()*4);while(R===d);d=R,h.step++,v("step"+R,{gain:(.8+Math.random()*.3)*(.5+.5*w),rate:.92+Math.random()*.16,pan:(Math.random()-.5)*.2,lp:w<.5?2400+w*6e3:0})},pick(){x("pick")||(h.pick=(h.pick||0)+1,v("step3",{gain:.5,rate:1.55,pan:0}))},page(){x("page")||(h.page++,v("page",{gain:1,rate:.96+Math.random()*.08}))},gull(){h.gull++,v("gull",{gain:.5,lp:2600})},setBgScale(w){c=w,I()},get ctx(){return e},get out(){return u.master},get sfxBus(){return u.sfx},get ready(){return n},setVolume(w,R){o[w]=Math.min(1,Math.max(0,R)),I()},getVolume:w=>o[w],setMuted(w){a=w,I()},get muted(){return a},diag(){var w;return{supported:!!t,state:(w=e==null?void 0:e.state)!=null?w:"none",started:n,loaded:Object.fromEntries(Object.entries(r).map(([R,S])=>[R,S?+S.duration.toFixed(1):null])),bgGain:u.bg?+u.bg.gain.value.toFixed(3):null,sfxGain:u.sfx?+u.sfx.gain.value.toFixed(3):null,vol:{...o},muted:a,played:{...h}}}}}const Fa=i=>440*Math.pow(2,(i-69)/12),Xn=[{title:"오후의 책장",bpm:72,seed:3,pent:[72,74,76,79,81],chords:[{b:36,n:[55,59,62,64]},{b:33,n:[52,55,60,64]},{b:41,n:[53,57,60,64]},{b:43,n:[55,59,62,65]}]},{title:"파도 사이",bpm:64,seed:8,pent:[74,76,78,81,83],chords:[{b:38,n:[57,61,64,66]},{b:35,n:[54,57,62,66]},{b:43,n:[59,62,66,69]},{b:45,n:[57,61,66,69]}]},{title:"노을 아래 한 장",bpm:78,seed:5,pent:[77,79,81,84,86],chords:[{b:41,n:[57,60,64,67]},{b:40,n:[55,59,62,67]},{b:38,n:[53,57,60,64]},{b:36,n:[55,59,64,67]}]}];function Yx(i){let t=null,e=null,n=null,s=null,r=0,o=!1,a=0,c=0,l=0,u=Math.random;const h=new Set,f=()=>h.forEach(w=>w({playing:o,index:a,title:Xn[a].title})),d=w=>()=>(w=w*16807%2147483647)/2147483647;let g=null;function _(){const w=e;w&&(w.gain.cancelScheduledValues(t.currentTime),w.gain.setTargetAtTime(0,t.currentTime,.08),setTimeout(()=>w.disconnect(),600)),e=t.createGain(),e.gain.value=0,e.connect(g),e.connect(n)}function m(){t=i.ctx,e=t.createGain(),e.gain.value=0;const w=t.createBiquadFilter();w.type="lowpass",w.frequency.value=3200,g=w,e.connect(w),w.connect(i.out);const R=t.sampleRate*1.8,S=t.createBuffer(2,R,t.sampleRate);for(let U=0;U<2;U++){const N=S.getChannelData(U);for(let O=0;O<R;O++)N[O]=(Math.random()*2-1)*Math.pow(1-O/R,2.6)}n=t.createConvolver(),n.buffer=S;const y=t.createGain();y.gain.value=.32,e.connect(n),n.connect(y),y.connect(w),s=t.createBuffer(1,t.sampleRate,t.sampleRate);const C=s.getChannelData(0);for(let U=0;U<C.length;U++)C[U]=Math.random()*2-1}function p(w,R,S,y){const C=t.createGain();C.gain.setValueAtTime(1e-4,w),C.gain.exponentialRampToValueAtTime(y,w+.01),C.gain.exponentialRampToValueAtTime(1e-4,w+S);const U=t.createOscillator();U.type="sine",U.frequency.value=Fa(R);const N=t.createOscillator();N.type="triangle",N.frequency.value=Fa(R)*2.003;const O=t.createGain();O.gain.value=.18,U.connect(C),N.connect(O),O.connect(C),C.connect(e),U.start(w),N.start(w),U.stop(w+S+.05),N.stop(w+S+.05)}function M(w,R,S){const y=t.createGain();y.gain.setValueAtTime(1e-4,w),y.gain.exponentialRampToValueAtTime(.2,w+.03),y.gain.exponentialRampToValueAtTime(1e-4,w+S);const C=t.createOscillator();C.type="sine",C.frequency.value=Fa(R),C.connect(y),y.connect(e),C.start(w),C.stop(w+S+.05)}function x(w,R,S=6e3,y=.05){const C=t.createBufferSource();C.buffer=s,C.playbackRate.value=.8+Math.random()*.4;const U=t.createBiquadFilter();U.type="highpass",U.frequency.value=S;const N=t.createGain();N.gain.setValueAtTime(R,w),N.gain.exponentialRampToValueAtTime(1e-4,w+y),C.connect(U),U.connect(N),N.connect(e),C.start(w,Math.random()*.8),C.stop(w+y+.02)}function v(w,R){const S=60/R.bpm,y=R.chords[l%4],C=.12*S;M(w,y.b,S*1.8),M(w+S*2.5,y.b+(l%2?7:0),S*1.3);const U=[0,2,1,3,2,1,3,2];for(let N=0;N<8;N++){const O=w+N*S*.5+(N%2?C:0);u()<.86&&p(O,y.n[U[N]],S*1.6,.05+.025*u()),N%2&&x(O,.05+.02*u())}if(u()<.7){const N=R.pent[Math.floor(u()*5)],O=w+S*(1+Math.floor(u()*3))+C;p(O,N,S*2.2,.075),u()<.5&&p(O+S*.75,R.pent[Math.floor(u()*5)],S*1.8,.06)}for(let N=0;N<4;N++)u()<.5&&x(w+u()*S*4,.05,2500,.012)}function I(){if(!o||!t)return;const w=Xn[a];for(;c<t.currentTime+1.2;)if(v(c,w),c+=60/w.bpm*4,l++,l>=36){A((a+1)%Xn.length);return}}function A(w){a=(w+Xn.length)%Xn.length,l=0,u=d(Xn[a].seed*977+Math.floor(Math.random()*1e3)),c=((t==null?void 0:t.currentTime)||0)+.15,f()}return{start(){i.ctx&&(t||m(),!o&&(o=!0,_(),A(a),e.gain.setTargetAtTime(.9,t.currentTime,.5),clearInterval(r),r=setInterval(I,250),I()))},stop(){o&&(o=!1,clearInterval(r),r=0,e&&(e.gain.cancelScheduledValues(t.currentTime),e.gain.setTargetAtTime(0,t.currentTime,.12)),f())},next(){o?(_(),e.gain.setTargetAtTime(.9,t.currentTime,.3),A(a+1)):(a=(a+1)%Xn.length,f())},prev(){o?(_(),e.gain.setTargetAtTime(.9,t.currentTime,.3),A(a-1)):(a=(a+Xn.length-1)%Xn.length,f())},onChange(w){h.add(w)},get playing(){return o},get title(){return Xn[a].title}}}const oh={video:"fS-glIMAoUM",list:""};function $x(i,t){const e=new URLSearchParams(location.search),n=e.get("yt")||oh.video,s=e.get("ytlist")||oh.list;let r=null,o=!1,a=!1,c=!1,l="유튜브 음악",u=!1;const h=new Set,f=()=>h.forEach(m=>m({playing:_.playing,title:_.title,source:d()?"youtube":"built-in"})),d=()=>o&&!a;i.onChange(()=>{d()||f()});function g(){if(!t||e.get("yt")==="off"){a=!0;return}const m=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{m==null||m();const M={autoplay:0,controls:1,playsinline:1,rel:0,modestbranding:1,loop:1};s?Object.assign(M,{listType:"playlist",list:s}):M.playlist=n,r=new window.YT.Player(t.querySelector(".yt-frame"),{width:200,height:200,videoId:s?void 0:n,playerVars:M,events:{onReady:()=>{o=!0;try{r.setVolume(70)}catch{}f(),u&&_.start()},onStateChange:x=>{var I;const v=window.YT.PlayerState;c=x.data===v.PLAYING||x.data===v.BUFFERING;try{const A=(I=r.getVideoData())==null?void 0:I.title;A&&(l=A)}catch{}x.data===v.ENDED&&!s&&(r.seekTo(0),r.playVideo()),f()},onError:()=>{a=!0,t.hidden=!0,u&&i.start(),f()}}})};const p=document.createElement("script");p.src="https://www.youtube.com/iframe_api",p.async=!0,p.onerror=()=>{a=!0,f()},document.head.appendChild(p),setTimeout(()=>{o||(a=!0,u&&!i.playing&&i.start(),f())},12e3)}const _={start(){u=!0,d()?(t.hidden=!1,i.stop(),r.playVideo(),c=!0,f()):i.start()},stop(){u=!1,d()&&(r.pauseVideo(),c=!1,f()),i.stop()},hide(){_.stop(),t.hidden=!0},next(){d()?s?r.nextVideo():r.seekTo(Math.min((r.getCurrentTime()||0)+30,(r.getDuration()||1e9)-1),!0):i.next()},prev(){d()?s?r.previousVideo():r.seekTo(Math.max(0,(r.getCurrentTime()||0)-30),!0):i.prev()},onChange(m){h.add(m)},get playing(){return d()?c:i.playing},get title(){return d()?l:i.title},get source(){return d()?"youtube":"built-in"},get single(){return!s}};return g(),_}function Zx(i){let t=null,e=null;const n=()=>i.ctx&&i.ready,s=()=>{if(!t){const l=i.ctx;t=l.createBuffer(1,l.sampleRate*2,l.sampleRate);const u=t.getChannelData(0);let h=0;for(let f=0;f<u.length;f++)h=.6*h+.4*(Math.random()*2-1),u[f]=h}return t};function r(l,u,{type:h="bandpass",f0:f=3e3,f1:d=f,q:g=.8,gain:_=.2,attack:m=.01}={}){const p=i.ctx,M=p.createBufferSource();M.buffer=s(),M.loop=!0;const x=p.createBiquadFilter();x.type=h,x.Q.value=g,x.frequency.setValueAtTime(f,l),x.frequency.exponentialRampToValueAtTime(d,l+u);const v=p.createGain();v.gain.setValueAtTime(1e-4,l),v.gain.exponentialRampToValueAtTime(_,l+m),v.gain.exponentialRampToValueAtTime(1e-4,l+u),M.connect(x),x.connect(v),v.connect(i.sfxBus),M.start(l,Math.random()),M.stop(l+u+.05)}function o(l,u,h,f=.08,d="sine"){const g=i.ctx,_=g.createOscillator(),m=g.createGain();_.type=d,_.frequency.value=u,m.gain.setValueAtTime(f,l),m.gain.exponentialRampToValueAtTime(1e-4,l+h),_.connect(m),m.connect(i.sfxBus),_.start(l),_.stop(l+h+.02)}function a(l,u,h=.06,f=7){const d=i.ctx,g=d.createOscillator(),_=d.createOscillator(),m=d.createGain(),p=d.createBiquadFilter(),M=d.createOscillator(),x=d.createGain();g.type="triangle",_.type="sine",p.type="lowpass",p.frequency.value=2200,p.Q.value=.8,M.frequency.value=f,x.gain.value=12,M.connect(x),x.connect(g.frequency),x.connect(_.frequency),g.frequency.setValueAtTime(u[0][1],l),_.frequency.setValueAtTime(u[0][1]*2,l);for(const[A,w]of u.slice(1))g.frequency.exponentialRampToValueAtTime(w,l+A),_.frequency.exponentialRampToValueAtTime(w*2,l+A);const v=l+u[u.length-1][0];m.gain.setValueAtTime(1e-4,l),m.gain.exponentialRampToValueAtTime(h,l+.04),m.gain.setTargetAtTime(h*.7,l+.08,.1),m.gain.exponentialRampToValueAtTime(1e-4,v+.05);const I=d.createGain();I.gain.value=.18,g.connect(p),_.connect(I),I.connect(p),p.connect(m),m.connect(i.sfxBus);for(const A of[g,_,M])A.start(l),A.stop(v+.1)}const c=()=>i.ctx.currentTime+.01;return{sand(l=5){if(!n())return;let u=i.ctx.currentTime+.02;for(let h=0;h<l;h++){const f=.16+Math.random()*.18;r(u,f,{f0:2600+Math.random()*900,f1:1900+Math.random()*700,q:.7,gain:.34,attack:.03}),u+=f*.85+.05}},scratchStart(){if(!n()||e)return;const l=i.ctx,u=l.createBufferSource();u.buffer=s(),u.loop=!0;const h=l.createBiquadFilter();h.type="bandpass",h.frequency.value=2400,h.Q.value=.7;const f=l.createGain();f.gain.value=1e-4,u.connect(h),h.connect(f),f.connect(i.sfxBus),u.start(),e={s:u,f:h,g:f}},scratchMove(l){if(!e)return;const u=i.ctx,h=Math.min(1,l);e.g.gain.setTargetAtTime(.06+.4*h,u.currentTime,.03),e.f.frequency.setTargetAtTime(1900+1500*h,u.currentTime,.05),clearTimeout(e.t),e.t=setTimeout(()=>e&&e.g.gain.setTargetAtTime(1e-4,i.ctx.currentTime,.05),70)},scratchStop(){if(!e)return;const{s:l,g:u}=e;clearTimeout(e.t),e=null,u.gain.setTargetAtTime(1e-4,i.ctx.currentTime,.03),l.stop(i.ctx.currentTime+.2)},sip(){if(!n())return;const l=c();r(l,.42,{f0:700,f1:2300,q:2.2,gain:.28,attack:.08}),r(l+.5,.16,{f0:500,f1:320,q:1.5,gain:.12})},ahh(){if(!n())return;const l=c();r(l,.75,{type:"lowpass",f0:1300,f1:380,q:.6,gain:.16,attack:.14}),a(l+.02,[[0,420],[.35,360]],.025,5)},clink(){if(!n())return;const l=c();o(l,1750,.09,.05),o(l+.01,2630,.06,.03),r(l,.05,{type:"lowpass",f0:900,q:.6,gain:.12})},breeze(){if(!n())return;const l=c();r(l,2.6,{f0:320,f1:900,q:.5,gain:.13,attack:1}),r(l+.6,2.2,{type:"lowpass",f0:600,f1:1400,q:.4,gain:.08,attack:.9}),setTimeout(()=>{var u;return(u=i.gull)==null?void 0:u.call(i)},1500)},stretch(){if(!n())return;const l=c();r(l,.95,{f0:500,f1:1500,q:.7,gain:.12,attack:.5}),this.cloth(),a(l+.55,[[0,520],[.35,760],[.9,700],[1.3,620]],.05,9)},plop(){if(!n())return;const l=c(),u=i.ctx,h=u.createOscillator(),f=u.createGain();h.frequency.setValueAtTime(190,l),h.frequency.exponentialRampToValueAtTime(85,l+.16),f.gain.setValueAtTime(.22,l),f.gain.exponentialRampToValueAtTime(1e-4,l+.2),h.connect(f),f.connect(i.sfxBus),h.start(l),h.stop(l+.25),r(l+.02,.5,{type:"lowpass",f0:1200,f1:400,q:.5,gain:.18,attack:.04})},snore(){if(!n())return;const l=c();for(const u of[0,1.55]){r(l+u,1.1,{type:"lowpass",f0:380,f1:180,q:1.2,gain:.2,attack:.45});const h=i.ctx,f=h.createOscillator(),d=h.createGain(),g=h.createBiquadFilter();f.type="sawtooth",f.frequency.value=62+u*6,g.type="lowpass",g.frequency.value=260,d.gain.setValueAtTime(1e-4,l+u),d.gain.exponentialRampToValueAtTime(.04,l+u+.5),d.gain.exponentialRampToValueAtTime(1e-4,l+u+1.1),f.connect(g),g.connect(d),d.connect(i.sfxBus),f.start(l+u),f.stop(l+u+1.2)}},wake(){if(!n())return;const l=c();a(l,[[0,700],[.08,1150],[.16,980]],.07,0),this.plop()},pat(){if(!n())return;const l=c();r(l,.08,{type:"lowpass",f0:1800,f1:600,q:.7,gain:.42,attack:.004}),o(l,230,.07,.08)},yip(){if(!n())return;const l=c();a(l,[[0,900],[.05,1350],[.11,1e3]],.05,0),a(l+.17,[[0,950],[.05,1400],[.1,1050]],.04,0)},coo(){if(!n())return;const l=c();a(l,[[0,640],[.12,880],[.32,760]],.055),a(l+.38,[[0,700],[.14,920]],.045)},flap(){if(!n())return;const l=c();for(let u=0;u<3;u++)r(l+u*.26,.2,{f0:700,f1:1500,q:.8,gain:.07,attack:.05})},scratch(){this.sand(9)},tick(){if(!n())return;const l=c();o(l,1250,.035,.05,"triangle"),r(l,.03,{f0:2500,q:1.2,gain:.05})},shell(){if(!n())return;const l=c();r(l,.06,{f0:3800,q:2.5,gain:.16}),o(l+.01,2900,.12,.035),o(l+.09,3700,.1,.025),r(l+.1,.05,{f0:3200,q:2.5,gain:.1}),[1760,2350,2960].forEach((u,h)=>o(l+.2+h*.06,u,.35,.018))},shellClose(){if(!n())return;const l=c();r(l,.05,{f0:2600,q:2,gain:.16}),o(l,1900,.09,.035)},done(){if(!n())return;const l=c();[1047,1319,1568,2093].forEach((u,h)=>{o(l+h*.16,u,1.4,.045),o(l+h*.16,u*2.01,.6,.012)})},cloth(){if(!n())return;const l=i.ctx.currentTime;r(l,.28,{type:"lowpass",f0:1800,f1:700,q:.5,gain:.3,attack:.06}),r(l+.2,.22,{type:"lowpass",f0:1400,f1:600,q:.5,gain:.2,attack:.05})},click(){if(!n())return;const l=i.ctx.currentTime;o(l,1300,.04,.07),o(l+.09,900,.05,.07)},chime(){if(!n())return;const l=i.ctx.currentTime;[1320,1760,2640].forEach((u,h)=>o(l+h*.07,u,.5,.035))},whoosh(){n()&&r(i.ctx.currentTime,.7,{f0:400,f1:1500,q:.6,gain:.14,attack:.3})}}}const gf=1.75;document.documentElement.style.setProperty("--max-aspect",gf);const it=i=>document.getElementById(i),Sr=new URLSearchParams(location.search);Sr.get("fill")==="1"&&document.body.classList.add("fill");const Pn=qx(),we=Hx(it("c"),Pn),xn=$x(Yx(Pn),document.getElementById("yt-box")),Be=Zx(Pn),bn=(i,t=3500)=>{it("tip").textContent=i,it("tip").hidden=!1,clearTimeout(bn.t),bn.t=setTimeout(()=>{it("tip").hidden=!0},t)};let fl=!1;async function ji(i){fl=i,i&&await Pn.unlock(),Pn.setMuted(!i),it("btn-sound").setAttribute("aria-pressed",String(i)),it("btn-sound").textContent=i?"소리 끄기":"소리 켜기"}it("btn-sound").addEventListener("click",()=>ji(!fl));addEventListener("pointerdown",i=>{!fl&&!i.target.closest("#btn-sound")&&ji(!0)},{once:!0});we.onView=(i,t)=>{document.body.classList.toggle("bird",i==="bird"),document.body.classList.toggle("focus",i==="focus"),it("btn-home").hidden=i==="seat",it("btn-view").hidden=i==="bird",Be.whoosh(),i==="bird"&&bn("끌어서 해변을 둘러보세요. 자리를 누르면 가까이 볼 수 있어요",4500),i==="focus"&&bn(t.mine?"통통 뛰는 조개를 누르면 쪽지를 남기거나 읽을 수 있어요":"이 자리의 조개를 누르면 쪽지를 읽을 수 있어요",4500)};it("btn-view").addEventListener("click",()=>we.setView("bird"));it("btn-home").addEventListener("click",()=>we.setView("seat"));const Uc={motion:it("pane-motion"),dress:it("pane-dress")};function _f(i){for(const[t,e]of Object.entries(Uc)){const n=t===i&&e.hidden;e.hidden=!n,it("rail-"+t).setAttribute("aria-expanded",String(n))}Be.tick()}it("rail-motion").addEventListener("click",()=>_f("motion"));it("rail-dress").addEventListener("click",()=>_f("dress"));const Er=()=>{for(const i in Uc)Uc[i].hidden=!0,it("rail-"+i).setAttribute("aria-expanded","false")};it("c").addEventListener("pointerdown",Er);document.querySelectorAll("[data-motion]").forEach(i=>i.addEventListener("click",()=>{ji(!0),we.act(i.dataset.motion),Er()}));we.onCue=i=>{var t;i==="page"?Pn.page():i==="gull"?Pn.gull():(t=Be[i])==null||t.call(Be)};const vf=["cap","blanket","headset","glasses"];function xf(){for(const i of vf)it("act-"+i).setAttribute("aria-pressed",String(we.worn[i])),document.querySelectorAll(`[data-item="${i}"]`).forEach(t=>t.setAttribute("aria-pressed",String(we.worn[i])))}async function dl(i){const t=we.toggleItem(i);i==="headset"?(t?(await ji(!0),Pn.setBgScale(.3),xn.start()):(xn.hide(),Pn.setBgScale(1)),it("np").hidden=!t):Be.cloth(),i==="headset"&&Be.click(),xf()}for(const i of vf)it("act-"+i).addEventListener("click",()=>dl(i));document.querySelectorAll("[data-item]").forEach(i=>i.addEventListener("click",()=>dl(i.dataset.item)));xn.onChange(i=>{it("np-title").textContent=i.title,it("np-src").textContent=i.source==="youtube"?"유튜브 · 헤드셋 음악":"독서 음악",it("np-prev").setAttribute("aria-label",xn.source==="youtube"&&xn.single?"30초 뒤로":"이전 곡"),it("np-next").setAttribute("aria-label",xn.source==="youtube"&&xn.single?"30초 앞으로":"다음 곡"),it("np-play").textContent=i.playing?"⏸":"▶",it("np-play").setAttribute("aria-label",i.playing?"일시정지":"다시 재생"),it("np").classList.toggle("paused",!i.playing)});it("np-play").addEventListener("click",()=>{xn.playing?(xn.stop(),Pn.setBgScale(1)):(xn.start(),Pn.setBgScale(.3)),Be.click()});it("np-prev").addEventListener("click",()=>xn.prev());it("np-next").addEventListener("click",()=>xn.next());xf();let yf=0;const ah=it("mirror").getContext("2d");it("act-mirror").addEventListener("click",()=>{Er(),Be.chime(),it("dlg-mirror").hidden=!1,we.renderMirror(ah),yf=setInterval(()=>we.renderMirror(ah),90)});it("mirror-close").addEventListener("click",()=>{it("dlg-mirror").hidden=!0,clearInterval(yf)});const Bn=it("pad"),Jx=Bn.getContext("2d");let Ci=[],$n=null,zo="hand";const Kx=()=>{Nc=0,mf(Jx,Bn.width,Bn.height,df($n?[...Ci,$n]:Ci,"#000",Bn.width,Bn.height))};let Nc=0;const Ws=()=>{Nc||(Nc=requestAnimationFrame(Kx))},Mf=i=>{const t=Bn.getBoundingClientRect();return[Math.min(1,Math.max(0,(i.clientX-t.left)/t.width)),Math.min(1,Math.max(0,(i.clientY-t.top)/t.height))]};let Fc=0,yo=1.1;Bn.addEventListener("pointerdown",i=>{Bn.setPointerCapture(i.pointerId),i.preventDefault();const t=Mf(i);Fc=performance.now(),yo=1.15,$n=[[t[0],t[1],1.15]],Ws(),Be.scratchStart()});Bn.addEventListener("pointermove",i=>{var e;if(!$n)return;let t=0;for(const n of((e=i.getCoalescedEvents)==null?void 0:e.call(i))||[i]){const s=Mf(n),r=$n[$n.length-1],o=Math.hypot((s[0]-r[0])*Fx,s[1]-r[1]);if(o<.006)continue;const a=n.timeStamp||performance.now(),c=Math.max(4,a-Fc);Fc=a;const l=o/c*1e3;yo=yo*.7+Math.min(1.3,Math.max(.6,1.35-l*.16))*.3,$n.push([s[0],s[1],+yo.toFixed(2)]),t+=o}t&&(Ws(),Be.scratchMove(t*14))});const Sf=()=>{Be.scratchStop(),$n&&(Ci.push($n),$n=null,Ws())};Bn.addEventListener("pointerup",Sf);Bn.addEventListener("pointercancel",Sf);const Oc=()=>Qn.find(i=>i.id===it("sand-font").value)||Qn[0];async function ko(){const i=Oc(),t=it("sand-text").value;await hl(i,t),mf(it("sand-prev").getContext("2d"),720,240,Ao(t,i,"#000",720,240))}function bf(){it("sand-font").innerHTML=Qn.map(i=>`<option value="${i.id}">${i.label}</option>`).join("")}bf();(window.__ASSETS?Promise.resolve(!1):Nx()).then(i=>{i&&(bf(),it("sand-font").value="custom")});it("sand-text").addEventListener("input",()=>{ko(),Be.sand(1)});it("sand-font").addEventListener("change",ko);function pl(i){zo=i,it("tab-hand").setAttribute("aria-pressed",String(i==="hand")),it("tab-type").setAttribute("aria-pressed",String(i==="type")),it("pane-hand").hidden=i!=="hand",it("pane-type").hidden=i!=="type",it("sand-undo").hidden=i!=="hand",i==="type"?(ko(),it("sand-text").focus()):Ws()}it("tab-hand").addEventListener("click",()=>pl("hand"));it("tab-type").addEventListener("click",()=>pl("type"));it("act-sand").addEventListener("click",()=>{Er(),it("dlg-sand").hidden=!1,pl(zo)});it("sand-undo").addEventListener("click",()=>{Ci.pop(),Ws()});it("sand-clear").addEventListener("click",()=>{zo==="hand"?(Ci=[],Ws()):(it("sand-text").value="",ko())});it("sand-cancel").addEventListener("click",()=>{it("dlg-sand").hidden=!0});const wf="padoseojae.sand.v1";it("sand-ok").addEventListener("click",async()=>{let i;if(zo==="hand"){if(!Ci.length)return bn("모래판에 먼저 글씨를 써 주세요");i={strokes:Ci.map(t=>t.map(([e,n,s=1])=>[+e.toFixed(4),+n.toFixed(4),s]))}}else{const t=it("sand-text").value.trim();if(!t)return bn("남길 말을 먼저 적어 주세요");await hl(Oc(),t),i={text:t,font:Oc().id}}it("dlg-sand").hidden=!0,Ci=[],it("sand-text").value="",we.view!=="seat"&&we.setView("seat"),ji(!0),we.act("write"),we.writeSand(i,{delay:.75});try{localStorage.setItem(wf,JSON.stringify(i))}catch{}setTimeout(()=>bn("물범 앞 모래에 글씨를 새겼어요. 다음에 와도 남아 있어요",4500),2600)});var ch;try{const i=JSON.parse(localStorage.getItem(wf)||"null");i&&((ch=i.strokes)!=null&&ch.length||i.text)&&hl(Qn.find(t=>t.id===i.font)||Qn[0],i.text||"가").then(()=>we.writeSand(i,{instant:!0}))}catch{}const Ef="padoseojae.shellnotes.v2";let Pi={},ml=-1;try{Pi=JSON.parse(localStorage.getItem(Ef)||"{}")||{}}catch{Pi={}}const gl=()=>{try{localStorage.setItem(Ef,JSON.stringify(Pi))}catch{}we.pick.noted=new Set(Object.keys(Pi).map(Number))};gl();function Tf(i,t,e){it("shell-h").textContent=t?i?"내가 남긴 쪽지":"조개 속에 쪽지 남기기":"조개 속 쪽지",it("shell-title").value=(i==null?void 0:i.title)||"",it("shell-text").value=(i==null?void 0:i.text)||"",it("shell-who").hidden=t,it("shell-who").textContent=t?"":`${e} 님이 남긴 쪽지 (예시)`;for(const n of["shell-title","shell-text"])it(n).readOnly=!t;it("shell-del").hidden=!t||!i,it("shell-ok").hidden=!t,document.querySelector("#dlg-shell .hint").hidden=!t,it("dlg-shell").hidden=!1}we.pick.onPuppy=()=>{ji(!0),Be.yip()};we.pick.onShell=i=>{ml=i,Be.shell(),setTimeout(()=>Tf(Pi[i],!0),1300)};we.pick.onOther=i=>Tf(i,!1,i.who);it("shell-cancel").addEventListener("click",()=>{it("dlg-shell").hidden=!0});it("shell-del").addEventListener("click",()=>{delete Pi[ml],gl(),it("dlg-shell").hidden=!0,bn("쪽지를 지웠어요")});it("shell-ok").addEventListener("click",()=>{const i=it("shell-title").value.trim(),t=it("shell-text").value.trim();if(!i&&!t)return bn("책 제목이나 남길 말을 적어 주세요");Pi[ml]={title:i,text:t,at:Date.now()},gl(),Be.shellClose(),it("dlg-shell").hidden=!0,bn("조개 속에 쪽지를 넣었어요. 반짝이는 조개를 누르면 다시 읽을 수 있어요")});const Oa=["low","mid","high"];it("btn-quality").textContent=`품질: ${we.Q.label}`;it("btn-quality").addEventListener("click",()=>{const i=Oa[(Oa.indexOf(we.qName)+1)%Oa.length];let t=!1;try{sessionStorage.setItem("s5q",i),t=!0}catch{}if(t&&!Sr.get("quality"))location.reload();else{const e=new URL(location.href);e.searchParams.set("quality",i),location.href=e.toString()}});function Af(){it("btn-fill").hidden=innerWidth/innerHeight<=gf+.01}Af();addEventListener("resize",Af);it("btn-fill").addEventListener("click",()=>{const i=document.body.classList.toggle("fill");it("btn-fill").setAttribute("aria-pressed",String(i)),dispatchEvent(new Event("resize"))});it("hud").hidden=Sr.get("hud")!=="1";setInterval(()=>{if(it("hud").hidden)return;const i=we.stats();it("hud").textContent=`초당 ${i.fps}장 (상한 ${i.fpsCap}) · 한 장 ${i.workMs}ms
품질 ${Ro[i.quality].label} · ${i.size[0]}×${i.size[1]} ×${i.pixelRatio} · 그리기 ${i.calls}회`},500);window.__s5=we;window.__ui={music:xn,audio:Pn,sfx:Be,toggle:dl,notes:()=>Pi};const _l="padoseojae.timer.v1";let on=null;const Rf=i=>{const t=Math.max(0,Math.ceil(i/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`};function Vo(){const i=!!on;it("btn-timer").classList.toggle("on",i),it("timer-text").textContent=i?Rf(on.end-Date.now()):"타이머",it("timer-h").textContent=i?`${on.min}분 읽는 중`:"얼마나 읽을까요?",it("timer-mins").hidden=i,it("timer-stop").hidden=!i,it("timer-hint").textContent=i?"타이머를 끄고 그냥 쉴 수도 있어요":"시간이 다 되면 물범이 기지개를 켜고 알려 줘요"}function Cf(i){on={end:Date.now()+i*6e4/(Number(Sr.get("timescale"))>1&&Sr.get("fasttimer")?60:1),min:i};try{localStorage.setItem(_l,JSON.stringify(on))}catch{}it("dlg-timer").hidden=!0,Vo(),ji(!0),Be.tick(),we.act("page"),bn(`${i}분 동안 함께 읽어요`)}function Co(i){const t=on==null?void 0:on.min;on=null;try{localStorage.removeItem(_l)}catch{}Vo(),i&&(Be.done(),we.act("stretch"),setTimeout(()=>we.act("clap"),3700),it("toast").textContent=`${t}분 독서 완료 ✓  오늘도 한 장 넘겼어요`,it("toast").hidden=!1,clearTimeout(Co.t),Co.t=setTimeout(()=>{it("toast").hidden=!0},12e3))}try{const i=JSON.parse(localStorage.getItem(_l)||"null");i&&i.end>Date.now()&&(on=i)}catch{}it("btn-timer").addEventListener("click",()=>{Er(),Vo(),it("dlg-timer").hidden=!1,Be.tick()});document.querySelectorAll("[data-min]").forEach(i=>i.addEventListener("click",()=>Cf(+i.dataset.min)));it("timer-stop").addEventListener("click",()=>{Co(!1),it("dlg-timer").hidden=!0,bn("타이머를 껐어요")});it("timer-close").addEventListener("click",()=>{it("dlg-timer").hidden=!0});it("toast").addEventListener("click",()=>{it("toast").hidden=!0});setInterval(()=>{on&&(Date.now()>=on.end?Co(!0):it("timer-text").textContent=Rf(on.end-Date.now()))},500);Vo();window.__timer={start:Cf,finish:()=>{on&&(on.end=Date.now()-1)}};setTimeout(()=>{we.view==="seat"&&bn("반짝이는 조개를 누르면 쪽지를 남길 수 있어요 · 오른쪽에서 동작을 골라 보세요",5500)},1800);
