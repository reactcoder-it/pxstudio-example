import NextLink from 'next/link'
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import { titleStyle, subtitleStyle, descriptionStyle, buttonStyle } from '../../styles/defaultStyles'
import { ReactElement } from 'react'

type Props = {
  subtitle: string
  title: string
  description: string
  btnLabel: string
  btnLink: string
  image: ReactElement
  children?: ReactElement
}

export default function Hero({ subtitle, title, description, btnLabel, btnLink, image, children }: Props) {
  return (
    <Box component="section" sx={{
      pt: { xs: children ? 16 : 12 },
      pb: { xs: 0, sm: 0, md: 12 },
      pl: { xs: 2, sm: 3, md: 8 },
      pr: { xs: 2, sm: 3, md: 8 },
      minHeight: { xs: 'auto', md: 'calc(720px)' },
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container maxWidth="lg">
        <Grid container sx={{ alignItems: 'center' }}>
          <Grid item xs={12} sm={6} md={7}>
            <Typography component="h3" sx={{ ...subtitleStyle }}>{subtitle}</Typography>
            <Typography component="h1" sx={{ ...titleStyle,  mt: 3 }}>{title}</Typography>
            <Typography sx={{ ...descriptionStyle, maxWidth: 500, mt: 4 }}>{description}</Typography>
            <NextLink href={btnLink} passHref>
              <Button variant="contained" color="primary" sx={{ ...buttonStyle, mt: 4 }}>{btnLabel}</Button>
            </NextLink>
            {children}
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Box sx={{ display: 'flex' }}>
              {image}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

