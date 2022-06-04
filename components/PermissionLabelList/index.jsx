import PermissionLabel from '../PermissionLabel'

const list = ['読み', '書き', '実行']

export default function PermissionLabelList({ startIndex }) {
  return (
    <div className="mt-4">
      <ul className="flex">
        {list.map((item, i) => {
          return <PermissionLabel key={i} index={startIndex + i} label={item} />
        })}
      </ul>
    </div>
  )
}
