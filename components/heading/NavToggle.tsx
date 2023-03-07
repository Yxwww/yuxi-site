import { Bars3Icon, ChevronUpIcon } from '@heroicons/react/24/solid'
export default function NavToggle({ active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-circle no-animation btn-outline btn-primary`}
    >
      {active ? (
        <Bars3Icon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  )
}
