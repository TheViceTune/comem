<template>
  <section id="hero" class="wf-section hero-section">
    <div class="container">
      <div class="hero-grid">
        <!-- Left: Text + CTAs -->
        <div class="hero-text">
          <p class="hero-eyebrow mb-1">Phép màu</p>
          <h1 class="heading-lg mb-3">từ hạt gạo Việt</h1>
          <p class="text-body mb-4">
            Nền tảng thông tin về Son Dưỡng Gạo thương hiệu Cỏ Mềm, cung cấp câu
            chuyện thương hiệu, thông tin sản phẩm và dữ liệu truyền thông thô
            dành cho báo chí, KOL và đối tác.
          </p>
          <div class="hero-ctas">
            <li>
              <router-link to="/#product" class="btn btn-fill">
                Khám phá sản phẩm</router-link
              >
            </li>
            <li>
              <router-link to="/#media" class="btn"
                >Tải Media Assets</router-link
              >
            </li>
          </div>
        </div>

        <!-- Right: Hero image placeholder -->
        <div class="hero-image">
          <img :src="heroImage" alt="Hero Product" class="hero-img" />
        </div>
      </div>
    </div>
  </section>
  <div class="hero-bar"></div>
</template>

<script setup>
import heroImage from "@/assets/heroImage.svg?url";
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #fffffe 0%, #fff5ca 110%);
  padding: 80px 0;
}

.hero-bar {
  height: 100px; /* your specified height */
  width: 100%;
  background: #fff3c7;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.hero-eyebrow {
  font-family: "Gilroy VH", sans-serif;
  font-size: 20px;
}

.hero-ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
