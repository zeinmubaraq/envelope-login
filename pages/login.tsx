import type {NextPage} from 'next';
import Head from 'next/head';

const Login: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-2">
      <Head>
        <title>Login - Envelope</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="flex w-2/3 max-w-4xl rounded-xl bg-white shadow-xl">
          <div className="w-2/5 rounded-l-xl bg-envelope-blue p-5 text-white">
            <p>Left side</p>
          </div>
          <div className="w-3/5">
            <p>Right side</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
