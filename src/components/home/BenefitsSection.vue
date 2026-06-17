<template>
  <section class="wf-section benefits-section">
    <div class="container">
      <h2 class="section-title">CÔNG DỤNG CHÍNH</h2>

      <div class="benefits-layout">
        <!-- Left column -->
        <div class="benefits-col">
          <div
            v-for="item in leftBenefits"
            :key="item.title"
            class="benefit-item"
          >
            <h3 class="heading-sm mb-1">{{ item.title }}</h3>
            <p class="text-body text-sm">{{ item.text }}</p>
          </div>
        </div>

        <!-- Center placeholder (keeps grid alignment) -->
        <div class="benefits-col center-placeholder"></div>

        <!-- Right column -->
        <div class="benefits-col">
          <div
            v-for="item in rightBenefits"
            :key="item.title"
            class="benefit-item"
          >
            <h3 class="heading-sm mb-1">{{ item.title }}</h3>
            <p class="text-body text-sm">{{ item.text }}</p>
          </div>
        </div>

        <!-- Overlapping image on top -->
        <img :src="img" alt="Difference" class="benefits-center-img" />
      </div>
    </div>
  </section>
</template>

<script setup>
import img from "@/assets/diff.svg?url";

const leftBenefits = [
  {
    title: "Dưỡng ẩm sâu",
    text: "Cấp ẩm hiệu quả, hỗ trợ cải thiện sắc môi và mang lại đôi môi căng mọng.",
  },
  {
    title: "Mềm mịn môi",
    text: "Hỗ trợ làm mềm vân môi, giảm khô ráp và giúp môi mịn màng hơn.",
  },
];

const rightBenefits = [
  {
    title: "Chống lão hóa",
    text: "Giúp bảo vệ môi trước các tác nhân gây hại từ môi trường, duy trì vẻ tươi trẻ và khỏe mạnh.",
  },
  {
    title: "Lót son đẹp",
    text: "Tạo nền môi ẩm mượt trước khi makeup, giúp son lên màu đều và hạn chế lộ vân môi.",
  },
];
</script>

<style scoped>
.container {
  size: 1000px;
}
.benefits-section {
  background: linear-gradient(to right, white 0%, #fff5ca 50%, white 100%);
  padding: 100px;
}

.benefits-layout {
  position: relative; /* anchor for the absolutely positioned image */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 140px;
}

.benefits-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* No box – just text */
.benefit-item {
  /* No background, border, or padding */
  background: transparent;
  border: none;
  padding: 0;
}

/* The overlapping image – on TOP of the cards */
.benefits-center-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 43%;
  max-width: none;
  height: auto;
  z-index: 2;
  pointer-events: none;
}

/* Keep the placeholder hidden but preserve grid space */
.center-placeholder {
  visibility: hidden;
}
</style>
