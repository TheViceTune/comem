<template>
  <section class="wf-section ingredients-section">
    <div class="container">

      <h2 class="section-title">THÀNH PHẦN NỔI BẬT</h2>
      <p class="section-subtitle">Tinh túy làm nên phép màu</p>

      <div class="ingredients-grid">
        <div
          v-for="item in ingredients"
          :key="item.name"
          class="ingredient-card card"
        >
          <div class="img-box mb-2" style="width: 100%; height: 120px;">
            [{{ item.name }}]
          </div>
          <h3 class="heading-sm mb-1 text-center">{{ item.name }}</h3>
          <p class="text-sm text-body text-center">{{ item.text }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const ingredients = [
  {
    name: 'Dầu cám gạo',
    text: 'Giàu vitamin và chất chống oxy hóa giúp dưỡng mềm môi và hạn chế mất nước.',
  },
  {
    name: 'Bơ hạt mỡ',
    text: 'Giúp cấp ẩm sâu, hỗ trợ giảm tình trạng khô ráp và nứt nẻ môi.',
  },
  {
    name: 'Dầu gấc',
    text: 'Chứa beta-carotene tự nhiên giúp đôi môi trông tươi tắn hơn.',
  },
  {
    name: 'Dầu hạnh nhân',
    text: 'Giúp làm mềm môi và tăng cảm giác dễ chịu khi sử dụng.',
  },
  {
    name: 'Dầu mù u',
    text: 'Hỗ trợ làm dịu những vùng môi khô và bong tróc.',
  },
]
</script>

<style scoped>
.ingredients-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
</style>
