<template>
  <div>
    <div class="page-header">
      <div class="container">
        <h1 class="section-title">Câu Chuyện Thương Hiệu</h1>
        <p class="section-subtitle">Hành trình theo đuổi triết lý "Lành và Thật"</p>
      </div>
    </div>

    <ConceptSection />
    <BrandStorySection />
    <AwardsSection />
  </div>
</template>

<script setup>
import ConceptSection    from '../components/home/ConceptSection.vue'
import BrandStorySection from '../components/home/BrandStorySection.vue'
import AwardsSection     from '../components/home/AwardsSection.vue'
</script>

<style scoped>
.page-header {
  padding: 48px 0 8px;
  border-bottom: 1px solid #ddd;
}
</style>
