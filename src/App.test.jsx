import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, test, it } from 'vitest'

import App from './App'

// OBJETIVO DO TESTE: Garantir que o App está renderizando.
    // "Deve ser capaz de ver o texto inicial na tela."
describe("App", () => {
    test("Should be able to see the initial text on scree.", () => {
        const { getByText } = render(<App />)

        expect(getByText("Hello, Software-Tests!")).toBeInTheDocument()
    })
})
