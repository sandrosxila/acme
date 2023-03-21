import { render, cleanup, waitFor } from '@testing-library/react';
import App from './app';
describe('App', () => {
  afterEach(cleanup);
  it('should render successfully', async () => {
    const { baseElement } = render(<App />);
    await waitFor(() => expect(baseElement).toBeTruthy());
  });
  it('should have a header as the title', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => expect(getByText('Bookstore')).toBeTruthy());
  });
});
