// const ACCESS_TOKEN_MAP_BOX = `access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`
const ACCESS_TOKEN_MAP_BOX = 'access_token=pk.eyJ1IjoibGNzZGV2cyIsImEiOiJja3dtcHc2bXUyZWR5MnZubzcxMGNmMTgzIn0.QZAK-exntAinLz5ylt8U4Q'

export const fetchLocalMapBox = (local: string) =>
fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
)
  .then(response => response.json())
  .then(data => data);