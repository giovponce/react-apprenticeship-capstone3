import { render, screen, waitFor } from '@testing-library/react';
import SignUp from '../Pages/SignUp'

describe('SignUp page', () => {
    test('shows the input for email', async () => {
        render(<SignUp />);
        await waitFor(() => {
            const input = screen.getByPlaceholderText('Email');
            expect(input).toBeInTheDocument();
        });
    });
    test('shows the input for pws', async () => {
        render(<SignUp />);
        await waitFor(() => {
            const input = screen.getByPlaceholderText('Password');
            expect(input).toBeInTheDocument();
        });
    });
});