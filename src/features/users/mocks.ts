import { User } from "@/features/users/schemas";

export const USERS_ABOUTPAGE = [
  {
    id: 1,
    avatar:
      "https://static.momocdn.net/app/media/product_townhall/member_profile/vp_cong_vu.png",
    fullName: "Vũ Thành Công",
    userName: "cong.vu",
    title: "VP of Product Development & Growth",
  },
  {
    id: 2,
    avatar:
      "https://static.momocdn.net/app/media/product_townhall/member_profile/pmo_ha_ho_jpeg.jpeg",
    fullName: "Hồ THỊ HOÀNG HÀ",
    userName: "ha.ho",
    title: "Senior Team Leader - Project Management",
  },
  {
    id: 3,
    avatar: "https://product.momo.vn:1338/uploads/tien_tran7_9696e14c0e.JPG",
    fullName: "Trần Ngọc Thủy Tiên",
    userName: "tien.tran7",
    title: "Learning & Development Executive",
  },
] satisfies User[];
