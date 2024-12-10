import { Player } from "../types/player";
import Merge from "./Merg";

const MergSort = (arr: Player[], low: number, high: number) => {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);

    MergSort(arr, low, mid);
    MergSort(arr, mid + 1, high);

    Merge(arr, low, mid, high);
  }
};

export default MergSort;
