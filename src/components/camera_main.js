import './camera_main.css'
import cam_icon from './Assets/icons8-camera-64.png'

function CAMERA_MAIN() {
    return (
        <div className="container">
            <div className='status'>
                <div><img src={cam_icon} alt='' className='icon' /></div>
                <div className='text'>Monitoring Started</div>
            </div>
            
        </div>
       
      
    );
};

export default CAMERA_MAIN;