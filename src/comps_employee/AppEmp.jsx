import React, { useState } from 'react'
import InputEmp from './InputEmp'
import ListEmp from './ListEmp'
import { AppContext } from '../context/context'

const AppEmp = () => {
  const [ar_emps, setar_emps] = useState([]);
  return (
    <AppContext.Provider value={{
      ar_emps, setar_emps
    }}>
      <div className='container col-md-6 mx-auto'>
        <InputEmp />
        <ListEmp />
      </div>
    </AppContext.Provider >
  )
}

export default AppEmp