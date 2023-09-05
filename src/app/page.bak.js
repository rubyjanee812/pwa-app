'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCY8yZCnf-qiwURwgIyDKzZANdvDgVC9Bk',
  authDomain: 'hv-rn-0805.firebaseapp.com',
  projectId: 'hv-rn-0805',
  storageBucket: 'hv-rn-0805.appspot.com',
  messagingSenderId: '783541157769',
  appId: '1:783541157769:web:e8a7f06aa54920cf836b58',
  measurementId: 'G-ZGFW0KW58X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  });
}

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
getToken(messaging, {
  vapidKey:
    'BGCoSvOcK7F8DqJxMcj4AX8mizcinL6IaKjdQrEFoBmVdf92p7nhJ7hrXoJr02iIH6tdOUUssAJajYRBgF9dHik',
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log('currentToken', currentToken);
    } else {
      // Show permission request UI
      requestPermission();
      console.log(
        'No registration token available. Request permission to generate one.',
      );
      // ...
    }
  })
  .catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });

export default function Home() {
  const [info, setInfo] = useState({});

  const fechStorage = async () => {
    if (navigator.storage && navigator.storage.estimate) {
      const { usage, quota } = await navigator.storage.estimate();
      // quota.usage -> Number of bytes used.
      // quota.quota -> Maximum number of bytes available.

      const percentUsed = Math.round((usage / quota) * 100);
      const usageInMib = Math.round(usage / (1024 * 1024));
      const quotaInMib = Math.round(quota / (1024 * 1024));
      const remainingInMib = Math.round((quota - usage) / (1024 * 1024));

      setInfo({ percentUsed, usageInMib, quotaInMib, remainingInMib });
      console.log(`You can write up to ${remainingInMib} more bytes.`);
    }
  };
  useEffect(() => {
    fechStorage();
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Stroage{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Used: {info.usageInMib?.toLocaleString('en') ?? ''} MB
          </p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Available: {info.quotaInMib?.toLocaleString('en') ?? ''} MB
          </p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Percentage Used: {info.percentUsed?.toLocaleString('en') ?? ''}%
          </p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Remain: {info.remainingInMib?.toLocaleString('en')} MB.
          </p>
        </div>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
            Available: {info.quotaInMib?.toLocaleString('en') ?? ''} MB
          </p>
        </a>
      </div>
    </main>
  );
}
