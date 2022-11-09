import { Center, Input, Text } from '@chakra-ui/react'
import { Session } from 'next-auth'

interface CoffeeInputsProps {
    session: Session | null
}

const CoffeeInputs: React.FC<CoffeeInputsProps> = ({ session }) => {
  return (
    <Center>
        {session ? (
            <>
                <Text>Add Coffe</Text>
                <Input placeholder='Add ID' onChange={() => console.log(`Submit id to database`)}/>
            </>
        ): (
            <>
                <Text>Not Autharize</Text>
            </>
        )}
    </Center>
  )
}

export default CoffeeInputs