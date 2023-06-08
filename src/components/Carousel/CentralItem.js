// import { Card, Typography, CardActionArea, CardContent } from '@mui/material';
import CustomCard from 'components/CustomCard';
import { Grid } from '@mui/material';

const CentralItem = ({ activity, type }) => {
    return (
        <Grid item xs={4}>
            <CustomCard
                activity={activity}
                type={type}
                handleChange={() => {
                    console.log(1);
                }}
            />{' '}
        </Grid>
    );
};

export default CentralItem;
