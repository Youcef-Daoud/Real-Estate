
import useState from 'react';
import GoogleMapReact from 'google-map-react';

function Map() {
    const center = useState({ lat: 37.7749, lng: -122.4194 })[0];
    const zoom = useState(11)[0];
    const key = "AIzaSyAX_W-OXOEopGabFc3In0Nt5OWzsZT7F6g"
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: key }}
            center={center}
            zoom={zoom}
        >
        </GoogleMapReact>
        </div>
    );
}

export default Map
