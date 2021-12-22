import NextImage from 'next/image'
import NextLink from 'next/link'
import { Box, Container, Typography, Grid, Button } from '@mui/material'
import { buttonStyle, descriptionStyle, subtitleStyle, title2Style, title3Style } from '../../styles/defaultStyles'

type Article = {
  id: string
  title: string
  slug: string
  contentPreview: string
  created_at: string
  seo: Seo
}

type Media = {
  url: string
}

type ShareImage = {
  alt: string
  media: Media
}

type Seo = {
  shareImage: ShareImage
}

type Props = {
  articles: Article[]
}

export default function ReadArticles({ articles }: Props) {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box sx={{ position: 'sticky', top: 120, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography component="h3" sx={{ ...subtitleStyle }}>Блог PXSTUDIO</Typography>
              <Typography component="h2" sx={{ ...title2Style, mt: 3 }}>Туториалы. Тематические исследования. За кулисами</Typography>
              <Typography sx={{ ...descriptionStyle, mt: 3 }}>Стоит тысячи слов. 23 302, если быть точным.</Typography>

              <Button color="primary" variant="contained" sx={{ ...buttonStyle, mt: 4 }}>Читать</Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {articles.map(a => (
                <Grid key={a.id} item xs={12} sm={6}>
                  <Box sx={{ border: '1px solid rgba(59,72,86,0.09)', borderRadius: 10, height: '100%', overflow: 'hidden', "&:hover": { boxShadow: '0 2px 20px rgb(0 0 0 / 9%)' } }}>
                    <Box sx={{ height: 300, position: 'relative', filter: 'grayscale(100%)' }}>
                      <NextImage src={process.env.NEXT_PUBLIC_API_URL + a.seo?.shareImage?.media?.url} layout="fill" objectFit="cover" objectPosition="center" alt={a.seo?.shareImage?.alt} />
                    </Box>
                    <Box sx={{ py: { xs: 2, md: 2}, px: { xs: 2, md: 4 } }}>
                      <Typography component="h4" sx={{ ...title3Style }}>{a.title}</Typography>
                      <Typography sx={{ ...descriptionStyle, mt: 2, lineHeight: '120%' }}>{a.contentPreview}</Typography>
                      <NextLink href={`/blog/${a.slug}`} passHref>
                        <Button color="primary" variant="contained" sx={{ ...buttonStyle, mt: 2 }}>Читать</Button>
                      </NextLink>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}