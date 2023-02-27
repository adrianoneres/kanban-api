import {
  AUTH_DEFAULT_USERNAME,
  AUTH_DEFAULT_PASSWORD,
} from '../../../src/infra/config/env';
import { InvalidUsernameOrPasswordError } from '../../../src/infra/errors/invalid-username-password-error';
import { AuthenticateService } from '../../../src/app/use-cases/authenticate.service';

describe('AuthenticateService', () => {
  it('should be able to authenticate', async () => {
    const authenticateService = new AuthenticateService();

    const tokenData = await authenticateService.execute({
      username: AUTH_DEFAULT_USERNAME,
      password: AUTH_DEFAULT_PASSWORD,
    });

    expect(tokenData.token).toBeTruthy();
  });

  it('should not be able to authenticate with invalid credentials', async () => {
    const authenticateService = new AuthenticateService();

    expect(
      authenticateService.execute({
        username: 'invalid-username',
        password: 'invalid-password',
      }),
    ).rejects.toThrow(InvalidUsernameOrPasswordError);
  });
});
