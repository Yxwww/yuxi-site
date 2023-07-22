import { CALLOUT_TYPES_READONLY } from '@/markdoc/schema/Callout';
import NoteIcon from '@heroicons/react/24/outline/DocumentTextIcon';
import CheckIcon from '@heroicons/react/24/outline/CheckBadgeIcon';
import WarningIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon';
import CautionIcon from '@heroicons/react/24/outline/BellAlertIcon';
import { FC, ReactNode } from 'react';

type CalloutIcon = (typeof CALLOUT_TYPES_READONLY)[number];

const CalloutTypeToIconMap: Record<CalloutIcon, any> = {
  caution: CautionIcon,
  note: NoteIcon,
  check: CheckIcon,
  warning: WarningIcon,
};
/**
 * render correct icon based on Callout type
 * NOTE: only handles note for now. expand if needed
 */
function CalloutIcons({
  icon,
  className,
}: {
  icon: CalloutIcon;
  className: string;
}) {
  const IconComponent = CalloutTypeToIconMap[icon] || NoteIcon;
  return (
    <span>
      <IconComponent className={`h-6 w-6 ${className}`} />
    </span>
  );
}

const DaisyThemeVarMap = ['info', 'success', 'warning', 'error'] as const;
type DaisyThemeVars = (typeof DaisyThemeVarMap)[number];

const CalloutTypeToDaisyThemeVarMap: Record<CalloutIcon, DaisyThemeVars> = {
  caution: 'error',
  note: 'info',
  check: 'success',
  warning: 'warning',
};

const Callout: FC<{
  type: CalloutIcon;
  title: string;
  children: ReactNode;
}> = ({ title, type, children }) => {
  const daisyThemeVar = CalloutTypeToDaisyThemeVarMap[type];
  return (
    <div
      className={`callout	py-2 sm:px-4 px-2 border-${daisyThemeVar} border-l-4 `}
    >
      <div
        className={`content flex item-center justify-start ${
          title ? 'flex-col sm:items-start' : 'flex-col sm:flex-row'
        }`}
      >
        <div className={`flex items-center justify-center sm:mb-0 mb-2`}>
          <CalloutIcons icon={type} className={`text-${daisyThemeVar}`} />
          {title ? <span className="ml-2">{title}</span> : null}
        </div>
        <div className="italic ml-2">{children}</div>
      </div>
    </div>
  );
};

export default Callout;
