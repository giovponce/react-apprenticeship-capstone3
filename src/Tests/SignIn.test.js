import { render, screen, waitFor } from '@testing-library/react';
import SignIn from '../Pages/SignIn'

describe('SignIn page', () => {
    test('shows the input for email', async () => {
        render(<SignIn />);
        await waitFor(() => {
            const input = screen.getByPlaceholderText('Email');
            expect(input).toBeInTheDocument();
        });
    });
    test('shows the input for pws', async () => {
        render(<SignIn />);
        await waitFor(() => {
            const input = screen.getByPlaceholderText('Password');
            expect(input).toBeInTheDocument();
        });
    });
});