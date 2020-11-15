export default {
    template: `
        <div>
            <input
                type="text"
                name="searchName"
                v-model="searchName"
                @keyup.enter="searchEmp"
            />
            <button class="btn btn-primary" @click="searchEmp">검색</button>
            <br /><br />
            <table class="table">
                <tr style="background-color: cadetblue">
                    <th>사원 아이디</th>
                    <th>사원명</th>
                    <th>이메일</th>
                    <th>고용일</th>
                    <th>관리자 아이디</th>
                    <th>직책</th>
                    <th>부서 아이디</th>
                    <th>연봉</th>
                    <th>커미션</th>
                </tr>
                <tr v-for="(emp, index) in items" :key="index">
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
            </table>
        </div>
    `,
    data: function () {
        return {
            items: [],
            searchName: '',
        };
    },
    created() {
        axios.get('http://localhost:8097/hrmboot/api/employee/all').then(({ data }) => {
            this.items = data;
        });
    },
    methods: {
        searchEmp() {
            axios.get('http://localhost:8097/hrmboot/api/employee/all').then(({ data }) => {
                this.items = data.filter((emp) => { 
                    return emp.name.indexOf(this.searchName) !== -1 ? true : false;
                });
            });
        },
    },
}