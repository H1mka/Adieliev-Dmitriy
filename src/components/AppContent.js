import { useEffect } from 'react';
import FreshIdeasList from 'components/FreshIdeasList';
import Title from 'components/Title';
import DashedLine from 'components/DashedLine';
import CustomSlider from 'components/Carousel/Carousel';
import freshIdeas from 'mocks/freshIdeas';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setIdeas } from 'store/listSlice';

const AppContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIdeas(freshIdeas));
    }, []);

    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Title title={'Choose fresh ideas to do'} />
                <FreshIdeasList />
                <DashedLine margin={'50px 0px'} thickness={3} />
                <Title title={'Ideas in my list'} />
                <CustomSlider />
            </Container>
        </>
    );
};

export default AppContent;
