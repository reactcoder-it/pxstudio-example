import { useRouter } from "next/router"
import { useState } from "react"
import NextLink from 'next/link'
import { AppBar, Toolbar, Link, List, ListItem, Button, Hidden, IconButton, SwipeableDrawer, Box, Container } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

type TNavLink = {
  id: number
  label: TMenuLinkLabel[]
  href: string
}

type TMenuLinkLabel = {
  locale: string
  text: string
}

const menuLinks: TNavLink[] = [{
  id: 1,
  href: '/',
  label: [{
    locale: "ru",
    text: 'Главная',
  }, {
    locale: "en",
    text: 'Home'
  }]
}, {
  id: 2,
  href: '/team',
  label: [{
    locale: "ru",
    text: 'Команда'
  }, {
    locale: "en",
    text: 'Team'
  }]
}, {
  id: 3,
  href: '/opportunities',
  label: [{
    locale: "ru",
    text: 'Возможности'
  }, {
    locale: "en",
    text: 'Opportunity'
  }]
}, {
  id: 4,
  href: '/career',
  label: [{
    locale: "ru",
    text: 'Вакансии'
  }, {
    locale: "en",
    text: 'Career'
  }]
}, {
  id: 5,
  href: '/contacts',
  label: [{
    locale: "ru",
    text: 'Контакты'
  }, {
    locale: "en",
    text: 'Contacts'
  }]
},  {
  id: 6,
  href: '/blog',
  label: [{
    locale: "ru",
    text: 'Блог'
  }, {
    locale: "en",
    text: 'Blog'
  }]
}]

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)
  const router = useRouter()

  const { locale, pathname, asPath } = router

  const handleChangeLang = () => {
    router.push(pathname, asPath, { locale: locale === "ru" ? "en" : "ru" })
  }

  return (
    <>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          pt: { xs: 2, lg: 0 },
          pb: { xs: 2, lg: 0 },
          pl: { xs: 2, sm: 3, md: 8 },
          pr: { xs: 2, sm: 3, md: 8 },
          background: '#ffffffcc',
          backdropFilter: 'blur(16px)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <NextLink href="/" passHref>
              <Link>
                <Logo />
              </Link>
            </NextLink>

            <Hidden lgDown>
              <List component="nav" sx={{ display: 'flex', ml: 'auto', mr: 'auto', py: 0 }}>
                {menuLinks.map(ml => (
                  <NextLink key={ml.id} href={ml.href} passHref>
                    <ListItem
                      sx={{
                        py: 4,
                        borderTop: "3px solid",
                        borderColor:  (ml.href !== '/' && asPath.indexOf(ml.href) > -1) || asPath === ml.href ? '#ff6161' : 'transparent',
                        color: (ml.href !== '/' && asPath.indexOf(ml.href) > -1) || asPath === ml.href ? '#ff6161' : '#0d0e0f',
                        fontWeight: 500,
                        fontSize: '16px',
                        transition: 'all .25s ease',
                        "&:hover": {
                          color: '#ff6161',
                          textDecoration: 'none'
                        }
                      }}
                      component="a"
                    >
                      {ml.label.filter(l => l.locale === locale)[0]?.text}
                    </ListItem>
                  </NextLink>
                ))}
              </List>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button sx={{ mr: 2, py: 0, px: 1, minWidth: 'unset', fontWeight: 500, borderRadius: 20 }} onClick={handleChangeLang}>
                  {locale}
                </Button>
                
                <NextLink href="/contacts" passHref>
                  <Button color="primary" variant="contained" sx={{
                    color: '#fff',
                    py: 1.5,
                    px: 5,
                    borderRadius: '30px',
                    fontSize: '16px',
                    fontWeight: 500,
                    boxShadow: 'none',
                    transition: 'all .25s ease',
                    textTransform: 'unset',
                    "&:hover": {
                      background: '#ff6161',
                      color: '#fff',
                      boxShadow: '0 9px 40px 0 rgb(218 54 84 / 35%)',
                      textDecoration: 'none',
                    }
                  }}>
                    Начать проект
                  </Button>
                </NextLink>
              </Box>
            </Hidden>

            <Hidden lgUp>
              <IconButton sx={{ ml: 'auto' }} onClick={() => setOpen(prev => !prev)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>

      <SwipeableDrawer anchor="right" open={open} onClose={() => setOpen(prev => !prev)} onOpen={() => null}>
        <Box sx={{ width: '240px', height: '100%', position: 'relative', pt: 10 }}>
          <List>
            {menuLinks.map(ml => (
              <NextLink key={ml.id} href={ml.href} passHref>
                <ListItem
                  component="a"
                  sx={{
                    py: 2,
                    borderLeft: "3px solid",
                    borderColor: ml.href === asPath ? '#ff6161' : 'transparent',
                    fontWeight: 600,
                    color: ml.href === asPath ? '#ff6161' : '#0d0e0f',
                    fontSize: '16px',
                    transition: 'all .25s ease',
                    "&:hover": {
                      color: '#ff6161',
                      textDecoration: 'none'
                    }
                  }}
                >
                  {ml.label.filter(l => l.locale === locale)[0]?.text}
                </ListItem>
              </NextLink>
            ))}
          </List>

          <Box sx={{ position: 'absolute', bottom: 0, p: 2 }}>
            <NextLink href="/" passHref>
              <Link>
                <Logo />
              </Link>
            </NextLink>
          </Box>

          <IconButton sx={{ position: 'absolute', top: 20, right: 20 }} onClick={() => setOpen(prev => !prev)}>
            <CloseIcon />
          </IconButton>

          <Button sx={{ position: 'absolute', top: 20, left: 20, my: 1, py: 0, px: 1, minWidth: 'unset', fontWeight: 500, borderRadius: 20 }} onClick={handleChangeLang}>
            {locale}
          </Button>
        </Box>
      </SwipeableDrawer>
    </>
  )
}

