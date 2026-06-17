<template>
  <section class="wf-section awards-section">
    <div class="container">
      <!-- Quote + founder image -->
      <div class="founder-row">
        <div class="founder-image">
          <img :src="founder" alt="Founder" class="founder-img" />
        </div>

        <div class="founder-content">
          <blockquote class="quote-block mb-3">
            "Chúng tôi không muốn tạo ra một sản phẩm chỉ để chạy theo xu hướng.
            Điều Cỏ Mềm theo đuổi là những sản phẩm mà chính mình và gia đình
            mình có thể yên tâm sử dụng mỗi ngày."
          </blockquote>
          <p class="text-bold mb-1">Trịnh Đặng Thuận Thảo</p>
          <p class="text-sm text-muted">
            Thạc sĩ – Dược sĩ · Nhà sáng lập Cỏ Mềm HomeLab
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import founder from "@/assets/founder.svg?url";
</script>

<style scoped>
.awards-section {
  /* keep the same background if you like, or remove – optional */
  background: linear-gradient(to right, white 0%, #fff5ca 50%, white 100%);
}

.founder-row {
  display: grid;
  grid-template-columns: 180px 1fr; /* medium‑sized image */
  gap: 48px;
  align-items: center;
  max-width: 900px;
  margin: 0 auto; /* center the content */
}

.founder-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.founder-img {
  width: 100%;
  height: auto;
  max-width: 180px; /* ensures it stays within the column */
  display: block;
  border-radius: 8px; /* optional */
}

/* Quote block styling – already defined in wireframe, but we keep it */
.quote-block {
  border-left: 4px solid #bbb;
  padding: 16px 20px;
  font-style: italic;
  font-size: 15px;
  line-height: 1.8;
  color: #222;
  margin: 0;
}

/* Adjustments for responsiveness */
@media (max-width: 768px) {
  .founder-row {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }
  .founder-img {
    max-width: 140px;
    margin: 0 auto;
  }
  .quote-block {
    border-left: none;
    border-top: 4px solid #bbb;
    padding: 16px 0 0;
  }
}
</style>
