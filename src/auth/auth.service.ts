import jwt from 'jsonwebtoken'
import { PRIVATE_KEY } from '../app/app.config'

/**
 * 签发令牌
 * */
interface SignTokenOptions {
    payload: any
}

export const signToken = (options: SignTokenOptions) => {
    // 准备选项
    const { payload } = options

    // 签发 JWT
    try {
        const token = jwt.sign(payload, PRIVATE_KEY, { algorithm: 'RS256' })

        return token

    } catch (error) {
        console.log(error)
    }

}