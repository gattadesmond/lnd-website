import { TeamMemberCard } from "@/components/about";
import { Container } from "@/components/container";
import CTASection from "@/components/content/CTASection";
import { generatePage } from "@/lib/generatePage";

const About = generatePage(async () => {
  return (
    <>
      <section className="overflow-hidden border-b border-neutral-200">
        <Container
          isBorderX
          className="relative"
          isGridArea
          borderXClassName="[mask-image:linear-gradient(transparent,black)]"
        >
          <div className="relative pt-16 pb-6 sm:px-12 sm:pb-20">
            <h1 className="mt-5 text-left font-display text-4xl font-medium text-neutral-900 sm:text-5xl sm:leading-[1.15]">
              Meet our team
            </h1>
            <p className="mt-6 text-lg text-neutral-500 sm:text-xl">
              Excited to build a Product Knowledge Hub from zero to something
              that fosters continuous learning and collaboration among our
              Product members
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="meet-our-team">
        <Container isBorderX>
          <div className="relative pt-16 pb-6 sm:px-12 sm:pb-20">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              <TeamMemberCard
                name="Vũ Thành Công"
                username="cong.vu"
                role="VP of Product Development & Growth"
                avatar="https://static.momocdn.net/app/media/product_townhall/member_profile/vp_cong_vu.png"
                profileUrl="/profile/cong.vu"
              />
              <TeamMemberCard
                name="Hồ Thị Hoàng Hà"
                username="ha.ho"
                role="Senior Team Leader - Project Management"
                avatar="https://static.momocdn.net/app/media/product_townhall/member_profile/pmo_ha_ho_jpeg.jpeg"
                profileUrl="/profile/ha.ho"
              />
              <TeamMemberCard
                name="Trần Ngọc Thủy Tiên"
                username="tien.tran7"
                role="Learning & Development Executive"
                avatar="https://product.momo.vn:1338/uploads/tien_tran7_9696e14c0e.JPG"
                profileUrl="/profile/tien.tran7"
              />
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
});

export default About;
