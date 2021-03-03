import React, { FunctionComponent } from 'react'
interface TimeProps {
  time: string
}
const Time:FunctionComponent<TimeProps> = (props) => {
  return <div className="time text-left text-gray-500 italic ">{props.time}</div>
}
export default Time
