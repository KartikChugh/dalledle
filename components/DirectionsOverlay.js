import styles from "../styles/Overlays.module.css"

export default function DirectionsOverlay(props) {
   return (
      <div className={styles.directionsOverlayContainer}>
         <div className={styles.directionsContainer}>
            <h1 className={styles.header}>How to play</h1>
            <p>
               The image was generated by an Aritifical Intelligence algorithm.
            </p>
            <p>
               Guess the <b>PROMPT</b> that inspired the image.
            </p>
            <p>
               The color of the word in the table will indicate whether that word is in the correct place in the phrase (green),
               the word is in the phrase but in the wrong place (yellow), or
               not in the phrase (grey).
            </p>
            <p>
               tip: Treat each image in a grid as an individual image. They aren't a sequence.
            </p>

            <div className={styles.playButton} onClick={() => props.dismiss()}>Let's play</div>
         </div>
      </div>
   )
}
