import express from 'express';
import postRouter from '../post/post.router'
import { defaultErrorHandler } from './app.middleware'

/**
 * 创建应用
 */
const app = express();

/**
 * 中间件-处理JSON
 */
app.use(express.json());

/**
 * 路由
*/
app.use(postRouter)

/**
 * 中间件-默认异常处理器
*/
app.use(defaultErrorHandler)


/**
 * 导出应用
 */
export default app;
