export default {
  template:    
  `
  <div>
  <div id="mainText">
  <div>
    <h1 class="text-primary" style="font-weight: bold; text-align: center">
      어디에서
    </h1>
  </div>
  <div>
    <h1 style="font-weight: bold; text-align: center">살고 싶으신가요?</h1>
  </div>
</div>
<div class="form-group" style="text-align: center; margin-top: 80px">
  <fieldset>
    <form
      method="POST"
      action="${location.pathname}/house/list"
    >
      <input
        type="text"
        placeholder="ex) 강남, 현대아파트"
        name="aptName"
        id="inputLarge"
      />
      <button class="btn btn-primary">검색</button>
    </form>
  </fieldset>
</div>
</div>`,
};
