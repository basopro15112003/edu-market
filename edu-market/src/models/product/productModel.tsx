export interface Product {
  id: number; // Mã định danh sản phẩm
  category: number; // Thể loại sản phẩm (ví dụ: 1 - Lập trình, 2 - Tiếng Anh, 3 - Đồ họa...)
  fullName: string; // Tên đầy đủ 
  instructor?: string; // Tên giảng viên 
  description: string; // Mô tả chi tiết về sản phẩm và những gì sẽ đạt được khi học sxong
  price: number; // Giá hiện tại 
  oldPrice: number; // Giá gốc
  img: string;
  level?: string; // Trình độ (ví dụ: Beginner, Intermediate, Advanced)
  rating?: number; // Điểm đánh giá trung bình (ví dụ: 4.6)
  reviews?: number; // Số lượng lượt đánh giá 
  duration?: number; // Thời lượng khóa học (ví dụ: "45 hours")
}
