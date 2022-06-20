# Amount

A widget to input price.

- props

| Property      | Description                        | Type                                           | Default |
|---------------|------------------------------------|------------------------------------------------|---------|
| style         | style for containe of input        | `any`                                          | -       |
| status        | show different status of `Input`   | `success` \| `error` \| `warning`              | -       |
| prefixStyle   | style of prefix                    | `any`                                          | -       |
| textStyle     | style of text part                 | `any`                                          | -       |
| value         | value of `Input`                   | `string`                                       | -       |
| onChange      | callback when text changes         | `function`                                     | -       |
| placeholder   | placeholder for `Input`            | `string`                                       | -       |
| disabled      | whether `Input` is disabled or not | `boolean`                                      | `false` |
| returnKeyType | return key type of the keyboard    | `done` \| `go` \| `next` \| `search` \| `send` | -       |

```tsx
<Amount  currency='PHP' />
```

![amount](img/amout.gif)