import React, { createContext, useState } from 'react'

export const HoleNumber = createContext()

export const HoleNumberProvider = ({ children }) => {

    const [ holeNumber, setHoleNumber ] = useState(1)

    return(
      <HoleNumber.Provider value={{ holeNumber, setHoleNumber }}>
        {children}
      </HoleNumber.Provider>
    )
}
