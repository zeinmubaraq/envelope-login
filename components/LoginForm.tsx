import {useState} from 'react';

function LoginForm() {
  const [Error, setError] = useState(false);
  const [details, setDetails] = useState({email: '', password: ''});

  const database = [
    {
      email: 'admin@admin.com',
      password: 'admin1234',
    },
  ];

  const handleSubmit = (e: any) => {
    // Prevent page reload
    e.preventDefault();

    const userData = database.find(user => user.email === details.email);

    if (userData) {
      if (userData.password !== details.password) {
        setError(true);
      } else {
        alert('succes login');
      }
    } else {
      setError(true);
    }

    console.log(Error);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-gray-100 py-7 px-5 shadow-lg">
      <div className="relative">
        <span className="absolute -top-2.5 left-2 bg-white px-1 text-sm text-gray-500">Email</span>
        <input
          className="mb-5 block w-full rounded-md border border-gray-200 py-2 px-3 focus:border-envelope-blue focus:outline-none"
          type="email"
          name="email"
          id="email"
          onChange={e => setDetails({...details, email: e.target.value})}
          required
        />
      </div>
      <div className="relative">
        <span className="absolute -top-2.5 left-2 bg-white px-1 text-sm text-gray-500">
          Password
        </span>
        <input
          type="password"
          name="password"
          id="password"
          className="mb-2 block w-full border border-gray-200 py-2 px-3 focus:border-envelope-blue focus:outline-none"
          onChange={e => setDetails({...details, password: e.target.value})}
          required
        />
      </div>
      {Error ? (
        <span className="mb-5 block text-left text-xs text-red-500">Invalid email or passwod</span>
      ) : (
        ''
      )}
      <a
        href="#"
        className="block text-left text-sm font-medium text-envelope-blue hover:text-envelope-blue-d"
      >
        Forgot password?
      </a>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <span className="text-left text-sm font-medium text-gray-600">New user? </span>
          <a
            href="#"
            className="text-left text-sm font-medium text-envelope-blue hover:text-envelope-blue-d"
          >
            Create account
          </a>
        </div>
        <input
          type="submit"
          value="Sign in"
          className="rounded bg-envelope-blue py-2 px-4 text-sm font-medium text-white hover:bg-envelope-blue-d"
        />
      </div>
    </form>
  );
}

export default LoginForm;
