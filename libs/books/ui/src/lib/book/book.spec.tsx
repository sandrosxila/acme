import { render } from '@testing-library/react';

import Book from './book';

describe('Book', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Book
        book={{
          id: 2,
          title: 'Frankenstein',
          author: 'Mary Wollstonecraft Shelley',
          rating: 5,
          price: 7.95,
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
