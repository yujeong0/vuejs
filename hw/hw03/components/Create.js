export default {
    template: `
        <div>
            <div class="form-group">
                <label for="name">이름</label>
                <input type="text" id="name" ref="name" v-model="name" />
            </div>
            <div class="form-group">
                <label for="email">이메일</label>
                <input type="text" id="email" ref="email" v-model="email" />
            </div>
            <div class="form-group">
                <label for="hiredate">고용일</label>
                <input type="date" id="hiredate" ref="hiredate" placeholder="연도-월-일" v-model="hiredate" />
            </div>
            <div class="form-group">
                <label for="position">직책</label>
                <select name="position" v-model="position" id="position">
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
                <label for="department">부서</label>
                <select name="department" v-model="department" id="department">
                <option value="기획부">기획부</option>
                <option value="영업부">영업부</option>
                <option value="총무부">총무부</option>
                <option value="인사부">인사부</option>
                </select>
            </div>
            <div class="form-group">
                <label for="salary">월급</label>
                <input type="text" id="salary" ref="salary" v-model="salary" />
            </div>
            <div class="form-group">
                <label for="commision">커미션</label>
                <input type="text" id="commision" ref="commision" v-model="commision" />
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
          email: '',
          hiredate: '',
          position: '기획부장',
          department: '기획부',
          salary: '',
          commision: '',
        };
    },
    methods: {
        checkHandler() {
          let err = true;
          let msg = '';
          !this.name &&
            ((msg = '이름을 입력해주세요'),
            (err = false),
            this.$refs.name.focus());
          err &&
            !this.email &&
            ((msg = '이메일을 입력해주세요'),
            (err = false),
            this.$refs.email.focus());
          err &&
            !this.hiredate &&
            ((msg = '고용일을 입력해주세요'),
            (err = false),
            this.$refs.hiredate.focus());
          err &&
            !this.salary &&
            ((msg = '월급을 입력해주세요'),
            (err = false),
            this.$refs.salary.focus());
          err &&
            !this.commision &&
            ((msg = '커미션을 입력해주세요'),
            (err = false),
            this.$refs.commision.focus());

          if (!err) alert(msg);
          else this.createHandler();
        },

        createHandler() {
          const emp = localStorage.getItem('employee');
          let newemp = {
            sequence: 0,
            items: [],
          };

          if (emp) {
            newemp = JSON.parse(emp);
          }

          newemp.sequence += 1;
          newemp.items.push({
            id: newemp.sequence,
            name: this.name,
            email: this.email,
            hiredate: this.hiredate,
            position: this.position,
            department: this.department,
            salary: this.salary,
            commission: this.commission,
          });
          localStorage.setItem('employee', JSON.stringify(newemp));
          alert('등록이 완료되었습니다.');
          location.href = './hrm_list.html';
        },
        moveList() {
          location.href = 'hrm_list.html';
        },
      },

}