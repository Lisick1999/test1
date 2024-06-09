export default function specifications(objectHealth) {
  if (objectHealth.health >= 50) {
    return 'healthy';
  }
  if (objectHealth.health >= 15 && objectHealth.health < 50) {
    return 'wounded';
  }
  return 'critical';
}
