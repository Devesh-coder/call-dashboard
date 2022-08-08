import { useState, useContext, useEffect } from 'react'
import CallContext from '../context/CallContext'

function Chats() {
	const { message } = useContext(CallContext)

	const [msgs, setMsgs] = useState([
		{
			message: {
				id: 1,
				text: 'Lorem ipsum ',
				type: 'client',
			},
		},
		{
			message: {
				id: 2,
				text: 'Lorem ipsum',
				type: 'caller',
			},
		},
		{
			message: {
				id: 3,
				text: 'Lorem ipsum',
				type: 'client',
			},
		},
		{
			message: {
				id: 4,
				text: 'Lorem ipsum',
				type: 'caller',
			},
		},
	])

	useEffect(() => {
		message.text && msgs.push({ message })
		setMsgs(msgs.filter((msg) => msg))
	}, [message])

	return (
		<div className='chats'>
			{msgs.map((msg) =>
				msg.message.type === 'client' ? (
					<div key={msg.message.id} className='client-msg'>
						<div className='image'></div>
						<div className='client-text'>{msg.message.text}</div>
					</div>
				) : (
					<div key={msg.message.id} className='caller-msg'>
						<div className='caller-text'>{msg.message.text}</div>
						<div
							className='image'
							style={{ backgroundColor: 'lightblue', border: 'none' }}
						></div>
					</div>
				),
			)}
		</div>
	)
}
export default Chats
