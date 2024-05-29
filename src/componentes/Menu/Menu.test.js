import {render, screen} from '@testing-library/react';
import Menu from './index';

test("Deve renderizar um link para a página inicial", () => {
    render(<Menu/>);
    const homePageLink = screen.getByText('Inicial');
    expect(homePageLink).toBeInTheDocument();
});

test("Deve renderizar uma lista de links", () => {
    render(<Menu/>);
    const linksList = screen.getAllByRole('link');
    expect(linksList).toHaveLength(4);
});

test("Não deve renderizar o link para Extrato", () => {
    render(<Menu/>);
    const extratoLink = screen.queryByText('Extrato');
    expect(extratoLink).not.toBeInTheDocument();
});

test("Deve renderizar uma lista de links com a classe link", () => {
    render(<Menu/>);
    const linksList = screen.getAllByRole('link');
    linksList.forEach(
        (link) => expect(link).toHaveClass('link')
    );
    expect(linksList).toMatchSnapshot();
})