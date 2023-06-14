const domain = 'http://127.0.0.1:3000';
const endpoint = `${domain}/auth`;

export type SignInProps = {
  username: string;
  password: string;
}

const authService = {
  signIn: async ({ username, password }: SignInProps) => {
    const response = await fetch(`${endpoint}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
  },
};

export default authService;