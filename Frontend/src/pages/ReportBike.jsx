import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export function ReportBike() {
    return (
        <>
            <Paper
                className="MainContentContainer MainCenter"
                sx={{ maxWidth: 600 }}
            >
                <Container>
                    <Typography component="h1" variant="h4" align="center">
                        Support
                    </Typography>
                    <Typography
                        component="body1"
                        align="center"
                        display={"block"}
                        textAlign={"center"}
                        paddingTop={"1rem"}
                    >
                        Something not working well? A bike needs to be repaired?
                        🛠️ <br></br>
                        Do you want to share feedback to improve our service?
                        <br></br>
                        Send us a message and we'll get in touch with you{" "}
                        <em>right away!</em>
                    </Typography>
                    <Box textAlign="center">
                        <div class="form-textarea">
                            <label for="exampleFormControlTextarea1"></label>
                            <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="8"
                                placeholder="Write your message here"
                            ></textarea>
                        </div>
                        <Button
                            className="white-font-hovering"
                            variant="contained"
                            href="/reportbike"
                            // onClick={}
                            sx={{ mt: 0.1, ml: 1, mb: 3, marginTop: "1rem" }}
                        >
                            Send
                        </Button>
                    </Box>
                </Container>
            </Paper>
        </>
    );
}
