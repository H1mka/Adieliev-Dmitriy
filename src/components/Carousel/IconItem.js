import { Grid, IconButton } from "@mui/material";

const IconItem = (props) => {
    const { icon, handleChange } = props
    return(
        <Grid item justifySelf='center' alignSelf='center'>
            <IconButton onClick={handleChange} size='large'>
                {icon}
            </IconButton>
        </Grid>
    )
}

export default IconItem;