import { Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#18212c' : '#fffff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    justifyItems: "center",
    alignContent: "center",
    flexGrow: 1,
    border: "3px solid grey",
    margin: 2
})) as typeof Paper;

export default Item;
