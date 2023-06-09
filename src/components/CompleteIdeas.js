import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

import prepareStatus from 'utils/prepareStatus';
import { selectCompletedIdeas } from 'store/listSlice';
import { useSelector } from 'react-redux';

const CompleteIdeas = () => {
    const completedIdeas = useSelector(selectCompletedIdeas);
    return (
        <TableContainer component={Paper} sx={{ border: '1px solid var(--dark)' }}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ borderBottom: '1px solid var(--dark)' }}></TableCell>
                        <TableCell
                            align='left'
                            sx={{
                                borderBottom: '1px solid var(--dark)',
                                borderLeft: '1px solid var(--dark)',
                            }}
                        >
                            Title
                        </TableCell>
                        <TableCell align='center' sx={{ borderBottom: '1px solid var(--dark)' }}>
                            Type
                        </TableCell>
                        <TableCell align='center' sx={{ borderBottom: '1px solid var(--dark)' }}>
                            When
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {completedIdeas.map((idea, index) => (
                        <TableRow key={idea.key}>
                            <TableCell sx={{ borderRight: '1px solid var(--dark)' }} align='center'>
                                {index + 1}
                            </TableCell>
                            <TableCell>{idea.activity}</TableCell>
                            <TableCell align='center'>{idea.type}</TableCell>
                            <TableCell align='center'>{prepareStatus(idea.date)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CompleteIdeas;
