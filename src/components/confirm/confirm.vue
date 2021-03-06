<template>
  <div :id="id" class="dialog" :style="dialogStyle">
      <div class="form">
        <div class="content" v-if="!isComponent">
            <template v-if="(content||'').constructor !== Array">
              {{content}}
            </template>
            <template v-for="(item, index) in content" v-if="(content||'').constructor === Array">
              {{item}}<br :key="index"/>
            </template>
        </div>
        <div class="content" v-if="isComponent">
          <mycomponent :item="item" :is="content"></mycomponent>
        </div>
        <div class="buttons" :class="[`buttons-${btnPosition}`]">
            <input v-if="showCancel" class="button cancel" type="button" :value="cancelTitle" @click="closeDialog"/>
            <input class="button" type="button" :value="$t('common.ok')" @click="ok"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    id: null,
    title: {
      type: String
    },
    width: {
      type: Number,
      default: 370
    },
    height: {
      type: Number
    },
    minHeight: {
      type: Number,
      default: 100
    },
    content: null,
    autoClose: {
      type: Boolean,
      default: false
    },
    delayTime: {
      type: Number,
      default: 10
    },
    btnPosition: {
      type: String,
      default: 'center'
    },
    isComponent: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    item: null,
    tempIds: {}
  },
  data () {
    return {
      interval: null,
      lastTime: this.delayTime
    }
  },
  computed: {
    cancelTitle () {
      if (this.autoClose === false) {
        return this.$t('otc_legal.otc_legal_cancel')
      }
      return `${this.$t('otc_legal.otc_legal_cancel')}(${this.lastTime}s)`
    },
    dialogStyle () {
      return {
        width: `${this.width}px`,
        height: this.height ? `${this.height}px` : `auto`,
        'min-height': `${this.minHeight}px`
      }
    }
  },
  created () {
    this.$nextTick(() => {
      if (this.autoClose) {
        this.interval = setInterval(() => {
          if (this.lastTime === 1) {
            clearInterval(this.interval)
            this.closeDialog()
            return
          }
          this.lastTime -= 1
        }, 1000)
      }
    })
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    closeDialog () {
      this.id && (delete this.tempIds[this.id])
      if (this.$parent) {
        this.$parent.$emit('removeDialog')
      } else {
        this.$emit('removeDialog')
      }
    },
    ok () {
      this.id && (delete this.tempIds[this.id])
      if (this.$parent) {
        this.$parent.$emit('okCallback')
        this.$parent.$emit('removeDialog')
      } else {
        this.$emit('okCallback')
        this.$emit('removeDialog')
      }
    }
  }
}
</script>

<style scoped>
.dialog{display:flex;justify-content:center;flex-flow:column;background-color:#F7F8FC;margin:0 20px;}
.form{display:flex;justify-content:center;align-items:center;flex-flow:column;padding:30px;}
.content{color:#333;font-size:16px;}
.buttons{margin-top:20px;display:flex;align-items:center;}
.buttons-center{align-self:center;}
.buttons-right{align-self:flex-end;}
.button{display:flex;justify-content:center;align-items:center;min-width:80px;height:30px;line-height:30px;color:#fff;background-color:#443f54;border-radius:4px;cursor:pointer;}
.button:hover{background-color:#201c2c;}
</style>
