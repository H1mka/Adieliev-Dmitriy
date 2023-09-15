import { useState, useEffect } from 'react';
import SideItem from './SideItem';
import CentralItem from './CentralItem';
import IconItem from './IconItem';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, Typography, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIdeas } from 'store/listSlice';

const CustomSlider = () => {
    const ideas = useSelector(selectIdeas);

    const [mainIndex, setMainIndex] = useState(1);
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(0);

    useEffect(() => {
        setRightIndex(mainIndex < ideas.length - 1 ? mainIndex + 1 : null);
        setLeftIndex(mainIndex > 0 ? mainIndex - 1 : null);
    }, [mainIndex, ideas]);

    useEffect(() => {
        // if there 1 idea, start with the first
        ideas.length === 1 && setMainIndex(0);
    }, [ideas]);

    const completeTask = () => {
        if (mainIndex === ideas.length - 1 && ideas.length > 1) setMainIndex(ideas.length - 2);
    };

    // Switching left
    const handleChangeDec = () => {
        if (mainIndex > 0) setMainIndex(mainIndex - 1);
    };

    // Switching right
    const handleChangeInc = () => {
        if (mainIndex < ideas.length - 1) setMainIndex(mainIndex + 1);
    };

    return (
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            {ideas.length ? (
                <>
                    <IconItem
                        icon={<ArrowBackIcon sx={{ fontSize: 35 }} />}
                        handleChange={handleChangeDec}
                    />

                    <SideItem idea={ideas[leftIndex]} flag={leftIndex != null} />

                    <CentralItem idea={ideas[mainIndex]} completeTask={completeTask} />

                    <SideItem idea={ideas[rightIndex]} flag={rightIndex} />

                    <IconItem
                        icon={<ArrowForwardIcon sx={{ fontSize: 35 }} />}
                        handleChange={handleChangeInc}
                    />

                    <Grid item xs={12}>
                        <Typography variant='h6' sx={{ textAlign: 'center', mt: 5 }}>
                            {mainIndex + 1} / {ideas.length}
                        </Typography>
                    </Grid>
                </>
            ) : (
                <Skeleton variant='rectangular' width={450} height={250} />
            )}
        </Grid>
    );
};

export default CustomSlider;
