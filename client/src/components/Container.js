import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    classroomcontainer: {
        display: 'flex',
        flex: '1px 2px 2px 1px'
    }
}))

export const ClassroomContainer = ({ children }) => {
    const { classroomcontainer } = useStyles()
    return (
        <div className={classroomcontainer}>
            {children}
        </div>
    )
}

export const HomeContainer = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}