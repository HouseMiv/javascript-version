export default {
  methods: {
    handleMouseOver() {
      this.$refs.button.style.backgroundColor = "#141414"
      this.$refs.button.style.color = "#fff"
    },
    handleMouseOut() {
      this.$refs.button.style.backgroundColor = "#fff"
      this.$refs.button.style.color = "#141414"
    },
  },
}
