export interface CakeItemData {
  id: number;
  name: string;
  cost: number;
  img: string;
  count: number;
}

interface OnCloseProps {
  onClose: () => void;
}
