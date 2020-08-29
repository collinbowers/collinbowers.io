import React from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';
import SocialBar from './SocialBar';

export default class Error extends React.Component {
    constructor (props) {
        super(props)
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = WAVES({
            THREE: THREE,
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x571919,
            shininess: 8.00,
            waveHeight: 20.00,
            waveSpeed: 0.70,
            zoom: 0.92
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return <div className='vanta' ref={this.vantaRef}>
            <div className='heading' id='heading'>
                <h1>Say Hello</h1>
                <h2>Although I am not looking for new opportunities, you can always gauge my interest! <a href="mailto:collin@collinbowers.io">collin@collinbowers.io</a></h2>
                <hr></hr>
                <SocialBar />
            </div>
        </div>
    }
}