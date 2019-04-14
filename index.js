// Code your solution here
const batteryBatches = [1, 7, 5, 7, 2, 5, 1, 3];

const totalBatteries = batteryBatches.reduce(
  (total, batch) => batch + total,
  0
);
