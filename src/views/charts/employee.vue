<template>
  <div class="app-container">
    <!-- 查询框 双向绑定 keyword-->
    <el-input
      v-model="keyword"
      placeholder="请输入关键字"
      clearable
      style="width:500px"
    />
    <!-- 搜索按钮 绑定点击事件 -->
    <el-button type="primary" icon="el-icon-search" @click="getEmployee()">搜索</el-button>
    <!-- data就是绑定数据用的 -->
    <el-table
      :data="dataEmployee"
      style="width: 100%"
    >
      <el-table-column
        label="部门"
        prop="department"
      />
      <el-table-column
        label="工号"
        prop="username"
      />
      <el-table-column
        label="姓名"
        prop="name"
      />
      <el-table-column width="100px" label="图像1">
        <template slot-scope="{row}">
          <el-popover placement="top-start" title="" trigger="hover">
            <img :src="row.imgUrl" alt="" style="width: 350px;height: 350px">
            <img slot="reference" :src="row.imgUrl" style="width: 30px;height: 30px">
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="手机号码"
        prop="phoneNo"
      />
      <el-table-column
        label="省份"
        prop="province"
      />
      <el-table-column
        label="城市"
        prop="cityName"
      />
      <el-table-column
        label="村庄"
        prop="village"
      />
      <el-table-column width="100px" label="图像2">
        <template slot-scope="scope">
          <el-popover placement="top-start" title="" trigger="hover">
            <img :src="scope.row.imgUrl" alt="" style="width: 350px;height: 350px">
            <img slot="reference" :src="scope.row.imgUrl" style="width: 30px;height: 30px">
          </el-popover>
        </template>
      </el-table-column>
      <!-- <el-table-column
        label="区号"
        prop="postCode"
      /> -->
      <el-table-column
        label="更新用户"
        prop="updateUser"
      />
    </el-table>
    <!-- 分页 -->
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getEmployee"
    />
    <!-- total总条数
     listQuery.page 当前页
     listQuery.limit 每页几条
     getDataLog 后买点击分页时候要回调的函数 -->

  </div>
</template>

<script>
// 这里要调用我使用的 api
// 括号里的是要使用的函数接口，多个的话逗号隔开
import { getEmployee } from '@/api/employee'
// 引入分页组件
import Pagination from '@/components/Pagination'

export default {
  // 这里需要把分页组件注册进来
  components: { Pagination },
  data() {
    return {
      // 搜索关键字
      keyword: '',
      // 数据条数
      total: 0,
      // 分页参数
      listQuery: {
        page: 1,
        limit: 10
      },
      // 列表数据
      dataEmployee: []
    }
  },
  // 这个是生命周期函数，这个时候是 data 和 methods 都初始化好了，具体看基础知识
  created() {
    this.getEmployee()
  },
  methods: {
    // 函数部分
    getEmployee() {
      // 参数
      this.listQuery = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        object: this.keyword
      }
      console.log(this.listQuery)
      // 调用上面引入的 api 里的 getDataLog
      getEmployee(this.listQuery).then(response => {
        console.log(response)
        // 返回值处理
        this.dataEmployee = []
        this.total = response.count
        // this.dataEmployee = response.data.items.slice(this.listQuery.limit * (this.listQuery.page - 1), this.listQuery.limit * this.listQuery.page)
        this.dataEmployee = response.data
        // 查询后要把关键字给清空
        this.keyword = ''
      })
    }
  }
}
</script>