export default Header

const Logo = () => (
  <svg width="151" height="23" viewBox="0 0 151 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M14.6133 6.38086C14.6133 7.60221 14.3353 8.67773 13.7793 9.60742C13.2233 10.528 12.4167 11.2389 11.3594 11.7402C10.3112 12.2415 9.05339 12.4922 7.58594 12.4922H4.89258V19H0.859375V0.556641H7.42188C9.76432 0.556641 11.5462 1.05339 12.7676 2.04688C13.998 3.03125 14.6133 4.47591 14.6133 6.38086ZM10.5527 6.44922C10.5527 5.45573 10.252 4.74935 9.65039 4.33008C9.05794 3.90169 8.16471 3.6875 6.9707 3.6875H4.89258V9.38867H7.08008C8.2832 9.38867 9.16276 9.14258 9.71875 8.65039C10.2747 8.14909 10.5527 7.41536 10.5527 6.44922ZM28.3809 19L24.2383 12.2598L20.082 19H15.8164L22.0918 9.2793L16.377 0.556641H20.6426L24.2383 6.43555L27.8203 0.556641H32.0586L26.207 9.2793L32.6191 19H28.3809ZM48.5605 13.6543C48.5605 15.4043 47.8906 16.7806 46.5508 17.7832C45.2201 18.7767 43.3652 19.2734 40.9863 19.2734C38.8444 19.2734 37.099 18.8223 35.75 17.9199C34.401 17.0176 33.5352 15.7051 33.1523 13.9824L37.0488 13.4766C37.2585 14.3333 37.696 15.0124 38.3613 15.5137C39.0267 16.0059 39.9382 16.252 41.0957 16.252C42.2988 16.252 43.1875 16.0605 43.7617 15.6777C44.3451 15.2949 44.6367 14.6979 44.6367 13.8867C44.6367 13.2852 44.3815 12.7793 43.8711 12.3691C43.3607 11.9499 42.6178 11.6217 41.6426 11.3848C39.6829 10.9108 38.2975 10.5007 37.4863 10.1543C36.6842 9.79883 36.0417 9.40234 35.5586 8.96484C35.0755 8.52734 34.7018 8.01693 34.4375 7.43359C34.1823 6.84115 34.0547 6.18034 34.0547 5.45117C34.0547 3.85612 34.6927 2.59375 35.9688 1.66406C37.2539 0.734375 38.9447 0.269531 41.041 0.269531C43.0827 0.269531 44.6777 0.67513 45.8262 1.48633C46.9746 2.28841 47.7174 3.53711 48.0547 5.23242L44.1445 5.62891C43.7435 3.96094 42.6816 3.12695 40.959 3.12695C39.9928 3.12695 39.2546 3.30924 38.7441 3.67383C38.2337 4.0293 37.9785 4.54427 37.9785 5.21875C37.9785 5.66536 38.1016 6.03906 38.3477 6.33984C38.5938 6.63151 38.9264 6.88216 39.3457 7.0918C39.7741 7.29232 40.64 7.5612 41.9434 7.89844C43.6569 8.31771 44.974 8.78711 45.8945 9.30664C46.8151 9.81706 47.4896 10.4368 47.918 11.166C48.3464 11.8952 48.5605 12.7246 48.5605 13.6543ZM59.8672 3.67383V19H55.834V3.67383H50.2832V0.556641H65.418V3.67383H59.8672ZM74.4551 19.2734C72.2129 19.2734 70.5814 18.6628 69.5605 17.4414C68.5397 16.2201 68.0293 14.3333 68.0293 11.7812V0.556641H72.0625V11.7402C72.0625 13.3353 72.2448 14.4655 72.6094 15.1309C72.9831 15.7871 73.6348 16.1152 74.5645 16.1152C75.5124 16.1152 76.2005 15.7643 76.6289 15.0625C77.0573 14.3607 77.2715 13.2077 77.2715 11.6035V0.556641H81.3047V11.5762C81.3047 14.1829 80.7396 16.1198 79.6094 17.3867C78.4883 18.6445 76.7702 19.2734 74.4551 19.2734ZM98.791 9.63477C98.791 12.6426 98.0892 14.9577 96.6855 16.5801C95.2819 18.1934 93.2812 19 90.6836 19H84.9277V0.556641H89.8633C92.8529 0.556641 95.0859 1.30859 96.5625 2.8125C98.0482 4.30729 98.791 6.58138 98.791 9.63477ZM94.7305 9.63477C94.7305 7.56576 94.3385 6.05729 93.5547 5.10938C92.7799 4.15234 91.5267 3.67383 89.7949 3.67383H88.9609V15.8828H90.3555C93.2721 15.8828 94.7305 13.8001 94.7305 9.63477ZM102.045 0.556641H114.568V3.67383H110.316V15.8828H114.568V19H102.045V15.8828H106.297V3.67383H102.045V0.556641ZM132.533 9.7168C132.533 12.8613 131.895 15.2402 130.619 16.8535C129.343 18.4668 127.511 19.2734 125.123 19.2734C122.735 19.2734 120.898 18.4668 119.613 16.8535C118.337 15.2402 117.699 12.8613 117.699 9.7168C117.699 6.57227 118.337 4.21159 119.613 2.63477C120.898 1.05794 122.735 0.269531 125.123 0.269531C127.511 0.269531 129.343 1.05794 130.619 2.63477C131.895 4.21159 132.533 6.57227 132.533 9.7168ZM128.445 9.7168C128.445 5.5332 127.338 3.44141 125.123 3.44141C122.899 3.44141 121.787 5.5332 121.787 9.7168C121.787 11.8132 122.065 13.4036 122.621 14.4883C123.186 15.5638 124.02 16.1016 125.123 16.1016C126.226 16.1016 127.055 15.5638 127.611 14.4883C128.167 13.4036 128.445 11.8132 128.445 9.7168ZM133.463 22.0078V20.6953H150.389V22.0078H133.463Z" fill="black" />
  </svg>
)