<template>
  <section class="wf-section product-section">
    <div class="container">

      <h2 class="section-title">SON DƯỠNG GẠO</h2>
      <p class="section-subtitle">Cho đôi môi mềm mịn bằng sự dịu lành từ thiên nhiên</p>

      <p class="text-body text-center mb-5">
        Son Dưỡng Gạo có khối lượng 4.5g và có 3 phân loại màu
      </p>

      <!-- 3 variant cards -->
      <div class="variants-grid">
        <div v-for="variant in variants" :key="variant.name" class="variant-card card">
          <div class="img-box mb-3" style="width: 100%; height: 260px;">
            [{{ variant.name }} – Product Image]
          </div>
          <p class="text-center text-bold">{{ variant.name }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const variants = [
  { name: 'Hương Dâu' },
  { name: 'Không màu' },
  { name: 'Hương Cam' },
]
</script>

<style scoped>
.variants-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 880px;
  margin: 0 auto;
}
</style>
