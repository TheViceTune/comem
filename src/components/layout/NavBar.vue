<template>
  <nav class="navbar">
    <router-link to="/" class="logo-link">
      <img :src="logo" alt="Cỏ Mềm logo" class="logo-img" />
    </router-link>

    <ul class="nav-list">
      <li><router-link to="/">Trang chủ</router-link></li>
      <li><router-link to="/#product">Sản phẩm</router-link></li>
      <li><router-link to="/#brand">Câu chuyện thương hiệu</router-link></li>
      <li><router-link to="/#awards">Giải thưởng</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import logo from "@/assets/logo.svg?url";
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 48px; /* comfortable spacing */
  background: #fff;
  border-bottom: 1px solid #ddd;
  height: 150px; /* fixed navbar height – adjust as needed */
}

.logo-link {
  display: flex;
  align-items: center;
  flex-shrink: 0; /* prevent shrinking */
}

.logo-img {
  height: 80px; /* smaller logo – change to your preferred size */
  width: auto; /* maintain aspect ratio */
  display: block;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 36px;
  margin: 0;
  padding: 0;
}

.nav-list a {
  font-size: 14px;
  color: #333;
  text-decoration: none;
}

.nav-list a:hover,
.nav-list a.router-link-active {
  font-weight: 700;
  text-decoration: underline;
}
</style>
