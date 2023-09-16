import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text='Your Cart'>
        <Dropdown.Menu>
          <Dropdown.Item>A Laptop</Dropdown.Item>
          <Dropdown.Item>B Laptop</Dropdown.Item>
          <Dropdown.Item>C Laptop</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">Your Cart </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
