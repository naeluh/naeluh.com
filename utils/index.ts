const hexToRGBArray = (color: string) => {
  if (color.length === 3)
    color =
      color.charAt(0) +
      color.charAt(0) +
      color.charAt(1) +
      color.charAt(1) +
      color.charAt(2) +
      color.charAt(2);
  else if (color.length !== 6) throw 'Invalid hex color: ' + color;
  var rgb = [];
  for (var i = 0; i <= 2; i++) rgb[i] = parseInt(color.substr(i * 2, 2), 16);
  return rgb;
};

const luma = (color: string) => {
  var rgb = typeof color === 'string' ? hexToRGBArray(color) : color;
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
};

export const randomColor = (): string => {
  const color = Math.random().toString(16).slice(2, 8).toUpperCase();
  if (luma(color) >= 200) {
    return randomColor();
  } else {
    return `#${color}`;
  }
};
