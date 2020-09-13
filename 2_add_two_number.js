/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let cur = dummy;
  // 是否进位
  let carry = 0;

  while (l1 || l2) {
    let sum = 0; // 存储相加的结果
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry; //别忘了加进位

    cur.next = new ListNode(sum % 10); //个位
    sum >= 10 ? (carry = 1) : (carry = 0); //十位
    cur = cur.next;
  }
  // 最后的情况，有可能超过10
  if (carry === 1) {
    cur.next = new ListNode(1);
  }

  return dummy.next;
};
