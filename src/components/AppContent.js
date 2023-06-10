import { useState, useEffect } from 'react';

import FreshIdeasList from 'components/FreshIdeasList';
import Title from 'components/Title';
import DashedLine from 'components/DashedLine';
import CustomSlider from 'components/Carousel/Carousel';
import CompleteIdeas from './CompleteIdeas';
import AchievementsList from './AchievementsList';

import { Container, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setIdeas } from 'store/listSlice';
import { setCompleted } from 'store/listSlice';

import { useSelector } from 'react-redux';
import { selectIdeas, selectCompletedIdeas } from 'store/listSlice';
import postIdeas from 'services/postIdeas';
import getIdeasList from 'services/getIdeasList';

const AppContent = () => {
    const dispatch = useDispatch();

    const [ideasList, setIdeasList] = useState(null)
    const [completedIdeasList, setCompletedIdeasList] = useState(null)

    const ideasListSave = useSelector(selectIdeas);
    const completedIdeasSave = useSelector(selectCompletedIdeas);

    useEffect(() => {
        if (completedIdeasList && completedIdeasList.length > 0) dispatch(setCompleted(completedIdeasList));

        if (ideasList && ideasList.length > 0) dispatch(setIdeas(ideasList));
    }, [ideasList, completedIdeasList]);

    const save = () => {
        postIdeas('postIdeasList', ideasListSave);
        postIdeas('postCompletedIdeas', completedIdeasSave);
    };

    const load = () => {
        getIdeasList('getIdeasList').then((response) => setIdeasList(response.data));
        getIdeasList('getCompletedIdeas').then((response) => setCompletedIdeasList(response.data));
    };

    return (
        <>
            <Button onClick={save}>Save</Button>
            <Button onClick={load}>Load</Button>
            <Container sx={{ mt: 4 }}>
                <Title title={'Choose fresh ideas to do'} />
                <FreshIdeasList />

                <DashedLine margin={'50px 0px'} thickness={3} />
                <Title title={'Ideas in my list'} />
                <CustomSlider />

                <DashedLine margin={'50px 0px'} thickness={3} />
                <Title title={'Achievements'} />
                <AchievementsList />

                <DashedLine margin={'50px 0px'} thickness={3} />
                <Title title={'Completed challenges'} />
                <CompleteIdeas />
            </Container>
        </>
    );
};

export default AppContent;
