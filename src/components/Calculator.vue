<template>
    <div class="insurance-calculator">
      <h2>旅遊保險試算</h2>
      
      <!-- 旅遊地點 -->
      <div class="section">
        <label for="destination">旅遊地點</label>
        <select v-model="destination" id="destination">
          <option value="日本">日本</option>
          <option value="韓國">韓國</option>
          <option value="美國">美國</option>
          <!-- 其他選項 -->
        </select>
      </div>
      
      <!-- 旅遊期間 -->
      <div class="section">
        <label>旅遊期間</label>
        <div class="inputs">
          <input type="number" v-model="startYear" placeholder="年" /> 年
          <input type="number" v-model="startMonth" placeholder="月" /> 月
          <input type="number" v-model="startDay" placeholder="日" /> 日
          <input type="number" v-model="startHour" placeholder="時" /> 時
          <input type="number" v-model="days" placeholder="天數" /> 天
        </div>
        <p>結束日期：{{ endDate }}</p>
      </div>
      
      <!-- 試算結果 -->
      <div class="section">
        <h3>試算結果</h3>
        <label for="insuranceAmount">保障內容</label>
        <select v-model="insuranceAmount" id="insuranceAmount">
          <option value="1500">1500萬</option>
          <option value="1000">1000萬</option>
          <option value="500">500萬</option>
        </select>
        <p>保險費用：{{ insuranceCost }} 元</p>
  
        <div>
          <h4>附加醫療</h4>
          <label>
            <input type="checkbox" v-model="extraInjuryCoverage" /> 傷害醫療
          </label>
          <label>
            <input type="checkbox" v-model="extraEmergencyCoverage" /> 海外突發疾病醫療
          </label>
          <label>
            <input type="checkbox" v-model="extraTransportCoverage" /> 海外醫療專機運送
          </label>
        </div>
      </div>
  
      <!-- 保費合計 -->
      <div class="section">
        <h3>保費合計：{{ totalCost }} 元</h3>
      </div>
  
      <!-- 投保按鈕 -->
      <button @click="submit">立即投保</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        destination: "日本",
        startYear: 114,
        startMonth: 1,
        startDay: 16,
        startHour: 22,
        days: 3,
        insuranceAmount: 1500,
        extraInjuryCoverage: false,
        extraEmergencyCoverage: false,
        extraTransportCoverage: false,
      };
    },
    computed: {
      endDate() {
        const startDate = new Date(
          this.startYear + 1911, // 民國年轉公元年
          this.startMonth - 1,
          this.startDay,
          this.startHour
        );
        startDate.setDate(startDate.getDate() + this.days);
        return `${startDate.getFullYear()}年${startDate.getMonth() + 1}月${startDate.getDate()}日 ${startDate.getHours()}:00`;
      },
      insuranceCost() {
        return this.insuranceAmount === 1500 ? 408 : this.insuranceAmount === 1000 ? 300 : 200;
      },
      totalCost() {
        let total = this.insuranceCost;
        if (this.extraInjuryCoverage) total += 131;
        if (this.extraEmergencyCoverage) total += 317;
        if (this.extraTransportCoverage) total += 165;
        return total;
      },
    },
    methods: {
      submit() {
        alert(`投保成功！總保費：${this.totalCost} 元`);
      },
    },
  };
  </script>
  
  <style>
  .insurance-calculator {
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  .section {
    margin-bottom: 20px;
  }
  .inputs input {
    width: 50px;
    margin-right: 5px;
  }
  </style>
  