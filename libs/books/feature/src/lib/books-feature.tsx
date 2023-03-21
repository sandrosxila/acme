import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBooks } from '@acme/books/data-access';
import { Books, Book } from '@acme/books/ui';
import { IBook } from '@acme/shared-models';

export const BooksFeature = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  useEffect(
    () => {
      getBooks().then(setBooks);
    },
    [
      // This effect runs only once on first component render
      // so we declare it as having no dependent state.
    ]
  );
  return (
    <>
      <h2>Books</h2>
      {/* Pass a stub callback for now */}
      {/* We'll implement this properly in Chapter 4 */}
      <Books books={books} onAdd={(book) => alert(`Added ${book.title}`)} />
    </>
  );
};

export default BooksFeature;
