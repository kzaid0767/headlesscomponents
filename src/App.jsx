import { useState } from 'react'
import Toggle from "../components/Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"
import Menu  from '../components/Menu/index'
import './App.css'

function App() {
  

  return (
    <>
      <Toggle>
        <Menu>
        <Toggle.Button>
                <Menu.Button 
                  className="menu-button" 
                  size="sm" 
                  variant="success"
                  >Sports
                </Menu.Button>
          </Toggle.Button>
            <Toggle.On>
                  <Menu.Dropdown>
                    <Menu.Item>Soccer</Menu.Item>
                    <Menu.Item>Polo</Menu.Item>
                    <Menu.Item>Hockey</Menu.Item>
                  </Menu.Dropdown>
            </Toggle.On>
        </Menu>
      </Toggle>
    </>
  )
}

export default App


/* 

<Menu.Button 
              className="menu-button" 
              size="sm" 
              variant="danger"
              >Click</Menu.Button>
*/