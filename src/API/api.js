import axios from 'axios';

const key = '80CFeBE4MD6JmhEfClBx7zqo1eGvwTl5EZgKyMQc'
export const getData = () => {
        axios.get('http://52.78.173.151/boards/search-brand', {
            'x-api-key': key,
            params:{
                keyword,
            }
        })
        .then( response => { 
            if(response){
                console.warn(response)
                const { data } = response.data
                if(result.code === 1){
                    console.log('response', response)
                    return response;
                    }
                }
            })
        .catch(err => alert("글을 가져오는데 실패 했습니다."))
    }

