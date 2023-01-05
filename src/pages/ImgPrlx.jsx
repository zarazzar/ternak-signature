import { Parallax } from 'react-parallax';
import gambarKambing from "./img/kambingLandingstengah.jpg";

const ImgPrlx = () => (
    
        <Parallax className="parallaxImage" bgImage={gambarKambing}  strength={100}>
                <div className='content col-sm-12'>
                        <span className='img-txt shadow'>Ternak Signature Store</span>
                </div>
        
        </Parallax>
    
    
);

export default ImgPrlx;
