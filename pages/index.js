import { useEffect } from 'react'
import Head from 'next/head'
import dedent from 'dedent'
import hljs from '../utils/highlight'
import { SiGithub } from 'react-icons/si'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import Nexus from '../public/nexus.svg'

const STX_ADDRESS =
  process.env.NODE_ENV === 'development'
    ? 'ST2X2FYCY01Y7YR2TGC2Y6661NFF3SMH0NGXPWTV5'
    : 'SP2D71SFBCAX1VE664GKQP2Y7YMRDW6YJGVQVXB1T'

export default function Home() {
  useEffect(() => {
    stx.me(STX_ADDRESS)
    hljs.highlightAll()
  }, [])

  return (
    <>
      <Head>
        <title>stx.me</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>

        <link rel="manifest" href="/site.webmanifest"></link>

        <script src="https://unpkg.com/stx-me/dist/stx.me.js"></script>

        <link
          rel="stylesheet"
          href="https://unpkg.com/stx-me/dist/stx.me.css"
        ></link>
      </Head>

      <nav className="max-w-7xl mx-auto py-10 px-20 flex justify-between">
        <div className="flex items-center space-x-2">
          <Nexus className="w-5" />
          <span className="font-medium tracking-wide text-xl">stx.me</span>
        </div>

        <a
          href="https://github.com/amorriscode/stx-me"
          className="hover:opacity-50"
          target="_blank"
        >
          <SiGithub className="text-2xl" />
        </a>
      </nav>

      <main className="max-w-7xl mx-auto space-y-20 px-4">
        <header className="w-full bg-center bg-no-repeat rounded-2xl flex flex-col justify-center items-center text-white lg:text-center">
          <p className="text-5xl md:text-6xl w-2/3 tracking-wide leading-snug">
            Hassle-free STX donations for any website
          </p>

          <p className="mt-16 w-2/3 lg:w-1/3 text-lg">
            Allow your biggest fans to support your work through a
            Bitcoin-powered internet.
          </p>
        </header>

        <section className="bg-white rounded-2xl p-10 md:p-20 md:grid grid-cols-2 gap-10 space-y-10">
          <div className="space-y-10">
            <h2 className="text-5xl tracking-wide leading-snug">
              Receive donations in under 5 minutes
            </h2>

            <ul className="list-decimal list-inside space-y-2">
              <li>
                Add a <code>div</code> to your page
              </li>
              <li>
                Add the{' '}
                <span className="font-medium tracking-wide">stx.me</span>{' '}
                library to your page
              </li>
              <li>Profit</li>
            </ul>

            <p className="flex items-center">
              Try it out <HiOutlineArrowNarrowRight className="ml-2 text-2xl" />
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center text-4xl bg-stx-gray p-10 md:p-20 rounded-2xl">
            <div id="stx-me"></div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl tracking-wide leading-snug">
            Getting Started
          </h2>

          <div>
            <h4 className="text-xl tracking-wide leading-snug mb-2">
              Add the <span className="font-medium tracking-wide">stx.me</span>{' '}
              container to your webpage
            </h4>

            <pre>
              <code>{dedent`
                <div id="stx-me"></div>
              `}</code>
            </pre>
          </div>

          <div>
            <h4 className="text-xl tracking-wide leading-snug mb-2">
              Add the <span className="font-medium tracking-wide">stx.me</span>{' '}
              script to your webpage
            </h4>

            <pre>
              <code>{dedent`
                <script src="https://unpkg.com/stx-me/dist/stx.me.js"></script>
              `}</code>
            </pre>
          </div>

          <div>
            <h4 className="text-xl tracking-wide leading-snug mb-2">
              Initialize{' '}
              <span className="font-medium tracking-wide">stx.me</span> with
              your wallet address
            </h4>

            <pre>
              <code>{dedent`
                <script>
                    stx.me('SP2D71SFBCAX1VE664GKQP2Y7YMRDW6YJGVQVXB1T');
                </script>
              `}</code>
            </pre>
          </div>

          <div>
            <h4 className="text-xl tracking-wide leading-snug mb-2">
              Add <span className="font-medium tracking-wide">stx.me</span>{' '}
              stylesheet (optional)
            </h4>

            <pre className="mb-2">
              <code>{dedent`
                <link rel="stylesheet" href="https://unpkg.com/stx-me/dist/stx.me.css"></link>
              `}</code>
            </pre>

            <p className="text-xs">
              The example on this page uses the{' '}
              <span className="font-medium tracking-wide">stx.me</span>{' '}
              stylesheet
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-4xl mb-2 tracking-wide leading-snug">
                Configuration
              </h3>

              <p className="mb-4">
                The <code>stx.me</code> function takes a second, optional
                parameter of options. The following options are allowed:
              </p>

              <pre>
                <code className="language-typescript">{dedent`
                  interface AppDetails {
                    name: string;
                    icon: string;
                  }

                  interface ConfigOptions {
                    showAddress?: boolean;
                    appDetails?: AppDetails;
                    successMessage?: string;
                    buttonText?: string;
                  }
                `}</code>
              </pre>
            </div>

            <div className="bg-white rounded-2xl p-5 md:p-10">
              <h4 className="text-3xl mb-2 tracking-wide leading-snug">
                AppDetails
              </h4>

              <p className="mb-10">
                Used to configure what users will see witihin the Stacks wallet.
              </p>

              <table class="w-full table-fixed">
                <thead className="border-b-2 border-black text-left">
                  <tr className="h-14">
                    <th>Parameter</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="h-20">
                    <td>name</td>
                    <td>
                      <code>document.title</code>
                    </td>
                    <td>An app name to display in the Stacks wallet.</td>
                  </tr>

                  <tr className="h-20">
                    <td>icon</td>
                    <td>
                      <code>/favicon.ico</code>
                    </td>
                    <td>
                      The path to an icon to display in the Stacks wallet.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-2xl p-5 md:p-10">
              <h4 className="text-3xl mb-2 tracking-wide leading-snug">
                ConfigOptions
              </h4>

              <p className="mb-10">
                Used to configure how the{' '}
                <span className="font-medium tracking-wide">stx.me</span> button
                behaves.
              </p>

              <table className="w-full table-fixed">
                <thead className="border-b-2 border-black text-left">
                  <tr className="h-14">
                    <th>Parameter</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="h-20">
                    <td>showAddress</td>
                    <td>
                      <code>false</code>
                    </td>
                    <td>Display your stacks address on your webpage.</td>
                  </tr>

                  <tr className="h-20">
                    <td>appDetails</td>
                    <td>See AppDetails</td>
                    <td>Configuration for the Stacks wallet pop ups.</td>
                  </tr>

                  <tr className="h-20">
                    <td>successMessage</td>
                    <td>Thanks for your donation!</td>
                    <td>
                      A message to display to users on successful donation.
                    </td>
                  </tr>

                  <tr className="h-20">
                    <td>buttonText</td>
                    <td>Send Me STX</td>
                    <td>A message to display on the donation button.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto p-10 flex justify-center items-center">
        Made with <Nexus className="w-4 mx-1" /> by{' '}
        <a
          href="https://anthonymorris.dev"
          className="ml-1 text-stx-blue hover:opacity-75"
          target="_blank"
        >
          amorriscode
        </a>
      </footer>
    </>
  )
}
