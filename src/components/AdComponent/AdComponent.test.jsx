import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, test, it } from 'vitest'

import AdComponent from '.'

const GugaGithub = 'https://github.com/GugaS1lva'

describe("AdComponent", () => {
    it("Should be able to render the Card", () => {
        render(<AdComponent />)

        expect(screen.getByText(/Click-Me!/i)).toBeInTheDocument()
    })

    it("Should be able to redirect to GugaS1lva Github Profile if the user click on the link", () => {
        render(<AdComponent />)

        expect(screen.getByRole('link')).toHaveAttribute('href', GugaGithub)
    })
})
