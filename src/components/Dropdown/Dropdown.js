import React, {useState} from 'react'
import styled from "styled-components"
import {IoMdArrowDropdown} from "react-icons/io";
import {BiSearchAlt2} from "react-icons/bi"

const Dropdown = () => {
    const [open, SetOpen] = useState(false);
    const [basic, setBasic] = useState('All Symbols')
    const [search, setSearch] = useState("");
    const symbols = [
        "All Symbols",
        "BTCUSD.PERP",
        "ETHUSD.PERP",
        "BCHUSD.PERP",
        "LTCUSD.PERP",
        "XRPUSD.PERP"
    ]

    const symbolsOnClick = () => {
        SetOpen(!open)
    }
    return (
        <Wrap>
            <div className='title-text' onClick={symbolsOnClick}>
                <sapn>{basic}</sapn>
                <IoMdArrowDropdown/>
            </div>
            {
                open && (
                    <>
                    <div className='input-wrap'>    
                        <input className = 'sym-input' 
                        placeholder='Search Symbol'
                        onChange={(e)=>{setSearch(e.target.value);}}/><BiSearchAlt2 className='icons'/>
                    </div> 
                    <div className='drop-symbols'>
                        {
                            symbols.filter((da)=>{
                                if(search === ""){
                                    return da
                                }else if(da.toLowerCase().includes(search.toLowerCase())){
                                    return da
                                }
                            }).map((op, i) => {
                                return (
                                    <p
                                        className='sym-click'
                                        onClick={() => {
                                            SetOpen(!open);
                                            setBasic(op);
                                        }}>
                                        {op}
                                    </p>
                                )
                            })
                        }
                    </div>
                </>
                )

            }
        </Wrap>
    )
}

export default Dropdown;
const Wrap = styled.div `
    width: 50%;
    margin: 0 auto;
        .title-text{
        display: flex;
        justify-content:space-between ;
        margin: 0 auto;
        width: 200px;
        height: 25px;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
    }
    .drop-symbols{
    border: 1px solid black;
    margin: 0 auto;
    width: 200px;
    border-radius: 0 0 5px 5px ;
        .sym-click{
        cursor: pointer;
        &:hover{
            background-color: #eee;
        }
    }
}
.input-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    margin: 0 auto;
    margin-top: 5px;
    position: relative;
    border: 1px solid black;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
    .sym-input{
        border: none;
        width: 100%;
        height: 25px;
        outline: none;
        margin-left: 25px;
    }
    .icons{
        position:absolute;
        left: 5px;
    }
}
`
