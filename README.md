# vue-g-components
> A Google style Vue components

**Input**

```html
<g-input v-model="ValidationExample" placeholder="Username" pattern="^[a-zA-Z0-9]{4,10}$" validation-message="No Special characters allow!"></g-input>
```

**Checkbox**

```html
<g-checkbox v-model="checkboxExample" value="Milk" required validation-message="Milk is required!">Milk</g-checkbox>
```

## Install

yarn

```bash
yarn add vue-g-components
```

npm


```bash
npm install vue-g-components --save
```

## Setup

Register the plugin.

```js
import GComponents from 'vue-g-components';

Vue.use(GComponents);
```

Or register components manually.

```js
import {GInput,GCheckbox} from 'vue-g-components';

Vue.component('g-input', GInput);
Vue.component('g-checkbox', GInput);
```

## Params

### Input

Parameter | Type | Default
--------- | ---- | ------
id | `string` | input-id-(element uid)
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


### Checkbox

Parameter | Type | Default
--------- | ---- | ------
id | `string` | checkbox-id-(element uid)
class-name | `string` | `null`
name | `string` | `null`
v-model | `string`, `boolean` or `array` | `undefined`
value | `string` or `boolean` | `null`
checked | `boolean` | `false`
required | `boolean` | `false`
disabled | `boolean` | `false`
validation-message | `string` | `null`


## Events

Both components emit the `input` event to work with `v-model` and `change`.

## License

MIT © [Toshal Infotech](https://github.com/toshalinfotech)