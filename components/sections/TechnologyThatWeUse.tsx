import { Box, Typography, Paper, Container, Button } from "@mui/material"
import { useRouter } from "next/router"
import NextImage from 'next/image'
import NextLink from 'next/link'
import { subtitleStyle, greyPaperStyle, title2Style, descriptionStyle, buttonStyle } from "../../styles/defaultStyles"

export default function TechnologyThatWeUse() {
  const { locale } = useRouter()

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 8 }, py: { xs: 2, sm: 4, md: 6 } }}>
      <Paper elevation={0} sx={{ ...greyPaperStyle, py: { xs: 4, sm: 6, md: 8 } }}>
        <Container>
          <Typography component="h3" sx={{ ...subtitleStyle, textAlign: 'center' }}>
            {locale === "ru" && "Технологии, которые мы используем"}
            {locale === "en" && "Technologies we use"}
          </Typography>
          <Typography component="h2" sx={{ ...title2Style, mt: 3, textAlign: 'center' }}>
            {locale === "ru" && "Преображаем интернет"}
            {locale === "en" && "Transforming the Internet"}
          </Typography>
          <Typography sx={{ ...descriptionStyle, textAlign: 'center', mt: 3, maxWidth: { xs: 400, md: 700 }, ml: 'auto', mr: 'auto' }}>
            {locale === "ru" && "Каждый проект - это новая история, но некоторые вещи остаются прежними. Мы подбираем специальный набор инструментов для каждого из них, чтобы обеспечить максимальную производительность."}
            {locale === "en" && "Each project is a new story, but some things remain the same. We select a dedicated toolbox for each one to ensure maximum productivity."}
          </Typography>

          <Typography component="h4" sx={{ ...subtitleStyle, mt: 6, textAlign: 'center' }}>
            {locale === "ru" && "Инструменты"}
            {locale === "en" && "Tools"}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4, flexWrap: 'wrap' }}>
            <Box sx={{ p:4, position: 'relative', width: { xs: 'calc(50%)', sm: 'calc(25%)' }, height: 100, filter: 'invert(0)', opacity: 0.3 }}>
              <NextImage src="/static/img/nextjs.webp" alt="next.js" layout="fill" objectFit="contain" />
            </Box>
            <Box sx={{ p: 4, position: 'relative', width: { xs: 'calc(50%)', sm: 'calc(25%)' }, height: 100, filter: 'invert(0)', opacity: 0.3 }}>
              <NextImage src="/static/img/react.webp" alt="react.js" layout="fill" objectFit="contain" />
            </Box>
            <Box sx={{ position: 'relative', width: { xs: 'calc(50%)', sm: 'calc(25%)' }, height: 100, filter: 'invert(0)', opacity: 0.3 }}>
              <NextImage src="/static/img/nodejs.webp" alt="node.js" layout="fill" objectFit="contain" />
            </Box>
            <Box sx={{ position: 'relative', width: { xs: 'calc(50%)', sm: 'calc(25%)' }, height: 100, filter: 'invert(0)', opacity: 0.3 }}>
              <NextImage src="/static/img/strapi2.svg" alt="strapi" layout="fill" objectFit="contain" />
            </Box>
          </Box>

          <Typography component="h4" sx={{ ...subtitleStyle, mt: 6, textAlign: 'center' }}>
            {locale === "ru" && "Деплой"}
            {locale === "en" && "Deploy"}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4, flexWrap: 'wrap' }}>
            <Box sx={{ p: 4, position: 'relative', width: { xs: 'calc(50%)', sm: 'calc(25%)' }, height: 100, filter: 'invert(0)', opacity: 0.3 }}>
              <NextImage src="/static/img/now-black.webp" alt="now" layout="fill" objectFit="contain" />
            </Box>
            <Box sx={{ p: 4, position: 'relative', width: { xs: 'calc(50%)', sm: 'calc(25%)' }, height: 100, filter: 'invert(0)', opacity: 0.3 }}>
              <NextImage src="/static/img/aws.webp" alt="aws" layout="fill" objectFit="contain" />
            </Box>
          </Box>

          <Box sx={{ mt: 4, py: 4, textAlign: 'center' }}>
            <NextLink href="/contacts" passHref>
              <Button color="primary" variant="contained" sx={{ ...buttonStyle }}>
                {locale === "ru" && "Проконсультировать"}
                {locale === "en" && "Consult"}
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Paper>
    </Box>
  )
}