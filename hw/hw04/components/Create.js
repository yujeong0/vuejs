export default {
    template: `
        <div>
            <div class="form-group">
                <label for="name">이름</label>
                <input type="text" id="name" ref="name" v-model="name" />
            </div>
            <div class="form-group">
                <label for="mailid">이메일</label>
                <input type="text" id="mailid" ref="mailid" v-model="mailid" />
            </div>
            <div class="form-group">
                <label for="start_date">고용일</label>
                <input type="date" id="start_date" ref="start_date" placeholder="연도-월-일" v-model="start_date" />
            </div>
            <div class="form-group">
                <label for="manager_id">매니저 아이디</label>
                <input type="text" id="manager_id" ref="manager_id" v-model="manager_id" />
            </div>
            <div class="form-group">
                <label for="title">직책</label>
                <select name="title" v-model="title" id="title">
                <option value="사장">사장</option>
                <option value="기획부장">기획부장</option>
                <option value="영업부장">영업부장</option>
                <option value="총무부장">총무부장</option>
                <option value="인사부장">인사부장</option>
                <option value="과장">과장</option>
                <option value="영업대표이사">영업대표이사</option>
                <option value="사원">사원</option>
                </select>
            </div>
            <div class="form-group">
                <label for="dept_id">부서 아이디</label>
                <input type="text" id="dept_id" ref="dept_id" v-model="dept_id" />
            </div>
            <div class="form-group">
                <label for="salary">월급</label>
                <input type="text" id="salary" ref="salary" v-model="salary" />
            </div>
            <div class="form-group">
                <label for="commission_pct">커미션</label>
                <input type="text" id="commission_pct" ref="commission_pct" v-model="commission_pct" />
            </div>
            <br />
            <div class="text-left">
                <button class="btn btn-primary" @click="checkHandler">사원추가</button>
            </div>
        </div>
    `,
    data: function () {
        return {
          id: '',
          name: '',
          mailid: '',
          start_date: '',
          manager_id: '',
          title: '기획부장',
          dept_id: '',
          salary: '',
          commission_pct: '',
          dept_name: '',
          cname: '',
        };
    },
    methods: {
        checkHandler() {
          let err = true;
          let msg = '';
          !this.name && ((msg = '이름을 입력해주세요'), (err = false), this.$refs.name.focus());
          err && !this.mailid && ((msg = '이메일을 입력해주세요'), (err = false), this.$refs.mailid.focus());
          err && !this.start_date && ((msg = '고용일을 입력해주세요'), (err = false), this.$refs.start_date.focus());
          err && !this.manager_id && ((msg = '매니저아이디를 입력해주세요'), (err = false), this.$refs.manager_id.focus());
          err && !this.title && ((msg = '직책을 입력해주세요'), (err = false), this.$refs.title.focus());
          err && !this.dept_id && ((msg = '부서아이디를 입력해주세요'), (err = false), this.$refs.dept_id.focus());
          err && !this.salary && ((msg = '월급을 입력해주세요'), (err = false), this.$refs.salary.focus());
          err && !this.commission_pct && ((msg = '커미션을 입력해주세요'), (err = false), this.$refs.commission_pct.focus());

          if (!err) alert(msg);
          else this.createHandler();  
        },
        createHandler() {
          axios.post('http://localhost:8097/hrmboot/api/employee', {
            name: this.name,
            mailid: this.mailid,
            start_date: this.start_date,
            manager_id: this.manager_id,
            title: this.title,
            dept_id: this.dept_id,
            salary: this.salary,
            dept_id: this.dept_id,  
            commission_pct: this.commission_pct,
          }).then(({ data }) => {
            console.log(data);
            if (data.count >= 0) {
              alert('등록이 완료되었습니다.');
            }
            else {
              alert('등록 실패');
            }
            this.moveList();
          });
        },
        moveList() {
          this.$router.push('/list');
        },
        // changeTime() {
        //   this.start_date = new Date(this.start_date);
        // }
    },

}