import { LoginData } from './loginData';

export async function loadEnvironmentSpecificData(
  env: string
): Promise<LoginData> {
  let path = '';
  switch (env) {
    case 'prod':
      path = '../prod/fixtures/loginData';
      break;
    case 'stage':
      path = '../stage/fixtures/loginData';
      break;
    case 'dev':
      path = '../dev/fixtures/loginData';
      break;
    default:
      throw new Error(`Unknown environment: ${env}`);
  }

  const module = await import(path);

  console.log(path);
  console.log(module);

  return module as LoginData;
}
