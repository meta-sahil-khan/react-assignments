import { useEffect, useState } from 'react'

function formatTime(date) {
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const isPM = hours >= 12
  hours = hours % 12
  if (hours === 0) hours = 12

  const two = (n) => String(n).padStart(2, '0')
  return `${two(hours)}:${two(minutes)}:${two(seconds)} ${isPM ? 'PM' : 'AM'}`
}

export default function Timer({ className = '' }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={`timer ${className}`.trim()} aria-live="polite">
      {formatTime(now)}
    </div>
  )
}
