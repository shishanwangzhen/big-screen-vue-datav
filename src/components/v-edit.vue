<template>
  <div>
    <button class="btn_edit" @click="isActive = !isActive">编辑</button>
    <div>
     <v-editList :editType="editType" :editTitle="editTitle" :editList="editList" :projectId="projectId" v-if="isActive" @handelShow="getRes"></v-editList>
    <v-mask :isActive="isActive"></v-mask>
  </div>
  </div>
</template>

<script>
  import editList from './v-editList'
export default {
  inject: ["reload"],
  props: ["editType","editTitle","editList","projectId"],
  components:{
    'v-editList':editList
  },
  data() {
    return {
      isActive:false
    };
  },
  created() {},

  methods: {
    getRes(res){
      this.isActive = res
    }
  },
};
</script >

<style lang="scss" scoped>
.btn_edit {
    color: white;
      border-radius: 5px;
      width: 42.01px;
      height: 21.3px;
      border: none;
      margin-right: 10px;
      background: rgba(0, 186, 173, 1);
      &:active {
        box-shadow: 1px 1px 1px rgba(0, 186, 173, 1);
      }
      &:hover {
        cursor: pointer;
      }
    }

</style>