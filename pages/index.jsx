import Head from 'next/head'
import { atom, useRecoilState } from 'recoil'

import InputBox from '../components/InputBox'
import InputBoxList from '../components/InputBoxList'
import PermissionLabelList from '../components/PermissionLabelList'
import { getPermissionBinary, getPermissionOctal } from '../utils/permission'
import setText from '../utils/setText'

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
  const [textList, setTextList] = useRecoilState(textState)

  const getPermissionTexts = startIndex => {
    const array = textList.slice(startIndex, startIndex + 3)
    const result = [array[0].value, array[1].value, array[2].value]

    return result
  }

  const handleClickSample = pattern => {
    const array = setText(pattern.split(''))

    return setTextList(array)
  }

  return (
    <div>
      <Head>
        <title>Permission Simulator</title>
        <meta
          name="description"
          content="Permission Simulator は Linux で扱われるファイルの権限管理のシミュレーターです。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen min-w-[880px] bg-indigo-50 p-6">
        <header className="mb-10 border-b-2 pb-6">
          <h1 className="mb-2 text-3xl font-bold">Permission Simulator</h1>
          <p>
            Permission Simulator は Linux
            で扱われるファイルの権限管理のシミュレーターです。
          </p>
          <p>すべての入力エリアが青枠で囲われたら、書式は有効です。</p>
          <h2 className="mt-4 mb-2 text-xl font-bold">例</h2>
          <ul>
            <li className="mb-2 text-base">
              <span>drwxrwxrwx</span>
              <button
                onClick={() => {
                  handleClickSample('drwxrwxrwx')
                }}
                className="ml-2 rounded-md border-2 border-indigo-600 bg-white p-1 text-xs hover:bg-indigo-600 hover:text-white"
              >
                適用する
              </button>
            </li>
            <li className="text-base">
              <span>-rwxr-x-w-</span>
              <button
                onClick={() => {
                  handleClickSample('-rwxr-x-w-')
                }}
                className="ml-2 rounded-md border-2 border-indigo-600 bg-white p-1 text-xs hover:bg-indigo-600 hover:text-white"
              >
                適用する
              </button>
            </li>
          </ul>
        </header>

        <div className="flex">
          <div className="min-w-[140px] text-center">
            <InputBox index={0} type="file" />
            <p className="mt-2 text-sm font-bold">ファイル種別</p>
          </div>

          {/* 所有者 */}
          <div className="ml-4 min-w-[216px]">
            <InputBoxList startIndex={1} />
            <p className="mt-2 text-center text-sm font-bold">
              所有者のアクセス権
            </p>
            <div className="mt-4 border-t-2">
              <p className="mt-4 text-center text-sm font-bold">8進数</p>
              <p className="mt-2 text-center text-4xl font-bold">
                {getPermissionOctal(getPermissionTexts(1))}
              </p>
            </div>
            <div className="mt-8 mb-4">
              <p className="text-center text-sm font-bold">2進数</p>
              <p className="mt-2 text-center text-4xl font-bold tracking-widest">
                {getPermissionBinary(getPermissionTexts(1))}
              </p>
            </div>
            <PermissionLabelList startIndex={1} />
          </div>

          {/* グループ */}
          <div className="ml-4 min-w-[216px]">
            <InputBoxList startIndex={4} />
            <p className="mt-2 text-center text-sm font-bold">
              グループのアクセス権
            </p>
            <div className="mt-4 border-t-2">
              <p className="mt-4 text-center text-sm font-bold">8進数</p>
              <p className="mt-2 text-center text-4xl font-bold">
                {getPermissionOctal(getPermissionTexts(4))}
              </p>
            </div>
            <div className="mt-8 mb-4">
              <p className="text-center text-sm font-bold">2進数</p>
              <p className="mt-2 text-center text-4xl font-bold tracking-widest">
                {getPermissionBinary(getPermissionTexts(4))}
              </p>
            </div>
            <PermissionLabelList startIndex={4} />
          </div>

          {/* その他のユーザー */}
          <div className="ml-4 min-w-[216px]">
            <InputBoxList startIndex={7} />
            <p className="mt-2 text-center text-sm font-bold">
              その他のユーザーのアクセス権
            </p>
            <div className="mt-4 border-t-2">
              <p className="mt-4 text-center text-sm font-bold">8進数</p>
              <p className="mt-2 text-center text-4xl font-bold">
                {getPermissionOctal(getPermissionTexts(7))}
              </p>
            </div>
            <div className="mt-8 mb-4">
              <p className="text-center text-sm font-bold">2進数</p>
              <p className="mt-2 text-center text-4xl font-bold tracking-widest">
                {getPermissionBinary(getPermissionTexts(7))}
              </p>
            </div>
            <PermissionLabelList startIndex={7} />
          </div>
        </div>

        {/* ターミナル */}
        <div className="mt-12">
          <div className="flex h-14 w-[500px] items-center bg-slate-800 pl-4">
            <p className="text-white">
              $ chmod{' '}
              {`${getPermissionOctal(
                getPermissionTexts(1)
              )}${getPermissionOctal(
                getPermissionTexts(4)
              )}${getPermissionOctal(getPermissionTexts(7))}`}{' '}
              [filename]
            </p>
          </div>
        </div>

        <div className="mt-4">
          code:{' '}
          <a
            className="underline"
            href="https://github.com/shimotsu4431/permission"
            target={'_blank'}
            rel="noreferrer"
          >
            https://github.com/shimotsu4431/permission
          </a>
        </div>
      </div>
    </div>
  )
}
