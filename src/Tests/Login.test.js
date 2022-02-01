import { render, screen, waitFor } from '@testing-library/react';
import Login from '../Pages/Login'

describe('login page', () => {
    test('shows the input for email', async () => {
        render(<Login />);
        await waitFor(() => {
            const input = screen.getByPlaceholderText('Email');
            expect(input).toBeInTheDocument();
        });
    });
    test('shows the input for pws', async () => {
        render(<Login />);
        await waitFor(() => {
            const input = screen.getByPlaceholderText('Password');
            expect(input).toBeInTheDocument();
        });
    });
});