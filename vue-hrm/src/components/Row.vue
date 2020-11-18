<template>
    <tr>
        <td>{{id}}</td>
        <td>{{name}}</td>
        <td>{{mailid}}</td>
        <td>{{start_date}}</td>
        <td>{{manager_id}}</td>
        <td>{{title}}</td>
        <td>{{dept_id}}</td>
        <td>{{salary}}</td>
        <td>{{commission_pct}}</td>
        <td><button type="button" @click="remove(id)">퇴사</button></td>
    </tr>
</template>  

<script>
export default {
  name: 'row',
  props: {
    id: { type: Number },
    name: { type: String },
    mailid: { type: String },
    start_date: { type: String },
    manager_id: { type: Number },
    title: { type: String },
    dept_id: { type: Number },
    salary: { type: Number },
    commission_pct: { type: Number },
  },
  methods: {
    remove(id) {
      console.log('삭제누름');
      this.$router.push('/delete?id='+id);
    }
  },
};
</script>