<template>
  <section id="newArrival" class="row">
    <h2>NEW Arrival</h2>
    <ul>
      <li v-for="(item, index) in products" :key="index">
        <div class="imgBox">
          <a href="#"><img :src="item.photo" :alt="item.name" /></a>
        </div>
        <div class="info">
          <p>
            <a href="#">{{ item.name }}</a>
          </p>
          <p>{{ item.desc }}</p>
          <p>{{ item.comment }}</p>
          <p>{{ item.price }}</p>
          <p>
            <span v-for="(value, index) in item.icon" :key="index"
              ><img :src="value" alt=""
            /></span>
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "newArrival",
  data() {
    return {
      products: [
        {
          photo: "./image/0010020003822.jpg",
          name: "캐릭터인형1",
          desc: "4월중 순차발송 예정(추후 자세한 일정 안내)",
          comment: "※1인당 5EA 구매 한정",
          price: "39000",
          icon: [
            "./image/kr_shopimages_starshipes_prod_icons_ (1).gif",
            "./image/kr_shopimages_starshipes_prod_icons_ (1).gif",
          ],
        },
        {
          photo: "./image/0010020003822.jpg",
          name: "캐릭터인형2",
          desc: "4월중 순차발송 예정(추후 자세한 일정 안내)",
          comment: "※1인당 5EA 구매 한정",
          price: "28000",
          icon: ["./image/kr_shopimages_starshipes_prod_icons_ (1).gif"],
        },
        {
          photo: "./image/0010020003822.jpg",
          name: "캐릭터인형3",
          desc: "4월중 순차발송 예정(추후 자세한 일정 안내)",
          comment: "※1인당 5EA 구매 한정",
          price: "9000",
          icon: [],
        },
        {
          photo: "./image/0010020003822.jpg",
          name: "캐릭터인형4",
          desc: "4월중 순차발송 예정(추후 자세한 일정 안내)",
          comment: "※1인당 5EA 구매 한정",
          price: "60000",
          icon: [
            "./image/kr_shopimages_starshipes_prod_icons_ (1).gif",
            "./image/kr_shopimages_starshipes_prod_icons_ (1).gif",
          ],
        },
        {
          photo: "./image/0010020003822.jpg",
          name: "캐릭터인형5",
          desc: "4월중 순차발송 예정(추후 자세한 일정 안내)",
          comment: "※1인당 5EA 구매 한정",
          price: "180000",
          icon: ["./image/kr_shopimages_starshipes_prod_icons_ (1).gif"],
        },
        {
          photo: "./image/0010020003822.jpg",
          name: "캐릭터인형6",
          desc: "4월중 순차발송 예정(추후 자세한 일정 안내)",
          comment: "※1인당 5EA 구매 한정",
          price: "39000",
          icon: [],
        },
        {
          photo: "./image/0010020003822.jpg",
          name: "캐릭터인형7",
          desc: "4월중 순차발송 예정(추후 자세한 일정 안내)",
          comment: "※1인당 5EA 구매 한정",
          price: "39000",
          icon: [
            "./image/kr_shopimages_starshipes_prod_icons_ (1).gif",
            "./image/kr_shopimages_starshipes_prod_icons_ (1).gif",
          ],
        },
        {
          photo: "./image/0010020003822.jpg",
          name: "캐릭터인형8",
          desc: "4월중 순차발송 예정(추후 자세한 일정 안내)",
          comment: "※1인당 5EA 구매 한정",
          price: "39000",
          icon: ["./image/kr_shopimages_starshipes_prod_icons_ (1).gif"],
        },
        {
          photo: "./image/0010020003822.jpg",
          name: "캐릭터인형9",
          desc: "4월중 순차발송 예정(추후 자세한 일정 안내)",
          comment: "※1인당 5EA 구매 한정",
          price: "39000",
          icon: ["./image/kr_shopimages_starshipes_prod_icons_ (1).gif"],
        },
        {
          photo: "./image/0010020003822.jpg",
          name: "캐릭터인형10",
          desc: "4월중 순차발송 예정(추후 자세한 일정 안내)",
          comment: "※1인당 5EA 구매 한정",
          price: "39000",
          icon: ["./image/kr_shopimages_starshipes_prod_icons_ (1).gif"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#newArrival {
  margin: 100px auto;
  h2 {
    text-align: center;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 0 0 23.3%;
      margin: 10px;
      .imgBox {
        overflow: hidden;
        border: 1px solid #ddd;
        img {
          transition: all 0.5s;
        }
        &:hover {
          img {
            transform: scale(1.5);
          }
        }
      }
      .info {
        p:last-child {
          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
