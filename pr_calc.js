// ===== PR INCOME CALCULATOR (Calculadora Promotor 2026) =====
// Nguồn: TRG Resumen políticas de comisiones 2026 – Mobile, Digital y FTTH, sección 1. Promotor.
// Mô phỏng: số tiền thực nhận do Phòng Kinh doanh tính. Logic 1:1 với bảng Tính_Promotor_2026 (giá trị ví dụ = artifact).
var PR = {
  tipo: 'Antiguo', zona: 'Urbana', dias: 22,
  pre: [
    { n:'Bifri 5 + recarga ≥ S/5', t:'LN',  F:1.5,  G:0.9, H:4, I:0.6, L:0, M:1, E:5,  C:20, D:15 },
    { n:'Bifri 5 + recarga ≥ S/5', t:'MNP', F:2.25, G:0.9, H:4, I:0.6, L:1, M:1, E:5,  C:4,  D:2  },
    { n:'Papa + addon S/5 – 9.99', t:'LN',  F:1.5,  G:0.9, H:0, I:0.6, L:0, M:0, E:5,  C:5,  D:5  },
    { n:'Papa + addon ≥ S/10',     t:'LN',  F:3,    G:1.8, H:0, I:0.8, L:0, M:1, E:10, C:8,  D:4  },
    { n:'Papa + addon ≥ S/10',     t:'MNP', F:4.5,  G:2.7, H:0, I:1,   L:1, M:1, E:10, C:3,  D:1  }
  ],
  post: [
    { n:'S/15 – 19.89',            F:1.5, G:0.9, H:7.5, C:0, D:0 },
    { n:'S/19.90 – 29.89',         F:1.5, G:0.9, H:11,  C:0, D:0 },
    { n:'S/29.90 – 39.89',         F:3,   G:1.8, H:25,  C:3, D:2 },
    { n:'S/39.90 – 40.89',         F:6,   G:3.6, H:30,  C:4, D:1 },
    { n:'S/40.90 – 49.89',         F:6,   G:3.6, H:32,  C:0, D:0 },
    { n:'Ilimitado 49.90 5G',      F:6,   G:3.6, H:40,  C:2, D:0 },
    { n:'S/49.90 – 55.89 (otros)', F:6,   G:3.6, H:35,  C:0, D:0 },
    { n:'S/55.90 – 59.89',         F:6,   G:3.6, H:40,  C:0, D:0 },
    { n:'S/59.90 – 65.89',         F:6,   G:3.6, H:45,  C:0, D:0 },
    { n:'S/65.90 – 79.89',         F:6,   G:3.6, H:55,  C:0, D:0 },
    { n:'S/79.90 – 105.89',        F:6,   G:3.6, H:65,  C:0, D:0 },
    { n:'S/105.90 a más',          F:6,   G:3.6, H:80,  C:0, D:0 },
    { n:'Fútbol Tricampeón / Cajacho 45.90', F:7.5, G:4.5, H:32, C:1, D:0 },
    { n:'Fútbol Hincha 55.90',     F:7.5, G:4.5, H:40, C:0, D:0 },
    { n:'Fútbol MAX 85.90 / Hincha MAX 89.90', F:7.5, G:4.5, H:65, C:0, D:0 }
  ],
  o: { p41:2, p42:0, p43:150, p44:60, p45:0, p46:0, p47:1, p48:0, p49:0,
    p50:25, p51:30, p52:300, p53:10, p54:20, p55:10, p56:8, p57:40,
    p58:3, p59:1, p60:0, p61:0, p62:5, p63:0, p64:10, p65:2, p66:0, p67:0, p68:4, p69:0 },
  meta: 2500
};
var PR_DEFAULT = JSON.parse(JSON.stringify(PR));
var PR_UI = { collapsed:{}, view:'calc' };

function prSoporte(pts, tipo){
  if ((tipo==='Nuevo' && pts<15) || (tipo!=='Nuevo' && pts<30)) return 0;
  return Math.min(pts,29)*3 + Math.max(0,Math.min(pts,59)-29)*4 +
         Math.max(0,Math.min(pts,89)-59)*5 + Math.max(0,pts-89)*6;
}
function prBonoPortab(L){ return Math.min(L,5)*5 + Math.max(0,Math.min(L,10)-5)*8 + Math.max(0,Math.min(L,15)-10)*12 + Math.max(0,L-15)*15; }
function prBonoPerman(recL, dias){ if (recL<50) return 0; return dias>=25?100 : dias>=20?75 : dias>=15?50 : 0; }
function prTarCash(m){ return m>=50?0.3 : m>=30?0.2 : m>=10?0.15 : m>=5?0.1 : 0; }

