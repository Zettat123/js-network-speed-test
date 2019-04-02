const axios = require('axios')
const fs = require('fs')

const url = 'https://www.baidu.com'
const startTime = new Date().getTime()
axios.get(url).then(response => {
  const endTime = new Date().getTime()
  console.log('Loading time is %d\n', endTime - startTime)
})
