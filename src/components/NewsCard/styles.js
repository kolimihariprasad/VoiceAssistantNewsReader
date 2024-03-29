import {makeStyles} from '@material-ui/core';

export default makeStyles({
    media: {
        height: 180,
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '75%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
        
    },
    activeCard: {
        borderBottom: '10px solid #22289a',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px',
        fontSize:'3px',
    },
    title: {
        padding: '0 8px',
        fontSize:'16px',
        fontWeight:'bold'
    },
    description:{
        fontSize:'12px',
        textOverflow:'hidden',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize:'8px',
    },
});