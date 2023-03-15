import { GifExpertApp } from "../src/GifExpertApp";
import { render, screen, fireEvent } from '@testing-library/react'

describe('Pruebas en <GifExpertApp />', () => {

    test('debe de tener la categoria inicial solamente', () => {

        const initialCategory = 'One Punch';

        render(<GifExpertApp />);
        
        expect(screen.getByText(initialCategory));

    });

    test('debe de tener mas de una grilla cuando agrego un elemento', () => {

        const inputValue = 'Dragon Ball';

        render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
       
        fireEvent.input(input, { target: { value: inputValue } } );
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(1);

    });

    test('no debe de agregar elementos repetidos', () => {

        const inputValue = 'Dragon Ball';

        render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
       
        fireEvent.input(input, { target: { value: inputValue } } );
        fireEvent.submit(form);

        const prevCategoriesLength = screen.getAllByRole('heading', { level: 3 }).length;

        fireEvent.input(input, { target: { value: inputValue } } );
        fireEvent.submit(form);

        const postCategoriesLength = screen.getAllByRole('heading', { level: 3 }).length;

        expect(postCategoriesLength).toBe(prevCategoriesLength);

    });

});