# Alert

A widget to show alert

- props

| Property  | Description                        | Type                                                     | Default |
|-----------|------------------------------------|----------------------------------------------------------|---------|
|   style   | customize style of alert container | `any`                                                    | -       |
| textStyle | cusomize style for alert text      | `any`                                                    | -       |
| type      | alert type                         | `success` \| `info` \| `warning` \| `error` \| `invalid` | -       |
| text      | alert text                         | `string`                                                 | -       |
| children  | alert content                      | `ReactNode`                                              | -       |

```tsx
<Alert
  style={{ width: 300 }}
  type={'success'}
  text={'Success Alert Success Alert Success Alert Success Alert Success Alert Success Alert '}
/>
```

![alert](./img/alert.png)