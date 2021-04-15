import axios from 'axios'


const key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
export const getData = async (page) => {
    try {
        return await axios.get('http://52.78.173.151/boards',{
            'x-api-key': key,
            params:{
            page: page,
            count: 20
            }
        })
      
    } catch (error) {
      console.wran(error);
    }
}


export const callSearchKeyword = async (page, perPage, keyword) => {
    console.log('TEST')
    try {
        return await axios.get(`http://52.78.173.151/v1/board/search-brand`, {
            'x-api-key': key,
            params: {
                page,
                per_page : perPage,
                keyword
            }
        })
    } catch (error) {

    }
}