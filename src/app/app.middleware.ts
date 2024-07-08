import { error } from 'console'
import type { Request, Response, NextFunction } from 'express'

/***********
 * 局部中间件
 * requestUrl
 * 
 * 
 * ***********/

/**
 * 输出请求地址
 * */
export const requestUrl = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.log(request.url)
    next()
}


/***********
 * 应用级别中间件
 * defaultErrorHandler
 * 
 * 
 * ***********/

/**
 * 异常处理器
*/
export const defaultErrorHandler = (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    if (error.message) {
        console.log('🦠', error.message)
    }

    let statusCode: number, message: string

    /**
     * 处理异常
    */
    switch (error.message) {
        case 'Name_Is_Required':
            statusCode = 400
            message = '请提供用户名'
            break
        case 'Password_Is_Required':
            statusCode = 400
            message = '请提供用户密码'
            break
        case 'UserName_IS_Exited':
            statusCode = 409
            message = '用户名已经存在'
        default:
            statusCode = 500
            message = "服务器暂时出了点问题"
            break
    }

    response.status(statusCode).send({ message })
}