
const Hero = (props) => {

    const postForm=(event) =>{
        event.preventDefault();
        alert('Form submited')
    }
 
    return (
        <div>
           <form onSubmit={postForm}>
                <input type="text" placeholder="Name" />
                <button type="submit">Submit</button>
           </form>
        </div>
    );
};

export default Hero;