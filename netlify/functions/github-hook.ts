import { Handler } from '@netlify/functions'

export const handler: Handler = () => {
    console.log('hi')
    return {
        statusCode: 200,
        body: 'hello'
    }
}