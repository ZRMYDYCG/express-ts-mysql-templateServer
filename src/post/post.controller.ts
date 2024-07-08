import type { Request, Response, NextFunction } from 'express'
import * as userService from './post.server'

/**
 * 内容列表
*/
export const index = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const posts = await userService.getPosts()
        response.send(posts)
    } catch (error) {
        next(error)
    }
}

/**
 * 发布内容
*/
export const store = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { title, content } = request.body
    const { id: userId } = request.user

    try {
        const data = await userService.createPost({ title, content, userId })
        response.status(201).send(data)
    } catch (error) {
        next(error)
    }
}

/**
 * 更新内容
*/
export const update = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    // 获取内容 ID
    const { postId } = request.params

    // 准备数据
    const { title, content } = request.body

    try {
        const data = await userService.updatePost(parseInt(postId, 10), { title, content })
        response.send(data)
    } catch (error) {
        next(error)
    }
}

/**
 * 删除内容
*/
export const destroy = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    // 获取内容 ID
    const { postId } = request.params

    // 删除内容
    try {
        const data = await userService.deletePost(parseInt(postId, 10))
        response.send(data)
    } catch (error) {
        next(error)
    }
}