<template>
  <section class="wf-section media-section">
    <div class="container">

      <h2 class="section-title">MEDIA ASSETS</h2>

      <div class="media-grid">

        <!-- Column 1: Brand Assets -->
        <div class="media-col card">
          <h3 class="heading-sm text-center mb-4">BRAND ASSETS</h3>
          <div
            v-for="item in brandAssets"
            :key="item.name"
            class="download-item"
          >
            <span>{{ item.name }}</span>
            <button class="btn btn-sm">⬇ Tải</button>
          </div>
        </div>

        <!-- Column 2: Product Assets (images + videos) -->
        <div class="media-col card">
          <h3 class="heading-sm text-center mb-4">PRODUCT ASSETS</h3>

          <p class="text-sm text-bold mb-2">Hình ảnh sản phẩm</p>
          <div
            v-for="item in productImages"
            :key="item.name"
            class="download-item"
          >
            <span>{{ item.name }}</span>
            <button class="btn btn-sm">⬇ Tải</button>
          </div>

          <p class="text-sm text-bold mt-3 mb-2">Video sản phẩm</p>
          <div
            v-for="item in productVideos"
            :key="item.name"
            class="download-item"
          >
            <span>{{ item.name }}</span>
            <button class="btn btn-sm">⬇ Tải</button>
          </div>
        </div>

        <!-- Column 3: Press Material -->
        <div class="media-col card">
          <h3 class="heading-sm text-center mb-4">PRESS MATERIAL</h3>
          <div
            v-for="item in pressItems"
            :key="item.name"
            class="download-item"
          >
            <span>{{ item.name }}</span>
            <button class="btn btn-sm">⬇ Tải</button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const brandAssets = [
  { name: 'Logo (AI, PNG, JPG)' },
  { name: 'Hồ sơ doanh nghiệp (Company Profile)' },
]

const productImages = [
  { name: 'Packshot sản phẩm (9:16; 16:9)' },
  { name: 'Ảnh sản phẩm trên nền concept (9:16; 16:9)' },
  { name: 'Ảnh lifestyle (9:16; 16:9)' },
  { name: 'Ảnh nguyên liệu gạo (9:16; 16:9)' },
  { name: 'Ảnh texture và swatch (9:16; 16:9)' },
]

const productVideos = [
  { name: 'TVC (9:16; 16:9)' },
  { name: 'Video Texture & Application (9:16; 16:9)' },
  { name: 'Video Ingredient Story (9:16; 16:9)' },
  { name: 'B-roll Footage' },
]

const pressItems = [
  { name: 'Thông cáo báo chí' },
  { name: 'Infographic thị trường son dưỡng' },
  { name: 'Media Kit PDF' },
]
</script>

<style scoped>
.media-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.media-col {
  padding: 28px;
}
</style>
