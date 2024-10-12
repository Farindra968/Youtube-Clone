import axios from "axios";

const API_KEY = import.meta.env.VITE_YT_API_KEY;
const BASE_URL = "https://yt-api.p.rapidapi.com"

const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'yt-api.p.rapidapi.com'
	}
};

export const fetchData = async (url) => {
    try {
        const response = await axios.get(`${BASE_URL}`, options);
        console.log(response); 
    }
    catch (error) {
        console.error(error);
    }
    
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