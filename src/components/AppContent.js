import FreshIdeasList from 'components/FreshIdeasList';
import Title from 'components/Title';
import DashedLine from 'components/DashedLine';
import CustomSlider from 'components/Carousel/Carousel';
import CompleteIdeas from './CompleteIdeas';
import AchievementsList from './AchievementsList';
import Header from './Header';

import { Container } from '@mui/material';

const AppContent = () => {
    return (
        <>
            <Header />
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
