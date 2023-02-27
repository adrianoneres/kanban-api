import { InvalidLengthError } from '../../../src/infra/errors/invalid-length-error';
import { RequiredValueError } from '../../../src/infra/errors/required-value-error';
import { Title } from '../../../src/app/entities/title';

describe('Title', () => {
  it('should be able to create a title', () => {
    const title = new Title('Test title');

    expect(title.value).toBeTruthy();
  });

  it('should not be able to create an empty title', () => {
    expect(() => new Title('')).toThrow(RequiredValueError);
  });

  it('should not be able to create a title with more than 240 characters', () => {
    expect(() => new Title('a'.repeat(241))).toThrow(InvalidLengthError);
  });
});
