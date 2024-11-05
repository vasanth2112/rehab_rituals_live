import "../Gallery/Gallery.scss";
import { GALLERY_IMAGES } from "../../ListConstants.js";
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function GalleryContainer() {
    const [open, setOpen] = React.useState(false); // State to control the modal
    const [selectedImage, setSelectedImage] = React.useState(null); // State to store the selected image

    // Open the modal with the clicked image
    const handleClickOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    // Close the modal
    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <div id="gallery" className="gallery-container">
            <h1>Growth Gallery</h1>

            <div className="image-container">
                <Box className="box_scroll" sx={{ width: '100%', height: 600, overflowY: 'scroll' }}>
                    <ImageList variant="masonry" cols={3} gap={15}>
                        {GALLERY_IMAGES.map((item) => (
                            <ImageListItem key={item.img} onClick={() => handleClickOpen(item.img)}

                                className={open ? '' : 'hoverable'}>
                                <img

                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </div>


            {/* Dialog Modal */}
            {/* <Dialog open={open} onClose={handleClose} maxWidth="md"
                sx={{
                    width: '100%',
                    backdropFilter: 'blur(5px)', // Optional: Add a blur effect on the background
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent background
                    boxShadow: 'none',
                }}>

                <CloseIcon onClick={handleClose}
                    sx={{
                        padding: '10px',
                         // Removes padding around the icon
                        cursor: 'pointer',
                        borderRadius: '50',
                    }} />

                {/* <DialogActions> */}
                {/* <IconButton edge="end" color="inherit"  aria-label="close" */}


                {/* </IconButton> */}
                {/* </DialogActions> */}
                {/* <DialogContent sx={{ padding: 0 }}>
                    <img
                        src={selectedImage}
                        alt="Selected"
                        style={{
                            width: '100%',     // Ensure the image width is 100% of the modal
                            height: '100%',    // Auto height to maintain aspect ratio
                            objectFit: 'contain', // Ensure the entire image is contained within the modal without distortion
                        }}
                    />
                </DialogContent> */}
            {/* </Dialog> */}
        </div>
    );
}
