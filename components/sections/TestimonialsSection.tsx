import { Box, Paper, Container, Typography, Grid } from '@mui/material'
import { greyPaperStyle, subtitleStyle, title2Style, title3Style, descriptionStyle } from '../../styles/defaultStyles'

type TestimonialItem = {
  id: number
  title: string
  description: string
  image: JSX.Element
}

type Props = {
  subtitle: string
  title: string
  description: string
  items: TestimonialItem[]
}

export default function TestimonialsSection({ subtitle, title, description, items }: Props) {
  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 8 }, py: { xs: 2, sm: 4 } }}>
      <Paper elevation={0} sx={{ ...greyPaperStyle, py: { xs: 4, sm: 6, md: 8 } }}>
        <Container>
          <Typography component="h3" sx={{ ...subtitleStyle, textAlign: 'center' }}>{subtitle}</Typography>
          <Typography component="h2" sx={{ ...title2Style, mt: 2, textAlign: 'center', maxWidth: '600px', ml: 'auto', mr: 'auto' }}>{title}</Typography>
          <Typography sx={{ ...descriptionStyle, mt: 2, textAlign: 'center', maxWidth: '700px', ml: 'auto', mr: 'auto' }}>{description}</Typography>

          <Box sx={{ py: { xs: 2, sm: 4, md: 8 } }}>
            <Grid container spacing={{ xs: 2, sm: 4 }}>
              {items.map(item => (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <Box sx={{ height: 160, width: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.image}
                  </Box>
                  <Typography component="h4" sx={{ ...title3Style }}>{item.title}</Typography>
                  <Typography sx={{ ...descriptionStyle, mt: 2 }}>{item.description}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Paper>
    </Box>
  )
}