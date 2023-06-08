import { useState, useEffect } from 'react';
import SideItem from './SideItem';
import CentralItem from './CentralItem';
import IconItem from './IconItem';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIdeas } from 'store/listSlice';


const CustomSlider = () => {
    const order = useSelector(selectIdeas);

    const [mainIndex, setMainIndex] = useState(2);
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(0);

    useEffect(() => {
        setRightIndex(mainIndex < order.length - 1 ? mainIndex + 1 : null);
        setLeftIndex(mainIndex > 0 ? mainIndex - 1 : null);
        console.log('MainIndex:', mainIndex)
    }, [mainIndex, order]);

    const completeTask = () => {
        if(mainIndex === order.length - 1 && order.length > 1)
            setMainIndex(order.length - 2)
    }

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
                    <IconItem icon={<ArrowBackIcon />} handleChange={handleChangeDec}/>

                    <SideItem idea={order[leftIndex]} flag={leftIndex != null} />

                    <CentralItem idea={order[mainIndex]} completeTask={completeTask} />

                    <SideItem idea={order[rightIndex]} flag={rightIndex} />

                    <IconItem icon={<ArrowForwardIcon />} handleChange={handleChangeInc}/>

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
