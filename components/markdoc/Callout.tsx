import { CALLOUT_TYPES } from '@/markdoc/schema/Callout';
// import AlertIcon from '@heroicons/react/24/outline/ExclamationCircleIcon';
import NoteIcon from '@heroicons/react/24/outline/PencilSquareIcon';

type CalloutIcon = (typeof CALLOUT_TYPES)[number];

function CalloutIcons({ icon }: { icon: CalloutIcon }) {
  return (
    <span>{icon === 'note' ? <NoteIcon className="h-6 w-6" /> : null}</span>
  );
}

const Callout = ({ title, type, children }) => {
  return (
    <div className="callout	bg-base-100 pt-4 pb-4 sm:pl-4 pl-2 border-blue-400 border-l-4">
      <div className="content flex items-center mb-2">
        <CalloutIcons icon={type} />
        <span className="ml-2">{title}</span>
      </div>
      <div className="italic">{children}</div>
    </div>
  );
};

export default Callout;
