function Lhb(a){this.b=a}
function Ihb(a,b){this.b=a;this.c=b}
function e1(b,a){return a.split(b)}
function uF(a,b){var c;c=OF((JF(),b));return vF(a,c,b,false)}
function Ehb(a){var b,c,d;b=Sbc(jq(a.b.db,$sc));c=Sbc(jq(a.c.db,$sc));d=Sbc(jq(a.d.db,$sc));XPb(a.g,awc+b+bwc+c+cwc+d+Qoc);aQb(a.e,awc+uF(a.f,b)+bwc+Y1(c)+cwc+uF(a.f,d)+Qoc)}
function OF(a){var b,c,d,e,f,g;d=0;g=0;b=false;f=e1(IF,a);for(c=0;c<f.length;++c){e=f[c];if(f1(yF,e)){++d;++g}else f1(CF,e)?(b=true):f1(zF,e)?++g:f1(BF,e)&&(b=true)}return g==0?b?(QC(),OC):(QC(),NC):d/g>0.4000000059604645?(QC(),PC):(QC(),OC)}
function Dhb(a){var b,c,d,e,f,g;d=new GSb;b=IG(d.k,98);d.p[frc]=5;g=F2(PP);e=new uLb(g);ki(e,new Ihb(a,g),(iw(),iw(),hw));f=new wUb;f.f[frc]=3;tUb(f,new eQb(Xvc));tUb(f,e);ASb(d,0,0,f);PSb(b,0)[Zsc]=2;xSb(d,1,0,Yvc);xSb(d,1,1,"User {0} ({1} posts) added a comment on '{2}'");a.b=new bYb;TXb(a.b,(VC(),'\u05EA\u05D5\u05DE\u05E8 \u05D2\u05E8\u05D9\u05DF'));xSb(d,2,0,Zvc);ASb(d,2,1,a.b);a.c=new bYb;TXb(a.c,'16');xSb(d,3,0,$vc);ASb(d,3,1,a.c);a.d=new bYb;TXb(a.d,'\u05DB\u05DE\u05D4 \u05D7\u05D5\u05DC \u05D9\u05E9 \u05D1\u05D7\u05D5\u05E3?');xSb(d,4,0,_vc);ASb(d,4,1,a.d);a.g=new cQb;xSb(d,5,0,'<b>Message formatted without BidiFormatter:<\/b>');ASb(d,5,1,a.g);USb(b,5,0,(STb(),RTb));a.e=new cQb;xSb(d,6,0,'<b>Message formatted with BidiFormatter:<\/b>');ASb(d,6,1,a.e);USb(b,6,0,RTb);c=new Lhb(a);ki(a.b,c,(Uw(),Uw(),Tw));ki(a.c,c,Tw);ki(a.d,c,Tw);Ehb(a);return d}
var cwc=" posts) added a comment on '",awc='User ';t0(620,1,lmc,Ihb);_.Gc=function Jhb(a){y2(this.b,this.c+dwc)};_.b=null;_.c=null;t0(621,1,Ylc,Lhb);_.Ic=function Mhb(a){Ehb(this.b)};_.b=null;t0(622,1,omc);_.pc=function Qhb(){Y2(this.c,Dhb(this.b))};var PP=Fac(dsc,'BlogMessages'),SP=Dac(dsc,'CwBidiFormatting$1',620),TP=Dac(dsc,'CwBidiFormatting$2',621);bnc(wm)(27);