import { useState } from 'react'
import { Session } from 'next-auth'
import { signIn, useSession } from 'next-auth/react'
import { PrismaClient } from '@prisma/client'
import {
	Button,
	Center,
	Input,
	Stack,
	Text,
} from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'

interface AuthProps {
	session: Session | null
	reloadSession: () => void
}

const Auth: React.FC<AuthProps> = ({ session, reloadSession }) => {
	const [id, setId] = useState('')
	return (
		<Center>
			<Stack align="center" spacing={5}>
				{session ? (
					<>
						<Text fontSize="3xl">Add Coffee</Text>
						<Input placeholder="id" value={id} onChange={() => console.log(`Into OnChengeInput`)} />
					</>
				) : (
					<Center height="100vh">
						<Button
							leftIcon={<BsGithub />}
							onClick={() => signIn('github')}
						>
							Sign in with GitHub
						</Button>
					</Center>
				)}
			</Stack>
		</Center>
	)
}

export default Auth
