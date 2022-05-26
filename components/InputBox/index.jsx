import clsx from 'clsx'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

import { textState } from '../../pages/index.jsx'
import getTargetTextArray from '../../utils/targetText'

export default function InputBox({ type, index }) {
  const [textList, setTextList] = useRecoilState(textState)
  const [text, setText] = useState('')

  const targetText = getTargetTextArray(type)

  return (
    <input
      onChange={e => {
        setText(e.target.value)

        const newValue = {
          index: index,
          value: e.target.value,
        }
        const newList = [
          ...textList.slice(0, index),
          newValue,
          ...textList.slice(index + 1),
        ]

        setTextList(newList)
      }}
      maxLength={1}
      className={clsx([
        targetText.includes(text)
          ? 'rounded-sm border-2 border-indigo-600'
          : text === ''
          ? 'rounded-sm border-2 border-dashed border-indigo-100'
          : 'rounded-sm border-2 border-red-600',
        'w-16',
        'h-16',
        'text-center',
        'text-3xl',
        'font-bold',
        'm-1',
        'outline-none',
      ])}
    ></input>
  )
}
