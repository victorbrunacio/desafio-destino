import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import styles from "./Mapa.module.scss"
import { motion } from 'framer-motion'

const Map = ({city}) => {
  console.log(city)
  const latLong = city?.split(",")
 return city ?  (
    <div className={styles.mapWrap}
    
    >
      <MapContainer center={[28.0941194, -81.7557676]} zoom={1} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[parseFloat(latLong[0]), parseFloat(latLong[1])]}>
        </Marker>


      </MapContainer>
    </div>) : 
      (
        <motion.div className={styles.mapWrap}
        initial={{ scale: 0 }}
         animate={{scale:1}}
         transition={{delay:1, duration:2}}
        >
          <MapContainer center={[28.0941194, -81.7557676]} zoom={1} scrollWheelZoom={true}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
    
          
    
    
          </MapContainer>
        </motion.div> 
    )
      }

export default Map