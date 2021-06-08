import React from 'react'
import './leftNav.css'
// import Me from '../../public/images/me.jpeg'
import $ from 'jquery'

export default function leftNav() {
    
      const closeSideBar = () => {
        $(".page-wrapper").removeClass("toggled");
      }
      const showSideBar = () => {
        $(".page-wrapper").addClass("toggled");
      }
      
    
    return (
        <React.Fragment>
            {/* <section className="left"> */}
                <div className="page-wrapper chiller-theme toggled">
                    <button id="show-sidebar" className="btn btn-sm btn-dark"  onClick={() => showSideBar()}>
                        <i className="fa fa-power-off"></i>
                    </button>
                    <nav id="sidebar" className="sidebar-wrapper">
                        <div className="sidebar-content">

                            <div className="sidebar-brand">
                                <a href="/">pro sidebar</a>
                                <button id="close-sidebar"  className="btn btn-sm btn-dark"  onClick={() => closeSideBar()}>
                                    <i className="fa fa-power-off"></i>
                                </button>
                            </div>

                            <div className="sidebar-header">
                                <div className="user-pic">
                                    <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User picture"/>
                                </div>
                                <div className="user-info">
                                    <span className="user-name">Tamunotonye
                                        <strong> Daniel</strong>
                                    </span>
                                    <span className="user-role">FullStack Developer</span>
                                    <span className="user-status">
                                        <i className="fa fa-circle"></i>
                                        <span>Available to work</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- sidebar-content  --> */}
                        <div className="sidebar-footer">
                        <a href="#">
                            <i className="fa fa-bell"></i>
                            <span className="badge badge-pill badge-warning notification">3</span>
                        </a>
                        <a href="mailto:danthurnye@gmail.com" >
                            <i className="fa fa-envelope"></i>
                            <span className="badge badge-pill badge-success notification">7</span>
                        </a>
                        <a href="#">
                            <i className="fa fa-cog"></i>
                            <span className="badge-sonar"></span>
                        </a>
                        <a href="#">
                            <i className="fa fa-power-off"></i>
                        </a>
                        </div>
                    </nav>
 
                </div>
            {/* </section> */}
        </React.Fragment>
    )
}
