<template>
<div>
    
    <button id="game" style="z-index: 2" @click.prevent="showRoles()">Roles</button>
    
    <transition v-if='showModal' name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
                <table class="table-sm table-hover table-dark">
                    <tbody style="overflow: scroll;">
                        <tr v-for="role in roles" :key="role.id">
                        <th><i :class="role.icon"></i></th>
                        <td>{{role.name}}</td>
                        <td style="width: 10px; overflow-y: scroll">{{role.desc}}</td>
                        
                        </tr>
                        
                    </tbody>
                </table>
                <footer>
                <button @click.prevent="closeModal()">Close</button>
                </footer>
              
            </div>
          </div>
        </div>
      </transition>
</div>
</template>
<script>
import {ROLES} from '../../../logic/roles'
export default {
    data(){
        return {
            showModal: false,
            roles: ROLES
        }
    },
    methods: {
        showRoles(){
            console.log('dsa')
            this.showModal = true

        },
        closeModal(){
            this.showModal = false;
        }
    }
}
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  overflow-y: scroll;
  width: 700px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #343a40;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>