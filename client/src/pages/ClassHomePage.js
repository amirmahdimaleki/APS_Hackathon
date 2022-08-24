import DynaWidget from "../components/DynaWidget";
// import { makeStyles } from "@material-ui/core";

export default function ClassHomePage() {
    return (
        <DynaWidget title='Class 1' dueDate={Date.now()} />
    )
}