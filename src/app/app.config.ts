import dotenv from 'dotenv'

/**
 * 使用 dotenv.config() 可以自动加载当前目录下的 .env 文件
*/
dotenv.config()

/**
 * 应用配置
*/
export const { APP_PORT } = process.env

/**
 * 数据仓库配置
*/
export const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = process.env

/**
 * 密钥配置
*/
export const PRIVATE_KEY = Buffer.from(process.env.PRIVATE_KEY, 'base64').toString('utf-8')
export const PUBLIC_KEY = Buffer.from(process.env.PUBLIC_KEY, 'base64').toString('utf-8')