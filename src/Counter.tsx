import * as React from 'react'
import { formatDistanceStrict } from 'date-fns'
import da from 'date-fns/locale/da'
import { isBefore } from 'date-fns/esm'
import { animated, useSpring } from 'react-spring'
import { useInterval } from './hooks/useInterval'

interface Props {
  deadline: Date
  game: string
}

export const Counter: React.FC<Props> = ({ deadline, game }) => {
  const remainingSec = (deadline.getTime() - Date.now()) / 1000

  const [state, reload] = React.useState(0)
  useInterval(() => {
    reload(state + 1)
  }, 1000)

  const { x } = useSpring({
    from: { x: 0 },
    x: remainingSec < 30 ? state % 2 : 0,
    config: { duration: 100 },
  })

  if (isBefore(deadline, Date.now() + 1000)) {
    return <div>{game}</div>
  }

  return (
    <animated.div
      style={{
        transform: x
          .interpolate({
            range: [0, 0.5, 1],
            output: [1, 1.1, 1],
          })
          .interpolate(x => `scale(${x})`),
      }}
    >
      <div style={{ color: remainingSec <= 6 ? '#e6122f' : 'white' }}>
        Afsløres om <br />
        {formatDistanceStrict(deadline, Date.now(), {
          locale: da,
        })}
      </div>
    </animated.div>
  )
}
