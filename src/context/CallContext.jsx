import { createContext, useState } from 'react'

const CallContext = createContext()

export const CallProvider = ({ children }) => {
	const [message, setMessage] = useState({})

	const addMessage = (msg) => {
		if (msg !== undefined) {
			setMessage(msg)
		}
	}

	return (
		<CallContext.Provider value={{ message, addMessage }}>
			{children}
		</CallContext.Provider>
	)
}

export default CallContext
