import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Calls from './components/Calls'
import Home from './components/Home'
import { CallProvider } from './context/CallContext'
import Pages from './components/Pages'

function App() {
	return (
		<CallProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/calls' element={<Calls />} />
					<Route path='/:page' element={<Pages />} />
				</Routes>
			</Router>
		</CallProvider>
	)
}

export default App
