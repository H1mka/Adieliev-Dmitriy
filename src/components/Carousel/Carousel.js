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
    const ideas = useSelector(selectIdeas);

    const [mainIndex, setMainIndex] = useState(0);
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(0);

    useEffect(() => {
        setRightIndex(mainIndex < ideas.length - 1 ? mainIndex + 1 : null);
        setLeftIndex(mainIndex > 0 ? mainIndex - 1 : null);
    }, [mainIndex, ideas]);

    // adding ideas in progress to localstorage
    useEffect(() => {
        setMainIndex(ideas.length > 1 ? 1 : 0); // if there are more than 1 ideas, start whith central, otherwise with the frist
        localStorage.setItem('ideasList', JSON.stringify(ideas));
    }, [ideas]);

    const completeTask = () => {
        if (mainIndex === ideas.length - 1 && ideas.length > 1) setMainIndex(ideas.length - 2);
    };

    const handleChangeDec = () => {
        if (mainIndex > 0) setMainIndex(mainIndex - 1);
    };

    const handleChangeInc = () => {
        if (mainIndex < ideas.length - 1) setMainIndex(mainIndex + 1);
    };

    return (
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            {ideas.length && (
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
                        <Typography sx={{ textAlign: 'center', mt: 5 }}>
                            {mainIndex + 1} / {ideas.length}
                        </Typography>
                    </Grid>
                </>
            )}
        </Grid>
    );
};

export default CustomSlider;
