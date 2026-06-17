<template>
  <section id="concept" class="wf-section concept-section">
    <div class="container">
      <h2 class="section-title">CONCEPT NÀNG TIÊN GẠO</h2>

      <div class="concept-grid">
        <!-- Left: image (restricted width) -->
        <div class="concept-image">
          <img :src="nangtien" alt="Nangtien" class="nangtien-img" />
        </div>

        <!-- Right: text content -->
        <div class="concept-text">
          <p class="text-body mb-3">
            Lấy cảm hứng từ hạt gạo Việt và hình tượng Nàng Tiên Gạo — hiện thân
            của sự nuôi dưỡng và vẻ đẹp thuần khiết, Son Dưỡng Gạo Cỏ Mềm chắt
            lọc tinh túy từ dầu cám gạo cùng các dưỡng chất thiên nhiên để chăm
            sóc đôi môi một cách dịu dàng và lành tính.
          </p>
          <p class="text-body">
            Bởi đôi khi, điều kỳ diệu không nằm ở những phép màu lớn lao mà được
            tạo nên từ những điều thân thuộc nhất. Mỗi lần thoa son là một lần
            cảm nhận sự dịu lành của hạt gạo Việt, nhẹ nhàng nuôi dưỡng đôi môi
            mỗi ngày.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import nangtien from "@/assets/nangtien.svg?url";
</script>

<style scoped>
.concept-section {
  background: linear-gradient(to bottom right, #fff5ca 0%, white 100%);
}

.concept-grid {
  display: grid;
  grid-template-columns: 30% 1fr; /* 👈 left column = 30% of container, right = remaining */
  gap: 64px;
  align-items: center;
  margin-top: 40px;
}

.concept-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nangtien-img {
  width: 100%; /* fills the column width */
  height: auto; /* maintains aspect ratio */
  display: block;
}

/* Optional: if you need the text to be vertically centered, the grid already does align-items: center */
</style>
