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
          <div className="relative w-1/2 rounded-l-xl bg-envelope-blue text-white">
            <span className="text-md absolute top-7 left-14 font-bold">Envelope</span>
            <div className="px-14 py-36">
              <h2 className="mb-3 text-3xl font-bold">Introducing our 2020 report</h2>
              <p className="mb-3 text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
                incididun.
              </p>
              <button className="rounded-md border border-white px-14 py-2">View Report</button>
            </div>
          </div>
          <div className="w-1/2">
            <p>Right side</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
