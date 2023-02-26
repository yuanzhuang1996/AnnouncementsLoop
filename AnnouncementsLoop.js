export default {
  install(Vue) {
    Vue.component('announcements-loop', {
      props: {
        data: {
          type: Array,
          required: true
        },
        interval: {
          type: Number,
          default: 3000
        }
      },
      data() {
        return {
          currentIndex: 0,
          timerId: null
        };
      },
      mounted() {
        this.startLoop();
      },
      beforeDestroy() {
        this.stopLoop();
      },
      methods: {
        startLoop() {
          this.timerId = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.data.length;
          }, this.interval);
        },
        stopLoop() {
          clearInterval(this.timerId);
          this.timerId = null;
        }
      },
      render() {
        return this.$scopedSlots.default({
          currentItem: this.data[this.currentIndex]
        });
      }
    });
  }
};