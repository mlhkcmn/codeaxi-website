import { Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Container sx={{padding: '20px 0', textAlign: 'center'}} maxWidth="lg">
                <Typography>
                    CodeAxi Software Copyright©. Tüm hakları saklıdır.
                </Typography>
            </Container>
        </>
    )
}

export default Footer