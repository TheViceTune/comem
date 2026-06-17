<template>
  <section id="diff" class="wf-section diff-section">
    <div class="container">
      <h2 class="section-title">4 ĐIỀU KHIẾN SON GẠO KHÁC BIỆT</h2>

      <div class="diff-outer">
        <!-- Left: Image (full height) -->
        <div class="diff-image">
          <img :src="diffImage" alt="Product Stack" class="diff-img" />
        </div>

        <!-- Right: 2x2 grid of differentiator cards -->
        <div class="diff-grid">
          <div v-for="item in items" :key="item.number" class="diff-card card">
            <div class="num-badge mb-2">{{ item.number }}</div>
            <h3 class="heading-sm mb-2">{{ item.title }}</h3>
            <p class="text-body text-sm">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import diffImage from "@/assets/actualdiff.svg?url";

const items = [
  {
    number: 1,
    title: "Lành tính từ công thức",
    text: "Son Dưỡng Gạo sử dụng các thành phần có nguồn gốc thiên nhiên được chọn lọc kĩ lưỡng, không sử dụng hương liệu tổng hợp, mang đến sự nuôi dưỡng dịu dàng cho đôi môi mỗi ngày.",
  },
  {
    number: 2,
    title: "Cảm hứng từ hạt gạo Việt",
    text: "Từ biểu tượng của sự nuôi dưỡng trong văn hóa Việt, hạt gạo trở thành nguồn cảm hứng để Cỏ Mềm tạo nên thỏi son dưỡng dịu lành dành cho đôi môi.",
  },
  {
    number: 3,
    title: "Được phát triển bởi đội ngũ dược sĩ",
    text: "Son Dưỡng Gạo được nghiên cứu và phát triển bởi đội ngũ dược sĩ với ưu tiên hàng đầu là sự an toàn, hiệu quả sử dụng lâu dài và trải nghiệm thực tế của người dùng.",
  },
  {
    number: 4,
    title: "Dành cho cả gia đình",
    text: "Với bảng thành phần được chọn lọc từ những nguyên liệu thiên nhiên lành tính, Son Dưỡng Gạo phù hợp cho mọi thành viên trong gia đình. Từ phụ nữ, mẹ bầu đến trẻ nhỏ, ai cũng có thể an tâm sử dụng mỗi ngày.",
  },
];
</script>

<style scoped>
.diff-section {
  background: linear-gradient(to bottom, #fff5ca 0%, white 100%);
}

.diff-outer {
  display: grid;
  grid-template-columns: 1fr 2fr; /* image on the left, grid on the right */
  gap: 32px;
  align-items: stretch; /* make both columns stretch to the same height */
  margin-top: 32px;
}

/* Image container – fills the column height */
.diff-image {
  display: flex;
  align-items: stretch;
  height: 100%; /* take full height of the grid row */
  overflow: hidden; /* ensure the image doesn't spill out */
}

/* The actual image – fills the container, touching top and bottom edges */
.diff-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* covers the area, cropping if needed – change to 'contain' if you want the whole image visible */
  display: block;
}

.diff-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.diff-card {
  display: flex;
  flex-direction: column;
}
</style>
