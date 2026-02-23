import { useEffect } from "react"
import "../styles/introLoader.css"

const IntroLoader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 2800)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="intro-wrapper">
      <h1 className="intro-title">AKSHAT SINGH</h1>
      <p className="intro-subtitle">FULL STACK DEVELOPER</p>
    </div>
  )
}

export default IntroLoader
