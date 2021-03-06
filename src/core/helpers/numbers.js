export function roundFloat(value, decimals = 2) {
  return Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
}
