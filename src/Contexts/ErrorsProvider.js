import React, { createContext } from 'react'

export const Errors = createContext()

const ErrorsProvider = () => {

    const [ errorMessage, setErrorMessage ] = useState(null)

    return(
      <Errors.Provider value={value}>
        {children}
      </Errors.Provider>
    )
}

export default ErrorsProvider
