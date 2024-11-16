
const Hero = () => {

    const city = ['Dhaka', 'Cumilla','Khulna']
    return (
        <div>
            <ul>
                {
                    city.map((item, i)=>{
                        return <li key={i.toString()}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Hero;