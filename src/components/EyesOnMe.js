// Code EyesOnMe Component Here
const EyesOnMe = () => {
   const handleFocus = () =>{
    return (console.log('good')
    )}

    const handleBlur = () => {
    return ( console.log('Hey, eyes on me!')
    )
   }
    return (
        <div>
            <button onFocus={handleFocus}
                onBlur={handleBlur}
                >Eyes on Me</button>
        </div>
    )
}

export default EyesOnMe