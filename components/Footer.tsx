import { useRouter } from "next/router"
import { Box, Grid, Container, Link, Typography, List, ListItem, IconButton } from '@mui/material'
import NextLink from 'next/link'

type Props = {
  isContinue: boolean
}

type FooterLabel = {
  locale: string
  label: string
}

type FooterColumnTitle = {
  locale: string
  label: string
}

type FooterLink = {
  id: number
  title: FooterLabel[]
  href: string
  badge?: string
}

type FooterColumn = {
  id: number
  title: FooterColumnTitle[]
  links: FooterLink[]
}

const footer: FooterColumn[] = [{
  id: 1,
  title: [{
    locale: 'ru',
    label: 'Информация',
  }, {
    locale: 'en',
    label: 'Company'
  }],
  links: [{
    id: 1,
    title: [{
      locale: 'ru',
      label: 'Главная'
    }, {
      locale: 'en',
      label: 'Home'
    }],
    href: '/'
  }, {
    id: 2,
    title: [{
      locale: 'ru',
      label: 'Команда'
    }, {
      locale: 'en',
      label: 'Team'
    }],
    href: '/team'
  },  {
    id: 3,
    title: [{
      locale: 'ru',
      label: 'Вакансии'
    }, {
      locale: 'en',
      label: 'Career'
    }],
    href: '/career',
    badge: "5"
  }, {
    id: 4,
    title: [{
      locale: 'ru',
      label: 'Контакты'
    }, {
      locale: 'en',
      label: 'Contacts'
    }],
    href: '/contacts'
  }, {
    id: 5,
    title: [{
      locale: 'ru',
      label: 'Блог'
    }, {
      locale: 'en',
      label: 'Blog'
    }],
    href: '/blog',
    badge: 'new'
  }]
}, {
  id: 2,
  title: [{
    locale: 'ru',
    label: 'Услуги'
  }, {
    locale: 'en',
    label: 'Services'
  }],
  links: [{
    id: 1,
    title: [{
      locale: 'ru',
      label: 'Возможности'
    }, {
      locale: 'en',
      label: 'Opportunities'
    }],
    href: '/opportunities',
  }, {
    id: 2,
    title: [{
      locale: 'ru',
      label: 'Проекты'
    }, {
      locale: 'en',
      label: 'Projects'
    }],
    href: '/static/cases.pdf',
  }]
}]

