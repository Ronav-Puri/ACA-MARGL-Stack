const {useState} = React;

function Dot({turn, setTurn, turnIsComplete, setTurnIsComplete}){
    const[state, setState] = useState("not-selected");
    const selectDot = () => {
        if(state==="player1" || state==="player2"){
            return null;
        }
        
        if(turn === "player1"){
            if(turnIsComplete){
                setTurnIsComplete(false);
                setTurn("player2");
            }
            else setTurnIsComplete(true);
            setState("player1");
        }
        else if(turn === "player2"){
            if(turnIsComplete){
                setTurnIsComplete(false);
                setTurn("player1");
            }
            else setTurnIsComplete(true);
            setState("player2");
        }
    }

    return(
    <button className={state} onClick={selectDot}>•</button>
    );
}

function Main(){
    const [turn, setTurn] = useState("player1");
    const [turnIsComplete, setTurnIsComplete] = useState(false);

    return(
        <div className='board'>
            <div className='row'>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>          
            </div>
            <div className='row'>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/> 
            </div>
            <div className='row'>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/> 
            </div>
            <div className='row'>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/> 
            </div>
            <div className='row'>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/>
            <Dot turn={turn} setTurn={setTurn} turnIsComplete={turnIsComplete} setTurnIsComplete={setTurnIsComplete}/> 
            </div>

            <div className='index'>
                <p>Player 1: <div className='index1'>■</div></p>
                <p>Player 2: <div className='index2'>■</div></p>
            </div>
        </div>
    );
}

ReactDOM.render(<Main />,document.getElementById("root") )