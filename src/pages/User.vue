<template>
    <div>
        <ion-icon @click="edit(user.id)" :icon="create" slot="end"></ion-icon>
    </div>
</template>
<script>

export default {
  methods: {
    ...mapActions("users", {
      fetchUsers: "fetchUsers",
      deletUserAction: "deleteUser"
    }),
    deleteUser(id){
      this.deletUserAction(id);
    }
  },

};
</script>