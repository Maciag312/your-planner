import React, { Component } from 'react'
import { connect } from 'react-redux'

export const Login = () => {
    return (
        <div>
            <h1>Login page</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
