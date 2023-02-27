import { InvalidValueError } from '../../../src/infra/errors/invalid-value-error';
import { RequiredValueError } from '../../../src/infra/errors/required-value-error';
import { List } from '../../../src/app/entities/list';

describe('BaseEntity', () => {
  it('should be able to create a list', () => {
    const list = new List('to-do');

    expect(list.value).toBeTruthy();
  });

  it('should not be able to create an empty list', () => {
    expect(() => new List('')).toThrow(RequiredValueError);
  });

  it('should not be able to create a list with an invalid value', () => {
    expect(() => new List('invalid-value')).toThrow(InvalidValueError);
  });
});
