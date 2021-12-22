import { Box, Grid, Paper, Typography, Container, Button } from "@mui/material"
import { useRouter } from "next/router"
import NextImage from 'next/image'
import NextLink from 'next/link'
import { useMeasure } from 'react-use'
import { buttonStyle, descriptionStyle, greyPaperStyle, subtitleStyle, title2Style, title3Style } from "../../styles/defaultStyles"

const datas = [{
  language: 'ru',
  subtitle: 'Мы команда',
  title: 'Команда PXSTUDIO',
  description: 'Работаем по всему миру, чтобы создать интернет завтрашнего дня',
  label: 'Стать частью команды',
  members: [{
    id: 1,
    name: 'Вадим Пашаев',
    description: 'Основатель и идейный вдохновитель',
    img: '/static/img/vadim.jpg'
  }, {
    id: 2,
    name: 'Василий Ермаков',
    description: 'Фронтенд-разработчик и супер-мозг',
    img: '/static/img/vas.jpg'
  }, {
    id: 3,
    name: 'Оксана Шафран',
    description: 'Графический дизайнер и очень интересный человек',
    img: '/static/img/pp.jpg'
  },  {
    id: 4,
    name: 'Ксения Чиркова',
    description: 'Иллюстратор и любитель поиграть в компьютерные игры',
    img: '/static/img/ksu.jpg'
  }]
}, {
  language: 'en',
  subtitle: 'We are a team',
  title: 'PXSTUDIO team',
  description: 'Working around the world to create the internet of tomorrow',
  label: 'Become part of the team',
  members: [{
    id: 1,
    name: 'Vadim Pashaev',
    description: 'Founder and mastermind',
    img: '/static/img/vadim.jpg'
  }, {
    id: 2,
    name: 'Vasiliy Ermakov',
    description: 'Frontend-developer and super brain',
    img: '/static/img/vas.jpg'
  }, {
    id: 3,
    name: 'Oksana Shafran',
    description: 'Graphic designer and very interesting person',
    img: '/static/img/pp.jpg'
  },  {
    id: 4,
    name: 'Ksenia Chirkova',
    description: 'Illustrator and lover of playing computer games',
    img: '/static/img/ksu.jpg'
  }]
}]

export default function WeAreTeamSection() {
  const { locale } = useRouter()
  const [ref, { width }] = useMeasure()
  const data = datas.filter(d => d.language === locale)[0]

  return (
    <Box sx={{
      py: 4,
      pl: { xs: 2, sm: 3, md: 8 },
      pr: { xs: 2, sm: 3, md: 8 },
    }}>
      <Paper sx={{ ...greyPaperStyle, py: 8 }} elevation={0}>
        <Container>
          <Typography component="h2" sx={{ ...subtitleStyle, textAlign: 'center' }}>{data.subtitle}</Typography>
          <Typography component="h3" sx={{ ...title2Style, textAlign: 'center', mt: 3 }}>{data.title}</Typography>
          <Typography sx={{ ...descriptionStyle, mt: 3, textAlign: 'center', maxWidth: 350, ml: 'auto', mr: 'auto' }}>{data.description}</Typography>

          <Box sx={{ py: 4 }}>
            <Grid container spacing={3}>
              {data?.members?.map(m => (
                <Grid key={m.id} item xs={6} md={3}>
                  <Box ref={ref} sx={{
                    height: width,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    filter: 'grayscale(100%)',
                    "&:hover": {
                      filter: 'none'
                    }
                  }}>
                    <NextImage src={m.img} layout="fill" objectFit="cover" objectPosition="center" alt={m.name} />
                  </Box>
                  <Typography component="h5" sx={{ ...title3Style, textAlign: 'center', mt: 2 }}>{m.name}</Typography>
                  <Typography sx={{ ...descriptionStyle, textAlign: 'center', mt: 2, px: 2 }}>{m.description}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <NextLink href="/contacts" passHref>
              <Button color="primary" variant="contained" sx={{ ...buttonStyle }}>{data.label}</Button>
            </NextLink>
          </Box>
        </Container>
      </Paper>
    </Box>
  )
}