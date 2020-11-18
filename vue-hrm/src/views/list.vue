<template>
    <div>
        <h1>사원목록</h1>

        <!-- <input
            type="text"
            name="searchName"
            v-model="searchName"
            @keyup.enter="searchEmp"
        />
        <button class="btn btn-primary" @click="searchEmp">검색</button> -->
        <br /><br />
        <div v-if="items.length">
        <table class="table">
            <tr>
                <th>사원 아이디</th>
                <th>사원명</th>
                <th>이메일</th>
                <th>고용일</th>
                <th>관리자 아이디</th>
                <th>직책</th>
                <th>부서 아이디</th>
                <th>연봉</th>
                <th>커미션</th>
                <th>삭제</th>
            </tr>
            <list-row v-for="(item, index) in items"
                    :key="`${index}_items`"
                    :id="item.id"
                    :name="item.name"
                    :mailid="item.mailid"
                    :start_date="item.start_date"
                    :manager_id="item.manager_id"
                    :title="item.title"
                    :dept_id="item.dept_id"
                    :salary="item.salary"
                    :commission_pct="item.commission_pct"
            />
        </table>
        </div>
        <div v-else>글이 없습니다.</div>
    </div>
</template>

<script>
import http from '@/util/http-common';
import ListRow from '@/components/Row.vue';
export default {
    name: 'list',
    components: {
        ListRow,
    }, 
    data: function() {
        return {
            items: [],
        };
    },
    created() {
        http
            .get('/employee/all')
            .then(({data}) => {
                console.log('여기다');
                console.dir(data);
                this.items = data;
            })
            .catch(() => {
                alert('에러가 발생했습니다.');
            });
    }
}
</script>