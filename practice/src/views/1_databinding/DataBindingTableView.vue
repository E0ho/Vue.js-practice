<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>음료 이름</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>합계</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="drink.id" v-for="drink in drinkList">
                    <td>{{drink.drinkName}}</td>
                    <td>{{drink.price}}</td>
                    <td> <input type="number" v-model="drink.qty" /></td>
                    <td>{{drink.qty*drink.price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  data() {
    return {
      drinkList: [
        {
          id: '1',
          drinkName: '콜라',
          price: 700,
          qty: 1
        },
        {
          id: '2',
          drinkName: '사이다',
          price: 500,
          qty: 1
        },
        {
          id: '3',
          drinkName: '환타',
          price: 300,
          qty: 1
        }
      ]
    }
  }
}
</script>
