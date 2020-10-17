import React from 'react'
import mac_iphone from './pngs/mac_iphone.png' 
import Button from '@material-ui/core/Button';
import "./Content.css"
const Content = () => {
    return (
        
            <div className ="content">
                <span className="content_title">
                    Get your time always under control
                </span>
                <img className ="content_picture" src={mac_iphone} alt=""/>
                <span className="content_text">Your Planner is a tool that in easy and very convenient way, helps managing your daily goals. Wherever you are, at work, at home ,at school or in public transport, Your Planner is tracking time to accomplish your activities. </span>
                <br/>
                <Button style={{color: '#0087FF',}}>Find out more</Button>
            </div>
            
    )
}

export default Content
