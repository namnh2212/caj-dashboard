// ===== PR INCOME CALCULATOR (Calculadora Promotor 2026) =====
// Nguon: TRG Resumen politicas de comisiones 2026 - Mobile, Digital y FTTH, seccion 1. Promotor.
var PR = {
  tipo: 'Antiguo', zona: 'Urbana', dias: 22,
  pre: [
    { n:'Bifri 5 + recarga ≥ S/5', t:'LN',  F:1.5,  G:0.9, H:4, I:0.6, L:0, M:1, E:5,  C:10, D:15 },
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
    { n:'Ilimitado 49.90 5G',           F:6,   G:3.6, H:40,  C:2, D:0 },
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
  g: { meta:1500, dias:22, pctCash:0.6,
    mix:[0.30,0.08,0.13,0.16,0.08, 0,0,0.07,0.07,0,0.06,0,0,0,0,0,0,0.05,0,0] }
};

function prSoporte(pts, tipo){
  if ((tipo==='Nuevo' && pts<15) || (tipo!=='Nuevo' && pts<30)) return 0;
  return Math.min(pts,29)*3 + Math.max(0,Math.min(pts,59)-29)*4 +
         Math.max(0,Math.min(pts,89)-59)*5 + Math.max(0,pts-89)*6;
}
function prBonoPortab(L){
  return Math.min(L,5)*5 + Math.max(0,Math.min(L,10)-5)*8 +
         Math.max(0,Math.min(L,15)-10)*12 + Math.max(0,L-15)*15;
}
function prBonoPerman(recL, dias){
  if (recL<50) return 0;
  return dias>=25?100 : dias>=20?75 : dias>=15?50 : 0;
}
function prTarCash(m){ return m>=50?0.3 : m>=30?0.2 : m>=10?0.15 : m>=5?0.1 : 0; }

function prCompute(){
  var s=PR, o=s.o;
  var J17=0,K17=0,C17=0,D17=0,Llines=0,Mlines=0;
  s.pre.forEach(function(r){
    var C=+r.C||0, D=+r.D||0, E=+r.E||0;
    J17 += C*r.F + D*r.G;
    K17 += (C+D)*r.H + (C+D)*E*r.I;
    C17 += C; D17 += D; Llines += (C+D)*r.L; Mlines += (C+D)*r.M;
  });
  var J37=0,K37=0,C37=0,D37=0;
  s.post.forEach(function(r){
    var C=+r.C||0, D=+r.D||0;
    J37 += C*r.F + D*r.G; K37 += (C+D)*r.H; C37 += C; D37 += D;
  });
  var H50 = s.zona==='Rural'?1.5:1, H51 = s.zona==='Rural'?1:0.5;
  var K41=o.p41*12, K42=o.p42*0.1, K43=o.p43*0.2, K44=o.p44*0.2,
      K45=o.p45*4, K46=o.p46*9, K47=o.p47*82.5, K48=o.p48*196.2, K49=o.p49*278,
      K50=o.p50*H50, K51=o.p51*H51, K52=o.p52*0.055, K53=o.p53*0.2,
      K55=o.p54*prTarCash(o.p55), K57=o.p57*(o.p57>=500?0.3:0.2),
      K58=o.p58*2.85, K59=o.p59*8.55, K60=o.p60*17.1, K61=o.p61*28.5,
      K62=Math.min(o.p62*3,100), K63=o.p63*10, K64=o.p64*1, K65=o.p65*3,
      K66=o.p66*1, K67=o.p67*2, K68=o.p68*3;
  var pts=J17+J37;
  var sop=prSoporte(pts, s.tipo);
  var K75=K17+K43+K45+K46, K76=K37+K42, K77=K44+K47+K48+K49;
  var K78=K50+K51+K52+K53+K55+K57+K58+K59+K60+K61;
  var K80=prBonoPortab(Llines), K82=prBonoPerman(Mlines, s.dias);
  var K83=K80+K82+K41+K62+K63+K64+K65+K66+K67+K68;
  var K84=sop+K75+K76+K77+K78+K83;
  var act=C17+D17+C37+D37;
  var kpiDig=act>0?(o.p51+C17+C37+o.p56)/act:0;
  var kpiCash=act>0?(C17+C37)/act:0;
  var kpiNew=act>0?(o.p64+o.p65)/act:0;
  var K89=(act>0 && !(kpiDig>=0.3 && kpiCash>=0.1) && kpiNew<0.55)? -0.15*K84 : 0;
  var K90=(act>0 && o.p57<10)? -0.1*K84 : 0;
  var K91=-o.p69, K92=K84+K89+K90+K91;
  return { pts:pts,J17:J17,J37:J37,sop:sop,K17:K17,
    K41:K41,K42:K42,K43:K43,K44:K44,K45:K45,K46:K46,K47:K47,K48:K48,K49:K49,
    K50:K50,K51:K51,K52:K52,K53:K53,K55:K55,K57:K57,K58:K58,K59:K59,K60:K60,K61:K61,
    K62:K62,K63:K63,K64:K64,K65:K65,K66:K66,K67:K67,K68:K68,
    K75:K75,K76:K76,K77:K77,K78:K78,K80:K80,K82:K82,K83:K83,K84:K84,
    Llines:Llines,Mlines:Mlines,act:act,kpiDig:kpiDig,kpiCash:kpiCash,kpiNew:kpiNew,
    K89:K89,K90:K90,K91:K91,K92:K92,C17:C17,D17:D17,C37:C37,D37:D37 };
}

function prGoal(){
  var s=PR, g=s.g, pc=g.pctCash, rows=[];
  s.pre.forEach(function(r){ rows.push({ D:pc*r.F+(1-pc)*r.G, E:r.H+r.E*r.I, MNP:r.L, REC:r.M }); });
  s.post.forEach(function(r){ rows.push({ D:pc*r.F+(1-pc)*r.G, E:r.H, MNP:0, REC:0 }); });
  var mixSum=0, avgPts=0, avgCom=0, avgMNP=0, avgRec=0;
  rows.forEach(function(r,i){ var m=g.mix[i]||0; mixSum+=m; avgPts+=m*r.D; avgCom+=m*r.E; avgMNP+=m*r.MNP; avgRec+=m*r.REC; });
  var c=prCompute();
  var otros=c.K41+c.K42+c.K43+c.K45+c.K46+c.K62+c.K63+c.K64+c.K65+c.K66+c.K67+c.K68+c.K77+c.K78;
  function V(N){ var pts=N*avgPts;
    return prSoporte(pts,s.tipo)+N*avgCom+prBonoPortab(N*avgMNP)+prBonoPerman(N*avgRec,g.dias)+otros; }
  var need=null;
  for (var N=1; N<=500; N++){ if (V(N)>=g.meta){ need=N; break; } }
  return { mixSum:mixSum, avgPts:avgPts, avgCom:avgCom, otros:otros,
    need:need, perDay: need? need/g.dias : null,
    ratio:(c.K92>0? g.meta/c.K92 : null) };
}

if (typeof module!=='undefined' && module.exports){ module.exports={PR:PR,prCompute:prCompute,prGoal:prGoal,prSoporte:prSoporte}; }

// ===== PR CALCULATOR UI =====
function prMoney(x){ return 'S/ '+(Math.round(x*100)/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function prNum(x){ return (Math.round(x*100)/100).toLocaleString('en-US',{maximumFractionDigits:2}); }
function prEsc(s){ return (s==null?'':String(s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function prInp(val, oninput, w){
  return '<input type="number" inputmode="decimal" value="'+(val===0?'0':prEsc(val))+'" oninput="'+oninput+'" '+
    'style="width:'+(w||58)+'px;padding:5px 6px;border:1px solid var(--border);border-radius:6px;font-size:12px;text-align:right;box-sizing:border-box;background:#fffef5">';
}

function prSet(){
  var a=arguments, obj=PR, last=a.length-1, val=a[last];
  for (var i=0;i<last-1;i++){ obj=obj[a[i]]; }
  var key=a[last-1];
  var num=parseFloat(val); obj[key]=isNaN(num)?0:num;
  prRefresh();
}
function prSetStr(path, val){ if(path==='tipo')PR.tipo=val; else if(path==='zona')PR.zona=val; prRefresh(); }
function prSetDias(v){ var n=parseFloat(v); PR.dias=isNaN(n)?0:n; prRefresh(); }

function buildPrPage(){
  var root=document.getElementById('prBody'); if(!root) return;
  var h='';
  h+='<p style="font-size:12.5px;color:var(--muted);margin:0 0 14px;line-height:1.55">'+
     'Nhập kết quả bán hàng trong tháng → xem soporte, hoa hồng, thưởng và các khoản bị trừ theo chính sách PR 2026. '+
     '<b>Ô vàng</b> = nhập số liệu. Giá trị ban đầu = ví dụ mẫu.</p>';

  // layout: inputs (left) + sticky results (right)
  h+='<div style="display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:16px;align-items:start" id="prGrid">';
  h+='<div id="prInputs">';

  // --- 1. Profile ---
  h+=prCard('1', '👤 Thông tin tháng / Perfil');
  h+='<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;padding:4px 2px 2px">';
  h+='<div><div style="font-size:11px;color:var(--muted);margin-bottom:4px">Loại PR</div>'+
     prToggle('tipo',[['Antiguo','PR cũ'],['Nuevo','PR mới']], PR.tipo)+'</div>';
  h+='<div><div style="font-size:11px;color:var(--muted);margin-bottom:4px">Khu vực</div>'+
     prToggle('zona',[['Urbana','Thành thị'],['Rural','Nông thôn']], PR.zona)+'</div>';
  h+='<div><div style="font-size:11px;color:var(--muted);margin-bottom:4px">Số ngày làm việc (≥3 KH/ngày)</div>'+
     prInp(PR.dias,'prSetDias(this.value)',70)+'</div>';
  h+='</div></div>';

  // --- 2. Prepaid ---
  h+=prCard('2', '📱 Kích hoạt trả trước / Prepago');
  h+='<div style="overflow-x:auto"><table class="tbl" style="min-width:560px"><thead><tr>'+
     '<th style="text-align:left">Sản phẩm</th><th>Loại</th><th class="num">Có cash-in</th><th class="num">Không</th>'+
     '<th class="num">Monto S/</th><th class="num">Điểm</th><th class="num">Hoa hồng S/</th></tr></thead><tbody>';
  PR.pre.forEach(function(r,i){
    h+='<tr><td style="font-size:11.5px">'+prEsc(r.n)+'</td>'+
       '<td style="text-align:center"><span style="font-size:10px;font-weight:700;padding:2px 6px;border-radius:10px;background:'+(r.t==='MNP'?'#ede9fe;color:#6d28d9':'#dbeafe;color:#1e40af')+'">'+r.t+'</span></td>'+
       '<td class="num">'+prInp(r.C,"prSet('pre',"+i+",'C',this.value)")+'</td>'+
       '<td class="num">'+prInp(r.D,"prSet('pre',"+i+",'D',this.value)")+'</td>'+
       '<td class="num">'+prInp(r.E,"prSet('pre',"+i+",'E',this.value)",52)+'</td>'+
       '<td class="num" id="pr-pe-j-'+i+'">–</td>'+
       '<td class="num" id="pr-pe-k-'+i+'">–</td></tr>';
  });
  h+='<tr style="font-weight:700;background:#f8fafc"><td colspan="5" style="text-align:right">Tổng trả trước</td>'+
     '<td class="num" id="pr-pe-jt">–</td><td class="num" id="pr-pe-kt">–</td></tr>';
  h+='</tbody></table></div>';
  h+='<p style="font-size:10.5px;color:var(--muted);margin:6px 2px 0">Có cash-in = Bipay + login + cash-in ≥ S/5 và có tiêu. Hoa hồng = autoliquidable + thưởng lần 1 (% của monto).</p>';
  h+='</div>';

  // --- 3. Postpaid ---
  h+=prCard('3', '📶 Kích hoạt trả sau / Postpago');
  h+='<div style="overflow-x:auto"><table class="tbl" style="min-width:520px"><thead><tr>'+
     '<th style="text-align:left">Plan (cước cố định)</th><th class="num">Có cash-in</th><th class="num">Không</th>'+
     '<th class="num">HH/line S/</th><th class="num">Điểm</th><th class="num">Hoa hồng S/</th></tr></thead><tbody>';
  PR.post.forEach(function(r,i){
    h+='<tr><td style="font-size:11.5px">'+prEsc(r.n)+'</td>'+
       '<td class="num">'+prInp(r.C,"prSet('post',"+i+",'C',this.value)")+'</td>'+
       '<td class="num">'+prInp(r.D,"prSet('post',"+i+",'D',this.value)")+'</td>'+
       '<td class="num" style="color:var(--muted);font-weight:600">'+prNum(r.H)+'</td>'+
       '<td class="num" id="pr-po-j-'+i+'">–</td>'+
       '<td class="num" id="pr-po-k-'+i+'">–</td></tr>';
  });
  h+='<tr style="font-weight:700;background:#f8fafc"><td colspan="4" style="text-align:right">Tổng trả sau</td>'+
     '<td class="num" id="pr-po-jt">–</td><td class="num" id="pr-po-kt">–</td></tr>';
  h+='</tbody></table></div></div>';

  // --- 4. Otras / digital / bonos ---
  h+=prCard('4', '🛍️ Bán hàng khác · Dịch vụ số · Thưởng');
  var o=PR.o;
  function fld(lbl,key,extra){ return '<div style="display:flex;flex-direction:column;gap:3px">'+
    '<label style="font-size:11px;color:var(--text);line-height:1.35">'+lbl+'</label>'+
    prInp(o[key],"prSet('o','"+key+"',this.value)",extra||70)+'</div>'; }
  h+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px 14px;padding:4px 2px">';
  h+=fld('Portabilidades postpago activas al 4 de N+2 (bônus S/12/line)','p41');
  h+=fld('Rentas adelantadas cobradas por Bipay (S/)','p42');
  h+=fld('Recargas de tus clientes hasta 7 de N+1 (S/) – 2do bônus 20%','p43');
  h+=fld('Paquetes vendidos SMS 9123 / Bitel Ventas (S/) · 20%','p44');
  h+=fld('Bifri 10 (cantidad) · S/4','p45');
  h+=fld('Turista (cantidad) · S/9','p46');
  h+=fld('FTTH Bitel Fibra 200 · S/55 ×150% (N,N+1,N+2)','p47');
  h+=fld('FTTH Bitel Fibra 400 · S/109 ×180%','p48');
  h+=fld('FTTH Bitel Fibra 1GB · S/139 ×200%','p49');
  h+=fld('Referidos Bipay (instala+cuenta+login)','p50');
  h+=fld('Registros TV360 (60 s)','p51');
  h+=fld('Recargas/pagos Bitel/paquetes vía Bipay (S/) · 5.5%','p52');
  h+=fld('Pagos de servicios básicos (cantidad)','p53');
  h+=fld('Cash-in a clientes (cantidad)','p54');
  h+=fld('Monto promedio por cash-in (S/)','p55');
  h+=fld('Tickets TuSami vendidos (KPI)','p56');
  h+=fld('Venta TuSami vía Bipay (S/) · 20% (30% si ≥500)','p57');
  h+=fld('Clientes nuevos TuSami consumen ≥ S/5','p58');
  h+=fld('… consumen ≥ S/15','p59');
  h+=fld('… consumen ≥ S/30','p60');
  h+=fld('… consumen ≥ S/50','p61');
  h+=fld('Free chips activados (S/3 c/u, máx S/100)','p62');
  h+=fld('Domingos rurales con ≥5 activaciones','p63');
  h+=fld('New ID: prepago o control < S/39.90','p64');
  h+=fld('New ID: control ≥ S/39.90','p65');
  h+=fld('MNP Bitel Ventas: 30–59 días','p66');
  h+=fld('MNP Bitel Ventas: 60–89 días','p67');
  h+=fld('MNP Bitel Ventas: ≥ 90 días','p68');
  h+=fld('Líneas a clientes extranjeros (−S/1 c/u)','p69');
  h+='</div></div>';

  h+='</div>'; // /prInputs

  // --- Results (right, sticky) ---
  h+='<div style="position:sticky;top:10px"><div id="prResults"></div><div id="prGoalBox" style="margin-top:14px"></div></div>';
  h+='</div>'; // /prGrid

  h+='<p style="font-size:10.5px;color:var(--muted);margin-top:16px;line-height:1.55;border-top:1px solid var(--border);padding-top:9px">'+
     'Nguồn: <b>TRG Resumen políticas de comisiones 2026 – Mobile, Digital y FTTH</b>, sả 1. Promotor. '+
     'Đây là số mô phỏng — số tiền thực nhận do Phòng Kinh doanh tính. '+
     'Chưa tính: PR Exclusivo nông thôn, phạt giới thiệu TV360 lặp cùng máy (−15%), phạt giao dịch giả (−100%).</p>';

  root.innerHTML=h;
  prRefresh();
}

function prCard(num, title){
  return '<div class="section" style="margin-bottom:16px"><div class="section-head">'+
    '<span style="display:inline-block;width:20px;height:20px;line-height:20px;text-align:center;background:rgba(255,255,255,.25);border-radius:5px;margin-right:7px;font-weight:800">'+num+'</span>'+
    title+'</div><div class="section-body">';
}
function prToggle(path, opts, cur){
  var h='<div style="display:inline-flex;border:1px solid var(--border);border-radius:7px;overflow:hidden">';
  opts.forEach(function(o){ var on=(cur===o[0]);
    h+='<button onclick="prSetStr(\''+path+'\',\''+o[0]+'\')" style="padding:6px 12px;font-size:12px;font-weight:600;border:0;cursor:pointer;'+
       (on?'background:#1e3a8a;color:#fff':'background:#fff;color:#475569')+'">'+o[1]+'</button>'; });
  return h+'</div>';
}

function prRow(lbl, val, strong, color){
  return '<div style="display:flex;justify-content:space-between;gap:10px;padding:4px 0;font-size:'+(strong?'12.5px':'12px')+';'+(strong?'font-weight:700':'')+'">'+
    '<span style="color:'+(strong?'var(--text)':'var(--muted)')+'">'+lbl+'</span>'+
    '<span style="white-space:nowrap;color:'+(color||'var(--text)')+';font-variant-numeric:tabular-nums">'+val+'</span></div>';
}

function prRefresh(){
  var c=prCompute();
  // per-row live cells
  PR.pre.forEach(function(r,i){
    var C=+r.C||0,D=+r.D||0,E=+r.E||0;
    var j=C*r.F+D*r.G, k=(C+D)*r.H+(C+D)*E*r.I;
    var je=document.getElementById('pr-pe-j-'+i); if(je) je.textContent=prNum(j);
    var ke=document.getElementById('pr-pe-k-'+i); if(ke) ke.textContent=prNum(k);
  });
  PR.post.forEach(function(r,i){
    var C=+r.C||0,D=+r.D||0; var j=C*r.F+D*r.G,k=(C+D)*r.H;
    var je=document.getElementById('pr-po-j-'+i); if(je) je.textContent=prNum(j);
    var ke=document.getElementById('pr-po-k-'+i); if(ke) ke.textContent=prNum(k);
  });
  var set=function(id,v){ var e=document.getElementById(id); if(e) e.textContent=v; };
  set('pr-pe-jt', prNum(c.J17)); set('pr-pe-kt', prNum(c.K17));
  set('pr-po-jt', prNum(c.J37)); set('pr-po-kt', prNum(c.K37));

  // results panel
  var r='<div class="section" style="margin-bottom:0;border-top:3px solid var(--accent)">'+
    '<div class="section-head" style="background:var(--accent)">💰 Thu nhập dự kiến / Ingreso estimado</div>'+
    '<div class="section-body" style="padding:14px 15px">';
  r+='<div style="font-size:30px;font-weight:800;color:#0f4c81;line-height:1.1;margin-bottom:2px">'+prMoney(c.K92)+'</div>';
  r+='<div style="font-size:11px;color:var(--muted);margin-bottom:12px">Ingreso bruto: '+prMoney(c.K84)+'</div>';
  r+=prRow('Soporte theo điểm ('+prNum(c.pts)+' điểm)', prMoney(c.sop), true, '#0f4c81');
  r+=prRow('Hoa hồng trả trước', prMoney(c.K75), true);
  r+=prRow('Hoa hồng trả sau', prMoney(c.K76), true);
  r+=prRow('Gói cước 9123 & FTTH', prMoney(c.K77), true);
  r+=prRow('Dịch vụ số', prMoney(c.K78), true);
  r+=prRow('Thưởng (portab, perman, free chip, New ID, MNP…)', prMoney(c.K83), true);
  // KPI chips
  r+='<div style="border-top:1px solid var(--border);margin-top:8px;padding-top:9px">';
  r+='<div style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;margin-bottom:6px">KPI – khoản bị trừ</div>';
  r+=prChip('Dịch vụ số · ≥30%', c.kpiDig, 0.30);
  r+=prChip('Cash-in Bipay · ≥10%', c.kpiCash, 0.10);
  r+=prChip('New ID · ≥55%', c.kpiNew, 0.55);
  if(c.K89<0) r+=prRow('− Descuento KPI (−15%)', prMoney(c.K89), false, '#dc2626');
  if(c.K90<0) r+=prRow('− Descuento meta TuSami (−10%)', prMoney(c.K90), false, '#dc2626');
  if(c.K91<0) r+=prRow('− Líneas extranjeras', prMoney(c.K91), false, '#dc2626');
  if(c.K89>=0 && c.K90>=0 && c.K91>=0) r+='<div style="font-size:11.5px;font-weight:700;color:#16a34a;margin-top:4px">✓ Đạt KPI: không bị trừ</div>';
  r+='</div></div></div>';
  var rp=document.getElementById('prResults'); if(rp) rp.innerHTML=r;

  prRefreshGoal();
}
function prChip(lbl, val, meta){
  var ok=val>=meta; var pct=Math.round(val*100);
  return '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;padding:3px 0;font-size:11.5px">'+
    '<span style="color:var(--muted)">'+lbl+'</span>'+
    '<span style="font-weight:700;color:'+(ok?'#16a34a':'#dc2626')+'">'+pct+'%</span></div>';
}

function prSetGoal(key,val){ var n=parseFloat(val); PR.g[key]=isNaN(n)?0:n; prRefreshGoal(); }
function prRefreshGoal(){
  var g=prGoal(), G=PR.g;
  var h='<div class="section" style="margin-bottom:0;border-top:3px solid #6d28d9">'+
    '<div class="section-head" style="background:#6d28d9">🎯 Tôi cần bán bao nhiêu?</div>'+
    '<div class="section-body" style="padding:13px 15px">';
  h+='<div style="font-size:11px;color:var(--muted);margin-bottom:4px">Mục tiêu thu nhập (S/)</div>'+
     prInp(G.meta,"prSetGoal('meta',this.value)",110)+
     ' <span style="font-size:11px;color:var(--muted)">· '+G.dias+' ngày</span>';
  h+='<div style="margin-top:10px">';
  if(g.need==null){
    h+='<div style="font-size:13px;color:#dc2626;font-weight:700">Cần > 500 kích hoạt (ngoài tầm với cơ cấu hiện tại)</div>';
  } else {
    h+='<div style="font-size:12px;color:var(--text);line-height:1.6">Cần khoảng <b style="font-size:16px;color:#6d28d9">'+g.need+'</b> kích hoạt trong tháng '+
       '(≈ <b>'+prNum(g.perDay)+'</b>/ngày) để đạt '+prMoney(G.meta)+'.</div>';
  }
  if(g.ratio!=null) h+='<div style="font-size:11px;color:var(--muted);margin-top:6px">×'+prNum(g.ratio)+' so với thu nhập hiện tại</div>';
  h+='<div style="font-size:10px;color:var(--muted);margin-top:8px;line-height:1.5">Dựa trên cơ cấu bán hàng mẫu (Plan Meta) & '+Math.round(G.pctCash*100)+'% có cash-in.</div>';
  h+='</div></div></div>';
  var gb=document.getElementById('prGoalBox'); if(gb) gb.innerHTML=h;
}
