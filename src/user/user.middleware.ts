import { Request, Response, NextFunction } from "express"
import * as userService from './user.server'

/**
 * 验证用户数据中间件
*/
export const validateUserData = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.log("👮🏼‍♂️ 验证用户数据")

    // 准备数据
    const { name, password } = request.body

    // 验证必填数据
    if (!name) return next(new Error('Name_Is_Required'))
    if (!password) return next(new Error('Password_Is_Required'))

    // 验证用户创建用户名是否重复
    const user = await userService.getUserByName(name)
    if (user) {
        return next(new Error('UserName_IS_Exited'))
    }

    // 进行下一步的处理
    next()
}