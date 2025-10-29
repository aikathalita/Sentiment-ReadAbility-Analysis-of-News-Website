<template>
  <transition name="fade">
    <div
      v-if="visible"
      ref="tooltip"
      class="fixed z-50 px-3 py-2 text-sm text-white bg-primary-purple rounded-md shadow-lg pointer-events-none whitespace-pre-line"
      :style="tooltipStyle"
    >
      {{ text }}
      <span
        class="absolute w-2 h-2 bg-primary-purple rotate-45"
        :style="arrowStyle"
      ></span>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { computePosition, offset, flip, shift, arrow, autoUpdate } from '@floating-ui/dom'

const props = defineProps({
  target: { type: String, required: true },
  text: { type: String, required: true },
  placement: { type: String, default: 'top' }, // top, bottom, left, right
})

const tooltip = ref(null)
const visible = ref(false)
const tooltipStyle = ref({})
const arrowStyle = ref({})

let targetEl = null
let cleanupAutoUpdate = null

// Tampilkan tooltip
const show = async () => {
  visible.value = true
  await nextTick()
  updatePosition()
}

// Sembunyikan tooltip
const hide = () => {
  visible.value = false
  if (cleanupAutoUpdate) {
    cleanupAutoUpdate()
    cleanupAutoUpdate = null
  }
}

// Hitung posisi tooltip menggunakan Floating UI
const updatePosition = () => {
  if (!tooltip.value || !targetEl) return

  // Aktifkan autoUpdate untuk melacak scroll & resize secara otomatis
  cleanupAutoUpdate = autoUpdate(targetEl, tooltip.value, async () => {
    const { x, y, middlewareData, placement } = await computePosition(
      targetEl,
      tooltip.value,
      {
        placement: props.placement,
        middleware: [
          offset(8), // jarak antar elemen dan tooltip
          flip(),    // otomatis pindah posisi jika keluar layar
          shift({ padding: 8 }), // geser agar tidak menabrak tepi
          arrow({ element: tooltip.value.querySelector('span') }),
        ],
      }
    )

    tooltipStyle.value = {
      left: `${x}px`,
      top: `${y}px`,
    }

    // Posisi panah berdasarkan hasil middleware arrow()
    const { x: arrowX, y: arrowY } = middlewareData.arrow || {}
    arrowStyle.value = {
      left: arrowX != null ? `${arrowX}px` : '',
      top: arrowY != null ? `${arrowY}px` : '',
      [getStaticSide(placement)]: '-4px',
    }
  })
}

// Menentukan sisi tetap panah berdasarkan posisi tooltip
function getStaticSide(placement) {
  return {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]]
}

onMounted(() => {
  targetEl = document.getElementById(props.target)
  if (!targetEl) return

  targetEl.addEventListener('mouseenter', show)
  targetEl.addEventListener('focus', show)
  targetEl.addEventListener('mouseleave', hide)
  targetEl.addEventListener('blur', hide)
})

onBeforeUnmount(() => {
  if (targetEl) {
    targetEl.removeEventListener('mouseenter', show)
    targetEl.removeEventListener('mouseleave', hide)
    targetEl.removeEventListener('focus', show)
    targetEl.removeEventListener('blur', hide)
  }
  if (cleanupAutoUpdate) cleanupAutoUpdate()
})

watch(() => props.text, () => nextTick(updatePosition))
</script>

<style scoped>
.bg-primary-purple {
  background-color: var(--primary-purple);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

span.rotate-45 {
  transform: rotate(45deg);
}
</style>
