import type { Product } from "../product/productModel";

export const products: Product[] = [
  // --- Cơ bản ---
  {
    id: 1,
    category: 1, // Web/Front-end
    fullName: "F1 - Front-end Engineering dành cho người mới bắt đầu",
    instructor: "Kmin Academy",
    description:
      "Lộ trình F1 giúp bạn từ một người chưa biết gì về lập trình trở thành một Front-end Engineer có nền tảng tư duy lập trình vững chắc và kỹ năng lập trình thành thạo, sẵn sàng làm việc ngay tại doanh nghiệp khi tốt nghiệp.",
    price: 499000,
    oldPrice: 1000000,
    img: "https://cms.kmin.edu.vn/uploads/f1_thumbnail_4042e665c3.png",
    level: "Cơ bản",
    rating: 4.7,
    reviews: 1200,
    duration: 40,
  },
  {
    id: 3,
    category: 1, // Web/Front-end
    fullName: "FB - Lập trình Front-end với HTML, CSS",
    instructor: "Kmin Academy",
    description:
      "Khóa học phù hợp với các học viên: 🥇 theo hướng lập trình web; 🥈 muốn phát triển tư duy và kỹ năng lập trình giao diện web với HTML và CSS; 🥉 mất căn bản và muốn được học lại một cách bài bản và có hệ thống. Để học tốt khóa học này, học viên cần có kiến thức lập trình cơ bản.",
    price: 900000,
    oldPrice: 1400000,
    img: "https://cms.kmin.edu.vn/uploads/Thumbnail_FB_fb9ba17b80.png",
    level: "Cơ bản",
    rating: 4.5,
    reviews: 600,
    duration: 36,
  },
  {
    id: 5,
    category: 1, // Web/Front-end
    fullName: "TB - Tư duy lập trình cơ bản với TypeScript / JavaScript",
    instructor: "Kmin Academy",
    description:
      "Khóa học dành cho các học viên có mục tiêu theo đuổi đam mê với ngành phần mềm, cụ thể hơn là: Front-end, Back-end, Full-stack, Mobile, ...; học viên mới bắt đầu học lập trình, muốn trang bị kiến thức nền tảng vững chắc; học viên đã từng học lập trình nhưng không có nền tảng vững chắc",
    price: 950000,
    oldPrice: 1400000,
    img: "https://cms.kmin.edu.vn/uploads/Thumbnail_TB_e3e847effa.png",
    level: "Cơ bản",
    rating: 4.6,
    reviews: 650,
    duration: 35,
  },
  {
    id: 7,
    category: 2, // Back-end/DevOps
    fullName: "B1 - Back-end Engineering dành cho người mới bắt đầu",
    instructor: "Kmin Academy",
    description:
      "Lộ trình B1 giúp bạn từ một người chưa biết gì về lập trình trở thành một người có nền tảng tư duy và kỹ năng lập trình vững chắc, từng bước trở thành Back-end Engineer hay Back-end Developer chuyên nghiệp.",
    price: 1200000,
    oldPrice: 1800000,
    img: "https://cms.kmin.edu.vn/uploads/Thumbnail_B1_d90d97be54.png",
    level: "Cơ bản",
    rating: 4.7,
    reviews: 800,
    duration: 40,
  },
  {
    id: 10,
    category: 3, // Data/AI
    fullName: "D1 - Data Analysis dành cho người mới bắt đầu",
    instructor: "Kmin Academy",
    description:
      "Một lộ trình bài bản và chi tiết dành cho các bạn có ước mơ trở thành một Data Analyst. Kmin đồng hành cùng học viên để chinh phục trọn bộ tư duy và kỹ năng làm việc của một người làm phân tích dữ liệu chuyên nghiệp.",
    price: 1000000,
    oldPrice: 1500000,
    img: "https://cms.kmin.edu.vn/uploads/d1_thumbnail_2_2ac0fcac94.png",
    level: "Cơ bản",
    rating: 4.6,
    reviews: 700,
    duration: 38,
  },
  {
    id: 11,
    category: 3, // Data/AI
    fullName: "DB - Phân tích dữ liệu cơ bản",
    instructor: "Kmin Academy",
    description:
      "Khóa học khởi đầu dành cho các bạn muốn dấn thân vào ngành Phân tích dữ liệu (Data Analysis). Những tư duy và kỹ năng nền tảng được hướng dẫn trong khóa học này sẽ giúp bạn vững chãi trên con đường chinh phục ước mơ trở thành một Data Analyst hay Data Scientist.",
    price: 1000000,
    oldPrice: 1500000,
    img: "https://cms.kmin.edu.vn/uploads/db_thumbnail_2_9c3d502bb3.png",
    level: "Cơ bản",
    rating: 4.6,
    reviews: 700,
    duration: 38,
  },
  {
    id: 14,
    category: 3, // Data/AI
    fullName: "SQ - Tư duy về dữ liệu với SQL",
    instructor: "Kmin Academy",
    description:
      "Kỹ năng sử dụng SQL là không thể thiếu đối với một Data Analyst cũng như các Developer. Tuy nhiên, truy vấn và xây dựng cơ sở dữ liệu sao cho hiệu quả, tối ưu mới là điều quan trọng. Khóa học giúp bạn có nền tảng tư duy vững chắc và kỹ năng sử dụng SQL thuần thục.",
    price: 900000,
    oldPrice: 1300000,
    img: "https://cms.kmin.edu.vn/uploads/sq_thumbnail_2_878238a7a0.png",
    level: "Cơ bản",
    rating: 4.5,
    reviews: 600,
    duration: 32,
  },
  {
    id: 15,
    category: 4, // Python
    fullName: "PB - Nhập môn lập trình với Python",
    instructor: "Kmin Academy",
    description:
      "Tạo nên sự khác biệt của bản thân mình với bộ kỹ năng lập trình Python trên nền tảng tư duy tốt. Khóa học giúp bạn biết cách sử dụng lập trình để giải quyết các vấn đề trong thực tế.",
    price: 950000,
    oldPrice: 1400000,
    img: "https://cms.kmin.edu.vn/uploads/pt_thumbnail_9b365e99b0.png",
    level: "Cơ bản",
    rating: 4.6,
    reviews: 650,
    duration: 35,
  },
  // --- Trung cấp ---
  {
    id: 4,
    category: 1, // Web/Front-end
    fullName: "TW - Lập trình ứng dụng Web với TypeScript và JavaScript",
    instructor: "Kmin Academy",
    description:
      "Học viên có mục tiêu theo đuổi đam mê với ngành phần mềm, cụ thể hơn là: Front-end, Back-end, Full-stack, Mobile, ...Học viên đã biết lập trình cơ bản và muốn nâng cao tư duy và kỹ năng của mình hơn.",
    price: 1200000,
    oldPrice: 1800000,
    img: "https://cms.kmin.edu.vn/uploads/TW_34d267bd8f.png",
    level: "Trung cấp",
    rating: 4.7,
    reviews: 800,
    duration: 40,
  },
  {
    id: 6,
    category: 1, // Web/Front-end
    fullName: "TA - Tư duy lập trình nâng cao với TypeScript / JavaScript",
    instructor: "Kmin Academy",
    description:
      "Khóa học dành cho học viên định hướng theo lĩnh vực phần mềm, đã biết lập trình cơ bản và muốn nâng cao tư duy và kỹ năng của mình hơn; học viên chưa nhạy bén trong việc đưa ra các ý tưởng, giải pháp, thuật toán để giải quyết vấn đề trong lập trình.",
    price: 1100000,
    oldPrice: 1600000,
    img: "https://cms.kmin.edu.vn/uploads/Thumbnail_TA_4795992ecd.png",
    level: "Trung cấp",
    rating: 4.7,
    reviews: 700,
    duration: 37,
  },
  {
    id: 8,
    category: 2, // Back-end/DevOps
    fullName: "BN - Lập trình back-end với NodeJS",
    instructor: "Kmin Academy",
    description:
      "Nắm vững khoá học này, bạn sẽ tự tin apply bất cứ vị trí nào về back-end dev với Nodejs. Một công nghệ mới mở ra những thăng hoa trong nghề nghiệp lập trình viên back-end.",
    price: 1100000,
    oldPrice: 1600000,
    img: "https://cms.kmin.edu.vn/uploads/Thumbnail_BN_e5444651c2.png",
    level: "Trung cấp",
    rating: 4.7,
    reviews: 900,
    duration: 37,
  },
  {
    id: 12,
    category: 3, // Data/AI
    fullName: "DP - Phân tích dữ liệu với Python",
    instructor: "Kmin Academy",
    description:
      "Sử dụng Python để thực hiện phân tích dữ liệu trong thực tế. Phát triển theo hướng Data Analysis, Data Science, AI. Tăng kỹ năng phân tích dữ liệu để hỗ trợ mục đích chuyên môn (tài chính, kinh tế, mạng máy tính...).",
    price: 1200000,
    oldPrice: 1700000,
    img: "https://cms.kmin.edu.vn/uploads/DP_9303a14679.png",
    level: "Trung cấp",
    rating: 4.7,
    reviews: 900,
    duration: 40,
  },
  {
    id: 2,
    category: 1, // Web/Front-end
    fullName: "FR - Lập trình Front-end với ReactJS",
    instructor: "Kmin Academy",
    description:
      "ReactJS là một trong những công nghệ tốt trong ngành xây dựng và phát triển website; Các tính năng mà Reactjs mang lại đã và đang được rất nhiều doanh nghiệp đón nhận và sử dụng. Mỗi lập trình viên phát triển theo hướng Front-end đều chọn thành thạo Reactjs là một hướng đi tốt cho sự nghiệp.",
    price: 1500000,
    oldPrice: 2000000,
    img: "https://cms.kmin.edu.vn/uploads/Thumbnail_FR_2139fde629.png",
    level: "Trung cấp",
    rating: 4.8,
    reviews: 980,
    duration: 45,
  },
  // --- Nâng cao ---
  {
    id: 9,
    category: 2, // Back-end/DevOps
    fullName: "AD - Triển khai ứng dụng thực tế",
    instructor: "Kmin Academy",
    description:
      "Hiểu quy trình triển khai ứng dụng web, trang bị kỹ năng để trở thành Full-stack dev hoặc DevOps.",
    price: 1300000,
    oldPrice: 1900000,
    img: "https://cms.kmin.edu.vn/uploads/Thumbnail_AD_d50d65c24c.png",
    level: "Nâng cao",
    rating: 4.6,
    reviews: 700,
    duration: 42,
  },
  {
    id: 13,
    category: 3, // Data/AI
    fullName: "DA - Phân tích dữ liệu nâng cao",
    instructor: "Kmin Academy",
    description:
      "Khóa học trang bị cho bạn tư duy và kỹ năng làm việc thực tế với vai trò là một Data Analyst. Những kiến thức nâng cao giúp bạn có thể tạo lợi thế cạnh tranh khi tìm việc và tăng chất lượng cho những sản phẩm của bạn.",
    price: 1400000,
    oldPrice: 2000000,
    img: "https://cms.kmin.edu.vn/uploads/da_thumbnail_0e213e3dc7.png",
    level: "Nâng cao",
    rating: 4.8,
    reviews: 800,
    duration: 44,
  },
];
