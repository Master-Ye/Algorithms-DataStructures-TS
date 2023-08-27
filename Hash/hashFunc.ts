/**
 *key -> index
 *@param key
 *@param max 数组长度
 *@returns索引值
 *
 */

function hashFunc(key: string, max: number): number {
  let hashCode: number = 0;
  const length = key.length;
  for (let i = 0; i < length; i++) {
    hashCode = 31 * hashCode + key.charCodeAt(i); //霍纳算法
  }
  const index = hashCode % max;
  return index;
}
export { hashFunc };
