import "../Gallery/Gallery.scss";
import { GALLERY_IMAGES } from "../../ListConstants.js";
import React, { useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import dontworry from "../../../public/gallery/dontworry.json";
import Lottie from "lottie-web";
import useScrollReveal from "../../useScrollReveal.js";

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'transparent',
    p: 4,
};

export default function GalleryContainer() {
    useScrollReveal();
    const [open, setOpen] = React.useState(false); // State to control the modal
    const [selectedImageIndex, setSelectedImageIndex] = React.useState(null); // State to store index of selected image

    const beHappyAnimation = useRef(null);

    useEffect(() => {
        const dontworryAnimation = Lottie.loadAnimation({
            container: beHappyAnimation.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: dontworry,
        });

        return () => {
            dontworryAnimation.destroy();
        };
    }, []);



    // Navigation functions for slider modal
    const handlePrev = () => {
        setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1));
    };

    const handleNext = () => {
        setSelectedImageIndex((prev) => (prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0));
    };

    // Keyboard controls for the modal slider
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!open) return;
            if (e.key === "ArrowLeft") {
                handlePrev();
            } else if (e.key === "ArrowRight") {
                handleNext();
            } else if (e.key === "Escape") {
                handleClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open]);

    // Open the modal with the clicked image
    const handleClickOpen = (imageSrc) => {
        const idx = GALLERY_IMAGES.findIndex((item) => item.img === imageSrc);
        setSelectedImageIndex(idx !== -1 ? idx : 0);
        setOpen(true);
    };

    // Close the modal
    const handleClose = () => {
        setOpen(false);
        setSelectedImageIndex(null);
    };

    return (
        <div id="gallery" className="gallery-container">
            <div className="gallery-header reveal">
                <h1>Children’s <span>Journey</span></h1>
                <p className="section-subtitle">A visual celebration of our children's active learning, physical milestones, and joyful developmental achievements.</p>
            </div>

            <div className="image-container reveal reveal-scale">

                <ImageList
                    className="box_scroll" sx={{ width: '100%', height: 600, padding: '12px', overflowY: 'scroll' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={'100%'}
                    gap={10}
                >
                    {GALLERY_IMAGES.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}
                            onClick={() => handleClickOpen(item.img)}

                            className={open ? '' : 'hoverable'}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>

            <div ref={beHappyAnimation} className="beHappyAnime"></div>


            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(8px)",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                }}
            >
                {/* Wrapper for positioning elements correctly */}
                <Box sx={{ 
                    position: 'relative', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    outline: 'none',
                    p: 2,
                    maxWidth: '95vw',
                    maxHeight: '95vh',
                }}>
                    {/* IconButton positioned outside/top-right of modal content */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            color: '#fff',
                            top: -24,
                            right: -24,
                            bgcolor: 'rgba(0, 0, 0, 0.5)',
                            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' },
                            zIndex: 1301, // Ensures it's above modal content
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Main Image Slider Row */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2, md: 3 }, position: 'relative' }}>
                        {/* Prev Button */}
                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                color: '#fff',
                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.25)' },
                                width: { xs: 36, sm: 48 },
                                height: { xs: 36, sm: 48 },
                            }}
                        >
                            <ChevronLeftIcon sx={{ fontSize: { xs: 24, sm: 32 } }} />
                        </IconButton>

                        {/* Active Image */}
                        <Box sx={{ 
                            position: 'relative', 
                            borderRadius: '12px', 
                            overflow: 'hidden', 
                            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <img
                                src={GALLERY_IMAGES[selectedImageIndex]?.img}
                                alt="Gallery View"
                                className="imgGallery"
                                style={{ display: 'block', borderRadius: '12px', maxHeight: '60vh', objectFit: 'contain' }}
                            />
                        </Box>

                        {/* Next Button */}
                        <IconButton
                            onClick={handleNext}
                            sx={{
                                color: '#fff',
                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.25)' },
                                width: { xs: 36, sm: 48 },
                                height: { xs: 36, sm: 48 },
                            }}
                        >
                            <ChevronRightIcon sx={{ fontSize: { xs: 24, sm: 32 } }} />
                        </IconButton>
                    </Box>

                    {/* Horizontal scrollbar of thumbnails */}
                    <Box 
                        className="modal-thumbnails"
                        sx={{
                            display: 'flex',
                            gap: 1.5,
                            overflowX: 'auto',
                            width: '100%',
                            maxWidth: { xs: '300px', sm: '400px', md: '450px', lg: '500px' },
                            mt: 3,
                            pb: 1,
                            justifyContent: GALLERY_IMAGES.length < 6 ? 'center' : 'flex-start',
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#004aad transparent',
                            '&::-webkit-scrollbar': {
                                height: '6px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                bgcolor: '#004aad',
                                borderRadius: '3px',
                                '&:hover': {
                                    bgcolor: '#61dafb',
                                }
                            },
                            '&::-webkit-scrollbar-track': {
                                bgcolor: 'rgba(0, 74, 173, 0.05)',
                                borderRadius: '3px',
                            }
                        }}
                    >
                        {GALLERY_IMAGES.map((item, index) => (
                            <Box
                                key={index}
                                component="img"
                                src={item.img}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setSelectedImageIndex(index)}
                                sx={{
                                    width: 60,
                                    height: 60,
                                    objectFit: 'cover',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    opacity: selectedImageIndex === index ? 1 : 0.5,
                                    border: '2px solid',
                                    borderColor: selectedImageIndex === index ? '#61dafb' : 'transparent',
                                    transform: selectedImageIndex === index ? 'scale(1.05)' : 'none',
                                    '&:hover': {
                                        opacity: 0.8,
                                        transform: 'scale(1.02)',
                                    }
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
