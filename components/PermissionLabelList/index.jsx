import PermissionLabel from '../PermissionLabel'

export default function PermissionLabelList({ startIndex }) {
  return (
    <div className="mt-4">
      <ul className="flex">
        <PermissionLabel index={startIndex} label={'読み'} />
        <PermissionLabel index={startIndex + 1} label={'書き'} />
        <PermissionLabel index={startIndex + 2} label={'実行'} />
      </ul>
    </div>
  )
}
