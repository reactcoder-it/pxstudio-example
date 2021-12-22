import { SxProps, Theme } from "@mui/system"

export const subtitleStyle: SxProps<Theme> = {
  fontFamily: 'Noto Sans, sans-serif',
  fontSize: { xs: 10, sm: 12, md: 14 },
  fontWeight: 700,
  color: '#3c4856',
  letterSpacing: { xs: '0.125rem', sm: '0.15rem', md: '0.1875rem' },
  textTransform: 'uppercase'
}

export const titleStyle: SxProps<Theme> = {
  fontFamily: '"Noto Serif", serif',
  fontSize: { xs: 28, sm: 32, md: 48 },
  fontWeight: 700,
  lineHeight: '130%'
}

export const title2Style: SxProps<Theme> = {
  fontFamily: '"Noto Serif", serif',
  fontSize: { xs: 20, sm: 28, md: 34 },
  fontWeight: 700,
  lineHeight: '130%'
}

export const title3Style: SxProps<Theme> = {
  fontFamily: '"Noto Serif", serif',
  fontSize: { xs: 16, sm: 18, md: 20 },
  fontWeight: 700,
  lineHeight: '130%'
}

export const descriptionStyle: SxProps<Theme> = {
  fontSize: { xs: 14, sm: 15, md: 16 },
  lineHeight: '150%',
}

export const description2Style: SxProps<Theme> = {
  fontSize: { xs: 12, sm: 13, md: 14 },
  lineHeight: '120%',
}

export const buttonStyle: SxProps<Theme> = {
  boxShadow: "none",
  borderRadius: '30px',
  fontWeight: 500,
  lineHeight: '100%',
  py: { xs: 2, md: 2.5 },
  px: 4,
  // textTransform: 'unset',
  color: '#fff',
  transition: 'all .25s ease',
  "&:hover": {
    background: '#ff6161',
    color: '#fff',
    boxShadow: '0 9px 40px 0 rgb(218 54 84 / 35%)',
    textDecoration: 'none'
  }
}

export const greyPaperStyle: SxProps<Theme> = {
  // backgroundColor: 'rgba(196, 196, 196, 0.16)',
  backgroundColor: '#F5F9FB',
  borderRadius: '20px'
}