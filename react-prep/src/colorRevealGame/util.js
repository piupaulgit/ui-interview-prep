const _getRandomColor = () => {
  const randomNumber = () => Math.floor(Math.random() * 256);
  const r = randomNumber().toString(16).padStart(2, "0");
  const g = randomNumber().toString(16).padStart(2, "0");
  const b = randomNumber().toString(16).padStart(2, "0");

  return `#${r}${g}${b}`;
};

const getRandomColorList = (limit) => {
  const colors = [];
  for (let i = 0; i < limit; i++) {
    colors.push(_getRandomColor());
  }

  return colors;
};

export default getRandomColorList;
