import { render, cleanup, waitFor } from '@testing-library/react';
import App from './app';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  afterEach(cleanup);
  it('should render successfully', async () => {
    const { baseElement } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(baseElement).toBeTruthy());
  });
  it('should have a header as the title', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(getByText('Bookstore')).toBeTruthy());
  });
});
