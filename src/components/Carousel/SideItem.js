import { Card, Typography, CardContent, Grid } from '@mui/material';

const SideItem = (props) => {
    const { idea = null, flag } = props
    return (
        <>
            {flag && idea && (
                <Grid item justifySelf='center' alignSelf='center'>
                    <Card
                        sx={{
                            minWidth: 200,
                            maxWidth: 200,
                            textAlign: 'center',
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant='body1'
                                sx={{
                                    height: 150,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                {idea.activity}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )}
        </>
    );
};

export default SideItem;
