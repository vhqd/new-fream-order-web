export default {
  data() {
    return { debounceTimer: '' };
  },
  methods: {
    // 防抖函数
    throttle(fn, time) {
      time || (time = 250);
      var arg = Array.from(arguments).splice(1);
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        fn.apply(this, arg);
      }, time);
    },
  },
};
