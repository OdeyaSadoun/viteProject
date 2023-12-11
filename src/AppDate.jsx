import React, {useState} from 'react'
// import DateInput from './DateInput'
// import DateView from './DateView'

const AppDate = () => {
const [deadline, setDeadline] = useState("2024-01-01");

  return (
    <div className='container'>
        {/* <DateView deadline={deadline}/>
        <DateInput setDeadline={setDeadline}/> */}
    </div>
  )
}

export default AppDate