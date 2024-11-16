
const Hero = () => {

    let mark = 90;
    return (
        <div>
            {mark>=80?<h1>Brilliant Result</h1>:<h1>You are faild</h1>}
            <button onClick={()=>alert("Hello")}>Submit</button>
        </div>
    );
};

export default Hero;