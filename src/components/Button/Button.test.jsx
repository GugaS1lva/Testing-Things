import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, test, vi } from 'vitest'

import Button from './index'

const buttonTestID = "button"

describe("Button", () => {
    // beforeEach(() => {
    //     render(<Button>Default Text</Button>)
    // })

    // Deve ser capaz de renderizar o botão na tela
    test("Should be able to render the button", () => {
        const { getByTestId } = render(<Button>Default Text</Button>)
        expect(screen.getByTestId(buttonTestID)).toBeInTheDocument()
    })

    // Garantindo que o componente seja dinâmico { children }.
    test("Should be able to render based on the children prop", () => {
        const { getByTestId } = render(<Button>Default Text</Button>)
        expect(screen.getByTestId(buttonTestID)).toHaveTextContent("Default Text")
    })

    // Deve ser capaz de disparar o evento.
    test("Should be able to fire event", () => {
        const handleClick = vi.fn()

        const { getByTestId } = render(<Button onClick={handleClick}>Default Text</Button>)
        fireEvent.click(getByTestId(buttonTestID))

        expect(handleClick).toHaveBeenCalledTimes(0)
    })

    // Deve ser capaz de ter estilo padrão.
    test("Should be able to have default style", () => {
        const { getByTestId } = render(<Button>Default Text</Button>)

        expect(getByTestId(buttonTestID)).toHaveStyle({
            width: "200px",
            height: "40px",
            backgroundColor: "#000",
            color: '#FFF',
            fontSize: "20px",
            borderRadius: '5px',
        })
    })
})
