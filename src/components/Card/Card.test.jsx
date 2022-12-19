import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, test, it } from 'vitest'

import Card from '.'

describe("Card", () => {
    it("Should be able to render the Card", () => {
        render(<Card />)

        expect(screen.getByText(/Card Title/i)).toBeInTheDocument()
    })

    it("Should be able to redirect to CardPage if the user clicks on PencilIcon", () => {
        render(<Card />)

        expect(screen.getByRole('link')).toHaveAttribute('href', '/')
    })
})
