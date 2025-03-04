import styles from "../styles/Overlays.module.css"
import { useEffect, useRef } from "react"

export default function DirectionsOverlay(props) {
   const videoRef = useRef()

   useEffect(() => {
      setTimeout(() => {
         videoRef?.current?.play()
      }, 0)
   }, [])

   return (
      <div className={styles.directionsOverlayContainer}>
         <div className={styles.directionsContainer}>
            <h1 className={styles.header}>How to play</h1>
            <p>
               This image was generated by an Artificial Intelligence algorithm.
            </p>
            {/* <img
               className={styles.instructionImage}
               src="/ss_darth_vader_on_a_waterslide.png"
            ></img> */}
            <p>
               Guess the <b>PROMPT</b> that inspired the image.
            </p>
            <p>
               The color of the word in the table indicates (1){" "}
               <span style={{ color: "#6aaa64" }}>right word right spot</span>,
               (2){" "}
               <span style={{ color: "#c9b458" }}>right word wrong spot</span>,
               or (3){" "}
               <span style={{ color: "#787c7e" }}>not in the phrase</span>. Ever
               heard of Wordle?
            </p>
            {/* <div className={styles.videoDiv}>
               <video
                  className="instructionVideo"
                  ref={videoRef}
                  loop
                  muted
               >
                  <source
                     src="/vid_darth_vader_on_a_waterslide.mov"
                     type="video/mp4"
                  />
               </video>
            </div> */}
            <p>
               Tip: treat each image in the grid as an individual example of the phrase (i.e. they are not in a sequence)
            </p>

            <div className={styles.playButton} onClick={() => props.dismiss()}>
               Let's Play!
            </div>
         </div>
      </div>
   )
}
