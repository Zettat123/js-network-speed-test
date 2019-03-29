const axios = require('axios')

const url = 'http://www.baidu.com'
const startTime = new Date().getTime()

axios.get(url).then(function(response) {
  const endTime = new Date().getTime()

  console.log('Loading time is %d\n', endTime - startTime)
})
