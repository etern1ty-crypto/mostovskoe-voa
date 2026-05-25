/* eslint-disable */
// Intersection-Observer based reveal-on-scroll.
// Respects prefers-reduced-motion via CSS (animations disabled there).

const init = () => {
  const items = document.querySelectorAll<HTMLElement>(
    "[data-reveal], [data-reveal-stagger]"
  );
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "-40px 0px -10% 0px", threshold: 0.05 }
  );
  items.forEach((el) => io.observe(el));
};

// Count-up animation for stats with [data-count]
const initCounters = () => {
  const els = document.querySelectorAll<HTMLElement>("[data-count]");
  if (!els.length) return;
  const obs = new IntersectionObserver(
    (entries, o) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const target = parseFloat(el.dataset.count || "0");
        const suffix = el.dataset.suffix ?? "";
        const duration = parseInt(el.dataset.duration || "1200", 10);
        const start = performance.now();
        const startVal = 0;
        const animate = (t: number) => {
          const k = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - k, 3);
          const val = Math.round(startVal + (target - startVal) * eased);
          el.textContent = val.toLocaleString("ru-RU") + suffix;
          if (k < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        o.unobserve(el);
      }
    },
    { threshold: 0.4 }
  );
  els.forEach((el) => obs.observe(el));
};

// Magnetic hover effect for [data-magnetic] elements
const initMagnetic = () => {
  const els = document.querySelectorAll<HTMLElement>("[data-magnetic]");
  els.forEach((el) => {
    let raf = 0;
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
      });
    });
    el.addEventListener("mouseleave", () => {
      cancelAnimationFrame(raf);
      el.style.transform = "";
    });
  });
};

// 3D tilt effect for [data-tilt] cards
const initTilt = () => {
  const els = document.querySelectorAll<HTMLElement>("[data-tilt]");
  els.forEach((el) => {
    el.style.transformStyle = "preserve-3d";
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${
        -py * 6
      }deg) translateY(-4px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
};

const boot = () => {
  init();
  initCounters();
  initMagnetic();
  initTilt();
};

if (document.readyState !== "loading") {
  boot();
} else {
  document.addEventListener("DOMContentLoaded", boot);
}

// Re-init after Astro View Transitions navigations
document.addEventListener("astro:page-load", boot);
