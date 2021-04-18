import axios from 'axios';

const key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
const host_api = 'https://api.connect-people.club'
const token ='eyJhbGciOiJIUzUxMiIsImlhdCI6MTYxNzc3MDIzNCwiZXhwIjoxNjE3NzcwMjM0fQ.eyJtZW1iZXJfaWQiOjF9.fobbDXZODd-IwuSKtNbZgbkzfH6ntT3FrxLY_V6OWdyhLF__RYqFAc0tl3srE6vGbMgERkiiYYYVJBoiGR1K6Q'
// 검색
export const callSearchKeyword = async (page, perPage, keyword) => {
    console.log('page',page)
    console.log('perPage',perPage)
    console.log('keyword',keyword)
    try {
        return await axios.get(`${host_api}/v1/board/search-brand`, {
            'x-api-key': key,
            'token': token,
            params: {
                page,
                per_page : perPage,
                keyword
            }
        })

    } catch (error) {
        console.log('error',error)

    }
}