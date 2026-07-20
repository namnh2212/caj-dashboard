# Quy tắc cập nhật Bán hàng + Danh mục kênh

> **Bắt buộc**: mỗi lần cập nhật tab Bán hàng thì **cập nhật luôn Danh mục kênh (KENH)**. Hai việc này đi cùng nhau, không tách rời.

## 1. File nguồn

| Nội dung | File | Ghi chú |
|---|---|---|
| Active / bán hàng | `Active DDMMYYYY.xlsx` | Kỳ hiện tại |
| Cùng kỳ (CK) | File Active tháng trước | Lọc cùng số ngày |
| **Danh mục kênh** | `Ds Agente DDMM.xls` | **Nguồn duy nhất cho tổng danh mục** |
| Digital TX | `Agente phat sinh giao dich DDMM.xlsx` | |

## 2. Danh mục kênh (KENH) — nguồn: Ds Agente

Đọc từ dòng 9 trở đi, sheet `REPORT 0`:

| Cột | Index | Nội dung |
|---|---|---|
| C | 2 | Centro de Codigo (BC) |
| F | 5 | Tipo de canal |
| G | 6 | Sub tipo de canal |
| H | 7 | Codigo de canal |

**Đếm `total` = số `Codigo de canal` duy nhất** theo từng BC × kênh.

### ⚠️ Quy tắc loại trừ (QUAN TRỌNG)

```
POS = "Point of Sales Channel"  TRỪ  Sub tipo = "Tipo 7 - PDV recarga"
```

PDV recarga là điểm bán nạp tiền, **không** tính vào danh mục kênh bán Mobile.

### Ánh xạ Tipo de canal → tên kênh

| Tipo de canal (Ds Agente) | Kênh dashboard | Nhóm |
|---|---|---|
| Point of Sales Channel *(trừ Tipo 7)* | POS | mobile |
| Promotores Channel | Promotores | mobile |
| Dealer Autorizado | Dealer Autorizado | mobile |
| CAB Dealer | CAB Dealer | mobile |
| Small CAB | Small CAB | mobile |
| Dealer Channel | Dealer | mobile |
| Small Dealer | Small Dealer | mobile |
| Dealer Online Channel | Dealer Online | mobile |
| Staff in Point Of Sale channel | Bitel Staff | mobile |
| Acesor Distribuidor | Acesor Distribuidor | mobile |
| Collector Channel | Collector | mobile |
| Agente BIPAY Channel | Agente BIPAY | digital |
| Negocios BIPAY Channel | Negocios BIPAY | digital |
| Embajadores Tusami | Tusami | digital |
| Promotores FTTH Channel | FTTH | ftth |

Kênh chỉ có trong Active mà không có trong Ds Agente (Islas BITEL, Store, Retail, Mini Store, Business Center): lấy `total = ps`.

Chỉ tính 6 BC: `CAJBC01, CAJBC07, CAJBC08, CAJBC05, CAJBC10, CAJBC14`.
Bỏ `CAJBR`, `CAJDO*`, `CAJCL01`, `BETS_CAJAMARCA`.

`ao: true` cho Store, Retail, Mini Store (Agente Oficial).

## 3. Kênh có phát sinh (KENH_PS) — nguồn: Active

`ps` = số `channel_code` duy nhất **có bất kỳ Active nào** trong kỳ (KHÔNG lọc riêng postpaid), theo BC × kênh.

Ghi vào `KENH_PS[<tháng>]`. Hàm `buildKenhCatalog()` ưu tiên `KENH_PS[m]`, fallback về `row.ps` trong `KENH`.

## 4. Bán hàng (SALES_DATA)

- `total / post / pre` — Active kỳ hiện tại (tất cả dòng)
- `byBC`, `ch` — `t/po/pr` kỳ này; `tcp/tcpp` cùng kỳ
- `bcch` — mỗi BC một mảng `{ch, tcp, tcpp, t, tp}`; **`tcp/tcpp` phải điền từ CK**, không để 0
- `SALES_DAILY[m]` — `days[]` + `byDay[]` đủ tới ngày cuối có dữ liệu
- `STAFF_DATA[m]` — `ckLabel`, `curLabel`, `top10[]`, **`tdc[]`** (4 nhóm: pos, cab, dealer, promotores)

## 5. Checklist mỗi lần cập nhật

- [ ] `SALES_DATA[m]` — total, post, pre, mnp, byBC, ch, bcch (có tcp/tcpp)
- [ ] `SALES_DAILY[m]` — đủ số ngày
- [ ] `STAFF_DATA[m]` — top10 **và** tdc
- [ ] **`KENH`** — từ Ds Agente, POS trừ Tipo 7
- [ ] **`KENH_PS[m]`** — từ Active
- [ ] `DIGITAL_DATA` — srcDate, newThisMonth, nuevosDM, byBC, giaoDich
- [ ] Đổi hết nhãn ngày cũ (`01-DD/MM`) sang ngày mới
- [ ] Chạy `node --check` từng script block
- [ ] Test jsdom: `salesBcTbody` có nội dung, không có `console.error`
- [ ] Commit + push, hard-refresh (Ctrl+F5)

## 6. Lưu ý kỹ thuật

- **Chỉ sửa `index.html` bằng Python `html.replace()`** — không dùng Edit tool.
- `/tmp/caj-dashboard` bị xóa giữa các phiên → clone lại mỗi lần.
- `STAFF_DATA` và `SALES_DATA` là **hai object riêng biệt**. Đã từng bị dính làm một khiến `SALES_DATA` undefined và cả tab Bán hàng không render — kiểm tra `};` + `const SALES_DATA = {` còn nguyên.
