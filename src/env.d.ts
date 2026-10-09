/// <reference types="vite/client" />

// The original app queries the DOM loosely (element type is decided by the
// markup it renders), so querySelectorAll / getElementById are typed as `any`.
interface ParentNode {
  querySelectorAll(selectors: string): NodeListOf<any>
}
interface Document {
  getElementById(elementId: string): any
}
