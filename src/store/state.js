let defaultCity = '南昌'
let loginUser = ''
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {}
try {
  if (localStorage.user) {
    loginUser = localStorage.user
  }
} catch (error) {}

export default {
  city: defaultCity,
  loginUser
}
