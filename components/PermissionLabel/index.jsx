import clsx from 'clsx'
import { useRecoilValue } from 'recoil'

import { textState } from '../../pages/index.jsx'

export default function PermissionLabel({ index, label }) {
  const textList = useRecoilValue(textState)

  const targetValue = () => {
    if (label === '読み') return 'r'
    else if (label === '書き') return 'w'
    else if (label === '実行') return 'x'
  }

  return (
    <li
      className={clsx([
        textList[index].value === targetValue()
          ? 'border-indigo-600 font-bold'
          : 'border-gray-300 text-gray-300',
        'm-1 flex h-9 w-1/3 items-center justify-center rounded-sm border-2 text-sm',
      ])}
    >
      {label}
    </li>
  )
}
