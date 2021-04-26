export default {
  changeCurrentCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {}
  },
  changeLoginUser (state, user) {
    state.loginUser = user
    try {
      localStorage.user = user
    } catch (error) {}
  }
}
