// ===== DASHBOARD I18N (VI / EN / ES) =====
// VI = original authored text. EN/ES via dictionary + regex patterns.
// Dynamic data (station codes, place names, product names, numbers) stays as authored.
(function(){
  var LANG = (function(){ try{ return localStorage.getItem('dashLang')||'vi'; }catch(e){ return 'vi'; } })();
  window.DASH_LANG = LANG;

  // ---- exact-match dictionaries (key = rendered VI/ES text) ----
  var EN = {
    // header + nav
    'Dashboard điều hành / Gestión · Chi nhánh Cajamarca / Sucursal Cajamarca':'Operations Dashboard · Cajamarca Branch',
    'Báo cáo kinh doanh hàng tuần / Informe semanal de negocio · Nguồn / Fuente: Báo cáo tuần & Cảnh báo thuê bao giảm / Alertas de bajas':'Weekly business report · Source: Weekly report & Subscriber-drop alerts',
    '📊 Dashboard KPI':'📊 KPI Dashboard','🗺️ Bản đồ / Mapa':'🗺️ Map','📱 Mobile':'📱 Mobile','💻 Digital':'💻 Digital',
    '🔧 Kỹ thuật':'🔧 Technical','📋 Chính sách':'📋 Policy','💰 Thu nhập PR':'💰 PR Income',
    // dashboard section heads
    '📈 1. THUÊ BAO 15C3D HÀNG THÁNG / SUSCRIPTORES 15C3D MENSUAL — vs KẾ HOẠCH / PLAN & LŨY KẾ / ACUMULADO NĂM':'📈 1. MONTHLY 15C3D SUBSCRIBERS — vs PLAN & YEAR-TO-DATE',
    '📋 2. THUÊ BAO REG TUYỆT ĐỐI / SUSCRIPTORES REG TOTAL — vs KẾ HOẠCH / PLAN (base 297.941 + N×3.500 TB/mes)':'📋 2. TOTAL REG SUBSCRIBERS — vs PLAN (base 297,941 + N×3,500/mo)',
    '💰 3. DOANH THU HÀNG THÁNG / INGRESOS MENSUAL — vs KẾ HOẠCH / PLAN':'💰 3. MONTHLY REVENUE — vs PLAN',
    '📱 4. ACTIVE HÀNG THÁNG / ACTIVACIONES MENSUALES — CAJAMARCA':'📱 4. MONTHLY ACTIVATIONS — CAJAMARCA',
    '🏢 5. ACTIVE THEO TỪNG BC / ACTIVACIONES POR BC — THEO THÁNG / POR MES':'🏢 5. ACTIVATIONS BY BC — BY MONTH',
    // kythuat section heads
    '⚠️ 1. TRẠM GIẢM THUÊ BAO 15C3D / ESTACIONES CON BAJAS 15C3D — THEO TỪNG TUẦN / POR SEMANA':'⚠️ 1. STATIONS WITH 15C3D DROPS — BY WEEK',
    '📉 2. TRẠM GIẢM LIÊN TỤC / TENDENCIA CONTINUA — THEO DÕI / SEGUIMIENTO':'📉 2. CONTINUOUSLY DECLINING STATIONS — MONITORING',
    '🛠 3. GIẢI PHÁP TUẦN / PLAN DE ACCIÓN SEMANAL':'🛠 3. WEEKLY ACTION PLAN',
    // sales section heads
    '🏢 Kết quả Active theo BC / Por BC':'🏢 Activations by BC',
    '🔄 Loại Active / Tipo de Activación':'🔄 Activation Type',
    '📡 Kết quả Active theo Kênh / Activaciones por Canal':'📡 Activations by Channel',
    '⚠️ Nhân viên Active suy giảm theo kênh / Caída por Canal':'⚠️ Declining Staff by Channel',
    '📋 CHÍNH SÁCH & SẢN PHẨM / POLÍTICAS Y PRODUCTOS':'📋 POLICIES & PRODUCTS',
    '💰 MÁY TÍNH THU NHẬP PROMOTOR 2026 / CALCULADORA':'💰 PROMOTER INCOME CALCULATOR 2026',
    // table headers
    'Trạm':'Station','Trạm / Estación':'Station','Zona':'Zone','Nguyên nhân':'Cause','Giải pháp':'Solution',
    'Trạng thái':'Status','Trạng thái / Estado':'Status','Xu hướng':'Trend','Mức độ':'Severity','Deadline':'Deadline',
    'P.trách':'Owner','Nhân viên':'Staff','Nhóm':'Group','Kênh':'Channel','Kênh / Canal':'Channel','Loại kênh':'Channel type',
    'Tháng':'Month','Tháng / Mes':'Month','Ngày':'Date','Tổng':'Total','Total':'Total','Số tuần':'Weeks','Điều kiện':'Condition',
    'KH / Plan':'Plan','TH / Real':'Actual','Lũy kế / Acum.':'Cumulative','Chỉ tiêu / Concepto':'Item','Gói':'Package','Ngày':'Day',
    'Hiện tại':'Current','Hoa hồng / Comisión':'Commission','Mức trả':'Rate','Sản phẩm':'Product','Hạng':'Tier','Kết quả':'Result',
    '15C3D / Suscriptores 15C3D':'15C3D subscribers','REG / Suscriptores REG':'REG subscribers',
    'Có cash-in (LN/MNP)':'With cash-in (NL/MNP)','Không cash-in (LN/MNP)':'No cash-in (NL/MNP)','S/ mỗi điểm':'S/ per point',
    // buttons / toggles / filters
    'Tất cả':'All','🗂️ Dạng thẻ':'🗂️ Cards','↻ Nạp ví dụ':'↻ Load example','✕ Xóa hết':'✕ Clear all',
    '💰 Tính thu nhập':'💰 Income','📋 Chính sách':'📋 Policy',
    'Lọc theo tuần cảnh báo / Filtrar por semana':'Filter by alert week',
    'Không trong danh sách tuần đó':'Not in that week’s list','Không trong danh sách':'Not in list',
    'Cải thiện / thoát danh sách':'Improved / left list',
    // status terms
    'Chưa xử lý / Pendiente':'Pending','Đang xử lý':'In progress','Đã xử lý':'Resolved',
    'Sin reporte previo / Chưa có báo cáo nguyên nhân':'No prior report',
    // PR calculator — profile & sections
    'Thông tin tháng':'Month profile','Kích hoạt trả trước':'Prepaid activations','Kích hoạt trả sau':'Postpaid activations',
    'Bán hàng khác':'Other sales','Dịch vụ số':'Digital services','Thưởng và New ID':'Bonuses & New ID',
    'Loại PR':'PR type','Khu vực':'Area','PR cũ':'Existing','PR mới':'New','Thành thị':'Urban','Nông thôn':'Rural',
    'Số ngày làm việc (≥3 KH/ngày)':'Days worked (≥3 act/day)',
    'Sản phẩm':'Product','Có cash-in':'With cash-in','Không cash-in':'No cash-in','Số tiền S/':'Amount S/','Điểm':'Points','Cước cố định':'Fixed fee',
    'Line mới':'New line','Chuyển mạng':'Portability',
    'THU NHẬP DỰ KIẾN TRONG THÁNG':'ESTIMATED INCOME THIS MONTH','Hoa hồng trả trước':'Prepaid commissions','Hoa hồng trả sau':'Postpaid commissions',
    'Autoliquidable Bifri 5':'Bifri 5 self-settled','Thưởng lần 1 nạp tiền/gói':'1st top-up/package bonus','Thưởng lần 2 nạp tiền (20%)':'2nd top-up bonus (20%)',
    'Autoliquidable theo gói':'Self-settled by plan','Gói cước và FTTH':'Packages & FTTH','Gói 9123 / Bitel Ventas (20%)':'Package 9123 / Bitel Ventas (20%)',
    'FTTH (trả vào N, N+1 và N+2)':'FTTH (paid in N, N+1 and N+2)','Giới thiệu Bipay':'Bipay referral','Đăng ký TV360':'TV360 sign-up',
    'Giao dịch Bipay (5.5%)':'Bipay transaction (5.5%)','Thanh toán dịch vụ':'Service payment','Cash-in':'Cash-in','Khách TuSami mới':'New TuSami customers','Doanh số TuSami':'TuSami sales',
    'Thưởng':'Bonuses','Chuyển mạng trả sau':'Postpaid portability','Free chip':'Free chip','New ID':'New ID','MNP theo thời gian dùng':'MNP by tenure','Khoản trừ':'Deductions',
    'Soporte theo điểm':'Support by points','KPI BỊ TRỪ TIỀN':'KPI DEDUCTIONS','Dịch vụ số · mục tiêu 30%':'Digital services · target 30%',
    'Cash-in Bipay · tối thiểu 10%':'Bipay cash-in · min 10%','New ID · mục tiêu 55%':'New ID · target 55%','Vé TuSami · tối thiểu S/10':'TuSami tickets · min S/10',
    'TÔI CẦN BÁN BAO NHIÊU?':'HOW MUCH DO I NEED TO SELL?','Mục tiêu thu nhập (S/)':'Income target (S/)','Hiện tại → Cần đạt':'Current → Needed',
    'Mỗi khách TuSami chỉ tính ở một mức (mức cao nhất đạt được).':'Each TuSami customer counts in one tier only (the highest reached).',
    // PR field labels
    'Trong đó, số line chuyển mạng trả sau (thưởng S/12)':'Of which, postpaid portability lines (S/12 bonus)',
    'Tiền cước trả trước thu qua Bipay (tổng S/)':'Prepaid fees collected via Bipay (total S/)',
    'Khách nạp thêm từ hôm sau đến ngày 7 của N+1 (S/) – 2do bônus 20%':'Customer extra top-ups next day to the 7th of N+1 (S/) – 2nd bonus 20%',
    'Gói bán qua SMS 9123 / Bitel Ventas (S/) · 20%':'Packages sold via SMS 9123 / Bitel Ventas (S/) · 20%',
    'Bifri 10 (số lượng) · S/4':'Bifri 10 (qty) · S/4','Turista (số lượng) · S/9':'Turista (qty) · S/9',
    'FTTH Bitel Fibra 200 · S/55 ×150% (N, N+1, N+2)':'FTTH Bitel Fibra 200 · S/55 ×150% (N, N+1, N+2)',
    'FTTH Bitel Fibra 400 · S/109 ×180%':'FTTH Bitel Fibra 400 · S/109 ×180%','FTTH Bitel Fibra 1GB · S/139 ×200%':'FTTH Bitel Fibra 1GB · S/139 ×200%',
    'Giới thiệu Bipay (cài app + tạo tài khoản + login)':'Bipay referral (install app + create account + login)',
    'Đăng ký TV360 (xem 60 giây)':'TV360 sign-up (60s view)','Nạp tiền / thanh toán Bitel / gói qua Bipay (S/) · 5.5%':'Top-ups / Bitel payments / packages via Bipay (S/) · 5.5%',
    'Thanh toán hóa đơn dịch vụ (số lượng)':'Utility bill payments (qty)','Cash-in cho khách (số lần)':'Cash-in to customers (count)',
    'Số tiền trung bình mỗi lần cash-in (S/)':'Average amount per cash-in (S/)','Số vé TuSami đã bán (KPI)':'TuSami tickets sold (KPI)',
    'Doanh số TuSami qua Bipay (S/) · 20% (30% nếu ≥500)':'TuSami sales via Bipay (S/) · 20% (30% if ≥500)',
    'Khách TuSami mới tiêu ≥ S/5':'New TuSami customers spending ≥ S/5','… tiêu ≥ S/15':'… spending ≥ S/15','… tiêu ≥ S/30':'… spending ≥ S/30','… tiêu ≥ S/50':'… spending ≥ S/50',
    'Free chip đã kích hoạt (S/3 mỗi chip, tối đa S/100)':'Free chips activated (S/3 each, max S/100)',
    'Chủ nhật vùng nông thôn có ≥5 kích hoạt (1 trả trước + 1 trả sau)':'Rural Sundays with ≥5 activations (1 prepaid + 1 postpaid)',
    'New ID: trả trước hoặc control < S/39.90':'New ID: prepaid or control < S/39.90','New ID: control ≥ S/39.90':'New ID: control ≥ S/39.90',
    'MNP Bitel Ventas: 30–59 ngày ở nhà mạng cũ':'MNP Bitel Ventas: 30–59 days on old operator','MNP Bitel Ventas: 60–89 ngày':'MNP Bitel Ventas: 60–89 days','MNP Bitel Ventas: ≥ 90 ngày':'MNP Bitel Ventas: ≥ 90 days',
    'Line cho khách nước ngoài (−S/1 mỗi line)':'Lines to foreign customers (−S/1 each)',
    '"Có cash-in" = Bipay + login + cash-in ≥ S/5 và có tiêu. "Số tiền" = nạp tiền/gói trung bình trong ngày kích hoạt.':'"With cash-in" = Bipay + login + cash-in ≥ S/5 and usage. "Amount" = average top-up/package on activation day.',
    // PR policy headings
    'Đây là cách tính thu nhập hằng tháng của Promotor (PR) theo chính sách hoa hồng 2026. Dùng hướng dẫn này cùng với tab Tính thu nhập.':'This is how the Promoter (PR) monthly income is calculated under the 2026 commission policy. Use this guide together with the Income tab.',
    'Thu nhập = Soporte tháng + Hoa hồng + Thưởng − Khoản trừ':'Income = Monthly support + Commissions + Bonuses − Deductions',
    'Kích hoạt nào được tính':'Which activations count','Soporte tháng theo điểm':'Monthly support by points',
    'Chương trình Crece Promotor (mới)':'Crece Promotor program (new)','Khoản bị trừ':'Deductions','FTTH':'FTTH',
    'Có cash-in (LN/MNP)':'With cash-in (NL/MNP)','Không cash-in (LN/MNP)':'No cash-in (NL/MNP)',
    'so với số bán hiện tại':'vs current sales','Bạn cần khoảng':'You need about',
    'Mức 4: mỗi điểm thêm được S/6, không giới hạn.':'Tier 4: S/6 per extra point, unlimited.',
    'Mức 3: mỗi điểm S/5.':'Tier 3: S/5 per point.','Mức 2: mỗi điểm S/4.':'Tier 2: S/4 per point.',
    'Mức 1: mỗi điểm S/3.':'Tier 1: S/3 per point.','Chưa đạt ngưỡng tối thiểu.':'Below minimum threshold.',
    '✓ Đạt KPI: không bị trừ':'✓ KPI met: no deduction','✓ Đã đạt mục tiêu.':'✓ Target reached.',
    'Mức':'Tier','Tối đa mức':'Tier cap','Cộng dồn':'Cumulative',
    'Thưởng lần 1 (cùng ngày)':'1st bonus (same day)','Thưởng lần 2 (đến ngày 7 của N+1)':'2nd bonus (by 7th of N+1)',
    'Cước cố định của gói':'Plan fixed fee','Hoa hồng LN/MNP':'Commission NL/MNP','Hạng mục':'Item',
    'Ngày làm việc':'Days worked','Kích hoạt':'Activations','Điều kiện':'Condition',
    'Chỉ tính khách có DNI. Mỗi DNI tối đa 1 line Bifri mỗi tháng.':'Only customers with a DNI count. Max 1 Bifri line per DNI per month.',
    'Mỗi khách chỉ tính lần kích hoạt đầu tiên trong ngày.':'Only the first activation per customer per day counts.',
    'Trả trước: nạp tiền hoặc gói ≥ S/5 đến ngày 3 của N+1 và đạt 15C3D (tiêu dùng tối thiểu 15 cent USD và có lưu lượng 3 ngày trong tháng).':'Prepaid: top-up or package ≥ S/5 by the 3rd of N+1 and reach 15C3D (min usage of 15 US cents and traffic on 3 days in the month).',
    'Trả sau (gói ≥ S/19.90): line hoạt động có Register ít nhất 3 ngày, đến ngày 4 của N+1.':'Postpaid (plan ≥ S/19.90): active line with Register for at least 3 days, by the 4th of N+1.',
    'IMEI: máy phải có mã TAC hợp lệ và được ghi nhận trong 24 giờ. Không tính nếu 1 IMEI có từ 3 line, 1 line chạy trên từ 3 máy, hoặc 1 máy ghi nhận từ 5 IMEI.':'IMEI: the handset must have a valid TAC and be registered within 24h. Not counted if 1 IMEI has 3+ lines, 1 line runs on 3+ handsets, or 1 handset shows 5+ IMEIs.',
    'Tính liên tục: đến ngày 3 của N+1 line phải có lưu lượng/Register, đến ngày 10 của N+1 phải giữ ít nhất 25%. Nếu không, không được trả soporte.':'Continuity: by the 3rd of N+1 the line must have traffic/Register, by the 10th of N+1 at least 25% must remain. Otherwise support is not paid.',
    'Chip Mi Bitel tự kích hoạt được tính nếu khách nhập mã PR khi kích hoạt.':'Self-activated Mi Bitel chips count if the customer enters the PR code at activation.',
    'Mỗi line của khách nước ngoài bị trừ thêm S/1.':'Each foreign-customer line is deducted an extra S/1.',
    'Mỗi kích hoạt được cộng điểm. "Có cash-in" = khách có Bipay + login + cash-in ≥ S/5 và có tiêu dùng (thanh toán dịch vụ, nạp tiền hoặc gói) đến ngày 4 của N+1.':'Each activation earns points. "With cash-in" = customer with Bipay + login + cash-in ≥ S/5 and usage (service payment, top-up or package) by the 4th of N+1.',
    'Bifri 5 + nạp ≥ S/5, hoặc Papa + addon S/5–9.99':'Bifri 5 + top-up ≥ S/5, or Papa + addon S/5–9.99','Papa + addon ≥ S/10':'Papa + addon ≥ S/10',
    'Trả sau < S/29.90':'Postpaid < S/29.90','Trả sau S/29.90–39.89':'Postpaid S/29.90–39.89','Trả sau ≥ S/39.90':'Postpaid ≥ S/39.90','Gói Fútbol ≥ S/39.90':'Fútbol plan ≥ S/39.90',
    'Trả theo bậc. Mức 1 chỉ dành cho PR tạo trong tháng; PR cũ phải đạt ít nhất 30 điểm (mức 2).':'Paid by tiers. Tier 1 only for PRs created within the month; existing PRs must reach at least 30 points (tier 2).',
    'Ví dụ: 100 điểm = 29 × S/3 + 30 × S/4 + 30 × S/5 + 11 × S/6 = S/423.':'Example: 100 points = 29 × S/3 + 30 × S/4 + 30 × S/5 + 11 × S/6 = S/423.',
    'Ví dụ: 100 điểm = 29 × S/3 + 30 × S/4 + 30 × S/5 + 11 × S/6 =':'Example: 100 points = 29 × S/3 + 30 × S/4 + 30 × S/5 + 11 × S/6 =',
    '(trả tiền mặt khi kích hoạt): Bifri 5 S/4 · Bifri 10 S/4 · Turista S/9. Bifri 10, Bifri 15 và Turista không tính điểm.':'(cash paid at activation): Bifri 5 S/4 · Bifri 10 S/4 · Turista S/9. Bifri 10, Bifri 15 and Turista earn no points.',
    'Thưởng nạp tiền và gói được trả qua Bipay.':'Top-up and package bonuses are paid via Bipay.',
    'Chip Papa giá S/1 cho kênh, được hoàn lại nếu line có lưu lượng từ ngày hôm sau.':'Papa chip costs S/1 to the channel, refunded if the line has traffic from the next day.',
    'Gói bán qua SMS 9123 (IN + mã gói + số khách) hoặc Bitel Ventas: 20% giá gói, mỗi lần khách mua.':'Packages sold via SMS 9123 (IN + package code + customer number) or Bitel Ventas: 20% of the package price, each purchase.',
    'Bifri 5 (LN hoặc MNP)':'Bifri 5 (NL or MNP)','Papa LN + addon S/5–9.99':'Papa NL + addon S/5–9.99','Papa LN + addon ≥ S/10':'Papa NL + addon ≥ S/10','Papa MNP + addon ≥ S/10':'Papa MNP + addon ≥ S/10',
    '60% số tiền nạp':'60% of top-up','20% số tiền nạp':'20% of top-up','60% giá gói':'60% of package','80% giá gói':'80% of package','100% giá gói':'100% of package',
    'Trả trực tiếp (autoliquidable). Kích hoạt qua Mi Bitel tự kích hoạt được trả qua Bipay nếu khách nhập mã PR.':'Paid directly (self-settled). Self-activations via Mi Bitel are paid through Bipay if the customer enters the PR code.',
    'Trả trước tiền cước: nếu khách trả trước 3 tháng qua Bipay, bạn nhận 10%. Ví dụ: 3 × S/39.90 = S/119.70 → S/11.97.':'Prepaid fees: if the customer prepays 3 months via Bipay, you earn 10%. Example: 3 × S/39.90 = S/119.70 → S/11.97.',
    'Giao dịch Bipay (nạp tiền, thanh toán Bitel, gói)':'Bipay transaction (top-up, Bitel payment, package)','Thanh toán hóa đơn (nước, điện, khác)':'Bill payment (water, electricity, other)',
    'Cash-in cho khách':'Cash-in to customers','Khách TuSami mới (tiêu dùng trong tháng)':'New TuSami customers (usage within the month)','Bán TuSami qua Bipay':'TuSami sales via Bipay',
    'Thành thị S/1.00 · Nông thôn S/1.50':'Urban S/1.00 · Rural S/1.50','Thành thị S/0.50 · Nông thôn S/1.00':'Urban S/0.50 · Rural S/1.00',
    'S/0.20 mỗi giao dịch':'S/0.20 per transaction','20% mỗi giao dịch, +10% nếu tháng vượt S/500':'20% per transaction, +10% if the month exceeds S/500',
    'Mỗi thiết bị và mỗi giấy tờ chỉ một lượt giới thiệu. Ghi "Mã kênh-Số điện thoại", ví dụ LI4PR12145-987123123.':'One referral per device and per ID. Record "Channel code-Phone number", e.g. LI4PR12145-987123123.',
    'Trả tự động qua Bipay: phần N cuối tháng, N+1 vào ngày 1 của N+2, N+2 vào ngày 1 của N+3. Chỉ tính dịch vụ đang hoạt động, đã thanh toán và đã lắp đặt (kèm OTT: Mi Bitel + TV360 + Cable Go + Paramount+). Với khuyến mãi PACK, tính trên giá khách trả.':'Paid automatically via Bipay: the N part at month-end, N+1 on the 1st of N+2, N+2 on the 1st of N+3. Only active, paid and installed services count (with OTT: Mi Bitel + TV360 + Cable Go + Paramount+). For PACK promos, computed on the price the customer pays.',
    'Chuyển mạng trả trước':'Prepaid portability','Chuyên cần':'Attendance','Chủ nhật nông thôn':'Rural Sundays','Free chip (thị phần)':'Free chip (market share)','New ID (Bitel Ventas)':'New ID (Bitel Ventas)','MNP theo thời gian dùng (Bitel Ventas)':'MNP by tenure (Bitel Ventas)',
    'Theo số line trong tháng: 1–5 S/5 · 6–10 S/8 · 11–15 S/12 · 16+ S/15 (theo bậc)':'By lines in the month: 1–5 S/5 · 6–10 S/8 · 11–15 S/12 · 16+ S/15 (tiered)',
    'Line dùng trên 90 ngày ở nhà mạng cũ, nạp hoặc gói ≥ S/5, có lưu lượng ngày hôm sau':'Line used 90+ days on the old operator, top-up or package ≥ S/5, traffic the next day',
    'S/12 mỗi line':'S/12 per line','Line MNP hoạt động, không bị khóa đến ngày 4 của N+2':'Active MNP line, not blocked by the 4th of N+2',
    '15–19 ngày S/50 · 20–24 ngày S/75 · 25+ ngày S/100':'15–19 days S/50 · 20–24 days S/75 · 25+ days S/100',
    'Tối thiểu 50 line có nạp (RC ≥ S/5 hoặc Papa + addon ≥ S/10). Ngày làm việc = 3 kích hoạt':'At least 50 lines with top-up (RC ≥ S/5 or Papa + addon ≥ S/10). A working day = 3 activations',
    'S/10 mỗi chủ nhật':'S/10 per Sunday','Từ 5 kích hoạt, ít nhất 1 trả trước và 1 trả sau ≥ S/29.90':'From 5 activations, at least 1 prepaid and 1 postpaid ≥ S/29.90',
    'S/3 mỗi chip, tối đa S/100':'S/3 per chip, max S/100','Papa và Flash 29.90 tại BTS được giao, chỉ khi khách không muốn mua':'Papa and Flash 29.90 at assigned BTS, only when the customer does not want to buy',
    'S/1 trả trước và control < S/39.90 · S/3 control ≥ S/39.90':'S/1 prepaid and control < S/39.90 · S/3 control ≥ S/39.90','Khách không có line Bitel trên 1 năm':'Customer with no Bitel line for over 1 year',
    'S/1 (≥ 30 ngày) · S/2 (≥ 60) · S/3 (≥ 90)':'S/1 (≥ 30 days) · S/2 (≥ 60) · S/3 (≥ 90)','Thời gian dùng ở nhà mạng cũ':'Tenure on the old operator',
    'Áp dụng cho mọi PR có hoa hồng trong tháng. Nếu không đạt cả dịch vụ số LẪN New ID, bị trừ 15% tổng hoa hồng.':'Applies to every PR with commission in the month. If neither digital services NOR New ID is met, 15% of total commission is deducted.',
    '= (đăng ký TV360 + đăng ký Bipay có cash-in + vé TuSami) ÷ số kích hoạt trả trước và control. Cash-in phải đạt ít nhất 10%.':'= (TV360 sign-ups + Bipay sign-ups with cash-in + TuSami tickets) ÷ prepaid and control activations. Cash-in must reach at least 10%.',
    '= số kích hoạt của khách không có line Bitel từ 6 tháng trở lên ÷ số kích hoạt trả trước và control.':'= activations of customers with no Bitel line for 6+ months ÷ prepaid and control activations.',
    '✓ Không bị trừ':'✓ No deduction','−15% tổng hoa hồng':'−15% of total commission',
    'TuSami: bán ít nhất S/10 vé trong tháng cho các khách khác nhau; nếu không, −10%.':'TuSami: sell at least S/10 of tickets in the month to different customers; otherwise −10%.',
    'TV360: hơn 5 lượt giới thiệu trên cùng một máy → −15% và thu hồi các khoản thưởng đó.':'TV360: more than 5 referrals on the same handset → −15% and clawback of those bonuses.',
    'Giao dịch giả (chuyển và hoàn tiền cùng một số) → −100% hoa hồng của tháng.':'Fake transactions (transfer and refund on the same number) → −100% of the month’s commission.',
    'Bán line khách nước ngoài giả: trừ lại các khoản đã trả (thưởng nạp tiền và autoliquidable).':'Fake foreign-customer lines: clawback of amounts paid (top-up bonus and self-settled).',
    'Thưởng một lần cho mã PR mới tạo từ 01 đến 15/10/2026 (áp dụng từ tháng 10/2026). Mã tạo sau ngày 15 được tính vào tháng sau.':'One-time bonus for new PR codes created from 01 to 15/10/2026 (effective from Oct 2026). Codes created after the 15th count toward the next month.',
    'Ngày làm việc = tối thiểu 2 chip kích hoạt trong ngày.':'A working day = at least 2 chip activations in the day.',
    'Kích hoạt hợp lệ: trả trước có nạp tiền hoặc gói ≥ S/5 và trả sau ≥ S/29.90.':'Valid activation: prepaid with top-up or package ≥ S/5 and postpaid ≥ S/29.90.',
    'Trả qua BiPay cuối tháng khi đạt mục tiêu. Phải có tài khoản BiPay đang hoạt động.':'Paid via BiPay at month-end when the target is met. An active BiPay account is required.',
    'Chỉ trả một hạng (hạng cao nhất) và không bị trừ KPI hay TuSami trên khoản thưởng này.':'Only one tier is paid (the highest) and this bonus is not subject to KPI or TuSami deductions.',
    'Mã kích hoạt lại: do phòng Kinh doanh xem xét.':'Re-activated codes: reviewed by the Sales department.',
    'Chi nhánh: ANC, CAJ, ICA, LAM, LI3, LI5, LI7, LI8, LOR, PIU, SAN, TAC, TUM, UCA.':'Branches: ANC, CAJ, ICA, LAM, LI3, LI5, LI7, LI8, LOR, PIU, SAN, TAC, TUM, UCA.'
  };

  var ES = {
    'Dashboard điều hành / Gestión · Chi nhánh Cajamarca / Sucursal Cajamarca':'Dashboard de Gestión · Sucursal Cajamarca',
    'Báo cáo kinh doanh hàng tuần / Informe semanal de negocio · Nguồn / Fuente: Báo cáo tuần & Cảnh báo thuê bao giảm / Alertas de bajas':'Informe semanal de negocio · Fuente: Informe semanal y Alertas de bajas',
    '📊 Dashboard KPI':'📊 Panel KPI','🗺️ Bản đồ / Mapa':'🗺️ Mapa','📱 Mobile':'📱 Mobile','💻 Digital':'💻 Digital',
    '🔧 Kỹ thuật':'🔧 Técnico','📋 Chính sách':'📋 Política','💰 Thu nhập PR':'💰 Ingreso PR',
    '📈 1. THUÊ BAO 15C3D HÀNG THÁNG / SUSCRIPTORES 15C3D MENSUAL — vs KẾ HOẠCH / PLAN & LŨY KẾ / ACUMULADO NĂM':'📈 1. SUSCRIPTORES 15C3D MENSUAL — vs PLAN & ACUMULADO AÑO',
    '📋 2. THUÊ BAO REG TUYỆT ĐỐI / SUSCRIPTORES REG TOTAL — vs KẾ HOẠCH / PLAN (base 297.941 + N×3.500 TB/mes)':'📋 2. SUSCRIPTORES REG TOTAL — vs PLAN (base 297.941 + N×3.500/mes)',
    '💰 3. DOANH THU HÀNG THÁNG / INGRESOS MENSUAL — vs KẾ HOẠCH / PLAN':'💰 3. INGRESOS MENSUAL — vs PLAN',
    '📱 4. ACTIVE HÀNG THÁNG / ACTIVACIONES MENSUALES — CAJAMARCA':'📱 4. ACTIVACIONES MENSUALES — CAJAMARCA',
    '🏢 5. ACTIVE THEO TỪNG BC / ACTIVACIONES POR BC — THEO THÁNG / POR MES':'🏢 5. ACTIVACIONES POR BC — POR MES',
    '⚠️ 1. TRẠM GIẢM THUÊ BAO 15C3D / ESTACIONES CON BAJAS 15C3D — THEO TỪNG TUẦN / POR SEMANA':'⚠️ 1. ESTACIONES CON BAJAS 15C3D — POR SEMANA',
    '📉 2. TRẠM GIẢM LIÊN TỤC / TENDENCIA CONTINUA — THEO DÕI / SEGUIMIENTO':'📉 2. TENDENCIA CONTINUA — SEGUIMIENTO',
    '🛠 3. GIẢI PHÁP TUẦN / PLAN DE ACCIÓN SEMANAL':'🛠 3. PLAN DE ACCIÓN SEMANAL',
    '🏢 Kết quả Active theo BC / Por BC':'🏢 Activaciones por BC','🔄 Loại Active / Tipo de Activación':'🔄 Tipo de Activación',
    '📡 Kết quả Active theo Kênh / Activaciones por Canal':'📡 Activaciones por Canal','⚠️ Nhân viên Active suy giảm theo kênh / Caída por Canal':'⚠️ Caída de personal por Canal',
    '📋 CHÍNH SÁCH & SẢN PHẨM / POLÍTICAS Y PRODUCTOS':'📋 POLÍTICAS Y PRODUCTOS','💰 MÁY TÍNH THU NHẬP PROMOTOR 2026 / CALCULADORA':'💰 CALCULADORA PROMOTOR 2026',
    'Trạm':'Estación','Trạm / Estación':'Estación','Zona':'Zona','Nguyên nhân':'Causa','Giải pháp':'Solución',
    'Trạng thái':'Estado','Trạng thái / Estado':'Estado','Xu hướng':'Tendencia','Mức độ':'Nivel','Deadline':'Fecha límite',
    'P.trách':'Responsable','Nhân viên':'Personal','Nhóm':'Grupo','Kênh':'Canal','Kênh / Canal':'Canal','Loại kênh':'Tipo de canal',
    'Tháng':'Mes','Tháng / Mes':'Mes','Ngày':'Día','Tổng':'Total','Total':'Total','Số tuần':'Semanas','Điều kiện':'Condición',
    'KH / Plan':'Plan','TH / Real':'Real','Lũy kế / Acum.':'Acumulado','Chỉ tiêu / Concepto':'Concepto','Gói':'Paquete',
    'Hiện tại':'Actual','Hoa hồng / Comisión':'Comisión','Mức trả':'Pago','Sản phẩm':'Producto','Hạng':'Rango','Kết quả':'Resultado',
    '15C3D / Suscriptores 15C3D':'Suscriptores 15C3D','REG / Suscriptores REG':'Suscriptores REG','S/ mỗi điểm':'S/ por punto',
    'Tất cả':'Todos','🗂️ Dạng thẻ':'🗂️ Tarjetas','↻ Nạp ví dụ':'↻ Cargar ejemplo','✕ Xóa hết':'✕ Borrar todo',
    '💰 Tính thu nhập':'💰 Calculadora','📋 Chính sách':'📋 Política',
    'Lọc theo tuần cảnh báo / Filtrar por semana':'Filtrar por semana','Không trong danh sách tuần đó':'No en la lista de esa semana',
    'Không trong danh sách':'No en la lista','Cải thiện / thoát danh sách':'Mejoró / salió de la lista',
    'Chưa xử lý / Pendiente':'Pendiente','Đang xử lý':'En proceso','Đã xử lý':'Resuelto',
    'Sin reporte previo / Chưa có báo cáo nguyên nhân':'Sin reporte previo',
    'Thông tin tháng':'Perfil del mes','Kích hoạt trả trước':'Activaciones prepago','Kích hoạt trả sau':'Activaciones postpago',
    'Bán hàng khác':'Otras ventas','Dịch vụ số':'Servicios digitales','Thưởng và New ID':'Bonos y New ID',
    'Loại PR':'Tipo de PR','Khu vực':'Zona','PR cũ':'Antiguo','PR mới':'Nuevo','Thành thị':'Urbana','Nông thôn':'Rural',
    'Số ngày làm việc (≥3 KH/ngày)':'Días trabajados (≥3 act/día)',
    'Sản phẩm':'Producto','Có cash-in':'Con cash-in','Không cash-in':'Sin cash-in','Số tiền S/':'Monto S/','Điểm':'Puntos','Cước cố định':'Cargo fijo',
    'Line mới':'Línea nueva','Chuyển mạng':'Portabilidad',
    'THU NHẬP DỰ KIẾN TRONG THÁNG':'INGRESO ESTIMADO DEL MES','Hoa hồng trả trước':'Comisiones prepago','Hoa hồng trả sau':'Comisiones postpago',
    'Autoliquidable Bifri 5':'Autoliquidable Bifri 5','Thưởng lần 1 nạp tiền/gói':'1er bono recarga/paquete','Thưởng lần 2 nạp tiền (20%)':'2do bono recarga (20%)',
    'Autoliquidable theo gói':'Autoliquidable por plan','Gói cước và FTTH':'Paquetes y FTTH','Gói 9123 / Bitel Ventas (20%)':'Paquete 9123 / Bitel Ventas (20%)',
    'FTTH (trả vào N, N+1 và N+2)':'FTTH (pago en N, N+1 y N+2)','Giới thiệu Bipay':'Referido Bipay','Đăng ký TV360':'Registro TV360',
    'Giao dịch Bipay (5.5%)':'Transacción Bipay (5.5%)','Thanh toán dịch vụ':'Pago de servicios','Cash-in':'Cash-in','Khách TuSami mới':'Clientes nuevos TuSami','Doanh số TuSami':'Venta TuSami',
    'Thưởng':'Bonos','Chuyển mạng trả sau':'Portabilidad postpago','Free chip':'Free chip','New ID':'New ID','MNP theo thời gian dùng':'MNP por antigüedad','Khoản trừ':'Descuentos',
    'Soporte theo điểm':'Soporte por puntos','KPI BỊ TRỪ TIỀN':'KPI DE DESCUENTO','Dịch vụ số · mục tiêu 30%':'Servicios digitales · meta 30%',
    'Cash-in Bipay · tối thiểu 10%':'Cash-in Bipay · mín 10%','New ID · mục tiêu 55%':'New ID · meta 55%','Vé TuSami · tối thiểu S/10':'Tickets TuSami · mín S/10',
    'TÔI CẦN BÁN BAO NHIÊU?':'¿CUÁNTO NECESITO VENDER?','Mục tiêu thu nhập (S/)':'Meta de ingreso (S/)','Hiện tại → Cần đạt':'Actual → Necesario',
    'Mỗi khách TuSami chỉ tính ở một mức (mức cao nhất đạt được).':'Cada cliente TuSami cuenta en un solo rango (el más alto alcanzado).',
    'Trong đó, số line chuyển mạng trả sau (thưởng S/12)':'De ello, líneas de portabilidad postpago (bono S/12)',
    'Tiền cước trả trước thu qua Bipay (tổng S/)':'Rentas prepagadas cobradas por Bipay (total S/)',
    'Khách nạp thêm từ hôm sau đến ngày 7 của N+1 (S/) – 2do bônus 20%':'Recargas del cliente desde el día siguiente al 7 de N+1 (S/) – 2do bono 20%',
    'Gói bán qua SMS 9123 / Bitel Ventas (S/) · 20%':'Paquetes vendidos por SMS 9123 / Bitel Ventas (S/) · 20%',
    'Bifri 10 (số lượng) · S/4':'Bifri 10 (cantidad) · S/4','Turista (số lượng) · S/9':'Turista (cantidad) · S/9',
    'FTTH Bitel Fibra 200 · S/55 ×150% (N, N+1, N+2)':'FTTH Bitel Fibra 200 · S/55 ×150% (N, N+1, N+2)',
    'FTTH Bitel Fibra 400 · S/109 ×180%':'FTTH Bitel Fibra 400 · S/109 ×180%','FTTH Bitel Fibra 1GB · S/139 ×200%':'FTTH Bitel Fibra 1GB · S/139 ×200%',
    'Giới thiệu Bipay (cài app + tạo tài khoản + login)':'Referido Bipay (instala app + crea cuenta + login)',
    'Đăng ký TV360 (xem 60 giây)':'Registro TV360 (60s de visualización)','Nạp tiền / thanh toán Bitel / gói qua Bipay (S/) · 5.5%':'Recargas / pagos Bitel / paquetes por Bipay (S/) · 5.5%',
    'Thanh toán hóa đơn dịch vụ (số lượng)':'Pago de recibos de servicios (cantidad)','Cash-in cho khách (số lần)':'Cash-in a clientes (veces)',
    'Số tiền trung bình mỗi lần cash-in (S/)':'Monto promedio por cash-in (S/)','Số vé TuSami đã bán (KPI)':'Tickets TuSami vendidos (KPI)',
    'Doanh số TuSami qua Bipay (S/) · 20% (30% nếu ≥500)':'Venta TuSami por Bipay (S/) · 20% (30% si ≥500)',
    'Khách TuSami mới tiêu ≥ S/5':'Clientes nuevos TuSami que consumen ≥ S/5','… tiêu ≥ S/15':'… consumen ≥ S/15','… tiêu ≥ S/30':'… consumen ≥ S/30','… tiêu ≥ S/50':'… consumen ≥ S/50',
    'Free chip đã kích hoạt (S/3 mỗi chip, tối đa S/100)':'Free chips activados (S/3 c/u, máx S/100)',
    'Chủ nhật vùng nông thôn có ≥5 kích hoạt (1 trả trước + 1 trả sau)':'Domingos rurales con ≥5 activaciones (1 prepago + 1 postpago)',
    'New ID: trả trước hoặc control < S/39.90':'New ID: prepago o control < S/39.90','New ID: control ≥ S/39.90':'New ID: control ≥ S/39.90',
    'MNP Bitel Ventas: 30–59 ngày ở nhà mạng cũ':'MNP Bitel Ventas: 30–59 días en operador anterior','MNP Bitel Ventas: 60–89 ngày':'MNP Bitel Ventas: 60–89 días','MNP Bitel Ventas: ≥ 90 ngày':'MNP Bitel Ventas: ≥ 90 días',
    'Line cho khách nước ngoài (−S/1 mỗi line)':'Líneas a clientes extranjeros (−S/1 c/u)',
    '"Có cash-in" = Bipay + login + cash-in ≥ S/5 và có tiêu. "Số tiền" = nạp tiền/gói trung bình trong ngày kích hoạt.':'"Con cash-in" = Bipay + login + cash-in ≥ S/5 y consumo. "Monto" = recarga/paquete promedio en el día de activación.',
    'Đây là cách tính thu nhập hằng tháng của Promotor (PR) theo chính sách hoa hồng 2026. Dùng hướng dẫn này cùng với tab Tính thu nhập.':'Así se calcula el ingreso mensual del Promotor (PR) según la política de comisiones 2026. Usa esta guía junto con la pestaña Calculadora.',
    'Thu nhập = Soporte tháng + Hoa hồng + Thưởng − Khoản trừ':'Ingreso = Soporte del mes + Comisiones + Bonos − Descuentos',
    'Kích hoạt nào được tính':'Qué activaciones cuentan','Soporte tháng theo điểm':'Soporte del mes por puntos',
    'Chương trình Crece Promotor (mới)':'Programa Crece Promotor (nuevo)','Khoản bị trừ':'Descuentos','FTTH':'FTTH',
    'Có cash-in (LN/MNP)':'Con cash-in (LN/MNP)','Không cash-in (LN/MNP)':'Sin cash-in (LN/MNP)',
    'so với số bán hiện tại':'vs venta actual','Bạn cần khoảng':'Necesitas unas',
    'Mức 4: mỗi điểm thêm được S/6, không giới hạn.':'Nivel 4: S/6 por punto extra, sin límite.',
    'Mức 3: mỗi điểm S/5.':'Nivel 3: S/5 por punto.','Mức 2: mỗi điểm S/4.':'Nivel 2: S/4 por punto.',
    'Mức 1: mỗi điểm S/3.':'Nivel 1: S/3 por punto.','Chưa đạt ngưỡng tối thiểu.':'No alcanza el umbral mínimo.',
    '✓ Đạt KPI: không bị trừ':'✓ KPI cumplido: sin descuento','✓ Đã đạt mục tiêu.':'✓ Meta alcanzada.',
    'Mức':'Nivel','Tối đa mức':'Tope del nivel','Cộng dồn':'Acumulado',
    'Thưởng lần 1 (cùng ngày)':'1er bono (mismo día)','Thưởng lần 2 (đến ngày 7 của N+1)':'2do bono (hasta el 7 de N+1)',
    'Cước cố định của gói':'Cargo fijo del plan','Hoa hồng LN/MNP':'Comisión LN/MNP','Hạng mục':'Concepto',
    'Ngày làm việc':'Días trabajados','Kích hoạt':'Activaciones','Điều kiện':'Condición',
    'Chỉ tính khách có DNI. Mỗi DNI tối đa 1 line Bifri mỗi tháng.':'Solo cuentan clientes con DNI. Máx. 1 línea Bifri por DNI al mes.',
    'Mỗi khách chỉ tính lần kích hoạt đầu tiên trong ngày.':'Solo cuenta la primera activación del cliente por día.',
    'Trả trước: nạp tiền hoặc gói ≥ S/5 đến ngày 3 của N+1 và đạt 15C3D (tiêu dùng tối thiểu 15 cent USD và có lưu lượng 3 ngày trong tháng).':'Prepago: recarga o paquete ≥ S/5 hasta el 3 de N+1 y alcanzar 15C3D (consumo mínimo de 15 ctvs USD y tráfico en 3 días del mes).',
    'Trả sau (gói ≥ S/19.90): line hoạt động có Register ít nhất 3 ngày, đến ngày 4 của N+1.':'Postpago (plan ≥ S/19.90): línea activa con Register al menos 3 días, hasta el 4 de N+1.',
    'IMEI: máy phải có mã TAC hợp lệ và được ghi nhận trong 24 giờ. Không tính nếu 1 IMEI có từ 3 line, 1 line chạy trên từ 3 máy, hoặc 1 máy ghi nhận từ 5 IMEI.':'IMEI: el equipo debe tener TAC válido y registrarse en 24h. No cuenta si 1 IMEI tiene 3+ líneas, 1 línea corre en 3+ equipos, o 1 equipo registra 5+ IMEIs.',
    'Tính liên tục: đến ngày 3 của N+1 line phải có lưu lượng/Register, đến ngày 10 của N+1 phải giữ ít nhất 25%. Nếu không, không được trả soporte.':'Continuidad: hasta el 3 de N+1 la línea debe tener tráfico/Register, hasta el 10 de N+1 debe mantener al menos 25%. Si no, no se paga soporte.',
    'Chip Mi Bitel tự kích hoạt được tính nếu khách nhập mã PR khi kích hoạt.':'Los chips Mi Bitel autoactivados cuentan si el cliente ingresa el código PR al activar.',
    'Mỗi line của khách nước ngoài bị trừ thêm S/1.':'Cada línea de cliente extranjero descuenta S/1 adicional.',
    'Mỗi kích hoạt được cộng điểm. "Có cash-in" = khách có Bipay + login + cash-in ≥ S/5 và có tiêu dùng (thanh toán dịch vụ, nạp tiền hoặc gói) đến ngày 4 của N+1.':'Cada activación suma puntos. "Con cash-in" = cliente con Bipay + login + cash-in ≥ S/5 y consumo (pago de servicios, recarga o paquete) hasta el 4 de N+1.',
    'Bifri 5 + nạp ≥ S/5, hoặc Papa + addon S/5–9.99':'Bifri 5 + recarga ≥ S/5, o Papa + addon S/5–9.99','Papa + addon ≥ S/10':'Papa + addon ≥ S/10',
    'Trả sau < S/29.90':'Postpago < S/29.90','Trả sau S/29.90–39.89':'Postpago S/29.90–39.89','Trả sau ≥ S/39.90':'Postpago ≥ S/39.90','Gói Fútbol ≥ S/39.90':'Plan Fútbol ≥ S/39.90',
    'Trả theo bậc. Mức 1 chỉ dành cho PR tạo trong tháng; PR cũ phải đạt ít nhất 30 điểm (mức 2).':'Pago por tramos. Nivel 1 solo para PR creados en el mes; los PR antiguos deben alcanzar al menos 30 puntos (nivel 2).',
    'Ví dụ: 100 điểm = 29 × S/3 + 30 × S/4 + 30 × S/5 + 11 × S/6 = S/423.':'Ejemplo: 100 puntos = 29 × S/3 + 30 × S/4 + 30 × S/5 + 11 × S/6 = S/423.',
    'Ví dụ: 100 điểm = 29 × S/3 + 30 × S/4 + 30 × S/5 + 11 × S/6 =':'Ejemplo: 100 puntos = 29 × S/3 + 30 × S/4 + 30 × S/5 + 11 × S/6 =',
    '(trả tiền mặt khi kích hoạt): Bifri 5 S/4 · Bifri 10 S/4 · Turista S/9. Bifri 10, Bifri 15 và Turista không tính điểm.':'(pago en efectivo al activar): Bifri 5 S/4 · Bifri 10 S/4 · Turista S/9. Bifri 10, Bifri 15 y Turista no suman puntos.',
    'Thưởng nạp tiền và gói được trả qua Bipay.':'Los bonos de recarga y paquete se pagan por Bipay.',
    'Chip Papa giá S/1 cho kênh, được hoàn lại nếu line có lưu lượng từ ngày hôm sau.':'El chip Papa cuesta S/1 al canal, se reembolsa si la línea tiene tráfico desde el día siguiente.',
    'Gói bán qua SMS 9123 (IN + mã gói + số khách) hoặc Bitel Ventas: 20% giá gói, mỗi lần khách mua.':'Paquetes vendidos por SMS 9123 (IN + código de paquete + número del cliente) o Bitel Ventas: 20% del precio, por cada compra.',
    'Bifri 5 (LN hoặc MNP)':'Bifri 5 (LN o MNP)','Papa LN + addon S/5–9.99':'Papa LN + addon S/5–9.99','Papa LN + addon ≥ S/10':'Papa LN + addon ≥ S/10','Papa MNP + addon ≥ S/10':'Papa MNP + addon ≥ S/10',
    '60% số tiền nạp':'60% de la recarga','20% số tiền nạp':'20% de la recarga','60% giá gói':'60% del paquete','80% giá gói':'80% del paquete','100% giá gói':'100% del paquete',
    'Trả trực tiếp (autoliquidable). Kích hoạt qua Mi Bitel tự kích hoạt được trả qua Bipay nếu khách nhập mã PR.':'Pago directo (autoliquidable). Las autoactivaciones por Mi Bitel se pagan por Bipay si el cliente ingresa el código PR.',
    'Trả trước tiền cước: nếu khách trả trước 3 tháng qua Bipay, bạn nhận 10%. Ví dụ: 3 × S/39.90 = S/119.70 → S/11.97.':'Rentas adelantadas: si el cliente paga 3 meses por Bipay, recibes 10%. Ejemplo: 3 × S/39.90 = S/119.70 → S/11.97.',
    'Giao dịch Bipay (nạp tiền, thanh toán Bitel, gói)':'Transacción Bipay (recarga, pago Bitel, paquete)','Thanh toán hóa đơn (nước, điện, khác)':'Pago de recibos (agua, luz, otros)',
    'Cash-in cho khách':'Cash-in a clientes','Khách TuSami mới (tiêu dùng trong tháng)':'Clientes nuevos TuSami (consumo en el mes)','Bán TuSami qua Bipay':'Venta TuSami por Bipay',
    'Thành thị S/1.00 · Nông thôn S/1.50':'Urbana S/1.00 · Rural S/1.50','Thành thị S/0.50 · Nông thôn S/1.00':'Urbana S/0.50 · Rural S/1.00',
    'S/0.20 mỗi giao dịch':'S/0.20 por transacción','20% mỗi giao dịch, +10% nếu tháng vượt S/500':'20% por transacción, +10% si el mes supera S/500',
    'Mỗi thiết bị và mỗi giấy tờ chỉ một lượt giới thiệu. Ghi "Mã kênh-Số điện thoại", ví dụ LI4PR12145-987123123.':'Un referido por equipo y por documento. Anota "Código de canal-Número", ej. LI4PR12145-987123123.',
    'Trả tự động qua Bipay: phần N cuối tháng, N+1 vào ngày 1 của N+2, N+2 vào ngày 1 của N+3. Chỉ tính dịch vụ đang hoạt động, đã thanh toán và đã lắp đặt (kèm OTT: Mi Bitel + TV360 + Cable Go + Paramount+). Với khuyến mãi PACK, tính trên giá khách trả.':'Pago automático por Bipay: la parte N a fin de mes, N+1 el 1 de N+2, N+2 el 1 de N+3. Solo cuentan servicios activos, pagados e instalados (con OTT: Mi Bitel + TV360 + Cable Go + Paramount+). Con promo PACK, se calcula sobre el precio que paga el cliente.',
    'Chuyển mạng trả trước':'Portabilidad prepago','Chuyên cần':'Asistencia','Chủ nhật nông thôn':'Domingos rurales','Free chip (thị phần)':'Free chip (participación)','New ID (Bitel Ventas)':'New ID (Bitel Ventas)','MNP theo thời gian dùng (Bitel Ventas)':'MNP por antigüedad (Bitel Ventas)',
    'Theo số line trong tháng: 1–5 S/5 · 6–10 S/8 · 11–15 S/12 · 16+ S/15 (theo bậc)':'Según líneas del mes: 1–5 S/5 · 6–10 S/8 · 11–15 S/12 · 16+ S/15 (por tramos)',
    'Line dùng trên 90 ngày ở nhà mạng cũ, nạp hoặc gói ≥ S/5, có lưu lượng ngày hôm sau':'Línea usada 90+ días en el operador anterior, recarga o paquete ≥ S/5, tráfico al día siguiente',
    'S/12 mỗi line':'S/12 por línea','Line MNP hoạt động, không bị khóa đến ngày 4 của N+2':'Línea MNP activa, sin bloqueo hasta el 4 de N+2',
    '15–19 ngày S/50 · 20–24 ngày S/75 · 25+ ngày S/100':'15–19 días S/50 · 20–24 días S/75 · 25+ días S/100',
    'Tối thiểu 50 line có nạp (RC ≥ S/5 hoặc Papa + addon ≥ S/10). Ngày làm việc = 3 kích hoạt':'Mínimo 50 líneas con recarga (RC ≥ S/5 o Papa + addon ≥ S/10). Día trabajado = 3 activaciones',
    'S/10 mỗi chủ nhật':'S/10 por domingo','Từ 5 kích hoạt, ít nhất 1 trả trước và 1 trả sau ≥ S/29.90':'Desde 5 activaciones, al menos 1 prepago y 1 postpago ≥ S/29.90',
    'S/3 mỗi chip, tối đa S/100':'S/3 por chip, máx S/100','Papa và Flash 29.90 tại BTS được giao, chỉ khi khách không muốn mua':'Papa y Flash 29.90 en el BTS asignado, solo cuando el cliente no desea comprar',
    'S/1 trả trước và control < S/39.90 · S/3 control ≥ S/39.90':'S/1 prepago y control < S/39.90 · S/3 control ≥ S/39.90','Khách không có line Bitel trên 1 năm':'Cliente sin línea Bitel por más de 1 año',
    'S/1 (≥ 30 ngày) · S/2 (≥ 60) · S/3 (≥ 90)':'S/1 (≥ 30 días) · S/2 (≥ 60) · S/3 (≥ 90)','Thời gian dùng ở nhà mạng cũ':'Antigüedad en el operador anterior',
    'Áp dụng cho mọi PR có hoa hồng trong tháng. Nếu không đạt cả dịch vụ số LẪN New ID, bị trừ 15% tổng hoa hồng.':'Aplica a todo PR con comisión en el mes. Si no cumple ni servicios digitales NI New ID, se descuenta 15% de la comisión total.',
    '= (đăng ký TV360 + đăng ký Bipay có cash-in + vé TuSami) ÷ số kích hoạt trả trước và control. Cash-in phải đạt ít nhất 10%.':'= (registros TV360 + registros Bipay con cash-in + tickets TuSami) ÷ activaciones prepago y control. El cash-in debe alcanzar al menos 10%.',
    '= số kích hoạt của khách không có line Bitel từ 6 tháng trở lên ÷ số kích hoạt trả trước và control.':'= activaciones de clientes sin línea Bitel por 6+ meses ÷ activaciones prepago y control.',
    '✓ Không bị trừ':'✓ Sin descuento','−15% tổng hoa hồng':'−15% de la comisión total',
    'TuSami: bán ít nhất S/10 vé trong tháng cho các khách khác nhau; nếu không, −10%.':'TuSami: vende al menos S/10 en tickets al mes a clientes distintos; si no, −10%.',
    'TV360: hơn 5 lượt giới thiệu trên cùng một máy → −15% và thu hồi các khoản thưởng đó.':'TV360: más de 5 referidos en el mismo equipo → −15% y recupero de esos bonos.',
    'Giao dịch giả (chuyển và hoàn tiền cùng một số) → −100% hoa hồng của tháng.':'Transacciones falsas (transferir y devolver en el mismo número) → −100% de la comisión del mes.',
    'Bán line khách nước ngoài giả: trừ lại các khoản đã trả (thưởng nạp tiền và autoliquidable).':'Líneas falsas de clientes extranjeros: recupero de lo pagado (bono de recarga y autoliquidable).',
    'Thưởng một lần cho mã PR mới tạo từ 01 đến 15/10/2026 (áp dụng từ tháng 10/2026). Mã tạo sau ngày 15 được tính vào tháng sau.':'Bono único para códigos PR nuevos creados del 01 al 15/10/2026 (vigente desde oct 2026). Los códigos creados después del 15 cuentan para el mes siguiente.',
    'Ngày làm việc = tối thiểu 2 chip kích hoạt trong ngày.':'Día trabajado = mínimo 2 chips activados en el día.',
    'Kích hoạt hợp lệ: trả trước có nạp tiền hoặc gói ≥ S/5 và trả sau ≥ S/29.90.':'Activación válida: prepago con recarga o paquete ≥ S/5 y postpago ≥ S/29.90.',
    'Trả qua BiPay cuối tháng khi đạt mục tiêu. Phải có tài khoản BiPay đang hoạt động.':'Pago por BiPay a fin de mes al cumplir la meta. Se requiere cuenta BiPay activa.',
    'Chỉ trả một hạng (hạng cao nhất) và không bị trừ KPI hay TuSami trên khoản thưởng này.':'Solo se paga un rango (el más alto) y este bono no está sujeto a descuentos de KPI ni TuSami.',
    'Mã kích hoạt lại: do phòng Kinh doanh xem xét.':'Códigos reactivados: a criterio del área de Ventas.',
    'Chi nhánh: ANC, CAJ, ICA, LAM, LI3, LI5, LI7, LI8, LOR, PIU, SAN, TAC, TUM, UCA.':'Sucursales: ANC, CAJ, ICA, LAM, LI3, LI5, LI7, LI8, LOR, PIU, SAN, TAC, TUM, UCA.'
  };

  // ---- regex patterns for composed (number-bearing) strings ----
  var REP = {
    en:[
      [/^📅 Dữ liệu đến (.+)$/, '📅 Data as of $1'],
      [/^15C3D Lũy kế YTD \/ Acumulado — (.+)$/, '15C3D cumulative YTD — $1'],
      [/^Doanh thu \/ Ingresos YTD — (.+)$/, 'Revenue YTD — $1'],
      [/^Trạm cảnh báo \/ Estaciones Alerta — (.+)$/, 'Alert stations — $1'],
      [/^vs KH Năm \/ Plan Anual \((.+) TB\)$/, 'vs Annual plan ($1 subs)'],
      [/^Soporte tháng \((.+) điểm\)$/, 'Monthly support ($1 pts)'],
      [/^Chuyển mạng trả trước \((.+) line\)$/, 'Prepaid portability ($1 lines)'],
      [/^Chuyển cấp \((.+) line nạp tiền\)$/, 'Upgrade ($1 recharged lines)'],
      [/^(.+) line · (.+) điểm$/, '$1 lines · $2 pts'],
      [/^(.+) kích hoạt$/, '$1 activations'],
      [/^trong tháng \(≈ (.+) mỗi ngày trong (.+) ngày\) để đạt (.+)\.$/, 'this month (≈ $1 per day over $2 days) to reach $3.'],
      [/^⚠ Bị trừ: (.+)$/, '⚠ Deducted: $1'],
      [/^(\d+) trạm 15C3D$/, '$1 stations 15C3D']
    ],
    es:[
      [/^📅 Dữ liệu đến (.+)$/, '📅 Datos al $1'],
      [/^15C3D Lũy kế YTD \/ Acumulado — (.+)$/, '15C3D acumulado YTD — $1'],
      [/^Doanh thu \/ Ingresos YTD — (.+)$/, 'Ingresos YTD — $1'],
      [/^Trạm cảnh báo \/ Estaciones Alerta — (.+)$/, 'Estaciones alerta — $1'],
      [/^vs KH Năm \/ Plan Anual \((.+) TB\)$/, 'vs Plan Anual ($1 subs)'],
      [/^Soporte tháng \((.+) điểm\)$/, 'Soporte del mes ($1 pts)'],
      [/^Chuyển mạng trả trước \((.+) line\)$/, 'Portabilidad prepago ($1 líneas)'],
      [/^Chuyển cấp \((.+) line nạp tiền\)$/, 'Permanencia ($1 líneas con recarga)'],
      [/^(.+) line · (.+) điểm$/, '$1 líneas · $2 pts'],
      [/^(.+) kích hoạt$/, '$1 activaciones'],
      [/^trong tháng \(≈ (.+) mỗi ngày trong (.+) ngày\) để đạt (.+)\.$/, 'este mes (≈ $1 por día en $2 días) para llegar a $3.'],
      [/^⚠ Bị trừ: (.+)$/, '⚠ Descontado: $1'],
      [/^(\d+) trạm 15C3D$/, '$1 estaciones 15C3D']
    ]
  };

  function tr(core, lang){
    if(lang==='vi') return core;
    var m=(lang==='en'?EN:ES); if(m[core]!=null) return m[core];
    var pats=REP[lang]||[];
    for(var i=0;i<pats.length;i++){ var mm=core.match(pats[i][0]); if(mm) return pats[i][1].replace(/\$(\d)/g,function(_,n){return mm[+n];}); }
    return core;
  }
  function tnode(nd){
    var p=nd.parentNode; if(!p) return; var tg=p.nodeName; if(tg==='SCRIPT'||tg==='STYLE') return;
    if(nd.__o===undefined){ if(!nd.nodeValue.trim()) return; nd.__o=nd.nodeValue; }
    else if(nd.nodeValue!==nd.__t && nd.nodeValue!==nd.__o){ nd.__o=nd.nodeValue; } // app rewrote it
    var o=nd.__o, lead=o.match(/^\s*/)[0], trail=o.match(/\s*$/)[0], core=o.trim();
    var nv=lead+tr(core, window.DASH_LANG)+trail;
    nd.__t=nv; if(nd.nodeValue!==nv) nd.nodeValue=nv;
  }
  function walk(root){
    var wk=document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var list=[],n; while(n=wk.nextNode()) list.push(n);
    list.forEach(tnode);
    if(root.querySelectorAll) root.querySelectorAll('[placeholder]').forEach(function(e){
      if(e.__po===undefined) e.__po=e.getAttribute('placeholder')||'';
      e.setAttribute('placeholder', tr(e.__po.trim(), window.DASH_LANG));
    });
  }
  var obs=null;
  function apply(){ if(obs)obs.disconnect(); walk(document.body); if(obs)obs.observe(document.body,{childList:true,subtree:true,characterData:true}); }
  function startObs(){
    obs=new MutationObserver(function(muts){
      obs.disconnect();
      muts.forEach(function(m){
        if(m.type==='characterData'){ tnode(m.target); }
        else { m.addedNodes.forEach(function(a){ if(a.nodeType===3) tnode(a); else if(a.nodeType===1) walk(a); }); }
      });
      obs.observe(document.body,{childList:true,subtree:true,characterData:true});
    });
    obs.observe(document.body,{childList:true,subtree:true,characterData:true});
  }

  function renderSel(){
    var box=document.getElementById('dashLangSel'); if(!box) return;
    var langs=[['vi','VI'],['en','EN'],['es','ES']];
    box.innerHTML=langs.map(function(l){ var on=window.DASH_LANG===l[0];
      return '<button onclick="setDashLang(\''+l[0]+'\')" style="padding:4px 10px;font-size:11px;font-weight:700;border:1px solid '+(on?'#1e3a8a':'#cbd5e1')+';background:'+(on?'#1e3a8a':'#fff')+';color:'+(on?'#fff':'#475569')+';cursor:pointer;'+(l[0]==='vi'?'border-radius:6px 0 0 6px':l[0]==='es'?'border-radius:0 6px 6px 0':'')+';border-left:'+(l[0]==='vi'?'1px':'0')+' solid '+(on?'#1e3a8a':'#cbd5e1')+'">'+l[1]+'</button>';
    }).join('');
  }
  window.setDashLang=function(l){ window.DASH_LANG=l; try{localStorage.setItem('dashLang',l);}catch(e){} renderSel(); apply(); };

  function wrap(name){ var f=window[name]; if(typeof f==='function' && !f.__wrapped){ var g=function(){ var r=f.apply(this,arguments); if(window.DASH_LANG!=='vi') apply(); return r; }; g.__wrapped=true; window[name]=g; } }
  function init(){ renderSel(); startObs(); ['switchPage','prSetView','prToggleSec','prSetStr','prLoadExample','prClear','switchTab','switchSalesMonth','buildDigitalPage'].forEach(wrap); if(window.DASH_LANG!=='vi') apply(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
