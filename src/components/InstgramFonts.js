import { Typography, Container, Card, CardContent, CardActions, Grid, TextField, Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { memo } from 'react';
import { useState } from 'react';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const instgramFonts = memo(() => {
    let [text, setText] = useState("This is the default text");
    return (
        <div>
            <Container>
                <Typography variant="h6" >Instagram Font Generator</Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Elevate your Instagram profile with our Instagram Font Generator! Choose from unique fonts for captivating captions and bios, easily formatted for standout posts.
                </Typography>
                <Card sx={{
                    minWidth: 200, marginBottom: 4
                }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            1. Insert Your Text To Convert
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            multiline="true"
                            fullWidth="true"
                            defaultValue={text}
                            onChange={(e) => {
                                setText(e.target.value);
                            }}
                        />
                    </CardActions>
                </Card>
                <Typography>2. Your Formatted Text</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item>
                            <Typography textAlign="left">Bold</Typography>

                            <Box sx={{ fontWeight: 'bold', m: 1 }}>{text}</Box>

                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Typography textAlign="left">Italic</Typography>

                            <Box marginTop={2} sx={{ fontStyle: 'italic' }}>{text}</Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Typography textAlign="left">Superscript Chars</Typography>
                            <Box marginTop={2}><span>
                                <sup>{text}</sup>
                            </span>
                            </Box>

                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Typography textAlign="left">Cursive</Typography>
                            <Box sx={{ fontFamily: 'cursive' }}>{text}</Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Typography>Strike</Typography>

                            <Box marginTop={2}>
                                nOT FOUNT
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Typography>Test 3</Typography>
                            <Box marginTop={2} sx={{ fontFamily: 'bolditalic' }}>Your text</Box>

                        </Item>
                    </Grid>
                </Grid>
            </Container>

        </div >
    )
})

export default instgramFonts