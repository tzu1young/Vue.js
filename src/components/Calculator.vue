<script>
export default {
  data() {
    return {
      destination: "131", // 預設選擇日本
      startYear: 114,
      startMonth: 1,
      startDay: 16,
      startHour: 22,
      days: 3,
      insuranceAmount: 1000,
      extraInjuryCoverage: false,
      extraEmergencyCoverage: false,
      extraTransportCoverage: false,
    };
  },
  computed: {
    isOverseas() {
      return this.destination !== "098"; // 判斷是否為國內
    },
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
  if (this.insuranceAmount == 1000) {
      return 200 + this.days * 3;
    } else if (this.insuranceAmount == 700) {
      return 140 + this.days * 3;
    } else if (this.insuranceAmount == 500) {
      return 100 + this.days * 3;
    } else if (this.insuranceAmount == 300) {
      return 60 + this.days * 3;
    } else if (this.insuranceAmount == 100) {
      return 20 + this.days * 3;
    } else{
      return 0; // 預設值，防止意外情況
    }
  },
    totalCost() {
      let total = this.insuranceCost ;
      if (this.extraInjuryCoverage) total += Math.floor(total / 3);
      if (this.isOverseas) {
        if (this.extraEmergencyCoverage) total +=  Math.floor(total * 0.8);
        if (this.extraTransportCoverage) total +=  Math.floor(total / 2);
      }
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

<template>
  <div class="insurance-calculator">
    <h2>旅遊保險試算</h2>

    <!-- 旅遊地點 -->
    <div class="section">
      <label for="destination">旅遊地點</label>
      <select v-model="destination" id="destination">
        <option value="098">國內</option>
        <option value="131" selected="selected">日本</option>
        <option value="132">南韓</option>
        <option value="101">中國大陸</option>
        <option value="141">香港</option>
        <option value="142">澳門</option>
        <option value="140">東南亞</option>
        <option value="143">新加坡</option>
        <option value="144">馬來西亞</option>
        <option value="145">印尼</option>
        <option value="146">泰國</option>
        <option value="147">菲律賓</option>
        <option value="148">越南</option>
        <option value="149">緬甸</option>
        <option value="150">寮國</option>
        <option value="532">帛琉</option>
        <option value="152">柬埔寨</option>
        <option value="156">馬爾地夫</option>
        <option value="301">歐洲申根國家</option>
        <option value="302">歐洲非申根國家</option>
        <option value="212">美國</option>
        <option value="211">加拿大</option>
        <option value="520">紐西蘭</option>
        <option value="510">澳大利亞</option>
        <option value="999">其他</option>
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
        <option value="1000">1000萬</option>
        <option value="700">700萬</option>
        <option value="500">500萬</option>
        <option value="300">300萬</option>
        <option value="100">100萬</option>
        <option value="10">10萬</option>
      </select>
      <p>保險費用：{{ insuranceCost }} 元</p>

      <!-- 附加醫療 -->
      <div>
        <h4>附加醫療</h4>
        <label>
          <input type="checkbox" v-model="extraInjuryCoverage" /> 傷害醫療
        </label>
        <label v-if="isOverseas">
          <input type="checkbox" v-model="extraEmergencyCoverage" /> 海外突發疾病醫療
        </label>
        <label v-if="isOverseas">
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
