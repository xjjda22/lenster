import type { MirrorablePublication } from '@hey/lens';
import type { FC } from 'react';

import { MenuItem } from '@headlessui/react';
import { TrashIcon } from '@heroicons/react/24/outline';
import stopEventPropagation from '@hey/helpers/stopEventPropagation';
import cn from '@hey/ui/cn';
import { useGlobalAlertStateStore } from 'src/store/non-persisted/useGlobalAlertStateStore';

interface DeleteProps {
  publication: MirrorablePublication;
}

const Delete: FC<DeleteProps> = ({ publication }) => {
  const { setShowPublicationDeleteAlert } = useGlobalAlertStateStore();

  return (
    <MenuItem
      as="div"
      className={({ focus }) =>
        cn(
          { 'dropdown-active': focus },
          'm-2 block cursor-pointer rounded-lg px-2 py-1.5 text-sm text-red-500'
        )
      }
      onClick={(event) => {
        stopEventPropagation(event);
        setShowPublicationDeleteAlert(true, publication);
      }}
    >
      <div className="flex items-center space-x-2">
        <TrashIcon className="size-4" />
        <div>Delete</div>
      </div>
    </MenuItem>
  );
};

export default Delete;
