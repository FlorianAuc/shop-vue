<template>
  <div class="columns is-marginless">
    <div class="column is-three-quarters">
      <ListProduct :products="products" @active="switchProduct"/>
    </div>
    <div class="column">
      <DetailProduct @desactive="desactive" :products="productActive" v-if="productActive"></DetailProduct>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ListProduct from '../components/ListProduct.vue';
import DetailProduct from '@/components/DetailProduct.vue';

const productActive = ref(null);

const desactive = (id) =>{
  let index = products.value.findIndex((product) => product._id == id)
  if(index != -1){
    products.value[index].isActive = false
    // productActive.value.isActive = false
    productActive.value = null
  }
}

const switchProduct = (index) => {
  productActive.value = products.value[index];
};

const products = ref([
  {
    "_id": "659fba791c9bd6238e82f124",
    "index": 0,
    "guid": "ebc1ca92-4824-4726-b3c5-06f7328eb24b",
    "isActive": true,
    "price": 367.26,
    "picture": "https://picsum.photos/id/5/200/300",
    "color": "green",
    "name": "Horton Good",
    "about": "Consequat officia ut esse ea eiusmod proident id magna elit ullamco labore id. Proident ut occaecat proident nisi proident proident ex cillum nisi. Mollit irure consectetur officia ea est. Officia dolor cillum adipisicing et proident quis.\r\n",
    "registered": "2021-05-01T08:43:02 -02:00",
    "categorie": "non alimentaire"
  },
  {
    "_id": "659fba7987392b403e74ad5e",
    "index": 1,
    "guid": "bbf0c0f5-d2b2-451c-ac26-e2eaf561bb4d",
    "isActive": false,
    "price": 63.88,
    "picture": "https://picsum.photos/id/7/200/300",
    "color": "blue",
    "name": "Hart May",
    "about": "Ea nisi magna reprehenderit qui pariatur aliqua est excepteur excepteur dolor aute qui ad. Laborum exercitation minim eu ut cillum nulla dolore laborum mollit et. Ipsum duis ad adipisicing exercitation amet qui elit fugiat dolore irure ut aute Lorem. Duis culpa velit commodo eu deserunt amet. Consectetur qui enim nisi eiusmod irure.\r\n",
    "registered": "2015-02-24T06:34:07 -01:00",
    "categorie": "service"
  },
  {
    "_id": "659fba79667c4d71a225e528",
    "index": 2,
    "guid": "b074c710-8b69-49e1-a8e5-08ae19dc50a6",
    "isActive": true,
    "price": 273.59,
    "picture": "https://picsum.photos/id/2/200/300",
    "color": "green",
    "name": "Emilia Deleon",
    "about": "Amet aute proident nulla dolore id minim commodo occaecat adipisicing pariatur enim. Enim esse culpa eu excepteur fugiat. Velit ipsum incididunt exercitation ut fugiat ad duis aliqua enim esse labore. Lorem ad ullamco minim laborum cillum veniam fugiat nulla deserunt velit eu minim consequat quis. Deserunt excepteur adipisicing sit nulla sint laborum do ea. Ex enim consequat aliqua ea proident duis nulla.\r\n",
    "registered": "2021-03-16T06:26:43 -01:00",
    "categorie": "alimentaire"
  },
  {
    "_id": "659fba7914ee7c097d975277",
    "index": 3,
    "guid": "0a280359-f1fb-4e3a-97ba-42b80b83d82a",
    "isActive": false,
    "price": 121.71,
    "picture": "https://picsum.photos/id/8/200/300",
    "color": "blue",
    "name": "Cain Cunningham",
    "about": "Enim ad voluptate ex ex sint. Aliquip tempor est ea minim pariatur proident tempor esse commodo ea occaecat. Ipsum sit exercitation fugiat exercitation aliquip qui non duis incididunt. Aliquip occaecat ad officia sunt reprehenderit sit labore dolore nostrud excepteur Lorem cillum amet. Consectetur veniam amet elit ad amet duis eu nulla ea excepteur quis ea.\r\n",
    "registered": "2017-09-18T03:05:44 -02:00",
    "categorie": "service"
  },
  {
    "_id": "659fba79e8e35642e96e1cec",
    "index": 4,
    "guid": "6f61c72a-09a2-4920-849f-2dd53aa9d4f9",
    "isActive": true,
    "price": 172.84,
    "picture": "https://picsum.photos/id/4/200/300",
    "color": "green",
    "name": "Velez Conrad",
    "about": "Pariatur qui do ex ex enim sunt. Ullamco officia enim ad non. Velit ipsum proident elit voluptate ipsum. Aute do elit sint laborum commodo dolore elit do. Irure consequat reprehenderit non dolore laboris sunt consequat cupidatat ad amet irure sunt.\r\n",
    "registered": "2018-03-18T08:05:09 -01:00",
    "categorie": "non alimentaire"
  },
  {
    "_id": "659fba79e0da2730fa3a2521",
    "index": 5,
    "guid": "6c1818cd-17ed-4193-a271-8f0abd183d1a",
    "isActive": true,
    "price": 157.06,
    "picture": "https://picsum.photos/id/3/200/300",
    "color": "brown",
    "name": "Bennett Aguilar",
    "about": "Mollit fugiat laborum ullamco non. Sint deserunt aute ullamco ullamco reprehenderit tempor labore ex cillum dolore dolore laborum velit ullamco. Commodo in irure et esse magna pariatur. Occaecat non aliquip ipsum voluptate enim ipsum. Lorem amet laborum et ad. Nulla nisi laboris fugiat proident nulla elit adipisicing non esse minim quis ullamco.\r\n",
    "registered": "2017-12-15T11:54:27 -01:00",
    "categorie": "non alimentaire"
  },
  {
    "_id": "659fba791be94c49acefbdce",
    "index": 6,
    "guid": "3c3c3820-d122-4c7c-ae11-94b67221d75f",
    "isActive": true,
    "price": 32.71,
    "picture": "https://picsum.photos/id/1/200/300",
    "color": "green",
    "name": "Gallagher Haley",
    "about": "Enim incididunt tempor ea cillum consectetur. Do commodo sint nostrud amet aliquip pariatur mollit. Tempor minim qui culpa do tempor culpa magna cupidatat. Ad nulla adipisicing nulla reprehenderit est quis enim proident nulla elit nulla ad. Aute mollit proident ullamco consequat culpa labore cupidatat sint ad fugiat in magna sit ullamco.\r\n",
    "registered": "2014-08-18T05:58:28 -02:00",
    "categorie": "alimentaire"
  },
  {
    "_id": "659fba79104f8f18bb1f18a6",
    "index": 7,
    "guid": "f0c5a2e6-9c10-4af7-b7b2-c8cf6dccfc45",
    "isActive": false,
    "price": 154.78,
    "picture": "https://picsum.photos/id/5/200/300",
    "color": "green",
    "name": "Oliver Baker",
    "about": "Aute tempor voluptate adipisicing aute proident magna aliquip anim veniam sint commodo reprehenderit aliqua. Officia sint qui Lorem reprehenderit nostrud irure. Commodo dolor eu non reprehenderit. Magna consequat officia excepteur cillum veniam elit enim officia deserunt veniam pariatur adipisicing duis eiusmod. Ullamco elit aliqua non dolor labore culpa elit laborum dolore eiusmod. Fugiat et ad officia enim consequat. Cupidatat anim officia laboris dolore incididunt nulla occaecat ipsum.\r\n",
    "registered": "2017-04-21T04:08:35 -02:00",
    "categorie": "alimentaire"
  },
  {
    "_id": "659fba799da5d1da34229c41",
    "index": 8,
    "guid": "0c823f44-718a-4cb3-b270-1970fcba4d50",
    "isActive": false,
    "price": 298.2,
    "picture": "https://picsum.photos/id/7/200/300",
    "color": "blue",
    "name": "Mcknight Bartlett",
    "about": "Commodo esse nostrud aliqua do do. Mollit nulla officia ut reprehenderit pariatur velit amet eiusmod in commodo. Aliquip aliquip est sint duis sit elit.\r\n",
    "registered": "2021-12-11T03:04:17 -01:00",
    "categorie": "service"
  },
  {
    "_id": "659fba7926c740d2a7b87af0",
    "index": 9,
    "guid": "9e21beee-46f7-4af9-88b6-69cbcc0dd5c3",
    "isActive": true,
    "price": 110.21,
    "picture": "https://picsum.photos/id/2/200/300",
    "color": "brown",
    "name": "Faith Avery",
    "about": "Deserunt nulla commodo excepteur id. Dolore qui voluptate reprehenderit nisi ut eu occaecat in veniam dolore mollit consequat. Fugiat consectetur do non consequat deserunt.\r\n",
    "registered": "2017-08-23T06:44:32 -02:00",
    "categorie": "alimentaire"
  },
  {
    "_id": "659fba793a70510cdf9bb85e",
    "index": 10,
    "guid": "678e4221-0c87-43f4-be20-1327dc349cfb",
    "isActive": false,
    "price": 238.68,
    "picture": "https://picsum.photos/id/3/200/300",
    "color": "brown",
    "name": "Tiffany Scott",
    "about": "Reprehenderit voluptate aute mollit eu nulla labore cillum elit sit eiusmod qui. Mollit ad magna velit ea amet nulla ea sit incididunt. Incididunt dolor amet fugiat quis amet.\r\n",
    "registered": "2016-07-11T05:53:49 -02:00",
    "categorie": "alimentaire"
  },
  {
    "_id": "659fba794bac6e78019c0468",
    "index": 11,
    "guid": "8541003d-0930-43dc-ba72-88ac34a1cd70",
    "isActive": false,
    "price": 37.94,
    "picture": "https://picsum.photos/id/1/200/300",
    "color": "green",
    "name": "Naomi Frost",
    "about": "Ad et aute deserunt consequat minim cillum ipsum ex elit reprehenderit ad voluptate Lorem cillum. Incididunt dolore nisi ea cupidatat elit sit et proident cillum aliqua eiusmod consectetur. Commodo occaecat ut fugiat elit quis cillum veniam sunt. Eu commodo consequat officia duis dolore Lorem proident ipsum est. Et voluptate tempor sint irure magna ea. Labore est ad cupidatat sunt enim eu magna labore veniam ex Lorem elit.\r\n",
    "registered": "2017-02-07T01:00:12 -01:00",
    "categorie": "non alimentaire"
  },
  {
    "_id": "659fba791a90398d4df6c387",
    "index": 12,
    "guid": "dc17c7af-ac03-43a0-933f-fba0630d328c",
    "isActive": true,
    "price": 177.54,
    "picture": "https://picsum.photos/id/6/200/300",
    "color": "brown",
    "name": "Ericka Kennedy",
    "about": "Irure laboris laboris enim sint labore adipisicing commodo dolore velit cupidatat et occaecat anim. Sunt veniam reprehenderit nisi nisi amet est eiusmod nostrud. Laborum sunt eu in ex quis non officia est non amet ipsum dolore occaecat ad. Exercitation incididunt anim ipsum duis tempor ut voluptate cillum exercitation aliqua qui. Sit aliquip proident reprehenderit voluptate duis incididunt tempor culpa consectetur id occaecat esse laboris reprehenderit. Ipsum adipisicing velit officia esse nisi in sint qui ad et sunt.\r\n",
    "registered": "2015-02-09T06:21:01 -01:00",
    "categorie": "service"
  },
  {
    "_id": "659fba797043250e833bd9fc",
    "index": 13,
    "guid": "ba20442d-a96b-4d5d-bb62-6f331112e8cd",
    "isActive": false,
    "price": 193.09,
    "picture": "https://picsum.photos/id/5/200/300",
    "color": "blue",
    "name": "Mathews Ratliff",
    "about": "Cupidatat irure cupidatat reprehenderit est. Non labore quis commodo proident cillum non aliqua reprehenderit. Laborum quis adipisicing ipsum anim excepteur enim magna labore nulla sunt enim non non consectetur. Aute sit ea cupidatat velit nulla adipisicing consequat est. Laboris enim sit aliqua exercitation reprehenderit Lorem amet incididunt consequat non esse Lorem labore dolor. Mollit ut culpa dolor reprehenderit dolor officia ipsum ullamco ipsum et culpa. Voluptate proident incididunt quis magna cillum excepteur pariatur ad.\r\n",
    "registered": "2022-08-29T06:52:21 -02:00",
    "categorie": "non alimentaire"
  },
  {
    "_id": "659fba791fe9a9a875cc3a1c",
    "index": 14,
    "guid": "d7d994ba-15cf-4528-acb5-6d10b84a3baa",
    "isActive": false,
    "price": 266.91,
    "picture": "https://picsum.photos/id/4/200/300",
    "color": "brown",
    "name": "Sparks Hess",
    "about": "Incididunt ipsum Lorem ex ea sit magna consequat pariatur cupidatat qui. Exercitation culpa fugiat proident minim Lorem mollit duis nostrud excepteur. Duis mollit occaecat laboris sit laborum nulla elit eu tempor. Adipisicing ad quis sunt fugiat.\r\n",
    "registered": "2017-10-29T05:45:25 -01:00",
    "categorie": "alimentaire"
  },
  {
    "_id": "659fba79009f3c32737b62d7",
    "index": 15,
    "guid": "a50d7022-c284-4b05-b685-0a1765e7bbd2",
    "isActive": true,
    "price": 327.27,
    "picture": "https://picsum.photos/id/6/200/300",
    "color": "green",
    "name": "Jami Jones",
    "about": "Commodo dolore velit officia velit. Mollit sint ut consequat est excepteur consequat esse eiusmod excepteur. Cillum adipisicing enim nisi cillum enim consequat magna. Occaecat esse laboris nisi eu commodo.\r\n",
    "registered": "2021-12-14T01:06:42 -01:00",
    "categorie": "service"
  },
  {
    "_id": "659fba79c2cead6cf065704c",
    "index": 16,
    "guid": "dd8a0f62-c048-42ef-b4e4-520853946e34",
    "isActive": false,
    "price": 140.32,
    "picture": "https://picsum.photos/id/0/200/300",
    "color": "green",
    "name": "Lesley Dotson",
    "about": "Sint aliqua eiusmod pariatur excepteur reprehenderit nisi Lorem. Ut eiusmod pariatur incididunt laborum sit. Sit sunt est reprehenderit est quis aliquip ex eiusmod qui ex do. Proident mollit fugiat pariatur veniam occaecat deserunt nulla cillum cupidatat. Culpa officia officia dolor dolore irure aliquip est nisi elit qui consequat. Aute exercitation eiusmod ullamco pariatur commodo id sunt sint velit ea aliquip officia qui. Voluptate magna id irure veniam aliquip aliqua excepteur velit culpa ea eiusmod.\r\n",
    "registered": "2022-10-20T03:00:34 -02:00",
    "categorie": "alimentaire"
  },
  {
    "_id": "659fba793ccff837887b54d9",
    "index": 17,
    "guid": "5b3f4303-1b61-4793-81ed-30b1edb8fa45",
    "isActive": true,
    "price": 113.99,
    "picture": "https://picsum.photos/id/5/200/300",
    "color": "blue",
    "name": "Lakeisha Dejesus",
    "about": "Tempor minim adipisicing ut aliqua ut eu eu commodo laboris aute quis. Eiusmod excepteur amet incididunt id culpa cupidatat duis nostrud nulla sit ullamco proident voluptate. Proident minim adipisicing nostrud nostrud eu cupidatat magna consequat deserunt ipsum voluptate dolore.\r\n",
    "registered": "2023-10-06T09:01:32 -02:00",
    "categorie": "non alimentaire"
  },
  {
    "_id": "659fba7958506701a4db77b0",
    "index": 18,
    "guid": "88720c5e-fe01-40c6-87a5-b68d0e5bfb11",
    "isActive": true,
    "price": 8.45,
    "picture": "https://picsum.photos/id/1/200/300",
    "color": "green",
    "name": "Mcdonald Huffman",
    "about": "Duis eu ex irure tempor sit consequat culpa nulla sit mollit mollit mollit sit consequat. Exercitation eu nisi exercitation ullamco. Dolore cillum ullamco qui mollit aliqua tempor minim sit. Lorem cupidatat fugiat labore in. Velit Lorem aliquip dolor elit consectetur.\r\n",
    "registered": "2014-01-22T06:53:08 -01:00",
    "categorie": "non alimentaire"
  },
  {
    "_id": "659fba796dd2b7fe7b67fd26",
    "index": 19,
    "guid": "81552e20-2f29-4a55-b18a-699c9b7f46db",
    "isActive": true,
    "price": 174.34,
    "picture": "https://picsum.photos/id/2/200/300",
    "color": "green",
    "name": "Marguerite Estrada",
    "about": "Officia voluptate pariatur Lorem labore Lorem aute minim dolor et mollit. Cupidatat pariatur ullamco enim veniam adipisicing aliquip adipisicing excepteur ad ullamco aliquip. Proident aliqua velit nostrud eu id mollit do enim aute dolor. Eu elit tempor do fugiat consequat occaecat dolore et dolore pariatur irure. Ea aliquip nisi officia laboris consectetur est et. Incididunt tempor dolor velit ipsum. Eu excepteur eiusmod mollit in proident laboris et elit dolore veniam voluptate.\r\n",
    "registered": "2016-07-02T03:00:40 -02:00",
    "categorie": "service"
  }
])
</script>

<style lang="scss">


</style>

