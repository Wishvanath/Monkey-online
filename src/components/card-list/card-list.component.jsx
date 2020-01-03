import React from 'react'
import  './card-list.style.css'
import Card from '../card/card.component'
const MonkeyList = (props) => {
    

    // return main component
    let monkey_data = props.data
    return(
        <div className="card-list">
           {/* {JSON.stringify(monkey_data)} <br/> */}
           {/* {JSON.stringify(props.children)} */}
          {/* {props.children} */}

            {monkey_data.map((data) => (
                // <h1 key = {data.id}>{data.name}</h1>
                <Card monkey={data} key ={data.id}/>
            ))}

                

        </div>
    )
}

export default MonkeyList;