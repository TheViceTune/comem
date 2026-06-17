<template>
  <section class="wf-section brand-story-section">
    <!-- Background image – fills the entire section -->
    <img :src="lab" alt="Lab background" class="section-bg-img" />

    <!-- Dark overlay for readability -->
    <div class="section-overlay"></div>

    <!-- Content on top -->
    <div class="container">
      <h2 class="section-title">
        TỪ PHÒNG LAB NHỎ ĐẾN NHỮNG GIÁ TRỊ "LÀNH VÀ THẬT"
      </h2>

      <div class="story-text">
        <p class="text-body mb-3">
          Từ một phòng lab nhỏ và mong muốn tạo ra những sản phẩm an toàn cho
          gia đình, Thạc sĩ – Dược sĩ Trịnh Đặng Thuận Thảo đã đặt nền móng cho
          Cỏ Mềm HomeLab.
        </p>
        <p class="text-body mb-3">
          Son Gạo là một trong những sản phẩm đầu tiên, khởi đầu cho hành trình
          theo đuổi triết lý "Lành và Thật" của thương hiệu.
        </p>
        <p class="text-body">
          Từ phòng lab nhỏ và mong muốn tạo ra những sản phẩm an toàn cho gia
          đình, Son Gạo là một trong những sản phẩm đầu tiên, khởi đầu cho hành
          trình theo đuổi triết lý "Lành và Thật" của thương hiệu.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import lab from "@/assets/lab.svg?url";
</script>

<style scoped>
.brand-story-section {
  position: relative; /* anchor for absolute positioning */
  min-height: 600px; /* adjust as needed */
  display: flex;
  align-items: center; /* vertically center content */
  overflow: hidden; /* keep image within bounds */
  background: #2a2a2a; /* fallback colour */
}

/* Background image – covers the entire section */
.section-bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* covers the area, cropping if needed */
  display: block;
  z-index: 0;
}

/* Dark overlay for text readability */
.section-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45); /* semi‑transparent dark */
  z-index: 1;
  pointer-events: none; /* allow clicks to pass through */
}

/* Container – sits on top of overlay */
.container {
  position: relative;
  z-index: 2;
  width: 100%;
  color: #ffffff; /* white text for contrast */
}

/* Override global text‑body colour inside this section */
.story-text .text-body {
  color: #ffffff;
}

/* Title colour override */
.section-title {
  color: #ffffff;
}

/* Optional: limit text width for readability */
.story-text {
  max-width: 65%;
}
</style>
