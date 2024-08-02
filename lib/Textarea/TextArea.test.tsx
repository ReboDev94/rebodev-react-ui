import { render, screen } from '@testing-library/react';
import Textarea from './Textarea';
import { createRef } from 'react';
import { TallDefaultVariants } from '../types';

describe('Textarea', () => {
  test('should render', () => {
    render(<Textarea aria-label="Text" />);
    const textArea = screen.getByLabelText('Text');
    expect(textArea).toBeInTheDocument();
  });

  test('should forward to the textarea element', () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} aria-label="Text" />);
    expect(ref.current).toBeInTheDocument();
  });

  test('should have default class', () => {
    render(<Textarea aria-label="Text" className="custom-class" />);
    const textArea = screen.getByLabelText('Text');
    expect(textArea).toHaveClass('input p-2 text-sm custom-class');
  });

  test.each([
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
    'light',
    'dark',
  ] satisfies TallDefaultVariants[])(
    'should have variant class %s',
    variant => {
      render(<Textarea aria-label="Text" variant={variant} />);
      const textArea = screen.getByLabelText('Text');
      expect(textArea).toHaveClass(`input__${variant}`);
    },
  );
});
