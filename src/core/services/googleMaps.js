import fetch from 'node-fetch';

export default class StaticGoogleMap {
  constructor(apiKey) {
    if (!apiKey) throw new Error('Missing Google Maps ApiKey');
    this.apiKey = apiKey;
  }

  getMap = async (location, pinColor = '#0077CC') => {
    if (!location) return null;
    const endpoint = 'https://maps.googleapis.com/maps/api/staticmap';
    const queryString = `zoom=15&size=540x190&maptype=roadmap&markers=color:0x${pinColor}%7C${location.lat},${location.lng}&sensor=false&key=${this.apiKey}`;

    return fetch(`${endpoint}?${queryString}`)
      .then(res => res.url)
      .catch(err => console.error(err));
  };
}
