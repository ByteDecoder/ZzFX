// ZzFXmicro - Zuper Zmall Zound Zynth - MIT License - Copyright 2019 Frank Force
zzfx_v=.5
zzfx_x=new AudioContext
zzfx=(g,h,a,b=1,c=.1,k=0,f=0,l=0,m=0)=>{let q=44100,Q=Q=>Q*(Math.random()*2-1),d=2*Math.PI;a=d/q*a*(1+Q(h));k*=500*d/q**2;b=q*b|0;c=c*b|0;l=d/q*l;m=d/2*m;h=[];for(let n=d=0,e=0;e<b;++e)h[e]=g*zzfx_v*Math.cos(d*a*Math.cos(n*l+m))*(e<c?e/c:1-(e-c)/(b-c)),d+=1+Q(f),n+=1+Q(f),a+=k;g=zzfx_x.createBuffer(1,b,q);a=zzfx_x.createBufferSource();g.getChannelData(0).set(h);a.buffer=g;a.connect(zzfx_x.destination);a.start()}