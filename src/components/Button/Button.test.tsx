import renderer from 'react-test-renderer'
import { Button } from '.'

it('renders with common classes', () => {
  const component = renderer.create(
    <Button label='some label' />
  )
  const element = component.root.findByType('button')
  expect(element.props.className.includes('leading-7')).toBe(true)
  expect(element.props.className.includes('font-sans')).toBe(true)
  expect(element.props.className.includes('animate-gradient')).toBe(true)
  expect(element.props.className.includes('background-gradient-oversized')).toBe(true)
})

it('renders with a passed label', () => {
  const component = renderer.create(
    <Button label='some label' />
  )
  const element = component.root.findByType('button')
  expect(element.children.includes('some label')).toBe(true)
})

it('renders with passed className prop', () => {
  const component = renderer.create(
    <Button label='some label' className='foo bar' />
  )
  const element = component.root.findByType('button')
  expect(element.props.className.includes('foo bar')).toBe(true)
})

it('renders with passed style prop', () => {
  const component = renderer.create(
    <Button label='some label' style={{foo: 'bar', baz: 'boo'}} />
  )
  const element = component.root.findByType('button')
  expect(element.props.style.foo).toBe('bar')
  expect(element.props.style.baz).toBe('boo')
})

describe('with webProperty originprotocol' , () => {
  describe('with type primary', () => {
    let component: renderer.ReactTestRenderer

    beforeAll(() => {
      component = renderer.create(
        <Button label='some label' webProperty='originprotocol' type='primary' />
      )
    })

    it('renders button with originprotocol background colors', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('bg-gradient-to-r from-origin-protocol-button-start to-origin-protocol-button-end')
    })
  
    it('renders button with white text', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('text-white')
    })
  
    it('renders button with hover styles', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('hover:bg-gray-50 hover:text-gray-100')
    })

    it('renders button with rounded style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('rounded-full')
    })
  })

  describe('with type secondary', () => {
    let component: renderer.ReactTestRenderer
    
    beforeAll(() => {
      component = renderer.create(
        <Button label='some label' webProperty='originprotocol' type='secondary' />
      )
    })

    it('renders button with white background', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('bg-white')
    })

    it('renders button with hover bg background style but not text style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('hover:bg-gray-50')
      expect(element.props.className.includes('hover:text-gray-100')).toBe(false)
    })

    it('renders button with black text', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('text-black')
    })

    it('renders button with rounded style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('rounded-full')
    })
  })

  describe('with type header', () => {
    let component: renderer.ReactTestRenderer
    
    beforeAll(() => {
      component = renderer.create(
        <Button label='some label' webProperty='originprotocol' type='header' />
      )
    })

    it('renders button with white background', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('bg-white')
    })

    it('renders button with hover bg background style but not text style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('hover:bg-gray-50')
      expect(element.props.className.includes('hover:text-gray-100')).toBe(false)
    })

    it('renders button with black text', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('text-black')
    })

    it('renders button with no rounding style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className.includes('rounded-full')).toBe(false)
      expect(element.props.className.includes('rounded')).toBe(false)
    })
  })
})

describe('ousd' , () => {
  describe('with type primary', () => {
    let component: renderer.ReactTestRenderer

    beforeAll(() => {
      component = renderer.create(
        <Button label='some label' webProperty='ousd' type='primary' />
      )
    })

    it('renders button with ousd background colors', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('bg-gradient-to-r from-ousd-button-start to-ousd-button-end')
    })
  
    it('renders button with white text', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('text-white')
    })
  
    it('renders button with hover styles', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('hover:bg-gray-900 hover:text-gray-100')
    })

    it('renders button with rounded style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('rounded-full')
    })
  })

  describe('with type secondary', () => {
    let component: renderer.ReactTestRenderer
    
    beforeAll(() => {
      component = renderer.create(
        <Button label='some label' webProperty='ousd' type='secondary' />
      )
    })

    it('renders button with dark gradient background', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('bg-gradient-to-r from-ousd-button-dark-start to-ousd-button-dark-end')
    })

    it('renders button with hover bg background style and text style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('hover:bg-gray-900 hover:text-gray-100')
    })

    it('renders button with white text', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('text-white')
    })

    it('renders button with rounded style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('rounded-full')
    })
  })

  describe('with type header', () => {
    let component: renderer.ReactTestRenderer
    
    beforeAll(() => {
      component = renderer.create(
        <Button label='some label' webProperty='ousd' type='header' />
      )
    })

    it('renders button with no background gradient', () => {
      const element = component.root.findByType('button')
      expect(element.props.className.includes('bg-gradient-to-r')).toBe(false)
    })

    it('renders button with hover not text style but not hover bg background style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('hover:text-gray-100')
      expect(element.props.className).toContain('hover:bg-gray-900')
    })

    it('renders button with white text', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('text-white')
    })

    it('renders button with no rounding style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className.includes('rounded-full')).toBe(false)
      expect(element.props.className.includes('rounded')).toBe(false)
    })
  })
})

describe('with webProperty story' , () => {
  describe('with type primary', () => {
    let component: renderer.ReactTestRenderer

    beforeAll(() => {
      component = renderer.create(
        <Button label='some label' webProperty='story' type='primary' />
      )
    })

    it('renders button with story background colors', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('bg-gradient-to-r from-story-button-start to-story-button-end')
    })
  
    it('renders button with white text', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('text-white')
    })
  
    it('renders button with hover styles', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('hover:bg-gray-50 hover:text-gray-100')
    })

    it('renders button with rounded style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('rounded-full')
    })
  })

  describe('with type secondary', () => {
    let component: renderer.ReactTestRenderer
    
    beforeAll(() => {
      component = renderer.create(
        <Button label='some label' webProperty='story' type='secondary' />
      )
    })

    it('renders button with white background', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('bg-white')
    })

    it('renders button with hover bg background style but not text style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('hover:bg-gray-50')
      expect(element.props.className.includes('hover:text-gray-100')).toBe(false)
    })

    it('renders button with story blue text', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('text-story-blue')
    })

    it('renders button with rounded style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('rounded-full')
    })
  })

  describe('with type header', () => {
    let component: renderer.ReactTestRenderer
    
    beforeAll(() => {
      component = renderer.create(
        <Button label='some label' webProperty='story' type='header' />
      )
    })

    it('renders button with white background', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('bg-white')
    })

    it('renders button with hover bg background style but not text style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('hover:bg-gray-50')
      expect(element.props.className.includes('hover:text-gray-100')).toBe(false)
    })

    it('renders button with story-blue text', () => {
      const element = component.root.findByType('button')
      expect(element.props.className).toContain('text-story-blue')
    })

    it('renders button with no rounding style', () => {
      const element = component.root.findByType('button')
      expect(element.props.className.includes('rounded-full')).toBe(false)
      expect(element.props.className.includes('rounded')).toBe(false)
    })
  })
})