import InputBox from '../InputBox'

const list = ['read', 'write', 'execute']

export default function InputBoxList({ startIndex }) {
  return (
    <>
      {list.map((item, i) => {
        return <InputBox key={i} index={startIndex + i} type={item} />
      })}
    </>
  )
}
