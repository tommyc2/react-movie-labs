import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

const AddToWatchListIcon = ({movie}) => {
    const context = useContext(MoviesContext);

    const handleAddToWatchList = (e) => {
        e.preventDefault();
        context.addToWatchList(movie);
    };

    return (
        <IconButton aria-label="add to watch list" onClick={handleAddToWatchList}>
            <PlaylistAddIcon color="secondary" fontSize="large"/>
        </IconButton>
    );
};

export default AddToWatchListIcon