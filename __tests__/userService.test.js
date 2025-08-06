import { createUser } from '../src/api/userService';

global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test('envia usuário com sucesso', async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ id: 1, name: 'Lucas' }),
  });

  const user = await createUser({ name: 'Lucas' });
  expect(user).toEqual({ id: 1, name: 'Lucas' });
});

test('falha ao cadastrar usuário', async () => {
  fetch.mockResolvedValueOnce({ ok: false });
  await expect(createUser({})).rejects.toThrow('Erro ao cadastrar usuário');
});
