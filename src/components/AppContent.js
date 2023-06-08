import { useEffect } from 'react';

import FreshIdeasList from 'components/FreshIdeasList';
import Title from 'components/Title';
import DashedLine from 'components/DashedLine';
import CustomSlider from 'components/Carousel/Carousel';
import CompleteIdeas from './CompleteIdeas';

import freshIdeas from 'mocks/freshIdeas';

import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setIdeas } from 'store/listSlice';
import { setCompleted } from 'store/listSlice';

const AppContent = () => {
    const dispatch = useDispatch();
    const ideasList = JSON.parse(localStorage.getItem('ideasList'));
    const completedIdeas = JSON.parse(localStorage.getItem('completedIdeas'));

    useEffect(() => {
        if (completedIdeas) dispatch(setCompleted(completedIdeas));

        if (ideasList && ideasList.length > 0) dispatch(setIdeas(ideasList));
        else dispatch(setIdeas(freshIdeas));
    }, []);

    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Title title={'Choose fresh ideas to do'} />
                <FreshIdeasList />

                <DashedLine margin={'50px 0px'} thickness={3} />
                <Title title={'Ideas in my list'} />
                <CustomSlider />

                <DashedLine margin={'50px 0px'} thickness={3} />
                <Title title={'Achievements'} />
                {/* Achiviements */}

                <DashedLine margin={'50px 0px'} thickness={3} />
                <Title title={'Completed challenges'} />
                <CompleteIdeas />
            </Container>
        </>
    );
};

export default AppContent;
