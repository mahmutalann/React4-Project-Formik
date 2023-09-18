import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux';

export default function Navi() {
  const { cartItems } = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true) //Destructure
  const history = useHistory() //useHistory function provides when you click on the exit page, it shows the products page.

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(True)
  }
  //Line 34 : It means that if element of cartItems greather than 0, rendering CartSummary.
  return (//Line 35 : This operator (?) is ternary operator like if operator.
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item
            name='home'
          />
          <Menu.Item
            name='messages'
          />
          <Menu.Menu position='right'>
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
