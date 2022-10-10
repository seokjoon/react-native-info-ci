import { useEffect, useState } from 'react'
import { SafeAreaView, Text } from 'react-native'


const TestClockCom = () => {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <SafeAreaView>
      <Text>
        {time.toLocaleTimeString()}
      </Text>
    </SafeAreaView>
  )
}


export default TestClockCom
