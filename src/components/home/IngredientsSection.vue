<template>
  <section class="wf-section ingredients-section">
    <div class="container">
      <h2 class="section-title">THÀNH PHẦN NỔI BẬT</h2>
      <p class="section-subtitle">Tinh túy làm nên phép màu</p>

      <div class="ingredients-grid">
        <div
          v-for="item in ingredients"
          :key="item.name"
          class="ingredient-card"
        >
          <div class="ingredient-image-wrapper">
            <img :src="item.image" :alt="item.name" class="ingredient-img" />
          </div>
          <h3 class="heading-sm mb-1 text-center">{{ item.name }}</h3>
          <p class="text-sm text-body text-center">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import camgao from "@/assets/camgao.svg?url";
import bohat from "@/assets/bohat.svg?url";
import daugac from "@/assets/daugac.svg?url";
import hanhnhan from "@/assets/hanhnhan.svg?url";
import daumu from "@/assets/daumu.svg?url";

const ingredients = [
  {
    name: "Dầu cám gạo",
    text: "Giàu vitamin và chất chống oxy hóa giúp dưỡng mềm môi và hạn chế mất nước.",
    image: camgao,
  },
  {
    name: "Bơ hạt mỡ",
    text: "Giúp cấp ẩm sâu, hỗ trợ giảm tình trạng khô ráp và nứt nẻ môi.",
    image: bohat,
  },
  {
    name: "Dầu gấc",
    text: "Chứa beta-carotene tự nhiên giúp đôi môi trông tươi tắn hơn.",
    image: daugac,
  },
  {
    name: "Dầu hạnh nhân",
    text: "Giúp làm mềm môi và tăng cảm giác dễ chịu khi sử dụng.",
    image: hanhnhan,
  },
  {
    name: "Dầu mù u",
    text: "Hỗ trợ làm dịu những vùng môi khô và bong tróc.",
    image: daumu,
  },
];
</script>

<style scoped>
.ingredients-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.ingredient-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
}

.ingredient-image-wrapper {
  width: 100%; /* 👈 full width of the card */
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  overflow: hidden;

  border: 4px solid #2e7d32;
  border-radius: 12px;
}

.ingredient-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 👈 fills the entire box, cropping if needed */
  display: block;
}
</style>
