import specifications from '../js/specifications';

test('color scheme', () => {
  const result = specifications({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});
test('color scheme', () => {
  const result = specifications({ name: 'mag', health: 15 });
  expect(result).toBe('wounded');
});
test('color scheme', () => {
  const result = specifications({ name: 'mag', health: 5 });
  expect(result).toBe('critical');
});
