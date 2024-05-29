import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe("Deve renderizar um campo de input", () => {
    test("vazio", () => {
        render(<Formulario/>);
        const inputText = screen.getByPlaceholderText("Digite um valor");
        expect(inputText).toBeInTheDocument();
    });
    
    test("com um type number", () => {
        render(<Formulario/>);
        const inputText = screen.getByPlaceholderText("Digite um valor");
        expect(inputText).toHaveAttribute("type", "number");
    });
    
    test("que deve ser preenchido", () => {
        render(<Formulario/>);
        const inputText = screen.getByPlaceholderText("Digite um valor");
        userEvent.type(inputText, "50");
        expect(inputText).toHaveValue(50);
    })
});