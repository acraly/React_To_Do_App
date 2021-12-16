// import propTypes from "prop-types";
import Button from "./Button"

const Header=({title,showAddTask,toggleShow})=> {
  

  // const handleClick = () => {
  //   console.log("Click with handleClicK from header")}
  return (
    <div className="header">
      <header >
        <h1 >{title}</h1>
      </header>
      <Button
      color={showAddTask ? "red" :"purple"} 
      text={showAddTask ? "Close! Add Task Bar" :"Show! Add Task Bar"}  
      toggleShow = {toggleShow}
      />
    </div>
  )
}

// Header.defaultProps =  {
//   title : "header"
// }

// Header.propTypes = {
//   title: propTypes.string.isRequired
// }

export default Header



