const axios = require('axios')
const fs = require('fs')

const urls = {
  baidu: 'http://www.baidu.com',
  zhihu: 'http://www.zhihu.com',
  taobao: 'http://www.taobao.com',
  bilibili: 'http://www.bilibili.com',
}

const urlKeys = Object.keys(urls)

urlKeys.map(index => {
  const startTime = new Date().getTime()
  axios.get(urls[index]).then(response => {
    const endTime = new Date().getTime()
    console.log('%s Loading time is %d\n', index, endTime - startTime)
    const fd = fs.openSync(`./foo-${index}.html`, 'w')

    fs.writeFileSync(fd, response.data)
  })
})
