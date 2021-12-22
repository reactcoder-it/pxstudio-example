import { Typography, Box } from "@mui/material"
import { ReactElement } from "react"
import { title3Style } from '../../styles/defaultStyles'

type Company = {
  id: number
  logo: ReactElement
}

type Props = {
  title: string
  companies: Company[]
}

export default function WeAreChosen({ title, companies }: Props) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography component="h5" sx={{ ...title3Style, mb: 2 }}>{title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        {companies.map(c => (
          <Box key={c.id} sx={{ display: 'inline-block', mr: 4 }}>
            {c.logo}
          </Box>
        ))}
      </Box>
    </Box>
  )
}