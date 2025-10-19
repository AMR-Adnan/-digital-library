export default {
  mounted(el, binding) {
    const options = {
      root: null,
      threshold: 0.12,
    };
    const cb = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-up");
          if (binding.value && binding.value.once) observer.unobserve(el);
        }
      });
    };
    const io = new IntersectionObserver(cb, options);
    io.observe(el);
    el._io = io;
  },
  unmounted(el) {
    if (el._io) el._io.disconnect();
  },
};
