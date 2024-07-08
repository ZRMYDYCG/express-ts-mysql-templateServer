import app from './app/index';
import { APP_PORT } from './app/app.config';
import { connection } from './app/database/mysql'

app.listen(APP_PORT, () => {
  console.log('Server run at 3000 🚀');
});

/**
 * 测试数据服务连接
*/
connection.connect(error => {
  if (error) {
    console.log("连接失败：", error.message)

    return
  }

  console.log("success")
})