<script setup>
import QRCode from 'qrcode'
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  scale: { type: Number, default: 4 },
  color: { type: String, default: '#000000ff' },
  bgColor: { type: String, default: '#ffffffff' },
  errorLevel: {
    type: String,
    validator: value => ['L', 'M', 'Q', 'H'].includes(value),
    default: 'H',
  },
})

const canvasEl = ref(null)

async function generateQR() {
  if (!canvasEl.value)
    return

  try {
    await QRCode.toCanvas(canvasEl.value, props.text, {
      margin: 1,
      errorCorrectionLevel: props.errorLevel,
      scale: props.scale,
      color: {
        dark: props.color,
        light: props.bgColor,
      },
    })
  }
  catch (err) {
    console.error(err)
  }
}

watch(() => props.text, generateQR)
watch(() => props.size, generateQR)
watch(() => props.color, generateQR)
watch(() => props.bgColor, generateQR)
watch(() => props.errorLevel, generateQR)

onMounted(generateQR)
</script>

<template>
  <canvas ref="canvasEl" />
</template>
