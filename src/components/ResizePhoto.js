import React, { memo } from 'react'
import { Typography, Container, Card, CardContent, CardActions, Button, Grid, Box, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { MarginRounded } from '@mui/icons-material';
import { saveAs } from 'file-saver';
import styles from "../App.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ResizePhoto = memo(() => {
    const defaultSrc = "/placeholder.jpg";
    const [image, setImage] = useState(defaultSrc);
    const [cropData, setCropData] = useState("");
    const [cropper, setCropper] = useState(null);
    const [clickable, setClickable] = useState(false);

    function handleChange(e) {
        console.log(e.target.files);
        // setImage(URL.createObjectURL(e.target.files[0]));
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
        setClickable(true);

    }
    function reset() {
        setImage(defaultSrc);
        setCropData("");
        if (clickable) setClickable(false)

    }
    function downloadCopperdImage() {
        // getCropData();
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL(), () => saveAs(cropData, 'image.jpg')
            );
        }
        console.log("this is download");
        saveAs(cropData, 'image.jpg') // Put your image URL here.
        console.log(cropData);
    }
    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }
    };
    return (
        <div>
            <Container>
                <Typography variant="h6" >Resize a Photo for Instagram</Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Free, easy, no login. Just upload your photo, resize it for Instagram and download.
                </Typography>
                <Card sx={{ minWidth: 200, marginBottom: 4 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }}>
                            1. Insert Your Text To Convert
                        </Typography>
                    </CardContent>



                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Item>
                                <Typography textAlign="left" paddingBottom={2}>
                                    1. Upload a photo
                                </Typography>

                                <input type="file" onChange={handleChange} />
                                <Button id="leftbutton" variant="contained" color="primary" component="span" onClick={getCropData}>
                                    Crop Image
                                </Button>
                                {/* <img src={file} /> */}
                                <div className="splitdiv" id="rightdiv">
                                    <div id="itemdivcard">
                                        <Typography>Cropped image will apear here!</Typography>

                                        <Cropper
                                            className="cropper"
                                            zoomTo={0.5}
                                            initialAspectRatio={1}
                                            src={image}
                                            viewMode={1}
                                            minCropBoxHeight={10}
                                            minCropBoxWidth={10}
                                            maxLength={10}
                                            maxWidt={10}
                                            background={false}
                                            responsive={true}
                                            autoCropArea={1}
                                            checkOrientation={false}
                                            onInitialized={(instance) => {
                                                setCropper(instance);
                                            }}
                                            guides={true}

                                        />
                                    </div>
                                    <Button variant="outlined" onClick={reset} xs={MarginRounded}>Reset</Button>

                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <Typography textAlign="left" paddingBottom={2}>
                                    2. Select a size
                                </Typography>
                                <Grid container>
                                    <Box
                                        sx={{
                                            boxShadow: 1,
                                            width: '8rem',
                                            height: '5rem',
                                            paddingTop: 2
                                        }}>
                                        <Card>
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography variant="body2" color="text.secondary">
                                                        16 : 9
                                                    </Typography>
                                                    <Typography>
                                                        landscape
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Box>

                                    <Box
                                        sx={{
                                            boxShadow: 2,
                                            width: '8rem',
                                            height: '5rem',
                                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                            color: (theme) =>
                                                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                            p: 1,
                                            m: 1,
                                            borderRadius: 2,
                                            textAlign: 'center',
                                            fontSize: '0.875rem',
                                            fontWeight: '700',
                                        }}
                                    >
                                        boxShadow: 2
                                    </Box>
                                    <Box
                                        sx={{
                                            boxShadow: 3,
                                            width: '8rem',
                                            height: '5rem',
                                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                            color: (theme) =>
                                                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                            p: 1,
                                            m: 1,
                                            borderRadius: 2,
                                            textAlign: 'center',
                                            fontSize: '0.875rem',
                                            fontWeight: '700',
                                        }}
                                    >
                                        boxShadow: 3
                                    </Box>
                                </Grid>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    p: 1,
                                    m: 1,
                                    bgcolor: 'background.paper',
                                    borderRadius: 1,
                                    justifyContent: 'space-around'
                                }}>
                                    <Card className={styles.landscapeSize}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    16 : 9
                                                </Typography>
                                                <Typography>
                                                    landscape
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    <Card className={styles.squareSize}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    1
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    square
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    <Card className={styles.portraitSize}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    4:5
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    portrait
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    p: 1,
                                    m: 1,
                                    bgcolor: 'background.paper',
                                    borderRadius: 1,
                                    justifyContent: 'space-around'
                                }}>
                                    <Card className={styles.storySize}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    9 : 16
                                                </Typography>
                                                <Typography>
                                                    story
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    <Card className={styles.customSize}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    custom
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Box>
                                <Typography textAlign="left" paddingBottom={2}>
                                    3. Download
                                </Typography>
                                <Button onClick={downloadCopperdImage} disabled={!clickable}
                                    variant="contained" color="primary" component="span">
                                    Download
                                </Button>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            {cropData ? (
                                <img style={{ height: "50%" }} src={cropData} alt="cropped" />
                            ) : (
                                <h1>Cropped image will apear here!</h1>
                            )}
                        </Grid>
                    </Grid>
                    <CardActions>

                    </CardActions>
                </Card>

            </Container >
        </div >
    )
})

export default ResizePhoto