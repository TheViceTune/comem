<template>
  <div>
    <div class="page-header">
      <div class="container">
        <h1 class="section-title">Media Assets</h1>
        <p class="section-subtitle">Tải tư liệu truyền thông dành cho báo chí, KOL và đối tác</p>
      </div>
    </div>

    <MediaAssetsSection />
  </div>
</template>

<script setup>
import MediaAssetsSection from '../components/home/MediaAssetsSection.vue'
</script>

<style scoped>
.page-header {
  padding: 48px 0 8px;
  border-bottom: 1px solid #ddd;
}
</style>
