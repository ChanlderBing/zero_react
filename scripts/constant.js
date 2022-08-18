const path = require('path')
const PROJECT_PATH = path.resolve(__dirname, '../')  //根目录
const PROJECT_NAME = path.parse(PROJECT_PATH).name   //项目名
const isDev = process.env.NODE_ENV !== 'production'
const PROJECT_PORT = 8080
const PROJECT_HOST = '127.0.0.1'

module.exports = {  
  PROJECT_PATH,
  PROJECT_NAME,
  isDev,
  PROJECT_PORT,
  PROJECT_HOST
}