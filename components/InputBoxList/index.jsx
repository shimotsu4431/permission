import InputBox from '../InputBox'

export default function InputBoxList({ startIndex }) {
  return (
    <>
      <InputBox index={startIndex} type="read" />
      <InputBox index={startIndex + 1} type="write" />
      <InputBox index={startIndex + 2} type="execute" />
    </>
  )
}
