<template>
  <tr>
    <td>{{ title }}</td>
    <td>{{ content }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Todo',
  props: [
    'title',
    'content'
  ]
}
</script>
