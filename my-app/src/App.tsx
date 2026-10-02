import { Outlet } from 'react-router'
import ObservadorDeRota from './components/ObservadorDeRota';
import Rodape from './components/Rodape/index.tsx'
import Menu from './components/Menu/index.tsx'

export default function App() {
  return (
    <div className="container">
      <ObservadorDeRota />
      <Menu />
      <Outlet />
      <Rodape />
    </div>
  )
}