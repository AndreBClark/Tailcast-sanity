export declare global {
  export interface Base {
    title: string
    subtitle: string
    description: string
  }

  export interface Feature extends Base {
    content: Content
  }

  type Content = CTA | List

  interface CTA {
    type: "cta"
    text: string
    action: (arg0: any) => any
  }

  interface List {
    type: "list"
    list: Item[]
  }

  interface Item {
    text: string
  }
}