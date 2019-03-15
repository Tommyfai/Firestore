<template>
  <div class="about">
    <h1 class="b">Firestore</h1>
    <ol>
      <li v-for="model in models" v-bind:key="model.id">
        {{ model.name }} : {{ model.sn }}
      </li>
    </ol>
  </div>
</template>
<script>
// @ is an alias to /src
import db from "@/components/firebaseInit";

export default {
  name: "firestore",
  data() {
    return {
      models: [
        { id: "099", name: "Model D", sn: 328928 },
        { id: "019", name: "Model C", sn: 928928 }
      ]
    };
  },
  created() {
    db.collection("models")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            name: doc.data().name,
            sn: doc.data().sn
          };
          this.models.push(data);
        });
      });
  },
  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
.b {
  border: 1px solid red;
}
</style>
