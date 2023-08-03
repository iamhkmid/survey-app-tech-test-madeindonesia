import React from "react"
import { CountdownProps, CountdownRendererProps } from "./Countdown.types"
import { CountdownStyled, DefaultRendererStyled } from "./Countdown.styled"
import { zeroPad } from "./Countdown.heplers"

const Countdown: React.FC<CountdownProps> = (props) => {
  const initTimer = { days: 0, hours: 0, seconds: 0, minutes: 0, completed: false }
  const [timer, setTimer] = React.useState(initTimer)
  const interval = React.useRef<NodeJS.Timer>()

  React.useEffect(() => {
    setTimer(initTimer)
    if (props.date!.getTime() >= new Date().getTime()) {
      interval.current = setInterval(() => {
        const now = new Date().getTime();
        const distance = props.date!.getTime() - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const completed = [days, hours, minutes, seconds].every((val) => val <= 0)
        setTimer({
          days: completed ? 0 : days,
          hours: completed ? 0 : hours,
          minutes: completed ? 0 : minutes,
          seconds: completed ? 0 : seconds,
          completed
        })
      }, 1000)
    } else {
      setTimer((prev) => ({ ...prev, completed: true }))
      clearInterval(interval.current)
    }
    return () => {
      clearInterval(interval.current)
    }
  }, [props.date])

  return (
    <CountdownStyled className={`Countdown-root ${props.className}`}>
      {props.renderer!(timer)}
    </CountdownStyled>
  );
}

export default Countdown

const DefaultRenderer = (props: CountdownRendererProps) => {
  if (props.completed) return <DefaultRendererStyled className="Countdown-finished"><p>Finished</p></DefaultRendererStyled>
  return <DefaultRendererStyled className="Countdown-timer"><p>{`${zeroPad(props.minutes)} : ${zeroPad(props.seconds)}`}</p></DefaultRendererStyled>
}

Countdown.defaultProps = {
  renderer: DefaultRenderer,
  date: new Date()
};