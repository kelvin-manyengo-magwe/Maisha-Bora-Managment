import React from 'react';
import './Video.css';
import backgroundVideo from '../../assets/maishabora.mp4';

const Video: React.FC = () => {
      return (
            <div className="video-background-container">
                  <video autoPlay loop muted controls className="video-background">
                        <source src={backgroundVideo} type="video/mp4" />
                          Your Browser does not support video tag
                  </video>

                  <div className="content-overlay">
                          <h1>
                              Maisha bora Managment
                          </h1>
                  </div>
            </div>
      )
}

export default Video;
