import axios from 'axios';

const getIdeasList = (link) => {
    return axios.get(`http://localhost:5001/${link}`);
};

export default getIdeasList;
