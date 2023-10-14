import { expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import App from './App';

test("renders App component", () => {
    render(<App />);
    const header = screen.getByText(/My Todolist/i);
    expect(header).toBeInTheDocument();
});

test("add todo", () => {
    render(<App />);
    const desc = screen.getByPlaceholderText("Description");
    const date = screen.getByPlaceholderText("Date");
    const button = screen.getByText("Add");

    fireEvent.change(desc, {target: {value: "Go to coffee"}});
    fireEvent.change(date, {target: {value: "13.10.2023"}});
    fireEvent.click(button);

    const table = screen. getByRole("table");
    expect(table).toHaveTextContent(/Go to coffee/i);
    });