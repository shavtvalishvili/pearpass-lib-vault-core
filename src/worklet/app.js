import { workletLogger } from './utils/workletLogger'

let rpc
;(async () => {
  try {
    const { setupIPC, createRPC } = await import('./appCore.js')

    const ipc = setupIPC()
    rpc = createRPC(ipc)
    // Signal to the host process that the worklet is ready
    // eslint-disable-next-line no-console
    console.log('WORKLET_READY')
  } catch (error) {
    workletLogger.error('Fatal error in app initialization:', error)
  }
})()

export { rpc }
