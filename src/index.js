import nav from './nav';
import { top , bottom} from './footer';

//webpack doesnot like common js 
//so use esm for it
import makeButton from './button';

 
console.log(nav);
console.log(top, bottom , makeButton('submit Button'));