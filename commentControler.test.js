const {
  submitComment,
  isValidComment,
  isValidSecurityRating
} = require('./commentController');

describe('isValidComment', () => {
  test('valid comment', () => {
    expect(isValidComment('This is a valid comment')).toBe(true);
  });

  test('too short', () => {
    expect(isValidComment('Hi')).toBe(false);
  });

  test('too long', () => {
    expect(isValidComment('a'.repeat(301))).toBe(false);
  });

  test('contains forbidden characters', () => {
    const forbiddenSamples = ['bad"', "bad'", 'bad;', 'bad.', 'bad(', 'bad)', 'bad%'];
    forbiddenSamples.forEach(text => {
      expect(isValidComment(text)).toBe(false);
    });
  });

  test('not a string', () => {
    expect(isValidComment(123)).toBe(false);
  });
});

describe('isValidSecurityRating', () => {
  test('valid integer in range', () => {
    expect(isValidSecurityRating(1)).toBe(true);
    expect(isValidSecurityRating(10)).toBe(true);
  });

  test('below range', () => {
    expect(isValidSecurityRating(0)).toBe(false);
  });

  test('above range', () => {
    expect(isValidSecurityRating(11)).toBe(false);
  });

  test('non-integer', () => {
    expect(isValidSecurityRating(5.5)).toBe(false);
    expect(isValidSecurityRating('5')).toBe(false);
  });
});

describe('submitComment', () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  test('saves valid comment', () => {
    const req = { body: { text: 'Safe comment here', securityRating: 5 } };
    const res = mockResponse();
    submitComment(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Comment saved',
      data: { text: 'Safe comment here', securityRating: 5 }
    });
  });

  test('rejects invalid comment', () => {
    const req = { body: { text: '(', securityRating: 5 } };
    const res = mockResponse();
    submitComment(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid comment text' });
  });

  test('rejects invalid rating', () => {
    const req = { body: { text: 'Nice comment', securityRating: 100 } };
    const res = mockResponse();
    submitComment(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid security rating' });
  });
});

test('valid comment exactly 3 characters', () => {
  expect(isValidComment('abc')).toBe(true);
});

test('valid comment exactly 300 characters', () => {
  expect(isValidComment('a'.repeat(300))).toBe(true);
});

test('non-string types fail', () => {
  expect(isValidComment(null)).toBe(false);
  expect(isValidComment(undefined)).toBe(false);
  expect(isValidComment({})).toBe(false);
  expect(isValidComment([])).toBe(false);
  expect(isValidComment(true)).toBe(false);
});