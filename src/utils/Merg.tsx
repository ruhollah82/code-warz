import { Player } from "../types/player";

const Merge = (arr: Player[], low: number, mid: number, high: number) => {
  const temp: Player[] = [];
  let i = low;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= high) {
    if (arr[i].score >= arr[j].score) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = arr[i++];
  }

  while (j <= high) {
    temp[k++] = arr[j++];
  }

  for (let t = 0; t < temp.length; t++) {
    arr[low + t] = temp[t];
  }
};

export default Merge;
