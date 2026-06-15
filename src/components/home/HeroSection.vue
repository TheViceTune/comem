<template>
  <section class="wf-section hero-section">
    <div class="container">
      <div class="hero-grid">

        <!-- Left: Text + CTAs -->
        <div class="hero-text">
          <p class="hero-eyebrow mb-1">Phép màu</p>
          <h1 class="heading-lg mb-3">từ hạt gạo Việt</h1>
          <p class="text-body mb-4">
            Nền tảng thông tin về Son Dưỡng Gạo thương hiệu Cỏ Mềm, cung cấp câu chuyện thương hiệu,
            thông tin sản phẩm và dữ liệu truyền thông thô dành cho báo chí, KOL và đối tác.
          </p>
          <div class="hero-ctas">
            <router-link to="/san-pham" class="btn btn-fill">Khám phá sản phẩm</router-link>
            <router-link to="/media-assets" class="btn">Tải Media Assets</router-link>
          </div>
        </div>

        <!-- Right: Hero image placeholder -->
        <div class="hero-image">
          <div class="img-box" style="width: 100%; height: 440px;">
            [Hero Product Image]
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Hero is purely presentational — CTAs link via router-link
</script>

<style scoped>
.hero-section {
  padding: 80px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.hero-eyebrow {
  font-size: 20px;
}

.hero-ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
