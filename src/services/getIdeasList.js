import axios from 'axios';

const getIdeasList = (link) => {
    return axios.get(`http://localhost:3001/${link}`);
};

export default getIdeasList;
