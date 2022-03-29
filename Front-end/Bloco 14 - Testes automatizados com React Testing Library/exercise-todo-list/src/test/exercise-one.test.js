import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const {getByText} = render(<App />);
    const btn = screen.getByRole('button');
    const btnText = getByText('Adicionar');
    expect(btn).toBeInTheDocument();
    expect(btnText).toBeInTheDocument();
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    const {getByLabelText,queryByText} = render(<App />);

   
    const inputList = getByLabelText('Tarefa:');
    expect(inputList).toBeInTheDocument();
    
    const btn = screen.getByRole('button')
    const textList = queryByText('Fazeres')
    userEvent.type(inputList, 'Fazeres') 
    expect(textList).not.toBeInTheDocument()
    userEvent.click(btn);
    expect(queryByText('Fazeres')).toBeInTheDocument()
  });
});
