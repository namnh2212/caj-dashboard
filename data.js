// ════════════════════════════════════════════════════════════════
//  data.js — CẬP NHẬT HÀNG TUẦN
//  Nguồn: Báo cáo tuần & Cảnh báo thuê bao giảm hàng tuần
//  Cách cập nhật: chỉ sửa file này, upload lên GitHub (file nhỏ ~3KB)
// ════════════════════════════════════════════════════════════════
const CFG = {

  // ── KỲ BÁO CÁO ──────────────────────────────────────────────
  header: {
    week: 'W24',
    date: '15/06/2026',
  },

  // ── NHÃN THÁNG ───────────────────────────────────────────────
  months: ['T1/26', 'T2/26', 'T3/26', 'T4/26', 'T5/26', 'T6*'],

  // ── KPI TÓM TẮT (dùng cho cards đầu trang) ──────────────────
  kpi: {
    // 15C3D
    c15YtdActual : 19704,   // Lũy kế TH T1–T5 (tháng đầy đủ)
    c15YtdPlan   : 18310,   // Lũy kế KH T1–T5
    c15YtdPct    : 107.6,
    c15AnnualKh  : 39904,   // KH cả năm
    c15AnnualPct : 45.2,    // % vs KH năm (dùng T6 lũy kế)
    c15T6Actual  : 18039,   // Lũy kế T6 (W1+W2, chưa đủ tháng)
    c15T6Change  : -1665,   // Thay đổi T6 W1+W2

    // Cảnh báo trạm (tuần gần nhất)
    alertWeek    : 'W24',
    alertTotal   : 14,
    alertOngoing : 6,
    alertNew     : 8,
    alertRegOnly : 14,

    // Doanh thu (triệu PEN)
    revYtdActual : 32147,   // T1–T5
    revYtdPlan   : 31542,
    revYtdPct    : 101.9,

    // REG
    regYtdActual : 22039,   // Lũy kế TH T6 (đến 14/06)
    regYtdPlan   : 21000,   // Lũy kế KH T6
    regYtdPct    : 104.9,
  },

  // ── DỮ LIỆU THUÊ BAO 15C3D HÀNG THÁNG ───────────────────────
  // Nguồn: file 15c3d 5 thang dau nam.xlsx + Báo cáo tuần
  c15: {
    actual  : [3820,  1422, 10584,  -689, 4567, -1665],
    plan    : [3259, -2385,  9275,  1172, 6988,  1731],
    ytd     : [3820,  5242, 15826, 15137, 19704, 18039],
    ytdPlan : [3259,   875, 10150, 11322, 18310, 20041],
    annualKh: 39904,
    // Ghi chú sidebar từng tháng [TH, KH, lũy kế TH]
    // (tự tính từ arrays trên)
  },

  // ── DỮ LIỆU THUÊ BAO REG HÀNG THÁNG ─────────────────────────
  // Nguồn: file Reg 1506 site.xlsx — dòng 4 (Totals)
  // growth = REG_N − REG_{N-1} (tăng trưởng thuần hàng tháng)
  // ytd    = lũy kế thuê bao REG đến cuối tháng N
  // ytdPlan= lũy kế KH = N × planMonth
  reg: {
    growth   : [4560, 6948, 3295, 3614, 1105, 2517],
    ytd      : [4560, 11508, 14803, 18417, 19522, 22039],
    ytdPlan  : [3500,  7000, 10500, 14000, 17500, 21000],
    planMonth: 3500,           // KH tăng trưởng ròng mỗi tháng
    t6Note   : 'đến 14/06/2026',
  },

  // ── DOANH THU HÀNG THÁNG (triệu PEN) ────────────────────────
  // Nguồn: Báo cáo tuần — Revenue
  rev: {
    actual : [6274.2, 6217.2, 6546.8, 6497.1, 6611.5, 1727.6],
    plan   : [6194.8, 6177.9, 6281.5, 6398.2, 6489.3, 6586.7],
    // T6 chỉ có W1 (01–08/06), chưa đầy đủ tháng
  },

};
// ════════════════════════════════════════════════════════════════
