import React, { createContext, useState } from 'react'

export const Errors = createContext()

export const ErrorsProvider = ({ children }) => {

    const [ errorMessage, setErrorMessage ] = useState(null)

    return(
      <Errors.Provider value={( errorMessage, setErrorMessage )}>
        {children}
      </Errors.Provider>
    )
}
