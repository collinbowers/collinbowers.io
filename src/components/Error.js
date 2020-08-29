import React from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

export default class Error extends React.Component {
    constructor (props) {
        super(props)
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = BIRDS({
            THREE: THREE,
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return <div className='vanta' ref={this.vantaRef}>
            <div className='heading' id='heading'>
                <h1>404: Not Found</h1>
            </div>
        </div>
    }
}
