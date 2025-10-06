import React from "react";

import parse from "html-react-parser";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Container } from "../container";

const faqData = [
  {
    id: "contribute",
    title:
      "Tôi muốn đóng góp bài viết để chia sẻ kiến thức với các thành viên Product",
    content:
      'Welcome bạn trở thành cây bút vàng tiếp theo trong làng chia sẻ kiến thức Product. Contact chi.huynh1 để thảo luận chủ đề và triển khai bài viết trên Notion – hệ thống quản lý nội dung của website bạn nhé! Sau khi bài viết hoàn thành, team sẽ hỗ trợ bạn edit, xuất bản, và truyền thông bài viết. Đọc thêm hướng dẫn cụ thể tại <a href="https://product.momo.vn/article/huong-dan-dong-gop-product-stories" target="_blank">TẠI ĐÂY</a>.',
    link: "#",
  },
  {
    id: "internal-info",
    title: "Tôi muốn tìm kiếm thông tin nội bộ về cách khối PTSP hoạt động",
    content:
      'Một cú click vào <a href="https://product.momo.vn/product-handbook" target="_blank">Product Handbook</a> sẽ giúp bạn thoát khỏi ma trận nhiễu loạn thông tin. Đây là nơi tổng hợp tất cả thông tin về cách khối PTSP vận hành từ quy trình phát triển sản phẩm đến phát triển nhân viên, giúp bạn tra cứu các thông tin nội bộ Product một cách nhanh chóng, dễ dàng và hiệu quả trong công việc hàng ngày!',
    link: "#",
  },
  {
    id: "team-structure",
    title:
      "Tôi muốn tìm hiểu sơ đồ các teams Product và tìm kiếm thành viên Product",
    content:
      'Thế thì quẹo ngay <a href="https://product.momo.vn/teams" target="_blank">Product Teams Structure</a> thôi bạn ơi. Tất cả các đội và thành viên ở 4 mảng Marketing & Distribution, Payments, Financial Services và Platform đều được cập nhật mới nhất tại đây! Không chỉ vậy, bạn và leader team của mình còn có thể trang trí không gian của team qua phần mô tả giới thiệu & gallery đấy. Khám phá ngay thôi!',
    link: "#",
  },
  {
    id: "benefits",
    title: "Tôi muốn tìm thông tin về quyền lợi, quy định cho nhân viên",
    content:
      '<ul > <li>Hỏi một được hai, tặng bạn luôn hai quyển Sổ tay nhân viên được HRBP và Admin biên tập để cập nhật đầy đủ các quyền lợi, quy định liên quan đến nhân viên.</li><li><a href="https://product.momo.vn/product-handbook/b696c3bd5a79446dbfecc59c351b6dea" target="_blank" class="uppercase underline text-pink-500">Admin Handbook</a>: tổng hợp các thông tin về phúc lợi, chính sách của riêng Product và các thủ tục hành chính.</li><li><a href="https://product.momo.vn/product-handbook/295d0d2738584625abf2f1154875f569" target="_blank" class="uppercase underline text-pink-500">HRBP - Product Employees Handbook</a>: giúp bạn nhanh chóng hội nhập với văn hóa Công ty, hiểu hơn về các chính sách, quy định liên quan trong công việc hằng ngày cũng như chế độ, phúc lợi của chính bạn.</li></ul>',
    link: "#",
  },
];

function QuestionSection() {
  return (
    <Container isBorderX className="border-t border-neutral-200 bg-white py-16">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-medium text-neutral-900 sm:text-4xl sm:leading-[1.15]">
          Câu hỏi thường gặp
        </h2>
        <p className="sm:text-md mt-5 text-neutral-500">
          Tìm hiểu thêm về cách sử dụng hệ thống và các dịch vụ hỗ trợ
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-neutral-200 bg-white"
            >
              <AccordionTrigger className="cursor-pointer py-4 text-left text-base font-medium text-neutral-900 hover:no-underline">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="prose prose-sm !w-full !max-w-full leading-relaxed text-neutral-600">
                  {faq.content && parse(faq.content)}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}

export default QuestionSection;
