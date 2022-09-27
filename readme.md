## files.kidow.me

![https://files.kidow.me/image/kidow.png](https://files.kidow.me/image/kidow.png)

정적 파일들만을 취급하기 위해 만든 프로젝트입니다. Node.js 단 4줄의 코드로 무제한 파일 저장소를 구현할 수 있습니다.

```javascript
const express = require('express')
const app = express()
app.use(express.static('[파일 저장할 폴더]'))
app.listen(4000)
```
