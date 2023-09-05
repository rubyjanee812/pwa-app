'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

export default function StroageQuota() {
  useEffect(() => {});
  return (
    <>
      <Head>
        <title>Storage & Quota Test</title>
      </Head>

      <Script
        src="./script.js"
        strategy="lazyOnload"
        type="module"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="lg:fixed mb-3 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Storage & Quota Test &nbsp;
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

        <div className="relative flex mb-3 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer">
            <p>
              <b>Quota:</b>
              <span id="quota">not supported</span>
              <br />
              <b>Used:</b>
              <span id="used">not supported</span>
              <br />
              <b>Remaining:</b>
              <span id="remaining">not supported</span>
            </p>

            <p>
              <b>Items Stored:</b> (1MB each)
              <br />
              <code id="countTotal">calculating...</code> (total) <br />
              <code id="countIDB">calculating...</code> (IndexedDB) <br />
              <code id="countCache">calculating...</code> (Cache API) <br />
              <code id="countLocalStorage">
                calculating...
              </code> (LocalStorage) <br />
              <code id="countSessionStorage">calculating...</code>{' '}
              (SessionStorage)
            </p>
          </div>

          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer">
            <div>
              <div>IndexedDB</div>
              <button id="buttAddIDB" type="button">
                Add 1MB
              </button>
              <button id="buttFillIDB" type="button">
                Fill (<span id="fillIDBStatus">off</span>)
              </button>
              <button id="buttClearIDB" type="button" class="red">
                Clear
              </button>
            </div>

            <div>
              <div>Cache Storage</div>
              <button id="buttAddCaches" type="button">
                Add 1MB
              </button>
              <button id="buttFillCaches" type="button">
                Fill (<span id="fillCachesStatus">off</span>)
              </button>
              <button id="buttClearCaches" type="button" class="red">
                Clear
              </button>
            </div>

            <div>
              <div class="inline-block">
                <div>Local Storage</div>
                <button id="buttAddLocal" type="button">
                  Add 1MB
                </button>
                <button id="buttClearLocal" type="button" class="red">
                  Clear
                </button>
              </div>
              <div class="inline-block">
                <div>Session Storage</div>
                <button id="buttAddSession" type="button">
                  Add 1MB
                </button>
                <button id="buttClearSession" type="button" class="red">
                  Clear
                </button>
              </div>
            </div>

            <div>
              <div>Clear Storage</div>
              <button id="buttClear" type="button" class="red">
                Clear All
              </button>
            </div>

            <div>
              <div>
                Persistent Storage (
                <code id="persistResult">not supported</code>)
              </div>
              <button id="buttPersist" type="button" disabled>
                Request
              </button>
            </div>

            <div>
              <div>Install</div>
              <button id="buttInstall" disabled type="button">
                Install
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
