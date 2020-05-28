let defaultCity = '南昌'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {}

export default {
  city: defaultCity
}
