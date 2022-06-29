import React from 'react';
import Typical from 'react-typical';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='cols'>
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
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        <p style={{color: 'black'}}>Hello, I'M <span className="name">christ</span></p>
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
                                    "Enhousiastic Dev ",
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
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
