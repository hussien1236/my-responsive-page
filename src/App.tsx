import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import FormSection from './sections/FormSection'
import Header from './sections/Header'
import Profile from './sections/Profile'
import ProductFilter from './sections/ProductFilter'
import Footer from './sections/Footer'

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Header/>
    <Profile/>
    <FormSection/>
    <ProductFilter/>
    <Footer/>
    </LocalizationProvider>
  )
}

export default App