import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SanPhamView from "../views/SanPhamView.vue";
import CauChuyenView from "../views/CauChuyenView.vue";
import MediaView from "../views/MediaView.vue";

const NAVBAR_OFFSET = 72; // matches .navbar height: 72px
const SCROLL_DURATION = 600; // ms — increase for a slower glide, decrease for snappier

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/san-pham", name: "san-pham", component: SanPhamView },
  {
    path: "/cau-chuyen-thuong-hieu",
    name: "cau-chuyen",
    component: CauChuyenView,
  },
  { path: "/media-assets", name: "media", component: MediaView },
];

// Manual eased scroll — guaranteed to animate in every browser,
// unlike native `behavior: 'smooth'`, which Safari and OS-level
// "Reduce Motion" settings can silently downgrade to an instant jump.
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function smoothScrollTo(targetY) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  if (Math.abs(diff) < 1) return;

  let startTime = null;

  function step(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION, 1);
    window.scrollTo(0, startY + diff * easeInOutQuad(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash);
          if (el) {
            const targetY =
              el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
            smoothScrollTo(targetY);
          }
          resolve(false); // tells vue-router "I already handled scrolling"
        }, 300);
      });
    }

    return { top: 0 };
  },
});

export default router;
