import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://yt-api.p.rapidapi.com/dl',
  params: {id: 'arj7oStGLkU'},
  headers: {
    'x-rapidapi-key': 'fd587b97d2msh75809b1f0f80c9cp109effjsnea579db13de5',
    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

// const options = {
//   params: {id: 'arj7oStGLkU'},
//   headers: {
//     'x-rapidapi-key': API_KEY,
//     'x-rapidapi-host': 'yt-api.p.rapidapi.com'
//   }
// };

// export const fetchData = async (url) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/${url}`, options);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }