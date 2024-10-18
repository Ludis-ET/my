import './App.css'
import { Button } from './components/button/Button'

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
