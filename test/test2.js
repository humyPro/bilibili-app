/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (head == null) {
    return;
  }
  let current = head.next;
  let sorted = head;
  let preHead = new ListNode(1)
  preHead.next=head;
  while (current !== null) {
    if (sorted.val < current.val) {
      sorted = current;
    } else if(current.val<head.val){
      sorted.next=current.next;
      preHead.next=current
      current.next=head
      head=current
    }else{
      let item = preHead.next;
      while (item !== sorted && current.val<item.val) {
        item = item.next;
      }
      sorted.next = current.next;
      current.next = item.next;
      item.next=current;
    }
    current = current.next;
  }
  return preHead.next;
};

const head =new  ListNode(4)
head.next =new ListNode(2)
head.next.next =new ListNode(1)

head.next.next.next =new ListNode(3)
const res = insertionSortList(head)
console.log(res)
