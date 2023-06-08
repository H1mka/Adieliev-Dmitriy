import axios from 'axios';

const getIdea = () => {
    return axios.get('https://www.boredapi.com/api/activity/');
};

export default getIdea;
