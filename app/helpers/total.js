import { helper } from '@ember/component/helper';

export function total(params) {
    var tasks=params[0];
    if (params.length>1) {
        return tasks.filterBy('status',params[1]).length;
    }

    return tasks.content.length;
}

export default helper(total);
