import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, test, it } from 'vitest'

import Banner from '.'

const image = {
    url: 'https://github.com/GugaS1lva.png',
    alt: 'Alternative Text'
}

describe('Banner', () => {
    it("Should be able to render the Banner", () => {
        render(<Banner image={image} />)

            //screen = acessor
        expect(screen.getByRole('img')).toBeInTheDocument('src', image.url)
        expect(screen.getByRole('img')).toBeInTheDocument('alt', image.alt)
    })
})
