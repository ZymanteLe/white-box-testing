// @ts-nocheck
const {
    submitComment,
    isValidComment,
    isValidSecurityRating
  } = require('./commentController');
  
  describe('Validation Functions', () => {
    test('isValidComment - valid input', () => {
      expect(isValidComment('This is okay')).toBe(true);
    });
  
    test('isValidComment - too short', () => {
      expect(isValidComment('Hi')).toBe(false);
    });
  
    test('isValidComment - too long', () => {
      expect(isValidComment('a'.repeat(301))).toBe(false);
    });
  
    test('isValidComment - contains forbidden characters', () => {
      expect(isValidComment('Hello (test)')).toBe(false);
      expect(isValidComment("Quote: 'dangerous'")).toBe(false);
    });
  
    test('isValidSecurityRating - valid rating', () => {
      expect(isValidSecurityRating(5)).toBe(true);
    });
  
    test('isValidSecurityRating - out of range', () => {
      expect(isValidSecurityRating(0)).toBe(false);
      expect(isValidSecurityRating(11)).toBe(false);
    });
  
    test('isValidSecurityRating - not an integer', () => {
      expect(isValidSecurityRating(4.5)).toBe(false);
    });
  });
  