const ticTac = arr => {
  const map = arr.split(',');
  return [[map[0], map[1], map[2]], [map[3], map[4], map[5]], [map[6], map[7], map[8]]];
};

console.log(ticTac('m,.,.,.,t,.,.,.,h'));