function prCompute(){
  var s=PR, o=s.o;
  var J17=0,K17=0,C17=0,D17=0,Llines=0,Mlines=0,autoB=0,bono1=0,preLines=0;
  s.pre.forEach(function(r){
    var C=+r.C||0, D=+r.D||0, E=+r.E||0;
    J17 += C*r.F + D*r.G; autoB += (C+D)*r.H; bono1 += (C+D)*E*r.I;
    K17 += (C+D)*r.H + (C+D)*E*r.I;
    C17 += C; D17 += D; Llines += (C+D)*r.L; Mlines += (C+D)*r.M; preLines += C+D;
  });
  var J37=0,K37=0,C37=0,D37=0,postLines=0;
  s.post.forEach(function(r){ var C=+r.C||0, D=+r.D||0; J37 += C*r.F + D*r.G; K37 += (C+D)*r.H; C37 += C; D37 += D; postLines += C+D; });
  var H50 = s.zona==='Rural'?1.5:1, H51 = s.zona==='Rural'?1:0.5;
  var K41=o.p41*12, K42=o.p42*0.1, K43=o.p43*0.2, K44=o.p44*0.2,
      K45=o.p45*4, K46=o.p46*9, K47=o.p47*82.5, K48=o.p48*196.2, K49=o.p49*278,
      K50=o.p50*H50, K51=o.p51*H51, K52=o.p52*0.055, K53=o.p53*0.2,
      K55=o.p54*prTarCash(o.p55), K57=o.p57*(o.p57>=500?0.3:0.2),
      K58=o.p58*2.85, K59=o.p59*8.55, K60=o.p60*17.1, K61=o.p61*28.5,
      K62=Math.min(o.p62*3,100), K63=o.p63*10, K64=o.p64*1, K65=o.p65*3,
      K66=o.p66*1, K67=o.p67*2, K68=o.p68*3;
  var pts=J17+J37, sop=prSoporte(pts, s.tipo);
  var K75=K17+K43+K45+K46, K76=K37+K42, K77=K44+K47+K48+K49;
  var K78=K50+K51+K52+K53+K55+K57+K58+K59+K60+K61;
  var K80=prBonoPortab(Llines), K82=prBonoPerman(Mlines, s.dias);
  var K83=K80+K82+K41+K62+K63+K64+K65+K66+K67+K68;
  var K84=sop+K75+K76+K77+K78+K83;
  var act=C17+D17+C37+D37;
  var kpiDig=act>0?(o.p51+C17+C37+o.p56)/act:0, kpiCash=act>0?(C17+C37)/act:0, kpiNew=act>0?(o.p64+o.p65)/act:0;
  var K89=(act>0 && !(kpiDig>=0.3 && kpiCash>=0.1) && kpiNew<0.55)? -0.15*K84 : 0;
  var K90=(act>0 && o.p57<10)? -0.1*K84 : 0, K91=-o.p69, K92=K84+K89+K90+K91;
  return { pts:pts,J17:J17,J37:J37,sop:sop,K17:K17,autoB:autoB,bono1:bono1,preLines:preLines,postLines:postLines,
    K37:K37,K41:K41,K42:K42,K43:K43,K44:K44,K45:K45,K46:K46,K47:K47,K48:K48,K49:K49,
    K50:K50,K51:K51,K52:K52,K53:K53,K55:K55,K57:K57,K58:K58,K59:K59,K60:K60,K61:K61,
    K62:K62,K63:K63,K64:K64,K65:K65,K66:K66,K67:K67,K68:K68,
    K75:K75,K76:K76,K77:K77,K78:K78,K80:K80,K82:K82,K83:K83,K84:K84,
    Llines:Llines,Mlines:Mlines,act:act,kpiDig:kpiDig,kpiCash:kpiCash,kpiNew:kpiNew,
    K89:K89,K90:K90,K91:K91,K92:K92,C17:C17,D17:D17,C37:C37,D37:D37 };
}

if (typeof module!=='undefined' && module.exports){ module.exports={PR:PR,prCompute:prCompute,prSoporte:prSoporte}; }

