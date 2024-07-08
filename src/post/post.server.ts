import { connection } from "../app/database/mysql"
import { PostModel } from "./post.model"

/**
 * 获取内容列表
*/
export const getPosts = async () => {
    // 准备查询
    const statement = `
    SELECT post.id, post.title, post.content, JSON_OBJECT('id', user.id, 'name', user.name) as user
    FROM post
    LEFT JOIN user
        ON post.userId = user.id
    `

    // 执行查询
    const [data] = await connection.promise().query(statement)

    // 返回执行SQL后的结果
    return data
}

/**
 * 创建内容
*/
export const createPost = async (post: PostModel) => {
    const statement = `
    INSERT INTO post
    SET ?
    `

    const [data] = await connection.promise().query(statement, post)

    return data
}


/**
 * 更新内容
*/
export const updatePost = async (postId: number, post: PostModel) => {
    const statement = `
    UPDATE post
    SET ?
    WHERE id = ?
    `

    // 执行SQL并提供参数
    const [data] = await connection.promise().query(statement, [post, postId])

    return data
}


/**
 * 删除内容
*/
export const deletePost = async (posiId: number) => {
    const statement = `
    DELETE FROM post
    WHERE id = ?
    `

    // 执行查询
    const [data] = await connection.promise().query(statement, posiId)

    return data
}