const Logo = () => (
  <svg width="151" height="23" viewBox="0 0 151 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M14.6133 6.38086C14.6133 7.60221 14.3353 8.67773 13.7793 9.60742C13.2233 10.528 12.4167 11.2389 11.3594 11.7402C10.3112 12.2415 9.05339 12.4922 7.58594 12.4922H4.89258V19H0.859375V0.556641H7.42188C9.76432 0.556641 11.5462 1.05339 12.7676 2.04688C13.998 3.03125 14.6133 4.47591 14.6133 6.38086ZM10.5527 6.44922C10.5527 5.45573 10.252 4.74935 9.65039 4.33008C9.05794 3.90169 8.16471 3.6875 6.9707 3.6875H4.89258V9.38867H7.08008C8.2832 9.38867 9.16276 9.14258 9.71875 8.65039C10.2747 8.14909 10.5527 7.41536 10.5527 6.44922ZM28.3809 19L24.2383 12.2598L20.082 19H15.8164L22.0918 9.2793L16.377 0.556641H20.6426L24.2383 6.43555L27.8203 0.556641H32.0586L26.207 9.2793L32.6191 19H28.3809ZM48.5605 13.6543C48.5605 15.4043 47.8906 16.7806 46.5508 17.7832C45.2201 18.7767 43.3652 19.2734 40.9863 19.2734C38.8444 19.2734 37.099 18.8223 35.75 17.9199C34.401 17.0176 33.5352 15.7051 33.1523 13.9824L37.0488 13.4766C37.2585 14.3333 37.696 15.0124 38.3613 15.5137C39.0267 16.0059 39.9382 16.252 41.0957 16.252C42.2988 16.252 43.1875 16.0605 43.7617 15.6777C44.3451 15.2949 44.6367 14.6979 44.6367 13.8867C44.6367 13.2852 44.3815 12.7793 43.8711 12.3691C43.3607 11.9499 42.6178 11.6217 41.6426 11.3848C39.6829 10.9108 38.2975 10.5007 37.4863 10.1543C36.6842 9.79883 36.0417 9.40234 35.5586 8.96484C35.0755 8.52734 34.7018 8.01693 34.4375 7.43359C34.1823 6.84115 34.0547 6.18034 34.0547 5.45117C34.0547 3.85612 34.6927 2.59375 35.9688 1.66406C37.2539 0.734375 38.9447 0.269531 41.041 0.269531C43.0827 0.269531 44.6777 0.67513 45.8262 1.48633C46.9746 2.28841 47.7174 3.53711 48.0547 5.23242L44.1445 5.62891C43.7435 3.96094 42.6816 3.12695 40.959 3.12695C39.9928 3.12695 39.2546 3.30924 38.7441 3.67383C38.2337 4.0293 37.9785 4.54427 37.9785 5.21875C37.9785 5.66536 38.1016 6.03906 38.3477 6.33984C38.5938 6.63151 38.9264 6.88216 39.3457 7.0918C39.7741 7.29232 40.64 7.5612 41.9434 7.89844C43.6569 8.31771 44.974 8.78711 45.8945 9.30664C46.8151 9.81706 47.4896 10.4368 47.918 11.166C48.3464 11.8952 48.5605 12.7246 48.5605 13.6543ZM59.8672 3.67383V19H55.834V3.67383H50.2832V0.556641H65.418V3.67383H59.8672ZM74.4551 19.2734C72.2129 19.2734 70.5814 18.6628 69.5605 17.4414C68.5397 16.2201 68.0293 14.3333 68.0293 11.7812V0.556641H72.0625V11.7402C72.0625 13.3353 72.2448 14.4655 72.6094 15.1309C72.9831 15.7871 73.6348 16.1152 74.5645 16.1152C75.5124 16.1152 76.2005 15.7643 76.6289 15.0625C77.0573 14.3607 77.2715 13.2077 77.2715 11.6035V0.556641H81.3047V11.5762C81.3047 14.1829 80.7396 16.1198 79.6094 17.3867C78.4883 18.6445 76.7702 19.2734 74.4551 19.2734ZM98.791 9.63477C98.791 12.6426 98.0892 14.9577 96.6855 16.5801C95.2819 18.1934 93.2812 19 90.6836 19H84.9277V0.556641H89.8633C92.8529 0.556641 95.0859 1.30859 96.5625 2.8125C98.0482 4.30729 98.791 6.58138 98.791 9.63477ZM94.7305 9.63477C94.7305 7.56576 94.3385 6.05729 93.5547 5.10938C92.7799 4.15234 91.5267 3.67383 89.7949 3.67383H88.9609V15.8828H90.3555C93.2721 15.8828 94.7305 13.8001 94.7305 9.63477ZM102.045 0.556641H114.568V3.67383H110.316V15.8828H114.568V19H102.045V15.8828H106.297V3.67383H102.045V0.556641ZM132.533 9.7168C132.533 12.8613 131.895 15.2402 130.619 16.8535C129.343 18.4668 127.511 19.2734 125.123 19.2734C122.735 19.2734 120.898 18.4668 119.613 16.8535C118.337 15.2402 117.699 12.8613 117.699 9.7168C117.699 6.57227 118.337 4.21159 119.613 2.63477C120.898 1.05794 122.735 0.269531 125.123 0.269531C127.511 0.269531 129.343 1.05794 130.619 2.63477C131.895 4.21159 132.533 6.57227 132.533 9.7168ZM128.445 9.7168C128.445 5.5332 127.338 3.44141 125.123 3.44141C122.899 3.44141 121.787 5.5332 121.787 9.7168C121.787 11.8132 122.065 13.4036 122.621 14.4883C123.186 15.5638 124.02 16.1016 125.123 16.1016C126.226 16.1016 127.055 15.5638 127.611 14.4883C128.167 13.4036 128.445 11.8132 128.445 9.7168ZM133.463 22.0078V20.6953H150.389V22.0078H133.463Z" fill="white" />
  </svg>
)

