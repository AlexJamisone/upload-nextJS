import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import theme from '../chakra/them'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps<{session: Session}>) {
	return (
		<SessionProvider session={pageProps.session}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</SessionProvider>
	)
}

export default MyApp
