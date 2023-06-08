import { useState, useEffect } from 'react';
import SideItem from './SideItem';
import CentralItem from './CentralItem';
import { Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSelector } from 'react-redux';
import { selectIdeas } from 'store/listSlice';

const CustomSlider = () => {
    const order = useSelector(selectIdeas);

    const [mainIndex, setMainIndex] = useState(2);
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(0);

    useEffect(() => {
        console.log(order.length);
        setRightIndex(mainIndex < order.length - 1 ? mainIndex + 1 : null);
        setLeftIndex(mainIndex > 0 ? mainIndex - 1 : null);
    }, [mainIndex, order]);

    const handleChangeDec = () => {
        if (mainIndex > 0) setMainIndex(mainIndex - 1);
    };

    const handleChangeInc = () => {
        if (mainIndex < order.length - 1) setMainIndex(mainIndex + 1);
    };

    return (
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            {order.length && (
                <>
                    <Grid item justifySelf='center' alignSelf='center'>
                        <IconButton onClick={handleChangeDec}>
                            <ArrowBackIcon />
                        </IconButton>
                    </Grid>
                    {leftIndex != null && (
                        <SideItem type={order[leftIndex].activity} />
                    )}

                    <CentralItem
                        activity={order[mainIndex].activity}
                        type={order[mainIndex].type}
                    />

                    {rightIndex && (
                        <SideItem type={order[rightIndex].activity} />
                    )}
                    <Grid item justifySelf='center' alignSelf='center'>
                        <IconButton onClick={handleChangeInc} size='large'>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ textAlign: 'center', mt: 5 }}>
                            {mainIndex + 1} / {order.length}
                        </Typography>
                    </Grid>
                </>
            )}
        </Grid>
    );
};

export default CustomSlider;
