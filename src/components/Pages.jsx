import { useParams } from 'react-router-dom'
import Header from './Header'

function Pages() {
	const { page } = useParams()
	return (
		<>
			<Header />
			<div className='page-title'> {page.toUpperCase()} </div>
		</>
	)
}
export default Pages
