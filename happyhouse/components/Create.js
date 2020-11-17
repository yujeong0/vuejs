export default {
  template:
    `<div>
        <div class="form-group">
          <label for="userName">작성자</label>
          <input type="text" class="form-control" id="userName" ref="userName" placeholder="작성자를 입력하세요" v-model="userName">
        </div>
        <div class="form-group">
          <label for="title">제목</label>
          <input type="text" class="form-control" id="title" ref="title" placeholder="제목을 입력하세요" v-model="title">
        </div>
        <div class="form-group">
          <label for="content">내용</label>
          <textarea type="text" class="form-control" id="contnet" ref="content" placeholder="내용을 입력하세요"
            v-model="content"></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-primary" @click="checkHandler">등록</button>
          <button class="btn btn-primary" @click="moveList">목록</button>
        </div>
    </div>
  `,
  data: function () {
    return {
      no: '',
      userName: '',
      userId: 'hi',
      regtime: '',
      title: '',
      content: '',
    };
  },
  methods: {
    checkHandler() {
      let err = true;
      let msg = '';
      !this.userName && ((msg = '작성자를 입력해주세요'), (err = false), this.$refs.userName.focus());
      err && !this.title && ((msg = '제목 입력해주세요'), (err = false), this.$refs.title.focus());
      err &&
        !this.content &&
        ((msg = '내용 입력해주세요'), (err = false), this.$refs.content.focus());

  if (!err) alert(msg);
  else this.createHandler();
},
createHandler() {
  axios
    .post('http://localhost:8000/happyhouse/qna', {
      userName: this.userName,
      title: this.title,
      content: this.content,
      userId: 'hi',
      regtime: new Date(),
    })
    .then(({ data }) => {
      let msg = '등록 처리시 문제가 발생했습니다.';
      if (data === 'success') {
        msg = '등록이 완료되었습니다.';
      }
      alert(msg);
      this.moveList();
    });
},
moveList() {
  this.$router.push('/list');
},
  },
};