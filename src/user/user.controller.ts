import type { Request, Response, NextFunction } from "express"
import { UserModel } from "./user.model"
import * as userService from './user.server'

/**
 * 创建用户
*/
export const store = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { name, password } = request.body

    try {
        const data = await userService.createUser({ name, password })
        response.status
    } catch (error) {

    }
}