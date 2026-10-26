/* Mindmap gói sản phẩm — nguồn: Guía Comercial Octubre 2026 (+ Triple Data CAJBR, Thay đổi CS 10/2026). Dữ liệu tĩnh cho tab Chính sách → Gói sản phẩm → Mindmap. */
const MINDMAPS = [
{
"slug": "bitel-kenh-ban-t10-2026",
"group": "Theo kênh bán",
"title": "🧭 Tổng quan theo kênh",
"palette": "Pastel Garden",
"data": {
"central": "Bitel · Kênh bán T10/2026",
"branches": [
{
"label": "🏪 Kênh vật lý",
"group": 0,
"detail": "PDV, PR (promotor), Dealer, Store, Isla — hệ thống BCCS / Bitel Ventas",
"children": [
{
"label": "Ilimitados 39.90–105.90",
"detail": "Data cộng dồn tối đa 1000 GB nếu trả hóa đơn đúng hạn. Giảm giá porta: 55.90 −30% x3 tháng; 69.90 −50% x6; 79.90 → S/39.90 (−50% x12); 99.90 & 105.90 −50% x12. Bono porta (chỉ PDV & Web): 39.90 +65 GB x6 (tổng 110 GB); 55.90 +60 GB x6 (tổng 185 GB). Bono migra 10–20 GB x6. Plan 39.90 không bán ở Loreto. Thông điệp: '250 GB chỉ S/39.90 trong 12 tháng'."
},
{
"label": "Flash 29.90 / 39.90",
"detail": "30 GB / 50 GB, gọi & SMS không giới hạn, TV360 Premium x6 tháng, data cộng dồn. Bono porta (chỉ PDV & Web): 29.90 +60 GB x6 (tổng 90 GB); 39.90 +60 GB x6 (tổng 110 GB). Bono migra +30 GB. Thông điệp: gấp đôi GB đối thủ cùng giá."
},
{
"label": "Profe 79.90 · Mero 35",
"detail": "Chỉ bán ở kênh vật lý. Profe 79.90: 125 GB cộng dồn, chỉ ở San Martín, Amazonas, Loreto, Ica, Ucayali, Moquegua, Tacna; porta −50% x12 tháng; migra & line mới −50% +50 MB x12 (migra giảm từ chu kỳ 2). Mero 35: 25 GB + GB đêm không giới hạn (23h–6h), chỉ ở chi nhánh/mã được chọn."
},
{
"label": "CONADIS S/15",
"detail": "Bitel Voz / Datos / Total giá S/15. Chỉ bán ở Dealer loại 1–3, Store, Isla, Retail; trực tiếp, phải kiểm tra thẻ CONADIS. Mỗi người 1 line. Áp dụng line mới, porta, migra."
},
{
"label": "Mi Plan (kênh cố định)",
"detail": "Khách tự chọn quyền lợi, từ S/20; bắt buộc gói data tối thiểu 10 GB/S/10. Chu kỳ 6/16/26. Line mới, migra Pre↔Mi Plan."
},
{
"label": "eSIM −50% x3 tháng",
"detail": "Plan ≥ S/55.90, line mới, giấy tờ không có kích hoạt nào trong 6 tháng gần nhất. Chỉ kênh vật lý."
}
]
},
{
"label": "💻 Kênh số",
"group": 0,
"detail": "Web bitel.com.pe, App Mi Bitel, Tienda Bitel (e-commerce), WhatsApp/SMS",
"children": [
{
"label": "Ilimitados online",
"detail": "Tienda Bitel: 55.90 −50% x6 (S/27.90, không cộng dồn KM khác). 79.90 −50% x12 qua Tienda Bitel & bitel.com.pe. 99.90 bán online từ 13/04/26 (−50% x12 = S/49.95). 105.90: bảng ghi cả −50% (S/52.95) và −60% (S/42.36) x12 — cần xác nhận. Bono porta 39.90/55.90 chỉ Web Bitel. 39.90 không bán ở Loreto."
},
{
"label": "Mi Plan online",
"detail": "Chỉ Web Bitel & Mi Bitel; line mới + porta; từ S/20. Chọn ≥25 GB được tặng thêm (25 → +15 GB, 30 → +25 GB); ≥40 GB được gấp đôi. Giao SIM miễn phí từ S/20."
},
{
"label": "Dùng thử 7 ngày",
"detail": "Mi Bitel, Tienda Bitel, bitel.com.pe; plan control ≥29.90; line mới hoặc porta, SIM vật lý hoặc eSIM. 7 ngày internet + gọi + SMS không giới hạn, sau đó 30 ngày theo plan. Mỗi DNI 1 lần/90 ngày; không thanh toán sau 7 ngày → hủy dịch vụ."
},
{
"label": "Familia + Postpago",
"detail": "Tienda Bitel: Plan Familia phải kích hoạt cùng postpago ≥29.90, chỉ line mới; cấu hình GB/phút/SMS ngay lúc kích hoạt."
},
{
"label": "Gói trên Mi Bitel",
"detail": "TuSami TS (control, trừ vào hóa đơn), Bitdefender S/9.90 (control, 5 thiết bị + 2 GB, tự gia hạn), TI5 Gamer S/7.90 (Bitel Arcade Premium), TV360+Móvil S/19.99 (cũng có ở 164 và Bitel Ventas)."
},
{
"label": "SV ĐH qua WhatsApp/SMS",
"detail": "Khách được chọn: 49.90 5G → S/24.90, 69.90 → S/34.90, 79.90 → S/39.90 (−50% x48 tháng). Gửi ảnh thẻ sinh viên; bằng chứng khác xét trong 72h. Phải nạp đủ tiền plan trước khi migra."
}
]
},
{
"label": "☎️ Telesales",
"group": 1,
"detail": "Kênh bán qua điện thoại — chủ yếu chuyển Pre → Post",
"children": [
{
"label": "Pre→Post nhóm 1",
"detail": "Ilimitado 79.90 & 69.90: −50% x12 tháng (S/39.90 và S/34.90 mỗi tháng)."
},
{
"label": "Pre→Post nhóm 2",
"detail": "Ilimitado 55.90, 49.90, 39.90: data không giới hạn tốc độ cao x12 tháng."
},
{
"label": "Dùng thử 7 ngày",
"detail": "Migra pre→post: chu kỳ = ngày migra + 7 (N+7); phải trả trong 7 ngày, quá hạn bị khóa đến khi thanh toán. Mỗi DNI 1 lần/90 ngày."
},
{
"label": "Telesales: 79.90 data ∞",
"detail": "Riêng Telesales: porta Ilimitado 79.90 được thêm data không giới hạn tốc độ cao x12 tháng."
}
]
},
{
"label": "🌐 Bitel Fibra (FTTH)",
"group": 1,
"detail": "Kênh cố định chọn lọc, PR trực tiếp chọn lọc, app FTTH Sales / Bitel Ventas FTTH",
"children": [
{
"label": "Fibra 200/400/1GB",
"detail": "S/55 / S/109 / S/139 (200 / 400 / 1000 Mbps, đối xứng). Lắp đặt S/120, hoặc miễn phí nếu cam kết 6 tháng. Modem cho mượn; hủy trong 6 tháng mà không trả → phạt S/250. Tối đa 3 hợp đồng/DNI; có nợ thì không được kích hoạt mới. DNI/RUC qua Bitel Ventas FTTH, giấy tờ khác chỉ trực tiếp."
},
{
"label": "Fibra 100 (AON)",
"detail": "Giá S/89, khuyến mãi lên 400 Mbps, giảm S/20 x3 tháng từ chu kỳ 2, lắp đặt miễn phí. Kênh có BCCS3, quận chọn lọc."
},
{
"label": "L1MAX kèm Fibra",
"detail": "Fibra 400 & 1 GB: tặng L1MAX x12 tháng (khách mới; trả đúng hạn; hạ gói là mất). Fibra 200: mua thêm TV360+Móvil S/19.99 hoặc TV360+Full S/45."
},
{
"label": "Bitel Pack",
"detail": "Fibra + di động: Fibra giá ưu đãi theo plan di động (vd. 400 → S/60–75; 1 GB → S/75–90). Plan di động thêm 10–300 GB; Ilimitado 49.90 5G & 69.90 −50% x48 tháng nếu giữ cả 2 dịch vụ. Tối đa 3 line/DNI; chia sẻ cho tối đa 3 người hưởng."
},
{
"label": "Trả trước · BiPay",
"detail": "Trả trước 3 tháng → tặng 1; 6 → tặng 2; 12 → tặng 4 (12 tháng chỉ qua Mi Bitel, khách hiện hữu). Trả qua BiPay hoàn 30% (5% nếu trễ hạn hoặc trả hộ). Mesh/TV Box S/150, tối đa 3 thiết bị."
}
]
},
{
"label": "📱 Prepago & gói",
"group": 2,
"detail": "Mọi kênh · mua gói qua *9090#, 164, Mi Bitel",
"children": [
{
"label": "Prepago Papa S/10",
"detail": "Gọi không giới hạn + 500 SMS, 1 GB, WhatsApp full, TV360 Premium x30 ngày. Porta: +10 GB cho lần nạp ≥S/5 đầu tiên mỗi tháng, trong 12 tháng. Kích hoạt BCCS/Bitel Ventas phải mua gói ≥S/5. PDV ở Madre de Dios chỉ được bán Papa."
},
{
"label": "Bifri 5 (bị hạn chế)",
"detail": "S/5 x5 ngày. Ngừng bán ở PDV Madre de Dios; ngừng hoàn toàn ở kênh Promotor toàn quốc. Các kênh khác giữ nguyên."
},
{
"label": "TI·SO·DM gấp đôi data",
"detail": "Gói ≥S/5 được gấp đôi GB (TI20/30/40 gia hạn tới 04/2027). Không áp dụng ở Loreto. Gói TI ≥S/8 có data TV360 không giới hạn."
},
{
"label": "Gói 5G từ S/7",
"detail": "Các gói SO & TI từ S/7 (8SO, 10SO, 13SO; TI7, TI10, TI15, TI20, TI30, TI40) + DM10: 5G không giới hạn tốc độ cao trong thời hạn gói; cần máy hỗ trợ & vùng phủ 5G. DM10/10SO bán cả cho postpago."
},
{
"label": "Super Recarga",
"detail": "Nạp ≥S/5 ở mọi kênh: gọi/data/Facebook tốc độ cao 3–7 ngày. Nạp qua BiPay cho chính số mình: thêm 10 GB."
},
{
"label": "❓ Thay đổi Papa T10",
"detail": "Dự kiến, chưa chính thức: porta + gói Papa S/10 → data gốc tăng từ 1 GB lên 2.5 GB; BCCS/Bitel Ventas chỉ hiện gói từ S/7 khi kích hoạt Papa. Chờ xác nhận ngày triển khai.",
"type": "inquiry"
}
]
},
{
"label": "🎁 Áp dụng mọi kênh",
"group": 2,
"detail": "Khuyến mãi postpago áp dụng ở tất cả kênh (hoặc vật lý + số)",
"children": [
{
"label": "Plan Familia",
"detail": "Chip S/1 cho tối đa 4 line phụ cùng chủ thuê bao; line chính control ≥S/29.90; chia sẻ GB thường, gọi, SMS. Line chính hủy/porta/hạ xuống <29.90 → line phụ mất quyền lợi."
},
{
"label": "⚡ Line thêm −50%",
"detail": "Line thứ 2 trở đi cùng giấy tờ, plan Ilimitado ≥55.90: −50%, tối đa 4 line; line mới & porta. MÂU THUẪN: trang khuyến mãi ghi 'vô thời hạn' (từ 26/02), nhưng ghi chú bảng giá kênh vật lý ghi trả S/48.90 từ tháng 4 đến 6. Cần xác nhận.",
"conflict": "line-them"
},
{
"label": "New ID: GB ∞ x6 tháng",
"detail": "Khách không có plan Bitel trong 12 tháng: line mới control ≥39.90; porta Flash 39.90; migra lên ≥49.90 5G. Kiểm tra: gửi DNI qua SMS tới 167."
},
{
"label": "Fútbol & SV ĐH",
"detail": "Fútbol (Tricampeón/Cajacho/Hincha, bản MAX): kênh vật lý & số, line mới + porta; MAX porta −50% x12; L1MAX qua TV360 x6 tháng; +3 GB mỗi trận Universitario thắng. SV ĐH: 69.90–105.90 & Fútbol MAX −50% x48 tháng; kiểm tra bằng SMS 'ESTUDIANTE DNI' tới 167; không cộng dồn KM khác."
},
{
"label": "5G theo mức giá",
"detail": "Trả ≥39.90: 6 tháng 5G; ≥49.90: 12 tháng; ≥99.90: 24 tháng; ≥105.90: vĩnh viễn. Tự động kích hoạt."
},
{
"label": "24 kỳ 0% lãi",
"detail": "Mua máy ≥S/200 + control ≥29.90 (line mới/migra/porta), thẻ BCP Visa hoặc BBVA; cửa hàng & isla chọn lọc, Mi Bitel, bitel.com.pe."
}
]
},
{
"label": "🏢 CAB/Store · B2B",
"group": 3,
"detail": "Quầy CAB/Store, BCCS, đại lý doanh nghiệp, BiPay",
"children": [
{
"label": "Giữ chân (CAB/ST)",
"detail": "Khách xin hạ gói/hủy: control 39.90–49.90 −15% +30 GB; 49.90–65.90 −25% +45 GB; >65.90 −30% +60 GB (3 tháng). Prepago theo tổng nạp 3 tháng: 5–10 GB."
},
{
"label": "Porta thất bại (BCCS)",
"detail": "Porta lỗi do line <30 ngày/bị treo/bị khóa → kích hoạt line mới, chỉ DNI: Ilimitado 55.90 & 69.90 −50% x12."
},
{
"label": "CorpMóvil (RUC 20)",
"detail": "S/31.90–79.90; bán qua Dealer, Store, đại lý doanh nghiệp; line mới & porta; WhatsApp & Zoom tốc độ cao; 300 phút LDI ở gói cao."
},
{
"label": "BiPay hoàn tiền",
"detail": "Trả hóa đơn: 30% (plan ≥39.90), 10% (<39.90), 5% nếu trả hộ hoặc plan đang giảm giá. Nạp tiền: 10% số của mình, 5% số người khác. Plan 29.90 trả qua BiPay: +20 GB x6 tháng."
},
{
"label": "⚡ Trả trước 3 tháng",
"detail": "Trả trước 3 tháng → tặng tháng thứ 4; plan không đang có giảm giá. MÂU THUẪN: tiêu đề ghi 'plan từ 29.90 trở lên', nhưng điều kiện (3) ghi 'hóa đơn bằng hoặc dưới 29.90'. Cần xác nhận.",
"conflict": "tra-truoc"
}
]
}
]
}
},
{
"slug": "goi-ilimitados",
"group": "Trả sau",
"title": "Ilimitados",
"palette": "Bauhaus",
"data": {
"central": "Gói Ilimitados (trả sau)",
"branches": [
{
"label": "💙 Ilimitado 39.90",
"group": 0,
"detail": "Gói vào cửa dòng Ilimitado · kênh trọng tâm PDV, PR",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước (TDN) + 500 SMS."
},
{
"label": "45 GB cộng dồn",
"detail": "45 GB tốc độ cao. GB chưa dùng chuyển sang tháng sau (tối đa 1000 GB) nếu trả hóa đơn đúng hạn. Hết GB vẫn dùng không giới hạn ở 0.512/0.256 Mbps."
},
{
"label": "Instagram · Facebook FULL",
"detail": "Data không giới hạn cho Instagram và Facebook (tốc độ thấp)."
},
{
"label": "TV360 + Spotify 10 GB",
"detail": "TV360 Premium x6 tháng; GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn. Spotify 10 GB x6 tháng."
},
{
"label": "Porta +65 GB x6",
"detail": "Chỉ PDV & Web: +65 GB x6 tháng (tổng 110 GB). Migra: +50 GB x3 tháng. Không có giảm giá porta."
},
{
"label": "5G 6 tháng · không Loreto",
"detail": "Khuyến mãi 5G theo mức giá: trả từ 39.90 đến dưới 49.90 được 5G 6 tháng. Gói không bán ở Loreto."
}
]
},
{
"label": "⚡ Ilimitado 49.90 5G",
"group": 0,
"detail": "Sản phẩm trọng tâm: tín hiệu 5G · kênh PDV, PR",
"children": [
{
"label": "Gọi & SMS ∞",
"detail": "Gọi và SMS không giới hạn trong nước."
},
{
"label": "120 GB cộng dồn",
"detail": "120 GB tốc độ cao. GB chưa dùng chuyển sang tháng sau (tối đa 1000 GB) nếu trả hóa đơn đúng hạn. Hết GB vẫn dùng không giới hạn ở 0.512/0.256 Mbps."
},
{
"label": "5G/4G ∞ x12 tháng",
"detail": "Data 5G/4G tốc độ cao không giới hạn 12 tháng, không trừ vào GB thường. Cần máy hỗ trợ 5G và ở vùng phủ; máy không có 5G thì dùng 4G không giới hạn."
},
{
"label": "Apps FULL + 1.5 GB",
"detail": "Instagram/Facebook FULL; WhatsApp, Mobile Legends, Waze 1.5 GB."
},
{
"label": "TV360 + Spotify 10 GB",
"detail": "TV360 Premium x6 tháng; GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn. Spotify 10 GB x6 tháng."
},
{
"label": "Porta · line mới · migra",
"detail": "Áp dụng porta, line mới, migra (pre→post, post→post); không có giảm giá hay bono porta. Thông điệp: 'Mọi thứ không giới hạn tốc độ cao, 4G & 5G miễn phí'."
}
]
},
{
"label": "🟢 Ilimitado 55.90",
"group": 1,
"detail": "Mốc bắt đầu được giảm 50% cho line thêm",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước (TDN) + 500 SMS."
},
{
"label": "125 GB cộng dồn",
"detail": "125 GB tốc độ cao. GB chưa dùng chuyển sang tháng sau (tối đa 1000 GB) nếu trả hóa đơn đúng hạn. Hết GB vẫn dùng không giới hạn ở 0.512/0.256 Mbps."
},
{
"label": "WhatsApp·game·Waze 1.5 GB",
"detail": "WhatsApp, Mobile Legends, Waze: 1.5 GB."
},
{
"label": "TV360 + Spotify 15 GB",
"detail": "TV360 Premium x6 tháng; GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn. Spotify 15 GB x6 tháng."
},
{
"label": "5G/4G line mới x12",
"detail": "Line mới: 5G/4G tốc độ cao 12 tháng."
},
{
"label": "Porta −30% / −50%",
"detail": "Kênh vật lý: −30% x3 tháng (S/39.10) + bono +60 GB x6 tháng (chỉ PDV & Web, tổng 185 GB). Tienda Bitel & Telesales: −50% x6 tháng (S/27.90), không cộng dồn KM khác."
}
]
},
{
"label": "🟠 Ilimitado 69.90",
"group": 1,
"detail": "Gói 220 GB",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước (TDN) + 500 SMS."
},
{
"label": "220 GB cộng dồn",
"detail": "220 GB tốc độ cao. GB chưa dùng chuyển sang tháng sau (tối đa 1000 GB) nếu trả hóa đơn đúng hạn. Hết GB vẫn dùng không giới hạn ở 0.512/0.256 Mbps."
},
{
"label": "Instagram · Facebook FULL",
"detail": "Data không giới hạn cho Instagram và Facebook (tốc độ thấp)."
},
{
"label": "TV360 + Spotify 15 GB",
"detail": "TV360 Premium x6 tháng; GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn. Spotify 15 GB x6 tháng."
},
{
"label": "5G/4G line mới x12",
"detail": "Line mới: 5G/4G tốc độ cao 12 tháng."
},
{
"label": "⚡ Porta −50%",
"detail": "Kênh vật lý ghi −50% x6 tháng (S/34.90); bảng kênh số ghi −50% x12 tháng (S/34.95). Cần xác nhận thời hạn.",
"conflict": "p69"
}
]
},
{
"label": "⭐ Ilimitado 79.90",
"group": 2,
"detail": "Gói chủ lực khi porta",
"children": [
{
"label": "Gọi & SMS ∞",
"detail": "Gọi và SMS không giới hạn trong nước."
},
{
"label": "250 GB cộng dồn",
"detail": "250 GB tốc độ cao. GB chưa dùng chuyển sang tháng sau (tối đa 1000 GB) nếu trả hóa đơn đúng hạn. Hết GB vẫn dùng không giới hạn ở 0.512/0.256 Mbps."
},
{
"label": "Instagram · Facebook FULL",
"detail": "Data không giới hạn cho Instagram và Facebook (tốc độ thấp)."
},
{
"label": "TV360 + Spotify 20 GB",
"detail": "TV360 Premium x6 tháng; GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn. Spotify 20 GB x6 tháng."
},
{
"label": "5G/4G line mới x24",
"detail": "Line mới: 5G/4G tốc độ cao 24 tháng."
},
{
"label": "Porta −50% x12",
"detail": "Porta: S/39.90 x12 tháng (kênh vật lý, Tienda Bitel, bitel.com.pe). Riêng Telesales: thêm data không giới hạn tốc độ cao x12 tháng. Thông điệp: '250 GB chỉ S/39.90 trong 12 tháng'."
}
]
},
{
"label": "🔷 Ilimitado 99.90",
"group": 2,
"detail": "Gói 'Más GB' 300 GB",
"children": [
{
"label": "Gọi & SMS ∞",
"detail": "Gọi và SMS không giới hạn trong nước."
},
{
"label": "300 GB cộng dồn",
"detail": "300 GB tốc độ cao. GB chưa dùng chuyển sang tháng sau (tối đa 1000 GB) nếu trả hóa đơn đúng hạn. Hết GB vẫn dùng không giới hạn ở 0.512/0.256 Mbps."
},
{
"label": "Instagram · Facebook FULL",
"detail": "Data không giới hạn cho Instagram và Facebook (tốc độ thấp)."
},
{
"label": "TV360 + Spotify 20 GB",
"detail": "TV360 Premium x6 tháng; GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn. Spotify 20 GB x6 tháng."
},
{
"label": "5G/4G line mới x24",
"detail": "Line mới: 5G/4G tốc độ cao 24 tháng."
},
{
"label": "Porta −50% + 5G 12 tháng",
"detail": "Porta −50% x12 tháng (S/49.95) ở cả kênh vật lý và kênh số; bono porta: 5G 12 tháng. Bán online từ 13/04/26."
}
]
},
{
"label": "💎 Ilimitado 105.90",
"group": 2,
"detail": "Gói cao nhất · 5G vĩnh viễn",
"children": [
{
"label": "Gọi & SMS ∞",
"detail": "Gọi và SMS không giới hạn trong nước."
},
{
"label": "350 GB cộng dồn",
"detail": "350 GB tốc độ cao. GB chưa dùng chuyển sang tháng sau (tối đa 1000 GB) nếu trả hóa đơn đúng hạn. Hết GB vẫn dùng không giới hạn ở 0.512/0.256 Mbps. Data không giới hạn chỉ áp cho line đầu tiên."
},
{
"label": "Instagram · Facebook FULL",
"detail": "Data không giới hạn cho Instagram và Facebook (tốc độ thấp)."
},
{
"label": "TV360 + Spotify 20 GB",
"detail": "TV360 Premium x6 tháng; GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn. Spotify 20 GB x6 tháng."
},
{
"label": "Porta: internet ∞",
"detail": "Chỉ khi porta: internet không giới hạn tốc độ cao. Migra: +30 GB x3 tháng. Trả ≥105.90 được 5G vĩnh viễn."
},
{
"label": "⚡ Porta −50% hay −60%",
"detail": "Kênh vật lý: −50% x12 (S/52.90). Kênh số: bảng ghi cả −50% x12 (S/52.95) và −60% x12 (S/42.36) qua Tienda Bitel. Cần xác nhận.",
"conflict": "p105"
}
]
}
]
}
},
{
"slug": "goi-flash-control",
"group": "Trả sau",
"title": "Flash · Control",
"palette": "Bauhaus",
"data": {
"central": "Gói Flash · Control",
"branches": [
{
"label": "⚡ Flash 29.90",
"group": 0,
"detail": "Thông điệp: gấp đôi GB đối thủ cùng giá · kênh PDV, PR",
"children": [
{
"label": "Gọi & SMS ∞",
"detail": "Gọi và SMS không giới hạn trong nước."
},
{
"label": "30 GB cộng dồn",
"detail": "30 GB. GB chưa dùng chuyển sang tháng sau (tối đa 1000 GB) nếu trả hóa đơn đúng hạn. Hết GB vẫn dùng không giới hạn ở 0.512/0.256 Mbps."
},
{
"label": "IG · FB · WhatsApp FULL",
"detail": "Data không giới hạn cho Instagram, Facebook (tốc độ thấp) và WhatsApp."
},
{
"label": "TV360 + Spotify 5 GB",
"detail": "TV360 Premium x6 tháng; GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn. Spotify 5 GB x6 tháng."
},
{
"label": "Porta +60 GB x6",
"detail": "Porta: +60 GB x6 tháng (chỉ PDV & Web, tổng 90 GB); cột thứ hai của bảng ghi +30 GB x6 tháng. Migra: +30 GB x3 tháng (chuyển từ trả trước nhận ngay; control→control nhận từ chu kỳ sau)."
}
]
},
{
"label": "⚡ Flash 39.90",
"group": 0,
"detail": "Kênh PDV, PR",
"children": [
{
"label": "Gọi & SMS ∞",
"detail": "Gọi và SMS không giới hạn trong nước."
},
{
"label": "50 GB cộng dồn",
"detail": "50 GB. GB chưa dùng chuyển sang tháng sau (tối đa 1000 GB) nếu trả hóa đơn đúng hạn. Hết GB vẫn dùng không giới hạn ở 0.512/0.256 Mbps."
},
{
"label": "IG · FB · WhatsApp FULL",
"detail": "Data không giới hạn cho Instagram, Facebook (tốc độ thấp) và WhatsApp."
},
{
"label": "TV360 + Spotify 10 GB",
"detail": "TV360 Premium x6 tháng; GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn. Spotify 10 GB x6 tháng."
},
{
"label": "Porta +60 GB x6",
"detail": "Porta: +60 GB x6 tháng (chỉ PDV & Web, tổng 110 GB); cột thứ hai ghi +45 GB x6 tháng. Porta khách mới (New ID): GB không giới hạn tốc độ cao x6 tháng."
}
]
},
{
"label": "🎓 Profe 79.90",
"group": 1,
"detail": "Chỉ kênh vật lý · San Martín, Amazonas, Loreto, Ica, Ucayali, Moquegua, Tacna",
"children": [
{
"label": "Gọi & SMS ∞",
"detail": "Gọi và SMS không giới hạn trong nước."
},
{
"label": "125 GB cộng dồn",
"detail": "125 GB. GB chưa dùng chuyển sang tháng sau (tối đa 1000 GB) nếu trả hóa đơn đúng hạn. Hết GB vẫn dùng không giới hạn ở 0.512/0.256 Mbps. Trả trễ sẽ mất GB đã cộng dồn."
},
{
"label": "Zoom FULL",
"detail": "Zoom không giới hạn (tốc độ thấp)."
},
{
"label": "TV360 + Spotify 20 GB",
"detail": "TV360 Premium x6 tháng; GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn. Spotify 20 GB x6 tháng."
},
{
"label": "Giảm 50% x12 tháng",
"detail": "Porta −50% x12 tháng ở kênh vật lý. Migra & line mới: −50% + 50 MB x12 tháng; migra được giảm từ chu kỳ thứ 2."
}
]
},
{
"label": "🏘️ Mero 35.00",
"group": 1,
"detail": "Chỉ kênh vật lý · chi nhánh và mã điểm bán được chọn",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước (TDN) + 500 SMS."
},
{
"label": "25 GB",
"detail": "25 GB; data tốc độ cao không được chia sẻ."
},
{
"label": "GB đêm ∞ (23h–6h)",
"detail": "Data không giới hạn từ 23:00 đến 6:00."
},
{
"label": "WhatsApp 1.5 GB + ∞",
"detail": "WhatsApp 1.5 GB, sau đó không giới hạn."
},
{
"label": "TV360 + Spotify 10 GB",
"detail": "TV360 Premium x6 tháng; GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn. Spotify 10 GB x6 tháng."
}
]
},
{
"label": "🏠 Vecino 10",
"group": 1,
"detail": "Chỉ chi nhánh Li2BR · quận San Juan de Lurigancho",
"children": [
{
"label": "Gọi ∞ + 1000 SMS",
"detail": "Gọi không giới hạn trong nước + 1000 SMS."
},
{
"label": "12 GB trong quận",
"detail": "12 GB tốc độ cao, chỉ dùng được trong quận San Juan de Lurigancho."
},
{
"label": "TV360 GB ∞",
"detail": "GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn."
},
{
"label": "Mọi loại giấy tờ",
"detail": "Nhận DNI, RUC và các loại giấy tờ khác."
}
]
},
{
"label": "🧩 Mi Plan",
"group": 2,
"detail": "Khách tự ghép quyền lợi · từ S/20",
"children": [
{
"label": "Data 10–100 GB",
"detail": "Bắt buộc gói data tốc độ cao tối thiểu 10 GB/S/10. Bảng giá: 10 GB S/10 · 15 GB S/15 · 25 GB S/20 · 30 GB S/25 · 40 GB S/30 · 60 GB S/45 · 80 GB S/50 · 100 GB S/55."
},
{
"label": "Apps +S/10 mỗi app",
"detail": "WhatsApp ∞ tốc độ cao, Facebook/Instagram FULL ∞ tốc độ cao, TikTok 30 GB, YouTube 30 GB, Spotify 30 GB — mỗi app S/10."
},
{
"label": "Gọi ∞ + 500 SMS: S/5",
"detail": "Thêm gọi không giới hạn trong nước + 500 SMS với S/5."
},
{
"label": "Online: tặng GB",
"detail": "Web Bitel & Mi Bitel (line mới, porta): chọn ≥25 GB được tặng thêm (25 → +15 GB, 30 → +25 GB); ≥40 GB được gấp đôi. Giao SIM miễn phí từ S/20."
},
{
"label": "Chu kỳ 6/16/26",
"detail": "Chu kỳ cước 6, 16, 26 theo ngày kích hoạt. Mua thêm được mọi gói dành cho control. Line mới, migra Pre↔Mi Plan."
}
]
}
]
}
},
{
"slug": "goi-futbol",
"group": "Trả sau",
"title": "Fútbol",
"palette": "Bauhaus",
"data": {
"central": "Gói Fútbol (Liga 1)",
"branches": [
{
"label": "⚽ Tricampeón 45.90",
"group": 0,
"detail": "Đối tượng: fan bóng đá 18–45 tuổi theo dõi Liga 1 · kênh vật lý & số toàn quốc · porta và line mới",
"children": [
{
"label": "30 GB tốc độ cao",
"detail": "Data tốc độ cao, hết thì dùng không giới hạn ở tốc độ thấp."
},
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "FB·IG·WhatsApp FULL",
"detail": "FB·IG·WhatsApp không giới hạn (tốc độ thấp)."
},
{
"label": "TV360 data ∞ + L1MAX x6",
"detail": "Data TV360 không giới hạn x6 tháng và thuê bao L1MAX Móvil qua TV360 x6 tháng (1 màn hình, chỉ điện thoại; gia hạn khi trả đúng hạn)."
},
{
"label": "+3 GB khi Universitario thắng",
"detail": "Mỗi trận Universitario thắng: +3 GB, hiệu lực 3 ngày từ thứ Hai sau trận; thắng 2 trận/tuần được 6 GB. Không tính giao hữu."
}
]
},
{
"label": "⚽ Cajacho 45.90",
"group": 0,
"detail": "Đối tượng: fan bóng đá 18–45 tuổi theo dõi Liga 1 · kênh vật lý & số toàn quốc · porta và line mới",
"children": [
{
"label": "30 GB tốc độ cao",
"detail": "Data tốc độ cao, hết thì dùng không giới hạn ở tốc độ thấp."
},
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "FB·IG·WhatsApp FULL",
"detail": "FB·IG·WhatsApp không giới hạn (tốc độ thấp)."
},
{
"label": "TV360 data ∞ + L1MAX x6",
"detail": "Data TV360 không giới hạn x6 tháng và thuê bao L1MAX Móvil qua TV360 x6 tháng (1 màn hình, chỉ điện thoại; gia hạn khi trả đúng hạn)."
},
{
"label": "+3 GB khi Universitario thắng",
"detail": "Mỗi trận Universitario thắng: +3 GB, hiệu lực 3 ngày từ thứ Hai sau trận; thắng 2 trận/tuần được 6 GB. Không tính giao hữu."
}
]
},
{
"label": "⚽ Hincha 55.90",
"group": 0,
"detail": "Đối tượng: fan bóng đá 18–45 tuổi theo dõi Liga 1 · kênh vật lý & số toàn quốc · porta và line mới",
"children": [
{
"label": "45 GB tốc độ cao",
"detail": "Data tốc độ cao, hết thì dùng không giới hạn ở tốc độ thấp."
},
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "FB·IG·WhatsApp FULL",
"detail": "FB·IG·WhatsApp không giới hạn (tốc độ thấp)."
},
{
"label": "TV360 data ∞ + L1MAX x6",
"detail": "Data TV360 không giới hạn x6 tháng và thuê bao L1MAX Móvil qua TV360 x6 tháng (1 màn hình, chỉ điện thoại; gia hạn khi trả đúng hạn)."
},
{
"label": "+3 GB khi Universitario thắng",
"detail": "Mỗi trận Universitario thắng: +3 GB, hiệu lực 3 ngày từ thứ Hai sau trận; thắng 2 trận/tuần được 6 GB. Không tính giao hữu."
}
]
},
{
"label": "🏆 Tricampeón MAX 85.90",
"group": 1,
"detail": "Đối tượng: fan bóng đá 18–45 tuổi theo dõi Liga 1 · kênh vật lý & số toàn quốc · porta và line mới",
"children": [
{
"label": "125 GB tốc độ cao",
"detail": "Data tốc độ cao, hết thì dùng không giới hạn ở tốc độ thấp."
},
{
"label": "Gọi ∞ + 1000 SMS",
"detail": "Gọi không giới hạn trong nước + 1000 SMS."
},
{
"label": "FB·IG FULL",
"detail": "FB·IG không giới hạn (tốc độ thấp)."
},
{
"label": "TV360 data ∞ + L1MAX x6",
"detail": "Data TV360 không giới hạn x6 tháng và thuê bao L1MAX Móvil qua TV360 x6 tháng (1 màn hình, chỉ điện thoại; gia hạn khi trả đúng hạn)."
},
{
"label": "Porta −50% x12 = S/42.95",
"detail": "Porta: −50% x12 tháng = S/42.95. Sinh viên ĐH: −50% x48 tháng."
}
]
},
{
"label": "🏆 Cajacho MAX 85.90",
"group": 1,
"detail": "Đối tượng: fan bóng đá 18–45 tuổi theo dõi Liga 1 · kênh vật lý & số toàn quốc · porta và line mới",
"children": [
{
"label": "125 GB tốc độ cao",
"detail": "Data tốc độ cao, hết thì dùng không giới hạn ở tốc độ thấp."
},
{
"label": "Gọi ∞ + 1000 SMS",
"detail": "Gọi không giới hạn trong nước + 1000 SMS."
},
{
"label": "FB·IG FULL",
"detail": "FB·IG không giới hạn (tốc độ thấp)."
},
{
"label": "TV360 data ∞ + L1MAX x6",
"detail": "Data TV360 không giới hạn x6 tháng và thuê bao L1MAX Móvil qua TV360 x6 tháng (1 màn hình, chỉ điện thoại; gia hạn khi trả đúng hạn)."
},
{
"label": "Porta −50% x12 = S/42.95",
"detail": "Porta: −50% x12 tháng = S/42.95. Sinh viên ĐH: −50% x48 tháng."
}
]
},
{
"label": "🏆 Hincha MAX 89.90",
"group": 1,
"detail": "Đối tượng: fan bóng đá 18–45 tuổi theo dõi Liga 1 · kênh vật lý & số toàn quốc · porta và line mới",
"children": [
{
"label": "125 GB tốc độ cao",
"detail": "Data tốc độ cao, hết thì dùng không giới hạn ở tốc độ thấp."
},
{
"label": "Gọi ∞ + 1000 SMS",
"detail": "Gọi không giới hạn trong nước + 1000 SMS."
},
{
"label": "FB·IG FULL",
"detail": "FB·IG không giới hạn (tốc độ thấp)."
},
{
"label": "TV360 data ∞ + L1MAX x6",
"detail": "Data TV360 không giới hạn x6 tháng và thuê bao L1MAX Móvil qua TV360 x6 tháng (1 màn hình, chỉ điện thoại; gia hạn khi trả đúng hạn)."
},
{
"label": "Porta −50% x12 = S/44.95",
"detail": "Porta: −50% x12 tháng = S/44.95. Sinh viên ĐH: −50% x48 tháng."
}
]
}
]
}
},
{
"slug": "goi-corpmovil",
"group": "Trả sau",
"title": "CorpMóvil",
"palette": "Bauhaus",
"data": {
"central": "Gói CorpMóvil (doanh nghiệp)",
"branches": [
{
"label": "🏢 CorpMóvil 31.90",
"group": 0,
"detail": "Chỉ khách RUC 20 · Dealer, Store, đại lý doanh nghiệp · line mới & porta",
"children": [
{
"label": "CorpMóvil: 25 GB",
"detail": "Bản CorpMóvil: 25 GB chỉ dùng từ 6:00 đến 18:30; hết GB dùng không giới hạn 0.256/0.128 Mbps."
},
{
"label": "CorpMóvil+: 18 GB",
"detail": "Bản CorpMóvil+: 18 GB dùng cả ngày; hết GB dùng không giới hạn 0.256/0.128 Mbps."
},
{
"label": "Gọi & SMS ∞ + 300' LDI",
"detail": "Gọi và SMS không giới hạn trong nước + 300 phút quốc tế (LDI) vùng 1, 2, 3."
},
{
"label": "WhatsApp · Zoom ∞",
"detail": "WhatsApp (trừ gọi video) và Zoom không giới hạn tốc độ cao. Không dùng được khi roaming."
}
]
},
{
"label": "🏢 CorpMóvil 39.90",
"group": 0,
"detail": "Chỉ khách RUC 20 · Dealer, Store, đại lý doanh nghiệp · line mới & porta",
"children": [
{
"label": "CorpMóvil: 45 GB",
"detail": "Bản CorpMóvil: 45 GB chỉ dùng từ 6:00 đến 18:30; hết GB dùng không giới hạn 0.256/0.128 Mbps."
},
{
"label": "CorpMóvil+: 35 GB",
"detail": "Bản CorpMóvil+: 35 GB dùng cả ngày; hết GB dùng không giới hạn 0.256/0.128 Mbps."
},
{
"label": "Gọi & SMS ∞ + 300' LDI",
"detail": "Gọi và SMS không giới hạn trong nước + 300 phút quốc tế (LDI) vùng 1, 2, 3."
},
{
"label": "WhatsApp · Zoom ∞",
"detail": "WhatsApp (trừ gọi video) và Zoom không giới hạn tốc độ cao. Không dùng được khi roaming."
}
]
},
{
"label": "🏢 CorpMóvil 49.90",
"group": 0,
"detail": "Chỉ khách RUC 20 · Dealer, Store, đại lý doanh nghiệp · line mới & porta",
"children": [
{
"label": "CorpMóvil: 75 GB",
"detail": "Bản CorpMóvil: 75 GB chỉ dùng từ 6:00 đến 18:30; hết GB dùng không giới hạn 0.256/0.128 Mbps."
},
{
"label": "CorpMóvil+: 50 GB",
"detail": "Bản CorpMóvil+: 50 GB dùng cả ngày; hết GB dùng không giới hạn 0.256/0.128 Mbps."
},
{
"label": "Gọi & SMS ∞ + 300' LDI",
"detail": "Gọi và SMS không giới hạn trong nước + 300 phút quốc tế (LDI) vùng 1, 2, 3."
},
{
"label": "WhatsApp · Zoom ∞",
"detail": "WhatsApp (trừ gọi video) và Zoom không giới hạn tốc độ cao. Không dùng được khi roaming."
}
]
},
{
"label": "🏢 CorpMóvil 55.90",
"group": 0,
"detail": "Chỉ khách RUC 20 · Dealer, Store, đại lý doanh nghiệp · line mới & porta",
"children": [
{
"label": "CorpMóvil: 100 GB",
"detail": "Bản CorpMóvil: 100 GB chỉ dùng từ 6:00 đến 18:30; hết GB dùng không giới hạn 0.256/0.128 Mbps."
},
{
"label": "CorpMóvil+: 75 GB",
"detail": "Bản CorpMóvil+: 75 GB dùng cả ngày; hết GB dùng không giới hạn 0.256/0.128 Mbps."
},
{
"label": "Gọi & SMS ∞ + 300' LDI",
"detail": "Gọi và SMS không giới hạn trong nước + 300 phút quốc tế (LDI) vùng 1, 2, 3."
},
{
"label": "WhatsApp · Zoom ∞",
"detail": "WhatsApp (trừ gọi video) và Zoom không giới hạn tốc độ cao. Không dùng được khi roaming."
}
]
},
{
"label": "🏢 CorpMóvil 79.90",
"group": 0,
"detail": "Chỉ khách RUC 20 · Dealer, Store, đại lý doanh nghiệp · line mới & porta",
"children": [
{
"label": "CorpMóvil: GB ∞ tốc độ cao",
"detail": "Bản CorpMóvil: GB ∞ tốc độ cao chỉ dùng từ 6:00 đến 18:30."
},
{
"label": "CorpMóvil+: GB ∞ tốc độ cao",
"detail": "Bản CorpMóvil+: GB ∞ tốc độ cao dùng cả ngày."
},
{
"label": "Gọi & SMS ∞ + 300' LDI",
"detail": "Gọi và SMS không giới hạn trong nước + 300 phút quốc tế (LDI) vùng 1, 2, 3."
},
{
"label": "WhatsApp · Zoom ∞",
"detail": "WhatsApp (trừ gọi video) và Zoom không giới hạn tốc độ cao. Không dùng được khi roaming."
}
]
}
]
}
},
{
"slug": "goi-dac-biet",
"group": "Trả sau",
"title": "CONADIS · Familia · Wifi",
"palette": "Bauhaus",
"data": {
"central": "Gói CONADIS · Familia · Wifi",
"branches": [
{
"label": "♿ Bitel Voz 15.00",
"group": 0,
"detail": "Chỉ hội viên CONADIS · mỗi người 1 line · Dealer loại 1–3, Store, Isla, Retail · trực tiếp, kiểm tra thẻ",
"children": [
{
"label": "300 phút TDN",
"detail": "300 phút gọi trong nước; không có data."
},
{
"label": "FB · IG · WhatsApp FULL",
"detail": "Facebook, Instagram, WhatsApp không giới hạn (FB & WhatsApp tốc độ cao, không gồm gọi video)."
},
{
"label": "TV360 GB ∞",
"detail": "GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn."
},
{
"label": "Line mới · porta · migra",
"detail": "Kích hoạt line mới, porta, migra; mua được gói dành cho control."
}
]
},
{
"label": "♿ Bitel Datos 15.00",
"group": 0,
"detail": "Chỉ hội viên CONADIS · mỗi người 1 line · Dealer loại 1–3, Store, Isla, Retail · trực tiếp, kiểm tra thẻ",
"children": [
{
"label": "2.5 GB + 2000 SMS",
"detail": "2.5 GB data + 2000 SMS."
},
{
"label": "FB · IG · WhatsApp FULL",
"detail": "Facebook, Instagram, WhatsApp không giới hạn (FB & WhatsApp tốc độ cao, không gồm gọi video)."
},
{
"label": "TV360 GB ∞",
"detail": "GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn."
},
{
"label": "Mua thêm gói DM",
"detail": "Được kích hoạt gói DM và các gói dành cho control."
}
]
},
{
"label": "♿ Bitel Total 15.00",
"group": 0,
"detail": "Chỉ hội viên CONADIS · mỗi người 1 line · Dealer loại 1–3, Store, Isla, Retail · trực tiếp, kiểm tra thẻ",
"children": [
{
"label": "2 GB + 100' + 1000 SMS",
"detail": "2 GB data, 100 phút, 1000 SMS."
},
{
"label": "FB · IG · WhatsApp FULL",
"detail": "Facebook, Instagram, WhatsApp không giới hạn (FB & WhatsApp tốc độ cao, không gồm gọi video)."
},
{
"label": "TV360 GB ∞",
"detail": "GB xem TV360 không giới hạn khi trả hóa đơn đúng hạn."
},
{
"label": "Mua thêm gói DM",
"detail": "Được kích hoạt gói DM và các gói dành cho control."
}
]
},
{
"label": "👨‍👩‍👧 Plan Familia",
"group": 1,
"detail": "Line phụ nhận chia sẻ từ line chính · mọi kênh",
"children": [
{
"label": "Chip S/1 (hoặc S/10)",
"detail": "Chip S/1 nếu có line chính control ≥S/29.90; chip S/10 không cần điều kiện."
},
{
"label": "Chia sẻ GB · gọi · SMS",
"detail": "Line chính chia sẻ GB thường (0 đến tối đa data của gói), gọi và SMS không giới hạn; cấu hình trong BCCS, Bitel Ventas, Mi Bitel."
},
{
"label": "Tối đa 4 line phụ",
"detail": "Tối đa 4 line phụ cùng tên và giấy tờ với line chính; gia hạn theo chu kỳ line chính."
},
{
"label": "Mất quyền lợi khi…",
"detail": "Line chính hủy, porta đi hoặc hạ xuống <29.90 → line phụ mất quyền lợi. Hết GB chia sẻ: line phụ mua gói prepago."
},
{
"label": "Thông điệp",
"detail": "'Cả nhà kết nối chỉ với 29.90 mỗi tháng'."
}
]
},
{
"label": "📶 Wifi Max 49.90",
"group": 2,
"detail": "MiFi · line mới & porta · kênh vật lý (BCCS, Bitel Ventas) và Tienda Bitel",
"children": [
{
"label": "125 GB tốc độ cao",
"detail": "125 GB tốc độ cao, sau đó internet tốc độ kiểm soát."
},
{
"label": "Tối đa 10 thiết bị",
"detail": "Chia sẻ cho tối đa 10 thiết bị."
},
{
"label": "Modem không bắt buộc",
"detail": "Dùng thiết bị riêng được; modem sắp bán giá S/189."
}
]
},
{
"label": "📶 Wifi Max 99.90",
"group": 2,
"detail": "MiFi · line mới & porta · kênh vật lý (BCCS, Bitel Ventas) và Tienda Bitel",
"children": [
{
"label": "250 GB tốc độ cao",
"detail": "250 GB tốc độ cao, sau đó internet tốc độ kiểm soát."
},
{
"label": "Tối đa 10 thiết bị",
"detail": "Chia sẻ cho tối đa 10 thiết bị."
},
{
"label": "Modem không bắt buộc",
"detail": "Dùng thiết bị riêng được; modem sắp bán giá S/189."
}
]
}
]
}
},
{
"slug": "goi-fibra",
"group": "FTTH",
"title": "Bitel Fibra",
"palette": "Bauhaus",
"data": {
"central": "Gói Bitel Fibra (FTTH)",
"branches": [
{
"label": "🌐 Fibra 100 (AON)",
"group": 0,
"detail": "ANC, CAJ, CUS, HUN, ICA, JUN, LAL, LAM, PIU, PUN, TAC, SAN · kênh có BCCS3",
"children": [
{
"label": "S/89 · KM 400 Mbps",
"detail": "Giá thường S/89; khuyến mãi tốc độ 400 Mbps."
},
{
"label": "Giảm S/20 x3 tháng",
"detail": "Giảm S/20 trong 3 tháng, từ chu kỳ thứ 2."
},
{
"label": "Lắp đặt miễn phí",
"detail": "Khuyến mãi lắp đặt miễn phí; hợp đồng không thời hạn; modem cho mượn."
},
{
"label": "Trả trước, chu kỳ 6/16/26",
"detail": "Thanh toán trước; lắp tối đa 15 ngày làm việc; kết nối lại miễn phí."
}
]
},
{
"label": "🌐 Fibra 200",
"group": 1,
"detail": "AREBR, CAJBR, CUSBR, HUNBR, JUNBR, LALBR, LI1–4BR, LI7BR, PIUBR, SANBR · app FTTH Sales",
"children": [
{
"label": "S/55 · 200 Mbps",
"detail": "Cáp quang 100%, tốc độ đối xứng (tải lên = tải xuống). Lắp đặt S/120, hoặc miễn phí khi cam kết 6 tháng. Modem cho mượn; hủy trong 6 tháng mà không trả → phạt S/250. Tối đa 3 hợp đồng/DNI."
},
{
"label": "TV360 mua thêm",
"detail": "Không kèm L1MAX: mua thêm TV360+Móvil S/19.99 hoặc TV360+Full S/45."
},
{
"label": "Bitel Pack giữ S/55",
"detail": "Kèm plan di động: giá Fibra vẫn S/55; plan di động được thêm 10–300 GB."
},
{
"label": "Bitdefender +S/9",
"detail": "Antivirus cho tối đa 5 thiết bị, chọn lúc kích hoạt."
},
{
"label": "Mesh / TV Box S/150",
"detail": "Mua tối đa 3 thiết bị."
}
]
},
{
"label": "🌐 Fibra 400",
"group": 1,
"detail": "Vùng GPON như Fibra 200",
"children": [
{
"label": "S/109 · 400 Mbps",
"detail": "Cáp quang 100%, tốc độ đối xứng (tải lên = tải xuống). Lắp đặt S/120, hoặc miễn phí khi cam kết 6 tháng. Modem cho mượn; hủy trong 6 tháng mà không trả → phạt S/250. Tối đa 3 hợp đồng/DNI."
},
{
"label": "L1MAX x12 tháng",
"detail": "Tặng L1MAX 12 tháng (khách mới; phải trả đúng hạn; hạ gói là mất)."
},
{
"label": "Bitel Pack S/60–75",
"detail": "Kèm plan di động: Fibra còn S/75 (plan 29.90) đến S/60 (plan 79.90–109.90)."
},
{
"label": "Bitdefender +S/9",
"detail": "Antivirus cho tối đa 5 thiết bị."
},
{
"label": "Mesh / TV Box S/150",
"detail": "Mua tối đa 3 thiết bị."
}
]
},
{
"label": "🚀 Fibra 1 GB",
"group": 1,
"detail": "Vùng GPON như Fibra 200",
"children": [
{
"label": "S/139 · 1000 Mbps",
"detail": "Cáp quang 100%, tốc độ đối xứng (tải lên = tải xuống). Lắp đặt S/120, hoặc miễn phí khi cam kết 6 tháng. Modem cho mượn; hủy trong 6 tháng mà không trả → phạt S/250. Tối đa 3 hợp đồng/DNI."
},
{
"label": "L1MAX x12 tháng",
"detail": "Tặng L1MAX 12 tháng (khách mới; phải trả đúng hạn; hạ gói là mất)."
},
{
"label": "Bitel Pack S/75–90",
"detail": "Kèm plan di động: Fibra còn S/90 (plan 29.90) đến S/75 (plan 79.90–109.90)."
},
{
"label": "Bitdefender +S/9",
"detail": "Antivirus cho tối đa 5 thiết bị."
},
{
"label": "Mesh / TV Box S/150",
"detail": "Mua tối đa 3 thiết bị."
}
]
},
{
"label": "💳 Ưu đãi chung Fibra",
"group": 2,
"detail": "Áp dụng mọi gói Fibra",
"children": [
{
"label": "Trả trước tặng tháng",
"detail": "3 tháng → tặng 1; 6 tháng → tặng 2; 12 tháng → tặng 4 (12 tháng chỉ qua Mi Bitel cho khách hiện hữu)."
},
{
"label": "BiPay hoàn 30%",
"detail": "Trả hóa đơn của mình đúng hạn qua BiPay hoàn 30%; trễ hạn hoặc trả hộ 5%."
},
{
"label": "Pack: −50% x48 tháng",
"detail": "Fibra + Ilimitado 49.90 5G hoặc 69.90: plan di động −50% x48 tháng nếu giữ cả 2 dịch vụ."
}
]
}
]
}
},
{
"slug": "goi-prepago",
"group": "Trả trước & gói",
"title": "Trả trước & Papa",
"palette": "Bauhaus",
"data": {
"central": "Gói trả trước & gói Papa",
"branches": [
{
"label": "🥔 Prepago Papa S/10",
"group": 0,
"detail": "S/10 x30 ngày · thông điệp: 'Kết nối suốt 30 ngày' · kênh PDV, PR",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "1 GB tốc độ cao",
"detail": "1 GB tốc độ cao."
},
{
"label": "WhatsApp FULL x30 ngày",
"detail": "WhatsApp không giới hạn tốc độ cao 30 ngày."
},
{
"label": "TV360 Premium x30 ngày",
"detail": "Data TV360 không giới hạn + TV360 Premium 30 ngày."
},
{
"label": "Porta: +10 GB mỗi tháng",
"detail": "Porta: nạp ≥S/5 (lần đầu mỗi tháng, trong 12 tháng) được +10 GB, hiệu lực 15 ngày. Kích hoạt BCCS/Bitel Ventas phải mua gói ≥S/5. PDV Madre de Dios chỉ được bán Papa."
},
{
"label": "❓ Thay đổi dự kiến T10",
"detail": "Chưa chính thức: porta + gói Papa S/10 → data tăng từ 1 GB lên 2.5 GB; khi kích hoạt chỉ hiện gói từ S/7.",
"type": "inquiry"
}
]
},
{
"label": "🍟 Bifri 5",
"group": 0,
"detail": "S/5 x5 ngày · ngừng bán ở PDV Madre de Dios và kênh Promotor toàn quốc",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "1 GB tốc độ cao",
"detail": "1 GB tốc độ cao."
},
{
"label": "IG · FB · WhatsApp FULL x5",
"detail": "Instagram, Facebook, WhatsApp không giới hạn tốc độ cao 5 ngày."
},
{
"label": "Apps thêm 1–1.5 GB",
"detail": "Waze + Mobile Legends 1.5 GB; TikTok 1 GB; YouTube, Viki, trình duyệt 1 GB (tốc độ cao)."
},
{
"label": "Porta: 2.5 GB + WhatsApp",
"detail": "Porta: +2.5 GB và WhatsApp 30 ngày; nạp ≥S/5 được +10 GB (15 ngày). Line mới, porta, migra."
}
]
},
{
"label": "📦 Gói PAPA S/10",
"group": 1,
"detail": "Mã PAPA gửi 164 · khách trả trước",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "1 GB · 30 ngày",
"detail": "1 GB, hiệu lực 30 ngày."
},
{
"label": "WhatsApp FULL x30 ngày",
"detail": "WhatsApp không giới hạn tốc độ cao 30 ngày."
},
{
"label": "TV360 Premium",
"detail": "Data TV360 không giới hạn + TV360 Premium. Không tự gia hạn."
}
]
},
{
"label": "📦 Gói PAPA 7",
"group": 1,
"detail": "S/7 · mã PAPA7 gửi 164",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "200 MB · 30 ngày",
"detail": "200 MB, hiệu lực 30 ngày."
},
{
"label": "WhatsApp FULL x30 ngày",
"detail": "WhatsApp không giới hạn tốc độ cao 30 ngày."
}
]
},
{
"label": "📦 Gói PAPA 5",
"group": 1,
"detail": "S/5 · mã PAPA5 gửi 164",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "500 MB · 15 ngày",
"detail": "500 MB, hiệu lực 15 ngày."
},
{
"label": "WhatsApp FULL x15 ngày",
"detail": "WhatsApp không giới hạn tốc độ cao 15 ngày."
}
]
}
]
}
},
{
"slug": "goi-ti",
"group": "Trả trước & gói",
"title": "Gói TI",
"palette": "Bauhaus",
"data": {
"central": "Gói TI (trả trước) · CAJBR",
"branches": [
{
"label": "📶 TI3 · S/3",
"group": 0,
"detail": "Mã kích hoạt gửi 164 hoặc *9090# · khách trả trước · data cộng dồn · gấp đôi GB không áp dụng ở Loreto (vùng đó nhận 5G trên data gốc)",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "400 MB (200 MB x2)",
"detail": "Data gốc được nhân đôi nhờ khuyến mãi gấp đôi GB."
},
{
"label": "Hiệu lực 3 ngày",
"detail": "Thời hạn gói: 3 ngày."
},
{
"label": "IG·FB·WhatsApp FULL",
"detail": "Instagram, Facebook FULL tốc độ cao; WhatsApp FULL 30 ngày."
},
{
"label": "5G: 400 MB",
"detail": "Ưu đãi 5G: 400 MB (cần máy 5G và vùng phủ)."
}
]
},
{
"label": "📶 TI5 · S/5",
"group": 0,
"detail": "Mã kích hoạt gửi 164 hoặc *9090# · khách trả trước · data cộng dồn · gấp đôi GB không áp dụng ở Loreto (vùng đó nhận 5G trên data gốc)",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "6 GB (3 GB x2)",
"detail": "Thay đổi T10: TI5 tương đương 5SO — 6 GB (thường 3 GB, gấp đôi); Loreto 3 GB."
},
{
"label": "Hiệu lực 4 ngày",
"detail": "Thay đổi T10: dùng 4 ngày."
},
{
"label": "Apps + YouTube/TikTok 1 GB",
"detail": "IG/FB FULL, WhatsApp FULL 30 ngày; YouTube & TikTok 1 GB (+ không giới hạn 0.256/0.128); Mobile Legends & Waze 1.5 GB."
},
{
"label": "5G: 6 GB",
"detail": "+6 GB 5G (chỉ ở hạ tầng 5G); Loreto 3 GB."
}
]
},
{
"label": "📶 TI7 · S/7",
"group": 0,
"detail": "Mã kích hoạt gửi 164 hoặc *9090# · khách trả trước · data cộng dồn · gấp đôi GB không áp dụng ở Loreto (vùng đó nhận 5G trên data gốc) · 🔥 Triple Data CAJBR",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "9 GB (3 GB ×3)",
"detail": "🔥 Triple Data CAJBR/SANBR (gói từ S/7): data thường ×3. Ngoài CAJBR/SANBR: gấp đôi (×2)."
},
{
"label": "Hiệu lực 7 ngày",
"detail": "Thời hạn gói: 7 ngày."
},
{
"label": "IG·FB·WhatsApp FULL",
"detail": "Instagram, Facebook FULL tốc độ cao; WhatsApp FULL 30 ngày."
},
{
"label": "5G: ∞ không giới hạn",
"detail": "5G internet không giới hạn tốc độ cao (không giới hạn data tốc độ cao) trên hạ tầng 5G; cần máy 5G và vùng phủ. Gói SO/TI từ S/7."
},
{
"label": "Internet ∞ (256 kbps sau)",
"detail": "Không giới hạn internet: sau khi dùng hết data tốc độ cao của gói, tiếp tục dùng internet ở tốc độ thấp 256 kbps. Hiệu lực 7 ngày."
}
]
},
{
"label": "📶 TI10 · S/10",
"group": 1,
"detail": "Mã kích hoạt gửi 164 hoặc *9090# · khách trả trước · data cộng dồn · gấp đôi GB không áp dụng ở Loreto (vùng đó nhận 5G trên data gốc) · 🔥 Triple Data CAJBR",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "12 GB (4 GB ×3)",
"detail": "🔥 Triple Data CAJBR/SANBR (gói từ S/7): data thường ×3. Ngoài CAJBR/SANBR: gấp đôi (×2)."
},
{
"label": "Hiệu lực 10 ngày",
"detail": "Thời hạn gói: 10 ngày."
},
{
"label": "Apps + YouTube/TikTok 1 GB",
"detail": "IG/FB FULL, WhatsApp FULL 30 ngày; YouTube & TikTok 1 GB (+ không giới hạn 0.256/0.128); Mobile Legends & Waze 1.5 GB."
},
{
"label": "TV360 ∞ + Premium",
"detail": "Data TV360 không giới hạn tốc độ cao + TV360 Premium."
},
{
"label": "5G: ∞ không giới hạn",
"detail": "5G internet không giới hạn tốc độ cao (không giới hạn data tốc độ cao) trên hạ tầng 5G; cần máy 5G và vùng phủ."
},
{
"label": "Internet ∞ (256 kbps sau)",
"detail": "Không giới hạn internet: sau khi dùng hết data tốc độ cao của gói, tiếp tục dùng internet ở tốc độ thấp 256 kbps. Hiệu lực 10 ngày."
}
]
},
{
"label": "📶 TI15 · S/15",
"group": 1,
"detail": "Mã kích hoạt gửi 164 hoặc *9090# · khách trả trước · data cộng dồn · gấp đôi GB không áp dụng ở Loreto (vùng đó nhận 5G trên data gốc) · 🔥 Triple Data CAJBR",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "21 GB (7 GB ×3)",
"detail": "🔥 Triple Data CAJBR/SANBR (gói từ S/7): data thường ×3. Ngoài CAJBR/SANBR: gấp đôi (×2)."
},
{
"label": "Hiệu lực 15 ngày",
"detail": "Thời hạn gói: 15 ngày."
},
{
"label": "Apps + YouTube/TikTok 1 GB",
"detail": "IG/FB FULL, WhatsApp FULL 30 ngày; YouTube & TikTok 1 GB (+ không giới hạn 0.256/0.128); Mobile Legends & Waze 1.5 GB."
},
{
"label": "TV360 ∞ + Premium",
"detail": "Data TV360 không giới hạn tốc độ cao + TV360 Premium."
},
{
"label": "5G: ∞ không giới hạn",
"detail": "Ưu đãi 5G: KHÔNG GIỚI HẠN tốc độ cao suốt thời hạn gói (gói SO/TI từ S/7; cần máy 5G và vùng phủ)."
}
]
},
{
"label": "⭐ TI20 · S/20",
"group": 2,
"detail": "Mã kích hoạt gửi 164 hoặc *9090# · khách trả trước · data cộng dồn · gấp đôi GB không áp dụng ở Loreto (vùng đó nhận 5G trên data gốc) · 🔥 Triple Data CAJBR",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "36 GB (12 GB ×3)",
"detail": "🔥 Triple Data CAJBR/SANBR (gói từ S/7): data thường ×3. Ngoài CAJBR/SANBR: gấp đôi (×2)."
},
{
"label": "Hiệu lực 30 ngày",
"detail": "Thời hạn gói: 30 ngày."
},
{
"label": "WhatsApp FULL x30",
"detail": "WhatsApp không giới hạn tốc độ cao 30 ngày."
},
{
"label": "TV360 ∞ + Premium",
"detail": "Data TV360 không giới hạn tốc độ cao + TV360 Premium."
},
{
"label": "5G: ∞ không giới hạn",
"detail": "Ưu đãi 5G: KHÔNG GIỚI HẠN tốc độ cao suốt thời hạn gói (gói SO/TI từ S/7; cần máy 5G và vùng phủ)."
},
{
"label": "GB đêm ∞ (23h–6h)",
"detail": "Data không giới hạn từ 23:00 đến 6:00."
}
]
},
{
"label": "⭐ TI30 · S/30",
"group": 2,
"detail": "Mã kích hoạt gửi 164 hoặc *9090# · khách trả trước · data cộng dồn · gấp đôi GB không áp dụng ở Loreto (vùng đó nhận 5G trên data gốc) · 🔥 Triple Data CAJBR",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "60 GB (20 GB ×3)",
"detail": "🔥 Triple Data CAJBR/SANBR (gói từ S/7): data thường ×3. Ngoài CAJBR/SANBR: gấp đôi (×2)."
},
{
"label": "Hiệu lực 30 ngày",
"detail": "Thời hạn gói: 30 ngày."
},
{
"label": "WhatsApp FULL x30",
"detail": "WhatsApp không giới hạn tốc độ cao 30 ngày."
},
{
"label": "TV360 ∞ + Premium",
"detail": "Data TV360 không giới hạn tốc độ cao + TV360 Premium."
},
{
"label": "5G: ∞ không giới hạn",
"detail": "Ưu đãi 5G: KHÔNG GIỚI HẠN tốc độ cao suốt thời hạn gói (gói SO/TI từ S/7; cần máy 5G và vùng phủ)."
},
{
"label": "GB đêm ∞ (23h–6h)",
"detail": "Data không giới hạn từ 23:00 đến 6:00."
}
]
},
{
"label": "⭐ TI40 · S/40",
"group": 2,
"detail": "Mã kích hoạt gửi 164 hoặc *9090# · khách trả trước · data cộng dồn · gấp đôi GB không áp dụng ở Loreto (vùng đó nhận 5G trên data gốc) · 🔥 Triple Data CAJBR",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "150 GB (50 GB ×3)",
"detail": "🔥 Triple Data CAJBR/SANBR (gói từ S/7): data thường ×3. Ngoài CAJBR/SANBR: gấp đôi (×2)."
},
{
"label": "Hiệu lực 30 ngày",
"detail": "Thời hạn gói: 30 ngày."
},
{
"label": "WhatsApp FULL x30",
"detail": "WhatsApp không giới hạn tốc độ cao 30 ngày."
},
{
"label": "TV360 ∞ + Premium",
"detail": "Data TV360 không giới hạn tốc độ cao + TV360 Premium."
},
{
"label": "5G: không giới hạn",
"detail": "Ưu đãi 5G: không giới hạn (cần máy 5G và vùng phủ)."
},
{
"label": "GB đêm ∞ (23h–6h)",
"detail": "Data không giới hạn từ 23:00 đến 6:00."
}
]
}
]
}
},
{
"slug": "goi-maxidata-so",
"group": "Trả trước & gói",
"title": "Maxidata SO",
"palette": "Bauhaus",
"data": {
"central": "Gói Maxidata SO · CAJBR",
"branches": [
{
"label": "🔸 3SO · S/3",
"group": 0,
"detail": "Maxidata (gói hỗn hợp) · trả trước & trả sau · mã gửi 164, tự gia hạn bằng mã R… (data chưa dùng cộng dồn khi tự gia hạn) · chuyển nhượng data được",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "2 GB (1 GB x2)",
"detail": "Data tốc độ cao, đã gồm khuyến mãi gấp đôi GB (trừ Loreto)."
},
{
"label": "Hiệu lực 1 ngày",
"detail": "Thời hạn gói: 1 ngày."
},
{
"label": "5G: 2 GB",
"detail": "Ưu đãi 5G: 2 GB."
},
{
"label": "Mã 3SO",
"detail": "Kích hoạt: 3SO gửi 164; tự gia hạn: R3SO gửi 164."
}
]
},
{
"label": "🔸 5SO · S/5",
"group": 0,
"detail": "Maxidata (gói hỗn hợp) · trả trước & trả sau · mã gửi 164, tự gia hạn bằng mã R… (data chưa dùng cộng dồn khi tự gia hạn) · chuyển nhượng data được",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "6 GB (3 GB x2)",
"detail": "Data tốc độ cao, đã gồm khuyến mãi gấp đôi GB (trừ Loreto)."
},
{
"label": "Hiệu lực 4 ngày",
"detail": "Thời hạn gói: 4 ngày."
},
{
"label": "5G: 6 GB",
"detail": "Ưu đãi 5G: 6 GB."
},
{
"label": "Mã 5SO",
"detail": "Kích hoạt: 5SO gửi 164; tự gia hạn: R5SO gửi 164."
}
]
},
{
"label": "🔸 8SO · S/8",
"group": 1,
"detail": "Maxidata (gói hỗn hợp) · trả trước & trả sau · mã gửi 164, tự gia hạn bằng mã R… (data chưa dùng cộng dồn khi tự gia hạn) · chuyển nhượng data được · 🔥 Triple Data CAJBR",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "15 GB (5 GB ×3)",
"detail": "🔥 Triple Data CAJBR/SANBR (gói từ S/7): data thường ×3. Ngoài CAJBR/SANBR: gấp đôi (×2)."
},
{
"label": "Hiệu lực 7 ngày",
"detail": "Thời hạn gói: 7 ngày."
},
{
"label": "TV360 ∞ + Premium",
"detail": "Data TV360 không giới hạn tốc độ cao + TV360 Premium."
},
{
"label": "5G: ∞ không giới hạn",
"detail": "Ưu đãi 5G: KHÔNG GIỚI HẠN tốc độ cao suốt thời hạn gói (gói SO/TI từ S/7; cần máy 5G và vùng phủ)."
},
{
"label": "Mã 8SO",
"detail": "Kích hoạt: 8SO gửi 164; tự gia hạn: R8SO gửi 164."
}
]
},
{
"label": "🔸 10SO · S/10",
"group": 1,
"detail": "Maxidata (gói hỗn hợp) · trả trước & trả sau · mã gửi 164, tự gia hạn bằng mã R… (data chưa dùng cộng dồn khi tự gia hạn) · chuyển nhượng data được · 🔥 Triple Data CAJBR",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "21 GB (7 GB ×3)",
"detail": "🔥 Triple Data CAJBR/SANBR (gói từ S/7): data thường ×3. Ngoài CAJBR/SANBR: gấp đôi (×2)."
},
{
"label": "Hiệu lực 9 ngày",
"detail": "Thời hạn gói: 9 ngày."
},
{
"label": "TV360 ∞ + Premium",
"detail": "Data TV360 không giới hạn tốc độ cao + TV360 Premium."
},
{
"label": "5G: không giới hạn",
"detail": "Ưu đãi 5G: không giới hạn."
},
{
"label": "Mã 10SO",
"detail": "Kích hoạt: 10SO gửi 164; tự gia hạn: R10SO gửi 164."
}
]
},
{
"label": "🔸 13SO · S/13",
"group": 1,
"detail": "Maxidata (gói hỗn hợp) · trả trước & trả sau · mã gửi 164, tự gia hạn bằng mã R… (data chưa dùng cộng dồn khi tự gia hạn) · chuyển nhượng data được · 🔥 Triple Data CAJBR",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "30 GB (10 GB ×3)",
"detail": "🔥 Triple Data CAJBR/SANBR (gói từ S/7): data thường ×3. Ngoài CAJBR/SANBR: gấp đôi (×2)."
},
{
"label": "Hiệu lực 12 ngày",
"detail": "Thời hạn gói: 12 ngày."
},
{
"label": "TV360 ∞ + Premium",
"detail": "Data TV360 không giới hạn tốc độ cao + TV360 Premium."
},
{
"label": "5G: ∞ không giới hạn",
"detail": "Ưu đãi 5G: KHÔNG GIỚI HẠN tốc độ cao suốt thời hạn gói (gói SO/TI từ S/7; cần máy 5G và vùng phủ)."
},
{
"label": "Mã 13SO",
"detail": "Kích hoạt: 13SO gửi 164; tự gia hạn: R13SO gửi 164."
}
]
}
]
}
},
{
"slug": "goi-dm",
"group": "Trả trước & gói",
"title": "Gói DM",
"palette": "Bauhaus",
"data": {
"central": "Gói DM (chỉ data)",
"branches": [
{
"label": "🔹 DM1 · S/1",
"group": 0,
"detail": "Chỉ data · trả trước theo thời hạn gói, trả sau dùng đến hết chu kỳ · mã gửi 164 hoặc *9090# · chuyển nhượng data được",
"children": [
{
"label": "450 MB",
"detail": "Data tốc độ cao (đã gồm gấp đôi GB nếu có; không áp dụng Loreto)."
},
{
"label": "Hiệu lực 1 ngày",
"detail": "Trả trước: 1 ngày. Trả sau: đến hết chu kỳ cước."
},
{
"label": "5G: 450 MB",
"detail": "Ưu đãi 5G: 450 MB."
},
{
"label": "Mã DM1",
"detail": "Kích hoạt và tự gia hạn: DM1 gửi 164."
}
]
},
{
"label": "🔹 DM3 · S/3",
"group": 0,
"detail": "Chỉ data · trả trước theo thời hạn gói, trả sau dùng đến hết chu kỳ · mã gửi 164 hoặc *9090# · chuyển nhượng data được",
"children": [
{
"label": "3 GB (1.5 GB x2)",
"detail": "Data tốc độ cao (đã gồm gấp đôi GB nếu có; không áp dụng Loreto)."
},
{
"label": "Hiệu lực 3 ngày",
"detail": "Trả trước: 3 ngày. Trả sau: đến hết chu kỳ cước."
},
{
"label": "5G: 3 GB",
"detail": "Ưu đãi 5G: 3 GB."
},
{
"label": "Mã DM3",
"detail": "Kích hoạt và tự gia hạn: DM3 gửi 164."
}
]
},
{
"label": "🔹 DM5 · S/5",
"group": 0,
"detail": "Chỉ data · trả trước theo thời hạn gói, trả sau dùng đến hết chu kỳ · mã gửi 164 hoặc *9090# · chuyển nhượng data được",
"children": [
{
"label": "6 GB (3 GB x2)",
"detail": "Data tốc độ cao (đã gồm gấp đôi GB nếu có; không áp dụng Loreto)."
},
{
"label": "Hiệu lực 5 ngày",
"detail": "Trả trước: 5 ngày. Trả sau: đến hết chu kỳ cước."
},
{
"label": "5G: 6 GB",
"detail": "Ưu đãi 5G: 6 GB."
},
{
"label": "Mã DM5",
"detail": "Kích hoạt và tự gia hạn: DM5 gửi 164."
}
]
},
{
"label": "🔹 DM10 · S/10",
"group": 1,
"detail": "Chỉ data · trả trước theo thời hạn gói, trả sau dùng đến hết chu kỳ · mã gửi 164 hoặc *9090# · chuyển nhượng data được",
"children": [
{
"label": "15 GB (7.5 GB x2)",
"detail": "Data tốc độ cao (đã gồm gấp đôi GB nếu có; không áp dụng Loreto)."
},
{
"label": "Hiệu lực 10 ngày",
"detail": "Trả trước: 10 ngày. Trả sau: đến hết chu kỳ cước."
},
{
"label": "TV360 ∞ + Premium",
"detail": "Data TV360 không giới hạn tốc độ cao + TV360 Premium."
},
{
"label": "5G: không giới hạn",
"detail": "Ưu đãi 5G: không giới hạn."
},
{
"label": "Mã DM10",
"detail": "Kích hoạt và tự gia hạn: DM10 gửi 164."
}
]
},
{
"label": "🔹 DM20 · S/20",
"group": 1,
"detail": "Chỉ data · trả trước theo thời hạn gói, trả sau dùng đến hết chu kỳ · mã gửi 164 hoặc *9090# · chuyển nhượng data được",
"children": [
{
"label": "30 GB (15 GB x2)",
"detail": "Data tốc độ cao (đã gồm gấp đôi GB nếu có; không áp dụng Loreto)."
},
{
"label": "Hiệu lực 20 ngày",
"detail": "Trả trước: 20 ngày. Trả sau: đến hết chu kỳ cước."
},
{
"label": "TV360 ∞ + Premium",
"detail": "Data TV360 không giới hạn tốc độ cao + TV360 Premium."
},
{
"label": "5G: 30 GB",
"detail": "Ưu đãi 5G: 30 GB."
},
{
"label": "Mã DM20",
"detail": "Kích hoạt và tự gia hạn: DM20 gửi 164."
}
]
},
{
"label": "🔹 DM30 · S/30",
"group": 1,
"detail": "Chỉ data · trả trước theo thời hạn gói, trả sau dùng đến hết chu kỳ · mã gửi 164 hoặc *9090# · chuyển nhượng data được",
"children": [
{
"label": "60 GB (30 GB x2)",
"detail": "Data tốc độ cao (đã gồm gấp đôi GB nếu có; không áp dụng Loreto)."
},
{
"label": "Hiệu lực 30 ngày",
"detail": "Trả trước: 30 ngày. Trả sau: đến hết chu kỳ cước."
},
{
"label": "TV360 ∞ + Premium",
"detail": "Data TV360 không giới hạn tốc độ cao + TV360 Premium."
},
{
"label": "5G: 60 GB",
"detail": "Ưu đãi 5G: 60 GB."
},
{
"label": "Mã DM30",
"detail": "Kích hoạt và tự gia hạn: DM30 gửi 164."
}
]
}
]
}
},
{
"slug": "goi-tien-ich",
"group": "Trả trước & gói",
"title": "Tiện ích & MXH",
"palette": "Bauhaus",
"data": {
"central": "Gói tiện ích & mạng xã hội",
"branches": [
{
"label": "☀️ FullDay S/5",
"group": 0,
"detail": "Trả trước & control · mã FULLDAY gửi 164",
"children": [
{
"label": "Gọi ∞ + 500 SMS",
"detail": "Gọi không giới hạn trong nước + 500 SMS."
},
{
"label": "GB ∞ trong ngày",
"detail": "Data không giới hạn từ lúc mua đến 23:59 cùng ngày."
}
]
},
{
"label": "💠 Prime 1/3/5/10",
"group": 0,
"detail": "Chỉ khách control · dùng đến hết chu kỳ",
"children": [
{
"label": "Prime 1 · S/1 · 1 GB",
"detail": "Mã PRIME1 gửi 164."
},
{
"label": "Prime 3 · S/3 · 3 GB",
"detail": "Mã PRIME3 gửi 164."
},
{
"label": "Prime 5 · S/5 · 5 GB",
"detail": "Mã PRIME5 gửi 164."
},
{
"label": "Prime 10 · S/10 · 10 GB",
"detail": "Mã PRIME10 gửi 164."
}
]
},
{
"label": "📞 Gói gọi VI",
"group": 0,
"detail": "Khách trả trước · gọi không giới hạn trong nước · mã gửi 172",
"children": [
{
"label": "VI2 · S/2 · 5 ngày",
"detail": "Mã VI 2 gửi 172."
},
{
"label": "VI3 · S/3 · 7 ngày",
"detail": "Mã VI 3 gửi 172."
},
{
"label": "VI4 · S/4 · 10 ngày",
"detail": "Mã VI 4 gửi 172."
},
{
"label": "VI5 · S/5 · 15 ngày",
"detail": "Mã VI 5 gửi 172."
},
{
"label": "VI10 · S/10 · 40 ngày",
"detail": "Mã VI 10 gửi 172."
}
]
},
{
"label": "🎵 Gói TikTok",
"group": 1,
"detail": "Data riêng cho TikTok · mã gửi 164",
"children": [
{
"label": "TT1 · S/1 · 300 MB",
"detail": "Hiệu lực 24 giờ."
},
{
"label": "TT5 · S/5 · 2 GB",
"detail": "Hiệu lực 7 ngày."
},
{
"label": "TT10 · S/10 · 5 GB",
"detail": "Hiệu lực 30 ngày."
}
]
},
{
"label": "👍 Gói Facebook",
"group": 1,
"detail": "Facebook không giới hạn · mã gửi 164",
"children": [
{
"label": "FB1 · S/1 · 24 giờ",
"detail": "Facebook không giới hạn 24 giờ."
},
{
"label": "FB5 · S/5 · 7 ngày",
"detail": "Facebook không giới hạn 7 ngày."
},
{
"label": "FB10 · S/10 · 30 ngày",
"detail": "Facebook không giới hạn 30 ngày."
}
]
},
{
"label": "🎁 Superpack S/10",
"group": 1,
"detail": "7 ngày · mã SP gửi 164",
"children": [
{
"label": "Gọi ∞",
"detail": "Gọi không giới hạn."
},
{
"label": "650 MB + ∞ tốc độ thấp",
"detail": "650 MB, sau đó không giới hạn 0.256/0.128 Mbps."
},
{
"label": "IG·FB·WhatsApp·Spotify 1.5 GB",
"detail": "Mỗi app 1.5 GB rồi không giới hạn tốc độ thấp; Zoom 2.5 GB."
},
{
"label": "TV360 ∞ + Premium",
"detail": "Data TV360 không giới hạn tốc độ cao + TV360 Premium."
}
]
}
]
}
},
{
"slug": "goi-giai-tri",
"group": "Trả trước & gói",
"title": "Giải trí & dịch vụ số",
"palette": "Bauhaus",
"data": {
"central": "Gói giải trí & dịch vụ số",
"branches": [
{
"label": "🎟️ TuSami TS",
"group": 0,
"detail": "Khách control trên Mi Bitel · trừ vào hóa đơn · tự gia hạn",
"children": [
{
"label": "TS1–TS50 (S/1–S/50)",
"detail": "Data từ 100 MB (TS1) đến 5 GB (TS50), hiệu lực 30 ngày."
},
{
"label": "Số dư TuSami = giá gói",
"detail": "Nhận số dư chơi xổ số TuSami bằng giá gói."
},
{
"label": "+50% số dư khuyến mãi",
"detail": "Tặng thêm 50% số dư TuSami, hiệu lực 3 ngày."
},
{
"label": "Hủy trên Mi Bitel",
"detail": "Mi Bitel → Paquetes → Suscritos → chọn gói → Cancelar suscripción."
}
]
},
{
"label": "🎰 TuSami TU",
"group": 0,
"detail": "Trả trước & trả sau · mã gửi 164, mua qua 168 hoặc Mi Bitel · không tự gia hạn",
"children": [
{
"label": "TU1–TU20 (S/1–S/20)",
"detail": "Data 100 MB đến 2 GB tốc độ cao, hiệu lực 24 giờ."
},
{
"label": "Vé Turbo / Millonario",
"detail": "TU1–TU3: 1–3 vé Turbo; TU5–TU20: 1–4 vé Millonario (TU7 thêm 2 vé Turbo). Vé không hết hạn."
}
]
},
{
"label": "📺 TV360+Móvil S/19.99",
"group": 1,
"detail": "Trả trước & control · Mi Bitel, Bitel Ventas, 164 · 30 ngày",
"children": [
{
"label": "TV360 Premium",
"detail": "Toàn bộ kênh TV360, gồm L1MAX Móvil."
},
{
"label": "1 GB",
"detail": "Kèm 1 GB."
},
{
"label": "Điều kiện",
"detail": "Trả trước: chỉ cần đủ số dư. Control: line đang hoạt động. Phải đăng nhập TV360 để xem L1MAX."
}
]
},
{
"label": "🇵🇪 Bicolor+ Premium S/6.99",
"group": 1,
"detail": "Kênh chính thức Liên đoàn Bóng đá Peru trên TV360 · từ 01/10",
"children": [
{
"label": "5 kênh Bicolor+",
"detail": "Các trận của tuyển Peru hướng tới World Cup 2030."
},
{
"label": "Liga 2, Liga 3, nữ",
"detail": "Toàn bộ trận Liga 2, Liga 3, giải nữ và hơn thế; có bản Bicolor+ miễn phí."
}
]
},
{
"label": "🛡️ Bitdefender S/9.90",
"group": 2,
"detail": "Control: Mi Bitel / Bitel Ventas, trừ vào hóa đơn, tự gia hạn 30 ngày",
"children": [
{
"label": "Antivirus 5 thiết bị",
"detail": "Chống virus, malware, lừa đảo, ransomware, VPN, kiểm soát của phụ huynh cho Android, iOS, Windows, macOS."
},
{
"label": "2 GB · 30 ngày",
"detail": "Kèm 2 GB."
},
{
"label": "Trả trước qua SMS 1456",
"detail": "ALTA: S/1.80/ngày · ALTA7: S/5.99/tuần · ALTA30: S/8.99/tháng."
}
]
},
{
"label": "🎮 TI5 Gamer S/7.90",
"group": 2,
"detail": "Trả trước & trả sau qua Mi Bitel (hoặc gửi 'TiG' tới 164) · 5 ngày",
"children": [
{
"label": "Data & apps 1.5 GB",
"detail": "650 MB + các app game/mạng xã hội 1.5 GB mỗi app."
},
{
"label": "Bitel Arcade Premium 7 ngày",
"detail": "Tặng Bitel Arcade Premium 7 ngày; đăng nhập bằng Bitel ID; tích xu đổi MB."
}
]
}
]
}
}
];
