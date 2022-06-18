# Step

A common widget for showing progress, we have [**FWStep**](#fwstep) and [**CWStep**](#cwstep) derived from it.   
We usually use FWStep and CWStep instead of Button directly.

- props

| Property       | Description                | Type     | Default |
|----------------|----------------------------|----------|---------|
| total          | total steps                | `number` | -       |
| current        | current step, start from 1 | `number` | -       |
| containerStyle | style of container         | `any`    | -       |
| itemStyle      | style of each step item    | `any`    | -       |


## FWStep

Full Width Step

- props

| Property       | Description                | Type     | Default |
|----------------|----------------------------|----------|---------|
| total          | total steps                | `number` | -       |
| current        | current step, start from 1 | `number` | -       |
| containerStyle | style of container         | `any`    | -       |
| itemStyle      | style of each step item    | `any`    | -       |

```tsx
<Step.FWStep
  containerStyle={{width: 300}}
  total={3}
  current={2}
/>
```

![fwstep](./img/fwstep.png)


## CWStep

custom Width Step

- props
  
| Property       | Description                | Type     | Default |
|----------------|----------------------------|----------|---------|
| total          | total steps                | `number` | -       |
| current        | current step, start from 1 | `number` | -       |
| containerStyle | style of container         | `any`    | -       |
| itemStyle      | style of each step item    | `any`    | -       |

```tsx
<Step.CWStep
  containerStyle={{width: 300}}
  itemStyle={{width: 50}}
  total={3}
  current={2}
/>
```

![cwstep](./img/cwstep.png)