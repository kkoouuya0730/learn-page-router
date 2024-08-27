export type ImgItem = {
  src: string;
};

const imgItems: ImgItem[] = [
  {
    src: "/images/coffee/coffee-2608864_1280.jpg",
  },
  {
    src: "/images/coffee/coffee-2608864_1280.jpg",
  },
  {
    src: "/images/coffee/coffee-2608864_1280.jpg",
  },
  {
    src: "/images/coffee/coffee-2608864_1280.jpg",
  },
];

// 共通化できる
export function getImgCardListItems(): Promise<ImgItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(imgItems);
    }, 5000);
  });
}
