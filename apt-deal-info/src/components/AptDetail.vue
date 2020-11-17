<template>
  <div v-if="apt">
    <h3>{{ apt.아파트 }}</h3>
    <img src="@/assets/apt.png" alt="행복 아파트" />
    <div style="margin: 10px"></div>
    <ul align="left">
      <li>일련번호 : {{ apt.일련번호 }}</li>
      <li>아파트 이름 : {{ apt.아파트 }}</li>
      <li>법정동 : {{ apt.법정동 }}</li>
      <li>층수 : {{ apt.층 }}</li>
      <li>거래금액 : {{ apt.거래금액.replace(',', '') * 10000 | price }}원</li>
    </ul>
  </div>
</template>

<script>
// 위에 거래금액에 | 쓰는 거는 price 라는 필터 호출하는 거~!
export default {
  name: 'AptDetail',
  props: {
    apt: [Object, String],  // 넘어온 데이터가 object이면 object되고, string이면 string이 된다.
  },
  filters: {
    price: function(value) {
      if (!value) return value;
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
};
</script>

<style></style>
