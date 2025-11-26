import { defineBuilderConfig } from '@afilmory/builder'

export default defineBuilderConfig(() => ({
  storage: {
    provider: 'github',
    owner: '88lin',
    repo: 'picx-images-hosting',
    branch: 'master',
    path: '',
    useRawUrl: true,
    cdnUrl: 'https://jsd.akass.cn/gh/88lin/picx-images-hosting@master',
  },
}))
