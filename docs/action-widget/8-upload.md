# Upload

A widget for upload images/photos

- props

| Property      | Description                                      | Type                               | Default        |
|---------------|--------------------------------------------------|------------------------------------|----------------|
| style         | style for containe of `Upload`                   | `any`                              | -              |
| status        | show different status of `Select`                | `success` \| `error` \| `warning`  | -              |
| maxNumber     | max number of images that user can upload        | `string`                           | -              |
| onChange      | callback when file choosed                       | `function`                         | -              |
| uploadMethod  | method of upload, need implement it by developer | `{label: string, value: string}[]` | -              |
| uploadText    | style of upload text                             | `string`                           | Upload a photo |
| textStyle     | style of upload text                             | `any`                              | -              |
| includeBase64 | pick image content by base64                     | `boolean`                          | false          |
| fileNameStyle | style of file name                               | `any`                              | -              |
| fileSizeStyle | style of file size                               | `any`                              | -              |

```tsx
<Upload 
  includeBase64
  uploadMethod={(asset, uuid) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          url: getUrlFromAsset(asset),
          uuid
        });
      }, 1000);
    });
  }}
/>
```

![Upload](./img/upload.gif)