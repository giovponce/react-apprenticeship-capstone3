import { render, screen } from '@testing-library/react';
import Login from '../Pages/Login'

describe('login page', () => {
    test('should show an input for user', () => {
        render(<Login />);
        let input = screen.getByPlaceholderText('Username');
        expect(input).toBeInTheDocument();
    });
    test('should show an input for pwd', () => {
        render(<Login />);
        let input = screen.getByPlaceholderText('Password');
        expect(input).toBeInTheDocument();
    });
});