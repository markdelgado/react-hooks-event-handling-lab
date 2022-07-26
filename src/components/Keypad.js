// Code Keypad Component Here

const Keypad = () =>{
   const handleChange = (event) => {
    return(console.log(event.target.value))
   }
    return (
        <form onChange={handleChange}> 
            <input type='password'></input>
        </form>
        )

}

export default Keypad;