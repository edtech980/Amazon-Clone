import { Slide } from "react-slideshow-image";

import slideImages from "../../data/images";

import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";

export default function Slider() {
  return (
    
    <div className={styles.container}>
      <Slide className="slider" easing="ease">
        {slideImages.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div style={{ backgroundImage: `url(${slideImages[index + 1 ]})` }}>
                
                
              </div>
              
            </div>
          );
        })}
      </Slide>
      
    </div>
    
    
  );
}
