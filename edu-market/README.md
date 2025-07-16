# 🎓 Edu Market

> Nền tảng marketplace giáo dục hiện đại, nổi bật với kiến trúc **Bento Grid** – giúp kết nối học viên với các khóa học chất lượng, trải nghiệm AI và UI/UX tối ưu.

---

## 📋 Mục lục
- [Giới thiệu](#giới-thiệu)
- [Kiến trúc Bento Grid](#kiến-trúc-bento-grid)
- [Tính năng nổi bật](#tính-năng-nổi-bật)
- [Tech Stack](#tech-stack)
- [Cài đặt & Chạy Local](#cài-đặt--chạy-local)
- [Build & Deploy](#build--deploy)
- [Đóng góp](#đóng-góp)
- [Tác giả](#tác-giả)

---

## 🚀 Giới thiệu
**Edu Market** là nền tảng marketplace giáo dục, nơi bạn có thể tìm kiếm, lọc, yêu thích, và nhận gợi ý AI về các khóa học chất lượng. Giao diện hiện đại, thân thiện, hỗ trợ dark mode, pagination, bento grid, lịch sử xem, và nhiều tiện ích khác.

- **Mục tiêu:** Kết nối học viên với các khóa học tốt nhất, tối ưu trải nghiệm tìm kiếm và lựa chọn khóa học.
- **Đối tượng:** Học sinh, sinh viên, người đi làm muốn học thêm kỹ năng mới.

---

## 🟩 Kiến trúc Bento Grid
**Bento Grid** là một kiểu bố cục lưới hiện đại, lấy cảm hứng từ hộp cơm Bento của Nhật Bản – nơi các phần tử được sắp xếp linh hoạt, đa dạng về kích thước nhưng vẫn hài hòa, nổi bật nội dung quan trọng.

### **Tại sao chọn Bento Grid cho Edu Market?**
- **Tối ưu trải nghiệm thị giác:** Mỗi sản phẩm/khóa học được trình bày nổi bật, không nhàm chán như lưới đều truyền thống.
- **Tăng khả năng nhấn mạnh:** Các khóa học nổi bật, gợi ý AI, hoặc ưu đãi có thể chiếm nhiều diện tích hơn, thu hút sự chú ý.
- **Linh hoạt trên mọi thiết bị:** Bento Grid dễ responsive, phù hợp cả desktop lẫn mobile.
- **Xu hướng UI hiện đại:** Được nhiều nền tảng lớn (như Notion, Apple, Pinterest) áp dụng để tăng trải nghiệm người dùng.

**Với Bento Grid, Edu Market không chỉ đẹp mà còn giúp học viên dễ dàng khám phá, lựa chọn khóa học phù hợp nhất!**

---

## ✨ Tính năng nổi bật
- Tìm kiếm, lọc khóa học theo tên, loại, giá
- Yêu thích (Favorites) và xem lại lịch sử đã xem
- Gợi ý AI dựa trên hành vi người dùng
- Hiển thị số lượng sản phẩm theo từng bộ lọc
- Pagination, bento grid, empty state hiện đại
- Dark mode, responsive UI
- Toast notification, skeleton loading (shadcn/ui)
- Chatbot tư vấn khóa học

---

## 🛠️ Tech Stack
- **Frontend:** React 19, Vite
- **UI:** TailwindCSS, shadcn/ui, Lucide Icons
- **State:** React Hooks
- **Routing:** React Router DOM
- **AI Suggestion:** Mock logic (có thể tích hợp API thực tế)
- **Other:** TypeScript, ESLint, Prettier

---

## ⚡ Cài đặt & Chạy Local
```bash
# 1. Clone repo
https://github.com/quochoangnguyen2003ct/edu-market.git
cd edu-market

# 2. Cài dependencies
npm install

# 3. Chạy local
npm run dev

# 4. Truy cập
http://localhost:5173
```

---

## 🏗️ Build & Deploy
### Build local
```bash
npm run build
```
Kết quả sẽ nằm trong thư mục `dist/`.

### Deploy Vercel
1. Push code lên GitHub
2. Đăng nhập [Vercel](https://vercel.com/), kết nối repo, chọn framework Vite/React
3. Build command: `npm run build`
4. Output directory: `dist`
5. Nhấn Deploy và nhận link public

Demo: [https://edu-market-qh.vercel.app/](https://edu-market-qh.vercel.app/)

---

## 🤝 Đóng góp
- Fork repo, tạo branch mới, gửi pull request
- Đóng góp ý tưởng, tính năng, UI/UX, docs đều được hoan nghênh!

---

## 👨‍💻 Tác giả
- Nguyễn Quốc Hoàng ([quochoangnguyen2003ct](https://github.com/quochoangnguyen2003ct))
- Dự án thực hiện cho bài test Frontend Intern @ Antoree.com

---

**Cảm ơn bạn đã ghé thăm Edu Market!**
