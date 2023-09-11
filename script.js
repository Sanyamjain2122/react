let score=0;
let wicket=0;
let perBallRunOrWicketList=[];

//function to increase score
const scoreIncrease=(num)=>{
        if(wicket<10){
            score+=num;
            perBallRunOrWicketfn(num);

        } rootElement.render(<App/>)
    }

//function to increase wicket count
const wicketIncrease=()=>{
    if(wicket<10){
        wicket+=1;
        perBallRunOrWicketfn("W")
    } rootElement.render(<App/>)
}

//function to store every ball score/wicket count
const perBallRunOrWicketfn=(num)=>{
    perBallRunOrWicketList.push(num);
    console.log(perBallRunOrWicketList);

}
let abc=[2,3,4,5]


const ScoreButtons=()=>(
    <div>
        <button onClick= {()=>scoreIncrease(0)} >0</button>
<button onClick= {()=>scoreIncrease(1)} >1</button>
<button onClick= {()=>scoreIncrease(2)} >2</button>
<button onClick= {()=>scoreIncrease(3)} >3</button>
<button onClick= {()=>scoreIncrease(4)} >4</button>
<button onClick= {()=>scoreIncrease(6)} >6</button>
<button onClick= {wicketIncrease} >Out</button>

    </div>
)

const PerBallRunOrWicketComp =()=>(
<>
    <div>
        {perBallRunOrWicketList.map((num,index)=> {return (<>
            {index%6==0 && <br/>}
            
        <span key={index}> {num ==0 ? <strong>.</strong> : <>{num}</>}</span>
        </>)}
        )}
       
    </div>
    </>

)

const App=()=>{
    
    
    return (
    <React.Fragment>
        
<h1> Score-Keeper</h1>
<h2> Score : {score}/{wicket}</h2>

<ScoreButtons />
<PerBallRunOrWicketComp />



        </React.Fragment>
        )}

// rendering App on main page
const rootElement=ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);