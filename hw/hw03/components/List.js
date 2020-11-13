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
            <a href="hrm_add.html">사원 추가</a>
            <br /><br />
            <table class="table">
                <tr style="background-color: cadetblue">
                    <th>사원 아이디</th>
                    <th>사원명</th>
                    <th>부서</th>
                    <th>직책</th>
                    <th>연봉</th>
                </tr>
                <tr v-for="(emp, index) in items" :key="index">
                    <td>{{emp.id}}</td>
                    <td>{{emp.name}}</td>
                    <td>{{emp.department}}</td>
                    <td>{{emp.position}}</td>
                    <td>{{emp.salary}}</td>
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
        const emps = localStorage.getItem('employee');
        let newemp = {
            sequence: 0,
            items: [],
        }
        if (emps) {
            newemp = JSON.parse(emps);
        } else {
            localStorage.setItem('employee', JSON.stringify(newemp));
        }
        this.items = newemp.items;
    },
    methods: {
        movePage() {
            location.href = 'hrm_add.html';
        },
        searchEmp() {
            let emps = JSON.parse(localStorage.getItem('employee')).items;
            this.items = emps.filter((emp) => { // 화살표 함수에서는 이 함수를 감싸고 있는 객체가 this 라고 생각.. 지금에서는 이 Vue 객체..!
                return emp.name.indexOf(this.searchName) !== -1 ? true : false;
            });
        },
    },
}