// 转换时间格式
const formatDate = function (datetime) {
  function addDateZero (num) {
    return (num < 10 ? '0' + num : num)
  }
  let d = new Date(datetime)
  let formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate()) + ' ' + addDateZero(d.getHours()) + ':' + addDateZero(d.getMinutes()) + ':' + addDateZero(d.getSeconds())
  return formatdatetime
}

export default {
  formatDate
}
