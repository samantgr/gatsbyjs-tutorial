import React, { Component } from "react"
import styled from "styled-components";

const Div = styled.div`
margin: 0 auto;
max-width: 650px;
padding: 0 1rem`

class BaseLayout extends Component {
    render () {
        return <Div>
            <h3>MySweetSite</h3>
            {this.props.children}
        </Div>
    }
}

export default BaseLayout