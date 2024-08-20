import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('Renders App Component', () => {
  test('Renders Home Component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const closeSideBar = screen.getByTestId('closeSideBar');
    fireEvent.click(closeSideBar);
  });
});
