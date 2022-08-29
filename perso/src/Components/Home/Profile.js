import React from 'react';
import Typical from 'react-typical';
import '../styles/index.css';
import '../styles/Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='cols'>
                    <div className="cols-icons">
                        <a href='#'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                   
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        <p>Hello, I'M <span className="name">christ</span></p>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                                loops={Infinity}
                                steps={[
                                    "Mern Dev",
                                    3000,

                                    "Full Stack Dev",
                                    3000,

                                    "Pentester Jr",
                                    3000,

                                    "Django/Django Rest framwork Dev",
                                    3000,
                                ]}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                        Habileté à créer des applications web/moible et pestesting des systèmes d'information.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                        <button className='btn btn-primary'>
                            {""}
                            Contactez Moi{""}
                        </button>
                        <a href="Cv.pdf" download="idc Cv.pdf">
                            <button className='btn btn-danger'>Get resume</button>
                        </a>

                </div>
            </div>
            <div className="profile-picture">
               <div  className="profile-picture-background"></div>                     
            </div>
        </div>
    </div>
  )
}
