import Head from 'next/head'
import { atom, useRecoilValue } from 'recoil'

import InputBox from '../components/InputBox'
import PermissionLabel from '../components/PermissionLabel'
import { getPermissionBinary, getPermissionOctal } from '../utils/permission'

const initArray = [...Array(10)].map((_, i) => {
  return {
    index: i,
    value: '-',
  }
})

export const textState = atom({
  key: 'textState',
  default: initArray,
})

export default function Home() {
  const textList = useRecoilValue(textState)

  const getPermissionTexts = startIndex => {
    const array = textList.slice(startIndex, startIndex + 3)
    const result = [array[0].value, array[1].value, array[2].value]

    return result
  }

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
          <div className="min-w-[216px] text-center">
            <InputBox index={0} type="file" />
            <p className="mt-2 text-sm font-bold">ファイル種別</p>
          </div>

          {/* 所有者 */}
          <div className="ml-4 min-w-[216px]">
            <InputBox index={1} type="read" />
            <InputBox index={2} type="write" />
            <InputBox index={3} type="execute" />
            <p className="mt-2 text-center text-sm font-bold">所有者のアクセス権</p>
            <div className="mt-4 border-t-2">
              <p className="mt-4 text-center text-sm font-bold">8進数</p>
              <p className="mt-2 text-center text-4xl font-bold">
                {getPermissionBinary(getPermissionTexts(1))}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-center text-sm font-bold">2進数</p>
              <p className="mt-2 text-center text-4xl font-bold tracking-widest">
                {getPermissionOctal(getPermissionTexts(1))}
              </p>
            </div>
            <div className="mt-4">
              <ul className="flex">
                <PermissionLabel index={1} label={'読み'} />
                <PermissionLabel index={2} label={'書き'} />
                <PermissionLabel index={3} label={'実行'} />
              </ul>
            </div>
          </div>

          {/* グループ */}
          <div className="ml-4 min-w-[216px]">
            <InputBox index={4} type="read" />
            <InputBox index={5} type="write" />
            <InputBox index={6} type="execute" />
            <p className="mt-2 text-center text-sm font-bold">グループのアクセス権</p>
            <div className="mt-4 border-t-2">
              <p className="mt-4 text-center text-sm font-bold">8進数</p>
              <p className="mt-2 text-center text-4xl font-bold">
                {getPermissionBinary(getPermissionTexts(4))}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-center text-sm font-bold">2進数</p>
              <p className="mt-2 text-center text-4xl font-bold tracking-widest">
                {getPermissionOctal(getPermissionTexts(4))}
              </p>
            </div>
            <div className="mt-4">
              <ul className="flex">
                <PermissionLabel index={4} label={'読み'} />
                <PermissionLabel index={5} label={'書き'} />
                <PermissionLabel index={6} label={'実行'} />
              </ul>
            </div>
          </div>

          {/* その他のユーザー */}
          <div className="ml-4 min-w-[216px]">
            <InputBox index={7} type="read" />
            <InputBox index={8} type="write" />
            <InputBox index={9} type="execute" />
            <p className="mt-2 text-center text-sm font-bold">
              その他のユーザーのアクセス権
            </p>
            <div className="mt-4 border-t-2">
              <p className="mt-4 text-center text-sm font-bold">8進数</p>
              <p className="mt-2 text-center text-4xl font-bold">
                {getPermissionBinary(getPermissionTexts(7))}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-center text-sm font-bold">2進数</p>
              <p className="mt-2 text-center text-4xl font-bold tracking-widest">
                {getPermissionOctal(getPermissionTexts(7))}
              </p>
            </div>
            <div className="mt-4">
              <ul className="flex">
                <PermissionLabel index={7} label={'読み'} />
                <PermissionLabel index={8} label={'書き'} />
                <PermissionLabel index={9} label={'実行'} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
