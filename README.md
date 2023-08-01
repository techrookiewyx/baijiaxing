# baijiaxing
Hundred Family Surnames
It's an array of  Hundred of Chinese Family Surnames.
## Install
This package is a pure ESM package. It cannot use require.
```bash
npm install @wyxin/baijiaxing
```
## Usage
```js
import { name, py, pinxie } from "@wyxin/baijiaxing";
console.log(name)      // => ['赵','钱','孙','李','吾'......]
console.log(name[4])   // => '吾'
console.log(py)        // => ['zhào','qián','sūn','lǐ']
console.log(pinxie)    // => ['zhao','qian','sun','li']
console.log(py[name.indexOf('孙')])  // => 'sūn'
```
You can also use it this way.
```js
import name from "@wyxin/baijiaxing/name.json";
import name from "@wyxin/baijiaxing/py.json";
import name from "@wyxin/baijiaxing/pinxie.json";
console.log(name)      // => ['赵','钱','孙','李','吾'......]
console.log(name[4])   // => '吾'
console.log(py)        // => ['zhào','qián','sūn','lǐ']
console.log(pinxie)    // => ['zhao','qian','sun','li']
```
## License
It is an open-source npm package licensed under the "MIT License".