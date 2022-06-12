import React from 'react'
import "./Grid.css"

function Grid({ data }) {



    //**********************************Functions to change STYLING of TEXT**************************
    const changeStyle = (e, index) => {
        const sentence = document.getElementsByClassName('sentence');
        if (e.target.id === "bold") {
            console.log(sentence.item(index))
            console.log(index)
            sentence.item(index).classList.toggle('bold')
        }
        if (e.target.id === "italic") {
            console.log(sentence.item(index))
            console.log(index)
            sentence.item(index).classList.toggle('italic')
        }
        if (e.target.id === "fontSize") {
            console.log(sentence.item(index))
            console.log(index)
        }
        if (e.target.id === "underline") {
            console.log(sentence.item(index))
            console.log(index)
            sentence.item(index).classList.toggle('underline')
        }
    }
    const changeValue = (e, index) => {
        var sentence = document.getElementsByClassName('sentence');
        if (e.target.id === "fontSize") {
            console.log(sentence.item(index))
            // console.log(value)
            sentence.item(index).style.fontSize = `${e.target.value}px`;
        }
        if (e.target.id === "textColor") {
            sentence.item(index).style.color = `${e.target.value}`;
            console.log(sentence.item(index))

        }
    }


    return (
        <div class="container">

            {/*Looping is done to show data to USER */}
            {data.map((d, index) => {

                return (
                    <>
                        <div class="row" key={index} onClick={e => changeStyle(e, index)}>
                            <div class="col" id='col'>

                                {/* ACTIONS */}
                                <button class="btn btn-primary" id='bold'>Bold</button>
                                <button class="btn btn-primary" id='italic'>Italic</button>
                                <button class="btn btn-primary" id='underline'>Underline</button>
                                <input type='number' placeholder='Enter Font size' id='fontSize' onChange={(e) => changeValue(e, index)} />
                                <input type='color' placeholder='Enter Color' id='textColor' onChange={(e) => changeValue(e, index)} />
                            
                            </div>

                            {/* DATA */}
                            <div class="col sentence" id='col'>
                                {/* DYNAMIC DATA IS DRIVEN USING PROPS */}
                                {d.sentence}  
                            </div>
                        </div>
                    </>
                )
            })
            }

        </div>
    )
}

export default Grid