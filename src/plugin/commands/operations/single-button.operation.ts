import type { ICommand, IAccessor } from '@univerjs/core';
import { CommandType } from '@univerjs/core';

export const SingleButtonOperation: ICommand = {
    id: 'custom-menu.operation.single-button',
    type: CommandType.OPERATION,
    handler: async (accessor: IAccessor) => {
        alert('Single button operation');
        return true;
    },
};