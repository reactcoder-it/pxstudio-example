import { Box, Container, Typography, Button } from '@mui/material'
import NextLink from 'next/link'
import { buttonStyle, descriptionStyle, title2Style, subtitleStyle } from '../../styles/defaultStyles'

type Props = {
  subtitle?: string
  title: string
  content: string
  action: string
}

export default function CTA({ subtitle, title, action, content }: Props) {
  return (
    <Box
      component="section"
      sx={{
        pl: { xs: 0, sm: 2, md: 4, lg: 8 },
        pr: { xs: 0, sm: 2, md: 4, lg: 8 },
        pt: { xs: 0, sm: 2, md: 4, lg: 8 }
      }}
    >
      <Box sx={{
        background: '#000',
        pt: { xs: 4, sm: 4, md: 6, lg: 8 },
        px: { xs: 2 },
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
      }}>
        <Container>
          {subtitle && (
            <Typography component="h2" sx={{ ...subtitleStyle, color: '#fff', textAlign: 'center', mb: 3 }}>
              {subtitle}
            </Typography>
          )}
          <Typography component="h2" sx={{ ...title2Style, color: '#fff', textAlign: 'center' }}>
            {title}
          </Typography>
          <Typography sx={{ ...descriptionStyle, color: '#fff', textAlign: 'center', mt: 4, maxWidth: 700, ml: 'auto', mr: 'auto' }}>
            {content}
          </Typography>
          <Box sx={{ pt: { xs: 2, sm: 4 }, py: { xs: 4, md: 8 }, textAlign: 'center' }}>
            <NextLink href="/contacts" passHref>
              <Button color="primary" variant="contained" sx={{ ...buttonStyle }}>
                {action}
              </Button>
            </NextLink>
          </Box>
          <Box sx={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, .2)' }}></Box>
        </Container>
      </Box>
    </Box>
  )
}