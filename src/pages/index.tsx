import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { getSession, useSession } from 'next-auth/react'
import Auth from '../components/Auth/Auth'

const App = () => {
	const { data: session } = useSession()
	const reloadSession = () => {
		const event = new Event('visibilitychange')
		document.dispatchEvent(event)
	}
	return (
		<>
			<Auth session={session} reloadSession={reloadSession} />
		</>
	)
}

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context)
	return {
		props: {
			session,
		},
	}
}

export default App
