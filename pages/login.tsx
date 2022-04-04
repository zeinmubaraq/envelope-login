import type {NextPage} from 'next';
import Head from 'next/head';
import {BsBoxArrowUpRight} from 'react-icons/bs';

const Login: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-2">
      <Head>
        <title>Login - Envelope</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="flex w-2/3 max-w-4xl rounded-xl bg-white shadow-xl">
          <div className="w-1/2 rounded-l-xl bg-envelope-blue text-white">
            <div className="py-6 px-10 text-left font-bold">
              <span className="text-white">Envelope</span>
            </div>
            <div className="px-14 py-36">
              <h2 className="mb-3 text-3xl font-bold">Introducing our 2020 report</h2>
              <p className="mb-5 text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
                incididun.
              </p>
              <a
                href="#"
                className="inline-block rounded-md border border-white px-14 py-2 font-medium hover:bg-white hover:text-envelope-blue"
              >
                View Report{' '}
                <BsBoxArrowUpRight className="mb-1 ml-2 inline-block stroke-1 text-xs" />
              </a>
            </div>
          </div>
          <div className="w-1/2 px-10 py-32">
            <div className="mb-6 text-left">
              <h2 className="text-3xl font-bold text-envelope-blue">Welcome back</h2>
              <span className="text-xl font-bold text-gray-500">Sign in to continue</span>
            </div>
            <div>
              <form className="rounded-lg border border-gray-100 py-7 px-5 shadow-lg">
                <div className="relative">
                  <span className="absolute -top-2.5 left-2 bg-white px-1 text-sm text-gray-500">
                    Email
                  </span>
                  <input
                    className="mb-5 block w-full rounded-md border border-gray-200 py-2 px-3 focus:border-envelope-blue focus:outline-none"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
                <div className="relative">
                  <span className="absolute -top-2.5 left-2 bg-white px-1 text-sm text-gray-500">
                    Password
                  </span>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="mb-2 block w-full border border-gray-200 py-2 px-3 focus:border-envelope-blue focus:outline-none"
                  />
                </div>
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
                  <button
                    type="submit"
                    className="rounded bg-envelope-blue py-2 px-4 text-sm font-medium text-white hover:bg-envelope-blue-d"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
