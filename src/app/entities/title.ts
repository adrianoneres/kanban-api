import { InvalidLengthError } from '@infra/errors/invalid-length-error';
import { RequiredValueError } from '@infra/errors/required-value-error';

export class Title {
  private readonly title: string;

  get value(): string {
    return this.title;
  }

  private validateLenght(title?: string): boolean {
    return !!title && title.length >= 1 && title.length <= 240;
  }

  constructor(title?: string | null) {
    if (!title) {
      throw new RequiredValueError('title: required vaule');
    }

    const isTitleLengthValid = this.validateLenght(title);

    if (!isTitleLengthValid) {
      throw new InvalidLengthError('title: invalid length');
    }

    this.title = title;
  }
}
