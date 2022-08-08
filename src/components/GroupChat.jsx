import { FaSearch } from 'react-icons/fa'
import Chats from './Chats'
import { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CallContext from '../context/CallContext'

function GroupChat() {
	const [message, setMessage] = useState('')
	const { addMessage } = useContext(CallContext)

	const handleChange = (e) => {
		setMessage(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newMessage = {
			id: uuidv4(),
			text: message,
			type: 'caller',
		}
		addMessage(newMessage)
		setMessage('')
	}

	return (
		<div className='group-chat'>
			<h4 className='topic'>Group Chats</h4>
			<label htmlFor='search'>
				<FaSearch className='search-logo-chat' />
			</label>
			<input
				className='input-chat'
				id='search'
				type='text'
				placeholder='Search for meetings'
			/>
			<Chats />
			<div className='msg'>
				<form onSubmit={handleSubmit}>
					<input
						onChange={handleChange}
						className='imput-msg'
						type='text'
						placeholder='Message..'
						value={message}
					/>
					<button className='btn' type='submit'>
						Send
					</button>
				</form>
			</div>
		</div>
	)
}
export default GroupChat
