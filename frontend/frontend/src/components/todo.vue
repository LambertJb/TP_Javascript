<template>
  <tr :key="key">
    <td>{{ title }}</td>
    <td>{{ percent }}</td>
  </tr>
</template>

<script>
export default {
  name: 'todo',
  props: [
    'title',
    'percent',
    'key'
  ]
}
