function XYb(a){this.b=a}
function UYb(a,b){this.b=a;this.c=b}
function qIb(b,a){return a.split(b)}
function _ib(a,b){var c;c=tjb((ojb(),b));return ajb(a,c,b,false)}
function QYb(a){var b,c,d;b=cTc(jq(a.b.db,K8c));c=cTc(jq(a.c.db,K8c));d=cTc(jq(a.d.db,K8c));hvc(a.g,Rbd+b+Sbd+c+Tbd+d+b4c);mvc(a.e,Rbd+_ib(a.f,b)+Sbd+iJb(c)+Tbd+_ib(a.f,d)+b4c)}
function tjb(a){var b,c,d,e,f,g;d=0;g=0;b=false;f=qIb(njb,a);for(c=0;c<f.length;++c){e=f[c];if(rIb(djb,e)){++d;++g}else rIb(hjb,e)?(b=true):rIb(ejb,e)?++g:rIb(gjb,e)&&(b=true)}return g==0?b?(jF(),hF):(jF(),gF):d/g>0.4000000059604645?(jF(),iF):(jF(),hF)}
function PYb(a){var b,c,d,e,f,g;d=new Sxc;b=nkb(d.k,99);d.p[R6c]=5;g=RJb(_ub);e=new Gqc(g);ki(e,new UYb(a,g),(iw(),iw(),hw));f=new Izc;f.f[R6c]=3;Fzc(f,new qvc(Mbd));Fzc(f,e);Mxc(d,0,0,f);_xc(b,0)[J8c]=2;Jxc(d,1,0,Nbd);Jxc(d,1,1,"User {0} ({1} posts) added a comment on '{2}'");a.b=new nDc;dDc(a.b,(oF(),'\u05EA\u05D5\u05DE\u05E8 \u05D2\u05E8\u05D9\u05DF'));Jxc(d,2,0,Obd);Mxc(d,2,1,a.b);a.c=new nDc;dDc(a.c,'16');Jxc(d,3,0,Pbd);Mxc(d,3,1,a.c);a.d=new nDc;dDc(a.d,'\u05DB\u05DE\u05D4 \u05D7\u05D5\u05DC \u05D9\u05E9 \u05D1\u05D7\u05D5\u05E3?');Jxc(d,4,0,Qbd);Mxc(d,4,1,a.d);a.g=new ovc;Jxc(d,5,0,'<b>Message formatted without BidiFormatter:<\/b>');Mxc(d,5,1,a.g);eyc(b,5,0,(czc(),bzc));a.e=new ovc;Jxc(d,6,0,'<b>Message formatted with BidiFormatter:<\/b>');Mxc(d,6,1,a.e);eyc(b,6,0,bzc);c=new XYb(a);ki(a.b,c,(Uw(),Uw(),Tw));ki(a.c,c,Tw);ki(a.d,c,Tw);QYb(a);return d}
var Tbd=" posts) added a comment on '",Rbd='User ';FHb(707,1,x1c,UYb);_.Gc=function VYb(a){KJb(this.b,this.c+Ubd)};_.b=null;_.c=null;FHb(708,1,i1c,XYb);_.Ic=function YYb(a){QYb(this.b)};_.b=null;FHb(709,1,A1c);_.pc=function aZb(){iKb(this.c,PYb(this.b))};var _ub=RRc(P7c,'BlogMessages'),cvb=PRc(P7c,'CwBidiFormatting$1',707),dvb=PRc(P7c,'CwBidiFormatting$2',708);n2c(wm)(27);