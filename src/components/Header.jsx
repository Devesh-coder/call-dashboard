import Nav from './Nav'
import { FaSearch, FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import image from '../logo.png'

function Header() {
	return (
		<div className='header'>
			<img src={image} alt='company-image' className='company-logo' />
			<Nav />
			<label htmlFor='search'>
				<FaSearch className='search-logo' />
			</label>
			<input className='input' id='search' type='text' placeholder='Search' />
			<p style={{ color: 'white' }}>MY ACCOUNT</p>
			<Link to='/about'>
				<FaQuestion className='about' />
			</Link>
		</div>
	)
}

export default Header
