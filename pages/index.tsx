import type {NextPage} from 'next';
import Head from 'next/head';
import {BsBoxArrowUpRight} from 'react-icons/bs';
import LoginForm from '../components/LoginForm';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-2">
      <Head>
        <title>Login - Envelope</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="flex w-2/3 max-w-4xl rounded-xl bg-white shadow-xl">
          <div className="hidden w-1/2 rounded-l-xl bg-envelope-blue text-white lg:block">
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
          <div className="relative w-full px-10 py-32 lg:w-1/2">
            <span className="absolute top-5 left-6 text-2xl font-bold text-envelope-blue lg:hidden">
              Envelope
            </span>
            <div className="mb-6 text-left">
              <h2 className="text-3xl font-bold text-envelope-blue">Welcome back</h2>
              <span className="text-xl font-bold text-gray-500">Sign in to continue</span>
            </div>
            <div>
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