const Instagram = () => (
  <svg width="17" height="16" viewBox="0 0 511 511.9">
    <path fill="currentColor" d="M510.95 150.5c-1.2-27.2-5.598-45.898-11.9-62.102-6.5-17.199-16.5-32.597-29.6-45.398-12.802-13-28.302-23.102-45.302-29.5-16.296-6.3-34.898-10.7-62.097-11.898C334.648.3 325.949 0 256.449 0s-78.199.3-105.5 1.5c-27.199 1.2-45.898 5.602-62.097 11.898-17.204 6.5-32.602 16.5-45.403 29.602-13 12.8-23.097 28.3-29.5 45.3-6.3 16.302-10.699 34.9-11.898 62.098C.75 177.801.449 186.5.449 256s.301 78.2 1.5 105.5c1.2 27.2 5.602 45.898 11.903 62.102 6.5 17.199 16.597 32.597 29.597 45.398 12.801 13 28.301 23.102 45.301 29.5 16.3 6.3 34.898 10.7 62.102 11.898 27.296 1.204 36 1.5 105.5 1.5s78.199-.296 105.5-1.5c27.199-1.199 45.898-5.597 62.097-11.898a130.934 130.934 0 0074.903-74.898c6.296-16.301 10.699-34.903 11.898-62.102 1.2-27.3 1.5-36 1.5-105.5s-.102-78.2-1.3-105.5zm-46.098 209c-1.102 25-5.301 38.5-8.801 47.5-8.602 22.3-26.301 40-48.602 48.602-9 3.5-22.597 7.699-47.5 8.796-27 1.204-35.097 1.5-103.398 1.5s-76.5-.296-103.403-1.5c-25-1.097-38.5-5.296-47.5-8.796C94.551 451.5 84.45 445 76.25 436.5c-8.5-8.3-15-18.3-19.102-29.398-3.5-9-7.699-22.602-8.796-47.5-1.204-27-1.5-35.102-1.5-103.403s.296-76.5 1.5-103.398c1.097-25 5.296-38.5 8.796-47.5C61.25 94.199 67.75 84.1 76.352 75.898c8.296-8.5 18.296-15 29.398-19.097 9-3.5 22.602-7.7 47.5-8.801 27-1.2 35.102-1.5 103.398-1.5 68.403 0 76.5.3 103.403 1.5 25 1.102 38.5 5.3 47.5 8.8 11.097 4.098 21.199 10.598 29.398 19.098 8.5 8.301 15 18.301 19.102 29.403 3.5 9 7.699 22.597 8.8 47.5 1.2 27 1.5 35.097 1.5 103.398s-.3 76.301-1.5 103.301zm0 0" />
    <path fill="currentColor" d="M256.45 124.5c-72.598 0-131.5 58.898-131.5 131.5s58.902 131.5 131.5 131.5c72.6 0 131.5-58.898 131.5-131.5s-58.9-131.5-131.5-131.5zm0 216.8c-47.098 0-85.302-38.198-85.302-85.3s38.204-85.3 85.301-85.3c47.102 0 85.301 38.198 85.301 85.3s-38.2 85.3-85.3 85.3zm0 0M423.852 119.3c0 16.954-13.747 30.7-30.704 30.7-16.953 0-30.699-13.746-30.699-30.7 0-16.956 13.746-30.698 30.7-30.698 16.956 0 30.703 13.742 30.703 30.699zm0 0" />
  </svg>
)

const Facebook = () => (
  <svg width="10" height="16">
    <path fill="currentColor" fillRule="evenodd" d="M3.023 16L3 9H0V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H10L9 9H6.28v7H3.023z" />
  </svg>
)

const Vk = () => (
  <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M17.2415 3.67812C17.3585 3.2875 17.2415 3 16.6783 3H14.815C14.3405 3 14.1222 3.24687 14.0051 3.52187C14.0051 3.52187 13.056 5.80625 11.7147 7.2875C11.2813 7.71562 11.082 7.85313 10.8447 7.85313C10.7277 7.85313 10.5473 7.71562 10.5473 7.325V3.67812C10.5473 3.20937 10.4145 3 10.0222 3H7.0927C6.79532 3 6.61816 3.21875 6.61816 3.42188C6.61816 3.86562 7.28884 3.96875 7.35844 5.21875V7.93125C7.35844 8.525 7.25088 8.63437 7.01361 8.63437C6.38089 8.63437 4.84339 6.34063 3.93228 3.71563C3.7488 3.20625 3.56847 3 3.09077 3H1.22742C0.695941 3 0.588379 3.24687 0.588379 3.52187C0.588379 4.00937 1.22109 6.43125 3.53367 9.63125C5.07434 11.8156 7.24455 13 9.21862 13C10.405 13 10.5505 12.7375 10.5505 12.2844C10.5505 10.1969 10.4429 10 11.0377 10C11.3129 10 11.7875 10.1375 12.8947 11.1906C14.1601 12.4406 14.3689 13 15.0776 13H16.9409C17.4724 13 17.7413 12.7375 17.5863 12.2188C17.232 11.1281 14.8371 8.88438 14.7296 8.73438C14.4543 8.38438 14.5334 8.22813 14.7296 7.91563C14.7327 7.9125 17.0074 4.75 17.2415 3.67812V3.67812Z" />
  </svg>
)

type SocialLink = {
  id: number
  icon: JSX.Element,
  link: string
}

