
const Hero = () => {

    let mark = 83;
    return (
        <div>
            {mark>=80?<h1>Brilliant Result</h1>:<h1>You are faild</h1>}
            <button onClick={()=>alert("Hello")}>Submit</button>

            {(()=>{
                if(mark>80 && mark<90){
                    return "Your result is A+"
                }
            })()}
        </div>
    );
};

export default Hero;