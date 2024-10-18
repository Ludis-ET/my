import './App.css'
import { Button } from './components/button/Button'

const {} = require("./db/db")

function App() {

  return (
    <>
    <Button title={'Test'} disabled={false} type={'add'} />
    <Button title={'Test'} disabled={false} type={'remove'} />
    <Button title={'Test'} disabled={false} type={'checkout'} />
    </>
  )
}

export default App
