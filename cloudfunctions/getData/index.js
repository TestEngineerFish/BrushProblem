// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 获取todo list
exports.main = async (event, context) => {
  return db.collection('Procblems').get({
    success: function(res) {
      console.log(res.data)
    }
  })
}