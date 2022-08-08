import { NavLink } from 'react-router-dom'
function Nav() {
	let activeStyle = {
		textDecoration: 'underline',
		color: 'goldenrod',
		fontSize: '1.1rem',
	}

	return (
		<>
			<ul className='links'>
				<li>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to='/'
					>
						HOME
					</NavLink>
				</li>
				<li>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to='/calls'
					>
						CALLS
					</NavLink>
				</li>
				<li>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to='/deals'
					>
						DEALS
					</NavLink>
				</li>
				<li>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to='/team'
					>
						TEAM
					</NavLink>
				</li>
				<li>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to='/activity'
					>
						ACTIVITY
					</NavLink>
				</li>
				<li>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to='/library'
					>
						LIBRARY
					</NavLink>
				</li>
			</ul>
		</>
	)
}
export default Nav
