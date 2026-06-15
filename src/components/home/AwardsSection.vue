<template>
  <section class="wf-section awards-section">
    <div class="container">

      <!-- Top: award image + title block -->
      <div class="awards-top">
        <div class="awards-left">
          <div class="img-box mb-3" style="width: 140px; height: 160px; margin: 0 auto;">
            [Award Trophy]
          </div>
          <p class="label-upper text-center">Cỏ Mềm Hôm Nay</p>
        </div>

        <div class="awards-right">
          <h2 class="heading-md mb-3">
            THƯƠNG HIỆU TIÊN PHONG ĐỔI MỚI &amp; PHÁT TRIỂN BỀN VỮNG 2026
          </h2>
          <p class="text-body text-muted">
            Được công nhận vì hành trình xây dựng sản phẩm lành tính, minh bạch và bền vững
            từ những nguyên liệu thiên nhiên Việt Nam.
          </p>
        </div>
      </div>

      <hr class="divider" />

      <!-- Bottom: founder quote -->
      <div class="quote-row">
        <div class="founder-image">
          <div class="img-box" style="width: 100%; height: 300px;">
            [Founder Photo – Trịnh Đặng Thuận Thảo]
          </div>
        </div>

        <div class="founder-content">
          <blockquote class="quote-block mb-3">
            "Chúng tôi không muốn tạo ra một sản phẩm chỉ để chạy theo xu hướng.
            Điều Cỏ Mềm theo đuổi là những sản phẩm mà chính mình và gia đình mình
            có thể yên tâm sử dụng mỗi ngày."
          </blockquote>
          <p class="text-bold mb-1">Trịnh Đặng Thuận Thảo</p>
          <p class="text-sm text-muted">Thạc sĩ – Dược sĩ · Nhà sáng lập Cỏ Mềm HomeLab</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Static content
</script>

<style scoped>
.awards-top {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 40px;
}

.quote-row {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 48px;
  align-items: center;
}
</style>
