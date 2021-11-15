import axios from 'axios';

const key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
const host_api = 'https://api.connect-people.club'
const token ='eyJhbGciOiJIUzUxMiIsImlhdCI6MTYxNzc3MDIzNCwiZXhwIjoxNjE3NzcwMjM0fQ.eyJtZW1iZXJfaWQiOjF9.fobbDXZODd-IwuSKtNbZgbkzfH6ntT3FrxLY_V6OWdyhLF__RYqFAc0tl3srE6vGbMgERkiiYYYVJBoiGR1K6Q'


const DOMAIN = '';
const UNAUTHORIZED = 401;
const onUnauthorized = () => {
    router.push('/login')
}

const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data
    }).then(result => result.data)
      .catch(result => {
        const {status} = result.response
        if(status === UNAUTHORIZED) return onUnauthorized()
        throw Error(result)
      })
}


export const setAuthInHeader = token => {
    // 토큰정보를 받아서 axios에 request를 날리기 전에 header에 토크값 셋팅하기
	axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

// const {token} = localStorage
// if(token) setAuthInHeader(token)

export const board = {
    fetch () {
        return request ('get', '/board')
    }
}

export const auth = {
    login(email, password) {
        return request ('post', '/login', {email, password})
    }
}





// 검색
export const callSearchKeyword = async (page, perPage, keyword) => {
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
// 카테고리 대
export const callCMajorCategory = async () => {
    try {
        return await axios.get(`${host_api}/v1/category/major`, {
            'x-api-key': key,
            'token': token, 
        })

    } catch (error) {
        console.log('error',error)

    }
}

// 카테고리 중소
export const callCMinorCategory = async () => {
    try {
        return await axios.get(`${host_api}/v1/category/1/minor`, {
            'x-api-key': key,
            'token': token,
        })
    } catch (error) {
        console.log('error',error)

    }
}