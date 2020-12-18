import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import Button from './index'

test('testing allowed button isDisabled', () => {
  const { container } = render(<Button isDisabled></Button>)

  expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test('should test button loading', () => {
  const { container, getByText } = render(<Button isLoading></Button>)

  expect(getByText(/loading/i)).toBeInTheDocument()
  expect(container.querySelector('span')).toBeInTheDocument()
})

test('should render <a> tag', () => {
  const { container } = render(<Button type='link' isExternal></Button>)
  expect(container.querySelector('a')).toBeInTheDocument()
})

test('Should render <Link> component', () => {
  const { container } = render(
    <Router>
      <Button href='' type='link'></Button>
    </Router>
  )

  expect(container.querySelector('a')).toBeInTheDocument()
})
