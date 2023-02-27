import { InvalidValueError } from '@infra/errors/invalid-value-error';
import { RequiredValueError } from '@infra/errors/required-value-error';

export class List {
  private readonly list: string;

  get value(): string {
    return this.list;
  }

  private validateValue(list: string): boolean {
    const lowerCaseValue = list.toLowerCase();

    return (
      lowerCaseValue === 'to-do' ||
      lowerCaseValue === 'doing' ||
      lowerCaseValue === 'done'
    );
  }

  constructor(list?: string | null) {
    if (!list) {
      throw new RequiredValueError('list: required vaule');
    }

    const isValueValid = this.validateValue(list);

    if (!isValueValid) {
      throw new InvalidValueError('list: invalid value');
    }

    this.list = list;
  }
}
