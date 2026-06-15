<template>
  <section class="wf-section benefits-section">
    <div class="container">

      <h2 class="section-title">CÔNG DỤNG CHÍNH</h2>

      <div class="benefits-layout">

        <!-- Left column: 2 benefit cards -->
        <div class="benefits-col">
          <div
            v-for="item in leftBenefits"
            :key="item.title"
            class="benefit-card card mb-3"
          >
            <div class="img-box mb-2" style="width: 48px; height: 48px;">Icon</div>
            <h3 class="heading-sm mb-1">{{ item.title }}</h3>
            <p class="text-body text-sm">{{ item.text }}</p>
          </div>
        </div>

        <!-- Center: product image -->
        <div class="benefits-center">
          <div class="img-box" style="width: 100%; height: 380px;">
            [Son Dưỡng Gạo – Benefits Visual]
          </div>
        </div>

        <!-- Right column: 2 benefit cards -->
        <div class="benefits-col">
          <div
            v-for="item in rightBenefits"
            :key="item.title"
            class="benefit-card card mb-3"
          >
            <div class="img-box mb-2" style="width: 48px; height: 48px;">Icon</div>
            <h3 class="heading-sm mb-1">{{ item.title }}</h3>
            <p class="text-body text-sm">{{ item.text }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const leftBenefits = [
  {
    title: 'Dưỡng ẩm sâu',
    text: 'Cấp ẩm hiệu quả, hỗ trợ cải thiện sắc môi và mang lại đôi môi căng mọng.',
  },
  {
    title: 'Mềm mịn môi',
    text: 'Hỗ trợ làm mềm vân môi, giảm khô ráp và giúp môi mịn màng hơn.',
  },
]

const rightBenefits = [
  {
    title: 'Chống lão hóa',
    text: 'Giúp bảo vệ môi trước các tác nhân gây hại từ môi trường, duy trì vẻ tươi trẻ và khỏe mạnh.',
  },
  {
    title: 'Lót son đẹp',
    text: 'Tạo nền môi ẩm mượt trước khi makeup, giúp son lên màu đều và hạn chế lộ vân môi.',
  },
]
</script>

<style scoped>
.benefits-layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 16px;
}

.benefit-card {
  display: flex;
  flex-direction: column;
}
</style>
