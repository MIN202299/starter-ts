export const one = 1
export const two = 2

const flag = false

export function add(a: number, b: number) {
  if (flag)
    return a + b
}
