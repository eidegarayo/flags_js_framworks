import StyledMap from './Map.styles';

function Map() {
  return (
    <StyledMap>
      <iframe
        width="425"
        height="350"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-20.258789062500004%2C17.895114303749143%2C-4.526367187500001%2C50.98609893339354&amp;layer=mapnik"
      ></iframe>
    </StyledMap>
  );
}

export default Map;
