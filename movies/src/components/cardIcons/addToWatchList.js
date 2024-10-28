import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

const AddToWatchListIcon = () => {
    return (
        <IconButton aria-label="add to watch list">
            <PlaylistAddIcon color="secondary" fontSize="large"/>
        </IconButton>
    );
};

export default AddToWatchListIcon