// ===================== UI =====================
function prMoney(x){ return 'S/ '+(Math.round(x*100)/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function prNum(x){ return (Math.round(x*10)/10).toLocaleString('en-US',{maximumFractionDigits:1}); }
function prEsc(s){ return (s==null?'':String(s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function prInp(val, oninput, w){
  return '<input type="number" inputmode="decimal" value="'+(val===0?'0':prEsc(val))+'" oninput="'+oninput+'" '+
    'style="width:'+(w||60)+'px;padding:5px 7px;border:1px solid var(--border);border-radius:6px;font-size:12px;text-align:right;box-sizing:border-box;background:#fffdf3">';
}
function prTipoLabel(t){ return t==='MNP'?'Chuyển mạng':'Line mới'; }

function prLoadExample(){ PR = JSON.parse(JSON.stringify(PR_DEFAULT)); buildPrPage(); }
function prClear(){
  PR.pre.forEach(function(r){ r.C=0; r.D=0; });
  PR.post.forEach(function(r){ r.C=0; r.D=0; });
  for (var k in PR.o) PR.o[k]=0;
  buildPrPage();
}
function prSet(){ var a=arguments,obj=PR,last=a.length-1,val=a[last]; for(var i=0;i<last-1;i++) obj=obj[a[i]]; var n=parseFloat(val); obj[a[last-1]]=isNaN(n)?0:n; prRefresh(); }
function prSetStr(p,v){ if(p==='tipo')PR.tipo=v; else PR.zona=v; buildPrPage(); }
function prSetDias(v){ var n=parseFloat(v); PR.dias=isNaN(n)?0:n; prRefresh(); }
function prSetMeta(v){ var n=parseFloat(v); PR.meta=isNaN(n)?0:n; prRefreshGoal(); }
function prToggleSec(n){ PR_UI.collapsed[n]=!PR_UI.collapsed[n]; buildPrPage(); }

function buildPrPage(){
  var root=document.getElementById('prBody'); if(!root) return;
  var tabBar='<div style="display:flex;gap:4px;margin-bottom:14px;border-bottom:2px solid var(--border)">'+prViewTab('calc','\ud83d\udcb0 T\u00ednh thu nh\u1eadp')+prViewTab('policy','\ud83d\udccb Ch\u00ednh s\u00e1ch')+'</div>';
  if(PR_UI.view==='policy'){ root.innerHTML=tabBar+prPolicyHtml(); return; }
  var h='';
  h+='<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:14px;flex-wrap:wrap;margin-bottom:14px">';
  h+='<p style="font-size:12.5px;color:var(--muted);margin:0;max-width:640px;line-height:1.55">'+
     'Nhập kết quả bán hàng trong tháng để xem soporte, hoa hồng, thưởng và các khoản bị trừ theo chính sách PR 2026. '+
     'Trang cũng tính số lượng cần bán để đạt mục tiêu thu nhập.</p>';
  h+='<div style="display:flex;gap:6px;flex-wrap:wrap">'+
     '<button onclick="prLoadExample()" class="sol-btn">↻ Nạp ví dụ</button>'+
     '<button onclick="prClear()" class="sol-btn">✕ Xóa hết</button></div>';
  h+='</div>';

  h+='<div style="display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:16px;align-items:start" id="prGrid"><div id="prInputs">';

  h+=prSec(1,'Thông tin tháng','');
  if(!PR_UI.collapsed[1]){
    h+='<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:flex-end;padding:4px 2px">';
    h+='<div><div style="font-size:11px;color:var(--muted);margin-bottom:4px">Loại PR</div>'+prTog('tipo',[['Antiguo','PR cũ'],['Nuevo','PR mới']],PR.tipo)+'</div>';
    h+='<div><div style="font-size:11px;color:var(--muted);margin-bottom:4px">Khu vực</div>'+prTog('zona',[['Urbana','Thành thị'],['Rural','Nông thôn']],PR.zona)+'</div>';
    h+='<div><div style="font-size:11px;color:var(--muted);margin-bottom:4px">Số ngày làm việc (≥3 KH/ngày)</div>'+prInp(PR.dias,'prSetDias(this.value)',72)+'</div>';
    h+='</div>'; }
  h+='</div>';

  h+=prSec(2,'Kích hoạt trả trước','<span id="prPreCount"></span>');
  if(!PR_UI.collapsed[2]){
    h+='<p style="font-size:10.5px;color:var(--muted);margin:0 2px 8px">"Có cash-in" = Bipay + login + cash-in ≥ S/5 và có tiêu. "Số tiền" = nạp tiền/gói trung bình trong ngày kích hoạt.</p>';
    h+='<div style="overflow-x:auto"><table class="tbl" style="min-width:540px"><thead><tr>'+
       '<th style="text-align:left">Sản phẩm</th><th class="num">Có cash-in</th><th class="num">Không cash-in</th><th class="num">Số tiền S/</th><th class="num">Điểm</th></tr></thead><tbody>';
    PR.pre.forEach(function(r,i){
      h+='<tr><td><div style="font-size:12px;font-weight:600">'+prEsc(r.n)+'</div>'+
         '<div style="font-size:10px;color:var(--muted)">'+prTipoLabel(r.t)+' · '+r.F+' / '+r.G+' pts</div></td>'+
         '<td class="num">'+prInp(r.C,"prSet('pre',"+i+",'C',this.value)")+'</td>'+
         '<td class="num">'+prInp(r.D,"prSet('pre',"+i+",'D',this.value)")+'</td>'+
         '<td class="num">'+prInp(r.E,"prSet('pre',"+i+",'E',this.value)",54)+'</td>'+
         '<td class="num" id="pr-pe-'+i+'" style="color:#0f4c81;font-weight:700">–</td></tr>';
    });
    h+='</tbody></table></div>'; }
  h+='</div>';

  h+=prSec(3,'Kích hoạt trả sau','<span id="prPostCount"></span>');
  if(!PR_UI.collapsed[3]){
    h+='<div style="overflow-x:auto"><table class="tbl" style="min-width:500px"><thead><tr>'+
       '<th style="text-align:left">Cước cố định</th><th class="num">Có cash-in</th><th class="num">Không cash-in</th><th class="num">Điểm</th></tr></thead><tbody>';
    PR.post.forEach(function(r,i){
      h+='<tr><td><div style="font-size:12px;font-weight:600">'+prEsc(r.n)+'</div>'+
         '<div style="font-size:10px;color:var(--muted)">Hoa hồng S/'+r.H+' · '+r.F+' / '+r.G+' pts</div></td>'+
         '<td class="num">'+prInp(r.C,"prSet('post',"+i+",'C',this.value)")+'</td>'+
         '<td class="num">'+prInp(r.D,"prSet('post',"+i+",'D',this.value)")+'</td>'+
         '<td class="num" id="pr-po-'+i+'" style="color:#0f4c81;font-weight:700">–</td></tr>';
    });
    h+='</tbody></table></div>';
    h+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-top:12px">';
    h+=prFld('Trong đó, số line chuyển mạng trả sau (thưởng S/12)','p41');
    h+=prFld('Tiền cước trả trước thu qua Bipay (tổng S/)','p42');
    h+='</div>'; }
  h+='</div>';

  h+=prSec(4,'Bán hàng khác','');
  if(!PR_UI.collapsed[4]){
    h+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px 14px;padding:2px">';
    h+=prFld('Khách nạp thêm từ hôm sau đến ngày 7 của N+1 (S/) – 2do bônus 20%','p43');
    h+=prFld('Gói bán qua SMS 9123 / Bitel Ventas (S/) · 20%','p44');
    h+=prFld('Bifri 10 (số lượng) · S/4','p45');
    h+=prFld('Turista (số lượng) · S/9','p46');
    h+=prFld('FTTH Bitel Fibra 200 · S/55 ×150% (N, N+1, N+2)','p47');
    h+=prFld('FTTH Bitel Fibra 400 · S/109 ×180%','p48');
    h+=prFld('FTTH Bitel Fibra 1GB · S/139 ×200%','p49');
    h+='</div>'; }
  h+='</div>';

  h+=prSec(5,'Dịch vụ số','');
  if(!PR_UI.collapsed[5]){
    h+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px 14px;padding:2px">';
    h+=prFld('Giới thiệu Bipay (cài app + tạo tài khoản + login)','p50');
    h+=prFld('Đăng ký TV360 (xem 60 giây)','p51');
    h+=prFld('Nạp tiền / thanh toán Bitel / gói qua Bipay (S/) · 5.5%','p52');
    h+=prFld('Thanh toán hóa đơn dịch vụ (số lượng)','p53');
    h+=prFld('Cash-in cho khách (số lần)','p54');
    h+=prFld('Số tiền trung bình mỗi lần cash-in (S/)','p55');
    h+=prFld('Số vé TuSami đã bán (KPI)','p56');
    h+=prFld('Doanh số TuSami qua Bipay (S/) · 20% (30% nếu ≥500)','p57');
    h+=prFld('Khách TuSami mới tiêu ≥ S/5','p58');
    h+=prFld('… tiêu ≥ S/15','p59');
    h+=prFld('… tiêu ≥ S/30','p60');
    h+=prFld('… tiêu ≥ S/50','p61');
    h+='</div><p style="font-size:10px;color:var(--muted);margin:8px 2px 0">Mỗi khách TuSami chỉ tính ở một mức (mức cao nhất đạt được).</p>'; }
  h+='</div>';

  h+=prSec(6,'Thưởng và New ID','');
  if(!PR_UI.collapsed[6]){
    h+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px 14px;padding:2px">';
    h+=prFld('Free chip đã kích hoạt (S/3 mỗi chip, tối đa S/100)','p62');
    h+=prFld('Chủ nhật vùng nông thôn có ≥5 kích hoạt (1 trả trước + 1 trả sau)','p63');
    h+=prFld('New ID: trả trước hoặc control < S/39.90','p64');
    h+=prFld('New ID: control ≥ S/39.90','p65');
    h+=prFld('MNP Bitel Ventas: 30–59 ngày ở nhà mạng cũ','p66');
    h+=prFld('MNP Bitel Ventas: 60–89 ngày','p67');
    h+=prFld('MNP Bitel Ventas: ≥ 90 ngày','p68');
    h+=prFld('Line cho khách nước ngoài (−S/1 mỗi line)','p69');
    h+='</div>'; }
  h+='</div>';

  h+='</div>'; // /prInputs
  h+='<div style="position:sticky;top:10px"><div id="prResults"></div><div id="prKpiBox" style="margin-top:14px"></div><div id="prGoalBox" style="margin-top:14px"></div></div>';
  h+='</div>'; // /prGrid

  h+='<p style="font-size:10.5px;color:var(--muted);margin-top:16px;line-height:1.55;border-top:1px solid var(--border);padding-top:9px">'+
     'Nguồn: <b>TRG Resumen políticas de comisiones 2026 – Mobile, Digital y FTTH</b>, sả 1. Promotor. '+
     'Đây là số mô phỏng — số tiền thực nhận do Phòng Kinh doanh tính. '+
     'Chưa tính: PR Exclusivo nông thôn, phạt giới thiệu TV360 lặp cùng máy (−15%), phạt giao dịch giả (−100%).</p>';
  root.innerHTML=tabBar+h;
  prRefresh();
}

function prSec(n,title,right){
  var col=PR_UI.collapsed[n];
  return '<div class="section" style="margin-bottom:16px"><div class="section-head" style="display:flex;align-items:center;cursor:pointer" onclick="prToggleSec('+n+')">'+
    '<span style="display:inline-block;width:20px;height:20px;line-height:20px;text-align:center;background:rgba(255,255,255,.25);border-radius:5px;margin-right:8px;font-weight:800">'+n+'</span>'+
    '<span style="flex:1">'+title+'</span>'+
    '<span style="font-size:11px;font-weight:600;opacity:.9;margin-right:8px">'+(right||'')+'</span>'+
    '<span style="font-size:15px;font-weight:700">'+(col?'+':'–')+'</span></div>'+
    (col?'':'<div class="section-body">');
}
function prTog(path,opts,cur){
  var h='<div style="display:inline-flex;border:1px solid var(--border);border-radius:7px;overflow:hidden">';
  opts.forEach(function(o){ var on=(cur===o[0]);
    h+='<button onclick="prSetStr(\''+path+'\',\''+o[0]+'\')" style="padding:6px 12px;font-size:12px;font-weight:600;border:0;cursor:pointer;'+(on?'background:#1e3a8a;color:#fff':'background:#fff;color:#475569')+'">'+o[1]+'</button>'; });
  return h+'</div>';
}
function prFld(lbl,key){ return '<div style="display:flex;flex-direction:column;gap:4px"><label style="font-size:11px;color:var(--text);line-height:1.35">'+lbl+'</label>'+prInp(PR.o[key],"prSet('o','"+key+"',this.value)",76)+'</div>'; }

function prRow(lbl,val,strong,color,indent){
  return '<div style="display:flex;justify-content:space-between;gap:10px;padding:'+(strong?'6px':'3px')+' 0 3px;font-size:'+(strong?'12.5px':'11.5px')+';'+(strong?'font-weight:700;border-top:1px solid var(--border);margin-top:4px':'')+'">'+
    '<span style="color:'+(strong?'var(--text)':'var(--muted)')+';'+(indent?'padding-left:10px':'')+'">'+lbl+'</span>'+
    '<span style="white-space:nowrap;color:'+(color||(strong?'var(--text)':'var(--muted)'))+';font-variant-numeric:tabular-nums">'+val+'</span></div>';
}

function prRefresh(){
  var c=prCompute();
  PR.pre.forEach(function(r,i){ var e=document.getElementById('pr-pe-'+i); if(e) e.textContent=prNum((+r.C||0)*r.F+(+r.D||0)*r.G); });
  PR.post.forEach(function(r,i){ var e=document.getElementById('pr-po-'+i); if(e) e.textContent=prNum((+r.C||0)*r.F+(+r.D||0)*r.G); });
  var pc=document.getElementById('prPreCount'); if(pc) pc.textContent=c.preLines+' line · '+prNum(c.J17)+' điểm';
  var qc=document.getElementById('prPostCount'); if(qc) qc.textContent=c.postLines+' line · '+prNum(c.J37)+' điểm';

  var r='<div class="section" style="margin-bottom:0;border-top:3px solid var(--accent)">'+
    '<div class="section-head" style="background:var(--accent);font-size:11px;letter-spacing:.5px">THU NHẬP DỰ KIẾN TRONG THÁNG</div>'+
    '<div class="section-body" style="padding:14px 15px">';
  r+='<div style="font-size:30px;font-weight:800;color:#0f4c81;line-height:1.1;margin-bottom:10px">'+prMoney(c.K92)+'</div>';
  r+=prRow('Soporte tháng ('+prNum(c.pts)+' điểm)', prMoney(c.sop), true, '#0f4c81');
  r+=prRow('Hoa hồng trả trước', prMoney(c.K75), true);
  r+=prRow('Autoliquidable Bifri 5', prMoney(c.autoB), false, null, true);
  r+=prRow('Thưởng lần 1 nạp tiền/gói', prMoney(c.bono1), false, null, true);
  r+=prRow('Thưởng lần 2 nạp tiền (20%)', prMoney(c.K43), false, null, true);
  if(c.K45+c.K46>0) r+=prRow('Bifri 10 / Turista', prMoney(c.K45+c.K46), false, null, true);
  r+=prRow('Hoa hồng trả sau', prMoney(c.K76), true);
  r+=prRow('Autoliquidable theo gói', prMoney(c.K37), false, null, true);
  if(c.K42>0) r+=prRow('Rentas adelantadas', prMoney(c.K42), false, null, true);
  r+=prRow('Gói cước và FTTH', prMoney(c.K77), true);
  r+=prRow('Gói 9123 / Bitel Ventas (20%)', prMoney(c.K44), false, null, true);
  r+=prRow('FTTH (trả vào N, N+1 và N+2)', prMoney(c.K47+c.K48+c.K49), false, null, true);
  r+=prRow('Dịch vụ số', prMoney(c.K78), true);
  r+=prRow('Giới thiệu Bipay', prMoney(c.K50), false, null, true);
  r+=prRow('Đăng ký TV360', prMoney(c.K51), false, null, true);
  r+=prRow('Giao dịch Bipay (5.5%)', prMoney(c.K52), false, null, true);
  r+=prRow('Thanh toán dịch vụ', prMoney(c.K53), false, null, true);
  r+=prRow('Cash-in', prMoney(c.K55), false, null, true);
  r+=prRow('Khách TuSami mới', prMoney(c.K58+c.K59+c.K60+c.K61), false, null, true);
  r+=prRow('Doanh số TuSami', prMoney(c.K57), false, null, true);
  r+=prRow('Thưởng', prMoney(c.K83), true);
  r+=prRow('Chuyển mạng trả trước ('+c.Llines+' line)', prMoney(c.K80), false, null, true);
  r+=prRow('Chuyển mạng trả sau', prMoney(c.K41), false, null, true);
  r+=prRow('Chuyển cấp ('+c.Mlines+' line nạp tiền)', prMoney(c.K82), false, null, true);
  r+=prRow('Free chip', prMoney(c.K62), false, null, true);
  if(c.K63>0) r+=prRow('Chủ nhật nông thôn', prMoney(c.K63), false, null, true);
  r+=prRow('New ID', prMoney(c.K64+c.K65), false, null, true);
  r+=prRow('MNP theo thời gian dùng', prMoney(c.K66+c.K67+c.K68), false, null, true);
  var ded=c.K89+c.K90+c.K91;
  r+=prRow('Khoản trừ', prMoney(ded), true, ded<0?'#dc2626':'#16a34a');
  r+='</div></div>';
  var lvl = c.pts>=90?'Mức 4: mỗi điểm thêm được S/6, không giới hạn' : c.pts>=60?'Mức 3: mỗi điểm S/5' : c.pts>=30?'Mức 2: mỗi điểm S/4' : (c.pts>=15?'Mức 1: mỗi điểm S/3':'Chưa đạt ngưỡng tối thiểu');
  var pctBar=Math.min(100, c.pts/120*100);
  r+='<div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:12px 14px;margin-top:12px">'+
     '<div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:6px"><span style="color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.4px">Soporte theo điểm</span><span style="font-weight:800;color:#0f4c81">'+prNum(c.pts)+'</span></div>'+
     '<div style="height:8px;background:#e2e8f0;border-radius:5px;overflow:hidden"><div style="height:100%;width:'+pctBar+'%;background:linear-gradient(90deg,#60a5fa,#1e3a8a)"></div></div>'+
     '<div style="display:flex;justify-content:space-between;font-size:9px;color:var(--muted);margin-top:3px"><span>0</span><span>15</span><span>30</span><span>60</span><span>90</span><span>120+</span></div>'+
     '<div style="font-size:11px;color:var(--text);margin-top:6px">'+lvl+'.</div></div>';
  var rp=document.getElementById('prResults'); if(rp) rp.innerHTML=r;
  prRefreshKpi(c); prRefreshGoal(c);
}

function prChip(lbl,valTxt,ok){
  return '<div style="border:1px solid '+(ok?'#bbf7d0':'#fecaca')+';background:'+(ok?'#f0fdf4':'#fef2f2')+';border-radius:9px;padding:9px 11px">'+
    '<div style="font-size:16px;font-weight:800;color:'+(ok?'#16a34a':'#dc2626')+'">'+valTxt+'</div>'+
    '<div style="font-size:10px;color:var(--muted);line-height:1.3;margin-top:2px">'+lbl+'</div></div>';
}
function prRefreshKpi(c){
  var h='<div class="section" style="margin-bottom:0;border-top:3px solid #475569">'+
    '<div class="section-head" style="background:#475569;font-size:11px;letter-spacing:.5px">KPI BỊ TRỪ TIỀN</div>'+
    '<div class="section-body" style="padding:12px 13px">';
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:9px">';
  h+=prChip('Dịch vụ số · mục tiêu 30%', Math.round(c.kpiDig*100)+'%', c.kpiDig>=0.3);
  h+=prChip('Cash-in Bipay · tối thiểu 10%', Math.round(c.kpiCash*100)+'%', c.kpiCash>=0.1);
  h+=prChip('New ID · mục tiêu 55%', Math.round(c.kpiNew*100)+'%', c.kpiNew>=0.55);
  h+=prChip('Vé TuSami · tối thiểu S/10', 'S/ '+prNum(PR.o.p57), PR.o.p57>=10);
  h+='</div>';
  var msg = (c.K89<0||c.K90<0)? '⚠ Bị trừ: '+prMoney(c.K89+c.K90) : '✓ Đạt KPI: không bị trừ';
  h+='<div style="font-size:11.5px;font-weight:700;margin-top:9px;color:'+((c.K89<0||c.K90<0)?'#dc2626':'#16a34a')+'">'+msg+'</div>';
  h+='</div></div>';
  var kb=document.getElementById('prKpiBox'); if(kb) kb.innerHTML=h;
}

function prGoalMetrics(){
  var arr=[];
  PR.pre.forEach(function(r){ var lab=r.n+' · '+prTipoLabel(r.t);
    if(+r.C>0) arr.push({l:lab+' (có cash-in)', c:+r.C});
    if(+r.D>0) arr.push({l:lab+' (không cash-in)', c:+r.D}); });
  PR.post.forEach(function(r){ if(+r.C>0) arr.push({l:r.n+' (có)', c:+r.C}); if(+r.D>0) arr.push({l:r.n+' (không)', c:+r.D}); });
  var dig={p50:'Giới thiệu Bipay',p51:'Đăng ký TV360',p53:'Thanh toán dịch vụ',p54:'Cash-in cho khách',p56:'Vé TuSami',p58:'Khách TuSami ≥S/5',p59:'Khách TuSami ≥S/15',p62:'Free chip',p64:'New ID <S/39.90',p65:'New ID ≥S/39.90',p68:'MNP ≥90 ngày',p44:'Gói 9123 (S/)',p47:'FTTH Fibra 200'};
  for(var k in dig){ if(PR.o[k]>0) arr.push({l:dig[k], c:PR.o[k]}); }
  arr.sort(function(a,b){ return b.c-a.c; });
  return arr;
}
function prRefreshGoal(c){
  c=c||prCompute();
  var meta=PR.meta, cur=c.K92;
  var ratio = cur>0? meta/cur : 0;
  var ratioTxt = (Math.floor(ratio*100)/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  var need = Math.round(c.act*ratio), perDay = PR.dias>0? need/PR.dias : 0;
  var h='<div class="section" style="margin-bottom:0;border-top:3px solid #6d28d9">'+
    '<div class="section-head" style="background:#6d28d9;font-size:11px;letter-spacing:.5px">TÔI CẦN BÁN BAO NHIÊU?</div>'+
    '<div class="section-body" style="padding:13px 15px">';
  h+='<div style="font-size:11px;color:var(--muted);margin-bottom:4px">Mục tiêu thu nhập (S/)</div>'+prInp(meta,"prSetMeta(this.value)",120);
  h+='<div style="margin-top:10px;font-size:22px;font-weight:800;color:#6d28d9">×'+ratioTxt+' <span style="font-size:11px;font-weight:500;color:var(--muted)">so với số bán hiện tại</span></div>';
  if(ratio>0){
    h+='<div style="font-size:12px;color:var(--text);line-height:1.55;margin-top:6px">Bạn cần khoảng <b>'+need+' kích hoạt</b> trong tháng (≈ '+prNum(perDay)+' mỗi ngày trong '+PR.dias+' ngày) để đạt '+prMoney(meta)+'.</div>';
    if(ratio>1){
      var mets=prGoalMetrics();
      h+='<table class="tbl" style="width:100%;margin-top:10px;font-size:11px"><thead><tr><th style="text-align:left">Sản phẩm</th><th class="num">Hiện tại → Cần đạt</th></tr></thead><tbody>';
      mets.slice(0,14).forEach(function(m){ h+='<tr><td style="font-size:11px">'+prEsc(m.l)+'</td><td class="num">'+m.c+' → <b>'+Math.ceil(m.c*ratio)+'</b></td></tr>'; });
      h+='</tbody></table>';
    } else { h+='<div style="font-size:11.5px;color:#16a34a;font-weight:700;margin-top:8px">✓ Đã đạt mục tiêu.</div>'; }
  }
  h+='</div></div>';
  var gb=document.getElementById('prGoalBox'); if(gb) gb.innerHTML=h;
}

// ===================== POLICY (Chính sách PR) =====================
function prSetView(v){ PR_UI.view=v; buildPrPage(); }
function prViewTab(v,label){
  var on=PR_UI.view===v;
  return '<button onclick="prSetView(\''+v+'\')" style="padding:8px 16px;font-size:13px;font-weight:700;border:0;background:none;cursor:pointer;'+
    (on?'color:#1e3a8a;border-bottom:3px solid #1e3a8a':'color:var(--muted);border-bottom:3px solid transparent')+'">'+label+'</button>';
}
function prPolSec(num,title,body,isNew){
  return '<div class="section" style="margin-bottom:16px"><div class="section-head">'+
    (isNew?'<span style="background:#fde047;color:#713f12;font-size:9px;font-weight:800;padding:2px 6px;border-radius:4px;margin-right:8px;vertical-align:middle">NEW</span>':'')+
    '<span style="display:inline-block;width:20px;height:20px;line-height:20px;text-align:center;background:rgba(255,255,255,.25);border-radius:5px;margin-right:8px;font-weight:800">'+num+'</span>'+title+
    '</div><div class="section-body">'+body+'</div></div>';
}
function prPolTbl(head, rows){
  var h='<div style="overflow-x:auto"><table class="tbl" style="min-width:420px"><thead><tr>';
  head.forEach(function(x,i){ h+='<th style="'+(i===0?'text-align:left':'text-align:left')+'">'+x+'</th>'; });
  h+='</tr></thead><tbody>';
  rows.forEach(function(r){ h+='<tr>'+r.map(function(c,i){ return '<td style="'+(i===0?'font-weight:600':'font-weight:700;color:#0f4c81')+';font-size:11.5px">'+c+'</td>'; }).join('')+'</tr>'; });
  return h+'</tbody></table></div>';
}
function prPolBul(items){ return '<ul style="margin:10px 0 0;padding-left:18px;font-size:12px;line-height:1.6;color:var(--text)">'+items.map(function(i){return '<li style="margin-bottom:4px">'+i+'</li>';}).join('')+'</ul>'; }

function prPolicyHtml(){
  var h='';
  h+='<p style="font-size:12.5px;color:var(--muted);margin:0 0 12px;line-height:1.55">Đây là cách tính thu nhập hằng tháng của Promotor (PR) theo chính sách hoa hồng 2026. Dùng hướng dẫn này cùng với tab Tính thu nhập.</p>';
  h+='<div style="background:#fde047;color:#713f12;font-weight:800;font-size:14px;padding:12px 16px;border-radius:10px;margin-bottom:16px;text-align:center">Thu nhập = Soporte tháng + Hoa hồng + Thưởng − Khoản trừ</div>';

  // 1
  h+=prPolSec(1,'Kích hoạt nào được tính', prPolBul([
    'Chỉ tính khách có DNI. Mỗi DNI tối đa 1 line Bifri mỗi tháng.',
    'Mỗi khách chỉ tính lần kích hoạt đầu tiên trong ngày.',
    'Trả trước: nạp tiền hoặc gói ≥ S/5 đến ngày 3 của N+1 và đạt 15C3D (tiêu dùng tối thiểu 15 cent USD và có lưu lượng 3 ngày trong tháng).',
    'Trả sau (gói ≥ S/19.90): line hoạt động có Register ít nhất 3 ngày, đến ngày 4 của N+1.',
    'IMEI: máy phải có mã TAC hợp lệ và được ghi nhận trong 24 giờ. Không tính nếu 1 IMEI có từ 3 line, 1 line chạy trên từ 3 máy, hoặc 1 máy ghi nhận từ 5 IMEI.',
    'Tính liên tục: đến ngày 3 của N+1 line phải có lưu lượng/Register, đến ngày 10 của N+1 phải giữ ít nhất 25%. Nếu không, không được trả soporte.',
    'Chip Mi Bitel tự kích hoạt được tính nếu khách nhập mã PR khi kích hoạt.',
    'Mỗi line của khách nước ngoài bị trừ thêm S/1.'
  ]));

  // 2
  var s2='<p style="font-size:11.5px;color:var(--muted);margin:0 0 10px;line-height:1.5">Mỗi kích hoạt được cộng điểm. "Có cash-in" = khách có Bipay + login + cash-in ≥ S/5 và có tiêu dùng (thanh toán dịch vụ, nạp tiền hoặc gói) đến ngày 4 của N+1.</p>';
  s2+=prPolTbl(['Sản phẩm','Có cash-in (LN/MNP)','Không cash-in (LN/MNP)'],[
    ['Bifri 5 + nạp ≥ S/5, hoặc Papa + addon S/5–9.99','1.5 / 2.25','0.9 / 0.9'],
    ['Papa + addon ≥ S/10','3 / 4.5','1.8 / 2.7'],
    ['Trả sau < S/29.90','1.5','0.9'],
    ['Trả sau S/29.90–39.89','3','1.8'],
    ['Trả sau ≥ S/39.90','6','3.6'],
    ['Gói Fútbol ≥ S/39.90','7.5','4.5']
  ]);
  s2+='<div style="height:10px"></div>';
  s2+=prPolTbl(['Mức','Điểm','S/ mỗi điểm','Tối đa mức','Cộng dồn'],[
    ['1','15–29','S/3 (chỉ PR mới)','S/87','S/87'],
    ['2','30–59','S/4','S/120','S/207'],
    ['3','60–89','S/5','S/150','S/357'],
    ['4','90+','S/6','Không giới hạn','Không giới hạn']
  ]);
  s2+='<p style="font-size:10.5px;color:var(--muted);margin:8px 0 0">Trả theo bậc. Mức 1 chỉ dành cho PR tạo trong tháng; PR cũ phải đạt ít nhất 30 điểm (mức 2).</p>';
  s2+='<div style="background:#f8fafc;border-left:3px solid #1e3a8a;padding:8px 12px;margin-top:8px;font-size:11.5px">Ví dụ: 100 điểm = 29 × S/3 + 30 × S/4 + 30 × S/5 + 11 × S/6 = <b>S/423</b>.</div>';
  h+=prPolSec(2,'Soporte tháng theo điểm', s2);

  // 3
  var s3='<p style="font-size:12px;margin:0 0 10px;line-height:1.5"><b>Autoliquidable</b> (trả tiền mặt khi kích hoạt): Bifri 5 S/4 · Bifri 10 S/4 · Turista S/9. Bifri 10, Bifri 15 và Turista không tính điểm.</p>';
  s3+=prPolTbl(['Sản phẩm','Thưởng lần 1 (cùng ngày)','Thưởng lần 2 (đến ngày 7 của N+1)'],[
    ['Bifri 5 (LN hoặc MNP)','60% số tiền nạp','20% số tiền nạp'],
    ['Papa LN + addon S/5–9.99','60% giá gói','20% số tiền nạp'],
    ['Papa LN + addon ≥ S/10','80% giá gói','20% số tiền nạp'],
    ['Papa MNP + addon ≥ S/10','100% giá gói','20% số tiền nạp']
  ]);
  s3+=prPolBul([
    'Thưởng nạp tiền và gói được trả qua Bipay.',
    'Chip Papa giá S/1 cho kênh, được hoàn lại nếu line có lưu lượng từ ngày hôm sau.',
    'Gói bán qua SMS 9123 (IN + mã gói + số khách) hoặc Bitel Ventas: 20% giá gói, mỗi lần khách mua.'
  ]);
  h+=prPolSec(3,'Hoa hồng trả trước', s3);

  // 4
  var s4=prPolTbl(['Cước cố định của gói','Hoa hồng LN/MNP'],[
    ['S/15 – 19.89','S/7.5'],['S/19.90 – 29.89','S/11'],['S/29.90 – 39.89','S/25'],['S/39.90 – 40.89','S/30'],
    ['S/40.90 – 49.89','S/32'],['Ilimitado 49.90 5G','S/40'],['S/49.90 – 55.89','S/35'],['S/55.90 – 59.89','S/40'],
    ['S/59.90 – 65.89','S/45'],['S/65.90 – 79.89','S/55'],['S/79.90 – 105.89','S/65'],['S/105.90 +','S/80'],
    ['Fútbol Tricampeón / Cajacho 45.90','S/32'],['Fútbol Hincha 55.90','S/40'],['Fútbol MAX 85.90 / Hincha MAX 89.90','S/65']
  ]);
  s4+=prPolBul([
    'Trả trực tiếp (autoliquidable). Kích hoạt qua Mi Bitel tự kích hoạt được trả qua Bipay nếu khách nhập mã PR.',
    'Trả trước tiền cước: nếu khách trả trước 3 tháng qua Bipay, bạn nhận 10%. Ví dụ: 3 × S/39.90 = S/119.70 → S/11.97.'
  ]);
  h+=prPolSec(4,'Hoa hồng trả sau', s4);

  // 5
  var s5=prPolTbl(['Hạng mục','Mức trả'],[
    ['Giới thiệu Bipay (cài app + tạo tài khoản + login)','Thành thị S/1.00 · Nông thôn S/1.50'],
    ['Đăng ký TV360 (xem 60 giây)','Thành thị S/0.50 · Nông thôn S/1.00'],
    ['Giao dịch Bipay (nạp tiền, thanh toán Bitel, gói)','5.5%'],
    ['Thanh toán hóa đơn (nước, điện, khác)','S/0.20 mỗi giao dịch'],
    ['Cash-in cho khách','S/5–9.99: S/0.10 · S/10–29.99: S/0.15 · S/30–49.99: S/0.20 · ≥ S/50: S/0.30'],
    ['Khách TuSami mới (tiêu dùng trong tháng)','≥ S/5: S/2.85 · ≥ S/15: S/8.55 · ≥ S/30: S/17.10 · ≥ S/50: S/28.50'],
    ['Bán TuSami qua Bipay','20% mỗi giao dịch, +10% nếu tháng vượt S/500']
  ]);
  s5+='<p style="font-size:10.5px;color:var(--muted);margin:8px 0 0">Mỗi thiết bị và mỗi giấy tờ chỉ một lượt giới thiệu. Ghi "Mã kênh-Số điện thoại", ví dụ LI4PR12145-987123123.</p>';
  h+=prPolSec(5,'Dịch vụ số', s5);

  // 6
  var s6=prPolTbl(['Gói','Cước cố định','Tổng','N','N+1','N+2'],[
    ['Bitel Fibra 200','S/55','150%','60%','70%','20%'],
    ['Bitel Fibra 400','S/109','180%','60%','70%','50%'],
    ['Bitel Fibra 1GB','S/139','200%','60%','70%','70%']
  ]);
  s6+='<p style="font-size:10.5px;color:var(--muted);margin:8px 0 0;line-height:1.5">Trả tự động qua Bipay: phần N cuối tháng, N+1 vào ngày 1 của N+2, N+2 vào ngày 1 của N+3. Chỉ tính dịch vụ đang hoạt động, đã thanh toán và đã lắp đặt (kèm OTT: Mi Bitel + TV360 + Cable Go + Paramount+). Với khuyến mãi PACK, tính trên giá khách trả.</p>';
  h+=prPolSec(6,'FTTH', s6);

  // 7
  var s7=prPolTbl(['Thưởng','Mức trả','Điều kiện'],[
    ['Chuyển mạng trả trước','Theo số line trong tháng: 1–5 S/5 · 6–10 S/8 · 11–15 S/12 · 16+ S/15 (theo bậc)','Line dùng trên 90 ngày ở nhà mạng cũ, nạp hoặc gói ≥ S/5, có lưu lượng ngày hôm sau'],
    ['Chuyển mạng trả sau','S/12 mỗi line','Line MNP hoạt động, không bị khóa đến ngày 4 của N+2'],
    ['Chuyên cần','15–19 ngày S/50 · 20–24 ngày S/75 · 25+ ngày S/100','Tối thiểu 50 line có nạp (RC ≥ S/5 hoặc Papa + addon ≥ S/10). Ngày làm việc = 3 kích hoạt'],
    ['Chủ nhật nông thôn','S/10 mỗi chủ nhật','Từ 5 kích hoạt, ít nhất 1 trả trước và 1 trả sau ≥ S/29.90'],
    ['Free chip (thị phần)','S/3 mỗi chip, tối đa S/100','Papa và Flash 29.90 tại BTS được giao, chỉ khi khách không muốn mua'],
    ['New ID (Bitel Ventas)','S/1 trả trước và control < S/39.90 · S/3 control ≥ S/39.90','Khách không có line Bitel trên 1 năm'],
    ['MNP theo thời gian dùng (Bitel Ventas)','S/1 (≥ 30 ngày) · S/2 (≥ 60) · S/3 (≥ 90)','Thời gian dùng ở nhà mạng cũ']
  ]);
  h+=prPolSec(7,'Thưởng', s7);

  // 8
  var s8='<p style="font-size:12px;margin:0 0 8px;line-height:1.5">Áp dụng cho mọi PR có hoa hồng trong tháng. Nếu không đạt cả dịch vụ số LẪN New ID, bị trừ 15% tổng hoa hồng.</p>';
  s8+=prPolBul([
    '<b>Dịch vụ số</b> = (đăng ký TV360 + đăng ký Bipay có cash-in + vé TuSami) ÷ số kích hoạt trả trước và control. Cash-in phải đạt ít nhất 10%.',
    '<b>New ID</b> = số kích hoạt của khách không có line Bitel từ 6 tháng trở lên ÷ số kích hoạt trả trước và control.'
  ]);
  s8+='<div style="height:8px"></div>';
  s8+='<div style="overflow-x:auto"><table class="tbl" style="min-width:380px"><thead><tr><th style="text-align:left">Dịch vụ số</th><th style="text-align:left">New ID</th><th style="text-align:left">Kết quả</th></tr></thead><tbody>'+
    '<tr style="background:#f0fdf4"><td>≥ 30%</td><td>≥ 55%</td><td style="color:#16a34a;font-weight:700">✓ Không bị trừ</td></tr>'+
    '<tr style="background:#f0fdf4"><td>≥ 30%</td><td>&lt; 55%</td><td style="color:#16a34a;font-weight:700">✓ Không bị trừ</td></tr>'+
    '<tr style="background:#f0fdf4"><td>&lt; 30%</td><td>≥ 55%</td><td style="color:#16a34a;font-weight:700">✓ Không bị trừ</td></tr>'+
    '<tr style="background:#fef2f2"><td>&lt; 30%</td><td>&lt; 55%</td><td style="color:#dc2626;font-weight:700">−15% tổng hoa hồng</td></tr>'+
    '</tbody></table></div>';
  s8+=prPolBul([
    'TuSami: bán ít nhất S/10 vé trong tháng cho các khách khác nhau; nếu không, −10%.',
    'TV360: hơn 5 lượt giới thiệu trên cùng một máy → −15% và thu hồi các khoản thưởng đó.',
    'Giao dịch giả (chuyển và hoàn tiền cùng một số) → −100% hoa hồng của tháng.',
    'Bán line khách nước ngoài giả: trừ lại các khoản đã trả (thưởng nạp tiền và autoliquidable).'
  ]);
  h+=prPolSec(8,'Khoản bị trừ', s8);

  // 9 NEW
  var s9='<p style="font-size:12px;margin:0 0 10px;line-height:1.5">Thưởng một lần cho mã PR mới tạo từ 01 đến 15/10/2026 (áp dụng từ tháng 10/2026). Mã tạo sau ngày 15 được tính vào tháng sau.</p>';
  s9+=prPolTbl(['Hạng','Thưởng','Ngày làm việc','Kích hoạt'],[
    ['A','S/600','20','60'],
    ['B','S/300','10','45']
  ]);
  s9+=prPolBul([
    'Ngày làm việc = tối thiểu 2 chip kích hoạt trong ngày.',
    'Kích hoạt hợp lệ: trả trước có nạp tiền hoặc gói ≥ S/5 và trả sau ≥ S/29.90.',
    'Trả qua BiPay cuối tháng khi đạt mục tiêu. Phải có tài khoản BiPay đang hoạt động.',
    'Chỉ trả một hạng (hạng cao nhất) và không bị trừ KPI hay TuSami trên khoản thưởng này.',
    'Mã kích hoạt lại: do phòng Kinh doanh xem xét.',
    'Chi nhánh: ANC, CAJ, ICA, LAM, LI3, LI5, LI7, LI8, LOR, PIU, SAN, TAC, TUM, UCA.'
  ]);
  h+=prPolSec(9,'Chương trình Crece Promotor (mới)', s9, true);

  h+='<p style="font-size:10.5px;color:var(--muted);margin-top:4px;line-height:1.55;border-top:1px solid var(--border);padding-top:9px">Nguồn: <b>TRG Resumen políticas de comisiones 2026 – Mobile, Digital y FTTH</b> (mục 1. Promotor) và thông báo Chương trình Crece Promotor (tháng 10/2026). Số tiền thực nhận do phòng Kinh doanh tính.</p>';
  return h;
}
