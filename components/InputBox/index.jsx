import clsx from 'clsx'
import { useState } from 'react'

import getTargetTextArray from '../../utils/targetText'

export default function InputBox({ type }) {
  const [text, setText] = useState('')

  const targetText = getTargetTextArray(type)
  console.log(type, targetText)

  return (
    <input
      onChange={e => setText(e.target.value)}
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
