# Loading

A common widget to show loading status, it will intercept all touch event.

- props

| Property | Description          | Type               | Default |
|----------|----------------------|--------------------|---------|
| visible  | whether show loading | `boolean`          | false   |
| color    | color                | `color string`     | -       |
| size     | size                 | `small` \| `large` | large   |


```tsx
<Loading visible={false} size='large'/>
```

![loading](./img/loading.gif)