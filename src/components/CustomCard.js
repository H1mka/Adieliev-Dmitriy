import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import DashedLine from './DashedLine';

const CustomCard = (props) => {
    const { activity, type, handleChange = Function.prototype } = props;
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
            }}
            raised
        >
            <CardActionArea onClick={handleChange}>
                <CardContent>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 150,
                        }}
                    >
                        <Typography
                            gutterBottom
                            align='center'
                            variant='body1'
                            component='div'
                            sx={{ margin: 0 }}
                        >
                            {activity}
                        </Typography>
                    </div>
                </CardContent>
                <DashedLine margin='0px 0 20px 0' thickness={3} />
                <Typography gutterBottom align='center' variant='body1' component='div'>
                    {type}
                </Typography>
            </CardActionArea>
        </Card>
    );
};

export default CustomCard;
