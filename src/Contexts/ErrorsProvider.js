import React, { createContext, useState } from 'react'

const Errors = createContext()

const ErrorsProvider = () => {

    const [ errorMessage, setErrorMessage ] = useState(null)

    return(
      <Errors.Provider value={value}>
        {children}
      </Errors.Provider>
    )
}

export default ErrorsProvider
