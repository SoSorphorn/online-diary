import React,{Component} from 'react'
import {Menu, Dropdown, Button, Accordion} from 'semantic-ui-react'

class Sidebar extends Component{

  constructor(props){
    super(props)
    this.state = {
      activeItem: 'Online Diary',
      activeIndex: 0 ,
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render(){
    const { activeItem } = this.state
    const {activeIndex} = this.state
    return(
      // <div className="ui sidebar vertical left menu overlay visible" style={{WebkitTransitionDuration: "0.1s", overflow: "visible !important"}}>
        <Accordion as={Menu} vertical>
          <Menu.Item>
            <Accordion.Title
              active={activeIndex === 1}
              content='Size'
              index={0}
              onClick={this.handleClick}
            />
            <Accordion.Content active={activeIndex === 0} content={SizeForm} />
          </Menu.Item>

          <Menu.Item>
            <Accordion.Title
              active={activeIndex === 1}
              content='Colors'
              index={1}
              onClick={this.handleClick}
            />
            <Accordion.Content active={activeIndex === 1} content={ColorForm} />
          </Menu.Item>
        </Accordion>
      // </div>

      <Menu size='large'>
        <Menu.Item 
          name='home' 
          active={activeItem === 'home'} 
          onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    ) 
  }
}


const SizeForm = (
  "Hey, Sorphorn"
)
  

const ColorForm = (
  "How are u?"
)

export default Sidebar