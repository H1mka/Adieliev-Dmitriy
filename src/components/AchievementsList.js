import AchievementsItem from './AchievementsItem';
import countAchievements from 'utils/countAchievements';

import { selectCompletedIdeas } from 'store/listSlice';
import { useSelector } from 'react-redux';

import { Grid, Skeleton, Container } from '@mui/material';

const AchievementsList = () => {
    const completedIdeas = useSelector(selectCompletedIdeas);
    const achiements = countAchievements(completedIdeas);
    return (
        <>
            {completedIdeas.length > 0 ? (
                <Grid container spacing={6} sx={{ justifyContent: 'center' }}>
                    {Object.keys(achiements).map((item, index) => (
                        <AchievementsItem type={item} count={achiements[item]} key={index} />
                    ))}
                </Grid>
            ) : (
                <Container>
                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 30,
                        }}
                    >
                        <Skeleton variant='circular' width={150} height={150} />
                        <Skeleton variant='circular' width={150} height={150} />
                        <Skeleton variant='circular' width={150} height={150} />
                    </Container>
                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 30,
                        }}
                    >
                        <Skeleton variant='circular' width={150} height={150} />
                        <Skeleton variant='circular' width={150} height={150} />
                    </Container>
                </Container>
            )}
        </>
    );
};

export default AchievementsList;
