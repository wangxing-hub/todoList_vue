
/// <reference types="vite/vlient" />


declare module '*.ts' {
    import type { DefineComponnet } from 'vue'
    const componnet: DefineComponent<{}, {}, any>
    export default component
}
