import NextLink from 'next/link'
import { Box, Typography, Grid, Button, Container, Paper } from '@mui/material'
import { subtitleStyle, title2Style, descriptionStyle, buttonStyle, greyPaperStyle } from '../../styles/defaultStyles'

type Props = {
  subtitle: string
  title: string
  blockquote: string
  firstTitle: string
  secondTitle: string
  buttonLabel: string
  buttonLink: string
}

export default function TechnologySection({ subtitle, title, blockquote, firstTitle, secondTitle, buttonLabel, buttonLink }: Props) {
  return (
    <Box sx={{ py: { xs: 2, sm: 4, md: 8 } }}>
      <Container>
        <Typography component="h3" sx={{ ...subtitleStyle, textAlign: 'center' }}>
          {subtitle}
        </Typography>
        <Typography component="h2" sx={{ ...title2Style, mt: 2, textAlign: 'center', maxWidth: '800px', ml: 'auto', mr: 'auto' }}>
          {title}
        </Typography>

        <Box sx={{ py: { xs: 0, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 0, sm: 2 }}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <LovingDoodleImage />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper
                component="blockquote"
                elevation={0}
                sx={{
                  ...greyPaperStyle,
                  p: { xs: 2, sm: 4 },
                  position: 'relative',
                  '&:after': {
                    content: '"\\""',
                    position: 'absolute',
                    top: { xs: -70, sm: -90, md: -120 },
                    right: 20,
                    fontFamily: '"Noto Sans", sans-serif',
                    fontStyle: 'italic',
                    fontSize: { xs: 120, sm: 160, md: 200 }
                  }
                }}
              >
                <Typography sx={{ ...descriptionStyle, fontStyle: 'italic' }}>{blockquote}</Typography>
              </Paper>

              <Box sx={{ py: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography sx={{ ...title2Style, textAlign: 'center', mb: { xs: 1, sm: 2 } }}>781k</Typography>
                    <Typography sx={{ ...descriptionStyle, textAlign: 'center', lineHeight: '100%' }}>{firstTitle}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ ...title2Style, textAlign: 'center', mb: { xs: 1, sm: 2 } }}>80k</Typography>
                    <Typography sx={{ ...descriptionStyle, textAlign: 'center', lineHeight: '100%' }}>{secondTitle}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ pt: { xs: 2, sm: 4, md: 6 }, textAlign: 'center' }}>
            <NextLink href={buttonLink} passHref>
              <Button color="primary" variant="contained" sx={{ ...buttonStyle }}>{buttonLabel}</Button>
            </NextLink>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const LovingDoodleImage = () => (
  <svg width="364" height="273" viewBox="0 0 364 273" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M159.604 119.25C156.369 121.595 156.884 126.209 157.858 129.562C159.292 134.498 162.148 139.068 165.406 143.007C171.186 149.994 180.999 157.841 190.044 151.706C198.099 146.243 203.18 135.218 204.934 125.933C205.476 123.063 206.198 118.787 203.651 116.63C199.886 113.441 193.244 114.021 188.699 114.431C185.706 114.701 182.817 115.619 179.859 115.188C172.986 114.187 165.337 115.094 159.604 119.25Z" fill="#FF6161"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M298.957 155.817C292.404 164.13 281.263 165.443 271.368 165.362C265.426 165.313 259.473 164.865 253.648 163.654C250.508 163.001 247.388 162.137 244.354 161.098C242.35 160.411 239.366 160.068 238.513 157.921C236.263 152.254 237.918 145.148 238.845 139.397C239.316 136.471 239.67 133.528 240.128 130.6C240.421 128.727 240.562 126.655 241.347 124.902C242.266 122.849 243.427 123.259 245.371 123.826C248.05 124.608 250.8 124.933 253.553 125.354C260.274 126.38 266.138 128.449 272.245 131.383C278.285 134.283 284.143 137.146 289.53 141.178C292.26 143.222 294.612 145.44 296.803 148.045C298.495 150.057 301.022 153.198 298.957 155.817ZM270.312 192.739C270.26 193.634 259.989 190.932 258.638 190.629C249.77 188.64 240.726 186.375 232.355 182.781C224.54 179.427 217.655 175.589 211.506 169.63C208.64 166.852 206.062 163.926 203.595 160.811C202.359 159.25 200.669 159.431 199.291 158.11C198.05 156.921 197.099 155.993 197.487 154.215C200.586 155.031 206.308 160.164 209.521 157.572C211.352 156.095 208.812 154.552 207.64 153.696C205.436 152.086 203.551 150.1 201.799 148.015C204.807 148.598 207.607 149.725 210.226 151.293C211.389 151.99 215.375 154.516 216.304 152.108C216.875 150.625 214.172 148.762 213.329 147.942C211.259 145.928 209.025 143.577 207.926 140.87C210.643 140.24 213.203 142.339 215.054 144.049C217.107 145.948 219.625 147.941 221.347 150.129C222.235 151.257 222.429 152.59 223.122 153.807C223.903 155.176 225.152 156.35 226.346 157.364C228.646 159.316 231.337 160.753 234.098 161.942C240.408 164.659 247.171 166.582 253.897 167.931C257.197 168.592 260.415 168.897 263.764 169.009C266.367 169.097 267.519 169.875 268.513 172.273C271.202 178.762 270.714 185.901 270.312 192.739ZM193.075 143.294C191.571 144.702 189.615 145.585 188.042 146.939C186.658 148.13 185.061 149.401 183.517 150.364C181.867 151.392 180.635 150.671 179.15 149.741C177.407 148.649 175.403 148.207 173.608 147.23C167.4 143.852 159.806 135.573 160.964 127.972C161.456 124.75 163.121 121.58 166.146 120.118C168.893 118.791 172.886 118.054 175.825 119.164C177.482 119.79 178.669 121.172 179.731 122.53C180.969 124.114 181.444 123.864 182.705 122.337C184.962 119.605 188.684 117.207 192.363 117.265C194.192 117.294 196.008 117.679 197.655 118.438C197.879 118.541 198.003 118.853 198.227 118.958C198.502 119.088 198.954 118.818 199.145 118.939C199.628 119.245 200.109 120.199 200.387 120.683C201.503 122.624 203.513 126.433 201.488 128.068C201.487 128.069 201.578 130.28 201.55 130.533C201.407 131.852 200.951 132.941 200.364 134.148C198.599 137.773 195.994 140.564 193.075 143.294ZM196.076 173.963C194.65 174.406 193.115 169.939 194.482 169.226C195.786 168.546 197.367 173.563 196.076 173.963ZM173.686 168.622C173.192 170.309 172.983 172.224 171.776 173.598C170.671 172.286 170.562 169.866 171.634 168.517C172.246 167.748 174.226 166.778 173.686 168.622ZM219.305 139.054C219.297 139.096 221.02 139.92 220.18 140.822C219.031 142.053 219.189 139.657 219.305 139.054ZM226.427 125.3C226.407 127.006 222.795 126.594 222.82 124.878C222.852 122.766 226.448 123.491 226.427 125.3ZM222.115 111.039C222.472 109.476 228.755 107.303 228.584 110.026C228.499 111.391 221.357 114.36 222.115 111.039ZM157.702 164.019C156.998 164.866 155.997 165.2 155.153 165.85C154.268 166.531 153.635 167.415 152.862 168.214C150.738 170.41 148.182 172.214 145.891 174.231C141.68 177.938 137.645 181.924 132.976 185.068C124.631 190.686 114.954 193.759 105.348 196.45C104.552 196.673 102.26 197.572 101.472 196.902C100.623 196.179 101.055 193.636 101.094 192.675C101.253 188.732 101.713 184.743 101.663 180.807C101.642 179.19 101.169 176.892 102.013 175.412C102.955 173.76 105.585 173.276 107.211 172.654C112.156 170.765 116.919 167.577 121.287 164.624C126.657 160.994 132.08 157.304 137.605 153.915C143.019 150.595 148.99 148.373 155.029 146.477C155.309 147.064 152.427 148.956 152.098 149.222C150.518 150.493 148.799 151.812 147.627 153.491C146.796 154.679 145.945 157.369 148.237 157.438C149.349 157.471 150.992 156.396 151.999 156.048C153.664 155.474 155.379 155.071 157.12 154.809C155.623 156.457 150.55 159.417 151.473 162.158C152.368 164.817 157.548 161.714 159.332 161.714C159.039 162.641 158.305 163.295 157.702 164.019ZM96.5031 171.442C93.1857 172.609 89.7853 173.272 86.3613 174.025C83.0978 174.744 80.0811 175.285 76.7385 174.864C72.1232 174.284 67.0158 172.372 66.4307 167.128C65.7369 160.914 70.1251 155.205 73.8933 150.747C78.4791 145.323 83.6286 140.474 89.2094 136.084C94.7839 131.697 100.801 127.83 107.104 124.566C111.9 122.082 117.316 120.574 122.387 118.71C123.352 118.356 126.02 117.11 126.922 118.142C127.651 118.977 126.659 120.368 126.326 121.144C125.678 122.655 125.589 124.177 125.422 125.8C124.674 133.047 123.774 140.292 123.36 147.571C123.245 149.599 123.042 151.721 123.16 153.751C123.225 154.875 123.81 156.307 123.421 157.405C122.672 159.515 119.242 160.912 117.424 161.854C114.17 163.541 110.724 164.8 107.436 166.414C103.826 168.187 100.31 170.103 96.5031 171.442ZM142.512 124.352C143.423 124.227 144.787 123.979 145.599 124.569C146.657 125.338 146.38 126.408 145.402 126.966C144.63 127.407 142.823 127.528 142.06 127.128C140.76 126.446 140.98 124.563 142.512 124.352ZM147.555 141.133C146.819 142.359 144.13 143.163 144.364 140.876C144.565 138.917 148.911 138.877 147.555 141.133ZM146.557 106.607C147.74 107.065 149.887 107.458 150.238 108.979C150.564 110.395 149.222 110.302 148.253 109.912C147.457 109.592 143.908 106.583 146.557 106.607ZM331.896 160.634C331.206 157.946 331.732 154.969 331.35 152.215C330.981 149.546 330.315 147.093 329.36 144.577C327.245 139.008 324.823 133.994 321.395 129.106C314.939 119.901 307.449 111.793 298.405 105.07C289.476 98.4326 279.588 93.0386 269.115 89.2581C258.008 85.2489 246.828 83.8535 235.116 83.0849C231.618 82.8558 228.124 82.5838 224.646 82.1419C222.104 81.819 218.918 81.4213 216.405 82.1999C214.826 82.6893 213.944 84.0662 215.664 84.9697C216.883 85.6104 218.48 85.687 219.826 85.8572C218.2 91.026 215.552 96.2124 211.357 99.7713C207.262 103.246 201.781 104.437 196.612 105.318C193.809 105.796 190.671 106.166 187.824 105.96C186.025 105.83 184.621 104.996 183.894 106.85C183.391 108.138 183.152 109.551 182.488 107.606C181.702 105.307 181.317 105.322 178.873 104.669C173.874 103.334 168.144 102.116 163.784 99.2281C159.26 96.2321 157.687 91.3854 155.161 86.8726C154.536 85.7572 152.653 83.4995 153.615 82.2214C154.496 81.0526 157.358 81.1691 158.669 81.0471C160.053 80.9185 161.445 80.913 162.833 80.8592C163.637 80.8281 165.255 81.1577 164.931 79.9565C164.443 78.1462 159.213 78.3783 157.915 78.3488C155.499 78.2946 153.051 78.3505 150.648 78.6162C138.734 79.9338 126.712 82.3702 115.183 85.6193C92.8141 91.9223 71.1496 103.537 54.825 120.27C39.155 136.331 34.1905 163.059 43.8238 183.568C48.8301 194.226 59.6948 198.604 70.2266 202.14C75.7818 204.005 81.6642 205.464 87.5694 205.112C90.4032 204.943 93.0921 204.18 95.856 203.606C97.0612 203.355 98.4329 202.955 99.6709 203.056C100.608 203.132 101.508 203.992 102.388 203.535C103.012 203.211 103.283 202.279 104.045 201.883C104.961 201.407 106.071 201.235 107.059 200.995C109.808 200.327 112.469 199.244 115.155 198.357C117.933 197.439 120.554 196.256 123.22 195.061C124.566 194.457 127.68 192.003 128.557 193.797C128.957 194.616 128.787 196.196 128.884 197.055C129.055 198.557 129.255 200.056 129.474 201.552C129.957 204.845 130.535 208.124 131.127 211.4C132.196 217.31 133.574 222.967 135.877 228.527C137.716 232.966 139.331 237.997 142.746 241.528C144.237 243.069 146.271 243.763 148.41 243.279C150.842 242.728 152.053 240.518 153.529 238.732C156.778 234.801 162.141 231.789 167.094 230.705C173.159 229.377 179.067 231.319 184.856 232.969C190.979 234.715 197.213 236.379 203.223 238.478C208.824 240.434 214.872 243.323 220.946 243.071C226.243 242.852 231.19 238.541 235.01 235.255C238.847 231.955 243.644 227.123 249.161 227.511C251.901 227.704 254.397 229.026 257.065 229.563C259.995 230.153 263.112 230.237 266.09 230.457C269.788 230.729 278.061 229.765 279.429 225.317C279.632 224.657 279.633 223.298 278.761 223.034C277.96 222.791 277.55 223.728 276.791 223.686C275.246 223.599 274.038 220.904 273.189 219.861C269.764 215.651 265.065 212.51 261.221 208.706C256.88 204.411 253.174 199.208 249.904 194.076C251.382 193.691 252.977 194.33 254.408 194.633C256.147 195.001 257.842 195.446 259.555 195.918C261.444 196.438 263.359 196.795 265.276 197.192C266.706 197.487 268.604 197.576 269.895 198.293C271.022 198.92 271.651 199.593 273.05 199.774C274.473 199.959 275.933 199.803 277.362 199.793C281.228 199.767 285.085 199.696 288.933 199.287C302.527 197.843 316.938 192.093 325.112 180.681C327.335 177.577 329.127 174.138 330.259 170.489C331.142 167.64 332.665 163.626 331.896 160.634Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M204.391 29.1514C207.963 29.202 211.312 30.2614 214.641 31.4657C217.568 32.5247 220.689 33.5044 223.056 35.6181C227.314 39.4204 228.423 45.716 229.12 51.1023C229.989 57.8235 227.096 63.4626 224.662 69.5433C222.386 75.2305 218.207 79.8376 213.241 83.3482C210.638 85.1872 207.763 86.2971 204.754 87.2706C201.698 88.2591 198.738 89.5832 195.468 89.5781C190.502 89.5709 184.145 87.2124 182.029 82.32C181.066 80.0925 182.004 79.6926 183.931 80.9033C186.727 82.6597 189.422 84.5551 192.689 85.3342C199.025 86.8458 206.613 84.5041 212.169 81.4144C217.723 78.3256 221.451 73.6856 223.943 67.9079C226.457 62.0792 227.434 56.3356 226.464 50.0517C225.643 44.7266 224.008 39.8624 219.209 36.9716C208.85 30.7321 194.893 31.2348 185.68 39.3437C184.417 40.4553 183.168 41.537 181.866 42.5985C181.038 43.2732 180.063 44.0827 180.184 45.2495C180.286 46.2486 182.417 50.101 179.852 48.9178C177.772 47.9582 176.642 46.0826 174.123 45.8504C171.442 45.6031 168.243 47.6628 167.441 50.2553C166.676 52.7288 168.04 56.1131 170.177 57.5319C171.5 58.4105 172.956 58.2748 174.459 58.2394C175.205 58.2217 177.281 57.9794 177.775 58.7678C178.648 60.1622 175.567 61.6279 174.573 61.9363C172.154 62.6868 169.294 61.8036 167.903 59.6439C166.49 57.4485 165.522 54.9075 165.327 52.2919C165.141 49.7858 165.71 47.2486 167.188 45.1909C168.761 43.0026 171.966 40.5493 174.84 41.3095C176.087 41.6394 177.089 42.9281 178.313 43.1729C179.086 43.3271 178.761 43.4375 179.401 42.8648C179.807 42.5016 180.191 41.8312 180.566 41.4005C182.723 38.9244 184.855 36.2818 187.495 34.3C192.228 30.7464 198.519 29.068 204.391 29.1514ZM191.302 78.2431C191.862 76.9309 192.89 79.2718 193.194 79.6632C193.796 80.4375 195.212 81.0398 195.15 82.1819C195.05 84.0673 192.48 83.7175 191.623 82.734C190.648 81.6143 190.75 79.539 191.302 78.2431ZM209.56 69.3164C210.946 71.4769 209.256 73.809 208.16 75.7212C207.112 77.5495 206.139 79.6162 204.919 81.3351C202.893 84.1889 198.487 81.1017 198.356 78.1687C198.256 75.9235 199.846 76.9008 200.867 77.7394C201.918 78.6031 202.416 78.8181 203.517 77.8748C205.733 75.9763 206.729 72.8018 208.26 70.3981C208.564 69.9216 209.114 69.635 209.56 69.3164ZM213.512 70.0111C213.869 71.0559 213.119 73.8244 215.204 73.5476C216.356 73.3947 216.602 71.7417 217.208 71.0202C219.244 68.5948 218.62 73.1821 218.087 74.3302C216.914 76.8606 213.631 78.6041 212.003 75.3939C211.397 74.1998 211.4 72.6926 211.708 71.4089C211.875 70.7098 212.852 68.0817 213.512 70.0111ZM194.92 65.0628C194.736 66.2818 193.59 68.7106 194.989 69.5827C196.22 70.3504 198.363 68.6833 199.311 67.9873C200.296 67.2639 202.529 65.1889 202.616 67.7711C202.661 69.0874 201.343 70.6667 200.403 71.425C198.397 73.0421 194.229 74.4927 192.751 71.4488C191.946 69.7907 192.386 67.4302 192.918 65.7593C193.35 64.4051 195.366 62.1182 194.92 65.0628ZM221.229 58.3885C222.046 59.3365 223.981 61.4603 222.929 62.8103C221.699 64.3883 219.7 61.4931 218.912 60.6873C218.202 59.9614 216.709 57.8944 217.346 56.798C218.4 54.9837 220.513 57.5563 221.229 58.3885ZM208.399 54.3067C211.067 56.045 207.559 57.2967 206.039 57.4523C204.2 57.6399 201.848 57.7644 200.159 56.8618C197.764 55.5824 198.562 53.6498 200.883 53.1871C203.263 52.7131 206.328 52.9575 208.399 54.3067ZM173.711 48.773C175.673 49.1548 177.914 49.6517 178.582 51.7909C179.272 54.0018 178.281 54.7355 176.277 54.2378C174.422 53.7772 171.652 53.3136 170.604 51.5022C169.351 49.3381 171.891 48.4194 173.711 48.773Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M65.7427 96.2788C65.0842 98.4053 61.7514 99.8158 60.0893 101.108C54.2759 105.631 48.5951 110.34 43.3394 115.502C40.6115 118.181 38.5468 121.421 36.1812 124.401C35.604 125.128 34.5815 126.757 33.4495 126.604C32.2075 126.437 31.9564 124.297 31.996 123.363C32.1317 120.178 35.0412 117.101 37.116 114.907C39.45 112.441 41.9454 110.037 44.4938 107.791C47.2996 105.319 50.3443 103.193 53.4472 101.113C56.494 99.0695 59.4153 96.709 62.5838 94.8583C64.0765 93.9866 66.555 93.655 65.7427 96.2788ZM268.956 76.0832C271.382 76.1597 273.75 76.9556 276.039 77.6944C281.073 79.3201 285.867 81.5751 290.595 83.9321C298.883 88.0634 306.86 93.0621 314.171 98.7456C315.7 99.9333 317.267 100.896 318.929 101.867C319.992 102.489 321.509 103.248 321.919 104.517C322.96 107.74 317.706 104.505 316.96 104.042L315.911 103.392C300.355 93.75 284.816 84.3822 267.219 78.853C266.282 78.5584 265.99 77.7223 266.482 76.8934C267.015 75.9952 268.054 76.0548 268.956 76.0832ZM65.0347 82.8294C64.9223 83.8109 63.8106 84.0342 63.0608 84.3492C60.2632 85.5243 57.3959 86.5265 54.6059 87.7211C49.4276 89.9381 44.6722 93.1556 39.2672 94.8382C38.0321 95.2234 37.8498 93.9768 38.1805 93.1286C38.5488 92.1818 39.655 91.5171 40.455 90.9695C42.763 89.3884 45.3804 88.2517 47.9434 87.1536C50.4843 86.0639 53.1005 85.2397 55.7057 84.3264C58.127 83.4773 60.9373 81.897 63.5374 81.7803L63.6511 81.7748C64.4786 81.733 65.1658 81.6771 65.0347 82.8294ZM273.372 67.9193C270.898 67.2234 273.236 65.6572 274.706 65.7672C276.346 65.8901 277.931 66.6645 279.487 67.1316C284.243 68.5595 288.651 70.1211 293.093 72.3375C293.756 72.6684 296.675 74.2371 294.744 74.9317C293.406 75.413 290.281 73.3481 289.132 72.8528C284.083 70.6758 278.658 69.4057 273.372 67.9193Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M174.751 72.9889C175.06 72.0815 178.885 62.1633 177.388 61.8642C175.803 61.547 173.683 67.3016 173.223 68.3412C171.524 72.1811 170.518 76.3011 169.73 80.4199C169.181 83.2877 168.698 86.2256 168.891 89.1577C169.038 91.4109 169.969 91.752 171.503 93.1328C171.503 86.2886 172.543 79.4667 174.751 72.9889Z" fill="black"/>
  </svg>
)