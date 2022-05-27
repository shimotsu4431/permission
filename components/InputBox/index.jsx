import clsx from 'clsx'
import { useState, useMemo } from 'react'
import { useRecoilState } from 'recoil'

import { textState } from '../../pages/index.jsx'
import getTargetTextArray from '../../utils/targetText'

export default function InputBox({ type, index }) {
  const [textList, setTextList] = useRecoilState(textState)
  const [text, setText] = useState('')

  const targetText = useMemo(() => {
    return getTargetTextArray(type)
  }, [type])

  const handleChange = e => {
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
  }

  return (
    <input
      onChange={e => handleChange(e)}
      maxLength={1}
      value={textList[index].value}
      className={clsx([
        targetText.includes(textList[index].value)
          ? 'border-indigo-600'
          : text === ''
          ? 'border-dashed border-gray-300'
          : 'border-red-600',
        'm-1 h-16 w-16 rounded-sm border-2 text-center text-3xl font-bold outline-none',
      ])}
    ></input>
  )
}
