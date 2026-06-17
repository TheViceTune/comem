<template>
  <section id="product" class="wf-section product-section">
    <div class="container">
      <h2 class="section-title">SON DƯỠNG GẠO</h2>
      <p class="section-subtitle">
        Cho đôi môi mềm mịn bằng sự dịu lành từ thiên nhiên
      </p>

      <p class="text-body text-center mb-5">
        Son Dưỡng Gạo có khối lượng 4.5g và có 3 phân loại màu
      </p>

      <!-- 3 variant cards (without any borders/boxes) -->
      <div class="variants-grid">
        <div
          v-for="variant in variants"
          :key="variant.name"
          class="variant-item"
        >
          <div class="variant-image-wrapper">
            <img :src="variant.image" :alt="variant.name" class="variant-img" />
          </div>
          <p class="variant-name text-center text-bold">{{ variant.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import dau from "@/assets/dau.png?url";
import cam from "@/assets/cam.png?url";
import no from "@/assets/nocolor.png?url";

const variants = [
  { name: "Hương Dâu", image: dau },
  { name: "Không màu", image: no },
  { name: "Hương Cam", image: cam },
];
</script>

<style scoped>
.variants-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 880px;
  margin: 0 auto;
}

.variant-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.variant-image-wrapper {
  width: 100%;
  height: 100%; /* fixed height – adjust as needed */
  overflow: hidden;
  background: #f9f9f9; /* fallback background, optional */
}

.variant-img {
  width: 100%;
  height: 100%;
  object-fit: fill; /* stretches to fill the box, no scaling preserved */
  display: block;
}

.variant-name {
  margin-top: 12px;
  font-size: 16px; /* or your preferred size */
}
</style>
