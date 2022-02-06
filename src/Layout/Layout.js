import React, { Component } from 'react';
import Leftside from './Leftside';
import Header from './Header'
import Footer from './Footer'

export class Layout extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <div>
                <div id="wrapper">
                    <Leftside />
                    <div id="content-wrapper" class="d-flex flex-column">
                        <div id="content">
                            <Header />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout