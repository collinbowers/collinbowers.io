import React from 'react';
import * as THREE from 'three';
import CELLS from 'vanta/dist/vanta.cells.min';
import ReactDOM from 'react-dom';
import SocialBar from './SocialBar';

export default class Projects extends React.Component {
    constructor (props) {
        super(props)
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = CELLS({
            THREE: THREE,
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            color1: 0xf70311,
            color2: 0x414039,
            size: 0.90,
            speed: 0.70
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return <div className='vanta' ref={this.vantaRef}>
            <div className='heading' id='heading'>
                <h1>Coming Soon..</h1>
                <h2>An interactive look at my personal projects</h2>
                <hr></hr>
                <SocialBar />
            </div>
        </div>
    }
}