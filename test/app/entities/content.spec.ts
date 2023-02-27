import { InvalidLengthError } from '../../../src/infra/errors/invalid-length-error';
import { RequiredValueError } from '../../../src/infra/errors/required-value-error';
import { Content } from '../../../src/app/entities/content';

describe('BaseEntity', () => {
  it('should be able to create a content', () => {
    const content = new Content('Test content');

    expect(content.value).toBeTruthy();
  });

  it('should not be able to create an empty content', () => {
    expect(() => new Content('')).toThrow(RequiredValueError);
  });

  it('should not be able to create a content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow(InvalidLengthError);
  });
});
