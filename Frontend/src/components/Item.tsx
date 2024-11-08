import { Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#18212c' : '#fffff',
    ...theme.typography.body2,
    height: 400,
    width: 'fit-content',
    color: theme.palette.text.secondary,
    justifyItems: "center",
    alignContent: "center",
    flexGrow: 1,
})) as typeof Paper;

export default Item;
