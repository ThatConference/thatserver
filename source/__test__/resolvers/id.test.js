import resolver from '../../resolvers/id';

describe('resolver tests - id', () => {
  test('returns correct value when _id is set', () => {
    const root = {
      _id: 'asdf',
    };
    expect(resolver(root)).toBe('asdf');
  });

  test('returns correct value when id is set', () => {
    const root = {
      id: 'asdf',
    };
    expect(resolver(root)).toBe('asdf');
  });

  test('returns undefined when no _id or id is on object', () => {
    const root = {
      noIdListed: 'asdf',
    };
    expect(resolver(root)).toBeUndefined();
  });
});
