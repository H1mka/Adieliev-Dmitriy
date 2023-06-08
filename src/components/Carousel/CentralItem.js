import CustomCard from 'components/CustomCard';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { completeIdea } from 'store/listSlice';

const CentralItem = (props) => {
    let { idea, completeTask } = props
    const dispatch = useDispatch();

    const date = String(new Date())
    idea = {...idea, date}
    const changeLocalStorage = () => {
        const localData = JSON.parse(localStorage.getItem('completedIdeas'))
        localStorage.setItem('completedIdeas', JSON.stringify(localData ? [...localData, idea] : [idea]))
    }   
    return (
        <Grid item xs={4}>
            <CustomCard
                activity={idea.activity}
                type={idea.type}
                handleChange={() => {
                    completeTask()
                    dispatch(completeIdea(idea));
                    changeLocalStorage()
                }}
            />{' '}
        </Grid>
    );
};

export default CentralItem;
