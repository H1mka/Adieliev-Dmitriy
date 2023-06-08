import FreshIdeaItem from 'components/FreshIdeaItem';
import { Grid } from '@mui/material';

const FreshIdeasList = () => {
    return (
        <Grid container spacing={2}>
            <FreshIdeaItem />
            <FreshIdeaItem />
            <FreshIdeaItem />
            <FreshIdeaItem />
        </Grid>
    );
};

export default FreshIdeasList;
