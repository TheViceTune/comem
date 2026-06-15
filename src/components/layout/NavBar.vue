<template>
  <nav class="navbar">
    <router-link to="/" class="logo-link">
      <div class="img-box" style="width: 48px; height: 48px;">Logo</div>
      <span>Cỏ Mềm</span>
    </router-link>

    <ul class="nav-list">
      <li><router-link to="/">Trang chủ</router-link></li>
      <li><router-link to="/san-pham">Sản phẩm</router-link></li>
      <li><router-link to="/cau-chuyen-thuong-hieu">Câu chuyện thương hiệu</router-link></li>
      <li><router-link to="/media-assets">Media Assets</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
// No logic needed — Vue Router handles active link highlighting via router-link-active
</script>
