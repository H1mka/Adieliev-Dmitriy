import axios from 'axios';

const postIdeas = (link, data) => {
    axios
        .post(`http://localhost:5001/${link}`, data)
        .then((response) => {
            console.log('Data uploaded successfully');
        })
        .catch((error) => {
            console.error('An error occurred');
        });
};

export default postIdeas;
