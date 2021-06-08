import React from 'react'
import './rightNav.css'
import $ from 'jquery'


export default function rightNav() {
    const closeRightBar = () => {
        $(".right-page-wrapper").removeClass("right-toggled");
      }
      const showRightBar = () => {
        $(".right-page-wrapper").addClass("right-toggled");
      }
    return (
        <React.Fragment className="rightNav">
            <div className="right-page-wrapper chiller-theme right-toggled">
                    <button id="show-rightbar" className="btn btn-sm btn-dark"  onClick={() => showRightBar()}>
                        <i className="fa fa-power-off"></i>
                    </button>
                    <nav id="rightbar" className="rightbar-wrapper">
                        <div className="rightbar-content">

                            <div className="rightbar-brand">
                                <button id="close-rightbar"  className="btn btn-sm btn-dark"  onClick={() => closeRightBar()}>
                                    <i className="fa fa-power-off"></i>
                                </button>
                            </div>
                        </div>
                        
                        
                    </nav>
                </div>
        </React.Fragment>
    )
}
