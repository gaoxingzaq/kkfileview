(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{111:function(t,e,r){"use strict";var n={};(0,r(38).assign)(n,r(359),r(361),r(114)),t.exports=n},164:function(t,e,r){(function(e){var n;n={},t.exports=n,function(t,e){t.toRGBA8=function(e){var r=e.width,n=e.height;if(null==e.tabs.acTL)return[t.toRGBA8.decodeImage(e.data,r,n,e).buffer];var i=[];null==e.frames[0].data&&(e.frames[0].data=e.data);for(var a,o=new Uint8Array(r*n*4),s=0;s<e.frames.length;s++){var f=e.frames[s],u=f.rect.x,l=f.rect.y,h=f.rect.width,c=f.rect.height,d=t.toRGBA8.decodeImage(f.data,h,c,e);if(0==s?a=d:0==f.blend?t._copyTile(d,h,c,a,r,n,u,l,0):1==f.blend&&t._copyTile(d,h,c,a,r,n,u,l,1),i.push(a.buffer),a=a.slice(0),0==f.dispose);else if(1==f.dispose)t._copyTile(o,h,c,a,r,n,u,l,0);else if(2==f.dispose){for(var p=s-1;2==e.frames[p].dispose;)p--;a=new Uint8Array(i[p]).slice(0)}}return i},t.toRGBA8.decodeImage=function(e,r,n,i){var a=r*n,o=t.decode._getBPP(i),s=Math.ceil(r*o/8),f=new Uint8Array(4*a),u=new Uint32Array(f.buffer),l=i.ctype,h=i.depth,c=t._bin.readUshort;if(6==l){var d=a<<2;if(8==h)for(var p=0;p<d;p++)f[p]=e[p];if(16==h)for(p=0;p<d;p++)f[p]=e[p<<1]}else if(2==l){var v=i.tabs.tRNS,g=-1,w=-1,b=-1;if(v&&(g=v[0],w=v[1],b=v[2]),8==h)for(p=0;p<a;p++){var y=3*p;f[I=p<<2]=e[y],f[I+1]=e[y+1],f[I+2]=e[y+2],f[I+3]=255,-1!=g&&e[y]==g&&e[y+1]==w&&e[y+2]==b&&(f[I+3]=0)}if(16==h)for(p=0;p<a;p++)y=6*p,f[I=p<<2]=e[y],f[I+1]=e[y+2],f[I+2]=e[y+4],f[I+3]=255,-1!=g&&c(e,y)==g&&c(e,y+2)==w&&c(e,y+4)==b&&(f[I+3]=0)}else if(3==l){var _=i.tabs.PLTE,m=i.tabs.tRNS,A=m?m.length:0;if(1==h)for(var U=0;U<n;U++){var B=U*s,S=U*r;for(p=0;p<r;p++){var I=S+p<<2,N=3*(R=e[B+(p>>3)]>>7-((7&p)<<0)&1);f[I]=_[N],f[I+1]=_[N+1],f[I+2]=_[N+2],f[I+3]=R<A?m[R]:255}}if(2==h)for(U=0;U<n;U++)for(B=U*s,S=U*r,p=0;p<r;p++)I=S+p<<2,N=3*(R=e[B+(p>>2)]>>6-((3&p)<<1)&3),f[I]=_[N],f[I+1]=_[N+1],f[I+2]=_[N+2],f[I+3]=R<A?m[R]:255;if(4==h)for(U=0;U<n;U++)for(B=U*s,S=U*r,p=0;p<r;p++)I=S+p<<2,N=3*(R=e[B+(p>>1)]>>4-((1&p)<<2)&15),f[I]=_[N],f[I+1]=_[N+1],f[I+2]=_[N+2],f[I+3]=R<A?m[R]:255;if(8==h)for(p=0;p<a;p++){var R;I=p<<2,N=3*(R=e[p]),f[I]=_[N],f[I+1]=_[N+1],f[I+2]=_[N+2],f[I+3]=R<A?m[R]:255}}else if(4==l){if(8==h)for(p=0;p<a;p++){I=p<<2;var C=e[E=p<<1];f[I]=C,f[I+1]=C,f[I+2]=C,f[I+3]=e[E+1]}if(16==h)for(p=0;p<a;p++){var E;I=p<<2,C=e[E=p<<2],f[I]=C,f[I+1]=C,f[I+2]=C,f[I+3]=e[E+2]}}else if(0==l){if(g=i.tabs.tRNS?i.tabs.tRNS:-1,1==h)for(p=0;p<a;p++){var M=(C=255*(e[p>>3]>>7-(7&p)&1))==255*g?0:255;u[p]=M<<24|C<<16|C<<8|C}if(2==h)for(p=0;p<a;p++)M=(C=85*(e[p>>2]>>6-((3&p)<<1)&3))==85*g?0:255,u[p]=M<<24|C<<16|C<<8|C;if(4==h)for(p=0;p<a;p++)M=(C=17*(e[p>>1]>>4-((1&p)<<2)&15))==17*g?0:255,u[p]=M<<24|C<<16|C<<8|C;if(8==h)for(p=0;p<a;p++)M=(C=e[p])==g?0:255,u[p]=M<<24|C<<16|C<<8|C;if(16==h)for(p=0;p<a;p++)C=e[p<<1],M=c(e,p<<1)==g?0:255,u[p]=M<<24|C<<16|C<<8|C}return f},t.decode=function(e){for(var r,n=new Uint8Array(e),i=8,a=t._bin,o=a.readUshort,s=a.readUint,f={tabs:{},frames:[]},u=new Uint8Array(n.length),l=0,h=0,c=[137,80,78,71,13,10,26,10],d=0;d<8;d++)if(n[d]!=c[d])throw"The input is not a PNG file!";for(;i<n.length;){var p=a.readUint(n,i);i+=4;var v=a.readASCII(n,i,4);if(i+=4,"IHDR"==v)t.decode._IHDR(n,i,f);else if("IDAT"==v){for(d=0;d<p;d++)u[l+d]=n[i+d];l+=p}else if("acTL"==v)f.tabs[v]={num_frames:s(n,i),num_plays:s(n,i+4)},r=new Uint8Array(n.length);else if("fcTL"==v){0!=h&&((B=f.frames[f.frames.length-1]).data=t.decode._decompress(f,r.slice(0,h),B.rect.width,B.rect.height),h=0);var g={x:s(n,i+12),y:s(n,i+16),width:s(n,i+4),height:s(n,i+8)},w=o(n,i+22);w=o(n,i+20)/(0==w?100:w);var b={rect:g,delay:Math.round(1e3*w),dispose:n[i+24],blend:n[i+25]};f.frames.push(b)}else if("fdAT"==v){for(d=0;d<p-4;d++)r[h+d]=n[i+d+4];h+=p-4}else if("pHYs"==v)f.tabs[v]=[a.readUint(n,i),a.readUint(n,i+4),n[i+8]];else if("cHRM"==v)for(f.tabs[v]=[],d=0;d<8;d++)f.tabs[v].push(a.readUint(n,i+4*d));else if("tEXt"==v){null==f.tabs[v]&&(f.tabs[v]={});var y=a.nextZero(n,i),_=a.readASCII(n,i,y-i),m=a.readASCII(n,y+1,i+p-y-1);f.tabs[v][_]=m}else if("iTXt"==v){null==f.tabs[v]&&(f.tabs[v]={}),y=0;var A=i;y=a.nextZero(n,A),_=a.readASCII(n,A,y-A),n[A=y+1],n[A+1],A+=2,y=a.nextZero(n,A),a.readASCII(n,A,y-A),A=y+1,y=a.nextZero(n,A),a.readUTF8(n,A,y-A),A=y+1,m=a.readUTF8(n,A,p-(A-i)),f.tabs[v][_]=m}else if("PLTE"==v)f.tabs[v]=a.readBytes(n,i,p);else if("hIST"==v){var U=f.tabs.PLTE.length/3;for(f.tabs[v]=[],d=0;d<U;d++)f.tabs[v].push(o(n,i+2*d))}else if("tRNS"==v)3==f.ctype?f.tabs[v]=a.readBytes(n,i,p):0==f.ctype?f.tabs[v]=o(n,i):2==f.ctype&&(f.tabs[v]=[o(n,i),o(n,i+2),o(n,i+4)]);else if("gAMA"==v)f.tabs[v]=a.readUint(n,i)/1e5;else if("sRGB"==v)f.tabs[v]=n[i];else if("bKGD"==v)0==f.ctype||4==f.ctype?f.tabs[v]=[o(n,i)]:2==f.ctype||6==f.ctype?f.tabs[v]=[o(n,i),o(n,i+2),o(n,i+4)]:3==f.ctype&&(f.tabs[v]=n[i]);else if("IEND"==v){var B;0!=h&&((B=f.frames[f.frames.length-1]).data=t.decode._decompress(f,r.slice(0,h),B.rect.width,B.rect.height),h=0),f.data=t.decode._decompress(f,u,f.width,f.height);break}i+=p,a.readUint(n,i),i+=4}return delete f.compress,delete f.interlace,delete f.filter,f},t.decode._decompress=function(e,r,n,i){return 0==e.compress&&(r=t.decode._inflate(r)),0==e.interlace?r=t.decode._filterZero(r,e,0,n,i):1==e.interlace&&(r=t.decode._readInterlace(r,e)),r},t.decode._inflate=function(t){return e.inflate(t)},t.decode._readInterlace=function(e,r){for(var n=r.width,i=r.height,a=t.decode._getBPP(r),o=a>>3,s=Math.ceil(n*a/8),f=new Uint8Array(i*s),u=0,l=[0,0,4,0,2,0,1],h=[0,4,0,2,0,1,0],c=[8,8,8,4,4,2,2],d=[8,8,4,4,2,2,1],p=0;p<7;){for(var v=c[p],g=d[p],w=0,b=0,y=l[p];y<i;)y+=v,b++;for(var _=h[p];_<n;)_+=g,w++;var m=Math.ceil(w*a/8);t.decode._filterZero(e,r,u,w,b);for(var A=0,U=l[p];U<i;){for(var B=h[p],S=u+A*m<<3;B<n;){var I;if(1==a&&(I=(I=e[S>>3])>>7-(7&S)&1,f[U*s+(B>>3)]|=I<<7-((3&B)<<0)),2==a&&(I=(I=e[S>>3])>>6-(7&S)&3,f[U*s+(B>>2)]|=I<<6-((3&B)<<1)),4==a&&(I=(I=e[S>>3])>>4-(7&S)&15,f[U*s+(B>>1)]|=I<<4-((1&B)<<2)),a>=8)for(var N=U*s+B*o,R=0;R<o;R++)f[N+R]=e[(S>>3)+R];S+=a,B+=g}A++,U+=v}w*b!=0&&(u+=b*(1+m)),p+=1}return f},t.decode._getBPP=function(t){return[1,null,3,1,2,null,4][t.ctype]*t.depth},t.decode._filterZero=function(e,r,n,i,a){var o=t.decode._getBPP(r),s=Math.ceil(i*o/8),f=t.decode._paeth;o=Math.ceil(o/8);for(var u=0;u<a;u++){var l=n+u*s,h=l+u+1,c=e[h-1];if(0==c)for(var d=0;d<s;d++)e[l+d]=e[h+d];else if(1==c){for(d=0;d<o;d++)e[l+d]=e[h+d];for(d=o;d<s;d++)e[l+d]=e[h+d]+e[l+d-o]&255}else if(0==u){for(d=0;d<o;d++)e[l+d]=e[h+d];if(2==c)for(d=o;d<s;d++)e[l+d]=255&e[h+d];if(3==c)for(d=o;d<s;d++)e[l+d]=e[h+d]+(e[l+d-o]>>1)&255;if(4==c)for(d=o;d<s;d++)e[l+d]=e[h+d]+f(e[l+d-o],0,0)&255}else{if(2==c)for(d=0;d<s;d++)e[l+d]=e[h+d]+e[l+d-s]&255;if(3==c){for(d=0;d<o;d++)e[l+d]=e[h+d]+(e[l+d-s]>>1)&255;for(d=o;d<s;d++)e[l+d]=e[h+d]+(e[l+d-s]+e[l+d-o]>>1)&255}if(4==c){for(d=0;d<o;d++)e[l+d]=e[h+d]+f(0,e[l+d-s],0)&255;for(d=o;d<s;d++)e[l+d]=e[h+d]+f(e[l+d-o],e[l+d-s],e[l+d-o-s])&255}}}return e},t.decode._paeth=function(t,e,r){var n=t+e-r,i=Math.abs(n-t),a=Math.abs(n-e),o=Math.abs(n-r);return i<=a&&i<=o?t:a<=o?e:r},t.decode._IHDR=function(e,r,n){var i=t._bin;n.width=i.readUint(e,r),r+=4,n.height=i.readUint(e,r),r+=4,n.depth=e[r],r++,n.ctype=e[r],r++,n.compress=e[r],r++,n.filter=e[r],r++,n.interlace=e[r],r++},t._bin={nextZero:function(t,e){for(;0!=t[e];)e++;return e},readUshort:function(t,e){return t[e]<<8|t[e+1]},writeUshort:function(t,e,r){t[e]=r>>8&255,t[e+1]=255&r},readUint:function(t,e){return 16777216*t[e]+(t[e+1]<<16|t[e+2]<<8|t[e+3])},writeUint:function(t,e,r){t[e]=r>>24&255,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=255&r},readASCII:function(t,e,r){for(var n="",i=0;i<r;i++)n+=String.fromCharCode(t[e+i]);return n},writeASCII:function(t,e,r){for(var n=0;n<r.length;n++)t[e+n]=r.charCodeAt(n)},readBytes:function(t,e,r){for(var n=[],i=0;i<r;i++)n.push(t[e+i]);return n},pad:function(t){return t.length<2?"0"+t:t},readUTF8:function(e,r,n){for(var i,a="",o=0;o<n;o++)a+="%"+t._bin.pad(e[r+o].toString(16));try{i=decodeURIComponent(a)}catch(i){return t._bin.readASCII(e,r,n)}return i}},t._copyTile=function(t,e,r,n,i,a,o,s,f){for(var u=Math.min(e,i),l=Math.min(r,a),h=0,c=0,d=0;d<l;d++)for(var p=0;p<u;p++)if(o>=0&&s>=0?(h=d*e+p<<2,c=(s+d)*i+o+p<<2):(h=(-s+d)*e-o+p<<2,c=d*i+p<<2),0==f)n[c]=t[h],n[c+1]=t[h+1],n[c+2]=t[h+2],n[c+3]=t[h+3];else if(1==f){var v=t[h+3]*(1/255),g=t[h]*v,w=t[h+1]*v,b=t[h+2]*v,y=n[c+3]*(1/255),_=n[c]*y,m=n[c+1]*y,A=n[c+2]*y,U=1-v,B=v+y*U,S=0==B?0:1/B;n[c+3]=255*B,n[c+0]=(g+_*U)*S,n[c+1]=(w+m*U)*S,n[c+2]=(b+A*U)*S}else if(2==f)v=t[h+3],g=t[h],w=t[h+1],b=t[h+2],y=n[c+3],_=n[c],m=n[c+1],A=n[c+2],v==y&&g==_&&w==m&&b==A?(n[c]=0,n[c+1]=0,n[c+2]=0,n[c+3]=0):(n[c]=g,n[c+1]=w,n[c+2]=b,n[c+3]=v);else if(3==f){if(v=t[h+3],g=t[h],w=t[h+1],b=t[h+2],y=n[c+3],_=n[c],m=n[c+1],A=n[c+2],v==y&&g==_&&w==m&&b==A)continue;if(v<220&&y>20)return!1}return!0},t.encode=function(e,r,n,i,a,o){null==i&&(i=0),null==o&&(o=!1);for(var s=new Uint8Array(e[0].byteLength*e.length+100),f=[137,80,78,71,13,10,26,10],u=0;u<8;u++)s[u]=f[u];var l=8,h=t._bin,c=t.crc.crc,d=h.writeUint,p=h.writeUshort,v=h.writeASCII,g=t.encode.compressPNG(e,r,n,i,o);d(s,l,13),v(s,l+=4,"IHDR"),d(s,l+=4,r),d(s,l+=4,n),s[l+=4]=g.depth,s[++l]=g.ctype,s[++l]=0,s[++l]=0,s[++l]=0,d(s,++l,c(s,l-17,17)),d(s,l+=4,1),v(s,l+=4,"sRGB"),s[l+=4]=1,d(s,++l,c(s,l-5,5)),l+=4;var w=e.length>1;if(w&&(d(s,l,8),v(s,l+=4,"acTL"),d(s,l+=4,e.length),d(s,l+=4,0),d(s,l+=4,c(s,l-12,12)),l+=4),3==g.ctype){for(d(s,l,3*(I=g.plte.length)),v(s,l+=4,"PLTE"),l+=4,u=0;u<I;u++){var b=3*u,y=g.plte[u],_=255&y,m=y>>8&255,A=y>>16&255;s[l+b+0]=_,s[l+b+1]=m,s[l+b+2]=A}if(d(s,l+=3*I,c(s,l-3*I-4,3*I+4)),l+=4,g.gotAlpha){for(d(s,l,I),v(s,l+=4,"tRNS"),l+=4,u=0;u<I;u++)s[l+u]=g.plte[u]>>24&255;d(s,l+=I,c(s,l-I-4,I+4)),l+=4}}for(var U=0,B=0;B<g.frames.length;B++){var S=g.frames[B];w&&(d(s,l,26),v(s,l+=4,"fcTL"),d(s,l+=4,U++),d(s,l+=4,S.rect.width),d(s,l+=4,S.rect.height),d(s,l+=4,S.rect.x),d(s,l+=4,S.rect.y),p(s,l+=4,a[B]),p(s,l+=2,1e3),s[l+=2]=S.dispose,s[++l]=S.blend,d(s,++l,c(s,l-30,30)),l+=4);var I,N=S.cimg;d(s,l,(I=N.length)+(0==B?0:4));var R=l+=4;for(v(s,l,0==B?"IDAT":"fdAT"),l+=4,0!=B&&(d(s,l,U++),l+=4),u=0;u<I;u++)s[l+u]=N[u];d(s,l+=I,c(s,R,l-R)),l+=4}return d(s,l,0),v(s,l+=4,"IEND"),d(s,l+=4,c(s,l-4,4)),l+=4,s.buffer.slice(0,l)},t.encode.compressPNG=function(e,r,n,i,a){for(var o=t.encode.compress(e,r,n,i,!1,a),s=0;s<e.length;s++){var f=o.frames[s],u=(f.rect.width,f.rect.height),l=f.bpl,h=f.bpp,c=new Uint8Array(u*l+u);f.cimg=t.encode._filterZero(f.img,u,h,l,c)}return o},t.encode.compress=function(e,r,n,i,a,o){null==o&&(o=!1);for(var s=6,f=8,u=4,l=255,h=0;h<e.length;h++)for(var c=new Uint8Array(e[h]),d=c.length,p=0;p<d;p+=4)l&=c[p+3];var v=255!=l,g={},w=[];if(0!=e.length&&(g[0]=0,w.push(0),0!=i&&i--),0!=i){var b=t.quantize(e,i,a);for(e=b.bufs,p=0;p<b.plte.length;p++)null==g[_=b.plte[p].est.rgba]&&(g[_]=w.length,w.push(_))}else for(h=0;h<e.length;h++){var y=new Uint32Array(e[h]);for(d=y.length,p=0;p<d;p++){var _=y[p];if((p<r||_!=y[p-1]&&_!=y[p-r])&&null==g[_]&&(g[_]=w.length,w.push(_),w.length>=300))break}}var m=!!v&&a,A=w.length;A<=256&&0==o&&(f=A<=2?1:A<=4?2:A<=16?4:8,a&&(f=8),v=!0);var U=[];for(h=0;h<e.length;h++){var B=new Uint8Array(e[h]),S=new Uint32Array(B.buffer),I=0,N=0,R=r,C=n,E=0;if(0!=h&&!m){for(var M=a||1==h||2==U[U.length-2].dispose?1:2,T=0,Z=1e9,D=0;D<M;D++){for(var x=new Uint8Array(e[h-1-D]),z=new Uint32Array(e[h-1-D]),q=r,k=n,L=-1,P=-1,H=0;H<n;H++)for(var F=0;F<r;F++)S[p=H*r+F]!=z[p]&&(F<q&&(q=F),F>L&&(L=F),H<k&&(k=H),H>P&&(P=H));var O=-1==L?1:(L-q+1)*(P-k+1);O<Z&&(Z=O,T=D,-1==L?(I=N=0,R=C=1):(I=q,N=k,R=L-q+1,C=P-k+1))}x=new Uint8Array(e[h-1-T]),1==T&&(U[U.length-1].dispose=2);var G=new Uint8Array(R*C*4);new Uint32Array(G.buffer),t._copyTile(x,r,n,G,R,C,-I,-N,0),t._copyTile(B,r,n,G,R,C,-I,-N,3)?(t._copyTile(B,r,n,G,R,C,-I,-N,2),E=1):(t._copyTile(B,r,n,G,R,C,-I,-N,0),E=0),B=G,S=new Uint32Array(B.buffer)}var j=4*R;if(A<=256&&0==o){for(j=Math.ceil(f*R/8),G=new Uint8Array(j*C),H=0;H<C;H++){p=H*j;var K=H*R;if(8==f)for(F=0;F<R;F++)G[p+F]=g[S[K+F]];else if(4==f)for(F=0;F<R;F++)G[p+(F>>1)]|=g[S[K+F]]<<4-4*(1&F);else if(2==f)for(F=0;F<R;F++)G[p+(F>>2)]|=g[S[K+F]]<<6-2*(3&F);else if(1==f)for(F=0;F<R;F++)G[p+(F>>3)]|=g[S[K+F]]<<7-1*(7&F)}B=G,s=3,u=1}else if(0==v&&1==e.length){G=new Uint8Array(R*C*3);var Y=R*C;for(p=0;p<Y;p++){var J=3*p,V=4*p;G[J]=B[V],G[J+1]=B[V+1],G[J+2]=B[V+2]}B=G,s=2,u=3,j=3*R}U.push({rect:{x:I,y:N,width:R,height:C},img:B,bpl:j,bpp:u,blend:E,dispose:m?1:0})}return{ctype:s,depth:f,plte:w,gotAlpha:v,frames:U}},t.encode._filterZero=function(r,n,i,a,o){for(var s=[],f=0;f<5;f++)if(!(n*a>5e5)||2!=f&&3!=f&&4!=f){for(var u=0;u<n;u++)t.encode._filterLine(o,r,u,a,i,f);if(s.push(e.deflate(o)),1==i)break}for(var l,h=1e9,c=0;c<s.length;c++)s[c].length<h&&(l=c,h=s[c].length);return s[l]},t.encode._filterLine=function(e,r,n,i,a,o){var s=n*i,f=s+n,u=t.decode._paeth;if(e[f]=o,f++,0==o)for(var l=0;l<i;l++)e[f+l]=r[s+l];else if(1==o){for(l=0;l<a;l++)e[f+l]=r[s+l];for(l=a;l<i;l++)e[f+l]=r[s+l]-r[s+l-a]+256&255}else if(0==n){for(l=0;l<a;l++)e[f+l]=r[s+l];if(2==o)for(l=a;l<i;l++)e[f+l]=r[s+l];if(3==o)for(l=a;l<i;l++)e[f+l]=r[s+l]-(r[s+l-a]>>1)+256&255;if(4==o)for(l=a;l<i;l++)e[f+l]=r[s+l]-u(r[s+l-a],0,0)+256&255}else{if(2==o)for(l=0;l<i;l++)e[f+l]=r[s+l]+256-r[s+l-i]&255;if(3==o){for(l=0;l<a;l++)e[f+l]=r[s+l]+256-(r[s+l-i]>>1)&255;for(l=a;l<i;l++)e[f+l]=r[s+l]+256-(r[s+l-i]+r[s+l-a]>>1)&255}if(4==o){for(l=0;l<a;l++)e[f+l]=r[s+l]+256-u(0,r[s+l-i],0)&255;for(l=a;l<i;l++)e[f+l]=r[s+l]+256-u(r[s+l-a],r[s+l-i],r[s+l-a-i])&255}}},t.crc={table:function(){for(var t=new Uint32Array(256),e=0;e<256;e++){for(var r=e,n=0;n<8;n++)1&r?r=3988292384^r>>>1:r>>>=1;t[e]=r}return t}(),update:function(e,r,n,i){for(var a=0;a<i;a++)e=t.crc.table[255&(e^r[n+a])]^e>>>8;return e},crc:function(e,r,n){return 4294967295^t.crc.update(4294967295,e,r,n)}},t.quantize=function(e,r,n){for(var i=[],a=0,o=0;o<e.length;o++)i.push(t.encode.alphaMul(new Uint8Array(e[o]),n)),a+=e[o].byteLength;var s=new Uint8Array(a),f=new Uint32Array(s.buffer),u=0;for(o=0;o<i.length;o++){for(var l=i[o],h=l.length,c=0;c<h;c++)s[u+c]=l[c];u+=h}var d={i0:0,i1:s.length,bst:null,est:null,tdst:0,left:null,right:null};d.bst=t.quantize.stats(s,d.i0,d.i1),d.est=t.quantize.estats(d.bst);for(var p=[d];p.length<r;){var v=0,g=0;for(o=0;o<p.length;o++)p[o].est.L>v&&(v=p[o].est.L,g=o);if(v<.001)break;var w=p[g],b=t.quantize.splitPixels(s,f,w.i0,w.i1,w.est.e,w.est.eMq255),y={i0:w.i0,i1:b,bst:null,est:null,tdst:0,left:null,right:null};y.bst=t.quantize.stats(s,y.i0,y.i1),y.est=t.quantize.estats(y.bst);var _={i0:b,i1:w.i1,bst:null,est:null,tdst:0,left:null,right:null};for(_.bst={R:[],m:[],N:w.bst.N-y.bst.N},o=0;o<16;o++)_.bst.R[o]=w.bst.R[o]-y.bst.R[o];for(o=0;o<4;o++)_.bst.m[o]=w.bst.m[o]-y.bst.m[o];_.est=t.quantize.estats(_.bst),w.left=y,w.right=_,p[g]=y,p.push(_)}p.sort((function(t,e){return e.bst.N-t.bst.N}));for(var m=0;m<i.length;m++){var A=t.quantize.planeDst,U=new Uint8Array(i[m].buffer),B=new Uint32Array(i[m].buffer),S=U.length;for(o=0;o<S;o+=4){for(var I=U[o]*(1/255),N=U[o+1]*(1/255),R=U[o+2]*(1/255),C=U[o+3]*(1/255),E=d;E.left;)E=A(E.est,I,N,R,C)<=0?E.left:E.right;B[o>>2]=E.est.rgba}i[m]=B.buffer}return{bufs:i,plte:p}},t.quantize.getNearest=function(e,r,n,i,a){if(null==e.left)return e.tdst=t.quantize.dist(e.est.q,r,n,i,a),e;var o=t.quantize.planeDst(e.est,r,n,i,a),s=e.left,f=e.right;o>0&&(s=e.right,f=e.left);var u=t.quantize.getNearest(s,r,n,i,a);if(u.tdst<=o*o)return u;var l=t.quantize.getNearest(f,r,n,i,a);return l.tdst<u.tdst?l:u},t.quantize.planeDst=function(t,e,r,n,i){var a=t.e;return a[0]*e+a[1]*r+a[2]*n+a[3]*i-t.eMq},t.quantize.dist=function(t,e,r,n,i){var a=e-t[0],o=r-t[1],s=n-t[2],f=i-t[3];return a*a+o*o+s*s+f*f},t.quantize.splitPixels=function(e,r,n,i,a,o){var s=t.quantize.vecDot;for(i-=4;n<i;){for(;s(e,n,a)<=o;)n+=4;for(;s(e,i,a)>o;)i-=4;if(n>=i)break;var f=r[n>>2];r[n>>2]=r[i>>2],r[i>>2]=f,n+=4,i-=4}for(;s(e,n,a)>o;)n-=4;return n+4},t.quantize.vecDot=function(t,e,r){return t[e]*r[0]+t[e+1]*r[1]+t[e+2]*r[2]+t[e+3]*r[3]},t.quantize.stats=function(t,e,r){for(var n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=[0,0,0,0],a=r-e>>2,o=e;o<r;o+=4){var s=t[o]*(1/255),f=t[o+1]*(1/255),u=t[o+2]*(1/255),l=t[o+3]*(1/255);i[0]+=s,i[1]+=f,i[2]+=u,i[3]+=l,n[0]+=s*s,n[1]+=s*f,n[2]+=s*u,n[3]+=s*l,n[5]+=f*f,n[6]+=f*u,n[7]+=f*l,n[10]+=u*u,n[11]+=u*l,n[15]+=l*l}return n[4]=n[1],n[8]=n[2],n[12]=n[3],n[9]=n[6],n[13]=n[7],n[14]=n[11],{R:n,m:i,N:a}},t.quantize.estats=function(e){var r=e.R,n=e.m,i=e.N,a=n[0],o=n[1],s=n[2],f=n[3],u=0==i?0:1/i,l=[r[0]-a*a*u,r[1]-a*o*u,r[2]-a*s*u,r[3]-a*f*u,r[4]-o*a*u,r[5]-o*o*u,r[6]-o*s*u,r[7]-o*f*u,r[8]-s*a*u,r[9]-s*o*u,r[10]-s*s*u,r[11]-s*f*u,r[12]-f*a*u,r[13]-f*o*u,r[14]-f*s*u,r[15]-f*f*u],h=l,c=t.M4,d=[.5,.5,.5,.5],p=0,v=0;if(0!=i)for(var g=0;g<10&&(d=c.multVec(h,d),v=Math.sqrt(c.dot(d,d)),d=c.sml(1/v,d),!(Math.abs(v-p)<1e-9));g++)p=v;var w=[a*u,o*u,s*u,f*u],b=c.dot(c.sml(255,w),d),y=w[3]<.001?0:1/w[3];return{Cov:l,q:w,e:d,L:p,eMq255:b,eMq:c.dot(d,w),rgba:(Math.round(255*w[3])<<24|Math.round(255*w[2]*y)<<16|Math.round(255*w[1]*y)<<8|Math.round(255*w[0]*y)<<0)>>>0}},t.M4={multVec:function(t,e){return[t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3],t[4]*e[0]+t[5]*e[1]+t[6]*e[2]+t[7]*e[3],t[8]*e[0]+t[9]*e[1]+t[10]*e[2]+t[11]*e[3],t[12]*e[0]+t[13]*e[1]+t[14]*e[2]+t[15]*e[3]]},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},sml:function(t,e){return[t*e[0],t*e[1],t*e[2],t*e[3]]}},t.encode.alphaMul=function(t,e){for(var r=new Uint8Array(t.length),n=t.length>>2,i=0;i<n;i++){var a=i<<2,o=t[a+3];e&&(o=o<128?0:255);var s=o*(1/255);r[a+0]=t[a+0]*s,r[a+1]=t[a+1]*s,r[a+2]=t[a+2]*s,r[a+3]=o}return r}}(n,r(111))}).call(this,r(12))},168:function(t,e,r){"use strict";var n=r(38),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch(t){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){a=!1}for(var o=new n.Buf8(256),s=0;s<256;s++)o[s]=s>=252?6:s>=248?5:s>=240?4:s>=224?3:s>=192?2:1;function f(t,e){if(e<65534&&(t.subarray&&a||!t.subarray&&i))return String.fromCharCode.apply(null,n.shrinkBuf(t,e));for(var r="",o=0;o<e;o++)r+=String.fromCharCode(t[o]);return r}o[254]=o[254]=1,e.string2buf=function(t){var e,r,i,a,o,s=t.length,f=0;for(a=0;a<s;a++)55296==(64512&(r=t.charCodeAt(a)))&&a+1<s&&56320==(64512&(i=t.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(i-56320),a++),f+=r<128?1:r<2048?2:r<65536?3:4;for(e=new n.Buf8(f),o=0,a=0;o<f;a++)55296==(64512&(r=t.charCodeAt(a)))&&a+1<s&&56320==(64512&(i=t.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(i-56320),a++),r<128?e[o++]=r:r<2048?(e[o++]=192|r>>>6,e[o++]=128|63&r):r<65536?(e[o++]=224|r>>>12,e[o++]=128|r>>>6&63,e[o++]=128|63&r):(e[o++]=240|r>>>18,e[o++]=128|r>>>12&63,e[o++]=128|r>>>6&63,e[o++]=128|63&r);return e},e.buf2binstring=function(t){return f(t,t.length)},e.binstring2buf=function(t){for(var e=new n.Buf8(t.length),r=0,i=e.length;r<i;r++)e[r]=t.charCodeAt(r);return e},e.buf2string=function(t,e){var r,n,i,a,s=e||t.length,u=new Array(2*s);for(n=0,r=0;r<s;)if((i=t[r++])<128)u[n++]=i;else if((a=o[i])>4)u[n++]=65533,r+=a-1;else{for(i&=2===a?31:3===a?15:7;a>1&&r<s;)i=i<<6|63&t[r++],a--;a>1?u[n++]=65533:i<65536?u[n++]=i:(i-=65536,u[n++]=55296|i>>10&1023,u[n++]=56320|1023&i)}return f(u,n)},e.utf8border=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;r>=0&&128==(192&t[r]);)r--;return r<0||0===r?e:r+o[t[r]]>e?r:e}},359:function(t,e,r){"use strict";var n=r(165),i=r(38),a=r(168),o=r(112),s=r(113),f=Object.prototype.toString;function u(t){if(!(this instanceof u))return new u(t);this.options=i.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=n.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(0!==r)throw new Error(o[r]);if(e.header&&n.deflateSetHeader(this.strm,e.header),e.dictionary){var l;if(l="string"==typeof e.dictionary?a.string2buf(e.dictionary):"[object ArrayBuffer]"===f.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,0!==(r=n.deflateSetDictionary(this.strm,l)))throw new Error(o[r]);this._dict_set=!0}}function l(t,e){var r=new u(e);if(r.push(t,!0),r.err)throw r.msg||o[r.err];return r.result}u.prototype.push=function(t,e){var r,o,s=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=e===~~e?e:!0===e?4:0,"string"==typeof t?s.input=a.string2buf(t):"[object ArrayBuffer]"===f.call(t)?s.input=new Uint8Array(t):s.input=t,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new i.Buf8(u),s.next_out=0,s.avail_out=u),1!==(r=n.deflate(s,o))&&0!==r)return this.onEnd(r),this.ended=!0,!1;0!==s.avail_out&&(0!==s.avail_in||4!==o&&2!==o)||("string"===this.options.to?this.onData(a.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((s.avail_in>0||0===s.avail_out)&&1!==r);return 4===o?(r=n.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,0===r):2!==o||(this.onEnd(0),s.avail_out=0,!0)},u.prototype.onData=function(t){this.chunks.push(t)},u.prototype.onEnd=function(t){0===t&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},e.Deflate=u,e.deflate=l,e.deflateRaw=function(t,e){return(e=e||{}).raw=!0,l(t,e)},e.gzip=function(t,e){return(e=e||{}).gzip=!0,l(t,e)}},361:function(t,e,r){"use strict";var n=r(169),i=r(38),a=r(168),o=r(114),s=r(112),f=r(113),u=r(364),l=Object.prototype.toString;function h(t){if(!(this instanceof h))return new h(t);this.options=i.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var r=n.inflateInit2(this.strm,e.windowBits);if(r!==o.Z_OK)throw new Error(s[r]);if(this.header=new u,n.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=a.string2buf(e.dictionary):"[object ArrayBuffer]"===l.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(r=n.inflateSetDictionary(this.strm,e.dictionary))!==o.Z_OK))throw new Error(s[r])}function c(t,e){var r=new h(e);if(r.push(t,!0),r.err)throw r.msg||s[r.err];return r.result}h.prototype.push=function(t,e){var r,s,f,u,h,c=this.strm,d=this.options.chunkSize,p=this.options.dictionary,v=!1;if(this.ended)return!1;s=e===~~e?e:!0===e?o.Z_FINISH:o.Z_NO_FLUSH,"string"==typeof t?c.input=a.binstring2buf(t):"[object ArrayBuffer]"===l.call(t)?c.input=new Uint8Array(t):c.input=t,c.next_in=0,c.avail_in=c.input.length;do{if(0===c.avail_out&&(c.output=new i.Buf8(d),c.next_out=0,c.avail_out=d),(r=n.inflate(c,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&p&&(r=n.inflateSetDictionary(this.strm,p)),r===o.Z_BUF_ERROR&&!0===v&&(r=o.Z_OK,v=!1),r!==o.Z_STREAM_END&&r!==o.Z_OK)return this.onEnd(r),this.ended=!0,!1;c.next_out&&(0!==c.avail_out&&r!==o.Z_STREAM_END&&(0!==c.avail_in||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||("string"===this.options.to?(f=a.utf8border(c.output,c.next_out),u=c.next_out-f,h=a.buf2string(c.output,f),c.next_out=u,c.avail_out=d-u,u&&i.arraySet(c.output,c.output,f,u,0),this.onData(h)):this.onData(i.shrinkBuf(c.output,c.next_out)))),0===c.avail_in&&0===c.avail_out&&(v=!0)}while((c.avail_in>0||0===c.avail_out)&&r!==o.Z_STREAM_END);return r===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(r=n.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),c.avail_out=0,!0)},h.prototype.onData=function(t){this.chunks.push(t)},h.prototype.onEnd=function(t){t===o.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},e.Inflate=h,e.inflate=c,e.inflateRaw=function(t,e){return(e=e||{}).raw=!0,c(t,e)},e.ungzip=c},364:function(t,e,r){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}}}]);