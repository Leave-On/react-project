import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from "./Button";


describe('Button', () => {
  test('Test render', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  })

  test('Test clear class', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

})