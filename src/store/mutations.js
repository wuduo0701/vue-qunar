export default {
  changeCurrentCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {}
  }
}
