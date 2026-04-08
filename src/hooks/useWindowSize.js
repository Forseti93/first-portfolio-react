//import
import { useEffect, useState } from 'react'
//declare hook
const useWindowSize = () => {
  //declare state
  const [windowSizes, setWindowSizes] = useState({
    width: undefined,
    height: undefined,
  })
  //declare useeffect
  useEffect(() => {
    // function to update sizes
    const handleResize = () => {
      setWindowSizes({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    //call function once on start
    handleResize()
    //add event listener
    window.addEventListener('resize', handleResize)
    //clean up the use effect's events to avoid "memory leak"
    const cleanUp = () => {
      window.removeEventListener('resize', handleResize)
    }
    //return cleanUp function
    return cleanUp
  }, [])

  //return size
  return windowSizes
}
export default useWindowSize
