---
layout: home

title: ACS
titleTemplate: 代码片段 | 备忘录 | 编程工具

hero:
  name: ACS
  text: ""
  tagline: |
    自用工具站
  image:
    src: /it.svg
    alt: ACS
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide
features:
  - icon: 📋
    title: 代码片段
    details: 自建常用语言代码片段。
    link: /snippets/guide/
    linkText: 立即参考
  - icon: 📓
    title: 算法
    details: 不再畏惧面试算法，提供刷题路线。
    link: /algorithm/guide/
    linkText: 开始刷题
  - icon: 🚚
    title: 备忘录
    details: 将日常工作中遇到的问题做一份备忘录，方便查阅。
    link: /memo/guide/
    linkText: 开始查阅
  - icon: 🔧
    title: 编程导航
    details: 归纳一些编程相关工具与网站，提高效率。
    link: /program/guide/
    linkText: 提高效率
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import { icons } from './socialIcons';

const members = [
  {
    avatar: 'https://www.github.com/charles0122.png',
    name: 'Arce Lai',
    title: '上进',
    desc: 'FE Developer<br/>Creator @ <a href="https://github.com/charles0122/arce-code-snippets" target="_blank">arce-code-snippets</a>',
    links: [
      { icon: 'github', link: 'https://github.com/charles0122' }
    ]
  }
]
</script>

<!-- <DataPanel/> -->

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      核心成员介绍
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<HomeContributors/>
