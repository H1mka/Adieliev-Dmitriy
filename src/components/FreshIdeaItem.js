import { useState, useEffect } from 'react';
import getIdea from 'services/getIdea';
import CustomCard from 'components/CustomCard';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { newIdea } from 'store/listSlice';

const FreshIdeaItem = () => {
    const [idea, setIdea] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getIdea().then((response) => setIdea(response.data));
    }, []);

    const handleAdd = () => {
        const { activity, key, type } = idea;
        dispatch(newIdea({activity, type, key}));
    };

    return (
        <Grid item lg={3} md={3} sm={3} xs={6}>
            <CustomCard activity={idea.activity} type={idea.type} handleChange={handleAdd} />
        </Grid>
    );
};

export default FreshIdeaItem;
