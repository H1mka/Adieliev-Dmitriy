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
        dispatch(newIdea(idea));
    };

    return (
        <Grid item xs={3}>
            <CustomCard
                activity={idea.activity}
                type={idea.type}
                handleChange={handleAdd}
            />
        </Grid>
    );
};

export default FreshIdeaItem;
