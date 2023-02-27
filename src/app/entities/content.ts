import { InvalidLengthError } from '@infra/errors/invalid-length-error';
import { RequiredValueError } from '@infra/errors/required-value-error';

export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateLenght(content?: string): boolean {
    return !!content && content.length >= 1 && content.length <= 240;
  }

  constructor(content?: string | null) {
    if (!content) {
      throw new RequiredValueError('content: required vaule');
    }

    const isContentLengthValid = this.validateLenght(content);

    if (!isContentLengthValid) {
      throw new InvalidLengthError('content: invalid length');
    }

    this.content = content;
  }
}
