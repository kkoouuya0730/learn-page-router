import { StarFillIcon } from "@/ui/icon/StarFillIcon";
import { StarIcon } from "@/ui/icon/StarIcon";

type Props = {
  fill?: boolean;
};

/**
 * 星のコンポーネント
 * @param {boolean} fill - 塗りつぶしか否か
 */
export default function Star({ fill = false }: Props) {
  if (fill) return <StarFillIcon color="#fbbf24" />;
  return <StarIcon color="#fbbf24" />;
}
