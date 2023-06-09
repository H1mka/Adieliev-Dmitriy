import AchievementsItem from './AchievementsItem';
import countAchievements from 'utils/countAchievements';

import { selectCompletedIdeas } from 'store/listSlice';
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

const AchievementsList = () => {
    const completedIdeas = useSelector(selectCompletedIdeas);
    const achiements = countAchievements(completedIdeas);
    return (
        <Grid container spacing={6} sx={{ justifyContent: 'center' }}>
            {Object.keys(achiements).map((item) => (
                <AchievementsItem type={item} count={achiements[item]} />
            ))}
        </Grid>
    );
};

export default AchievementsList;
