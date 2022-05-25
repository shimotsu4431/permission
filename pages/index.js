import Head from 'next/head'

import InputBox from '../components/InputBox'

export default function Home() {
  return (
    <div className="min-h-screen bg-indigo-50">
      <Head>
        <title>Permission Simulator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-w-[880px] p-6">
        <header className="mb-6">
          <h1 className="mb-2 text-3xl font-bold">Permission Simulator</h1>
          <p>
            Permission Simulator は Linux
            で扱われるファイルの権限管理のシミュレーターです。
          </p>
        </header>

        <div className="flex">
          <div>
            <InputBox index={0} type="file" />
          </div>
          <div className="ml-4">
            <InputBox index={1} type="read" />
            <InputBox index={2} type="write" />
            <InputBox index={3} type="execute" />
          </div>
          <div className="ml-4">
            <InputBox index={4} type="read" />
            <InputBox index={5} type="write" />
            <InputBox index={6} type="execute" />
          </div>
          <div className="ml-4">
            <InputBox index={7} type="read" />
            <InputBox index={8} type="write" />
            <InputBox index={9} type="execute" />
          </div>
        </div>
        <div className="mt-4">
          <ul>
            <li>所有者のパーミッション： </li>
            <li>グループのパーミッション： </li>
            <li>その他のユーザーのパーミッション： </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
