import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(4),
        height: theme.spacing(10),
        border: '1px solid #999',
        borderRadius: theme.spacing(1),
        borderTopColor: '#BD3A1C',
        borderTopWidth: theme.spacing(1)
    },
    box: {
        height: theme.spacing(4),
    }
}))

export default function Title({ title, dueDate }) {
    const { container, box } = useStyles()

    return (
        <Container className={container}>
            <Box className={box}>
                {dueDate && <Typography>{dueDate}</Typography>}
                <Typography variant="subtitle2">
                    {title}
                </Typography>
            </Box>
        </Container >
    )
}