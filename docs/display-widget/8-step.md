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

![cwstep](./img/cwstep.png)