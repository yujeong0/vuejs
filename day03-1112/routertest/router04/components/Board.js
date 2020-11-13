export default {
  template: `<div>
    자유 게시판
    <ul>
      <li v-for="i in 5">
        <router-link :to="{name: 'boardview', params: {no: i}}">{{i}}번 게시글</router-link>  
      </li>
    </ul>
  </div>`,
};
// router-link에 params로 key-value 쌍으로 데이터 전달할 수 있다....