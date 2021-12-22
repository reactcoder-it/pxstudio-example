import { Box, Container, Typography } from '@mui/material'
import { descriptionStyle, subtitleStyle, title2Style } from '../../styles/defaultStyles'

type Props = {
  subtitle: string
  title: string
  description: string
}

export default function OrientSection({ subtitle, title, description }: Props) {
  return (
    <Box sx={{
      py: { xs: 2, sm: 4, md: 2 },
      pl: { xs: 2, sm: 3, md: 8 },
      pr: { xs: 2, sm: 3, md: 8 },
    }}>
      <Container>
        <Typography component="h3" sx={{ ...subtitleStyle, textAlign: 'center' }}>{subtitle}</Typography>
        <Typography component="h2" sx={{ ...title2Style, textAlign: 'center', mt: 3, maxWidth: 700, ml: 'auto', mr: 'auto' }}>{title}</Typography>
        <Typography sx={{ ...descriptionStyle, mt: 4, textAlign: 'center', maxWidth: 800, ml: 'auto', mr: 'auto' }}>{description}</Typography>
      </Container>
    </Box>
  )
}