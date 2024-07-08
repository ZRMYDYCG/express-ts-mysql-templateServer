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
        default:
            statusCode = 500
            message = "服务器暂时出了点问题🦠"
            break
    }

    response.status(statusCode).send({ message })
}