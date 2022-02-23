<template>
  <div class="calendar">
    <el-date-picker
      v-model="datePicker"
      type="date"
      placeholder="Pick a day"
      format="YYYY/MM/DD"
      value-format="YYYY-MM-DD"
    >
    </el-date-picker>
    <el-input
      v-model="search"
      class="w-40 m-2"
      :prefix-icon="Search"
      placeholder="Search with phone"
      :disabled="!datePicker"
    />

    <p>{{ datePicker }}</p>
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !datePicker ||
            (data.phone.toLowerCase().includes(search.toLowerCase()) &&
              data.date.toLowerCase().includes(datePicker.toLowerCase()))
        )
      "
      style="width: 100%"
    >
      <!-- data.date.toLowerCase().includes(search.toLowerCase()) -->
      <el-table-column label="Date" prop="date" />
      <el-table-column label="Time" prop="time" />
      <el-table-column label="Phone" prop="phone" />
      <el-table-column label="Name" prop="name" />

      <el-table-column align="right">
        <template #default="scope">
          <el-button
            class="bg-red-500"
            size="small"
            type="danger"
            @click="
              (this.dialogVisible = true),
                (phoneID = scope.row.phone),
                (indexTable = scope.$index)
            "
          >
            Delete
          </el-button>
          <el-button
            size="small"
            @click="handleDetails(scope.$index, scope.row)"
            class="bg-green-500"
            type="primary"
            >Details</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-dialog v-model="dialogVisible" title="Delete" width="30%" center>
        <span>Do you want to delete the customer {{ phoneID }}</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>

            <el-button
              type="primary "
              class="bg-blue-500"
              @click="handleDelete()"
              >Confirm</el-button
            >
          </span>
        </template>
      </el-dialog>
      <el-dialog v-model="dialogFormVisible" title="Thông tin" width="30%">
        <Details :form="form" />
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

 <script setup >
import { Search } from "@element-plus/icons-vue";
import Details from "../componentChilds/Details.vue";
</script>
 
<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
      search: "",
      datePicker: "",
      dialogVisible: false,
      //delete
      phoneID: "",
      indexTable: "",
      dialogFormVisible: false,

      form: {},
    };
  },

  methods: {
    handleDetails(index, row) {
      // alert(row.phone + "" + index);
      this.dialogFormVisible = true;
      this.form = row;
    },

    handleDelete() {
      this.tableData = this.tableData.filter(
        (obj) => obj.phone !== this.phoneID
      );
      // api
      this.dialogVisible = false;
    },
  },

  // https://www.mockachino.com/spaces/942046cf-b597-40
  created() {
    axios
      .get(`https://www.mockachino.com/942046cf-b597-40/customer`)
      .then((response) => {
        this.tableData = response.data.customer;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
<style scoped>
.calendar {
  z-index: -1;
}
</style>