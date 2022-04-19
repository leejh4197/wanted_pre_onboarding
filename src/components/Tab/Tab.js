import React, {useState} from 'react'
import styled from 'styled-components'
import * as TST from "./Tab.style"

const Tab = () => {
    const [selected, setSelected] = useState("potato");
    const [locations, setLocations] = useState("1px");

    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setSelected(value);

        if (value === 'potato') {
            setLocations("1px")
        } else if (value === 'sweet-potato') {
            setLocations("33%")
        } else if (value === 'curry-rice') {
            setLocations("66%")
        }
    }
    return (
        <TST.TabContainer>
            <TST.TabWrap>
                <TST.TabContainer>
                    <TST.TabRadio
                        type="radio"
                        id='potato'
                        name='manu'
                        value="potato"
                        checked={selected === "potato"}
                        onChange={handleChange}/>
                    <TST.TabLabel htmlFor='potato'>감자</TST.TabLabel>

                </TST.TabContainer>
                <TST.TabContainer>
                    <TST.TabRadio
                        type="radio"
                        id='sweet-potato'
                        name='manu'
                        value="sweet-potato"
                        checked={selected === "sweet-potato"}
                        onChange={handleChange}/>
                    <TST.TabLabel htmlFor='sweet-potato'>고구마</TST.TabLabel>

                </TST.TabContainer>
                <TST.TabContainer>
                    <TST.TabRadio
                        type="radio"
                        id='curry-rice'
                        name='manu'
                        value='curry-rice'
                        checked={selected === "curry-rice"}                        
                        onChange={handleChange}/>
                    <TST.TabLabel htmlFor='curry-rice'>카레라이스</TST.TabLabel>
                </TST.TabContainer>
                <TST.SliderBar locations={locations}/>
            </TST.TabWrap>
        </TST.TabContainer>
    )
}

export default Tab;

