# 使用方法
```
import Vue from 'vue'
import InfiniteScroll from './InfiniteScroll'
Vue.use(InfiniteScroll)
```
```
<announcements-loop :data="announcements" :interval="3000">
  <template #default="{ currentItem }">
    <div>{{ currentItem }}</div>
  </template>
</announcements-loop>
```

- data是通告数组
- interval是循环滚动的时间间隔使用slot来传递每次显示的通告。
