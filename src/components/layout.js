import React, { Component } from "react"
import styled from "styled-components";

const Div = styled.div`
margin: 0 auto;
max-width: 650px;
padding: 0 1rem`

const Img = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 100%;
height: 350px`

class BaseLayout extends Component {
    render () {
        return <Div>
            <Img src="https://source.unsplash.com/random/400x200" alt=""></Img>    
            <h3>MySweetSite</h3>
            {this.props.children}
        </Div>
    }
}

export default BaseLayout