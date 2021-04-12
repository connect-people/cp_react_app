import axios from 'axios'
export const getData = async (page) => {
    try {
        let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
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

export const getDetail = async (page_id) => {
    try {
        let key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
        return await axios.get(`'http://52.78.173.151/boards${page_id}'`,{
            'x-api-key': key,
        })
      
    } catch (error) {
      console.wran(error);
    }
}