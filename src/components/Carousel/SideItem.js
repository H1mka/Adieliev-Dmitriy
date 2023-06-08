import { Height } from '@mui/icons-material';
import { Card, Typography, CardContent, Grid } from '@mui/material';

const SideItem = (props) => {
    return (
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
                        {props.type}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default SideItem;
