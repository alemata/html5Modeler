function nRb(){}
function rRb(){}
function gRb(a,b){a.c=b}
function hRb(a){if(a==YQb){return true}uC();return a==_Qb}
function iRb(a){if(a==XQb){return true}uC();return a==WQb}
function pRb(a){this.c=(eTb(),_Sb).b;this.e=(lTb(),kTb).b;this.b=a}
function jRb(){aRb();jLb.call(this);this.c=(eTb(),_Sb);this.d=(lTb(),kTb);this.f[jqc]=0;this.f[kqc]=0}
function eRb(a,b){var c;c=hG(a.bb,96);c.c=b.b;!!c.d&&(c.d[hqc]=b.b,undefined)}
function fRb(a,b){var c;c=hG(a.bb,96);c.e=b.b;!!c.d&&_Hb(c.d,iqc,b.b)}
function aRb(){aRb=Dkc;VQb=new nRb;YQb=new nRb;XQb=new nRb;WQb=new nRb;ZQb=new nRb;$Qb=new nRb;_Qb=new nRb}
function bRb(a,b,c){var d;if(c==VQb){if(b==a.b){return}else if(a.b){throw new cac('Only one CENTER widget may be added')}}gi(b);U2b(a.k,b);c==VQb&&(a.b=b);d=new pRb(c);b.bb=d;eRb(b,a.c);fRb(b,a.d);dRb(a);ii(b,a)}
function cRb(a,b){var c,d,e,f,g,i,j;s2b(a.db,mmc,b);i=new gic;j=new d3b(a.k);while(j.b<j.c.d-1){c=b3b(j);g=hG(c.bb,96).b;e=hG(i.kd(g),143);d=!e?1:e.b;f=g==ZQb?'north'+d:g==$Qb?'south'+d:g==_Qb?'west'+d:g==WQb?'east'+d:g==YQb?'linestart'+d:g==XQb?'lineend'+d:Ypc;s2b(iq(c.db),b,f);i.md(g,rac(d+1))}}
function dRb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.e;while(mJb(b)>0){Rp(b,lJb(b,0))}q=1;e=1;for(i=new d3b(a.k);i.b<i.c.d-1;){d=b3b(i);f=hG(d.bb,96).b;f==ZQb||f==$Qb?++q:(f==WQb||f==_Qb||f==YQb||f==XQb)&&++e}r=YF(D$,Jkc,97,q,0);for(g=0;g<q;++g){r[g]=new rRb;r[g].c=$doc.createElement(fqc);SHb(b,r[g].c)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new d3b(a.k);i.b<i.c.d-1;){d=b3b(i);j=hG(d.bb,96);t=$doc.createElement(gqc);j.d=t;j.d[hqc]=j.c;_Hb(j.d,iqc,j.e);j.d[pmc]=mmc;j.d[nmc]=mmc;if(j.b==ZQb){UHb(r[o].c,t,r[o].b);SHb(t,d.db);t[asc]=n-k+1;++o}else if(j.b==$Qb){UHb(r[s].c,t,r[s].b);SHb(t,d.db);t[asc]=n-k+1;--s}else if(j.b==VQb){c=t}else if(hRb(j.b)){p=r[o];UHb(p.c,t,p.b++);SHb(t,d.db);t[Vsc]=s-o+1;++k}else if(iRb(j.b)){p=r[o];UHb(p.c,t,p.b);SHb(t,d.db);t[Vsc]=s-o+1;--n}}if(a.b){p=r[o];UHb(p.c,c,p.b);SHb(c,a.b.db)}}
R_(717,1,xlc);_.lc=function xnb(){var a,b,c;u2(this.b,(a=new jRb,a.db[omc]='cw-DockPanel',a.f[jqc]=4,gRb(a,(eTb(),$Sb)),bRb(a,new vPb('This is the first north component'),(aRb(),ZQb)),bRb(a,new vPb('This is the first south component'),$Qb),bRb(a,new vPb('This is the east component'),WQb),bRb(a,new vPb('This is the west component'),_Qb),bRb(a,new vPb('This is the second north component'),ZQb),bRb(a,new vPb('This is the second south component'),$Qb),b=new vPb("This is a <code>ScrollPanel<\/code> contained at the center of a <code>DockPanel<\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!"),c=new pMb(b),c.db.style[pmc]=Tsc,c.db.style[nmc]=Usc,bRb(a,c,VQb),cRb(a,'cwDockPanel'),a))};R_(1016,972,Nkc,jRb);_.Eb=function kRb(a){cRb(this,a)};_.Wb=function lRb(a){var b;b=_Jb(this,a);if(b){a==this.b&&(this.b=null);dRb(this)}return b};_.b=null;var VQb,WQb,XQb,YQb,ZQb,$Qb,_Qb;R_(1017,1,{},nRb);R_(1018,1,{96:1},pRb);_.b=null;_.d=null;R_(1019,1,{97:1},rRb);_.b=0;_.c=null;var YU=N9b(Zqc,'DockPanel',1016),XU=N9b(Zqc,'DockPanel$TmpRow',1019),D$=M9b(erc,'DockPanel$TmpRow;',1343,XU),VU=N9b(Zqc,'DockPanel$DockLayoutConstant',1017),WU=N9b(Zqc,'DockPanel$LayoutData',1018);kmc(km)(11);