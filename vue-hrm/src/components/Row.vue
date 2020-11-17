<template>
    <tr>
        <td>{{emp.id}}</td>
        <td>{{emp.name}}</td>
        <td>{{emp.mailid}}</td>
        <td>{{emp.start_date}}</td>
        <td>{{emp.manager_id}}</td>
        <td>{{emp.title}}</td>
        <td>{{emp.dept_id}}</td>
        <td>{{emp.salary}}</td>
        <td>{{emp.commission_pct}}</td>
    </tr>
</template>  

<script>
export default {
  name: 'row',
  props: {
    id: { type: Number },
    name: { type: String },
    mailid: { type: String },
    start_date: { type: Date },
    manager_id: { type: Number },
    title: { type: String },
    dept_id: { type: Number },
    salary: { type: Number },
    commission_pct: { type: Number },
  },
//   methods: {
//     getFormatDate(regtime) {
//       return moment(new Date(regtime)).format('YYYY.MM.DD');
//     },
//   },
};
</script>