const socialLinks: SocialLink[] = [{
  id: 1,
  icon: <Instagram />,
  link: 'https://www.instagram.com/pxstudio_pw'
}, {
  id: 2,
  icon: <Facebook />,
  link: 'https://web.facebook.com/pxstudiopw'
}, {
  id: 3,
  icon: <Vk />,
  link: 'https://vk.com/pxstudio_pw'
}]

const Footer = ({ isContinue = false }: Props) => {
  const { locale } = useRouter()

  return (
    <Box component="footer" sx={{
      pl: { xs: 0, sm: 2, md: 4, lg: 8 },
      pb: { xs: 0, sm: 2, md: 4, lg: 8 },
      pr: { xs: 0, sm: 2, md: 4, lg: 8 },
      pt: isContinue ? { xs: 0 } : { xs: 2, sm: 4, md: 6, lg: 8 }
    }}>
      <Box sx={{
        background: '#000',
        py: { xs: 2, sm: 4, md: 6, lg: 8 },
        px: { xs: 2 },
        borderTopLeftRadius: isContinue ? 0 : '20px',
        borderTopRightRadius: isContinue ? 0 : '20px',
        borderBottomLeftRadius: { xs: 0, sm: '20px' },
        borderBottomRightRadius: { xs: 0, sm: '20px' }
      }}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Box sx={{ pb: { xs: 4, md: 8 } }}>
                <NextLink href="/" passHref>
                  <Link>
                    <Logo />
                  </Link>
                </NextLink>
              </Box>
            </Grid>

            <Grid item xs={12} lg={9}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: { xs: 'column', sm: 'row' } }}>
                {footer?.map(f => (
                  <Box key={f.id} sx={{ px: { xs: 0, lg: 8 }, pt: 0, pb: 4, width: { xs: 'calc(100%)', sm: '100%', md: '100%', lg: 'auto' } }}>
                    <Typography sx={{ color: '#fff', textTransform: 'uppercase', fontWeight: 700, fontSize: 16, mb: 2 }}>
                      {f.title.filter(t => t.locale === locale)[0]?.label}
                    </Typography>
                    <List disablePadding>
                      {f.links.map(l => {
                        return (
                          <ListItem key={l.id} disableGutters>
                            <NextLink key={l.id} href={l.href} passHref>
                              <Link component="a" sx={{ color: 'hsla(0, 0%, 100%, .6)', textDecoration: 'none', fontSize: 16, fontWeight: 500, "&:hover": { textDecoration: 'none', color: '#ff6161' } }}>
                                {l.title.filter(t => t.locale === locale)[0]?.label}
                              </Link>
                            </NextLink>

                            {l.badge && (
                              <Box component="span" sx={{ position: 'relative' }}>
                                <Box sx={{ position: 'absolute', top: -20, left: "calc(100% + 4px)", background: '#ff6161', color: '#fff', fontSize: '14px', fontWeight: 500, borderRadius: '20px', py: 0, px: 1 }}>
                                  {l.badge}
                                </Box>
                              </Box>
                            )}
                          </ListItem>
                        )
                      })}
                    </List>
                  </Box>
                ))}

                <Box sx={{ pl: { xs: 0, lg: 8 }, width: { xs: '100%', md: 'auto' } }}>
                  <Typography sx={{ color: '#fff', textTransform: 'uppercase', fontWeight: 700, fontSize: 16, mb: 2, textAlign: { xs: 'left', sm: 'right' } }}>
                    {locale === 'ru' && 'На связи'}
                    {locale === 'en' && 'In touch'}
                  </Typography>
                  <Box sx={{ mt: 3, display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' } }}>
                    {socialLinks.map(sl => (
                      <NextLink key={sl.id} href={sl.link} passHref>
                        <IconButton
                          component="a"
                          target="_blank"
                          rel="noreferrer"
                          sx={{ border: '2px solid #fff', width: '40px', height: '40px', color: '#fff', ml: { xs: 0, sm: 2 }, mr: { xs: 2, sm: 0 }, transition: 'all 0.25s ease', "&:hover": { color: '#ff6161', borderColor: '#ff6161' } }}
                        >
                          {sl.icon}
                        </IconButton>
                      </NextLink>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Typography sx={{ color: '#fff', fontWeight: 500, mt: 8, fontSize: 14, opacity: 0.6 }}>
            © PXSTUDIO - {locale === "ru" && "Все права защищены."}
            {locale === "en" && "All rights reserved."}
          </Typography>
        </Container>
      </Box>
    </Box>
  ) 
}

export default Footer



