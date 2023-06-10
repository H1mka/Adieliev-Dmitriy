import { useState, useEffect } from 'react'
import { AppBar, Box, Button, Toolbar } from "@mui/material";

import { useDispatch } from 'react-redux';
import { setIdeas } from 'store/listSlice';
import { setCompleted } from 'store/listSlice';

import { useSelector } from 'react-redux';
import { selectIdeas, selectCompletedIdeas } from 'store/listSlice';
import postIdeas from 'services/postIdeas';
import getIdeasList from 'services/getIdeasList';

const Header = () => {
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

    const upLoad = () => {
        getIdeasList('getIdeasList').then((response) => setIdeasList(response.data));
        getIdeasList('getCompletedIdeas').then((response) => setCompletedIdeasList(response.data));
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='text' size="large" color="inherit" onClick={save}>Save</Button>
                    <Button variant='text' size="large" color="inherit" onClick={upLoad}>UpLoad</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;