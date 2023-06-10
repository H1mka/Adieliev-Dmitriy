import { Paper, Box, Typography, Grid } from '@mui/material';

const AchievementsItem = (props) => {
    const { type = String.prototype, count } = props;
    return (
        <Grid item lg={4} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box>
                <Paper
                    sx={{
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant='h5' align='center' sx={{ fontSize: 42, }}>{count}</Typography>
                </Paper>
                <Typography align='center' variant='h5'>
                    {type[0].toUpperCase() + type.slice(1)}
                </Typography>
            </Box>
        </Grid>
    );
};

export default AchievementsItem;
