<template>
  <div>
    <div class="page-header">
      <div class="container">
        <h1 class="section-title">Sản Phẩm</h1>
        <p class="section-subtitle">Son Dưỡng Gạo – Cỏ Mềm HomeLab</p>
      </div>
    </div>

    <ProductSection />
    <BenefitsSection />
    <IngredientsSection />
    <DifferentiatorsSection />
  </div>
</template>

<script setup>
import ProductSection         from '../components/home/ProductSection.vue'
import BenefitsSection        from '../components/home/BenefitsSection.vue'
import IngredientsSection     from '../components/home/IngredientsSection.vue'
import DifferentiatorsSection from '../components/home/DifferentiatorsSection.vue'
</script>

<style scoped>
.page-header {
  padding: 48px 0 8px;
  border-bottom: 1px solid #ddd;
}
</style>
