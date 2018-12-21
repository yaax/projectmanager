import { helper } from '@ember/component/helper';

export function sum(params) {
    let sum = 0;
    params.forEach(param=>{
        sum+=param;
    });
    return sum;
}

export default helper(sum);
