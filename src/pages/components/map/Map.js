// import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// console.log(props.position.split(','))
const Map = withGoogleMap((props) =>(
  // console.log(parseFloat(props.location[0]),parseFloat(props.location[1]) )  
    <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: parseFloat(props.location[0]), lng:parseFloat(props.location[1]) }}
    >
      <Marker position={{lat: parseFloat(props.location[0]), lng:parseFloat(props.location[1])}} />
  </GoogleMap>
));

export default Map;
