import { ReactNode } from "react"
import NHeader from "./NHeader"
import Footer from "./Footer"

type Props = {
  isContinue: boolean
  children: ReactNode
}

const Layout = ({ isContinue, children }: Props) => (
  <>
    <NHeader />
    {children}
    <Footer isContinue={isContinue} />
  </>
)

export default Layout
