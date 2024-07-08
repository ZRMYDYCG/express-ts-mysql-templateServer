import type { Request, Response, NextFunction } from 'express'
import * as userService from '../user/user.server'
import bcrypt from 'bcrypt'


/**
 * 验证用户登录数据
*/
export const validateLoginData = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.log("👮🏼‍♂️ 验证用户登录数据")

    // 准备数据
    const { name, password } = request.body

    // 验证必填数据
    if (!name) return next(new Error('Name_Is_Required'))
    if (!password) return next(new Error('Password_Is_Required'))

    // 验证用户名
    const user = await userService.getUserByName(name, { password: true })
    if (!user) {
        return next(new Error('USER_DOES_NOT_EXOST'))
    }

    // 验证用户密码
    const matched = await bcrypt.compare(password, user.password)
    if (!matched) return next(new Error('PASSWORD_DOES_NOT_MATCH'))

    // 进行下一步的处理
    next()
}
