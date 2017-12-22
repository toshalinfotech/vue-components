# g-components
> A Vue component to apply input style as Google

**Input**

```html
<g-input type="text" value="Hello World!"></g-input>
```

## Install

yarn

```bash
yarn add g-components
```

npm


```bash
npm install g-components --save
```

## Setup

Register the plugin.

```js
import GInput from 'g-components';

Vue.use(GInput);
```

Or register components manually.

```js
import {GInput} from 'g-components';

Vue.component('g-input', GInput);
```

## Params

### Input

Parameter | Type | Default
--------- | ---- | ------
id | `string` | checkbox-id-(element uid)
class-name | `string` | `null`
name | `string` | `null`
v-model | `string`, `number` | `null`
value | `string` or `number` | `null`
type | `text`, `password`, `date`, `number`, `datetime-local`,`month`, `search`, `tel`, `time`,`url` or `week`, | `text`
placeholder | `string` | `null`
pattern | `string` | `null`
validation-message | `string` | `null`
required | `boolean` | `false`
disabled | `boolean` | `false`
min | `number` | `null`
max | `number` | `null`
step | `number` | `null`

## Events

Both components emit the `input` event to work with `v-model` and `change`.

## License

MIT © [Toshal Infotech](https://github.com/toshalinfotech)