import { useStyleTag } from '@vueuse/core'
import { computed, nextTick, ref } from 'vue'
import { waveInit } from '../utils/wave'

export function useWavesStore(amount: number = 7) {
  const waveOptions = {
    height: 200,
    width: 1600,
    segmentCount: 12,
    layerCount: amount,
    variance: 1.2,
  }

  const state = ref(waveInit(waveOptions))

  const cubicBeziers = [
    'cubic-bezier(.57,.21,.69,1.25)',
    'ease-in-out',
    'linear',
  ]

  const animationStyles = computed(() => state.value.map((wave, index) => {
    // Calculate the percentage step for each keyframe based on the number of animated paths.
    const percentageStep = 100 / (wave.animatedPath.length + 1)
    let keyframes = ''

    // Generate keyframes for each step in the animated path.
    wave.animatedPath.forEach((path, pathIndex) => {
      const percentage = percentageStep * (pathIndex + 1)
      keyframes += `
      ${percentage}% {
        d: path("${path}");
      }
    `
    })

    // Return the full CSS for the animation, including the initial and final states.
    return ` 
    .path-${index} {
      animation:pathAnim-${index} ${35 - index}s;
      animation-timing-function: ${cubicBeziers[index % 9]};
      animation-iteration-count: infinite;
    }
    @keyframes pathAnim-${index} {
      0% {
        d: path("${wave.d}");
      }
      ${keyframes}
      100% {
        d: path("${wave.d}");
      }
    }
  `
  }).join(''))

  nextTick(() => {
    useStyleTag(animationStyles)
  })

  return {
    state,
    waveOptions,
    animationStyles,
  }
}
